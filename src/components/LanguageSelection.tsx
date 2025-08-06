import { motion } from 'framer-motion'
import { Heart, Globe } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const LanguageSelection = () => {
  const { selectInitialLanguage } = useLanguage()

  const handleLanguageSelect = (language: 'en' | 'ja') => {
    selectInitialLanguage(language)
  }

  return (
    <div className="min-h-screen bg-gray-300 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-md mx-auto px-6 text-center"
      >
        {/* Welcome decoration */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <Heart className="w-12 h-12 text-maple-red fill-current" />
            <Globe className="w-6 h-6 text-burnt-orange absolute -top-1 -right-1" />
          </div>
        </motion.div>

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

        {/* Welcome message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-serif text-gray-800 mb-2">Welcome</h2>
          <h2 className="text-2xl font-serif text-gray-800 mb-6">ようこそ</h2>
          <p className="text-gray-600 font-serif mb-2">Please select your preferred language</p>
          <p className="text-gray-600 font-serif">ご希望の言語をお選びください</p>
        </motion.div>

        {/* Language Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="space-y-4"
        >
          <button
            onClick={() => handleLanguageSelect('en')}
            className="w-full p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border-2 border-transparent hover:border-maple-red hover:bg-white transition-all duration-300 transform hover:scale-105"
          >
            <div className="flex items-center justify-center gap-3">
              <span className="text-2xl">🇺🇸</span>
              <span className="text-lg font-serif text-gray-800">English</span>
            </div>
          </button>

          <button
            onClick={() => handleLanguageSelect('ja')}
            className="w-full p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border-2 border-transparent hover:border-maple-red hover:bg-white transition-all duration-300 transform hover:scale-105"
          >
            <div className="flex items-center justify-center gap-3">
              <span className="text-2xl">🇯🇵</span>
              <span className="text-lg font-serif text-gray-800">日本語</span>
            </div>
          </button>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default LanguageSelection 