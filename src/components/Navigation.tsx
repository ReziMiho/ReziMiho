import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Countdown', href: '#countdown' },
    { name: 'Message', href: '#message' },
    { name: 'Profile', href: '#profile' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Party Info', href: '#party-info' },
    { name: 'RSVP', href: '#rsvp' },
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
            Rezi & Miho
          </motion.div>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-dusty-rose hover:bg-dusty-rose/10 rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
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
                Menu
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
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation 