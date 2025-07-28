import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="py-12 text-center">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-xl mx-auto px-6"
      >
        {/* Hearts decoration */}
        <div className="flex justify-center items-center gap-2 mb-6">
          <Heart className="w-4 h-4 text-rose-gold fill-current" />
          <Heart className="w-5 h-5 text-dusty-rose fill-current" />
          <Heart className="w-4 h-4 text-rose-gold fill-current" />
        </div>

        {/* Thank you message */}
        <h3 className="text-2xl font-script text-dusty-rose mb-4" style={{ fontFamily: 'Dancing Script, cursive' }}>
          Thank You
        </h3>
        
        <p className="text-gray-600 leading-relaxed font-serif mb-8">
          Your presence is the greatest gift we could ask for. We look forward to celebrating 
          love, laughter, and happily ever after with you.
        </p>

        {/* Couple names */}
        <p className="text-lg font-script text-gray-700" style={{ fontFamily: 'Dancing Script, cursive' }}>
          With love,
        </p>
        <p className="text-xl font-script text-dusty-rose mt-2" style={{ fontFamily: 'Dancing Script, cursive' }}>
          Rezi & Miho
        </p>

        {/* Divider */}
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-dusty-rose to-transparent mx-auto mt-8 mb-6" />
        
        {/* Date reminder */}
        <p className="text-sm text-gray-500 font-serif">
          October 12th, 2025 • Garden Grove Estate
        </p>
      </motion.div>
    </footer>
  )
}

export default Footer 