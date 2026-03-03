import { motion } from 'framer-motion'
import { MapPin, Smartphone, Clock } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-bg-light" aria-label="Contact My Dental Home">
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
            <h2 className="text-3xl font-black text-primary mb-2">Visit My Dental Home</h2>
            <p className="text-slate-500 mb-8">We'd love to welcome you. Walk-ins & appointments both available.</p>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="font-bold text-primary text-lg">Location</p>
                  <p className="text-slate-600">120/A, Commercial Area Sector C Bahria Town, Lahore, 53720</p>
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
                  <p className="text-slate-600">Mon - Sat: 4:00 PM - 10:00 PM</p>
                  <p className="text-slate-600 text-sm italic">Emergency appointments available</p>
                </div>
              </div>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="lg:w-1/2 h-100 lg:h-auto relative bg-slate-100 overflow-hidden min-h-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.5!2d74.35!3d31.52!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x20d5cdac0a14256c!2sMy%20Dental%20Home%20by%20Dr.Faraz%20Sadiq!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="My Dental Home - Bahria Town, Lahore"
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
