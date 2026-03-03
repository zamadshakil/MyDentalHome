import { Instagram, Facebook, Linkedin } from 'lucide-react'

const quickLinks = [
  { label: 'Our Services', href: '#services' },
  { label: 'Before & After', href: '#results' },
  { label: 'About Dr. Sadiq', href: '#about' },
  { label: 'Contact Us', href: '#contact' },
]

const socials = [
  { icon: <Instagram size={18} />, href: 'https://www.instagram.com/drfarazsadiq/', label: 'Instagram' },
  { icon: <Facebook size={18} />, href: 'https://www.facebook.com/p/My-Dental-Home-61572385924724/', label: 'Facebook' },
  { icon: <Linkedin size={18} />, href: 'https://pk.linkedin.com/in/dr-faraz-sadiq-4a3b69263', label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary rounded-lg text-white flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5.5C10.5 4 7.5 4 6 5.5S4 9 5.5 10.5L12 17l6.5-6.5C20 9 20 7 18 5.5S13.5 4 12 5.5z" />
                  <line x1="12" y1="17" x2="12" y2="22" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-primary uppercase">My Dental Home</span>
                <span className="text-[10px] tracking-[0.2em] text-accent font-semibold uppercase">Dr. Faraz Sadiq</span>
              </div>
            </div>
            <p className="text-slate-500 max-w-sm">
              Dedicated to providing the highest standard of dental care with a personalized touch. Your oral health and aesthetic comfort are our top priorities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-primary mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-slate-500 hover:text-accent transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="font-bold text-primary mb-6">Follow Us</h4>
            <div className="flex gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} My Dental Home by Dr. Faraz Sadiq. All rights reserved.
          </p>
          <div className="flex gap-6 text-slate-400 text-sm font-medium">
            <span>Gulberg, Lahore</span>
            <a href="tel:03278149889" className="hover:text-primary transition-colors">0327 8149889</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
