---
title: "HubspotMeetingsApi"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Sales](/en/resources/integrations/sales/hubspot.md)
HubspotMeetingsApi

# HubspotMeetingsApi

Arcade Unoptimized

**Description:** Tools that enable LLMs to interact directly with the Hubspot Meetings API

**Author:** Arcade

**Auth:** User authorization

[![PyPI Version](https://img.shields.io/pypi/v/arcade_hubspot_meetings_api)](https://pypi.org/project/arcade_hubspot_meetings_api/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_hubspot_meetings_api)](https://pypi.org/project/arcade_hubspot_meetings_api/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_hubspot_meetings_api)](https://pypi.org/project/arcade_hubspot_meetings_api/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_hubspot_meetings_api)](https://pypi.org/project/arcade_hubspot_meetings_api/)

HubspotMeetingsApi is a [Unoptimized MCP Server](/guides/create-tools/improve/types-of-tools.md#unoptimized-tools)
: each tool mirrors one HTTP endpoint and offers LLMs a way to interact with the low-level API.



Differently from [Optimized MCP Servers](/guides/create-tools/improve/types-of-tools.md#optimized-tools)
, Unoptimized tools are heavily influenced by the original API design, which is not usually optimized for LLM usage. For this reason, we recommend thoroughly evaluating the tools with your Agents or chatbots before using it in production. [Read more](/guides/create-tools/improve/types-of-tools.md) about Optimized vs Unoptimized tools.

The HubspotMeetingsApi MCP Server provides a set of tools for managing meetings through Hubspot’s scheduling system. Users can easily schedule, book, and manage meetings with the following capabilities:

-   Schedule meetings using Hubspot’s calendar integration.
-   Retrieve details necessary for setting up a meeting scheduler.
-   List available meeting scheduling links.
-   Book meetings directly through Hubspot’s platform.
-   Fetch upcoming availability times for specific meeting pages.

## Available Tools

Tool Name

Description

HubspotMeetingsApi.ScheduleMeetingHubspot

Schedule a meeting using Hubspot's calendar integration.

HubspotMeetingsApi.GetMeetingSchedulerDetails

Get necessary details for setting up a meeting scheduler.

HubspotMeetingsApi.ListMeetingSchedulingPages

Retrieve a paged list of meeting scheduling links.

HubspotMeetingsApi.BookHubspotMeeting

Book a meeting using Hubspot's scheduling feature.

HubspotMeetingsApi.GetNextMeetingAvailability

Fetch the next availability times for a meeting page.

If you need to perform an action that’s not listed here, you can [get in touch with us](mailto:contact@arcade.dev) to request a new tool, or [create your own tools](/guides/create-tools/tool-basics/build-mcp-server.md).

## HubspotMeetingsApi.ScheduleMeetingHubspot



Schedule a meeting using Hubspot’s calendar integration.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotMeetingsApi.GetMeetingSchedulerDetails



Get necessary details for setting up a meeting scheduler.

**Parameters**

-   **meeting\_slug** (`string`, required) A unique identifier for the meeting link, used to retrieve specific scheduler details.

## HubspotMeetingsApi.ListMeetingSchedulingPages



Retrieve a paged list of meeting scheduling links.

**Parameters**

This tool does not take any parameters.

## HubspotMeetingsApi.BookHubspotMeeting



Book a meeting using Hubspot’s scheduling feature.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotMeetingsApi.GetNextMeetingAvailability



Fetch the next availability times for a meeting page.

**Parameters**

-   **availability\_page\_slug** (`string`, required) The unique slug identifier for the meeting page to check available time slots.

## Reference

Below is a reference of enumerations used by some of the tools in the HubspotMeetingsApi MCP Server:

### ToolMode

-   **GET\_REQUEST\_SCHEMA**: `get_request_schema`
-   **EXECUTE**: `execute`

## Auth

The HubspotMeetingsApi MCP Server uses the Auth Provider with id `arcade-hubspot` to connect to users’ HubspotMeetingsApi accounts. In order to use the MCP Server, you will need to configure the `arcade-hubspot` auth provider.

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_hubspot_meetings_api ``` Learn more](/guides/deployment-hosting.md)

Last updated on February 7, 2026

[HubspotMarketingApi](/en/resources/integrations/sales/hubspot-marketing-api.md)
[HubspotUsersApi](/en/resources/integrations/sales/hubspot-users-api.md)
