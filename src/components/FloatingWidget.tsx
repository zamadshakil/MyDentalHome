import { motion } from 'framer-motion'
import { Bot } from 'lucide-react'

export default function FloatingWidget() {
  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-16 h-16 bg-primary rounded-full shadow-2xl flex items-center justify-center text-white relative group cursor-pointer"
        aria-label="AI Assistant"
      >
        <Bot size={28} />
        {/* Tooltip */}
        <div className="absolute -top-12 right-0 bg-white text-primary px-4 py-2 rounded-xl text-xs font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-100 pointer-events-none">
          Ask about our services!
        </div>
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />
      </motion.button>
    </div>
  )
}
