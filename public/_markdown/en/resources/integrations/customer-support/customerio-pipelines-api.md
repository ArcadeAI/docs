---
title: "CustomerioPipelinesApi"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Customer Support](/en/resources/integrations/customer-support/zendesk.md)
CustomerioPipelinesApi

# CustomerioPipelinesApi

Arcade Starter

**Description:** Tools that enable LLMs to interact directly with the Customer.io Track API

**Author:** Arcade

**Auth:** API Key

[![PyPI Version](https://img.shields.io/pypi/v/arcade_customerio_pipelines_api)](https://pypi.org/project/arcade_customerio_pipelines_api/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_customerio_pipelines_api)](https://pypi.org/project/arcade_customerio_pipelines_api/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_customerio_pipelines_api)](https://pypi.org/project/arcade_customerio_pipelines_api/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_customerio_pipelines_api)](https://pypi.org/project/arcade_customerio_pipelines_api/)

CustomerioPipelinesApi is a [Starter MCP Server](/guides/create-tools/improve/types-of-tools.md#starter-tools)
: each tool mirrors one HTTP endpoint and offers LLMs a way to interact with the low-level API.



Differently from [Optimized MCP Servers](/guides/create-tools/improve/types-of-tools.md#optimized-tools)
, Starter tools are heavily influenced by the original API design, which is not usually optimized for LLM usage. For this reason, we recommend thoroughly evaluating the tools with your Agents or chatbots before using it in production. [Read more](/guides/create-tools/improve/types-of-tools.md) about Optimized vs Starter tools.

The CustomerioPipelinesApi MCP Server offers a comprehensive set of tools for managing user data and tracking interactions within Customer.io.

## Available Tools

Tool Name

Description

CustomerioPipelinesApi.IdentifyPersonAndAssignTraits

Identify a person and assign traits using Customerio.

CustomerioPipelinesApi.TrackUserEvent

Record user events with properties for analysis.

CustomerioPipelinesApi.SendPageViewEvent

Sends a page view event for tracking user interactions.

CustomerioPipelinesApi.SendScreenViewEvent

Send a screen view event for app usage analytics.

CustomerioPipelinesApi.AddToGroup

Add a person to a specified group.

CustomerioPipelinesApi.AliasUserIdentity

Reconcile anonymous and identified user IDs for select destinations.

CustomerioPipelinesApi.SendBatchRequests

Send multiple requests in a single batch call.

If you need to perform an action that’s not listed here, you can [get in touch with us](mailto:contact@arcade.dev) to request a new tool, or [create your own tools](/guides/create-tools/tool-basics/build-mcp-server.md).

## CustomerioPipelinesApi.IdentifyPersonAndAssignTraits



Identify a person and assign traits using Customerio.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **enable\_strict\_validation** (`string`, optional) Set to `True` to enable strict HTTP error validation (400/401) for validation failures. Defaults to permissive mode when `False`. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioPipelinesApi.TrackUserEvent



Record user events with properties for analysis.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **enable\_strict\_validation** (`string`, optional) Set to `True` to enable strict validation and return error codes (400/401) for validation failures. `False` for permissive mode. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioPipelinesApi.SendPageViewEvent



Sends a page view event for tracking user interactions.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **enable\_strict\_mode** (`string`, optional) Set to ‘1’ to enable strict validation, returning 400/401 for errors. Any other value uses permissive mode logging. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioPipelinesApi.SendScreenViewEvent



Send a screen view event for app usage analytics.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **enable\_strict\_validation** (`string`, optional) Enable strict validation for returning proper HTTP error codes (400/401) for failures. Set to `1` to enable. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioPipelinesApi.AddToGroup



Add a person to a specified group.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **enable\_strict\_validation** (`string`, optional) Set to ‘1’ to enable strict validation, returning HTTP error codes for validation failures. Otherwise, the API operates in permissive mode. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioPipelinesApi.AliasUserIdentity



Reconcile anonymous and identified user IDs for select destinations.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **enable\_strict\_validation** (`string`, optional) Set to ‘True’ to enable strict validation, returning HTTP error codes (400/401) for validation failures. Defaults to permissive mode if not set. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioPipelinesApi.SendBatchRequests



Send multiple requests in a single batch call.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **enable\_strict\_mode** (`string`, optional) Set to `True` to enable strict validation, returning HTTP error codes (400/401) for validation failures instead of HTTP 200. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## Reference

Below is a reference of enumerations used by some of the tools in the CustomerioPipelinesApi MCP Server:

### ToolMode

-   **GET\_REQUEST\_SCHEMA**: `get_request_schema`
-   **EXECUTE**: `execute`

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_customerio_pipelines_api ``` Learn more](/guides/deployment-hosting.md)

Last updated on January 5, 2026

[CustomerioApi](/en/resources/integrations/customer-support/customerio-api.md)
[CustomerioTrackApi](/en/resources/integrations/customer-support/customerio-track-api.md)
