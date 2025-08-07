import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { useRole } from '../contexts/RoleContext'
import { Role } from '../translations'

const RoleSelection = () => {
  const { t } = useLanguage()
  const { selectInitialRole } = useRole()

  const handleRoleSelect = (role: Role) => {
    selectInitialRole(role)
  }

  return (
    <div className="min-h-screen bg-gray-300 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-md mx-auto px-6 text-center"
      >
        {/* Couple names */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-5xl font-script text-burgundy mb-4"
          style={{ fontFamily: 'Dancing Script, cursive' }}
        >
          Rezi & Miho
        </motion.h1>

        {/* Role selection message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-8"
        >
        </motion.div>

        {/* Role Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="space-y-4"
        >
          <button
            onClick={() => handleRoleSelect('family')}
            className="w-full p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border-2 border-transparent hover:border-maple-red hover:bg-white transition-all duration-300 transform hover:scale-105"
          >
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-2xl">👨‍👩‍👧‍👦</span>
              <span className="text-lg font-serif text-gray-800">{t.familyOption}</span>
            </div>
            <p className="text-sm text-gray-600">{t.familyDescription}</p>
          </button>

          <button
            onClick={() => handleRoleSelect('friends')}
            className="w-full p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border-2 border-transparent hover:border-maple-red hover:bg-white transition-all duration-300 transform hover:scale-105"
          >
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-2xl">👥</span>
              <span className="text-lg font-serif text-gray-800">{t.friendsOption}</span>
            </div>
            <p className="text-sm text-gray-600">{t.friendsDescription}</p>
          </button>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default RoleSelection 