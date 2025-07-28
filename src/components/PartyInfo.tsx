import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, Phone } from 'lucide-react'

const PartyInfo = () => {
  return (
    <section id="party-info" className="py-16 px-4 bg-white/50 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-serif text-gray-800 mb-2 text-center">Party Information</h2>
        <p className="text-center text-gray-600 font-serif mb-12">パーティーのご案内</p>
        
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
            <h3 className="text-xl font-serif text-gray-800">Date</h3>
          </div>
          <div className="text-2xl font-script text-dusty-rose mb-2" style={{ fontFamily: 'Dancing Script, cursive' }}>
            2025年10月12日 日曜日
          </div>
          <div className="text-lg text-gray-600">October 12th, 2025 Sunday</div>
        </motion.div>

        {/* Ceremony */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl p-6 mb-6 shadow-sm"
        >
          <h3 className="text-xl font-serif text-gray-800 mb-4">Ceremony 挙式</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-dusty-rose" />
                <span className="text-sm text-gray-500">Start Time</span>
              </div>
              <div className="text-lg font-semibold">4:00 PM</div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-dusty-rose" />
                <span className="text-sm text-gray-500">Reception</span>
              </div>
              <div className="text-lg font-semibold">3:30 PM</div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-dusty-rose" />
                <span className="text-sm text-gray-500">End</span>
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
          <h3 className="text-xl font-serif text-gray-800 mb-4">Reception 披露宴</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-dusty-rose" />
                <span className="text-sm text-gray-500">Start Time</span>
              </div>
              <div className="text-lg font-semibold">5:00 PM</div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-dusty-rose" />
                <span className="text-sm text-gray-500">Reception</span>
              </div>
              <div className="text-lg font-semibold">4:30 PM</div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-dusty-rose" />
                <span className="text-sm text-gray-500">End</span>
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
          <h3 className="text-xl font-serif text-gray-800 mb-4">Venue Information 会場情報</h3>
          <div className="space-y-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <MapPin className="w-4 h-4 text-dusty-rose" />
                <span className="font-semibold text-gray-800">Garden Grove Estate</span>
              </div>
            </div>
            <div className="text-gray-600">
              〒123-4567<br />
              123 Rose Garden Lane<br />
              Romantic City, RC 12345
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Phone className="w-4 h-4 text-dusty-rose" />
              <span>TEL: (555) 123-4567</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default PartyInfo 