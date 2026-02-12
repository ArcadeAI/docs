---
title: "Build Your Own"
description: "Build your own Logic Extensions webhook server from the OpenAPI spec"
---
[Logic Extensions](/en/guides/logic-extensions.md)
Build Your Own

# Build Your Own Extension Server

This guide walks through implementing a webhook server that satisfies the Logic Extensions contract. You can write it in any language — the contract is defined by an OpenAPI 3.0 spec.

## OpenAPI spec

The canonical contract is maintained in the [ArcadeAI/schemas](https://github.com/ArcadeAI/schemas)  repository:

-   **OpenAPI 3.0 spec:** [logic\_extensions/http/1.0/schema.yaml](https://github.com/ArcadeAI/schemas/blob/main/logic_extensions/http/1.0/schema.yaml)
     

You can browse it interactively on the [API Reference](/references/logic-extensions-api.md) page.

## Generate server stubs

Use the OpenAPI spec with standard code generators to scaffold your server:

Language

Generator

**Go**

[oapi-codegen](https://github.com/deepmap/oapi-codegen)
 , [ogen](https://github.com/ogen-go/ogen)
 

**Python**

[openapi-generator](https://openapi-generator.tech/)
 , [datamodel-code-generator](https://github.com/koxudaxi/datamodel-code-generator)
 

**TypeScript**

[openapi-typescript](https://github.com/drwpow/openapi-typescript)
 , [openapi-generator](https://openapi-generator.tech/)
 

**Example (Go with oapi-codegen):**

```bash
curl -sL https://raw.githubusercontent.com/ArcadeAI/schemas/main/logic_extensions/http/1.0/schema.yaml -o schema.yaml
oapi-codegen -generate types,server -package server schema.yaml
```

The [logic-extensions-examples](https://github.com/ArcadeAI/logic-extensions-examples)  repo uses this approach — see `pkg/server/` for the generated types.

## Endpoints to implement

Your server needs to expose HTTP POST endpoints for each hook point you want to handle. Endpoint paths are fully configurable in the Dashboard — the defaults are shown below.

Endpoint

Hook point

Required

`POST /access`

Access Hook

Only if you need tool access control

`POST /pre`

Pre-Execution Hook

Only if you need tool request validation/modification

`POST /post`

Post-Execution Hook

Only if you need tool output filtering/modification

You do not need to implement all endpoints. Only implement the ones you configure in the Dashboard.

## Pre-Execution Hook

**When:** Before each  execution.

### Request (Arcade sends to your server)

Field

Type

Description

`execution_id`

string

Correlates request/response across hooks

`tool`

object

`name`, `toolkit`, `version`

`inputs`

object

Tool inputs (name → value)

`context`

object

`authorization` (OAuth per provider), `secrets` (key names only), `metadata`, `user_id`

### Response (your server returns)

Field

Type

Required

Description

`code`

string

Yes

`OK`, `CHECK_FAILED`, or `RATE_LIMIT_EXCEEDED`

`error_message`

string

No

Shown to the agent when denying

`override`

object

No

`inputs` and/or `secrets` to modify the request

## Post-Execution Hook

**When:** After  execution.

### Request

Field

Type

Description

`execution_id`

string

Correlates with pre-execution hook

`tool`

object

`name`, `toolkit`, `version`

`inputs`

object

Tool inputs

`success`

boolean

Whether the tool call succeeded

`output`

any

The execution output (any JSON type)

`execution_code`

string

Status from worker

`execution_error`

string

Error message from tool call

`context`

object

Same as pre-execution hook

### Response

Field

Type

Required

Description

`code`

string

Yes

`OK`, `CHECK_FAILED`, or `RATE_LIMIT_EXCEEDED`

`error_message`

string

No

Shown to the agent when denying

`override`

object

No

`output` to replace the response returned to the agent

## Access Hook

**When:** When Arcade needs to know which  a  can see. Supports batch requests.

### Request

Field

Type

Description

`user_id`

string

User to check

`toolkits`

object

Map of toolkit name → toolkit info (tools, versions, requirements)

### Response

Return either an allow list or a deny list (not both):

Field

Type

Description

`only`

object

If present, **only** these tools are allowed (deny list ignored)

`deny`

object

Tools listed here are denied (ignored if `only` is present)

If you return neither field, the Arcade treats it as “no change” — all  remain allowed at this hook.

## Response codes (pre and post)

Code

Meaning

`OK`

Proceed; optional `override` is applied

`CHECK_FAILED`

Deny the operation; `error_message` is shown to the agent

`RATE_LIMIT_EXCEEDED`

Deny with rate-limit semantics

## Authentication

Arcade sends one of:

-   **Bearer:** `Authorization: Bearer <token>` (token from extension config)
-   **mTLS:** Client certificate during TLS handshake; optional CA cert for server verification

Configure the auth method when creating your extension in the Dashboard.

## Failure handling and retries

-   **Timeout:** Configurable per extension (default 5s); can be overridden per hook. On timeout, the hook’s failure mode applies (Fail closed = block, Fail open = allow).
-   **Retries:** Optional at the extension level; only for transient failures (5xx, timeout, connection error). 4xx responses are not retried.

## Next steps

-   [API Reference](/references/logic-extensions-api.md)
     — Interactive Swagger documentation for the full schema
-   [Run an extension](/guides/logic-extensions/examples.md)
     — Try the open-source example servers as reference
-   [How Hooks Work](/guides/logic-extensions/how-hooks-work.md)
     — Understand execution order, phases, and failure modes

Last updated on February 10, 2026

[Running an Extension](/en/guides/logic-extensions/examples.md)
[MCP Gateways](/en/guides/mcp-gateways.md)
