import { motion } from 'framer-motion'
import { Instagram, Facebook } from 'lucide-react'

const transformations = [
  {
    title: 'Full Mouth Reconstruction',
    subtitle: 'Complete cosmetic smile makeover',
    gradient: 'from-accent/30 via-primary/60 to-bg-dark',
    icon: '🦷',
  },
  {
    title: 'Porcelain Veneers',
    subtitle: 'Natural looking aesthetic enhancement',
    gradient: 'from-primary/40 via-accent/40 to-primary/80',
    icon: '✨',
  },
  {
    title: 'Invisalign Treatment',
    subtitle: 'Discreet orthodontic straightening',
    gradient: 'from-bg-dark via-primary/70 to-accent/30',
    icon: '😁',
  },
]

export default function Results() {
  return (
    <section id="results" className="py-24 bg-primary text-white overflow-hidden">
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
            <h2 className="text-4xl font-black mb-4">Real Stories, Real Results</h2>
            <p className="text-slate-300 max-w-xl text-lg">
              See the life-changing transformations we've performed for our valued patients.
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/drfarazsadiq/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all"
            >
              <Instagram size={22} />
            </a>
            <a
              href="https://www.facebook.com/p/My-Dental-Home-61572385924724/"
              target="_blank"
              rel="noopener noreferrer"
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
              className="relative group aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer"
            >
              {/* Gradient background instead of image */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />
              
              {/* Pattern overlay for depth */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `radial-gradient(circle at 20% 50%, rgba(197, 160, 89, 0.3) 0%, transparent 50%),
                                  radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 40%)`
              }} />

              {/* Center icon */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-6xl mb-4 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">{item.icon}</span>
                <div className="text-center px-6">
                  <p className="text-white/40 text-sm font-semibold uppercase tracking-widest">Before & After</p>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
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
