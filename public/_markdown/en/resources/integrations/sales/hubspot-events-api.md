---
title: "HubspotEventsApi"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Sales](/en/resources/integrations/sales/hubspot.md)
HubspotEventsApi

# HubspotEventsApi

Arcade Unoptimized

**Description:** Tools that enable LLMs to interact directly with the Hubspot Events API

**Author:** Arcade

**Auth:** User authorization

[![PyPI Version](https://img.shields.io/pypi/v/arcade_hubspot_events_api)](https://pypi.org/project/arcade_hubspot_events_api/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_hubspot_events_api)](https://pypi.org/project/arcade_hubspot_events_api/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_hubspot_events_api)](https://pypi.org/project/arcade_hubspot_events_api/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_hubspot_events_api)](https://pypi.org/project/arcade_hubspot_events_api/)

HubspotEventsApi is a [Unoptimized MCP Server](/guides/create-tools/improve/types-of-tools.md#unoptimized-tools)
: each tool mirrors one HTTP endpoint and offers LLMs a way to interact with the low-level API.



Differently from [Optimized MCP Servers](/guides/create-tools/improve/types-of-tools.md#optimized-tools)
, Unoptimized tools are heavily influenced by the original API design, which is not usually optimized for LLM usage. For this reason, we recommend thoroughly evaluating the tools with your Agents or chatbots before using it in production. [Read more](/guides/create-tools/improve/types-of-tools.md) about Optimized vs Unoptimized tools.

The Hubspot Events API MCP Server offers a comprehensive suite of tools for managing and analyzing event data within HubSpot. Users can efficiently perform actions such as:

-   Retrieve event completion data for specific contacts to track engagement.
-   List and manage custom event definitions and their properties.
-   Create, update, and delete custom events and their associated properties.
-   Send single or batch event completion data to HubSpot for streamlined reporting.

This server is designed to enhance event tracking and management capabilities within the HubSpot ecosystem.

## Available Tools

Tool Name

Description

HubspotEventsApi.RetrieveEventCompletions

Retrieve instances of event completion data.

HubspotEventsApi.ListEventTypes

Retrieve a list of visible event type names.

HubspotEventsApi.RetrieveCustomEventDefinitions

Retrieve existing custom event definitions from Hubspot.

HubspotEventsApi.CreateCustomEventDefinition

Create a custom event definition in HubSpot.

HubspotEventsApi.FetchEventDefinitionByName

Fetch details of a custom event definition by name.

HubspotEventsApi.DeleteCustomEventDefinition

Delete a custom event definition by name.

HubspotEventsApi.UpdateCustomEventDefinition

Update a specific custom event definition by name.

HubspotEventsApi.CreateEventProperty

Create a new property for an existing event definition.

HubspotEventsApi.DeleteCustomEventProperty

Delete a property from a custom event definition.

HubspotEventsApi.UpdateEventProperty

Update a property in a custom event definition.

HubspotEventsApi.SendBatchEvents

Send multiple event completions in one request.

HubspotEventsApi.SendEventData

Send data for a single event completion.

If you need to perform an action that’s not listed here, you can [get in touch with us](mailto:contact@arcade.dev) to request a new tool, or [create your own tools](/guides/create-tools/tool-basics/build-mcp-server.md).

## HubspotEventsApi.RetrieveEventCompletions



Retrieve instances of event completion data.

**Parameters**

-   **crm\_object\_id** (`integer`, optional) The ID of the CRM Object to filter event instances on. Must be used with `object_type`.
-   **crm\_object\_type** (`string`, optional) Specify the CRM object type to filter event instances (e.g., `contact`).
-   **event\_instance\_ids** (`array[string]`, optional) List of event instance IDs. Each ID must uniquely match the event instance, and any additional filters must align with the event instance’s attributes.
-   **event\_property\_filter** (`json`, optional) Specify a key-value pair to filter event completions by a property (e.g., `hs_city=portland`). Use `%20` or `+` for spaces.
-   **event\_type\_name** (`string`, optional) The specific name of the event type to retrieve data for. Available event types can be found using the event types endpoint.
-   **filter\_events\_occurred\_before** (`string`, optional) Filter for events that occurred before a specific datetime. Accepts an ISO 8601 formatted date-time string.
-   **filter\_occurred\_after\_datetime** (`string`, optional) Filter for event data occurring after a specific datetime, in ISO 8601 format (e.g., ‘2023-01-01T00:00:00Z’).
-   **max\_results\_per\_page** (`integer`, optional) The maximum number of results to display per page.
-   **paging\_before\_token** (`string`, optional) The cursor token to fetch results occurring before this point when paginating results.
-   **paging\_cursor\_token** (`string`, optional) The token for the next page of results, returned as `paging.next.after` in the previous response.
-   **sort\_direction** (`array[string]`, optional) Specify the sort direction for event instances based on the timestamp. Use `ASCENDING` or `DESCENDING`.
-   **unique\_identifier\_property** (`json`, optional) Specify a unique identifier for a CRM object. For contacts, use the email property (e.g., `email=name@domain.com`).

## HubspotEventsApi.ListEventTypes



Retrieve a list of visible event type names.

**Parameters**

This tool does not take any parameters.

## HubspotEventsApi.RetrieveCustomEventDefinitions



Retrieve existing custom event definitions from Hubspot.

**Parameters**

-   **event\_name\_search\_string** (`string`, optional) String of characters to search for in event names. This is a simple ‘contains’ search without fuzzy matching.
-   **include\_event\_properties** (`boolean`, optional) Include event properties in the response. Set to true to include all properties.
-   **paging\_cursor\_token** (`string`, optional) The token indicating the position after the last successfully read resource for continued paged results.
-   **results\_per\_page\_limit** (`integer`, optional) The maximum number of event definitions to retrieve per page.
-   **sort\_order** (`string`, optional) Specify the order to sort results. Use ‘ASC’ for ascending or ‘DESC’ for descending.

## HubspotEventsApi.CreateCustomEventDefinition



Create a custom event definition in HubSpot.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotEventsApi.FetchEventDefinitionByName



Fetch details of a custom event definition by name.

**Parameters**

-   **event\_name** (`string`, required) The internal name of the custom event to fetch its definition.

## HubspotEventsApi.DeleteCustomEventDefinition



Delete a custom event definition by name.

**Parameters**

-   **event\_name** (`string`, required) The name of the custom event definition to delete.

## HubspotEventsApi.UpdateCustomEventDefinition



Update a specific custom event definition by name.

**Parameters**

-   **internal\_event\_name** (`string`, required) The internal name of the custom event to be updated in Hubspot.
-   **event\_description** (`string`, optional) Provide a description for the custom event to be displayed as help text in HubSpot.
-   **event\_label** (`string`, optional) The human-readable label for the event, used in the HubSpot UI.

## HubspotEventsApi.CreateEventProperty



Create a new property for an existing event definition.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **custom\_event\_internal\_name** (`string`, optional) The internal name of the custom event for which the property is being created. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotEventsApi.DeleteCustomEventProperty



Delete a property from a custom event definition.

**Parameters**

-   **custom\_event\_internal\_name** (`string`, required) The internal name of the custom event from which the property will be deleted.
-   **property\_internal\_name** (`string`, required) The internal name of the property to delete from the custom event.

## HubspotEventsApi.UpdateEventProperty



Update a property in a custom event definition.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **custom\_event\_name** (`string`, optional) The internal name of the custom event to be updated. Required to identify which event’s property is being modified. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **property\_name\_to\_update** (`string`, optional) The internal name of the property to update within the event definition. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotEventsApi.SendBatchEvents



Send multiple event completions in one request.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotEventsApi.SendEventData



Send data for a single event completion.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## Reference

Below is a reference of enumerations used by some of the tools in the HubspotEventsApi MCP Server:

### ToolMode

-   **GET\_REQUEST\_SCHEMA**: `get_request_schema`
-   **EXECUTE**: `execute`

## Auth

The HubspotEventsApi MCP Server uses the Auth Provider with id `arcade-hubspot` to connect to users’ HubspotEventsApi accounts. In order to use the MCP Server, you will need to configure the `arcade-hubspot` auth provider.

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_hubspot_events_api ``` Learn more](/guides/deployment-hosting.md)

Last updated on February 6, 2026

[HubspotCrmApi](/en/resources/integrations/sales/hubspot-crm-api.md)
[HubspotMarketingApi](/en/resources/integrations/sales/hubspot-marketing-api.md)
