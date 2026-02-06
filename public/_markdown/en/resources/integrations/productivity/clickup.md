---
title: "Clickup"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Productivity & Docs](/en/resources/integrations/productivity/asana.md)
ClickUp

# Clickup

Arcade Optimized

**Description:** Enable agents to interact with Clickup

**Author:** Arcade

**Auth:** User authorization

[![PyPI Version](https://img.shields.io/pypi/v/arcade_clickup)](https://pypi.org/project/arcade_clickup/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_clickup)](https://pypi.org/project/arcade_clickup/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_clickup)](https://pypi.org/project/arcade_clickup/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_clickup)](https://pypi.org/project/arcade_clickup/)

The ClickUp MCP Server provides tools to interact with ClickUp workspaces, projects (spaces/folders/lists), tasks, comments, and members. It enables building agents and apps that can:

-   Discover workspace structure and users.
-   Create, view, and modify tasks.
-   Manage task assignments and task planning metadata.
-   Work with comments and threaded replies.
-   Search for containers and people by approximate name when location is unknown.
-   Retrieve guidance for agent decision-making.

## Available Tools

Tool Name

Description

Clickup.GetTaskCommentReplies

Get threaded replies for a specific ClickUp comment with pagination support.

Clickup.CreateTaskCommentReply

Create a new threaded reply to an existing ClickUp comment.

Clickup.CreateTask

Create a new task in a ClickUp list with optional planning metadata.

Clickup.GetTaskById

Get detailed information about a specific task by its ID. Also supports custom task IDs

Clickup.UpdateTask

Update one or more fields of an existing ClickUp task.

Clickup.GetTasksByScope

Get filtered tasks from ClickUp with advanced filtering options.

Clickup.GetTasksByAssignees

Get filtered tasks assigned to specific team members with advanced filtering options.

Clickup.UpdateTaskAssignees

Update task assignees by adding and/or removing specific users.

Clickup.GetSpaces

Retrieve spaces from a ClickUp workspace.

Clickup.GetFoldersForSpace

Retrieve folders (also called directories, project categories, or project areas) from a

Clickup.GetListsForFolder

Retrieve task lists from a ClickUp folder (when users refer to a folder as a directory,

Clickup.GetListsForSpace

Retrieve all task lists from a ClickUp space by collecting lists from all folders within the

Clickup.GetStatusesForList

Retrieve the possible task statuses for a specific ClickUp list.

Clickup.GetMembersForWorkspace

Retrieve all team members from a specific ClickUp workspace.

Clickup.WhoAmI

Return current user profile and accessible workspaces (teams).

Clickup.GetSystemGuidance

Return static guidance intended solely to help agents make informed decisions.

Clickup.GetWorkspaceInsights

Return a brief overview for a workspace using the latest updated tasks to inform the user.

Clickup.GetTaskComments

Get comments for a specific ClickUp task with pagination support.

Clickup.CreateTaskComment

Create a new comment on a ClickUp task with optional assignment.

Clickup.UpdateTaskComment

Update an existing comment on a ClickUp task.

Clickup.FuzzySearchTasksByName

Search for tasks using fuzzy matching on task names.

Clickup.FuzzySearchListsByName

Search for lists using fuzzy matching on list names.

Clickup.FuzzySearchFoldersByName

Search for folders using fuzzy matching on folder names.

Clickup.FuzzySearchMembersByName

Search for workspace members using fuzzy matching on member names.

If you need to perform an action that’s not listed here, you can [get in touch with us](mailto:contact@arcade.dev) to request a new tool, or [create your own tools](/guides/create-tools/tool-basics/build-mcp-server.md).

## Clickup.GetTaskCommentReplies



Get threaded replies for a specific ClickUp comment with pagination support.

**Parameters**

-   **comment\_id** (`string`, required) The ClickUp comment ID to get replies for
-   **offset** (`integer`, optional) Starting position for offset-based retrieval (default: 0)
-   **limit** (`integer`, optional) Maximum number of replies to return (max: 50, default: 20)

## Clickup.CreateTaskCommentReply



Create a new threaded reply to an existing ClickUp comment.

**Parameters**

-   **comment\_id** (`string`, required) The ClickUp comment ID to reply to
-   **reply\_text** (`string`, required) The text content of the reply
-   **assignee\_id** (`integer`, optional) User ID to assign the reply to

## Clickup.CreateTask



Create a new task in a ClickUp list with optional planning metadata.

**Parameters**

-   **list\_id** (`string`, required) The ClickUp list ID where the task will be created
-   **task\_title** (`string`, required) The name/title of the task
-   **description** (`string`, optional) The description/content of the task
-   **priority** (`Enum` [TaskPriority](/resources/integrations/productivity/clickup/reference.md#TaskPriority)
    , optional) Task priority
-   **status** (`string`, optional) Task status label (string)
-   **parent\_task\_id** (`string`, optional) The parent task ID if this is a subtask
-   **start\_date** (`string`, optional) Date string in format YYYY-MM-DD or YYYY-MM-DD HH:MM\[:SS\]; ISO-8601 also supported
-   **due\_date** (`string`, optional) Date string in format YYYY-MM-DD or YYYY-MM-DD HH:MM\[:SS\]; ISO-8601 also supported
-   **sprint\_points** (`integer`, optional) The sprint points for the task

## Clickup.GetTaskById



Get detailed information about a specific task by its ID. Also supports custom task IDs

**Parameters**

-   **task\_id** (`string`, required) The task ID or custom task ID to retrieve
-   **include\_subtasks** (`boolean`, optional) Include subtask information (default: false )
-   **workspace\_id\_for\_custom\_id** (`string`, optional) The ClickUp workspace ID (provide this to use custom task IDs)

## Clickup.UpdateTask



Update one or more fields of an existing ClickUp task.

**Parameters**

-   **task\_id** (`string`, required) The ClickUp task ID to update
-   **task\_title** (`string`, optional) The new name/title of the task
-   **description** (`string`, optional) The new description/content of the task
-   **priority** (`Enum` [TaskPriority](/resources/integrations/productivity/clickup/reference.md#TaskPriority)
    , optional) Task priority
-   **status** (`string`, optional) Task status label (string)
-   **parent\_task\_id** (`string`, optional) The new parent task ID
-   **start\_date** (`string`, optional) Date string in format YYYY-MM-DD or YYYY-MM-DD HH:MM\[:SS\]; ISO-8601 also supported
-   **due\_date** (`string`, optional) Date string in format YYYY-MM-DD or YYYY-MM-DD HH:MM\[:SS\]; ISO-8601 also supported
-   **sprint\_points** (`integer`, optional) The new sprint points for the task

## Clickup.GetTasksByScope



Get filtered tasks from ClickUp with advanced filtering options.

**Parameters**

-   **workspace\_id** (`string`, required) The ClickUp workspace ID for GUI URL generation (should be a number)
-   **scope** (`Enum` [FilterScope](/resources/integrations/productivity/clickup/reference.md#FilterScope)
    , required) The scope to filter tasks by (all, spaces, folders, or lists)
-   **item\_ids** (`array[string]`, optional) List of IDs to get tasks from (required for spaces/folders/lists, ignored for ‘all’)
-   **offset** (`integer`, optional) Starting position for offset-based retrieval (default: 0)
-   **limit** (`integer`, optional) Maximum number of tasks to return (max: 50, default: 20)
-   **order\_by** (`Enum` [TaskOrderBy](/resources/integrations/productivity/clickup/reference.md#TaskOrderBy)
    , optional) Field to sort tasks by
-   **should\_sort\_by\_reverse** (`boolean`, optional) Whether to sort in descending order (default: False)
-   **statuses** (`array[string]`, optional) List of status strings to filter by
-   **include\_closed** (`boolean`, optional) Whether to include closed tasks (default: False)
-   **due\_date\_gt** (`string`, optional) Due date greater than (date string in format YYYY-MM-DD or YYYY-MM-DD HH:MM\[:SS\])
-   **due\_date\_lt** (`string`, optional) Due date less than (date string in format YYYY-MM-DD or YYYY-MM-DD HH:MM\[:SS\])
-   **date\_created\_gt** (`string`, optional) Created date greater than (date string in format YYYY-MM-DD or YYYY-MM-DD HH:MM\[:SS\])
-   **date\_created\_lt** (`string`, optional) Created date less than (date string in format YYYY-MM-DD or YYYY-MM-DD HH:MM\[:SS\])

## Clickup.GetTasksByAssignees



Get filtered tasks assigned to specific team members with advanced filtering options.

**Parameters**

-   **workspace\_id** (`string`, required) The ClickUp workspace ID for GUI URL generation (should be a number)
-   **assignees\_ids** (`array[integer]`, required) List of assignee user IDs to get tasks for
-   **offset** (`integer`, optional) Starting position for offset-based retrieval (default: 0)
-   **limit** (`integer`, optional) Maximum number of tasks to return (max: 50, default: 20)
-   **order\_by** (`Enum` [TaskOrderBy](/resources/integrations/productivity/clickup/reference.md#TaskOrderBy)
    , optional) Field to sort tasks by
-   **should\_sort\_by\_reverse** (`boolean`, optional) Whether to sort in descending order (default: False)
-   **statuses** (`array[string]`, optional) List of status strings to filter by
-   **include\_closed** (`boolean`, optional) Whether to include closed tasks (default: False)
-   **due\_date\_gt** (`string`, optional) Due date greater than (date string in format YYYY-MM-DD or YYYY-MM-DD HH:MM\[:SS\])
-   **due\_date\_lt** (`string`, optional) Due date less than (date string in format YYYY-MM-DD or YYYY-MM-DD HH:MM\[:SS\])
-   **date\_created\_gt** (`string`, optional) Created date greater than (date string in format YYYY-MM-DD or YYYY-MM-DD HH:MM\[:SS\])
-   **date\_created\_lt** (`string`, optional) Created date less than (date string in format YYYY-MM-DD or YYYY-MM-DD HH:MM\[:SS\])

## Clickup.UpdateTaskAssignees



Update task assignees by adding and/or removing specific users.

**Parameters**

-   **task\_id** (`string`, required) The ClickUp task ID to update assignees for
-   **assignee\_ids\_to\_add** (`array[integer]`, optional) List of user IDs to add as assignees
-   **assignee\_ids\_to\_remove** (`array[integer]`, optional) List of user IDs to remove from assignees

## Clickup.GetSpaces



Retrieve spaces from a ClickUp workspace.

**Parameters**

-   **workspace\_id** (`string`, required) The ClickUp workspace ID to get spaces from (should be a number)
-   **offset** (`integer`, optional) Starting position for offset-based retrieval (default: 0)
-   **limit** (`integer`, optional) Maximum number of spaces to return (max: 50, default: 50)
-   **include\_archived** (`boolean`, optional) Whether to include archived spaces (default: False)

## Clickup.GetFoldersForSpace



Retrieve folders (also called directories, project categories, or project areas) from a

**Parameters**

-   **space\_id** (`string`, required) The ClickUp space ID to get folders from
-   **workspace\_id** (`string`, required) The ClickUp workspace ID for GUI URL generation (should be a number)
-   **offset** (`integer`, optional) Starting position for offset-based retrieval (default: 0)
-   **limit** (`integer`, optional) Maximum number of folders to return (max: 50, default: 50)
-   **include\_archived** (`boolean`, optional) Whether to include archived, inactive, or deleted folders (default: False)

## Clickup.GetListsForFolder



Retrieve task lists from a ClickUp folder (when users refer to a folder as a “directory”,

**Parameters**

-   **folder\_id** (`string`, required) The ClickUp folder ID (also called directory ID) to get lists from
-   **workspace\_id** (`string`, required) The ClickUp workspace ID for GUI URL generation (should be a number)
-   **offset** (`integer`, optional) Starting position for offset-based retrieval (default: 0)
-   **limit** (`integer`, optional) Maximum number of lists to return (max: 50, default: 50)
-   **include\_archived** (`boolean`, optional) Whether to include archived, inactive, or completed lists (default: False)

## Clickup.GetListsForSpace



Retrieve all task lists from a ClickUp space by collecting lists from all folders within the

**Parameters**

-   **space\_id** (`string`, required) The ClickUp space ID to get lists from
-   **workspace\_id** (`string`, required) The ClickUp workspace ID for GUI URL generation (should be a number)
-   **offset** (`integer`, optional) Starting position for offset-based retrieval (default: 0)
-   **limit** (`integer`, optional) Maximum number of lists to return (max: 50, default: 50)
-   **include\_archived** (`boolean`, optional) Whether to include archived, inactive, or completed lists (default: False)

## Clickup.GetStatusesForList



Retrieve the possible task statuses for a specific ClickUp list.

**Parameters**

-   **list\_id** (`string`, required) The ClickUp list ID to retrieve possible task statuses for

## Clickup.GetMembersForWorkspace



Retrieve all team members from a specific ClickUp workspace.

**Parameters**

-   **workspace\_id** (`string`, required) The ID of the ClickUp workspace to get team members from (should be a number)
-   **offset** (`integer`, optional) Starting position for offset-based retrieval (default: 0)
-   **limit** (`integer`, optional) Maximum number of members to return (max: 50, default: 50)

## Clickup.WhoAmI



Return current user profile and accessible workspaces (teams).

**Parameters**

This tool does not take any parameters.

## Clickup.GetSystemGuidance



Return static guidance intended solely to help agents make informed decisions.

**Parameters**

This tool does not take any parameters.

## Clickup.GetWorkspaceInsights



Return a brief overview for a workspace using the latest updated tasks to inform the user.

**Parameters**

-   **workspace\_id** (`string`, required) The ClickUp workspace ID to summarize (should be a number)

## Clickup.GetTaskComments



Get comments for a specific ClickUp task with pagination support.

**Parameters**

-   **task\_id** (`string`, required) The ClickUp task ID to get comments for
-   **limit** (`integer`, optional) Number of comments to retrieve (max 25, default: 5)
-   **oldest\_comment\_id** (`string`, optional) ID of the oldest comment from previous call for pagination

## Clickup.CreateTaskComment



Create a new comment on a ClickUp task with optional assignment.

**Parameters**

-   **task\_id** (`string`, required) The ClickUp task ID to add a comment to
-   **comment\_text** (`string`, required) The text content of the comment
-   **assignee\_id** (`integer`, optional) User ID to assign the comment to (optional)

## Clickup.UpdateTaskComment



Update an existing comment on a ClickUp task.

**Parameters**

-   **comment\_id** (`string`, required) The ClickUp comment ID to update
-   **task\_id** (`string`, required) The ClickUp task ID the comment belongs to
-   **comment\_text** (`string`, optional) New text content for the comment (optional)
-   **assignee\_id** (`integer`, optional) User ID to assign the comment to (optional)
-   **resolution** (`Enum` [CommentResolution](/resources/integrations/productivity/clickup/reference.md#CommentResolution)
    , optional) Set comment resolution status (optional)

## Clickup.FuzzySearchTasksByName



Search for tasks using fuzzy matching on task names.

**Parameters**

-   **name\_to\_search** (`string`, required) Task name to search for (minimum 6 characters)
-   **workspace\_id** (`string`, required) The workspace ID to search tasks in (should be a number)
-   **scan\_size** (`integer`, optional) Number of recent tasks to scan (max 500 default: 500)
-   **include\_closed** (`boolean`, optional) Include closed/completed tasks (default: false)
-   **statuses** (`array[string]`, optional) Filter by specific ClickUp status names. Each list has its own statuses set.
-   **assignee\_ids** (`array[string]`, optional) Filter by assignee user IDs
-   **space\_ids** (`array[string]`, optional) Filter by ClickUp space IDs - limit search to specific spaces/teams
-   **folder\_ids** (`array[string]`, optional) Filter by ClickUp folder IDs - limit search to specific folders/projects
-   **list\_ids** (`array[string]`, optional) Filter by ClickUp list IDs - limit search to specific lists
-   **limit** (`integer`, optional) Maximum number of matches to return (max: 50, default: 10)

## Clickup.FuzzySearchListsByName



Search for lists using fuzzy matching on list names.

**Parameters**

-   **name\_to\_search** (`string`, required) List name to search for (minimum 6 characters)
-   **workspace\_id** (`string`, required) The workspace ID to search lists in (should be a number)
-   **scan\_size** (`integer`, optional) Number of lists to scan (in increments of 100, max 500 default: 500)
-   **space\_ids** (`array[string]`, optional) Filter by ClickUp space IDs - limit search to specific spaces/teams
-   **folder\_ids** (`array[string]`, optional) Filter by ClickUp folder IDs - limit search to specific folders/projects
-   **should\_include\_archived** (`boolean`, optional) Include archived lists (default: false)
-   **limit** (`integer`, optional) Maximum number of matches to return (max: 50, default: 10)

## Clickup.FuzzySearchFoldersByName



Search for folders using fuzzy matching on folder names.

**Parameters**

-   **name\_to\_search** (`string`, required) Folder name to search for (minimum 6 characters)
-   **workspace\_id** (`string`, required) The workspace ID to search folders in (should be a number)
-   **scan\_size** (`integer`, optional) Number of folders to scan (in increments of 100, max 500 default: 500)
-   **space\_ids** (`array[string]`, optional) Filter by ClickUp space IDs - limit search to specific spaces/teams
-   **should\_include\_archived** (`boolean`, optional) Include archived folders (default: false)
-   **limit** (`integer`, optional) Maximum number of matches to return (max: 50, default: 10)

## Clickup.FuzzySearchMembersByName



Search for workspace members using fuzzy matching on member names.

**Parameters**

-   **name\_to\_search** (`string`, required) Member name to search for (minimum 6 characters)
-   **workspace\_id** (`string`, required) The workspace ID to search members in (should be a number)
-   **scan\_size** (`integer`, optional) Number of members to scan (in increments of 100, max 500 default: 500)
-   **limit** (`integer`, optional) Maximum number of matches to return (max: 50, default: 10)

## Reference

Below is a reference of enumerations used by some of the tools in the Clickup MCP Sever:

## TaskPriority

-   **URGENT**: `URGENT`
-   **HIGH**: `HIGH`
-   **NORMAL**: `NORMAL`
-   **LOW**: `LOW`

## FilterScope

-   **ALL**: `all`
-   **SPACES**: `spaces`
-   **FOLDERS**: `folders`
-   **LISTS**: `lists`

## TaskOrderBy

-   **CREATED**: `created`
-   **UPDATED**: `updated`
-   **DUE\_DATE**: `due_date`

## CommentResolution

-   **SET\_AS\_RESOLVED**: `resolved`
-   **SET\_AS\_UNRESOLVED**: `unresolved`

## Auth

The Arcade Clickup MCP Sever uses the [Clickup auth provider](/references/auth-providers/clickup.md) to connect to users’ Clickup accounts. Please refer to the [Clickup auth provider](/references/auth-providers/clickup.md) documentation to learn how to configure auth.

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_clickup ``` Learn more](/guides/deployment-hosting.md)

Last updated on February 6, 2026

[Reference](/en/resources/integrations/productivity/asana/reference.md)
[Reference](/en/resources/integrations/productivity/clickup/reference.md)
