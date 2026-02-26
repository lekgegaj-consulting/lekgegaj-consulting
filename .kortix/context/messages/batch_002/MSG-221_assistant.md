# MSG-221 [ASSISTANT]
Archived: 2026-02-26T10:17:08.263587+00:00

---

The issue is that Next.js is trying to pre-render these pages at build time. I need to disable static generation for these pages. Let me add a dynamic export:

## Tool Calls
- **str_replace** (id: `tooluse_n2ndKJhnzgCcAlp3iJXfIU`)
```json
{
  "file_path": "src/app/page.tsx",
  "new_str": "'use client'\n\nimport Header from '@/components/Header'\nimport Footer from '@/components/Footer'\nimport Link from 'next/link'\nimport { Briefcase, Scale, Shield, Globe, ArrowRight, CheckCircle } from 'lucide-react'\nimport { useTranslation } from '@/hooks/useTranslation'\n\nexport const dynamic = 'force-dynamic'\n\nexport default function Home() {",
  "old_str": "'use client'\n\nimport Header from '@/components/Header'\nimport Footer from '@/
... (truncated)
```