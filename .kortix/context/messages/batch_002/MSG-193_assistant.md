# MSG-193 [ASSISTANT]
Archived: 2026-02-26T10:17:08.262273+00:00

---

Now let me update the home page with translations:

## Tool Calls
- **full_file_rewrite** (id: `tooluse_kZpJhggNpL7tDfL3K1hUud`)
```json
{
  "file_contents": "'use client'\n\nimport Header from '@/components/Header'\nimport Footer from '@/components/Footer'\nimport Link from 'next/link'\nimport { Briefcase, Scale, Shield, Globe, ArrowRight, CheckCircle } from 'lucide-react'\nimport { useTranslation } from '@/hooks/useTranslation'\n\nexport default function Home() {\n  const { t } = useTranslation()\n\n  return (\n    <>\n      <Header />\n      <main>\n        {/* Hero Section */}\n        <section className=\"bg-gradient-to-br f
... (truncated)
```