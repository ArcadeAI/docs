---
title: "Arcade Gateway Assistant"
description: "Create and manage MCP Gateways using AI directly from your chat interface"
---
[MCP Gateways](/en/guides/mcp-gateways.md)
Create via AI Assistant

# Arcade Gateway Assistant

## Outcomes

Create and manage  gateways directly from your chat interface using natural language.

### Prerequisites

1.  Create an [Arcade](https://api.arcade.dev/dashboard/register)

2.  An \-compatible chat client ([Cursor](/get-started/mcp-clients/cursor.md)
    , [Claude Desktop](/get-started/mcp-clients/claude-desktop.md)
    , [VS Code](/get-started/mcp-clients/visual-studio-code.md)
    , etc.)

## Setup

### Connect to the Gateway Assistant

The Gateway Assistant is an  server that creates and manages . To use it, add the Arcade Gateway Assistant (using Arcade Auth) to your MCP client using this URL:

PLAINTEXT

```
https://ctl.arcade.dev/mcp
```

The Gateway Assistant uses **Arcade Auth**. This means you’ll authenticate with your Arcade  to access the assistant.

Each  client has a different setup process. See [Connect to MCP clients](/get-started/mcp-clients.md) for detailed instructions for adding the Gateway Assistant to Cursor, Claude Desktop, VS Code, and other supported clients with Arcade Auth.

### Authenticate

When you first use the Gateway Assistant, the system will prompt you to authenticate with your Arcade . This is a one-time setup that allows the assistant to create and manage gateways on your behalf.

### Start creating gateways

Ask your AI assistant to create a gateway by describing what you want to do. For example:

> “I want to send emails with Gmail and manage my calendar with Google Calendar. Create a gateway for this.”

> “Create a gateway that creates and manages  gateways for GitHub PRs and post updates to Slack.”

The assistant will select the appropriate  from Arcade’s catalog and create a gateway for you.

## After creating a gateway

Once you’ve created a gateway, you’ll need to add it to your chat client as a separate  server. The assistant will provide your new gateway’s MCP URL (for example, `https://api.arcade.dev/mcp/<YOUR-GATEWAY-SLUG>`).

Follow the same process you used to add the Gateway Assistant - see [Connect to MCP clients](/get-started/mcp-clients.md) for setup instructions specific to your client.

The Gateway Assistant creates gateways that use **Arcade Auth** by default. This means you’ll authenticate with your Arcade  to access the gateway. For production use cases with end  who don’t have Arcade accounts, you can modify the gateway’s authentication settings in the [dashboard](https://api.arcade.dev/dashboard/mcp-gateways) .

Last updated on February 10, 2026

[Create via Dashboard](/en/guides/mcp-gateways/create-via-dashboard.md)
[Overview](/en/guides/tool-calling.md)
