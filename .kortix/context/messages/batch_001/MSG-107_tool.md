# MSG-107 [TOOL]
Archived: 2026-02-26T06:10:43.119448+00:00

---

{"output": "root@9bb9c805-3b35-48d6-b875-b2d77c6a182d:/app# cd /workspace\r\n\rroot@9bb9c805-3b35-48d6-b875-b2d77c6a182d:/workspace# cd /workspace && npm run build 2>&1 | grep -E \"(\u2713|\u2717|Route|compiled|error|Error)\" | head -40; echo '__CMD_DONE_67710fdc__' $?\r\n\rAn error occurred in `next/font`.\r\nSyntaxError: Unexpected token '{'\r\nAn error occurred in `next/font`.\r\nSyntaxError: Unexpected token '{'\r\nAn error occurred in `next/font`.\r\nSyntaxError: Unexpected token '{'\r\n> Build failed because of webpack errors", "cwd": "/workspace", "exit_code": 0}