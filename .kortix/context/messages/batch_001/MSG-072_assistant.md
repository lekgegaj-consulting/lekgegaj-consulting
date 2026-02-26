# MSG-072 [ASSISTANT]
Archived: 2026-02-26T06:10:43.118614+00:00

---

Now let me update the root layout to include schema markup:

## Tool Calls
- **str_replace** (id: `tooluse_i4IqZR0Lqx3oPOlapgUlwd`)
```json
{
  "file_path": "src/app/layout.tsx",
  "old_str": "import type { Metadata } from 'next'\nimport { Playfair_Display, Inter, Cormorant_Garamond } from 'next/font/google'\nimport './globals.css'",
  "new_str": "import type { Metadata } from 'next'\nimport { Playfair_Display, Inter, Cormorant_Garamond } from 'next/font/google'\nimport './globals.css'\nimport { LocalBusinessSchema, LegalServiceSchema, ProfessionalServiceSchema } from '@/components/SchemaMarkup'"
}
```