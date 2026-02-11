---
title: "Provide Useful Tool Errors"
description: "Learn how to provide good errors when building tools with Arcade MCP"
---
[Create tools](/en/guides/create-tools/tool-basics.md)
[Handle errors](/en/guides/create-tools/error-handling.md)
Provide Useful Tool Errors

# Providing useful tool errors

When building tools with Arcade , understanding error handling is crucial for creating robust and reliable tools. This guide covers everything you need to know about handling errors from a  developer’s perspective.

## Error handling philosophy

Arcade’s error handling is designed to minimize boilerplate code while providing rich error information. In most cases, you don’t need to explicitly handle errors in your  because the `@tool` decorator automatically adapts common exceptions into appropriate Arcade errors.

## Error hierarchy

Arcade uses a structured error hierarchy to categorize different types of errors.

```python

ToolkitError                                  # (Abstract base class)
├── ToolkitLoadError                          # Occurs during MCP Server import
└── ToolError                                 # (Abstract)
    ├── ToolDefinitionError                    # Detected when tool is added to catalog
    │   ├── ToolInputSchemaError              # Invalid input parameter types/annotations
    │   └── ToolOutputSchemaError             # Invalid return type annotations
    └── ToolRuntimeError                      # Errors during tool execution
        ├── ToolSerializationError            # (Abstract)
        │   ├── ToolInputError                # JSON to Python conversion fails
        │   └── ToolOutputError               # Python to JSON conversion fails
        └── ToolExecutionError                # Errors during tool execution
            ├── RetryableToolError            # Tool can be retried with extra context
            ├── ContextRequiredToolError      # Additional context needed before retry
            ├── FatalToolError                # Unhandled bugs in the tool implementation
            └── UpstreamError                 # HTTP/API errors from external services
                └── UpstreamRateLimitError    # Rate limiting errors from service

```

## Error adapters

