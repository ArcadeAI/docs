---
title: "MCP Gateways"
description: "Connect multiple MCP servers to your agent, application, or IDE with Arcade MCP Gateways"
---
MCP GatewaysMCP Gateways

# MCP Gateways

 Gateways are a way to connect multiple MCP Servers to your agent, application, or IDE.  allow you to federate the tools from multiple  into a single collection for easier management, control, and access. You can mix and match tools from different MCP Servers in the same .

## Why use MCP Gateways?

-   Federate tools - Combine tools from multiple  servers into a single endpoint
-   Control access - Choose exactly which  are available to each gateway
-   Mix and match - Use different  combinations for different use cases
-   Simplify configuration - One gateway URL instead of multiple server configurations
-   Server Instructions - Set instructions for how the  client should use your gateway to help the LLM better understand your use case

## Create an MCP Gateway

You can create an  Gateway in two ways:

[Create via Dashboard](/guides/mcp-gateways/create-via-dashboard.md)
[Create via AI Assistant](/guides/mcp-gateways/create-via-ai.md)

Dashboard - Use the web interface for full control over gateway settings, authentication modes, and  selection. Best for production configurations and when you need to use tools that you built yourself, or were not built by Arcade.

AI Assistant - Describe what you want in natural language and let AI select the right  for you. Best for quickly creating a gateway without ever leaving your chat interface.

## Add remote MCP servers

Use remote  servers when your  live outside Arcade. Register the server once, then select its tools in your gateways.

[Add remote MCP servers](/guides/mcp-gateways/add-remote-servers.md)

## Connect to an MCP Gateway

Any  client that supports the Streamable HTTP transport can use an Arcade . Use your gateway URL in the following format:

PLAINTEXT

```
https://api.arcade.dev/mcp/<YOUR-GATEWAY-SLUG>
```

Learn how to [connect MCP Gateways to your preferred client](/get-started/mcp-clients.md).

## Authentication

 Gateways support two authentication modes:

Mode

Best For

How It Works

**Arcade Auth (Recommended)**

Development, testing, internal use

Users authenticate with their Arcade account via OAuth

**Arcade Headers**

Production when end-users shouldn’t authenticate via Arcade

Pass `Authorization: Bearer {your_api_key}` header and `Arcade-User-ID` header with the end-user identifier

See [Create via Dashboard](/guides/mcp-gateways/create-via-dashboard.md) for detailed authentication configuration.

## Next Steps

-   [Create an Arcade](https://api.arcade.dev/dashboard/register)
     if you haven’t already
-   [Browse available integrations](/resources/integrations.md)
     to see what  you can add to your gateway

Last updated on February 6, 2026

[Arcade Registry Early Access](/en/resources/registry-early-access.md)
[Add remote MCP servers](/en/guides/mcp-gateways/add-remote-servers.md)
