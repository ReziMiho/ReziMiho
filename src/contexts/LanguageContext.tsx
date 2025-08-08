import React, { createContext, useContext, useState, useEffect, ReactNode, useMemo, useCallback } from 'react'
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

  const setLanguage = useCallback((lang: Language) => {
    setCurrentLanguage(lang)
    localStorage.setItem('wedding-language', lang)
  }, [])

  const selectInitialLanguage = useCallback((lang: Language) => {
    setCurrentLanguage(lang)
    setHasSelectedLanguage(true)
    localStorage.setItem('wedding-language', lang)
  }, [])

  const toggleLanguage = useCallback(() => {
    setCurrentLanguage(prev => {
      const newLang: Language = prev === 'en' ? 'ja' : 'en'
      localStorage.setItem('wedding-language', newLang)
      return newLang
    })
  }, [])

  const t = useMemo(() => translations[currentLanguage], [currentLanguage])

  const value: LanguageContextType = useMemo(() => ({
    currentLanguage,
    setLanguage,
    t,
    toggleLanguage,
    hasSelectedLanguage,
    selectInitialLanguage,
  }), [currentLanguage, setLanguage, t, toggleLanguage, hasSelectedLanguage, selectInitialLanguage])

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