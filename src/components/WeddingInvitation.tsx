import { motion } from 'framer-motion'
import Navigation from './Navigation'
import Hero from './Hero'
import { Suspense, lazy } from 'react'

const Countdown = lazy(() => import('./Countdown'))
const Message = lazy(() => import('./Message'))
const PartyInfo = lazy(() => import('./PartyInfo'))
const RSVPForm = lazy(() => import('./RSVPForm'))
const Footer = lazy(() => import('./Footer'))

const WeddingInvitation = () => {
  return (
    <div className="min-h-screen bg-gray-300">
      <Navigation />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative"
      >
        <Hero />
        <Suspense fallback={<div className="p-8 text-center text-gray-600">Loading…</div>}>
          <Countdown />
          <Message />
          <PartyInfo />
          <RSVPForm />
          <Footer />
        </Suspense>
      </motion.div>
    </div>
  )
}

export default WeddingInvitation 