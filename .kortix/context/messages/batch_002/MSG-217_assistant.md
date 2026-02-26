# MSG-217 [ASSISTANT]
Archived: 2026-02-26T10:17:08.263374+00:00

---

The issue is that the pages are being pre-rendered on the server, but they need the LanguageProvider context. I need to make these pages dynamic. Let me update them:

## Tool Calls
- **str_replace** (id: `tooluse_4aGZGD3WWQFhGQyaoVr2EX`)
```json
{
  "file_path": "src/app/page.tsx",
  "new_str": "'use client'\n\nimport Header from '@/components/Header'",
  "old_str": "'use client'\n\nimport Header from '@/components/Header'"
}
```