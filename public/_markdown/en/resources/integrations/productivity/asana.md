---
title: "Asana"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
Productivity & DocsAsana

# Asana

Arcade Optimized

**Description:** Enable agents to interact with tasks, projects, and workspaces in Asana.

**Author:** Arcade

**Auth:** User authorization

[![PyPI Version](https://img.shields.io/pypi/v/arcade_asana)](https://pypi.org/project/arcade_asana/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_asana)](https://pypi.org/project/arcade_asana/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_asana)](https://pypi.org/project/arcade_asana/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_asana)](https://pypi.org/project/arcade_asana/)

The Arcade Asana MCP Server provides a pre-built set of tools for interacting with Asana. These tools make it easy to build agents and AI apps that can:

-   Manage teams, projects, and workspaces.
-   Create, update, and search for tasks.
-   Retrieve data about tasks, projects, workspaces, users, etc.
-   Manage task attachments.

## Available Tools

Tool Name

Description

Asana.GetProjectById

Get a project by its ID.

Asana.ListProjects

List projects associated to one or more teams.

Asana.GetTagById

Get a tag by its ID.

Asana.CreateTag

Create a tag.

Asana.ListTags

List tags associated to one or more workspaces.

Asana.GetTasksWithoutId

Search and retrieve tasks using full-text and filters when you don't have the task ID.

Asana.GetTaskById

Get a task by its ID.

Asana.GetSubtasksFromATask

Get subtasks associated to a task.

Asana.UpdateTask

Update a task.

Asana.MarkTaskAsCompleted

Mark a task as completed.

Asana.CreateTask

Create a task.

Asana.AttachFileToTask

Attach a file to a task.

Asana.ListUsers

List users that are members of one or more workspaces.

Asana.GetUserById

Get a user by their ID.

Asana.GetWorkspaceById

Get a workspace by its ID.

Asana.ListWorkspaces

List the user workspaces.

Asana.GetTeamById

Get a team by its ID.

Asana.ListTeamsTheCurrentUserIsAMemberOf

List the teams the current user is a member of.

Asana.ListTeams

List teams associated to a workspace.

If you need to perform an action that’s not listed here, you can [get in touch with us](mailto:contact@arcade.dev) to request a new tool, or [create your own tools](/guides/create-tools/tool-basics/build-mcp-server.md).

## Asana.GetProjectById



Get a project by its ID.

**Parameters**

-   **project\_id** _(string, required)_ The ID of the project. E.g. ‘1234567890’

## Asana.ListProjects



List projects associated to one or more teams.

**Parameters**

-   **team\_id** _(string, optional)_ The team ID to get projects from. Defaults to None (does not filter by team).
-   **workspace\_id** _(string, optional)_ The workspace ID to get projects from. Defaults to None. If not provided and the user has only one workspace, it will use that workspace. If not provided and the user has multiple workspaces, it will raise an error listing the available workspaces.
-   **limit** _(int, optional, Defaults to `100`)_ The maximum number of projects to return. Min is 1, max is 100. Defaults to 100.
-   **next\_page\_token** _(string, optional)_ The token to retrieve the next page of projects. Defaults to None (start from the first page).

## Asana.GetTagById



Get a tag by its ID.

**Parameters**

-   **tag\_id** _(string, required)_ The ID of the tag. E.g. ‘1234567890’

## Asana.CreateTag



Create a tag.

**Parameters**

-   **name** _(string, required)_ The name of the tag. E.g. ‘Priority’.
-   **description** _(string, optional)_ The description of the tag. Defaults to None (no description).
-   **color** _(list of enum [TagColor](/resources/integrations/productivity/asana/reference.md#tagcolor)
    , optional)_ The color of the tag. Defaults to None (no color).
-   **workspace\_id** _(string, None)_ The ID of the workspace to create the tag in. If not provided, it will associate the tag to the user’s workspace, if there’s only one. Otherwise, it will raise an error.

## Asana.ListTags



List tags associated to one or more workspaces.

**Parameters**

-   **workspace\_id** _(string, optional)_ The workspace ID to retrieve tags from. Defaults to None. If not provided and the user has only one workspace, it will use that workspace. If not provided and the user has multiple workspaces, it will raise an error listing the available workspaces.
-   **limit** _(int, optional, Defaults to `100`)_ Maximum number of items to return. Defaults to 100. Maximum allowed is 100.
-   **next\_page\_token** _(string, optional)_ The token to retrieve the next page of tags. Defaults to None (start from the first page).

## Asana.GetTasksWithoutId



Search and retrieve tasks using full-text and filters when you don’t have the task ID.

**Parameters**

-   **keywords** _(string, optional)_ Keywords to search for tasks. Matches against the task name and description. Defaults to None (no keyword filter).
-   **workspace\_id** _(string, optional)_ The workspace ID to search for tasks. Defaults to None. If not provided and the user has only one workspace, it will use that workspace. If not provided and the user has multiple workspaces, it will raise an error listing the available workspaces.
-   **assignee\_id** _(string, optional)_ The ID of the user to filter tasks assigned to. Defaults to None (does not filter by assignee).
-   **project** _(string, optional)_ The ID or name of the project to filter tasks. Defaults to None (does not filter by project).
-   **team\_id** _(string, optional)_ The ID of the team to filter tasks. Defaults to None (does not filter by team).
-   **tags** _(list of strings, optional)_ Restricts the search to tasks associated to the given tags. Each item in the list can be a tag name (e.g. ‘My Tag’) or a tag ID (e.g. ‘1234567890’). Defaults to None (searches tasks associated to any tag or no tag).
-   **due\_on** _(string, optional)_ Match tasks that are due exactly on this date. Format: YYYY-MM-DD. Ex: ‘2025-01-01’. Defaults to None (searches tasks due on any date or without a due date).
-   **due\_on\_or\_after** _(string, optional)_ Match tasks that are due on OR AFTER this date. Format: YYYY-MM-DD. Ex: ‘2025-01-01’. Defaults to None (searches tasks due on any date or without a due date).
-   **due\_on\_or\_before** _(string, optional)_ Match tasks that are due on OR BEFORE this date. Format: YYYY-MM-DD. Ex: ‘2025-01-01’. Defaults to None (searches tasks due on any date or without a due date).
-   **completed** _(bool, optional)_ Match tasks that are completed. Defaults to False (tasks that are NOT completed).
-   **start\_on** _(string, optional)_ Match tasks that started on this date. Format: YYYY-MM-DD. Ex: ‘2025-01-01’. Defaults to None (searches tasks started on any date or without a start date).
-   **start\_on\_or\_after** _(string, optional)_ Match tasks that started on OR AFTER this date. Format: YYYY-MM-DD. Ex: ‘2025-01-01’. Defaults to None (searches tasks started on any date or without a start date).
-   \*\* start\_on\_or\_before\*\* _(string, optional)_ Match tasks that started on OR BEFORE this date. Format: YYYY-MM-DD. Ex: ‘2025-01-01’. Defaults to None (searches tasks started on any date or without a start date).
-   **completed** _(bool, optional)_ Match tasks that are completed. Defaults to False (tasks that are NOT completed).
-   **limit** _(int, optional, Defaults to `20`)_ Maximum number of tasks to return. Min of 1, max of 20. Defaults to 20.
-   **sort\_by** _(enum [TaskSortBy](/resources/integrations/productivity/asana/reference.md#tasksortby)
    , optional)_ The field to sort the tasks by. Defaults to TaskSortBy.MODIFIED\_AT.
-   **sort\_order** _(enum [SortOrder](/resources/integrations/productivity/asana/reference.md#sortorder)
    , optional)_ The order to sort the tasks by. Defaults to SortOrder.DESCENDING.

## Asana.GetTaskById



Get a task by its ID.

**Parameters**

-   **task\_id** _(string, required)_ The ID of the task. E.g. ‘1234567890’
-   **max\_subtasks** _(int, optional)_ The maximum number of subtasks to return. Min of 0 (no subtasks), max of 100. Defaults to 100.

## Asana.GetSubtasksFromATask



Get subtasks associated to a task.

**Parameters**

-   **task\_id** _(string, required)_ The ID of the task. E.g. ‘1234567890’
-   **limit** _(int, optional, Defaults to `100`)_ Maximum number of subtasks to return. Defaults to 100. Maximum allowed is 100.
-   **next\_page\_token** _(string, optional)_ The token to retrieve the next page of subtasks. Defaults to None (start from the first page).

## Asana.UpdateTask



Update a task.

**Parameters**

-   **task\_id** _(string, required)_ The ID of the task. E.g. ‘1234567890’
-   **name** _(string, optional)_ The new name of the task. Defaults to None (does not change the current name).
-   **description** _(string, optional)_ The new description of the task. Defaults to None (does not change the current description).
-   **completed** _(bool, optional)_ The new completion status of the task. Provide True to mark the task as completed, False to mark it as not completed. Defaults to None (does not change the current completion status).
-   **start\_date** _(string, optional)_ The new start date of the task. Format: YYYY-MM-DD. Ex: ‘2025-01-01’. Defaults to None (does not change the current start date).
-   **due\_date** _(string, optional)_ The new due date of the task. Format: YYYY-MM-DD. Ex: ‘2025-01-01’. Defaults to None (does not change the current due date).
-   **assignee\_id** _(string, optional)_ The ID of the user to assign the task to. Defaults to None (does not change the current assignee).

## Asana.MarkTaskAsCompleted



Mark a task as completed.

**Parameters**

-   **task\_id** _(string, required)_ The ID of the task. E.g. ‘1234567890’

## Asana.CreateTask



Create a task.

**Parameters**

-   **name** _(string, required)_ The name of the task. E.g. ‘My Task’
-   **description** _(string, optional)_ The description of the task. Defaults to None (no description).
-   **start\_date** _(string, optional)_ The start date of the task. Format: YYYY-MM-DD. Ex: ‘2025-01-01’. Defaults to None (no start date).
-   **due\_date** _(string, optional)_ The due date of the task. Format: YYYY-MM-DD. Ex: ‘2025-01-01’. Defaults to None (no due date).
-   **parent\_task\_id** _(string, optional)_ The ID of the parent task. Defaults to None (no parent task).
-   **workspace\_id** _(string, optional)_ The ID of the workspace to associate the task to. Defaults to None.
-   **project** _(string, optional)_ The ID or name of the project to associate the task to. Defaults to None (no project).
-   **assignee\_id** _(string, optional)_ The ID of the user to assign the task to. Defaults to None (does not assign the task to anyone).
-   **tags** _(list of strings, optional)_ The tags to associate with the task. Multiple tags can be provided in the list. Each item in the list can be a tag name (e.g. ‘My Tag’) or a tag ID (e.g. ‘1234567890’). If a tag name does not exist, it will be automatically created with the new task. Defaults to None (no tags associated).

Observations:

A new task must be associated to at least one of the following: parent\_task\_id, project, or workspace\_id. If none of these are provided and the account has only one workspace, the task will be associated to that workspace. If none are provided and the account has multiple workspaces, an error will be raised with a list of available workspaces.

## Asana.AttachFileToTask



Attach a file to a task.

**Parameters**

-   **task\_id** _(string, required)_ The ID of the task. E.g. ‘1234567890’
-   **file\_name** _(string, required)_ The name of the file to attach with format extension. E.g. ‘Image.png’ or ‘Report.pdf’.
-   **file\_content\_stream** _(string, required)_ The string contents of the file to attach. Use this if the file is a text file. Defaults to None.
-   **file\_content\_base64** _(string, required)_ The base64-encoded binary contents of the file. Use this for binary files like images or PDFs. Defaults to None.
-   **file\_content\_url** _(string, required)_ The URL of the file to attach. Use this if the file is hosted on an external URL. Defaults to None.
-   **file\_encoding** _(string, optional)_ The encoding of the file to attach. Only used with file\_content\_str. Defaults to ‘utf-8’.

Observations:

Provide exactly one of `file_content_str`, `file_content_base64`, or `file_content_url`, never more than one or none.

-   Use `file_content_str` for text files (will be encoded using `file_encoding`)
-   Use `file_content_base64` for binary files like images, PDFs, etc.
-   Use `file_content_url` if the file is hosted on an external URL

## Asana.ListUsers



List users that are members of one or more workspaces.

**Parameters**

-   **workspace\_id** _(string, optional)_ The workspace ID to list users from. Defaults to None. If no workspace ID is provided, it will use the current user’s workspace , if there’s only one. If the user has multiple workspaces, it will raise an error.
-   **limit** _(int, optional, Defaults to `500`)_ The maximum number of users to retrieve. Min is 1, max is 500. Defaults to 500.
-   **next\_page\_token** _(string, optional)_ The token to retrieve the next page of users. Defaults to None (start from the first page).

## Asana.GetUserById



Get a user by their ID.

**Parameters**

-   **user\_id** _(string, required)_ The ID of the user. E.g. ‘1234567890’

## Asana.GetTeamById



Get a team by its ID.

**Parameters**

-   **team\_id** _(string, required)_ The ID of the team. E.g. ‘1234567890’

## Asana.ListTeamsTheCurrentUserIsAMemberOf



List the teams the current user is a member of.

**Parameters**

-   **workspace\_id** _(string, optional)_ The workspace ID to list teams from. Defaults to None. If no workspace ID is provided, it will use the current user’s workspace , if there’s only one. If the user has multiple workspaces, it will raise an error.
-   **limit** _(int, optional, Defaults to `100`)_ The maximum number of teams to retrieve. Min is 1, max is 100. Defaults to 100.
-   **next\_page\_token** _(string, optional)_ The token to retrieve the next page of teams. Defaults to None (start from the first page).

## Asana.ListTeams



List teams associated to a workspace.

**Parameters**

-   **workspace\_id** _(string, optional)_ The workspace ID to list teams from. Defaults to None. If no workspace ID is provided, it will use the current user’s workspace, if there’s only one. If the user has multiple workspaces, it will raise an error listing the available workspaces.

## Asana.GetWorkspaceById



Get a workspace by its ID.

**Parameters**

-   **workspace\_id** _(string, required)_ The ID of the workspace. E.g. ‘1234567890’

## Asana.ListWorkspaces



List the user workspaces.

**Parameters**

-   **limit** _(int, optional, Defaults to `100`)_ The maximum number of workspaces to retrieve. Min is 1, max is 100. Defaults to 100.
-   **next\_page\_token** _(string, optional)_ The token to retrieve the next page of workspaces. Defaults to None (start from the first page).

## Auth

The Arcade Asana MCP Sever uses the [Asana auth provider](/references/auth-providers/asana.md) to connect to users’ Asana accounts.

With the Arcade Cloud Platform, there’s nothing to configure. Your users will see `Arcade` as the name of the application that’s requesting permission.

With a self-hosted installation of Arcade, you need to [configure the Asana auth provider](/references/auth-providers/asana.md#configuring-your-own-asana-auth-provider-in-arcade) with your own Asana app credentials.

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_asana ``` Learn more](/guides/deployment-hosting.md)

Last updated on February 6, 2026

[Overview](/en/resources/integrations.md)
[Reference](/en/resources/integrations/productivity/asana/reference.md)
