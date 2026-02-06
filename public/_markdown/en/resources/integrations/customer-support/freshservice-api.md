---
title: "FreshserviceApi"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Customer Support](/en/resources/integrations/customer-support/zendesk.md)
FreshserviceApi

# FreshserviceApi

Arcade Unoptimized

**Description:** Tools that enable LLMs to interact directly with the Freshservice API.

**Author:** Arcade

**Auth:** API Key

[![PyPI Version](https://img.shields.io/pypi/v/arcade_freshservice_api)](https://pypi.org/project/arcade_freshservice_api/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_freshservice_api)](https://pypi.org/project/arcade_freshservice_api/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_freshservice_api)](https://pypi.org/project/arcade_freshservice_api/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_freshservice_api)](https://pypi.org/project/arcade_freshservice_api/)

FreshserviceApi is a [Unoptimized MCP Server](/guides/create-tools/improve/types-of-tools.md#unoptimized-tools)
: each tool mirrors one HTTP endpoint and offers LLMs a way to interact with the low-level API.



Differently from [Optimized MCP Servers](/guides/create-tools/improve/types-of-tools.md#optimized-tools)
, Unoptimized tools are heavily influenced by the original API design, which is not usually optimized for LLM usage. For this reason, we recommend thoroughly evaluating the tools with your Agents or chatbots before using it in production. [Read more](/guides/create-tools/improve/types-of-tools.md) about Optimized vs Unoptimized tools.

The FreshserviceApi MCP Server offers a comprehensive set of tools for interacting with Freshservice programmatically. Build agents and AI apps to:

-   Manage organizational data: list, view, create/ delete, and inspect departments/locations/vendors/products/agent groups.
-   Manage assets and inventory: list asset types, assets, components, installed software, contracts, and asset-related fields; add/update/delete components.
-   Manage software & licenses: list software, application details, installations, and licenses.
-   Manage service catalog & knowledge base: list and view service items, catalog fields, solution articles/folders/categories; create/update/delete solution content and folders.
-   Manage users & agents: list, view, convert, merge, and delete requesters and agents; access requester/agent fields and onboarding requests.
-   Manage tickets & related data: list tickets, fetch ticket details, conversations, tasks, time entries, and remove/restore tickets or conversations.
-   Manage changes, problems, releases, and projects: list and retrieve change/problem/release/project records; manage notes, tasks, time entries, and delete/archive/restore items.
-   Manage CSAT, canned responses, announcements, and purchase orders: list/view/activate/deactivate/delete surveys; manage canned responses and folders; list announcements and purchase orders.
-   Retrieve configuration & metadata: fetch business hours, form fields (change/release), asset/component fields, requester/agent fields, departments/locations/products structure and more.

Use these endpoints to automate administration, asset lifecycle, ITSM workflows, reporting, and knowledge/cataglog maintenance within Freshservice.

## Available Tools

Tool Name

Description

FreshserviceApi.GetFreshserviceDepartments

Retrieve all departments from Freshservice.

FreshserviceApi.RetrieveDepartmentDetails

Retrieve department details using department ID.

FreshserviceApi.DeleteDepartment

Delete a department from Freshservice by ID.

FreshserviceApi.GetDepartmentFields

Retrieve department or company fields from Freshservice.

FreshserviceApi.ListFreshserviceAgentGroups

Retrieve a list of all Agent Groups in Freshservice.

FreshserviceApi.GetAgentGroupInfo

Retrieve details of a Freshservice agent group by ID.

FreshserviceApi.DeleteAgentGroup

Delete an agent group in Freshservice by ID.

FreshserviceApi.ListAllProducts

Retrieve a comprehensive list of products from Freshservice.

FreshserviceApi.GetProductDetails

Retrieve a specific Product from the Product Catalog.

FreshserviceApi.DeleteProduct

Delete a product from the Freshservice catalog.

FreshserviceApi.GetBusinessHoursConfigs

Retrieve a list of all Business Hours configurations from Freshservice.

FreshserviceApi.GetBusinessHoursConfig

Retrieve Freshservice Business Hours configuration by ID.

FreshserviceApi.GetAllLocations

Retrieve a list of all locations in Freshservice.

FreshserviceApi.FetchLocationDetails

Retrieve details of a specific location by ID.

FreshserviceApi.DeleteExistingLocation

Deletes an existing location from Freshservice.

FreshserviceApi.FetchAllVendors

Retrieve and list all vendors from Freshservice.

FreshserviceApi.GetVendorDetails

Retrieve details of a specific vendor by ID.

FreshserviceApi.DeleteExistingVendor

Delete an existing vendor in Freshservice.

FreshserviceApi.GetAssetTypes

Retrieve all asset types from Freshservice.

FreshserviceApi.RetrieveAssetType

Retrieve details of a specific asset type by ID.

FreshserviceApi.DeleteAssetType

Delete an existing asset type in Freshservice.

FreshserviceApi.GetAssetFields

Retrieve asset fields for a specific asset type.

FreshserviceApi.GetComponentTypes

Retrieve all component types in Freshservice.

FreshserviceApi.GetAssetList

Retrieve a list of all assets from Freshservice.

FreshserviceApi.GetAssetDetails

Retrieve details of a specific asset by ID.

FreshserviceApi.DeleteAsset

Delete an existing asset in Freshservice.

FreshserviceApi.ListInstalledSoftware

Retrieve all software installed on a specific device.

FreshserviceApi.ListAssetRequests

Retrieve all requests linked to a specific asset.

FreshserviceApi.GetAssetContracts

Retrieve all contracts linked to a specific asset.

FreshserviceApi.GetDeviceComponents

Retrieve all components of a specified device.

FreshserviceApi.AddAssetComponent

Add a new component to an existing asset.

FreshserviceApi.UpdateAssetComponent

Update a component in an asset.

FreshserviceApi.DeleteAssetComponent

Delete a specific component from an asset.

FreshserviceApi.GetSoftwareList

Retrieve all software applications in Freshservice.

FreshserviceApi.RetrieveSoftwareApplication

Retrieve a specific software application from Freshservice.

FreshserviceApi.GetSoftwareInstallationList

Retrieve a list of devices where specified software is installed.

FreshserviceApi.GetApplicationLicenses

Retrieve licenses linked to a specific software application.

FreshserviceApi.GetAllCsatSurveys

Retrieve a list of all CSAT surveys in Freshservice.

FreshserviceApi.GetCsatSurvey

Retrieve a CSAT survey by its ID from Freshservice.

FreshserviceApi.DeleteSurvey

Delete a survey and its responses from Freshservice.

FreshserviceApi.ActivateCsatSurvey

Activate a CSAT survey in Freshservice using its ID.

FreshserviceApi.DeactivateCsatSurvey

Deactivate a specified CSAT Survey in Freshservice.

FreshserviceApi.ViewServiceItem

Retrieve details of a specific service item.

FreshserviceApi.GetServiceItemsList

Retrieve a list of all Service Items in Freshservice.

FreshserviceApi.GetCatalogItemFields

Retrieve all fields for a specific service catalog item.

FreshserviceApi.GetSolutionArticles

Retrieve a list of Solution articles from Freshservice.

FreshserviceApi.ViewSolutionArticle

Retrieve details of a Freshservice solution article.

FreshserviceApi.DeleteSolutionArticle

Delete a solution article from Freshservice by ID.

FreshserviceApi.ListSolutionFolders

Retrieve all Solution Folders from Freshservice.

FreshserviceApi.ViewSolutionFolder

Retrieve details of a specific solution folder.

FreshserviceApi.DeleteSolutionFolder

Delete a solution folder in Freshservice.

FreshserviceApi.GetSolutionCategories

Retrieve a list of all solution categories in Freshservice.

FreshserviceApi.ViewSolutionCategory

Retrieve details of a specific solution category.

FreshserviceApi.DeleteSolutionCategory

Delete a solution category by its ID from Freshservice.

FreshserviceApi.GetAllFreshserviceRequesters

Retrieve a list of all requesters in Freshservice.

FreshserviceApi.GetFreshserviceRequester

Retrieve a requester by ID from Freshservice.

FreshserviceApi.DeleteRequesterFromFreshservice

Delete a requester by ID from Freshservice.

FreshserviceApi.DeleteRequesterAndTickets

Permanently delete a requester and their tickets.

FreshserviceApi.ConvertRequesterToAgent

Convert a requester into an occasional agent.

FreshserviceApi.MergeRequesters

Merge secondary requesters into a primary requester.

FreshserviceApi.GetRequesterFields

Retrieve all requester fields from Freshservice.

FreshserviceApi.GetFreshserviceAgents

Retrieve a list of all Agents in Freshservice.

FreshserviceApi.RetrieveFreshserviceAgent

Retrieve details of a Freshservice agent by ID.

FreshserviceApi.ConvertAgentToRequester

Convert an agent into a requester in Freshservice.

FreshserviceApi.DeleteAgentAndTickets

Permanently deletes an agent and their tickets.

FreshserviceApi.RetrieveAgentFields

Retrieve a list of all Agent Fields in Freshservice.

FreshserviceApi.FetchTicketList

Fetches the list of all support tickets in Freshservice.

FreshserviceApi.FetchTicketDetails

Retrieve details of a FreshService ticket using its ID.

FreshserviceApi.RemoveFreshserviceTicket

Remove a Freshservice support ticket by ID.

FreshserviceApi.RestoreDeletedTicket

Restore a deleted Freshservice ticket.

FreshserviceApi.GetTicketConversations

Fetches all conversations for a specific Freshservice ticket.

FreshserviceApi.RemoveTicketConversation

Remove a conversation from a Freshservice ticket.

FreshserviceApi.GetTicketTasks

Retrieve tasks for a specific Freshservice ticket.

FreshserviceApi.RetrieveTicketTask

Retrieve details of a task from a ticket in Freshservice.

FreshserviceApi.DeleteTicketTask

Deletes a task from a specified ticket in Freshservice.

FreshserviceApi.GetTicketTimeEntries

Retrieve time entries for a given ticket ID.

FreshserviceApi.GetTicketTimeEntry

Retrieve a time entry for a specific ticket in Freshservice.

FreshserviceApi.DeleteTicketTimeEntry

Deletes a time entry from a Freshservice ticket.

FreshserviceApi.ListFreshserviceChanges

Retrieve all changes from Freshservice.

FreshserviceApi.RetrieveChangeRequest

Fetch a Change request by ID from Freshservice.

FreshserviceApi.DeleteFreshserviceChange

Deletes a specified change request from Freshservice.

FreshserviceApi.RetrieveChangeNotes

Retrieve notes from a specific change request.

FreshserviceApi.RetrieveChangeNote

Retrieve a specific note from a change request in Freshservice.

FreshserviceApi.DeleteChangeNote

Delete a note from a Change request in Freshservice.

FreshserviceApi.RetrieveChangeTasks

Retrieve tasks for a specific Change request in Freshservice.

FreshserviceApi.RetrieveChangeTaskInfo

Retrieve details of a task in a change request.

FreshserviceApi.RemoveChangeTask

Delete a task from a change request in Freshservice.

FreshserviceApi.GetChangeTimeEntries

Retrieve time entries for a specific Change request.

FreshserviceApi.RetrieveChangeRequestTimeEntry

Retrieve a time entry from a Change request by ID.

FreshserviceApi.DeleteChangeTimeEntryFreshservice

Delete a time entry from a Change request in Freshservice.

FreshserviceApi.RetrieveAllProjects

Retrieve a list of all projects in Freshservice.

FreshserviceApi.RetrieveFreshserviceProject

Retrieve project details from Freshservice by ID.

FreshserviceApi.DeleteFreshserviceProject

Deletes a project in Freshservice by ID.

FreshserviceApi.ArchiveProject

Archive an existing project in Freshservice.

FreshserviceApi.RestoreArchivedProject

Restores an archived project in Freshservice.

FreshserviceApi.ListProjectTasks

Retrieve a list of all project tasks in Freshservice.

FreshserviceApi.GetProjectTaskDetails

Retrieve detailed information about a project task in Freshservice.

FreshserviceApi.DeleteProjectTask

Deletes a specified project task in Freshservice.

FreshserviceApi.GetChangeFormFields

Retrieve all fields in the Change Object of Freshservice.

FreshserviceApi.GetReleaseFormFields

Retrieve all fields of the release object form.

FreshserviceApi.GetFreshserviceAnnouncements

Retrieve all announcements from Freshservice.

FreshserviceApi.FetchAnnouncementDetails

Retrieve specific announcement details from Freshservice.

FreshserviceApi.DeleteFreshserviceAnnouncement

Delete a specific announcement from Freshservice.

FreshserviceApi.RetrieveFreshserviceProblems

Retrieve all problems from Freshservice.

FreshserviceApi.RetrieveFreshserviceProblem

Retrieve a specific problem in Freshservice by ID.

FreshserviceApi.DeleteProblem

Delete a problem using its ID from Freshservice.

FreshserviceApi.GetProblemNotes

Retrieve notes for a specific problem ID in Freshservice.

FreshserviceApi.RetrieveProblemNote

Retrieve a specific note from a problem in Freshservice.

FreshserviceApi.DeleteProblemNote

Delete a note from a specific problem in Freshservice.

FreshserviceApi.GetProblemTasks

Retrieve tasks for a specific problem from Freshservice.

FreshserviceApi.RetrieveProblemTask

Retrieve details of a specific task from a problem in Freshservice.

FreshserviceApi.DeleteProblemTask

Delete a task from a problem in Freshservice.

FreshserviceApi.GetProblemTimeEntries

Retrieve time entries for a specific problem by ID.

FreshserviceApi.GetProblemTimeEntry

Retrieve time entry details for a specific problem.

FreshserviceApi.DeleteProblemTimeEntry

Delete a time entry from a specified problem in Freshservice.

FreshserviceApi.GetUserOnboardingRequests

Retrieve onboarding requests for a user.

FreshserviceApi.RetrieveOnboardingRequest

Retrieve details of a specific onboarding request.

FreshserviceApi.GetOnboardingRequestTickets

Retrieve FreshService Tickets for a specific Onboarding Request.

FreshserviceApi.GetCannedResponses

Retrieve all canned responses from Freshservice.

FreshserviceApi.GetCannedResponse

Retrieve a specific Canned Response by ID from Freshservice.

FreshserviceApi.DeleteCannedResponse

Delete a specific canned response from Freshservice.

FreshserviceApi.GetFreshserviceCannedResponseFolders

Retrieve all canned response folders from Freshservice.

FreshserviceApi.GetCannedResponseFolder

Retrieve a specific canned response folder from Freshservice.

FreshserviceApi.DeleteCannedResponseFolder

Delete a Canned Response Folder in Freshservice.

FreshserviceApi.ListCannedResponses

Retrieve all canned responses from a specified folder.

FreshserviceApi.GetReleasesList

Retrieve a list of all Releases in Freshservice.

FreshserviceApi.GetReleaseDetails

Retrieve details of a specific release by ID in Freshservice.

FreshserviceApi.DeleteFreshserviceRelease

Delete a specific release in Freshservice.

FreshserviceApi.GetReleaseNotes

Retrieve release notes from Freshservice using a release ID.

FreshserviceApi.FetchReleaseNote

Retrieve a note on a release by ID from Freshservice.

FreshserviceApi.DeleteReleaseNoteFreshservice

Deletes a note from a specified release in Freshservice.

FreshserviceApi.RetrieveReleaseTasks

Retrieve tasks for a specified release in Freshservice.

FreshserviceApi.RetrieveReleaseTask

Retrieve a specific task from a release in Freshservice.

FreshserviceApi.DeleteReleaseTask

Delete a task from a specified release in Freshservice.

FreshserviceApi.GetReleaseTimeEntries

Retrieve time entries for a specific release in Freshservice.

FreshserviceApi.FetchReleaseTimeEntry

Retrieve details of a release time entry by ID.

FreshserviceApi.DeleteReleaseTimeEntry

Delete a time entry from a release in Freshservice.

FreshserviceApi.ListPurchaseOrders

Retrieve a list of all Purchase Orders from Freshservice.

FreshserviceApi.GetPurchaseOrder

Retrieve details of an existing purchase order by ID.

FreshserviceApi.DeletePurchaseOrder

Delete a specified purchase order in Freshservice.

If you need to perform an action that’s not listed here, you can [get in touch with us](mailto:contact@arcade.dev) to request a new tool, or [create your own tools](/guides/create-tools/tool-basics/build-mcp-server.md).

## FreshserviceApi.GetFreshserviceDepartments



Retrieve all departments from Freshservice.

**Parameters**

-   **entries\_per\_page** (`integer`, optional) The number of entries to retrieve per page in a paginated list.
-   **page\_number** (`integer`, optional) The specific page number of departments to retrieve from Freshservice.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.RetrieveDepartmentDetails



Retrieve department details using department ID.

**Parameters**

-   **department\_id** (`integer`, required) The ID of the department to retrieve from Freshservice. Use only integer values.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.DeleteDepartment



Delete a department from Freshservice by ID.

**Parameters**

-   **department\_id** (`integer`, required) The unique ID of the department to delete from Freshservice.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.GetDepartmentFields



Retrieve department or company fields from Freshservice.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.ListFreshserviceAgentGroups



Retrieve a list of all Agent Groups in Freshservice.

**Parameters**

-   **entries\_per\_page** (`integer`, optional) Specify the number of entries to retrieve in each page of the list.
-   **page\_number\_to\_retrieve** (`integer`, optional) The specific page number to retrieve from a paginated list of agent groups.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.GetAgentGroupInfo



Retrieve details of a Freshservice agent group by ID.

**Parameters**

-   **agent\_group\_identifier** (`integer`, required) The unique integer ID of the Freshservice agent group to retrieve.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.DeleteAgentGroup



Delete an agent group in Freshservice by ID.

**Parameters**

-   **agent\_group\_id\_to\_delete** (`integer`, required) The unique integer ID of the agent group to be deleted in Freshservice.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.ListAllProducts



Retrieve a comprehensive list of products from Freshservice.

**Parameters**

-   **entries\_per\_page** (`integer`, optional) Specify the number of entries to retrieve in each page of the product list.
-   **page\_number** (`integer`, optional) Specify the page number to retrieve from the paginated list of products.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.GetProductDetails



Retrieve a specific Product from the Product Catalog.

**Parameters**

-   **product\_id** (`integer`, required) The unique identifier for the product in the Freshservice Product Catalog to retrieve details.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.DeleteProduct



Delete a product from the Freshservice catalog.

**Parameters**

-   **product\_identifier** (`integer`, required) The unique ID of the product to be deleted from the Freshservice catalog.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.GetBusinessHoursConfigs



Retrieve a list of all Business Hours configurations from Freshservice.

**Parameters**

-   **entries\_per\_page** (`integer`, optional) The number of Business Hours configurations to retrieve per page in the paginated list.
-   **requested\_page\_number** (`integer`, optional) Specify the page number of results you want to retrieve.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.GetBusinessHoursConfig



Retrieve Freshservice Business Hours configuration by ID.

**Parameters**

-   **business\_hours\_configuration\_id** (`integer`, required) The ID of the Business Hours configuration to retrieve from Freshservice.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.GetAllLocations



Retrieve a list of all locations in Freshservice.

**Parameters**

-   **entries\_per\_page** (`integer`, optional) The number of entries to retrieve per page when listing locations. Typically an integer value.
-   **page\_number\_to\_retrieve** (`integer`, optional) The page number of locations to retrieve from Freshservice.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.FetchLocationDetails



Retrieve details of a specific location by ID.

**Parameters**

-   **location\_identifier** (`integer`, required) The ID of the location to be retrieved. It should be an integer representing a specific location in the Freshservice system.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.DeleteExistingLocation



Deletes an existing location from Freshservice.

**Parameters**

-   **location\_id** (`integer`, required) The unique identifier of the location to be deleted. Provide the numeric ID corresponding to the location you wish to remove from Freshservice.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.FetchAllVendors



Retrieve and list all vendors from Freshservice.

**Parameters**

-   **entries\_per\_page** (`integer`, optional) Specify the number of vendor entries to retrieve for each page when listing vendors.
-   **page\_number** (`integer`, optional) Specify the page number to retrieve from the paginated list of vendors.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.GetVendorDetails



Retrieve details of a specific vendor by ID.

**Parameters**

-   **vendor\_identifier** (`integer`, required) The unique ID of the vendor to retrieve. This ID is an integer and identifies the vendor in the Freshservice system.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.DeleteExistingVendor



Delete an existing vendor in Freshservice.

**Parameters**

-   **vendor\_id** (`integer`, required) The unique identifier of the vendor to be deleted. It should be an integer value.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.GetAssetTypes



Retrieve all asset types from Freshservice.

**Parameters**

-   **entries\_per\_page** (`integer`, optional) The number of asset type entries to retrieve per page in the paginated list.
-   **page\_number** (`integer`, optional) The page number to retrieve from the list of asset types.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.RetrieveAssetType



Retrieve details of a specific asset type by ID.

**Parameters**

-   **asset\_type\_id** (`integer`, required) The unique integer identifier for the asset type to retrieve from Freshservice. Required for querying specific asset type details.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.DeleteAssetType



Delete an existing asset type in Freshservice.

**Parameters**

-   **asset\_type\_id** (`integer`, required) The unique integer ID of the asset type to be deleted. This ID identifies which asset type should be removed from the Freshservice database.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.GetAssetFields



Retrieve asset fields for a specific asset type.

**Parameters**

-   **asset\_type\_identifier** (`integer`, required) The unique identifier for the asset type to retrieve its fields in Freshservice.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.GetComponentTypes



Retrieve all component types in Freshservice.

**Parameters**

-   **entries\_per\_page** (`integer`, optional) The number of component type entries to retrieve per page in a paginated list. Specify an integer value.
-   **page\_number** (`integer`, optional) The specific page number of component types to retrieve from Freshservice.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.GetAssetList



Retrieve a list of all assets from Freshservice.

**Parameters**

-   **entries\_per\_page** (`integer`, optional) Specify the number of entries to retrieve per page for pagination. Not applicable with search or filter queries.
-   **page\_number** (`integer`, optional) The page number to retrieve for paginated asset lists.
-   **include\_asset\_type\_fields** (`string`, optional) Specify asset type fields to include in the response. Use this to get additional data about each asset type.
-   **apply\_asset\_filter** (`string`, optional) A URL-encoded string to filter the asset list. Supports parameters like asset\_type\_id, department\_id, and more.
-   **asset\_search\_query** (`string`, optional) A simple query to search assets by name, asset\_tag, or serial\_number. Formulate queries like “name:‘dell monitor’”.
-   **include\_trashed\_assets** (`boolean`, optional) Set to true to list assets in trash.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.GetAssetDetails



Retrieve details of a specific asset by ID.

**Parameters**

-   **asset\_display\_id** (`integer`, required) The unique display ID of the asset to retrieve details from Freshservice.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.DeleteAsset



Delete an existing asset in Freshservice.

**Parameters**

-   **asset\_display\_id** (`integer`, required) The unique integer identifier of the asset to be deleted. Required to specify which asset to remove from Freshservice.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.ListInstalledSoftware



Retrieve all software installed on a specific device.

**Parameters**

-   **device\_display\_id** (`integer`, required) The unique integer identifier for the device whose installed software applications are to be retrieved.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.ListAssetRequests



Retrieve all requests linked to a specific asset.

**Parameters**

-   **asset\_display\_id** (`integer`, required) The display ID of the asset for which to retrieve associated requests.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.GetAssetContracts



Retrieve all contracts linked to a specific asset.

**Parameters**

-   **asset\_display\_id** (`integer`, required) The unique display ID of the asset to retrieve contracts for.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.GetDeviceComponents



Retrieve all components of a specified device.

**Parameters**

-   **device\_display\_id** (`integer`, required) The integer ID of the device whose components you want to list.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.AddAssetComponent



Add a new component to an existing asset.

**Parameters**

-   **asset\_display\_id** (`integer`, required) The unique identifier of the asset to which the new component will be added. This should be an integer value.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.UpdateAssetComponent



Update a component in an asset.

**Parameters**

-   **asset\_display\_id** (`integer`, required) The numeric identifier of the asset to be updated in Freshservice.
-   **component\_identifier** (`integer`, required) The unique identifier of the component to be updated, as an integer.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.DeleteAssetComponent



Delete a specific component from an asset.

**Parameters**

-   **asset\_display\_id** (`integer`, required) The display ID of the asset from which the component will be deleted. This ID uniquely identifies the asset in the Freshservice system.
-   **component\_id** (`integer`, required) The unique identifier of the component to be deleted. This is required to specify which component will be removed from the asset.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.GetSoftwareList



Retrieve all software applications in Freshservice.

**Parameters**

-   **entries\_per\_page** (`integer`, optional) Number of software entries to retrieve per page for pagination.
-   **page\_number** (`integer`, optional) The page number of the software list to retrieve. Used for pagination.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.RetrieveSoftwareApplication



Retrieve a specific software application from Freshservice.

**Parameters**

-   **application\_id** (`integer`, required) The unique identifier for the specific software application in Freshservice to be retrieved. It must be an integer.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.GetSoftwareInstallationList



Retrieve a list of devices where specified software is installed.

**Parameters**

-   **software\_application\_id** (`integer`, required) The unique identifier of the software application to fetch the installation list.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.GetApplicationLicenses



Retrieve licenses linked to a specific software application.

**Parameters**

-   **application\_id** (`integer`, required) The unique identifier for the software application to retrieve licenses for. Provide as an integer.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.GetAllCsatSurveys



Retrieve a list of all CSAT surveys in Freshservice.

**Parameters**

-   **filter\_active\_surveys** (`integer`, optional) Filter surveys by activity status. Use 1 for active and 0 for inactive.
-   **entries\_per\_page** (`integer`, optional) The number of entries to retrieve per page in a paginated list. Specify an integer value.
-   **survey\_page\_number** (`integer`, optional) The page number of CSAT surveys to retrieve for pagination.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.GetCsatSurvey



Retrieve a CSAT survey by its ID from Freshservice.

**Parameters**

-   **csat\_survey\_id** (`integer`, required) The ID of the CSAT survey to retrieve from Freshservice. It should be an integer value.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.DeleteSurvey



Delete a survey and its responses from Freshservice.

**Parameters**

-   **survey\_id\_to\_delete** (`integer`, required) The ID of the survey you wish to delete from Freshservice.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.ActivateCsatSurvey



Activate a CSAT survey in Freshservice using its ID.

**Parameters**

-   **csat\_survey\_id** (`integer`, required) The ID of the CSAT survey to activate in Freshservice.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.DeactivateCsatSurvey



Deactivate a specified CSAT Survey in Freshservice.

**Parameters**

-   **survey\_id** (`integer`, required) The ID of the CSAT survey you wish to deactivate in Freshservice.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.ViewServiceItem



Retrieve details of a specific service item.

**Parameters**

-   **service\_item\_id** (`integer`, required) The ID of the service item you want to retrieve.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.GetServiceItemsList



Retrieve a list of all Service Items in Freshservice.

**Parameters**

-   **entries\_per\_page** (`integer`, optional) The number of service items to retrieve per page in a paginated list.
-   **page\_number\_to\_retrieve** (`integer`, optional) The page number to retrieve for paginated service items.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.GetCatalogItemFields



Retrieve all fields for a specific service catalog item.

**Parameters**

-   **service\_item\_id** (`integer`, required) The ID of the service item to retrieve. Use an integer value representing the specific catalog item.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.GetSolutionArticles



Retrieve a list of Solution articles from Freshservice.

**Parameters**

-   **entries\_per\_page** (`integer`, optional) Specify the number of solution articles to retrieve per page in the paginated results.
-   **page\_number** (`integer`, optional) The page number of the solution articles to retrieve from Freshservice.
-   **folder\_identifier** (`integer`, optional) The numeric ID of the folder to list solution articles from.
-   **solution\_category\_id** (`integer`, optional) Specify the ID of the category whose solution articles are to be retrieved.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.ViewSolutionArticle



Retrieve details of a Freshservice solution article.

**Parameters**

-   **solution\_article\_id** (`integer`, required) The unique integer ID of the solution article to retrieve.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.DeleteSolutionArticle



Delete a solution article from Freshservice by ID.

**Parameters**

-   **solution\_article\_id** (`integer`, required) ID of the solution article to be deleted from Freshservice.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.ListSolutionFolders



Retrieve all Solution Folders from Freshservice.

**Parameters**

-   **solution\_category\_id** (`integer`, optional) ID of the solution category where the folders reside.
-   **per\_page\_count** (`integer`, optional) Specifies the number of solution folders to retrieve per page for pagination.
-   **page\_number\_to\_retrieve** (`integer`, optional) Specify the page number to retrieve from the paginated solution folders list.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.ViewSolutionFolder



Retrieve details of a specific solution folder.

**Parameters**

-   **solution\_folder\_id** (`integer`, required) The unique ID of the solution folder to retrieve details.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.DeleteSolutionFolder



Delete a solution folder in Freshservice.

**Parameters**

-   **solution\_folder\_id** (`integer`, required) ID of the solution folder to be deleted from Freshservice.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.GetSolutionCategories



Retrieve a list of all solution categories in Freshservice.

**Parameters**

-   **entries\_per\_page** (`integer`, optional) The number of entries to retrieve per page in the paginated list.
-   **page\_number\_to\_retrieve** (`integer`, optional) The page number to retrieve in the paginated list of solution categories.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.ViewSolutionCategory



Retrieve details of a specific solution category.

**Parameters**

-   **solution\_category\_id** (`integer`, required) ID of the solution category to retrieve details for.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.DeleteSolutionCategory



Delete a solution category by its ID from Freshservice.

**Parameters**

-   **solution\_category\_id** (`integer`, required) The unique ID of the solution category to be deleted from Freshservice.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.GetAllFreshserviceRequesters



Retrieve a list of all requesters in Freshservice.

**Parameters**

-   **entries\_per\_page** (`integer`, optional) Number of entries to retrieve in each page of the paginated list.
-   **page\_number\_to\_retrieve** (`integer`, optional) The page number to retrieve from the list of Freshservice requesters.
-   **requester\_email** (`string`, optional) The email address to find the corresponding requester.
-   **filter\_by\_mobile\_phone\_number** (`string`, optional) Filter requesters by their mobile phone number to return matching entries.
-   **work\_phone\_number\_for\_requesters** (`string`, optional) The work phone number to filter requesters with that specific number in Freshservice.
-   **query\_filter** (`string`, optional) URL-encoded query filter to apply to the list of requesters. Supports first\_name, last\_name, job\_title, primary\_email, and more.
-   **filter\_active\_accounts** (`boolean`, optional) Include only active user accounts if true. If false, include only deactivated accounts. Leaving unspecified returns both.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.GetFreshserviceRequester



Retrieve a requester by ID from Freshservice.

**Parameters**

-   **requester\_id** (`integer`, required) The unique integer ID of the requester to retrieve from Freshservice.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.DeleteRequesterFromFreshservice



Delete a requester by ID from Freshservice.

**Parameters**

-   **requester\_id\_to\_delete** (`integer`, required) The ID of the requester to be deleted from Freshservice. This should be an integer.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.DeleteRequesterAndTickets



Permanently delete a requester and their tickets.

**Parameters**

-   **requester\_id\_to\_delete** (`integer`, required) The ID of the requester to permanently delete along with their tickets.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.ConvertRequesterToAgent



Convert a requester into an occasional agent.

**Parameters**

-   **requester\_identifier** (`integer`, required) The integer ID of the requester to convert into an occasional agent.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.MergeRequesters



Merge secondary requesters into a primary requester.

**Parameters**

-   **secondary\_requester\_ids** (`array[integer]`, required) List of IDs for the secondary requesters to merge into the primary.
-   **primary\_requester\_id** (`integer`, required) Specify the ID of the primary requester to merge secondary requesters into.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.GetRequesterFields



Retrieve all requester fields from Freshservice.

**Parameters**

-   **entries\_per\_page** (`integer`, optional) The number of entries to retrieve per page in a paginated list for requester fields.
-   **page\_number\_to\_retrieve** (`integer`, optional) Specify the page number of requester fields to retrieve from Freshservice.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.GetFreshserviceAgents



Retrieve a list of all Agents in Freshservice.

**Parameters**

-   **entries\_per\_page** (`integer`, optional) The number of agent entries to retrieve in each page of a paginated list. Useful for controlling the size of paginated results.
-   **page\_number\_to\_retrieve** (`integer`, optional) The specific page number of the agent list to retrieve.
-   **requester\_email** (`string`, optional) The email address of the requester for which the corresponding agent needs to be listed.
-   **filter\_by\_mobile\_phone\_number** (`string`, optional) Filter agents by a specific mobile phone number to list the corresponding requesters.
-   **filter\_by\_work\_phone\_number** (`string`, optional) Work phone number to filter the list of agents by their corresponding requesters.
-   **agent\_type** (`string`, optional) Filter agents by employment type: ‘fulltime’ or ‘occasional’.
-   **agent\_query\_filter** (`string`, optional) URL-encoded string for filtering agents. Supports parameters like first\_name, last\_name, job\_title, email, etc.
-   **filter\_active\_users** (`boolean`, optional) Set to true to list active accounts, false to list deactivated ones, or omit to include both.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.RetrieveFreshserviceAgent



Retrieve details of a Freshservice agent by ID.

**Parameters**

-   **agent\_id** (`integer`, required) The unique integer ID of the Freshservice agent to retrieve details for.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.ConvertAgentToRequester



Convert an agent into a requester in Freshservice.

**Parameters**

-   **agent\_id\_for\_conversion** (`integer`, required) The ID of the agent to be converted into a requester. This must be a valid integer representing the agent’s ID in Freshservice.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.DeleteAgentAndTickets



Permanently deletes an agent and their tickets.

**Parameters**

-   **agent\_id\_to\_delete** (`integer`, required) The ID of the agent to permanently delete along with their tickets. This is irreversible.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.RetrieveAgentFields



Retrieve a list of all Agent Fields in Freshservice.

**Parameters**

-   **entries\_per\_page** (`integer`, optional) The number of entries to retrieve per page in a paginated list.
-   **page\_number\_to\_retrieve** (`integer`, optional) The page number to retrieve for paginated results.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.FetchTicketList



Fetches the list of all support tickets in Freshservice.

**Parameters**

-   **ticket\_filter\_type** (`string`, optional) Apply pre-defined filters to fetch specific ticket sets. Options: ‘new\_and\_my\_open’, ‘watching’, ‘spam’, ‘deleted’.
-   **requester\_email\_filter** (`string`, optional) Filter tickets by the requester’s email ID to retrieve specific ticket data.
-   **filter\_by\_requester\_id** (`integer`, optional) Filter tickets created by a specific requester using their ID.
-   **filter\_by\_updated\_since** (`string`, optional) Specify the ISO 8601 date-time to filter tickets updated since that time. Example: ‘2015-01-19T02:00:00Z’.
-   **fields\_to\_include\_in\_response** (`string`, optional) Specify which additional fields to include in the ticket response. Options are ‘stats’ and ‘requester’.
-   **sort\_order** (`string`, optional) Order to sort the ticket list. Supported values: ‘asc’ for ascending and ‘desc’ for descending. Default is ‘desc’.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.FetchTicketDetails



Retrieve details of a FreshService ticket using its ID.

**Parameters**

-   **ticket\_id** (`integer`, required) ID of the Freshservice ticket to be retrieved.
-   **include\_fields\_in\_ticket\_response** (`string`, optional) Specify fields to include in the ticket response, such as ‘stats’, ‘requester’, ‘conversations’, etc.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.RemoveFreshserviceTicket



Remove a Freshservice support ticket by ID.

**Parameters**

-   **ticket\_id\_to\_delete** (`integer`, required) ID of the Freshservice support ticket to delete.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.RestoreDeletedTicket



Restore a deleted Freshservice ticket.

**Parameters**

-   **ticket\_id\_to\_restore** (`integer`, required) The ID of the Freshservice ticket to be restored. This must be an integer.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.GetTicketConversations



Fetches all conversations for a specific Freshservice ticket.

**Parameters**

-   **ticket\_id** (`integer`, required) The ID of the Freshservice ticket for which conversations need to be fetched. This should be an integer.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.RemoveTicketConversation



Remove a conversation from a Freshservice ticket.

**Parameters**

-   **conversation\_ticket\_id** (`integer`, required) The ID of the ticket from which the conversation should be removed.
-   **conversation\_id\_to\_remove** (`integer`, required) The ID of the specific reply or note to delete from a Freshservice ticket.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.GetTicketTasks



Retrieve tasks for a specific Freshservice ticket.

**Parameters**

-   **ticket\_request\_id** (`integer`, required) ID of the Freshservice ticket for which tasks are to be retrieved.
-   **tasks\_per\_page** (`integer`, optional) Specify the number of tasks to retrieve per page in the paginated list.
-   **page\_number** (`integer`, optional) The specific page number to retrieve from the paginated list of tasks.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.RetrieveTicketTask



Retrieve details of a task from a ticket in Freshservice.

**Parameters**

-   **ticket\_request\_id** (`integer`, required) The ID of the ticket request to retrieve the specific task from Freshservice.
-   **task\_identifier** (`integer`, required) The unique identifier for the task to be retrieved. Provide this to get task details from a ticket.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.DeleteTicketTask



Deletes a task from a specified ticket in Freshservice.

**Parameters**

-   **ticket\_id** (`integer`, required) The unique ID of the ticket from which you want to delete a task.
-   **task\_id** (`integer`, required) The unique identifier for the task to be deleted from the ticket.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.GetTicketTimeEntries



Retrieve time entries for a given ticket ID.

**Parameters**

-   **ticket\_request\_id** (`integer`, required) The unique ID of the ticket request to retrieve time entries for.
-   **number\_of\_entries\_per\_page** (`integer`, optional) The number of time entries to retrieve in each page of a paginated list.
-   **page\_number** (`integer`, optional) The page number to retrieve from the paginated list of time entries.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.GetTicketTimeEntry



Retrieve a time entry for a specific ticket in Freshservice.

**Parameters**

-   **ticket\_request\_id** (`integer`, required) The ID of the specific ticket request for which you want to retrieve the time entry. It must be an integer.
-   **time\_entry\_id** (`integer`, required) Provide the ID of the time entry to retrieve specific details from a ticket in Freshservice.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.DeleteTicketTimeEntry



Deletes a time entry from a Freshservice ticket.

**Parameters**

-   **ticket\_id** (`integer`, required) The unique identifier for the Freshservice ticket from which the time entry will be deleted. This must be an integer.
-   **time\_entry\_id** (`integer`, required) The unique integer ID of the time entry to be deleted from the Freshservice ticket.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.ListFreshserviceChanges



Retrieve all changes from Freshservice.

**Parameters**

-   **change\_filter\_name** (`string`, optional) Specify the filter name to retrieve changes. Possible values: ‘my\_open’, ‘unassigned’, ‘closed’, ‘release\_requested’, ‘deleted’, ‘all’.
-   **requester\_id** (`string`, optional) ID of the person who requested the changes to filter results.
-   **requester\_email** (`string`, optional) Retrieve changes by the requester’s email address in Freshservice.
-   **updated\_since** (`string`, optional) Retrieve changes updated after a specified date. Date format should be YYYY-MM-DD.
-   **page\_size** (`integer`, optional) Specify the number of changes to retrieve per page in a paginated list.
-   **page\_number** (`integer`, optional) The specific page number to retrieve in a paginated list of changes.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.RetrieveChangeRequest



Fetch a Change request by ID from Freshservice.

**Parameters**

-   **change\_request\_id** (`integer`, required) ID of the Change request to retrieve from Freshservice.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.DeleteFreshserviceChange



Deletes a specified change request from Freshservice.

**Parameters**

-   **change\_request\_id** (`integer`, required) The ID of the change request to delete from Freshservice.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.RetrieveChangeNotes



Retrieve notes from a specific change request.

**Parameters**

-   **change\_request\_id** (`integer`, required) ID of the change request for which notes are to be retrieved. This is an integer value.
-   **notes\_per\_page** (`integer`, optional) The number of notes to retrieve per page in a paginated list.
-   **page\_number\_to\_retrieve** (`integer`, optional) The specific page number of notes to retrieve for pagination.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.RetrieveChangeNote



Retrieve a specific note from a change request in Freshservice.

**Parameters**

-   **change\_request\_id** (`integer`, required) ID of the change request to retrieve its specific note.
-   **note\_identifier** (`integer`, required) The unique identifier for the note to be retrieved from a change request in Freshservice.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.DeleteChangeNote



Delete a note from a Change request in Freshservice.

**Parameters**

-   **change\_request\_id** (`integer`, required) The unique ID of the Change request from which the note will be deleted.
-   **note\_id** (`integer`, required) The unique identifier of the note to delete from a Change request in Freshservice.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.RetrieveChangeTasks



Retrieve tasks for a specific Change request in Freshservice.

**Parameters**

-   **change\_request\_id** (`integer`, required) ID of the Change request for retrieving associated tasks from Freshservice.
-   **tasks\_per\_page** (`integer`, optional) Specify the number of tasks to retrieve per page in the paginated list.
-   **page\_number** (`integer`, optional) Specify the page number of tasks to retrieve for the Change request.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.RetrieveChangeTaskInfo



Retrieve details of a task in a change request.

**Parameters**

-   **change\_request\_id** (`integer`, required) ID of the change request to retrieve the corresponding task details.
-   **task\_identifier** (`integer`, required) Provide the integer ID of the task to retrieve its details.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.RemoveChangeTask



Delete a task from a change request in Freshservice.

**Parameters**

-   **change\_request\_id** (`integer`, required) The unique identifier for the change request from which a task will be deleted. This should be an integer.
-   **task\_identifier** (`integer`, required) The unique integer ID of the task to delete from a change request in Freshservice.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.GetChangeTimeEntries



Retrieve time entries for a specific Change request.

**Parameters**

-   **change\_request\_id** (`integer`, required) ID of the change request for which time entries should be retrieved. This is necessary to specify which change request’s time entries are needed.
-   **time\_entries\_per\_page** (`integer`, optional) Specify the number of time entries to retrieve per page. Helps in paginated responses.
-   **page\_number\_to\_retrieve** (`integer`, optional) The page number to retrieve from the paginated list of time entries.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.RetrieveChangeRequestTimeEntry



Retrieve a time entry from a Change request by ID.

**Parameters**

-   **change\_request\_id** (`integer`, required) The ID of the Change request to retrieve the time entry from. This must be an integer.
-   **time\_entry\_id** (`integer`, required) The numeric ID of the time entry to retrieve details for from a Change request.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.DeleteChangeTimeEntryFreshservice



Delete a time entry from a Change request in Freshservice.

**Parameters**

-   **change\_request\_id** (`integer`, required) The unique identifier of the Change request from which the time entry will be deleted. This integer ID specifies the specific change.
-   **time\_entry\_id** (`integer`, required) ID of the time entry to be deleted from the Change request in Freshservice. Integer value expected.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.RetrieveAllProjects



Retrieve a list of all projects in Freshservice.

**Parameters**

-   **entries\_per\_page** (`integer`, optional) Specify the number of project entries to retrieve per page for pagination.
-   **page\_number** (`integer`, optional) Specify the page number to retrieve in a paginated list of projects.
-   **project\_status\_filter** (`string`, optional) Filter projects by status: ‘all’, ‘open’, ‘in\_progress’, or ‘completed’.
-   **filter\_archived\_projects** (`boolean`, optional) If true, filter for archived projects; if false, filter for active projects.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.RetrieveFreshserviceProject



Retrieve project details from Freshservice by ID.

**Parameters**

-   **project\_id** (`integer`, required) The unique integer ID of the project to retrieve from Freshservice.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.DeleteFreshserviceProject



Deletes a project in Freshservice by ID.

**Parameters**

-   **project\_id** (`integer`, required) The ID of the project in Freshservice to delete. This should be an integer representing the specific project you wish to remove.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.ArchiveProject



Archive an existing project in Freshservice.

**Parameters**

-   **project\_id** (`integer`, required) The unique ID of the project to be archived in Freshservice. Provide a valid integer.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.RestoreArchivedProject



Restores an archived project in Freshservice.

**Parameters**

-   **project\_id** (`integer`, required) The identifier of the archived project to be restored in Freshservice. It should be an integer value.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.ListProjectTasks



Retrieve a list of all project tasks in Freshservice.

**Parameters**

-   **project\_id** (`integer`, required) The ID of the project for which you want to retrieve tasks.
-   **entries\_per\_page** (`integer`, optional) The number of entries to retrieve in each page for pagination.
-   **page\_number** (`integer`, optional) The specific page number of the task list to retrieve.
-   **task\_filter** (`string`, optional) Filter tasks by status. Options: all, open, in\_progress, completed, overdue, unassigned.
-   **task\_parent\_id** (`integer`, optional) Filter tasks by parent ID for specific task hierarchy or relationships.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.GetProjectTaskDetails



Retrieve detailed information about a project task in Freshservice.

**Parameters**

-   **task\_id** (`integer`, required) The unique identifier for the task to retrieve details.
-   **project\_id** (`integer`, required) The unique identifier for the project to which the task belongs.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.DeleteProjectTask



Deletes a specified project task in Freshservice.

**Parameters**

-   **project\_identifier** (`integer`, required) The unique identifier for the project containing the task to be deleted. This is required to specify which project’s task needs to be removed.
-   **task\_id\_to\_delete** (`integer`, required) ID of the task to be deleted from a project in Freshservice.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.GetChangeFormFields



Retrieve all fields in the Change Object of Freshservice.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.GetReleaseFormFields



Retrieve all fields of the release object form.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.GetFreshserviceAnnouncements



Retrieve all announcements from Freshservice.

**Parameters**

-   **announcement\_state** (`string`, optional) Specify the state of the announcements to retrieve: archived, active, scheduled, or unread.
-   **announcements\_per\_page** (`integer`, optional) Specify the number of announcements to retrieve per page for pagination.
-   **retrieve\_page\_number** (`integer`, optional) Specify the page number of announcements to retrieve. Useful for navigating through paginated results.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.FetchAnnouncementDetails



Retrieve specific announcement details from Freshservice.

**Parameters**

-   **announcement\_id** (`integer`, required) The unique integer ID of the announcement to retrieve from Freshservice.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.DeleteFreshserviceAnnouncement



Delete a specific announcement from Freshservice.

**Parameters**

-   **announcement\_id\_to\_delete** (`integer`, required) The ID of the announcement to delete from Freshservice.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.RetrieveFreshserviceProblems



Retrieve all problems from Freshservice.

**Parameters**

-   **updated\_since** (`string`, optional) Retrieve problems updated since the specified date. Format: YYYY-MM-DD.
-   **problems\_per\_page** (`integer`, optional) The number of problems to retrieve per page in a paginated list from Freshservice.
-   **page\_number\_to\_retrieve** (`integer`, optional) The page number of the problems list to retrieve from Freshservice.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.RetrieveFreshserviceProblem



Retrieve a specific problem in Freshservice by ID.

**Parameters**

-   **problem\_identifier** (`integer`, required) The unique ID of the problem in Freshservice to retrieve details for.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.DeleteProblem



Delete a problem using its ID from Freshservice.

**Parameters**

-   **problem\_id** (`integer`, required) The unique ID of the problem to delete from Freshservice.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.GetProblemNotes



Retrieve notes for a specific problem ID in Freshservice.

**Parameters**

-   **problem\_id** (`integer`, required) The unique integer ID of the problem for which you want to retrieve notes from Freshservice.
-   **notes\_per\_page** (`integer`, optional) The number of notes to retrieve per page in the paginated results.
-   **page\_number** (`integer`, optional) The page number of the notes to retrieve for pagination purposes.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.RetrieveProblemNote



Retrieve a specific note from a problem in Freshservice.

**Parameters**

-   **problem\_identifier** (`integer`, required) The unique ID of the problem to retrieve the note from. Must be an integer.
-   **note\_id** (`integer`, required) The unique identifier for the note to be retrieved.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.DeleteProblemNote



Delete a note from a specific problem in Freshservice.

**Parameters**

-   **problem\_id** (`integer`, required) The unique identifier for the problem from which the note will be deleted. This should be an integer corresponding to the specific problem in Freshservice.
-   **note\_id** (`integer`, required) The unique identifier for the note to be deleted from a problem in Freshservice.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.GetProblemTasks



Retrieve tasks for a specific problem from Freshservice.

**Parameters**

-   **problem\_id** (`integer`, required) The ID of the problem for which tasks need to be retrieved from Freshservice.
-   **tasks\_per\_page** (`integer`, optional) Specify the number of tasks to retrieve per page for pagination.
-   **page\_number** (`integer`, optional) The specific page number of tasks to retrieve.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.RetrieveProblemTask



Retrieve details of a specific task from a problem in Freshservice.

**Parameters**

-   **problem\_id** (`integer`, required) The unique integer ID of the problem to retrieve the task from in Freshservice.
-   **task\_id** (`integer`, required) The unique identifier for the task to retrieve from the specified problem.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.DeleteProblemTask



Delete a task from a problem in Freshservice.

**Parameters**

-   **problem\_id** (`integer`, required) The unique ID of the problem from which the task will be deleted.
-   **task\_id** (`integer`, required) The unique identifier of the task to be deleted in Freshservice.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.GetProblemTimeEntries



Retrieve time entries for a specific problem by ID.

**Parameters**

-   **problem\_id** (`integer`, required) ID of the problem for which time entries need to be retrieved. This is an integer value.
-   **entries\_per\_page** (`integer`, optional) The number of time entries to retrieve per page in a paginated list.
-   **page\_number\_to\_retrieve** (`integer`, optional) The page number to retrieve in the paginated list of time entries.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.GetProblemTimeEntry



Retrieve time entry details for a specific problem.

**Parameters**

-   **problem\_id** (`integer`, required) The unique identifier for the problem to retrieve a time entry from in Freshservice.
-   **time\_entry\_id** (`integer`, required) The unique integer ID of the time entry to be retrieved.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.DeleteProblemTimeEntry



Delete a time entry from a specified problem in Freshservice.

**Parameters**

-   **problem\_identifier** (`integer`, required) The unique ID representing the problem from which you want to delete a time entry.
-   **time\_entry\_id** (`integer`, required) The unique identifier for the time entry to be deleted from the specified problem.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.GetUserOnboardingRequests



Retrieve onboarding requests for a user.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.RetrieveOnboardingRequest



Retrieve details of a specific onboarding request.

**Parameters**

-   **onboarding\_request\_id** (`integer`, required) The unique display ID of the onboarding request to retrieve details for.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.GetOnboardingRequestTickets



Retrieve FreshService Tickets for a specific Onboarding Request.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.GetCannedResponses



Retrieve all canned responses from Freshservice.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.GetCannedResponse



Retrieve a specific Canned Response by ID from Freshservice.

**Parameters**

-   **canned\_response\_id** (`integer`, required) The unique ID of the Canned Response you want to retrieve from Freshservice.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.DeleteCannedResponse



Delete a specific canned response from Freshservice.

**Parameters**

-   **canned\_response\_id** (`integer`, required) The unique integer ID of the canned response to delete from Freshservice.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.GetFreshserviceCannedResponseFolders



Retrieve all canned response folders from Freshservice.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.GetCannedResponseFolder



Retrieve a specific canned response folder from Freshservice.

**Parameters**

-   **canned\_response\_folder\_id** (`integer`, required) The ID of the canned response folder to retrieve from Freshservice. It should be an integer.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.DeleteCannedResponseFolder



Delete a Canned Response Folder in Freshservice.

**Parameters**

-   **canned\_response\_folder\_id** (`integer`, required) ID of the canned response folder to delete. This is required to identify which folder should be removed from Freshservice.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.ListCannedResponses



Retrieve all canned responses from a specified folder.

**Parameters**

-   **canned\_response\_folder\_id** (`integer`, required) ID of the canned response folder to retrieve responses from.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.GetReleasesList



Retrieve a list of all Releases in Freshservice.

**Parameters**

-   **fetch\_releases\_updated\_since** (`string`, optional) Retrieve releases updated since a specific date in YYYY-MM-DD format.
-   **releases\_per\_page** (`integer`, optional) The number of releases to retrieve per page in the paginated list.
-   **page\_number\_to\_retrieve** (`integer`, optional) Specify the page number of release data to retrieve for pagination.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.GetReleaseDetails



Retrieve details of a specific release by ID in Freshservice.

**Parameters**

-   **release\_identifier** (`integer`, required) The ID of the release you want to retrieve from Freshservice. Provide the specific release ID as an integer to get its details.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.DeleteFreshserviceRelease



Delete a specific release in Freshservice.

**Parameters**

-   **release\_id\_for\_deletion** (`integer`, required) The unique integer ID of the release to delete from Freshservice.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.GetReleaseNotes



Retrieve release notes from Freshservice using a release ID.

**Parameters**

-   **release\_id** (`integer`, required) The ID of the release for which notes are to be retrieved.
-   **notes\_per\_page** (`integer`, optional) The number of release notes to retrieve in each page.
-   **retrieve\_page\_number** (`integer`, optional) The specific page number of release notes to retrieve. Useful for paginated results.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.FetchReleaseNote



Retrieve a note on a release by ID from Freshservice.

**Parameters**

-   **release\_id** (`integer`, required) The unique integer ID representing the release in Freshservice to retrieve the note from.
-   **note\_id** (`integer`, required) The unique identifier for the note to be retrieved. It must be an integer.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.DeleteReleaseNoteFreshservice



Deletes a note from a specified release in Freshservice.

**Parameters**

-   **release\_id** (`integer`, required) The numeric ID of the release from which the note will be deleted. This ID is required to identify the specific release in Freshservice.
-   **note\_id** (`integer`, required) The integer ID of the note to be deleted from the release in Freshservice.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.RetrieveReleaseTasks



Retrieve tasks for a specified release in Freshservice.

**Parameters**

-   **release\_id** (`integer`, required) ID of the release for which tasks are to be retrieved in Freshservice.
-   **tasks\_per\_page** (`integer`, optional) Number of tasks to retrieve per page in a paginated list.
-   **page\_number** (`integer`, optional) The page number to retrieve tasks from. Use for paginated results.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.RetrieveReleaseTask



Retrieve a specific task from a release in Freshservice.

**Parameters**

-   **release\_id** (`integer`, required) The unique identifier for the release to retrieve a specific task from. This is an integer value.
-   **task\_id** (`integer`, required) The unique ID of the task you want to retrieve within a release.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.DeleteReleaseTask



Delete a task from a specified release in Freshservice.

**Parameters**

-   **release\_id** (`integer`, required) ID of the release from which the task will be deleted. This must be a valid integer.
-   **task\_id\_integer** (`integer`, required) The integer ID of the task to be deleted from the release.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.GetReleaseTimeEntries



Retrieve time entries for a specific release in Freshservice.

**Parameters**

-   **release\_id** (`integer`, required) The unique ID of the release for which time entries are to be retrieved in Freshservice.
-   **entries\_per\_page** (`integer`, optional) The number of time entries to retrieve per page in the paginated list.
-   **page\_number\_to\_retrieve** (`integer`, optional) The page number to retrieve in the paginated list of time entries.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.FetchReleaseTimeEntry



Retrieve details of a release time entry by ID.

**Parameters**

-   **release\_id** (`integer`, required) The unique integer ID of the release for which you want to fetch the time entry details. This identifies the specific release in Freshservice.
-   **time\_entry\_id** (`integer`, required) The integer ID of the specific time entry you want to retrieve from a release.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.DeleteReleaseTimeEntry



Delete a time entry from a release in Freshservice.

**Parameters**

-   **release\_id** (`integer`, required) The unique integer ID of the release from which to delete the time entry.
-   **time\_entry\_id** (`integer`, required) ID of the time entry to be deleted from the release in Freshservice.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.ListPurchaseOrders



Retrieve a list of all Purchase Orders from Freshservice.

**Parameters**

-   **entries\_per\_page** (`integer`, optional) Specify the number of entries to retrieve per page.
-   **page\_number** (`integer`, optional) Specify the page number to retrieve from the list of purchase orders. Useful for navigating paginated results.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.GetPurchaseOrder



Retrieve details of an existing purchase order by ID.

**Parameters**

-   **purchase\_order\_id** (`integer`, required) The unique identifier for the purchase order you wish to retrieve. This must be an integer.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## FreshserviceApi.DeletePurchaseOrder



Delete a specified purchase order in Freshservice.

**Parameters**

-   **purchase\_order\_id** (`integer`, required) The unique ID of the purchase order to delete from Freshservice. This ID identifies the specific order to be removed.

**Secrets**

This tool requires the following secrets: `FRESHSERVICE_API_KEY`, `FRESHSERVICE_SUBDOMAIN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_freshservice_api ``` Learn more](/guides/deployment-hosting.md)

Last updated on February 6, 2026

[CustomerioTrackApi](/en/resources/integrations/customer-support/customerio-track-api.md)
[IntercomApi](/en/resources/integrations/customer-support/intercom-api.md)
