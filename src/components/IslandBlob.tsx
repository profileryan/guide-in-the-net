type Props = {
  className?: string
  variant?: 1 | 2 | 3
}

const paths = {
  1: 'M20,84 C9,50 29,10 67,12 C105,13 130,42 121,80 C113,115 79,137 45,124 C30,118 25,103 20,84 Z',
  2: 'M12,65 C17,28 49,7 82,21 C114,35 135,63 119,95 C105,123 67,132 38,112 C17,98 8,84 12,65 Z',
  3: 'M24,31 C43,7 82,5 110,28 C136,49 132,90 108,113 C83,136 45,128 24,104 C4,81 7,52 24,31 Z',
}

export default function IslandBlob({ className = '', variant = 1 }: Props) {
  const p = paths[variant]
  return (
    <svg className={`island-blob ${className}`} viewBox="0 0 140 140" aria-hidden="true">
      <defs>
        <linearGradient id={`blobFill${variant}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#b5ff6a" stopOpacity=".34" />
          <stop offset=".55" stopColor="#6f8d19" stopOpacity=".2" />
          <stop offset="1" stopColor="#071106" stopOpacity=".56" />
        </linearGradient>
      </defs>
      <path d={p} fill={`url(#blobFill${variant})`} stroke="rgba(255,255,255,.35)" strokeWidth=".75" />
      {[0, 1, 2, 3].map((n) => (
        <path
          key={n}
          d={p}
          fill="none"
          stroke="rgba(255,255,255,.58)"
          strokeWidth=".8"
          transform={`translate(70 70) scale(${0.89 - n * 0.09}) translate(-70 -70)`}
        />
      ))}
    </svg>
  )
}
