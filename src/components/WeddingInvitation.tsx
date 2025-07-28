import { motion } from 'framer-motion'
import Navigation from './Navigation'
import Hero from './Hero'
import Countdown from './Countdown'
import Message from './Message'
import Profile from './Profile'
import Gallery from './Gallery'
import PartyInfo from './PartyInfo'
import RSVPForm from './RSVPForm'
import Footer from './Footer'

const WeddingInvitation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-champagne via-white to-rose-gold">
      <Navigation />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative"
      >
        <Hero />
        <Countdown />
        <Message />
        <Profile />
        <Gallery />
        <PartyInfo />
        <RSVPForm />
        <Footer />
      </motion.div>
    </div>
  )
}

export default WeddingInvitation 