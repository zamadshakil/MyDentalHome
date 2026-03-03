import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Results', href: '#results' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="p-2 bg-primary rounded-lg text-white flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5.5C10.5 4 7.5 4 6 5.5S4 9 5.5 10.5L12 17l6.5-6.5C20 9 20 7 18 5.5S13.5 4 12 5.5z" />
                <line x1="12" y1="17" x2="12" y2="22" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-primary uppercase">My Dental Home</span>
              <span className="text-[10px] tracking-[0.2em] text-accent font-semibold uppercase">Dr. Faraz Sadiq</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-primary hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:03278149889"
              className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-opacity-90 transition-all shadow-lg shadow-primary/20"
            >
              <Phone size={14} />
              0327 8149889
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-primary" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-white border-t border-slate-100"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-sm font-semibold text-primary hover:text-accent transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:03278149889"
                className="bg-primary text-white px-6 py-3 rounded-full text-sm font-bold flex items-center justify-center gap-2 w-full"
              >
                <Phone size={14} />
                0327 8149889
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
