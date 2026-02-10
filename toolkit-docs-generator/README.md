# Generate toolkit docs

This guide explains how Arcade generates toolkit JSON, how the GitHub workflow runs, and how the docs site renders the output. Use this file as the single source of truth for toolkit generation in this repository.

## What gets generated

- `toolkit-docs-generator/data/toolkits/<toolkit>.json` for each toolkit
- `toolkit-docs-generator/data/toolkits/index.json` with category, type, version, and counts
- Run logs under `toolkit-docs-generator-verification/logs` by default
- Use `--log-dir` to change the log location

## Data sources

The generator merges three inputs into one JSON output per toolkit:

- **Engine API** for tool definitions, auth requirements, and scopes
- **Arcade design system** for metadata (category, icons, flags)
- **Custom sections file** (optional) for preserved or curated docs content

It also reads the previous output when you use `--skip-unchanged` or `--previous-output`.

When `--skip-unchanged` runs against the tool metadata API, the generator calls
the summary endpoint (`/v1/tool_metadata_summary`) first to decide which toolkits
need updates. It only fetches full tool metadata from `/v1/tool_metadata` for
toolkits with version changes. The Engine API guarantees that tool definitions
do not change unless the toolkit version changes.

## GitHub workflow: generate and sync

The workflow file is `/.github/workflows/generate-toolkit-docs.yml`.
It runs these steps:

1. Generate toolkit JSON using `toolkit-docs-generator` and the Engine API.
2. Sync sidebar navigation from `toolkit-docs-generator/data/toolkits` to the `_meta.tsx` files.
3. Create a pull request if there are changes.

Required secrets:

- `ENGINE_API_URL`, `ENGINE_API_KEY`
- `OPENAI_API_KEY` for LLM examples and summaries

Optional secrets:

- `OPENAI_MODEL` (defaults in the workflow)

## Rendering pipeline (docs site)

The docs site consumes the generated JSON directly:

- `app/_lib/toolkit-data.ts` reads `toolkit-docs-generator/data/toolkits/<toolkit>.json`.
- `app/_lib/toolkit-static-params.ts` builds routes from `index.json` and the design system catalog.
- `app/_components/toolkit-docs` renders the toolkit page using `metadata.iconUrl`, `metadata.type`, and auth fields.
- `app/en/resources/integrations/preview` uses the design system catalog for preview pages.
- `app/en/resources/integrations/*/_meta.tsx` controls sidebar navigation for each category.

## Sidebar sync step (required for navigation)

`.github/scripts/sync-toolkit-sidebar.ts` keeps sidebar navigation aligned with generated JSON:

- Reads `toolkit-docs-generator/data/toolkits` for available toolkits.
- Uses the design system for category and label, with JSON label fallback.
- Groups toolkits by category and writes `_meta.tsx` files per category.
- Uses a fixed category order and alphabetical label order within each nav group.
- Splits `optimized` vs `starter` using `metadata.type` (or an `*Api` fallback).
- Does not prune categories unless you pass `--prune` (not used in the workflow).

This step does not change JSON output. It only updates navigation files.

## Architecture at a glance

- **CLI**: `toolkit-docs-generator/src/cli/index.ts`
- **Sources**: `src/sources` for Engine API, mock data, and design system metadata
- **Merger**: `src/merger/data-merger.ts` merges tools, metadata, and custom sections
- **Generator**: `src/generator/json-generator.ts` writes JSON and `index.json`
- **Verifier**: `src/generator/output-verifier.ts` validates output and index consistency
- **Rendering details**: `toolkit-docs-generator/RENDERING.md`

## Local usage

Generate a single toolkit:

```bash
pnpm start generate \
  --providers "Github:1.0.0" \
  --engine-api-url "$ENGINE_API_URL" \
  --engine-api-key "$ENGINE_API_KEY" \
  --llm-provider openai \
  --llm-model gpt-4.1-mini \
  --llm-api-key "$OPENAI_API_KEY" \
  --output data/toolkits
```

Generate all toolkits:

```bash
pnpm start generate \
  --all \
  --skip-unchanged \
  --engine-api-url "$ENGINE_API_URL" \
  --engine-api-key "$ENGINE_API_KEY" \
  --llm-provider openai \
  --llm-model gpt-4.1-mini \
  --llm-api-key "$OPENAI_API_KEY" \
  --output data/toolkits
```

Generate without LLM output:

```bash
pnpm start generate \
  --providers "Asana:0.1.3" \
  --engine-api-url "$ENGINE_API_URL" \
  --engine-api-key "$ENGINE_API_KEY" \
  --skip-examples \
  --skip-summary \
  --skip-overview \
  --output data/toolkits
```

Sync sidebar navigation locally:

```bash
pnpm dlx tsx .github/scripts/sync-toolkit-sidebar.ts
```

## Key CLI options

- `--all` generate all toolkits
- `--providers` generate a subset of toolkits
- `--skip-unchanged` only write changed toolkits
- `--api-source` select `tool-metadata` (default with Engine creds), `list-tools`
  (only with the explicit flag), or `mock`
- `--previous-output` compare against a previous output directory
- `--custom-sections` load curated docs sections
- `--skip-examples`, `--skip-summary`, `--skip-overview` disable LLM steps
- `--no-verify-output` skip output verification

## Troubleshooting

- **Nothing regenerated**: `--skip-unchanged` exits early when tool definitions did not change.
- **Missing metadata**: the generator falls back to the metadata JSON file when design system metadata is unavailable.
- **Verify output fails**: run `pnpm start verify-output --output data/toolkits` and fix the reported mismatch.
