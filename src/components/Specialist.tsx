import { motion } from 'framer-motion'
import { ShieldCheck, Cpu, Linkedin } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
}

export default function Specialist() {
  return (
    <section id="about" className="py-20 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Portrait Visual */}
          <motion.div
            className="w-full lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeInUp}
          >
            <div className="relative group">
              <div className="absolute inset-0 gold-gradient rounded-[2rem] rotate-3 scale-105 opacity-20 group-hover:rotate-6 transition-transform duration-500" />
              <div className="relative aspect-square rounded-[2rem] overflow-hidden bg-primary flex flex-col items-center justify-center text-center p-8">
                {/* Premium visual instead of photo */}
                <div className="w-32 h-32 rounded-full bg-accent/15 border-2 border-accent/30 flex items-center justify-center mb-6">
                  <span className="text-accent text-5xl font-black">FS</span>
                </div>
                <h3 className="text-white text-3xl font-black mb-2">Dr. Faraz Sadiq</h3>
                <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-4">Lead Specialist & Founder</p>
                <div className="w-16 h-px bg-accent/40 mb-4" />
                <p className="text-white/50 text-sm max-w-sm">
                  Advanced Restorative & Cosmetic Dentistry
                </p>
                <div className="mt-8 flex gap-4">
                  <div className="px-4 py-2 rounded-full border border-white/10 text-white/70 text-xs font-semibold">BDS</div>
                  <div className="px-4 py-2 rounded-full border border-white/10 text-white/70 text-xs font-semibold">Cosmetic Expert</div>
                  <div className="px-4 py-2 rounded-full border border-white/10 text-white/70 text-xs font-semibold">Implantologist</div>
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
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">The Specialist</span>
            <h2 className="text-4xl font-black text-primary mb-6">Meet Dr. Faraz Sadiq</h2>
            <p className="text-xl text-primary font-semibold mb-6">Lead Specialist &amp; Founder</p>
            <p className="text-slate-600 mb-8 text-lg leading-relaxed">
              With years of expertise in advanced restorative and cosmetic dentistry, Dr. Faraz Sadiq has
              established "My Dental Home" as a sanctuary for those seeking world-class oral care. His
              philosophy blends clinical precision with an artistic eye for aesthetics.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="flex items-center gap-3">
                <ShieldCheck size={28} className="text-accent" />
                <span className="font-semibold text-primary">Certified Expert</span>
              </div>
              <div className="flex items-center gap-3">
                <Cpu size={28} className="text-accent" />
                <span className="font-semibold text-primary">Modern Tech</span>
              </div>
            </div>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="https://pk.linkedin.com/in/dr-faraz-sadiq-4a3b69263"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-white bg-[#0077b5] px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity"
            >
              <Linkedin size={20} />
              LinkedIn Profile
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
