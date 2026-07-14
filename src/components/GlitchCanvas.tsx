import { useEffect, useRef } from 'react'

type Tone = 'green' | 'pink' | 'blue' | 'yellow'

type Props = {
  reducedMotion: boolean
  tone?: Tone
}

function mulberry32(seed: number) {
  return () => {
    let t = (seed += 0x6d2b79f5)
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const toneConfig: Record<Tone, { bg: string; base: [number, number, number]; speck: string }> = {
  green: { bg: '#001506', base: [10, 220, 49], speck: '184,255,183' },
  pink: { bg: '#351026', base: [238, 66, 174], speck: '255,220,244' },
  blue: { bg: '#0b1bb7', base: [109, 132, 255], speck: '234,240,255' },
  yellow: { bg: '#2a2100', base: [241, 197, 29], speck: '255,242,181' },
}

export default function GlitchCanvas({ reducedMotion, tone = 'green' }: Props) {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: false })
    if (!ctx) return

    let raf = 0
    let lastPaint = 0

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2)
      const rect = canvas.getBoundingClientRect()
      canvas.width = Math.max(1, Math.round(rect.width * ratio))
      canvas.height = Math.max(1, Math.round(rect.height * ratio))
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
    }

    const draw = (time = 0) => {
      const rect = canvas.getBoundingClientRect()
      const w = rect.width
      const h = rect.height
      const seed = reducedMotion ? 47 : Math.floor(time / 850) + 47
      const random = mulberry32(seed)
      const config = toneConfig[tone]

      ctx.fillStyle = config.bg
      ctx.fillRect(0, 0, w, h)

      const bands = Math.ceil(h / 16)
      for (let i = 0; i < bands; i += 1) {
        if (random() < 0.36) continue
        const y = i * 16 + Math.floor(random() * 8)
        const bh = 3 + Math.floor(random() * 18)
        const count = 1 + Math.floor(random() * 5)
        for (let j = 0; j < count; j += 1) {
          const x = Math.floor(random() * w)
          const bw = 18 + Math.floor(random() * Math.max(28, w * 0.46))
          const alpha = 0.08 + random() * 0.28
          ctx.fillStyle = `rgba(${config.base[0]}, ${config.base[1]}, ${config.base[2]}, ${alpha})`
          ctx.fillRect(x, y, bw, bh)
        }
      }

      for (let i = 0; i < 900; i += 1) {
        const x = random() * w
        const y = random() * h
        const a = random() * 0.2
        const s = random() < 0.9 ? 1 : 2
        ctx.fillStyle = `rgba(${config.speck},${a})`
        ctx.fillRect(x, y, s, s)
      }

      ctx.fillStyle = 'rgba(0,0,0,.22)'
      for (let y = 0; y < h; y += 5) ctx.fillRect(0, y, w, 1)

      if (!reducedMotion) raf = window.requestAnimationFrame(loop)
    }

    const loop = (time: number) => {
      if (time - lastPaint > 110) {
        draw(time)
        lastPaint = time
      } else {
        raf = window.requestAnimationFrame(loop)
      }
    }

    resize()
    draw()
    if (!reducedMotion) raf = window.requestAnimationFrame(loop)
    window.addEventListener('resize', resize)

    return () => {
      window.removeEventListener('resize', resize)
      window.cancelAnimationFrame(raf)
    }
  }, [reducedMotion, tone])

  return <canvas ref={ref} className="glitch-canvas" aria-hidden="true" />
}
