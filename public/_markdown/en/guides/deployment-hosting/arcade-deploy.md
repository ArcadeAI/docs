---
title: "Cloud deployments with Arcade Deploy"
description: "Learn how to deploy a worker with Arcade Deploy"
---
[Deployment & hosting](/en/guides/deployment-hosting.md)
Arcade Deploy

# Deploying to the cloud with Arcade Deploy

Running your  servers locally is very convenient during development and testing. Once your MCP server is mature, however, you may want to access it from any MCP client, or to facilitate multi-user support. Doing all that from your computer comes with the complexity of running and maintaining a server, handling auth and high availability for all your users and all the integrations you want to support. Arcade Deploy takes care of all that for you. Your MCP server will be registered to Arcade, adding all the tools you created to the larger tool catalog. From there, you can create  to pick and choose which tools you want to use in your MCP clients, which can be from any connected .

## Outcomes

This guide shows you how to deploy your  Server with Arcade Deploy.

### You will Learn

-   How to deploy your existing  Server to the cloud with the `arcade deploy` CLI command.
-   How to create an  Gateway to pick and choose which  you want to use in your MCP clients.
-   How to use Arcade clients to call the tools in your  Server.

### Prerequisites

-   [Arcade account](https://app.arcade.dev/register)

-   [uv package manager](https://docs.astral.sh/uv/getting-started/installation/)
     
-   [Create an MCP Server](/guides/create-tools/tool-basics/build-mcp-server.md)


### uv

```bash
uv tool install arcade-mcp
```

This will install the Arcade CLI as a [uv tool](https://docs.astral.sh/uv/guides/tools/#installing-tools) , making it available system wide.

### pip

```bash
pip install arcade-mcp
```

## Create an MCP server using Arcade MCP

If you have not created an  server yet, then follow the steps outlined in [this guide](/guides/create-tools/tool-basics/build-mcp-server.md) before deploying.

## Deploy your MCP Server

Run the deploy command in the directory where you started your  server (containing your `pyproject.toml` file) and specify the relative path to your  via the `--entrypoint/-e` option.

```bash
arcade deploy -e src/my_server/server.py
```

You must run the command from the directory containing your `pyproject.toml` file.

By default, running `arcade deploy` looks for a file named `server.py` in the current directory as the entrypoint file to your  server. If your  is in a different directory, then you need to specify the relative path.

```python
from arcade_mcp_server import MCPApp

app = MCPApp()

@app.tool
def echo(phrase: Annotated[str, "The phrase to echo"]) -> str:
    """Echo a phrase"""
    return phrase

if __name__ == "__main__":
    app.run()
```

It is important that your  executes `MCPApp.run()` (or `app.run()` if `app` is of type `MCPApp`) when invoked directly.

We recommend to do it inside an `if __name__ == "__main__":` statement.

You should see output like the following:

```bash
Validating user is logged in...
✓ {arcade_user_id} is logged in

Validating pyproject.toml exists in current directory...
✓ pyproject.toml found at /path/to/your/project/pyproject.toml

Loading .env file from current directory if it exists...
✓ Loaded environment from /path/to/your/project/.env

Validating server is healthy and extracting metadata before deploying...
✓ Server started on port 8001
✓ Server is healthy
✓ Found server name: my_server
✓ Found server version: 1.0.0
✓ Found 3 tools
✓ Found 1 required secret(s)

Uploading 1 required secret(s) to Arcade...
✓ Uploading 'MY_SECRET_KEY' with value ending in ...ime!
✓ Secret 'MY_SECRET_KEY' uploaded

Creating deployment package...
✓ Package created (1.8 KB)


⠧ Deployment in progress (this may take a few minutes)...

Recent logs:
  data: {"Timestamp":"2025-10-27T16:03:45.429460682Z","Line":"Please check https://pkg.go.dev/github.com/gin-gonic/gin#readme-don-t-trust-all-proxies for details."}
  data: {"Timestamp":"2025-10-27T16:03:45.429466232Z","Line":"[GIN-debug] Listening and serving HTTP on :8002"}
  data: {"Timestamp":"2025-10-27T16:03:47.577492621Z","Line":"[GIN] 2025/10/27 - 16:03:47 | 200 |    2.888808ms |   10.30.253.232 | GET      \"/worker/health\""}
  data: {"Timestamp":"2025-10-27T16:03:48.230570179Z","Line":"INFO:     127.0.0.1:53384 - \"GET /worker/health HTTP/1.1\" 200 OK"}
  data: {"Timestamp":"2025-10-27T16:03:48.231072632Z","Line":"[GIN] 2025/10/27 - 16:03:48 | 200 |    4.526797ms |   10.30.253.232 | GET      \"/worker/health\""}


You can safely exit with Ctrl+C at any time. The deployment will continue normally.

✓ Deployment successful! Server is running.
```

## Manage your MCP servers in Arcade

Navigate to the [Servers](https://api.arcade.dev/dashboard/servers)  page in your Arcade dashboard. From there, you will be able to:

-   Monitor the health status of the server
-   Delete the server
-   Test and execute all the
-   Manage users connected to the
-   Manage the secrets for the server
-   Create [MCP Gateways](/guides/mcp-gateways.md)


## Create an MCP Gateway to call the tools in your MCP Server

Once the  server is deployed to Arcade, all the  in the server will be available in the [tool catalog](https://api.arcade.dev/dashboard/tools)  page in your Arcade dashboard. To call the tools from an MCP client, you first need to [create an MCP Gateway](/guides/mcp-gateways.md) to pick and choose which tools you want to use in your MCP clients.

When creating an  gateway, you can select the tools you want to include in the Gateway from any  available to the , including the one you just deployed.

## Use Arcade clients to call the tools in your MCP Server

You can use any of the available [Arcade clients](/references.md) to call the tools in your  Server. When using the clients, you are not required to create an , as the client will handle the connection to all tools in your Arcade  directly.

Your  Server is now deployed and managed by Arcade, and ready to be used in your MCP clients!

Last updated on February 10, 2026

[Configure Arcade's engine](/en/guides/deployment-hosting/configure-engine.md)
[Overview](/en/guides/security.md)
