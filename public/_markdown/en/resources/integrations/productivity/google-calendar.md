---
title: "Google Calendar"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Productivity & Docs](/en/resources/integrations/productivity/asana.md)
Google Calendar

# Google Calendar

Arcade Optimized

**Description:** Enable agents to interact with Google Calendar

**Author:** Arcade

**Auth:** User authorization via the [Google auth provider](/references/auth-providers/google.md)

[![PyPI Version](https://img.shields.io/pypi/v/arcade_google_calendar)](https://pypi.org/project/arcade_google_calendar/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_google_calendar)](https://pypi.org/project/arcade_google_calendar/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_google_calendar)](https://pypi.org/project/arcade_google_calendar/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_google_calendar)](https://pypi.org/project/arcade_google_calendar/)

The Arcade Google Calendar MCP Server provides a pre-built set of tools for interacting with a user’s Google Calendar. These tools make it easy to build agents and apps that can:

-   Discover calendars accessible to the user and inspect user/profile/calendar environment (ListCalendars, WhoAmI).
-   Create, update, list, and delete events (CreateEvent, UpdateEvent, ListEvents, DeleteEvent).
-   Find available meeting times across attendees within a date/time range (FindTimeSlotsWhenEveryoneIsFree).

## Available Tools

These tools are currently available in the Arcade Google Calendar MCP Sever.

Tool Name

Description

GoogleCalendar.ListCalendars

List all calendars accessible by the user.

GoogleCalendar.CreateEvent

Create a new event/meeting/sync/meetup in the specified calendar.

GoogleCalendar.ListEvents

List events from Google Calendar.

GoogleCalendar.UpdateEvent

Update an existing event in the specified calendar with new details.

GoogleCalendar.DeleteEvent

Delete an event from Google Calendar.

GoogleCalendar.FindTimeSlotsWhenEveryoneIsFree

Provides time slots when everyone is free within a given date range and time boundaries.

GoogleCalendar.WhoAmI

Get comprehensive user profile and Google Calendar environment information.

If you need to perform an action that’s not listed here, you can [get in touch with us](mailto:contact@arcade.dev) to request a new tool, or [create your own tools](/guides/create-tools/tool-basics/build-mcp-server.md) with the [Google auth provider](/references/auth-providers/google.md#using-google-auth-in-custom-tools).

Each tool requires specific Google OAuth scopes to function. You’ll find the required scopes listed in a blue info box at the end of each tool’s documentation below. For more information about configuring OAuth and tips for moving to production, see the \[Google auth provider documentation\](/references/auth-providers/google.

## Find required scopes

Select the tools you plan to use to see the OAuth scopes your application needs:

### Scope calculator

Select the tools you plan to use to see the required OAuth scopes.

ListCalendarsCreateEventListEventsUpdateEventDeleteEventFindTimeSlotsWhenEveryoneIsFreeWhoAmI

#### Required scopes

Select tools above to see required scopes

* * *

## GoogleCalendar.ListCalendars



List all calendars accessible by the user.

**Parameters**

-   **`max_results`** (`integer`, optional) The maximum number of calendars to return. Up to 250 calendars, defaults to 10.
-   **`show_deleted`** (`boolean`, optional) Whether to show deleted calendars. Defaults to False
-   **`show_hidden`** (`boolean`, optional) Whether to show hidden calendars. Defaults to False
-   **`next_page_token`** (`string`, optional) The token to retrieve the next page of calendars. Optional.

-   `https://www.googleapis.com/auth/calendar.readonly`
-   `https://www.googleapis.com/auth/calendar.events`

* * *

## GoogleCalendar.CreateEvent



Create a new event/meeting/sync/meetup in the specified calendar.

**Parameters**

-   **`summary`** (`string`, required) The title of the event
-   **`start_datetime`** (`string`, required) The datetime when the event starts in ISO 8601 format, e.g., ‘2024-12-31T15:30:00’.
-   **`end_datetime`** (`string`, required) The datetime when the event ends in ISO 8601 format, e.g., ‘2024-12-31T17:30:00’.
-   **`calendar_id`** (`string`, optional) The ID of the calendar to create the event in, usually ‘primary’.
-   **`description`** (`string`, optional) The description of the event
-   **`location`** (`string`, optional) The location of the event
-   **`visibility`** (`Enum` [EventVisibility](/resources/integrations/productivity/google-calendar/reference.md#EventVisibility)
    , optional) The visibility of the event
-   **`attendee_emails`** (`array[string]`, optional) The list of attendee emails. Must be valid email addresses e.g., [username@domain.com](mailto:username@domain.com)
    .
-   **`send_notifications_to_attendees`** (`Enum` [SendUpdatesOptions](/resources/integrations/productivity/google-calendar/reference.md#SendUpdatesOptions)
    , optional) Should attendees be notified by email of the invitation? (none, all, external\_only)
-   **`add_google_meet`** (`boolean`, optional) Whether to add a Google Meet link to the event. Defaults to False.

-   `https://www.googleapis.com/auth/calendar.readonly`
-   `https://www.googleapis.com/auth/calendar.events`

* * *

## GoogleCalendar.ListEvents



List events from the specified calendar within the given datetime range.

min\_end\_datetime serves as the lower bound (exclusive) for an event’s end time. max\_start\_datetime serves as the upper bound (exclusive) for an event’s start time.

For example: If min\_end\_datetime is set to 2024-09-15T09:00:00 and max\_start\_datetime is set to 2024-09-16T17:00:00, the function will return events that:

1.  End after 09:00 on September 15, 2024 (exclusive)
2.  Start before 17:00 on September 16, 2024 (exclusive) This means an event starting at 08:00 on September 15 and ending at 10:00 on September 15 would be included, but an event starting at 17:00 on September 16 would not be included.

**Parameters**

-   **`min_end_datetime`** (`string`, required) Filter by events that end on or after this datetime in ISO 8601 format, e.g., ‘2024-09-15T09:00:00’.
-   **`max_start_datetime`** (`string`, required) Filter by events that start before this datetime in ISO 8601 format, e.g., ‘2024-09-16T17:00:00’.
-   **`calendar_id`** (`string`, optional) The ID of the calendar to list events from
-   **`max_results`** (`integer`, optional) The maximum number of events to return

-   `https://www.googleapis.com/auth/calendar.readonly`
-   `https://www.googleapis.com/auth/calendar.events`

* * *

## GoogleCalendar.UpdateEvent



Update an existing event in the specified calendar with the provided details. Only the provided fields will be updated; others will remain unchanged.

`updated_start_datetime` and `updated_end_datetime` are independent and can be provided separately.

**Parameters**

-   **`event_id`** (`string`, required) The ID of the event to update
-   **`updated_start_datetime`** (`string`, optional) The updated datetime that the event starts in ISO 8601 format, e.g., ‘2024-12-31T15:30:00’.
-   **`updated_end_datetime`** (`string`, optional) The updated datetime that the event ends in ISO 8601 format, e.g., ‘2024-12-31T17:30:00’.
-   **`updated_calendar_id`** (`string`, optional) The updated ID of the calendar containing the event.
-   **`updated_summary`** (`string`, optional) The updated title of the event
-   **`updated_description`** (`string`, optional) The updated description of the event
-   **`updated_location`** (`string`, optional) The updated location of the event
-   **`updated_visibility`** (`Enum` [EventVisibility](/resources/integrations/productivity/google-calendar/reference.md#EventVisibility)
    , optional) The visibility of the event
-   **`attendee_emails_to_add`** (`array[string]`, optional) The list of attendee emails to add. Must be valid email addresses e.g., [username@domain.com](mailto:username@domain.com)
    .
-   **`attendee_emails_to_remove`** (`array[string]`, optional) The list of attendee emails to remove. Must be valid email addresses e.g., [username@domain.com](mailto:username@domain.com)
    .
-   **`send_notifications_to_attendees`** (`Enum` [SendUpdatesOptions](/resources/integrations/productivity/google-calendar/reference.md#SendUpdatesOptions)
    , optional) Should attendees be notified of the update? (none, all, external\_only)
-   **`update_google_meet`** (`Enum` [UpdateGoogleMeetOptions](/resources/integrations/productivity/google-calendar/reference.md#UpdateGoogleMeetOptions)
    , optional) Whether to update the Google Meet link to the event. (none, add, remove)

`https://www.googleapis.com/auth/calendar.events`

* * *

## GoogleCalendar.DeleteEvent



Delete an event from Google Calendar.

**Parameters**

-   **`event_id`** (`string`, required) The ID of the event to delete
-   **`calendar_id`** (`string`, optional) The ID of the calendar containing the event
-   **`send_updates`** (`Enum` [SendUpdatesOptions](/resources/integrations/productivity/google-calendar/reference.md#SendUpdatesOptions)
    , optional) Specifies which attendees to notify about the deletion

`https://www.googleapis.com/auth/calendar.events`

* * *

## GoogleCalendar.FindTimeSlotsWhenEveryoneIsFree



Provides time slots when everyone is free within a given date range and time boundaries.

**Parameters**

-   **`email_addresses`** (`array[string]`, optional) The list of email addresses from people in the same organization domain (apart from the currently logged in user) to search for free time slots. Defaults to None, which will return free time slots for the current user only.
-   **`start_date`** (`string`, optional) The start date to search for time slots in the format ‘YYYY-MM-DD’. Defaults to today’s date. It will search starting from this date at the time 00:00:00.
-   **`end_date`** (`string`, optional) The end date to search for time slots in the format ‘YYYY-MM-DD’. Defaults to seven days from the start date. It will search until this date at the time 23:59:59.
-   **`start_time_boundary`** (`string`, optional) Will return free slots in any given day starting from this time in the format ‘HH:MM’. Defaults to ‘08:00’, which is a usual business hour start time.
-   **`end_time_boundary`** (`string`, optional) Will return free slots in any given day until this time in the format ‘HH:MM’. Defaults to ‘18:00’, which is a usual business hour end time.

`https://www.googleapis.com/auth/calendar.readonly`

* * *

## GoogleCalendar.WhoAmI



Get comprehensive user profile and Google Calendar environment information.

**Parameters**

This tool does not take any parameters.

-   `https://www.googleapis.com/auth/calendar.readonly`
-   `https://www.googleapis.com/auth/userinfo.profile`
-   `https://www.googleapis.com/auth/userinfo.email`

* * *

## Auth

The Arcade Google Calendar MCP Sever uses the \[Google auth provider\](/references/auth-providers/google to connect to users’ Google accounts.

With the Arcade Cloud Platform, there’s nothing to configure. Your users will see `Arcade` as the name of the application that’s requesting permission.

With a self-hosted installation of Arcade, you need to [configure the Google auth provider](/references/auth-providers/google.md#configuring-google-auth) with your own Google app credentials.

* * *

## Reference

### EventVisibility

Defines the visibility of an event.

-   **`DEFAULT`**: Default visibility.
-   **`PUBLIC`**: Public visibility.
-   **`PRIVATE`**: Private visibility.
-   **`CONFIDENTIAL`**: Confidential visibility.

### SendUpdatesOptions

-   **`NONE`**: No notifications are sent.
-   **`ALL`**: Notifications are sent to all guests.
-   **`EXTERNAL_ONLY`**: Notifications are sent to non-Google Calendar guests only.

## UpdateGoogleMeetOptions

-   **`NONE`**: No action is taken.
-   **`ADD`**: Add the Google Meet link to the event.
-   **`REMOVE`**: Remove the Google Meet link from the event.

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_google_calendar ``` Learn more](/guides/deployment-hosting.md)

Last updated on February 6, 2026

[Reference](/en/resources/integrations/productivity/gmail/reference.md)
[Reference](/en/resources/integrations/productivity/google-calendar/reference.md)
