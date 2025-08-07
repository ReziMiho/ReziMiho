import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const RSVP = () => {
  const { t } = useLanguage()

  return (
    <section className="py-16 text-center">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto px-6"
      >
        {/* RSVP Title */}
        <div className="flex justify-center mb-6">
          <Heart className="w-6 h-6 text-maple-red fill-current" />
        </div>
        
        <h2 className="text-4xl font-script text-burgundy mb-6" style={{ fontFamily: 'Dancing Script, cursive' }}>
          {t.rsvpTitle}
        </h2>
        
        <p className="text-lg text-gray-600 mb-8 leading-relaxed font-serif">
          {t.respondBy}
        </p>
      </motion.div>
    </section>
  )
}

export default RSVP 