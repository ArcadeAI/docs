---
title: "IntercomApi"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Customer Support](/en/resources/integrations/customer-support/zendesk.md)
IntercomApi

# IntercomApi

Arcade Unoptimized

**Description:** Tools that enable LLMs to interact directly with the Intercom API

**Author:** Arcade

**Auth:** User authorization

[![PyPI Version](https://img.shields.io/pypi/v/arcade_intercom_api)](https://pypi.org/project/arcade_intercom_api/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_intercom_api)](https://pypi.org/project/arcade_intercom_api/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_intercom_api)](https://pypi.org/project/arcade_intercom_api/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_intercom_api)](https://pypi.org/project/arcade_intercom_api/)

IntercomApi is a [Unoptimized MCP Server](/guides/create-tools/improve/types-of-tools.md#unoptimized-tools)
: each tool mirrors one HTTP endpoint and offers LLMs a way to interact with the low-level API.



Differently from [Optimized MCP Servers](/guides/create-tools/improve/types-of-tools.md#optimized-tools)
, Unoptimized tools are heavily influenced by the original API design, which is not usually optimized for LLM usage. For this reason, we recommend thoroughly evaluating the tools with your Agents or chatbots before using it in production. [Read more](/guides/create-tools/improve/types-of-tools.md) about Optimized vs Unoptimized tools.

The IntercomApi MCP Server offers a comprehensive suite of tools for managing and interacting with the Intercom platform.

## Available Tools

Tool Name

Description

IntercomApi.GetCurrentAdminInfo

Retrieve details of the currently authorized Intercom admin.

IntercomApi.SetAdminAway

Mark an admin as away in the Intercom Inbox.

IntercomApi.GetAdminActivityLogs

Retrieve a log of activities by all admins in an app.

IntercomApi.FetchWorkspaceAdmins

Retrieve a list of admins in a workspace.

IntercomApi.RetrieveAdminDetails

Retrieve details of a specific admin from Intercom.

IntercomApi.ListRecentArticles

Fetches a list of all articles from Intercom.

IntercomApi.CreateIntercomArticle

Create a new article in Intercom.

IntercomApi.FetchIntercomArticle

Fetch details of a specific Intercom article by ID.

IntercomApi.UpdateArticleDetails

Update details of a specific article on Intercom.

IntercomApi.DeleteIntercomArticle

Deletes a specified article in Intercom.

IntercomApi.ListCollections

Retrieve a list of all collections sorted by update date.

IntercomApi.CreateHelpCenterCollection

Create a new collection in the Intercom Help Center.

IntercomApi.FetchIntercomCollectionDetails

Fetches details of a specific Intercom collection.

IntercomApi.UpdateCollectionDetails

Update the details of a single collection.

IntercomApi.DeleteCollection

Delete a specified collection in Intercom.

IntercomApi.GetHelpCenterDetails

Retrieve detailed information about a specific Help Center.

IntercomApi.ListHelpCenters

Retrieve a list of all Help Centers from Intercom.

IntercomApi.GetRecentHelpCenterSections

Fetches a list of all help center sections sorted by recent updates.

IntercomApi.CreateHelpCenterSection

Create a new section in the help center.

IntercomApi.GetSectionDetails

Fetch details of a specific help center section by ID.

IntercomApi.UpdateHelpCenterSection

Update the details of a help center section.

IntercomApi.DeleteIntercomSection

Delete a section from Intercom Help Center.

IntercomApi.CreateOrUpdateCompany

Create or update a company in Intercom.

IntercomApi.FetchCompanyDetails

Fetch detailed information about a single company.

IntercomApi.GetCompanyDetails

Retrieve detailed information about a specific company.

IntercomApi.UpdateCompanyInfo

Update company information by ID in Intercom.

IntercomApi.DeleteCompany

Deletes a single company by its ID.

IntercomApi.FetchCompanyContacts

Fetch a list of contacts for a specific company.

IntercomApi.ListCompanySegments

Fetch segments belonging to a specific company.

IntercomApi.ListCompaniesIntercom

Retrieve a sorted list of companies from Intercom.

IntercomApi.ScrollThroughAllCompanies

Efficiently iterate over all companies using the scroll API.

IntercomApi.AttachCompanyToContact

Attach a company to a single contact in Intercom.

IntercomApi.FetchContactCompanies

Fetches a list of companies associated with a contact.

IntercomApi.DetachCompanyFromContact

Detach a company from a specified contact in Intercom.

IntercomApi.FetchContactNotes

Fetches notes associated with a specific contact.

IntercomApi.AddNoteToContact

Add a note to a contact in Intercom.

IntercomApi.GetContactSegments

Fetch segments associated with a contact.

IntercomApi.ListContactSubscriptions

Retrieve subscription types associated with a contact.

IntercomApi.ManageContactSubscription

Manage a contact's subscription preferences in Intercom.

IntercomApi.RemoveSubscriptionFromContact

Remove a specific subscription from a contact.

IntercomApi.GetContactTags

Fetches tags attached to a specific contact.

IntercomApi.TagContact

Attach a tag to a specific contact.

IntercomApi.RemoveTagFromContact

Remove a tag from a specific contact.

IntercomApi.UpdateIntercomContact

Update an existing Intercom contact's details.

IntercomApi.FetchContactDetails

Fetch the details of a specific contact.

IntercomApi.DeleteContact

Deletes a specified contact from the system.

IntercomApi.MergeContactIntercom

Merge a lead contact into a user contact in Intercom.

IntercomApi.SearchIntercomContacts

Search for contacts by their attributes.

IntercomApi.FetchAllContacts

Fetch a list of all contacts in your workspace.

IntercomApi.CreateNewContact

Create a new contact in the Intercom system.

IntercomApi.ArchiveContact

Archive a single contact in Intercom.

IntercomApi.UnarchiveContact

Unarchive a single contact in Intercom.

IntercomApi.TagConversation

Attach a tag to a specific conversation.

IntercomApi.RemoveTagFromConversation

Remove a tag from a specific conversation.

IntercomApi.FetchConversationList

Retrieve a list of conversations with optional pagination options.

IntercomApi.CreateContactConversation

Create a conversation initiated by a contact.

IntercomApi.GetConversationDetails

Fetch details of a specific conversation from Intercom.

IntercomApi.UpdateConversation

Update an existing conversation.

IntercomApi.SearchConversations

Search conversations by specific attributes.

IntercomApi.ReplyToIntercomConversation

Reply to a conversation in Intercom with a message or note.

IntercomApi.ManageConversation

Manage and update conversation statuses or assignments.

IntercomApi.AutoAssignIntercomConversation

Auto-assign a conversation in Intercom.

IntercomApi.AttachContactToConversation

Attach a contact to a conversation in Intercom.

IntercomApi.DetachContactFromConversation

Detach a contact from a conversation in Intercom.

IntercomApi.RedactConversationPartOrMessage

Redact specific parts or messages within a conversation.

IntercomApi.ListWorkspaceDataAttributes

Fetch data attributes for contacts, companies, or conversations.

IntercomApi.CreateDataAttribute

Create a data attribute for a contact or company.

IntercomApi.UpdateDataAttribute

Update a data attribute's value via the API.

IntercomApi.SendIntercomEvent

Submit events to Intercom for user activity tracking.

IntercomApi.CreateEventSummaries

Create event summaries for tracking user events.

IntercomApi.CreateMessageDataExport

Create a data export job for Intercom messages.

IntercomApi.CheckExportJobStatus

Check the status of your Intercom data export job.

IntercomApi.CancelDataExportJob

Cancels an active data export job on Intercom.

IntercomApi.DownloadIntercomDataExport

Download completed data exports from Intercom.

IntercomApi.CreateAdminInitiatedMessage

Create a message initiated by an admin via Intercom.

IntercomApi.FetchNewsItems

Retrieve a list of news items from Intercom.

IntercomApi.CreateNewsItem

Create a news item using Intercom.

IntercomApi.GetNewsItemDetails

Fetches details of a specific news item.

IntercomApi.UpdateNewsItem

Updates information for a specific news item.

IntercomApi.DeleteNewsItem

Delete a specific news item from the platform.

IntercomApi.FetchLiveNewsfeedItems

Retrieve all live news items from a specific newsfeed.

IntercomApi.FetchAllNewsfeeds

Fetch a list of all available newsfeeds.

IntercomApi.FetchNewsfeedDetails

Fetch details of a specific newsfeed using its ID.

IntercomApi.FetchNoteDetails

Fetches details of a specific note.

IntercomApi.GetAllSegments

Retrieve a list of all segments.

IntercomApi.GetSegmentDetails

Fetch details of a single segment from Intercom.

IntercomApi.ListSubscriptionTypes

Retrieve all subscription types from Intercom.

IntercomApi.DeflectPhoneCallsToMessenger

Deflect phone calls to Intercom Messenger via SMS link.

IntercomApi.FetchWorkspaceTags

Retrieve all tags from a workspace in Intercom.

IntercomApi.ManageTagOperations

Create, update, or manage tags for companies and users.

IntercomApi.FetchTagDetails

Fetch details of a tag using its ID from the workspace.

IntercomApi.RemoveTag

Delete a tag from the Intercom workspace using its ID.

IntercomApi.ListAppTeams

Retrieve a list of teams for the application.

IntercomApi.GetTeamDetails

Fetch details of a team and its admins.

IntercomApi.CreateTicketAttribute

Create a new attribute for a ticket type.

IntercomApi.UpdateTicketTypeAttribute

Updates an existing attribute for a ticket type.

IntercomApi.GetTicketTypes

Retrieve a list of all ticket types for a workspace.

IntercomApi.CreateTicketType

Create a new ticket type with default attributes.

IntercomApi.FetchTicketTypeDetails

Fetches details of a specific ticket type in Intercom.

IntercomApi.UpdateTicketType

Update a ticket type with a new icon or details.

IntercomApi.ReplyToTicket

Reply to a ticket with an admin note.

IntercomApi.CreateIntercomTicket

Create a new support ticket in Intercom.

IntercomApi.UpdateSupportTicket

Modify an existing support ticket in Intercom.

IntercomApi.FetchTicketDetails

Fetch details of a specific ticket from Intercom.

IntercomApi.UpdateVisitorInfo

Update an existing visitor's information in Intercom.

IntercomApi.FetchVisitorDetails

Fetch details of a single visitor using their user ID.

IntercomApi.ConvertVisitorToUser

Convert a Visitor into a User or merge with an existing User.

If you need to perform an action that’s not listed here, you can [get in touch with us](mailto:contact@arcade.dev) to request a new tool, or [create your own tools](/guides/create-tools/tool-basics/build-mcp-server.md).

## Intercom API Subdomain

The IntercomApi MCP Server requires setting the `INTERCOM_API_SUBDOMAIN` secret in the Arcade Dashboard. The appropriate value depends on the region you are using:

-   For the United States servers, set `INTERCOM_API_SUBDOMAIN` secret to `api`
-   For the European servers, set `INTERCOM_API_SUBDOMAIN` secret to `api.eu`
-   For the Australian servers, set `INTERCOM_API_SUBDOMAIN` secret to `api.au`

## IntercomApi.GetCurrentAdminInfo



Retrieve details of the currently authorized Intercom admin.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN`. [Check which value to use](#intercom-api-subdomain) for the secret. Learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md).

## IntercomApi.SetAdminAway



Mark an admin as away in the Intercom Inbox.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **admin\_id** (`integer`, optional) The unique identifier for the admin to set as away in the Intercom Inbox. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN`. [Check which value to use](#intercom-api-subdomain) for the secret. Learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md).

## IntercomApi.GetAdminActivityLogs



Retrieve a log of activities by all admins in an app.

**Parameters**

-   **start\_date\_unix\_timestamp** (`string`, required) The start date for requested data, formatted as a UNIX timestamp.
-   **end\_date\_unix\_timestamp** (`string`, optional) The end date for data retrieval in UNIX timestamp format. Determines the latest logs to include.

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.FetchWorkspaceAdmins



Retrieve a list of admins in a workspace.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.RetrieveAdminDetails



Retrieve details of a specific admin from Intercom.

**Parameters**

-   **admin\_id** (`integer`, required) The unique identifier for the admin. Provide an integer value to retrieve the admin’s details.

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.ListRecentArticles



Fetches a list of all articles from Intercom.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.CreateIntercomArticle



Create a new article in Intercom.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.FetchIntercomArticle



Fetch details of a specific Intercom article by ID.

**Parameters**

-   **article\_id** (`integer`, required) The unique identifier for the article provided by Intercom. Use this to fetch article details.

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.UpdateArticleDetails



Update details of a specific article on Intercom.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **article\_identifier** (`integer`, optional) The unique identifier for the article on Intercom. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.DeleteIntercomArticle



Deletes a specified article in Intercom.

**Parameters**

-   **article\_id** (`integer`, required) The unique identifier for the article to be deleted, provided by Intercom.

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.ListCollections



Retrieve a list of all collections sorted by update date.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.CreateHelpCenterCollection



Create a new collection in the Intercom Help Center.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.FetchIntercomCollectionDetails



Fetches details of a specific Intercom collection.

**Parameters**

-   **collection\_id** (`integer`, required) The unique identifier for the collection provided by Intercom. It is required to fetch a specific collection’s details.

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.UpdateCollectionDetails



Update the details of a single collection.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **collection\_id** (`integer`, optional) The unique identifier for the collection in Intercom. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.DeleteCollection



Delete a specified collection in Intercom.

**Parameters**

-   **collection\_id** (`integer`, required) The unique identifier for the collection provided by Intercom, required to delete it.

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.GetHelpCenterDetails



Retrieve detailed information about a specific Help Center.

**Parameters**

-   **help\_center\_id** (`integer`, required) The unique identifier for the Help Center collection provided by Intercom.

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.ListHelpCenters



Retrieve a list of all Help Centers from Intercom.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.GetRecentHelpCenterSections



Fetches a list of all help center sections sorted by recent updates.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.CreateHelpCenterSection



Create a new section in the help center.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.GetSectionDetails



Fetch details of a specific help center section by ID.

**Parameters**

-   **section\_id** (`integer`, required) The unique identifier for the help center section provided by Intercom.

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.UpdateHelpCenterSection



Update the details of a help center section.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **section\_id** (`integer`, optional) The unique identifier for the section assigned by Intercom. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.DeleteIntercomSection



Delete a section from Intercom Help Center.

**Parameters**

-   **section\_id** (`integer`, required) The unique identifier for the section to be deleted from Intercom. Provided by Intercom.

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.CreateOrUpdateCompany



Create or update a company in Intercom.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.FetchCompanyDetails



Fetch detailed information about a single company.

**Parameters**

-   **company\_id** (`string`, optional) The unique identifier for the company to retrieve details for.
-   **company\_name** (`string`, optional) The exact name of the company to filter and retrieve details for.
-   **company\_segment\_id** (`string`, optional) The segment ID to filter companies by. Use this to retrieve companies associated with a specific segment.
-   **company\_tag\_id** (`string`, optional) The tag ID used to filter and retrieve specific companies by their associated tag.
-   **result\_page\_number** (`integer`, optional) The page number of results to fetch. Defaults to the first page.
-   **results\_per\_page** (`integer`, optional) Number of results to display per page. Defaults to 15.

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.GetCompanyDetails



Retrieve detailed information about a specific company.

**Parameters**

-   **company\_id** (`string`, required) The unique identifier for the company provided by Intercom.

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.UpdateCompanyInfo



Update company information by ID in Intercom.

**Parameters**

-   **company\_identifier** (`string`, required) The unique identifier assigned by Intercom for the company. Required to update company details.

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.DeleteCompany



Deletes a single company by its ID.

**Parameters**

-   **company\_id** (`string`, required) The unique identifier for the company to be deleted in Intercom.

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.FetchCompanyContacts



Fetch a list of contacts for a specific company.

**Parameters**

-   **company\_id** (`string`, required) The unique identifier for the company, provided by Intercom, to fetch associated contacts.

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.ListCompanySegments



Fetch segments belonging to a specific company.

**Parameters**

-   **company\_id** (`string`, required) The unique identifier for the company provided by Intercom.

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.ListCompaniesIntercom



Retrieve a sorted list of companies from Intercom.

**Parameters**

-   **page\_number** (`integer`, optional) The page number of results to retrieve, starting from the first page by default.
-   **results\_per\_page** (`integer`, optional) Number of results to return per page. The default is 15.
-   **sort\_order** (`string`, optional) Specify ‘asc’ for ascending or ‘desc’ for descending order when listing companies. Defaults to ‘desc’.

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.ScrollThroughAllCompanies



Efficiently iterate over all companies using the scroll API.

**Parameters**

-   **scroll\_page\_identifier** (`string`, optional) The paging identifier returned in the response to continue fetching the next set of companies. Use the initial API response for the first request and subsequent responses for the next requests.

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.AttachCompanyToContact



Attach a company to a single contact in Intercom.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **contact\_unique\_identifier** (`string`, optional) The unique identifier for the contact as provided by Intercom. This is required to attach a company to the specified contact. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.FetchContactCompanies



Fetches a list of companies associated with a contact.

**Parameters**

-   **contact\_identifier** (`string`, required) The unique identifier for the contact provided by Intercom, required to fetch associated companies.

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.DetachCompanyFromContact



Detach a company from a specified contact in Intercom.

**Parameters**

-   **company\_id** (`string`, required) The unique identifier for the company provided by Intercom.
-   **contact\_identifier** (`string`, required) The unique identifier for the contact provided by Intercom.

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.FetchContactNotes



Fetches notes associated with a specific contact.

**Parameters**

-   **contact\_id** (`integer`, required) The unique ID of the contact whose notes you want to fetch.

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.AddNoteToContact



Add a note to a contact in Intercom.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **contact\_id** (`integer`, optional) The unique identifier for the contact to whom the note will be added. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.GetContactSegments



Fetch segments associated with a contact.

**Parameters**

-   **contact\_unique\_identifier** (`string`, required) The unique identifier for the contact provided by Intercom. This is required to fetch associated segments.

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.ListContactSubscriptions



Retrieve subscription types associated with a contact.

**Parameters**

-   **contact\_identifier** (`string`, required) The unique identifier provided by Intercom for the contact.

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.ManageContactSubscription



Manage a contact’s subscription preferences in Intercom.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **contact\_identifier** (`string`, optional) The unique identifier assigned to the contact by Intercom. This is required to specify which contact you want to manage the subscription for. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.RemoveSubscriptionFromContact



Remove a specific subscription from a contact.

**Parameters**

-   **contact\_identifier** (`string`, required) The unique identifier for the contact in Intercom. Required to specify which contact’s subscription should be removed.
-   **subscription\_type\_id** (`string`, required) The unique identifier for the subscription type to remove from a contact in Intercom.

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.GetContactTags



Fetches tags attached to a specific contact.

**Parameters**

-   **contact\_unique\_identifier** (`string`, required) The unique identifier for the contact, provided by Intercom, used to fetch associated tags.

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.TagContact



Attach a tag to a specific contact.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **contact\_id** (`string`, optional) The unique identifier for the contact in Intercom. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.RemoveTagFromContact



Remove a tag from a specific contact.

**Parameters**

-   **contact\_id** (`string`, required) The unique identifier for the contact in Intercom. This ID is necessary to specify which contact to remove the tag from.
-   **tag\_identifier** (`string`, required) The unique identifier for the tag assigned by Intercom. Used to specify which tag to remove from a contact.

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.UpdateIntercomContact



Update an existing Intercom contact’s details.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **contact\_id** (`string`, optional) The unique identifier of the contact to update in Intercom. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.FetchContactDetails



Fetch the details of a specific contact.

**Parameters**

-   **contact\_id** (`string`, required) The unique identifier of the contact you want to fetch details for.

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.DeleteContact



Deletes a specified contact from the system.

**Parameters**

-   **contact\_id** (`string`, required) The unique identifier of the contact to be deleted.

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.MergeContactIntercom



Merge a lead contact into a user contact in Intercom.

**Parameters**

-   **lead\_contact\_id** (`string`, optional) The unique identifier of the contact to merge away from. It must be a lead.
-   **merge\_into\_user\_id** (`string`, optional) Unique identifier for the contact to merge into. Must be a user contact ID.

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.SearchIntercomContacts



Search for contacts by their attributes.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.FetchAllContacts



Fetch a list of all contacts in your workspace.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.CreateNewContact



Create a new contact in the Intercom system.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.ArchiveContact



Archive a single contact in Intercom.

**Parameters**

-   **contact\_id** (`string`, required) The unique identifier of the contact to be archived in Intercom.

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.UnarchiveContact



Unarchive a single contact in Intercom.

**Parameters**

-   **contact\_id** (`string`, required) The unique identifier of the contact to unarchive in Intercom.

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.TagConversation



Attach a tag to a specific conversation.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **conversation\_id** (`string`, optional) The unique identifier of the conversation to which a tag will be attached. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.RemoveTagFromConversation



Remove a tag from a specific conversation.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **conversation\_id** (`string`, optional) The unique identifier of the conversation from which the tag will be removed. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **tag\_id** (`string`, optional) The unique identifier of the tag to be removed from the conversation. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.FetchConversationList



Retrieve a list of conversations with optional pagination options.

**Parameters**

-   **pagination\_starting\_cursor** (`string`, optional) Cursor string to fetch the next page of conversations for pagination.
-   **results\_per\_page** (`integer`, optional) Number of conversation results to display per page. Default is 20 if not specified.

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.CreateContactConversation



Create a conversation initiated by a contact.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.GetConversationDetails



Fetch details of a specific conversation from Intercom.

**Parameters**

-   **conversation\_id** (`integer`, required) The ID of the conversation to retrieve details for. This is required to fetch the specific conversation data.
-   **retrieve\_plaintext\_conversation** (`string`, optional) Set to ‘plaintext’ to retrieve conversation messages in plain text format.

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.UpdateConversation



Update an existing conversation.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **conversation\_id** (`integer`, optional) The ID of the conversation to update. It should be an integer representing the conversation you want to modify. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **retrieve\_messages\_as\_plaintext** (`string`, optional) Specify ‘plaintext’ to retrieve conversation messages in plain text format. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.SearchConversations



Search conversations by specific attributes.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.ReplyToIntercomConversation



Reply to a conversation in Intercom with a message or note.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **conversation\_identifier** (`string`, optional) The unique identifier for the conversation or ‘last’ to reply to the most recent conversation. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.ManageConversation



Manage and update conversation statuses or assignments.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **conversation\_id** (`string`, optional) The unique identifier for the conversation in Intercom. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.AutoAssignIntercomConversation



Auto-assign a conversation in Intercom.

**Parameters**

-   **conversation\_id** (`string`, required) The unique identifier for the conversation provided by Intercom.

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.AttachContactToConversation



Attach a contact to a conversation in Intercom.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **conversation\_id** (`string`, optional) The unique identifier for the conversation in Intercom. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.DetachContactFromConversation



Detach a contact from a conversation in Intercom.

**Parameters**

-   **contact\_identifier** (`string`, required) The unique identifier for the contact provided by Intercom. Use this to specify which contact to detach from the conversation.
-   **conversation\_identifier** (`string`, required) The unique identifier for the conversation in Intercom. This is required to detach the contact from the specified conversation.
-   **admin\_id** (`json`, optional) The ID of the admin performing the detachment action.

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.RedactConversationPartOrMessage



Redact specific parts or messages within a conversation.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.ListWorkspaceDataAttributes



Fetch data attributes for contacts, companies, or conversations.

**Parameters**

-   **data\_attribute\_model** (`string`, optional) Specify the model type: ‘contact’, ‘company’, or ‘conversation’.
-   **include\_archived\_attributes** (`boolean`, optional) Set to true to include archived attributes in the list. By default, archived attributes are excluded.

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.CreateDataAttribute



Create a data attribute for a contact or company.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.UpdateDataAttribute



Update a data attribute’s value via the API.

**Parameters**

-   **data\_attribute\_id** (`integer`, required) The unique identifier for the data attribute to be updated.
-   **allow\_messenger\_updates** (`boolean`, optional) Specify if the data attribute can be updated by the Messenger. Use ‘true’ to allow updates and ‘false’ to prevent them.
-   **archive\_attribute** (`boolean`, optional) Indicate if the attribute should be archived. `True` to archive, `False` to keep unarchived.
-   **attribute\_description** (`string`, optional) The readable description for the attribute as seen in the UI. Provides context or additional information about the attribute.
-   **list\_attribute\_options** (`array[string]`, optional) An array of strings representing options for list attributes. Each option should be provided as a hash with `value` as the key and the data type must be `string`.

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.SendIntercomEvent



Submit events to Intercom for user activity tracking.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.CreateEventSummaries



Create event summaries for tracking user events.

**Parameters**

-   **event\_last\_occurrence** (`integer`, optional) The timestamp representing the last occurrence of the event.
-   **event\_name\_for\_summaries** (`string`, optional) The name of the event, typically a past-tense verb-noun combination like ‘updated-plan’.
-   **event\_occurrence\_count** (`integer`, optional) The number of times the event occurred for the specified user.
-   **first\_event\_timestamp** (`integer`, optional) Timestamp for when the event first occurred. Use an integer representing Unix time.
-   **user\_identifier** (`string`, optional) The unique identifier for the user to create event summaries for.

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.CreateMessageDataExport



Create a data export job for Intercom messages.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.CheckExportJobStatus



Check the status of your Intercom data export job.

**Parameters**

-   **job\_identifier** (`string`, required) The unique identifier for the export job you want to check. This ID is provided when the export job is created.

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.CancelDataExportJob



Cancels an active data export job on Intercom.

**Parameters**

-   **job\_identifier** (`string`, required) The unique identifier for the data export job to be canceled. This is required to specify which job to stop.

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.DownloadIntercomDataExport



Download completed data exports from Intercom.

**Parameters**

-   **job\_identifier** (`string`, required) The unique identifier for the completed data export job. Required to download the data.

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.CreateAdminInitiatedMessage



Create a message initiated by an admin via Intercom.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.FetchNewsItems



Retrieve a list of news items from Intercom.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.CreateNewsItem



Create a news item using Intercom.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.GetNewsItemDetails



Fetches details of a specific news item.

**Parameters**

-   **news\_item\_id** (`integer`, required) The unique identifier for the news item provided by Intercom.

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.UpdateNewsItem



Updates information for a specific news item.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **news\_item\_id** (`integer`, optional) The unique identifier for the news item provided by Intercom. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.DeleteNewsItem



Delete a specific news item from the platform.

**Parameters**

-   **news\_item\_id** (`integer`, required) The unique identifier for the news item to be deleted.

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.FetchLiveNewsfeedItems



Retrieve all live news items from a specific newsfeed.

**Parameters**

-   **newsfeed\_id** (`string`, required) The unique identifier for the newsfeed, provided by Intercom, to retrieve live news items.

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.FetchAllNewsfeeds



Fetch a list of all available newsfeeds.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.FetchNewsfeedDetails



Fetch details of a specific newsfeed using its ID.

**Parameters**

-   **newsfeed\_id** (`string`, required) The unique identifier for the newsfeed item provided by Intercom. Use this to retrieve specific newsfeed details.

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.FetchNoteDetails



Fetches details of a specific note.

**Parameters**

-   **note\_id** (`integer`, required) The unique identifier for the note you want to retrieve details for.

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.GetAllSegments



Retrieve a list of all segments.

**Parameters**

-   **include\_contact\_count** (`boolean`, optional) Set to true to include the number of contacts in each segment.

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.GetSegmentDetails



Fetch details of a single segment from Intercom.

**Parameters**

-   **segment\_id** (`string`, required) The unique identifier of a specific segment to retrieve details for.

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.ListSubscriptionTypes



Retrieve all subscription types from Intercom.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.DeflectPhoneCallsToMessenger



Deflect phone calls to Intercom Messenger via SMS link.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.FetchWorkspaceTags



Retrieve all tags from a workspace in Intercom.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.ManageTagOperations



Create, update, or manage tags for companies and users.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.FetchTagDetails



Fetch details of a tag using its ID from the workspace.

**Parameters**

-   **tag\_id** (`string`, required) The unique identifier for a specific tag to fetch its details from the workspace.

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.RemoveTag



Delete a tag from the Intercom workspace using its ID.

**Parameters**

-   **tag\_id** (`string`, required) The unique identifier of the tag to be deleted from the workspace.

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.ListAppTeams



Retrieve a list of teams for the application.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.GetTeamDetails



Fetch details of a team and its admins.

**Parameters**

-   **team\_unique\_identifier** (`string`, required) The unique identifier of a specific team to retrieve details.

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.CreateTicketAttribute



Create a new attribute for a ticket type.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **ticket\_type\_identifier** (`string`, optional) The unique identifier for the ticket type provided by Intercom, required to specify which ticket type the new attribute will be added to. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.UpdateTicketTypeAttribute



Updates an existing attribute for a ticket type.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **ticket\_type\_identifier** (`string`, optional) The unique identifier for the ticket type provided by Intercom. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **ticket\_attribute\_id** (`string`, optional) The unique identifier for the ticket type attribute given by Intercom. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.GetTicketTypes



Retrieve a list of all ticket types for a workspace.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.CreateTicketType



Create a new ticket type with default attributes.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.FetchTicketTypeDetails



Fetches details of a specific ticket type in Intercom.

**Parameters**

-   **ticket\_type\_id** (`string`, required) The unique identifier for the ticket type assigned by Intercom. Used to fetch specific ticket type details.

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.UpdateTicketType



Update a ticket type with a new icon or details.

**Parameters**

-   **ticket\_type\_id** (`string`, required) The unique identifier for the ticket type as given by Intercom.
-   **internal\_use** (`boolean`, optional) Set to true if tickets are intended for internal use only; false for customer sharing.
-   **is\_ticket\_type\_archived** (`boolean`, optional) Set to true to archive the ticket type, or false to keep it active.
-   **ticket\_type\_description** (`string`, optional) Describe the ticket type. This should provide an overview or details about the ticket type.
-   **ticket\_type\_icon** (`string`, optional) Specify an emoji for the ticket type icon using Twemoji Cheatsheet.
-   **ticket\_type\_name** (`string`, optional) The name of the ticket type you want to update.

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.ReplyToTicket



Reply to a ticket with an admin note.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **ticket\_id** (`string`, optional) The unique identifier of the ticket to reply to. This must be provided to specify which ticket the admin note is for. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.CreateIntercomTicket



Create a new support ticket in Intercom.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.UpdateSupportTicket



Modify an existing support ticket in Intercom.

**Parameters**

-   **ticket\_id** (`string`, required) The unique identifier for the ticket as provided by Intercom.
-   **admin\_id** (`string`, optional) The ID of the admin performing the action on the ticket.
-   **assignee\_id** (`string`, optional) The ID of the admin or team to which the ticket is assigned. Use ‘0’ to unassign.
-   **ticket\_details** (`json`, optional) A JSON object containing key-value pairs of the ticket attributes to be updated, such as subject, priority, or tags.
-   **ticket\_state** (`string`, optional) The current state of the ticket. Must be one of: ‘in\_progress’, ‘waiting\_on\_customer’, or ‘resolved’.
-   **ticket\_visible\_to\_users** (`boolean`, optional) Set to true to make the ticket visible to users; false to keep it hidden.

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.FetchTicketDetails



Fetch details of a specific ticket from Intercom.

**Parameters**

-   **ticket\_identifier** (`string`, required) The unique identifier for the ticket, as provided by Intercom.

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.UpdateVisitorInfo



Update an existing visitor’s information in Intercom.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.FetchVisitorDetails



Fetch details of a single visitor using their user ID.

**Parameters**

-   **visitor\_user\_id** (`string`, required) The user ID of the visitor you want to retrieve details for.

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## IntercomApi.ConvertVisitorToUser



Convert a Visitor into a User or merge with an existing User.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `INTERCOM_API_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## Reference

Below is a reference of enumerations used by some of the tools in the IntercomApi MCP Server:

### ToolMode

-   **GET\_REQUEST\_SCHEMA**: `get_request_schema`
-   **EXECUTE**: `execute`

## Auth

The IntercomApi MCP Server uses the Auth Provider with id `arcade-intercom` to connect to users’ IntercomApi accounts. In order to use the MCP Server, you will need to configure the `arcade-intercom` auth provider.

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_intercom_api ``` Learn more](/guides/deployment-hosting.md)

Last updated on February 10, 2026

[FreshserviceApi](/en/resources/integrations/customer-support/freshservice-api.md)
[Contribute a Server](/en/resources/integrations/contribute-a-server.md)
