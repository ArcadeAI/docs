---
title: "Errors"
description: "Domain-specific error types raised by the MCP server and components"
---
Arcade MCP[Python](/en/references/mcp/python.md)
Errors

# Errors

Domain-specific error types raised by the  server and components.

## `arcade_mcp_server.exceptions`

 Exception Hierarchy

Provides domain-specific exceptions for better error handling and debugging.

### `MCPError`

**Bases:** `Exception`

Base error for all \-related exceptions.

### `MCPRuntimeError`

**Bases:** `MCPError`

Runtime error for all \-related exceptions.

### `MCPContextError`

**Bases:** `MCPError`

Error in  management.

### `ServerError`

**Bases:** `MCPRuntimeError`

Error in server operations.

### `AuthorizationError`

**Bases:** `MCPContextError`

Authorization failure.

### `LifespanError`

**Bases:** `ServerError`

Error in lifespan management.

### `NotFoundError`

**Bases:** `MCPContextError`

Requested entity not found.

### `PromptError`

**Bases:** `MCPContextError`

Error in prompt management.

### `ProtocolError`

**Bases:** `MCPRuntimeError`

Error in  protocol handling.

### `RequestError`

**Bases:** `ServerError`

Error in request processing from client to server.

### `ResourceError`

**Bases:** `MCPContextError`

Error in resource management.

### `ResponseError`

**Bases:** `ServerError`

Error in request processing from server to client.

### `ServerRequestError`

**Bases:** `RequestError`

Error in sending request from server to client initiated by the server.

### `SessionError`

**Bases:** `ServerError`

Error in session management.

### `TransportError`

**Bases:** `MCPRuntimeError`

Error in transport layer (stdio, HTTP, etc).

## Examples

### Raising exceptions for common error scenarios

```python
from arcade_mcp_server.exceptions import (
    MCPError,
    NotFoundError,
    ValidationError,
    ToolError,
)

# Raising a not-found when a resource is missing
async def read_resource_or_fail(uri: str) -> str:
    if not await exists(uri):
        raise NotFoundError(f"Resource not found: {uri}")
    return await read(uri)

# Validating input
def validate_age(age: int) -> None:
    if age < 0:
        raise ValidationError("age must be non-negative")

# Handling tool execution errors in middleware or handlers
async def call_tool_safely(call):
    try:
        return await call()
    except ToolError as e:
        # Convert to an error result or re-raise
        raise MCPError(f"Tool failed: {e}")
```

Last updated on February 6, 2026

[Types](/en/references/mcp/python/types.md)
[Settings](/en/references/mcp/python/settings.md)
