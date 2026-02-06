---
title: "CustomerioTrackApi"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Customer Support](/en/resources/integrations/customer-support/zendesk.md)
CustomerioTrackApi

# CustomerioTrackApi

Arcade Starter

**Description:** Tools that enable LLMs to interact directly with the Customer.io Track API

**Author:** Arcade

**Auth:** API Key

[![PyPI Version](https://img.shields.io/pypi/v/arcade_customerio_track_api)](https://pypi.org/project/arcade_customerio_track_api/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_customerio_track_api)](https://pypi.org/project/arcade_customerio_track_api/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_customerio_track_api)](https://pypi.org/project/arcade_customerio_track_api/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_customerio_track_api)](https://pypi.org/project/arcade_customerio_track_api/)

CustomerioTrackApi is a [Starter MCP Server](/guides/create-tools/improve/types-of-tools.md#starter-tools)
: each tool mirrors one HTTP endpoint and offers LLMs a way to interact with the low-level API.



Differently from [Optimized MCP Servers](/guides/create-tools/improve/types-of-tools.md#optimized-tools)
, Starter tools are heavily influenced by the original API design, which is not usually optimized for LLM usage. For this reason, we recommend thoroughly evaluating the tools with your Agents or chatbots before using it in production. [Read more](/guides/create-tools/improve/types-of-tools.md) about Optimized vs Starter tools.

The CustomerioTrackApi MCP Server offers a comprehensive suite of tools for managing customer data and interactions within Customer.io.

## Available Tools

Tool Name

Description

CustomerioTrackApi.GetTrackApiRegion

Retrieve the region and URL for Track API credentials.

CustomerioTrackApi.UpdateOrAddPerson

Add or update a person's information in the database.

CustomerioTrackApi.DeleteCustomer

Delete a customer and all associated information.

CustomerioTrackApi.AddDeviceToCustomerProfile

Add or update a device for a customer profile.

CustomerioTrackApi.RemoveCustomerDevice

Remove a device from a customer's profile.

CustomerioTrackApi.SuppressCustomerProfile

Permanently delete and suppress a customer profile.

CustomerioTrackApi.UnsuppressCustomerProfile

Unsuppress a customer profile in Customer.io.

CustomerioTrackApi.GlobalUnsubscribeUser

Set a user's global unsubscribe status in Customer.io.

CustomerioTrackApi.SendCustomerEvent

Send an event associated with a customer by identifier.

CustomerioTrackApi.TrackAnonymousEvent

Log anonymous events for unidentified users.

CustomerioTrackApi.SubmitFormResponse

Submit and record form responses with Customer.io.

CustomerioTrackApi.MergeCustomerProfiles

Merge two customer profiles into one primary profile.

CustomerioTrackApi.ReportCustomMetrics

Report metrics from non-native Customer.io channels.

CustomerioTrackApi.AddPeopleToSegment

Add people to a manual segment by ID.

CustomerioTrackApi.RemoveUserFromSegment

Remove users from a manual segment by ID.

CustomerioTrackApi.ManageEntity

Create, update, or delete entities and manage relationships.

CustomerioTrackApi.BatchProcessRequests

Batch process requests for people and object entities.

If you need to perform an action that’s not listed here, you can [get in touch with us](mailto:contact@arcade.dev) to request a new tool, or [create your own tools](/guides/create-tools/tool-basics/build-mcp-server.md).

## CustomerioTrackApi.GetTrackApiRegion



Retrieve the region and URL for Track API credentials.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `CUSTOMERIO_SITE_ID`, `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioTrackApi.UpdateOrAddPerson



Add or update a person’s information in the database.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **person\_identifier** (`string`, optional) The unique value used to identify a person, such as an ID, email, or `cio_id` (with `cio_` prefix for updates). Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_SITE_ID`, `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioTrackApi.DeleteCustomer



Delete a customer and all associated information.

**Parameters**

-   **customer\_identifier** (`string`, required) The unique identifier for a person, which can be an ID, email, or ‘cio_id’. Use ‘cio_’ prefix for ‘cio\_id’.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_SITE_ID`, `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioTrackApi.AddDeviceToCustomerProfile



Add or update a device for a customer profile.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **unique\_person\_identifier** (`string`, optional) A unique identifier for a person, such as `id`, `email`, or `cio_id` prefixed with `cio_`. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_SITE_ID`, `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioTrackApi.RemoveCustomerDevice



Remove a device from a customer’s profile.

**Parameters**

-   **customer\_identifier** (`string`, required) Unique identifier for a person in the system. Can be `id`, `email`, or `cio_id` (prefixed with `cio_`).
-   **device\_unique\_id** (`string`, required) The ID representing the device to be removed from the customer’s profile.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_SITE_ID`, `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioTrackApi.SuppressCustomerProfile



Permanently delete and suppress a customer profile.

**Parameters**

-   **unique\_person\_identifier** (`string`, required) The unique identifier for a customer, which can be an ID, email, or ‘cio_id’ (prefixed with ‘cio_’).

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_SITE_ID`, `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioTrackApi.UnsuppressCustomerProfile



Unsuppress a customer profile in Customer.io.

**Parameters**

-   **customer\_identifier** (`string`, required) The unique identifier for a customer, which can be an ID, email, or prefixed cio\_id, based on workspace settings.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_SITE_ID`, `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioTrackApi.GlobalUnsubscribeUser



Set a user’s global unsubscribe status in Customer.io.

**Parameters**

-   **delivery\_id\_for\_unsubscription** (`string`, required) The unique identifier of the delivery associated with the unsubscription request. This links the unsubscribe action to a specific email or message delivery.
-   **set\_unsubscribed\_attribute** (`boolean`, optional) If true, sets a person’s `unsubscribed` attribute to true, associated with a specific delivery.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_SITE_ID`, `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioTrackApi.SendCustomerEvent



Send an event associated with a customer by identifier.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **customer\_identifier** (`string`, optional) A unique identifier for a person, such as `id`, `email`, or `cio_id`, depending on workspace settings. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_SITE_ID`, `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioTrackApi.TrackAnonymousEvent



Log anonymous events for unidentified users.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_SITE_ID`, `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioTrackApi.SubmitFormResponse



Submit and record form responses with Customer.io.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **form\_identifier** (`string`, optional) The unique identifier for the form. If unrecognized, a new form connection is created. Choose a meaningful or traceable value. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_SITE_ID`, `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioTrackApi.MergeCustomerProfiles



Merge two customer profiles into one primary profile.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_SITE_ID`, `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioTrackApi.ReportCustomMetrics



Report metrics from non-native Customer.io channels.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_SITE_ID`, `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioTrackApi.AddPeopleToSegment



Add people to a manual segment by ID.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **segment\_identifier** (`integer`, optional) The unique identifier for a manual segment. This can be found on its page in the dashboard or via the App API. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **identifier\_type** (`string`, optional) Specifies the type of identifiers in the `ids` array, such as `id`, `email`, or `cio_id`. Defaults to `id`. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_SITE_ID`, `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioTrackApi.RemoveUserFromSegment



Remove users from a manual segment by ID.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **segment\_identifier** (`integer`, optional) The unique identifier for the segment. Found on the segment’s page in the dashboard under ‘Usage’. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **identification\_type** (`string`, optional) The type of identifiers used for the users to be removed. Options are ‘id’, ‘email’, or ‘cio\_id’. Defaults to ‘id’ if not specified. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_SITE_ID`, `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioTrackApi.ManageEntity



Create, update, or delete entities and manage relationships.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_SITE_ID`, `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioTrackApi.BatchProcessRequests



Batch process requests for people and object entities.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_SITE_ID`, `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## Reference

Below is a reference of enumerations used by some of the tools in the CustomerioTrackApi MCP Server:

### ToolMode

-   **GET\_REQUEST\_SCHEMA**: `get_request_schema`
-   **EXECUTE**: `execute`

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_customerio_track_api ``` Learn more](/guides/deployment-hosting.md)

Last updated on January 5, 2026

[CustomerioPipelinesApi](/en/resources/integrations/customer-support/customerio-pipelines-api.md)
[FreshserviceApi](/en/resources/integrations/customer-support/freshservice-api.md)
