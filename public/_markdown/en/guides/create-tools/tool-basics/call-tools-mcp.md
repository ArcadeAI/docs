---
title: "Call tools from MCP clients"
description: "Learn how to call tools from MCP clients"
---
Create tools[Build a tool](/en/guides/create-tools/tool-basics.md)
Call tools from MCP clients

# Call tools from MCP clients

## Outcomes

Configure your  clients to call tools from your .

### You will Learn

-   How to configure your  clients depending on the transport type.
-   How to set the secrets for your  server in your client’s configuration file.

### Prerequisites

-   [Arcade account](https://app.arcade.dev/register)

-   [Arcade CLI](/references/arcade-cli.md)

-   [An MCP Server](/guides/create-tools/tool-basics/build-mcp-server.md)

-   [uv package manager](https://docs.astral.sh/uv/getting-started/installation/)
     

## Using the `arcade configure` command

For popular  clients, you can use the `arcade configure` command to configure your MCP client to call your MCP server. This will automatically add the MCP server to your client’s configuration file. By default, it will use the stdio transport. You must run this command from the directory of your .

### Cursor IDE

```bash
arcade configure cursor
```

### VS Code

```bash
arcade configure vscode
```

### Claude Desktop

```bash
arcade configure claude
```

You can customize a lot of the configuration passing options to `arcade configure`. For example, to change the transport type to http, you can pass the `--transport` (or `-t`) option:

### Cursor IDE

```bash
arcade configure cursor --transport http
```

### VS Code

```bash
arcade configure vscode --transport http
```

### Claude Desktop

Claude Desktop does not currently support the HTTP transport via JSON configuration files.

### stdio specific configuration

If you are using the stdio transport, `arcade configure` will assume the  (the script that contains the `MCPApp` instance and calls `app.run()`) to your  server is `server.py` and will set the working directory to the path of your entrypoint file. You can override this with the `--entrypoint` (or `-e`) option:

Note that the `--entrypoint` accepts only the filename of the entrypoint file, not the path to the script.

When using the stdio transport, `arcade configure` will automatically load the secrets from the `.env` file at the directory of your entrypoint file into the appropriate configuration file for your  client.

### Cursor IDE

```bash
arcade configure cursor --entrypoint my_server.py
```

### VS Code

```bash
arcade configure vscode --entrypoint my_server.py
```

### Claude Desktop

```bash
arcade configure claude --entrypoint my_server.py
```

### HTTP specific configuration

If you are using the streamable HTTP transport, `arcade configure` will assume the  server is running on the default port `8000` and that the  is running locally (in localhost). You can override this with the `--host` (or `-h`) and `--port` (or `-p`) options:

### Cursor IDE

Run from a different port:

```bash
arcade configure cursor -t http --port 8000
```

If you want to configure an  server running on the Arcade Cloud, you can use the `--host` option:

```bash
arcade configure cursor -t http --host arcade
```

### VS Code

Run from a different port:

```bash
arcade configure vscode -t http --port 8000
```

If you want to configure an  server running on the Arcade Cloud, you can use the `--host` option:

```bash
arcade configure vscode -t http --host arcade
```

### Claude Desktop

Claude Desktop does not currently support the HTTP transport via JSON configuration files.

### Other configuration options

If you have modified the default configuration of your  client, or want to use a profile/workspace specific configuration file, then you can pass the `--config` (or `-c`) option to `arcade configure` to use your custom configuration file:

### Cursor IDE

```bash
arcade configure cursor --config /path/to/your/config.json
```

### VS Code

```bash
arcade configure vscode --config /path/to/your/config.json
```

### Claude Desktop

```bash
arcade configure claude --config /path/to/your/config.json
```

By default, `arcade configure` will use the current directory as the name of the  server. You can override this with the `--name` (or `-n`) option:

### Cursor IDE

```bash
arcade configure cursor --name my_server
```

### VS Code

```bash
arcade configure vscode --name my_server
```

### Claude Desktop

```bash
arcade configure claude --name my_server
```

## Manually configuring your MCP client

If your  client is not supported by the `arcade configure` command, you can manually add the  to your client’s configuration file.

Each  client has a different way of configuring MCP servers. This section covers the most common ways of configuring MCP servers adopted by the most popular MCP clients. However, you may find inconsistencies such as the need to specify the ’s type as its transport, or as “local” and “remote”. Some MCP clients will use “env” to pass environment variables, while others may use “environment” or “inputs”. Use this guide as a conceptual reference, but always refer to your MCP client’s documentation for the most up-to-date information.

### stdio (default)

When configuring your  client using the stdio transport, you need to ensure that the  is called using the right version of Python and within the correct working directory. For example, let’s pretend this is your setup:

-   Your virtual environment is located at `/path/to/your/project/.venv`
-   Your  is located at `/path/to/your/project`
-   The entrypoint to your  server is located at `/path/to/your/server.py`
-   One of your  requires the `MY_SECRET_KEY` environment variable to be set.
-   Your secrets are stored in the `/path/to/your/project/.env` file

Then, your  client’s configuration file should look like this:

```json
{
  "mcpServers": {
    "my_server": {
      "command": "/path/to/your/project/.venv/bin/python",
      "args": ["/path/to/your/project/server.py", "stdio"],
      "env": {
        "MY_SECRET_KEY": "my-secret-value"
      }
    }
  }
}
```

This will ensure that the command used by the  client to start the  is the correct version of Python and that the environment variables are set correctly.

### Streamable HTTP

When configuring your  client using the Streamable HTTP transport, ensure the  is started on the correct port and from the correct working directory. For example, if your setup is:

-   Your virtual environment is located at `/path/to/your/project/.venv`
-   Your  server is located at `/path/to/your/project/server.py`
-   Your secrets are stored in the `/path/to/your/project/.env` file

Activate the virtual environment:

```bash
source /path/to/your/project/.venv/bin/activate
```

run the  server using the http transport. The secrets will be loaded from the `.env` file that is located at the directory of your :

```bash
uv run server.py http
```

Then, your  client’s configuration file should look like this:

```json
{
  "mcpServers": {
    "my_server": {
      "url": "http://127.0.0.1:8000",
      "transport": "http"
    }
  }
}
```

For security reasons, Local HTTP servers do not currently support managed authorization and secrets. If you need to use authorization or secrets, you should use the stdio transport and configure the Arcade API key and secrets in your  connection settings. If you intend to expose your HTTP  to the public internet, please follow the [on-prem MCP server](/guides/deployment-hosting/on-prem.md) guide for secure remote deployment.

Last updated on January 5, 2026

[Access runtime data](/en/guides/create-tools/tool-basics/runtime-data-access.md)
[Organize your MCP server and tools](/en/guides/create-tools/tool-basics/organize-mcp-tools.md)
