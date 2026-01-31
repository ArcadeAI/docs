# Generate toolkit docs after Porter deploy

This workflow regenerates toolkit JSON after a Porter deploy and opens a PR with the changes.

## What it does

1. Builds the toolkit docs generator.
2. Generates toolkit JSON in `data/toolkits` using the Engine tool metadata endpoint.
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
- Sidebar sync script: `.github/scripts/sync-toolkit-sidebar.ts`
- Generator code: `toolkit-docs-generator/src/cli/index.ts`
