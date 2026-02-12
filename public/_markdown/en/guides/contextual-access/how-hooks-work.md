---
title: "How Hooks Work"
description: "Understand hook points, execution order, extensions, failure modes, and how the Arcade calls your webhook server"
---
[Contextual Access](/en/guides/contextual-access.md)
How Hooks Work

# How Hooks Work

This page explains how Arcade invokes your external logic at each stage of  execution, how you configure extensions and hook points, and how ordering and failures are handled.

## Hook points

Arcade defines three hook points. You do not create new ones, you configure behavior at the ones that exist:

Hook point

When it fires

What you can do

**Access Hook**

When listing tools for a user

Return an allow list or deny list to control which tools the user can see. Results are cached.

**Pre-Execution Hook**

Before each tool execution

Allow, deny, or modify the request (inputs, secrets, routing).

**Post-Execution Hook**

After tool execution completes

Allow, deny, or modify the output (e.g. PII redaction, content filtering).

You only need to implement the hook points you care about. If you only need post-execution filtering, you only implement the post-execution endpoint.

## Extensions

A Webhook **extension** is the connection between Arcade and your webhook server. It stores:

-   **Endpoint URLs** for each hook point you implement (access, pre-execution, post-execution)
-   **Authentication** method (Bearer token or mTLS)
-   **Timeout** (default 5s), **retry**, and **cache** settings
-   **Scope** — bound to an organization or a specific

One extension can serve multiple hook configurations. When you change a URL or rotate a credential, you update the extension once and every hook that uses it picks up the change.

### Scoping

Scope

Who can use it

Use case

**Organization**

Any hook configuration in the organization

Company-wide compliance, access control

**Project**

Only hook configurations in that project

Project-specific validation or enrichment

## Hook configurations

A **hook configuration** attaches an extension to a specific hook point and controls its behavior:

-   **Hook point** — Which of the three hooks to run at
-   **Extension** — Which extension to call (must be in scope)
-   **Phase** — `before` or `after` (organization hooks only; see execution order below)
-   **Priority** — Order within the same phase and extension scope (lower number = runs first)
-   **Failure mode** — What happens when the webhook is unreachable

You can have multiple configurations on the same hook point (e.g. an organization access check and a \-level access check). They all run in a defined order.

## Execution order

Hooks at both organization and  scope run together. Arcade executes them in this fixed order:

1.  **Organization before** — Organization-scoped hook configs with phase `before`, ordered by priority
2.   — Project-scoped hook configs, ordered by priority
3.  **Organization after** — Organization-scoped hook configs with phase `after`, ordered by priority

Organization hooks have a **phase** setting (`before` or `after`) that controls whether they run before or after  hooks. Project hooks always run in the middle and do not have a phase setting.

Within each group, lower priority numbers run first. Each hook sees the accumulated result from all previous hooks (e.g. modified inputs from an earlier hook). **Any denial stops the entire pipeline** and the operation fails immediately.

Goal

Scope

Configuration

Company-wide check runs first

Organization

Phase: `before` (default)

Company-wide audit runs last

Organization

Phase: `after`

Project-specific validation

Project

No phase needed

## Failure modes

When your webhook is unreachable (timeout, 5xx, connection error, etc), Arcade applies the hook’s failure mode:

Mode

Behavior

**Fail closed**

Block the operation. Use for security-critical checks (e.g. access control).

**Fail open**

Allow the operation to proceed. Use for non-critical enhancements (e.g. metrics, optional enrichment).

Set the failure mode per hook configuration. Timeout can be overridden per hook; otherwise the extension default applies.

## Setting up in the Dashboard

You configure extensions and hook points from the **Arcade Dashboard**:

1.  **Create an extension** — Navigate to **Contextual Access**, click **Create Extension**, fill in endpoint URLs, auth, scope, and timeout/retry settings.
2.  **Create a hook configuration** — Navigate to **Logic Extensions → Hook Points**, click **Create Hook Configuration**, select the extension, hook point, phase, priority, and failure mode.

## Next steps

-   [Run an extension](/guides/contextual-access/examples.md)
     — Try the open-source example servers
-   [Build your own](/guides/contextual-access/build-your-own.md)
     — Implement the webhook contract from the OpenAPI spec
-   [API Reference](/references/contextual-access-webhook-api.md)
     — Interactive schema documentation for the webhook contract

Last updated on January 30, 2026

[Contextual Access](/en/guides/contextual-access.md)
[Running an Extension](/en/guides/contextual-access/examples.md)
