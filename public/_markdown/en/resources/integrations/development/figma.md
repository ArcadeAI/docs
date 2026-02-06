---
title: "Figma"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Developer Tools](/en/resources/integrations/development/e2b.md)
Figma

# Figma

**Description:** Enable agents to interact with Figma

**Author:** Arcade

**Auth:** User authorization

[![PyPI Version](https://img.shields.io/pypi/v/arcade_figma)](https://pypi.org/project/arcade_figma/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_figma)](https://pypi.org/project/arcade_figma/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_figma)](https://pypi.org/project/arcade_figma/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_figma)](https://pypi.org/project/arcade_figma/)

The Figma MCP Server provides a comprehensive set of tools for interacting with Figma’s design files, components, and collaboration features. Built on the [Figma REST API](https://developers.figma.com/docs/rest-api/) , this MCP Server enables you to:

-   **Files**: Access Figma file structures, pages, specific nodes, and export designs as images
-   **Components**: Browse published components, component sets (variants), and styles from files or team libraries
-   **Comments**: Read and add comments to Figma files, reply to existing discussions
-   **Navigation**: Access team projects and files (requires private OAuth app)
-   **User Context**: Get authenticated user profile information

## Available tools

Tool Name

Description

Figma.WhoAmI

Get the authenticated user's profile

Figma.GetFile

Get a Figma file's structure including pages and metadata

Figma.GetPages

Get a list of pages in a Figma file

Figma.GetFileNodes

Get specific nodes from a Figma file by their IDs

Figma.ExportImage

Export Figma frames/nodes as images

Figma.GetComponents

Get published components from a file or team library

Figma.GetComponent

Get metadata for a specific component by its key

Figma.GetStyles

Get published styles from a file or team library

Figma.GetStyle

Get metadata for a specific style by its key

Figma.GetComponentSets

Get published component sets from a file or team library

Figma.GetComponentSet

Get metadata for a specific component set by its key

Figma.GetComments

Get comments on a Figma file

Figma.AddCommentOrReply

Add a comment to a Figma file or reply to an existing comment

Figma.GetTeamProjects

Get all projects in a Figma team

Figma.GetProjectFiles

Get all files in a Figma project

If you need to perform an action that’s not listed here, you can [get in touch with us](mailto:contact@arcade.dev) to request a new tool, or [create your own tools](/guides/create-tools/tool-basics/build-mcp-server.md).

Each tool includes behavior hints as defined by the [Model Context Protocol](https://modelcontextprotocol.io/specification/2025-06-18/server/tools#tool)  specification. These hints are not yet supported, but we’ve added them to help you understand the side effects of each tool:

-   `readOnlyHint` — The tool only reads data, no modifications
-   `openWorldHint` — The tool interacts with external systems (Figma’s API)
-   `destructiveHint` — The tool may cause irreversible changes (e.g., deletion)
-   `idempotentHint` — Repeated calls with the same arguments have no additional effect

The `projects:read` scope is **ONLY available in private Figma OAuth apps**. This scope is required for:

-   `GetTeamProjects` — Get all projects in a Figma team
-   `GetProjectFiles` — Get all files in a Figma project

If you need these navigation tools, you must create a private OAuth app in your Figma organization. All other tools work with public OAuth apps.

[Learn more about Figma OAuth scopes](https://developers.figma.com/docs/rest-api/scopes/)
 

* * *

## User context tools

### Figma.WhoAmI

Get the authenticated user’s profile.



Returns the current user’s information including their name, email, and profile image.

**Parameters**

This tool takes no parameters.

-   `current_user:read` — Read access to the authenticated user’s profile

[View Figma Users API documentation](https://developers.figma.com/docs/rest-api/users/)
 

-   `readOnlyHint: true` - Only reads user profile, no modifications
-   `openWorldHint: true` - Interacts with Figma’s external API

Makes 1 API call.

* * *

## File tools

### Figma.GetFile

Get a Figma file’s structure including pages and metadata.



Returns the file name, version, thumbnail, and list of pages. Use depth parameter to limit how much of the tree is returned for large files.

**Parameters**

-   **file\_key** (`string`, **required**) File key. Can be found in Figma URL: [https://www.figma.com/file/{FILE\_KEY}/](https://www.figma.com/file/%7BFILE_KEY%7D/)
     …
-   **depth** (`integer`, _optional_) How deep to traverse the node tree. Default traverses full depth. Use 1 for pages only, 2 for pages and top-level frames. Default is None.

-   `file_content:read` — Read access to file structure and content

[View Figma Files API documentation](https://developers.figma.com/docs/rest-api/files/)
 

-   `readOnlyHint: true` - Only reads file data, no modifications
-   `openWorldHint: true` - Interacts with Figma’s external API

Makes 1 API call.

* * *

### Figma.GetPages

Get a list of pages in a Figma file.



Returns page IDs and names without the full node tree.

**Parameters**

-   **file\_key** (`string`, **required**) File key. Can be found in Figma URL: [https://www.figma.com/file/{FILE\_KEY}/](https://www.figma.com/file/%7BFILE_KEY%7D/)
     …

-   `file_content:read` — Read access to file structure and content

[View Figma Files API documentation](https://developers.figma.com/docs/rest-api/files/)
 

-   `readOnlyHint: true` - Only reads file data, no modifications
-   `openWorldHint: true` - Interacts with Figma’s external API

Makes 1 API call.

* * *

### Figma.GetFileNodes

Get specific nodes from a Figma file by their IDs.



Returns the requested nodes with their properties and optionally their children. Use this to fetch specific parts of a file without loading the entire document.

**Parameters**

-   **file\_key** (`string`, **required**) File key. Can be found in Figma URL: [https://www.figma.com/file/{FILE\_KEY}/](https://www.figma.com/file/%7BFILE_KEY%7D/)
     …
-   **node\_ids** (`array`, **required**) List of node IDs to retrieve. Node IDs can be found in Figma URL after ?node-id= parameter (URL encoded, e.g., ‘0:1’ or ‘1-2’).
-   **depth** (`integer`, _optional_) How deep to traverse from each node. Use 1 for direct children only. Default returns all descendants. Default is None.

-   `file_content:read` — Read access to file structure and content

[View Figma Files API documentation](https://developers.figma.com/docs/rest-api/files/)
 

-   `readOnlyHint: true` - Only reads file data, no modifications
-   `openWorldHint: true` - Interacts with Figma’s external API

Makes 1 API call.

* * *

### Figma.ExportImage

Export Figma frames/nodes as images.



Returns temporary URLs to download images. URLs valid for approximately 14 days.

**Parameters**

-   **file\_key** (`string`, **required**) File key. Can be found in Figma URL: [https://www.figma.com/file/{FILE\_KEY}/](https://www.figma.com/file/%7BFILE_KEY%7D/)
     …
-   **node\_ids** (`array`, **required**) List of node IDs to export as images.
-   **image\_format** (`enum`, _optional_) Image format. Options: `png`, `jpg`, `svg`, `pdf`. Default is `png`.
-   **scale** (`number`, _optional_) Scale factor (0.01 to 4.0). Only applies to PNG/JPG. Default is None (1.0).

-   `file_content:read` — Read access to file content for image export

[View Figma Files API documentation](https://developers.figma.com/docs/rest-api/files/#get-image-fills)
 

-   `readOnlyHint: true` - Only exports, no modifications
-   `openWorldHint: true` - Interacts with Figma’s external API

Makes 1 API call.

* * *

## Component tools

### Figma.GetComponents

Get published components from a file or team library.



For file: Returns all published components in the file. For team: Returns paginated list of components across team library.

**Parameters**

-   **source** (`enum`, **required**) Source type. Options: `file`, `team`.
-   **source\_id** (`string`, **required**) File key (if source=‘file’) or team ID (if source=‘team’).
-   **page\_size** (`integer`, _optional_) Number of items per page (team mode only, 1-50). Default is 10.
-   **after\_cursor** (`integer`, _optional_) Cursor for next page (team mode only). Default is None.

-   `library_content:read` — Read access to published library content (file mode)
-   `team_library_content:read` — Read access to team library content (team mode)

[View Figma Component Types API documentation](https://developers.figma.com/docs/rest-api/component-types/)
 

-   `readOnlyHint: true` - Only reads component data, no modifications
-   `openWorldHint: true` - Interacts with Figma’s external API

Makes 1 API call.

* * *

### Figma.GetComponent

Get metadata for a specific component by its key.



**Parameters**

-   **component\_key** (`string`, **required**) The unique component key.

-   `library_assets:read` — Read access to individual library assets

[View Figma Component Types API documentation](https://developers.figma.com/docs/rest-api/component-types/)
 

-   `readOnlyHint: true` - Only reads component data, no modifications
-   `openWorldHint: true` - Interacts with Figma’s external API

Makes 1 API call.

* * *

### Figma.GetStyles

Get published styles from a file or team library.



For file: Returns all published styles in the file. For team: Returns paginated list of styles across team library.

**Parameters**

-   **source** (`enum`, **required**) Source type. Options: `file`, `team`.
-   **source\_id** (`string`, **required**) File key (if source=‘file’) or team ID (if source=‘team’).
-   **page\_size** (`integer`, _optional_) Number of items per page (team mode only, 1-50). Default is 10.
-   **after\_cursor** (`integer`, _optional_) Cursor for next page (team mode only). Default is None.

-   `library_content:read` — Read access to published library content (file mode)
-   `team_library_content:read` — Read access to team library content (team mode)

[View Figma Component Types API documentation](https://developers.figma.com/docs/rest-api/component-types/)
 

-   `readOnlyHint: true` - Only reads style data, no modifications
-   `openWorldHint: true` - Interacts with Figma’s external API

Makes 1 API call.

* * *

### Figma.GetStyle

Get metadata for a specific style by its key.



**Parameters**

-   **style\_key** (`string`, **required**) The unique style key.

-   `library_assets:read` — Read access to individual library assets

[View Figma Component Types API documentation](https://developers.figma.com/docs/rest-api/component-types/)
 

-   `readOnlyHint: true` - Only reads style data, no modifications
-   `openWorldHint: true` - Interacts with Figma’s external API

Makes 1 API call.

* * *

### Figma.GetComponentSets

Get published component sets (groups of component variants) from a file or team library.



Component sets are groups of related component variants, like a Button with states: default, hover, pressed, disabled.

For file: Returns all published component sets in the file. For team: Returns paginated list of component sets across team library.

**Parameters**

-   **source** (`enum`, **required**) Source type. Options: `file`, `team`.
-   **source\_id** (`string`, **required**) File key (if source=‘file’) or team ID (if source=‘team’).
-   **page\_size** (`integer`, _optional_) Number of items per page (team mode only, 1-50). Default is 10.
-   **after\_cursor** (`integer`, _optional_) Cursor for next page (team mode only). Default is None.

-   `library_content:read` — Read access to published library content (file mode)
-   `team_library_content:read` — Read access to team library content (team mode)

[View Figma Component Types API documentation](https://developers.figma.com/docs/rest-api/component-types/)
 

-   `readOnlyHint: true` - Only reads component set data, no modifications
-   `openWorldHint: true` - Interacts with Figma’s external API

Makes 1 API call.

* * *

### Figma.GetComponentSet

Get metadata for a specific component set by its key.



A component set is a group of related component variants.

**Parameters**

-   **component\_set\_key** (`string`, **required**) The unique component set key.

-   `library_assets:read` — Read access to individual library assets

[View Figma Component Types API documentation](https://developers.figma.com/docs/rest-api/component-types/)
 

-   `readOnlyHint: true` - Only reads component set data, no modifications
-   `openWorldHint: true` - Interacts with Figma’s external API

Makes 1 API call.

* * *

## Comment tools

### Figma.GetComments

Get comments on a Figma file.



Returns comments with pagination support.

**Parameters**

-   **file\_key** (`string`, **required**) File key. Can be found in Figma URL: [https://www.figma.com/file/{FILE\_KEY}/](https://www.figma.com/file/%7BFILE_KEY%7D/)
     …
-   **offset** (`integer`, _optional_) Starting offset for pagination. Default is 0.
-   **max\_items** (`integer`, _optional_) Maximum number of comments to return (1-50). Default is 10.

-   `file_comments:read` — Read access to file comments

[View Figma Comments API documentation](https://developers.figma.com/docs/rest-api/comments/)
 

-   `readOnlyHint: true` - Only reads comment data, no modifications
-   `openWorldHint: true` - Interacts with Figma’s external API

Makes 1 API call.

* * *

### Figma.AddCommentOrReply

Add a comment to a Figma file or reply to an existing comment.



If parent\_comment\_id is provided, creates a reply to that comment. Otherwise creates a new comment (optionally attached to a node).

**Parameters**

-   **file\_key** (`string`, **required**) File key. Can be found in Figma URL: [https://www.figma.com/file/{FILE\_KEY}/](https://www.figma.com/file/%7BFILE_KEY%7D/)
     …
-   **message** (`string`, **required**) The comment or reply text.
-   **parent\_comment\_id** (`string`, _optional_) Parent comment ID to reply to. If provided, creates a reply. Default is None.
-   **node\_id** (`string`, _optional_) Node ID to attach the comment to. Ignored for replies. Default is None.
-   **x** (`number`, _optional_) X position offset on the node. Only used with node\_id. Default is None.
-   **y** (`number`, _optional_) Y position offset on the node. Only used with node\_id. Default is None.

-   `file_comments:write` — Write access to create comments and replies

[View Figma Comments API documentation](https://developers.figma.com/docs/rest-api/comments/)
 

-   `readOnlyHint: false` - Creates new comment or reply
-   `destructiveHint: false` - Additive operation, creates new content
-   `idempotentHint: false` - Each call creates a new comment/reply
-   `openWorldHint: true` - Interacts with Figma’s external API

Makes 1 API call.

* * *

## Navigation tools

### Figma.GetTeamProjects

Get all projects in a Figma team.



Projects are containers within a team that group related design files.

**Parameters**

-   **team\_id** (`string`, **required**) Team ID. Can be found in Figma URL: [https://www.figma.com/files/team/{TEAM\_ID}/](https://www.figma.com/files/team/%7BTEAM_ID%7D/)
     …

-   `projects:read` — Read access to team projects

[View Figma Projects API documentation](https://developers.figma.com/docs/rest-api/projects/)
 

-   `readOnlyHint: true` - Only reads project data, no modifications
-   `openWorldHint: true` - Interacts with Figma’s external API

This tool requires the `projects:read` scope, which is **ONLY available for private Figma OAuth apps**. Public OAuth apps cannot use this scope.

Learn how to configure a private OAuth app in the [Figma auth provider documentation](/references/auth-providers/figma.md).

Makes 1 API call.

* * *

### Figma.GetProjectFiles

Get all files in a Figma project.



Files are Figma design documents containing pages and frames.

**Parameters**

-   **project\_id** (`string`, **required**) Project ID. Can be obtained from get\_team\_projects.

-   `projects:read` — Read access to project files

[View Figma Projects API documentation](https://developers.figma.com/docs/rest-api/projects/)
 

-   `readOnlyHint: true` - Only reads file data, no modifications
-   `openWorldHint: true` - Interacts with Figma’s external API

This tool requires the `projects:read` scope, which is **ONLY available for private Figma OAuth apps**. Public OAuth apps cannot use this scope.

Learn how to configure a private OAuth app in the [Figma auth provider documentation](/references/auth-providers/figma.md).

Makes 1 API call.

* * *

## Auth

The Arcade Figma MCP Server uses the [Figma auth provider](/references/auth-providers/figma.md) to connect to users’ Figma accounts. Please refer to the [Figma auth provider](/references/auth-providers/figma.md) documentation to learn how to configure auth.

The `projects:read` scope is **ONLY available in private Figma OAuth apps**. This scope is required for the navigation tools (`GetTeamProjects` and `GetProjectFiles`).

If you need these navigation tools, you must create a private OAuth app through your Figma organization settings. All other tools work with public OAuth apps.

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_figma ``` Learn more](/guides/deployment-hosting.md)

Last updated on January 5, 2026

[E2B](/en/resources/integrations/development/e2b.md)
[GitHub](/en/resources/integrations/development/github.md)
