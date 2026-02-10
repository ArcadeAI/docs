---
title: "Google Slides"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Productivity & Docs](/en/resources/integrations/productivity/asana.md)
Google Slides

# Google Slides

Arcade Optimized

**Description:** Enable agents to interact with GoogleSlides

**Author:** Arcade

**Auth:** User authorization

[![PyPI Version](https://img.shields.io/pypi/v/arcade_google_slides)](https://pypi.org/project/arcade_google_slides/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_google_slides)](https://pypi.org/project/arcade_google_slides/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_google_slides)](https://pypi.org/project/arcade_google_slides/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_google_slides)](https://pypi.org/project/arcade_google_slides/)

The GoogleSlides MCP Server provides a set of tools for interacting with Google Slides presentations. These tools enable users and AI applications to:

-   Create new presentations and add slides.
-   Comment on specific slides and list all comments in a presentation.
-   Search for presentations in Google Drive.
-   Retrieve and convert presentation content to markdown format.

## Available Tools

Tool Name

Description

GoogleSlides.CommentOnPresentation

Comment on a specific slide by its index in a Google Slides presentation.

GoogleSlides.ListPresentationComments

List all comments on the specified Google Slides presentation.

GoogleSlides.CreatePresentation

Create a new Google Slides presentation

GoogleSlides.CreateSlide

Create a new slide at the end of the specified presentation

GoogleSlides.SearchPresentations

Searches for presentations in the user's Google Drive.

GoogleSlides.WhoAmI

Get comprehensive user profile and Google Slides environment information.

GoogleSlides.GenerateGoogleFilePickerUrl

Generate a Google File Picker URL for user-driven file selection and authorization.

GoogleSlides.GetPresentationAsMarkdown

Get the specified Google Slides presentation and convert it to markdown.

If you need to perform an action that’s not listed here, you can [get in touch with us](mailto:contact@arcade.dev) to request a new tool, or [create your own tools](/guides/create-tools/tool-basics/build-mcp-server.md).

Each tool requires specific Google OAuth scopes to function. You’ll find the required scopes listed in a blue info box at the end of each tool’s documentation below. For more information about configuring OAuth and tips for moving to production, see the \[Google auth provider documentation\](/references/auth-providers/google.

The `drive.file` scope only grants access to files that were created or opened by your application. If you need broader access to a user’s Google Drive presentations (e.g., to access presentations created by other applications), you’ll need to create your own Google OAuth provider and request the `drive.readonly` or `drive` scope. Note that these broader scopes are **not supported** by Arcade’s default Google OAuth provider.

## Find required scopes

Select the tools you plan to use to see the OAuth scopes your application needs:

### Scope calculator

Select the tools you plan to use to see the required OAuth scopes.

CommentOnPresentationListPresentationCommentsCreatePresentationCreateSlideSearchPresentationsGenerateGoogleFilePickerUrlGetPresentationAsMarkdownWhoAmI

#### Required scopes

Select tools above to see required scopes

* * *

## GoogleSlides.CommentOnPresentation



Comment on a specific slide by its index in a Google Slides presentation.

**Parameters**

-   **presentation\_id** (`string`, required) The ID of the presentation to comment on
-   **comment\_text** (`string`, required) The comment to add to the slide

`https://www.googleapis.com/auth/drive.file`

* * *

## GoogleSlides.ListPresentationComments



List all comments on the specified Google Slides presentation.

**Parameters**

-   **presentation\_id** (`string`, required) The ID of the presentation to list comments for
-   **include\_deleted** (`boolean`, optional) Whether to include deleted comments in the results. Defaults to False.

`https://www.googleapis.com/auth/drive.file`

* * *

## GoogleSlides.CreatePresentation



Create a new Google Slides presentation

**Parameters**

-   **title** (`string`, required) The title of the presentation to create
-   **subtitle** (`string`, optional) The subtitle of the presentation to create

`https://www.googleapis.com/auth/drive.file`

* * *

## GoogleSlides.CreateSlide



Create a new slide at the end of the specified presentation

**Parameters**

-   **presentation\_id** (`string`, required) The ID of the presentation to create the slide in
-   **slide\_title** (`string`, required) The title of the slide to create
-   **slide\_body** (`string`, required) The body (text) of the slide to create

`https://www.googleapis.com/auth/drive.file`

* * *

## GoogleSlides.SearchPresentations



Searches for presentations in the user’s Google Drive.

**Parameters**

-   **presentation\_contains** (`array[string]`, optional) Keywords or phrases that must be in the presentation title or content. Provide a list of keywords or phrases if needed.
-   **presentation\_not\_contains** (`array[string]`, optional) Keywords or phrases that must NOT be in the presentation title or content. Provide a list of keywords or phrases if needed.
-   **search\_only\_in\_shared\_drive\_id** (`string`, optional) The ID of the shared drive to restrict the search to. If provided, the search will only return presentations from this drive. Defaults to None, which searches across all drives.
-   **include\_shared\_drives** (`boolean`, optional) Whether to include presentations from shared drives. Defaults to False (searches only in the user’s ‘My Drive’).
-   **include\_organization\_domain\_presentations** (`boolean`, optional) Whether to include presentations from the organization’s domain. This is applicable to admin users who have permissions to view organization-wide presentations in a Google Workspace account. Defaults to False.
-   **order\_by** (`Enum` OrderBy, optional) Sort order. Defaults to listing the most recently modified presentations first
-   **limit** (`integer`, optional) The number of presentations to list
-   **pagination\_token** (`string`, optional) The pagination token to continue a previous request

`https://www.googleapis.com/auth/drive.file`

* * *

## GoogleSlides.WhoAmI



Get comprehensive user profile and Google Slides environment information.

**Parameters**

This tool does not take any parameters.

-   `https://www.googleapis.com/auth/drive.file`
-   `https://www.googleapis.com/auth/userinfo.profile`
-   `https://www.googleapis.com/auth/userinfo.email`

* * *

## GoogleSlides.GenerateGoogleFilePickerUrl



Generate a Google File Picker URL for user-driven file selection and authorization.

**Parameters**

This tool does not take any parameters.

No additional scopes required (uses basic Google authentication).

* * *

## GoogleSlides.GetPresentationAsMarkdown



Get the specified Google Slides presentation and convert it to markdown.

**Parameters**

-   **presentation\_id** (`string`, required) The ID of the presentation to retrieve.

`https://www.googleapis.com/auth/drive.file`

* * *

## Auth

The Arcade GoogleSlides MCP Sever uses the \[Google auth provider\](/references/auth-providers/google to connect to users’ GoogleSlides accounts. Please refer to the \[Google auth provider\](/references/auth-providers/google documentation to learn how to configure auth.

## GoogleSlides Reference

Below is a reference of enumerations used by some tools in the GoogleSlides MCP Sever:

### OrderBy

-   **CREATED\_TIME**: `createdTime`
-   **CREATED\_TIME\_DESC**: `createdTime desc`
-   **FOLDER**: `folder`
-   **FOLDER\_DESC**: `folder desc`
-   **MODIFIED\_BY\_ME\_TIME**: `modifiedByMeTime`
-   **MODIFIED\_BY\_ME\_TIME\_DESC**: `modifiedByMeTime desc`
-   **MODIFIED\_TIME**: `modifiedTime`
-   **MODIFIED\_TIME\_DESC**: `modifiedTime desc`
-   **NAME**: `name`
-   **NAME\_DESC**: `name desc`
-   **NAME\_NATURAL**: `name_natural`
-   **NAME\_NATURAL\_DESC**: `name_natural desc`
-   **QUOTA\_BYTES\_USED**: `quotaBytesUsed`
-   **QUOTA\_BYTES\_USED\_DESC**: `quotaBytesUsed desc`
-   **RECENCY**: `recency`
-   **RECENCY\_DESC**: `recency desc`
-   **SHARED\_WITH\_ME\_TIME**: `sharedWithMeTime`
-   **SHARED\_WITH\_ME\_TIME\_DESC**: `sharedWithMeTime desc`
-   **STARRED**: `starred`
-   **STARRED\_DESC**: `starred desc`
-   **VIEWED\_BY\_ME\_TIME**: `viewedByMeTime`
-   **VIEWED\_BY\_ME\_TIME\_DESC**: `viewedByMeTime desc`

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_google_slides ``` Learn more](/guides/deployment-hosting.md)

Last updated on February 7, 2026

[Reference](/en/resources/integrations/productivity/google-sheets/reference.md)
[Jira](/en/resources/integrations/productivity/jira.md)
