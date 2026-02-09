---
title: "On-premises MCP Servers"
description: "Learn how to deploy MCP servers in a hybrid architecture"
---
[Deployment & hosting](/en/guides/deployment-hosting.md)
On-premises MCP servers

# On-premise MCP Servers

## Outcomes

An on-premises  server deployment allows you to execute tools in your own environment while still leveraging Arcade’s cloud Engine infrastructure. This gives you the flexibility to access private resources, maintain data security, and customize your environment while leveraging Arcade’s  management and federation capabilities.

### You will Learn

-   How to run your  server with HTTP transport
-   How to create a secure tunnel to expose it publicly
-   How to register your server in Arcade
-   How to test your server with the Arcade Playground

### Prerequisites

-   [Arcade account](https://app.arcade.dev/register)

-   [Arcade CLI](/get-started/quickstarts/call-tool-agent.md)

-   [uv package manager](https://docs.astral.sh/uv/getting-started/installation/)
     

## How on-premises MCP servers work

You can make your  server accessible to others by exposing it through a secure tunnel and registering it with Arcade. This allows remote users and services to interact with your  without deploying to a cloud platform.

The on-premises  server model uses a bidirectional connection between your local environment and Arcade’s cloud engine:

1.  You run the Arcade  server in your environment (on-premises, private cloud, etc.)
2.  Your  server is exposed to Arcade’s cloud engine using a public URL
3.  The Arcade cloud engine routes tool calls to your  server
4.  Your  server processes the requests and returns responses to the engine

## Benefits of on-premises MCP servers

-   **Resource access**: Access private databases, APIs, and other resources not accessible from Arcade’s cloud
-   **Data control**: Keep sensitive data within your environment while still using Arcade’s capabilities
-   **Custom environments**: Use specific dependencies or configurations required by your
-   **Compliance**: Meet regulatory requirements by keeping data processing within your infrastructure

## Setting up an on-premises MCP server

### Setup your MCP Servers

Follow the [Creating a MCP Server](/guides/create-tools/tool-basics/build-mcp-server.md) guide to create your  Server.

### Start your local MCP Server

Ensure you are logged in to Arcade:

### CLI

```bash
arcade login
```

### Environment Variable

Add the environment variables to your shell:

```bash
export ARCADE_API_KEY=<your-api-key>
export ARCADE_USER_ID=<your-user-id>
```

or to a `.env` file:

```bash
# .env
ARCADE_API_KEY=<your-api-key>
ARCADE_USER_ID=<your-user-id>
```

Start your  server with HTTP transport:

```bash
# Navigate to your entrypoint file
cd my_server/src/my_server

# Run with HTTP transport (default)
uv run server.py
uv run server.py http
```

Your server will start on `http://localhost:8000`. Keep this terminal running.

## Create a Secure Tunnel

Open a **separate terminal** and create a tunnel using one of these options:

-   [ngrok](https://ngrok.com)
      is easy to set up and works across all platforms.
-   [Cloudflare Tunnel](https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/)
      provides persistent URLs and advanced features.
-   [Tailscale Funnel](https://tailscale.com/kb/1223/tailscale-funnel)
      is ideal for sharing within a team or organization.

### ngrok (Recommended for Getting Started)

[ngrok](https://ngrok.com)  is easy to set up and works across all platforms.

1.  **Install ngrok:**

    ```bash
    # macOS
    brew install ngrok

    # Or download from https://ngrok.com/download
    ```

2.  **Create a tunnel:**

    ```bash
    ngrok http 8000
    ```

3.  **Copy your URL:** Look for the “Forwarding” line in the ngrok output:

    PLAINTEXT

    ```
    Forwarding  https://abc123.ngrok-free.app -> http://localhost:8000
    ```

    Copy the `https://abc123.ngrok-free.app` URL - this is your public URL.


**Pros:**

-   Quick setup, no  required for basic use
-   Automatic HTTPS
-   Web dashboard to inspect requests

**Cons:**

-   Free tier URLs change on each restart
-   May show interstitial page for free tier

### Cloudflare Tunnel

[Cloudflare Tunnel](https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/)  provides persistent URLs and advanced features.

1.  **Install cloudflared:**

    ```bash
    # macOS
    brew install cloudflare/cloudflare/cloudflared

    # Or download from https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/install-and-setup/
    ```

2.  **Create a tunnel:**

    ```bash
    cloudflared tunnel --url http://localhost:8000
    ```

3.  **Copy your URL:** Look for the “Your quick Tunnel has been created” message with your URL.


**Pros:**

-   Free tier includes persistent URLs (with setup)
-   Built-in DDoS protection
-   Access control features

**Cons:**

-   Requires Cloudflare  for persistent URLs
-   More complex setup for advanced features

### Tailscale Funnel

[Tailscale Funnel](https://tailscale.com/kb/1223/tailscale-funnel)  is ideal for sharing within a team or organization.

1.  **Install Tailscale:**

    ```bash
    # macOS
    brew install tailscale

    # Or download from https://tailscale.com/download
    ```

2.  **Authenticate:**

    ```bash
    tailscale up
    ```

3.  **Create a funnel:**

    ```bash
    tailscale funnel 8000
    ```

4.  **Get your URL:** Tailscale will display your funnel URL (e.g., `https://my-machine.tail-scale.ts.net`)


**Pros:**

-   Persistent URLs tied to your machine
-   Private by default (only shared with specified )
-   No bandwidth limits

**Cons:**

-   Requires Tailscale
-   Best for team/organization use cases

### Register your MCP Server in Arcade

Once you have a public URL, register your  server in the Arcade dashboard to make it accessible through the .

1.  **Navigate to the  Servers page** in your [Arcade dashboard](https://api.arcade.dev/dashboard/servers) 

2.  **Click “Add Server”**

3.  **Fill in the registration form:**

    -   **ID**: Choose a unique identifier (e.g., `my-mcp-server`)
    -   **Server Type**: Select “Arcade”
    -   **URL**: Enter your public tunnel URL from Step 2
    -   **Secret**: Enter a secret for your server (or use `dev` for testing)
    -   **Timeout**: Configure request timeout (default: 30s)
    -   **Retry**: Configure retry attempts (default: 3)
4.  **Click “Create”**


Here’s an example of a configuration:

```yaml
ID: my-mcp-server
Server Type: Arcade
URL: https://abc123.ngrok-free.app
Secret: my-secure-secret-123
Timeout: 30s
Retry: 3
```

### Test the connection to your MCP Server

You can now test your  Server by making requests using the Playground, or an MCP client:

### Playground

1.  **Go to the [Arcade Playground](https://api.arcade.dev/dashboard/playground/chat)** 

2.  **Select your  server** from the dropdown

3.  **Choose a ** from your server

4.  **Execute the ** with test parameters

5.  **Verify the response:**

    -   Check that the response is correct
    -   View request logs in your local server terminal
    -   Inspect the tunnel dashboard for request details

### MCP Client

1.  Use an app that supports  clients, like AI assistants and IDEs:
    -   [Visual Studio Code](/get-started/mcp-clients/visual-studio-code.md)

    -   [Claude Desktop](/get-started/mcp-clients/claude-desktop.md)

    -   [Cursor](/get-started/mcp-clients/cursor.md)

2.  Enable your  Server from the list of available
3.  Verify that the response is correct and you see request logs in your  Server

## Key Concepts

-   **HTTP Transport** Run your server with HTTP transport to expose your  via a REST/SSE API
-   **Secure Tunnels** Create a secure tunnel to expose your server publicly
-   **Arcade Registration** Register your server in Arcade to make it accessible through the
-   **Playground Testing** Test your server with the Arcade Playground

## Best practices

-   **Persistent URLs**: For production use, set up a persistent public URL rather than ephemeral ones
-   **TLS**: Use a TLS-enabled URL for production use
-   **Monitoring**: Set up monitoring for your  Server to ensure availability

## Troubleshooting

-   **Connection issues**: Ensure your public URL is accessible and that your local  Server is running
-   **Timeout errors**: If your  Server takes too long to respond, increase the timeout value in the  configuration

## Next steps

-   [Create custom tools](/guides/create-tools/tool-basics/build-mcp-server.md)
     for your  Server
-   [Set up authentication](/guides/create-tools/tool-basics/create-tool-auth.md)
     for secure access to resources
-   [Configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md)
     for your  Server

Last updated on February 9, 2026

[Arcade Cloud](/en/guides/deployment-hosting/arcade-cloud.md)
[Configure Arcade's engine](/en/guides/deployment-hosting/configure-engine.md)
