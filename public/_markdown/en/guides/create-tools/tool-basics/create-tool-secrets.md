---
title: "Create an MCP tool with secrets"
description: "Learn how to build custom MCP tools that require secrets using Arcade"
---
Create tools[Build a tool](/en/guides/create-tools/tool-basics.md)
Create a tool with secrets

# Create an MCP tool with secrets

## Outcomes

Build an  tool that can read a secret from  and return a masked confirmation string. Jump to [Example Code](#example-code) to see the complete code.

### You will Learn

-   How to read secrets from environment and `.env` files securely using a tool’s .
-   How to configure secrets in the Arcade Dashboard.

### Prerequisites

-   [Arcade account](https://app.arcade.dev/register)

-   [Arcade CLI](/get-started/quickstarts/call-tool-agent.md)

-   [An MCP Server](/guides/create-tools/tool-basics/build-mcp-server.md)

-   [uv package manager](https://docs.astral.sh/uv/getting-started/installation/)
     

Secrets are sensitive strings like passwords, , or other tokens that grant access to a protected resource or API. You can also use secrets to provide other static configuration values your  needs, such as parameters for calling a remote API.

## Why use secrets in your tools?

Secrets enable you to securely deploy a function that requires sensitive information at runtime. And while these can be consumed directly from the runtime environment inside your  function, this becomes very inconvenient, expensive, hard to maintain, and insecure when deploying at scale.

For example, if your tool requires an  to use an external service, but only _after_ doing some computationally expensive work, you need to ensure that the API key is present _before_ the computationally expensive work is done. The function below would fail if the API key is not present.

```python
import os

def my_tool(task: str) -> str:
    result = expensive_computation(task)

    API_KEY = os.getenv("API_KEY")

    # The line below will fail if the API key is not present
    success = upload_result_to_service(result, API_KEY)

    if success:
        return "Result uploaded successfully"
    else:
        return "Failed to upload result"
```

We can work around this by carefully checking for the  before doing the computationally expensive work, of course, but this is error prone and difficult to maintain, and you may only become aware of the issue after deploying multiple instances of your server.

Arcade provides a way to securely store and access secrets inside your tools in a way that is easy to manage across multiple instances of your servers, and that will prevent the  from running if the secret is not provided. In this guide, you’ll learn how to use secrets in your custom Arcade tools.

## Store your secret

Depending on where you’re running your server, you can store your secret in a few different ways.

### .env file

You can create a `.env` file in the same directory as your  (typically `server.py` by default) and add your secret:

```bash
# .env
MY_SECRET_KEY="my-secret-value"
```

The  includes a `.env.example` file with the secret key name and example value. You can rename it to `.env` to start using it.

```bash
mv .env.example .env
```

Using a `.env` file is okay for local development, but you should use the Arcade Dashboard or Arcade CLI for production deployments.

### Arcade Dashboard

You can store your secret in the Arcade Dashboard by:

-   Navigating to the “Secrets” section of the Arcade Dashboard
-   Clicking the “Add Secret” button
-   Entering the secret ID and value
-   Clicking the “Create” button

This will make the secret available to your  server, when deployed to Arcade.

The Arcade Dashboard will make the secret available to your  server when it is deployed. Secrets set in the Arcade Dashboard are not available to your  when it is running locally.

### Arcade CLI

You can set the secret in your terminal directly with this command:

```bash
arcade secret set MY_SECRET_KEY="my-secret-value"
```

The Arcade CLI will make the secret available to your  server when it is deployed, because it upserts the secret into the Arcade Cloud. Secrets set in the Arcade CLI are not available to your  when it is running locally.

### Environment Variable

You can set the environment variable in your terminal directly with this command:

```bash
export MY_SECRET_KEY="my-secret-value"
```

Using environment variables is okay for local development, but you should use the Arcade Dashboard or Arcade CLI for production deployments.

### Using secrets with stdio transport

When using the stdio transport,  clients typically launch the  as a subprocess. Because of this, the server may run in a different environment and not have access to secrets defined in your local `.env` file or your terminal environment variables.

To ensure your stdio  server has access to the secrets, you can either

1.  Utilize the [`arcade configure` CLI command](/references/arcade-cli.md) to configure your  client to pass the secrets to your , or

2.  Manually configure your  client to pass the secrets to your . For example, if you are using Cursor IDE, you can add the following to your `mcp.json` file:

    ```json
    {
      "mcpServers": {
        "simple": {
          "command": "uv",
          "args": [
            "run",
            "--directory",
            "/absoulute/path/to/your/entrypoint/file/parent/directory",
            "python",
            "server.py"
          ],
          "env": {
            "MY_SECRET_KEY": "my-secret-value"
          }
        }
      }
    }
    ```


This will make the secret available to your  server when the MCP client starts the subprocess. Note that the specific key name may vary depending on the MCP client you are using.

### Define your tool and access the secret

This is only an illustrative example of how Arcade will ensure that the secret is present before the tool is executed. In a real world application, you would use this secret to store sensitive information like , database credentials, etc, and not to simply print a confirmation string.

In your [MCP Server](/guides/create-tools/tool-basics/build-mcp-server.md), create a new  that uses the secret:

-   Use the `requires_secrets` parameter to declare which secrets your  needs (`"SECRET_KEY"` in this example).
-   The tool’s  object has a `get_secret` method that you can use to access the secret value.

```python
# secrets.py
@app.tool(
    requires_secrets=["SECRET_KEY"],  # declare we need SECRET_KEY
)
def use_secret(context: Context) -> str:
    """Read SECRET_KEY from context and return a masked confirmation string."""
    try:
        value = context.get_secret("SECRET_KEY")
        masked = value[:2] + "***" if len(value) >= 2 else "***"
        return f"Got SECRET_KEY of length {len(value)} -> {masked}"
    except ValueError as e:
        return f"Error getting secret: {e}"
```

When your  is executed, it will return: `"Got SECRET_KEY of length..."`. In a real world application, you would use this secret to connect to a remote database, API, etc.

**Security Best Practices**

-   **Never log secret values:** Always mask or truncate when displaying
-   **Declare requirements:** Use `requires_secrets` to document dependencies
-   **Handle missing secrets:** Use try/except when accessing secrets
-   **Use descriptive names:** Make it clear what each secret is for

## Key Concepts

-   **Secure Access:** Secrets are accessed through , not imported directly
-   **Environment Integration:** Works with both environment variables and .env files
-   **Error Handling:** Always handle the case where a secret might be missing
-   **Masking:** Never expose full secret values in logs or return values
-   **Declaration:** Use `requires_secrets` to make dependencies explicit

## Example Code

### Environment Variables

```bash
# .env
SECRET_KEY="supersecret"
```

For the code to work, you must define your environment variables locally or in a `.env` file.

```python
# secrets.py
#!/usr/bin/env python3
import sys

from arcade_mcp_server import Context, MCPApp

# Create the MCP application
app = MCPApp(
    name="secrets_example",
    version="1.0.0",
    instructions="Example server demonstrating secrets usage",
)


@app.tool(
    requires_secrets=["SECRET_KEY"],  # declare we need SECRET_KEY
)
def use_secret(context: Context) -> str:
    """Read SECRET_KEY from context and return a masked confirmation string."""
    try:
        value = context.get_secret("SECRET_KEY")
        masked = value[:2] + "***" if len(value) >= 2 else "***"
        return f"Got SECRET_KEY of length {len(value)} -> {masked}"
    except ValueError as e:
        return f"Error getting secret: {e}"


if __name__ == "__main__":
    # Get transport from command line argument, default to "stdio"
    transport = sys.argv[1] if len(sys.argv) > 1 else "stdio"

    # Run the server
    app.run(transport=transport, host="127.0.0.1", port=8000)
```

### Run your MCP server

### stdio transport (default)

```bash
uv run secrets.py stdio
```

### HTTP transport

```bash
uv run secrets.py http
```

For HTTP transport, view your server’s API docs at [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs) .

For security reasons, Local HTTP servers do not currently support tool-level authorization and secrets. If you need to use tool-level authorization or secrets locally, you should use the stdio transport and configure the Arcade API key and secrets in your  connection settings. Otherwise, if you intend to expose your HTTP  to the public internet with \-level authorization and secrets, please follow the [deploying to the cloud with Arcade Deploy](/guides/deployment-hosting/arcade-deploy.md) guide or the [on-prem MCP server](/guides/deployment-hosting/on-prem.md) guide for secure remote deployment.

Last updated on January 30, 2026

[Create a tool with auth](/en/guides/create-tools/tool-basics/create-tool-auth.md)
[Access runtime data](/en/guides/create-tools/tool-basics/runtime-data-access.md)
