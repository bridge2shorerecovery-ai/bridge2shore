import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Logo from './Logo'

const NAV_LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/services', label: 'Our Services' },
  { to: '/partnerships', label: 'Our Partnerships' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact Us' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const menuRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Close menu on outside click
  useEffect(() => {
    if (!open) return
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [open])

  return (
    <header
      ref={menuRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-2 bg-white/95 backdrop-blur-md shadow-sm'
          : 'py-4 bg-white shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link to="/" onClick={() => setOpen(false)}>
          <Logo size="md" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? 'text-[#006a89]'
                    : 'text-[#1a3d2b] hover:text-[#006a89]'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile hamburger button */}
        <button
          className="md:hidden p-2 rounded-md text-[#1a3d2b] hover:bg-[#e8f2ec] transition-colors"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="bg-white border-t border-gray-100 shadow-lg">
          {NAV_LINKS.map(({ to, label, end }, i) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-center justify-between px-6 py-4 text-base font-medium transition-colors border-b border-gray-50 last:border-b-0 ${
                  isActive
                    ? 'text-[#006a89] bg-[#e6f4f8]'
                    : 'text-[#1a3d2b] hover:text-[#006a89] hover:bg-[#e8f2ec]'
                }`
              }
            >
              {label}
              <svg className="w-4 h-4 opacity-40" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
