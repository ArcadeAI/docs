---
title: "FigmaApi"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Productivity & Docs](/en/resources/integrations/productivity/asana.md)
FigmaApi

# FigmaApi

Arcade Starter

**Description:** Tools that enable LLMs to interact directly with the figma API.

**Author:** Arcade

**Auth:** User authorization

[![PyPI Version](https://img.shields.io/pypi/v/arcade_figma_api)](https://pypi.org/project/arcade_figma_api/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_figma_api)](https://pypi.org/project/arcade_figma_api/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_figma_api)](https://pypi.org/project/arcade_figma_api/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_figma_api)](https://pypi.org/project/arcade_figma_api/)

FigmaApi is a [Starter MCP Server](/guides/create-tools/improve/types-of-tools.md#starter-tools)
: each tool mirrors one HTTP endpoint and offers LLMs a way to interact with the low-level API.



Differently from [Optimized MCP Servers](/guides/create-tools/improve/types-of-tools.md#optimized-tools)
, Starter tools are heavily influenced by the original API design, which is not usually optimized for LLM usage. For this reason, we recommend thoroughly evaluating the tools with your Agents or chatbots before using it in production. [Read more](/guides/create-tools/improve/types-of-tools.md) about Optimized vs Starter tools.

The FigmaApi MCP Server offers a comprehensive suite of tools for interacting with Figma files and projects. Users can efficiently manage design assets and collaborate on projects by performing actions such as:

## Available Tools

Tool Name

Description

FigmaApi.FetchFigmaFile

Retrieve a Figma file as a JSON object using its file key.

FigmaApi.GetFigmaFileNodes

Retrieve nodes and metadata from a Figma file.

FigmaApi.RenderFigmaImages

Fetch rendered images from Figma files by node IDs.

FigmaApi.FetchImageFillLinks

Retrieve download links for images in a Figma document.

FigmaApi.GetFileMetadata

Retrieve metadata for a specified Figma file.

FigmaApi.FigmaGetTeamProjects

Fetch all projects within a specified Figma team.

FigmaApi.GetFigmaProjectFiles

Retrieve all files from a specific Figma project.

FigmaApi.FetchFileVersionHistory

Fetch the version history of a Figma file.

FigmaApi.GetFigmaFileComments

Retrieve comments from a Figma file.

FigmaApi.AddCommentToFigmaFile

Posts a new comment on a Figma file.

FigmaApi.DeleteFigmaComment

Delete your comment from a Figma file.

FigmaApi.FetchCommentReactions

Retrieve reactions from a specific comment in Figma.

FigmaApi.AddFigmaCommentReaction

Add a reaction to a comment on a Figma file.

FigmaApi.DeleteMyCommentReaction

Deletes your specific comment reaction in Figma.

FigmaApi.GetUserInformation

Retrieve information for the authenticated Figma user.

FigmaApi.GetTeamComponents

Retrieve published components from a team's Figma library.

FigmaApi.GetFigmaFileComponents

Retrieve published components from a Figma file library.

FigmaApi.GetFigmaComponentMetadata

Retrieve metadata for a Figma component by key.

FigmaApi.GetTeamComponentSets

Fetch published component sets from a Figma team library.

FigmaApi.GetPublishedComponentSets

Retrieve published component sets from a Figma file.

FigmaApi.GetFigmaComponentSet

Retrieve metadata for a Figma component set using its key.

FigmaApi.GetTeamStyles

Retrieve a list of published styles from a team's library in Figma.

FigmaApi.GetPublishedStylesFromFile

Retrieve published styles from a Figma file library.

FigmaApi.GetStyleMetadata

Retrieve Figma style metadata by key.

FigmaApi.GetFigmaWebhooks

Retrieve a list of webhooks from Figma.

FigmaApi.CreateFigmaWebhook

Create a new webhook for Figma events.

FigmaApi.GetFigmaWebhook

Retrieve a Figma webhook by its ID.

FigmaApi.UpdateFigmaWebhook

Update a Figma webhook by its ID.

FigmaApi.DeleteFigmaWebhook

Delete a specified webhook in Figma.

FigmaApi.GetRecentWebhookRequests

Retrieve recent webhook requests from the last week.

FigmaApi.RetrieveFigmaLocalVariables

Retrieve local and remote variables from a Figma file.

FigmaApi.GetPublishedVariables

Retrieve published variables from a Figma file.

FigmaApi.ManageFigmaVariables

Manage and organize Figma variable collections in bulk.

FigmaApi.GetDevResources

Retrieve development resources from a Figma file.

FigmaApi.CreateBulkDevResources

Bulk create developer resources in multiple Figma files.

FigmaApi.BulkUpdateFigmaDevResources

Update multiple Figma dev resources in bulk.

FigmaApi.DeleteDevResource

Delete a dev resource from a Figma file.

FigmaApi.GetLibraryAnalyticsComponentActions

Get analytics for library component actions.

FigmaApi.FetchComponentUsageData

Fetch library analytics component usage data by dimension.

FigmaApi.GetLibraryStyleActions

Retrieve library style analytics actions data by dimension.

FigmaApi.GetLibraryStyleUsageData

Retrieve style usage data from Figma library analytics.

FigmaApi.FetchLibraryAnalyticsVariableActions

Retrieve library analytics variable actions data from Figma.

FigmaApi.GetLibraryAnalyticsVariableUsages

Retrieve analytics on library variable usage.

If you need to perform an action that’s not listed here, you can [get in touch with us](mailto:contact@arcade.dev) to request a new tool, or [create your own tools](/guides/create-tools/tool-basics/build-mcp-server.md).

## FigmaApi.FetchFigmaFile



Retrieve a Figma file as a JSON object using its file key.

**Parameters**

-   **file\_key** (`string`, required) The unique key of the Figma file or branch to retrieve as JSON.
-   **version\_id** (`string`, optional) Specify the version ID to retrieve a specific version of the file. Default is the current version.
-   **node\_ids\_of\_interest** (`string`, optional) Comma-separated list of node IDs to retrieve specific parts of the Figma document.
-   **traversal\_depth** (`number`, optional) Positive integer indicating the depth in the document tree to retrieve. For example, 1 returns only Pages; 2 returns Pages and top-level objects.
-   **export\_vector\_data** (`string`, optional) Set to “paths” to include vector data in the response.
-   **include\_plugin\_data** (`string`, optional) Comma separated list of plugin IDs and/or ‘shared’. Includes plugin data in the result.
-   **include\_branch\_metadata** (`boolean`, optional) Set to true to include metadata about branches related to the file. If false, branch information will not be returned.

## FigmaApi.GetFigmaFileNodes



Retrieve nodes and metadata from a Figma file.

**Parameters**

-   **node\_ids\_to\_retrieve** (`string`, required) A comma-separated list of Figma node IDs to retrieve as JSON.
-   **figma\_file\_key** (`string`, required) The file or branch key from which to export JSON data in Figma.
-   **specific\_version\_id** (`string`, optional) Specify a version ID to retrieve a particular version of the Figma file. If omitted, the current version is retrieved.
-   **node\_tree\_depth** (`number`, optional) Positive integer indicating how deep into the node tree to traverse from the starting node. A value of 1 returns only immediate children. Leaving it unset returns all nodes.
-   **export\_vector\_data** (`string`, optional) Set to “paths” to include vector data in the response.
-   **include\_plugin\_data** (`string`, optional) Comma-separated plugin IDs and/or ‘shared’ to include plugin-related data in results.

## FigmaApi.RenderFigmaImages



Fetch rendered images from Figma files by node IDs.

**Parameters**

-   **node\_ids\_to\_render** (`string`, required) A comma-separated list of node IDs for images to be rendered.
-   **figma\_file\_key** (`string`, required) The key for the Figma file or branch to export images from. Use with the `branch_data` query parameter to obtain branch key if needed.
-   **version\_id** (`string`, optional) Specify a version ID to retrieve a particular version of a Figma file. If omitted, will use the current version.
-   **image\_scale\_factor** (`number`, optional) A number between 0.01 and 4, representing the image scaling factor for rendering.
-   **image\_output\_format** (`string`, optional) Specify the image format for the output. Options are ‘jpg’, ‘png’, ‘svg’, or ‘pdf’.
-   **render\_text\_as\_outlines** (`boolean`, optional) Determines if text elements are rendered as outlines in SVGs. Set `true` for visual consistency; `false` for selectable text.
-   **include\_svg\_id\_attributes** (`boolean`, optional) Include id attributes for all SVG elements. Adds the layer name to the ‘id’ attribute.
-   **include\_node\_id\_in\_svg\_elements** (`boolean`, optional) Set to true to include node ID attributes for all SVG elements, adding the node ID to a `data-node-id` attribute.
-   **svg\_stroke\_simplification\_enabled** (`boolean`, optional) Set to true to simplify inside/outside strokes in SVG using stroke attributes instead of `<mask>`.
-   **exclude\_overlapping\_content** (`boolean`, optional) Set to true to exclude overlapping content from rendering. Set to false to include overlaps, which may increase processing time.
-   **use\_full\_dimensions\_without\_cropping** (`boolean`, optional) Export using full node dimensions, ignoring cropping and empty space. Ensures text nodes are fully visible.

## FigmaApi.FetchImageFillLinks



Retrieve download links for images in a Figma document.

**Parameters**

-   **file\_or\_branch\_key** (`string`, required) The file or branch key from which to retrieve image URLs. Use `GET /v1/files/:key` to get the branch key if needed.

## FigmaApi.GetFileMetadata



Retrieve metadata for a specified Figma file.

**Parameters**

-   **file\_identifier** (`string`, required) File or branch key to get metadata for. Use the `branch_data` query param to get the branch key.

## FigmaApi.FigmaGetTeamProjects



Fetch all projects within a specified Figma team.

**Parameters**

-   **team\_id** (`string`, required) The unique ID of the Figma team to list projects from. This is required to specify which team’s projects to retrieve.

## FigmaApi.GetFigmaProjectFiles



Retrieve all files from a specific Figma project.

**Parameters**

-   **project\_identifier** (`string`, required) The unique string ID of the Figma project from which to list files.
-   **include\_branch\_metadata** (`boolean`, optional) Include branch metadata for each main file with a branch in the project. Set to true to receive this data, otherwise false.

## FigmaApi.FetchFileVersionHistory



Fetch the version history of a Figma file.

**Parameters**

-   **target\_file\_key** (`string`, required) The key of the file or branch to fetch version history for. Use this to specify the Figma file whose version history you need.
-   **number\_of\_items\_per\_page** (`number`, optional) Specify the number of items to return per page. Defaults to 30 if not provided.
-   **get\_versions\_before\_id** (`number`, optional) A version ID to get versions before it in the history. Used for pagination.
-   **after\_version\_id** (`number`, optional) Version ID to fetch subsequent versions. Used for pagination. Omit if not paginating.

## FigmaApi.GetFigmaFileComments



Retrieve comments from a Figma file.

**Parameters**

-   **figma\_file\_or\_branch\_key** (`string`, required) Specify the file or branch key to retrieve comments from. Use the `GET /v1/files/:key` endpoint with `branch_data` query param for branch keys.
-   **return\_comments\_as\_markdown** (`boolean`, optional) Set to true to return comments as markdown equivalents when applicable.

## FigmaApi.AddCommentToFigmaFile



Posts a new comment on a Figma file.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **figma\_file\_key** (`string`, optional) File or branch key for the Figma file where the comment will be added. Retrieve this using `GET /v1/files/:key` with the `branch_data` query param for branch keys. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## FigmaApi.DeleteFigmaComment



Delete your comment from a Figma file.

**Parameters**

-   **figma\_file\_key** (`string`, required) The file or branch key from which to delete the comment. Use `GET /v1/files/:key` with `branch_data` to obtain the branch key.
-   **comment\_identifier** (`string`, required) The ID of the comment you wish to delete from the Figma file. Only the original commenter can perform this action.

## FigmaApi.FetchCommentReactions



Retrieve reactions from a specific comment in Figma.

**Parameters**

-   **file\_or\_branch\_key** (`string`, required) The key for the file or branch to retrieve the comment reactions from in Figma.
-   **comment\_id** (`string`, required) ID of the comment from which to retrieve reactions.
-   **pagination\_cursor** (`string`, optional) Cursor for pagination. Use the cursor from the previous call’s response to retrieve the next set of reactions.

## FigmaApi.AddFigmaCommentReaction



Add a reaction to a comment on a Figma file.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **file\_or\_branch\_key** (`string`, optional) Key of the file or branch where the comment reaction should be posted. Can be obtained via the Figma API. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **comment\_id** (`string`, optional) The unique identifier of the comment you want to react to in a Figma file. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## FigmaApi.DeleteMyCommentReaction



Deletes your specific comment reaction in Figma.

**Parameters**

-   **reaction\_emoji** (`string`, required) The emoji associated with the reaction to be deleted. Only the emoji used for the reaction you added can be deleted.
-   **file\_or\_branch\_key** (`string`, required) Key of the Figma file or branch where the reaction should be deleted. Use `GET /v1/files/:key` with the `branch_data` query param to obtain the branch key if needed.
-   **comment\_id** (`string`, required) The ID of the comment from which you want to delete your reaction.

## FigmaApi.GetUserInformation



Retrieve information for the authenticated Figma user.

**Parameters**

This tool does not take any parameters.

## FigmaApi.GetTeamComponents



Retrieve published components from a team’s Figma library.

**Parameters**

-   **team\_id** (`string`, required) The unique identifier of the team whose components you want to retrieve. This ID is necessary to specify the source team library in Figma.
-   **number\_of\_items\_per\_page** (`number`, optional) Specify the number of components to return in one page. Defaults to 30, maximum is 1000.
-   **cursor\_after\_id** (`number`, optional) Cursor indicating which ID to start retrieving components after. Cannot be used with ‘before’.
-   **cursor\_before** (`number`, optional) Cursor to retrieve components starting before a specific id. Exclusive with ‘cursor\_after’.

## FigmaApi.GetFigmaFileComponents



Retrieve published components from a Figma file library.

**Parameters**

-   **file\_key** (`string`, required) Main file key to list components from. Must not be a branch key.

## FigmaApi.GetFigmaComponentMetadata



Retrieve metadata for a Figma component by key.

**Parameters**

-   **component\_key** (`string`, required) The unique identifier of the Figma component to retrieve metadata for.

## FigmaApi.GetTeamComponentSets



Fetch published component sets from a Figma team library.

**Parameters**

-   **team\_id** (`string`, required) The unique identifier for the team from which to list component sets.
-   **number\_of\_items\_per\_page** (`number`, optional) Specify the number of items to return per page in the results. Defaults to 30.
-   **start\_after\_cursor** (`number`, optional) Cursor indicating the starting point for retrieving component sets, exclusive with `end_before_cursor`. This cursor is an internally tracked integer not corresponding to any IDs.
-   **cursor\_before\_id** (`number`, optional) Cursor ID indicating the point before which to retrieve component sets. It must be exclusive with the ‘after’ cursor.

## FigmaApi.GetPublishedComponentSets



Retrieve published component sets from a Figma file.

**Parameters**

-   **main\_file\_key** (`string`, required) The main file key of the Figma file to list component sets from. Must not be a branch key.

## FigmaApi.GetFigmaComponentSet



Retrieve metadata for a Figma component set using its key.

**Parameters**

-   **component\_set\_key** (`string`, required) The unique key identifier for the Figma component set to retrieve metadata.

## FigmaApi.GetTeamStyles



Retrieve a list of published styles from a team’s library in Figma.

**Parameters**

-   **team\_id** (`string`, required) The unique identifier of the team from which to retrieve published styles.
-   **items\_per\_page** (`number`, optional) Specify the number of styles to return per page. Defaults to 30 if not provided.
-   **start\_after\_cursor** (`number`, optional) Cursor to start retrieving styles after a specific ID. Cannot be used with before. Internally tracked integer.
-   **cursor\_before\_id** (`number`, optional) Cursor for retrieving styles before a specific ID. Use this to paginate backwards. Exclusive with after.

## FigmaApi.GetPublishedStylesFromFile



Retrieve published styles from a Figma file library.

**Parameters**

-   **main\_file\_key** (`string`, required) Main file key to list styles from. Must not be a branch key.

## FigmaApi.GetStyleMetadata



Retrieve Figma style metadata by key.

**Parameters**

-   **style\_key** (`string`, required) The unique identifier of the Figma style to retrieve metadata for.

## FigmaApi.GetFigmaWebhooks



Retrieve a list of webhooks from Figma.

**Parameters**

-   **webhook\_context** (`string`, optional) Specify the context for the webhooks. Accepts ‘team’, ‘project’, or ‘file’.
-   **context\_identifier** (`string`, optional) The ID of the context to fetch attached webhooks. Cannot be used with plan\_api\_id.
-   **plan\_id\_for\_webhooks** (`string`, optional) The ID of your plan for retrieving webhooks across all accessible contexts. Cannot be used with context or context\_id.
-   **pagination\_cursor** (`string`, optional) Cursor for pagination when using plan\_api\_id. Provide next\_page or prev\_page from previous response to navigate pages.

## FigmaApi.CreateFigmaWebhook



Create a new webhook for Figma events.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## FigmaApi.GetFigmaWebhook



Retrieve a Figma webhook by its ID.

**Parameters**

-   **webhook\_id** (`string`, required) Unique identifier of the Figma webhook to retrieve.

## FigmaApi.UpdateFigmaWebhook



Update a Figma webhook by its ID.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **webhook\_id\_to\_update** (`string`, optional) Provide the ID of the Figma webhook you want to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## FigmaApi.DeleteFigmaWebhook



Delete a specified webhook in Figma.

**Parameters**

-   **webhook\_id\_to\_delete** (`string`, required) The unique identifier of the webhook you wish to delete. This ID is required for the deletion operation.

## FigmaApi.GetRecentWebhookRequests



Retrieve recent webhook requests from the last week.

**Parameters**

-   **webhook\_subscription\_id** (`string`, required) The ID of the webhook subscription for which to retrieve recent events.

## FigmaApi.RetrieveFigmaLocalVariables



Retrieve local and remote variables from a Figma file.

**Parameters**

-   **file\_or\_branch\_key** (`string`, required) The key for the file or branch to retrieve variables from in Figma. If a branch, use `GET /v1/files/:key` with the `branch_data` query param to get the branch key.

## FigmaApi.GetPublishedVariables



Retrieve published variables from a Figma file.

**Parameters**

-   **main\_file\_key** (`string`, required) The key of the Figma file to retrieve published variables from. Only use the main file key, not a branch key.

## FigmaApi.ManageFigmaVariables



Manage and organize Figma variable collections in bulk.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **file\_identifier** (`string`, optional) Specifies the Figma file or branch key to modify variables. Retrieve branch key using `GET /v1/files/:key` with `branch_data` parameter. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## FigmaApi.GetDevResources



Retrieve development resources from a Figma file.

**Parameters**

-   **file\_key** (`string`, required) The main file key for fetching development resources from a Figma file. Ensure it is not a branch key.
-   **target\_node\_ids** (`string`, optional) Comma separated list of node IDs to filter dev resources. If left blank, returns resources for all nodes.

## FigmaApi.CreateBulkDevResources



Bulk create developer resources in multiple Figma files.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## FigmaApi.BulkUpdateFigmaDevResources



Update multiple Figma dev resources in bulk.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## FigmaApi.DeleteDevResource



Delete a dev resource from a Figma file.

**Parameters**

-   **target\_file\_key** (`string`, required) The main file key from which to delete the dev resource. Must not be a branch key.
-   **dev\_resource\_id** (`string`, required) The ID of the developer resource to delete from the Figma file.

## FigmaApi.GetLibraryAnalyticsComponentActions



Get analytics for library component actions.

**Parameters**

-   **group\_by\_dimension** (`string`, required) Specify the dimension to group the analytics data by. Options are ‘component’ or ‘team’.
-   **library\_file\_key** (`string`, required) The unique file key for the Figma library to retrieve analytics data from.
-   **data\_page\_cursor** (`string`, optional) Cursor indicating the specific page of data to fetch, obtained from a previous API call.
-   **earliest\_start\_date** (`string`, optional) ISO 8601 date string (YYYY-MM-DD) for the earliest week to include. Rounded back to the start of a week. Defaults to one year prior.
-   **latest\_inclusion\_date** (`string`, optional) ISO 8601 date string (YYYY-MM-DD) of the latest week to include, rounded forward to the nearest week’s end. Defaults to the latest computed week.

## FigmaApi.FetchComponentUsageData



Fetch library analytics component usage data by dimension.

**Parameters**

-   **group\_by\_dimension** (`string`, required) A dimension to group the returned analytics data. Choose between ‘component’ or ‘file’.
-   **library\_file\_key** (`string`, required) The file key of the library to fetch analytics data for. Required for specifying the target library.
-   **data\_page\_cursor** (`string`, optional) Cursor indicating which page of data to fetch, obtained from a prior API call.

## FigmaApi.GetLibraryStyleActions



Retrieve library style analytics actions data by dimension.

**Parameters**

-   **group\_by\_dimension** (`string`, required) Specify the dimension (‘style’ or ‘team’) to group the returned analytics data by.
-   **library\_file\_key** (`string`, required) The unique file key of the Figma library to retrieve analytics data for.
-   **pagination\_cursor** (`string`, optional) A cursor to indicate which page of data to fetch. Obtain this from a prior API call.
-   **earliest\_week\_start\_date** (`string`, optional) ISO 8601 date string (YYYY-MM-DD) for the earliest week to include. Dates round back to the nearest week start. Defaults to one year prior.
-   **end\_date** (`string`, optional) ISO 8601 date string (YYYY-MM-DD) for the latest week to include, rounded to the week’s end. Defaults to the latest computed week if not specified.

## FigmaApi.GetLibraryStyleUsageData



Retrieve style usage data from Figma library analytics.

**Parameters**

-   **group\_by\_dimension** (`string`, required) Dimension to group the returned analytics data by. Options are ‘style’ or ‘file’.
-   **library\_file\_key** (`string`, required) The file key of the Figma library to fetch analytics data for. This is required to specify the source library.
-   **pagination\_cursor** (`string`, optional) Cursor indicating which page of data to fetch, obtained from a previous API call.

## FigmaApi.FetchLibraryAnalyticsVariableActions



Retrieve library analytics variable actions data from Figma.

**Parameters**

-   **group\_by\_dimension** (`string`, required) A dimension to group the returned analytics data by. Options: ‘variable’, ‘team’.
-   **library\_file\_key** (`string`, required) The file key of the library for which to fetch analytics data.
-   **page\_cursor** (`string`, optional) Cursor to indicate which page of data to fetch, obtained from a previous API call.
-   **earliest\_week\_start\_date** (`string`, optional) ISO 8601 date string (YYYY-MM-DD) representing the earliest week to include. Rounded back to the nearest week’s start. Defaults to one year prior.
-   **end\_date** (`string`, optional) ISO 8601 date string (YYYY-MM-DD) for the latest week to include. Defaults to the latest computed week.

## FigmaApi.GetLibraryAnalyticsVariableUsages



Retrieve analytics on library variable usage.

**Parameters**

-   **group\_by\_dimension** (`string`, required) Specifies the dimension (‘variable’ or ‘file’) for grouping library analytics data.
-   **library\_file\_key** (`string`, required) The unique key of the library to fetch analytics data from.
-   **page\_cursor** (`string`, optional) A token to fetch the specific page of results, received from a previous API call.

* * *

## Auth

The Arcade Figma MCP Server uses the [Figma auth provider](/references/auth-providers/figma.md) to connect to users’ Figma accounts.

With the Arcade Cloud Platform, there’s nothing to configure. Your users will see `Arcade` as the name of the application that’s requesting permission.

With a self-hosted installation of Arcade, you need to [configure the Figma auth provider](/references/auth-providers/figma.md#configuring-figma-auth) with your own Figma app credentials.

## Reference

Below is a reference of enumerations used by some of the tools in the FigmaApi MCP Server:

### ToolMode

-   **GET\_REQUEST\_SCHEMA**: `get_request_schema`
-   **EXECUTE**: `execute`

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_figma_api ``` Learn more](/guides/deployment-hosting.md)

Last updated on January 5, 2026

[ClickupApi](/en/resources/integrations/productivity/clickup-api.md)
[LumaApi](/en/resources/integrations/productivity/luma-api.md)
