---
title: "Migrate from toolkits to MCP servers"
description: "Learn how to migrate your existing Arcade toolkit to the new MCP Server framework"
---
[Create tools](/en/guides/create-tools/tool-basics.md)
Migrate from toolkits to MCP servers

# Migrate from toolkits to MCP servers

This guide helps you migrate your existing Arcade toolkit to the new  Server framework. The `arcade-tdk` package has been deprecated in favor of `arcade-mcp-server`, and the `arcade-ai` CLI has been replaced by `arcade-mcp`.

If you’re building a new  server from scratch, check out the [Create an MCP Server](/guides/create-tools/tool-basics/build-mcp-server.md) guide instead.

If you’re migrating an existing toolkit to a new  server, it may be useful to read through our quickstart guide to get a sense of the new  framework: [Create an MCP Server](/guides/create-tools/tool-basics/build-mcp-server.md)

## Understanding the changes

Before migrating, it’s helpful to understand what has changed:

### Terminology updates

-   **Workers** are now called **servers** or ** servers**
-   **Toolkits** are now called **servers**, ** servers**, or  depending on the

### Package changes

-   **arcade-ai** (old CLI) → **arcade-** (new CLI)
-   **arcade-tdk** (old  development kit) → **arcade-\-server** (new  framework)

The new `arcade-mcp-server` framework should feel familiar if you’ve used `arcade-tdk`, but there are important differences to be aware of.

## Update your dependencies

Open your `pyproject.toml` file and update the dependencies:

### Replace the main dependency

Replace `arcade-tdk` with `arcade-mcp-server`:

```toml
[project]
dependencies = [
    "arcade-mcp-server>=1.4.0,<2.0.0",
    # ... other dependencies
]
```

### Update development dependencies

If your toolkit used `arcade-ai` or `arcade-serve` as development dependencies, replace them with `arcade-mcp[all]`:

```toml
[project.optional-dependencies]
dev = [
    "arcade-mcp[all]>=1.3.0,<2.0.0",
    # ... other dev dependencies
]
```

### Install the updated dependencies

Run the following command to install the updated dependencies and development dependencies:

```bash
uv sync --extra dev
```

## Update your imports

Replace all imports from `arcade-tdk` with imports from `arcade-mcp-server`. Most import paths have remained the same or have only slight variations:

### Auth imports

```python
# Before
from arcade_tdk.auth import Google

# After
from arcade_mcp_server.auth import Google
```

### Tool decorator

```python
# Before
from arcade_tdk import tool

# After
from arcade_mcp_server import tool
```

### Error handling

```python
# Before
from arcade_tdk.errors import ToolExecutionError

# After
from arcade_mcp_server.exceptions import ToolExecutionError
```

### Context object

Replace `ToolContext` with `Context`:

```python
# Before
from arcade_tdk import ToolContext

@tool
def my_tool(context: ToolContext) -> str:
    """My tool that uses context"""
    return "Hello"

# After
from arcade_mcp_server import Context

@tool
def my_tool(context: Context) -> str:
    """My tool that uses context"""
    return "Hello"
```

The `ToolContext` class is no longer used. Make sure to replace all instances of `ToolContext` with `Context` in your  functions.

## Create an entrypoint file

Previously, you would run your toolkit using the `arcade serve` CLI command. Now, you need to create an entrypoint file that runs your  server. This allows you to define your own startup and teardown logic for your .

An  is a Python file that creates and runs an `MCPApp` when invoked. `MCPApp` is the developer-facing API for creating and managing your  server.

### Option 1: Use the tool decorator

You can register  directly on the app using the `@app.tool` decorator:

```python
#!/usr/bin/env python3
"""My MCP Server"""

import sys
from arcade_mcp_server import MCPApp

app = MCPApp(name="my_server", version="1.0.0")

@app.tool
def echo_hello() -> str:
    """Tool that just says hello"""
    return "Hello"

@app.tool
def echo_goodbye() -> str:
    """Tool that just says goodbye"""
    return "Goodbye"

if __name__ == "__main__":
    transport = sys.argv[1] if len(sys.argv) > 1 else "stdio"
    app.run(transport=transport)
```

### Option 2: Register tools explicitly

You can also use the standalone `@tool` decorator and register  explicitly:

```python
#!/usr/bin/env python3
"""My MCP Server"""

import sys
from arcade_mcp_server import MCPApp, tool

@tool
def echo_hello() -> str:
    """Tool that just says hello"""
    return "Hello"

@tool
def echo_goodbye() -> str:
    """Tool that just says goodbye"""
    return "Goodbye"

app = MCPApp(name="my_server", version="1.0.0")
app.add_tool(echo_hello)
app.add_tool(echo_goodbye)

if __name__ == "__main__":
    transport = sys.argv[1] if len(sys.argv) > 1 else "stdio"
    app.run(transport=transport)
```

### Option 3: Register tools from modules

If your old toolkit had many , you may want to use the `add_tools_from_module` method to register all your tools at once:

```python
#!/usr/bin/env python3
"""My MCP Server"""

import sys
import my_module_with_tools

from arcade_mcp_server import MCPApp

app = MCPApp(name="my_server", version="1.0.0")
app.add_tools_from_module(my_module_with_tools)

if __name__ == "__main__":
    transport = sys.argv[1] if len(sys.argv) > 1 else "stdio"
    app.run(transport=transport)
```

For large toolkits with many , using `add_tools_from_module` is the recommended approach. This keeps your  clean and maintainable.

## Run your MCP server

Replace the old `arcade serve` command with direct execution of your :

```bash
# Before
arcade serve

# After
uv run server.py
```

You can specify the transport type as a command line argument:

```bash
# Run with stdio transport (default)
uv run server.py stdio

# Run with HTTP transport
uv run server.py http
```

## Update deployment configuration

The `arcade deploy` command still exists for deploying  servers, but the deployment process has been simplified.

### Before (with toolkits)

Previously, you would deploy your toolkit using:

```bash
arcade deploy
```

And configure your deployment with a `worker.toml` file.

### After (with MCP servers)

You still use `arcade deploy`, but you no longer need a `worker.toml` file:

```bash
arcade deploy
```

The deployment configuration is now inferred from your `MCPApp` and  structure.

You’re no longer deploying a “worker” you’re deploying an  server. The deployment process has been streamlined to require less configuration.

## Quick reference

Here’s a quick reference table for common changes:

Old (toolkit)

New (MCP server)

`arcade-tdk`

`arcade-mcp-server`

`arcade-ai`

`arcade-mcp`

`arcade serve`

`uv run server.py`

`from arcade_tdk import tool`

`from arcade_mcp_server import tool`

`from arcade_tdk import ToolContext`

`from arcade_mcp_server import Context`

`from arcade_tdk.errors import ToolExecutionError`

`from arcade_mcp_server.exceptions import ToolExecutionError`

`worker.toml`

Not needed

## Next steps

After migrating your toolkit to an  server:

-   **Test your server**: Run your server locally and verify all  work correctly
-   **Update your CI/CD**: Update any automated workflows to use the new CLI and commands
-   **Deploy your server**: Use `arcade deploy` to deploy your  server
-   **Configure  clients**: Connect your server to [MCP clients](/guides/create-tools/tool-basics/call-tools-mcp.md)
     like Claude Desktop, Cursor, or VS Code

Last updated on February 6, 2026

[Provide Useful Tool Errors](/en/guides/create-tools/error-handling/useful-tool-errors.md)
[Secure Auth in Production](/en/guides/user-facing-agents/secure-auth-production.md)
