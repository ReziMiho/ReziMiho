import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Globe, Users } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { useRole } from '../contexts/RoleContext'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { t, currentLanguage, toggleLanguage } = useLanguage()
  const { currentRole, setRole } = useRole()

  const navItems = [
    { name: t.countdown, href: '#countdown' },
    { name: t.message, href: '#message' },
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

  const toggleRole = () => {
    const newRole = currentRole === 'family' ? 'friends' : 'family'
    setRole(newRole)
  }

  return (
    <>
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center justify-end px-4 py-3">
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white/50 bg-gray-500/50 hover:bg-gray-600 rounded-lg transition-colors drop-shadow-lg backdrop-blur-sm"
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
              <span className="text-lg font-script text-charcoal" style={{ fontFamily: 'Dancing Script, cursive' }}>
                {t.menu}
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-silver hover:bg-gray-300 rounded-lg"
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
                      className="block w-full text-left py-3 px-4 text-charcoal hover:bg-gray-300 rounded-lg transition-all duration-200 font-serif"
                    >
                      {item.name}
                    </button>
                  </motion.li>
                ))}
              </ul>

              {/* Language and Role Toggle in Menu */}
              <div className="mt-8 pt-6 border-t border-gray-200 space-y-3">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 text-charcoal hover:bg-gray-300 rounded-lg transition-all duration-200 font-serif"
                >
                  <Globe size={18} />
                  {t.language}: {currentLanguage === 'en' ? 'English' : '日本語'}
                </button>

                {currentRole && (
                  <button
                    onClick={toggleRole}
                    className="flex items-center justify-center gap-2 w-full py-3 px-4 text-charcoal hover:bg-gray-300 rounded-lg transition-all duration-200 font-serif"
                  >
                    <Users size={18} />
                    {currentRole === 'family' ? t.familyOption : t.friendsOption}
                  </button>
                )}
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation 