---
title: "Use Arcade in Visual Studio Code"
description: "Arcade - AI platform for developers"
---
[MCP Clients](/en/get-started/mcp-clients.md)
Visual Studio Code

# Use Arcade in Visual Studio Code

In this guide, you’ll learn how to connect Visual Studio Code to an Arcade  Gateway.

### Prerequisites

1.  Create an [Arcade](https://api.arcade.dev/dashboard/register)

2.  Create an [Arcade MCP Gateway](/guides/mcp-gateways.md)
     and select the  you want to use

### Set up Visual Studio Code

3.  Download and open [Visual Studio Code](https://code.visualstudio.com/download)
      (version 1.107.0 or higher)
4.  Open the command palette and select **: Add Server…**
5.  Choose **HTTP**
6.  Paste the URL of your  Gateway.
7.  Give your  server a name, like `mcp-arcade`

Visual Studio Code will update your `mcp.json` file.

### Start the MCP Server in Visual Studio Code

8.  In the `mcp.json` file or in the “Extensions” > “ Servers - Installed” pane, click the “Start” button next to your .
9.  Visual Studio Code will prompt you to authenticate, and you may see a prompt about opening an external site: `cloud.arcade.dev`. You can safely allow both of these.
10.  If you see an Arcade login screen, authenticate with your Arcade .
11.  You should see an Arcade consent screen asking you to authorize Visual Studio Code to access your Arcade . Click “Allow” to continue.
12.  You should then see a webpage from Visual Studio Code saying the sign in was successful. You may see a prompt from your browser to open a link in Visual Studio Code. You can safely allow this.

Your  Server should now be running and you can use it in Visual Studio Code.

### Try it out

13.  Open your IDE’s chat pane.
14.  Make sure you are in  mode
15.  Ask the  to use a !

Note: if you are using the Arcade Header auth mode for your  Gateway, you will manually need to add the headers property in your `mcp.json` file:

```json
{
  "servers": {
    "mcp-arcade": {
      "url": "https://api.arcade.dev/mcp/<YOUR-GATEWAY-SLUG>",
      "type": "http",
      "headers": {
        "Authorization": "Bearer {arcade_api_key}",
        "Arcade-User-ID": "{arcade_user_id}"
      }
    }
  }
}
```

You will not see the authentication prompts when you start the  Server in Visual Studio Code because the  is passed directly.

Last updated on January 5, 2026

[Claude Desktop](/en/get-started/mcp-clients/claude-desktop.md)
[Microsoft Copilot Studio](/en/get-started/mcp-clients/copilot-studio.md)
