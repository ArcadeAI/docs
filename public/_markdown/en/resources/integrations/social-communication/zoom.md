---
title: "Zoom"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Social & Communication](/en/resources/integrations/social-communication/discord.md)
Zoom

# Zoom

Arcade Optimized

**Description:** Enable agents to interact with Zoom by retrieving meeting information and invitations.

**Author:** Arcade

**Auth:** User authorization via the [Zoom auth provider](/references/auth-providers/zoom.md)

[![PyPI Version](https://img.shields.io/pypi/v/arcade_zoom)](https://pypi.org/project/arcade_zoom/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_zoom)](https://pypi.org/project/arcade_zoom/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_zoom)](https://pypi.org/project/arcade_zoom/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_zoom)](https://pypi.org/project/arcade_zoom/)

The Arcade Zoom MCP Server provides tools for interacting with Zoom. With these tools, you can build agents and AI applications that can:

-   List upcoming meetings
-   Retrieve meeting invitation details

## Available Tools

These tools are currently available in the Arcade Zoom MCP Sever.

Tool Name

Description

Zoom.ListUpcomingMeetings

List a Zoom user's upcoming meetings within the next 24 hours.

Zoom.GetMeetingInvitation

Retrieve the invitation note for a specific Zoom meeting.

If you need to perform an action that’s not listed here, you can [get in touch with us](mailto:contact@arcade.dev) to request a new tool, or [create your own tools](/guides/create-tools/tool-basics/build-mcp-server.md) with the [Zoom auth provider](/references/auth-providers/zoom.md#using-zoom-auth-in-custom-tools).

## Zoom.ListUpcomingMeetings

List a Zoom user’s upcoming meetings within the next 24 hours.

**Parameters**

-   **`user_id`** _(string, optional)_ The user’s user ID or email address. Defaults to ‘me’ for the current user.

* * *

## Zoom.GetMeetingInvitation

Retrieve the invitation note for a specific Zoom meeting.

**Parameters**

-   **`meeting_id`** _(string, required)_ The meeting’s numeric ID (as a string).

* * *

## Auth

The Arcade Zoom MCP Sever uses the [Zoom auth provider](/references/auth-providers/zoom.md) to connect to users’ Zoom accounts.

With the Arcade Cloud Platform, there’s nothing to configure. Your users will see `Arcade` as the name of the application that’s requesting permission.

With a self-hosted installation of Arcade, you need to [configure the Zoom auth provider](/references/auth-providers/zoom.md#configuring-zoom-auth) with your own Zoom app credentials.

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_zoom ``` Learn more](/guides/deployment-hosting.md)

Last updated on February 7, 2026

[X (Twitter)](/en/resources/integrations/social-communication/x.md)
[Imgflip](/en/resources/integrations/entertainment/imgflip.md)
