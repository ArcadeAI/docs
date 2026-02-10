---
title: "Context and MCP tools"
description: "What Arcade&#x27;s Tool Context is and how to use it."
---
Create tools[Build a tool](/en/guides/create-tools/tool-basics.md)
Access runtime data

# Understanding `Context` and tools

The `Context` class is used by tools for both runtime capabilities and \-specific data access. Tools receive a populated `Context` instance as a parameter. Tools should not create `Context` instances directly.

## Outcomes

Understand how to use the `Context` object to access runtime capabilities and \-specific data.

### You will Learn

1.  \-specific data that can be accessed using the `Context` object:
    -   Access OAuth token via `context.get_auth_token_or_empty`
    -   Access secrets via `context.get_secret`
    -   Access user\_id via `context.user_id`
2.  Runtime capabilities that can be accessed using the `Context` object:
    -   Log messages via `context.log`
    -   Request LLM sampling via `context.sampling`
    -   Request  elicitation via `context.ui.elicit`
    -   Report progress via `context.progress.report`

## How `Context` Works

When a tool that requires authorization is invoked, the  server automatically:

1.  Creates an instance of `Context` and populates it with the runtime capabilities and \-specific data
2.  Passes this object to your tool’s first parameter named “”

You can then use the `Context` object to make requests to external APIs that require an OAuth token.

