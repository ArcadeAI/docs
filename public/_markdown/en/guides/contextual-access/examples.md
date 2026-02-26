---
title: "Running a Server"
description: "Run open-source example webhook servers to get started with Contextual Access"
---
[Contextual Access](/en/guides/contextual-access.md)
Running an Extension

# Running an Server

The fastest way to get started with Contextual Access is to run one of the open-source example servers. These are example Go implementations you can use as-is or as a starting point for your own server.

## Example servers

The [ArcadeAI/logic-extensions-examples](https://github.com/ArcadeAI/logic-extensions-examples)  repository contains runnable servers that implement the Contextual Access webhook contract.

### Advanced Server (full-featured)

A single server that demonstrates access control, PII redaction, A/B testing, and includes a browser-based dashboard for configuration.

-   **Location:** [examples/contextual\_access/advanced\_server/](https://github.com/ArcadeAI/logic-extensions-examples/tree/main/examples/contextual_access/advanced_server)
     
-   **Features:** Access rules, PII redaction, A/B testing, web UI
-   **Hook points:** Access, Pre-Execution, Post-Execution

### Focused examples

Minimal servers, each demonstrating one capability:

Example

Description

Hook points

**[user\_blocking](https://github.com/ArcadeAI/logic-extensions-examples/tree/main/examples/contextual_access/user_blocking)** 

Block specific users from tools

Access, Pre

**[content\_filter](https://github.com/ArcadeAI/logic-extensions-examples/tree/main/examples/contextual_access/content_filter)** 

Filter or block based on content

Access, Pre, Post

**[pii\_redactor](https://github.com/ArcadeAI/logic-extensions-examples/tree/main/examples/contextual_access/pii_redactor)** 

Detect and redact PII in tool outputs

Post

**[ab\_testing](https://github.com/ArcadeAI/logic-extensions-examples/tree/main/examples/contextual_access/ab_testing)** 

A/B and canary test tool versions

Pre

**[basic\_rules](https://github.com/ArcadeAI/logic-extensions-examples/tree/main/examples/contextual_access/basic_rules)** 

Configurable rules for all hooks (YAML/config)

Access, Pre, Post

## Quick start

Clone the repo and run a server:

```bash
git clone https://github.com/ArcadeAI/logic-extensions-examples.git
cd logic-extensions-examples/
```

**Advanced server (with web dashboard):**

```go
go run ./examples/contextual_access/advanced_server -config ./examples/advanced_server/example-config.yaml
```

**Focused examples:**

```go
# PII redactor (post-hook only)
go run ./examples/contextual_access/pii_redactor -types "email,ssn,credit_card"

# User blocking (access + pre)
go run ./examples/contextual_access/user_blocking -block "user1,user2"

# Content filter (access, pre, post)
go run ./examples/contextual_access/content_filter -config ./examples/content_filter/example-config.yaml

# A/B testing (pre-hook)
go run ./examples/contextual_access/ab_testing -config ./examples/ab_testing/example-config.yaml

# Basic rules (all hooks, configurable via YAML)
go run ./examples/contextual_access/basic_rules -config ./examples/basic_rules/example-config.yaml
```

Each server exposes `GET /health`, `POST /access`, `POST /pre`, and `POST /post` (or a subset, depending on which hook points it implements).

## Connect to the Arcade

Once your server is running:

1.  Open the **Arcade Dashboard** and navigate to **Contextual Access**
2.  Click **Create Extension** and enter your server’s base URL and endpoint paths
3.  Create **hook configurations** to attach the extension to the hook points you want

See [How Hooks Work](/guides/contextual-access/how-hooks-work.md) for details on configuring extensions and hook points.

## Next steps

-   [Build your own](/guides/contextual-access/build-your-own.md)
     — Implement the webhook contract in any language
-   [API Reference](/references/contextual-access-webhook-api.md)
     — Interactive schema documentation for the webhook contract

Last updated on February 10, 2026

[How Hooks Work](/en/guides/contextual-access/how-hooks-work.md)
[Build Your Own](/en/guides/contextual-access/build-your-own.md)
