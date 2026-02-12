---
title: "Arcade MCP (MCP Server SDK) - Python Overview"
description: "Overview of the Arcade MCP (MCP Server SDK) for Python"
---
Arcade MCPOverview

# Arcade MCP (MCP Server SDK) - Python Overview

`arcade mcp`, the secure framework for building  servers, provides a clean, minimal API to build  programmatically. It handles  collection, server configuration, and transport setup with a developer-friendly interface.

#### Basic Usage

```python
from arcade_mcp_server import MCPApp
from typing import Annotated

app = MCPApp(name="my_server", version="1.0.0")

@app.tool
def greet(name: Annotated[str, "The name of the person to greet"]) -> str:
    """Greet a person by name."""
    return f"Hello, {name}!"

app.run(host="127.0.0.1", port=8000)
```

#### Class Reference

### `MCPApp`

**`arcade_mcp_server.mcp_app.MCPApp`**

A FastAPI-like interface for building  servers.

The app collects  and configuration, then lazily creates the server and transport when `run()` is called.

**Example:**

```python
from arcade_mcp_server import MCPApp
from typing import Annotated

app = MCPApp(name="my_server", version="1.0.0")

@app.tool
def greet(name: Annotated[str, "The name of the person to greet"]) -> str:
    """Greet a person by name."""
    return f"Hello, {name}!"

# Runtime CRUD once you have a server bound to the app:
# app.server = mcp_server
# await app.tools.add(materialized_tool)
# await app.prompts.add(prompt, handler)
# await app.resources.add(resource)

app.run(host="127.0.0.1", port=8000)
```

#### Properties

##### `prompts`

Runtime prompts API: add/remove/list.

##### `resources`

Runtime resources API: add/remove/list.

##### `tools`

Runtime and build-time  API: add/update/remove/list.

#### Methods

##### `__init__`

```python
__init__(
    name='ArcadeMCP',
    version='1.0.0dev',
    title=None,
    instructions=None,
    log_level='INFO',
    transport='stdio',
    host='127.0.0.1',
    port=8000,
    reload=False,
    **kwargs
)
```

Initialize the  app.

**Parameters:**

Name

Type

Description

Default

`name`

`str`

Server name

`'ArcadeMCP'`

`version`

`str`

Server version

`'1.0.0dev'`

`title`

`str | None`

Server title for display

`None`

`instructions`

`str | None`

Server instructions

`None`

`log_level`

`str`

Logging level (DEBUG, INFO, WARNING, ERROR)

`'INFO'`

`transport`

`TransportType`

Transport type (“stdio” or “http”)

`'stdio'`

`host`

`str`

Host for transport

`'127.0.0.1'`

`port`

`int`

Port for transport

`8000`

`reload`

`bool`

Enable auto-reload for development

`False`

`**kwargs`

`Any`

Additional server configuration

`{}`

##### `add_tool`

```python
add_tool(
    func,
    desc=None,
    name=None,
    requires_auth=None,
    requires_secrets=None,
    requires_metadata=None,
    adapters=None
)
```

Add a  for build-time materialization (pre-server).

##### `tool`

```python
tool(
    func=None,
    desc=None,
    name=None,
    requires_auth=None,
    requires_secrets=None,
    requires_metadata=None,
    adapters=None
)
```

Decorator for adding  with optional parameters.

#### Examples

```python
# --- server.py ---
# Programmatic server creation with a simple tool and HTTP transport

from arcade_mcp_server import MCPApp
from typing import Annotated

app = MCPApp(name="example_server", version="1.0.0")

@app.tool
def echo(text: Annotated[str, "The text to echo"]) -> str:
    """Echo the text back."""
    return f"Echo: {text}"

if __name__ == "__main__":
    # Start an HTTP server (good for local development/testing)
    app.run(transport="http", host="0.0.0.0", port=8000, reload=False, debug=True)
```

```python
# then run the server
python server.py
```

Last updated on February 12, 2026

[API](/en/references/api.md)
[Transports](/en/references/mcp/python/transports.md)
