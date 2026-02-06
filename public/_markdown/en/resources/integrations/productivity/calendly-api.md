---
title: "CalendlyApi"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Productivity & Docs](/en/resources/integrations/productivity/asana.md)
CalendlyApi

# CalendlyApi

Arcade Unoptimized

**Description:** Tools that enable LLMs to interact directly with the calendly API.

**Author:** Arcade

**Auth:** User authorization

[![PyPI Version](https://img.shields.io/pypi/v/arcade_calendly_api)](https://pypi.org/project/arcade_calendly_api/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_calendly_api)](https://pypi.org/project/arcade_calendly_api/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_calendly_api)](https://pypi.org/project/arcade_calendly_api/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_calendly_api)](https://pypi.org/project/arcade_calendly_api/)

CalendlyApi is a [Unoptimized MCP Server](/guides/create-tools/improve/types-of-tools.md#unoptimized-tools)
: each tool mirrors one HTTP endpoint and offers LLMs a way to interact with the low-level API.



Differently from [Optimized MCP Servers](/guides/create-tools/improve/types-of-tools.md#optimized-tools)
, Unoptimized tools are heavily influenced by the original API design, which is not usually optimized for LLM usage. For this reason, we recommend thoroughly evaluating the tools with your Agents or chatbots before using it in production. [Read more](/guides/create-tools/improve/types-of-tools.md) about Optimized vs Unoptimized tools.

The CalendlyApi MCP Server offers a comprehensive suite of tools for managing scheduling and event-related tasks within Calendly. Users can easily build agents and applications that can:

## Available Tools

Tool Name

Description

CalendlyApi.ListEventInvitees

Retrieve a list of invitees for a given event.

CalendlyApi.ListScheduledEvents

Retrieve a list of scheduled events from Calendly.

CalendlyApi.ListEventTypes

Fetches event types for a specified user or organization.

CalendlyApi.CreateEventType

Create a new one-on-one event type in Calendly.

CalendlyApi.GetCalendlyUserInfo

Retrieve user information from Calendly.

CalendlyApi.GetUserAccountInfo

Retrieve basic information about the current Calendly user.

CalendlyApi.GetEventInviteeInfo

Fetch information about a specific event invitee.

CalendlyApi.CreateEventInvitee

Create a new event invitee on Calendly.

CalendlyApi.GetEventDetails

Retrieve information about a specified scheduled event.

CalendlyApi.GetEventTypeInfo

Retrieve information about a specified event type on Calendly.

CalendlyApi.UpdateEventType

Update details of an existing event type with Calendly.

CalendlyApi.ListOrganizationInvitations

Retrieve organization invitations sent to members.

CalendlyApi.InviteUserToOrganization

Invite a user to join an organization.

CalendlyApi.RevokeOrganizationInvitation

Revoke an organization invitation in Calendly.

CalendlyApi.GetOrganizationInvitation

Fetches details of an organization's invitation.

CalendlyApi.GetOrganizationMembershipInfo

Retrieve details about a user's organization membership in Calendly.

CalendlyApi.RemoveUserFromOrganization

Remove a user from an organization with admin rights.

CalendlyApi.GetOrganizationMemberships

Retrieve organization memberships and related details.

CalendlyApi.CreateWebhookSubscription

Create a webhook subscription for events in Calendly.

CalendlyApi.ListWebhookSubscriptions

Retrieve webhook subscriptions for an organization or user.

CalendlyApi.GetWebhookSubscription

Retrieve details of a specific webhook subscription.

CalendlyApi.DeleteWebhookSubscription

Delete a webhook subscription on Calendly.

CalendlyApi.CreateSchedulingLink

Creates a single-use scheduling link for appointments.

CalendlyApi.DeleteInviteeData

Request removal of invitee data from all booked events.

CalendlyApi.GetInviteeNoShowDetails

Fetch details of a specified invitee no-show.

CalendlyApi.UndoInviteeNoShowStatus

Undo the no-show status for a Calendly invitee.

CalendlyApi.MarkInviteeNoShow

Mark an invitee as a no show in Calendly.

CalendlyApi.GetGroupInfo

Retrieve information about a specified group in Calendly.

CalendlyApi.ListGroupRelationships

Retrieve a list of group relationships for a given owner.

CalendlyApi.GetGroupRelationshipByUuid

Retrieve group relationship details using a UUID.

CalendlyApi.GetOrganizationDetails

Retrieve details of a specified organization using UUID.

CalendlyApi.CancelScheduledEvent

Cancels a specified scheduled event on Calendly.

CalendlyApi.ListRoutingForms

Retrieve routing forms for a specified organization.

CalendlyApi.GetRoutingForm

Retrieve details of a specified routing form.

CalendlyApi.ListRoutingFormSubmissions

Get a list of Routing Form Submissions for a specified form.

CalendlyApi.GetRoutingFormSubmission

Retrieve a specified Routing Form Submission by UUID.

CalendlyApi.ListAvailableEventTimes

Retrieve available times for an event type within a date range.

CalendlyApi.ListActivityLogEntries

Fetch a list of activity log entries.

CalendlyApi.CreateCustomShareLink

Create a shareable link for a customized event.

CalendlyApi.ListUserBusyTimes

Retrieve user's scheduled events within a specific date range.

CalendlyApi.GetUserAvailabilitySchedules

Fetch a user's availability schedules.

CalendlyApi.GetUserAvailabilitySchedule

Retrieve a user's availability schedule using their UUID.

CalendlyApi.DeleteScheduledEventsData

Delete scheduled events data within a past time range.

CalendlyApi.FetchEventTypeHosts

Fetches a list of event type hosts from Calendly.

CalendlyApi.CreateOneOffEvent

Create a one-off event type in Calendly.

CalendlyApi.GetSampleWebhookData

Retrieve sample webhook data for testing integrations.

CalendlyApi.FetchOutgoingCommunications

Retrieve outgoing SMS and email communications.

CalendlyApi.GetGroupList

Retrieve a list of groups from Calendly.

CalendlyApi.GetUserLocationInfo

Retrieve configured location details for a specific user.

CalendlyApi.GetEventAvailability

Retrieve availability for a specific event type.

CalendlyApi.UpdateEventAvailability

Update an event type availability schedule.

If you need to perform an action that’s not listed here, you can [get in touch with us](mailto:contact@arcade.dev) to request a new tool, or [create your own tools](/guides/create-tools/tool-basics/build-mcp-server.md).

## CalendlyApi.ListEventInvitees



Retrieve a list of invitees for a given event.

**Parameters**

-   **event\_uuid** (`string`, required) The unique identifier for the event whose invitees are being retrieved.
-   **filter\_by\_email** (`string`, optional) Specify an email address to filter invitees by email.
-   **invitee\_status** (`string`, optional) Filter invitees by their status: ‘active’ for current invitees or ‘canceled’ for those who have canceled.
-   **number\_of\_invitees\_to\_return** (`number`, optional) Specifies the number of invitee rows to return in the response.
-   **pagination\_token** (`string`, optional) A token to retrieve the next or previous page of invitees. Useful for paginated responses.
-   **sort\_order\_by\_created\_at** (`string`, optional) Specify the order of results based on the creation date as ‘asc’ for ascending or ‘desc’ for descending.

## CalendlyApi.ListScheduledEvents



Retrieve a list of scheduled events from Calendly.

**Parameters**

-   **event\_status** (`string`, optional) Indicate if the event is ‘active’ or ‘canceled’.
-   **events\_sort\_order** (`string`, optional) Specify sorting order for events. Use ‘start\_time:asc’ or ‘start\_time:desc’.
-   **group\_uri** (`string`, optional) URI of the group to fetch scheduled events for. Requires admin/owner or group admin privilege.
-   **invitee\_email** (`string`, optional) Email address of the invitee to filter and return related scheduled events.
-   **max\_start\_time\_utc** (`string`, optional) Include events with start times prior to this UTC time. Format: YYYY-MM-DDTHH:MM:SS.ssssssZ
-   **min\_start\_time** (`string`, optional) Include events starting after this UTC time. Format: “2020-01-02T03:04:05.678123Z”.
-   **number\_of\_rows\_to\_return** (`number`, optional) Specify the number of event entries to retrieve.
-   **organization\_uri** (`string`, optional) URI of the organization to retrieve scheduled events for. Requires admin/owner privileges.
-   **pagination\_token** (`string`, optional) Token for navigating to the next or previous set of scheduled events.
-   **user\_uri** (`string`, optional) URI identifying the user for whom to return scheduled events. Use alone for personal events or with ‘organization’ for specific user events within an organization.

## CalendlyApi.ListEventTypes



Fetches event types for a specified user or organization.

**Parameters**

-   **number\_of\_event\_types\_to\_return** (`number`, optional) The number of event types to return. Specify the desired count of returned rows.
-   **only\_admin\_managed** (`boolean`, optional) Return only admin managed event types if true, exclude them if false, or include all if omitted.
-   **organization\_uri** (`string`, optional) URI to view available personal, team, and organization event types.
-   **pagination\_token** (`string`, optional) Token to retrieve the next or previous set of event types in pagination.
-   **return\_active\_event\_types\_only** (`boolean`, optional) Set to true to return only active event types, false for only inactive, or omit to include all event types.
-   **sort\_event\_types\_by** (`string`, optional) Specify field and direction to order results. Use `field:asc` or `field:desc`. Fields: name, position, created\_at, updated\_at.
-   **user\_availability\_schedule\_filter** (`string`, optional) Filters event types by the given primary availability schedule when used with the ‘user’ parameter.
-   **user\_uri** (`string`, optional) The user’s URI to view associated personal, team, and organization event types.

## CalendlyApi.CreateEventType



Create a new one-on-one event type in Calendly.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## CalendlyApi.GetCalendlyUserInfo



Retrieve user information from Calendly.

**Parameters**

-   **user\_unique\_identifier** (`string`, required) The unique identifier of the user. Use ‘me’ to reference the caller.

## CalendlyApi.GetUserAccountInfo



Retrieve basic information about the current Calendly user.

**Parameters**

This tool does not take any parameters.

## CalendlyApi.GetEventInviteeInfo



Fetch information about a specific event invitee.

**Parameters**

-   **event\_unique\_identifier** (`string`, required) The unique identifier for the specific Calendly event. Use this to specify which event’s invitee details to retrieve.
-   **invitee\_unique\_identifier** (`string`, required) The unique identifier of the invitee for a specific event.

## CalendlyApi.CreateEventInvitee



Create a new event invitee on Calendly.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## CalendlyApi.GetEventDetails



Retrieve information about a specified scheduled event.

**Parameters**

-   **event\_unique\_identifier** (`string`, required) The unique identifier for the event to retrieve details.

## CalendlyApi.GetEventTypeInfo



Retrieve information about a specified event type on Calendly.

**Parameters**

-   **event\_type\_uuid** (`string`, required) The unique identifier (UUID) for the event type to be retrieved.

## CalendlyApi.UpdateEventType



Update details of an existing event type with Calendly.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **event\_type\_uuid** (`string`, optional) The unique identifier for the event type to be updated. This is essential for specifying which one-on-one event type you intend to modify. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## CalendlyApi.ListOrganizationInvitations



Retrieve organization invitations sent to members.

**Parameters**

-   **organization\_unique\_identifier** (`string`, required) The unique identifier for the organization to retrieve invitations for.
-   **filter\_by\_email** (`string`, optional) Email address to filter the results of organization invitations.
-   **filter\_by\_status** (`string`, optional) Filter results by invitation status: ‘pending’, ‘accepted’, or ‘declined’.
-   **pagination\_token** (`string`, optional) Token for fetching the next or previous set of organization invitations.
-   **rows\_to\_return** (`number`, optional) Specify the number of organization invitation records to retrieve in the request.
-   **sort\_order** (`string`, optional) Specify the field and direction (ascending or descending) for sorting results. Format: `field:asc` or `field:desc`. Use a comma-separated list for multiple criteria.

## CalendlyApi.InviteUserToOrganization



Invite a user to join an organization.

**Parameters**

-   **organization\_unique\_identifier** (`string`, required) The unique identifier for the organization to which the user is being invited.
-   **user\_email** (`string`, required) The email address of the user to be invited to the organization.

## CalendlyApi.RevokeOrganizationInvitation



Revoke an organization invitation in Calendly.

**Parameters**

-   **invitation\_unique\_identifier** (`string`, required) The unique identifier for the organization invitation to be revoked.
-   **organization\_unique\_identifier** (`string`, required) The organization’s unique identifier required to revoke the invitation.

## CalendlyApi.GetOrganizationInvitation



Fetches details of an organization’s invitation.

**Parameters**

-   **organization\_invitation\_uuid** (`string`, required) The unique identifier of the organization’s invitation. Provide this to retrieve specific invitation details.
-   **organization\_unique\_id** (`string`, required) The unique identifier for the organization.

## CalendlyApi.GetOrganizationMembershipInfo



Retrieve details about a user’s organization membership in Calendly.

**Parameters**

-   **organization\_membership\_uuid** (`string`, required) The unique identifier for the organization’s membership to retrieve details for a user.

## CalendlyApi.RemoveUserFromOrganization



Remove a user from an organization with admin rights.

**Parameters**

-   **organization\_membership\_unique\_id** (`string`, required) The unique identifier for the organization membership to be removed.

## CalendlyApi.GetOrganizationMemberships



Retrieve organization memberships and related details.

**Parameters**

-   **filter\_by\_email** (`string`, optional) A specific email address to filter the organization memberships by. Only memberships associated with this email will be returned.
-   **filter\_by\_organization** (`string`, optional) Filter the results by organization. Provide the organization’s unique identifier or name to retrieve specific memberships.
-   **filter\_by\_role** (`string`, optional) Filter the results by role. Options: ‘owner’, ‘admin’, ‘user’.
-   **filter\_by\_user** (`string`, optional) Filter the results by a specific user. Provide the user’s identifier to narrow the search.
-   **next\_page\_token** (`string`, optional) Token used to retrieve the next or previous set of results for paginated data.
-   **number\_of\_rows\_to\_return** (`number`, optional) Specify the number of rows to return in the response.

## CalendlyApi.CreateWebhookSubscription



Create a webhook subscription for events in Calendly.

**Parameters**

-   **callback\_url** (`string`, required) The endpoint URL to receive POST requests for subscribed events in Calendly.
-   **event\_subscriptions** (`array[string]`, required) List of user events to subscribe to. Examples include ‘invitee.created’, ‘invitee.canceled’, etc.
-   **organization\_reference** (`string`, required) The unique reference identifier for the organization associated with the webhook.
-   **webhook\_subscription\_scope** (`string`, required) Specifies the scope of the webhook subscription: “organization”, “user”, or “group”.
-   **group\_reference** (`string`, optional) The unique reference to the group that the webhook will be tied to.
-   **user\_reference** (`string`, optional) The unique reference or ID of the user for whom the webhook will be tied.
-   **webhook\_signing\_key** (`string`, optional) Optional secret key shared between your application and Calendly for verifying webhook signatures. Useful for ensuring webhook messages’ authenticity.

## CalendlyApi.ListWebhookSubscriptions



Retrieve webhook subscriptions for an organization or user.

**Parameters**

-   **filter\_scope** (`string`, required) Filter the list by organization, user, or group. Acceptable values are ‘organization’, ‘user’, or ‘group’.
-   **organization\_id** (`string`, required) The ID of the organization that owns the subscriptions being returned. This field is always required.
-   **filter\_by\_group** (`string`, optional) Optional; filters the results by group when scope is set to ‘group’.
-   **filter\_by\_user** (`string`, optional) Filter results by user when ‘scope’ is set to ‘user’.
-   **number\_of\_rows\_to\_return** (`number`, optional) Specify the number of rows to be returned in the result set.
-   **pagination\_token** (`string`, optional) The token to retrieve the next or previous portion of the collection.
-   **sort\_by\_field\_and\_direction** (`string`, optional) Specify the field and direction to order results. Use `created_at:asc` or `created_at:desc`.

## CalendlyApi.GetWebhookSubscription



Retrieve details of a specific webhook subscription.

**Parameters**

-   **webhook\_identifier** (`string`, required) The unique identifier of the webhook subscription to retrieve.

## CalendlyApi.DeleteWebhookSubscription



Delete a webhook subscription on Calendly.

**Parameters**

-   **webhook\_uuid** (`string`, required) The unique identifier for the webhook subscription to be deleted. This is required to specify which subscription will be removed.

## CalendlyApi.CreateSchedulingLink



Creates a single-use scheduling link for appointments.

**Parameters**

-   **maximum\_event\_count** (`number`, required) The maximum number of events that can be scheduled using this link. Currently, only ‘1’ is supported.
-   **resource\_owner\_link** (`string`, required) A link to the resource owning this scheduling link, typically an Event Type URL.
-   **resource\_type** (`string`, required) Resource type for the scheduling link. This is always ‘EventType’.

## CalendlyApi.DeleteInviteeData



Request removal of invitee data from all booked events.

**Parameters**

-   **invitee\_email\_list** (`array[string]`, required) A list of invitee emails to remove data for from all booked events. Each entry should be a valid email address.

## CalendlyApi.GetInviteeNoShowDetails



Fetch details of a specified invitee no-show.

**Parameters**

-   **invitee\_uuid** (`string`, required) The unique identifier for the invitee whose no-show information is being requested.

## CalendlyApi.UndoInviteeNoShowStatus



Undo the no-show status for a Calendly invitee.

**Parameters**

-   **invitee\_unique\_id** (`string`, required) The unique identifier for the invitee whose no-show status is to be undone.

## CalendlyApi.MarkInviteeNoShow



Mark an invitee as a no show in Calendly.

**Parameters**

-   **invitee\_id** (`string`, optional) The unique identifier for the invitee to be marked as a no show. This is required to specify which invitee did not attend.

## CalendlyApi.GetGroupInfo



Retrieve information about a specified group in Calendly.

**Parameters**

-   **group\_unique\_identifier** (`string`, required) A unique identifier for the group whose information is to be retrieved from Calendly.

## CalendlyApi.ListGroupRelationships



Retrieve a list of group relationships for a given owner.

**Parameters**

-   **filter\_by\_group** (`string`, optional) Filter results by a specific group using a group identifier.
-   **filter\_by\_organization** (`string`, optional) Filter results by organization. Provide the organization ID or URI to narrow down the list of group relationships.
-   **filter\_by\_owner\_uri** (`string`, optional) The URI to filter results by owner, either an Organization Membership URI or Organization Invitation URI.
-   **number\_of\_rows** (`number`, optional) Specify the number of rows to return in the response.
-   **pagination\_token** (`string`, optional) Token to navigate to the next or previous portion of the collection.

## CalendlyApi.GetGroupRelationshipByUuid



Retrieve group relationship details using a UUID.

**Parameters**

-   **group\_relationship\_uuid** (`string`, required) The unique identifier (UUID) of the group relationship to retrieve details for. Use this to specify which relationship to fetch.

## CalendlyApi.GetOrganizationDetails



Retrieve details of a specified organization using UUID.

**Parameters**

-   **organization\_uuid** (`string`, required) The unique identifier for the organization to retrieve details.

## CalendlyApi.CancelScheduledEvent



Cancels a specified scheduled event on Calendly.

**Parameters**

-   **event\_unique\_identifier** (`string`, required) The unique identifier for the event to be canceled.
-   **cancellation\_reason** (`string`, optional) The reason for canceling the event. Provide a clear and concise explanation.

## CalendlyApi.ListRoutingForms



Retrieve routing forms for a specified organization.

**Parameters**

-   **organization\_uri** (`string`, required) The URI of the organization to view its routing forms. It should be a valid string representing the organization’s endpoint.
-   **number\_of\_rows** (`number`, optional) The number of routing form entries to return for the request.
-   **pagination\_token** (`string`, optional) Token for fetching the next or previous portion of the routing forms collection.
-   **sort\_order** (`string`, optional) Specify the order of results using field and direction. Format: `created_at:asc` or `created_at:desc`. Use comma for multiple fields.

## CalendlyApi.GetRoutingForm



Retrieve details of a specified routing form.

**Parameters**

-   **routing\_form\_uuid** (`string`, required) A unique identifier for the routing form to be retrieved.

## CalendlyApi.ListRoutingFormSubmissions



Get a list of Routing Form Submissions for a specified form.

**Parameters**

-   **routing\_form\_uri** (`string`, required) The URI of the routing form to view its submissions. This specifies which form’s submissions to retrieve.
-   **number\_of\_rows\_to\_return** (`nu∫mber`, optional) Specify the number of routing form submissions to return.
-   **pagination\_token** (`string`, optional) Token for retrieving the next or previous set of form submissions.
-   **sort\_order** (`string`, optional) Specify field and direction to sort results. Format: `created_at:asc` or `created_at:desc`.b\*\*∫\*\*

## CalendlyApi.GetRoutingFormSubmission



Retrieve a specified Routing Form Submission by UUID.

**Parameters**

-   **submission\_uuid** (`string`, required) Unique identifier for the routing form submission to be retrieved.

## CalendlyApi.ListAvailableEventTimes



Retrieve available times for an event type within a date range.

**Parameters**

-   **availability\_end\_time** (`string`, required) End time for the availability range, must be after the start time.
-   **availability\_start\_time** (`string`, required) The start time for the availability range. Must be a future date, not in the past.
-   **event\_type\_uri** (`string`, required) The URI associated with the event type to retrieve its available times.

## CalendlyApi.ListActivityLogEntries



Fetch a list of activity log entries.

**Parameters**

-   **organization\_uri** (`string`, required) URI of the organization to filter activity log entries.
-   **actions** (`array[string]`, optional) Specify one or more actions associated with the log entries. Accepts an array of strings.
-   **entry\_categories** (`array[string]`, optional) Specify the categories of log entries to filter the results. This is an array of strings, each representing a category.
-   **filter\_by\_search\_term** (`string`, optional) Filters entries using supported operators: `|`, `+`, `"`, `-`, `()`, `*`. For example, `this | that` or `(email) + (signup)`.
-   **include\_entries\_after** (`string`, optional) Include entries that occurred after this time. Use format: “YYYY-MM-DDTHH:MM:SS.sssZ” (UTC).
-   **max\_occurred\_at\_time** (`string`, optional) Include entries that occurred prior to this UTC time in the format “YYYY-MM-DDTHH:MM:SS.SSSZ”.
-   **number\_of\_rows\_to\_return** (`integer`, optional) Specifies the number of activity log entries to return in the response.
-   **pagination\_token** (`string`, optional) Token to get the next portion of the activity log collection.
-   **sort\_order** (`array[string]`, optional) Specify the field and direction to sort results. Format: `field:asc` or `field:desc`.
-   **user\_associated\_uris** (`array[string]`, optional) Return entries from the user(s) associated with the provided URIs. This should be an array of strings representing the URIs of users.

## CalendlyApi.CreateCustomShareLink



Create a shareable link for a customized event.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## CalendlyApi.ListUserBusyTimes



Retrieve user’s scheduled events within a specific date range.

**Parameters**

-   **availability\_start\_time** (`string`, required) Start time for the availability range. The date must not be in the past.
-   **end\_time** (`string`, required) End time for the requested availability range, must be after the start\_time.
-   **user\_uri** (`string`, required) The URI associated with the user to retrieve busy times for.

## CalendlyApi.GetUserAvailabilitySchedules



Fetch a user’s availability schedules.

**Parameters**

-   **user\_uri\_reference** (`string`, required) A URI reference to the specified user whose availability schedules are to be retrieved.

## CalendlyApi.GetUserAvailabilitySchedule



Retrieve a user’s availability schedule using their UUID.

**Parameters**

-   **user\_uuid** (`string`, required) The UUID of the availability schedule you want to retrieve.

## CalendlyApi.DeleteScheduledEventsData



Delete scheduled events data within a past time range.

**Parameters**

-   **deletion\_start\_time\_utc** (`string`, required) The UTC timestamp to start deleting scheduled events data. Must be in the past and not older than 24 months.
-   **end\_time\_utc** (`string`, required) The UTC timestamp marking the end of the time range for data deletion, in the past, no greater than 24 months ago.

## CalendlyApi.FetchEventTypeHosts



Fetches a list of event type hosts from Calendly.

**Parameters**

-   **event\_type\_uri** (`string`, required) The URI associated with the event type to identify the hosts.
-   **number\_of\_rows\_to\_return** (`number`, optional) Specify the number of rows to fetch from the list of event type hosts. This determines the size of the dataset returned.
-   **pagination\_token** (`string`, optional) Token for fetching the next or previous portion of the event type host list.

## CalendlyApi.CreateOneOffEvent



Create a one-off event type in Calendly.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## CalendlyApi.GetSampleWebhookData



Retrieve sample webhook data for testing integrations.

**Parameters**

-   **organization\_identifier** (`string`, required) The unique identifier for the organization. It specifies which organization the sample webhook data belongs to.
-   **webhook\_event\_type** (`string`, required) Specify the type of webhook event to simulate, such as ‘invitee.created’ or ‘invitee.canceled’.
-   **webhook\_scope** (`string`, required) Specify the scope for the sample webhook data. Options are ‘user’, ‘organization’, or ‘group’.
-   **user\_identifier** (`string`, optional) The unique identifier for a user in Calendly whose webhook data you want to test.
-   **webhook\_event\_group** (`string`, optional) Specify the group for the webhook event to categorize and filter data. Typically used for organizing related webhooks.

## CalendlyApi.FetchOutgoingCommunications



Retrieve outgoing SMS and email communications.

**Parameters**

-   **organization\_uri** (`string`, required) Return outgoing communications from the organization associated with this URI. This should be a valid URI string.
-   **created\_before** (`string`, optional) Include outgoing communications created before this time in UTC format (e.g., “2020-01-02T03:04:05.678Z”).
-   **number\_of\_records\_to\_return** (`integer`, optional) The maximum number of outgoing communications records to retrieve.
-   **pagination\_token** (`string`, optional) Token for fetching the next set of outgoing communications.
-   **start\_time\_utc** (`string`, optional) Include communications created after this UTC time (e.g. “2020-01-02T03:04:05.678Z”).

## CalendlyApi.GetGroupList



Retrieve a list of groups from Calendly.

**Parameters**

-   **organization\_uri** (`string`, required) URI for the organization to return associated groups from Calendly.
-   **number\_of\_rows** (`number`, optional) Specify the number of rows (groups) to return from the query. Used to limit results.
-   **pagination\_token** (`string`, optional) Token for retrieving the next or previous set of groups in the list.

## CalendlyApi.GetUserLocationInfo



Retrieve configured location details for a specific user.

**Parameters**

-   **user\_uri** (`string`, required) The URI identifying the specific user to retrieve location information for.

## CalendlyApi.GetEventAvailability



Retrieve availability for a specific event type.

**Parameters**

-   **event\_type\_uri** (`string`, required) The URI associated with the specific event type to retrieve availability.

## CalendlyApi.UpdateEventAvailability



Update an event type availability schedule.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **event\_type\_uri** (`string`, optional) URI of the event type to update the availability schedule for. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## Reference

Below is a reference of enumerations used by some of the tools in the CalendlyApi MCP Server:

### ToolMode

-   **GET\_REQUEST\_SCHEMA**: `get_request_schema`
-   **EXECUTE**: `execute`

* * *

## Auth

The Arcade Calendly MCP Server uses the [Calendly auth provider](/references/auth-providers/calendly.md) to connect to users’ Calendly accounts.

With the Arcade Cloud Platform, there’s nothing to configure. Your users will see `Arcade` as the name of the application that’s requesting permission.

With a self-hosted installation of Arcade, you need to [configure the Calendly auth provider](/references/auth-providers/calendly.md#configuring-calendly-auth) with your own Calendly app credentials.

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_calendly_api ``` Learn more](/guides/deployment-hosting.md)

Last updated on February 6, 2026

[BoxApi](/en/resources/integrations/productivity/box-api.md)
[ClickupApi](/en/resources/integrations/productivity/clickup-api.md)
