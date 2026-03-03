import { motion } from 'framer-motion'
import { ClipboardList, Sparkles, AlignCenter, Wrench } from 'lucide-react'
import type { ReactNode } from 'react'

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  delay: number
}

function ServiceCard({ icon, title, description, delay }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8, boxShadow: '0 25px 50px -12px rgba(0, 45, 91, 0.15)' }}
      className="p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white transition-all group cursor-pointer"
    >
      <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors mx-auto">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-primary mb-3 text-center">{title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed text-center">{description}</p>
    </motion.div>
  )
}

const services = [
  {
    icon: <ClipboardList size={28} />,
    title: 'General Dentistry',
    description: 'Routine check-ups, cleaning, and preventative care for lasting health.',
  },
  {
    icon: <Sparkles size={28} />,
    title: 'Cosmetic Procedures',
    description: 'Veneers, teeth whitening, and Hollywood smile design transformations.',
  },
  {
    icon: <AlignCenter size={28} />,
    title: 'Orthodontics',
    description: 'Modern braces and clear aligners to perfect your bite and alignment.',
  },
  {
    icon: <Wrench size={28} />,
    title: 'Dental Implants',
    description: 'Advanced restoration techniques for permanent, natural-looking tooth replacement.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-black text-primary mb-4">World-Class Services</h2>
          <p className="text-slate-500 max-w-2xl mx-auto mb-16">
            Discover our range of premium dental procedures tailored for your unique smile.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
