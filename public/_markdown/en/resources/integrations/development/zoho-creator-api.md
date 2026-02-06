---
title: "ZohoCreatorApi"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Developer Tools](/en/resources/integrations/development/e2b.md)
ZohoCreatorApi

# ZohoCreatorApi

Arcade Starter

**Description:** Tools that enable LLMs to interact directly with the Zoho Creator API.

**Author:** Arcade

**Auth:** User authorization

[![PyPI Version](https://img.shields.io/pypi/v/arcade_zoho_creator_api)](https://pypi.org/project/arcade_zoho_creator_api/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_zoho_creator_api)](https://pypi.org/project/arcade_zoho_creator_api/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_zoho_creator_api)](https://pypi.org/project/arcade_zoho_creator_api/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_zoho_creator_api)](https://pypi.org/project/arcade_zoho_creator_api/)

ZohoCreatorApi is a [Starter MCP Server](/guides/create-tools/improve/types-of-tools.md#starter-tools)
: each tool mirrors one HTTP endpoint and offers LLMs a way to interact with the low-level API.



Differently from [Optimized MCP Servers](/guides/create-tools/improve/types-of-tools.md#optimized-tools)
, Starter tools are heavily influenced by the original API design, which is not usually optimized for LLM usage. For this reason, we recommend thoroughly evaluating the tools with your Agents or chatbots before using it in production. [Read more](/guides/create-tools/improve/types-of-tools.md) about Optimized vs Starter tools.

The ZohoCreatorApi MCP Server offers a comprehensive suite of tools for interacting with Zoho Creator applications. Users can efficiently manage and manipulate data within their apps, enabling actions such as:

## Available Tools

Tool Name

Description

ZohoCreatorApi.FetchZohoAppSections

Fetch details of sections and components in Zoho Creator apps.

ZohoCreatorApi.FetchRecordDetail

Fetches detailed view data of a record by ID.

ZohoCreatorApi.FetchZohoFormFieldsMetadata

Fetches metadata of fields in a Zoho Creator form.

ZohoCreatorApi.FetchZohoReportsMeta

Fetches meta information of reports in Zoho Creator.

ZohoCreatorApi.UpdateZohoCreatorReportRecords

Update records in a Zoho Creator report.

ZohoCreatorApi.FetchZohoRecords

Fetch records from a Zoho Creator report.

ZohoCreatorApi.DeleteReportRecords

Delete records from a specified Zoho Creator report.

ZohoCreatorApi.FetchZohoCreatorPagesMeta

Fetches meta information of pages in a Zoho Creator app.

ZohoCreatorApi.GetApplicationMetaInfo

Fetches meta information of accessible applications.

ZohoCreatorApi.InsertRecordsInZohoForm

Add records to a form in Zoho Creator.

ZohoCreatorApi.UpdateZohoRecord

Update a specific record in Zoho Creator by ID.

ZohoCreatorApi.FetchZohoRecordDetail

Fetches detailed view data of a Zoho record by ID.

ZohoCreatorApi.DeleteZohoRecord

Delete a specific record in Zoho Creator by ID.

ZohoCreatorApi.CreateBulkReadJob

Initiate a bulk read job to export records.

ZohoCreatorApi.FetchZohoReportRecords

Fetch records displayed by a Zoho Creator report.

ZohoCreatorApi.GetBulkReadJobDetails

Retrieve details of a completed bulk read job in Zoho Creator.

ZohoCreatorApi.FetchWorkspaceAppMeta

Fetch meta information of applications in a workspace.

ZohoCreatorApi.FetchZohoFormMetaInformation

Fetch meta information of Zoho Creator app forms.

ZohoCreatorApi.AddRecordsToZohoForm

Add multiple records to a Zoho Creator form efficiently.

If you need to perform an action that’s not listed here, you can [get in touch with us](mailto:contact@arcade.dev) to request a new tool, or [create your own tools](/guides/create-tools/tool-basics/build-mcp-server.md).

## ZohoCreatorApi.FetchZohoAppSections



Fetch details of sections and components in Zoho Creator apps.

**Parameters**

-   **zoho\_account\_owner\_name** (`string`, required) The account owner’s username in Zoho. Required to fetch data for the specified application.
-   **zoho\_application\_link\_name** (`string`, required) The unique link name of the Zoho Creator application whose sections and components you want to fetch.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoCreatorApi.FetchRecordDetail



Fetches detailed view data of a record by ID.

**Parameters**

-   **application\_private\_link** (`string`, required) The private link identifier of the Zoho application, necessary for accessing the specific record’s detail view.
-   **account\_owner\_name** (`string`, required) The name of the account owner in Zoho. This specifies the owner of the account to which the app belongs.
-   **application\_link\_name** (`string`, required) The unique identifier or slug for the specific Zoho app to query. This determines which app’s data is accessed.
-   **report\_link\_name** (`string`, required) The link name of the report from which to fetch the record detail. It identifies the specific report in the Zoho app.
-   **record\_id** (`string`, required) The unique identifier of the record to fetch detailed information for. It should be a string corresponding to the record’s ID in the Zoho app.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoCreatorApi.FetchZohoFormFieldsMetadata



Fetches metadata of fields in a Zoho Creator form.

**Parameters**

-   **account\_owner\_name** (`string`, required) The Zoho account owner’s username. Required to identify the specific account that owns the application.
-   **application\_link\_name** (`string`, required) The unique link name of the Zoho Creator application. It identifies which application’s form metadata to fetch.
-   **form\_identifier** (`string`, required) The unique identifier or link name of the Zoho Creator form to fetch metadata for.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoCreatorApi.FetchZohoReportsMeta



Fetches meta information of reports in Zoho Creator.

**Parameters**

-   **zoho\_account\_owner\_name** (`string`, required) The name of the account owner in Zoho. Used to identify which account’s report metadata to fetch.
-   **zoho\_app\_link\_name** (`string`, required) The unique link name of the Zoho Creator application to fetch report metadata from. This identifies the specific app within your Zoho account.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoCreatorApi.UpdateZohoCreatorReportRecords



Update records in a Zoho Creator report.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **account\_owner\_name** (`string`, optional) The username of the owner of the Zoho account associated with the application. Required for determining access and permissions. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **application\_link\_name** (`string`, optional) The unique identifier (link name) of the Zoho Creator application. Required to specify the target app for updating records. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **report\_link\_name** (`string`, optional) The name or identifier of the report in Zoho Creator whose records you want to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **process\_until\_limit\_enabled** (`boolean`, optional) Set to true to process records until reaching a limit of 200. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoCreatorApi.FetchZohoRecords



Fetch records from a Zoho Creator report.

**Parameters**

-   **account\_owner\_identifier** (`string`, required) The unique identifier for the Zoho account owner. Required to fetch the report data.
-   **application\_link\_name** (`string`, required) The unique identifier for the Zoho Creator application. It specifies which app’s report to fetch.
-   **report\_link\_name** (`string`, required) The unique link name of the Zoho Creator report to fetch records from.
-   **start\_record\_index** (`integer`, optional) The starting index of records to retrieve from the report. Must be an integer.
-   **record\_limit** (`integer`, optional) The maximum number of records to retrieve, up to 200.
-   **filter\_criteria** (`string`, optional) Specify conditions to filter records. Use Zoho Creator query format for filtering.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoCreatorApi.DeleteReportRecords



Delete records from a specified Zoho Creator report.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **account\_owner\_name** (`string`, optional) The name of the Zoho account owner. It identifies whose account the deletion should occur under. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **application\_link\_name** (`string`, optional) The unique identifier for the application within Zoho Creator. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **report\_identifier** (`string`, optional) The name of the report from which records should be deleted. Must match the link name configured in Zoho Creator. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **process\_records\_up\_to\_limit** (`boolean`, optional) Boolean to enable processing records up to the 200-record limit per request. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoCreatorApi.FetchZohoCreatorPagesMeta



Fetches meta information of pages in a Zoho Creator app.

**Parameters**

-   **account\_owner\_name** (`string`, required) The name of the account owner in Zoho. This identifies the owner of the application for which the page metadata is fetched.
-   **zoho\_app\_link\_name** (`string`, required) The unique identifier for the Zoho Creator application to fetch page metadata.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoCreatorApi.GetApplicationMetaInfo



Fetches meta information of accessible applications.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoCreatorApi.InsertRecordsInZohoForm



Add records to a form in Zoho Creator.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **zoho\_account\_owner\_name** (`string`, optional) The name of the account owner in Zoho. This is required to identify which account the records should be added to. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **application\_link\_name** (`string`, optional) The unique identifier of the application in which the form is located. This is necessary to specify the target Zoho Creator application. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **form\_link\_name** (`string`, optional) The unique link name of the form in Zoho Creator where records will be added. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoCreatorApi.UpdateZohoRecord



Update a specific record in Zoho Creator by ID.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **zoho\_account\_owner\_name** (`string`, optional) The account owner’s name in Zoho. Used to identify the correct Zoho Creator account for the update operation. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **application\_link\_name** (`string`, optional) The unique name of the Zoho Creator application where the record resides. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **report\_link\_name** (`string`, optional) The string identifier of the report in Zoho Creator where the record is located. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **record\_id** (`string`, optional) The unique identifier for the record to be updated in Zoho Creator. This ID specifies which record in the report will be modified. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoCreatorApi.FetchZohoRecordDetail



Fetches detailed view data of a Zoho record by ID.

**Parameters**

-   **account\_owner\_name** (`string`, required) The name of the account owner in Zoho to fetch the record for. This identifies the specific account under which the record exists.
-   **application\_identifier** (`string`, required) The name of the application in Zoho used to uniquely identify which app’s record details are to be fetched.
-   **report\_link\_name** (`string`, required) The specific name of the report in Zoho from which the data will be fetched.
-   **record\_id** (`string`, required) The unique ID of the Zoho record to fetch its detailed information.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoCreatorApi.DeleteZohoRecord



Delete a specific record in Zoho Creator by ID.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **zoho\_account\_owner\_name** (`string`, optional) The account owner’s name in Zoho. Required to specify which user’s account to access. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **application\_link\_name** (`string`, optional) The unique identifier for the Zoho Creator application. Provide this to specify which application contains the record to delete. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **report\_link\_name** (`string`, optional) The unique name of the report in Zoho where the record is listed. This identifies which report contains the record to be deleted. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **record\_id** (`string`, optional) The unique ID of the record to be deleted from Zoho Creator. This must match the ID displayed in the relevant Zoho report. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoCreatorApi.CreateBulkReadJob



Initiate a bulk read job to export records.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **account\_owner\_name** (`string`, optional) The name of the account owner in Zoho for whom the bulk read job is being created. This should match the official account details. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **application\_link\_name** (`string`, optional) The name of the application within Zoho to export records from. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **report\_reference\_name** (`string`, optional) Specifies the unique link or name of the report from which records will be exported in Zoho. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoCreatorApi.FetchZohoReportRecords



Fetch records displayed by a Zoho Creator report.

**Parameters**

-   **zoho\_private\_link** (`string`, required) The private link URL or identifier for accessing a specific Zoho Creator report.
-   **account\_owner\_name** (`string`, required) The username of the Zoho account owner. Required to identify the correct account for fetching report records.
-   **zoho\_application\_link\_name** (`string`, required) The unique link name of the Zoho Creator application from which to fetch report records.
-   **report\_link\_name** (`string`, required) The unique link name of the Zoho report to fetch records from. It’s required to specify which report to access.
-   **record\_fetch\_start\_index** (`integer`, optional) Specify the starting index for records to be fetched. Use an integer value.
-   **record\_limit** (`integer`, optional) Specify the maximum number of records to fetch, up to 200.
-   **filter\_criteria** (`string`, optional) A string to filter records based on specific conditions, formatted as ‘Field\_Name Operator Value’.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoCreatorApi.GetBulkReadJobDetails



Retrieve details of a completed bulk read job in Zoho Creator.

**Parameters**

-   **account\_owner\_name** (`string`, required) The name of the account owner in Zoho. Required for identifying the correct account.
-   **application\_link\_name** (`string`, required) The name of the Zoho Creator application. Used to identify which application’s bulk read job details are being retrieved.
-   **report\_link\_name** (`string`, required) The link name of the report for which the bulk read job details are requested. This is required to specify the report in Zoho Creator.
-   **job\_id** (`string`, required) The unique identifier for the bulk read job to retrieve details for. This should be a string value.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoCreatorApi.FetchWorkspaceAppMeta



Fetch meta information of applications in a workspace.

**Parameters**

-   **workspace\_account\_owner\_name** (`string`, required) The name of the account owner for the workspace you want to fetch application meta information from.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoCreatorApi.FetchZohoFormMetaInformation



Fetch meta information of Zoho Creator app forms.

**Parameters**

-   **zoho\_account\_owner\_name** (`string`, required) The name of the account owner for the Zoho Creator application. Required for authentication and identifying the account context.
-   **zoho\_app\_link\_name** (`string`, required) The unique link name of the Zoho Creator application. This identifies the app whose form meta information is to be fetched.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoCreatorApi.AddRecordsToZohoForm



Add multiple records to a Zoho Creator form efficiently.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **form\_private\_link** (`string`, optional) The unique identifier for accessing a specific form in Zoho Creator securely. Required for access control. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **zoho\_account\_owner\_name** (`string`, optional) The account owner’s name associated with the Zoho Creator application. This is needed to authenticate and route the records correctly. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **application\_link\_name** (`string`, optional) The unique identifier for the Zoho application where the form resides. Required to locate the specific application. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **zoho\_form\_link\_name** (`string`, optional) The unique link name of the form in Zoho Creator where records will be added. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## Reference

Below is a reference of enumerations used by some of the tools in the ZohoCreatorApi MCP Server:

### ToolMode

-   **GET\_REQUEST\_SCHEMA**: `get_request_schema`
-   **EXECUTE**: `execute`

## Secrets

This MCP Server requires the `ZOHO_SERVER_URL` secret to be configured. Learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md).

### Getting your Zoho Server URL

The Zoho Server URL is the base URL for your Zoho account’s data center. Zoho operates in multiple data centers around the world, and you must use the correct URL for your account.

Your Zoho Server URL depends on which data center your account is registered in:

Data Center

Server URL

US

`https://creator.zoho.com`

EU

`https://creator.zoho.eu`

India

`https://creator.zoho.in`

Australia

`https://creator.zoho.com.au`

China

`https://creator.zoho.com.cn`

To determine which data center your account uses:

1.  Log in to your Zoho Creator account
2.  Look at the URL in your browser’s address bar
3.  The domain (`.com`, `.eu`, `.in`, `.com.au`, or `.com.cn`) indicates your data center

For example, if you access Zoho Creator at `https://creator.zoho.eu`, your server URL is `https://creator.zoho.eu`.

The server URL is used as the base for all API requests. For example, when retrieving application metadata, the full URL would be constructed as:

PLAINTEXT

```
{zoho_server_url}/creator/v2/meta/{account_owner_name}/{app_link_name}/sections
```

Which would become `https://creator.zoho.com/creator/v2/meta/{account_owner_name}/{app_link_name}/sections` for US accounts.

## Auth

The ZohoCreatorApi MCP Server uses the Auth Provider with id `arcade-zoho` to connect to users’ Zoho Creator accounts. In order to use the MCP Server, you will need to configure the `arcade-zoho` auth provider.

Learn how to configure the Zoho auth provider in the [Zoho auth provider documentation](/references/auth-providers/zoho.md).

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_zoho_creator_api ``` Learn more](/guides/deployment-hosting.md)

Last updated on January 5, 2026

[PagerdutyApi](/en/resources/integrations/development/pagerduty-api.md)
[Stripe](/en/resources/integrations/payments/stripe.md)
