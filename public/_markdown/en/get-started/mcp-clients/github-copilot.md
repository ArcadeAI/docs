---
title: "Use Arcade in GitHub Copilot"
description: "Arcade - AI platform for developers"
---
[MCP Clients](/en/get-started/mcp-clients.md)
GitHub Copilot

# Use Arcade in GitHub Copilot

## Outcomes

Connect GitHub Copilot to an Arcade  Gateway.

### Prerequisites

1.  Create an [Arcade](https://app.arcade.dev/register)

2.  Get an [Arcade API key](/get-started/setup/api-keys.md)

3.  Create an [Arcade MCP Gateway](/guides/mcp-gateways.md)
     and select the  you want to use

### Set up GitHub Copilot

### VS Code

In VS Code, Github Copilot will automatically detect the configured  servers. Read the [VS Code instructions](/get-started/mcp-clients/visual-studio-code.md) to set both of them up.

### JetBrains IDEs

The GitHub Copilot extension for JetBrains IDEs does not currently support remote  servers with Dynamic Client Registration. To use an Arcade  with GitHub Copilot on a JetBrains IDE, you must configure the MCP gateway as `Arcade Headers` in the dashboard.

1.  In the lower right corner, click the GitHub Copilot icon.
2.  From the menu, select “Open Chat”, make sure you are in  mode, then click the  icon.
3.  A dialog will open with a list of . On the bottom left, click ”+ Add More Tools…”
4.  This will open the `mcp.json` file in the editor. In the `mcp.json` file, define your  servers.

### Arcade Headers

```json
{
  "servers": {
    "mcp-arcade": {
      "url": "https://api.arcade.dev/mcp/<YOUR-GATEWAY-SLUG>",
      "requestInit": {
        "headers": {
          "Authorization": "Bearer {arcade_api_key}",
          "Arcade-User-ID": "{arcade_user_id}"
        }
      }
    }
  }
}
```

### Arcade Auth

The GitHub Copilot extension for JetBrains IDEs does not currently support remote  servers with Dynamic Client Registration. To use an Arcade  with GitHub Copilot on a JetBrains IDE, you must configure the MCP gateway as `Arcade Auth` in the dashboard.

Once you save the `mcp.json` file, a start button will appear over the new server name. Click it to start the  server.

![Start the MCP server](/_next/image?url=%2Fimages%2Fmcp-gateway%2Fgithub-copilot%2Fjetbrains%2Fstart-mcp.png&w=384&q=75)

 tools are only available in  mode.

### Visual Studio

The GitHub Copilot extension for Visual Studio does not currently support every remote  server with Dynamic Client Registration. To use an Arcade  with GitHub Copilot on Visual Studio, you must configure the MCP gateway as `Arcade Headers` in the dashboard.

In Visual Studio,

1.  In the upper right corner, click the GitHub Copilot icon.

    ![GitHub Copilot icon](/_next/image?url=%2Fimages%2Fmcp-gateway%2Fgithub-copilot%2Fvisual-studio%2Fstep-1.png&w=384&q=75)
2.  On the bottom of the GitHub Copilot panel, click the  icon (two wrenches).

    ![GitHub Copilot tools icon](/_next/image?url=%2Fimages%2Fmcp-gateway%2Fgithub-copilot%2Fvisual-studio%2Fstep-2.png&w=1920&q=75)
3.  A dialog will open with a list of tools. On the top right corner of this dialog, click the ”+” icon to add a new .

    ![GitHub Copilot add tool icon](/_next/image?url=%2Fimages%2Fmcp-gateway%2Fgithub-copilot%2Fvisual-studio%2Fstep-3.png&w=750&q=75)
4.  This will open another dialog. Fill in the information for your  server. You will need to choose:

    -   **Destination**: The path to the  configuration file, if you choose “Global”, the  will be added to all solutions. If you choose “Solution”, the MCP gateway will be added to the current solution only.
    -   **Server ID**: The ID of the  server you’re adding, this is how it will be displayed in the list of servers.
    -   **Type**: For  gateways, you must select “HTTP”.
    -   **URL**: The URL of the  gateway.
    -   **Headers**: The headers to pass to the  gateway.
    -   Click “Save” to add the  server.

    ![GitHub Copilot add tool dialog](/_next/image?url=%2Fimages%2Fmcp-gateway%2Fgithub-copilot%2Fvisual-studio%2Fstep-4.png&w=1080&q=75)
5.  Once you save the  server, it will be added to the list of servers. It will be disabled by default. To enable it, click the checkbox next to the server name.

    ![GitHub Copilot enable server checkbox](/_next/image?url=%2Fimages%2Fmcp-gateway%2Fgithub-copilot%2Fvisual-studio%2Fstep-5.png&w=750&q=75)
6.  Once the server is enabled, it will be available in the list of . If tools are not available, you may need to open the `.mcp.json` file you picked as the destination. Visual Studio will display a “Configure” and “Reconnect” buttons on top of each entry. Clicking “Reconnect” should fix any issues.

    ![GitHub Copilot enabled server](/_next/image?url=%2Fimages%2Fmcp-gateway%2Fgithub-copilot%2Fvisual-studio%2Fstep-6.png&w=1920&q=75)

### Arcade Headers

```json
{
  "servers": {
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

### Arcade Auth

The GitHub Copilot extension for Visual Studio does not currently support every remote  server with Dynamic Client Registration. To use an Arcade  with GitHub Copilot on Visual Studio, you must configure the MCP gateway as `Arcade Headers` in the dashboard.

### Eclipse

Coming soon…

### Xcode

Coming soon…

### Try it out

1.  Open the chat pane (typically command-l)
2.  Make sure you are in  mode
3.  Ask the  to use a .

Last updated on February 27, 2026

[Microsoft Copilot Studio](/en/get-started/mcp-clients/copilot-studio.md)
[Overview](/en/resources/integrations.md)