Error adapters automatically translate common exceptions (from `httpx`, `requests`, SDKs, etc.) into appropriate Arcade errors. This means zero boilerplate error handling code for you. To see which SDKs already have error adapters, see [arcade\_tdk/error\_adapters/**init**.py](https://github.com/ArcadeAI/arcade-ai/blob/main/libs/arcade-tdk/arcade_tdk/error_adapters/__init__.py). You may want to create your own error adapter or contribute an error adapter to the TDK. If so, see the [HTTP Error Adapter](https://github.com/ArcadeAI/arcade-ai/blob/main/libs/arcade-tdk/arcade_tdk/providers/http/error_adapter.py)  for an example. Ensure your error adapter implements the [ErrorAdapter protocol](https://github.com/ArcadeAI/arcade-ai/blob/main/libs/arcade-tdk/arcade_tdk/error_adapters/base.py) .

### Automatic error adaptation

For  using `httpx` or `requests`, error adaptation happens automatically:

```python
from typing import Annotated
from arcade_mcp_server import tool
import httpx

@tool
def fetch_data(
  url: Annotated[str, "The URL to fetch data from"],
) -> Annotated[dict, "The data fetched from the API endpoint"]:
    """Fetch data from an API endpoint."""
    # No need to wrap in try/catch - Arcade handles HTTP errors automatically
    response = httpx.get(url)
    response.raise_for_status()  # This will be adapted to UpstreamError if it raises
    return response.json()
```

### Explicit error adapters

For  using specific SDKs, you can specify error adapters explicitly:

```python
import googleapiclient
from typing import Annotated
from arcade_mcp_server import tool
from arcade_tdk.error_adapters import GoogleErrorAdapter

@tool(
  requires_auth=Google(scopes=["https://www.googleapis.com/auth/gmail.readonly"]),
  error_adapters=[GoogleErrorAdapter] # note the tool opts-into the error adapter
)
def send_email(
  num_emails: Annotated[int, "The number of emails to send"],
) -> Annotated[dict, "The emails sent using the Gmail API"]:
    """Send an email using the Gmail API."""
    # Google API Client errors will be automatically adapted to Upstream Arcade errors for you
    service = _build_gmail_service(context)
    emails = service.users.messages().get(
      userId="me",
      id=num_emails
    ).execute() # This will be adapted to UpstreamError if it raises
    parsed_emails = _parse_emails(emails)
    return parsed_emails
```

## When to raise errors explicitly

While Arcade handles most errors automatically, there are specific cases where you should raise errors explicitly:

### RetryableToolError

Use when the LLM can retry the tool call with more  to improve the  call’s input parameters:

```python
from typing import Annotated
from arcade_mcp_server import tool
from arcade_tdk.errors import RetryableToolError

@tool(requires_auth=Reddit(scopes=["read"]))
def search_posts(
  subreddit: Annotated[str, "The subreddit to search in"],
  query: Annotated[str, "The query to search for"],
) -> Annotated[list[dict], "The posts found in the subreddit"]:
    """Search for posts in a subreddit."""
    if is_invalid_subreddit(subreddit):
        # additional_prompt_content should be provided back to the LLM
        raise RetryableToolError(
            "Please specify a subreddit name, such as 'python' or 'programming'",
            additional_prompt_content=f"{subreddit} is an invalid subreddit name. Please specify a valid subreddit name"
        )
    # ... rest of implementation
```

Learn more about [RetryableToolError](/guides/create-tools/error-handling/retry-tools.md).

### ContextRequiredToolError

Use when additional  from the user or orchestrator is needed before the  call can be retried by an LLM:

```python
from os import path
from typing import Annotated
from arcade_mcp_server import tool
from arcade_tdk.errors import ContextRequiredToolError

@tool
def delete_file(filename: Annotated[str, "The filename to delete"]) -> Annotated[str, "The filename that was deleted"]:
    """Delete a file from the system."""
    if not os.path.exists(filename):
        raise ContextRequiredToolError(
            "File with provided filename does not exist",
            additional_prompt_content=f"{filename} does not exist. Did you mean one of these: {get_valid_filenames()}",
        )
    # ... deletion logic
```

### ToolExecutionError

Use for unrecoverable, but known, errors when you want to provide specific error :

```python
from typing import Annotated
from arcade_mcp_server import tool
from arcade_tdk.errors import ToolExecutionError

@tool
def process_data(data_id: Annotated[str, "The ID of the data to process"]) -> Annotated[dict, "The processed data"]:
    """Process data by ID."""
    try:
        data = get_data_from_database(data_id)
    except Exception as e:
        raise ToolExecutionError("Database connection failed.") from e
    # ... processing logic
```

### UpstreamError

Use for custom handling of upstream service errors:

```json
from arcade_mcp_server import tool
from arcade_tdk.errors import UpstreamError
import httpx

@tool
def create_issue(title: str, description: str) -> dict:
    """Create a GitHub issue."""
    try:
        response = httpx.post("/repos/owner/repo/issues", json={
            "title": title,
            "body": description
        })
        response.raise_for_status()
    except httpx.HTTPStatusError as e:
        if e.response.status_code == 422:
            raise UpstreamError(
                "Invalid issue data provided. Check title and description.",
                status_code=422
            ) from e
        # Let other HTTP errors be handled automatically
        raise

    return response.json()
```

## Common error scenarios

### Tool definition errors

These errors occur when your  has invalid definitions and are caught when the tool is loaded:

#### Invalid input parameter types

```python
from arcade_mcp_server import tool

@tool
def invalid_tool(data: tuple[str, str, str]) -> str:  # ❌ Tuples not supported
    """This will raise a ToolInputSchemaError."""
    return f"Hello {data[0]}"
```

#### Missing return type annotation

```python
from arcade_mcp_server import tool

@tool
def invalid_tool(name: str):  # ❌ Missing return type
    """This will raise a ToolOutputSchemaError."""
    return f"Hello {name}"
```

#### Invalid parameter annotations

```python
from typing import Annotated
from arcade_mcp_server import tool

@tool
def invalid_tool(name: Annotated[str, "desc1", "desc2", "extra"]) -> str:  # ❌ Too many annotations
    """This will raise a ToolInputSchemaError."""
    return f"Hello {name}"
```

### Runtime errors

These errors occur during  execution:

#### Output type mismatch

```python
from typing import Annotated
from arcade_mcp_server import tool

@tool
def invalid_output(name: Annotated[str, "Name to greet"]) -> str:
    """Says hello to a friend."""
    return ["hello", name]  # ❌ Returns list instead of string
```

This will raise a `ToolOutputError` because the return type doesn’t match the annotation.

## Handling tool errors in agents

To learn more about how to handle tool errors in your , see the [Use Tools](/guides/tool-calling/error-handling.md) section.

Last updated on February 11, 2026

[Retry Tools with Improved Prompt](/en/guides/create-tools/error-handling/retry-tools.md)
[Migrate from toolkits to MCP servers](/en/guides/create-tools/migrate-toolkits.md)
