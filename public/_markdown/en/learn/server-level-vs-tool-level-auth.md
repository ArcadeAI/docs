---
title: "Server-Level vs Tool-Level Authorization"
description: "Understanding the difference between Resource Server auth and tool-level authorization in Arcade MCP servers"
---
Server-Level vs Tool-Level Authorization

# Server-Level vs Tool-Level Authorization

Arcade  servers support two distinct layers of authorization that work together to provide comprehensive security. Understanding the difference is crucial for building secure, production-ready .

**Using `arcade deploy`?** If you deploy your  server with [`arcade deploy`](/guides/deployment-hosting/arcade-deploy.md), Arcade handles server-level security for you automatically.

## Quick Comparison

Aspect

[Resource Server Auth (Front-Door)](/guides/security/secure-your-mcp-server.md)

[Tool-Level Authorization](/guides/create-tools/tool-basics/create-tool-auth.md)

**What it secures**

Access to your MCP server

Access to third-party APIs

**Who authenticates**

The user calling your server

The user’s access to external services

**When it happens**

Every HTTP request to your server

When a tool calls an external API

**Token source**

Authorization Server (e.g., WorkOS, Auth0)

Arcade authorization platform

**Required for**

HTTP servers in production

Tools that access user data from APIs

**Configuration**

`MCPApp(auth=resource_server)`

`@app.tool(requires_auth=GitHub(...))`

## Resource Server Auth (Server-Level)

Resource Server auth (also called “front-door auth”) validates Bearer tokens on **every HTTP request** to your  server. The end user only needs to go through the OAuth flow once. Afterwards, the MCP client will send the token in the Authorization header for every request to your . Your MCP server acts as an OAuth 2.1 Protected Resource.

Resource Server auth ensures every request identifies the caller. It blocks unauthenticated requests at the door, so only users with valid tokens can access your  server. This security lets you run  that require authorization or secrets over HTTP.

### When You Need It

✅ **You need Resource Server auth if:**

-   You’ve determined that [arcade deploy](/guides/deployment-hosting/arcade-deploy.md)
     is not a good fit for your use case
-   You’re running an HTTP  server in production
-   Your server has  that require authorization or secrets
-   You need to identify which  is calling your server
-   You want to control who can access your  server

❌ **You don’t need it if:**

-   You’re using [arcade deploy](/guides/deployment-hosting/arcade-deploy.md)
     to secure your server
-   You’re using stdio transport
-   Your server only has public  (no auth/secrets required)
-   You’re doing local development only

### Example

```python
# server.py
from arcade_mcp_server import MCPApp
from arcade_mcp_server.resource_server import ResourceServerAuth, AuthorizationServerEntry

# Configure who can access your MCP server
resource_server_auth = ResourceServerAuth(
    canonical_url="http://127.0.0.1:8000/mcp",
    authorization_servers=[
        AuthorizationServerEntry(
            authorization_server_url="https://auth.example.com",
            issuer="https://auth.example.com",
            jwks_uri="https://auth.example.com/jwks",
        )
    ],
)

app = MCPApp(name="my_server", version="1.0.0", auth=resource_server_auth)
```

**Result**: Only  with valid tokens from `https://auth.example.com` can call ANY  on your server.

## Tool-Level Authorization

\-level authorization enables individual tools to access third-party APIs on behalf of the authenticated . Arcade manages the OAuth flow and token storage.

Tool-level authorization lets your tools authenticate to external APIs using OAuth tokens for services like Gmail or GitHub. Each tool acts on behalf of the user by using their connected , and requests only the scopes it needs. Arcade manages the entire OAuth flow, including token refresh and secure storage, so you don’t have to handle these details yourself.

### When You Need It

✅ **You need \-level auth if:**

-   Your  calls external APIs (Gmail, GitHub, Slack, etc.) that require \-specific OAuth tokens
-   You want to access  data from third-party services
-   The  needs to act on behalf of the

❌ **You don’t need it if:**

-   Your  doesn’t call external APIs
-   The API uses  instead of OAuth
-   The  accesses public data only

### Example

