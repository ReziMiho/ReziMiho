import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, Phone } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { useRole } from '../contexts/RoleContext'

const PartyInfo = () => {
  const { t, currentLanguage } = useLanguage()
  const { currentRole } = useRole()

  return (
    <section id="party-info" className="py-16 px-4 bg-white/50 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-serif text-gray-800 mb-2 text-center">{t.partyInfoTitle}</h2>
        <p className="text-center text-gray-600 font-serif mb-12"></p>
        
        {/* Date & Place (Hotel New Otani) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-6 mb-6 shadow-sm"
        >
          <div className="flex items-center gap-4 mb-4">
            <Calendar className="w-6 h-6 text-maple-red" />
            <h3 className="text-xl font-serif text-gray-800">{t.date}</h3>
          </div>
          <div className="text-2xl font-script text-burgundy mb-2" style={{ fontFamily: 'MS ゴシック, MS Gothic, monospace' }}>
            {t.weddingDate}
          </div>

          <div className="mt-6 pt-4 border-t border-gray-100">
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-burnt-orange" />
                  <span className="font-semibold text-gray-800">{t.venueName}</span>
                </div>
              </div>
              
              {/* Google Map Embed */}
              <div className="w-full h-64 rounded-lg overflow-hidden shadow-sm">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6481.779212226009!2d139.73241097601903!3d35.67972013005668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c7c3e56d51b%3A0xa74d2d0a91dee7f0!2sNew%20Otani%20Garden%20Tower%2C%204%20Kioich%C5%8D%2C%20Chiyoda%20City%2C%20Tokyo%20102-0094!5e0!3m2!1sen!2sjp!4v1753873423746!5m2!1sen!2sjp"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Wedding Venue Location"
                />
              </div>
              
              <div className="text-gray-600 whitespace-pre-line text-sm">
                {t.venueAddress}
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Phone className="w-4 h-4 text-burnt-orange" />
                <span>{t.tel}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Gathering Place - Conditional rendering based on role */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-6 mb-6 shadow-sm"
        >
          <h3 className="text-xl font-serif text-gray-800 mb-6">{t.gatheringPlace}</h3>
          
          {/* Family Subsection - Show only if role is family */}
          {currentRole === 'family' && (
            <div className="mb-6">
              <div className="space-y-3 pl-4 border-l-3 border-maple-red/20">
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
                    <span className="text-sm text-gray-500">Room</span>
                  </div>
                  <div className="text-gray-700">
                    <a 
                      href="https://www.newotani.co.jp/tokyo/banquet/hall/anteroom/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-burgundy hover:text-maple-red underline transition-colors duration-200"
                    >
                      {t.familyGatheringPlace}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Friends Subsection - Show only if role is friends */}
          {currentRole === 'friends' && (
            <div>
              <div className="space-y-3 pl-4 border-l-3 border-maple-red/20">
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
                    <span className="text-sm text-gray-500">Room</span>
                  </div>
                  <div className="text-gray-700">
                    <a 
                      href={currentLanguage === 'en' ? "https://www.newotani.co.jp/en/tokyo/banquet/hall/hooh/" : "https://www.newotani.co.jp/tokyo/banquet/hall/hooh/"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-burgundy hover:text-maple-red underline transition-colors duration-200"
                    >
                      {t.friendsGatheringPlace}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* Venue (Room Details) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-6 mb-6 shadow-sm"
        >
          <h3 className="text-xl font-serif text-gray-800 mb-4">{t.venueLocation}</h3>
          <div className="space-y-3 pl-4 border-l-3 border-maple-red/20">
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
                <span className="text-sm text-gray-500">Room</span>
              </div>
                <div className="text-gray-700">
                  <a 
                    href={currentLanguage === 'en' ? "https://www.newotani.co.jp/en/tokyo/banquet/hall/hooh/" : "https://www.newotani.co.jp/tokyo/banquet/hall/hooh/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-burgundy hover:text-maple-red underline transition-colors duration-200"
                  >
                    {t.venueDetail}
                  </a>
                </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-6 mb-6 shadow-sm"
        >
          <h3 className="text-xl font-serif text-gray-800 mb-6">{t.venueAccessHelp}</h3>
          <div>
            <div className="space-y-3 pl-4 border-l-3 border-maple-red/20">
              <div>
                <div className="text-gray-700">
                  <a
                    href="https://www.newotani.co.jp/tokyo/access/#c177988"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-burgundy hover:text-maple-red underline transition-colors duration-200"
                  >
                    {t.newOtaniAccessSite}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default PartyInfo 