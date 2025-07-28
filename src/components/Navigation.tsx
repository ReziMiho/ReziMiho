import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Globe } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { t, currentLanguage, toggleLanguage } = useLanguage()

  const navItems = [
    { name: t.countdown, href: '#countdown' },
    { name: t.message, href: '#message' },
    { name: t.profile, href: '#profile' },
    { name: t.gallery, href: '#gallery' },
    { name: t.partyInfo, href: '#party-info' },
    { name: t.rsvp, href: '#rsvp' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <>
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="flex items-center justify-between px-4 py-3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-lg font-script text-dusty-rose"
            style={{ fontFamily: 'Dancing Script, cursive' }}
          >
            {t.coupleNames}
          </motion.div>
          
          <div className="flex items-center gap-2">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-3 py-2 text-dusty-rose hover:bg-dusty-rose/10 rounded-lg transition-colors text-sm"
              title={t.language}
            >
              <Globe size={16} />
              <span className="font-medium">{currentLanguage.toUpperCase()}</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-dusty-rose hover:bg-dusty-rose/10 rounded-lg transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/50"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 z-50 h-full w-80 bg-white shadow-xl"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <span className="text-lg font-script text-dusty-rose" style={{ fontFamily: 'Dancing Script, cursive' }}>
                {t.menu}
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-dusty-rose hover:bg-dusty-rose/10 rounded-lg"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="px-6 py-8">
              <ul className="space-y-4">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className="block w-full text-left py-3 px-4 text-gray-700 hover:bg-champagne/30 hover:text-dusty-rose rounded-lg transition-all duration-200 font-serif"
                    >
                      {item.name}
                    </button>
                  </motion.li>
                ))}
              </ul>

              {/* Language Toggle in Menu */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 text-gray-700 hover:bg-champagne/30 hover:text-dusty-rose rounded-lg transition-all duration-200 font-serif"
                >
                  <Globe size={18} />
                  {t.language}: {currentLanguage === 'en' ? 'English' : '日本語'}
                </button>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation 