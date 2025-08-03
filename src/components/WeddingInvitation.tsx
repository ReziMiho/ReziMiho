import { motion } from 'framer-motion'
import Navigation from './Navigation'
import Hero from './Hero'
import Countdown from './Countdown'
import Message from './Message'
import PartyInfo from './PartyInfo'
import RSVPForm from './RSVPForm'
import Footer from './Footer'

const WeddingInvitation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-pearl to-stone">
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
        <PartyInfo />
        <RSVPForm />
        <Footer />
      </motion.div>
    </div>
  )
}

export default WeddingInvitation 