import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative py-20 text-center">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-4xl mx-auto"
      >
        {/* Decorative heart */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex justify-center mb-8"
        >
          <Heart className="w-8 h-8 text-rose-gold fill-current" />
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-6xl md:text-8xl font-script text-dusty-rose mb-6"
          style={{ fontFamily: 'Dancing Script, cursive' }}
        >
          Rezi & Miho
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-gray-700 mb-8 font-serif"
        >
          Together with their families
        </motion.p>

        {/* Main message */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg md:text-xl text-gray-600 leading-relaxed font-serif"
        >
          <p className="mb-4">
            request the pleasure of your company
          </p>
          <p className="mb-4">
            at the celebration of their marriage
          </p>
        </motion.div>

        {/* Decorative divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="w-32 h-px bg-gradient-to-r from-transparent via-dusty-rose to-transparent mx-auto mt-12"
        />
      </motion.div>
    </section>
  )
}

export default Hero 