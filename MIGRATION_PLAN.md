# Nextra → Fumadocs migration plan (contract for all workstreams)

Source (read-only): the Nextra site, `ArcadeAI/docs` main (Next 16 + Nextra 4, pnpm).
Target (this branch): (Next 16.3.8 Turbopack, fumadocs-core/ui 16.15.18, fumadocs-mdx 15.4.6, React 19.3, Tailwind 4.3, TypeScript 7.0.2, **bun 1.4.2** as package manager + script runner).

Non-negotiables
- Every page, example, image, video, toolkit page and script of the source repo must exist here. URLs stay identical (`/en/...`). Do not drop content to make a build pass; port it.
- Dependencies: pinned exact versions, nothing published in the last 3 days (bunfig `minimumReleaseAge` enforces this). **Do not edit `package.json` dependencies yourself** — tell the coordinator which package you need and why. Only the scripts/CI workstream edits the `scripts` section of `package.json`.
- No `// @ts-ignore`, `@ts-expect-error`, `biome-ignore`, etc. Fix the real issue.
- Use `bun` (`bun install`, `bun run build`, `bunx <tool>`, `bun scripts/x.ts`), never pnpm/npm/tsx.
- Verification is part of the job: `bun run build` must pass for your area; report anything you could not finish.

## Repo layout (final)

```
app/
  layout.tsx                      # html/body, RootProvider (dark default), metadata, GTM/PostHog/Ory, status script
  global.css                      # tailwind + fumadocs css + design-system tokens + ported globals.css rules
  cheat-sheet-print.css
  not-found.tsx
  sitemap.ts                      # from source.getPages() + toolkit links
  en/layout.tsx                   # DocsLayout: sidebar tree, nav links (Sign Up / Dashboard / Discord / GitHub), footer
  en/[[...slug]]/page.tsx         # MDX pages; falls back to lib/toolkit-route.tsx for toolkit pages
  api/search/route.ts             # Orama search (default)
  api/toolkit-data/[toolkitId]/route.ts
  llms.mdx/[[...slug]]/route.ts   # per-page markdown for "copy page"/agents
content/docs/                     # ALL MDX (was app/en/**/page.mdx) + meta.json (was _meta.tsx)
components/
  mdx/                            # Nextra-compat components (Callout, Tabs, Steps, Cards, ...) + registry
  pages/<section>/...             # page-local components that used to live beside page.mdx in app/en
  toolkit-docs/                   # was app/_components/toolkit-docs
  *.tsx                           # was app/_components/*.tsx
lib/
  source.ts, layout.shared.tsx    # fumadocs loader + base layout options
  toolkit-route.tsx               # toolkit page fallback (interface below)
  toolkit-*.ts, integration-*.ts  # was app/_lib
  remark-glossary.ts, glossary-parser.ts, remark-nextra-steps.ts
  config.ts (was /config.ts), dictionaries/ (was /_dictionaries)
data/partner-toolkits.ts          # was app/_data
toolkit-docs-generator/           # copied verbatim; sync-toolkit-sidebar emits meta.json
scripts/, tests/, .github/, .husky/, styles/, algolia/, agents/, public/
proxy.ts, redirects.ts, source.config.ts, next.config.ts, mdx-components.tsx
```

Path alias: `@/*` → repo root (e.g. `@/components/...`, `@/lib/...`, `@/toolkit-docs-generator/...`).

## Content conventions (`content/docs`)

- `app/en/<p>/page.mdx` → `content/docs/<p>/index.mdx` when `<p>` has child page directories, else `content/docs/<p>.mdx`. `app/en/home/page.mdx` → `content/docs/home.mdx`.
- Frontmatter `title` is required by Fumadocs and is rendered by `<DocsTitle>`. Rules: if the body has a leading `# H1`, remove it from the body and use its text as `title`; if the original frontmatter `title` differs from the H1 text, keep the original as `metaTitle` (used for `<title>` metadata). Keep `description`.
- Nextra `theme` options from `_meta.tsx` become frontmatter on the page: `layout: "full"` → `full: true`; `toc: false` → `toc: false`; `breadcrumb: false` → `breadcrumb: false`. Schema is extended in `source.config.ts` with optional `metaTitle`, `toc`, `breadcrumb`.
- `_meta.tsx` → `meta.json`: `{"title": ..., "icon": "<LucideName>", "pages": [...]}`. Order of keys = `pages` order. Entry forms: plain key `"slug"`; separator `{type:"separator", title}` → `"---Title---"`; `{title, href}` → `"[Title](href)"`; `display: "hidden"` → omit from `pages` (page still routes). A key's custom `title` goes into that page's frontmatter `title`/the child folder's own `meta.json` `title` (Fumadocs reads titles from the child, not the parent). Top-level icons (`Home`, `BookOpen`, `Ruler`, `ServerCog`, `Pencil`, `Book`, `GraduationCap`) go into each top-level folder's `meta.json` `icon` field (`lucideIconsPlugin` resolves them); for `home.mdx` use frontmatter `icon: Home`.
- Code fences: `filename="x"` → `title="x"`; `showLineNumbers` → `lineNumbers`; `highlightLines={a,b}` → `{a,b}`; `{1,3-5}` meta line ranges are supported as-is (transformerMetaHighlight).
- Remove `import { ... } from "nextra/components"` lines. `Callout`, `Tabs`, `Tabs.Tab`, `Steps`, `Cards`, `Cards.Card`, `GuideOverview` (+ `.Outcomes/.Prerequisites/.YouWillLearn`), `SignupLink`, `DashboardLink`, `GlossaryTerm`, `ContactEmail`, `ToolCard`, `SampleAppCard`, `ToggleContent`, `SubpageList`, `ErrorHierarchy`, `ErrorCard`, `AgentFrameworkTabs`, `CheatSheetGrid`, `CheatSheetSection`, `InfoBox`, `MCPClientGrid`, `Image` (next/image) are registered globally in `mdx-components.tsx`, so MDX files need no import for them; existing explicit imports are rewritten to the new paths (`@/app/_components/x` → `@/components/x`; relative `../../_components/x` → `@/components/x`; page-local `./foo` → `@/components/pages/<section>/foo`).
- `import meta from './_meta'` + `<SubpageList basePath=".." meta={meta} />` → drop the import and the `meta` prop; `SubpageList` resolves children from the page tree by `basePath`.
- Keep all MDX prose, code, tables, JSX and links byte-for-byte otherwise. Root-relative internal links (`[x](/operate/...)`, `href="/build/..."`, ToolCard `link="/references/..."`) get the `/en` prefix (`scripts/migration/lib.ts` `prefixInternalLinks`) so they do not round-trip through the proxy.ts locale redirect; links already under `/en/`, asset/API paths (`/images/`, `/videos/`, `/specs/`, `/api/`, `/llms*`, ...), `src=` attributes, template literals and anything inside code fences or inline code are left as-is.

