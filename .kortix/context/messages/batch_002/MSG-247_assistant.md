# MSG-247 [ASSISTANT]
Archived: 2026-02-26T10:17:08.264894+00:00

---

The issue is that Next.js is still trying to pre-render these pages. Let me update the next.config.js to disable static generation for these routes:

## Tool Calls
- **str_replace** (id: `tooluse_5GDB6DnCmiE0v1w2blAfJc`)
```json
{
  "file_path": "next.config.js",
  "old_str": "/** @type {import('next').NextConfig} */\nconst nextConfig = {\n  reactStrictMode: true,\n  swcMinify: true,\n  images: {\n    unoptimized: false,\n    formats: ['image/avif', 'image/webp'],\n    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],\n    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],\n  },",
  "new_str": "/** @type {import('next').NextConfig} */\nconst nextConfig = {\n  reactStrictMode: true,\n  swcMinify: true,\n  output:
... (truncated)
```