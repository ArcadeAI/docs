# Generate toolkit docs

This workflow regenerates toolkit JSON and opens a PR with the changes. It can be triggered by a Porter deploy or run manually via workflow dispatch.

## What it does

1. Builds the toolkit docs generator.
2. Generates toolkit JSON in `toolkit-docs-generator/data/toolkits` using the Engine tool metadata and summary endpoints.
3. Syncs integrations sidebar navigation from the generated JSON.
4. Creates a PR if any files changed.

## Inputs and secrets

Required secrets:

- `ENGINE_API_URL`
- `ENGINE_API_KEY`
- `OPENAI_API_KEY`

Optional secrets:

- `OPENAI_MODEL` (falls back to `gpt-4o-mini`)

## Where to look

- Workflow: `.github/workflows/generate-toolkit-docs-porter.yml`
- Sidebar sync script: `toolkit-docs-generator/scripts/sync-toolkit-sidebar.ts`
- Generator code: `toolkit-docs-generator/src/cli/index.ts`
