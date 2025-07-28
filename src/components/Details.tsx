import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const Details = () => {
  const { t } = useLanguage()
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section className="py-16 bg-white/50 backdrop-blur-sm rounded-2xl my-12 mx-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center px-6"
      >
        {/* Date */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="flex justify-center mb-4">
            <Calendar className="w-8 h-8 text-dusty-rose" />
          </div>
          <h3 className="text-3xl font-serif text-gray-800 mb-2">{t.dayOfWeek}</h3>
          <p className="text-2xl font-script text-dusty-rose" style={{ fontFamily: 'Dancing Script, cursive' }}>
            {t.dateValue}
          </p>
        </motion.div>

        {/* Time */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="flex justify-center mb-4">
            <Clock className="w-8 h-8 text-dusty-rose" />
          </div>
          <h3 className="text-2xl font-serif text-gray-800 mb-2">{t.ceremony}</h3>
          <p className="text-xl text-gray-600 mb-1">{t.ceremonyTime}</p>
          <p className="text-lg text-gray-500">{t.receptionFollow}</p>
        </motion.div>

        {/* Location */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="flex justify-center mb-4">
            <MapPin className="w-8 h-8 text-dusty-rose" />
          </div>
          <h3 className="text-2xl font-serif text-gray-800 mb-4">{t.venue}</h3>
          <div className="text-lg text-gray-600 leading-relaxed">
            <p className="font-semibold mb-2">{t.venueName}</p>
            <div className="whitespace-pre-line">
              {t.venueAddress}
            </div>
          </div>
        </motion.div>

        {/* Dress code */}
        <motion.div
          variants={itemVariants}
          className="mt-12 p-6 bg-champagne/30 rounded-lg"
        >
          <h4 className="text-lg font-serif text-gray-800 mb-2">{t.dressCode}</h4>
          <p className="text-gray-600">{t.cocktailAttire}</p>
          <p className="text-sm text-gray-500 mt-1">
            {t.dressCodeSuggestion}
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Details 