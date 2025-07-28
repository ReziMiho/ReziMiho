import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, Phone } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const PartyInfo = () => {
  const { t } = useLanguage()

  return (
    <section id="party-info" className="py-16 px-4 bg-white/50 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-serif text-gray-800 mb-2 text-center">{t.partyInfoTitle}</h2>
        <p className="text-center text-gray-600 font-serif mb-12">{t.partyInfoSubtitle}</p>
        
        {/* Date */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl p-6 mb-6 shadow-sm"
        >
          <div className="flex items-center gap-4 mb-4">
            <Calendar className="w-6 h-6 text-dusty-rose" />
            <h3 className="text-xl font-serif text-gray-800">{t.date}</h3>
          </div>
          <div className="text-2xl font-script text-dusty-rose mb-2" style={{ fontFamily: 'Dancing Script, cursive' }}>
            {t.weddingDate}
          </div>
          <div className="text-lg text-gray-600">{t.dateValue}</div>
        </motion.div>

        {/* Ceremony */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl p-6 mb-6 shadow-sm"
        >
          <h3 className="text-xl font-serif text-gray-800 mb-4">{t.ceremony} {t.ceremonyTitle}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-dusty-rose" />
                <span className="text-sm text-gray-500">{t.startTime}</span>
              </div>
              <div className="text-lg font-semibold">4:00 PM</div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-dusty-rose" />
                <span className="text-sm text-gray-500">{t.receptionTime}</span>
              </div>
              <div className="text-lg font-semibold">3:30 PM</div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-dusty-rose" />
                <span className="text-sm text-gray-500">{t.endTime}</span>
              </div>
              <div className="text-lg font-semibold">4:30 PM</div>
            </div>
          </div>
        </motion.div>

        {/* Reception */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-2xl p-6 mb-6 shadow-sm"
        >
          <h3 className="text-xl font-serif text-gray-800 mb-4">{t.reception} {t.receptionTitle}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-dusty-rose" />
                <span className="text-sm text-gray-500">{t.startTime}</span>
              </div>
              <div className="text-lg font-semibold">5:00 PM</div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-dusty-rose" />
                <span className="text-sm text-gray-500">{t.receptionTime}</span>
              </div>
              <div className="text-lg font-semibold">4:30 PM</div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-dusty-rose" />
                <span className="text-sm text-gray-500">{t.endTime}</span>
              </div>
              <div className="text-lg font-semibold">8:00 PM</div>
            </div>
          </div>
        </motion.div>

        {/* Venue */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-white rounded-2xl p-6 shadow-sm"
        >
          <h3 className="text-xl font-serif text-gray-800 mb-4">{t.venueInfo}</h3>
          <div className="space-y-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <MapPin className="w-4 h-4 text-dusty-rose" />
                <span className="font-semibold text-gray-800">{t.venueName}</span>
              </div>
            </div>
            <div className="text-gray-600 whitespace-pre-line">
              {t.venueAddress}
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Phone className="w-4 h-4 text-dusty-rose" />
              <span>{t.tel}</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default PartyInfo 