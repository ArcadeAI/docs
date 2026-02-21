---
title: "Server"
description: "Reference documentation for the low-level MCPServer class"
---
Arcade MCP[Python](/en/references/mcp/python.md)
Server

# Server

Most  should use [`MCPApp`](/references/mcp/python.md) instead of `MCPServer` directly. `MCPServer` is a low-level API for advanced use cases.

The `MCPServer` class is the core server implementation that handles  protocol messages, middleware orchestration, and component management for , resources, and prompts.

## `MCPServer`

**`arcade_mcp_server.server.MCPServer`**

 Server with middleware and  support.

This server provides:

-   Middleware chain for extensible request processing
-    injection for
-   Component managers for , resources, and prompts
-   Bidirectional communication with  clients
-   Authorization and secret management for  execution

### `__init__`

```python
MCPServer(
    catalog,
    *,
    name=None,
    version=None,
    title=None,
    instructions=None,
    settings=None,
    middleware=None,
    lifespan=None,
    auth_disabled=False,
    arcade_api_key=None,
    arcade_api_url=None,
)
```

Initialize the  server.

**Parameters:**

Name

Type

Description

Default

`catalog`

`ToolCatalog`

Tool catalog containing tools to serve

_required_

`name`

`str | None`

Server name. Falls back to the value in `settings.server.name` if not provided.

`None`

`version`

`str | None`

Server version. Falls back to the value in `settings.server.version` if not provided.

`None`

`title`

`str | None`

Server title for display. Falls back to settings, then to `name`.

`None`

`instructions`

`str | None`

Server instructions sent to clients during initialization

`None`

`settings`

`MCPSettings | None`

MCP settings. Loaded from environment if not provided.

`None`

`middleware`

`list[Middleware] | None`

Custom middleware to add to the chain (appended after built-in middleware)

`None`

`lifespan`

`Callable | None`

Lifespan manager function for startup/shutdown hooks

`None`

`auth_disabled`

`bool`

Disable authentication

`False`

`arcade_api_key`

`str | None`

Arcade API key. Overrides settings and credentials file.

`None`

`arcade_api_url`

`str | None`

Arcade API URL. Overrides settings.

`None`

The server automatically adds `ErrorHandlingMiddleware` and (if enabled in settings) `LoggingMiddleware` to the middleware chain. Custom middleware is appended after these built-in middleware.

### Properties

#### `tools`

Access the `ToolManager` for runtime  operations: `add_tool()`, `update_tool()`, `remove_tool()`, `list_tools()`, `get_tool()`.

#### `resources`

Access the `ResourceManager` for runtime resource operations: `add_resource()`, `remove_resource()`, `list_resources()`, `read_resource()`.

#### `prompts`

Access the `PromptManager` for runtime prompt operations: `add_prompt()`, `remove_prompt()`, `list_prompts()`, `get_prompt()`.

### Methods

#### `start`

```python
async server.start()
```

Start the server and all component managers. Loads  from the initial catalog, starts the lifespan manager, and checks for missing secrets. Safe to call multiple times (subsequent calls are no-ops).

#### `stop`

```python
async server.stop()
```

Stop the server and all component managers. Shuts down the lifespan manager and cleans up sessions.

#### `run_connection`

```python
async server.run_connection(read_stream, write_stream, init_options=None)
```

Run a single  connection. Creates a `ServerSession`, registers it, and processes messages until the connection ends.

**Parameters:**

Name

Type

Description

Default

`read_stream`

`Any`

Stream for reading messages from the client

_required_

`write_stream`

`Any`

Stream for writing messages to the client

_required_

`init_options`

`Any`

Connection initialization options (for example, `{"transport_type": "stdio"}`)

`None`

#### `handle_message`

```python
async server.handle_message(message, session=None, resource_owner=None)
```

Handle an incoming  message. Validates the message, applies middleware, dispatches to the appropriate handler, and returns a response.

**Parameters:**

Name

Type

Description

Default

`message`

`Any`

JSON-RPC message dict to handle

_required_

`session`

`ServerSession | None`

The server session for this connection

`None`

`resource_owner`

`ResourceOwner | None`

Authenticated resource owner from front-door auth

`None`

**Returns:**

Type

Description

`MCPMessage | None`

JSON-RPC response, error, or `None` for notifications

### Supported MCP methods

The server handles the following  protocol methods:

Method

Description

`initialize`

Initialize the session and exchange capabilities

`ping`

Health check

`tools/list`

List available tools

`tools/call`

Execute a tool

`resources/list`

List available resources

`resources/read`

Read a resource

`resources/templates/list`

List resource templates

`prompts/list`

List available prompts

`prompts/get`

Get a specific prompt

`logging/setLevel`

Set the server log level

### Example

```python
import asyncio

from arcade_core.catalog import ToolCatalog
from arcade_mcp_server.server import MCPServer

async def main():
    catalog = ToolCatalog()
    server = MCPServer(catalog=catalog, name="example", version="1.0.0")

    await server.start()
    try:
        # The server is now ready to handle connections.
        # In practice, a transport (stdio or HTTP) feeds
        # read_stream/write_stream into server.run_connection().
        pass
    finally:
        await server.stop()

if __name__ == "__main__":
    asyncio.run(main())
```

Last updated on February 10, 2026

[Context](/en/references/mcp/python/context.md)
[Settings](/en/references/mcp/python/settings.md)
