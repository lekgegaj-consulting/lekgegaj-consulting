# MSG-237 [ASSISTANT]
Archived: 2026-02-26T10:17:08.264308+00:00

---

Good, it's Next.js 14. The issue is that the pages are being pre-rendered at build time. Let me remove the dynamic exports and instead wrap the pages in a Suspense boundary with a fallback. First, let me remove the dynamic exports:

## Tool Calls
- **str_replace** (id: `tooluse_VsrUD3Tz0DC4pC32UmRAO3`)
```json
{
  "file_path": "src/app/page.tsx",
  "old_str": "'use client'\n\nimport Header from '@/components/Header'\nimport Footer from '@/components/Footer'\nimport Link from 'next/link'\nimport { Briefcase, Scale, Shield, Globe, ArrowRight, CheckCircle } from 'lucide-react'\nimport { useTranslation } from '@/hooks/useTranslation'\n\nexport const dynamic = 'force-dynamic'\n\nexport default function Home() {",
  "new_str": "'use client'\n\nimport Header from '@/components/Header'\nimport Footer from '@/
... (truncated)
```