import React, { createContext, useContext, useState, ReactNode } from 'react'
import { Language, Translations, translations } from '../translations'

interface LanguageContextType {
  currentLanguage: Language
  setLanguage: (lang: Language) => void
  t: Translations
  toggleLanguage: () => void
  hasSelectedLanguage: boolean
  selectInitialLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface LanguageProviderProps {
  children: ReactNode
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en')
  const [hasSelectedLanguage, setHasSelectedLanguage] = useState(false)

  const setLanguage = (lang: Language) => {
    setCurrentLanguage(lang)
  }

  const selectInitialLanguage = (lang: Language) => {
    setCurrentLanguage(lang)
    setHasSelectedLanguage(true)
  }

  const toggleLanguage = () => {
    setCurrentLanguage(prev => prev === 'en' ? 'ja' : 'en')
  }

  const t = translations[currentLanguage]

  const value: LanguageContextType = {
    currentLanguage,
    setLanguage,
    t,
    toggleLanguage,
    hasSelectedLanguage,
    selectInitialLanguage,
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
} 