---
title: "LumaApi"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Productivity & Docs](/en/resources/integrations/productivity/asana.md)
LumaApi

# LumaApi

Arcade Unoptimized

**Description:** Tools that enable LLMs to interact directly with the Luma API.

**Author:** Arcade

**Auth:** API Key

[![PyPI Version](https://img.shields.io/pypi/v/arcade_luma_api)](https://pypi.org/project/arcade_luma_api/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_luma_api)](https://pypi.org/project/arcade_luma_api/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_luma_api)](https://pypi.org/project/arcade_luma_api/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_luma_api)](https://pypi.org/project/arcade_luma_api/)

LumaApi is a [Unoptimized MCP Server](/guides/create-tools/improve/types-of-tools.md#unoptimized-tools)
: each tool mirrors one HTTP endpoint and offers LLMs a way to interact with the low-level API.



Differently from [Optimized MCP Servers](/guides/create-tools/improve/types-of-tools.md#optimized-tools)
, Unoptimized tools are heavily influenced by the original API design, which is not usually optimized for LLM usage. For this reason, we recommend thoroughly evaluating the tools with your Agents or chatbots before using it in production. [Read more](/guides/create-tools/improve/types-of-tools.md) about Optimized vs Unoptimized tools.

The LumaApi MCP Server offers a comprehensive suite of tools for managing events and calendars within the Luma platform. Users can efficiently perform actions such as:

-   Create, update, and manage events, including scheduling and ticketing.
-   Retrieve detailed information about events, guests, and users.
-   Manage guest statuses and send invitations via email and SMS.
-   Handle coupons and membership tiers for events and calendars.
-   Import contacts and apply tags to organize attendees effectively.

This server is designed to streamline event management and enhance user engagement through its robust API capabilities.

## Authentication

The Arcade Luma API MCP Server requires one environment variable to authenticate with the [Luma API](https://docs.luma.com/reference/getting-started-with-your-api) :

-   `LUMA_API_KEY`

**How to obtain your credentials:**

1.  Navigate to your [Luma dashboard](https://lu.ma/)
     
2.  Click on your profile icon and go to **Settings**
3.  Navigate to **API** or **Developer Settings**
4.  Click **Generate API Key** or **Create New Key**
5.  Copy the API key and store it securely

The Luma API requires a **Luma Plus** subscription. Be careful with your API key since it provides full access to your Luma account.

For more details, see the [Luma API Getting Started guide](https://docs.luma.com/reference/getting-started-with-your-api) .

## Available Tools

Tool Name

Description

LumaApi.GetEventAdminInfo

Retrieve admin information for an accessible event.

LumaApi.ListLumaCalendarEvents

Retrieve all events managed by your Luma Calendar.

LumaApi.GetEventGuest

Retrieve event guest details using their ID.

LumaApi.GetEventGuests

Retrieve registered or invited guests for an event.

LumaApi.GetUserInfo

Retrieve the user's personal information and profile details.

LumaApi.ListPersonTags

Retrieve a list of tags associated with persons.

LumaApi.LumaEntityLookup

Lookup an entity on Luma by its slug.

LumaApi.CheckEventExistence

Determine if an event exists on the calendar.

LumaApi.ListPeople

Retrieve a list of people from the calendar.

LumaApi.ListEventCoupons

Retrieve all coupons created for an event.

LumaApi.ListCalendarCoupons

Retrieve all coupons for a calendar.

LumaApi.ListEventTicketTypes

Retrieve a list of all ticket types for an event.

LumaApi.GetTicketTypeById

Retrieve event ticket type details by ID.

LumaApi.ListMembershipTiers

Retrieve available membership tiers for the calendar.

LumaApi.CreateEvent

Creates and schedules a new event.

LumaApi.UpdateEvent

Update event details using Luma's API.

LumaApi.UpdateGuestStatus

Updates the status of an event guest.

LumaApi.SendGuestEventInvite

Send event invitations to guests via email and SMS.

LumaApi.AddEventGuests

Add guests to an event with default or custom tickets.

LumaApi.AddEventHost

Add a host to an event in Luma.

LumaApi.CreateEventCoupon

Create a non-editable coupon for event registration.

LumaApi.ModifyCoupon

Update a coupon's details in the system.

LumaApi.GenerateEventCoupon

Create a coupon for calendar-managed events.

LumaApi.UpdateCoupon

Updates a coupon in the calendar.

LumaApi.ImportPeopleToCalendar

Import people to your calendar from contact lists.

LumaApi.CreatePersonTag

Create a new person tag in the calendar system.

LumaApi.UpdatePersonTag

Updates a tag for a person in the calendar system.

LumaApi.DeletePersonTag

Deletes a person tag from the calendar.

LumaApi.ApplyTagToCalendarMembers

Apply a tag to existing calendar members.

LumaApi.RemoveTagFromCalendarMembers

Remove a tag from existing calendar members.

LumaApi.AddEventToLumaCalendar

Add an existing event to the Luma calendar.

LumaApi.GenerateUploadUrl

Generates a URL for image upload.

LumaApi.CreateEventTicketType

Create a new ticket type for an event.

LumaApi.UpdateTicketTypeConfiguration

Update an existing ticket type configuration.

LumaApi.SoftDeleteTicketType

Soft delete a ticket type if certain conditions are met.

LumaApi.AddUserToMembershipTier

Add a user to a specified free membership tier.

LumaApi.UpdateMembershipStatus

Update a member's membership status and handle payments.

If you need to perform an action that’s not listed here, you can [get in touch with us](mailto:contact@arcade.dev) to request a new tool, or [create your own tools](/guides/create-tools/tool-basics/build-mcp-server.md).

## LumaApi.GetEventAdminInfo



Retrieve admin information for an accessible event.

**Parameters**

-   **event\_api\_id** (`string`, optional) Event API ID, starting with ‘evt-’, used to identify the event.
-   **event\_id** (`string`, optional) The unique identifier for the event, usually starts with ‘evt-’.

**Secrets**

This tool requires the following secrets: `LUMA_API_KEY`. You can obtain this from your [Luma dashboard](https://lu.ma/) . See the [Authentication section](#authentication) above for detailed instructions and the [Luma API documentation](https://docs.luma.com/reference/getting-started-with-your-api)  for more information.

## LumaApi.ListLumaCalendarEvents



Retrieve all events managed by your Luma Calendar.

**Parameters**

-   **event\_sort\_direction** (`string`, optional) Defines the order of events. Use ‘asc’ or ‘desc’ for ascending or descending. Options ‘asc nulls last’ and ‘desc nulls last’ place nulls at the end.
-   **filter\_events\_before** (`string`, optional) Filter events to show only those happening before this ISO 8601 Datetime. Example: 2022-10-19T03:27:13.673Z
-   **number\_of\_items\_to\_return** (`number`, optional) The number of events to return. The server enforces a maximum limit.
-   **pagination\_cursor** (`string`, optional) Use the `next_cursor` value from a previous request to continue listing events.
-   **sort\_by\_column** (`string`, optional) Specify the column to sort events by. For now, ‘start\_at’ is the available option.
-   **start\_date\_after** (`string`, optional) Specify the starting datetime to filter events after this timestamp in ISO 8601 format (e.g., 2022-10-19T03:27:13.673Z).

**Secrets**

This tool requires the following secrets: `LUMA_API_KEY`. You can obtain this from your [Luma dashboard](https://lu.ma/) . See the [Authentication section](#authentication) above for detailed instructions and the [Luma API documentation](https://docs.luma.com/reference/getting-started-with-your-api)  for more information.

## LumaApi.GetEventGuest



Retrieve event guest details using their ID.

**Parameters**

-   **event\_api\_id** (`string`, optional) Provide the unique API ID for the event to retrieve guest details.
-   **event\_identifier** (`string`, optional) The ID of the event, typically starting with ‘evt-’. Used to identify the specific event.
-   **guest\_api\_id** (`string`, optional) The unique API ID of the guest, distinct from the user ID. This is used for identifying the guest within the system.
-   **guest\_email** (`string`, optional) The email address of the event guest to look up.
-   **guest\_identifier** (`string`, optional) Identifier for looking up the guest, such as guest ID (gst-), ticket key, guest key (g-), or the user’s email.
-   **proxy\_key** (`string`, optional) Value of the `pk` parameter from the check-in QR code used to identify the guest.

**Secrets**

This tool requires the following secrets: `LUMA_API_KEY`. You can obtain this from your [Luma dashboard](https://lu.ma/) . See the [Authentication section](#authentication) above for detailed instructions and the [Luma API documentation](https://docs.luma.com/reference/getting-started-with-your-api)  for more information.

## LumaApi.GetEventGuests



Retrieve registered or invited guests for an event.

**Parameters**

-   **event\_api\_id** (`string`, optional) The unique ID of the event, typically starting with ‘evt-’.
-   **event\_id** (`string`, optional) The unique identifier for the event, usually starts with ‘evt-’.
-   **guest\_approval\_status** (`string`, optional) Filter guests by their approval status. Options: ‘approved’, ‘session’, ‘pending\_approval’, ‘invited’, ‘declined’, ‘waitlist’.
-   **guest\_sort\_column** (`string`, optional) The column to sort the guest list by. Options are ‘name’, ‘email’, ‘created\_at’, ‘registered\_at’, or ‘checked\_in\_at’.
-   **items\_to\_return** (`number`, optional) Specify the number of guest entries to return. The server enforces a maximum limit.
-   **next\_cursor\_value** (`string`, optional) Value of `next_cursor` from a previous request to paginate through results.
-   **sort\_order** (`string`, optional) Specify the order for sorting the list of guests. Acceptable values are ‘asc’, ‘desc’, ‘asc nulls last’, or ‘desc nulls last’.

**Secrets**

This tool requires the following secrets: `LUMA_API_KEY`. You can obtain this from your [Luma dashboard](https://lu.ma/) . See the [Authentication section](#authentication) above for detailed instructions and the [Luma API documentation](https://docs.luma.com/reference/getting-started-with-your-api)  for more information.

## LumaApi.GetUserInfo



Retrieve the user’s personal information and profile details.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `LUMA_API_KEY`. You can obtain this from your [Luma dashboard](https://lu.ma/) . See the [Authentication section](#authentication) above for detailed instructions and the [Luma API documentation](https://docs.luma.com/reference/getting-started-with-your-api)  for more information.

## LumaApi.ListPersonTags



Retrieve a list of tags associated with persons.

**Parameters**

-   **items\_to\_return** (`number`, optional) Specify the number of tags to return. The server will impose a maximum limit.
-   **pagination\_cursor** (`string`, optional) Use the `next_cursor` value from a previous response to paginate results.
-   **sort\_by\_column** (`string`, optional) Specifies the column to sort the tags by. Options are ‘name’, ‘color’, or ‘created\_at’.
-   **sorting\_direction** (`string`, optional) Specifies the order direction of the person tags. Choose from ‘asc’, ‘desc’, ‘asc nulls last’, or ‘desc nulls last’.

**Secrets**

This tool requires the following secrets: `LUMA_API_KEY`. You can obtain this from your [Luma dashboard](https://lu.ma/) . See the [Authentication section](#authentication) above for detailed instructions and the [Luma API documentation](https://docs.luma.com/reference/getting-started-with-your-api)  for more information.

## LumaApi.LumaEntityLookup



Lookup an entity on Luma by its slug.

**Parameters**

-   **entity\_slug** (`string`, required) The unique string identifier for the entity to be looked up in Luma.

**Secrets**

This tool requires the following secrets: `LUMA_API_KEY`. You can obtain this from your [Luma dashboard](https://lu.ma/) . See the [Authentication section](#authentication) above for detailed instructions and the [Luma API documentation](https://docs.luma.com/reference/getting-started-with-your-api)  for more information.

## LumaApi.CheckEventExistence



Determine if an event exists on the calendar.

**Parameters**

-   **calendar\_platform\_type** (`string`, optional) Specifies the source platform of the event, either ‘external’ or ‘luma’.
-   **event\_details\_url** (`string`, optional) The URL of the event page to check if it exists in the calendar.
-   **event\_identifier** (`string`, optional) A unique string identifier for the event to check its existence on the calendar.

**Secrets**

This tool requires the following secrets: `LUMA_API_KEY`. You can obtain this from your [Luma dashboard](https://lu.ma/) . See the [Authentication section](#authentication) above for detailed instructions and the [Luma API documentation](https://docs.luma.com/reference/getting-started-with-your-api)  for more information.

## LumaApi.ListPeople



Retrieve a list of people from the calendar.

**Parameters**

-   **calendar\_membership\_status** (`string`, optional) Specify the membership status for filtering calendar members. This is only relevant for calendar memberships.
-   **calendar\_membership\_tier\_api\_id** (`string`, optional) A unique identifier for the calendar membership tier to filter people.
-   **calendar\_tier\_id** (`string`, optional) Unique identifier for the calendar membership tier to filter people.
-   **filter\_by\_tags** (`string`, optional) Comma-separated list of tag names or IDs to filter people with specified tags.
-   **items\_to\_return** (`number`, optional) Specify the number of items to return in the response. The server may enforce a maximum limit.
-   **pagination\_next\_cursor** (`string`, optional) Provide the `next_cursor` value from a previous request to continue pagination.
-   **search\_query** (`string`, optional) Search for people using names or emails.
-   **sort\_by\_column** (`string`, optional) Sort the list of people by a specified column: created\_at, event\_checked\_in\_count, event\_approved\_count, name, or revenue\_usd\_cents.
-   **sort\_order** (`string`, optional) Specifies the order for sorting results: ‘asc’, ‘desc’, ‘asc nulls last’, or ‘desc nulls last’.

**Secrets**

This tool requires the following secrets: `LUMA_API_KEY`. You can obtain this from your [Luma dashboard](https://lu.ma/) . See the [Authentication section](#authentication) above for detailed instructions and the [Luma API documentation](https://docs.luma.com/reference/getting-started-with-your-api)  for more information.

## LumaApi.ListEventCoupons



Retrieve all coupons created for an event.

**Parameters**

-   **event\_api\_id** (`string`, optional) The unique identifier for the event, typically starting with ‘evt-’. Required to list coupons for the specified event.
-   **event\_identifier** (`string`, optional) Event ID, typically starting with ‘evt-’. It identifies the specific event for which to list coupons.
-   **item\_return\_limit** (`number`, optional) Specifies the number of items to return in the response, up to the server’s maximum allowed.
-   **pagination\_cursor** (`string`, optional) Value of `next_cursor` from a previous request to continue pagination.

**Secrets**

This tool requires the following secrets: `LUMA_API_KEY`. You can obtain this from your [Luma dashboard](https://lu.ma/) . See the [Authentication section](#authentication) above for detailed instructions and the [Luma API documentation](https://docs.luma.com/reference/getting-started-with-your-api)  for more information.

## LumaApi.ListCalendarCoupons



Retrieve all coupons for a calendar.

**Parameters**

-   **items\_to\_return** (`number`, optional) The number of coupon items to retrieve. The server enforces a maximum limit.
-   **pagination\_cursor** (`string`, optional) Provide the `next_cursor` value obtained from a prior request to paginate through results.

**Secrets**

This tool requires the following secrets: `LUMA_API_KEY`. You can obtain this from your [Luma dashboard](https://lu.ma/) . See the [Authentication section](#authentication) above for detailed instructions and the [Luma API documentation](https://docs.luma.com/reference/getting-started-with-your-api)  for more information.

## LumaApi.ListEventTicketTypes



Retrieve a list of all ticket types for an event.

**Parameters**

-   **event\_id** (`string`, optional) The unique identifier for an event, typically starting with ‘evt-’.
-   **event\_identifier** (`string`, optional) The unique identifier for the event, usually starting with evt-.
-   **include\_hidden\_ticket\_types** (`string`, optional) Set to true to include hidden ticket types in the response list.

**Secrets**

This tool requires the following secrets: `LUMA_API_KEY`. You can obtain this from your [Luma dashboard](https://lu.ma/) . See the [Authentication section](#authentication) above for detailed instructions and the [Luma API documentation](https://docs.luma.com/reference/getting-started-with-your-api)  for more information.

## LumaApi.GetTicketTypeById



Retrieve event ticket type details by ID.

**Parameters**

-   **event\_ticket\_type\_api\_id** (`string`, optional) The unique API ID for the event ticket type. It must be provided to retrieve ticket information.
-   **ticket\_type\_id** (`string`, optional) The ID of the ticket type to retrieve, typically starts with ‘ett-’.

**Secrets**

This tool requires the following secrets: `LUMA_API_KEY`. You can obtain this from your [Luma dashboard](https://lu.ma/) . See the [Authentication section](#authentication) above for detailed instructions and the [Luma API documentation](https://docs.luma.com/reference/getting-started-with-your-api)  for more information.

## LumaApi.ListMembershipTiers



Retrieve available membership tiers for the calendar.

**Parameters**

-   **items\_to\_return\_count** (`number`, optional) Specify the number of membership tiers to return. The server may enforce a maximum limit.
-   **previous\_request\_next\_cursor** (`string`, optional) The `next_cursor` value from a prior request for fetching subsequent data.

**Secrets**

This tool requires the following secrets: `LUMA_API_KEY`. You can obtain this from your [Luma dashboard](https://lu.ma/) . See the [Authentication section](#authentication) above for detailed instructions and the [Luma API documentation](https://docs.luma.com/reference/getting-started-with-your-api)  for more information.

## LumaApi.CreateEvent



Creates and schedules a new event.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `LUMA_API_KEY`. You can obtain this from your [Luma dashboard](https://lu.ma/) . See the [Authentication section](#authentication) above for detailed instructions and the [Luma API documentation](https://docs.luma.com/reference/getting-started-with-your-api)  for more information.

## LumaApi.UpdateEvent



Update event details using Luma’s API.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `LUMA_API_KEY`. You can obtain this from your [Luma dashboard](https://lu.ma/) . See the [Authentication section](#authentication) above for detailed instructions and the [Luma API documentation](https://docs.luma.com/reference/getting-started-with-your-api)  for more information.

## LumaApi.UpdateGuestStatus



Updates the status of an event guest.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `LUMA_API_KEY`. You can obtain this from your [Luma dashboard](https://lu.ma/) . See the [Authentication section](#authentication) above for detailed instructions and the [Luma API documentation](https://docs.luma.com/reference/getting-started-with-your-api)  for more information.

## LumaApi.SendGuestEventInvite



Send event invitations to guests via email and SMS.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `LUMA_API_KEY`. You can obtain this from your [Luma dashboard](https://lu.ma/) . See the [Authentication section](#authentication) above for detailed instructions and the [Luma API documentation](https://docs.luma.com/reference/getting-started-with-your-api)  for more information.

## LumaApi.AddEventGuests



Add guests to an event with default or custom tickets.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `LUMA_API_KEY`. You can obtain this from your [Luma dashboard](https://lu.ma/) . See the [Authentication section](#authentication) above for detailed instructions and the [Luma API documentation](https://docs.luma.com/reference/getting-started-with-your-api)  for more information.

## LumaApi.AddEventHost



Add a host to an event in Luma.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `LUMA_API_KEY`. You can obtain this from your [Luma dashboard](https://lu.ma/) . See the [Authentication section](#authentication) above for detailed instructions and the [Luma API documentation](https://docs.luma.com/reference/getting-started-with-your-api)  for more information.

## LumaApi.CreateEventCoupon



Create a non-editable coupon for event registration.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `LUMA_API_KEY`. You can obtain this from your [Luma dashboard](https://lu.ma/) . See the [Authentication section](#authentication) above for detailed instructions and the [Luma API documentation](https://docs.luma.com/reference/getting-started-with-your-api)  for more information.

## LumaApi.ModifyCoupon



Update a coupon’s details in the system.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `LUMA_API_KEY`. You can obtain this from your [Luma dashboard](https://lu.ma/) . See the [Authentication section](#authentication) above for detailed instructions and the [Luma API documentation](https://docs.luma.com/reference/getting-started-with-your-api)  for more information.

## LumaApi.GenerateEventCoupon



Create a coupon for calendar-managed events.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `LUMA_API_KEY`. You can obtain this from your [Luma dashboard](https://lu.ma/) . See the [Authentication section](#authentication) above for detailed instructions and the [Luma API documentation](https://docs.luma.com/reference/getting-started-with-your-api)  for more information.

## LumaApi.UpdateCoupon



Updates a coupon in the calendar.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `LUMA_API_KEY`. You can obtain this from your [Luma dashboard](https://lu.ma/) . See the [Authentication section](#authentication) above for detailed instructions and the [Luma API documentation](https://docs.luma.com/reference/getting-started-with-your-api)  for more information.

## LumaApi.ImportPeopleToCalendar



Import people to your calendar from contact lists.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `LUMA_API_KEY`. You can obtain this from your [Luma dashboard](https://lu.ma/) . See the [Authentication section](#authentication) above for detailed instructions and the [Luma API documentation](https://docs.luma.com/reference/getting-started-with-your-api)  for more information.

## LumaApi.CreatePersonTag



Create a new person tag in the calendar system.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `LUMA_API_KEY`. You can obtain this from your [Luma dashboard](https://lu.ma/) . See the [Authentication section](#authentication) above for detailed instructions and the [Luma API documentation](https://docs.luma.com/reference/getting-started-with-your-api)  for more information.

## LumaApi.UpdatePersonTag



Updates a tag for a person in the calendar system.

**Parameters**

-   **person\_tag\_api\_id** (`string`, required) The unique identifier for the tag to be updated. It is required to identify which tag needs modification.
-   **tag\_color** (`string`, optional) Specify the color to be assigned to the person’s tag. Choose from: cranberry, barney, red, green, blue, purple, yellow, orange.
-   **tag\_name** (`string`, optional) The new name for the tag to be updated. It should be descriptive and relevant to the person’s role or status.

**Secrets**

This tool requires the following secrets: `LUMA_API_KEY`. You can obtain this from your [Luma dashboard](https://lu.ma/) . See the [Authentication section](#authentication) above for detailed instructions and the [Luma API documentation](https://docs.luma.com/reference/getting-started-with-your-api)  for more information.

## LumaApi.DeletePersonTag



Deletes a person tag from the calendar.

**Parameters**

-   **tag\_identifier** (`string`, required) The unique identifier of the person tag to be deleted. It should match the tag’s API ID.

**Secrets**

This tool requires the following secrets: `LUMA_API_KEY`. You can obtain this from your [Luma dashboard](https://lu.ma/) . See the [Authentication section](#authentication) above for detailed instructions and the [Luma API documentation](https://docs.luma.com/reference/getting-started-with-your-api)  for more information.

## LumaApi.ApplyTagToCalendarMembers



Apply a tag to existing calendar members.

**Parameters**

-   **tag\_identifier** (`string`, required) The Tag API ID (e.g., ‘tag-123’) or tag name to be applied to calendar members.
-   **email\_addresses** (`array[string]`, optional) Array of email addresses to apply the tag to existing calendar members.
-   **user\_api\_ids\_to\_tag** (`array[string]`, optional) Array of user API IDs to apply the tag to. Each ID corresponds to a calendar member.

**Secrets**

This tool requires the following secrets: `LUMA_API_KEY`. You can obtain this from your [Luma dashboard](https://lu.ma/) . See the [Authentication section](#authentication) above for detailed instructions and the [Luma API documentation](https://docs.luma.com/reference/getting-started-with-your-api)  for more information.

## LumaApi.RemoveTagFromCalendarMembers



Remove a tag from existing calendar members.

**Parameters**

-   **tag\_identifier** (`string`, required) The ID or name of the tag to remove from calendar members, such as ‘tag-123’ or ‘Birthday’.
-   **email\_addresses\_to\_remove\_tag** (`array[string]`, optional) Array of email addresses to remove the tag from the calendar members.
-   **user\_api\_ids\_to\_remove\_tag** (`array[string]`, optional) Array of user API IDs from which to remove the specified tag.

**Secrets**

This tool requires the following secrets: `LUMA_API_KEY`. You can obtain this from your [Luma dashboard](https://lu.ma/) . See the [Authentication section](#authentication) above for detailed instructions and the [Luma API documentation](https://docs.luma.com/reference/getting-started-with-your-api)  for more information.

## LumaApi.AddEventToLumaCalendar



Add an existing event to the Luma calendar.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `LUMA_API_KEY`. You can obtain this from your [Luma dashboard](https://lu.ma/) . See the [Authentication section](#authentication) above for detailed instructions and the [Luma API documentation](https://docs.luma.com/reference/getting-started-with-your-api)  for more information.

## LumaApi.GenerateUploadUrl



Generates a URL for image upload.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `LUMA_API_KEY`. You can obtain this from your [Luma dashboard](https://lu.ma/) . See the [Authentication section](#authentication) above for detailed instructions and the [Luma API documentation](https://docs.luma.com/reference/getting-started-with-your-api)  for more information.

## LumaApi.CreateEventTicketType



Create a new ticket type for an event.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `LUMA_API_KEY`. You can obtain this from your [Luma dashboard](https://lu.ma/) . See the [Authentication section](#authentication) above for detailed instructions and the [Luma API documentation](https://docs.luma.com/reference/getting-started-with-your-api)  for more information.

## LumaApi.UpdateTicketTypeConfiguration



Update an existing ticket type configuration.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `LUMA_API_KEY`. You can obtain this from your [Luma dashboard](https://lu.ma/) . See the [Authentication section](#authentication) above for detailed instructions and the [Luma API documentation](https://docs.luma.com/reference/getting-started-with-your-api)  for more information.

## LumaApi.SoftDeleteTicketType



Soft delete a ticket type if certain conditions are met.

**Parameters**

-   **event\_ticket\_type\_id** (`string`, required) The ID of the event ticket type to be soft deleted. Ensure no tickets are sold, and it’s not the last visible type before deletion.

**Secrets**

This tool requires the following secrets: `LUMA_API_KEY`. You can obtain this from your [Luma dashboard](https://lu.ma/) . See the [Authentication section](#authentication) above for detailed instructions and the [Luma API documentation](https://docs.luma.com/reference/getting-started-with-your-api)  for more information.

## LumaApi.AddUserToMembershipTier



Add a user to a specified free membership tier.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `LUMA_API_KEY`. You can obtain this from your [Luma dashboard](https://lu.ma/) . See the [Authentication section](#authentication) above for detailed instructions and the [Luma API documentation](https://docs.luma.com/reference/getting-started-with-your-api)  for more information.

## LumaApi.UpdateMembershipStatus



Update a member’s membership status and handle payments.

**Parameters**

-   **membership\_status** (`string`, required) Set the membership status to either ‘approved’ to capture payment or ‘declined’ to cancel the subscription.
-   **user\_identifier** (`string`, required) User ID (e.g., ‘usr-xxx’) or email address to identify the member whose status is to be updated.

**Secrets**

This tool requires the following secrets: `LUMA_API_KEY`. You can obtain this from your [Luma dashboard](https://lu.ma/) . See the [Authentication section](#authentication) above for detailed instructions and the [Luma API documentation](https://docs.luma.com/reference/getting-started-with-your-api)  for more information.

## Reference

Below is a reference of enumerations used by some of the tools in the LumaApi MCP Server:

### ToolMode

-   **GET\_REQUEST\_SCHEMA**: `get_request_schema`
-   **EXECUTE**: `execute`

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_luma_api ``` Learn more](/guides/deployment-hosting.md)

Last updated on February 6, 2026

[FigmaApi](/en/resources/integrations/productivity/figma-api.md)
[MiroApi](/en/resources/integrations/productivity/miro-api.md)
