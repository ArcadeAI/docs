---
title: "Audit Logs"
description: "Arcade.dev now captures every administrative action across the platform automatically — who did it, how, what changed, and when."
---
Audit Logs

# Audit Logs for AI Agent Platforms

TL;DR: Arcade.dev captures every administrative action across the runtime automatically — who did it, how, what changed, and when. There’s nothing to enable. Audit logs are on by default, with a filterable dashboard and a REST API for pulling data into your own systems.

![Audit Log Dashboard](/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Faudit-log.c34da40c.png&w=3840&q=75)

If you want audit events outside the dashboard, there’s a REST API. You can pull logs programmatically to feed into your existing SIEM, compliance tooling, or internal reporting.

## Example

Fetch the 10 most recent audit logs for your organization, filtered to creation events:

```bash
curl -s "https://cloud.arcade.dev/api/v1/orgs/{org_id}/audit_logs?action=AUDIT_ACTION_CREATED&limit=10" \
  -H "Authorization: Bearer $ARCADE_API_KEY"
```

```json
{
  "code": 200,
  "msg": "Request successful",
  "data": {
    "items": [
      {
        "id": "d290f1ee-6c54-4b01-90e6-d701748f0851",
        "event_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
        "timestamp": "2026-02-24T12:34:56.789Z",
        "action": "AUDIT_ACTION_CREATED",
        "source": "AUDIT_SOURCE_API",
        "display_name": "jane@example.com",
        "organization_id": "550e8400-e29b-41d4-a716-446655440000",
        "principal_type": "ACCOUNT",
        "resource_type": "RESOURCE_TYPE_API_KEY",
        "resource_display": "prod-key-1"
      }
    ],
    "next_cursor": "MjAyNi0wMi0yNFQxMjo...",
    "has_more": true
  }
}
```

To fetch the next page, pass the cursor:

```bash
curl -s "https://cloud.arcade.dev/api/v1/orgs/{org_id}/audit_logs?action=AUDIT_ACTION_CREATED&limit=10&cursor=MjAyNi0wMi0yNFQxMjo..." \
  -H "Authorization: Bearer $ARCADE_API_KEY"
```

## Endpoints overview

Endpoint

Method

Description

Auth

`/api/v1/orgs/{org_id}/audit_logs`

GET

List audit logs for an organization

User (API key/JWT)

`/api/v1/orgs/{org_id}/projects/{project_id}/audit_logs`

GET

List audit logs for a project

User (API key/JWT)

## List Organization Audit Logs

PLAINTEXT

```
GET /api/v1/orgs/{org_id}/audit_logs
```

Returns a paginated, cursor-based list of audit log entries scoped to an organization. Results are ordered newest-first.

### Authentication

Requires a valid user identity ( or bearer token). The authenticated principal must be a member of the organization.

### Rate limit

100 requests per 60 seconds (per IP).

### Path parameters

Parameter

Type

Required

Description

`org_id`

UUID

Yes

Organization ID

### Query parameters

Parameter

Type

Required

Default

Constraints

Description

`action`

string

No

`null`

—

Filter by action (for example `AUDIT_ACTION_CREATED`)

`source`

string

No

`null`

—

Filter by source (for example `AUDIT_SOURCE_API`)

`resource_type`

string

No

`null`

—

Filter by resource type

`cursor`

string

No

`null`

—

Pagination cursor from a previous response

`limit`

int

No

`50`

`1` — `100`

Number of results per page

### Response

**Status:** `200 OK`

```json
{
  "code": 200,
  "msg": "Request successful",
  "data": {
    "items": [
      {
        "id": "d290f1ee-6c54-4b01-90e6-d701748f0851",
        "event_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
        "timestamp": "2026-02-24T12:34:56.789Z",
        "client_ip": "203.0.113.42",
        "action": "AUDIT_ACTION_CREATED",
        "source": "AUDIT_SOURCE_DASHBOARD",
        "display_name": "jane@example.com",
        "customer_id": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
        "organization_id": "550e8400-e29b-41d4-a716-446655440000",
        "project_id": "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
        "principal_id": "usr_abc123",
        "user_id": "user-456",
        "principal_type": "ACCOUNT",
        "resource_type": "RESOURCE_TYPE_PROJECT",
        "resource_id": "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
        "resource_display": "My Project",
        "data": { "key": "value" },
        "created_time": "2026-02-24T12:34:57.000Z"
      }
    ],
    "next_cursor": "MjAyNi0wMi0yNFQxMjo...",
    "has_more": true
  }
}
```

