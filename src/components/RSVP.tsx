import { motion } from 'framer-motion'
import { Heart, Mail, Phone } from 'lucide-react'
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
        
        <p className="text-2xl font-semibold text-gray-800 mb-12">
          September 15th, 2025
        </p>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/70 p-6 rounded-lg shadow-sm"
          >
            <Mail className="w-8 h-8 text-maple-red mx-auto mb-4" />
            <h3 className="text-lg font-serif text-gray-800 mb-2">{t.email}</h3>
            <a 
              href="mailto:rezi.rusnadi9@gmail.com"
              className="text-maple-red hover:underline"
            >
              rezi.rusnadi9@gmail.com
            </a>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/70 p-6 rounded-lg shadow-sm"
          >
            <Phone className="w-8 h-8 text-maple-red mx-auto mb-4" />
            <h3 className="text-lg font-serif text-gray-800 mb-2">{t.phoneNumber}</h3>
            <a 
              href="tel:+818071811508"
              className="text-maple-red hover:underline"
            >
              +818071811500
            </a>
          </motion.div>
        </div>

        {/* Special note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-cream/60 p-6 rounded-lg"
        >
          <p className="text-gray-700 italic font-serif">
            {t.contactDirectly}
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default RSVP 