---
title: "ExaApi"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Search Tools](/en/resources/integrations/search/google_finance.md)
ExaApi

# ExaApi

Arcade Unoptimized

**Description:** Tools that enable LLMs to interact directly with the Exa.ai Search API.

**Author:** Arcade

**Auth:** API Key

[![PyPI Version](https://img.shields.io/pypi/v/arcade_exa_api)](https://pypi.org/project/arcade_exa_api/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_exa_api)](https://pypi.org/project/arcade_exa_api/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_exa_api)](https://pypi.org/project/arcade_exa_api/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_exa_api)](https://pypi.org/project/arcade_exa_api/)

ExaApi is a [Unoptimized MCP Server](/guides/create-tools/improve/types-of-tools.md#unoptimized-tools)
: each tool mirrors one HTTP endpoint and offers LLMs a way to interact with the low-level API.



Differently from [Optimized MCP Servers](/guides/create-tools/improve/types-of-tools.md#optimized-tools)
, Unoptimized tools are heavily influenced by the original API design, which is not usually optimized for LLM usage. For this reason, we recommend thoroughly evaluating the tools with your Agents or chatbots before using it in production. [Read more](/guides/create-tools/improve/types-of-tools.md) about Optimized vs Unoptimized tools.

The ExaApi MCP Server offers a comprehensive suite of tools for conducting searches, managing websets, and handling research requests.

## Available Tools

Tool Name

Description

ExaApi.PerformExaSearch

Conduct a search using Exa and retrieve relevant results.

ExaApi.FindSimilarLinks

Find similar links to a given link.

ExaApi.GetContentDetails

Retrieve details about specific content.

ExaApi.GenerateAnswerSummary

Retrieve direct answers or detailed summaries with citations.

ExaApi.ListResearchRequests

Retrieve a paginated list of research requests.

ExaApi.CreateResearchRequest

Create a new research request.

ExaApi.GetResearchById

Retrieve research information using a specific ID.

ExaApi.CreateWebset

Create a new Webset with optional configurations.

ExaApi.ListWebsets

Retrieve a list of available websets.

ExaApi.GetWebsetDetails

Retrieve detailed information about a specific webset.

ExaApi.UpdateWebset

Update details of an existing webset.

ExaApi.DeleteWebset

Deletes a Webset and its associated items.

ExaApi.CancelWebsetOperations

Cancel all operations on a specified Webset.

ExaApi.PreviewSearchDecomposition

Preview and analyze search query decomposition.

ExaApi.GetWebsetItem

Retrieve a specific Webset Item by ID.

ExaApi.DeleteWebsetItem

Delete an item from a webset and cancel its enrichment process.

ExaApi.ListWebsetItems

Retrieve a list of items from a specific webset.

ExaApi.CreateWebsetEnrichment

Create an enrichment for a specified webset.

ExaApi.UpdateWebsetEnrichment

Update an enrichment configuration for a webset.

ExaApi.GetEnrichmentDetails

Retrieve detailed information about a specific enrichment.

ExaApi.DeleteEnrichment

Delete an enrichment and cancel running processes.

ExaApi.CancelEnrichmentProcess

Cancel a running enrichment process.

ExaApi.CreateWebhookForNotifications

Create webhooks to receive event notifications.

ExaApi.GetWebhooksList

Retrieve a paginated list of all webhooks in your account.

ExaApi.GetWebhookInfo

Retrieve details of a webhook using its ID.

ExaApi.UpdateWebhookSettings

Update a webhook's settings for events, URL, and metadata.

ExaApi.RemoveWebhook

Remove a webhook from your account.

ExaApi.ListWebhookAttempts

Retrieve and list all webhook attempt records.

ExaApi.ListSystemEvents

Retrieve a list of all system events.

ExaApi.GetEventById

Retrieve details of an event using its ID.

ExaApi.CreateWebsetSearch

Create a new search for a specified webset.

ExaApi.GetSearchById

Retrieve a search by its ID.

ExaApi.CancelRunningSearch

Cancels a currently running search operation.

ExaApi.CreateMonitorForWebsets

Create a scheduled monitor to update Websets with fresh data.

ExaApi.ListWebsiteMonitors

Fetch all monitors associated with a website.

ExaApi.GetSpecificMonitor

Retrieve details of a specific monitor using its ID.

ExaApi.UpdateMonitorConfiguration

Update the configuration of a monitor.

ExaApi.DeleteMonitor

Deletes a specified monitor using its ID.

ExaApi.ListMonitorRuns

Lists all runs for a given monitor.

ExaApi.GetSpecificMonitorRun

Retrieve details of a specific monitor run.

ExaApi.CreateDataImport

Initiates a new data import for uploading data into Websets.

ExaApi.ListImports

Retrieve all import entries for the Webset.

ExaApi.GetSpecificImport

Retrieve details of a specific import.

ExaApi.UpdateImportsConfiguration

Update an import configuration with new settings.

ExaApi.DeleteImport

Delete an import by its ID.

If you need to perform an action that’s not listed here, you can [get in touch with us](mailto:contact@arcade.dev) to request a new tool, or [create your own tools](/guides/create-tools/tool-basics/build-mcp-server.md).

## ExaApi.PerformExaSearch



Conduct a search using Exa and retrieve relevant results.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `EXA_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ExaApi.FindSimilarLinks



Find similar links to a given link.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `EXA_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ExaApi.GetContentDetails



Retrieve details about specific content.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `EXA_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ExaApi.GenerateAnswerSummary



Retrieve direct answers or detailed summaries with citations.

**Parameters**

-   **search\_query** (`string`, required) The question or query to be answered or summarized.
-   **enable\_streaming\_response** (`boolean`, optional) Return the response as a server-sent events (SSE) stream if set to true.
-   **include\_full\_text** (`boolean`, optional) If true, the response includes full text content in the search results.

**Secrets**

This tool requires the following secrets: `EXA_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ExaApi.ListResearchRequests



Retrieve a paginated list of research requests.

**Parameters**

-   **pagination\_cursor** (`string`, optional) A string representing the position in the paginated results to continue retrieving data from.
-   **results\_limit** (`number`, optional) Specifies the number of research requests to return in the response. Helps manage pagination effectively.

**Secrets**

This tool requires the following secrets: `EXA_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ExaApi.CreateResearchRequest



Create a new research request.

**Parameters**

-   **research\_request\_details** (`json`, required) JSON object containing details of the research request including parameters and criteria.

**Secrets**

This tool requires the following secrets: `EXA_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ExaApi.GetResearchById



Retrieve research information using a specific ID.

**Parameters**

-   **enable\_streaming** (`string`, required) Set to ‘true’ to receive real-time streaming updates of the research information.
-   **event\_filter** (`string`, required) Specify the events to filter for in the research retrieval. Accepts a comma-separated list of event types.
-   **research\_id** (`string`, required) A string representing the unique identifier of the research to be retrieved.

**Secrets**

This tool requires the following secrets: `EXA_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ExaApi.CreateWebset



Create a new Webset with optional configurations.

**Parameters**

-   **webset\_configuration** (`json`, required) A JSON object detailing optional search, import, and enrichment configurations for the Webset. Include any necessary identifiers like `externalId`.

**Secrets**

This tool requires the following secrets: `EXA_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ExaApi.ListWebsets



Retrieve a list of available websets.

**Parameters**

-   **pagination\_cursor** (`string`, optional) A string used to paginate through the list of Websets.
-   **websets\_return\_limit** (`number`, optional) Specify the maximum number of Websets to return in the response.

**Secrets**

This tool requires the following secrets: `EXA_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ExaApi.GetWebsetDetails



Retrieve detailed information about a specific webset.

**Parameters**

-   **webset\_identifier** (`string`, required) The unique identifier or external ID for the Webset to retrieve.
-   **resources\_to\_expand** (`array[string]`, optional) A list of resources to include in the response for additional details.

**Secrets**

This tool requires the following secrets: `EXA_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ExaApi.UpdateWebset



Update details of an existing webset.

**Parameters**

-   **webset\_details** (`json`, required) A JSON object containing the details to update for the webset. This includes any attributes that need to be changed.
-   **webset\_id** (`string`, required) The unique id or externalId of the Webset to be updated. Ensure it matches a valid Webset.

**Secrets**

This tool requires the following secrets: `EXA_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ExaApi.DeleteWebset



Deletes a Webset and its associated items.

**Parameters**

-   **webset\_identifier** (`string`, required) The unique identifier or external ID of the Webset to delete.

**Secrets**

This tool requires the following secrets: `EXA_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ExaApi.CancelWebsetOperations



Cancel all operations on a specified Webset.

**Parameters**

-   **webset\_identifier** (`string`, required) The ID or external ID of the Webset to cancel operations on.

**Secrets**

This tool requires the following secrets: `EXA_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ExaApi.PreviewSearchDecomposition



Preview and analyze search query decomposition.

**Parameters**

-   **search\_query\_details** (`json`, required) A JSON object detailing the search query to preview. It includes elements like the search string and any additional parameters for analysis.

**Secrets**

This tool requires the following secrets: `EXA_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ExaApi.GetWebsetItem



Retrieve a specific Webset Item by ID.

**Parameters**

-   **webset\_identifier** (`string`, required) The ID or external ID of the Webset to identify the desired Webset from which the item is to be retrieved.
-   **webset\_item\_id** (`string`, required) The unique identifier of the Webset item to retrieve.

**Secrets**

This tool requires the following secrets: `EXA_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ExaApi.DeleteWebsetItem



Delete an item from a webset and cancel its enrichment process.

**Parameters**

-   **webset\_identifier** (`string`, required) The ID or external ID of the Webset from which the item will be deleted.
-   **webset\_item\_id** (`string`, required) The unique identifier of the item to be deleted from the webset.

**Secrets**

This tool requires the following secrets: `EXA_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ExaApi.ListWebsetItems



Retrieve a list of items from a specific webset.

**Parameters**

-   **webset\_identifier** (`string`, required) The ID or external ID of the Webset to retrieve items from.
-   **pagination\_cursor** (`string`, optional) A string used to paginate through the results. Pass this to retrieve the next set of items in the webset.
-   **result\_limit** (`number`, optional) Specify the number of results to return. This controls the size of the page in a paginated response.
-   **source\_id** (`string`, optional) The unique identifier for the source from which to retrieve items.

**Secrets**

This tool requires the following secrets: `EXA_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ExaApi.CreateWebsetEnrichment



Create an enrichment for a specified webset.

**Parameters**

-   **enrichment\_details** (`json`, required) A JSON object containing the details required to create the enrichment for the webset.
-   **webset\_identifier** (`string`, required) The ID or external ID of the webset to enrich.

**Secrets**

This tool requires the following secrets: `EXA_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ExaApi.UpdateWebsetEnrichment



Update an enrichment configuration for a webset.

**Parameters**

-   **enrichment\_configuration\_details** (`json`, required) A JSON object containing the details of the enrichment configuration to update.
-   **enrichment\_configuration\_id** (`string`, required) The unique identifier of the enrichment configuration to be updated.
-   **webset\_identifier** (`string`, required) The identifier of the webset to be updated. Provide the specific name or ID of the webset.

**Secrets**

This tool requires the following secrets: `EXA_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ExaApi.GetEnrichmentDetails



Retrieve detailed information about a specific enrichment.

**Parameters**

-   **enrichment\_id** (`string`, required) The unique identifier for the specific enrichment you want to retrieve within the webset.
-   **webset\_identifier** (`string`, required) The ID or external ID of the webset to retrieve enrichment details for.

**Secrets**

This tool requires the following secrets: `EXA_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ExaApi.DeleteEnrichment



Delete an enrichment and cancel running processes.

**Parameters**

-   **enrichment\_id** (`string`, required) The unique identifier of the enrichment to be deleted.
-   **webset\_id** (`string`, required) The ID or external ID of the Webset to identify which enrichment to delete.

**Secrets**

This tool requires the following secrets: `EXA_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ExaApi.CancelEnrichmentProcess



Cancel a running enrichment process.

**Parameters**

-   **enrichment\_id** (`string`, required) The unique identifier of the enrichment process to be canceled.
-   **webset\_id** (`string`, required) The ID or external ID of the Webset to identify which enrichment process to cancel.

**Secrets**

This tool requires the following secrets: `EXA_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ExaApi.CreateWebhookForNotifications



Create webhooks to receive event notifications.

**Parameters**

-   **webhook\_configuration** (`json`, required) A JSON object detailing the events to monitor and the destination URL for notifications.

**Secrets**

This tool requires the following secrets: `EXA_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ExaApi.GetWebhooksList



Retrieve a paginated list of all webhooks in your account.

**Parameters**

-   **pagination\_cursor** (`string`, optional) The cursor used to navigate through pages of results for webhooks.
-   **results\_per\_page** (`number`, optional) The number of webhooks to return per page, up to a maximum of 200.

**Secrets**

This tool requires the following secrets: `EXA_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ExaApi.GetWebhookInfo



Retrieve details of a webhook using its ID.

**Parameters**

-   **webhook\_id** (`string`, required) The unique identifier for the webhook you want details about.

**Secrets**

This tool requires the following secrets: `EXA_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ExaApi.UpdateWebhookSettings



Update a webhook’s settings for events, URL, and metadata.

**Parameters**

-   **webhook\_id** (`string`, required) The unique identifier of the webhook to be updated.
-   **webhook\_update\_request\_body** (`json`, required) JSON object containing webhook updates, such as events list, new URL, and metadata.

**Secrets**

This tool requires the following secrets: `EXA_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ExaApi.RemoveWebhook



Remove a webhook from your account.

**Parameters**

-   **webhook\_id** (`string`, required) The unique identifier of the webhook to remove. This is necessary for specifying which webhook to delete.

**Secrets**

This tool requires the following secrets: `EXA_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ExaApi.ListWebhookAttempts



Retrieve and list all webhook attempt records.

**Parameters**

-   **webhook\_id** (`string`, required) The unique identifier for the webhook to retrieve attempt records for.
-   **event\_type\_filter** (`string`, optional) Filter webhook attempts by specifying the type of event, such as ‘webset.created’ or ‘monitor.run.completed’.
-   **filter\_by\_successful\_attempts** (`boolean`, optional) Use ‘true’ to filter for successful webhook attempts and ‘false’ for unsuccessful ones.
-   **pagination\_cursor** (`string`, optional) A string used to paginate through the webhook attempt results.
-   **results\_limit** (`number`, optional) Specify the maximum number of webhook attempt records to return.

**Secrets**

This tool requires the following secrets: `EXA_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ExaApi.ListSystemEvents



Retrieve a list of all system events.

**Parameters**

-   **created\_after** (`string`, optional) Filter events created after or at this timestamp. Use a valid ISO 8601 datetime string in UTC.
-   **event\_types\_filter** (`array[string]`, optional) Filter events by specifying an array of event type names.
-   **filter\_created\_before** (`string`, optional) Filter events created before or at this timestamp (inclusive). Provide a valid ISO 8601 datetime string in UTC.
-   **pagination\_cursor** (`string`, optional) Cursor for paginating through event results. Use it to navigate through pages of events.
-   **results\_limit** (`number`, optional) Specify the number of event results to return. This controls the size of the result set for a single request.

**Secrets**

This tool requires the following secrets: `EXA_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ExaApi.GetEventById



Retrieve details of an event using its ID.

**Parameters**

-   **event\_id** (`string`, required) The unique identifier of the event to retrieve details for.

**Secrets**

This tool requires the following secrets: `EXA_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ExaApi.CreateWebsetSearch



Create a new search for a specified webset.

**Parameters**

-   **search\_criteria** (`json`, required) JSON object representing new search criteria for the webset. This specifies the parameters or conditions for the new search.
-   **webset\_id** (`string`, required) The unique identifier for the Webset you want to create a search in.

**Secrets**

This tool requires the following secrets: `EXA_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ExaApi.GetSearchById



Retrieve a search by its ID.

**Parameters**

-   **search\_id** (`string`, required) The ID of the search to retrieve details for.
-   **webset\_id** (`string`, required) The ID of the Webset to retrieve the specific search.

**Secrets**

This tool requires the following secrets: `EXA_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ExaApi.CancelRunningSearch



Cancels a currently running search operation.

**Parameters**

-   **search\_id** (`string`, required) The ID of the search to cancel. Provide the unique string identifier for the targeted search operation.
-   **webset\_id** (`string`, required) The ID of the Webset where the search is executing. Use this to specify the Webset to be canceled.

**Secrets**

This tool requires the following secrets: `EXA_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ExaApi.CreateMonitorForWebsets



Create a scheduled monitor to update Websets with fresh data.

**Parameters**

-   **monitor\_configuration** (`json`, required) JSON object describing the configuration for the new monitor, including schedule, search and refresh operations.

**Secrets**

This tool requires the following secrets: `EXA_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ExaApi.ListWebsiteMonitors



Fetch all monitors associated with a website.

**Parameters**

-   **pagination\_cursor** (`string`, optional) The cursor for paginating through the monitor results.
-   **results\_limit** (`number`, optional) Specifies the maximum number of monitor results to return. Use for pagination.
-   **webset\_id** (`string`, optional) The unique identifier for the Webset to retrieve monitors for. This is required to specify which website’s monitors you want to list.

**Secrets**

This tool requires the following secrets: `EXA_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ExaApi.GetSpecificMonitor



Retrieve details of a specific monitor using its ID.

**Parameters**

-   **monitor\_id** (`string`, required) The unique identifier of the monitor to retrieve details for.

**Secrets**

This tool requires the following secrets: `EXA_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ExaApi.UpdateMonitorConfiguration



Update the configuration of a monitor.

**Parameters**

-   **monitor\_configuration\_details** (`json`, required) A JSON object containing the new configuration settings for the monitor.
-   **monitor\_id** (`string`, required) The unique identifier for the monitor to update.

**Secrets**

This tool requires the following secrets: `EXA_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ExaApi.DeleteMonitor



Deletes a specified monitor using its ID.

**Parameters**

-   **monitor\_id** (`string`, required) The unique identifier for the monitor to be deleted.

**Secrets**

This tool requires the following secrets: `EXA_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ExaApi.ListMonitorRuns



Lists all runs for a given monitor.

**Parameters**

-   **monitor\_id** (`string`, required) The ID of the monitor to list all associated runs.

**Secrets**

This tool requires the following secrets: `EXA_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ExaApi.GetSpecificMonitorRun



Retrieve details of a specific monitor run.

**Parameters**

-   **monitor\_id** (`string`, required) The unique identifier of the monitor to retrieve the run for.
-   **run\_id** (`string`, required) The unique identifier of the specific run to retrieve details for.

**Secrets**

This tool requires the following secrets: `EXA_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ExaApi.CreateDataImport



Initiates a new data import for uploading data into Websets.

**Parameters**

-   **data\_import\_details** (`json`, required) The JSON object containing data to import for Websets. This includes details for enrichment, search, or exclusion processes.

**Secrets**

This tool requires the following secrets: `EXA_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ExaApi.ListImports



Retrieve all import entries for the Webset.

**Parameters**

-   **pagination\_cursor** (`string`, optional) String used for paginating through results. Pass it to retrieve the next set of results.
-   **results\_limit** (`number`, optional) Specify the maximum number of import results to return.

**Secrets**

This tool requires the following secrets: `EXA_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ExaApi.GetSpecificImport



Retrieve details of a specific import.

**Parameters**

-   **import\_id** (`string`, required) The unique identifier for the specific import to retrieve details about.

**Secrets**

This tool requires the following secrets: `EXA_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ExaApi.UpdateImportsConfiguration



Update an import configuration with new settings.

**Parameters**

-   **import\_configuration\_details** (`json`, required) JSON object containing the new settings for the import configuration. Include all necessary fields that need to be updated.
-   **import\_id** (`string`, required) The identifier for the import configuration to be updated.

**Secrets**

This tool requires the following secrets: `EXA_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ExaApi.DeleteImport



Delete an import by its ID.

**Parameters**

-   **import\_id** (`string`, required) The unique identifier of the import to be deleted.

**Secrets**

This tool requires the following secrets: `EXA_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## Reference

Below is a reference of enumerations used by some of the tools in the ExaApi MCP Server:

### ToolMode

-   **GET\_REQUEST\_SCHEMA**: `get_request_schema`
-   **EXECUTE**: `execute`

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_exa_api ``` Learn more](/guides/deployment-hosting.md)

Last updated on February 10, 2026

[YouTube](/en/resources/integrations/search/youtube.md)
[HubSpot](/en/resources/integrations/sales/hubspot.md)
