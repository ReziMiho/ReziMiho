import { motion, AnimatePresence } from 'framer-motion'
import { Heart } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { useState, useEffect } from 'react'

const DESKTOP_PHOTOS = [
  '/wedding-photo-desktop-1.jpg',
  '/wedding-photo-desktop-2.jpg',
  '/wedding-photo-desktop-3.jpg',
]

const MOBILE_PHOTOS = [
  '/wedding-photo-mobile-1.jpg',
  '/wedding-photo-mobile-2.jpg',
  '/wedding-photo-mobile-3.jpg',
]

const Hero = () => {
  const { t } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  const photos = isMobile ? MOBILE_PHOTOS : DESKTOP_PHOTOS

  // Detect screen size (matchMedia to avoid frequent resize updates)
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)')
    const update = () => setIsMobile(mediaQuery.matches)
    update()
    mediaQuery.addEventListener('change', update)
    return () => mediaQuery.removeEventListener('change', update)
  }, [])

  // Prefetch slideshow images for smoother transitions
  useEffect(() => {
    photos.forEach(src => {
      const img = new Image()
      img.decoding = 'async'
      img.src = src
    })
  }, [photos])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % photos.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [photos.length])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slideshow background */}
      <div className="absolute inset-0">
        <AnimatePresence>
          <motion.img
            key={currentSlide}
            src={photos[currentSlide]}
            alt={`Rezi & Miho Wedding Photo ${currentSlide + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            decoding="async"
            loading="eager"
            sizes="100vw"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              if (e.currentTarget.parentElement) {
                e.currentTarget.parentElement.style.background = 'linear-gradient(135deg, #FFFAF0 0%, #F7FAFC 50%, #E2E8F0 100%)';
              }
            }}
          />
        </AnimatePresence>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-white max-w-4xl mx-auto"
        >
          {/* Date in top left corner */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute top-8 left-8 text-2xl md:text-3xl font-bold drop-shadow-lg"
            style={{ color: '#FF6B4A' }}
          >
          </motion.div>

          {/* Decorative heart */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex justify-center mb-8"
          >
            <Heart className="w-8 h-8 text-white fill-current drop-shadow-lg" />
          </motion.div>

          {/* Main Japanese/English title with decorative lines */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >

            {/* English subtitle */}
            <div className="text-2xl md:text-3xl font-script text-champagne italic" style={{ fontFamily: 'Dancing Script, cursive' }}>
              Wedding Invitation
            </div>
          </motion.div>

          {/* Couple names */}
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-5xl md:text-7xl lg:text-8xl font-script text-white mb-6 drop-shadow-lg"
            style={{ fontFamily: 'Dancing Script, cursive' }}
          >
            {t.coupleNames}
          </motion.h1>

          {/* Date */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-2xl md:text-3xl font-script text-champagne mb-8 drop-shadow-lg"
            style={{ fontFamily: 'Dancing Script, cursive' }}
          >
            {t.weddingDate}
          </motion.div>

          {/* Decorative divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="w-32 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 