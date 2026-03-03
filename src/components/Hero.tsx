import { motion } from 'framer-motion'
import { ArrowRight, Phone, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24" aria-label="Welcome to My Dental Home">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            className="z-10"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-bold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" aria-hidden="true" />
              Now Accepting New Patients in Bahria Town, Lahore
            </div>

            <h1 className="text-5xl lg:text-7xl font-black text-primary leading-[1.1] mb-6">
              Your Smile Deserves The <span className="text-accent">Best</span> Care
            </h1>

            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl">
              Where luxury meets clinical excellence. Bespoke treatments — from dental implants to Hollywood smiles — using state-of-the-art technology by Dr. Faraz Sadiq.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                className="bg-primary text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:shadow-xl transition-all group cursor-pointer"
              >
                <span>Book Free Consultation</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="tel:03278149889"
                className="border-2 border-slate-200 text-primary px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:bg-slate-50 transition-all"
              >
                <Phone size={18} className="text-accent" />
                Call 0327 8149889
              </motion.a>
            </div>

            {/* Trust signal */}
            <div className="mt-12 flex items-center gap-6 border-t border-slate-100 pt-8">
              <div className="flex -space-x-3">
                {[
                  'bg-gradient-to-br from-accent/40 to-primary/30',
                  'bg-gradient-to-br from-primary/30 to-accent/40',
                  'bg-gradient-to-br from-accent/50 to-primary/20',
                ].map((bg, i) => (
                  <div key={i} className={`w-12 h-12 rounded-full border-4 border-white ${bg} flex items-center justify-center`}>
                    <span className="text-white text-xs font-bold">{['FS','AK','MR'][i]}</span>
                  </div>
                ))}
              </div>
              <div>
                <div className="flex text-accent">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="#c5a059" strokeWidth={0} />
                  ))}
                </div>
                <p className="text-sm font-medium text-slate-500">Trusted by 500+ happy patients</p>
              </div>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-4/5">
              {/* Background image */}
              <img
                src="/images/Clinic.jpg"
                alt="My Dental Home — premium dental clinic interior in Bahria Town, Lahore"
                className="absolute inset-0 w-full h-full object-cover"
                loading="eager"
                fetchPriority="high"
              />
              {/* Dark overlay for text readability while keeping clinic visible */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-primary/50 to-primary/40" />

              {/* Text content on top — pushed up to avoid overlapping bottom card */}
              <div className="relative w-full flex-1 flex flex-col items-center justify-center px-6 pt-6 pb-28 text-center z-10 text-shadow-hero">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center mb-4 sm:mb-6 border border-accent/40 shadow-lg">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#c5a059" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5.5C10.5 4 7.5 4 6 5.5S4 9 5.5 10.5L12 17l6.5-6.5C20 9 20 7 18 5.5S13.5 4 12 5.5z" />
                    <line x1="12" y1="17" x2="12" y2="22" />
                  </svg>
                </div>
                <h3 className="text-white text-2xl sm:text-3xl font-black tracking-tight mb-1 drop-shadow-lg">MY DENTAL HOME</h3>
                <p className="text-accent text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3 sm:mb-4 drop-shadow-md">Premium Care</p>
                <div className="w-12 h-px bg-accent/60 mb-3 sm:mb-4" />
                <p className="text-white text-xs sm:text-sm max-w-xs font-medium drop-shadow-md">Precision dentistry meets personalized luxury — your comfort is our commitment</p>
              </div>

              {/* Glass overlay at bottom */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 glass-effect p-4 sm:p-6 rounded-2xl border border-white/20 z-20">
                <p className="text-primary font-bold text-sm sm:text-base">Premium Clinic Facility</p>
                <p className="text-slate-600 text-xs sm:text-sm">120/A, Commercial Area Sector C, Bahria Town, Lahore</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
