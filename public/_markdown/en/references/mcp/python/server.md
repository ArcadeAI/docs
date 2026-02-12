---
title: "Server"
description: "Reference documentation for the Arcade MCP Server class"
---
Arcade MCP[Python](/en/references/mcp/python.md)
Server

# Server

Low-level server for hosting Arcade tools over .

## `MCPServer`

**`arcade_mcp_server.server.MCPServer`**

 Server with middleware and  support.

This server provides:

-   Middleware chain for extensible request processing
-    injection for
-   Component managers for , resources, and prompts
-   Bidirectional communication support to  clients

### Properties

#### `prompts`

Access the PromptManager for runtime prompt operations.

#### `resources`

Access the ResourceManager for runtime resource operations.

#### `tools`

Access the ToolManager for runtime  operations.

### Methods

#### `__init__`

```python
__init__(
    catalog,
    *,
    name='ArcadeMCP',
    version='0.1.0',
    title=None,
    instructions=None,
    settings=None,
    middleware=None,
    lifespan=None,
    auth_disabled=False,
    arcade_api_key=None,
    arcade_api_url=None
)
```

Initialize  server.

**Parameters:**

Name

Type

Description

Default

`catalog`

`ToolCatalog`

Tool catalog

_required_

`name`

`str`

Server name

`'ArcadeMCP'`

`version`

`str`

Server version

`'0.1.0'`

`title`

`str | None`

Server title for display

`None`

`instructions`

`str | None`

Server instructions

`None`

`settings`

`MCPSettings | None`

MCP settings (uses env if not provided)

`None`

`middleware`

`list[Middleware] | None`

List of middleware to apply

`None`

`lifespan`

`Callable[[Any], Any] | None`

Lifespan manager function

`None`

`auth_disabled`

`bool`

Disable authentication

`False`

`arcade_api_key`

`str | None`

Arcade API key (overrides settings)

`None`

`arcade_api_url`

`str | None`

Arcade API URL (overrides settings)

`None`

#### `handle_message`

```python
async handle_message(message, session=None)
```

Handle an incoming message.

**Parameters:**

Name

Type

Description

Default

`message`

`Any`

Message to handle

_required_

`session`

`ServerSession | None`

Server session

`None`

**Returns:**

Type

Description

`MCPMessage | None`

Response message or None

#### `run_connection`

```python
async run_connection(read_stream, write_stream, init_options=None)
```

Run a single  connection.

**Parameters:**

Name

Type

Description

Default

`read_stream`

`Any`

Stream for reading messages

_required_

`write_stream`

`Any`

Stream for writing messages

_required_

`init_options`

`Any`

Connection initialization options

`None`

### Examples

#### Basic server with tool catalog and stdio transport

```python
import asyncio
from arcade_mcp_server.server import MCPServer
from arcade_core.catalog import ToolCatalog
from arcade_mcp_server.transports.stdio import StdioTransport

async def main():
    catalog = ToolCatalog()
    server = MCPServer(catalog=catalog, name="example", version="1.0.0")
    await server._start()
    try:
        # Run stdio transport loop
        transport = StdioTransport()
        await transport.run(server)
    finally:
        await server._stop()

if __name__ == "__main__":
    asyncio.run(main())
```

#### Handling a single HTTP streamable connection

```python
import asyncio
from arcade_mcp_server.server import MCPServer
from arcade_core.catalog import ToolCatalog
from arcade_mcp_server.transports.http_streamable import HTTPStreamableTransport

async def run_http():
    catalog = ToolCatalog()
    server = MCPServer(catalog=catalog)
    await server._start()
    try:
        transport = HTTPStreamableTransport(host="0.0.0.0", port=8000)
        await transport.run(server)
    finally:
        await server._stop()

asyncio.run(run_http())
```

Last updated on January 5, 2026

[Transports](/en/references/mcp/python/transports.md)
[Middleware](/en/references/mcp/python/middleware.md)
