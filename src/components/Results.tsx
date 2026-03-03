import { motion } from 'framer-motion'
import { Instagram, Facebook } from 'lucide-react'

const transformations = [
  {
    title: 'Full Mouth Reconstruction',
    subtitle: 'Complete cosmetic smile makeover restoring function and beauty',
    image: '/images/FullMouthRestorationResized.jpg',
  },
  {
    title: 'Porcelain Veneers',
    subtitle: 'Ultra-thin shells for a naturally flawless smile transformation',
    image: '/images/Porcelain Veneers.webp',
  },
  {
    title: 'Invisalign Treatment',
    subtitle: 'Crystal-clear aligners for discreet orthodontic straightening',
    image: '/images/Invisalign Treatment.jpg',
  },
]

export default function Results() {
  return (
    <section id="results" className="py-16 sm:py-24 bg-primary text-white overflow-hidden" aria-labelledby="results-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-16 gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-left">
            <h2 id="results-heading" className="text-2xl sm:text-4xl font-black mb-2 sm:mb-4">Real Patients, Real Transformations</h2>
            <p className="text-slate-300 max-w-xl text-sm sm:text-lg">
              Discover the life-changing smile makeovers we've crafted for our valued patients at My Dental Home.
            </p>
          </div>
          <div className="flex gap-3 sm:gap-4">
            <a
              href="https://www.instagram.com/drfarazsadiq/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Dr. Faraz Sadiq on Instagram (opens in new tab)"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary active:scale-95 transition-all"
            >
              <Instagram size={20} aria-hidden="true" />
            </a>
            <a
              href="https://www.facebook.com/p/My-Dental-Home-61572385924724/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit My Dental Home on Facebook (opens in new tab)"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary active:scale-95 transition-all"
            >
              <Facebook size={20} aria-hidden="true" />
            </a>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {transformations.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer"
            >
              {/* Result image */}
              <img
                src={item.image}
                alt={`${item.title} — before and after result at My Dental Home`}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />

              {/* Overlay — always visible on mobile, hover-only on desktop */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5 sm:p-6 md:p-8">
                <div>
                  <p className="font-bold text-sm sm:text-base md:text-lg">{item.title}</p>
                  <p className="text-[11px] sm:text-xs md:text-sm text-slate-300 mt-0.5">{item.subtitle}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