## Nextra-compat component API (components/mdx)

- `Callout` props `{ type?: "default"|"info"|"warning"|"error"|"important", emoji?, children }` → fumadocs `Callout` (`default`→`idea`, `info`→`info`, `warning`→`warn`, `error`→`error`, `important`→`warn`); `emoji` → `icon`.
- `Tabs` props `{ items: string[], storageKey?, defaultIndex?, children }` → fumadocs `Tabs` with `groupId={storageKey} persist={!!storageKey}`; `Tabs.Tab` → fumadocs `Tab` (value inferred from index).
- `Steps`: Nextra auto-numbers `###` headings. We ship `lib/remark-nextra-steps.ts` that converts `<Steps>` children into fumadocs `<Steps><Step>…</Step></Steps>` by grouping on the shallowest heading depth inside; `Steps`/`Step` map to fumadocs components.
- `Cards` → fumadocs `Cards`; `Cards.Card` props `{ title, href, icon?, arrow? }` → fumadocs `Card`.
- `Pre`/code blocks: fumadocs `CodeBlock`. Terminal-style header for shell languages (as in app/_components/custom-pre.tsx) is implemented via the `pre` override in `mdx-components.tsx`.

## Toolkit route interface (lib/toolkit-route.tsx) — implemented by the toolkit workstream, consumed by page.tsx

```ts
export type ToolkitRouteMatch = { category: string; toolkitId: string };
export function matchToolkitRoute(slug: string[] | undefined): ToolkitRouteMatch | null;
export function generateToolkitParams(): Promise<{ slug: string[] }[]>;   // every generated toolkit page
export function toolkitRouteMetadata(match: ToolkitRouteMatch): Promise<Metadata | null>;
export function ToolkitRoutePage(props: { match: ToolkitRouteMatch }): Promise<ReactNode | null>; // renders DocsPage + ToolkitPage
```
`app/en/[[...slug]]/page.tsx`: `source.getPage(slug)` first; if undefined, `matchToolkitRoute` → `ToolkitRoutePage`; else `notFound()`. `generateStaticParams` = `source.generateParams()` ∪ `generateToolkitParams()`.

Sidebar entries for toolkits: `content/docs/resources/integrations/<category>/meta.json` is **generated** by `toolkit-docs-generator/scripts/sync-toolkit-sidebar.ts` (ported) with `pages: ["---Optimized---", "[Airtable](/en/resources/integrations/productivity/airtable)", ..., "---Starter---", ...]` (plus `---Partners---` + `nimble`, `tavily` MDX pages in `search`). The content workstream does NOT write those nine category meta.json files; it writes `content/docs/resources/integrations/meta.json` and the static MDX pages.

## Ownership (parallel workstreams; stay inside your area)

- **content**: `content/docs/**` (except the 9 integration category `meta.json`), `components/pages/**` (except `components/pages/integrations/**`), `public/**`, `scripts/migration/**` (the codemod, re-runnable).
- **components/theme**: `components/**` (except `components/pages/**`, `components/toolkit-docs/**`), `mdx-components.tsx`, `source.config.ts`, `app/layout.tsx`, `app/en/layout.tsx`, `app/en/[[...slug]]/page.tsx`, `app/llms.mdx/**`, `app/api/search/**`, `app/global.css`, `app/cheat-sheet-print.css`, `app/not-found.tsx`, `lib/layout.shared.tsx`, `lib/source.ts`, `lib/remark-*.ts`, `lib/glossary-parser.ts`, `lib/config.ts`, `lib/dictionaries/**`, `lib/utils.ts`, `lib/ory-session-context.tsx`, `lib/posthog-server.ts`, `proxy.ts`, `instrumentation-client.ts`.
- **toolkits**: `components/toolkit-docs/**`, `components/pages/integrations/**`, `lib/toolkit-*.ts(x)`, `lib/integration-*.ts`, `data/**`, `toolkit-docs-generator/**`, `app/api/toolkit-data/**`, `app/sitemap.ts`, `content/docs/resources/integrations/<category>/meta.json` (generated).
- **scripts/tests/ci**: `scripts/**` (except `scripts/migration`), `tests/**`, `.github/**`, `.husky/**`, `.vale.ini`, `styles/**`, `biome.jsonc`, `vitest.config*.ts`, `redirects.ts`, `next.config.ts`, `README.md`, `CLAUDE.md`, `AGENTS.md`, `AUTHORING.md`, `STYLEGUIDE.md`, `Makefile`, `algolia/**`, `agents/**`, `.vscode/**`, `.editorconfig`, `.env.local.example`, `package.json` scripts section, `lint-staged` config.
