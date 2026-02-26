# MSG-185 [ASSISTANT]
Archived: 2026-02-26T10:17:08.262018+00:00

---

Now let me create a hook to use translations easily:

## Tool Calls
- **create_file** (id: `tooluse_t3ohcNu89v2o9ZEKKTXDvN`)
```json
{
  "file_contents": "'use client'\n\nimport { useLanguage } from '@/providers/LanguageProvider'\nimport { getTranslation } from '@/lib/translations'\n\nexport function useTranslation() {\n  const { language } = useLanguage()\n  \n  return {\n    t: (path: string) => getTranslation(language, path),\n    language,\n  }\n}\n",
  "file_path": "src/hooks/useTranslation.ts"
}
```