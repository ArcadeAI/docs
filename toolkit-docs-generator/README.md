# Toolkit Docs Generator

A Node.js CLI tool for generating Arcade toolkit documentation JSON from multiple data sources.

## Overview

This tool combines data from:

- **Engine API**: Tool definitions, parameters, auth requirements, scopes
- **Design System**: Toolkit metadata (category, icons, flags)
- **Custom Sections**: Extracted documentation content from existing MDX files

## Quick start

```bash
# Install dependencies
pnpm install

# Build the CLI
pnpm build

# Generate docs for a toolkit (LLM required for examples)
pnpm start generate \
  --providers "Github:1.0.0" \
  --mock-data-dir ./mock-data \
  --llm-provider openai \
  --llm-model gpt-4.1-mini \
  --llm-api-key "$OPENAI_API_KEY" \
  --output ../data/toolkits

# Generate docs using Engine API (tool metadata endpoint)
pnpm start generate \
  --providers "Github:1.0.0" \
  --engine-api-url "$ENGINE_API_URL" \
  --engine-api-key "$ENGINE_API_KEY" \
  --llm-provider openai \
  --llm-model gpt-4.1-mini \
  --llm-api-key "$OPENAI_API_KEY" \
  --output ../data/toolkits

# Generate docs without LLM (skip examples and summary)
pnpm start generate \
  --providers "Asana:0.1.3" \
  --engine-api-url "$ENGINE_API_URL" \
  --engine-api-key "$ENGINE_API_KEY" \
  --skip-examples \
  --skip-summary \
  --output ../data/toolkits

# Generate docs for all toolkits (Engine API)
pnpm start generate \
  --all \
  --engine-api-url "$ENGINE_API_URL" \
  --engine-api-key "$ENGINE_API_KEY" \
  --llm-provider openai \
  --llm-model gpt-4.1-mini \
  --llm-api-key "$OPENAI_API_KEY" \
  --output ../data/toolkits

# Or generate for all toolkits
pnpm start generate-all \
  --mock-data-dir ./mock-data \
  --llm-provider anthropic \
  --llm-model claude-3-5-sonnet-latest \
  --llm-api-key "$ANTHROPIC_API_KEY" \
  --output ../data/toolkits

# Scaffold an overview instructions file
pnpm start overview-init \
  --toolkits "Github" \
  --overview-dir ./overview-input
```

## Configuration

### Environment variables

```bash
# Required for LLM-based examples
LLM_PROVIDER=openai
LLM_MODEL=gpt-4.1-mini
OPENAI_API_KEY=your-openai-key

# Or use Anthropic
LLM_PROVIDER=anthropic
LLM_MODEL=claude-3-5-sonnet-latest
ANTHROPIC_API_KEY=your-anthropic-key

# Engine API (optional; replaces mock tool source)
ENGINE_API_URL=https://api.arcade.dev
ENGINE_API_KEY=your-engine-api-key
```

### Toolkit overview inputs

By default, the generator looks for overview instruction files in:

- `toolkit-docs-generator/overview-input/` (gitignored)

Use `--overview-dir` to point at a different folder, or `--overview-file` to use a single file.
Use `--skip-overview` to disable overview generation.

### CLI options

```bash
Usage: toolkit-docs-generator [command] [options]

Commands:
  overview-init   Create overview instruction file(s) for toolkits
  generate        Generate documentation for selected toolkits
  generate-all    Generate documentation for all toolkits
  validate <file> Validate a generated JSON file
  list-toolkits   List available toolkits from mock data
  verify-output   Verify output directory structure and schema

Options:
  --all                        Generate documentation for all toolkits
  -o, --output <dir>            Output directory (default: data/toolkits)
  --mock-data-dir <dir>         Path to mock data directory
  --metadata-file <file>        Path to metadata JSON file
  --overview-dir <dir>          Directory with overview instruction files
  --overview-file <file>        Path to a single overview instruction file
  --engine-api-url <url>        Engine API base URL
  --engine-api-key <key>        Engine API key
  --engine-page-size <number>   Engine API page size
  --previous-output <dir>       Path to previous output directory
  --force-regenerate            Regenerate all examples and summary
  --overwrite-output            Delete output directory before writing new JSON
  --llm-provider <provider>     LLM provider (openai|anthropic)
  --llm-model <model>           LLM model to use
  --llm-api-key <key>           LLM API key
  --llm-base-url <url>          LLM base URL
  --llm-temperature <number>    LLM temperature
  --llm-max-tokens <number>     LLM max tokens
  --llm-system-prompt <text>    LLM system prompt override
  --llm-concurrency <number>    Max concurrent LLM calls per toolkit (default: 5)
  --toolkit-concurrency <number> Max concurrent toolkit processing (default: 3)
  --no-index-from-output        Do not rebuild index from output directory
  --skip-examples               Skip LLM example generation
  --skip-summary                Skip LLM summary generation
  --skip-overview               Skip LLM overview generation
  --no-verify-output            Skip output verification
  --custom-sections <file>      Path to custom sections JSON
  --overwrite-output            Delete output directory before writing new JSON
  --verbose                     Enable verbose logging
```

## Development

```bash
# Run in watch mode
pnpm dev

# Run tests
pnpm test

# Type check
pnpm typecheck

# Lint
pnpm lint
```

## Architecture

See [PLANNING.md](./PLANNING.md) for detailed architecture and implementation tickets.

```text
toolkit-docs-generator/
├── src/
│   ├── cli/           # CLI commands and interface
│   ├── sources/       # Data source implementations
│   ├── merger/        # Data merging logic
│   ├── llm/           # LLM service for examples/summaries
│   ├── generator/     # JSON output generation
│   ├── types/         # TypeScript type definitions
│   └── utils/         # Shared utilities
├── tests/             # Test files
├── package.json
├── tsconfig.json
└── README.md
```

## Data source abstraction

The tool uses a single toolkit data source interface, making it easy to swap implementations:

```typescript
// Use mock data (current)
const toolkitDataSource = createMockToolkitDataSource({
  dataDir: "./mock-data",
});
```

## Output format

Generated JSON follows this structure:

```json
{
  "id": "Github",
  "label": "GitHub",
  "version": "1.0.0",
  "description": "...",
  "metadata": {
    "category": "development",
    "iconUrl": "...",
    "isBYOC": false,
    "isPro": false
  },
  "auth": {
    "type": "oauth2",
    "providerId": "github",
    "allScopes": ["repo", "user:email"]
  },
  "tools": [
    {
      "name": "CreateIssue",
      "description": "...",
      "parameters": [...],
      "auth": { "scopes": ["repo"] },
      "codeExample": { "toolName": "Github.CreateIssue", "parameters": {} }
    }
  ]
}
```

## License

MIT
