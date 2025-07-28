import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

const Message = () => {
  const { t } = useLanguage()

  return (
    <section id="message" className="py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-3xl font-serif text-gray-800 mb-8">{t.messageTitle}</h2>
        
        <div className="bg-white/70 rounded-2xl p-8 shadow-sm">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-gray-700 leading-relaxed font-serif text-lg mb-6"
          >
            {t.messageParagraph1}
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-gray-700 leading-relaxed font-serif mb-6"
          >
            {t.messageParagraph2}
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-gray-700 leading-relaxed font-serif mb-6"
          >
            {t.messageParagraph3}
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-gray-700 leading-relaxed font-serif"
          >
            {t.messageParagraph4}
          </motion.p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-8"
        >
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-rose-gold to-dusty-rose rounded-full flex items-center justify-center">
            <span className="text-white text-4xl">💕</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Message 