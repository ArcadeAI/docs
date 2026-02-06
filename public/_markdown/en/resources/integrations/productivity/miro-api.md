---
title: "MiroApi"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Productivity & Docs](/en/resources/integrations/productivity/asana.md)
MiroApi

# MiroApi

Arcade Unoptimized

**Description:** Tools that enable LLMs to interact directly with the miro API.

**Author:** Arcade

**Auth:** User authorization

[![PyPI Version](https://img.shields.io/pypi/v/arcade_miro_api)](https://pypi.org/project/arcade_miro_api/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_miro_api)](https://pypi.org/project/arcade_miro_api/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_miro_api)](https://pypi.org/project/arcade_miro_api/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_miro_api)](https://pypi.org/project/arcade_miro_api/)

MiroApi is a [Unoptimized MCP Server](/guides/create-tools/improve/types-of-tools.md#unoptimized-tools)
: each tool mirrors one HTTP endpoint and offers LLMs a way to interact with the low-level API.



Differently from [Optimized MCP Servers](/guides/create-tools/improve/types-of-tools.md#optimized-tools)
, Unoptimized tools are heavily influenced by the original API design, which is not usually optimized for LLM usage. For this reason, we recommend thoroughly evaluating the tools with your Agents or chatbots before using it in production. [Read more](/guides/create-tools/improve/types-of-tools.md) about Optimized vs Unoptimized tools.

The MiroApi MCP Server offers a comprehensive suite of tools for managing and interacting with Miro boards and organizational settings. Users can perform a variety of actions, including:

## Available Tools

Tool Name

Description

MiroApi.GetAccessTokenInfo

Retrieve detailed information about an access token.

MiroApi.GetRecentAuditLogs

Retrieve recent audit logs from the last 90 days.

MiroApi.GetBoardClassificationSettings

Retrieve board classification settings for an organization.

MiroApi.UpdateBoardClassification

Update board classification for team boards in Miro.

MiroApi.GetTeamBoardClassificationSettings

Retrieve board classification settings for an enterprise team.

MiroApi.UpdateTeamBoardClassificationSettings

Updates board classification settings for a team's existing board.

MiroApi.RetrieveBoardClassification

Get the data classification of a Miro board.

MiroApi.SetBoardClassification

Update the data classification for a Miro board.

MiroApi.RetrieveEdiscoveryCases

Retrieve eDiscovery cases for your organization.

MiroApi.RetrieveCaseInfo

Retrieve detailed information about an organization's case.

MiroApi.RetrieveLegalHolds

Retrieve all legal holds for an organization's case.

MiroApi.RetrieveLegalHoldInfo

Retrieve legal hold information for a specific case.

MiroApi.ReviewLegalHoldBoards

Review Miro boards under legal hold for legal proceedings.

MiroApi.CreateBoardExportJob

Initiates an export job for specified boards in an organization.

MiroApi.GetExportJobStatus

Retrieve the status of a Miro board export job.

MiroApi.RetrieveMiroExportResults

Retrieve results of a Miro board export job.

MiroApi.FetchBoardContentChanges

Fetches content changes for board items in your organization.

MiroApi.ResetUserSessions

Reset all active Miro sessions for a specific user.

MiroApi.GetOrganizationInfo

Retrieve detailed information about a specific organization.

MiroApi.GetOrganizationMembers

Retrieve organization members using organization ID or emails.

MiroApi.GetOrganizationMemberInfo

Retrieve details about a specific organization member.

MiroApi.CreateMiroBoard

Create a new board on Miro with specific settings.

MiroApi.RetrieveUserBoards

Retrieve a list of boards accessible to the user.

MiroApi.CopyMiroBoard

Create a copy of an existing Miro board.

MiroApi.RetrieveBoardInfo

Retrieve details of a specific Miro board.

MiroApi.UpdateMiroBoard

Update details of a specific Miro board.

MiroApi.DeleteMiroBoard

Delete a Miro board and move it to Trash.

MiroApi.AddAppCardToBoard

Add an app card item to a specified board on Miro.

MiroApi.RetrieveAppCardInfo

Retrieve information for a specific Miro app card item.

MiroApi.UpdateMiroAppCard

Update an app card item on a Miro board.

MiroApi.DeleteAppCardFromBoard

Delete an app card item from a Miro board.

MiroApi.AddCardToMiroBoard

Add a card item to a Miro board.

MiroApi.GetCardItemInfo

Retrieve details about a specific card item from a Miro board.

MiroApi.UpdateCardOnBoard

Update a card item on a Miro board.

MiroApi.DeleteCardItem

Deletes a card item from the Miro board.

MiroApi.AddConnectorToBoard

Adds a connector to a specified Miro board.

MiroApi.GetBoardConnectors

Retrieve connectors for a specified board on Miro.

MiroApi.RetrieveBoardConnectorInfo

Retrieve information for a specific board connector.

MiroApi.UpdateConnectorOnBoard

Update a connector on a Miro board.

MiroApi.DeleteBoardConnector

Delete a specific connector from a board.

MiroApi.AddDocumentToBoardByUrl

Add a document to a Miro board using its URL.

MiroApi.RetrieveDocumentItemInfo

Retrieve information for a specific document item on a board.

MiroApi.UpdateDocumentItemOnBoard

Update a document item on a Miro board using its URL.

MiroApi.DeleteDocumentItemFromBoard

Deletes a document item from a Miro board.

MiroApi.AddEmbedItemToBoard

Add an embed item with external content to a Miro board.

MiroApi.GetEmbedItemInfo

Retrieve details of an embed item on a Miro board.

MiroApi.UpdateEmbedItemOnBoard

Update an embed item on a Miro board.

MiroApi.RemoveEmbedItemFromBoard

Remove an embed item from a Miro board.

MiroApi.AddImageToMiroBoard

Add an image to a Miro board using a URL.

MiroApi.GetImageItemInfo

Fetches details for a specified image item on a Miro board.

MiroApi.UpdateBoardImage

Update an image item on a Miro board using a URL.

MiroApi.DeleteBoardImage

Deletes an image item from a Miro board.

MiroApi.RetrieveBoardItems

Retrieve items from a specific Miro board.

MiroApi.GetBoardItemInfo

Retrieve information for a specific item on a Miro board.

MiroApi.UpdateItemPositionParent

Update an item's position or parent on a Miro board.

MiroApi.DeleteBoardItem

Deletes an item from a Miro board.

MiroApi.ShareMiroBoard

Invite new members to collaborate on a Miro board.

MiroApi.GetMiroBoardMembers

Retrieve members of a Miro board.

MiroApi.GetBoardMemberInfo

Retrieve details about a specific board member.

MiroApi.UpdateBoardMemberRole

Update the role of a Miro board member.

MiroApi.RemoveBoardMember

Remove a member from a Miro board.

MiroApi.AddShapeToMiroBoard

Add a shape to a Miro board.

MiroApi.GetShapeInformation

Retrieve detailed information about a specific shape on a Miro board.

MiroApi.UpdateBoardShape

Update a shape item on a Miro board.

MiroApi.DeleteShapeFromMiroBoard

Delete a shape item from a Miro board.

MiroApi.AddStickyNoteToBoard

Add a sticky note to a Miro board.

MiroApi.GetStickyNoteInfo

Retrieve details of a sticky note from a Miro board.

MiroApi.UpdateStickyNote

Update a sticky note on a Miro board.

MiroApi.DeleteStickyNote

Deletes a sticky note from a Miro board.

MiroApi.AddTextToMiroBoard

Add a text item to a specified Miro board.

MiroApi.GetTextItemInfo

Retrieve details of a text item from a Miro board.

MiroApi.UpdateBoardText

Update a text item on a Miro board.

MiroApi.RemoveBoardTextItem

Delete a text item from a Miro board.

MiroApi.AddItemsToMiroBoard

Add up to 20 items to a Miro board in one transaction.

MiroApi.AddBoardFrame

Add a frame to a Miro board.

MiroApi.GetBoardFrameInfo

Retrieve information about a specific frame on a board.

MiroApi.UpdateMiroBoardFrame

Update a frame on a Miro board with new properties.

MiroApi.DeleteBoardFrame

Delete a frame from a Miro board.

MiroApi.GetItemsWithinFrame

Retrieve items within a specified frame on a Miro board.

MiroApi.GetAppUsageMetrics

Retrieve usage metrics for a specific app over a time range.

MiroApi.RetrieveAppMetrics

Retrieve total usage metrics for a specific app.

MiroApi.CreateBoardSubscription

Subscribe to board update notifications via webhook.

MiroApi.UpdateBoardWebhookSubscription

Update the status or URL of a board's webhook subscription.

MiroApi.GetUserWebhookSubscriptions

Retrieve all webhook subscriptions for a Miro user.

MiroApi.GetMiroSubscriptionInfo

Fetch detailed information for a specific Miro subscription.

MiroApi.DeleteMiroWebhookSubscription

Delete a Miro webhook subscription by ID.

MiroApi.GetMiroMindmapNode

Retrieve details about a specific mind map node on a Miro board.

MiroApi.DeleteMindmapNode

Delete a mind map node and its child nodes from the board.

MiroApi.GetMindmapNodes

Retrieve mind map nodes from a specified Miro board.

MiroApi.AddMindmapNode

Add a new mind map node to a Miro board.

MiroApi.GetBoardItems

Retrieve items from a specific Miro board.

MiroApi.RetrieveBoardItemInfo

Retrieve details for a specific board item on Miro.

MiroApi.RemoveBoardItem

Delete an item from a Miro board.

MiroApi.AddFlowchartShapeToBoard

Add a flowchart shape item to a Miro board.

MiroApi.RetrieveShapeInformation

Retrieve information for a specific shape item on a board.

MiroApi.UpdateFlowchartShape

Update a shape item in a Miro flowchart board.

MiroApi.DeleteFlowchartShape

Delete a flowchart shape from a Miro board.

MiroApi.CreateGroupOnBoard

Creates a group of items on a Miro board.

MiroApi.GetBoardGroups

Retrieve all groups and their items from a specific board.

MiroApi.GetItemsByGroupId

Retrieve items from a specific group on a Miro board.

MiroApi.GetGroupItemsMiro

Retrieve items from a specific group on a Miro board.

MiroApi.UngroupItemsOnMiroBoard

Ungroup items from a group on Miro board.

MiroApi.UpdateBoardGroup

Replace and update an existing group in a board.

MiroApi.DeleteBoardGroup

Delete a group and its items from a Miro board.

MiroApi.RevokeMiroAccessToken

Revoke the current Miro access token.

MiroApi.GetTagsFromItem

Retrieve all tags from a specified item on a board.

MiroApi.CreateBoardTag

Create a tag on a Miro board.

MiroApi.GetBoardTags

Retrieve all tags from a specified Miro board.

MiroApi.GetTagInfo

Retrieve detailed information for a specific tag on a Miro board.

MiroApi.UpdateMiroTag

Update a tag on a Miro board.

MiroApi.DeleteBoardTag

Delete a tag from a Miro board and its items.

MiroApi.RetrieveItemsByTag

Retrieve items from a board by specifying a tag.

MiroApi.AttachTagToItem

Attach a tag to a specific item on a Miro board.

MiroApi.RemoveTagFromItem

Remove a specified tag from an item on a Miro board.

MiroApi.CreateEnterpriseProject

Create a new project within an enterprise team on Miro.

MiroApi.GetTeamProjects

Fetches projects from a specified team within an organization.

MiroApi.GetMiroProjectInfo

Retrieve information for a specific Miro project.

MiroApi.UpdateProjectInfo

Update project details for an enterprise account.

MiroApi.DeleteEnterpriseProject

Delete a project while retaining associated boards and users.

MiroApi.GetProjectSettings

Retrieve enterprise project settings for a specific project.

MiroApi.UpdateProjectSettings

Update settings for an enterprise-level project.

MiroApi.AddMiroProjectMember

Add a user to an Enterprise Miro project.

MiroApi.GetProjectMembers

Retrieve members of a specific project.

MiroApi.GetProjectMemberInfo

Retrieve information about a specific project member.

MiroApi.UpdateProjectMemberRole

Update the role and details of a project member.

MiroApi.RemoveProjectMember

Remove a member from a Miro project.

MiroApi.CreateEnterpriseTeam

Creates a new team in an existing Miro organization.

MiroApi.GetEnterpriseTeams

Retrieve list of teams in an enterprise organization.

MiroApi.GetTeamInfo

Retrieve information about an existing team within an organization.

MiroApi.UpdateEnterpriseTeam

Update details of an existing enterprise team.

MiroApi.DeleteEnterpriseTeam

Deletes an existing team for enterprise users.

MiroApi.InviteMiroTeamMember

Invite a new user to a Miro team within your organization.

MiroApi.GetEnterpriseTeamMembers

Retrieve team members for an enterprise organization team.

MiroApi.RetrieveTeamMemberById

Retrieve team member details by ID for enterprise users.

MiroApi.UpdateTeamMemberRole

Update a team member's role in an enterprise team.

MiroApi.RemoveTeamMember

Remove a team member from a team by ID within an enterprise.

MiroApi.GetDefaultTeamSettings

Retrieve default team settings for an organization.

MiroApi.GetTeamSettings

Fetches settings for a specific team in an organization.

MiroApi.UpdateTeamSettings

Update settings for an existing team in Miro Enterprise.

If you need to perform an action that’s not listed here, you can [get in touch with us](mailto:contact@arcade.dev) to request a new tool, or [create your own tools](/guides/create-tools/tool-basics/build-mcp-server.md).

## MiroApi.GetAccessTokenInfo



Retrieve detailed information about an access token.

**Parameters**

This tool does not take any parameters.

## MiroApi.GetRecentAuditLogs



Retrieve recent audit logs from the last 90 days.

**Parameters**

-   **end\_date\_for\_audit\_logs** (`string`, required) Retrieve audit logs created before this date and time. Format: UTC ISO 8601, including milliseconds and trailing Z.
-   **start\_date\_time\_for\_audit\_logs** (`string`, required) Retrieve audit logs created after the specified UTC start date and time in ISO 8601 format, including milliseconds and ‘Z’.
-   **maximum\_results\_limit** (`integer`, optional) Specify the maximum number of audit logs to retrieve in a single request. Defaults to 100 if not specified. Use a smaller number to limit the results or manage pagination efficiently.
-   **pagination\_cursor** (`string`, optional) Cursor value for paginating through audit log results. Use the value returned in the previous response to obtain the next set of results.
-   **sort\_order** (`string`, optional) Specifies the sort order for viewing audit logs: ‘ASC’ for ascending or ‘DESC’ for descending.

## MiroApi.GetBoardClassificationSettings



Retrieve board classification settings for an organization.

**Parameters**

-   **organization\_id** (`string`, required) The unique string ID of the organization for which to retrieve board classification settings.

## MiroApi.UpdateBoardClassification



Update board classification for team boards in Miro.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization. Required for specifying which organization’s team boards will be classified.
-   **team\_identifier** (`string`, required) The unique identifier for the team whose board classification is being updated. This is used to specify which team’s boards will be affected by the API call.
-   **assign\_to\_not\_classified\_only** (`boolean`, optional) If true, assign data classification only to non-classified boards; otherwise, assign to all boards.
-   **data\_classification\_label\_id** (`integer`, optional) The ID of the data classification label to assign to a team’s boards.

## MiroApi.GetTeamBoardClassificationSettings



Retrieve board classification settings for an enterprise team.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization. Required for retrieving team settings.
-   **team\_identifier** (`string`, required) ID of the team whose board classification settings you want to retrieve. Must be a string.

## MiroApi.UpdateTeamBoardClassificationSettings



Updates board classification settings for a team’s existing board.

**Parameters**

-   **organization\_id** (`string`, required) ID of the organization whose team’s board classification settings will be updated.
-   **team\_identifier** (`string`, required) The unique identifier for the team to update board classification settings for.
-   **data\_classification\_default\_label\_id** (`integer`, optional) The ID of the default data classification label to set for the team. This should be an integer.
-   **enable\_data\_classification** (`boolean`, optional) Enable data classification for the team. Set to `true` to enable, `false` to disable.

## MiroApi.RetrieveBoardClassification



Get the data classification of a Miro board.

**Parameters**

-   **board\_identifier** (`string`, required) Unique identifier for the Miro board to retrieve classification.
-   **organization\_id** (`string`, required) The unique identifier of the organization for which you want to retrieve the board classification.
-   **team\_id** (`string`, required) The unique identifier of the team to fetch the board classification from.

## MiroApi.SetBoardClassification



Update the data classification for a Miro board.

**Parameters**

-   **board\_identifier** (`string`, required) The unique identifier of the board to update its classification.
-   **organization\_id** (`string`, required) The ID of the organization to update the board classification for. Required for enterprise users with Company Admin rights.
-   **team\_id** (`string`, required) The unique identifier of the team associated with the board to be updated. Required for classification updates.
-   **data\_classification\_label\_id** (`string`, optional) The ID of the data classification label to apply to the board.

## MiroApi.RetrieveEdiscoveryCases



Retrieve eDiscovery cases for your organization.

**Parameters**

-   **organization\_id** (`string`, required) The ID of the organization to retrieve the eDiscovery cases for.
-   **maximum\_items** (`integer`, optional) Specifies the maximum number of eDiscovery cases to retrieve in the result list.
-   **pagination\_cursor** (`string`, optional) Indicator for result position in pagination. Leave empty for first page; use previous request’s cursor for subsequent pages.

## MiroApi.RetrieveCaseInfo



Retrieve detailed information about an organization’s case.

**Parameters**

-   **case\_id** (`string`, required) The unique ID of the case to retrieve information for.
-   **organization\_id** (`string`, required) The unique ID of the organization whose case information you want to retrieve.

## MiroApi.RetrieveLegalHolds



Retrieve all legal holds for an organization’s case.

**Parameters**

-   **case\_id** (`string`, required) The ID of the case for which you want to retrieve the list of legal holds. Ensure it is a valid string identifying the case.
-   **organization\_id** (`string`, required) The ID of the organization to retrieve the list of legal holds for a specific case. Required for identifying the organization.
-   **maximum\_items\_in\_result** (`integer`, optional) Specify the maximum number of items to return in the result list.
-   **pagination\_cursor** (`string`, optional) An indicator of the result page position. Leave empty for the first page, or use the previous request’s cursor value for subsequent pages.

## MiroApi.RetrieveLegalHoldInfo



Retrieve legal hold information for a specific case.

**Parameters**

-   **case\_identifier** (`string`, required) The unique ID of the case for which you want to retrieve the legal hold information.
-   **legal\_hold\_identifier** (`string`, required) The unique identifier for the legal hold you want to retrieve information about.
-   **organization\_id** (`string`, required) The unique ID of the organization to retrieve the legal hold information.

## MiroApi.ReviewLegalHoldBoards



Review Miro boards under legal hold for legal proceedings.

**Parameters**

-   **case\_id** (`string`, required) The unique identifier for the case associated with the legal hold items you wish to retrieve.
-   **legal\_hold\_identifier** (`string`, required) The unique identifier for the legal hold to retrieve content items under hold.
-   **organization\_id** (`string`, required) The ID of the organization to retrieve the list of content items under hold.
-   **maximum\_items\_in\_result** (`integer`, optional) The maximum number of items to include in the result list. Use to limit response size.
-   **page\_cursor** (`string`, optional) An indicator for pagination. Leave empty for the first page or use a value from the previous request’s cursor field for next pages.

## MiroApi.CreateBoardExportJob



Initiates an export job for specified boards in an organization.

**Parameters**

-   **board\_export\_request\_id** (`string`, required) A unique identifier for the export job, used to track the export process of boards in Miro.
-   **organization\_id** (`string`, required) Unique identifier of the organization for exporting boards.
-   **export\_board\_ids** (`array[string]`, optional) A list of board IDs to be exported. Provide the IDs as an array of strings.
-   **export\_format** (`string`, optional) Specifies the format for exporting the board. Options: SVG (default), HTML, or PDF.

## MiroApi.GetExportJobStatus



Retrieve the status of a Miro board export job.

**Parameters**

-   **board\_export\_job\_id** (`string`, required) Unique identifier for the Miro board export job.
-   **organization\_id** (`string`, required) Unique identifier for the Miro organization. Required for retrieving the export job status.

## MiroApi.RetrieveMiroExportResults



Retrieve results of a Miro board export job.

**Parameters**

-   **job\_identifier** (`string`, required) Unique identifier for the Miro board export job, required to retrieve export results.
-   **organization\_unique\_identifier** (`string`, required) The unique identifier for the organization. Required to retrieve export job results.

## MiroApi.FetchBoardContentChanges



Fetches content changes for board items in your organization.

**Parameters**

-   **end\_modification\_datetime** (`string`, required) Specify the end date and time for filtering content logs based on when a board item was last modified. Use UTC format adhering to ISO 8601 with a trailing Z offset.
-   **organization\_id** (`string`, required) A string representing the unique identifier of the organization required for fetching board content changes.
-   **start\_date\_time** (`string`, required) Specify the start date and time for filtering content logs, in UTC format (ISO 8601 with trailing Z).
-   **board\_ids** (`array[string]`, optional) List of board IDs for retrieving content logs. Provide as an array of strings.
-   **max\_results\_per\_call** (`integer`, optional) The maximum number of results to return per call. If exceeded, a cursor is provided for pagination.
-   **pagination\_cursor** (`string`, optional) Cursor for pagination to fetch the next set of results. Use the cursor value from the previous response to continue retrieving paginated results.
-   **sort\_order\_by\_date** (`string`, optional) Specify ‘asc’ for ascending or ‘desc’ for descending sort order based on modified date.
-   **user\_email\_filter** (`array[string]`, optional) Filter content logs based on the list of emails of users who created, modified, or deleted board items.

## MiroApi.ResetUserSessions



Reset all active Miro sessions for a specific user.

**Parameters**

-   **user\_email\_for\_session\_reset** (`string`, required) Email ID of the user whose sessions need resetting. This will sign the user out from all devices.

## MiroApi.GetOrganizationInfo



Retrieve detailed information about a specific organization.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization to retrieve information for. This is required to access the organization’s details.

## MiroApi.GetOrganizationMembers



Retrieve organization members using organization ID or emails.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization to retrieve members from. Required for the operation.
-   **include\_only\_active\_members** (`boolean`, optional) Set to true to include only active members in the response. Set to false to include all members, regardless of their status.
-   **license\_type** (`string`, optional) Defines the type of license for the organization members to filter (e.g., full, occasional, free).
-   **member\_role\_filter** (`string`, optional) Filter organization members by role, such as ‘organization\_internal\_admin’ or ‘organization\_external\_user’.
-   **pagination\_cursor** (`string`, optional) String value for pagination to retrieve the next set of results in a multi-page response.
-   **result\_limit** (`integer`, optional) Specifies the maximum number of organization members to retrieve.
-   **user\_emails** (`string`, optional) A comma-separated string of user emails to filter organization members.

## MiroApi.GetOrganizationMemberInfo



Retrieve details about a specific organization member.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization whose member info is being retrieved.
-   **organization\_member\_id** (`string`, required) ID of the organization member to retrieve information for.

## MiroApi.CreateMiroBoard



Create a new board on Miro with specific settings.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## MiroApi.RetrieveUserBoards



Retrieve a list of boards accessible to the user.

**Parameters**

-   **board\_owner\_id** (`string`, optional) Filter boards by the owner’s user ID to view boards created by a specific user.
-   **maximum\_number\_of\_boards** (`string`, optional) Specifies the maximum number of boards to retrieve. Use a positive integer to limit results.
-   **project\_id\_filter** (`string`, optional) Specify the project ID to filter boards accessible to the user. This retrieves boards linked to the given project instantly.
-   **results\_offset** (`string`, optional) The number of items to skip before starting to collect the result set. This is used for pagination.
-   **search\_query** (`string`, optional) A string to search and filter boards by name or content. Useful for narrowing down results.
-   **sort\_boards\_by** (`string`, optional) Specify how to sort the list of boards. Options include ‘default’, ‘last\_modified’, ‘last\_opened’, ‘last\_created’, and ‘alphabetically’.
-   **team\_identifier** (`string`, optional) The unique identifier for the team to filter boards. This allows retrieval of boards associated with the specified team.

## MiroApi.CopyMiroBoard



Create a copy of an existing Miro board.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **source\_board\_id** (`string`, optional) Unique identifier (ID) of the board that you want to copy. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## MiroApi.RetrieveBoardInfo



Retrieve details of a specific Miro board.

**Parameters**

-   **board\_unique\_identifier** (`string`, required) Unique identifier (ID) of the board to retrieve information from Miro.

## MiroApi.UpdateMiroBoard



Update details of a specific Miro board.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **board\_identifier** (`string`, optional) Unique identifier of the Miro board to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## MiroApi.DeleteMiroBoard



Delete a Miro board and move it to Trash.

**Parameters**

-   **board\_identifier** (`string`, required) Unique identifier of the Miro board to be deleted. Must be a valid string ID.

## MiroApi.AddAppCardToBoard



Add an app card item to a specified board on Miro.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **board\_identifier** (`string`, optional) Unique identifier (ID) of the Miro board where the app card will be added. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## MiroApi.RetrieveAppCardInfo



Retrieve information for a specific Miro app card item.

**Parameters**

-   **board\_identifier** (`string`, required) The unique ID for the board containing the app card item to retrieve.
-   **item\_identifier** (`string`, required) Unique identifier of the app card item to retrieve from the board.

## MiroApi.UpdateMiroAppCard



Update an app card item on a Miro board.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **board\_identifier** (`string`, optional) Unique identifier of the board where the app card will be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **item\_identifier\_for\_update** (`string`, optional) Unique identifier (ID) of the app card item to update on the Miro board. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## MiroApi.DeleteAppCardFromBoard



Delete an app card item from a Miro board.

**Parameters**

-   **board\_id** (`string`, required) Unique identifier (ID) of the board from which to delete an app card item.
-   **item\_id** (`string`, required) Unique identifier (ID) of the item to delete from the board.

## MiroApi.AddCardToMiroBoard



Add a card item to a Miro board.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **miro\_board\_id** (`string`, optional) Unique identifier (ID) of the Miro board where you want to add the card item. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## MiroApi.GetCardItemInfo



Retrieve details about a specific card item from a Miro board.

**Parameters**

-   **board\_identifier** (`string`, required) Unique identifier of the board to retrieve the specific card item from.
-   **item\_unique\_id** (`string`, required) Unique identifier of the item to retrieve from the board.

## MiroApi.UpdateCardOnBoard



Update a card item on a Miro board.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **board\_identifier** (`string`, optional) Unique identifier (ID) of the board on which the card item will be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **card\_item\_id** (`string`, optional) Unique identifier (ID) of the card item to update on the board. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## MiroApi.DeleteCardItem



Deletes a card item from the Miro board.

**Parameters**

-   **board\_identifier** (`string`, required) Unique identifier of the board from which the card item should be deleted.
-   **item\_id** (`string`, required) The unique identifier of the card item to be deleted from the board.

## MiroApi.AddConnectorToBoard



Adds a connector to a specified Miro board.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **board\_unique\_id** (`string`, optional) Unique identifier for the Miro board where the connector will be added. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## MiroApi.GetBoardConnectors



Retrieve connectors for a specified board on Miro.

**Parameters**

-   **board\_identifier** (`string`, required) Unique identifier for the Miro board to retrieve connectors from. Required for identifying the specific board.
-   **pagination\_cursor** (`string`, optional) Cursor pointing to the next set of results for paginated requests. Use this to retrieve subsequent pages.
-   **result\_limit** (`string`, optional) Specifies the maximum number of connectors to retrieve in one call. This assists in pagination of connector data.

## MiroApi.RetrieveBoardConnectorInfo



Retrieve information for a specific board connector.

**Parameters**

-   **board\_unique\_identifier** (`string`, required) Unique identifier for the Miro board from which to retrieve the connector.
-   **connector\_unique\_id** (`string`, required) Unique identifier (ID) of the connector to retrieve from a Miro board.

## MiroApi.UpdateConnectorOnBoard



Update a connector on a Miro board.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **board\_identifier** (`string`, optional) The unique string identifier of the Miro board to update the connector on. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **connector\_identifier** (`string`, optional) Unique ID of the connector to update on the board. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## MiroApi.DeleteBoardConnector



Delete a specific connector from a board.

**Parameters**

-   **board\_unique\_identifier** (`string`, required) Unique identifier (ID) of the board from which you want to delete the connector.
-   **connector\_id** (`string`, required) Unique identifier of the connector to delete from the board.

## MiroApi.AddDocumentToBoardByUrl



Add a document to a Miro board using its URL.

**Parameters**

-   **board\_identifier** (`string`, required) Unique identifier (ID) of the Miro board where the document will be added.
-   **document\_title** (`string`, optional) A short text header to identify the document added to the board.
-   **document\_url** (`string`, optional) The URL where the document is hosted. This URL is required to add the document to the Miro board.
-   **item\_height\_in\_pixels** (`number`, optional) Specifies the height of the item on the board in pixels.
-   **item\_width\_in\_pixels** (`number`, optional) Specify the width of the document item on the board in pixels.
-   **parent\_frame\_id** (`string`, optional) Unique identifier of the parent frame for the document item on the board.
-   **position\_x\_coordinate** (`number`, optional) X-axis coordinate for placing the item on the board. Defaults to `0`. Center of board is `0`.
-   **rotation\_angle\_degrees** (`number`, optional) Specify the rotation angle of the document item in degrees. Use positive values for clockwise rotation and negative for counterclockwise.
-   **y\_axis\_coordinate\_on\_board** (`number`, optional) Y-axis coordinate for placing the document on the Miro board. Defaults to `0`, where `0` is the center of the board.

## MiroApi.RetrieveDocumentItemInfo



Retrieve information for a specific document item on a board.

**Parameters**

-   **board\_identifier** (`string`, required) Unique identifier of the board to retrieve a specific document item from.
-   **document\_item\_id** (`string`, required) Unique identifier (ID) of the document item to retrieve from the board.

## MiroApi.UpdateDocumentItemOnBoard



Update a document item on a Miro board using its URL.

**Parameters**

-   **board\_id** (`string`, required) Unique identifier of the Miro board where the document item will be updated.
-   **item\_identifier\_to\_update** (`string`, required) Unique identifier of the item to update on the board.
-   **document\_hosting\_url** (`string`, optional) URL where the document is hosted for updating on the Miro board.
-   **document\_title** (`string`, optional) A short text header to identify the document on the board.
-   **item\_height\_pixels** (`number`, optional) Height of the document item in pixels.
-   **item\_width\_pixels** (`number`, optional) Specify the width of the item in pixels on the board.
-   **parent\_frame\_id** (`string`, optional) Unique identifier (ID) of the parent frame for the item on the board.
-   **rotation\_angle\_degrees** (`number`, optional) Rotation angle of an item, in degrees, relative to the board. Positive values rotate clockwise, negative values rotate counterclockwise.
-   **x\_axis\_coordinate\_on\_board** (`number`, optional) X-axis coordinate for the item’s placement on the board, with default positioning at 0. Center of the board is x: 0.
-   **y\_axis\_coordinate** (`number`, optional) Y-axis coordinate for placing the item on the board. Default is 0, with absolute positioning relative to the board center.

## MiroApi.DeleteDocumentItemFromBoard



Deletes a document item from a Miro board.

**Parameters**

-   **board\_id** (`string`, required) The unique ID of the Miro board to delete the document item from.
-   **item\_id** (`string`, required) Unique identifier of the item to delete from the board.

## MiroApi.AddEmbedItemToBoard



Add an embed item with external content to a Miro board.

**Parameters**

-   **board\_identifier** (`string`, required) Unique identifier of the board where you want to create the embed item.
-   **content\_display\_mode** (`string`, optional) Specify how the embedded content is displayed on the board. Options are ‘inline’ for direct display and ‘modal’ for modal overlay.
-   **content\_url** (`string`, optional) A valid URL pointing to the content resource to embed in the board. Supports HTTP and HTTPS.
-   **embed\_item\_width\_pixels** (`number`, optional) Width of the embed item in pixels. Defines the size of the item on the board.
-   **item\_height** (`number`, optional) Specify the height of the embedded item, in pixels.
-   **parent\_frame\_id** (`string`, optional) Unique identifier (ID) of the parent frame for the item on the Miro board.
-   **preview\_image\_url** (`string`, optional) URL of the image used as the preview for the embedded item.
-   **x\_coordinate\_on\_board** (`number`, optional) X-axis coordinate for the item’s location on the board. Default is 0, with absolute positioning relative to the board center.
-   **y\_axis\_coordinate\_on\_board** (`number`, optional) Y-axis coordinate for placing the item on the board. Default is 0, with (0, 0) as the board’s center.

## MiroApi.GetEmbedItemInfo



Retrieve details of an embed item on a Miro board.

**Parameters**

-   **board\_identifier** (`string`, required) Unique identifier (ID) of the Miro board from which to retrieve the embed item.
-   **embed\_item\_id** (`string`, required) Unique identifier of the embed item to retrieve from the board.

## MiroApi.UpdateEmbedItemOnBoard



Update an embed item on a Miro board.

**Parameters**

-   **board\_id** (`string`, required) Unique identifier (ID) of the board where you want to update the item.
-   **embed\_item\_id** (`string`, required) Unique identifier (ID) of the embed item to update on the board.
-   **content\_resource\_url** (`string`, optional) A valid URL pointing to the content resource to embed in the board. Supports HTTP and HTTPS protocols.
-   **embed\_display\_mode** (`string`, optional) Defines how the content in the embed item is displayed on the board. Use ‘inline’ for direct display and ‘modal’ for a modal overlay view.
-   **item\_height\_in\_pixels** (`number`, optional) Specify the height of the embed item in pixels.
-   **item\_width\_pixels** (`number`, optional) Specifies the width of the item on the board in pixels.
-   **parent\_frame\_id** (`string`, optional) Unique identifier (ID) of the parent frame for the item being updated on the board.
-   **preview\_image\_url** (`string`, optional) URL of the image used as the preview for the embedded item.
-   **x\_axis\_coordinate\_on\_board** (`number`, optional) X-axis coordinate for the location of the item on the board. Defaults to `0`, representing the center of the board.
-   **y\_axis\_coordinate** (`number`, optional) Y-axis coordinate of the item’s location on the board. Defaults to `0`. Center of board is `y: 0`.

## MiroApi.RemoveEmbedItemFromBoard



Remove an embed item from a Miro board.

**Parameters**

-   **board\_identifier** (`string`, required) Unique identifier (ID) of the board from which the embed item will be deleted.
-   **item\_id\_to\_delete** (`string`, required) Unique identifier of the embed item to be deleted from the board.

## MiroApi.AddImageToMiroBoard



Add an image to a Miro board using a URL.

**Parameters**

-   **board\_unique\_identifier** (`string`, required) The unique identifier for the board where the image will be added.
-   **image\_height\_pixels** (`number`, optional) Height of the image in pixels to be added to the Miro board.
-   **image\_title** (`string`, optional) A short text header to identify the image on the Miro board.
-   **image\_url** (`string`, optional) URL of the image to be added to the Miro board.
-   **image\_width\_pixels** (`number`, optional) The width of the image in pixels to be added to the board.
-   **parent\_frame\_id** (`string`, optional) Unique identifier for the parent frame where the image will be added. Use this to specify a frame within the board if needed.
-   **rotation\_angle\_degrees** (`number`, optional) Rotation angle of the image, in degrees, relative to the board. Use positive for clockwise and negative for counterclockwise.
-   **x\_axis\_coordinate** (`number`, optional) X-axis coordinate for the image location on the Miro board. Center is at x: 0. Default is 0.
-   **y\_axis\_coordinate** (`number`, optional) Y-axis coordinate of the item’s location on the board. Default is 0, centered on the board.

## MiroApi.GetImageItemInfo



Fetches details for a specified image item on a Miro board.

**Parameters**

-   **board\_unique\_id** (`string`, required) Unique identifier of the board to retrieve a specific image item from.
-   **image\_item\_id** (`string`, required) Unique identifier of the image item to retrieve from the board.

## MiroApi.UpdateBoardImage



Update an image item on a Miro board using a URL.

**Parameters**

-   **board\_identifier** (`string`, required) Unique identifier (ID) of the board where the image item will be updated.
-   **image\_item\_id** (`string`, required) The unique ID of the image item to update on the board.
-   **image\_height\_pixels** (`number`, optional) Specify the height of the image item in pixels.
-   **image\_title** (`string`, optional) A short text header to identify the image on the board.
-   **image\_url** (`string`, optional) The URL of the image to update on the board.
-   **image\_width\_in\_pixels** (`number`, optional) The width of the image item on the board, specified in pixels.
-   **item\_rotation\_angle** (`number`, optional) Specify the rotation angle for the image item in degrees. Use positive values for clockwise and negative for counterclockwise rotation.
-   **parent\_frame\_id** (`string`, optional) Unique identifier (ID) of the parent frame for the item.
-   **x\_axis\_coordinate** (`number`, optional) X-axis coordinate for the item’s location on the board. The board’s center is at x: 0. Default is 0.
-   **y\_axis\_coordinate\_position** (`number`, optional) The Y-axis coordinate for placing the item on the board. Default is `0`, with absolute positioning on the board.

## MiroApi.DeleteBoardImage



Deletes an image item from a Miro board.

**Parameters**

-   **board\_identifier** (`string`, required) Unique identifier of the board from which to delete the image item. Required for deleting the image.
-   **image\_item\_id** (`string`, required) Unique identifier of the image item to delete from the board.

## MiroApi.RetrieveBoardItems



Retrieve items from a specific Miro board.

**Parameters**

-   **board\_identifier** (`string`, required) Unique identifier (ID) of the Miro board to retrieve items from.
-   **item\_type\_filter** (`string`, optional) Specify the type of items to retrieve from the board (e.g., ‘text’, ‘shape’, ‘sticky\_note’).
-   **items\_limit** (`string`, optional) The maximum number of items to retrieve from the board at once, using pagination.
-   **pagination\_cursor** (`string`, optional) A string token used for cursor-based pagination to fetch the next set of results.

## MiroApi.GetBoardItemInfo



Retrieve information for a specific item on a Miro board.

**Parameters**

-   **board\_identifier** (`string`, required) Unique identifier of the board to retrieve the specific item from.
-   **item\_identifier** (`string`, required) Unique identifier of the item to retrieve from the board.

## MiroApi.UpdateItemPositionParent



Update an item’s position or parent on a Miro board.

**Parameters**

-   **board\_identifier** (`string`, required) The unique ID of the board where the item’s position or parent will be updated.
-   **item\_id** (`string`, required) Unique identifier of the item to update on the board.
-   **item\_x\_axis\_coordinate** (`number`, optional) X-axis coordinate for the item’s location on the board. Default is 0, with positioning relative to the board center.
-   **parent\_frame\_id** (`string`, optional) Unique identifier of the parent frame for the specified item.
-   **y\_axis\_coordinate** (`number`, optional) Y-axis coordinate for the item’s location on the board. Defaults to `0` with absolute positioning to the board, not the viewport.

## MiroApi.DeleteBoardItem



Deletes an item from a Miro board.

**Parameters**

-   **board\_id** (`string`, required) Unique identifier (ID) of the board from which you want to delete the item.
-   **item\_id** (`string`, required) Unique identifier (ID) of the item to delete from the board.

## MiroApi.ShareMiroBoard



Invite new members to collaborate on a Miro board.

**Parameters**

-   **board\_unique\_identifier** (`string`, required) Unique identifier for the Miro board you want to share. Required to specify the target board.
-   **invitee\_email\_addresses** (`array[string]`, required) A list of up to 20 email addresses to invite to the board.
-   **board\_member\_role** (`string`, optional) Role assigned to the board member. Options are viewer, commenter, editor, coowner, or owner. Note: ‘owner’ functions as ‘coowner’.
-   **invitation\_message** (`string`, optional) A custom message to include in the invitation email sent to new board collaborators.

## MiroApi.GetMiroBoardMembers



Retrieve members of a Miro board.

**Parameters**

-   **board\_id** (`string`, required) Unique identifier (ID) of the Miro board whose members are to be retrieved.
-   **number\_of\_members\_to\_retrieve** (`string`, optional) Specify the maximum number of board members to retrieve. This limits the number of results returned in one call.
-   **pagination\_offset** (`string`, optional) Specifies the starting point of the list of board members to return, for pagination purposes.

## MiroApi.GetBoardMemberInfo



Retrieve details about a specific board member.

**Parameters**

-   **board\_id** (`string`, required) Unique identifier (ID) of the board to which the board member belongs.
-   **board\_member\_id** (`string`, required) Unique identifier (ID) of the board member whose role you want to retrieve on a specific board.

## MiroApi.UpdateBoardMemberRole



Update the role of a Miro board member.

**Parameters**

-   **board\_member\_unique\_id** (`string`, required) Unique identifier of the board member whose role needs updating.
-   **board\_unique\_identifier** (`string`, required) Unique identifier for the board where the member role will be updated.
-   **board\_member\_role** (`string`, optional) The new role to assign to the board member. Options: ‘viewer’, ‘commenter’, ‘editor’, ‘coowner’, ‘owner’.

## MiroApi.RemoveBoardMember



Remove a member from a Miro board.

**Parameters**

-   **board\_member\_id** (`string`, required) Unique identifier of the board member to be removed from the board.
-   **board\_unique\_id** (`string`, required) Unique identifier of the board from which the member will be removed.

## MiroApi.AddShapeToMiroBoard



Add a shape to a Miro board.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **board\_id** (`string`, optional) Unique identifier of the Miro board where the shape will be added. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## MiroApi.GetShapeInformation



Retrieve detailed information about a specific shape on a Miro board.

**Parameters**

-   **board\_identifier** (`string`, required) Unique identifier (ID) of the Miro board from which to retrieve a specific shape item.
-   **shape\_item\_id** (`string`, required) Unique identifier of the shape item to retrieve from the Miro board.

## MiroApi.UpdateBoardShape



Update a shape item on a Miro board.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **board\_identifier** (`string`, optional) Unique identifier of the Miro board where you want to update the shape item. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **shape\_item\_id** (`string`, optional) Unique identifier (ID) of the shape item to update on the board. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## MiroApi.DeleteShapeFromMiroBoard



Delete a shape item from a Miro board.

**Parameters**

-   **board\_id** (`string`, required) Unique identifier of the board from which you want to delete the shape item.
-   **item\_id** (`string`, required) Unique identifier (ID) of the shape item to delete from the Miro board.

## MiroApi.AddStickyNoteToBoard



Add a sticky note to a Miro board.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **board\_id** (`string`, optional) Unique identifier of the board where the sticky note will be added. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## MiroApi.GetStickyNoteInfo



Retrieve details of a sticky note from a Miro board.

**Parameters**

-   **miro\_board\_id** (`string`, required) The unique identifier of the Miro board to retrieve the sticky note item from.
-   **sticky\_note\_id** (`string`, required) Specify the unique ID of the sticky note to retrieve from the board.

## MiroApi.UpdateStickyNote



Update a sticky note on a Miro board.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **board\_id\_for\_update** (`string`, optional) Unique identifier of the board where the sticky note update will occur. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **sticky\_note\_id** (`string`, optional) Unique identifier (ID) of the sticky note you want to update on the board. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## MiroApi.DeleteStickyNote



Deletes a sticky note from a Miro board.

**Parameters**

-   **board\_id** (`string`, required) Unique identifier (ID) of the board from which you want to delete the sticky note.
-   **sticky\_note\_id** (`string`, required) Unique identifier (ID) of the sticky note you want to delete from the board.

## MiroApi.AddTextToMiroBoard



Add a text item to a specified Miro board.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **board\_identifier** (`string`, optional) The unique ID of the Miro board where the text item will be created. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## MiroApi.GetTextItemInfo



Retrieve details of a text item from a Miro board.

**Parameters**

-   **board\_id** (`string`, required) Unique identifier (ID) of the board to retrieve a specific text item from. Required for identifying the board within Miro.
-   **text\_item\_id** (`string`, required) Unique identifier (ID) of the text item to retrieve from the board.

## MiroApi.UpdateBoardText



Update a text item on a Miro board.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **board\_id** (`string`, optional) Unique ID of the Miro board where the text item is to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **text\_item\_id** (`string`, optional) Unique identifier (ID) of the text item to update on the board. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## MiroApi.RemoveBoardTextItem



Delete a text item from a Miro board.

**Parameters**

-   **board\_identifier** (`string`, required) Unique identifier of the board from which the text item will be deleted.
-   **text\_item\_id** (`string`, required) Unique identifier (ID) of the text item to delete from the board.

## MiroApi.AddItemsToMiroBoard



Add up to 20 items to a Miro board in one transaction.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **miro\_board\_identifier** (`string`, optional) The unique identifier of the Miro board where items will be created. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## MiroApi.AddBoardFrame



Add a frame to a Miro board.

**Parameters**

-   **board\_id** (`string`, required) Unique identifier of the board where the frame will be created.
-   **frame\_fill\_color** (`string`, optional) Specify the fill color for the frame using hex values. Supported colors include: `#f5f6f8`, `#d5f692`, `#d0e17a`, `#93d275`, `#67c6c0`, `#23bfe7`, `#a6ccf5`, `#7b92ff`, `#fff9b1`, `#f5d128`, `#ff9d48`, `#f16c7f`, `#ea94bb`, `#ffcee0`, `#b384bb`, `#000000`. The default is transparent (`#ffffffff`).
-   **frame\_format** (`string`, optional) Specify the format for the frame. Only ‘custom’ is supported.
-   **frame\_height\_pixels** (`number`, optional) Specify the height of the frame in pixels on the Miro board.
-   **frame\_title** (`string`, optional) Title of the frame to appear at the top. It must be a string.
-   **frame\_type** (`string`, optional) Specify the type of frame to create. Only ‘freeform’ is supported at the moment.
-   **frame\_width\_in\_pixels** (`number`, optional) Specify the width of the frame in pixels.
-   **position\_y\_coordinate** (`number`, optional) Y-axis coordinate for the frame’s position on the board. Default is `0`. Center of the board has `x: 0` and `y: 0`.
-   **reveal\_frame\_content** (`boolean`, optional) Set to true to reveal content inside the frame; false to hide it. Applicable for Enterprise plans only.
-   **x\_axis\_position\_on\_board** (`number`, optional) X-axis coordinate for placing the frame on the board. Default is 0, where the center is at x: 0.

## MiroApi.GetBoardFrameInfo



Retrieve information about a specific frame on a board.

**Parameters**

-   **board\_unique\_id** (`string`, required) Unique identifier of the board containing the frame to retrieve.
-   **frame\_id** (`string`, required) Unique identifier (ID) of the frame to retrieve from the board.

## MiroApi.UpdateMiroBoardFrame



Update a frame on a Miro board with new properties.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **board\_id** (`string`, optional) Unique identifier (ID) of the board where the frame needs to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **frame\_id** (`string`, optional) Unique identifier of the frame to update on the board. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## MiroApi.DeleteBoardFrame



Delete a frame from a Miro board.

**Parameters**

-   **board\_id** (`string`, required) The unique ID of the Miro board from which you want to delete the frame.
-   **frame\_id** (`string`, required) Unique identifier of the frame to be deleted from the board.

## MiroApi.GetItemsWithinFrame



Retrieve items within a specified frame on a Miro board.

**Parameters**

-   **board\_id** (`string`, required) Unique identifier (ID) of the board containing the frame to retrieve items from.
-   **frame\_id** (`string`, required) The ID of the frame from which you want to retrieve the items. Required to locate the parent frame on the board.
-   **item\_retrieval\_limit** (`string`, optional) Specifies the maximum number of items to return in one call. Used for pagination purposes.
-   **item\_type\_filter** (`string`, optional) Specify the type of items to retrieve within the frame. Leave blank to retrieve all types.
-   **pagination\_cursor** (`string`, optional) A string used for cursor-based pagination to fetch the next set of results.

## MiroApi.GetAppUsageMetrics



Retrieve usage metrics for a specific app over a time range.

**Parameters**

-   **application\_id** (`string`, required) The ID of the app to retrieve metrics for. Provide a valid app ID to obtain usage data.
-   **end\_date** (`string`, required) End date of the period in UTC format, e.g., 2024-12-31.
-   **start\_date\_utc** (`string`, required) Start date of the period in UTC format (e.g., 2024-12-31).
-   **group\_data\_by\_period** (`string`, optional) Specify the time period for grouping data: ‘DAY’, ‘WEEK’, or ‘MONTH’.

## MiroApi.RetrieveAppMetrics



Retrieve total usage metrics for a specific app.

**Parameters**

-   **app\_id** (`string`, required) The unique identifier of the app to retrieve total usage metrics for.

## MiroApi.CreateBoardSubscription



Subscribe to board update notifications via webhook.

**Parameters**

-   **board\_id** (`string`, optional) Unique identifier of the board to associate with the webhook subscription.
-   **webhook\_callback\_url** (`string`, optional) The HTTPS URL where Miro sends a webhook upon an event occurrence. This URL must be accessible by Miro to receive notifications.
-   **webhook\_status** (`string`, optional) Set the status of the webhook subscription. Use ‘enabled’ to receive notifications, ‘disabled’ to stop notifications, or ‘lost\_access’ if access to the board is lost.

## MiroApi.UpdateBoardWebhookSubscription



Update the status or URL of a board’s webhook subscription.

**Parameters**

-   **subscription\_id** (`string`, required) The unique identifier of the webhook subscription to be updated.
-   **webhook\_callback\_url** (`string`, optional) The HTTPS URL where Miro sends webhooks when events occur. Must be a valid URL.
-   **webhook\_status** (`string`, optional) Set the webhook subscription status: `enabled`, `disabled`, or handle `lost_access`.

## MiroApi.GetUserWebhookSubscriptions



Retrieve all webhook subscriptions for a Miro user.

**Parameters**

-   **pagination\_cursor** (`string`, optional) A string token used to paginate through webhook subscriptions. If not provided, retrieves the first page.
-   **subscription\_limit** (`string`, optional) Specify the maximum number of webhook subscriptions to retrieve for the user.

## MiroApi.GetMiroSubscriptionInfo



Fetch detailed information for a specific Miro subscription.

**Parameters**

-   **subscription\_id** (`string`, required) Unique identifier of the Miro subscription to retrieve.

## MiroApi.DeleteMiroWebhookSubscription



Delete a Miro webhook subscription by ID.

**Parameters**

-   **subscription\_id** (`string`, required) The unique identifier (ID) for the Miro subscription to delete.

## MiroApi.GetMiroMindmapNode



Retrieve details about a specific mind map node on a Miro board.

**Parameters**

-   **board\_id** (`string`, required) Unique identifier (ID) of the Miro board to retrieve a mind map node from.
-   **mindmap\_node\_id** (`string`, required) Unique identifier of the mind map node to retrieve from the board.

## MiroApi.DeleteMindmapNode



Delete a mind map node and its child nodes from the board.

**Parameters**

-   **board\_identifier** (`string`, required) Unique identifier (ID) of the board from which the mind map node will be deleted.
-   **mindmap\_node\_id** (`string`, required) The unique ID of the mind map node to delete, including all child nodes, from the board.

## MiroApi.GetMindmapNodes



Retrieve mind map nodes from a specified Miro board.

**Parameters**

-   **board\_identifier** (`string`, required) The unique identifier for the Miro board to retrieve mind map nodes from. This ID specifies the target board.
-   **maximum\_results\_limit** (`string`, optional) Specifies the maximum number of mind map nodes returned in the response. Use this to control pagination and limit the data load.
-   **pagination\_cursor** (`string`, optional) A string that points to the next portion of the results set for cursor-based pagination.

## MiroApi.AddMindmapNode



Add a new mind map node to a Miro board.

**Parameters**

-   **board\_id** (`string`, required) Unique identifier (ID) of the board where the new mind map node will be created.
-   **mindmap\_node\_content** (`string`, optional) The text content to display within the mind map node.
-   **node\_type** (`string`, optional) Specifies the type of mind map node. Use ‘text’ as the current valid type.
-   **node\_width\_pixels** (`number`, optional) Width of the mind map node in pixels. Specifies how wide the node will appear on the board.
-   **parent\_frame\_id** (`string`, optional) Unique identifier (ID) of the parent node or frame for the mind map node.
-   **x\_coordinate** (`number`, optional) X-axis coordinate for node placement on the board. Defaults to `0`, placing the node at the center along the x-axis.
-   **y\_coordinate** (`number`, optional) Y-coordinate for item placement on the board. Defaults to 0 if not specified, placing it at the board’s center.

## MiroApi.GetBoardItems



Retrieve items from a specific Miro board.

**Parameters**

-   **board\_identifier** (`string`, required) Unique identifier of the Miro board to retrieve items from.
-   **item\_type** (`string`, optional) Specify the type of items to retrieve from the board, such as ‘shape’.
-   **pagination\_cursor** (`string`, optional) The cursor value to retrieve the next set of items from a board. Use the value returned in the previous response to paginate through results.
-   **pagination\_limit** (`string`, optional) The maximum number of items to return in a single call. Use this to control the size of the result set per request.

## MiroApi.RetrieveBoardItemInfo



Retrieve details for a specific board item on Miro.

**Parameters**

-   **board\_identifier** (`string`, required) Unique identifier of the Miro board to retrieve a specific item from.
-   **item\_id** (`string`, required) Unique identifier of the item to retrieve from the board.

## MiroApi.RemoveBoardItem



Delete an item from a Miro board.

**Parameters**

-   **board\_unique\_id** (`string`, required) Unique identifier of the Miro board to delete the item from.
-   **item\_id** (`string`, required) Unique identifier (ID) of the item to delete from the board.

## MiroApi.AddFlowchartShapeToBoard



Add a flowchart shape item to a Miro board.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **board\_identifier** (`string`, optional) The unique ID of the Miro board where the flowchart shape will be added. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## MiroApi.RetrieveShapeInformation



Retrieve information for a specific shape item on a board.

**Parameters**

-   **board\_identifier** (`string`, required) Unique identifier for the board to retrieve a specific shape item from.
-   **shape\_item\_id** (`string`, required) Unique identifier (ID) of the shape item to retrieve from the board.

## MiroApi.UpdateFlowchartShape



Update a shape item in a Miro flowchart board.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **board\_identifier** (`string`, optional) Unique identifier of the board where the shape item will be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **item\_id** (`string`, optional) Unique identifier (ID) of the shape item to update on the board. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## MiroApi.DeleteFlowchartShape



Delete a flowchart shape from a Miro board.

**Parameters**

-   **board\_unique\_id** (`string`, required) Unique identifier of the board from which to delete the shape item.
-   **item\_id** (`string`, required) Unique identifier of the flowchart shape item to delete from the board.

## MiroApi.CreateGroupOnBoard



Creates a group of items on a Miro board.

**Parameters**

-   **board\_identifier** (`string`, required) The unique string identifier of the Miro board where the group will be created.
-   **item\_ids** (`array[string]`, optional) An array of unique identifiers (IDs) for the items to be grouped on the board. Each ID corresponds to an item you wish to include in the group.

## MiroApi.GetBoardGroups



Retrieve all groups and their items from a specific board.

**Parameters**

-   **board\_id** (`string`, required) Unique identifier of the Miro board to retrieve groups from.
-   **max\_items\_to\_return** (`integer`, optional) The maximum number of items to return at once. Default is 10 and the maximum is 50.
-   **next\_page\_cursor** (`string`, optional) The cursor value for fetching the next set of group items from the board. Use it to paginate results.

## MiroApi.GetItemsByGroupId



Retrieve items from a specific group on a Miro board.

**Parameters**

-   **board\_identifier** (`string`, required) Unique identifier (ID) of the Miro board to retrieve items from.
-   **group\_item\_id** (`string`, required) The ID of the group item to retrieve from the board.
-   **max\_items\_per\_request** (`integer`, optional) The maximum number of items to return per request. Default is 10, maximum is 50.
-   **next\_cursor** (`string`, optional) A string used for cursor-based pagination to fetch the next set of results. Set it to the value received from the previous API response to continue retrieving items.

## MiroApi.GetGroupItemsMiro



Retrieve items from a specific group on a Miro board.

**Parameters**

-   **board\_unique\_identifier** (`string`, required) Unique identifier for the Miro board to fetch group items from.
-   **group\_id** (`string`, required) Unique identifier of the group to retrieve items from on the board.

## MiroApi.UngroupItemsOnMiroBoard



Ungroup items from a group on Miro board.

**Parameters**

-   **group\_id** (`string`, required) Unique identifier (ID) of the group to be ungrouped on the Miro board.
-   **miro\_board\_id** (`string`, required) Unique identifier (ID) of the Miro board to ungroup items from.
-   **remove\_items\_after\_ungrouping** (`boolean`, optional) Specify if items should be removed after ungrouping. Default is false.

## MiroApi.UpdateBoardGroup



Replace and update an existing group in a board.

**Parameters**

-   **board\_unique\_id** (`string`, required) Unique identifier for the board to update the group on.
-   **group\_id** (`string`, required) Unique identifier (ID) of the group to be updated. This ID is required to replace the group.
-   **item\_ids** (`array[string]`, optional) Array of unique identifiers (IDs) for the items in the new group.

## MiroApi.DeleteBoardGroup



Delete a group and its items from a Miro board.

**Parameters**

-   **board\_id** (`string`, required) Unique identifier of the board from which the group will be deleted.
-   **delete\_items\_with\_group** (`boolean`, required) Set to true to delete items within the group when deleting the group from the board.
-   **group\_id** (`string`, required) Unique identifier (ID) of the group to be deleted.

## MiroApi.RevokeMiroAccessToken



Revoke the current Miro access token.

**Parameters**

-   **client\_id** (`string`, required) The client ID associated with the access token for Miro. Required for token revocation.
-   **client\_secret** (`string`, required) The client secret associated with the access token to be revoked. This is required for validation.
-   **miro\_access\_token** (`string`, required) The Miro access token that needs to be revoked, rendering it and the refresh token unusable.

## MiroApi.GetTagsFromItem



Retrieve all tags from a specified item on a board.

**Parameters**

-   **board\_identifier** (`string`, required) Unique identifier (ID) of the board containing the item for which tags are to be retrieved.
-   **item\_identifier** (`string`, required) Unique identifier (ID) of the item whose tags are to be retrieved from the board.

## MiroApi.CreateBoardTag



Create a tag on a Miro board.

**Parameters**

-   **board\_unique\_id** (`string`, required) The unique identifier (ID) of the Miro board where the tag will be created.
-   **tag\_title** (`string`, required) Unique, case-sensitive text for the tag.
-   **tag\_fill\_color** (`string`, optional) The fill color of the tag. Choose from options: red, light\_green, cyan, yellow, magenta, green, blue, gray, violet, dark\_green, dark\_blue, black.

## MiroApi.GetBoardTags



Retrieve all tags from a specified Miro board.

**Parameters**

-   **board\_id** (`string`, required) The unique identifier of the board to retrieve tags from. This is required to specify the target board in Miro.
-   **maximum\_number\_of\_tags** (`string`, optional) Specifies the maximum number of tags to retrieve from the board.
-   **result\_offset** (`string`, optional) Specifies the starting point for the result set to retrieve tags, useful for pagination.

## MiroApi.GetTagInfo



Retrieve detailed information for a specific tag on a Miro board.

**Parameters**

-   **board\_id** (`string`, required) Unique identifier (ID) of the board from which to retrieve the specific tag.
-   **tag\_identifier** (`string`, required) Unique identifier of the tag to retrieve from the board.

## MiroApi.UpdateMiroTag



Update a tag on a Miro board.

**Parameters**

-   **board\_identifier** (`string`, required) Unique identifier (ID) of the board where the tag update should occur.
-   **tag\_unique\_identifier** (`string`, required) Unique identifier for the tag you want to update on a Miro board.
-   **tag\_fill\_color** (`string`, optional) Specify the fill color for the tag. Choices are: red, light\_green, cyan, yellow, magenta, green, blue, gray, violet, dark\_green, dark\_blue, black.
-   **tag\_title** (`string`, optional) Unique, case-sensitive text of the tag to be updated.

## MiroApi.DeleteBoardTag



Delete a tag from a Miro board and its items.

**Parameters**

-   **board\_identifier** (`string`, required) Unique ID of the board from which to delete a specific tag.
-   **tag\_id\_to\_delete** (`string`, required) Unique identifier of the tag that you want to delete from the board.

## MiroApi.RetrieveItemsByTag



Retrieve items from a board by specifying a tag.

**Parameters**

-   **board\_id** (`string`, required) Unique identifier of the board from which to retrieve items by tag.
-   **tag\_identifier** (`string`, required) Unique identifier (ID) for the tag to retrieve items associated with it.
-   **max\_items\_to\_retrieve** (`string`, optional) Specifies the maximum number of items to retrieve with the specified tag from a board. Use an integer.
-   **pagination\_offset** (`string`, optional) Specifies the number of items to skip before starting to collect the result set. Use to navigate paginated results.

## MiroApi.AttachTagToItem



Attach a tag to a specific item on a Miro board.

**Parameters**

-   **board\_id** (`string`, required) Unique ID of the board where the item to tag is located.
-   **item\_identifier** (`string`, required) Unique identifier of the item to which you want to add a tag on the Miro board.
-   **tag\_id** (`string`, required) Unique identifier of the tag to attach to the item.

## MiroApi.RemoveTagFromItem



Remove a specified tag from an item on a Miro board.

**Parameters**

-   **board\_id\_for\_tag\_removal** (`string`, required) Unique identifier (ID) of the board from which the tag will be removed from an item.
-   **item\_id** (`string`, required) Unique identifier (ID) of the item from which the tag will be removed.
-   **tag\_unique\_identifier** (`string`, required) Unique identifier (ID) of the tag you want to remove from the item on the board.

## MiroApi.CreateEnterpriseProject



Create a new project within an enterprise team on Miro.

**Parameters**

-   **organization\_id** (`string`, required) The unique ID of the organization where you want to create a project on Miro.
-   **project\_name** (`string`, required) The name of the project to be created within the team. It should be descriptive and unique for easy identification.
-   **team\_id** (`string`, required) The unique ID of the team where the project will be created.

## MiroApi.GetTeamProjects



Fetches projects from a specified team within an organization.

**Parameters**

-   **organization\_id** (`string`, required) The ID of the organization to retrieve the list of available projects from.
-   **team\_id** (`string`, required) The ID of the team from which to retrieve the list of projects. This is required to specify which team’s projects to fetch.
-   **max\_results\_per\_call** (`integer`, optional) The maximum number of projects to return in one call. Use this to control the size of the dataset returned. If exceeded, a cursor for pagination will be provided.
-   **pagination\_cursor** (`string`, optional) Used to navigate through pages of results. Leave empty for the first page; set to the value from the previous response for subsequent pages.

## MiroApi.GetMiroProjectInfo



Retrieve information for a specific Miro project.

**Parameters**

-   **organization\_id** (`string`, required) The ID of the organization to retrieve project information.
-   **project\_identifier** (`string`, required) The unique ID of the project to retrieve information for.
-   **team\_id\_for\_project\_info** (`string`, required) The ID of the team from which you want to retrieve the project information.

## MiroApi.UpdateProjectInfo



Update project details for an enterprise account.

**Parameters**

-   **new\_project\_name** (`string`, required) New name to be assigned to the project.
-   **organization\_id** (`string`, required) The unique identifier of an organization.
-   **project\_identifier** (`string`, required) The unique identifier for the project to be updated.
-   **team\_id** (`string`, required) The unique identifier for a team associated with the project.

## MiroApi.DeleteEnterpriseProject



Delete a project while retaining associated boards and users.

**Parameters**

-   **organization\_id** (`string`, required) The ID of the organization from which you want to delete a project.
-   **project\_id\_to\_delete** (`string`, required) The ID of the project that needs to be deleted from the organization.
-   **team\_id** (`string`, required) The unique identifier of the team from which the project is to be deleted.

## MiroApi.GetProjectSettings



Retrieve enterprise project settings for a specific project.

**Parameters**

-   **organization\_id** (`string`, required) The unique ID of the organization to which the project belongs.
-   **project\_id** (`string`, required) The ID of the project for which you want to retrieve the project settings.
-   **team\_id** (`string`, required) The ID of the team to which the project belongs. Must be a valid team ID within the organization.

## MiroApi.UpdateProjectSettings



Update settings for an enterprise-level project.

**Parameters**

-   **organization\_id** (`string`, required) The ID of the organization to which the project belongs.
-   **project\_identifier** (`string`, required) The unique ID of the project whose settings need updating.
-   **team\_id** (`string`, required) The unique identifier of the team associated with the project.
-   **team\_access\_level** (`string`, optional) Specifies the access level for the team. Use “private” to restrict access to project members only and “view” to allow team-wide viewing.

## MiroApi.AddMiroProjectMember



Add a user to an Enterprise Miro project.

**Parameters**

-   **organization\_id** (`string`, required) The ID of the organization to which the project belongs.
-   **project\_id** (`string`, required) The unique ID of the Miro project to which a user will be added.
-   **project\_member\_role** (`string`, required) Role of the user to be assigned in the Miro project. Possible values: owner, editor, viewer, commentator, coowner.
-   **team\_id** (`string`, required) The ID of the team to which the project belongs. Used to identify the specific team for project member addition.
-   **user\_email\_id** (`string`, required) The email address of the user to be added as a project member.

## MiroApi.GetProjectMembers



Retrieve members of a specific project.

**Parameters**

-   **organization\_id** (`string`, required) The ID of the organization to which the project belongs.
-   **project\_identifier** (`string`, required) The unique identifier of the project to retrieve its members.
-   **team\_id** (`string`, required) The unique ID of the team associated with the project.
-   **maximum\_results\_per\_call** (`integer`, optional) Specifies the maximum number of project members to return per call. Additional results can be accessed via the cursor parameter.
-   **pagination\_cursor** (`string`, optional) Indicator for the page position in the result set. Leave empty for the first page; use the prior response’s cursor for next pages.

## MiroApi.GetProjectMemberInfo



Retrieve information about a specific project member.

**Parameters**

-   **member\_id** (`string`, required) The ID of the project member to retrieve specific information.
-   **organization\_id** (`string`, required) The ID of the organization to which the project belongs.
-   **project\_identifier** (`string`, required) The ID of the project to get information about a specific member.
-   **team\_identifier** (`string`, required) The ID of the team to which the project belongs.

## MiroApi.UpdateProjectMemberRole



Update the role and details of a project member.

**Parameters**

-   **member\_id** (`string`, required) The unique identifier for the project member whose role you want to update.
-   **organization\_id** (`string`, required) The ID of the organization to which the project member belongs.
-   **project\_id** (`string`, required) The unique ID of the project to be updated.
-   **team\_id** (`string`, required) The unique identifier for the team that the project member is associated with. Required for specifying which team the member belongs to.
-   **project\_member\_role** (`string`, optional) The new role for the project member. Choose from ‘owner’, ‘editor’, ‘viewer’, ‘commentator’, or ‘coowner’.

## MiroApi.RemoveProjectMember



Remove a member from a Miro project.

**Parameters**

-   **member\_id** (`string`, required) The ID of the member to be removed from the project.
-   **organization\_id** (`string`, required) The ID of the organization to which the project belongs.
-   **project\_identifier** (`string`, required) The unique identifier for the project from which to remove a member. This ID is required to specify the project accurately.
-   **team\_id** (`string`, required) The ID of the team to which the project belongs, required for specifying the project context.

## MiroApi.CreateEnterpriseTeam



Creates a new team in an existing Miro organization.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization where the team is being created.
-   **team\_name** (`string`, optional) The name of the team to be created within the organization.

## MiroApi.GetEnterpriseTeams



Retrieve list of teams in an enterprise organization.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier of the organization to retrieve teams from.
-   **maximum\_results\_limit** (`integer`, optional) The maximum number of team records to retrieve. If not set, defaults to the API’s default value.
-   **pagination\_cursor** (`string`, optional) Indicator for page position in results. Leave empty for first page; use previous cursor for next pages.
-   **team\_name\_filter** (`string`, optional) Filters teams by name using case insensitive partial match. For example, ‘dev’ will return both ‘Developer’s team’ and ‘Team for developers’.

## MiroApi.GetTeamInfo



Retrieve information about an existing team within an organization.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization in Miro.
-   **team\_id** (`string`, required) The unique identifier of the team to retrieve information for. This is required to specify which team within the organization you’re inquiring about.

## MiroApi.UpdateEnterpriseTeam



Update details of an existing enterprise team.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier of the organization to which the team belongs.
-   **team\_identifier** (`string`, required) The unique identifier for the team to be updated.
-   **new\_team\_name** (`string`, optional) Specify the new name for the team.

## MiroApi.DeleteEnterpriseTeam



Deletes an existing team for enterprise users.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization. Required to specify which organization’s team is to be deleted.
-   **team\_id** (`string`, required) The unique identifier for the team to be deleted within the organization.

## MiroApi.InviteMiroTeamMember



Invite a new user to a Miro team within your organization.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the Miro organization to which the user belongs.
-   **team\_identifier** (`string`, required) Specify the unique identifier of the team within the organization.
-   **user\_email\_for\_team\_invitation** (`string`, required) Email address of the user to be invited to the Miro team. Ensure the email belongs to a user in your Miro organization.
-   **team\_member\_role** (`string`, optional) Specify the role for the team member: ‘member’, ‘admin’, or ‘team\_guest’. Determines access and permissions in the team.

## MiroApi.GetEnterpriseTeamMembers



Retrieve team members for an enterprise organization team.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization whose team members are being retrieved.
-   **team\_identifier** (`string`, required) The unique identifier for the team whose members are being retrieved.
-   **filter\_by\_role** (`string`, optional) Filter team members by their role. Accepted values: ‘member’, ‘admin’, ‘non\_team’, ‘team\_guest’.
-   **member\_retrieval\_limit** (`integer`, optional) The maximum number of team members to retrieve in one call. Leave empty for default.
-   **pagination\_cursor** (`string`, optional) Indicates the page position for fetching results. Leave empty for the first page or use the value from the previous cursor field for subsequent pages.

## MiroApi.RetrieveTeamMemberById



Retrieve team member details by ID for enterprise users.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization. Required to retrieve team member details.
-   **team\_identifier** (`string`, required) The unique identifier for the team within the organization.
-   **team\_member\_id** (`string`, required) The unique identifier for the team member to be retrieved.

## MiroApi.UpdateTeamMemberRole



Update a team member’s role in an enterprise team.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization.
-   **team\_identifier** (`string`, required) The unique identifier for the team whose member’s role is to be updated.
-   **team\_member\_id** (`string`, required) The unique identifier of the team member whose role is to be updated.
-   **team\_member\_role** (`string`, optional) Role of the team member. Options: ‘member’, ‘admin’, ‘team\_guest’. Specifies permissions within the team.

## MiroApi.RemoveTeamMember



Remove a team member from a team by ID within an enterprise.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier of the organization from which a team member will be removed.
-   **team\_identifier** (`string`, required) The unique identifier of the team from which the member will be removed. This should be a string representing the Team ID.
-   **team\_member\_id** (`string`, required) The unique identifier of the team member to be removed.

## MiroApi.GetDefaultTeamSettings



Retrieve default team settings for an organization.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for an Organization within Miro’s Enterprise plan. Required for retrieving default team settings.

## MiroApi.GetTeamSettings



Fetches settings for a specific team in an organization.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization.
-   **team\_id** (`string`, required) The unique identifier for the team whose settings you want to retrieve.

## MiroApi.UpdateTeamSettings



Update settings for an existing team in Miro Enterprise.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique identifier for the organization to which the team belongs. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **team\_identifier** (`string`, optional) The unique identifier of the team to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## Reference

Below is a reference of enumerations used by some of the tools in the MiroApi MCP Server:

### ToolMode

-   **GET\_REQUEST\_SCHEMA**: `get_request_schema`
-   **EXECUTE**: `execute`

* * *

## Auth

The Arcade Miro MCP Server uses the [Miro auth provider](/references/auth-providers/miro.md) to connect to users’ Miro accounts.

With the Arcade Cloud Platform, there’s nothing to configure. Your users will see `Arcade` as the name of the application that’s requesting permission.

With a self-hosted installation of Arcade, you need to [configure the Miro auth provider](/references/auth-providers/miro.md#configuring-miro-auth) with your own Miro app credentials.

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_miro_api ``` Learn more](/guides/deployment-hosting.md)

Last updated on February 6, 2026

[LumaApi](/en/resources/integrations/productivity/luma-api.md)
[Sharepoint](/en/resources/integrations/productivity/sharepoint.md)
