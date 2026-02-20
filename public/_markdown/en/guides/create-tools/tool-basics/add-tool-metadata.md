---
title: "Add metadata to your tools"
description: "Learn how to annotate your MCP tools with ToolMetadata so that MCP clients, policy engines, and tool-selection systems understand what each tool does."
---
Create tools[Build a tool](/en/guides/create-tools/tool-basics.md)
Add metadata to your tools

# Add metadata to your tools

## Outcomes

Annotate your tools with structured metadata so that  clients, policy engines, and \-selection systems understand what each tool does and how it behaves.

### You will Learn

-   What `ToolMetadata` is and how its three axes work
-   How to classify  by service domain
-   How to describe tool behavior with operations and \-aligned flags
-   How behavior flags map to  annotations like `readOnlyHint` and `destructiveHint`

### Prerequisites

-   [An MCP Server](/guides/create-tools/tool-basics/build-mcp-server.md)


## What is ToolMetadata?

`ToolMetadata` is a structured annotation you attach to your `@app.tool` and `@tool` functions. It has three independent axes, each of which is optional:

-   **Classification** — What type of service does this  interface with? Used for tool discovery and search boosting when deployed to Arcade.
-   **Behavior** — What happens when you run this tool? Describes operations (CRUD) and safety flags. These are projected to  annotations (`readOnlyHint`, `destructiveHint`, etc.) for MCP clients.
-   **Extras** — Arbitrary key/value pairs for custom logic like feature flags or routing info.

Three systems consume this metadata:

1.  ** selection** — Classification feeds a scoring boost that surfaces relevant tools when callers provide categories that match the tool’s classification.
2.  **Policy engines** — Behavior enables rules like “require human approval for DELETE operations” or “only allow read-only  in this gateway.”
3.  ** clients** — Behavior flags are projected to MCP annotations so clients like Claude Desktop, Cursor, and VS Code can make informed decisions about .

## Add metadata to a tool

### Import the metadata classes

Add the following import to the top of your file:

```python
# server.py
from arcade_mcp_server.metadata import (
    Behavior,
    Classification,
    Operation,
    ServiceDomain,
    ToolMetadata,
)
```

### Add `metadata` to the `@app.tool` decorator

Pass a `ToolMetadata` instance to the `metadata` parameter of `@app.tool`. Here is a mutating  that sends a message in Slack:

```python
# server.py
@app.tool(
    metadata=ToolMetadata(
        classification=Classification(
            service_domains=[ServiceDomain.MESSAGING],
        ),
        behavior=Behavior(
            operations=[Operation.CREATE],
            read_only=False,
            destructive=False,
            idempotent=False,
            open_world=True,
        ),
    ),
    requires_auth=Slack(scopes=["chat:write"]),
)
async def send_slack_message(
    context: Context,
    channel: Annotated[str, "The channel to send the message to"],
    message: Annotated[str, "The message text"],
) -> dict:
    """Send a message to a Slack channel."""
    ...
```

## Classification

Classification answers one question: **“What type of software service does this  interface with?”**

It contains a single field: `service_domains`, a list of `ServiceDomain` enum values.

### How to pick a ServiceDomain

`ServiceDomain` classifies the **target service** whose data or functionality the  provides access to. It is not about the tool’s action, the infrastructure used to reach the service, or how your organization uses the tool.

Think of it this way: if you looked up the service on a software review site (G2, Capterra), what market category would it appear under? That’s the `ServiceDomain`.

Three principles guide assignment:

1.  **Target, not infrastructure.** Classify by the service whose data the  exposes, not the intermediary. A tool that uses SerpAPI to query Google Flights is `TRAVEL`, not `WEB_SCRAPING`.
2.  **Service-level, not \-level.** All tools that connect to the same service share the same domain(s). A search tool and a send tool within Gmail both get `EMAIL` because Gmail is an email service.
3.  **`None` is always valid.** If no enum value clearly fits, omit `classification` entirely. This is correct, not incomplete.

Some services genuinely span multiple categories. A service gets multiple domains only when each domain independently applies. Don’t add a second domain just because a service has a minor feature in that space.

### Available ServiceDomain values

Value

Description

`PROJECT_MANAGEMENT`

Project tracking, issue management, and work item software

`CRM`

Customer relationship management — contacts, deals, pipelines

`EMAIL`

Email services for sending, receiving, and managing messages

`CALENDAR`

Calendar and scheduling services

`MESSAGING`

Real-time team and business messaging platforms

`DOCUMENTS`

Document editing, wikis, and knowledge base platforms

`CLOUD_STORAGE`

Cloud file storage and sharing services

`SPREADSHEETS`

Spreadsheet and tabular data software

`PRESENTATIONS`

Presentation and slideshow software

`DESIGN`

UI/UX design and prototyping tools

`SOURCE_CODE`

Source code management, version control, and code review

`PAYMENTS`

Payment processing, invoicing, and billing

`SOCIAL_MEDIA`

Platforms where users publish content to a public audience through a social feed

`VIDEO_HOSTING`

Video hosting, streaming, and distribution platforms

`MUSIC_STREAMING`

Music streaming and playback platforms

`CUSTOMER_SUPPORT`

