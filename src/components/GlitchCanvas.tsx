import { useEffect, useRef } from 'react'

type Props = {
  reducedMotion: boolean
  tone?: 'green' | 'pink'
}

function mulberry32(seed: number) {
  return () => {
    let t = (seed += 0x6d2b79f5)
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

export default function GlitchCanvas({ reducedMotion, tone = 'green' }: Props) {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: false })
    if (!ctx) return

    let frame = 0
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
      const seed = reducedMotion ? 47 : Math.floor(time / 2300) + 47
      const random = mulberry32(seed)

      ctx.fillStyle = tone === 'pink' ? '#351026' : '#001506'
      ctx.fillRect(0, 0, w, h)

      const base = tone === 'pink' ? [238, 66, 174] : [10, 220, 49]
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
          ctx.fillStyle = `rgba(${base[0]}, ${base[1]}, ${base[2]}, ${alpha})`
          ctx.fillRect(x, y, bw, bh)
        }
      }

      for (let i = 0; i < 900; i += 1) {
        const x = random() * w
        const y = random() * h
        const a = random() * 0.2
        const s = random() < 0.9 ? 1 : 2
        ctx.fillStyle = tone === 'pink' ? `rgba(255,220,244,${a})` : `rgba(184,255,183,${a})`
        ctx.fillRect(x, y, s, s)
      }

      ctx.fillStyle = 'rgba(0,0,0,.22)'
      for (let y = 0; y < h; y += 5) ctx.fillRect(0, y, w, 1)

      frame += 1
      if (!reducedMotion) raf = window.requestAnimationFrame(loop)
    }

    const loop = (time: number) => {
      if (time - lastPaint > 240) {
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