### Pagination

Pagination is cursor-based. When `has_more` is `true`, pass the `next_cursor` value as the `cursor` query parameter in the next request. The cursor is an opaque base64-encoded string; do not construct or modify it.

* * *

## List Project Audit Logs

PLAINTEXT

```
GET /api/v1/orgs/{org_id}/projects/{project_id}/audit_logs
```

Identical to the organization endpoint, but additionally scoped to a single . The authenticated principal must have access to both the organization and the project.

### Authentication

Requires a valid user identity (API key or bearer token). The principal must be a member of both the organization and the .

### Rate limit

100 requests per 60 seconds (per IP).

### Path parameters

Parameter

Type

Required

Description

`org_id`

UUID

Yes

Organization ID

`project_id`

UUID

Yes

Project ID

### Query parameters

Same as [List Organization Audit Logs](#query-parameters).

### Response

Same schema as [List Organization Audit Logs](#response). The `project_id` filter is applied automatically from the path.

* * *

## Enums

### AuditAction

Value

Number

Description

`AUDIT_ACTION_UNSPECIFIED`

0

Default / unknown

`AUDIT_ACTION_CREATED`

1

Resource was created

`AUDIT_ACTION_UPDATED`

2

Resource was updated

`AUDIT_ACTION_DELETED`

3

Resource was deleted

`AUDIT_ACTION_DISABLED`

4

Resource was disabled

### AuditSource

Value

Number

Description

`AUDIT_SOURCE_UNSPECIFIED`

0

Default / unknown

`AUDIT_SOURCE_API`

1

API call

`AUDIT_SOURCE_DASHBOARD`

2

Dashboard action

`AUDIT_SOURCE_CLI`

3

CLI invocation

`AUDIT_SOURCE_SDK`

4

SDK call

`AUDIT_SOURCE_SYSTEM`

5

Internal system operation

### ResourceType

Value

Number

Description

`RESOURCE_TYPE_UNSPECIFIED`

0

Default / unknown

`RESOURCE_TYPE_API_KEY`

1

API key

`RESOURCE_TYPE_CUSTOMER`

2

Customer

`RESOURCE_TYPE_INVITATION`

3

Invitation

`RESOURCE_TYPE_ORGANIZATION`

4

Organization

`RESOURCE_TYPE_PROJECT`

5

Project

`RESOURCE_TYPE_PROJECT_MEMBER`

6

Project member

`RESOURCE_TYPE_USER`

7

User

`RESOURCE_TYPE_WORKER`

8

Worker

`RESOURCE_TYPE_GATEWAY`

9

Gateway

`RESOURCE_TYPE_PLUGIN`

10

Plugin

`RESOURCE_TYPE_HOOK`

11

Hook

`RESOURCE_TYPE_MODEL`

12

Model

`RESOURCE_TYPE_AUTH_PROVIDER`

13

Auth provider

`RESOURCE_TYPE_SECRET`

14

Secret

`RESOURCE_TYPE_USER_CONNECTION`

15

User connection

`RESOURCE_TYPE_DEPLOYMENT`

16

Deployment

`RESOURCE_TYPE_SETTING`

17

Setting

* * *

## Response item schema

Each item in the `items` array of a list response has the following shape:

Field

Type

Description

`id`

UUID

Internal database ID

`event_id`

UUID

Event identifier

`timestamp`

datetime (ISO)

When the event occurred

`client_ip`

string / null

Originating client IP

`action`

string

Action name (see AuditAction)

`source`

string

Source name (see AuditSource)

`display_name`

string

Human-readable caller identity

`customer_id`

UUID / null

Customer ID

`organization_id`

UUID

Organization ID

`project_id`

UUID / null

Project ID

`principal_id`

string

Principal ID

`user_id`

string / null

User ID

`principal_type`

string

Principal type (for example `ACCOUNT`)

`resource_type`

string / null

Resource type (see ResourceType)

`resource_id`

string / null

Resource identifier

`resource_display`

string / null

Human-readable resource name

`data`

object / null

Structured event payload

`created_time`

datetime (ISO)

When the record was persisted

* * *

## Failure handling

-   Standard error envelope with `code` and `msg` fields. Common failures are `401` (unauthenticated), `403` (not a member of the org/), and `429` (rate limited).

Last updated on January 5, 2026

[Arcade Registry Early Access](/en/resources/registry-early-access.md)
[Contextual Access](/en/guides/contextual-access.md)
