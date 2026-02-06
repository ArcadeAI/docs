---
title: "Create via Dashboard"
description: "Create and configure MCP Gateways using the Arcade dashboard"
---
[MCP Gateways](/en/guides/mcp-gateways.md)
Create via Dashboard

# Create via Dashboard

## Outcomes

Create and configure an  Gateway using the Arcade dashboard with full control over settings.

### Prerequisites

1.  Create an [Arcade](https://api.arcade.dev/dashboard/register)


## Create a Gateway

To create an  Gateway, go to the [MCP Gateways dashboard](https://api.arcade.dev/dashboard/mcp-gateways)  and click the “Create ” button.

When configuring an  Gateway, you can select the tools you want to include in the Gateway from any  available to the :

![MCP Gateway Tool Filter](/_next/image?url=%2Fimages%2Fmcp-gateway-tool-filter-light.png&w=3840&q=75) ![MCP Gateway Tool Filter](/_next/image?url=%2Fimages%2Fmcp-gateway-tool-filter-dark.png&w=3840&q=75)

## Configuration Options

The options available when configuring an  Gateway are:

-   **Name**: The name of the  Gateway. Informative only.
-   **Description**: The description of the  Gateway. This is useful for humans and some MCP clients may surface this information to the .
-   **LLM Instructions**: Optional instructions for the LLM about how to use the  Gateway.
-   **Slug**: The slug of the  Gateway. This is the URL slug that will be used to access the . It must be unique.
-   **Authentication**: The authentication mode to use for the  Gateway. This determines how the  will authenticate requests to the . Users will still need to authenticate to the  within the MCP Gateway as normal.
    -   **Arcade Auth**: To access the  Gateway, you’ll need to authenticate with your Arcade account. This authentication mode is recommended for  in development or testing phase, or for internal use when you know all the users will have Arcade .
    -   **Arcade Headers**: To access the  Gateway, you’ll need to authenticate with your Arcade account by passing an  key in the `Authorization` header and the  ID of your end-user in the `Arcade-User-ID` header. This authentication mode is recommended for  in production when your agent or application has users without Arcade .
-   **Allowed **: A selection of tools in the Arcade Tool Catalog that will be available to the  Gateway.

## After Creating a Gateway

Once you’ve created a gateway, you’ll need to add it to your chat client. The assistant will provide the  URL (for example, `https://api.arcade.dev/mcp/<YOUR-GATEWAY-SLUG>`).

See [Connect to MCP clients](/get-started/mcp-clients.md) for setup instructions specific to your client.

Last updated on January 5, 2026

[Add remote MCP servers](/en/guides/mcp-gateways/add-remote-servers.md)
[Create via AI Assistant](/en/guides/mcp-gateways/create-via-ai.md)
