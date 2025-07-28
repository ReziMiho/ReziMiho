import { motion } from 'framer-motion'
import { Heart, Mail, Phone } from 'lucide-react'

const RSVP = () => {
  return (
    <section className="py-16 text-center">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto px-6"
      >
        {/* RSVP Title */}
        <div className="flex justify-center mb-6">
          <Heart className="w-6 h-6 text-rose-gold fill-current" />
        </div>
        
        <h2 className="text-4xl font-script text-dusty-rose mb-6" style={{ fontFamily: 'Dancing Script, cursive' }}>
          RSVP
        </h2>
        
        <p className="text-lg text-gray-600 mb-8 leading-relaxed font-serif">
          Please let us know if you can celebrate with us by responding before
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
            <Mail className="w-8 h-8 text-dusty-rose mx-auto mb-4" />
            <h3 className="text-lg font-serif text-gray-800 mb-2">Email</h3>
            <a 
              href="mailto:reziandmiho@wedding.com"
              className="text-dusty-rose hover:underline"
            >
              reziandmiho@wedding.com
            </a>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/70 p-6 rounded-lg shadow-sm"
          >
            <Phone className="w-8 h-8 text-dusty-rose mx-auto mb-4" />
            <h3 className="text-lg font-serif text-gray-800 mb-2">Phone</h3>
            <a 
              href="tel:+15551234567"
              className="text-dusty-rose hover:underline"
            >
              (555) 123-4567
            </a>
          </motion.div>
        </div>

        {/* Special note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-champagne/40 p-6 rounded-lg"
        >
          <p className="text-gray-700 italic font-serif">
            "We can't wait to celebrate this special day with you!"
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default RSVP 