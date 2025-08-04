import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

const Message = () => {
  const { t } = useLanguage()

  return (
    <section id="message" className="py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-xl font-serif text-gray-800 mb-6">{t.messageTitle}</h2>
        
        <div className="bg-white/70 rounded-2xl p-6 shadow-sm">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-gray-600 leading-relaxed font-serif text-base mb-3"
          >
            {t.messageParagraph1}
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-gray-600 leading-relaxed font-serif text-base mb-3"
          >
            {t.messageParagraph2}
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-gray-600 leading-relaxed font-serif text-base mb-3"
          >
            {t.messageParagraph3}
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-gray-600 leading-relaxed font-serif text-base mb-3"
          >
            {t.messageParagraph4}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-gray-600 leading-relaxed font-serif text-base"
          >
            {t.messageParagraph5}
          </motion.p>
        </div>
      </motion.div>
    </section>
  )
}

export default Message 