---
title: "Logic Extensions"
description: "Integrate external access control, validation, and transformation logic into tool execution with Arcade Logic Extensions"
---
Logic ExtensionsLogic Extensions

# Logic Extensions

Logic Extensions let you plug external systems into the  to control which tools users can see, validate and modify  requests before execution, and filter or transform tool responses afterwards.

You deploy a webhook server that implements the Logic Extensions contract, then connect it to the  through the Dashboard. Your logic runs at predefined **hook points** in the tool lifecycle — no changes to your tools or  required.

## Why use Logic Extensions?

-   **Access control** — Delegate “can this user see/use this ?” to your IDP or entitlement system
-   **Request validation** — Enforce policies before execution (e.g., block certain domains, require org-scoped inputs)
-   **Payload modification** — Enrich inputs, inject secrets, redact PII from outputs, or filter content
-   **Audit and compliance** — Route all  interactions through your security and logging infrastructure

## How it works

The Engine defines three hook points in the  execution flow. At each point you configure, the Engine calls out to your webhook server and acts on the response:

Hook point

When it runs

What it can do

**Access Hook**

When listing tools for a user

Allow or deny tools the user can see

**Pre-Execution Hook**

Before each tool execution

Allow, deny, or modify inputs and secrets

**Post-Execution Hook**

After tool execution

Allow, deny, or modify the output

## Get started

[How Hooks Work](/guides/logic-extensions/how-hooks-work.md)
[Run an Extension](/guides/logic-extensions/examples.md)
[Build Your Own](/guides/logic-extensions/build-your-own.md)
[API Reference](/references/logic-extensions-api.md)

Last updated on February 11, 2026

[Arcade Registry Early Access](/en/resources/registry-early-access.md)
[How Hooks Work](/en/guides/logic-extensions/how-hooks-work.md)
