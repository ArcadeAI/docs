# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Arcade documentation site built with **Next.js 16 + Nextra 4** (App Router), using pnpm as the package manager. Content is authored in MDX with custom React components.

## Commands

```bash
pnpm dev              # Local dev server (port 3000)
pnpm build            # Full production build (toolkit-markdown → next build → pagefind)
pnpm lint             # Lint with Ultracite (Biome-based)
pnpm format           # Auto-format with Ultracite
pnpm test             # Run all Vitest tests
pnpm test:watch       # Watch mode
pnpm vale:check       # Check docs against style rules
```

Run a single test:
```bash
pnpm vitest run tests/broken-link-check.test.ts
```

## Architecture

- **`app/en/`** — English docs content (MDX pages). Nextra file-based routing with `_meta.tsx` for navigation order.
- **`app/es/`, `app/pt-BR/`** — Translated content. i18n handled via middleware (`middleware.ts`).
- **`app/_components/`** — Shared React components (tabbed code blocks, toolkit docs, callouts, etc.).
- **`app/_lib/`** — Data-fetching utilities (toolkit catalog, slug generation, static params).
- **`app/api/`** — API routes (markdown export, toolkit-data, glossary).
- **`toolkit-docs-generator/`** — Generates MCP toolkit documentation from server metadata JSON files in `toolkit-docs-generator/data/toolkits/`.
- **`scripts/`** — Build/CI scripts (clean markdown export, Vale style fixes, redirect checking, pagefind indexing, i18n sync).
- **`tests/`** — Vitest tests (broken links, internal link validation, sitemap, smoke tests).
- **`lib/`** — Next.js utilities (glossary remark plugin, llmstxt plugin).
- **`next.config.ts`** — Contains ~142 redirect rules.

## Content Authoring

Follow **STYLEGUIDE.md** for writing standards and **AUTHORING.md** for formatting conventions. Key points:

- Sentence case for headings. Active voice. Direct tone.
- Product is always "Arcade" (never abbreviated, never "Arcade AI").
- Use "Arcade Engine" (capitalized), "MCP server" (lowercase server), "tool" (lowercase), "auth provider".
- Code snippets: 4 spaces for Python, 2 spaces for other languages.
- Run `pnpm vale:check` before submitting docs changes.

## Pre-commit Hooks

Husky runs on commit: Vale style checks on `.md/.mdx`, `_meta.tsx` key validation, redirect checking for deleted/renamed pages, internal link updates, and Ultracite formatting.

## Key Config Files

- `biome.jsonc` — Linter/formatter rules (Biome via Ultracite)
- `.vale.ini` — Vale style checker config (Google style base + Arcade vocabulary)
- `.nvmrc` — Node 22.x required
- `pnpm-lock.yaml` — pnpm 10.11.0 (lockfile version)

## LLM-Aware Features

Middleware detects LLM user agents and serves optimized markdown instead of HTML. The build generates `llms.txt` and clean markdown exports for AI consumption.
