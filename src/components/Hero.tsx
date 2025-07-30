import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const Hero = () => {
  const { t } = useLanguage()

  return (
    <section className="relative pt-20 pb-12 px-4 text-center min-h-screen flex items-center">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full max-w-4xl mx-auto"
      >
        {/* Decorative heart */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex justify-center mb-8"
        >
          <Heart className="w-8 h-8 text-maple-red fill-current" />
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-8xl font-script text-burgundy mb-6"
          style={{ fontFamily: 'Dancing Script, cursive' }}
        >
          {t.coupleNames}
        </motion.h1>

        {/* Date */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-3xl md:text-4xl font-script text-warm-brown mb-8"
          style={{ fontFamily: 'Dancing Script, cursive' }}
        >
          {t.weddingDate}
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg md:text-xl text-gray-700 mb-8 font-serif"
        >
          {t.subtitle}
        </motion.p>

        {/* Main message */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-base md:text-lg text-gray-600 leading-relaxed font-serif max-w-2xl mx-auto"
        >
          <p className="mb-4">
            {t.requestPleasure}
          </p>
          <p className="mb-4">
            {t.celebrationOfMarriage}
          </p>
        </motion.div>

        {/* Decorative divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="w-32 h-px bg-gradient-to-r from-transparent via-maple-red to-transparent mx-auto mt-12"
        />
      </motion.div>
    </section>
  )
}

export default Hero 