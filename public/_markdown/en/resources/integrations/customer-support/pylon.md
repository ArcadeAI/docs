---
title: "Pylon"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Customer Support](/en/resources/integrations/customer-support/zendesk.md)
Pylon

# Pylon

**Description:** Enable agents to interact with Pylon issues, contacts, users, and teams

**Author:** Arcade

**Auth:** API Token

[![PyPI Version](https://img.shields.io/pypi/v/arcade_pylon)](https://pypi.org/project/arcade_pylon/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_pylon)](https://pypi.org/project/arcade_pylon/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_pylon)](https://pypi.org/project/arcade_pylon/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_pylon)](https://pypi.org/project/arcade_pylon/)

The Pylon MCP Server lets agents work with Pylon’s issue management features—list and search issues, assign owners, add messages, browse contacts, users, and teams. There is **no OAuth** for Pylon; you must provide an **admin-generated API token**.

-   **Issues**: list, search (BM25), fetch details, assign owners, update status, add messages
-   **Contacts**: list and search by name or email
-   **Users & Teams**: list/search users, list teams, get team details with members
-   **User context**: fetch the API token owner profile (service account)

Pylon API tokens are admin-scoped and created in Pylon by an org admin. Store the token as `PYLON_API_TOKEN` in Arcade secrets. There is no user OAuth.

## Available tools

Tool Name

Description

Pylon.WhoAmI

Get the API token owner's profile (service account)

Pylon.ListIssues

List issues with filters (state, assignee, team, tags, date range)

Pylon.GetIssue

Get detailed issue info by ID or keyword search

Pylon.SearchIssues

Keyword search across recent issues (BM25)

Pylon.AssignIssue

Assign an issue to a user (ID or fuzzy name)

Pylon.UpdateIssueStatus

Change issue state

Pylon.AddMessage

Add an internal note to an issue

Pylon.ListContacts

List contacts with pagination

Pylon.SearchContacts

Search contacts by name or email

Pylon.ListUsers

List users in the workspace

Pylon.SearchUsers

Search users by name (fuzzy)

Pylon.ListTeams

List teams

Pylon.GetTeamAndAssignment

Get team details and members by ID or name

If you need a tool that isn’t listed, [contact us](mailto:contact@arcade.dev) or [build your own](/guides/create-tools/tool-basics/build-mcp-server.md).

-   `readOnlyHint` — reads data only - `openWorldHint` — calls Pylon’s external API - `destructiveHint` — flags irreversible or hidden changes - `idempotentHint` — repeating the same call has no extra effect

* * *

## User context

### Pylon.WhoAmI

Get the API token owner (service account) profile.

Returns name, email, and org info for the token owner.

**Parameters**

This tool takes no parameters.

-   `readOnlyHint: true` - `openWorldHint: true`

GET `/me`

* * *

## Issue tools

### Pylon.ListIssues

List issues with optional filters.

**Parameters**

-   **state** (`enum`, _optional_) Filter by state.
-   **assignee\_id** (`string`, _optional_) Filter by assignee ID.
-   **team\_id** (`string`, _optional_) Filter by team ID.
-   **tags** (`array`, _optional_) Issues must include all provided tags.
-   **start\_time** (`string`, _optional_) RFC3339 start time. Default: 7 days ago.
-   **end\_time** (`string`, _optional_) RFC3339 end time. Default: now.
-   **cursor** (`string`, _optional_) Pagination cursor.

GET `/issues`

* * *

### Pylon.GetIssue

Get detailed issue info by ID or keyword search (BM25).

**Parameters**

-   **lookup\_by** (`enum`, **required**) `id` or `search`.
-   **value** (`string`, **required**) Issue ID/number or search keywords.
-   **auto\_accept\_matches** (`boolean`, _optional_) Auto-accept search matches above confidence threshold. Default: `false`.

GET `/issues/{id}` or GET `/issues` (search)

* * *

### Pylon.SearchIssues

Keyword search across recent issues (BM25).

**Parameters**

-   **query** (`string`, **required**) Keywords (supports AND/OR/NOT).
-   **auto\_accept\_matches** (`boolean`, _optional_) Auto-accept high-confidence matches. Default: `false`.

GET `/issues` (fetch recent issues for ranking)

* * *

### Pylon.AssignIssue

Assign an issue to a user (ID or fuzzy name).

**Parameters**

-   **issue\_lookup\_by** (`enum`, **required**) `id` or `search`.
-   **issue\_value** (`string`, **required**) Issue ID/number or search keywords.
-   **user\_lookup\_by** (`enum`, **required**) `id` or `name`.
-   **user\_value** (`string`, **required**) User ID or name (fuzzy match).
-   **auto\_accept\_matches** (`boolean`, _optional_) Auto-accept fuzzy/BM25 matches. Default: `false`.

GET `/issues/{id}`, GET `/issues`, GET `/users`, PATCH `/issues/{id}`

* * *

### Pylon.UpdateIssueStatus

Change the state of an issue.

**Parameters**

-   **state** (`enum`, **required**) New state.
-   **lookup\_by** (`enum`, **required**) `id` or `search`.
-   **value** (`string`, **required**) Issue ID/number or keywords.
-   **auto\_accept\_matches** (`boolean`, _optional_) Auto-accept search matches. Default: `false`.

GET `/issues/{id}`, GET `/issues`, PATCH `/issues/{id}`

* * *

### Pylon.AddMessage

Add an internal note to an issue.

**Parameters**

-   **issue\_id** (`string`, **required**) Issue ID or number.
-   **body** (`string`, **required**) Message content.
-   **as\_html** (`boolean`, _optional_) Body is pre-formatted HTML. Default: `false`.

POST `/issues/{id}/note`

* * *

## Contact tools

### Pylon.ListContacts

List contacts with pagination.

**Parameters**

-   **cursor** (`string`, _optional_) Pagination cursor.

GET `/contacts`

* * *

### Pylon.SearchContacts

Search contacts by name or email.

**Parameters**

-   **query** (`string`, **required**) Name or email.
-   **auto\_accept\_matches** (`boolean`, _optional_) Auto-accept matches above confidence threshold. Default: `false`.

POST `/contacts/search`, GET `/contacts`

* * *

## User tools

### Pylon.ListUsers

List users in the workspace.

**Parameters**

-   **cursor** (`string`, _optional_) Pagination cursor.
-   **limit** (`integer`, _optional_) Items per page. Default: 20.

GET `/users`

* * *

### Pylon.SearchUsers

Search users by name (fuzzy).

**Parameters**

-   **query** (`string`, **required**) Name or partial name.
-   **auto\_accept\_matches** (`boolean`, _optional_) Auto-accept matches above confidence threshold. Default: `false`.

GET `/users`

* * *

## Team tools

### Pylon.ListTeams

List teams in the workspace.

**Parameters**

-   **cursor** (`string`, _optional_) Pagination cursor.

GET `/teams`

* * *

### Pylon.GetTeamAndAssignment

Get team details (with members) by ID or fuzzy name.

**Parameters**

-   **lookup\_by** (`enum`, **required**) `id` or `name`.
-   **value** (`string`, **required**) Team ID or name.
-   **auto\_accept\_matches** (`boolean`, _optional_) Auto-accept fuzzy matches. Default: `false`.

GET `/teams`, GET `/teams/{id}`

* * *

## Auth

Pylon uses Bearer tokens created by an org admin. There is **no OAuth flow**. Generate an API token in the Pylon dashboard and store it as the secret `PYLON_API_TOKEN` in Arcade. All tools require this secret.

**Auth header**

PLAINTEXT

```
Authorization: Bearer <token>
```

Pylon tokens are generated by admins in the Pylon UI and grant org-level access. Rotate tokens regularly and scope storage to your Arcade project’s secrets.

Refer to Pylon’s authentication docs: [Pylon API Authentication](https://docs.usepylon.com/pylon-docs/developer/api/authentication) .

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_pylon ``` Learn more](/guides/deployment-hosting.md)

Last updated on February 6, 2026

[Reference](/en/resources/integrations/customer-support/zendesk/reference.md)
[PagerDuty](/en/resources/integrations/customer-support/pagerduty.md)
