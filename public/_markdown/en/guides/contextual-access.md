---
title: "Contextual Access"
description: "Control who can see and use which tools, validate requests, and filter outputs — per user, per org, per project"
---
Contextual AccessContextual Access

# Contextual Access

Agents have broad access to tools, but enterprises need fine-grained control. Arcade's contextual access lets you govern tool visibility and behavior at every stage of execution — who can see a tool, what inputs are allowed, and what comes back.

You connect your own access-control, compliance, or transformation logic to the Arcade Engine. Your rules run inline during tool execution with no changes to your tools or agents required.

## What you can do

-   **Control tool visibility** — Decide which tools each user can see based on role, team, entitlement, or any signal from your IDP
-   **Validate requests** — Enforce policies before execution (e.g., block certain domains, require org-scoped inputs)
-   **Transform payloads** — Enrich inputs, inject secrets, redact PII from outputs, or filter content
-   **Audit every interaction** — Route all tool calls through your security and logging infrastructure

## How it works

Contextual access is powered by **Logic Extensions** — webhook servers you deploy that implement a simple contract. The Arcade Engine calls your server at three predefined hook points in the tool lifecycle:

![Contextual Access Flow Diagram](/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fflow_diagram.60cf61a4.png&w=3840&q=75)

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

You only implement the hooks you need. Configure everything through the Arcade Dashboard.

## Get started

[How Hooks Work](/guides/contextual-access/how-hooks-work.md)
[Run an Extension](/guides/contextual-access/examples.md)
[Build Your Own](/guides/contextual-access/build-your-own.md)
[API Reference](/references/logic-extensions-api.md)

Last updated on February 11, 2026

[Arcade Registry Early Access](/en/resources/registry-early-access.md)
[How Hooks Work](/en/guides/contextual-access/how-hooks-work.md)
