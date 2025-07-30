import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

const Profile = () => {
  const { t } = useLanguage()

  return (
    <section id="profile" className="py-16 px-4 bg-white/50 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-serif text-gray-800 mb-12 text-center">{t.profileTitle}</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Groom Profile */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl p-6 shadow-sm text-center"
          >
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-warm-brown to-maple-red flex items-center justify-center text-white text-6xl">
              👨
            </div>
            
            <div className="mb-4">
              <span className="text-sm text-gray-500 font-serif block mb-1">{t.groom}</span>
              <h3 className="text-2xl font-script text-burgundy" style={{ fontFamily: 'Dancing Script, cursive' }}>
                {t.groomName}
              </h3>
            </div>
            
            <p className="text-gray-600 leading-relaxed font-serif">
              {t.groomMessage}
            </p>
          </motion.div>

          {/* Bride Profile */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-2xl p-6 shadow-sm text-center"
          >
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-burnt-orange to-autumn-gold flex items-center justify-center text-white text-6xl">
              👩
            </div>
            
            <div className="mb-4">
              <span className="text-sm text-gray-500 font-serif block mb-1">{t.bride}</span>
              <h3 className="text-2xl font-script text-burgundy" style={{ fontFamily: 'Dancing Script, cursive' }}>
                {t.brideName}
              </h3>
            </div>
            
            <p className="text-gray-600 leading-relaxed font-serif">
              {t.brideMessage}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Profile 