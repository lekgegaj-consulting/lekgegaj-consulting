'use client'

import { LanguageProvider } from '@/providers/LanguageProvider'

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>
}
