import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const Footer = () => {
  const { t } = useLanguage()

  return (
    <footer className="py-12 text-center">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto px-6"
      >
        {/* Hearts decoration */}
        <div className="flex justify-center items-center gap-2 mb-6">
          <Heart className="w-4 h-4 text-burnt-orange fill-current" />
          <Heart className="w-5 h-5 text-maple-red fill-current" />
          <Heart className="w-4 h-4 text-burnt-orange fill-current" />
        </div>

        {/* Thank you message */}
        <h3 className="text-2xl font-script text-burgundy mb-4" style={{ fontFamily: 'Dancing Script, cursive' }}>
          {t.thankYou}
        </h3>
      </motion.div>
    </footer>
  )
}

export default Footer 