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
  -o ./output

# Or generate for all toolkits
pnpm start generate-all \
  --mock-data-dir ./mock-data \
  --llm-provider anthropic \
  --llm-model claude-3-5-sonnet-latest \
  --llm-api-key "$ANTHROPIC_API_KEY" \
  -o ./output
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
```

### CLI options

```bash
Usage: toolkit-docs-generator [command] [options]

Commands:
  generate        Generate documentation for selected toolkits
  generate-all    Generate documentation for all toolkits
  validate <file> Validate a generated JSON file
  list-toolkits   List available toolkits from mock data

Options:
  -o, --output <dir>            Output directory (default: ./output)
  --mock-data-dir <dir>         Path to mock data directory
  --llm-provider <provider>     LLM provider (openai|anthropic)
  --llm-model <model>           LLM model to use
  --llm-api-key <key>           LLM API key
  --llm-base-url <url>          LLM base URL
  --llm-temperature <number>    LLM temperature
  --llm-max-tokens <number>     LLM max tokens
  --llm-system-prompt <text>    LLM system prompt override
  --custom-sections <file>      Path to custom sections JSON
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

```
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
const toolkitDataSource = createMockToolkitDataSource({ dataDir: "./mock-data" });
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
