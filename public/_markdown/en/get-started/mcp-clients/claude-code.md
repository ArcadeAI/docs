---
title: "Use Arcade in Claude Code"
description: "Arcade - AI platform for developers"
---
[MCP Clients](/en/get-started/mcp-clients.md)
Claude Code

# Use Arcade in Claude Code

## Outcomes

Connect Claude Code to an Arcade MCP Gateway using the Arcade Headers authentication mode.

### Prerequisites

1.  Create an [Arcade](https://app.arcade.dev/register)

2.  Get an [Arcade API key](/get-started/setup/api-keys.md)

3.  Create an [Arcade MCP Gateway](/guides/mcp-gateways.md) and select the tools you want to use

For Claude Code, we recommend setting your gateway auth mode to **Arcade Headers** so you can authenticate via HTTP headers (no browser-based OAuth flow required).

### Add your Arcade MCP Gateway

Run the following to add your Arcade Gateway as a remote HTTP MCP server in Claude Code:

```bash
claude mcp add --transport http arcade "<YOUR_ARCADE_GATEWAY_URL>" \
  --header "Authorization: Bearer <YOUR_ARCADE_API_KEY>" \
  --header "Arcade-User-ID: <YOUR_EMAIL>"
```

### Verify the server was added

```bash
claude mcp get arcade
claude mcp list
```

### Try it out

Open Claude Code in your project and ask it to use one of the tools from your gateway.

Last updated on February 11, 2026

[Overview](/en/get-started/mcp-clients.md)
[Cursor](/en/get-started/mcp-clients/cursor.md)