Let’s walk through an example (or skip to [the full code](#example-code)).

## Context Features

### Tool-Specific Data

#### Tool secrets

Specify required secrets using the `requires_secrets` argument of the `@tool` decorator and access them securely using the `get_secret` method:

```python
@tool(requires_secrets=["DATABASE_URL", "API_KEY"])
async def my_tool(context: Context) -> str:
  try:
      api_key = context.get_secret("API_KEY")
  except ValueError:
      # Handle missing secret
  return "Do something interesting with the secret"
```

#### OAuth token

Specify required authorization using the `requires_auth` argument of the `@tool` decorator and access the OAuth token securely using the `get_auth_token_or_empty` method:

```python
@tool(requires_auth=ClickUp())
async def my_tool(context: Context) -> str:
  oauth_token = context.get_auth_token_or_empty()

  return "Do something interesting with the OAuth token"
```

#### User Info

Access information about the user that authorized the  using the `authorization.user_info` attribute. Note that this is only available if the tool’s  supports it (e.g., the LinkedIn auth provider provides the  ID):

```python
user_info = context.authorization.user_info
```

### Runtime Capabilities

#### Logging

[Logging in MCP](https://modelcontextprotocol.io/specification/2025-06-18/server/utilities/logging)  provides a standardized channel for servers to emit structured, leveled messages to clients. Logging is useful for observability, debugging, and user feedback during  execution.

You can send log messages at different levels using the `log` attribute of the `Context` object like this:

```python
await context.log.debug("Debug message")
await context.log.info("Information message")
await context.log.warning("Warning message")
await context.log.error("Error message")
await context.log.log("info", "Info message") # equivalent to await context.log.info("Info message")
```

#### Sampling

[Sampling in MCP](https://modelcontextprotocol.io/specification/2025-06-18/client/sampling)  is a way for servers to request LLM sampling (“completions” or “generations”) from language models via clients. This flow allows clients to maintain control over model access, selection, and permissions while enabling servers to leverage AI capabilities—with no server  necessary.

```python
await context.sampling.create_message(messages, system_prompt)
```

#### Elicitation

[Elicitation in MCP](https://modelcontextprotocol.io/specification/2025-06-18/client/elicitation)  is a way for servers to request additional information from users through the client during interactions. This flow allows clients to maintain control over  interactions and data sharing while enabling servers to gather necessary information dynamically.

```python
elicitation_schema = {"type": "object", "properties": {"nickname": {"type": "string"}}}

await context.ui.elicit("What is your nickname?", elicitation_schema)
```

#### Progress Reporting

[Progress reporting in MCP](https://modelcontextprotocol.io/specification/2025-06-18/basic/utilities/progress)  is a way for servers to report progress for long-running operations to clients.

```python
await context.progress.report(current, total, "Processing...")
```

## Example Code

The following is an example that shows how  can access runtime features through `Context`, including logging, secrets, and progress reporting.

### Environment Variables

```bash
API_KEY="your-secret-key"
DATABASE_URL="postgresql://localhost/mydb"
```

For the code to work, you must define your environment variables in a `.env` file at the same directory as your .

```python
# server.py
#!/usr/bin/env python3

import sys
from typing import Annotated

from arcade_mcp_server import Context, MCPApp

# Create the MCP application
app = MCPApp(
    name="context_example",
    version="1.0.0",
    instructions="Example server demonstrating Context usage",
)


@app.tool(requires_secrets=["API_KEY"])
async def secure_api_call(
    context: Context,
    endpoint: Annotated[str, "API endpoint to call"],
    method: Annotated[str, "HTTP method (GET, POST, etc.)"] = "GET",
) -> Annotated[str, "API response or error message"]:
    """Make a secure API call using secrets from context."""

    # Access secrets from environment via Context helper
    try:
        api_key = context.get_secret("API_KEY")
    except ValueError:
        await context.log.error("API_KEY not found in environment")
        return "Error: API_KEY not configured"

    # Log the API call
    await context.log.info(f"Making {method} request to {endpoint}")

    # Simulate API call (in real code, use httpx)
    return f"Successfully called {endpoint} with API key: {api_key[:4]}..."


# Don't forget to add the secret to the .env file or export it as an environment variable
@app.tool(requires_secrets=["DATABASE_URL"])
async def database_info(
    context: Context, table_name: Annotated[str | None, "Specific table to check"] = None
) -> Annotated[str, "Database connection info"]:
    """Get database connection information from context."""

    # Get database URL from secrets
    try:
        db_url = context.get_secret("DATABASE_URL")
    except ValueError:
        db_url = "Not configured"

    if table_name:
        return f"Database: {db_url}\nChecking table: {table_name}"

    return f"Database: {db_url}"

@app.tool
async def logging_tool(context: Context, message: Annotated[str, "The message to log"]) -> str:
    """Log a message at varying levels."""
    await context.log.log("debug", f"Debug via log.log: {message}")
    await context.log.debug(f"Debug via log.debug: {message}")
    await context.log.info(f"Info via log.info: {message}")
    await context.log.warning(f"Warning via log.warning: {message}")
    await context.log.error(f"Error via log.error: {message}")

    return "Logged!"

@app.tool
async def reporting_progress(context: Context) -> str:
    """Report progress back to the client"""
    total = 5

    for i in range(total):
        await context.progress.report(i + 1, total=total, message=f"Step {i + 1} of {total}")

    return "All progress reported successfully"

@app.tool
async def sampling(
    context: Context, text: Annotated[str, "The text to be summarized by the client's model"]
) -> str:
    """Summarize the text using the client's model."""
    result = await context.sampling.create_message(
        messages=text,
        system_prompt=(
            "You are a helpful assistant that summarizes text. "
            "Given a text, you should summarize it in a few sentences."
        ),
    )
    return result.text

@app.tool
async def elicit_nickname(context: Context) -> str:
    """Ask the end user for their nickname, and then use it to greet them."""
    elicitation_schema = {"type": "object", "properties": {"nickname": {"type": "string"}}}
    result = await context.ui.elicit(
        "What is your nickname?",
        schema=elicitation_schema,
    )

    if result.action == "accept":
        return f"Hello, {result.content['nickname']}!"
    elif result.action == "decline":
        return "User declined to provide a nickname."
    elif result.action == "cancel":
        return "User cancelled the elicitation."

    return "Unknown response from client"


if __name__ == "__main__":
    # Check if stdio transport was requested
    transport = sys.argv[1] if len(sys.argv) > 1 else "stdio"

    # Run the server
    app.run(transport=transport, host="127.0.0.1", port=8000)
```

### Run your MCP server

### stdio transport (default)

```bash
uv run server.py
```

### HTTP transport

```bash
uv run server.py http
```

For HTTP transport, view your server’s API docs at [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs) .

## Key Concepts

-   ** Parameter**  can receive a populated `Context` as their first parameter
-   **Async Functions** Use `async def` for tools that use runtime  features
-   **Secure Secrets** Secrets are accessed through , not hardcoded
-   **Structured Logging** Log at appropriate levels for debugging
-   **Progress Updates** Keep  informed during long operations

### Next Steps

-   [Build a custom tool that requires user authorization](/guides/create-tools/tool-basics/create-tool-auth.md)

-   [Build a custom tool with secrets](/guides/create-tools/tool-basics/create-tool-secrets.md)


Last updated on February 10, 2026

[Create a tool with secrets](/en/guides/create-tools/tool-basics/create-tool-secrets.md)
[Call tools from MCP clients](/en/guides/create-tools/tool-basics/call-tools-mcp.md)
