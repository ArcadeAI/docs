# Running an Extension

The fastest way to get started with Logic Extensions is to run one of the open-source example servers.

## Example servers

The [ArcadeAI/logic-extensions-examples](https://github.com/ArcadeAI/logic-extensions-examples) repository contains runnable Go servers that implement the Logic Extensions webhook contract.

### Advanced Server (full-featured)

A single server that demonstrates access control, PII redaction, A/B testing, and includes a web dashboard.

- **Location:** [examples/advanced_server/](https://github.com/ArcadeAI/logic-extensions-examples/tree/main/examples/advanced_server)
- **Hook points:** Access, Pre-Execution, Post-Execution

### Focused examples

| Example | Description | Hook points |
| --- | --- | --- |
| **user_blocking** | Block specific users from tools | Access, Pre |
| **content_filter** | Filter or block based on content | Access, Pre, Post |
| **pii_redactor** | Detect and redact PII in tool outputs | Post |
| **ab_testing** | A/B and canary test tool versions | Pre |
| **basic_rules** | Configurable rules for all hooks | Access, Pre, Post |

## Quick start

```bash
git clone https://github.com/ArcadeAI/logic-extensions-examples.git
cd logic-extensions-examples

# Advanced server
go run ./examples/advanced_server -config ./examples/advanced_server/example-config.yaml

# PII redactor
go run ./examples/pii_redactor -types "email,ssn,credit_card"
```

Each server exposes `GET /health`, `POST /access`, `POST /pre`, and `POST /post` (or a subset).
