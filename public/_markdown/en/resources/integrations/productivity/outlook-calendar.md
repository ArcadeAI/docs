---
title: "Outlook Calendar"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Productivity & Docs](/en/resources/integrations/productivity/asana.md)
Outlook Calendar

# Outlook Calendar

Arcade Optimized

**Description:** Enable agents to create and list events in Outlook Calendar.

**Author:** Arcade

**Auth:** User authorization via the [Microsoft auth provider](/references/auth-providers/microsoft.md)

[![PyPI Version](https://img.shields.io/pypi/v/arcade_outlook_calendar)](https://pypi.org/project/arcade_outlook_calendar/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_outlook_calendar)](https://pypi.org/project/arcade_outlook_calendar/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_outlook_calendar)](https://pypi.org/project/arcade_outlook_calendar/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_outlook_calendar)](https://pypi.org/project/arcade_outlook_calendar/)

The Arcade Outlook Calendar MCP Server provides pre-built tools for working with calendar events using the Outlook API. Use these tools to:

-   Create events
-   List events
-   Get an event

## Available Tools

These tools are currently available in the Arcade Outlook Calendar MCP Sever.

Tool Name

Description

OutlookCalendar.WhoAmI

Get information about the current user and their Outlook Calendar environment.

OutlookCalendar.CreateEvent

Create an event in the authenticated user's default calendar

OutlookCalendar.GetEvent

Get an event by its ID from the user's calendar

OutlookCalendar.ListEventsInTimeRange

ist events in the user's calendar in a specific time range

If you need to perform an action that’s not listed here, you can [get in touch with us](mailto:contact@arcade.dev) to request a new tool, or [create your own tools](/guides/create-tools/tool-basics/build-mcp-server.md) with the [Google auth provider](/references/auth-providers/google.md#using-google-auth-in-custom-tools).

## OutlookCalendar.WhoAmI

Get information about the current user and their Outlook Calendar environment.



**Parameters**

This tool does not take any parameters.

* * *

## OutlookCalendar.CreateEvent

Create an event in the authenticated user’s default calendar.

Ignores timezone offsets provided in the start\_date\_time and end\_date\_time parameters. Instead, uses the user’s default calendar timezone to filter events. If the user has not set a timezone for their calendar, then the timezone will be UTC.

**Parameters**

-   **`subject`** _(string, required)_: The text of the event’s subject (title) line.
-   **`body`** _(string, required)_: The body of the event.
-   **`start_date_time`** _(datetime, required)_: The datetime of the event’s start, represented in ISO 8601 format. Timezone offset is ignored. For example, 2025-04-25T13:00:00
-   **`end_date_time`** _(datetime, required)_: The datetime of the event’s end, represented in ISO 8601 format. Timezone offset is ignored. For example, 2025-04-25T13:30:00
-   **`location`** _(string, optional)_: The location of the event.
-   **`attendee_emails`** _(list of strings, optional)_: The email addresses of the attendees of the event. Must be valid email addresses e.g., [username@domain.com](mailto:username@domain.com)
    .
-   **`is_online_meeting`** _(bool, optional)_: Whether the event is an online meeting. Defaults to False



* * *

## OutlookCalendar.GetEvent

Get an event by its ID from the user’s calendar.

**Parameters**

-   **`event_id`** _(string, required)_: The ID of the event to get.



* * *

## OutlookCalendar.ListEventsInTimeRange

List events in the user’s calendar in a specific time range.

Ignores timezone offsets provided in the start\_date\_time and end\_date\_time parameters. Instead, uses the user’s default calendar timezone to filter events. If the user has not set a timezone for their calendar, then the timezone will be UTC.

**Parameters**

-   **`start_date_time`** (datetime, required): The start date and time of the time range, represented in ISO 8601 format. Timezone offset is ignored. For example, 2025-04-24T19:00:00
-   **`end_date_time`** (datetime, required): The end date and time of the time range, represented in ISO 8601 format. Timezone offset is ignored. For example, 2025-04-24T19:30:00
-   **`limit`** (int, optional): The maximum number of events to return. Max 1000. Defaults to 10.



* * *

## Auth

The Arcade Outlook Calendar MCP Sever uses the [Microsoft auth provider](/references/auth-providers/microsoft.md) to connect to users’ Microsoft accounts.

With the Arcade Cloud Platform, there’s nothing to configure. Your users will see `Arcade` as the name of the application that’s requesting permission.

With a self-hosted installation of Arcade, you need to [configure the Microsoft auth provider](/references/auth-providers/microsoft.md#configuring-microsoft-auth) with your own Microsoft app credentials.

* * *

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_outlook_calendar ``` Learn more](/guides/deployment-hosting.md)

Last updated on January 5, 2026

[Obsidian](/en/resources/integrations/productivity/obsidian.md)
[Outlook Mail](/en/resources/integrations/productivity/outlook-mail.md)
