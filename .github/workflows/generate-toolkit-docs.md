# Generate toolkit docs

This workflow regenerates toolkit JSON and opens a PR with the changes. It can be triggered by a Porter deploy or run manually via workflow dispatch.

## What it does

1. Builds the toolkit docs generator.
2. Generates toolkit JSON in `toolkit-docs-generator/data/toolkits` using the experience API's public tool catalog, which serves tool definitions and toolkit branding in one anonymous read.
3. Syncs integrations sidebar navigation from the generated JSON.
4. Regenerates `public/llms.txt` so the automation PR does not depend on a second workflow.
5. Creates or updates a PR on the stable `automation/toolkit-docs` branch if any files changed. Later runs overwrite that open PR with the latest generated docs.

## Inputs and secrets

Required secrets:

- `ANTHROPIC_API_KEY`
- `OPENAI_API_KEY` (for `llms.txt` summaries)

Optional secrets:

- `PUBLIC_CATALOG_URL` (falls back to `https://experience.arcade.dev/api`; set it to run against staging)
- `ANTHROPIC_MODEL` (falls back to `claude-sonnet-4-6`)
- `ANTHROPIC_EDITOR_MODEL` (falls back to `claude-sonnet-4-6`)

## Where to look

- Workflow: `.github/workflows/generate-toolkit-docs.yml`
- Sidebar sync script: `toolkit-docs-generator/scripts/sync-toolkit-sidebar.ts`
- Generator code: `toolkit-docs-generator/src/cli/index.ts`
