---
title: "Organize your MCP server and tools"
description: "Learn best practices for organizing your MCP server and tools, how to import tools from other packages and how to use them together."
---
Create tools[Build a tool](/en/guides/create-tools/tool-basics.md)
Organize your MCP server and tools

# Organize your MCP server and tools

## Outcomes

Learn best practices for organizing your  server and , how to import tools from other packages and how to use them together. Jump to [Example Code](#example-code) to see the complete code.

### You will Learn

-   How to define  in separate files and import them
-   How to import  from other Arcade packages
-   How to use `@app.tool` decorators and imported  together

### Prerequisites

-   [Arcade account](https://api.arcade.dev/dashboard/register)

-   [An MCP Server](/guides/create-tools/tool-basics/build-mcp-server.md)

-   [uv package manager](https://docs.astral.sh/uv/getting-started/installation/)
     

## Project Structure

We recommend keeping your  server file and  in separate files in a `tools` directory like so:

```bash
    my_server/
    ├── src/
    │   └── my_server/
    │       ├── .env
    │       ├── server.py          # Entrypoint file with your MCPApp
    │       ├── tools/
    │       │   ├── __init__.py
    │       │   ├── math_tools.py  # @tool decorated functions
    │       │   └── text_tools.py  # @tool decorated functions
    │       ├── pyproject.toml
    │       └── README.md
    └── pyproject.toml
```

## Defining tools

You can use the `@app.tool` decorator to define your tools in your  server file directly on the  app object (`MCPApp`) like this:

```python
# server.py
@app.tool
def server_info() -> Annotated[dict, "Information about this server"]:
    """Return information about this MCP server."""
    return {
        "name": "Organized Server",
        "version": "1.0.0",
        "description": "Demonstrates modular tool organization",
        "total_tools": 6,  # 4 imported + 2 defined here
    }
```

However, if you need to define more than a few tools, this can make your  server file longer and harder to read and maintain. Instead, you can define your  in separate files and import them.

## Importing tools

You can import  from separate files like this:

```python
# server.py
from tools.math_tools import add, multiply
from tools.text_tools import capitalize_string, word_count
```

You could also import specific  from Arcade PyPI packages:

```python
# server.py
# This is a prebuilt Arcade server - `pip install arcade-gmail`
from arcade_gmail.tools import list_emails
```

You can also import whole modules that contain  like this:

```python
# server.py
# This is a prebuilt Arcade server - `pip install arcade-reddit`
import arcade_reddit
```

Add imported  explicitly to the `MCPApp` instance like this:

```python
# server.py
app.add_tool(add)
app.add_tool(list_emails)
app.add_tools_from_module(arcade_reddit)
```

## Key takeaways

-   Keep your  server file clean and readable by defining  in separate files
-   Store your  in a `tools` directory in your project alongside your  server file
-   You can import  from other Arcade packages and your own files
-   Add imported tools explicitly to the  server app object

## Example Code

```python
# server.py
#!/usr/bin/env python3

import sys
from typing import Annotated

from arcade_mcp_server import MCPApp

# Import tools from our mock 'tools' directory
# In a real project, these could come from actual separate files
from tools.math_tools import add, multiply
from tools.text_tools import capitalize_string, word_count

# In a real project, you could import from Arcade PyPI packages -
# e.g. `pip install arcade-gmail`
# import arcade_gmail

# Create the MCP application
app = MCPApp(
    name="organized_server",
    version="1.0.0",
    instructions="Example server demonstrating modular tool organization",
)

# Method 1: Add imported tools explicitly
app.add_tool(add)
app.add_tool(multiply)
app.add_tool(capitalize_string)
app.add_tool(word_count)
# app.add_tools_from_module(arcade_gmail)


# Method 2: Define tools directly on the app
@app.tool
def server_info() -> Annotated[dict, "Information about this server"]:
    """Return information about this MCP server."""
    return {
        "name": "Organized Server",
        "version": "1.0.0",
        "description": "Demonstrates modular tool organization",
        "total_tools": 6,  # 4 imported + 2 defined here
    }


@app.tool
def combine_results(
    text: Annotated[str, "Text to process"],
    add_num: Annotated[int, "Number to add"],
    multiply_num: Annotated[int, "Number to multiply"],
) -> Annotated[dict, "Combined results from multiple tools"]:
    """Demonstrate using multiple tools together."""
    return {
        "original_text": text,
        "capitalized": capitalize_string(text),
        "word_count": word_count(text),
        "math_result": multiply(add(5, add_num), multiply_num),
    }


if __name__ == "__main__":
    # Check if stdio transport was requested
    transport = sys.argv[1] if len(sys.argv) > 1 else "stdio"

    print(f"Starting {app.name} v{app.version}")
    print(f"Transport: {transport}")
    print("Setting up database...")
    # simulate a database setup
    print("Database setup complete")

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

Last updated on February 7, 2026

[Call tools from MCP clients](/en/guides/create-tools/tool-basics/call-tools-mcp.md)
[Overview](/en/guides/create-tools/evaluate-tools.md)
