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
| `ANTHROPIC_API_KEY` | No | Enables AI-powered style fixes with `pnpm vale:fix` |

## Style Guide & Linting

We use [Vale](https://vale.sh/) to enforce documentation style standards based on the Google Developer Documentation Style Guide.

### Check for style issues

```bash
pnpm vale:check           # Check all docs
pnpm vale app/en/path/    # Check specific path
```

### Fix style issues

```bash
pnpm vale:fix <file>      # AI-powered fixes (requires ANTHROPIC_API_KEY)
vale <file>               # View detailed issues to fix manually
```

The AI fix is optional — if you don't have an Anthropic API key, you can always fix issues manually.

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
