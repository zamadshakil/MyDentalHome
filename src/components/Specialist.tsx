import { motion } from 'framer-motion'
import { ShieldCheck, Cpu, Linkedin } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
}

export default function Specialist() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-bg-light" aria-labelledby="specialist-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 sm:gap-16">
          {/* Portrait Visual */}
          <motion.div
            className="w-full lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeInUp}
          >
            <div className="relative group">
              <div className="absolute inset-0 gold-gradient rounded-3xl sm:rounded-4xl rotate-3 scale-105 opacity-20 group-hover:rotate-6 transition-transform duration-500" aria-hidden="true" />
              <div className="relative rounded-3xl sm:rounded-4xl overflow-hidden bg-primary flex flex-col items-center justify-center text-center py-8 px-5 sm:py-10 sm:px-8 lg:aspect-square">
                {/* Doctor photo in circle */}
                <div className="w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 shrink-0 rounded-full overflow-hidden border-4 border-accent/30 mb-5 sm:mb-6">
                  <img
                    src="/images/Dr. Faraz Sadiq.png"
                    alt="Dr. Faraz Sadiq — Principal Dentist and Clinical Director at My Dental Home, Bahria Town Lahore"
                    className="w-full h-full object-cover aspect-square"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-white text-2xl sm:text-3xl font-black mb-2">Dr. Faraz Sadiq</h3>
                <p className="text-accent font-semibold tracking-widest uppercase text-xs sm:text-sm mb-3 sm:mb-4">Principal Dentist & Clinical Director</p>
                <div className="w-16 h-px bg-accent/40 mb-3 sm:mb-4" aria-hidden="true" />
                <p className="text-white/50 text-xs sm:text-sm max-w-sm">
                  Advanced Restorative & Cosmetic Dentistry
                </p>
                <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-2 sm:gap-4">
                  <div className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/10 text-white/70 text-[10px] sm:text-xs font-semibold">BDS</div>
                  <div className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/10 text-white/70 text-[10px] sm:text-xs font-semibold">Cosmetic Expert</div>
                  <div className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/10 text-white/70 text-[10px] sm:text-xs font-semibold">Implantologist</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bio Content */}
          <motion.div
            className="w-full lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={{
              hidden: { opacity: 0, x: 40 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' as const, delay: 0.2 } },
            }}
          >
            <span className="text-accent font-bold tracking-widest uppercase text-xs sm:text-sm mb-3 sm:mb-4 block">The Specialist</span>
            <h2 id="specialist-heading" className="text-2xl sm:text-4xl font-black text-primary mb-4 sm:mb-6">Meet Dr. Faraz Sadiq</h2>
            <p className="text-lg sm:text-xl text-primary font-semibold mb-4 sm:mb-6">Principal Dentist &amp; Clinical Director</p>
            <p className="text-slate-600 mb-6 sm:mb-8 text-sm sm:text-lg leading-relaxed">
              With years of hands-on expertise in advanced restorative and cosmetic dentistry, Dr. Faraz Sadiq has
              built <strong>My Dental Home</strong> into Bahria Town's most trusted dental practice. His philosophy
              blends clinical precision with an artistic eye — ensuring every patient leaves with a healthier,
              more confident smile. From complex implant surgeries to delicate veneer placements, his commitment
              to excellence is evident in every procedure.
            </p>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10">
              <div className="flex items-center gap-2 sm:gap-3">
                <ShieldCheck size={24} className="text-accent shrink-0 sm:w-7 sm:h-7" aria-hidden="true" />
                <span className="font-semibold text-primary text-sm sm:text-base">Certified Expert</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Cpu size={24} className="text-accent shrink-0 sm:w-7 sm:h-7" aria-hidden="true" />
                <span className="font-semibold text-primary text-sm sm:text-base">Modern Tech</span>
              </div>
            </div>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="https://pk.linkedin.com/in/dr-faraz-sadiq-4a3b69263"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-white bg-[#0077b5] px-5 sm:px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity text-sm sm:text-base"
              aria-label="View Dr. Faraz Sadiq's LinkedIn profile (opens in new tab)"
            >
              <Linkedin size={20} aria-hidden="true" />
              LinkedIn Profile
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
