---
title: "Settings"
description: "Global configuration and environment-driven settings for the Arcade MCP Server"
---
Arcade MCP[Python](/en/references/mcp/python.md)
Settings

# Settings

Global configuration and environment-driven settings.

## MCPSettings

```python
arcade_mcp_server.settings.MCPSettings
```

Main  settings container.

**Bases:** `BaseSettings`

### from\_env()

```python
from_env() classmethod
```

Create settings from environment variables.

### to\_dict()

```python
to_dict()
```

Convert settings to dictionary.

### tool\_secrets()

```python
tool_secrets()
```

Get  secrets.

## Sub-settings

### ServerSettings

```python
arcade_mcp_server.settings.ServerSettings
```

Server-related settings.

**Bases:** `BaseSettings`

### MiddlewareSettings

```python
arcade_mcp_server.settings.MiddlewareSettings
```

Middleware-related settings.

**Bases:** `BaseSettings`

#### validate\_log\_level()

```python
validate_log_level(v) classmethod
```

Validate log level.

### NotificationSettings

```python
arcade_mcp_server.settings.NotificationSettings
```

Notification-related settings.

**Bases:** `BaseSettings`

### TransportSettings

```python
arcade_mcp_server.settings.TransportSettings
```

Transport-related settings.

**Bases:** `BaseSettings`

### ArcadeSettings

```python
arcade_mcp_server.settings.ArcadeSettings
```

Arcade-specific settings.

**Bases:** `BaseSettings`

### ToolEnvironmentSettings

```python
arcade_mcp_server.settings.ToolEnvironmentSettings
```

 environment settings.

**Bases:** `BaseSettings`

Every environment variable that is not prefixed with one of the prefixes for the other settings will be added to the  environment as an available tool secret in the ToolContext.

#### model\_post\_init()

```python
model_post_init(__context)
```

Populate `tool_environment` from process env if not provided.

## Examples

### Basic configuration

```python
from arcade_mcp_server.settings import MCPSettings

settings = MCPSettings(
    debug=True,
    middleware=MCPSettings.middleware.__class__(
        enable_logging=True,
        mask_error_details=False,
    ),
    server=MCPSettings.server.__class__(
        title="My MCP Server",
        instructions="Use responsibly",
    ),
    transport=MCPSettings.transport.__class__(
        http_host="0.0.0.0",
        http_port=8000,
    ),
)
```

### Loading from environment

```python
from arcade_mcp_server.settings import MCPSettings

# Values like ARCADE_MCP_DEBUG, ARCADE_MCP_HTTP_PORT, etc. are parsed
settings = MCPSettings()
```

Last updated on February 6, 2026

[Errors](/en/references/mcp/python/errors.md)
[Telemetry](/en/references/mcp/telemetry.md)
