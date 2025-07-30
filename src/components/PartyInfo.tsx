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
            <Calendar className="w-6 h-6 text-maple-red" />
            <h3 className="text-xl font-serif text-gray-800">{t.date}</h3>
          </div>
          <div className="text-2xl font-script text-burgundy mb-2" style={{ fontFamily: 'Dancing Script, cursive' }}>
            {t.weddingDate}
          </div>
          <div className="text-lg text-gray-600">{t.dateValue}</div>
        </motion.div>

        {/* Family Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl p-6 mb-6 shadow-sm"
        >
          <h3 className="text-xl font-serif text-gray-800 mb-4">{t.familySection}</h3>
          <div className="space-y-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Clock className="w-4 h-4 text-burnt-orange" />
                <span className="text-sm text-gray-500">{t.gatheringTime}</span>
              </div>
              <div className="text-lg font-semibold">11：30</div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <MapPin className="w-4 h-4 text-burnt-orange" />
                <span className="text-sm text-gray-500">{t.gatheringPlace}</span>
              </div>
              <div className="text-gray-700">{t.familyGatheringPlace}</div>
            </div>
          </div>
        </motion.div>

        {/* Friends Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-2xl p-6 mb-6 shadow-sm"
        >
          <h3 className="text-xl font-serif text-gray-800 mb-4">{t.friendsSection}</h3>
          <div className="space-y-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Clock className="w-4 h-4 text-burnt-orange" />
                <span className="text-sm text-gray-500">{t.gatheringTime}</span>
              </div>
              <div className="text-lg font-semibold">11：30</div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <MapPin className="w-4 h-4 text-burnt-orange" />
                <span className="text-sm text-gray-500">{t.gatheringPlace}</span>
              </div>
              <div className="text-gray-700">{t.friendsGatheringPlace}</div>
            </div>
          </div>
        </motion.div>

        {/* Common Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-white rounded-2xl p-6 shadow-sm"
        >
          <h3 className="text-xl font-serif text-gray-800 mb-4">{t.commonSection}</h3>
          <div className="space-y-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Clock className="w-4 h-4 text-burnt-orange" />
                <span className="text-sm text-gray-500">{t.receptionStartTime}</span>
              </div>
              <div className="text-lg font-semibold">12：00</div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <MapPin className="w-4 h-4 text-burnt-orange" />
                <span className="text-sm text-gray-500">{t.venueLocation}</span>
              </div>
              <div className="text-gray-700">{t.venueDetail}</div>
            </div>
          </div>
          
          <div className="mt-6 pt-4 border-t border-gray-100">
            <div className="space-y-2">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-4 h-4 text-burnt-orange" />
                  <span className="font-semibold text-gray-800">{t.venueName}</span>
                </div>
              </div>
              <div className="text-gray-600 whitespace-pre-line">
                {t.venueAddress}
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Phone className="w-4 h-4 text-burnt-orange" />
                <span>{t.tel}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default PartyInfo 