import { motion } from 'framer-motion'
import {
  Zap, Layers, Smile, Crown, CircleDot, Sparkles,
  AlignCenter, Sun, ShieldCheck, Star, Scissors, Aperture,
  Cpu, Link, Disc, Heart
} from 'lucide-react'
import type { ReactNode } from 'react'

/* ── Main Services ── */
interface ServiceItem {
  icon: ReactNode
  title: string
  description: string
}

const mainServices: ServiceItem[] = [
  {
    icon: <Zap size={26} />,
    title: 'Painless Root Canal',
    description: 'Advanced rotary endodontics with local anesthesia for a comfortable, anxiety-free experience. We preserve your natural tooth with precision and care.',
  },
  {
    icon: <Layers size={26} />,
    title: 'Composite / Laser Filling',
    description: 'Tooth-colored composite restorations using laser technology for minimal drilling, maximum comfort, and flawless aesthetics.',
  },
  {
    icon: <Smile size={26} />,
    title: 'Digital Smile Design',
    description: 'Preview your dream smile before treatment begins. Using digital imaging to plan and craft your perfect, personalized smile transformation.',
  },
  {
    icon: <Crown size={26} />,
    title: 'Zirconia Crown',
    description: 'Premium-grade zirconia crowns offering exceptional strength and a natural translucent appearance that blends seamlessly with your teeth.',
  },
  {
    icon: <CircleDot size={26} />,
    title: 'Dental Implants',
    description: 'Permanent titanium implant solutions for missing teeth. Restored function and a natural look that lasts a lifetime with proper care.',
  },
  {
    icon: <Sparkles size={26} />,
    title: 'Veneers',
    description: 'Ultra-thin porcelain or composite shells custom-bonded to transform tooth shape, color, and alignment for a flawless smile.',
  },
  {
    icon: <AlignCenter size={26} />,
    title: 'Braces — Metal & Ceramic',
    description: 'Comprehensive orthodontic solutions from traditional metal braces to discreet ceramic brackets for all ages and bite complexities.',
  },
  {
    icon: <Sun size={26} />,
    title: 'Teeth Whitening',
    description: 'Professional in-office whitening for dramatically brighter teeth in a single visit. Safe, fast, and long-lasting results.',
  },
  {
    icon: <ShieldCheck size={26} />,
    title: 'Scaling & Polishing',
    description: 'Deep ultrasonic cleaning to remove plaque, tartar, and surface stains—keeping your gums healthy and your smile fresh.',
  },
  {
    icon: <Star size={26} />,
    title: 'Hollywood Smile',
    description: 'A complete smile makeover combining veneers, whitening, and gum contouring for a red-carpet-ready, picture-perfect smile.',
  },
  {
    icon: <Scissors size={26} />,
    title: 'Wisdom Tooth Surgery',
    description: 'Safe surgical extraction of impacted or problematic wisdom teeth with minimal discomfort and rapid recovery protocols.',
  },
  {
    icon: <Aperture size={26} />,
    title: 'Removable Denture',
    description: 'Custom-fitted partial or full dentures crafted for comfort, natural appearance, and reliable function in daily life.',
  },
]

/* ── Featured Specialty Cards (bottom) ── */
interface SpecialtyItem {
  icon: ReactNode
  title: string
  subtitle: string
  image: string
}

const specialties: SpecialtyItem[] = [
  {
    icon: <CircleDot size={24} />,
    title: 'Dental Implants',
    subtitle: 'Permanent tooth replacement',
    image: '/images/Dental Implants.jpg',
  },
  {
    icon: <AlignCenter size={24} />,
    title: 'Braces & Invisible Aligners',
    subtitle: 'Modern orthodontic solutions',
    image: '/images/Braces & Invisible Aligners.webp',
  },
  {
    icon: <Link size={24} />,
    title: 'Crown & Bridge',
    subtitle: 'Seamless restorations',
    image: '/images/Crown & Bridge.jpg',
  },
  {
    icon: <Heart size={24} />,
    title: 'Root Canal Treatment',
    subtitle: 'Painless precision care',
    image: '/images/Root Canal Treatment.webp',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white" aria-label="Our Dental Services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">What We Offer</span>
          <h2 className="text-4xl lg:text-5xl font-black text-primary mb-4">Comprehensive Dental Services</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            From preventive care to advanced cosmetic procedures — everything you need under one roof, powered by modern technology and a gentle, patient-first approach.
          </p>
        </motion.div>

        {/* ── Featured Specialties (top) ── */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-black text-primary">Our Signature Specialties</h3>
          <p className="text-slate-400 mt-2">Treatments we're known for</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-20">
          {specialties.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden rounded-xl sm:rounded-2xl aspect-3/4 sm:aspect-3/4 text-white cursor-pointer group"
            >
              {/* Background image */}
              <img
                src={item.image}
                alt={`${item.title} treatment at My Dental Home, Lahore`}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              {/* Strong dark overlay for text readability */}
              <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/40 to-black/20" />

              {/* Content pinned to bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5 z-10">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center mb-2 sm:mb-3 border border-white/25">
                  {item.icon}
                </div>
                <h4 className="text-sm sm:text-base font-bold leading-tight mb-0.5">{item.title}</h4>
                <p className="text-[11px] sm:text-xs text-white/70 leading-snug">{item.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Main Services Grid ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mainServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: (index % 4) * 0.08 }}
              whileHover={{ y: -6, boxShadow: '0 20px 40px -12px rgba(0, 45, 91, 0.12)' }}
              className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white transition-all group cursor-pointer"
            >
              <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-base font-bold text-primary mb-2">{service.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
