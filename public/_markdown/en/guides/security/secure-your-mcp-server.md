---
title: "Adding Resource Server Auth"
description: "Secure your HTTP MCP server with OAuth 2.1 Resource Server auth"
---
[Security & Compliance](/en/guides/security.md)
Secure your MCP server

# Adding Resource Server Auth to Your MCP Server

You’ve built an  server with  that require authorization or secrets. Now you want to deploy it over HTTP so others can use it. But how do you secure it so only authorized  can access your tools?

**Want Arcade to handle this for you?** Use [`arcade deploy`](/guides/deployment-hosting/arcade-deploy.md) to deploy your  server to Arcade. We’ll secure it automatically with no OAuth configuration on your end required. This guide is for self-hosted deployments where you manage your own authorization server.

Resource Server auth enables your HTTP  server to act as an OAuth 2.1 Protected Resource (compliant with [MCP’s specification for Authorization](https://modelcontextprotocol.io/specification/2025-06-18/basic/authorization) ), validating Bearer tokens on every request. This unlocks support for tool-level authorization and secrets on HTTP servers, allowing you to host secure  anywhere (local, on-premise, or third-party hosted).

## Outcomes

Add [MCP compliant OAuth 2.1 front-door authentication](https://modelcontextprotocol.io/specification/2025-06-18/basic/authorization)  to your HTTP  server to enable \-level authorization and secrets.

### You will Learn

-   What Resource Server auth is and why it’s needed
-   How to configure your  server to validate OAuth tokens
-   How to support multiple authorization servers
-   How to use environment variables for production deployments

### Prerequisites

-   An existing  server created with `arcade new` (see [Create an MCP Server](/guides/create-tools/tool-basics/build-mcp-server.md)
    )
-   Understanding of [MCP Authorization](https://modelcontextprotocol.io/specification/2025-06-18/basic/authorization)
     
-   An OAuth 2.1 compliant authorization server (e.g., WorkOS AuthKit, Auth0, Descope, etc.)
-   Authorization server’s JWKS endpoint URL

## Understanding Resource Server Auth

### What is it?

Resource Server auth turns your  server into an [OAuth 2.1 Protected Resource](https://www.ietf.org/archive/id/draft-ietf-oauth-v2-1-13.html#name-roles)  that validates Bearer tokens on every HTTP request. Your  trusts one or more [Authorization Servers](https://www.ietf.org/archive/id/draft-ietf-oauth-v2-1-13.html#name-roles)  to issue valid tokens for accessing your MCP server.

### Why is it needed?

By default, HTTP  servers cannot use  that require authorization or secrets for security reasons.

Resource Server auth solves this by:

1.  **Authenticating every request** - Validates the Bearer token before processing any  messages
2.  **Extracting  identity** - The token’s `sub` claim becomes the `context.user_id` for  execution
3.  **Enabling secure ** - Tools requiring authorization or secrets can now safely execute over HTTP, but tools with tool-level auth will still require authenticating to the downstream service
4.  **Supporting OAuth discovery** -  clients can automatically discover your authentication requirements

**Resource Server auth vs \-level auth**: Resource Server auth secures _access to your  server_, while tool-level authorization secures _access to third-party APIs that your tools use_. They work together: Resource Server auth identifies _who_ is calling your server, and tool-level auth enables tools to act _on behalf of that _.

## Choose Your Configuration Approach

The `arcade_mcp_server.resource_server` module provides two validators:

### ResourceServerAuth (Recommended)

**`ResourceServerAuth`** - Full-featured OAuth 2.1 Resource Server with:

-   Support for multiple authorization servers (multi-IdP, regional endpoints)
-   OAuth discovery metadata endpoint
-   Environment variable configuration
-   Best for production deployments

### JWKSTokenValidator (Simple)

**`JWKSTokenValidator`** - Direct JWKS-based validation with:

-   Simple setup for single authorization server
-   No OAuth discovery endpoint
-   Requires explicit configuration
-   Best for development or simple use cases

## Configure Your Authorization Server

First, gather these details from your authorization server:

-   **Authorization Server URL** - The base URL of your authorization server (e.g., `https://your-app.authkit.app`)
-   **Issuer** - The expected `iss` claim in tokens (usually same as authorization server URL)
-   **JWKS URI** - Where to fetch public keys for token verification (e.g., `https://your-app.authkit.app/oauth2/jwks`)
-   **Canonical URL** - Your  server’s public URL (e.g., `http://127.0.0.1:8000/mcp` if running locally)

By default, your  server expects the **Canonical URL** to match the `aud` (audience) claim in tokens. If your authorization server uses a different audience, you can override this with the `expected_audiences` parameter on `AuthorizationServerEntry`.

## Add Authentication to Your Server

Update your `server.py` to add the `auth` parameter to `MCPApp`:

### ResourceServerAuth

```python
# server.py
#!/usr/bin/env python3
"""my_server MCP server"""

from arcade_mcp_server import MCPApp
from arcade_mcp_server.resource_server import (
    AccessTokenValidationOptions,
    AuthorizationServerEntry,
    ResourceServerAuth,
)

# Setup your resource server that trusts a single Authkit authorization server
resource_server_auth = ResourceServerAuth(
    canonical_url="http://127.0.0.1:8000/mcp",
    authorization_servers=[
        AuthorizationServerEntry(
            authorization_server_url="https://your-workos.authkit.app",
            issuer="https://your-workos.authkit.app",
            jwks_uri="https://your-workos.authkit.app/oauth2/jwks",
            algorithm="RS256",
            # Authkit doesn't set the aud claim as the MCP server's canonical URL by default
            expected_audiences=["your-authkit-client-id"],
        )
    ],
)

# Pass the resource_server_auth to MCPApp
app = MCPApp(
    name="my_server",
    version="1.0.0",
    auth=resource_server_auth  # Enable Resource Server auth
)

# Your tools here...
@app.tool
def greet(name: Annotated[str, "The name of the person to greet"]) -> str:
    """Greet a person by name."""
    return f"Hello, {name}!"

if __name__ == "__main__":
    app.run(transport="http", host="127.0.0.1", port=8000)
```

### Multiple Auth Servers

```python
# server.py
#!/usr/bin/env python3
"""my_server MCP server"""

from arcade_mcp_server import MCPApp
from arcade_mcp_server.resource_server import (
    ResourceServerAuth,
    AuthorizationServerEntry,
)

# Support multiple authorization servers (multi-IdP)
resource_server_auth = ResourceServerAuth(
    canonical_url="http://127.0.0.1:8000/mcp",
    authorization_servers=[
        AuthorizationServerEntry(
            authorization_server_url="https://your-workos.authkit.app",
            issuer="https://your-workos.authkit.app",
            jwks_uri="https://your-workos.authkit.app/oauth2/jwks",
            # Authkit doesn't set the aud claim as the MCP server's canonical URL
            expected_audiences=["your-authkit-client-id"],
        ),
        AuthorizationServerEntry(  # Keycloak example configuration
            authorization_server_url="http://localhost:8080/realms/mcp-test",
            issuer="http://localhost:8080/realms/mcp-test",
            jwks_uri="http://localhost:8080/realms/mcp-test/protocol/openid-connect/certs",
            algorithm="RS256",
            expected_audiences=["your-keycloak-client-id"],
        )
    ],
)

app = MCPApp(name="my_server", version="1.0.0", auth=resource_server_auth)
```

Multiple authorization servers enable scenarios like:

-   **Multi-IdP**: Accept tokens from WorkOS _and_ GitHub
-   **Regional endpoints**: Multiple authorization server URLs with shared keys
-   **Migration**: Smoothly transition between authorization servers

### Environment Variables

```python
# server.py
#!/usr/bin/env python3
"""my_server MCP server"""

from arcade_mcp_server import MCPApp
from arcade_mcp_server.resource_server import ResourceServerAuth

# Configuration loaded from environment variables
# No parameters needed!
resource_server_auth = ResourceServerAuth()

app = MCPApp(name="my_server", version="1.0.0", auth=resource_server_auth)
```

Create a `.env` file:

```bash
# .env
MCP_SERVER_AUTH_CANONICAL_URL=http://127.0.0.1:8000/mcp
MCP_SERVER_AUTH_AUTHORIZATION_SERVERS='[
  {
    "authorization_server_url": "https://your-workos.authkit.app",
    "issuer": "https://your-workos.authkit.app",
    "jwks_uri": "https://your-workos.authkit.app/oauth2/jwks",
    "algorithm": "RS256",
    "expected_audiences": ["my-client-id"]
  }
]'
```

Environment variable configuration is **recommended for production** as it separates auth configuration from your code and allows deployment-time configuration. Note that **explicit parameters take precedence over environment variables**, allowing you to override specific settings when needed.

### JWKSTokenValidator

```python
# server.py
#!/usr/bin/env python3
"""my_server MCP server"""

from arcade_mcp_server import MCPApp
from arcade_mcp_server.resource_server import JWKSTokenValidator

# Configure JWKS token validation
validator = JWKSTokenValidator(
    jwks_uri="https://your-workos.authkit.app/oauth2/jwks",
    issuer="https://your-workos.authkit.app",
    audience="http://127.0.0.1:8000/mcp",
)

app = MCPApp(
    name="my_server",
    version="1.0.0",
    auth=validator
)

# Your tools here...
```

## Run Your Authenticated Server

Start your server with HTTP transport:

```bash
uv run server.py
```

Your server now requires valid Bearer tokens for all requests. You should see output like:

```bash
INFO     | 14:23:45 | Starting my_server v1.0.0 with 3 tools
INFO     | 14:23:45 | Resource Server auth enabled: True
INFO     | 14:23:45 | Accepted authorization server(s): https://your-app.authkit.app
```

## OAuth Discovery

Now that your server is protected, you can see that your server exposes an OAuth discovery endpoint at `http://127.0.0.1:8000/mcp/.well-known/oauth-protected-resource`. This endpoint is used by  clients to discover the authorization servers that are trusted by your server.

```bash
curl http://127.0.0.1:8000/.well-known/oauth-protected-resource
```

You should see a response like:

HTTP

```
{
  "resource":"http://127.0.0.1:8000/mcp",
  "authorization_servers":["https://your-workos.authkit.app"]
}
```

 clients can use this endpoint to automatically discover which authorization servers issue valid tokens for your server.

## Verify Your Server is Protected

Try calling your server without a token:

```bash
curl -i http://127.0.0.1:8000/mcp/
```

You should receive a 401 response with `WWW-Authenticate` header:

HTTP

```
HTTP/1.1 401 Unauthorized
date: Tue, 02 Dec 2025 01:00:54 GMT
server: uvicorn
www-authenticate: Bearer, resource_metadata="http://127.0.0.1:8000/mcp/.well-known/oauth-protected-resource"
access-control-allow-origin: *
access-control-allow-methods: GET, POST, DELETE
access-control-allow-headers: Content-Type, Authorization, Mcp-Session-Id
access-control-expose-headers: WWW-Authenticate, Mcp-Session-Id
content-length: 12

Unauthorized
```

### Test Your Server with a Valid Token

The easiest way to test your secure server by using the [MCP Inspector](https://modelcontextprotocol.io/docs/tools/inspector)  as your client & connecting to your server from it.

## Advanced Configuration

### Custom Token Validation Options

Disable specific validations when needed:

```python
from arcade_mcp_server.resource_server import (
    ResourceServerAuth,
    AuthorizationServerEntry,
    AccessTokenValidationOptions,
)

resource_server_auth = ResourceServerAuth(
    canonical_url="http://127.0.0.1:8000/mcp",
    authorization_servers=[
        AuthorizationServerEntry(
            authorization_server_url="https://your-app.authkit.app",
            issuer="https://your-app.authkit.app",
            jwks_uri="https://your-app.authkit.app/oauth2/jwks",
            expected_audiences=["my-client-id"],
            validation_options=AccessTokenValidationOptions(
                verify_exp=True,   # Still verify expiration (default)
                verify_iat=True,   # Still verify issued-at (default)
                verify_iss=True,   # Still verify issuer (default)
            ),
        )
    ],
)
```

**Security Note**: Token signature verification is always enabled and cannot be disabled. Additionally, the `sub` claim must always be present. Only disable other validations if your authorization server doesn’t comply with  and you accept the risk of not validating all claims in the token.

### Custom Expected Audiences

By default, your  server expects the token’s `aud` claim to match the `canonical_url`. If your authorization server uses a different audience value (like a client ID), override it with `expected_audiences`:

```python
AuthorizationServerEntry(
    authorization_server_url="https://your-app.authkit.app",
    issuer="https://your-app.authkit.app",
    jwks_uri="https://your-app.authkit.app/oauth2/jwks",
    expected_audiences=["my-client-id"],  # Override audience validation
)
```

You can also accept multiple audiences:

```python
AuthorizationServerEntry(
    authorization_server_url="https://auth.example.com",
    issuer="https://auth.example.com",
    jwks_uri="https://auth.example.com/jwks",
    expected_audiences=["client-id-1", "client-id-2"],  # Accept tokens for either audience
)
```

### Different JWT Algorithms

```python
AuthorizationServerEntry(
    authorization_server_url="https://auth.example.com",
    issuer="https://auth.example.com",
    jwks_uri="https://auth.example.com/jwks",
    algorithm="ES256",  # Use ECDSA instead of RSA
)
```

Supported algorithms: `RS256`, `RS384`, `RS512`, `ES256`, `ES384`, `ES512`, `PS256`, `PS384`, `PS512`

### Regional Authorization Servers with Shared Keys

```python
resource_server_auth = ResourceServerAuth(
    canonical_url="https://mcp.example.com",
    authorization_servers=[
        AuthorizationServerEntry(
            authorization_server_url="https://auth-us.example.com",
            issuer="https://auth.example.com",  # Same issuer
            jwks_uri="https://auth.example.com/jwks",  # Shared JWKS
        ),
        AuthorizationServerEntry(
            authorization_server_url="https://auth-eu.example.com",
            issuer="https://auth.example.com",  # Same issuer
            jwks_uri="https://auth.example.com/jwks",  # Shared JWKS
        ),
    ],
)
```

## How It Works

1.  **Client makes request** with `Authorization: Bearer <token>` header
2.  **Middleware intercepts** every HTTP request before  processing
3.  **Token validation** occurs:
    -   Fetches JWKS from authorization server
    -   Verifies token signature
    -   Checks expiration, issuer, and audience
    -   Extracts `sub` claim as  ID
4.  **Resource owner stored** in request
5.  ** processing continues** with authenticated
6.  ** execute** with `context.user_id` set from token’s `sub` claim

### Security Features

-   ✅ **No token caching** - Every request validates the token fresh (per  spec)
-   ✅ **JWKS caching** - Public keys cached for performance (default 1 hour)
-   ✅ **Algorithm enforcement** - Prevents algorithm confusion attacks
-   ✅ **Signature verification** - Always enabled, cannot be disabled
-   ✅ **RFC 6750 compliant** - Standard OAuth 2.0 Bearer token usage
-   ✅ **RFC 9728 compliant** - OAuth 2.0 Protected Resource Metadata

## Common Authorization Server Configurations

### WorkOS AuthKit

```python
AuthorizationServerEntry(
    authorization_server_url="https://your-app.authkit.app",
    issuer="https://your-app.authkit.app",
    jwks_uri="https://your-app.authkit.app/oauth2/jwks",
    expected_audiences=["my-client-id"],
)
```

### Keycloak

```python
AuthorizationServerEntry(
    authorization_server_url="http://localhost:8080/realms/mcp-test",
    issuer="http://localhost:8080/realms/mcp-test",
    jwks_uri="http://localhost:8080/realms/mcp-test/protocol/openid-connect/certs",
    algorithm="RS256",
    expected_audiences=["your-keycloak-client-id"],
)
```

## Next Steps

-   **Let Arcade secure your server instead**: [Learn about `arcade deploy`](/guides/deployment-hosting/arcade-deploy.md)

-   **Build  with authorization**: [Create tools that use OAuth](/guides/create-tools/tool-basics/create-tool-auth.md)

-   **Use secrets securely**: [Create tools with secrets](/guides/create-tools/tool-basics/create-tool-secrets.md)


Last updated on February 9, 2026

[Securing Arcade MCP](/en/guides/security/securing-arcade-mcp.md)
[Security research program](/en/guides/security/security-research-program.md)
