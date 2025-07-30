import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

const Countdown = () => {
  const { t } = useLanguage()
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const weddingDate = new Date('2025-10-12T03:00:00').getTime()

    const updateCountdown = () => {
      const now = new Date().getTime()
      const difference = weddingDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        })
      }
    }

    updateCountdown()
    const timer = setInterval(updateCountdown, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="countdown" className="py-16 px-4 bg-white/50 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-md mx-auto text-center"
      >
        <h2 className="text-3xl font-serif text-gray-800 mb-8">{t.countdownTitle}</h2>
        
        {/* Days */}
        <div className="mb-6">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-6xl font-bold text-maple-red mb-2"
          >
            {timeLeft.days}
          </motion.div>
          <div className="text-lg text-gray-600 font-serif">{t.days}</div>
        </div>

        {/* Time */}
        <div className="flex justify-center items-center gap-2 mb-6 text-2xl font-mono">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-gray-800">{String(timeLeft.hours).padStart(2, '0')}</span>
            <span className="text-xs text-gray-500">H</span>
          </div>
          <span className="text-burnt-orange">:</span>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-gray-800">{String(timeLeft.minutes).padStart(2, '0')}</span>
            <span className="text-xs text-gray-500">M</span>
          </div>
          <span className="text-burnt-orange">:</span>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-gray-800">{String(timeLeft.seconds).padStart(2, '0')}</span>
            <span className="text-xs text-gray-500">S</span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg text-gray-600 font-serif"
        >
          {t.toOurWedding}
        </motion.div>
        
        <div className="mt-4 text-2xl font-script text-warm-brown" style={{ fontFamily: 'Dancing Script, cursive' }}>
          {t.weddingDate}
        </div>
      </motion.div>
    </section>
  )
}

export default Countdown 