Help desk, ticketing, and customer service software

`ECOMMERCE`

Online shopping, product catalogs, and retail platforms

`INCIDENT_MANAGEMENT`

Incident response, on-call management, and operational alerting

`WEB_SCRAPING`

Web data extraction and crawling services

`CODE_SANDBOX`

Cloud code execution and sandboxed runtime environments

`VIDEO_CONFERENCING`

Video meeting and conferencing platforms

`GEOSPATIAL`

Maps, navigation, directions, and geocoding services

`FINANCIAL_DATA`

Financial market data and stock information services

`TRAVEL`

Travel search, flight and hotel booking platforms

## Behavior

Behavior answers: **“What happens when you run this ?”** It has two parts: **operations** and **\-aligned flags**.

### Operations

Operations classify the ’s effect on resources in the target system. Ask yourself: “After this tool runs, what changed?”

Operation

When to use

`READ`

The tool only observes. No state was created, modified, or removed.

`CREATE`

A resource that did not exist before now does (messages sent, files uploaded, records inserted).

`UPDATE`

An existing resource changed, but the resource identity persists (rename, archive, patch).

`DELETE`

A resource is no longer retrievable (permanent deletion, soft-delete, cancellation).

`OPAQUE`

The effect depends entirely on runtime inputs and cannot be predicted from the tool definition.

Compound operations are valid. For example, an upsert  uses `[Operation.CREATE, Operation.UPDATE]`, and a clone tool uses `[Operation.READ, Operation.CREATE]`.

For  with no external service and no resource effects, `operations` can be `None`. The combination of `read_only=True` and `open_world=False` gives policy engines the safety signal they need.

### MCP-aligned flags

These four booleans are projected directly to   annotations. Always specify all four for production metadata.

**`read_only`** — Does this  only observe, with zero side effects?

Set `True` when the  never mutates any state in the target system. If there’s any doubt, set it to `False`.

**`destructive`** — Can this  cause irreversible data loss?

Set `True` when the  can delete or permanently destroy data. Be conservative — when in doubt, mark it `True`. Even soft-deletes that auto-purge should be `destructive=True`. The exception: archive operations that are fully reversible should use `Operation.UPDATE` with `destructive=False`.

**`idempotent`** — If you call this  twice with the same input, does the second call change anything?

Set `True` when repeated calls with identical input produce no additional effect. A practical test: would an accidental retry cause a problem? If no, it’s idempotent. If it would create a duplicate, it’s not.

**`open_world`** — Does this  talk to anything outside the process?

Set `True` for any  that calls an external API, queries a database, or accesses a file system. Set `False` only for pure computation with no network, disk, or OS calls.

### Flag-to-annotation mapping

Behavior flag

MCP annotation

`read_only`

`readOnlyHint`

`destructive`

`destructiveHint`

`idempotent`

`idempotentHint`

`open_world`

`openWorldHint`

## Extras

`extras` is a `dict[str, Any]` for arbitrary key/value pairs that downstream systems need but that don’t affect  selection. Use it for things like IDP routing info, feature flags, compliance requirements, or rate limits.

```python
metadata=ToolMetadata(
    extras={"idp": "entraID", "requires_mfa": True},
)
```

## Validation

By default, `ToolMetadata` validates for logical contradictions when your server starts. This catches common mistakes early:

Condition

Why it’s a contradiction

Mutating operations + `read_only=True`

Can’t be read-only if it creates, updates, or deletes

`OPAQUE` operation + `read_only=True`

Can’t guarantee read-only when the effect is indeterminate

`DELETE` operation + `destructive=False`

Deletion is inherently destructive

`ServiceDomain` present + `open_world=False`

An external service implies open-world interaction

If you hit a validation error for a legitimate edge case, you can bypass it:

```python
metadata=ToolMetadata(
    strict=False,
    # ... your metadata ...
)
```

Only set `strict=False` when you understand and accept the apparent contradiction. In most cases, a validation error means the metadata needs to be corrected.

## Key takeaways

-   **Three axes** — Classification (what service), Behavior (what effect), and Extras (custom data) are independent and optional.
-   ** projection** — Behavior flags map directly to MCP annotations (`readOnlyHint`, `destructiveHint`, `idempotentHint`, `openWorldHint`).
-   **Classify the service, not the ** — `ServiceDomain` follows the target service, not the tool’s action or the infrastructure used to reach it.
-   **Be explicit about behavior** — Always specify all four flags (`read_only`, `destructive`, `idempotent`, `open_world`) for production .
-   **Built-in validation** — Strict mode catches contradictions like marking a DELETE  as non-destructive.

## Next steps

-   [Organize your MCP server and tools](/guides/create-tools/tool-basics/organize-mcp-tools.md)
     — Structure your  as it grows
-   [Evaluate your tools](/guides/create-tools/evaluate-tools.md)
     — Test  reliability and performance
-   [Handle errors](/guides/create-tools/error-handling.md)
     — Return useful errors from your

Last updated on February 12, 2026

[Organize your MCP server and tools](/en/guides/create-tools/tool-basics/organize-mcp-tools.md)
[Overview](/en/guides/create-tools/evaluate-tools.md)
