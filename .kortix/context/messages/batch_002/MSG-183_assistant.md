# MSG-183 [ASSISTANT]
Archived: 2026-02-26T10:17:08.261977+00:00

---

Now let me create a language context provider:

## Tool Calls
- **create_file** (id: `tooluse_cGXdhXcT8L29QKNlcpDjCM`)
```json
{
  "file_contents": "'use client'\n\nimport React, { createContext, useContext, useEffect, useState } from 'react'\nimport type { Language } from '@/lib/translations'\n\ninterface LanguageContextType {\n  language: Language\n  setLanguage: (lang: Language) => void\n}\n\nconst LanguageContext = createContext<LanguageContextType | undefined>(undefined)\n\nexport function LanguageProvider({ children }: { children: React.ReactNode }) {\n  const [language, setLanguageState] = useState<Language>('en'
... (truncated)
```