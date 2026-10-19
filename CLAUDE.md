# Arcade Docs

Arcade documentation site built with Next.js (App Router, Turbopack) + Fumadocs, using **bun** as the package manager and script runner. Content is authored in MDX with custom React components. Check `package.json` for current framework versions.

## Commands

```bash
bun install           # Install dependencies (pinned exact versions; bunfig enforces a 3-day minimum release age)
bun run dev           # Local dev server (port 3000)
bun run build         # Production build (next build, Turbopack)
bun run lint          # Lint with Ultracite (Biome-based)
bun run format        # Auto-format with Ultracite
bun run typecheck     # tsc for the root, scripts/, and toolkit-docs-generator/ tsconfigs
bun run test          # Run all Vitest tests
bun run test:watch    # Watch mode
bun run vale:check    # Check docs against style rules (vale content/docs/)
bun run check-meta    # Validate meta.json "pages" entries against sibling files
bun run check-redirects   # Validate redirects.ts and detect deleted pages without redirects
bun run sync-toolkit-sidebar  # Regenerate integration category meta.json files from toolkit JSON
```

Run a single test:

```bash
bunx vitest run tests/broken-link-check.test.ts
```

Run a script directly with `bun scripts/<name>.ts` (never `tsx`, `npx`, `pnpm`, or `npm`).

## Architecture

- **`content/docs/`** — All MDX content. `content/docs/a/b.mdx` and `content/docs/a/b/index.mdx` both serve `/en/a/b`; `content/docs/index.mdx` serves `/en`. Each folder's `meta.json` (`{"title", "icon", "pages": [...]}`) sets sidebar order. Page tree is built by `lib/source.ts` (fumadocs `loader`, `baseUrl: "/en"`).
- **`app/en/[[...slug]]/page.tsx`** — Renders MDX pages from `lib/source.ts`; falls back to `lib/toolkit-route.tsx` for generated toolkit (MCP server) pages at `/en/resources/integrations/<category>/<toolkitId>`.
- **`components/mdx/`** — Nextra-compatible MDX components (`Callout`, `Tabs`, `Steps`, `Cards`, ...) registered globally in `mdx-components.tsx`; MDX files need no imports for them.
- **`components/pages/<section>/`** — Page-local components that used to sit beside a page; **`components/toolkit-docs/`** — toolkit reference page UI; other shared components live directly in `components/`.
- **`lib/`** — fumadocs source/layout config, toolkit data/slug/static-param helpers, integration catalog, glossary remark plugin, `remark-nextra-compat`, config and dictionaries.
- **`data/partner-toolkits.ts`** — Hand-authored partner integrations (no toolkit JSON).
- **`toolkit-docs-generator/`** — Generates MCP toolkit JSON into `toolkit-docs-generator/data/toolkits/`; `scripts/sync-toolkit-sidebar.ts` emits the nine integration category `meta.json` files.
- **`scripts/`** — Build/CI scripts (Vale style fixes/reviews, redirect checking, meta.json validation, internal link updates, llms.txt generation, Algolia crawler config sync).
- **`tests/`** — Vitest tests (broken links, internal links, frontmatter, sitemap, toolkit data, navigation contracts). `tests/helpers/content-paths.ts` maps content files ↔ URLs.
- **`redirects.ts`** — Redirect data module (~215 rules) imported by `next.config.ts`, the redirect checker, and tests.
- **`source.config.ts`** — fumadocs-mdx config (frontmatter schema, Shiki transformers). `proxy.ts` redirects locale-less and non-English paths to `/en`.

## Content Authoring

Follow **STYLEGUIDE.md** for writing standards and **AUTHORING.md** for formatting conventions (frontmatter fields, `meta.json` format, code-fence meta). Key points:

- Every page needs frontmatter `title` (rendered as the page heading — do not repeat it as an `# H1` in the body) and should have `description`.
- Sentence case for headings. Active voice. Direct tone.
- Product is always "Arcade" (never abbreviated, never "Arcade AI").
- Use "Arcade Engine" (capitalized), "MCP server" (lowercase server), "tool" (lowercase), "auth provider".
- Code snippets: 4 spaces for Python, 2 spaces for other languages. Code-fence meta: `title="file.py"`, `lineNumbers`, `{1,3-5}`.
- New page: add the MDX file and list its slug in the folder's `meta.json` `pages` (unless the file contains `"..."`). Deleted or renamed page: add an entry to `redirects.ts`.
- Run `bun run vale:check` before submitting docs changes.

Vale is a Go binary with no npm dependency, so a clean checkout does not have it. Install it once, then fetch the style packages (`styles/Google/`, `styles/alex/`, `styles/write-good/` are gitignored):

```bash
brew install vale   # or see https://vale.sh/docs/install
bun run vale:sync
```

## Pre-commit Hooks

Husky runs on commit: Vale style checks on `.md/.mdx`, `meta.json` validation, redirect checking for deleted/renamed `content/docs` pages, internal link updates, and Ultracite formatting via lint-staged. You MUST fix any issues surfaced by the pre-commit hooks. NEVER bypass hooks with `--no-verify` or similar flags.

## Dependencies

Dependencies are pinned to exact versions and `bunfig.toml` rejects releases younger than three days. Add a package with `bun add --exact <pkg>@<version>` (or `bun add --exact --dev`), never by hand-editing `package.json`, and never use pnpm/npm/yarn.

## Key Config Files

- `biome.jsonc` — Linter/formatter rules (Biome via Ultracite)
- `.vale.ini` — Vale style checker config (Google style base + Arcade vocabulary)
- `bunfig.toml` — bun install policy (`minimumReleaseAge`)
- `tsconfig.json`, `scripts/tsconfig.json`, `toolkit-docs-generator/tsconfig.json` — TypeScript configs (`@/*` → repo root)
- `vitest.config.ts` — Test config (`@` alias; `tests/external-url-check.test.ts` runs only via `bun run test:external-urls`)
- `postcss.config.mjs` — PostCSS/Tailwind config

## Code Quality

NEVER add suppression comments (`// @ts-ignore`, `// @ts-expect-error`, `// biome-ignore`, `eslint-disable`, `{/* prettier-ignore */}`, etc.) to bypass TypeScript or linter errors. Fix the underlying issue instead.
