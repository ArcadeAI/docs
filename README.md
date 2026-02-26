# Arcade Documentation

Documentation for Arcade

## Local Development

See the `package.json` for the dependencies required.

First, run `pnpm install` to install the dependencies.

Then, run `pnpm dev` to start the development server and visit localhost:3000.

### Environment Variables

Copy `.env.example` to `.env.local` and fill in the values:

```bash
cp .env.example .env.local
```

| Variable | Required | Purpose |
|----------|----------|---------|
| `OPENAI_API_KEY` | Yes | Generates llms.txt with AI-powered summaries |
| `ANTHROPIC_API_KEY` | No | Enables AI-powered style fixes (local and CI) |

## Style Guide & Linting

We use [Vale](https://vale.sh/) to enforce documentation style standards based on the Google Developer Documentation Style Guide.

### Automated PR Reviews

When you open a PR with doc changes, two automated reviews happen:

1. **Style Review** (on PR open/update): Posts line-level suggestions for Vale issues. Click "Apply suggestion" to accept fixes.

2. **Editorial Review** (after merge): Analyzes docs against [STYLEGUIDE.md](./STYLEGUIDE.md) and creates a follow-up PR if structural improvements are needed.

Both are powered by Vale + LLM and require `ANTHROPIC_API_KEY` (or `OPENAI_API_KEY`) in repository secrets.

### Local Development

First, [install the Vale CLI](https://vale.sh/docs/install) for your platform.

```bash
pnpm vale:check           # Check all docs for style issues
pnpm vale app/en/path/    # Check specific path
pnpm vale:fix <file>      # Interactive AI-powered fixes (optional)
```

The `vale:fix` command requires an API key in `.env.local`. Without one, you can fix issues manually using `vale <file>` to see detailed output.

### Style resources

- [STYLEGUIDE.md](./STYLEGUIDE.md) - Writing standards for voice, tone, and structure
- [AGENTS.md](./AGENTS.md) - Instructions for AI assistants working on docs

## llms.txt Generation

The project includes a Next.js plugin that automatically generates an `llms.txt` file following the [llms.txt specification](https://llmstxt.org/). This file helps LLMs understand and navigate the documentation.

**Automatic generation**: Runs during production builds (`pnpm build`)

**Manual generation**: Run `pnpm llmstxt` to regenerate the file

See [`scripts/README-llmstxt.md`](./scripts/README-llmstxt.md) for detailed documentation.

## Styling

We use Nextra's built-in Callout component for callouts in MDX:

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

## Generate documentation for a MCP Server toolkit

Run `make toolkit-docs` and follow the instructions in the terminal. This command
will automatically generate documentation for the tools in a specified Arcade MCP
Server Python package.
