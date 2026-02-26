'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import type { Language } from '@/lib/translations'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')

  useEffect(() => {
    try {
      // Check localStorage first
      const savedLang = localStorage.getItem('language') as Language | null
      
      if (savedLang && (savedLang === 'en' || savedLang === 'al')) {
        setLanguageState(savedLang)
      } else {
        // Detect user's location
        detectLanguage()
      }
    } catch (error) {
      console.error('Error reading language preference:', error)
    }
  }, [])

  const detectLanguage = () => {
    try {
      // Try to detect from browser language
      const browserLang = navigator.language.toLowerCase()
      
      if (browserLang.startsWith('sq')) {
        // Albanian language detected
        setLanguageState('al')
        localStorage.setItem('language', 'al')
        return
      }

      // Try geolocation API (optional - requires user permission)
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords
            
            // Check if coordinates are in Albania (roughly)
            // Albania is approximately between 39°N-42°N latitude and 19°E-21°E longitude
            if (latitude >= 39 && latitude <= 42.5 && longitude >= 19 && longitude <= 21.5) {
              setLanguageState('al')
              localStorage.setItem('language', 'al')
            }
          },
          () => {
            // Geolocation denied or failed - use browser language
            if (browserLang.startsWith('sq')) {
              setLanguageState('al')
              localStorage.setItem('language', 'al')
            }
          }
        )
      }
    } catch (error) {
      console.error('Language detection error:', error)
    }
  }

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    try {
      localStorage.setItem('language', lang)
    } catch (error) {
      console.error('Error saving language preference:', error)
    }
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
