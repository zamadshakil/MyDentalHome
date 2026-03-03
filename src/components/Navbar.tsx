import { useState, useCallback, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Menu, X } from 'lucide-react'
import { useNavigate, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Results', href: '#results' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const menuRef = useRef<HTMLDivElement>(null)

  /* Close mobile menu on Escape key */
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileOpen) setMobileOpen(false)
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [mobileOpen])

  /* Prevent body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileOpen(false)

    const id = href.replace('#', '')

    const scrollToSection = () => {
      const el = document.getElementById(id)
      if (el) {
        const navHeight = 80
        const top = el.getBoundingClientRect().top + window.scrollY - navHeight
        window.scrollTo({ top, behavior: 'smooth' })
      }
    }

    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(scrollToSection, 300)
    } else {
      // Delay scroll so mobile menu close animation doesn't block it
      setTimeout(scrollToSection, 350)
    }
  }, [navigate, location.pathname])

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault()
              if (location.pathname !== '/') navigate('/')
              else window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="flex items-center gap-2 sm:gap-3"
            aria-label="My Dental Home — go to homepage"
          >
            <div className="p-1.5 sm:p-2 bg-primary rounded-lg text-white flex items-center justify-center" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-7 sm:h-7">
                <path d="M12 5.5C10.5 4 7.5 4 6 5.5S4 9 5.5 10.5L12 17l6.5-6.5C20 9 20 7 18 5.5S13.5 4 12 5.5z" />
                <line x1="12" y1="17" x2="12" y2="22" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-primary uppercase">My Dental Home</span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.2em] text-accent font-semibold uppercase">Dr. Faraz Sadiq</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-semibold text-primary hover:text-accent transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:03278149889"
              className="bg-primary text-white px-5 lg:px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
            >
              <Phone size={14} aria-hidden="true" />
              0327 8149889
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-primary hover:bg-slate-50 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-menu"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav with backdrop */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed inset-0 top-16 bg-black/30 z-40"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
            {/* Menu panel */}
            <motion.div
              ref={menuRef}
              id="mobile-nav-menu"
              role="menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-white border-t border-slate-100 relative z-50"
            >
              <div className="px-4 py-5 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    role="menuitem"
                    className="flex items-center text-base font-semibold text-primary hover:text-accent hover:bg-accent/5 transition-colors rounded-xl px-4 py-3.5"
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-2">
                  <a
                    href="tel:03278149889"
                    role="menuitem"
                    className="bg-primary text-white px-6 py-3.5 rounded-xl text-base font-bold flex items-center justify-center gap-2 w-full active:scale-[0.98] transition-transform"
                  >
                    <Phone size={16} aria-hidden="true" />
                    Call 0327 8149889
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}
