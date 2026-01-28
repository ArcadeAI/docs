# Generate toolkit docs

This document explains how the Toolkit Docs Generator works, how to use it, and what to expect when it fails.
All claims below are based on the current implementation in this repo. See the references in each section.

## What it does

The generator builds toolkit JSON files that power the Arcade integrations docs.
It merges three data sources into one output per toolkit:

- **Tool definitions** from Arcade/Engine API or mock data.
- **Design System metadata** (category, icon, flags).
- **Custom sections** extracted from existing docs.

References:

- CLI entry: `toolkit-docs-generator/src/cli/index.ts`
- Merge logic: `toolkit-docs-generator/src/merger/data-merger.ts`

## Output structure

Each toolkit JSON file contains:

- Toolkit metadata (id, label, version, description, metadata)
- Auth summary
- Tools array (tool name, parameters, auth, secrets, output)
- Custom documentation chunks
- Optional LLM examples, summary, and overview

Example (trimmed):

```json
{
  "id": "Github",
  "label": "GitHub",
  "version": "1.0.0",
  "description": "Arcade.dev LLM tools for GitHub",
  "metadata": {
    "category": "development",
    "iconUrl": "https://design-system.arcade.dev/icons/github.svg",
    "isBYOC": false,
    "isPro": false
  },
  "auth": {
    "type": "oauth2",
    "providerId": "github",
    "allScopes": ["repo"]
  },
  "tools": [
    {
      "name": "CreateIssue",
      "qualifiedName": "Github.CreateIssue",
      "description": "Create an issue",
      "parameters": [{ "name": "owner", "type": "string", "required": true }],
      "auth": { "scopes": ["repo"] }
    }
  ]
}
```

Reference: `toolkit-docs-generator/README.md` (Output format section)

## Toolkit overview generation

The generator can create a toolkit **Overview** section as a markdown documentation chunk.
The overview is inserted at `location: "header"` and `position: "before"` so it appears first.

Behavior:

- If an overview instruction file exists for the toolkit, the LLM generates the overview from that file.
- The previous overview (if any) is passed to the LLM as context and replaced in output.
- If no file exists and the toolkit is new (no previous output), the LLM attempts an auto overview.
- If the LLM lacks confidence, it can return `shouldWrite=false` and the overview is skipped.
- Use `--skip-overview` to disable this step entirely.

Default input folder:

- `toolkit-docs-generator/overview-input/` (gitignored by default)

References:

- Overview source: `toolkit-docs-generator/src/sources/overview-instructions-file.ts`
- Overview generator: `toolkit-docs-generator/src/llm/toolkit-overview-generator.ts`
- Merge integration: `toolkit-docs-generator/src/merger/data-merger.ts`

## Commands

The CLI is in `toolkit-docs-generator/src/cli/index.ts`.
These are the supported commands:

- `overview-init`: create overview instruction file(s)
- `generate`: generate selected toolkits
- `generate-all`: generate all toolkits
- `check-changes`: detect changes without generating
- `validate`: validate a JSON file against schema
- `verify-output`: verify a whole output directory
- `list-toolkits`: list available toolkits (mock data)

Reference: `toolkit-docs-generator/README.md` and `toolkit-docs-generator/src/cli/index.ts`

## Usage examples

### Generate a specific toolkit

```bash
pnpm start generate \
  --providers "Github:1.0.0" \
  --engine-api-url "$ENGINE_API_URL" \
  --engine-api-key "$ENGINE_API_KEY" \
  --llm-provider openai \
  --llm-model gpt-4.1-mini \
  --llm-api-key "$OPENAI_API_KEY" \
  --output ../data/toolkits
```

### Generate all toolkits (Engine API)

```bash
pnpm start generate \
  --all \
  --engine-api-url "$ENGINE_API_URL" \
  --engine-api-key "$ENGINE_API_KEY" \
  --llm-provider openai \
  --llm-model gpt-4.1-mini \
  --llm-api-key "$OPENAI_API_KEY" \
  --output ../data/toolkits
```

### Generate without LLM

```bash
pnpm start generate \
  --providers "Asana:0.1.3" \
  --engine-api-url "$ENGINE_API_URL" \
  --engine-api-key "$ENGINE_API_KEY" \
  --skip-examples \
  --skip-summary \
  --output ../data/toolkits
```

### Only regenerate toolkits with changes

```bash
pnpm start generate \
  --all \
  --skip-unchanged \
  --engine-api-url "$ENGINE_API_URL" \
  --engine-api-key "$ENGINE_API_KEY" \
  --output ../data/toolkits
```

