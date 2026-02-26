# MSG-187 [ASSISTANT]
Archived: 2026-02-26T10:17:08.262047+00:00

---

Now let me update the Header with the language switcher:

## Tool Calls
- **str_replace** (id: `tooluse_DFzKbxhLmZX6a0ceEtM5p5`)
```json
{
  "file_path": "src/components/Header.tsx",
  "old_str": "'use client'\n\nimport Link from 'next/link'\nimport { useState } from 'react'\nimport { Menu, X } from 'lucide-react'\n\nexport default function Header() {\n  const [isOpen, setIsOpen] = useState(false)\n\n  const toggleMenu = () => setIsOpen(!isOpen)\n\n  return (\n    <header className=\"bg-cream border-b border-light-gray sticky top-0 z-50 shadow-sm\">\n      <div className=\"container-custom\">\n        <div className=\"flex justif
... (truncated)
```