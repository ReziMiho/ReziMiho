import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
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

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('wedding-language') as Language | null
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ja')) {
      setCurrentLanguage(savedLanguage)
      setHasSelectedLanguage(true)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setCurrentLanguage(lang)
    localStorage.setItem('wedding-language', lang)
  }

  const selectInitialLanguage = (lang: Language) => {
    setCurrentLanguage(lang)
    setHasSelectedLanguage(true)
    localStorage.setItem('wedding-language', lang)
  }

  const toggleLanguage = () => {
    const newLang = currentLanguage === 'en' ? 'ja' : 'en'
    setCurrentLanguage(newLang)
    localStorage.setItem('wedding-language', newLang)
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