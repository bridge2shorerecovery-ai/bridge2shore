import { useState } from 'react'

export default function DevBanner() {
  const [dismissed, setDismissed] = useState(false)
  if (dismissed) return null

  return (
    <div className="relative z-[60] bg-[#006a89] text-white text-sm py-2.5 px-4">
      <p className="text-center pr-8">
        This website is currently under development and not yet live. For inquiries contact{' '}
        <a
          href="mailto:info@bridge2shore.ca"
          className="underline underline-offset-2 hover:text-blue-100 transition-colors"
        >
          info@bridge2shore.ca
        </a>
      </p>
      <button
        onClick={() => setDismissed(true)}
        aria-label="Dismiss banner"
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded hover:bg-white/20 transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  )
}
