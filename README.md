# Arcade Documentation

Documentation for Arcade

## Local Development

See the `package.json` for the dependencies required.

First, run `pnpm install` to install the dependencies.

Then, run `pnpm dev` to start the development server and visit localhost:3000.

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
