# Agent Instructions

When working on documentation in this repo, follow the writing standards in [STYLEGUIDE.md](./STYLEGUIDE.md) and the formatting conventions in [AUTHORING.md](./AUTHORING.md). Repo layout, commands, and tooling rules are in [CLAUDE.md](./CLAUDE.md).

## Quick Reference

- Content lives in `content/docs/**/*.mdx`; sidebar order lives in each folder's `meta.json`
- Run `bun run vale:check` to check all docs for style issues
- Run `bun run vale:fix <file>` to fix issues with AI assistance (optional, requires API key)
- Run `bun run vale:sync` to update Vale style packages
- Run `bun run check-meta` after adding, renaming, or removing a page
- Run `bun run check-redirects` after deleting or moving a page (then fill in `redirects.ts`)
- Use `bun`/`bunx` for everything; never `pnpm`, `npm`, `npx`, or `tsx`

## Automated Style Reviews

This repo has automated style review workflows that run on PRs:

### Style Review (on PR open/update)

When you open or update a PR with changes to `content/docs/**/*.md` or `content/docs/**/*.mdx`, the style review workflow:

1. Runs Vale on changed files
2. Sends issues to an LLM for suggested fixes
3. Posts GitHub review comments with clickable "Apply suggestion" blocks

Each suggestion shows the Vale rule name (e.g., `Arcade.WordList`) and the fix. Authors can apply suggestions with one click or ignore them.

### Editorial Review (after merge)

After a PR is merged, the editorial review workflow:

1. Analyzes changed docs against [STYLEGUIDE.md](./STYLEGUIDE.md)
2. If structural improvements are needed, creates a follow-up PR
3. Assigns the follow-up PR to the original author

The follow-up PR contains document-level improvements like adding prerequisites sections or reorganizing content. Authors can accept, modify, or close it.

**Note:** Editorial PRs (branches starting with `style/editorial-`) skip both workflows to prevent loops.

## Local Development

### Setup

The scripts support both Anthropic (Claude) and OpenAI (GPT-4). Set either key in `.env.local`:

```bash
# Option 1: Anthropic (preferred)
ANTHROPIC_API_KEY=sk-ant-...

# Option 2: OpenAI
OPENAI_API_KEY=sk-...
```

If both keys are present, Anthropic is used by default.

### Commands

```bash
bun run vale:check             # Check all docs for style issues
bun run vale:fix <file>        # Interactive AI-powered fixes
bun run vale:review --pr N     # Run style review locally on PR #N
bun run vale:editorial --pr N  # Run editorial review locally on merged PR #N
```

### Without an API Key

If you don't have an API key, `vale:fix` will still:
- Run Vale and show you all style issues
- Tell you which files have problems
- Flag any toxic language issues that must be fixed

You can then fix issues manually using the detailed output from `vale <file>`.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
