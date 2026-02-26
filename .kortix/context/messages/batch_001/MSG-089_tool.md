# MSG-089 [TOOL]
Archived: 2026-02-26T06:10:43.119025+00:00

---

{"output": "root@9bb9c805-3b35-48d6-b875-b2d77c6a182d:/app# cd /workspace\r\n\rroot@9bb9c805-3b35-48d6-b875-b2d77c6a182d:/workspace# cd /workspace && npm run build 2>&1 | tail -30; echo '__CMD_DONE_ec848294__' $?\r\n\r\r\n> lekgegaj-consulting@1.0.0 build\r\n> next build\r\n\r\n\r\n> Build error occurred\r\nError: Configuring Next.js via 'next.config.ts' is not supported. Please replace the file with 'next.config.js' or 'next.config.mjs'.\r\n    at loadConfig (/workspace/node_modules/next/dist/server/config.js:800:19)\r\n    at async Span.traceAsyncFn (/workspace/node_modules/next/dist/trace/trace.js:154:20)\r\n    at async /workspace/node_modules/next/dist/build/index.js:374:28\r\n    at async Span.traceAsyncFn (/workspace/node_modules/next/dist/trace/trace.js:154:20)\r\n    at async build (/workspace/node_modules/next/dist/build/index.js:368:9)", "cwd": "/workspace", "exit_code": 0}