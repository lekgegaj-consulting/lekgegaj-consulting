'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Globe } from 'lucide-react'
import { useLanguage } from '@/providers/LanguageProvider'
import { useTranslation } from '@/hooks/useTranslation'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const { language, setLanguage } = useLanguage()
  const { t } = useTranslation()

  const toggleMenu = () => setIsOpen(!isOpen)
  const toggleLangMenu = () => setLangOpen(!langOpen)

  const handleLanguageChange = (lang: 'en' | 'al') => {
    setLanguage(lang)
    setLangOpen(false)
  }

  return (
    <header className="bg-cream border-b border-light-gray sticky top-0 z-50 shadow-sm">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="text-navy-600 font-playfair text-2xl font-bold">
              Lekgegaj<span className="text-gold-700">.</span>
            </div>
            <div className="text-gold-700 text-xs font-semibold tracking-widest">
              CONSULTING
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-charcoal hover:text-gold-700 transition-colors font-medium">
              {t('nav.home')}
            </Link>
            <Link href="/services" className="text-charcoal hover:text-gold-700 transition-colors font-medium">
              {t('nav.services')}
            </Link>
            <Link href="/about" className="text-charcoal hover:text-gold-700 transition-colors font-medium">
              {t('nav.about')}
            </Link>
            <Link href="/contact" className="btn-primary text-sm">
              {t('nav.contact')}
            </Link>
            
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={toggleLangMenu}
                className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-light-gray transition-colors text-charcoal font-medium"
                aria-label="Change language"
              >
                <Globe size={18} />
                <span className="uppercase text-sm font-bold">{language}</span>
              </button>
              
              {langOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white border border-light-gray rounded-lg shadow-lg z-10">
                  <button
                    onClick={() => handleLanguageChange('en')}
                    className={`w-full text-left px-4 py-2 hover:bg-light-gray transition-colors ${
                      language === 'en' ? 'bg-gold-700 text-cream font-bold' : 'text-charcoal'
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => handleLanguageChange('al')}
                    className={`w-full text-left px-4 py-2 hover:bg-light-gray transition-colors ${
                      language === 'al' ? 'bg-gold-700 text-cream font-bold' : 'text-charcoal'
                    }`}
                  >
                    Shqip
                  </button>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Menu & Language Button */}
          <div className="md:hidden flex items-center gap-2">
            {/* Mobile Language Switcher */}
            <div className="relative">
              <button
                onClick={toggleLangMenu}
                className="flex items-center gap-1 px-2 py-2 rounded-md hover:bg-light-gray transition-colors text-charcoal"
                aria-label="Change language"
              >
                <Globe size={18} />
                <span className="text-xs font-bold">{language.toUpperCase()}</span>
              </button>
              
              {langOpen && (
                <div className="absolute right-0 mt-2 w-28 bg-white border border-light-gray rounded-lg shadow-lg z-10">
                  <button
                    onClick={() => handleLanguageChange('en')}
                    className={`w-full text-left px-3 py-2 text-sm hover:bg-light-gray transition-colors ${
                      language === 'en' ? 'bg-gold-700 text-cream font-bold' : 'text-charcoal'
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => handleLanguageChange('al')}
                    className={`w-full text-left px-3 py-2 text-sm hover:bg-light-gray transition-colors ${
                      language === 'al' ? 'bg-gold-700 text-cream font-bold' : 'text-charcoal'
                    }`}
                  >
                    Shqip
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="p-2 hover:bg-light-gray rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 border-t border-light-gray pt-4 space-y-3">
            <Link
              href="/"
              className="block text-charcoal hover:text-gold-700 transition-colors font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.home')}
            </Link>
            <Link
              href="/services"
              className="block text-charcoal hover:text-gold-700 transition-colors font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.services')}
            </Link>
            <Link
              href="/about"
              className="block text-charcoal hover:text-gold-700 transition-colors font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.about')}
            </Link>
            <Link
              href="/contact"
              className="btn-primary text-sm block text-center"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.contact')}
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
