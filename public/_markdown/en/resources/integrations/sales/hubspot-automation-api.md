---
title: "HubspotAutomationApi"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Sales](/en/resources/integrations/sales/hubspot.md)
HubspotAutomationApi

# HubspotAutomationApi

Arcade Unoptimized

**Description:** Tools that enable LLMs to interact directly with the HubSpot Automation API.

**Author:** Arcade

**Auth:** User authorization

[![PyPI Version](https://img.shields.io/pypi/v/arcade_hubspot_automation_api)](https://pypi.org/project/arcade_hubspot_automation_api/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_hubspot_automation_api)](https://pypi.org/project/arcade_hubspot_automation_api/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_hubspot_automation_api)](https://pypi.org/project/arcade_hubspot_automation_api/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_hubspot_automation_api)](https://pypi.org/project/arcade_hubspot_automation_api/)

HubspotAutomationApi is a [Unoptimized MCP Server](/guides/create-tools/improve/types-of-tools.md#unoptimized-tools)
: each tool mirrors one HTTP endpoint and offers LLMs a way to interact with the low-level API.



Differently from [Optimized MCP Servers](/guides/create-tools/improve/types-of-tools.md#optimized-tools)
, Unoptimized tools are heavily influenced by the original API design, which is not usually optimized for LLM usage. For this reason, we recommend thoroughly evaluating the tools with your Agents or chatbots before using it in production. [Read more](/guides/create-tools/improve/types-of-tools.md) about Optimized vs Unoptimized tools.

The HubspotAutomationApi MCP Server offers a comprehensive suite of tools for managing and automating workflows within HubSpot. Users can leverage these tools to:

-   Complete and manage blocked action executions in automation workflows.
-   Fetch and retrieve details about email campaigns and workflows.
-   Check the enrollment status of contacts in sequences.
-   Enroll contacts into specific sequences for automated follow-ups.
-   Access user-specific sequences and their details.

This server streamlines the automation process, making it easier to handle marketing activities and user interactions within HubSpot.

## Available Tools

Tool Name

Description

HubspotAutomationApi.CompleteActionExecution

Complete a specific blocked action execution by ID.

HubspotAutomationApi.CompleteBatchActionExecutions

Complete a batch of blocked action executions.

HubspotAutomationApi.FetchEmailCampaigns

Fetch email campaigns from HubSpot Automation.

HubspotAutomationApi.GetWorkflows

Retrieve details of HubSpot workflows.

HubspotAutomationApi.GetWorkflowIdMappings

Retrieve HubSpot workflow ID mappings in batch.

HubspotAutomationApi.CheckContactEnrollmentStatus

Retrieve the sequence enrollment status of a contact by ID.

HubspotAutomationApi.GetUserSequences

Retrieve a list of sequences for a specific user.

HubspotAutomationApi.EnrollContactInSequence

Enroll a contact into a sequence with user ID and details.

HubspotAutomationApi.GetSequenceDetails

Retrieve details of a specific sequence by its ID.

If you need to perform an action that’s not listed here, you can [get in touch with us](mailto:contact@arcade.dev) to request a new tool, or [create your own tools](/guides/create-tools/tool-basics/build-mcp-server.md).

## HubspotAutomationApi.CompleteActionExecution



Complete a specific blocked action execution by ID.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **action\_execution\_id** (`string`, optional) The unique identifier of the action execution to be completed. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotAutomationApi.CompleteBatchActionExecutions



Complete a batch of blocked action executions.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotAutomationApi.FetchEmailCampaigns



Fetch email campaigns from HubSpot Automation.

**Parameters**

-   **email\_campaign\_flow\_ids** (`array[string]`, optional) An array of flow IDs to specify which email campaigns to retrieve. Each ID should be a string.
-   **end\_date\_filter** (`string`, optional) A timestamp filter to get campaigns before a specific date (in YYYY-MM-DD format).
-   **max\_results** (`integer`, optional) Specifies the maximum number of email campaign entries to retrieve. Should be an integer value.
-   **start\_date** (`string`, optional) Specify the start date for fetching email campaigns. This should be in the format YYYY-MM-DD to filter results starting after this date.

## HubspotAutomationApi.GetWorkflows



Retrieve details of HubSpot workflows.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotAutomationApi.GetWorkflowIdMappings



Retrieve HubSpot workflow ID mappings in batch.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotAutomationApi.CheckContactEnrollmentStatus



Retrieve the sequence enrollment status of a contact by ID.

**Parameters**

-   **contact\_id** (`string`, required) The unique ID of the contact to check their sequence enrollment status.

## HubspotAutomationApi.GetUserSequences



Retrieve a list of sequences for a specific user.

**Parameters**

This tool does not take any parameters.

## HubspotAutomationApi.EnrollContactInSequence



Enroll a contact into a sequence with user ID and details.

**Parameters**

-   **contact\_id** (`string`, required) The unique identifier of the contact to be enrolled in the sequence.
-   **sender\_email** (`string`, required) The email address of the sender enrolling the contact. This should be a valid email associated with the sender’s HubSpot user account.
-   **sequence\_identifier** (`string`, required) The unique identifier of the sequence to enroll the contact into. It should be a valid string matching the sequence available in the system.
-   **sender\_alias\_address** (`string`, optional) Email alias for the sender addressing the sequence. This is used instead of the default email address.

## HubspotAutomationApi.GetSequenceDetails



Retrieve details of a specific sequence by its ID.

**Parameters**

-   **sequence\_id** (`string`, required) The unique ID of the sequence to retrieve details for. This ID identifies which sequence’s information will be returned.

## Reference

Below is a reference of enumerations used by some of the tools in the HubspotAutomationApi MCP Server:

### ToolMode

-   **GET\_REQUEST\_SCHEMA**: `get_request_schema`
-   **EXECUTE**: `execute`

## Auth

The HubspotAutomationApi MCP Server uses the Auth Provider with id `arcade-hubspot` to connect to users’ HubspotAutomationApi accounts. In order to use the MCP Server, you will need to configure the `arcade-hubspot` auth provider.

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_hubspot_automation_api ``` Learn more](/guides/deployment-hosting.md)

Last updated on February 7, 2026

[Salesforce](/en/resources/integrations/sales/salesforce.md)
[HubspotCmsApi](/en/resources/integrations/sales/hubspot-cms-api.md)
