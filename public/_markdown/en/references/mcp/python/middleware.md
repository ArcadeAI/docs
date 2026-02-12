---
title: "Middleware"
description: "Base interfaces and built-in middleware for intercepting and modifying MCP requests and responses"
---
Arcade MCP[Python](/en/references/mcp/python.md)
Middleware

# Middleware

Middleware allows you to intercept and modify requests and responses at various stages of processing. Each handler receives the  and a `call_next` function to invoke the next handler in the chain.

## Base classes

### `Middleware`

**`arcade_mcp_server.middleware.base.Middleware`**

Base class for  middleware with typed handlers for each method.

Middleware can intercept and modify requests and responses at various stages of processing. Each handler receives the  and a `call_next` function to invoke the next handler in the chain.

#### Methods

##### `__call__`

```python
async __call__(context, call_next)
```

Main entry point that orchestrates the middleware chain.

##### `on_call_tool`

```python
async on_call_tool(context, call_next)
```

Handle  calls. Override to add tool-specific processing.

##### `on_get_prompt`

```python
async on_get_prompt(context, call_next)
```

Handle prompt retrieval. Override to add prompt processing.

##### `on_list_prompts`

```python
async on_list_prompts(context, call_next)
```

Handle prompt listing. Override to filter or modify prompt list.

##### `on_list_resource_templates`

```python
async on_list_resource_templates(context, call_next)
```

Handle resource template listing. Override to filter or modify template list.

##### `on_list_resources`

```python
async on_list_resources(context, call_next)
```

Handle resource listing. Override to filter or modify resource list.

##### `on_list_tools`

```python
async on_list_tools(context, call_next)
```

Handle  listing. Override to filter or modify tool list.

##### `on_message`

```python
async on_message(context, call_next)
```

Handle any message. Override to add generic processing.

##### `on_notification`

```python
async on_notification(context, call_next)
```

Handle notification messages. Override to add notification processing.

##### `on_read_resource`

```python
async on_read_resource(context, call_next)
```

Handle resource reading. Override to add resource processing.

##### `on_request`

```python
async on_request(context, call_next)
```

Handle request messages. Override to add request processing.

### `MiddlewareContext`

**`arcade_mcp_server.middleware.base.MiddlewareContext`**

 passed through the middleware chain. Contains the message being processed and metadata about the request.

This is a dataclass that inherits from `Generic[T]`.

#### Methods

##### `copy`

```python
copy(**kwargs)
```

Create a copy with updated fields.

## Utility functions

### `compose_middleware`

**`arcade_mcp_server.middleware.base.compose_middleware(*middleware)`**

Compose multiple middleware into a single handler.

The middleware are applied in reverse order, so the first middleware in the list is the outermost (runs first on request, last on response).

## Built-in middleware

### `LoggingMiddleware`

**`arcade_mcp_server.middleware.logging.LoggingMiddleware`**

Middleware that logs all  messages and timing information.

Inherits from `Middleware`.

#### Methods

##### `__init__`

```python
__init__(log_level='INFO')
```

Initialize logging middleware.

**Parameters:**

Name

Type

Description

Default

`log_level`

`str`

The log level to use for message logging

`'INFO'`

##### `on_message`

```python
async on_message(context, call_next)
```

Log all messages with timing information.

### `ErrorHandlingMiddleware`

**`arcade_mcp_server.middleware.error_handling.ErrorHandlingMiddleware`**

Middleware that handles errors and converts them to appropriate responses.

Inherits from `Middleware`.

#### Methods

##### `__init__`

```python
__init__(mask_error_details=True)
```

Initialize error handling middleware.

**Parameters:**

Name

Type

Description

Default

`mask_error_details`

`bool`

Whether to mask error details in responses

`True`

##### `on_call_tool`

```python
async on_call_tool(context, call_next)
```

Handle  call errors specially.

##### `on_message`

```python
async on_message(context, call_next)
```

Wrap all messages with error handling.

## Examples

### Creating custom middleware

```python
# Implement a custom middleware
from arcade_mcp_server.middleware.base import Middleware, MiddlewareContext

class TimingMiddleware(Middleware):
    async def __call__(self, context: MiddlewareContext, call_next):
        import time
        start = time.perf_counter()
        try:
            return await call_next(context)
        finally:
            elapsed_ms = (time.perf_counter() - start) * 1000
            # Attach timing info to context metadata
            context.metadata["elapsed_ms"] = round(elapsed_ms, 2)
```

### Composing middleware

```python
# Compose middleware and create a server
from arcade_mcp_server.middleware.base import compose_middleware
from arcade_mcp_server.middleware.logging import LoggingMiddleware
from arcade_mcp_server.middleware.error_handling import ErrorHandlingMiddleware
from arcade_mcp_server.server import MCPServer
from arcade_core.catalog import ToolCatalog

middleware = compose_middleware([
    ErrorHandlingMiddleware(mask_error_details=False),
    LoggingMiddleware(log_level="INFO"),
    TimingMiddleware(),
])

server = MCPServer(catalog=ToolCatalog(), middleware=[middleware])
```

Last updated on February 12, 2026

[Server](/en/references/mcp/python/server.md)
[Types](/en/references/mcp/python/types.md)
