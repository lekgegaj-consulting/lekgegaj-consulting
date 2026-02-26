'use client'

import { useLanguage } from '@/providers/LanguageProvider'
import { getTranslation } from '@/lib/translations'

export function useTranslation() {
  const { language } = useLanguage()
  
  return {
    t: (path: string) => getTranslation(language, path),
    language,
  }
}
