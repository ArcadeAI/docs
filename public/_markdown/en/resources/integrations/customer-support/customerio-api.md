---
title: "CustomerioApi"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Customer Support](/en/resources/integrations/customer-support/zendesk.md)
CustomerioApi

# CustomerioApi

Arcade Unoptimized

**Description:** Tools that enable LLMs to interact directly with the Customer.io App API

**Author:** Arcade

**Auth:** API Key

[![PyPI Version](https://img.shields.io/pypi/v/arcade_customerio_api)](https://pypi.org/project/arcade_customerio_api/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_customerio_api)](https://pypi.org/project/arcade_customerio_api/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_customerio_api)](https://pypi.org/project/arcade_customerio_api/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_customerio_api)](https://pypi.org/project/arcade_customerio_api/)

CustomerioApi is a [Unoptimized MCP Server](/guides/create-tools/improve/types-of-tools.md#unoptimized-tools)
: each tool mirrors one HTTP endpoint and offers LLMs a way to interact with the low-level API.



Differently from [Optimized MCP Servers](/guides/create-tools/improve/types-of-tools.md#optimized-tools)
, Unoptimized tools are heavily influenced by the original API design, which is not usually optimized for LLM usage. For this reason, we recommend thoroughly evaluating the tools with your Agents or chatbots before using it in production. [Read more](/guides/create-tools/improve/types-of-tools.md) about Optimized vs Unoptimized tools.

The CustomerioApi MCP Server offers a comprehensive suite of tools for managing customer communications and marketing campaigns through the Customer.io platform.

## Available Tools

Tool Name

Description

CustomerioApi.TriggerBroadcastMessage

Trigger a broadcast to a specific audience using Customerio.

CustomerioApi.GetBroadcastErrors

Retrieve details of broadcast validation errors.

CustomerioApi.SendTransactionalEmail

Send a customizable transactional email.

CustomerioApi.SendTransactionalPushNotification

Send a customized transactional push notification.

CustomerioApi.SendTransactionalSms

Send a transactional SMS message using a template.

CustomerioApi.GetCampaignList

Retrieve a list of marketing campaigns.

CustomerioApi.GetCampaignMetadata

Retrieve metadata for a specific campaign.

CustomerioApi.GetCampaignMetrics

Fetch metrics for an individual campaign.

CustomerioApi.GetCampaignLinkMetrics

Get link click metrics for a campaign over specified periods.

CustomerioApi.ListCampaignActions

Retrieve operations in a campaign workflow.

CustomerioApi.GetCampaignMessages

Retrieve message deliveries from a campaign.

CustomerioApi.GetCampaignActionInfo

Retrieve details for a specific action in a campaign.

CustomerioApi.UpdateCampaignAction

Update campaign action details and content.

CustomerioApi.TranslateCampaignMessage

Fetches a translated message for a specific campaign action.

CustomerioApi.UpdateCampaignActionTranslation

Update a language variant of a campaign action.

CustomerioApi.GetCampaignActionMetrics

Retrieve metrics for a specific campaign action.

CustomerioApi.GetCampaignActionLinkMetrics

Retrieve link click metrics for a specific campaign action.

CustomerioApi.GetCampaignJourneyMetrics

Retrieve journey metrics for a specific campaign.

CustomerioApi.ListRecentActivities

Retrieve recent activity logs from the past 30 days.

CustomerioApi.ListBroadcasts

Retrieve a list of API-triggered broadcasts with metadata.

CustomerioApi.GetBroadcastMetadata

Retrieve metadata for a specific broadcast.

CustomerioApi.GetBroadcastStatus

Retrieve the status of a broadcast using its trigger ID.

CustomerioApi.GetBroadcastMetrics

Retrieve metrics for a specific broadcast over defined time steps.

CustomerioApi.GetBroadcastLinkMetrics

Retrieve metrics for link clicks in a broadcast.

CustomerioApi.GetBroadcastActions

Retrieve actions from a specific broadcast.

CustomerioApi.GetBroadcastMessageInfo

Retrieve details about broadcast message deliveries.

CustomerioApi.GetBroadcastActionInfo

Retrieve details of a specific broadcast action.

CustomerioApi.UpdateBroadcastAction

Update the contents of a broadcast action.

CustomerioApi.GetBroadcastTranslationInfo

Retrieve translation info for a broadcast message.

CustomerioApi.UpdateBroadcastActionLanguage

Update the translation for a broadcast action.

CustomerioApi.GetBroadcastActionMetrics

Retrieve metrics for a broadcast action over time steps.

CustomerioApi.GetBroadcastActionLinkMetrics

Retrieve link click metrics for a specific broadcast action.

CustomerioApi.GetBroadcastTriggers

Retrieve triggers for a specific broadcast.

CustomerioApi.UpdateCustomerAttributes

Add or update customer attribute metadata in your workspace.

CustomerioApi.UpdateEventMetadata

Update or add new events in the workspace.

CustomerioApi.CheckEmailSuppression

Retrieve suppression status and reason for an email.

CustomerioApi.FindSuppressedEmailAddresses

Retrieve email addresses suppressed for specific reasons.

CustomerioApi.RemoveEmailSuppression

Remove an email address from the suppression list.

CustomerioApi.SuppressEmailAtEsp

Suppress an email address at the email service provider.

CustomerioApi.ListExports

Retrieve a list of exports for people or campaign metrics.

CustomerioApi.GetExportInfo

Returns information about a specific export from Customerio.

CustomerioApi.DownloadExportSignedLink

Retrieve a temporary signed link to download an export.

CustomerioApi.ExportCustomerData

Export customer data based on specified filters.

CustomerioApi.ExportDeliveryData

Initiates export of delivery data for newsletters and campaigns.

CustomerioApi.UploadCsvToCustomerio

Upload a CSV file to Customerio for bulk data processing.

CustomerioApi.GetImportStatus

Retrieve the status of an import operation.

CustomerioApi.GetAllowlistIps

Retrieve IP addresses to allowlist for secure access.

CustomerioApi.FetchMessageDeliveries

Retrieve a list of message deliveries and their metrics.

CustomerioApi.GetDeliveryMessageInfo

Retrieve metrics and details for a specific message delivery.

CustomerioApi.GetArchivedMessage

Retrieve an archived copy of a message delivery.

CustomerioApi.GetNewsletters

Retrieve a list of newsletters and their metadata.

CustomerioApi.RetrieveNewsletterMetadata

Retrieve metadata for an individual newsletter.

CustomerioApi.DeleteNewsletter

Delete an individual newsletter and its associated data.

CustomerioApi.GetNewsletterMetrics

Retrieve metrics for a specific newsletter over time.

CustomerioApi.GetNewsletterLinkMetrics

Retrieve metrics for link clicks in a newsletter.

CustomerioApi.GetNewsletterVariants

Fetch content variants for a specified newsletter.

CustomerioApi.GetNewsletterMessageMetadata

Retrieve delivery info for messages sent from a newsletter.

CustomerioApi.GetNewsletterVariantInfo

Retrieve variant details of a specific newsletter.

CustomerioApi.UpdateNewsletterContent

Update a newsletter variant's content.

CustomerioApi.GetNewsletterVariantTranslation

Get information on a newsletter's language variant.

CustomerioApi.UpdateNewsletterVariantTranslation

Update a newsletter variant's translation.

CustomerioApi.GetNewsletterTestGroups

Retrieve test group details for a specific newsletter.

CustomerioApi.RetrieveNewsletterLanguageVariant

Get info on a newsletter's language variant in A/B test.

CustomerioApi.UpdateNewsletterTestTranslation

Update a newsletter's translation for A/B testing.

CustomerioApi.GetNewsletterVariantMetrics

Fetch metrics for a specific newsletter variant.

CustomerioApi.GetNewsletterVariantClickMetrics

Get link click metrics for a newsletter variant.

CustomerioApi.GetObjectTypes

Retrieve a list of object types and their IDs.

CustomerioApi.FindWorkspaceObjects

Find objects in your workspace using filter conditions.

CustomerioApi.GetRelatedPeople

Retrieve people related to a specified object.

CustomerioApi.GetObjectAttributes

Retrieve a list of attributes for a specific object.

CustomerioApi.CreateWebhook

Create a new webhook configuration for reporting.

CustomerioApi.ListReportingWebhooks

Retrieve a list of reporting webhooks.

CustomerioApi.GetWebhookInfo

Get detailed information about a specific webhook.

CustomerioApi.UpdateReportingWebhook

Update the configuration of a reporting webhook.

CustomerioApi.DeleteReportingWebhook

Delete a reporting webhook's configuration.

CustomerioApi.CreateManualSegment

Create a manual segment with name and description.

CustomerioApi.GetAllSegments

Retrieve a list of all segments for your account.

CustomerioApi.GetSegmentInfo

Retrieve information about a specific segment.

CustomerioApi.DeleteManualSegment

Delete a specified manual segment by ID.

CustomerioApi.FindSegmentDependencies

Identify campaigns and newsletters using a segment.

CustomerioApi.GetSegmentCustomerCount

Retrieve the customer count for a specific segment.

CustomerioApi.GetSegmentMembers

Retrieve customer details from a specific segment.

CustomerioApi.GetSenderList

Retrieve a list of senders from your workspace.

CustomerioApi.GetSenderInfo

Retrieve information about a specific sender by ID.

CustomerioApi.GetSenderUsage

Retrieve campaigns and newsletters using a specific sender.

CustomerioApi.ListSnippetsWorkspace

Retrieve a list of reusable content snippets from your workspace.

CustomerioApi.UpdateOrCreateSnippet

Update or create a snippet with a unique name.

CustomerioApi.RemoveUnusedSnippet

Removes an unused snippet from the system.

CustomerioApi.GetSubscriptionTopics

Retrieve subscription topics from your workspace.

CustomerioApi.ListTransactionalMessages

Retrieve your list of transactional message IDs.

CustomerioApi.GetTransactionalMessage

Retrieve details of a transactional message.

CustomerioApi.GetTransactionalMessageVariants

Retrieve content variants of a transactional message.

CustomerioApi.UpdateTransactionalEmail

Overwrite a transactional email's body with new content.

CustomerioApi.GetTransactionalVariant

Fetch translation details of a transactional message.

CustomerioApi.UpdateTransactionalMessageVariant

Fully update a language variant of a transactional message.

CustomerioApi.GetTransactionalMessageMetrics

Retrieve metrics for a transactional message over time periods.

CustomerioApi.GetTransactionalLinkMetrics

Retrieve metrics for clicked links in transactional messages.

CustomerioApi.GetTransactionalMessageDeliveries

Fetch delivery details for transactional messages.

CustomerioApi.ListWorkspaces

Retrieve a list of workspaces in your account.

CustomerioApi.CreateNewCollection

Create a new data collection in Customerio.

CustomerioApi.ListCollections

Retrieve a list of all collections including names and schemas.

CustomerioApi.RetrieveCollectionDetails

Retrieve details about a specific collection.

CustomerioApi.DeleteCollection

Delete a collection and its contents.

CustomerioApi.UpdateCollectionInfo

Update collection name or replace its contents in Customerio.

CustomerioApi.RetrieveCollectionContents

Retrieve contents of a specified collection.

CustomerioApi.ReplaceCollectionContents

Replace the entire contents of a data collection.

CustomerioApi.GetPeopleByEmail

Retrieve a list of people matching an email address.

CustomerioApi.FilterPeopleInWorkspace

Filter and search for people in your workspace.

CustomerioApi.GetCustomerProfileAttributes

Retrieve a customer's profile attributes.

CustomerioApi.GetPersonRelationships

Retrieve a list of objects a person is related to.

CustomerioApi.GetCustomerInfo

Retrieve attributes and devices for specified customers by ID.

CustomerioApi.GetCustomerSegments

Retrieve segments of a specific customer from Customerio.

CustomerioApi.RetrieveCustomerMessages

Retrieve deliveries sent to a customer within a time range.

CustomerioApi.GetCustomerActivities

Retrieve recent activities for a customer.

CustomerioApi.GetSubscriptionPreferences

Retrieve a person's subscription preferences.

If you need to perform an action that’s not listed here, you can [get in touch with us](mailto:contact@arcade.dev) to request a new tool, or [create your own tools](/guides/create-tools/tool-basics/build-mcp-server.md).

## CustomerioApi.TriggerBroadcastMessage



Trigger a broadcast to a specific audience using Customerio.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **broadcast\_id** (`integer`, optional) The unique ID of the broadcast campaign you want to trigger in Customerio. This ID is required to specify which broadcast to activate. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.GetBroadcastErrors



Retrieve details of broadcast validation errors.

**Parameters**

-   **broadcast\_id** (`integer`, required) The ID of the broadcast to retrieve error information for. Use this to specify which broadcast’s errors you want to investigate.
-   **campaign\_trigger\_id** (`integer`, required) The ID of the campaign trigger to return information for. Use this to focus on specific trigger details.
-   **page\_start\_token** (`string`, optional) Token to specify which page of results to return. Use the `next` value from responses to navigate pages.
-   **results\_per\_page** (`integer`, optional) The maximum number of results to retrieve per page.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.SendTransactionalEmail



Send a customizable transactional email.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.SendTransactionalPushNotification



Send a customized transactional push notification.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.SendTransactionalSms



Send a transactional SMS message using a template.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.GetCampaignList



Retrieve a list of marketing campaigns.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.GetCampaignMetadata



Retrieve metadata for a specific campaign.

**Parameters**

-   **campaign\_id** (`integer`, required) The ID of the campaign for which metadata is requested. Provide a valid integer.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.GetCampaignMetrics



Fetch metrics for an individual campaign.

**Parameters**

-   **campaign\_id** (`integer`, required) The unique ID of the campaign to retrieve metrics for.
-   **metrics\_api\_version** (`string`, required) Specify the version of the metrics API to use. Recommended value is ‘2’.
-   **end\_time\_unix** (`integer`, optional) Unix timestamp marking the end of the metrics period. Use only with version 2. Limited to 10 years from the start parameter.
-   **metrics\_item\_type** (`string`, optional) Specify the type of item for metrics: email, webhook, twilio, slack, push, in\_app. Leave empty for all types.
-   **metrics\_start\_timestamp** (`integer`, optional) Unix timestamp marking the start of the metrics period for version 2.
-   **number\_of\_steps** (`integer`, optional) (Version 1 only) The number of periods to return, with defaults and maximum limits based on the period unit (e.g., hours, days).
-   **resolution** (`string`, optional) Determines increment for metrics—hourly, daily, weekly, or monthly. Only for Version 2.
-   **timezone\_for\_metrics** (`string`, optional) For version 2 only. Specify the time zone for the metrics requested. Defaults to EST if not provided. Use the region format.
-   **version\_1\_time\_unit** (`string`, optional) For Version 1 only, specify the time unit for the report. Options include hours, days, weeks, or months.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.GetCampaignLinkMetrics



Get link click metrics for a campaign over specified periods.

**Parameters**

-   **campaign\_identifier** (`integer`, required) The unique identifier for the campaign you want metrics for. Use this ID to specify the target campaign.
-   **count\_unique\_customers** (`boolean`, optional) Set to true to only include unique customer results. Set to false to count all clicks.
-   **number\_of\_periods** (`integer`, optional) The number of periods to return metrics for. Defaults to the maximum available, or 12 if the period is in months. Maximums are 24 hours, 45 days, 12 weeks, or 121 months.
-   **report\_time\_unit** (`string`, optional) The unit of time for the report. Options are: ‘hours’, ‘days’, ‘weeks’, ‘months’.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.ListCampaignActions



Retrieve operations in a campaign workflow.

**Parameters**

-   **campaign\_id** (`integer`, required) The ID of the campaign to retrieve workflow information for. Must be an integer.
-   **page\_token** (`string`, optional) Token for the results page to return. Use ‘next’ from the response as this value for subsequent pages.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.GetCampaignMessages



Retrieve message deliveries from a campaign.

**Parameters**

-   **campaign\_id** (`integer`, required) The ID of the campaign to fetch message deliveries from.
-   **beginning\_timestamp** (`integer`, optional) The starting timestamp for the query to filter messages from a specific time.
-   **end\_timestamp** (`integer`, optional) The ending timestamp for your query to specify the end of the time range for retrieving message deliveries.
-   **message\_type** (`string`, optional) Specify the type of item for metrics (e.g., email, webhook, slack, etc.). Defaults to all types if empty.
-   **metrics\_to\_return** (`string`, optional) Specify the metrics you want to retrieve, such as ‘sent’, ‘opened’, or ‘clicked’.
-   **pagination\_token** (`string`, optional) Token indicating the starting point for the page of results to return. Use the `next` property from previous responses.
-   **results\_per\_page** (`integer`, optional) Specify the maximum number of results to retrieve per page. It determines the number of message deliveries returned in a single API response.
-   **return\_drafts** (`boolean`, optional) Set to true to return drafts rather than active/sent messages.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.GetCampaignActionInfo



Retrieve details for a specific action in a campaign.

**Parameters**

-   **action\_id** (`integer`, required) The identifier for the campaign action you want to look up or act on. Provide the integer ID of the action.
-   **campaign\_identifier** (`integer`, required) The unique ID of the campaign for retrieving specific action information.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.UpdateCampaignAction



Update campaign action details and content.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **campaign\_id** (`integer`, optional) The numeric ID of the specific campaign to update or retrieve information about. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **action\_id** (`integer`, optional) The identifier for the specific action within a campaign to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.TranslateCampaignMessage



Fetches a translated message for a specific campaign action.

**Parameters**

-   **campaign\_action\_id** (`integer`, required) The ID of the action to look up or act on within the campaign.
-   **campaign\_id** (`integer`, required) The numeric ID of the campaign to get information about or trigger.
-   **target\_language** (`string`, required) A language tag for the language variant to translate to. Defaults to the default language if empty. Returns an error if the variant doesn’t exist.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.UpdateCampaignActionTranslation



Update a language variant of a campaign action.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **campaign\_id** (`integer`, optional) The ID of the campaign to update or retrieve information about. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **action\_id** (`integer`, optional) The ID of the action to look up or act on for the campaign. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **language\_tag** (`string`, optional) The language tag for the campaign action variant. Use an empty string for the default language. If the variant doesn’t exist, an error is returned. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.GetCampaignActionMetrics



Retrieve metrics for a specific campaign action.

**Parameters**

-   **action\_identifier** (`integer`, required) The ID of the specific action to retrieve metrics for within a campaign.
-   **campaign\_id** (`integer`, required) The integer ID of the campaign to retrieve metrics for.
-   **metrics\_api\_version** (`string`, required) Specify the version of the metrics API to use. Recommended to use version ‘2’.
-   **item\_type\_for\_metrics** (`string`, optional) Specify the type of item to return metrics for, such as ‘email’, ‘webhook’, ‘twilio’, etc. Leaving it empty returns metrics for all types.
-   **metrics\_end\_timestamp** (`integer`, optional) The Unix timestamp marking the end of the metrics period. Applicable only for Version 2 and limited to 10 years from the start timestamp.
-   **metrics\_resolution** (`string`, optional) Specifies the increment for metrics in version 2. Options are hourly, daily, weekly, or monthly.
-   **metrics\_start\_timestamp** (`integer`, optional) Unix timestamp for the start of metrics (Version 2 only).
-   **number\_of\_steps** (`integer`, optional) For Version 1 only. Specifies the number of time periods to return. Defaults to the maximum, or `12` if in months. Maximums are 24 hours, 45 days, 12 weeks, or 120 months.
-   **timezone** (`string`, optional) The time zone in region format for the metrics. Default is EST if not specified.
-   **version\_1\_time\_unit** (`string`, optional) Specifies the time unit for the report in Version 1 (e.g., hours, days, weeks, months).

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.GetCampaignActionLinkMetrics



Retrieve link click metrics for a specific campaign action.

**Parameters**

-   **action\_identifier** (`integer`, required) The identifier of the action to lookup or perform an operation on in the campaign. It is expected to be an integer.
-   **campaign\_id** (`integer`, required) The unique ID of the campaign to retrieve metrics for. Ensure this is a valid integer.
-   **metric\_item\_type** (`string`, optional) Specify the type of item to return metrics for. Acceptable values are ‘email’, ‘webhook’, ‘twilio’, ‘slack’, ‘push’, ‘in\_app’. Leave empty for metrics of all types.
-   **number\_of\_periods\_to\_return** (`integer`, optional) Number of periods to return metrics for. Defaults to max available or 12 if in months. Max: 24 hours, 45 days, 12 weeks, 121 months.
-   **report\_time\_unit** (`string`, optional) The unit of time for the report. Options: hours, days, weeks, or months.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.GetCampaignJourneyMetrics



Retrieve journey metrics for a specific campaign.

**Parameters**

-   **campaign\_id** (`integer`, required) The ID of the campaign to return journey metrics for.
-   **end\_timestamp** (`integer`, required) The Unix timestamp marking the end of the journey metrics report period.
-   **metrics\_resolution** (`string`, required) Determines the increment for metrics reporting: hourly, daily, weekly, or monthly.
-   **start\_timestamp** (`integer`, required) The UNIX timestamp marking the start of the journey metrics report period.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.ListRecentActivities



Retrieve recent activity logs from the past 30 days.

**Parameters**

-   **activity\_type** (`string`, optional) Specifies the type of activity to search for. Use specific activity types or patterns like `_o:<object_type_id>` for objects and `_r:<object_type_id>` for relationships.
-   **customer\_id\_type** (`string`, optional) Specify the type of `customer_id` to reference a person. Options are `id`, `email`, or `cio_id`. Default is `id`.
-   **event\_or\_attribute\_name** (`string`, optional) The name of the event or attribute to return in the activity logs.
-   **include\_deleted\_people** (`boolean`, optional) If true, return results for deleted people in the list of activities.
-   **pagination\_token** (`string`, optional) Token to specify the page of results to return. Use the `next` property from the previous response.
-   **person\_identifier** (`string`, optional) The identifier for the person to look up, which can be their `id`, `email`, or `cio_id`. Prefix with `cio_` for `cio_id`.
-   **results\_per\_page\_limit** (`integer`, optional) Specify the maximum number of activity results to retrieve per page.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.ListBroadcasts



Retrieve a list of API-triggered broadcasts with metadata.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.GetBroadcastMetadata



Retrieve metadata for a specific broadcast.

**Parameters**

-   **broadcast\_identifier** (`integer`, required) The unique identifier for a specific broadcast. Use this to retrieve the corresponding metadata.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.GetBroadcastStatus



Retrieve the status of a broadcast using its trigger ID.

**Parameters**

-   **broadcast\_identifier** (`integer`, required) The unique ID of the broadcast to retrieve information about. This should be an integer.
-   **campaign\_trigger\_id** (`integer`, required) The ID of the specific campaign trigger whose status you want to retrieve.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.GetBroadcastMetrics



Retrieve metrics for a specific broadcast over defined time steps.

**Parameters**

-   **broadcast\_identifier** (`integer`, required) The unique integer identifier for a specific broadcast.
-   **metric\_type** (`string`, optional) Specify the type of item to return metrics for. Options include ‘email’, ‘webhook’, ‘twilio’, ‘slack’, ‘push’, and ‘in\_app’. Leave empty to get metrics for all types.
-   **number\_of\_time\_periods** (`integer`, optional) The number of time periods to return metrics for. Follow the specific period limits: 24 for hours, 45 for days, 12 for weeks, or 121 for months. Defaults if not specified: to maximum available or 12 for monthly periods. Days start at 00:00 EST, weeks at 00:00 EST on Sunday, and months at 00:00 EST on the 1st.
-   **time\_period\_unit** (`string`, optional) Specifies the unit of time for the report, such as hours, days, weeks, or months.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.GetBroadcastLinkMetrics



Retrieve metrics for link clicks in a broadcast.

**Parameters**

-   **broadcast\_identifier** (`integer`, required) The numeric identifier of the broadcast for which link metrics are needed.
-   **period\_steps** (`integer`, optional) Specify the number of time periods to return. Defaults to the maximum or 12 if the period is ‘months’. Max: 24 hours, 45 days, 12 weeks, or 121 months.
-   **report\_period** (`string`, optional) Defines the unit of time for the report. Options are ‘hours’, ‘days’, ‘weeks’, or ‘months’.
-   **return\_unique\_customer\_results** (`boolean`, optional) Set to true to return only unique customer results, ensuring each customer is counted once regardless of clicks.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.GetBroadcastActions



Retrieve actions from a specific broadcast.

**Parameters**

-   **broadcast\_identifier** (`integer`, required) The unique identifier of the broadcast to retrieve its actions.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.GetBroadcastMessageInfo



Retrieve details about broadcast message deliveries.

**Parameters**

-   **broadcast\_identifier** (`integer`, required) The ID used to identify the specific broadcast to retrieve information about.
-   **beginning\_timestamp** (`integer`, optional) The start timestamp for the query, defining the beginning of the time range for message retrieval.
-   **broadcast\_state** (`string`, optional) Specifies the state of a broadcast message. Options are: ‘failed’, ‘sent’, ‘drafted’, or ‘attempted’.
-   **ending\_timestamp** (`integer`, optional) The endpoint of the time range for the query. It must be an integer representing a timestamp.
-   **item\_type** (`string`, optional) Specify the type of item to return metrics for (e.g., email, webhook). Leave empty for all types.
-   **maximum\_results\_per\_page** (`integer`, optional) Specify the maximum number of message deliveries to retrieve per page. Adjust to control the pagination size for results.
-   **metric\_type** (`string`, optional) Select the metric(s) to be returned. Options include: ‘attempted’, ‘sent’, ‘delivered’, ‘opened’, ‘clicked’, ‘converted’, ‘bounced’, ‘spammed’, ‘unsubscribed’, ‘dropped’, ‘failed’, ‘undeliverable’.
-   **pagination\_start\_token** (`string`, optional) Token for the page of results to return. Use the ‘next’ property from responses for this value to get the next page.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.GetBroadcastActionInfo



Retrieve details of a specific broadcast action.

**Parameters**

-   **action\_id** (`integer`, required) The ID of the action to look up or act on within a broadcast.
-   **broadcast\_identifier** (`integer`, required) The numeric identifier of the broadcast to retrieve action details from.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.UpdateBroadcastAction



Update the contents of a broadcast action.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **broadcast\_id** (`integer`, optional) The identifier of a broadcast to update its contents. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **lookup\_action\_id** (`integer`, optional) The unique identifier for the action to update or modify in the broadcast. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.GetBroadcastTranslationInfo



Retrieve translation info for a broadcast message.

**Parameters**

-   **action\_id** (`integer`, required) The identifier for the action you want to lookup or act on. Used to retrieve specific translation details.
-   **broadcast\_identifier** (`integer`, required) The unique identifier for a broadcast. Integer type is expected.
-   **language\_tag** (`string`, required) The language tag for the translation. Use an empty string for the default language.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.UpdateBroadcastActionLanguage



Update the translation for a broadcast action.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **broadcast\_identifier** (`integer`, optional) The unique identifier for the broadcast you want to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **action\_id** (`integer`, optional) The ID of the broadcast action you wish to update or query. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **broadcast\_action\_language** (`string`, optional) Specify the language tag for the broadcast translation. Defaults to the default language if an empty string is provided. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.GetBroadcastActionMetrics



Retrieve metrics for a broadcast action over time steps.

**Parameters**

-   **broadcast\_identifier** (`integer`, required) The ID of the broadcast you wish to retrieve metrics for.
-   **lookup\_action\_id** (`integer`, required) The ID of the action you want to look up or act on. Provide an integer value.
-   **metrics\_item\_type** (`string`, optional) Specifies the type of item (e.g., email, webhook) to return metrics for. If not provided, metrics for all types are returned.
-   **period\_steps** (`integer`, optional) Specify the number of time periods to return metrics for. Defaults to the maximum allowed (24 hours, 45 days, 12 weeks, or 121 months) or `12` if the period is in months.
-   **time\_unit\_for\_report** (`string`, optional) The unit of time for the report, such as hours, days, weeks, or months.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.GetBroadcastActionLinkMetrics



Retrieve link click metrics for a specific broadcast action.

**Parameters**

-   **broadcast\_action\_id** (`integer`, required) The ID of the action you want to look up or act on.
-   **broadcast\_identifier** (`integer`, required) The unique identifier for the broadcast to retrieve metrics for. It should be an integer value.
-   **item\_type** (`string`, optional) Specifies the type of item to return metrics for; options include email, webhook, twilio, slack, push, and in\_app. Leave empty for all types.
-   **number\_of\_periods\_to\_return** (`integer`, optional) The number of time periods to return metrics for. Defaults to the maximum, or 12 if in months. Max: 24 hours, 45 days, 12 weeks, 121 months.
-   **time\_period\_unit** (`string`, optional) The unit of time for the report. Acceptable values are ‘hours’, ‘days’, ‘weeks’, or ‘months’.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.GetBroadcastTriggers



Retrieve triggers for a specific broadcast.

**Parameters**

-   **broadcast\_identifier** (`integer`, required) The identifier of a broadcast to retrieve its triggers. Must be an integer.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.UpdateCustomerAttributes



Add or update customer attribute metadata in your workspace.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.UpdateEventMetadata



Update or add new events in the workspace.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.CheckEmailSuppression



Retrieve suppression status and reason for an email.

**Parameters**

-   **email\_to\_check\_suppression** (`string`, required) The email address to check for suppression status and reasons.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.FindSuppressedEmailAddresses



Retrieve email addresses suppressed for specific reasons.

**Parameters**

-   **suppression\_reason** (`string`, required) Specify the reason for email address suppression, such as bounces or spam reports.
-   **max\_results\_per\_page** (`integer`, optional) The maximum number of suppression records to retrieve per page, up to 1000.
-   **skip\_records** (`integer`, optional) The number of records to skip before retrieving results.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.RemoveEmailSuppression



Remove an email address from the suppression list.

**Parameters**

-   **email\_address\_to\_remove** (`string`, required) The email address to remove from the suppression list, allowing future communications.
-   **suppression\_reason** (`string`, required) The reason the email address was suppressed (e.g., ‘bounces’, ‘spam\_reports’).

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.SuppressEmailAtEsp



Suppress an email address at the email service provider.

**Parameters**

-   **email\_address\_to\_suppress** (`string`, required) The email address of the person you want to suppress at the ESP.
-   **suppression\_reason** (`string`, required) Specify the reason for suppressing the email address, such as ‘bounces’ or ‘spam\_reports’.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.ListExports



Retrieve a list of exports for people or campaign metrics.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.GetExportInfo



Returns information about a specific export from Customerio.

**Parameters**

-   **export\_id\_to\_access** (`integer`, required) The unique ID of the export you want to access in Customerio.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.DownloadExportSignedLink



Retrieve a temporary signed link to download an export.

**Parameters**

-   **export\_identifier** (`integer`, required) The unique ID of the export you want to access and download. Must be an integer.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.ExportCustomerData



Export customer data based on specified filters.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.ExportDeliveryData



Initiates export of delivery data for newsletters and campaigns.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.UploadCsvToCustomerio



Upload a CSV file to Customerio for bulk data processing.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.GetImportStatus



Retrieve the status of an import operation.

**Parameters**

-   **import\_id** (`integer`, required) The ID of the import to lookup from a previously queued import operation.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.GetAllowlistIps



Retrieve IP addresses to allowlist for secure access.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.FetchMessageDeliveries



Retrieve a list of message deliveries and their metrics.

**Parameters**

-   **beginning\_timestamp** (`integer`, optional) The beginning timestamp in Unix format for your query. Returns deliveries created after this time.
-   **desired\_metrics** (`string`, optional) Specifies the metrics to retrieve. Options include: attempted, sent, delivered, opened, clicked, converted, bounced, spammed, unsubscribed, dropped, failed, undeliverable.
-   **ending\_timestamp\_for\_query** (`integer`, optional) The ending timestamp for your query. If not specified, it defaults to the current time.
-   **filter\_by\_action\_id** (`integer`, optional) Specify the action ID to filter the message deliveries. This narrows the results to messages associated with the given action.
-   **filter\_by\_campaign\_id** (`integer`, optional) The ID of the campaign to filter message deliveries. Use this to retrieve data for a specific campaign only.
-   **filter\_by\_newsletter\_id** (`integer`, optional) An integer representing the ID of the newsletter to filter deliveries for.
-   **item\_type\_for\_metrics** (`string`, optional) Specify the item type to return metrics for, such as ‘email’, ‘webhook’, ‘twilio’, ‘slack’, ‘push’, or ‘in\_app’. Leave empty for all types.
-   **page\_token** (`string`, optional) The token to fetch the specified page of delivery results.
-   **results\_per\_page\_limit** (`integer`, optional) Specifies the maximum number of results to retrieve per page.
-   **return\_drafts\_only** (`boolean`, optional) Set to true to return drafts instead of active or sent messages.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.GetDeliveryMessageInfo



Retrieve metrics and details for a specific message delivery.

**Parameters**

-   **message\_identifier** (`string`, required) The unique identifier for a specific message instance to retrieve its information and metrics.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.GetArchivedMessage



Retrieve an archived copy of a message delivery.

**Parameters**

-   **message\_id** (`string`, required) The unique identifier for the message to be retrieved.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.GetNewsletters



Retrieve a list of newsletters and their metadata.

**Parameters**

-   **max\_results\_per\_page** (`integer`, optional) The maximum number of newsletters to retrieve per page, up to 100.
-   **sort\_order** (`string`, optional) Specify the order to sort results: `asc` for chronological, `desc` for reverse.
-   **start\_token** (`string`, optional) Token to retrieve a specific page of newsletter results. Use the `next` property from previous responses as this token.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.RetrieveNewsletterMetadata



Retrieve metadata for an individual newsletter.

**Parameters**

-   **newsletter\_identifier** (`integer`, required) The unique identifier for the newsletter to retrieve metadata.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.DeleteNewsletter



Delete an individual newsletter and its associated data.

**Parameters**

-   **newsletter\_identifier** (`integer`, required) The unique identifier of the newsletter you want to delete.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.GetNewsletterMetrics



Retrieve metrics for a specific newsletter over time.

**Parameters**

-   **newsletter\_identifier** (`integer`, required) The identifier for the specific newsletter to retrieve metrics for. Expected to be an integer.
-   **item\_type\_for\_metrics** (`string`, optional) Specify the type of item to return metrics for, such as ‘email’, ‘webhook’, ‘twilio’, etc. If not provided, metrics for all types are returned.
-   **number\_of\_time\_periods** (`integer`, optional) The number of time periods to return metrics for. Minimum is 2. Defaults to max: 24 hours, 45 days, 12 weeks, 121 months. Use this to specify the time span for newsletter metrics.
-   **time\_period\_unit** (`string`, optional) The unit of time to report metrics (options: hours, days, weeks, months).

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.GetNewsletterLinkMetrics



Retrieve metrics for link clicks in a newsletter.

**Parameters**

-   **newsletter\_identifier** (`integer`, required) The identifier of the newsletter to retrieve metrics for. Must be an integer.
-   **include\_unique\_customers** (`boolean`, optional) If true, response includes only unique customer results (each customer counted once); if false, includes total click results.
-   **number\_of\_periods** (`integer`, optional) The number of periods to return metrics for. Defaults to maximum available, or 12 if in months. Maximums: 24 hours, 45 days, 12 weeks, or 121 months.
-   **time\_unit\_for\_report** (`string`, optional) The unit of time for your report. Options are ‘hours’, ‘days’, ‘weeks’, or ‘months’.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.GetNewsletterVariants



Fetch content variants for a specified newsletter.

**Parameters**

-   **newsletter\_identifier** (`integer`, required) The unique integer identifier of a newsletter to fetch its content variants.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.GetNewsletterMessageMetadata



Retrieve delivery info for messages sent from a newsletter.

**Parameters**

-   **newsletter\_identifier** (`integer`, required) The unique identifier of the newsletter to retrieve delivery information for.
-   **begin\_query\_timestamp** (`integer`, optional) The Unix timestamp marking the start of the time range for your query. Without this, data defaults to the earliest available from 6 months prior.
-   **ending\_timestamp\_for\_query** (`integer`, optional) The ending timestamp for your query in Unix format. It specifies the end of the time range for retrieving message delivery data.
-   **metrics\_to\_return** (`string`, optional) Specify one or more metrics to return, such as ‘attempted’, ‘sent’, ‘delivered’, etc.
-   **pagination\_start\_token** (`string`, optional) The token to specify the start of the result page to return. Use the `next` value from previous responses for pagination.
-   **results\_per\_page\_limit** (`integer`, optional) The maximum number of message delivery results to retrieve per page.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.GetNewsletterVariantInfo



Retrieve variant details of a specific newsletter.

**Parameters**

-   **message\_identifier\_in\_newsletter** (`integer`, required) Identifier for a message within a newsletter, used for A/B tests or multi-language editions.
-   **newsletter\_identifier** (`integer`, required) The unique identifier for a newsletter. Required to retrieve specific variant information.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.UpdateNewsletterContent



Update a newsletter variant’s content.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **newsletter\_identifier** (`integer`, optional) The identifier of the newsletter you want to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **message\_content\_id** (`integer`, optional) The identifier for a message within a newsletter, used in A/B tests or multiple language variants. Retrieve IDs via getNewsletters. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.GetNewsletterVariantTranslation



Get information on a newsletter’s language variant.

**Parameters**

-   **language\_tag** (`string`, required) The language tag of a newsletter variant. Leave empty for default language.
-   **newsletter\_identifier** (`integer`, required) The unique identifier of a newsletter to retrieve its specific language variant.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.UpdateNewsletterVariantTranslation



Update a newsletter variant’s translation.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **newsletter\_identifier** (`integer`, optional) The unique identifier for a newsletter that you want to update the translation for. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **language\_tag** (`string`, optional) A language tag for the newsletter variant. If omitted, defaults to the company’s default language. An error is returned if the language variant doesn’t exist. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.GetNewsletterTestGroups



Retrieve test group details for a specific newsletter.

**Parameters**

-   **newsletter\_identifier** (`integer`, required) The unique identifier of a newsletter to retrieve its test group details.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.RetrieveNewsletterLanguageVariant



Get info on a newsletter’s language variant in A/B test.

**Parameters**

-   **ab\_test\_group\_id** (`string`, required) The unique ID of the A/B test group for retrieving the language variant.
-   **language\_tag** (`string`, required) Specify the language tag of the newsletter variant. Use an empty string to default to your primary language.
-   **newsletter\_identifier** (`integer`, required) Specify the unique identifier of the newsletter to retrieve its language variant details.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.UpdateNewsletterTestTranslation



Update a newsletter’s translation for A/B testing.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **newsletter\_identifier** (`integer`, optional) The unique identifier for the newsletter. Use this to specify which newsletter to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **ab\_test\_group\_id** (`string`, optional) The identifier for the A/B test group to update the newsletter translation for. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **newsletter\_language\_tag** (`string`, optional) Specify a language tag for the newsletter translation. Utilize an empty string to default to your system’s language. Invalid tags result in an error. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.GetNewsletterVariantMetrics



Fetch metrics for a specific newsletter variant.

**Parameters**

-   **newsletter\_identifier** (`integer`, required) The unique identifier for the newsletter to fetch metrics for.
-   **newsletter\_message\_id** (`integer`, required) The ID of a message in a newsletter, used for identifying variants or languages within a newsletter. Useful for A/B tests or multilingual content.
-   **item\_type\_for\_metrics** (`string`, optional) Specify the type of item to return metrics for (e.g., email, webhook, etc.). If left empty, metrics for all types are returned.
-   **number\_of\_period\_steps** (`integer`, optional) The number of time periods to return, requiring a minimum of 2 steps. Maximum limits apply based on the period type.
-   **reporting\_period\_unit** (`string`, optional) The time unit for the report, such as ‘hours’, ‘days’, ‘weeks’, or ‘months’. Used to define the granularity of the metrics.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.GetNewsletterVariantClickMetrics



Get link click metrics for a newsletter variant.

**Parameters**

-   **message\_content\_identifier** (`integer`, required) The ID of a specific message within a newsletter, useful for A/B tests or multilingual newsletters. Retrieve from newsletter details.
-   **newsletter\_identifier** (`integer`, required) The unique integer identifier of a specific newsletter to retrieve click metrics.
-   **item\_type\_for\_metrics** (`string`, optional) The type of item to return metrics for. Options are: email, webhook, twilio, slack, push, in\_app. When left empty, metrics for all types are included.
-   **number\_of\_periods** (`integer`, optional) Specify the number of time periods to retrieve data for. Defaults to the maximum if not specified, or 12 for months. Maximum limits: 24 hours, 45 days, 12 weeks, or 121 months.
-   **time\_unit\_for\_report** (`string`, optional) The unit of time for generating the report. Options are: hours, days, weeks, months.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.GetObjectTypes



Retrieve a list of object types and their IDs.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.FindWorkspaceObjects



Find objects in your workspace using filter conditions.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **page\_start\_token** (`string`, optional) Token for the page of results to return. Use the `next` property from a prior response to continue paging. Only used when mode is ‘execute’.
-   **maximum\_results\_per\_page** (`integer`, optional) The maximum number of results to retrieve per page. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.GetRelatedPeople



Retrieve people related to a specified object.

**Parameters**

-   **object\_identifier** (`string`, required) The ID of the object. This can be `object_id` or `cio_object_id` based on the `id_type` query parameter. Defaults to `object_id`.
-   **object\_type\_identifier** (`integer`, required) The ID representing the object type, such as ‘Companies’ or ‘Accounts’. Starts from 1 and increments for each new type.
-   **identification\_type** (`string`, optional) Specifies whether the object identifier is an `object_id` or a `cio_object_id`. Choose between these two options.
-   **maximum\_results\_per\_page** (`integer`, optional) The maximum number of results to retrieve per page. Specify an integer value.
-   **pagination\_start\_token** (`string`, optional) Token for starting the page of results. Use the ‘next’ property from a response to paginate.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.GetObjectAttributes



Retrieve a list of attributes for a specific object.

**Parameters**

-   **object\_identifier** (`string`, required) The unique identifier for the object, which can be either `object_id` or `cio_object_id`, depending on the id\_type specified in query params.
-   **object\_type\_identifier** (`integer`, required) The ID representing the object type, beginning at 1 for each new type, like ‘Companies’ or ‘Accounts’.
-   **object\_id\_type** (`string`, optional) Specify the type of ID used for the object: ‘object\_id’ or ‘cio\_object\_id’.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.CreateWebhook



Create a new webhook configuration for reporting.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.ListReportingWebhooks



Retrieve a list of reporting webhooks.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.GetWebhookInfo



Get detailed information about a specific webhook.

**Parameters**

-   **webhook\_identifier** (`integer`, required) The unique identifier of the webhook you want to retrieve information for. This should be an integer.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.UpdateReportingWebhook



Update the configuration of a reporting webhook.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **webhook\_identifier** (`integer`, optional) The unique identifier for the specific webhook to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.DeleteReportingWebhook



Delete a reporting webhook’s configuration.

**Parameters**

-   **webhook\_identifier** (`integer`, required) The unique identifier for the reporting webhook to be deleted.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.CreateManualSegment



Create a manual segment with name and description.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.GetAllSegments



Retrieve a list of all segments for your account.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.GetSegmentInfo



Retrieve information about a specific segment.

**Parameters**

-   **segment\_identifier** (`integer`, required) The ID for a segment. Find this on its page in the dashboard or using the App API.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.DeleteManualSegment



Delete a specified manual segment by ID.

**Parameters**

-   **segment\_identifier** (`integer`, required) The ID of the segment to delete, found under ‘Usage’ in the Segment page on the dashboard or via the App API.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.FindSegmentDependencies



Identify campaigns and newsletters using a segment.

**Parameters**

-   **segment\_identifier** (`integer`, required) The ID for a segment, found on its dashboard page or via the App API.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.GetSegmentCustomerCount



Retrieve the customer count for a specific segment.

**Parameters**

-   **segment\_id** (`integer`, required) The unique identifier for the segment to retrieve the customer count. Find this ID on the segment’s page or via the App API.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.GetSegmentMembers



Retrieve customer details from a specific segment.

**Parameters**

-   **segment\_identifier** (`integer`, required) The unique identifier for a segment. Find this ID on the segment’s page in the dashboard, under _Usage_.
-   **maximum\_results\_per\_page** (`integer`, optional) Specify the maximum number of customer identifiers to retrieve per page.
-   **pagination\_token** (`string`, optional) Token to specify the start of the page of results. Use the `next` value from a previous response to paginate.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.GetSenderList



Retrieve a list of senders from your workspace.

**Parameters**

-   **max\_results\_per\_page** (`integer`, optional) The maximum number of sender results to retrieve per page. Specify an integer value.
-   **pagination\_token** (`string`, optional) Token for the page of results to return. Use the `next` property from the response for pagination.
-   **results\_sort\_order** (`string`, optional) Sort results: ‘asc’ for chronological, ‘desc’ for reverse chronological order.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.GetSenderInfo



Retrieve information about a specific sender by ID.

**Parameters**

-   **sender\_identifier** (`integer`, required) The unique identifier for a sender, required to fetch their information.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.GetSenderUsage



Retrieve campaigns and newsletters using a specific sender.

**Parameters**

-   **sender\_identifier** (`integer`, required) The unique identifier for the sender to retrieve associated campaigns and newsletters.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.ListSnippetsWorkspace



Retrieve a list of reusable content snippets from your workspace.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.UpdateOrCreateSnippet



Update or create a snippet with a unique name.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.RemoveUnusedSnippet



Removes an unused snippet from the system.

**Parameters**

-   **snippet\_name** (`string`, required) The name of the snippet to be removed. Must be unused to avoid errors.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.GetSubscriptionTopics



Retrieve subscription topics from your workspace.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.ListTransactionalMessages



Retrieve your list of transactional message IDs.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.GetTransactionalMessage



Retrieve details of a transactional message.

**Parameters**

-   **transactional\_message\_id** (`integer`, required) The ID of the transactional message, found in the UI or URL, e.g., `/transactional/3/templates/139` has an ID of 3.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.GetTransactionalMessageVariants



Retrieve content variants of a transactional message.

**Parameters**

-   **transactional\_message\_id** (`integer`, required) The ID of the transactional message, found in the UI or URL, e.g., `/transactional/3/templates/139` means ID is 3.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.UpdateTransactionalEmail



Overwrite a transactional email’s body with new content.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **transactional\_email\_id** (`integer`, optional) The ID of your transactional email. Found in the UI or URL of the transactional message. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **content\_variant\_id** (`integer`, optional) The unique identifier for the specific content version of your transactional email, found in the message URL. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.GetTransactionalVariant



Fetch translation details of a transactional message.

**Parameters**

-   **language\_tag** (`string`, required) Specify the language tag for the message variant. Use an empty string for the default language. If the variant does not exist, an error is returned.
-   **transactional\_message\_id** (`integer`, required) The identifier of the transactional message, found in the UI or URL, e.g., `/transactional/3/templates/139` has an ID of 3.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.UpdateTransactionalMessageVariant



Fully update a language variant of a transactional message.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **transactional\_message\_id** (`integer`, optional) The identifier of the transactional message. Found in the UI or URL of the message, e.g., `/transactional/3/templates/139` where the ID is 3. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **language\_tag** (`string`, optional) Specify a language tag for a language variant. If not provided, default language is used. Errors if variant does not exist. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.GetTransactionalMessageMetrics



Retrieve metrics for a transactional message over time periods.

**Parameters**

-   **transactional\_message\_id** (`integer`, required) The identifier of the transactional message. Found in the UI or URL, e.g., `/transactional/3/templates/139` means an ID of 3.
-   **number\_of\_periods** (`integer`, optional) The number of periods to retrieve metrics for. Defaults to the maximum available, or 12 if the period is in months. Maximums are 24 hours, 45 days, 12 weeks, or 121 months. Days start at 00:00 EST. Weeks start at 00:00 EST on Sunday. Months start at 00:00 EST on the 1st of the month.
-   **time\_unit\_for\_report** (`string`, optional) Specify the unit of time for the report, such as ‘hours’, ‘days’, ‘weeks’, or ‘months’.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.GetTransactionalLinkMetrics



Retrieve metrics for clicked links in transactional messages.

**Parameters**

-   **transactional\_message\_id** (`integer`, required) The identifier for the transactional message, found in the UI or URL (e.g., in `/transactional/3/templates/139`, the ID is 3).
-   **include\_only\_unique\_customers** (`boolean`, optional) Return only unique customer results if true; false includes all click instances.
-   **number\_of\_periods** (`integer`, optional) Specify the number of periods to return metrics for. Cannot be fewer than 2 periods. Defaults to the maximum available, or 12 if the period is in months. Maximums: 24 hours, 45 days, 12 weeks, or 121 months.
-   **time\_unit\_for\_report** (`string`, optional) The unit of time for the report. Options are: hours, days, weeks, or months.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.GetTransactionalMessageDeliveries



Fetch delivery details for transactional messages.

**Parameters**

-   **transactional\_message\_id** (`integer`, required) The unique identifier for the transactional message, found in the UI or URL, e.g., ‘/transactional/3/templates/139’ where the ID is 3.
-   **beginning\_timestamp** (`integer`, optional) The start time for the query, specified as a Unix timestamp. Limits the query to data starting from this time.
-   **broadcast\_state** (`string`, optional) Specifies the state of the broadcast to filter results. Options are ‘failed’, ‘sent’, ‘drafted’, or ‘attempted’.
-   **max\_results\_per\_page** (`integer`, optional) The maximum number of results to return per page, as an integer.
-   **page\_token** (`string`, optional) Specify the token for the page of results you want to return. Use the `next` property from previous responses as the value to paginate.
-   **query\_ending\_timestamp** (`integer`, optional) The ending timestamp for the query, determining the end of the time range for message data retrieval.
-   **return\_metrics** (`string`, optional) Specify one or more metrics to return, such as ‘sent’, ‘delivered’, or ‘clicked’.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.ListWorkspaces



Retrieve a list of workspaces in your account.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.CreateNewCollection



Create a new data collection in Customerio.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.ListCollections



Retrieve a list of all collections including names and schemas.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.RetrieveCollectionDetails



Retrieve details about a specific collection.

**Parameters**

-   **collection\_identifier** (`integer`, required) The unique identifier for a specific collection to retrieve its details.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.DeleteCollection



Delete a collection and its contents.

**Parameters**

-   **collection\_id** (`integer`, required) The unique identifier for the collection to be deleted.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.UpdateCollectionInfo



Update collection name or replace its contents in Customerio.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **collection\_identifier** (`integer`, optional) The unique identifier for the collection to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.RetrieveCollectionContents



Retrieve contents of a specified collection.

**Parameters**

-   **collection\_identifier** (`integer`, required) The unique identifier for the collection to retrieve contents from.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.ReplaceCollectionContents



Replace the entire contents of a data collection.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **collection\_identifier** (`integer`, optional) The unique identifier for the collection whose contents are being replaced. This is required for identifying the specific collection to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.GetPeopleByEmail



Retrieve a list of people matching an email address.

**Parameters**

-   **search\_email\_address** (`string`, required) The email address to find in the workspace. Returns a list of individuals matching this email.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.FilterPeopleInWorkspace



Filter and search for people in your workspace.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **page\_start\_token** (`string`, optional) The token for the page of results to return. Use the ‘next’ property from responses as this value to access subsequent pages. Only used when mode is ‘execute’.
-   **results\_per\_page\_limit** (`integer`, optional) Specify the maximum number of people to retrieve per page. Limited to 1000. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.GetCustomerProfileAttributes



Retrieve a customer’s profile attributes.

**Parameters**

-   **customer\_identifier** (`string`, required) The unique identifier of the customer to fetch their profile attributes.
-   **customer\_id\_type** (`string`, optional) Specifies the type of `customer_id` to reference a person. Options: ‘id’, ‘email’, ‘cio\_id’. Default is ‘id’ if not provided.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.GetPersonRelationships



Retrieve a list of objects a person is related to.

**Parameters**

-   **customer\_id** (`string`, required) The unique identifier for the customer whose relationships you wish to retrieve.
-   **max\_results\_per\_page** (`integer`, optional) The maximum number of results to retrieve per page.
-   **pagination\_start\_token** (`string`, optional) Token to specify the page of results to return. Use the `next` property’s value from a previous response to get subsequent pages.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.GetCustomerInfo



Retrieve attributes and devices for specified customers by ID.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.GetCustomerSegments



Retrieve segments of a specific customer from Customerio.

**Parameters**

-   **customer\_identifier** (`string`, required) The unique ID of the customer for segment retrieval in Customerio.
-   **customer\_id\_type** (`string`, optional) Specifies the type of customer identifier to use (‘id’, ‘email’, or ‘cio\_id’). Default is ‘id’.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.RetrieveCustomerMessages



Retrieve deliveries sent to a customer within a time range.

**Parameters**

-   **customer\_identifier** (`string`, required) The unique ID of the customer whose message deliveries you want to retrieve.
-   **customer\_id\_type** (`string`, optional) Specifies the type of customer\_id used to reference a person. Options: ‘id’, ‘email’, ‘cio\_id’. Defaults to ‘id’ if not provided.
-   **max\_results\_per\_page** (`integer`, optional) The maximum number of results to retrieve per page. This limits the number of messages returned in a single response.
-   **pagination\_token** (`string`, optional) Token for the page of results to return. Use the `next` property from previous responses to get the next page.
-   **query\_end\_timestamp** (`integer`, optional) The ending timestamp (in integer format) for the query to limit data retrieval to specific time ranges.
-   **starting\_timestamp** (`integer`, optional) The beginning timestamp for the query in integer format, used to filter messages by start date.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.GetCustomerActivities



Retrieve recent activities for a customer.

**Parameters**

-   **customer\_id** (`string`, required) The unique identifier for the customer whose activities you want to retrieve.
-   **activity\_type\_filter** (`string`, optional) Filter activities by specific type, such as ‘add\_relationship’ or ‘attribute\_change’.
-   **customer\_id\_type** (`string`, optional) Specify the type of `customer_id` used to reference a person (e.g., `id`, `email`, or `cio_id`). Defaults to `id` if unspecified.
-   **event\_or\_attribute\_name** (`string`, optional) Specify the event or attribute name to search for within activities of type `event` or `attribute_update`.
-   **max\_results\_per\_page** (`integer`, optional) Specify the maximum number of activity results to retrieve per page.
-   **start\_token** (`string`, optional) Token to specify which page of results to return. Use the `next` property from a previous response.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CustomerioApi.GetSubscriptionPreferences



Retrieve a person’s subscription preferences.

**Parameters**

-   **customer\_identifier** (`string`, required) The ID of the customer to retrieve subscription preferences for.
-   **accept\_language** (`string`, optional) Language tag for translating content. If not specified, defaults to the subscription center’s language.
-   **customer\_id\_type** (`string`, optional) Type of customer\_id used to reference a person, e.g., ‘id’, ‘email’, or ‘cio\_id’. Defaults to ‘id’.
-   **translation\_language** (`string`, optional) Specify the language tag for translating the subscription preferences content. If not provided, the default language is used.

**Secrets**

This tool requires the following secrets: `CUSTOMERIO_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## Reference

Below is a reference of enumerations used by some of the tools in the CustomerioApi MCP Server:

### ToolMode

-   **GET\_REQUEST\_SCHEMA**: `get_request_schema`
-   **EXECUTE**: `execute`

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_customerio_api ``` Learn more](/guides/deployment-hosting.md)

Last updated on February 7, 2026

[PagerDuty](/en/resources/integrations/customer-support/pagerduty.md)
[CustomerioPipelinesApi](/en/resources/integrations/customer-support/customerio-pipelines-api.md)
