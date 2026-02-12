---
title: "Use Arcade in Microsoft Copilot Studio"
description: "Arcade - AI platform for developers"
---
[MCP Clients](/en/get-started/mcp-clients.md)
Microsoft Copilot Studio

# Use Arcade in Microsoft Copilot Studio

## Outcomes

Connect Microsoft Copilot Studio to an Arcade  Gateway.

### Prerequisites

1.  A Microsoft 365 subscription with access to Copilot Studio
2.  Create an [Arcade](https://app.arcade.dev/register)

3.  Get an [Arcade API key](/get-started/setup/api-keys.md)

4.  Create an [Arcade MCP Gateway](/guides/mcp-gateways.md)
     and select the  you want to use

### Create or open your agent

In [Copilot Studio](https://copilotstudio.microsoft.com/) , create a new  or open an existing one that you want to connect to Arcade .

### Add a new MCP tool

1.  Inside your , click the  tab in the navigation panel
2.  Click on **Add a **
3.  In the Add  panel, select
4.  Click on **New ** to configure a new  connection

![Step 1: Navigate to the Tools menu in Copilot Studio](/_next/image?url=%2Fimages%2Fmcp-gateway%2Fcopilot-studio%2Fstep-1.png&w=1080&q=75)

### Configure the MCP Gateway connection

In the   Protocol configuration dialog:

1.  Enter a **Server name** for your connection (for example, “PersonalAssistantTools”)
2.  Add a **Server description** to help identify the  available
3.  Enter your Arcade  Gateway URL in the **Server URL** field: `https://api.arcade.dev/mcp/<YOUR-GATEWAY-SLUG>`
4.  Under **Authentication**, select **OAuth 2.0**
5.  Under **Type**, select **Dynamic discovery** to authorize the  gateway automatically using OAuth

![Step 2: Configure MCP Gateway with OAuth 2.0 and Dynamic Discovery](/_next/image?url=%2Fimages%2Fmcp-gateway%2Fcopilot-studio%2Fstep-2.png&w=1920&q=75)

### Complete the authorization flow

After saving the gateway configuration, you’ll be redirected to the Arcade authorization page. Review the permissions requested and click **Allow** to authorize Copilot Studio to access your  resources.

![Step 3: Authorize Copilot Studio to access your Arcade account](/_next/image?url=%2Fimages%2Fmcp-gateway%2Fcopilot-studio%2Fstep-3.png&w=1080&q=75)

### Start using your tools

Once the connection is established, return to your  and start a conversation. Now you can directly interact with your .

Arcade provides just-in-time authorization. When you use a  that requires access to an external service, Copilot Studio will display an authorization link. Click the link to grant access and continue. This works seamlessly with tools like SharePoint, Outlook, Teams, Stripe, and Gmail.

![Step 4: Chat with your agent using Arcade tools](/_next/image?url=%2Fimages%2Fmcp-gateway%2Fcopilot-studio%2Fstep-4.png&w=1920&q=75)

Last updated on February 11, 2026

[Visual Studio Code](/en/get-started/mcp-clients/visual-studio-code.md)
[Overview](/en/resources/integrations.md)
