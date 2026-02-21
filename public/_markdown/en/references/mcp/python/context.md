---
title: "Context"
description: "Reference documentation for the Context class used by MCP tools"
---
Arcade MCP[Python](/en/references/mcp/python.md)
Context

# Context

The `Context` class is the primary interface for   to interact with the server, client, and runtime environment. Tools receive a populated `Context` instance as a parameter and should not create instances directly.

`Context` extends `ToolContext` (from `arcade_core`), combining runtime capabilities with \-specific data.

## Basic usage

```python
from arcade_mcp_server import Context, tool

@tool
async def my_tool(context: Context, query: str) -> str:
    """A tool that uses context capabilities."""
    await context.log.info(f"Processing query: {query}")
    return f"Result for: {query}"
```

`Context` instances are automatically created and managed by the  server. Annotate your tool’s  parameter with `Context` and the server will inject it at runtime.

## Inherited from ToolContext

These fields inherit from `arcade_core.schema.ToolContext` and the server populates them before  execution:

Property

Type

Description

`user_id`

`str | None`

The user ID for this tool execution

`secrets`

`list`

Secrets available to this tool

`authorization`

`ToolAuthorizationContext | None`

Authorization context (token and user info) if the tool requires auth

`metadata`

`dict`

Additional metadata for the tool execution

Helper methods from `ToolContext`:

-   `get_secret(key)` — retrieve a secret by key (raises `ValueError` if not found)
-   `set_secret(key, value)` — set a secret value

## Runtime capabilities

### `context.log`

Send log messages to the connected  client. These appear in the client’s log stream, not in the server’s local logs.

**Methods:**

Method

Description

`await context.log.debug(message)`

Send a debug-level log message

`await context.log.info(message)`

Send an info-level log message

`await context.log.warning(message)`

Send a warning-level log message

`await context.log.error(message)`

Send an error-level log message

`await context.log.log(level, message, logger_name=None, extra=None)`

Send a log message at a specific level

```python
@tool
async def my_tool(context: Context) -> str:
    await context.log.info("Starting processing")
    await context.log.debug("Detailed state info")
    await context.log.warning("Something unexpected happened")
    return "done"
```

### `context.progress`

Report progress back to the client during long-running operations.

Progress reporting requires the client to send a `progressToken` in the request metadata. If no token is available, progress reports are silently ignored.

**Methods:**

Method

Description

`await context.progress.report(progress, total=None, message=None)`

Report progress

**Parameters:**

Name

Type

Description

`progress`

`float`

Current progress value

`total`

`float | None`

Total expected value

`message`

`str | None`

Human-readable progress description

```python
@tool
async def process_items(context: Context, items: list[str]) -> str:
    total = len(items)
    for i, item in enumerate(items):
        await context.progress.report(i + 1, total=total, message=f"Processing {item}")
        # ... process item ...
    return f"Processed {total} items"
```

### `context.resources`

Read  resources and list roots from the connected client.

**Methods:**

Method

Description

`await context.resources.read(uri)`

Read a resource by URI, returns `list[ResourceContents]`

`await context.resources.get(uri)`

Read a resource and return the first content item

`await context.resources.list()`

List all available resources

`await context.resources.list_roots()`

List the client’s root directories

`await context.resources.list_templates()`

List available resource templates

```python
@tool
async def read_config(context: Context) -> str:
    content = await context.resources.get("config://app/settings")
    return content.text
```

### `context.tools`

Call other  programmatically within the same session.

**Methods:**

Method

Description

`await context.tools.list()`

List all available tools

`await context.tools.call_raw(name, params)`

Call a tool by name with a dict of parameters, returns `CallToolResult`

```python
@tool
async def composite_tool(context: Context) -> str:
    result = await context.tools.call_raw(
        "MyServer.other_tool",
        {"param1": "value1"},
    )
    if result.isError:
        return "Other tool failed"
    return f"Got result: {result.content[0].text}"
```

### `context.sampling`

Create messages using the connected client’s language model.

Sampling requires the client to advertise sampling support in its capabilities. If the client does not support sampling, calling `create_message` raises a `ValueError`.

**Methods:**

Method

Description

`await context.sampling.create_message(messages, ...)`

Generate a response from the client’s model

**Parameters for `create_message`:**

Name

Type

Description

Default

`messages`

`str | list[str | SamplingMessage]`

Messages to send. A plain string is converted to a single user message.

_required_

`system_prompt`

`str | None`

System prompt

`None`

`include_context`

`str | None`

Context inclusion (`"none"`, `"thisServer"`, `"allServers"`)

`None`

`temperature`

`float | None`

Sampling temperature

`None`

`max_tokens`

`int | None`

Maximum tokens to generate

`None` (defaults to `512`)

`model_preferences`

`ModelPreferences | str | list[str] | None`

Model hints. A string or list of strings is converted to `ModelPreferences` with `ModelHint` entries.

`None`

```python
@tool
async def summarize(context: Context, text: str) -> str:
    result = await context.sampling.create_message(
        f"Summarize this text:\n\n{text}",
        max_tokens=256,
        temperature=0.3,
    )
    return result.text
```

### `context.ui`

Elicit input from the  through the connected client.

Elicitation requires client support. The schema must have `type: "object"` and properties can only use primitive types (`string`, `number`, `integer`, `boolean`). String properties support `format` values: `email`, `uri`, `date`, `date-time`.

**Methods:**

Method

Description

`await context.ui.elicit(message, schema=None, timeout=300.0)`

Prompt the user for input, returns `ElicitResult`

The returned `ElicitResult` has:

Field

Type

Description

`action`

`"accept" | "decline" | "cancel"`

What the user chose

`content`

`dict | None`

The user’s input (when `action` is `"accept"`)

```python
@tool
async def confirm_action(context: Context) -> str:
    result = await context.ui.elicit(
        "Please confirm your name and email",
        schema={
            "type": "object",
            "properties": {
                "name": {"type": "string", "description": "Your name"},
                "email": {"type": "string", "format": "email"},
            },
        },
    )
    if result.action == "accept":
        return f"Hello, {result.content['name']}!"
    return "Action cancelled"
```

### `context.notifications`

Send notifications to the connected client, such as list-changed events.

**Sub-properties:**

Property

Method

Description

`context.notifications.tools`

`await .list_changed()`

Notify the client that the tool list has changed

`context.notifications.resources`

`await .list_changed()`

Notify the client that the resource list has changed

`context.notifications.prompts`

`await .list_changed()`

Notify the client that the prompt list has changed

```python
@tool
async def register_new_tool(context: Context) -> str:
    # ... register a tool at runtime ...
    await context.notifications.tools.list_changed()
    return "Tool registered"
```

## Additional properties

Property

Type

Description

`context.request_id`

`str | None`

The unique identifier for the current MCP request

`context.session_id`

`str | None`

The unique identifier for the current MCP session

Last updated on February 10, 2026

[Overview](/en/references/mcp/python.md)
[Server](/en/references/mcp/python/server.md)
