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
- `ANTHROPIC_API_KEY` enables the secret-coherence editor (see below). Without it the workflow still runs; the scanners emit warnings but no LLM edits are applied.
- `ANTHROPIC_EDITOR_MODEL` (defaults to `claude-sonnet-4-6` in the workflow)

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

## Secret coherence (stale-reference cleanup + coverage check)

When a toolkit loses a secret upstream (typically because the tool that required it was removed), the rendered docs can keep mentioning it in the summary and in hand-authored documentation chunks. Symmetrically, a toolkit can end up with current secrets the summary never names, or name them without any link to the Arcade config docs.

The generator runs two checks after summary generation, in [`src/merger/secret-coherence.ts`](src/merger/secret-coherence.ts) and [`src/llm/secret-edit-generator.ts`](src/llm/secret-edit-generator.ts):

1. **Stale-reference scan** (deterministic): diffs current vs previous toolkit secret sets and searches the summary, every toolkit-level `documentationChunks` entry, and every per-tool chunk for any removed secret name. Exact substring match — secret names are distinctive ALLCAPS_WITH_UNDER.
2. **Coverage-gap scan** (deterministic): flags any current secret that is not mentioned in the summary and any summary that lacks a link to the Arcade secret config docs.

If an LLM editor is configured (`--llm-editor-provider` / `--llm-editor-model` / `--llm-editor-api-key`), both classes of issue are auto-fixed:

- Stale references are removed with a **minimum-necessary edit** prompt — whole sentences, bullets, or table rows that exist only to describe the removed secret are deleted; sentences that mention the removed secret alongside other content are minimally rewritten; nothing else is touched. This is intentionally different from the summary generator, which rewrites from scratch and tends to oversimplify.
- Missing secrets get appended to the summary's `**Secrets**` section with as much detail as the secret actually needs — a short URL override may be one line; a scoped API key typically needs several sentences describing the provider dashboard page, required scopes or permissions, and account-tier constraints, plus an inline link to the provider's own documentation for how to create it. The prompt explicitly forbids inventing docs URLs.
- Missing Arcade-config links are added at the end of the `**Secrets**` section.
- The editor is instructed to preserve surrounding content verbatim (no re-summarization, no reorder).

When the editor is not configured, the scanners still run and their findings land as non-fatal warnings in the run log. Editor exceptions are caught individually so a single LLM failure does not break the run.

The default editor model is **Claude Sonnet 4.6** — chosen to avoid the oversimplification observed when bulk summaries were regenerated by `gpt-4o-mini`. Override with `--llm-editor-model` or the `LLM_EDITOR_MODEL` / `ANTHROPIC_EDITOR_MODEL` env var.

### OAuth section in summaries

The summary generator is configured to **never list OAuth scopes** in the generated overview. Each per-provider Arcade auth docs page (under `/en/references/auth-providers/<providerId>`) is the source of truth for scopes and configuration; the summary links to it instead of duplicating. This keeps the overview scannable and prevents drift when provider pages update their scope lists.

### CLI flags

- `--llm-editor-provider <openai|anthropic>` — editor provider. Falls back to `LLM_EDITOR_PROVIDER`.
- `--llm-editor-model <model>` — editor model. Falls back to `LLM_EDITOR_MODEL` / `ANTHROPIC_EDITOR_MODEL`.
- `--llm-editor-api-key <key>` — editor API key. Falls back to `LLM_EDITOR_API_KEY`, then `ANTHROPIC_API_KEY` / `OPENAI_API_KEY` per provider.
- `--llm-editor-base-url <url>` — override editor base URL.
- `--llm-editor-temperature <number>` — editor temperature.
- `--llm-editor-max-tokens <number>` — editor max output tokens (default `8192`).
- `--llm-editor-max-retries <number>` — retry attempts on transient errors (default `3`).
- `--skip-secret-coherence` — disable both the scan and the edit step entirely.

### Local example (editor on)

```bash
pnpm dlx tsx src/cli/index.ts generate \
  --providers "Github" \
  --tool-metadata-url "$ENGINE_API_URL" \
  --tool-metadata-key "$ENGINE_API_KEY" \
  --llm-provider openai \
  --llm-model gpt-4.1-mini \
  --llm-api-key "$OPENAI_API_KEY" \
  --llm-editor-provider anthropic \
  --llm-editor-model claude-sonnet-4-6 \
  --llm-editor-api-key "$ANTHROPIC_API_KEY" \
  --output data/toolkits
```

