---
title: "Use Arcade in Claude Desktop"
description: "Arcade - AI platform for developers"
---
[MCP Clients](/en/get-started/mcp-clients.md)
Claude Desktop

# Use Arcade in Claude Desktop

## Outcomes

Connect Claude Desktop to an Arcade  Gateway.

### Prerequisites

1.  Create an [Arcade](https://app.arcade.dev/register)

2.  Get an [Arcade API key](/get-started/setup/api-keys.md)

3.  Create an [Arcade MCP Gateway](/guides/mcp-gateways.md)
     and select the  you want to use

For Claude Desktop, you need to set the `Authorization` field to `Arcade Auth` in the dashboard. If you are using the `Arcade Headers` auth mode, you won’t be able to use it with Claude Desktop.

### Go to your Claude Desktop setting page

On the bottom left corner of Claude Desktop, click on your  avatar to open the settings menu, then click on the “Settings” button.

![Step 1: Click on the settings icon on Claude Desktop](/_next/image?url=%2Fimages%2Fmcp-gateway%2Fclaude-desktop%2Fstep-1-light.jpg&w=640&q=75)![Step 1: Click on the settings icon on Claude Desktop](/_next/image?url=%2Fimages%2Fmcp-gateway%2Fclaude-desktop%2Fstep-1.jpg&w=640&q=75)

### Add a Custom Connector

On the settings page, click on the “Connectors” tab, and then on the “Add custom Connector” button.

![Step 2: Add a custom connector](/_next/image?url=%2Fimages%2Fmcp-gateway%2Fclaude-desktop%2Fstep-2-light.jpg&w=3840&q=75)![Step 2: Add a custom connector](/_next/image?url=%2Fimages%2Fmcp-gateway%2Fclaude-desktop%2Fstep-2.jpg&w=3840&q=75)

A modal dialog will open asking you for a name and a URL. Enter a name for your connector, and the URL of your  Gateway. Then, click on the “Add” button.

![Step 3: Enter a name and URL for your connector](/_next/image?url=%2Fimages%2Fmcp-gateway%2Fclaude-desktop%2Fstep-3-light.jpg&w=1200&q=75)![Step 3: Enter a name and URL for your connector](/_next/image?url=%2Fimages%2Fmcp-gateway%2Fclaude-desktop%2Fstep-3.jpg&w=1200&q=75)

### authenticate with your Arcade account

You will see a new connector added to your list of connectors. Click on the “Connect” button to authenticate with your Arcade .

![Step 4: Authenticate with your Arcade account](/_next/image?url=%2Fimages%2Fmcp-gateway%2Fclaude-desktop%2Fstep-4-light.jpg&w=1920&q=75)![Step 4: Authenticate with your Arcade account](/_next/image?url=%2Fimages%2Fmcp-gateway%2Fclaude-desktop%2Fstep-4.jpg&w=1920&q=75)

Your browser will open a new tab to authenticate with your Arcade . Check that the URL matches the one in the modal dialog, and then click on the “Allow” button.

![Step 5: Allow authentication with your Arcade account](/_next/image?url=%2Fimages%2Fmcp-gateway%2Fclaude-desktop%2Fstep-5-light.jpg&w=1920&q=75)![Step 5: Allow authentication with your Arcade account](/_next/image?url=%2Fimages%2Fmcp-gateway%2Fclaude-desktop%2Fstep-5.jpg&w=1920&q=75)

### Configure the MCP Gateway

Now Claude Desktop is connected to your  Gateway, it’s a good time to configure the  to your needs. Click on the “Configure” button to open the configuration dialog.

![Step 6: Configure the MCP Gateway](/_next/image?url=%2Fimages%2Fmcp-gateway%2Fclaude-desktop%2Fstep-6-light.jpg&w=1920&q=75)![Step 6: Configure the MCP Gateway](/_next/image?url=%2Fimages%2Fmcp-gateway%2Fclaude-desktop%2Fstep-6.jpg&w=1920&q=75)

In this configuration pane, you can configure which tools are available to Claude Desktop, and whether or not they require human confirmation. On this example  gateway, we require human confirmation for all  that may have destructive actions, or actions with potentially undesired consequences.

![Step 7: Configure the MCP Gateway](/_next/image?url=%2Fimages%2Fmcp-gateway%2Fclaude-desktop%2Fstep-7-light.jpg&w=1920&q=75)![Step 7: Configure the MCP Gateway](/_next/image?url=%2Fimages%2Fmcp-gateway%2Fclaude-desktop%2Fstep-7.jpg&w=1920&q=75)

### Try it out!

You can now open a new chat within Claude Desktop. Ensure that your connector is enabled, and the ask the  to use a !

Last updated on January 5, 2026

[Cursor](/en/get-started/mcp-clients/cursor.md)
[Visual Studio Code](/en/get-started/mcp-clients/visual-studio-code.md)
