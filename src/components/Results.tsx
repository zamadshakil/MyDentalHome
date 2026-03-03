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
    <section id="results" className="py-24 bg-primary text-white overflow-hidden" aria-label="Patient Results and Transformations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-left">
            <h2 className="text-4xl font-black mb-4">Real Patients, Real Transformations</h2>
            <p className="text-slate-300 max-w-xl text-lg">
              Discover the life-changing smile makeovers we've crafted for our valued patients at My Dental Home.
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/drfarazsadiq/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Dr. Faraz Sadiq on Instagram"
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all"
            >
              <Instagram size={22} />
            </a>
            <a
              href="https://www.facebook.com/p/My-Dental-Home-61572385924724/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit My Dental Home on Facebook"
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all"
            >
              <Facebook size={22} />
            </a>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {transformations.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group aspect-4/5 rounded-3xl overflow-hidden cursor-pointer"
            >
              {/* Result image */}
              <img
                src={item.image}
                alt={`${item.title} — before and after result at My Dental Home`}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <div>
                  <p className="font-bold text-lg">{item.title}</p>
                  <p className="text-sm text-slate-300">{item.subtitle}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
