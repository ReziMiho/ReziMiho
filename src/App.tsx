import { LanguageProvider, useLanguage } from './contexts/LanguageContext'
import WeddingInvitation from './components/WeddingInvitation'
import LanguageSelection from './components/LanguageSelection'
import { motion, AnimatePresence } from 'framer-motion'

const AppContent = () => {
  const { hasSelectedLanguage } = useLanguage()

  return (
    <AnimatePresence mode="wait">
      {!hasSelectedLanguage ? (
        <motion.div
          key="language-selection"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5 }}
        >
          <LanguageSelection />
        </motion.div>
      ) : (
        <motion.div
          key="wedding-invitation"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <WeddingInvitation />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <AppContent />
      </div>
    </LanguageProvider>
  )
}

export default App 