### Dry run change detection

```bash
pnpm start check-changes \
  --output ../data/toolkits \
  --engine-api-url "$ENGINE_API_URL" \
  --engine-api-key "$ENGINE_API_KEY"
```

### Validate output directory

```bash
pnpm start verify-output --output ../data/toolkits
```

Reference: `toolkit-docs-generator/README.md`

## How change detection works

`check-changes` compares current tool definitions with previous output.
It reports:

- Added, removed, modified toolkits
- Tool-level changes per toolkit
- Version-only changes

It does not write output files. It only logs and prints changes.

References:

- Change detection: `toolkit-docs-generator/src/diff/toolkit-diff.ts`
- Dry run command: `toolkit-docs-generator/src/cli/index.ts` (`check-changes`)

## How custom sections are preserved

Custom documentation is preserved when source data is empty.
If the custom sections source has no chunks for a tool, the generator keeps the previous chunks.

Reference: `toolkit-docs-generator/src/merger/data-merger.ts` (`getToolDocumentationChunks`)

## How failures are handled

### LLM configuration errors

The CLI throws an error if you ask for examples or summaries without a valid LLM config.
You must either:

- Provide `--llm-provider` and `--llm-model` (and API key), or
- Use `--skip-examples` and `--skip-summary`

Reference: `toolkit-docs-generator/src/cli/index.ts` (LLM config checks)

### Invalid provider format

`--providers` must be in `Provider` or `Provider:version` format.
Invalid values cause the CLI to throw.

Reference: `toolkit-docs-generator/src/cli/index.ts` (`parseProviders`)

### Tool example generation failures

If a tool example fails to generate:

- The tool is still written.
- `codeExample` is omitted for that tool.
- A warning is recorded.
- The tool is added to `failed-tools.json` for reruns.

References:

- Example generation error handling: `toolkit-docs-generator/src/merger/data-merger.ts`
- Failed tools report: `toolkit-docs-generator/src/utils/run-logs.ts`
- Report write: `toolkit-docs-generator/src/cli/index.ts`

### Output verification failures

`verify-output` checks:

- JSON schema validity
- `index.json` existence and consistency
- File naming conventions (lowercase)

It exits with code 1 if errors are found.

Reference: `toolkit-docs-generator/src/generator/output-verifier.ts`

## Logs and artifacts

The generator writes logs under `toolkit-docs-generator-verification/logs` by default:

- `runs.log`: one entry per CLI run
- `changes.log`: change summaries
- `failed-tools.json`: failed tool example runs

You can override the log directory with `--log-dir`.

References:

- Log paths: `toolkit-docs-generator/src/cli/index.ts` (`getDefaultLogDir`, `buildLogPaths`)
- Log writer: `toolkit-docs-generator/src/utils/run-logs.ts`

## Rerun only failed tools

If you have `failed-tools.json`, you can rerun only the failed toolkits:

```bash
pnpm start generate \
  --failed-tools-file ../toolkit-docs-generator-verification/logs/failed-tools.json \
  --engine-api-url "$ENGINE_API_URL" \
  --engine-api-key "$ENGINE_API_KEY" \
  --llm-provider openai \
  --llm-model gpt-4.1-mini \
  --llm-api-key "$OPENAI_API_KEY" \
  --output ../data/toolkits
```

Reference: `toolkit-docs-generator/src/cli/index.ts` (`--failed-tools-file` handling)

## Troubleshooting

### “Nothing to regenerate”

If you use `--skip-unchanged` and nothing changed, the CLI exits early.
This is expected behavior.

Reference: `toolkit-docs-generator/src/cli/index.ts` (`--skip-unchanged`)

### Missing metadata

If Design System metadata is unavailable, the CLI falls back to the metadata JSON file in mock data.

Reference: `toolkit-docs-generator/src/cli/index.ts` (`createMetadataSource`)

### Output verification fails

Run:

```bash
pnpm start verify-output --output ../data/toolkits
```

Fix any reported mismatch and rerun generation.

Reference: `toolkit-docs-generator/src/generator/output-verifier.ts`

## Quick reference

- Generate: `pnpm start generate ...`
- Generate all: `pnpm start generate-all ...`
- Check changes: `pnpm start check-changes ...`
- Verify output: `pnpm start verify-output --output <dir>`
- Logs: `toolkit-docs-generator-verification/logs`

For CLI options, see `toolkit-docs-generator/README.md` and `toolkit-docs-generator/src/cli/index.ts`.
