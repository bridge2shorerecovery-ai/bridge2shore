import { useState, useEffect } from 'react'
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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2 bg-white/95 backdrop-blur-md shadow-sm' : 'py-4 bg-white shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Logo — smaller text on mobile */}
        <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-2.5 select-none">
          <Logo size="md" mobileTextSize="0.85rem" />
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
                  isActive ? 'text-[#006a89]' : 'text-[#1a3d2b] hover:text-[#006a89]'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Hamburger — mobile only */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 p-2"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
        >
          <span
            className={`block w-6 h-0.5 bg-[#1a3d2b] transition-all duration-200 ${open ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#1a3d2b] transition-all duration-200 ${open ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#1a3d2b] transition-all duration-200 ${open ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden w-full bg-white shadow-md">
          {NAV_LINKS.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block w-full px-6 py-4 text-base font-medium border-b border-[#e8f2ec] transition-colors ${
                  isActive ? 'text-[#006a89] bg-[#e6f4f8]' : 'text-[#1a3d2b] hover:bg-[#e8f2ec]'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  )
}
