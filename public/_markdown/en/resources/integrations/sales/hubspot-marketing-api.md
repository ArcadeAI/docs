---
title: "HubspotMarketingApi"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Sales](/en/resources/integrations/sales/hubspot.md)
HubspotMarketingApi

# HubspotMarketingApi

Arcade Starter

**Description:** Tools that enable LLMs to interact directly with the Hubspot Marketing API.

**Author:** Arcade

**Auth:** User authorization

[![PyPI Version](https://img.shields.io/pypi/v/arcade_hubspot_marketing_api)](https://pypi.org/project/arcade_hubspot_marketing_api/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_hubspot_marketing_api)](https://pypi.org/project/arcade_hubspot_marketing_api/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_hubspot_marketing_api)](https://pypi.org/project/arcade_hubspot_marketing_api/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_hubspot_marketing_api)](https://pypi.org/project/arcade_hubspot_marketing_api/)

HubspotMarketingApi is a [Starter MCP Server](/guides/create-tools/improve/types-of-tools.md#starter-tools)
: each tool mirrors one HTTP endpoint and offers LLMs a way to interact with the low-level API.



Differently from [Optimized MCP Servers](/guides/create-tools/improve/types-of-tools.md#optimized-tools)
, Starter tools are heavily influenced by the original API design, which is not usually optimized for LLM usage. For this reason, we recommend thoroughly evaluating the tools with your Agents or chatbots before using it in production. [Read more](/guides/create-tools/improve/types-of-tools.md) about Optimized vs Starter tools.

The HubspotMarketingApi MCP Server offers a comprehensive suite of tools for managing marketing campaigns within HubSpot. Users can efficiently perform actions such as:

-   Create, update, and delete marketing campaigns and associated assets.
-   Manage campaign budgets and spending items.
-   Retrieve detailed metrics and reports on campaign performance and email statistics.
-   Handle marketing events, including participation tracking and event details.
-   Create and manage marketing forms and emails, including A/B testing and transactional emails.

This server streamlines the process of executing marketing strategies and analyzing their effectiveness within the HubSpot platform.

## Available Tools

Tool Name

Description

HubspotMarketingApi.GetCampaignSpendItem

Retrieve details of a specific campaign spend item.

HubspotMarketingApi.UpdateCampaignSpend

Update a specific campaign spend item by ID.

HubspotMarketingApi.RemoveCampaignSpendItem

Deletes a specific campaign spend item by ID.

HubspotMarketingApi.UpdateCampaignBatch

Update a batch of marketing campaigns efficiently.

HubspotMarketingApi.GetCampaignBudget

Retrieve details of a specific marketing campaign budget item.

HubspotMarketingApi.UpdateCampaignBudget

Update a specific campaign budget item by ID.

HubspotMarketingApi.DeleteCampaignBudgetItem

Delete a specific campaign budget item by ID.

HubspotMarketingApi.AssociateAssetWithCampaign

Associate a specified asset with a HubSpot campaign.

HubspotMarketingApi.DisassociateCampaignAsset

Disassociate an asset from a HubSpot marketing campaign.

HubspotMarketingApi.GetCampaignBudgetDetails

Retrieve detailed budget and spend details for a campaign.

HubspotMarketingApi.FetchMarketingCampaignBatches

Retrieve a batch of HubSpot marketing campaigns and assets.

HubspotMarketingApi.GetMarketingCampaigns

Retrieve a page of marketing campaigns with optional filters.

HubspotMarketingApi.CreateMarketingCampaign

Create a marketing campaign and retrieve its details.

HubspotMarketingApi.GetCampaignAttributionMetrics

Retrieve attribution metrics for a specific campaign.

HubspotMarketingApi.ListCampaignAssets

Retrieve all assets of a specified type for a campaign.

HubspotMarketingApi.ArchiveCampaignsBatch

Delete a batch of marketing campaigns.

HubspotMarketingApi.GetCampaignRevenueReport

Fetch revenue attribution report for a specific campaign.

HubspotMarketingApi.CreateMarketingCampaignBatch

Create a batch of marketing campaigns in HubSpot.

HubspotMarketingApi.AddCampaignBudgetItem

Add a new budget item to a marketing campaign.

HubspotMarketingApi.GetCampaignDetails

Retrieve details and metrics for a specific marketing campaign.

HubspotMarketingApi.DeleteMarketingCampaign

Delete a specified marketing campaign.

HubspotMarketingApi.UpdateCampaignProperties

Update properties of a HubSpot marketing campaign.

HubspotMarketingApi.FetchCampaignContactIds

Fetch contact IDs for a specific campaign and contact type.

HubspotMarketingApi.CreateCampaignSpend

Create a new campaign spend item for a marketing campaign.

HubspotMarketingApi.GetFormById

Retrieve a marketing form by its ID.

HubspotMarketingApi.UpdateHubspotForm

Update all fields of a HubSpot form.

HubspotMarketingApi.ArchiveMarketingForm

Archive a marketing form in HubSpot.

HubspotMarketingApi.UpdateHubspotMarketingForm

Update components of a HubSpot marketing form.

HubspotMarketingApi.ListHubspotForms

Retrieve a list of HubSpot marketing forms.

HubspotMarketingApi.CreateMarketingForm

Create a new marketing form in HubSpot.

HubspotMarketingApi.GetEmailStatistics

Get aggregated email statistics in a specified time span.

HubspotMarketingApi.PublishHubspotEmail

Publish a HubSpot marketing email.

HubspotMarketingApi.CreateAbTestEmailVariation

Create a new variation for an email A/B test.

HubspotMarketingApi.FetchEmailStatistics

Fetch aggregated email statistics in specified intervals.

HubspotMarketingApi.GetEmailAbTestVariation

Retrieve the variation of an A/B test marketing email.

HubspotMarketingApi.ResetEmailDraftToLive

Reset an email draft to match the live version.

HubspotMarketingApi.RestoreEmailRevisionToDraft

Restore a previous email revision to draft state.

HubspotMarketingApi.RetrieveEmailDraft

Retrieve the draft version of a specified email.

HubspotMarketingApi.UpdateEmailDraft

Create or update the draft version of a marketing email.

HubspotMarketingApi.GetEmailRevisions

Retrieve all versions of a marketing email.

HubspotMarketingApi.UnpublishMarketingEmail

Unpublish a HubSpot marketing email.

HubspotMarketingApi.GetMarketingEmailRevision

Retrieve a specific revision of a marketing email.

HubspotMarketingApi.CloneHubspotEmail

Clone an existing HubSpot marketing email.

HubspotMarketingApi.HubspotMarketingEmailFilter

Retrieve and filter HubSpot marketing emails.

HubspotMarketingApi.CreateMarketingEmail

Create a new marketing email in HubSpot.

HubspotMarketingApi.RestoreEmailRevision

Restore a previous revision of a marketing email.

HubspotMarketingApi.GetMarketingEmailDetails

Retrieve details for a specific marketing email.

HubspotMarketingApi.DeleteMarketingEmail

Delete an existing marketing email by ID.

HubspotMarketingApi.UpdateMarketingEmailProperties

Change properties of a marketing email.

HubspotMarketingApi.GetMarketingEventParticipationsBreakdown

Retrieve participations breakdown for a specific marketing event.

HubspotMarketingApi.RecordMarketingEventAttendance

Record participation of HubSpot contacts in a Marketing Event.

HubspotMarketingApi.RecordHubspotSubscriberState

Record subscriber state for HubSpot contacts and events.

HubspotMarketingApi.GetMarketingEventDetails

Retrieve details of a specific marketing event.

HubspotMarketingApi.UpsertMarketingEvent

Upsert a marketing event in HubSpot.

HubspotMarketingApi.DeleteMarketingEvent

Deletes a specified HubSpot marketing event.

HubspotMarketingApi.UpdateMarketingEventDetails

Update details of an existing marketing event.

HubspotMarketingApi.UpsertMarketingEvents

Upsert multiple marketing events in HubSpot.

HubspotMarketingApi.RecordEventParticipationHubspot

Record participation of contacts in a HubSpot marketing event.

HubspotMarketingApi.GetMarketingEventParticipationBreakdown

Retrieve the participation breakdown for a marketing event.

HubspotMarketingApi.FetchEventDetails

Fetch details of a marketing event by its object ID.

HubspotMarketingApi.RemoveMarketingEvent

Deletes a specified marketing event by objectId.

HubspotMarketingApi.ModifyEventInformation

Update details of a specific marketing event.

HubspotMarketingApi.GetMarketingEventAssociatedLists

Retrieve lists associated with a specific marketing event.

HubspotMarketingApi.GetMarketingEventLists

Retrieve lists associated with a specific marketing event.

HubspotMarketingApi.RegisterEventParticipation

Logs event participation for contacts using email addresses.

HubspotMarketingApi.GetAllMarketingEvents

Retrieve all marketing events from the portal.

HubspotMarketingApi.RecordEventAttendance

Record participation of HubSpot contacts in a marketing event.

HubspotMarketingApi.UpdateMarketingEventsBatch

Update multiple marketing events by objectId.

HubspotMarketingApi.DeleteMarketingEvents

Delete multiple marketing events by object ID.

HubspotMarketingApi.GetEventParticipationCounters

Retrieve participation counters for a specific marketing event.

HubspotMarketingApi.SearchMarketingEventsByExternalId

Search for marketing events by external ID.

HubspotMarketingApi.GetMarketingEventParticipationCounters

Retrieve participation counters for a marketing event.

HubspotMarketingApi.RemoveMarketingEvents

Delete multiple HubSpot marketing events by specific IDs.

HubspotMarketingApi.CancelMarketingEvent

Cancel a HubSpot marketing event.

HubspotMarketingApi.AssociateListWithMarketingEvent

Associate a list with a marketing event by their IDs.

HubspotMarketingApi.DisassociateListFromMarketingEvent

Disassociate a list from a marketing event using event and list IDs.

HubspotMarketingApi.RecordSubscriberState

Record a subscriber's state for a marketing event using email.

HubspotMarketingApi.LinkListToEvent

Associates a marketing list with an event in HubSpot.

HubspotMarketingApi.DisassociateMarketingEventList

Disassociate a list from a HubSpot marketing event using IDs.

HubspotMarketingApi.MarkMarketingEventCompleted

Mark a marketing event as completed in HubSpot.

HubspotMarketingApi.CreateMarketingEvent

Create a new marketing event in HubSpot.

HubspotMarketingApi.GetContactParticipationsBreakdown

Retrieve a contact's event participation details by ID or email.

HubspotMarketingApi.FindHubspotMarketingEvents

Fetch HubSpot marketing events by externalEventId.

HubspotMarketingApi.SendMarketingEmail

Send a template email to a specific recipient.

HubspotMarketingApi.SendTransactionalEmail

Send a transactional email asynchronously.

HubspotMarketingApi.QuerySmtpTokens

Retrieve SMTP API tokens by campaign name or emailCampaignId.

HubspotMarketingApi.CreateSmtpApiToken

Creates a SMTP API token for transaction emails.

HubspotMarketingApi.ResetPasswordForToken

Resets the password for a specified token.

HubspotMarketingApi.GetSmtpTokenById

Retrieve details of an SMTP token using its ID.

HubspotMarketingApi.DeleteSmtpToken

Delete an SMTP token by ID in HubSpot Marketing.

If you need to perform an action that’s not listed here, you can [get in touch with us](mailto:contact@arcade.dev) to request a new tool, or [create your own tools](/guides/create-tools/tool-basics/build-mcp-server.md).

## HubspotMarketingApi.GetCampaignSpendItem



Retrieve details of a specific campaign spend item.

**Parameters**

-   **campaign\_guid** (`string`, required) Unique identifier for the marketing campaign to retrieve the spend item from.
-   **spend\_item\_identifier** (`integer`, required) Unique identifier for the spend item in the campaign.

## HubspotMarketingApi.UpdateCampaignSpend



Update a specific campaign spend item by ID.

**Parameters**

-   **campaign\_guid** (`string`, required) Unique identifier for the campaign.
-   **spend\_amount** (`number`, required) The new amount value for the campaign spend. Specify this as a number representing the monetary value.
-   **spend\_identifier** (`integer`, required) Unique identifier for the spend item in the campaign to be updated.
-   **spend\_item\_name** (`string`, required) The new name for the campaign spend item. This should be a descriptive string defining the spend item.
-   **spend\_order** (`integer`, required) The order or sequence number of the spend item within the campaign. It determines the priority or arrangement of the spend items.
-   **spend\_item\_description** (`string`, optional) Details or notes about the campaign spend item.

## HubspotMarketingApi.RemoveCampaignSpendItem



Deletes a specific campaign spend item by ID.

**Parameters**

-   **campaign\_identifier** (`string`, required) Unique identifier for the specific marketing campaign.
-   **spend\_item\_id** (`integer`, required) Unique identifier for the specific spend item to be deleted from the campaign.

## HubspotMarketingApi.UpdateCampaignBatch



Update a batch of marketing campaigns efficiently.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotMarketingApi.GetCampaignBudget



Retrieve details of a specific marketing campaign budget item.

**Parameters**

-   **budget\_item\_id** (`integer`, required) Unique identifier for the budget item to retrieve details.
-   **campaign\_guid** (`string`, required) The unique identifier for the marketing campaign to access its budget details.

## HubspotMarketingApi.UpdateCampaignBudget



Update a specific campaign budget item by ID.

**Parameters**

-   **budget\_amount** (`number`, required) The amount to set for the budget item. This is a numerical value representing the budget in the specified currency.
-   **budget\_id** (`integer`, required) Unique identifier for the budget item to be updated.
-   **budget\_item\_name** (`string`, required) The new name for the budget item. It should be a descriptive label that clearly identifies the budget item within the campaign.
-   **campaign\_guid** (`string`, required) A unique identifier for the campaign. Use this to specify which campaign’s budget item to update.
-   **priority\_order** (`integer`, required) Specify the order in which the budget item appears. Accepted values are integers.
-   **budget\_item\_description** (`string`, optional) A string to describe the budget item. Provide a brief explanation of what this budget is for.

## HubspotMarketingApi.DeleteCampaignBudgetItem



Delete a specific campaign budget item by ID.

**Parameters**

-   **budget\_item\_id** (`integer`, required) Unique identifier for the budget item to be deleted.
-   **campaign\_guid** (`string`, required) Unique identifier for the campaign to delete the budget item from.

## HubspotMarketingApi.AssociateAssetWithCampaign



Associate a specified asset with a HubSpot campaign.

**Parameters**

-   **asset\_id** (`string`, required) The unique identifier for the asset to be associated with a campaign. This should be provided as a string.
-   **asset\_type** (`string`, required) Specify the asset type to associate with the campaign. Allowed values are FORM, OBJECT\_LIST, and EXTERNAL\_WEB\_URL.
-   **campaign\_unique\_identifier** (`string`, required) Unique identifier for the campaign, formatted as a UUID. Essential for associating an asset with the correct campaign.

## HubspotMarketingApi.DisassociateCampaignAsset



Disassociate an asset from a HubSpot marketing campaign.

**Parameters**

-   **asset\_id** (`string`, required) Unique identifier for the asset to be disassociated from the campaign.
-   **asset\_type** (`string`, required) Specify the type of asset to disassociate, limited to FORM, OBJECT\_LIST, or EXTERNAL\_WEB\_URL.
-   **campaign\_unique\_identifier** (`string`, required) Unique identifier for the campaign, formatted as a UUID.

## HubspotMarketingApi.GetCampaignBudgetDetails



Retrieve detailed budget and spend details for a campaign.

**Parameters**

-   **campaign\_unique\_identifier** (`string`, required) Unique identifier for the campaign, formatted as a UUID.

## HubspotMarketingApi.FetchMarketingCampaignBatches



Retrieve a batch of HubSpot marketing campaigns and assets.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **fetch\_start\_date** (`string`, optional) Start date to fetch asset metrics, formatted as YYYY-MM-DD. Determines the period for asset metrics. Optional. Only used when mode is ‘execute’.
-   **end\_date\_for\_asset\_metrics** (`string`, optional) End date to fetch asset metrics, formatted as YYYY-MM-DD. If not provided, no asset metrics will be fetched. Only used when mode is ‘execute’.
-   **requested\_properties** (`array[string]`, optional) Comma-separated list of properties to return in the response. Ignored if values are empty, resulting in an empty properties map if not specified. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotMarketingApi.GetMarketingCampaigns



Retrieve a page of marketing campaigns with optional filters.

**Parameters**

-   **campaign\_name\_filter** (`string`, optional) A substring to filter campaigns by name. Returns campaigns containing this substring. Optional: returns all if not provided.
-   **max\_results\_limit** (`integer`, optional) Maximum number of campaigns to return (1-100). Default is 50.
-   **pagination\_cursor** (`string`, optional) A cursor for pagination. If provided, results start after the given cursor. Example: NTI1Cg%3D%3D
-   **requested\_properties** (`array[string]`, optional) A list of properties to be included in the response. Comma-separate values are required. If any specified property is empty, it will be ignored.
-   **sort\_by** (`string`, optional) Specify the field to sort results by. Use ’-’ to denote descending order. Options are hs\_name, createdAt, updatedAt. Default is hs\_name.

## HubspotMarketingApi.CreateMarketingCampaign



Create a marketing campaign and retrieve its details.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotMarketingApi.GetCampaignAttributionMetrics



Retrieve attribution metrics for a specific campaign.

**Parameters**

-   **campaign\_unique\_identifier** (`string`, required) Unique identifier for the campaign, formatted as a UUID. Required to retrieve specific campaign metrics.
-   **report\_end\_date** (`string`, optional) Set the end date for the report data in YYYY-MM-DD format. Defaults to the current date if not specified.
-   **start\_date\_for\_report** (`string`, optional) The start date for the report data, formatted as YYYY-MM-DD. Default is 2006-01-01.

## HubspotMarketingApi.ListCampaignAssets



Retrieve all assets of a specified type for a campaign.

**Parameters**

-   **asset\_type** (`string`, required) The type of asset to fetch for the campaign, e.g., ‘email’, ‘webpage’.
-   **campaign\_identifier** (`string`, required) Unique identifier for the campaign in UUID format.
-   **end\_date\_for\_asset\_metrics** (`string`, optional) End date to fetch asset metrics, formatted as YYYY-MM-DD. Used for fetching metrics of assets within a specified period. Optional parameter.
-   **maximum\_results\_limit** (`string`, optional) The maximum number of asset results to return. Default is 10.
-   **metrics\_start\_date** (`string`, optional) Start date to fetch asset metrics, formatted as YYYY-MM-DD. Used to fetch metrics for a specified period. If not provided, no metrics will be fetched.
-   **pagination\_cursor** (`string`, optional) A cursor for pagination. If provided, results start after this cursor. Example: NTI1Cg%3D%3D

## HubspotMarketingApi.ArchiveCampaignsBatch



Delete a batch of marketing campaigns.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotMarketingApi.GetCampaignRevenueReport



Fetch revenue attribution report for a specific campaign.

**Parameters**

-   **campaign\_unique\_identifier** (`string`, required) Unique identifier for the campaign, formatted as a UUID.
-   **attribution\_model** (`string`, optional) The revenue attribution model to be used. Allowed values: LINEAR, FIRST\_INTERACTION, LAST\_INTERACTION, FULL\_PATH, U\_SHAPED, W\_SHAPED, TIME\_DECAY, J\_SHAPED, INVERSE\_J\_SHAPED. Defaults to LINEAR.
-   **report\_end\_date** (`string`, optional) End date for the report data in YYYY-MM-DD format. Defaults to the current date.
-   **report\_start\_date** (`string`, optional) The start date for the report data in the format YYYY-MM-DD. Default is 2006-01-01.

## HubspotMarketingApi.CreateMarketingCampaignBatch



Create a batch of marketing campaigns in HubSpot.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotMarketingApi.AddCampaignBudgetItem



Add a new budget item to a marketing campaign.

**Parameters**

-   **budget\_amount** (`number`, required) The monetary amount for the budget item. It should be a numeric value denoting the budget amount to add to the campaign.
-   **budget\_item\_name** (`string`, required) Name of the budget item to be added to the campaign. It should be descriptive and concise.
-   **budget\_item\_order** (`integer`, required) The position or priority of the budget item in the list. Provide as an integer.
-   **campaign\_id** (`string`, required) Unique identifier for the campaign in HubSpot Marketing.
-   **budget\_item\_description** (`string`, optional) A brief description of the budget item being added to the campaign. This can include details about what the budget will be used for and any other relevant information.

## HubspotMarketingApi.GetCampaignDetails



Retrieve details and metrics for a specific marketing campaign.

**Parameters**

-   **campaign\_guid** (`string`, required) Unique identifier for the campaign, formatted as a UUID.
-   **end\_date\_for\_asset\_metrics** (`string`, optional) End date to fetch asset metrics, formatted as YYYY-MM-DD. If omitted, no metrics will be retrieved.
-   **metrics\_start\_date** (`string`, optional) Start date for fetching asset metrics. Format as YYYY-MM-DD. Metrics are only retrieved if both start and end dates are provided.
-   **properties\_list** (`array[string]`, optional) List specific properties to return in the response. Leave empty for an empty properties map.

## HubspotMarketingApi.DeleteMarketingCampaign



Delete a specified marketing campaign.

**Parameters**

-   **campaign\_guid** (`string`, required) Unique identifier for the campaign, formatted as a UUID.

## HubspotMarketingApi.UpdateCampaignProperties



Update properties of a HubSpot marketing campaign.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **campaign\_uuid** (`string`, optional) Unique identifier for the campaign, formatted as a UUID. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotMarketingApi.FetchCampaignContactIds



Fetch contact IDs for a specific campaign and contact type.

**Parameters**

-   **campaign\_identifier** (`string`, required) Unique identifier for the campaign formatted as a UUID.
-   **contact\_type\_filter** (`string`, required) Specifies the type of metric for filtering contacts. Options: contactFirstTouch, contactLastTouch, influencedContacts.
-   **contact\_fetch\_limit** (`integer`, optional) Specify the maximum number of contact IDs to retrieve, with a default of 100.
-   **pagination\_cursor** (`string`, optional) A string cursor for pagination to start results after the given point. Example: NTI1Cg%3D%3D
-   **report\_end\_date** (`string`, optional) The end date for the report data in YYYY-MM-DD format. Defaults to the current date if not specified.
-   **start\_date** (`string`, optional) The start date for the report data in YYYY-MM-DD format. Default is 2006-01-01.

## HubspotMarketingApi.CreateCampaignSpend



Create a new campaign spend item for a marketing campaign.

**Parameters**

-   **campaign\_id** (`string`, required) Unique identifier for the marketing campaign to add the spend item to.
-   **spend\_amount** (`number`, required) The monetary value of the spend item to be added to the campaign. This should be a numerical value representing the amount in the currency used by the campaign.
-   **spend\_item\_name** (`string`, required) The name of the spend item to be created for the campaign. This should be a descriptive title or label for the expenditure.
-   **spend\_item\_order** (`integer`, required) The order of the spend item in the campaign. Use an integer to specify the sequence.
-   **spend\_description** (`string`, optional) A brief description of the campaign spend item, detailing the nature or purpose of the expenditure.

## HubspotMarketingApi.GetFormById



Retrieve a marketing form by its ID.

**Parameters**

-   **form\_id** (`string`, required) The unique identifier for the specific marketing form to retrieve. This ID is required to fetch the form details.
-   **return\_archived\_only** (`boolean`, optional) Set to true to return only archived forms.

## HubspotMarketingApi.UpdateHubspotForm



Update all fields of a HubSpot form.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **hubspot\_form\_id** (`string`, optional) The unique identifier for the HubSpot form to update. This ID specifies which form’s fields will be replaced. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotMarketingApi.ArchiveMarketingForm



Archive a marketing form in HubSpot.

**Parameters**

-   **form\_id** (`string`, required) The ID of the form to archive in HubSpot. This is required to process the archive request.

## HubspotMarketingApi.UpdateHubspotMarketingForm



Update components of a HubSpot marketing form.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **form\_id** (`string`, optional) The unique identifier for the form to update. Must be provided to specify which form’s components to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotMarketingApi.ListHubspotForms



Retrieve a list of HubSpot marketing forms.

**Parameters**

-   **included\_form\_types** (`array[string]`, optional) List of form types to include in results, e.g., ‘hubspot’, ‘workflow’, etc.
-   **paging\_cursor\_token** (`string`, optional) The token indicating the cursor position for paginated results. Use `paging.next.after` from the previous response to fetch more results.
-   **results\_per\_page** (`integer`, optional) Specify the maximum number of forms to retrieve per page.
-   **return\_only\_archived\_forms** (`boolean`, optional) Set to true to return only archived forms in the results.

## HubspotMarketingApi.CreateMarketingForm



Create a new marketing form in HubSpot.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotMarketingApi.GetEmailStatistics



Get aggregated email statistics in a specified time span.

**Parameters**

This tool does not take any parameters.

## HubspotMarketingApi.PublishHubspotEmail



Publish a HubSpot marketing email.

**Parameters**

-   **hubspot\_email\_id** (`string`, required) The unique identifier for the HubSpot marketing email to publish.

## HubspotMarketingApi.CreateAbTestEmailVariation



Create a new variation for an email A/B test.

**Parameters**

-   **email\_content\_id** (`string`, required) ID of the email content to create a variation for A/B testing.
-   **variation\_name** (`string`, required) The name of the new email variation for the A/B test. Provide a descriptive name to easily identify this variation.

## HubspotMarketingApi.FetchEmailStatistics



Fetch aggregated email statistics in specified intervals.

**Parameters**

This tool does not take any parameters.

## HubspotMarketingApi.GetEmailAbTestVariation



Retrieve the variation of an A/B test marketing email.

**Parameters**

-   **email\_identifier** (`string`, required) The unique identifier of the marketing email to obtain its A/B test variation.

## HubspotMarketingApi.ResetEmailDraftToLive



Reset an email draft to match the live version.

**Parameters**

-   **email\_id** (`string`, required) The unique identifier for the email draft to be reset. This is a string value used to specify which draft to revert.

## HubspotMarketingApi.RestoreEmailRevisionToDraft



Restore a previous email revision to draft state.

**Parameters**

-   **email\_identifier** (`string`, required) The unique identifier of the marketing email whose revision is to be restored to draft. This should match the specific email ID format used by HubSpot.
-   **revision\_id** (`string`, required) The unique identifier of the email revision to be restored to draft state.

## HubspotMarketingApi.RetrieveEmailDraft



Retrieve the draft version of a specified email.

**Parameters**

-   **email\_id** (`string`, required) The unique identifier of the email to retrieve the draft for. This ID is used to specify which email’s draft or published version should be accessed.

## HubspotMarketingApi.UpdateEmailDraft



Create or update the draft version of a marketing email.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **email\_id** (`string`, optional) The unique identifier of the marketing email to update or create a draft for. This is required to specify which email draft you are modifying. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotMarketingApi.GetEmailRevisions



Retrieve all versions of a marketing email.

**Parameters**

-   **email\_id** (`string`, required) The unique identifier of the marketing email to retrieve revisions for.

## HubspotMarketingApi.UnpublishMarketingEmail



Unpublish a HubSpot marketing email.

**Parameters**

-   **email\_identifier** (`string`, required) The unique identifier of the email you wish to unpublish in HubSpot Marketing.

## HubspotMarketingApi.GetMarketingEmailRevision



Retrieve a specific revision of a marketing email.

**Parameters**

-   **email\_id** (`string`, required) The unique identifier for the marketing email. This ID is required to specify which email’s revision details to retrieve.
-   **email\_revision\_id** (`string`, required) The unique ID of the specific email revision to retrieve. Provide the revisionId for accessing the exact version.

## HubspotMarketingApi.CloneHubspotEmail



Clone an existing HubSpot marketing email.

**Parameters**

-   **original\_email\_id** (`string`, required) The unique identifier of the email you wish to clone in HubSpot.
-   **cloned\_email\_name** (`string`, optional) The new name for the cloned email. This should be a descriptive string to identify the copy.
-   **email\_language** (`string`, optional) Specify the language for the cloned email, e.g., ‘en’ for English, ‘fr’ for French.

## HubspotMarketingApi.HubspotMarketingEmailFilter



Retrieve and filter HubSpot marketing emails.

**Parameters**

This tool does not take any parameters.

## HubspotMarketingApi.CreateMarketingEmail



Create a new marketing email in HubSpot.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotMarketingApi.RestoreEmailRevision



Restore a previous revision of a marketing email.

**Parameters**

-   **email\_id** (`string`, required) The unique identifier for the marketing email you want to restore. This ID is required to specify which email’s revision needs restoration.
-   **revision\_id** (`string`, required) The unique identifier for the specific revision of the email to be restored.

## HubspotMarketingApi.GetMarketingEmailDetails



Retrieve details for a specific marketing email.

**Parameters**

-   **email\_id** (`string`, required) The unique identifier for the specific marketing email. Required to retrieve email details.

## HubspotMarketingApi.DeleteMarketingEmail



Delete an existing marketing email by ID.

**Parameters**

-   **email\_id** (`string`, required) The unique ID of the marketing email to be deleted.

## HubspotMarketingApi.UpdateMarketingEmailProperties



Change properties of a marketing email.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **email\_identifier** (`string`, optional) The unique identifier of the marketing email to be updated. Required to specify which email’s properties are being changed. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotMarketingApi.GetMarketingEventParticipationsBreakdown



Retrieve participations breakdown for a specific marketing event.

**Parameters**

-   **marketing\_event\_id** (`integer`, required) The internal id of the marketing event in HubSpot.
-   **contact\_identifier** (`string`, optional) The identifier of the Contact. It can be an email or internal ID.
-   **last\_retrieved\_position\_cursor** (`string`, optional) The cursor indicating the position of the last retrieved item for pagination.
-   **participation\_state** (`string`, optional) The participation state filter, which can be REGISTERED, CANCELLED, ATTENDED, or NO\_SHOW.
-   **response\_size\_limit** (`integer`, optional) Set the maximum number of records to return. Default is 10, maximum is 100.

## HubspotMarketingApi.RecordMarketingEventAttendance



Record participation of HubSpot contacts in a Marketing Event.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **external\_event\_id** (`string`, optional) The identifier for the marketing event in the external event application. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **new\_subscriber\_state** (`string`, optional) Specifies the new state of the contact in relation to the marketing event, such as ‘register’, ‘attend’, or ‘cancel’. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **external\_account\_id** (`string`, optional) The ID identifying the account associated with the marketing event in the external application. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotMarketingApi.RecordHubspotSubscriberState



Record subscriber state for HubSpot contacts and events.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **external\_account\_id** (`string`, optional) The account ID associated with this marketing event in the external event application. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **event\_id\_in\_external\_app** (`string`, optional) The ID of the marketing event in the external application. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **subscriber\_state** (`string`, optional) The new subscriber state for the HubSpot contacts and the specified marketing event, such as ‘register’, ‘attend’, or ‘cancel’. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotMarketingApi.GetMarketingEventDetails



Retrieve details of a specific marketing event.

**Parameters**

-   **external\_account\_id** (`string`, required) The accountId associated with this marketing event in the external event application.
-   **marketing\_event\_id** (`string`, required) The unique identifier of the marketing event in the external application.

## HubspotMarketingApi.UpsertMarketingEvent



Upsert a marketing event in HubSpot.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **external\_event\_id** (`string`, optional) The ID of the marketing event in the external application. Used to upsert the event in HubSpot. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotMarketingApi.DeleteMarketingEvent



Deletes a specified HubSpot marketing event.

**Parameters**

-   **external\_account\_id** (`string`, required) The account ID associated with the marketing event to be deleted in the external event application.
-   **marketing\_event\_id** (`string`, required) The ID of the marketing event in the external event application to be deleted.

## HubspotMarketingApi.UpdateMarketingEventDetails



Update details of an existing marketing event.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **external\_account\_id** (`string`, optional) The account ID associated with this marketing event in the external event application. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **external\_event\_id** (`string`, optional) The unique identifier of the marketing event in the external event application. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotMarketingApi.UpsertMarketingEvents



Upsert multiple marketing events in HubSpot.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotMarketingApi.RecordEventParticipationHubspot



Record participation of contacts in a HubSpot marketing event.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **external\_event\_id** (`string`, optional) The ID of the marketing event in the external event application. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **subscriber\_state** (`string`, optional) The new subscriber state for HubSpot contacts in the specified event. Options: ‘register’, ‘attend’, ‘cancel’. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **external\_account\_id** (`string`, optional) The account ID linked to the marketing event in the external event application. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotMarketingApi.GetMarketingEventParticipationBreakdown



Retrieve the participation breakdown for a marketing event.

**Parameters**

-   **external\_account\_id** (`string`, required) The ID associated with the marketing event’s account in the external application.
-   **external\_event\_id** (`string`, required) The ID of the marketing event in the external event application.
-   **contact\_identifier** (`string`, optional) The unique identifier for the contact, such as an email or internal ID.
-   **pagination\_cursor** (`string`, optional) The cursor indicating the position of the last retrieved item, used for pagination.
-   **participation\_state\_filter** (`string`, optional) The participation state to filter results. Possible values: REGISTERED, CANCELLED, ATTENDED, NO\_SHOW.
-   **response\_size\_limit** (`integer`, optional) Maximum number of participations to retrieve. Default is 10, maximum is 100.

## HubspotMarketingApi.FetchEventDetails



Fetch details of a marketing event by its object ID.

**Parameters**

-   **marketing\_event\_object\_id** (`string`, required) The internal ID of the marketing event in HubSpot. Used to fetch specific event details.

## HubspotMarketingApi.RemoveMarketingEvent



Deletes a specified marketing event by objectId.

**Parameters**

-   **marketing\_event\_id** (`string`, required) The internal ID of the marketing event to be deleted in HubSpot.

## HubspotMarketingApi.ModifyEventInformation



Update details of a specific marketing event.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **event\_internal\_id** (`string`, optional) The internal ID of the marketing event in HubSpot to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotMarketingApi.GetMarketingEventAssociatedLists



Retrieve lists associated with a specific marketing event.

**Parameters**

-   **external\_account\_id** (`string`, required) The account ID associated with the marketing event in the external application.
-   **external\_event\_id** (`string`, required) The ID of the marketing event from the external event application.

## HubspotMarketingApi.GetMarketingEventLists



Retrieve lists associated with a specific marketing event.

**Parameters**

-   **marketing\_event\_id** (`string`, required) The internal ID of the marketing event in HubSpot to retrieve associated lists.

## HubspotMarketingApi.RegisterEventParticipation



Logs event participation for contacts using email addresses.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **marketing\_event\_id** (`string`, optional) The internal ID of the marketing event in HubSpot. It is required to log participation for contacts. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **attendance\_state** (`string`, optional) The attendance state for the contact in the event. Options: ‘register’, ‘attend’, or ‘cancel’. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotMarketingApi.GetAllMarketingEvents



Retrieve all marketing events from the portal.

**Parameters**

-   **cursor\_position\_after** (`string`, optional) The cursor indicating the position of the last retrieved item for pagination purposes.
-   **response\_limit** (`integer`, optional) Sets the maximum number of marketing events to retrieve, between 10 and 100.

## HubspotMarketingApi.RecordEventAttendance



Record participation of HubSpot contacts in a marketing event.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **marketing\_event\_id** (`string`, optional) The internal ID of the marketing event in HubSpot for which attendance is being recorded. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **attendance\_state** (`string`, optional) Specifies the attendance state of the contact: ‘register’, ‘attend’, or ‘cancel’. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotMarketingApi.UpdateMarketingEventsBatch



Update multiple marketing events by objectId.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotMarketingApi.DeleteMarketingEvents



Delete multiple marketing events by object ID.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotMarketingApi.GetEventParticipationCounters



Retrieve participation counters for a specific marketing event.

**Parameters**

-   **event\_id** (`string`, required) The unique identifier for the marketing event in the external application. Required to retrieve participation data.
-   **external\_account\_id** (`string`, required) The account ID associated with the marketing event in the external application.

## HubspotMarketingApi.SearchMarketingEventsByExternalId



Search for marketing events by external ID.

**Parameters**

-   **external\_event\_id** (`string`, required) The ID of the marketing event in the external event application used to search for matching events.

## HubspotMarketingApi.GetMarketingEventParticipationCounters



Retrieve participation counters for a marketing event.

**Parameters**

-   **marketing\_event\_id** (`integer`, required) The internal ID of the marketing event in HubSpot, required to fetch participation counters.

## HubspotMarketingApi.RemoveMarketingEvents



Delete multiple HubSpot marketing events by specific IDs.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotMarketingApi.CancelMarketingEvent



Cancel a HubSpot marketing event.

**Parameters**

-   **external\_account\_id** (`string`, required) The account ID associated with the marketing event in the external event application.
-   **external\_event\_id** (`string`, required) The ID of the marketing event in the external event application. Required to identify the event to be cancelled.

## HubspotMarketingApi.AssociateListWithMarketingEvent



Associate a list with a marketing event by their IDs.

**Parameters**

-   **list\_id** (`string`, required) The ILS ID of the list to associate with the marketing event.
-   **marketing\_event\_id** (`string`, required) The internal ID of the marketing event in HubSpot for association.

## HubspotMarketingApi.DisassociateListFromMarketingEvent



Disassociate a list from a marketing event using event and list IDs.

**Parameters**

-   **list\_identifier** (`string`, required) The ILS ID of the list to be disassociated from the marketing event.
-   **marketing\_event\_id** (`string`, required) The internal ID of the marketing event in HubSpot to disassociate the list from.

## HubspotMarketingApi.RecordSubscriberState



Record a subscriber’s state for a marketing event using email.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **external\_account\_id** (`string`, optional) The account ID linked to the marketing event in the external application, required for identifying events. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **marketing\_event\_id** (`string`, optional) The unique identifier for the marketing event in the external application. Required to record subscriber state. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **subscriber\_state** (`string`, optional) The new subscriber state for a HubSpot contact in the specified marketing event. Options include ‘register’, ‘attend’, or ‘cancel’. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotMarketingApi.LinkListToEvent



Associates a marketing list with an event in HubSpot.

**Parameters**

-   **external\_account\_id** (`string`, required) The account ID associated with the marketing event in the external event application.
-   **external\_event\_id** (`string`, required) The ID of the marketing event in the external event application. Used to specify which event to associate with the list.
-   **ils\_list\_id** (`string`, required) The ILS ID of the list to associate with the marketing event.

## HubspotMarketingApi.DisassociateMarketingEventList



Disassociate a list from a HubSpot marketing event using IDs.

**Parameters**

-   **external\_account\_id** (`string`, required) The account ID linked to the marketing event in the external application.
-   **list\_id** (`string`, required) The ILS ID of the list to be disassociated from the marketing event.
-   **marketing\_event\_id** (`string`, required) ID of the marketing event in the external application to be disassociated.

## HubspotMarketingApi.MarkMarketingEventCompleted



Mark a marketing event as completed in HubSpot.

**Parameters**

-   **event\_end\_datetime** (`string`, required) The date and time when the marketing event ended. Expected in ISO 8601 format.
-   **event\_start\_date\_time** (`string`, required) The start date and time of the marketing event, formatted as an ISO 8601 string.
-   **external\_account\_id** (`string`, required) The account ID associated with the marketing event in the external application.
-   **marketing\_event\_id** (`string`, required) The unique ID of the marketing event in the external event application.

## HubspotMarketingApi.CreateMarketingEvent



Create a new marketing event in HubSpot.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotMarketingApi.GetContactParticipationsBreakdown



Retrieve a contact’s event participation details by ID or email.

**Parameters**

-   **contact\_identifier** (`string`, required) The identifier of the contact, which can be either an email or an internal ID.
-   **pagination\_cursor** (`string`, optional) Cursor for the last retrieved item to manage pagination.
-   **participation\_state** (`string`, optional) The participation state for the contact. Options: REGISTERED, CANCELLED, ATTENDED, NO\_SHOW.
-   **response\_size\_limit** (`integer`, optional) Specify the maximum number of participation records to return. The default is 10, and the maximum is 100.

## HubspotMarketingApi.FindHubspotMarketingEvents



Fetch HubSpot marketing events by externalEventId.

**Parameters**

-   **external\_event\_id** (`string`, required) The ID of the marketing event in the external application (externalEventId) to search for.

## HubspotMarketingApi.SendMarketingEmail



Send a template email to a specific recipient.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotMarketingApi.SendTransactionalEmail



Send a transactional email asynchronously.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotMarketingApi.QuerySmtpTokens



Retrieve SMTP API tokens by campaign name or emailCampaignId.

**Parameters**

-   **campaign\_name** (`string`, optional) Name of the campaign tied to the SMTP API token to query tokens.
-   **email\_campaign\_id** (`string`, optional) Identifier assigned to the campaign provided during the token creation. Used to retrieve a specific SMTP API token.
-   **maximum\_tokens\_to\_return** (`integer`, optional) Specify the maximum number of SMTP API tokens to return in the response.
-   **result\_pagination\_start** (`string`, optional) Specify a starting point for retrieving the next set of results. Use this for paginating through results.

## HubspotMarketingApi.CreateSmtpApiToken



Creates a SMTP API token for transaction emails.

**Parameters**

-   **campaign\_name** (`string`, required) The name of the campaign associated with the SMTP API token.
-   **create\_contact\_for\_recipients** (`boolean`, required) Indicates whether a contact should be created for email recipients. Set to true to create a contact.

## HubspotMarketingApi.ResetPasswordForToken



Resets the password for a specified token.

**Parameters**

-   **token\_identifier** (`string`, required) The unique string identifier for the token, used to reset its password.

## HubspotMarketingApi.GetSmtpTokenById



Retrieve details of an SMTP token using its ID.

**Parameters**

-   **smtp\_token\_id** (`string`, required) The unique identifier of the SMTP token to be queried.

## HubspotMarketingApi.DeleteSmtpToken



Delete an SMTP token by ID in HubSpot Marketing.

**Parameters**

-   **smtp\_token\_id** (`string`, required) The unique identifier of the SMTP token to be deleted, provided during token creation.

## Reference

Below is a reference of enumerations used by some of the tools in the HubspotMarketingApi MCP Server:

### ToolMode

-   **GET\_REQUEST\_SCHEMA**: `get_request_schema`
-   **EXECUTE**: `execute`

## Auth

The HubspotMarketingApi MCP Server uses the Auth Provider with id `arcade-hubspot` to connect to users’ HubspotMarketingApi accounts. In order to use the MCP Server, you will need to configure the `arcade-hubspot` auth provider.

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_hubspot_marketing_api ``` Learn more](/guides/deployment-hosting.md)

Last updated on January 5, 2026

[HubspotEventsApi](/en/resources/integrations/sales/hubspot-events-api.md)
[HubspotMeetingsApi](/en/resources/integrations/sales/hubspot-meetings-api.md)
