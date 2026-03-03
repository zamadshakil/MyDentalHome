import { motion } from 'framer-motion'
import { MapPin, Smartphone, Clock } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100 flex flex-col lg:flex-row"
        >
          {/* Info */}
          <div className="p-10 lg:p-12 lg:w-1/2">
            <h2 className="text-3xl font-black text-primary mb-8">Visit Our Home</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="font-bold text-primary text-lg">Location</p>
                  <p className="text-slate-600">Main Gulberg Road, Lahore, Pakistan</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent shrink-0">
                  <Smartphone size={22} />
                </div>
                <div>
                  <p className="font-bold text-primary text-lg">Direct Line</p>
                  <a href="tel:03278149889" className="text-slate-600 hover:text-accent transition-colors">0327 8149889</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent shrink-0">
                  <Clock size={22} />
                </div>
                <div>
                  <p className="font-bold text-primary text-lg">Working Hours</p>
                  <p className="text-slate-600">Mon - Sat: 10:00 AM - 8:00 PM</p>
                  <p className="text-slate-600 text-sm italic">Emergency appointments available</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="lg:w-1/2 h-[400px] lg:h-auto relative bg-slate-100 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 flex flex-col items-center justify-center text-center p-8">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MapPin size={32} className="text-primary" />
              </div>
              <h4 className="text-primary font-bold text-lg mb-1">Gulberg, Lahore</h4>
              <p className="text-slate-500 text-sm mb-6">Pakistan</p>
              <a
                href="https://www.google.com/maps/search/Gulberg+Lahore+Pakistan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-accent hover:underline"
              >
                Open in Google Maps →
              </a>
            </div>
            {/* Grid pattern overlay */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `linear-gradient(#002d5b 1px, transparent 1px), linear-gradient(90deg, #002d5b 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
