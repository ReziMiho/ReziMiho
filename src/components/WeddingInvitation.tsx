import { motion } from 'framer-motion'
import { Heart, Calendar, MapPin, Clock } from 'lucide-react'
import Hero from './Hero'
import Details from './Details'
import RSVP from './RSVP'
import Footer from './Footer'

const WeddingInvitation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-champagne via-white to-rose-gold">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4"
      >
        <Hero />
        <Details />
        <RSVP />
        <Footer />
      </motion.div>
    </div>
  )
}

export default WeddingInvitation 