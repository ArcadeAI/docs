---
title: "Build MCP Server QuickStart"
description: "Create your custom MCP Server with Arcade MCP"
---
[Quickstarts](/en/get-started/quickstarts/call-tool-agent.md)
Build an MCP server for custom tools

# Build MCP Server QuickStart

## Outcomes

Build and run an  Server with  that you create.

### You will Learn

-   Install `arcade-mcp`, the secure framework for building  servers
-   Start your  server and connect to it from your favorite MCP client
-   Call a basic
-   Call a  that requires a secret
-   Create an Arcade
-   Call a  that requires auth

### Prerequisites

-   Python 3.10 or higher
-   The [`uv` package manager](https://docs.astral.sh/uv/getting-started/installation/)


## Install the Arcade CLI

In your terminal, run the following command to install the `arcade-mcp` package - Arcade’s CLI:

### uv

```bash
uv tool install arcade-mcp
```

This will install the Arcade CLI as a [uv tool](https://docs.astral.sh/uv/guides/tools/#installing-tools) , making it available system wide.

### pip

```bash
pip install arcade-mcp
```

## Create Your Server

In your terminal, run the following command to scaffold a new  Server called `my_server`:

```bash
arcade new my_server
cd my_server/src/my_server
```

This generates a Python module with the following structure:

```bash
my_server/
├── src/
│   └── my_server/
│       ├── __init__.py
│       ├── .env.example
│       └── server.py
└── pyproject.toml
```

-   **server.py**  with MCPApp and example
-   **pyproject.toml** Dependencies and  configuration
-   **.env.example** Example `.env` file containing a secret required by one of the generated  in `server.py`

`server.py` includes proper structure with command-line argument handling. It creates an `MCPApp` with three sample :

-   **`greet`**: This  has a single argument, the name of the person to greet. It requires no secrets or auth
-   **`whisper_secret`**: This  requires no arguments, and will output the last 4 characters of a `MY_SECRET_KEY` secret that you can define in your `.env` file.
-   **`get_posts_in_subreddit`**: This  has a single argument, a subreddit, and will return the latest posts on that subreddit, it requires the  to authorize the tool to perform a read operation on their behalf.

> If you’re having issues with the `arcade` command, please see the [Troubleshooting](#troubleshooting) section.

## Setup the secrets in your environment

Secrets are sensitive strings like passwords, , or other tokens that grant access to a protected resource or API. Arcade includes the “whisper\_secret”  that requires you to set a secret key in your environment. If you don’t set the secret, the tool will return an error.

### .env file

You can create a `.env` file at the same directory as your  (`server.py`) and add your secret:

```bash
# .env
MY_SECRET_KEY="my-secret-value"
```

The generated  includes a `.env.example` file with the secret key name and example value. You can rename it to `.env` to start using it.

```bash
mv .env.example .env
```

### Environment Variable

You can set the environment variable in your terminal directly with this command:

```bash
export MY_SECRET_KEY="my-secret-value"
```

## Connect to Arcade to unlock authorized tool calling

Since the Reddit tool accesses information only available to your Reddit , you’ll need to authorize it. For this, you’ll need to create an Arcade account and connect from the terminal, run:

```bash
arcade login
```

Follow the instructions in your browser to connect your terminal to your Arcade .

## Run your MCP Server

Run your  Server using one of the following commands in your terminal:

### stdio transport (default)

```bash
uv run server.py stdio
```

When using the stdio transport,  clients typically launch the  as a subprocess. Because of this, the server may run in a different environment and not have access to secrets defined in your local `.env` file. Please refer to the [create a tool with secrets](/guides/create-tools/tool-basics/create-tool-secrets.md) guide for more information.

### http transport

```bash
uv run server.py http
```

For HTTP transport, view your server’s API docs at [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs) .

For security reasons, Local HTTP servers do not currently support tool-level authorization and secrets. If you need to use tool-level authorization or secrets locally, you should use the stdio transport and configure the Arcade API key and secrets in your  connection settings. Otherwise, if you intend to expose your HTTP  to the public internet with \-level authorization and secrets, please follow the [deploying to the cloud with Arcade Deploy](/guides/deployment-hosting/arcade-deploy.md) guide or the [on-prem MCP server](/guides/deployment-hosting/on-prem.md) guide for secure remote deployment.

You should see output like this in your terminal:

```bash
2025-11-03 13:46:11.041 | DEBUG    | arcade_mcp_server.mcp_app:add_tool:242 - Added tool: greet
2025-11-03 13:46:11.042 | DEBUG    | arcade_mcp_server.mcp_app:add_tool:242 - Added tool: whisper_secret
2025-11-03 13:46:11.043 | DEBUG    | arcade_mcp_server.mcp_app:add_tool:242 - Added tool: get_posts_in_subreddit
INFO     | 13:46:11 | arcade_mcp_server.mcp_app:299 | Starting my_server v1.0.0 with 3 tools
```

## Configure your MCP Clients

Now you can connect  Clients to your :

### Cursor IDE

```bash
# Configure Cursor to use your MCP server with the default transport (stdio)
arcade configure cursor

# Configure Cursor to use your MCP server with the http transport
arcade configure cursor --transport http
```

### VS Code

```bash
# Configure VS Code to use your MCP server with the default transport (stdio)
arcade configure vscode

# Configure VS Code to use your MCP server with the http transport
arcade configure vscode --transport http
```

### Claude Desktop

```bash
# Configure Claude Desktop to use your MCP server with the default transport (stdio)
arcade configure claude

# Configure Claude Desktop to use your MCP server with the http transport
arcade configure claude --transport http
```

## Try it out

Try calling your  inside your assistant.

Here’s some prompts you can try:

-   “Get some posts from the r/ subreddit”
-   “What’s the last 4 characters of my secret key?”
-   “Greet me as Supreme Lord of ”

## Troubleshooting

### `arcade` command not found or not working

If you’re getting issues with the `arcade` command, please make sure you did not install it outside of your virtual environment. For example, if your system-wide Python installation older than 3.10, you may need to uninstall arcade from that Python installation in order for the terminal to recognize the `arcade` command installed in your virtual environment.

### The Reddit tool is not working

Ensure you run `arcade login` and follow the instructions in your browser to connect your terminal to your Arcade .

### The Whisper Secret tool is not working

Ensure you have set the environment variable in your terminal or `.env` file, and that it matches the secret key defined in the `@app.tool` decorator. If you are using the stdio transport, then ensure you add the environment variable to the  client’s configuration file.

## Next Steps

-   **Learn how to write a  with auth**: [Create a tool with auth](/guides/create-tools/tool-basics/create-tool-auth.md)

-   **Learn how to write a  with secrets**: [Create a tool with secrets](/guides/create-tools/tool-basics/create-tool-secrets.md)

-   **Learn more about the  object**: [Tools and Context](/guides/create-tools/tool-basics/runtime-data-access.md)

-   **Learn how to write  evaluations**: [Create an evaluation suite](/guides/create-tools/evaluate-tools/create-evaluation-suite.md)
     to optimize them for LLM usage
-   **Learn how to deploy your  server**: [Deploy your MCP server](/guides/deployment-hosting/arcade-deploy.md)


Last updated on February 11, 2026

[Call tools in IDE/MCP clients](/en/get-started/quickstarts/call-tool-client.md)
[Overview](/en/get-started/agent-frameworks.md)
