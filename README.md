# Arcade Documentation

Documentation for Arcade

## Local Development

See the `package.json` for the dependencies required.

First, run `pnpm install` to install the dependencies.

Then, run `pnpm dev` to start the development server and visit localhost:3000.

### Environment Variables

Copy `.env.example` to `.env.local` and fill in the required values:

```bash
cp .env.example .env.local
```

- `OPENAI_API_KEY` - Required for generating the llms.txt file with AI-powered summaries

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
