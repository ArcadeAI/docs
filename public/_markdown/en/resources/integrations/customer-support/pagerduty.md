---
title: "PagerDuty"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Customer Support](/en/resources/integrations/customer-support/zendesk.md)
PagerDuty

# PagerDuty

**Description:** Enable agents to read incidents, on-call info, services, and teams in PagerDuty

**Author:** Arcade

**Auth:** User authorization

[![PyPI Version](https://img.shields.io/pypi/v/arcade_pagerduty)](https://pypi.org/project/arcade_pagerduty/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_pagerduty)](https://pypi.org/project/arcade_pagerduty/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_pagerduty)](https://pypi.org/project/arcade_pagerduty/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_pagerduty)](https://pypi.org/project/arcade_pagerduty/)

The PagerDuty MCP Server lets agents list and inspect incidents, on-calls, services, teams, users, schedules, log entries, and escalation policies. Follows the Linear-style docs with code snippets in Python and JavaScript.

Arcade supports Classic PagerDuty apps. Select **read-only** access; all tools in this MCP Server only read data. (Use read/write only if you add custom write tools.) See [PagerDuty OAuth functionality](https://developer.pagerduty.com/docs/oauth-functionality) .

Configure PagerDuty OAuth in the [PagerDuty auth provider](/references/auth-providers/pagerduty.md) before using these tools.

## Available tools

Tool Name

Description

PagerDuty.WhoAmI

Get the authenticated user's profile + on-call status

PagerDuty.ListIncidents

List incidents with filters

PagerDuty.GetIncident

Get a single incident by ID

PagerDuty.ListLogEntries

List account log entries (activity feed)

PagerDuty.ListEscalationPolicies

List escalation policies

PagerDuty.GetEscalationPolicy

Get an escalation policy by ID

PagerDuty.ListServices

List services with optional name search

PagerDuty.GetService

Get a service by ID

PagerDuty.ListSchedules

List schedules with on-call data

PagerDuty.ListOnCalls

List on-call entries with filters

PagerDuty.ListUsers

List users

PagerDuty.SearchUsers

Search users by name/email (fuzzy)

PagerDuty.ListTeams

List teams

PagerDuty.GetTeam

Get a team by ID

If you need a tool that’s not listed, [contact us](mailto:contact@arcade.dev) or [build your own](/guides/create-tools/tool-basics/build-mcp-server.md).

-   `readOnlyHint` — reads data only - `openWorldHint` — calls PagerDuty’s external API - `destructiveHint` — none of these tools delete data - `idempotentHint` — repeating the same read call returns the same data

* * *

## User context

### PagerDuty.WhoAmI

Get the authenticated user’s profile plus current on-call info.

-   `readOnlyHint: true` — reads data only - `openWorldHint: true` — calls PagerDuty’s external API - `destructiveHint: false` — no destructive operations - `idempotentHint: true` — same request returns same data

**Parameters** None.

**API calls:** GET `/users/me`, GET `/oncalls`

* * *

## Incident tools

### PagerDuty.ListIncidents

List incidents with filters (status, urgency, services, teams, time window).

-   `readOnlyHint: true` — reads data only - `openWorldHint: true` — calls PagerDuty’s external API - `destructiveHint: false` — no destructive operations - `idempotentHint: true` — same request returns same data

**Parameters**

-   **status** (`enum`, _optional_) Filter by status.
-   **urgency** (`enum`, _optional_) Filter by urgency.
-   **service\_ids** (`array`, _optional_) Filter by service IDs.
-   **team\_ids** (`array`, _optional_) Filter by team IDs.
-   **since** / **until** (`string`, _optional_) ISO-8601 time range.
-   **limit** (`integer`, _optional_) 1-50, default 10.
-   **offset** (`integer`, _optional_) Pagination offset.

**API calls:** GET `/incidents`

* * *

### PagerDuty.GetIncident

Get a single incident by ID.

-   `readOnlyHint: true` — reads data only - `openWorldHint: true` — calls PagerDuty’s external API - `destructiveHint: false` — no destructive operations - `idempotentHint: true` — same request returns same data

**Parameters**

-   **incident\_id** (`string`, **required**) Incident ID.

**API calls:** GET `/incidents/{id}`

* * *

### PagerDuty.ListLogEntries

List account log entries (activity feed).

-   `readOnlyHint: true` — reads data only - `openWorldHint: true` — calls PagerDuty’s external API - `destructiveHint: false` — no destructive operations - `idempotentHint: true` — same request returns same data

**Parameters**

-   **since** / **until** (`string`, _optional_) ISO-8601 time range.
-   **team\_ids** (`array`, _optional_) Filter by team IDs.
-   **time\_zone** (`string`, _optional_) IANA time zone.
-   **is\_overview** (`boolean`, _optional_) Compact mode. Default: `true`.
-   **limit** (`integer`, _optional_) 1-50. Default: 10.
-   **offset** (`integer`, _optional_) Pagination offset.

**API calls:** GET `/log_entries`

* * *

## Escalation policy tools

### PagerDuty.ListEscalationPolicies

List escalation policies.

-   `readOnlyHint: true` — reads data only - `openWorldHint: true` — calls PagerDuty’s external API - `destructiveHint: false` — no destructive operations - `idempotentHint: true` — same request returns same data

**Parameters**

-   **limit** (`integer`, _optional_) 1-50. Default: 10.
-   **offset** (`integer`, _optional_) Pagination offset.

**API calls:** GET `/escalation_policies`

* * *

### PagerDuty.GetEscalationPolicy

Get escalation policy details.

-   `readOnlyHint: true` — reads data only - `openWorldHint: true` — calls PagerDuty’s external API - `destructiveHint: false` — no destructive operations - `idempotentHint: true` — same request returns same data

**Parameters**

-   **escalation\_policy\_id** (`string`, **required**) Escalation policy ID.

**API calls:** GET `/escalation_policies/{id}`

* * *

## Service tools

### PagerDuty.ListServices

List services (optional name search).

-   `readOnlyHint: true` — reads data only - `openWorldHint: true` — calls PagerDuty’s external API - `destructiveHint: false` — no destructive operations - `idempotentHint: true` — same request returns same data

**Parameters**

-   **query** (`string`, _optional_) Search by name.
-   **limit** (`integer`, _optional_) 1-50. Default: 10.
-   **offset** (`integer`, _optional_) Pagination offset.

**API calls:** GET `/services`

* * *

### PagerDuty.GetService

Get service details.

-   `readOnlyHint: true` — reads data only - `openWorldHint: true` — calls PagerDuty’s external API - `destructiveHint: false` — no destructive operations - `idempotentHint: true` — same request returns same data

**Parameters**

-   **service\_id** (`string`, **required**) Service ID.

**API calls:** GET `/services/{id}`

* * *

## Schedule tools

### PagerDuty.ListSchedules

List schedules with optional time zone and pagination.

-   `readOnlyHint: true` — reads data only - `openWorldHint: true` — calls PagerDuty’s external API - `destructiveHint: false` — no destructive operations - `idempotentHint: true` — same request returns same data

**Parameters**

-   **limit** (`integer`, _optional_) 1-50. Default: 10.
-   **offset** (`integer`, _optional_) Pagination offset.
-   **time\_zone** (`string`, _optional_) IANA time zone.

**API calls:** GET `/schedules`

* * *

## On-call tools

### PagerDuty.ListOnCalls

List on-call entries with filters (schedule, escalation policy, team, time).

-   `readOnlyHint: true` — reads data only - `openWorldHint: true` — calls PagerDuty’s external API - `destructiveHint: false` — no destructive operations - `idempotentHint: true` — same request returns same data

**Parameters**

-   **schedule\_ids** (`array`, _optional_) Filter by schedules.
-   **escalation\_policy\_ids** (`array`, _optional_) Filter by escalation policies.
-   **team\_ids** (`array`, _optional_) Filter by teams.
-   **time\_zone** (`string`, _optional_) IANA time zone.
-   **since** / **until** (`string`, _optional_) ISO times.
-   **limit** (`integer`, _optional_) 1-50. Default: 10.
-   **offset** (`integer`, _optional_) Pagination offset.

**API calls:** GET `/oncalls`

* * *

## User tools

### PagerDuty.ListUsers

List users with pagination.

-   `readOnlyHint: true` — reads data only - `openWorldHint: true` — calls PagerDuty’s external API - `destructiveHint: false` — no destructive operations - `idempotentHint: true` — same request returns same data

**Parameters**

-   **limit** (`integer`, _optional_) 1-50. Default: 10.
-   **offset** (`integer`, _optional_) Pagination offset.

**API calls:** GET `/users`

* * *

### PagerDuty.SearchUsers

Search users by name/email (fuzzy).

-   `readOnlyHint: true` — reads data only - `openWorldHint: true` — calls PagerDuty’s external API - `destructiveHint: false` — no destructive operations - `idempotentHint: true` — same request returns same data

**Parameters**

-   **query** (`string`, **required**) Name or email fragment.
-   **auto\_accept\_matches** (`boolean`, _optional_) Auto-accept above confidence threshold. Default: `false`.

**API calls:** GET `/users` (fuzzy match locally)

* * *

## Team tools

### PagerDuty.ListTeams

List teams with pagination.

-   `readOnlyHint: true` — reads data only - `openWorldHint: true` — calls PagerDuty’s external API - `destructiveHint: false` — no destructive operations - `idempotentHint: true` — same request returns same data

**Parameters**

-   **limit** (`integer`, _optional_) 1-50. Default: 10.
-   **offset** (`integer`, _optional_) Pagination offset.

**API calls:** GET `/teams`

* * *

### PagerDuty.GetTeam

Get team details (members, linked services/policies).

-   `readOnlyHint: true` — reads data only - `openWorldHint: true` — calls PagerDuty’s external API - `destructiveHint: false` — no destructive operations - `idempotentHint: true` — same request returns same data

**Parameters**

-   **team\_id** (`string`, **required**) Team ID.

**API calls:** GET `/teams/{id}`

* * *

## Auth

PagerDuty requires OAuth2. Configure the PagerDuty auth provider and request the scopes shown above per tool. Tokens are passed as Bearer auth:

PLAINTEXT

```
Authorization: Bearer <token>
```

See PagerDuty auth docs: [PagerDuty API Authentication](https://developer.pagerduty.com/docs/ZG9jOjExMDI5NTYz-authentication) .

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_pagerduty ``` Learn more](/guides/deployment-hosting.md)

Last updated on February 10, 2026

[Pylon](/en/resources/integrations/customer-support/pylon.md)
[CustomerioApi](/en/resources/integrations/customer-support/customerio-api.md)
