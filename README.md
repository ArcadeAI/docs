# Arcade Documentation

Documentation for Arcade

## Local Development

See the `package.json` for the dependencies required.

First, run `pnpm install` to install the dependencies.

Then, run `pnpm dev` to start the development server and visit localhost:3000.

## Styling

We have three kinds of callouts you can use with MDX:

```mdx
<Note>A general callout. Use sparingly.</Note>

<Note type="caution">
  Use this when there's something potentially destructive to call attention to.
</Note>

<Note type="learn-more">
  Use this for asides you don't have time to get into, like mentioning that
  folks should checkout the [official MCP documentation](https://mcp.arcade.dev)
  to learn more. (Hint: it always has a link!)
</Note>
```
