import { Instagram, Facebook, Linkedin } from 'lucide-react'
import { Link } from 'react-router-dom'

const quickLinks = [
  { label: 'Our Services', href: '#services' },
  { label: 'Before & After', href: '#results' },
  { label: 'About Dr. Sadiq', href: '#about' },
  { label: 'Contact Us', href: '#contact' },
]

const socials = [
  { icon: <Instagram size={18} />, href: 'https://www.instagram.com/drfarazsadiq/', label: 'Follow us on Instagram' },
  { icon: <Facebook size={18} />, href: 'https://www.facebook.com/p/My-Dental-Home-61572385924724/', label: 'Visit us on Facebook' },
  { icon: <Linkedin size={18} />, href: 'https://pk.linkedin.com/in/dr-faraz-sadiq-4a3b69263', label: 'Connect on LinkedIn' },
]

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 pt-12 sm:pt-16 pb-6 sm:pb-8" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-10 sm:mb-16">
          {/* Brand */}
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="p-1.5 sm:p-2 bg-primary rounded-lg text-white flex items-center justify-center" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-5.5 sm:h-5.5">
                  <path d="M12 5.5C10.5 4 7.5 4 6 5.5S4 9 5.5 10.5L12 17l6.5-6.5C20 9 20 7 18 5.5S13.5 4 12 5.5z" />
                  <line x1="12" y1="17" x2="12" y2="22" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold tracking-tight text-primary uppercase">My Dental Home</span>
                <span className="text-[9px] sm:text-[10px] tracking-[0.2em] text-accent font-semibold uppercase">Dr. Faraz Sadiq</span>
              </div>
            </div>
            <p className="text-slate-500 max-w-sm text-sm sm:text-base leading-relaxed">
              Dedicated to providing Lahore's highest standard of dental care with a personalized, gentle touch. Your oral health and aesthetic confidence are our top priorities.
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer navigation">
            <h4 className="font-bold text-primary mb-4 sm:mb-6 text-sm sm:text-base">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-slate-500 hover:text-accent transition-colors text-sm sm:text-base py-1 inline-block">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Follow Us */}
          <div>
            <h4 className="font-bold text-primary mb-4 sm:mb-6 text-sm sm:text-base">Follow Us</h4>
            <div className="flex gap-3 sm:gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-11 h-11 sm:w-10 sm:h-10 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-primary hover:bg-primary hover:text-white active:scale-95 transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-100 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-slate-400 text-xs sm:text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} My Dental Home by Dr. Faraz Sadiq. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-slate-400 text-xs sm:text-sm font-medium">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors py-1">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-primary transition-colors py-1">Terms of Service</Link>
            <span className="hidden sm:inline">Bahria Town, Lahore</span>
            <a href="tel:03278149889" className="hover:text-primary transition-colors py-1">0327 8149889</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
