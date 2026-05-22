export default function Logo({ size = 120 }: { size?: number }) {
  return (
    <svg viewBox="0 0 200 200" width={size} height={size}>
      <defs>
        <linearGradient id="logoGrad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#a78bfa" />
        </linearGradient>
      </defs>
      <g transform="translate(50, 15) scale(1)">
        <path d="M50 15 L85 65 L65 65 L50 35 L35 65 L15 65 Z" fill="url(#logoGrad)" />
        <polygon points="50,42 58,58 50,74 42,58" fill="#ffffff" />
        <circle cx="50" cy="84" r="3" fill="#a78bfa" />
      </g>
      <text x="100" y="145" fill="currentColor" fontSize="20" fontWeight="700" textAnchor="middle" letterSpacing="3" fontFamily="sans-serif">fenyxn</text>
      <text x="100" y="163" fill="#64748b" fontSize="7" fontWeight="600" textAnchor="middle" letterSpacing="4" fontFamily="sans-serif">RISING FROM DATA</text>
    </svg>
  );
}
