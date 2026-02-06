---
title: "Use Arcade in Cursor"
description: "Arcade - AI platform for developers"
---
[MCP Clients](/en/get-started/mcp-clients.md)
Cursor

# Use Arcade in Cursor

## Outcomes

Connect Cursor to an Arcade  Gateway.

### Prerequisites

1.  Create an [Arcade](https://api.arcade.dev/dashboard/register)

2.  Get an [Arcade API key](/get-started/setup/api-keys.md)

3.  Create an [Arcade MCP Gateway](/guides/mcp-gateways.md)
     and select the  you want to use

Cursor currently does not refresh the  OAuth tokens automatically. To set a persistent connection between Cursor and your , you should set the `Authorization` field to “Arcade Headers” in the dashboard.

### Set up Cursor

1.  Open the Command Palette (`Cmd + Shift + P` on macOS, `Ctrl + Shift + P` on Windows/Linux) and select **Open  Settings**
2.  Click on the “New  Server” button

Cursor will open the  settings file, and you can add a new entry to the `mcpServers` object:

### Arcade Auth

```json
{
  "mcpServers": {
    "mcp-arcade": {
      "url": "https://api.arcade.dev/mcp/<YOUR-GATEWAY-SLUG>"
    }
  }
}
```

### Arcade Headers

```json
{
  "mcpServers": {
    "mcp-arcade": {
      "url": "https://api.arcade.dev/mcp/<YOUR-GATEWAY-SLUG>",
      "headers": {
        "Authorization": "Bearer {arcade_api_key}",
        "Arcade-User-ID": "{arcade_user_id}"
      }
    }
  }
}
```

### Try it out

1.  Open the chat pane (typically command-l)
2.  Make sure you are in  mode
3.  Ask the  to use a !

Last updated on January 5, 2026

[Overview](/en/get-started/mcp-clients.md)
[Claude Desktop](/en/get-started/mcp-clients/claude-desktop.md)