```json
# server.py
from typing import Annotated

from arcade_mcp_server import Context, MCPApp
from arcade_mcp_server.auth import GitHub
import httpx

app = MCPApp(name="my_server", version="1.0.0")

# This tool requires GitHub auth
@app.tool(requires_auth=GitHub(scopes=["repo", "read:user"]))
async def create_github_issue(
    context: Context,
    repo: Annotated[str, "The repository to create the issue in"],
    title: Annotated[str, "The title of the issue"],
    body: Annotated[str, "The body of the issue"],
) -> Annotated[dict, "The created issue"]:
    """Create a GitHub issue"""
    # Arcade provides the OAuth token for this user in the context
    token = context.get_auth_token_or_empty()

    headers = {"Authorization": f"Bearer {token}"}
    url = f"https://api.github.com/repos/{repo}/issues"

    async with httpx.AsyncClient() as client:
        response = await client.post(
            url,
            headers=headers,
            json={"title": title, "body": body}
        )
        return response.json()

if __name__ == "__main__":
    app.run(transport="stdio")
```

**stdio transport doesn’t need Resource Server auth** because the connection is local and doesn’t go over the network.

## How They Work Together

The two authorization layers complement each other. Below is an example of a protected HTTP server with both server-level and \-level authorization.

```json
# server.py
from typing import Annotated

import httpx
from arcade_mcp_server import Context, MCPApp
from arcade_mcp_server.auth import GitHub
from arcade_mcp_server.resource_server import AuthorizationServerEntry, ResourceServerAuth

# Configure who can access your MCP server
resource_server_auth = ResourceServerAuth(
    canonical_url="http://127.0.0.1:8000/mcp",
    authorization_servers=[
        AuthorizationServerEntry(
            authorization_server_url="https://auth.example.com",
            issuer="https://auth.example.com",
            jwks_uri="https://auth.example.com/jwks",
        )
    ],
)

app = MCPApp(name="my_server", version="1.0.0", auth=resource_server_auth)


# This tool requires GitHub auth
@app.tool(requires_auth=GitHub(scopes=["repo", "read:user"]))
async def create_github_issue(
    context: Context,
    repo: Annotated[str, "The repository to create the issue in"],
    title: Annotated[str, "The title of the issue"],
    body: Annotated[str, "The body of the issue"],
) -> Annotated[dict, "The created issue"]:
    """Create a GitHub issue"""
    # Arcade provides the OAuth token for this user in the context
    token = context.get_auth_token_or_empty()

    headers = {"Authorization": f"Bearer {token}"}
    url = f"https://api.github.com/repos/{repo}/issues"

    async with httpx.AsyncClient() as client:
        response = await client.post(
          url,
          headers=headers,
          json={"title": title, "body": body},
        )
        return response.json()


if __name__ == "__main__":
    app.run(transport="http")

```

**Flow:**

1.   client sends request with Bearer token to `http://127.0.0.1:8000/mcp`
2.  Resource Server middleware validates token → extracts `user_id` from `sub` claim
3.   processes tool call with authenticated user
4.   requests GitHub token from Arcade for this `user_id`
5.   uses GitHub token to call GitHub API
6.  Response returns to  client

## Common Questions

### Q: Can I use tool-level auth without Resource Server auth?

**A:** Yes, but only for stdio transport or when using [arcade deploy](/guides/deployment-hosting/arcade-deploy.md) (Arcade will protect your  server for you).

### Q: Do I need Resource Server auth for local development?

**A:** No, you can use stdio transport for local development. Resource Server auth is primarily for production HTTP servers.

### Q: Does Resource Server auth replace tool-level auth?

**A:** No, they serve different purposes. Resource Server auth secures _your server_, \-level auth secures _external APIs_.

### Q: Can I have different authorization servers for different tools in the same server?

**A:** No. Resource Server auth applies to the entire server. However, you can accept tokens from multiple authorization servers (multi-IdP).

## Key Takeaways

-   **Resource Server auth secures your  server** - Controls who can call your
-   **\-level auth secures external APIs** - Controls what your tools can access
-   **They work together** - Resource Server provides user identity, \-level provides API access
-   **HTTP requires Resource Server auth** - For  with auth/secrets in production
-   **stdio doesn’t need Resource Server auth** - Local connections are already secure
-   **Choose based on transport and requirements** - Different scenarios need different combinations

Last updated on February 12, 2026

[Security research program](/en/guides/security/security-research-program.md)
[Overview](/en/references.md)