## Architecture at a glance

- **CLI**: `toolkit-docs-generator/src/cli/index.ts`
- **Sources**: `src/sources` for Engine API, mock data, and design system metadata
- **Merger**: `src/merger/data-merger.ts` merges tools, metadata, and custom sections
- **Generator**: `src/generator/json-generator.ts` writes JSON and `index.json`
- **Verifier**: `src/generator/output-verifier.ts` validates output and index consistency
- **Rendering details**: `toolkit-docs-generator/RENDERING.md`

## Local usage

Run these commands from the `toolkit-docs-generator` directory.

Generate a single toolkit:

```bash
pnpm dlx tsx src/cli/index.ts generate \
  --providers "Github:1.0.0" \
  --tool-metadata-url "$ENGINE_API_URL" \
  --tool-metadata-key "$ENGINE_API_KEY" \
  --llm-provider openai \
  --llm-model gpt-4.1-mini \
  --llm-api-key "$OPENAI_API_KEY" \
  --output data/toolkits
```

Generate all toolkits:

```bash
pnpm dlx tsx src/cli/index.ts generate \
  --all \
  --skip-unchanged \
  --tool-metadata-url "$ENGINE_API_URL" \
  --tool-metadata-key "$ENGINE_API_KEY" \
  --llm-provider openai \
  --llm-model gpt-4.1-mini \
  --llm-api-key "$OPENAI_API_KEY" \
  --output data/toolkits
```

Generate without LLM output:

```bash
pnpm dlx tsx src/cli/index.ts generate \
  --providers "Asana:0.1.3" \
  --tool-metadata-url "$ENGINE_API_URL" \
  --tool-metadata-key "$ENGINE_API_KEY" \
  --skip-examples \
  --skip-summary \
  --output data/toolkits
```

Sync sidebar navigation locally:

```bash
pnpm dlx tsx .github/scripts/sync-toolkit-sidebar.ts
```

## Ignoring toolkits

Pass `--ignore-file <path>` to skip specific toolkits during generation. Existing
output files for ignored toolkits are left unchanged — nothing is deleted.

A default empty template ships at `ignored-toolkits.txt` in the generator root.
Add one toolkit ID per line:

```text
# Toolkits to ignore during docs generation (skip-only, no file deletion)
SomeInternalTool
```

```bash
pnpm dlx tsx src/cli/index.ts generate --all \
  --ignore-file ./ignored-toolkits.txt
```

The parser ignores blank lines and lines starting with `#`. IDs are case-insensitive.

Works with both `generate` and `generate-all`. The ignore list is purely skip-only:
no existing `.json` files are removed and `index.json` is not rebuilt for ignored
toolkits.

## Excluding toolkits

Pass `--exclude-file <path>` to skip toolkits **and** delete their existing output
files if they already exist.

Create a plain-text file with one toolkit ID per line:

```text
# toolkits to exclude from docs generation
Jira
Confluence
SomeInternalTool
```

The parser ignores blank lines and lines starting with `#`. IDs are case-insensitive.

```bash
pnpm dlx tsx src/cli/index.ts generate --all \
  --exclude-file ./excluded-toolkits.txt
```

If a toolkit in the file already has an output `.json` file, the generator
deletes it and rebuilds `index.json`.

## Key CLI options

- `--all` generate all toolkits
- `--providers` generate a subset of toolkits
- `--skip-unchanged` only write changed toolkits
- `--api-source` select `tool-metadata` (default with Engine creds), `list-tools`
  (only with the explicit flag), or `mock`
- `--previous-output` compare against a previous output directory
- `--custom-sections` load curated docs sections
- `--skip-examples`, `--skip-summary` disable LLM steps
- `--skip-secret-coherence` disable the stale-reference scan + coverage fill (see the Secret coherence section)
- `--llm-editor-provider`, `--llm-editor-model`, `--llm-editor-api-key` configure the secret-coherence editor (Sonnet 4.6 by default)
- `--no-verify-output` skip output verification

## Troubleshooting

- **Nothing regenerated**: `--skip-unchanged` exits early when tool definitions did not change.
- **Missing metadata**: the generator falls back to the metadata JSON file when design system metadata is unavailable.
- **Verify output fails**: run `pnpm dlx tsx src/cli/index.ts verify-output --output data/toolkits` and fix the reported mismatch.
