# Arcade Documentation

Documentation for Arcade, built with [Next.js](https://nextjs.org/) and [Fumadocs](https://fumadocs.dev/). Content is MDX under `content/docs/`.

## Local Development

Requires [bun](https://bun.sh) (see `packageManager` in `package.json`).

```bash
bun install      # install dependencies
bun run dev      # start the dev server at http://localhost:3000
```

Other useful commands:

```bash
bun run build          # production build
bun run lint           # Ultracite (Biome) lint
bun run typecheck      # TypeScript across root, scripts/, toolkit-docs-generator/
bun run test           # Vitest
bun run check-meta     # validate meta.json sidebar entries
bun run check-redirects
```

### Environment Variables

Copy `.env.local.example` to `.env.local` and fill in the values:

```bash
cp .env.local.example .env.local
```

| Variable | Required | Purpose |
|----------|----------|---------|
| `OPENAI_API_KEY` | Yes | Generates llms.txt with AI-powered summaries |
| `ANTHROPIC_API_KEY` | No | Enables AI-powered style fixes (local and CI) |

## Writing docs

- Pages are `content/docs/**/*.mdx`; `content/docs/a/b.mdx` and `content/docs/a/b/index.mdx` both serve `/en/a/b`.
- Each folder's `meta.json` sets the sidebar title, icon, and `pages` order.
- Every page needs frontmatter `title` (rendered as the heading) and should have `description`.

See [AUTHORING.md](./AUTHORING.md) for frontmatter fields, `meta.json` format, components, and code-fence options, and [STYLEGUIDE.md](./STYLEGUIDE.md) for voice and tone.

## Style Guide & Linting

We use [Vale](https://vale.sh/) to enforce documentation style standards based on the Google Developer Documentation Style Guide.

### Automated PR Reviews

When you open a PR with doc changes, two automated reviews happen:

1. **Style Review** (on PR open/update): Posts line-level suggestions for Vale issues. Click "Apply suggestion" to accept fixes.

2. **Editorial Review** (after merge): Analyzes docs against [STYLEGUIDE.md](./STYLEGUIDE.md) and creates a follow-up PR if structural improvements are needed.

Both are powered by Vale + LLM and require `ANTHROPIC_API_KEY` (or `OPENAI_API_KEY`) in repository secrets.

### Local Development

First, [install the Vale CLI](https://vale.sh/docs/install) for your platform, then fetch the style packages:

```bash
bun run vale:sync
bun run vale:check                 # Check all docs for style issues
bun run vale content/docs/build/   # Check a specific path
bun run vale:fix <file>            # Interactive AI-powered fixes (optional)
```

The `vale:fix` command requires an API key in `.env.local`. Without one, you can fix issues manually using `vale <file>` to see detailed output.

### Style resources

- [STYLEGUIDE.md](./STYLEGUIDE.md) - Writing standards for voice, tone, and structure
- [AUTHORING.md](./AUTHORING.md) - Page structure, frontmatter, meta.json, components
- [AGENTS.md](./AGENTS.md) - Instructions for AI assistants working on docs

## llms.txt Generation

`scripts/generate-llmstxt.ts` produces `public/llms.txt` following the [llms.txt specification](https://llmstxt.org/) from every page under `content/docs` plus the generated toolkit pages. It runs in CI (`.github/workflows/llmstxt.yml`) when content changes; run `bun run llmstxt` to regenerate it locally (needs `OPENAI_API_KEY`).

## Callouts

Use the `Callout` component (available in every MDX file without an import):

```mdx
<Callout>A general callout. Use sparingly.</Callout>

<Callout type="warning">
  Use this when there's something potentially destructive to call attention to.
</Callout>

<Callout type="info">
  Use this for asides you don't have time to get into, like mentioning that
  folks should checkout the [official MCP documentation](https://mcp.arcade.dev)
  to learn more. (Hint: it always has a link!)
</Callout>
```

## Toolkit (MCP server) pages

Toolkit reference pages at `/en/resources/integrations/<category>/<toolkit>` are generated from `toolkit-docs-generator/data/toolkits/*.json`, not from MDX. See [`toolkit-docs-generator/README.md`](./toolkit-docs-generator/README.md) for the generator and [`toolkit-docs-generator/CURATION.md`](./toolkit-docs-generator/CURATION.md) for hand-authored prose. Sidebar entries for them are produced by `bun run sync-toolkit-sidebar`.
