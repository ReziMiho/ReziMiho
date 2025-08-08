import { LanguageProvider, useLanguage } from './contexts/LanguageContext'
import { RoleProvider, useRole } from './contexts/RoleContext'
import WeddingInvitation from './components/WeddingInvitation'
import LanguageSelection from './components/LanguageSelection'
import RoleSelection from './components/RoleSelection'
import { motion, AnimatePresence } from 'framer-motion'

const AppContent = () => {
  const { hasSelectedLanguage, currentLanguage } = useLanguage()
  const { hasSelectedRole } = useRole()

  return (
    <div data-language={currentLanguage}>
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
      ) : !hasSelectedRole ? (
        <motion.div
          key="role-selection"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5 }}
        >
          <RoleSelection />
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
    </div>
  )
}

function App() {
  return (
    <LanguageProvider>
      <RoleProvider>
        <div className="App">
          <AppContent />
        </div>
      </RoleProvider>
    </LanguageProvider>
  )
}

export default App 