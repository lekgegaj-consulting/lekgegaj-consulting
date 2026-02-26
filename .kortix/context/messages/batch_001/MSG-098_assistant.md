# MSG-098 [ASSISTANT]
Archived: 2026-02-26T06:10:43.119153+00:00

---

Let me fix the layout file - the issue is with the schema markup import:

## Tool Calls
- **str_replace** (id: `tooluse_FWzOwffcAt7YkODIWQTC1e`)
```json
{
  "file_path": "src/app/layout.tsx",
  "old_str": "import type { Metadata } from 'next'\nimport { Playfair_Display, Inter, Cormorant_Garamond } from 'next/font/google'\nimport './globals.css'\nimport { LocalBusinessSchema, LegalServiceSchema, ProfessionalServiceSchema } from '@/components/SchemaMarkup'",
  "new_str": "import type { Metadata } from 'next'\nimport { Playfair_Display, Inter, Cormorant_Garamond } from 'next/font/google'\nimport './globals.css'"
}
```