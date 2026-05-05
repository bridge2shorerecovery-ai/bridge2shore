export default function Logo({ variant = 'dark', size = 'md' }) {
  const textColor = variant === 'light' ? '#ffffff' : '#1a3d2b'
  const iconColor = '#006a89'

  const iconW = size === 'sm' ? 38 : size === 'lg' ? 56 : 46
  const iconH = Math.round(iconW * 0.667)
  const textClass =
    size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-xl' : 'text-base'

  return (
    <div className="flex items-center gap-2.5 select-none">
      <svg
        width={iconW}
        height={iconH}
        viewBox="0 0 48 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Road deck */}
        <rect x="2" y="22.5" width="44" height="3" rx="0.75" fill={iconColor} />
        {/* Left tower */}
        <rect x="11" y="6.5" width="2.75" height="16" rx="0.5" fill={iconColor} />
        {/* Right tower */}
        <rect x="34.25" y="6.5" width="2.75" height="16" rx="0.5" fill={iconColor} />
        {/* Left approach cable */}
        <line
          x1="2"
          y1="14"
          x2="12.375"
          y2="7"
          stroke={iconColor}
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        {/* Main catenary span */}
        <path
          d="M12.375 7 Q24 14.5 35.625 7"
          stroke={iconColor}
          strokeWidth="1.6"
          fill="none"
        />
        {/* Right approach cable */}
        <line
          x1="35.625"
          y1="7"
          x2="46"
          y2="14"
          stroke={iconColor}
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        {/* Suspender wires */}
        <line x1="15"   y1="8.8"  x2="15"   y2="22.5" stroke={iconColor} strokeWidth="0.85" opacity="0.8" />
        <line x1="18.5" y1="10.5" x2="18.5" y2="22.5" stroke={iconColor} strokeWidth="0.85" opacity="0.8" />
        <line x1="21.5" y1="11.6" x2="21.5" y2="22.5" stroke={iconColor} strokeWidth="0.85" opacity="0.8" />
        <line x1="24"   y1="12"   x2="24"   y2="22.5" stroke={iconColor} strokeWidth="0.85" opacity="0.8" />
        <line x1="26.5" y1="11.6" x2="26.5" y2="22.5" stroke={iconColor} strokeWidth="0.85" opacity="0.8" />
        <line x1="29.5" y1="10.5" x2="29.5" y2="22.5" stroke={iconColor} strokeWidth="0.85" opacity="0.8" />
        <line x1="33"   y1="8.8"  x2="33"   y2="22.5" stroke={iconColor} strokeWidth="0.85" opacity="0.8" />
        {/* Water reflection */}
        <path
          d="M2 28.5 Q12 26.5 24 28.5 Q36 30.5 46 28.5"
          stroke={iconColor}
          strokeWidth="1"
          fill="none"
          opacity="0.4"
        />
      </svg>
      <div
        className="leading-none whitespace-nowrap"
        style={{ color: textColor, fontWeight: 700, fontSize: size === 'sm' ? '0.875rem' : size === 'lg' ? '1.25rem' : '1.25rem' }}
      >
        Bridge to Shore Recovery Services
      </div>
    </div>
  )
}
