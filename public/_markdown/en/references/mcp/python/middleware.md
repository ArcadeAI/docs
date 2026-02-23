---
title: "Middleware"
description: "Base interfaces and built-in middleware for intercepting and modifying MCP requests and responses"
---
Arcade MCP[Python](/en/references/mcp/python.md)
Middleware

# Middleware

Middleware allows you to intercept and modify requests and responses at various stages of processing. Each handler receives a `MiddlewareContext` and a `call_next` function to invoke the next handler in the chain.

## Base classes

### `Middleware`

**`arcade_mcp_server.middleware.base.Middleware`**

Base class for  middleware with typed handlers for each MCP method. Subclass this to create custom middleware.

Each handler receives the  and a `call_next` function. Call `await call_next(context)` to continue the chain, or return early to short-circuit.

#### Methods

##### `__call__`

```python
async __call__(context, call_next)
```

Main entry point. Orchestrates the middleware chain by building a handler chain from method-specific and type-specific handlers, then invoking it.

##### `on_message`

```python
async on_message(context, call_next)
```

Handle any message. This runs for every request and notification. Override to add generic processing such as logging or timing.

##### `on_request`

```python
async on_request(context, call_next)
```

Handle request messages (as opposed to notifications). Override to add request-specific processing.

##### `on_notification`

```python
async on_notification(context, call_next)
```

Handle notification messages. Override to add notification processing.

##### `on_call_tool`

```python
async on_call_tool(context, call_next)
```

Handle `tools/call` requests. Override to add \-specific processing.

##### `on_list_tools`

```python
async on_list_tools(context, call_next)
```

Handle `tools/list` requests. Override to filter or modify the  list.

##### `on_read_resource`

```python
async on_read_resource(context, call_next)
```

Handle `resources/read` requests. Override to add resource processing.

##### `on_list_resources`

```python
async on_list_resources(context, call_next)
```

Handle `resources/list` requests. Override to filter or modify the resource list.

##### `on_list_resource_templates`

```python
async on_list_resource_templates(context, call_next)
```

Handle `resources/templates/list` requests. Override to filter or modify the template list.

##### `on_get_prompt`

```python
async on_get_prompt(context, call_next)
```

Handle `prompts/get` requests. Override to add prompt processing.

##### `on_list_prompts`

```python
async on_list_prompts(context, call_next)
```

Handle `prompts/list` requests. Override to filter or modify the prompt list.

### `MiddlewareContext`

**`arcade_mcp_server.middleware.base.MiddlewareContext`**

A generic dataclass (`Generic[T]`) passed through the middleware chain. Contains the message being processed and metadata about the request.

Field

Type

Description

`message`

`T`

The message being processed

`mcp_context`

`Any | None`

The MCP `Context` instance (when in a request context)

`source`

`"client" | "server"`

Message origin

`type`

`"request" | "notification"`

Message type

`method`

`str | None`

MCP method name (e.g., `"tools/call"`)

`timestamp`

`datetime`

When the context was created (UTC)

`request_id`

`str | None`

JSON-RPC request ID

`session_id`

`str | None`

MCP session ID

`metadata`

`dict[str, Any]`

Additional metadata that middleware can add to

#### Methods

##### `copy`

```python
context.copy(**kwargs)
```

Create a copy of the  with updated fields.

### `CallNext`

**`arcade_mcp_server.middleware.base.CallNext`**

A `Protocol` representing the next handler in the middleware chain. Signature: `(context: MiddlewareContext[T]) -> Awaitable[R]`.

## Utility functions

### `compose_middleware`

```python
arcade_mcp_server.middleware.base.compose_middleware(*middleware)
```

Compose multiple `Middleware` instances into a single handler function. The middleware are applied in reverse order, so the **first** middleware in the argument list is the outermost (runs first on request, last on response).

**Parameters:**

Name

Type

Description

`*middleware`

`Middleware`

One or more middleware instances (variadic positional arguments)

**Returns:** A callable with signature `(context, call_next) -> Awaitable`.

## Built-in middleware

### `LoggingMiddleware`

**`arcade_mcp_server.middleware.logging.LoggingMiddleware`**

Logs all  messages with timing information. Inherits from `Middleware`.

```python
LoggingMiddleware(log_level="INFO")
```

Parameter

Type

Description

Default

`log_level`

`str`

The log level to use for message logging

`'INFO'`

Overrides `on_message` to log incoming requests, response timing, and errors.

### `ErrorHandlingMiddleware`

**`arcade_mcp_server.middleware.error_handling.ErrorHandlingMiddleware`**

Handles errors and converts them to appropriate JSON-RPC responses. Inherits from `Middleware`.

```python
ErrorHandlingMiddleware(mask_error_details=True)
```

Parameter

Type

Description

Default

`mask_error_details`

`bool`

When `True`, returns generic error messages instead of detailed ones (recommended for production)

`True`

Overrides:

-   `on_message` — catches exceptions and converts them to `JSONRPCError` responses
-   `on_call_tool` — catches exceptions during  execution and returns them as `CallToolResult` with `isError=True`

## Examples

### Creating custom middleware

```python
import time

from arcade_mcp_server.middleware.base import Middleware, MiddlewareContext


class TimingMiddleware(Middleware):
    async def on_message(self, context: MiddlewareContext, call_next):
        start = time.perf_counter()
        try:
            return await call_next(context)
        finally:
            elapsed_ms = (time.perf_counter() - start) * 1000
            context.metadata["elapsed_ms"] = round(elapsed_ms, 2)
```

### Passing custom middleware to MCPServer

```python
from arcade_core.catalog import ToolCatalog
from arcade_mcp_server.middleware.error_handling import ErrorHandlingMiddleware
from arcade_mcp_server.middleware.logging import LoggingMiddleware
from arcade_mcp_server.server import MCPServer

server = MCPServer(
    catalog=ToolCatalog(),
    middleware=[
        LoggingMiddleware(log_level="DEBUG"),
        TimingMiddleware(),
    ],
)
```

### Using compose\_middleware

```python
from arcade_mcp_server.middleware.base import compose_middleware
from arcade_mcp_server.middleware.error_handling import ErrorHandlingMiddleware
from arcade_mcp_server.middleware.logging import LoggingMiddleware

composed = compose_middleware(
    ErrorHandlingMiddleware(mask_error_details=False),
    LoggingMiddleware(log_level="INFO"),
    TimingMiddleware(),
)
```

Last updated on February 10, 2026

[Settings](/en/references/mcp/python/settings.md)
[Errors](/en/references/mcp/python/errors.md)
