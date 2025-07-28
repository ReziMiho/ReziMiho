import React, { createContext, useContext, useState, ReactNode } from 'react'
import { Language, Translations, translations } from '../translations'

interface LanguageContextType {
  currentLanguage: Language
  setLanguage: (lang: Language) => void
  t: Translations
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface LanguageProviderProps {
  children: ReactNode
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en')

  const setLanguage = (lang: Language) => {
    setCurrentLanguage(lang)
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