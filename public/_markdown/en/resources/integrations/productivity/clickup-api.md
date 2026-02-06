---
title: "ClickupApi"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Productivity & Docs](/en/resources/integrations/productivity/asana.md)
ClickupApi

# ClickupApi

Arcade Unoptimized

**Description:** Tools that enable LLMs to interact directly with the clickup API.

**Author:** Arcade

**Auth:** User authorization

[![PyPI Version](https://img.shields.io/pypi/v/arcade_clickup_api)](https://pypi.org/project/arcade_clickup_api/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_clickup_api)](https://pypi.org/project/arcade_clickup_api/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_clickup_api)](https://pypi.org/project/arcade_clickup_api/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_clickup_api)](https://pypi.org/project/arcade_clickup_api/)

ClickupApi is a [Unoptimized MCP Server](/guides/create-tools/improve/types-of-tools.md#unoptimized-tools)
: each tool mirrors one HTTP endpoint and offers LLMs a way to interact with the low-level API.



Differently from [Optimized MCP Servers](/guides/create-tools/improve/types-of-tools.md#optimized-tools)
, Unoptimized tools are heavily influenced by the original API design, which is not usually optimized for LLM usage. For this reason, we recommend thoroughly evaluating the tools with your Agents or chatbots before using it in production. [Read more](/guides/create-tools/improve/types-of-tools.md) about Optimized vs Unoptimized tools.

The ClickupApi MCP Server offers a comprehensive suite of tools for interacting with ClickUp, enabling users to efficiently manage tasks, projects, and team collaboration. With this server, users can:

## Available Tools

Tool Name

Description

ClickupApi.GetClickupAccessToken

Obtain an OAuth access token for ClickUp API authentication.

ClickupApi.GetClickupUserDetails

Get details of the authenticated ClickUp user's account.

ClickupApi.GetAuthorizedTeams

Retrieve the workspaces for the authenticated user.

ClickupApi.AddChecklistToTask

Add a new checklist to a task in ClickUp.

ClickupApi.EditChecklist

Rename or reorder a task checklist in ClickUp.

ClickupApi.DeleteChecklist

Deletes a checklist from a task in ClickUp.

ClickupApi.AddChecklistItemClickup

Add an item to a checklist in ClickUp tasks.

ClickupApi.UpdateChecklistItem

Modify or update a specific task checklist item.

ClickupApi.DeleteTaskChecklistItem

Delete an item from a task checklist in ClickUp.

ClickupApi.GetTaskComments

Retrieve comments from a specified task in ClickUp.

ClickupApi.AddTaskComment

Add a new comment to a specific task on ClickUp.

ClickupApi.ViewChatComments

Retrieve the most recent comments from a Chat view.

ClickupApi.AddChatViewComment

Add a new comment to a Chat view.

ClickupApi.GetListComments

View comments from a specific ClickUp list.

ClickupApi.AddCommentToList

Add a comment to a specific list in ClickUp.

ClickupApi.UpdateTaskComment

Update a task comment in ClickUp.

ClickupApi.DeleteTaskComment

Delete a comment from a task.

ClickupApi.ViewThreadedComments

Retrieve threaded replies to a comment.

ClickupApi.CreateThreadedComment

Create a threaded comment in a ClickUp task.

ClickupApi.ViewListCustomFields

Retrieve accessible custom fields for a specific list.

ClickupApi.GetFolderCustomFields

Retrieve accessible custom fields from a folder in ClickUp.

ClickupApi.GetSpaceCustomFields

Retrieve custom fields accessible in a specific ClickUp space.

ClickupApi.ViewWorkspaceCustomFields

Retrieve Workspace-level Custom Fields in ClickUp.

ClickupApi.UpdateTaskCustomField

Update a custom field value for a specific task in ClickUp.

ClickupApi.RemoveCustomFieldValue

Remove a custom field value from a ClickUp task.

ClickupApi.SetTaskDependency

Set a task as waiting on or blocking another task.

ClickupApi.RemoveTaskDependency

Remove a dependency relationship between tasks.

ClickupApi.LinkTasksClickup

Link two ClickUp tasks together.

ClickupApi.RemoveTaskLink

Remove the link between two tasks.

ClickupApi.GetSpaceFolders

Retrieve a list of folders from a specified space.

ClickupApi.CreateFolderInSpace

Add a new Folder to a Space in ClickUp.

ClickupApi.ViewFolderLists

Retrieve lists contained in a specified folder.

ClickupApi.RenameClickupFolder

Rename a folder in ClickUp.

ClickupApi.DeleteWorkspaceFolder

Delete a folder from your ClickUp workspace.

ClickupApi.ViewWorkspaceGoals

View the Goals available in a Workspace.

ClickupApi.CreateWorkspaceGoal

Add a new goal to a specified workspace.

ClickupApi.GetGoalDetails

Retrieve detailed information about a specific goal including its targets.

ClickupApi.UpdateGoalDetails

Update goal details such as name, due date, and owners.

ClickupApi.DeleteGoal

Deletes a goal from your workspace in ClickUp.

ClickupApi.AddTargetToGoal

Add a target to a specific goal in ClickUp.

ClickupApi.UpdateKeyResultTarget

Update the target of a specific key result.

ClickupApi.DeleteGoalTarget

Delete a target from a goal in ClickUp.

ClickupApi.InviteGuestToWorkspace

Invite a guest to join a ClickUp workspace.

ClickupApi.GetGuestInformation

Retrieve information about a guest in a workspace.

ClickupApi.ConfigureWorkspaceGuest

Configure options for a guest in a workspace.

ClickupApi.RemoveGuestFromWorkspace

Revoke a guest's access to a ClickUp workspace.

ClickupApi.ShareTaskWithGuest

Share a task with a guest in the ClickUp Workspace.

ClickupApi.RemoveGuestFromTask

Revoke a guest's access to a specific task in ClickUp.

ClickupApi.AddGuestToList

Add a guest to a specific list in ClickUp.

ClickupApi.RemoveGuestFromList

Revoke a guest's access to a specific list in ClickUp.

ClickupApi.AddGuestToFolder

Share a folder with a guest in ClickUp's Enterprise Plan.

ClickupApi.RemoveGuestFromFolder

Revoke a guest's access to a specified folder.

ClickupApi.ViewListsInFolder

Retrieve lists from a specific folder.

ClickupApi.CreateClickupList

Create a new list in a ClickUp folder.

ClickupApi.CreateFolderFromTemplate

Creates a new folder from a template in a ClickUp space.

ClickupApi.GetFolderlessLists

View Lists in a Space not located in a Folder.

ClickupApi.AddFolderlessListToSpace

Add a new folderless list to a specified space.

ClickupApi.ViewListDetails

Retrieve details of a specific list in ClickUp.

ClickupApi.UpdateClickupList

Update the details of a ClickUp list.

ClickupApi.DeleteWorkspaceList

Delete a list from your ClickUp workspace.

ClickupApi.AddTaskToClickupList

Add a task to an additional list in ClickUp.

ClickupApi.RemoveTaskFromAdditionalList

Remove a task from an additional list in ClickUp.

ClickupApi.GetTaskMembers

Retrieve members with direct access to a task.

ClickupApi.GetListMembers

Retrieve members with access to a specific list in ClickUp.

ClickupApi.GetWorkspaceCustomRoles

Retrieve custom roles from a specific workspace.

ClickupApi.ViewSharedHierarchy

View shared tasks, lists, and folders.

ClickupApi.RetrieveAvailableSpaces

View available Spaces in a Workspace.

ClickupApi.CreateSpaceInWorkspace

Add a new Space to a Workspace.

ClickupApi.GetWorkspaceSpaces

Retrieve available Spaces in a Workspace.

ClickupApi.UpdateClickupSpace

Update space attributes in ClickUp.

ClickupApi.DeleteWorkspaceSpace

Delete a space from your ClickUp workspace.

ClickupApi.GetSpaceTags

Retrieve task tags for a specified space.

ClickupApi.AddSpaceTaskTag

Add a new task tag to a specified space in ClickUp.

ClickupApi.UpdateTaskTag

Update a task tag in a ClickUp space.

ClickupApi.DeleteSpaceTag

Delete a task tag from a space in ClickUp.

ClickupApi.AddTagToTask

Add a tag to a specific task in ClickUp.

ClickupApi.RemoveTagFromTask

Remove a tag from a specific task in ClickUp.

ClickupApi.GetListTasks

Retrieve tasks from a specific list in ClickUp.

ClickupApi.CreateNewClickupTask

Create a new task in ClickUp.

ClickupApi.ViewTaskDetails

Retrieve detailed information about a specific task.

ClickupApi.UpdateTaskInClickup

Update task details in ClickUp.

ClickupApi.DeleteTask

Delete a task from your ClickUp Workspace.

ClickupApi.GetFilteredTeamTasks

Retrieve tasks from a workspace based on specified filters.

ClickupApi.MergeTasksInClickup

Merge multiple tasks into a target task in ClickUp.

ClickupApi.TaskStatusDuration

Get the duration a task spends in each status.

ClickupApi.GetTaskTimeInStatus

Retrieve duration of tasks in various statuses.

ClickupApi.ViewTaskTemplates

View available task templates in a workspace.

ClickupApi.CreateTaskFromTemplate

Create a task using an existing template.

ClickupApi.CreateListFromFolderTemplate

Create a new list in a folder using a template.

ClickupApi.CreateListFromTemplate

Create a new list in a ClickUp space using a template.

ClickupApi.GetWorkspaceSeatDetails

Retrieve seat details for a workspace.

ClickupApi.GetWorkspacePlan

Retrieve the current subscription plan for a workspace.

ClickupApi.CreateUserGroup

Create a user group within a ClickUp workspace.

ClickupApi.GetWorkspaceCustomTaskTypes

Retrieve custom task types for a specific workspace.

ClickupApi.UpdateUserGroup

Update and manage user groups within a ClickUp Workspace.

ClickupApi.DeleteUserGroup

Delete a user group from your ClickUp workspace.

ClickupApi.GetUserGroupsInWorkspace

Retrieve user groups in a ClickUp workspace.

ClickupApi.GetTrackedTimeForTask

Fetch tracked time for a specific task.

ClickupApi.ClickupLegacyTimeTracking

Log time entry for a ClickUp task using legacy endpoint.

ClickupApi.EditLegacyTimeEntry

Edit a legacy time tracked entry for a task in ClickUp.

ClickupApi.RemoveTimeEntry

Delete a specific time entry from a task.

ClickupApi.GetTimeEntriesInDateRange

Retrieve time entries within a specified date range.

ClickupApi.CreateTimeEntry

Create a new time entry for tracking work.

ClickupApi.ViewTimeEntry

Retrieve details of a specific time entry.

ClickupApi.DeleteTimeEntry

Deletes a time entry from a ClickUp workspace.

ClickupApi.UpdateTimeEntry

Update the details of a time entry.

ClickupApi.ViewTimeEntryChanges

View a list of changes made to a time entry.

ClickupApi.GetCurrentRunningTimeEntry

Retrieve the current running time entry for the user.

ClickupApi.RemoveTagsFromTimeEntries

Remove labels from specific time entries.

ClickupApi.GetTimeEntryTags

Retrieve all tags from time entries in a workspace.

ClickupApi.AddTagToTimeEntry

Add a label to a specific time entry in ClickUp.

ClickupApi.RenameTimeEntryLabel

Rename a time entry label in ClickUp.

ClickupApi.StartTimerClickup

Start a timer for the authenticated ClickUp user.

ClickupApi.StopTimerEntry

Stops a running timer for the authenticated user.

ClickupApi.InviteUserToWorkspace

Invite a user to your ClickUp Workspace as a member.

ClickupApi.GetWorkspaceUserInfo

Retrieve user information from a specified workspace.

ClickupApi.UpdateUserWorkspaceDetails

Update a user's name and role in a ClickUp workspace.

ClickupApi.RemoveUserFromWorkspace

Remove a user from a ClickUp workspace.

ClickupApi.GetTeamViews

Retrieve task and page views at the workspace level.

ClickupApi.CreateTeamView

Add various views to a workspace at the Everything Level.

ClickupApi.GetSpaceViews

Retrieve the task and page views for a specified Space.

ClickupApi.AddSpaceView

Add a new view to a ClickUp space.

ClickupApi.GetFolderViews

Retrieve available task and page views for a Folder in ClickUp.

ClickupApi.AddViewToFolder

Add various view types to a ClickUp folder.

ClickupApi.GetListViews

Retrieve available views for a specific list.

ClickupApi.AddViewToClickupList

Add various views to a ClickUp list.

ClickupApi.ViewTaskOrPageInfo

Retrieve details of a specific task or page view.

ClickupApi.UpdateViewSettings

Update the settings and configuration of a view.

ClickupApi.DeleteView

Delete a specified view from ClickUp.

ClickupApi.GetVisibleTasksInView

Retrieve all visible tasks from a ClickUp view.

ClickupApi.GetWorkspaceWebhooks

Retrieve webhooks for a workspace.

ClickupApi.SetupClickupWebhook

Set up a ClickUp webhook to monitor events.

ClickupApi.UpdateClickupWebhookEvents

Update a ClickUp webhook to modify monitored events.

ClickupApi.DeleteWebhook

Delete a webhook to stop event monitoring.

If you need to perform an action that’s not listed here, you can [get in touch with us](mailto:contact@arcade.dev) to request a new tool, or [create your own tools](/guides/create-tools/tool-basics/build-mcp-server.md).

## ClickupApi.GetClickupAccessToken



Obtain an OAuth access token for ClickUp API authentication.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## ClickupApi.GetClickupUserDetails



Get details of the authenticated ClickUp user’s account.

**Parameters**

This tool does not take any parameters.

## ClickupApi.GetAuthorizedTeams



Retrieve the workspaces for the authenticated user.

**Parameters**

This tool does not take any parameters.

## ClickupApi.AddChecklistToTask



Add a new checklist to a task in ClickUp.

**Parameters**

-   **checklist\_name** (`string`, required) The name or title of the checklist to be added to the task. It should be a descriptive string identifying the purpose or contents of the checklist.
-   **task\_identifier** (`string`, required) A unique identifier for the task to which the checklist will be added. It can be a custom or default task ID.
-   **use\_custom\_task\_ids** (`boolean`, optional) Set to true to reference a task by its custom task ID.
-   **workspace\_id\_for\_custom\_task** (`integer`, optional) Provide the Workspace ID when ‘custom\_task\_ids’ is set to true. It’s necessary to reference tasks by custom IDs.

## ClickupApi.EditChecklist



Rename or reorder a task checklist in ClickUp.

**Parameters**

-   **checklist\_id** (`string`, required) The unique identifier (UUID) of the checklist to be edited or reordered.
-   **checklist\_name** (`string`, optional) The new name for the checklist. Leave empty if you do not wish to rename.
-   **checklist\_position** (`integer`, optional) Specify the order in which the checklist should appear on a task. Use 0 to place it at the top.

## ClickupApi.DeleteChecklist



Deletes a checklist from a task in ClickUp.

**Parameters**

-   **checklist\_id** (`string`, required) The unique identifier for the checklist to be deleted. It should be in UUID format.

## ClickupApi.AddChecklistItemClickup



Add an item to a checklist in ClickUp tasks.

**Parameters**

-   **checklist\_identifier** (`string`, required) A unique identifier for the checklist. Must be in UUID format.
-   **assignee\_user\_id** (`integer`, optional) The unique ID of the user assigned to the checklist item. This should be an integer value representing the user’s ID.
-   **checklist\_item\_name** (`string`, optional) The name of the checklist item to be added. This should clearly describe the task or item to be completed.

## ClickupApi.UpdateChecklistItem



Modify or update a specific task checklist item.

**Parameters**

-   **checklist\_item\_uuid** (`string`, required) The UUID for the specific checklist item to be updated.
-   **checklist\_unique\_identifier** (`string`, required) The UUID of the checklist to update. Example: b8a8-48d8-a0c6-b4200788a683.
-   **assign\_item\_to\_user** (`string`, optional) The user ID to which the checklist item will be assigned. This should be a string representing a valid user identifier in ClickUp.
-   **checklist\_item\_name** (`string`, optional) The new name for the checklist item. Provide a string to rename the item.
-   **mark\_as\_resolved** (`boolean`, optional) Boolean to mark the checklist item as resolved (true) or unresolved (false).
-   **parent\_checklist\_item\_id** (`string`, optional) Include another item’s `checklist_item_id` to nest this item under it.

## ClickupApi.DeleteTaskChecklistItem



Delete an item from a task checklist in ClickUp.

**Parameters**

-   **checklist\_identifier** (`string`, required) The unique identifier (UUID) for the checklist. Used to specify the checklist from which the item will be deleted.
-   **checklist\_item\_uuid** (`string`, required) The unique identifier (UUID) of the checklist item to be deleted.

## ClickupApi.GetTaskComments



Retrieve comments from a specified task in ClickUp.

**Parameters**

-   **task\_identifier** (`string`, required) Specify the unique identifier of the task whose comments you want to retrieve.
-   **comment\_date\_unix\_time\_ms** (`integer`, optional) Specify the date of a task comment using Unix time in milliseconds for pagination.
-   **comment\_start\_id** (`string`, optional) The ID of the earliest comment to start retrieving from, used for pagination.
-   **use\_custom\_task\_ids** (`boolean`, optional) Set to `true` if you want to reference a task by its custom task ID.
-   **workspace\_id\_for\_custom\_task** (`integer`, optional) Provide the Workspace ID when using a custom task ID (requires `custom_task_ids` to be true).

## ClickupApi.AddTaskComment



Add a new comment to a specific task on ClickUp.

**Parameters**

-   **comment\_content** (`string`, required) The text of the comment to be added to the task. It should contain any updates, feedback, or relevant information.
-   **send\_notifications\_to\_all** (`boolean`, required) If true, notifications will be sent to everyone, including the creator of the comment.
-   **specific\_task\_id** (`string`, required) The ID of the task to add the comment to. Required for identifying the target task.
-   **assignee\_group** (`string`, optional) Specifies a group of users (as a comma-separated string) to be assigned to the comment. Ensure the group is relevant to the task.
-   **comment\_assignee\_id** (`integer`, optional) An integer representing the user ID of the assignee for the comment on the task.
-   **use\_custom\_task\_ids** (`boolean`, optional) Set to true to reference a task by its custom task ID.
-   **workspace\_id\_for\_custom\_task** (`integer`, optional) Provide the Workspace ID when referencing a task by its custom task ID (set `custom_task_ids` to true).

## ClickupApi.ViewChatComments



Retrieve the most recent comments from a Chat view.

**Parameters**

-   **chat\_view\_id** (`string`, required) The unique identifier for the Chat view to retrieve comments from. It should be a string, typically ‘105’.
-   **comment\_start\_date\_unix\_ms** (`integer`, optional) The start date of a Chat view comment in Unix time (milliseconds) to fetch older comments.
-   **start\_comment\_id** (`string`, optional) The comment ID to start retrieving older comments from in the Chat view. Use this to fetch comments beyond the most recent 25.

## ClickupApi.AddChatViewComment



Add a new comment to a Chat view.

**Parameters**

-   **comment\_text** (`string`, required) The text content of the comment to be added to the Chat view.
-   **send\_notifications\_to\_all** (`boolean`, required) Set to true to send notifications to everyone, including the comment creator.
-   **view\_id** (`string`, required) The ID of the Chat view where the comment will be added. Expected as a string.

## ClickupApi.GetListComments



View comments from a specific ClickUp list.

**Parameters**

-   **list\_id** (`integer`, required) The unique integer identifier of the ClickUp list for which comments are being retrieved.
-   **oldest\_comment\_id** (`string`, optional) ID of the oldest comment to start retrieving additional comments from.
-   **start\_date\_unix\_millis** (`integer`, optional) Enter the date of a list info comment using Unix time in milliseconds to retrieve comments starting from this timestamp.

## ClickupApi.AddCommentToList



Add a comment to a specific list in ClickUp.

**Parameters**

-   **assignee\_id** (`integer`, required) The ID of the user to whom the comment is assigned. This should be an integer value representing the user’s unique identifier.
-   **comment\_text** (`string`, required) The text of the comment to be added to the list. This should contain the message or information you wish to convey.
-   **list\_identifier** (`integer`, required) The unique ID of the list where the comment will be added.
-   **notify\_all** (`boolean`, required) If true, notifications are sent to everyone, including the comment creator.

## ClickupApi.UpdateTaskComment



Update a task comment in ClickUp.

**Parameters**

-   **assignee\_user\_id** (`integer`, required) The ID of the user to assign the comment to. This should be a numeric user ID in ClickUp.
-   **comment\_identifier** (`integer`, required) The unique identifier of the comment to update. It must be an integer.
-   **mark\_comment\_as\_resolved** (`boolean`, required) Set to true to mark the comment as resolved; false to leave it unresolved. Accepts a boolean value.
-   **new\_comment\_content** (`string`, required) The new content for the task comment. This will replace the existing comment text.
-   **assign\_to\_group** (`integer`, optional) Assign the comment to a group by providing the group’s ID.

## ClickupApi.DeleteTaskComment



Delete a comment from a task.

**Parameters**

-   **comment\_id** (`integer`, required) The unique integer identifier of the comment to be deleted.

## ClickupApi.ViewThreadedComments



Retrieve threaded replies to a comment.

**Parameters**

-   **thread\_comment\_id** (`integer`, required) The ID of the comment for which threaded replies are to be retrieved. This ID should be an integer and corresponds to the comment in a ClickUp task whose replies you want to view.

## ClickupApi.CreateThreadedComment



Create a threaded comment in a ClickUp task.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **parent\_comment\_id** (`integer`, optional) The ID of the parent comment to which the threaded reply will be attached. It should be an integer. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## ClickupApi.ViewListCustomFields



Retrieve accessible custom fields for a specific list.

**Parameters**

-   **content\_type** (`string`, required) The MIME type of the request body, typically set to ‘application/json’.
-   **list\_id** (`integer`, required) The unique identifier of the list to retrieve accessible custom fields for.

## ClickupApi.GetFolderCustomFields



Retrieve accessible custom fields from a folder in ClickUp.

**Parameters**

-   **content\_type** (`string`, required) The MIME type of the content being sent. Typically, use ‘application/json’.
-   **folder\_id** (`integer`, required) The unique identifier of the folder to retrieve custom fields from. Must be an integer corresponding to a specific folder in ClickUp.

## ClickupApi.GetSpaceCustomFields



Retrieve custom fields accessible in a specific ClickUp space.

**Parameters**

-   **content\_type\_header** (`string`, required) The MIME type for the request header, typically ‘application/json’.
-   **space\_identifier** (`integer`, required) The unique identifier for the ClickUp space from which to fetch available custom fields. It should be an integer.

## ClickupApi.ViewWorkspaceCustomFields



Retrieve Workspace-level Custom Fields in ClickUp.

**Parameters**

-   **content\_type\_header** (`string`, required) The MIME type of the content. Typically set to ‘application/json’ for JSON data.
-   **workspace\_id** (`integer`, required) The ID of the Workspace to retrieve custom fields for. This identifies which Workspace’s fields you want to view.

## ClickupApi.UpdateTaskCustomField



Update a custom field value for a specific task in ClickUp.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **task\_id** (`string`, optional) The ID of the task to be updated with new custom field data. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **custom\_field\_uuid** (`string`, optional) The UUID of the custom field to update for a specific task. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **workspace\_id** (`integer`, optional) Provide the Workspace ID when referencing a task by its Custom Task ID (`custom_task_ids` must be true). Only used when mode is ‘execute’.
-   **use\_custom\_task\_id\_reference** (`boolean`, optional) Set to `true` to reference a task using its Custom Task ID. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## ClickupApi.RemoveCustomFieldValue



Remove a custom field value from a ClickUp task.

**Parameters**

-   **custom\_field\_id** (`string`, required) UUID of the custom field to be removed from the task. Example: b8a8-48d8-a0c6-b4200788a683
-   **task\_identifier** (`string`, required) The unique identifier of the task from which you want to remove the custom field value.
-   **use\_custom\_task\_ids** (`boolean`, optional) Set to true to reference a task by its custom task ID.
-   **workspace\_id** (`integer`, optional) Provide the Workspace ID when referencing a task by custom task id.

## ClickupApi.SetTaskDependency



Set a task as waiting on or blocking another task.

**Parameters**

-   **task\_id\_of\_dependency** (`string`, required) The ID of the task that is waiting on or blocking another task.
-   **dependent\_task\_id** (`string`, optional) The ID of the task that the specified task depends on or is blocking. This establishes the task dependency relationship.
-   **depends\_on\_task\_id** (`string`, optional) Specify the task ID that this task depends on or is blocked by. It should be a valid task ID in ClickUp.
-   **use\_custom\_task\_ids** (`boolean`, optional) Set to true to reference a task by its custom task ID.
-   **workspace\_id** (`integer`, optional) Provide the Workspace ID when `custom_task_ids` is true. Necessary for task identification.

## ClickupApi.RemoveTaskDependency



Remove a dependency relationship between tasks.

**Parameters**

-   **dependent\_task\_id** (`string`, required) The task ID that is dependent on another. Provide a valid task ID as a string.
-   **depends\_on\_task\_id** (`string`, required) The ID of the task that another task depends on. Provide a valid task ID to specify the dependent task.
-   **task\_id\_to\_remove\_dependency** (`string`, required) Specify the task ID from which the dependency is to be removed. This is required to identify the task involved in the dependency relationship.
-   **use\_custom\_task\_ids** (`boolean`, optional) Set to true if referencing tasks by their custom task IDs is desired.
-   **workspace\_id** (`integer`, optional) Provide the Workspace ID when using custom task IDs by setting `custom_task_ids` to `true`.

## ClickupApi.LinkTasksClickup



Link two ClickUp tasks together.

**Parameters**

-   **source\_task\_id** (`string`, required) The ID of the task from which the link will be initiated.
-   **task\_to\_link\_to** (`string`, required) The ID of the task to link to the initiating task.
-   **use\_custom\_task\_ids** (`boolean`, optional) Set to true to reference a task by its custom task ID.
-   **workspace\_id\_for\_custom\_task** (`integer`, optional) Provide the Workspace ID if referencing a task by custom task id (when custom\_task\_ids is true).

## ClickupApi.RemoveTaskLink



Remove the link between two tasks.

**Parameters**

-   **linked\_task\_id** (`string`, required) The task ID of the task to which the original task is linked. This specifies the connection to be removed.
-   **primary\_task\_id** (`string`, required) The ID of the primary task from which to remove the link. This is required to identify the task.
-   **use\_custom\_task\_ids** (`boolean`, optional) Set to true to reference a task by its custom task ID.
-   **workspace\_id** (`integer`, optional) Provide the Workspace ID when `custom_task_ids` is set to `true`.

## ClickupApi.GetSpaceFolders



Retrieve a list of folders from a specified space.

**Parameters**

-   **space\_id** (`integer`, required) The unique identifier of the space from which to retrieve folders. This is required to specify which space’s folders are being requested.
-   **include\_archived\_folders** (`boolean`, optional) Set to true to include archived folders in the results.

## ClickupApi.CreateFolderInSpace



Add a new Folder to a Space in ClickUp.

**Parameters**

-   **folder\_name** (`string`, required) The name of the new folder to be created in the specified space. It should be a string representing the folder’s title.
-   **space\_id** (`integer`, required) The unique identifier for the ClickUp Space where the folder will be created. It should be an integer.

## ClickupApi.ViewFolderLists



Retrieve lists contained in a specified folder.

**Parameters**

-   **folder\_id** (`integer`, required) The unique identifier for the folder whose lists you want to retrieve. This must be an integer.

## ClickupApi.RenameClickupFolder



Rename a folder in ClickUp.

**Parameters**

-   **folder\_id\_clickup** (`integer`, required) The unique identifier for the ClickUp folder you wish to rename.
-   **new\_folder\_name** (`string`, required) Specify the new name for the folder. This is the name that the folder will be renamed to in ClickUp.

## ClickupApi.DeleteWorkspaceFolder



Delete a folder from your ClickUp workspace.

**Parameters**

-   **folder\_id** (`integer`, required) The unique ID of the folder to be deleted from your ClickUp workspace. Ensure this ID is correct to avoid unintended deletions.

## ClickupApi.ViewWorkspaceGoals



View the Goals available in a Workspace.

**Parameters**

-   **workspace\_id** (`integer`, required) The unique identifier for the workspace to view its goals.
-   **include\_completed\_goals** (`boolean`, optional) Indicate whether to include completed goals in the results. Set to true to include completed goals, or false to exclude them.

## ClickupApi.CreateWorkspaceGoal



Add a new goal to a specified workspace.

**Parameters**

-   **allow\_multiple\_owners** (`boolean`, required) Set to true to allow a goal to have multiple owners, or false for a single owner.
-   **due\_date\_timestamp** (`integer`, required) The due date for the goal as a Unix timestamp in milliseconds. Represents when the goal should be completed.
-   **goal\_color** (`string`, required) The color code for the goal. Expected to be a string representing a color, such as a hex code like ‘#FF5733’.
-   **goal\_description** (`string`, required) A brief explanation of the goal to be added, providing context and details.
-   **goal\_name** (`string`, required) The name or title of the goal to be added to the workspace.
-   **goal\_owners** (`array[integer]`, required) Array of user IDs for those assigned to own the goal, allowing multiple owners.
-   **workspace\_id** (`integer`, required) The ID of the workspace where the goal will be added. This is a numeric value.

## ClickupApi.GetGoalDetails



Retrieve detailed information about a specific goal including its targets.

**Parameters**

-   **goal\_identifier** (`string`, required) The unique identifier (UUID) for the goal to retrieve details and targets.

## ClickupApi.UpdateGoalDetails



Update goal details such as name, due date, and owners.

**Parameters**

-   **goal\_color** (`string`, required) Set the color of the goal. Accepts a string representing the color, such as a hex code.
-   **goal\_description** (`string`, required) The new description for the goal. This should provide an overview or details of the goal’s purpose.
-   **goal\_due\_date** (`integer`, required) An integer representing the new due date for the goal, usually in Unix timestamp format.
-   **goal\_id** (`string`, required) The unique identifier for the goal to be updated. This is a UUID.
-   **goal\_name** (`string`, required) The new name for the goal. This will replace the current goal name.
-   **new\_owners\_to\_add** (`array[integer]`, required) List of user IDs to add as new owners for the goal.
-   **remove\_owners\_user\_ids** (`array[integer]`, required) Array of user IDs to be removed as owners of the goal.

## ClickupApi.DeleteGoal



Deletes a goal from your workspace in ClickUp.

**Parameters**

-   **content\_type\_header** (`string`, required) Specify the Content-Type header. Typically set to ‘application/json’.
-   **goal\_identifier** (`string`, required) The unique identifier for the goal to be deleted. It must be a valid UUID.

## ClickupApi.AddTargetToGoal



Add a target to a specific goal in ClickUp.

**Parameters**

-   **goal\_identifier** (`string`, required) The unique identifier (UUID) of the goal to which the target will be added.
-   **initial\_value\_steps** (`integer`, required) Specify the starting value for the target’s progress steps, as an integer.
-   **linked\_task\_ids** (`array[string]`, required) An array of task IDs to associate the target with tasks.
-   **list\_ids** (`array[string]`, required) Array of List IDs to associate the target with multiple Lists.
-   **target\_name** (`string`, required) Specify the name for the target being added to the goal. It should be a descriptive label for easy identification.
-   **target\_owners\_ids** (`array[integer]`, required) An array of user IDs representing the owners of the key result target.
-   **target\_steps\_end** (`integer`, required) Specify the final value for the target steps. It indicates the goal completion threshold.
-   **target\_type** (`string`, required) Specify the type of target (key result) as one of the following: `number`, `currency`, `boolean`, `percentage`, or `automatic`.
-   **target\_unit** (`string`, required) Specify the unit for the target if using types like number, currency, or percentage.

## ClickupApi.UpdateKeyResultTarget



Update the target of a specific key result.

**Parameters**

-   **current\_steps\_value** (`integer`, required) The current number of steps completed for the key result target. Provide an integer value.
-   **key\_result\_identifier** (`string`, required) Unique identifier for the key result to be updated, provided as a UUID.
-   **note\_update\_description** (`string`, required) Text for the note associated with the key result. Use to add or update content related to the key result.

## ClickupApi.DeleteGoalTarget



Delete a target from a goal in ClickUp.

**Parameters**

-   **goal\_target\_id** (`string`, required) The unique identifier (UUID) of the key result to delete from the goal in ClickUp.

## ClickupApi.InviteGuestToWorkspace



Invite a guest to join a ClickUp workspace.

**Parameters**

-   **guest\_email** (`string`, required) The email address of the guest to be invited to the workspace. Ensure it is correctly formatted.
-   **workspace\_id** (`integer`, required) The integer ID of the Workspace to which the guest will be invited.
-   **allow\_guest\_to\_create\_views** (`boolean`, optional) Indicates if the guest can create views in the workspace. Accepts a boolean value.
-   **allow\_tag\_editing** (`boolean`, optional) Set to true if the guest should be allowed to edit tags in the workspace.
-   **allow\_view\_time\_spent** (`boolean`, optional) Allow the guest to view time spent in the workspace. Accepts a boolean value: true to allow, false to deny.
-   **can\_view\_estimated\_times** (`boolean`, optional) Set to true to allow the guest to view estimated times for tasks.
-   **can\_view\_points\_estimated** (`boolean`, optional) Set to true to allow the guest to view estimated points for tasks.
-   **custom\_role\_id** (`integer`, optional) The ID of the custom role to assign to the guest. Must be an integer value.

## ClickupApi.GetGuestInformation



Retrieve information about a guest in a workspace.

**Parameters**

-   **guest\_identifier** (`integer`, required) An integer representing the unique ID of the guest whose information is to be retrieved.
-   **workspace\_id** (`integer`, required) The ID of the ClickUp workspace. This is required for identifying the specific workspace where the guest information is being retrieved.

## ClickupApi.ConfigureWorkspaceGuest



Configure options for a guest in a workspace.

**Parameters**

-   **guest\_identifier** (`integer`, required) The unique identifier for the guest to be configured in the workspace.
-   **workspace\_id** (`integer`, required) The unique identifier for the ClickUp workspace where the guest is being configured. This is required for identifying the specific workspace.
-   **allow\_guest\_to\_edit\_tags** (`boolean`, optional) Set to true to allow the guest to edit tags in the workspace; false to disallow.
-   **allow\_view\_creation** (`boolean`, optional) A boolean to specify if the guest can create views. True allows view creation, false denies it.
-   **allow\_viewing\_points\_estimated** (`boolean`, optional) Specify if the guest can view estimated points in the workspace. True allows viewing; false restricts it.
-   **allow\_viewing\_time\_spent** (`boolean`, optional) Set to true to allow the guest to view time spent on tasks, false to restrict.
-   **can\_see\_time\_estimates** (`boolean`, optional) Determines if the guest can view time estimates. Use true to allow, false to restrict.
-   **guest\_custom\_role\_id** (`integer`, optional) An integer representing the custom role ID assigned to the guest in the workspace.

## ClickupApi.RemoveGuestFromWorkspace



Revoke a guest’s access to a ClickUp workspace.

**Parameters**

-   **guest\_id** (`integer`, required) The unique identifier for the guest to be removed from the workspace. This should be an integer value.
-   **workspace\_id** (`integer`, required) The unique ID of the ClickUp workspace from which the guest will be removed. This is an integer.

## ClickupApi.ShareTaskWithGuest



Share a task with a guest in the ClickUp Workspace.

**Parameters**

-   **guest\_id** (`integer`, required) The unique identifier for the guest to share the task with.
-   **guest\_permission\_level** (`string`, required) Defines the level of access for the guest. Options: ‘read’, ‘comment’, ‘edit’, ‘create’.
-   **task\_id** (`string`, required) The unique identifier for the task to share with the guest.
-   **include\_shared\_details** (`boolean`, optional) Set to `true` to include details of items shared with the guest. Defaults to `true`.
-   **use\_custom\_task\_ids** (`boolean`, optional) Set to true to reference a task by its custom task ID.
-   **workspace\_id\_when\_custom\_task\_ids\_enabled** (`integer`, optional) Provide the Workspace ID when referencing tasks by custom task IDs. Required if `custom_task_ids` is `true`.

## ClickupApi.RemoveGuestFromTask



Revoke a guest’s access to a specific task in ClickUp.

**Parameters**

-   **guest\_id** (`integer`, required) The ID of the guest to remove from the task. This is a required integer value.
-   **task\_id** (`string`, required) The unique identifier of the task from which the guest’s access should be revoked. This is required to specify the task.
-   **include\_shared\_details** (`boolean`, optional) Set to `true` to include details of items shared with the guest. Default is `true`.
-   **use\_custom\_task\_ids** (`boolean`, optional) Set to true to reference a task by its custom task ID.
-   **workspace\_id\_for\_custom\_task** (`integer`, optional) Provide the Workspace ID when referencing a task by its custom task ID. This is required if ‘custom\_task\_ids’ is set to ‘true’.

## ClickupApi.AddGuestToList



Add a guest to a specific list in ClickUp.

**Parameters**

-   **guest\_id** (`integer`, required) The unique identifier for the guest to be added. This should be an integer value.
-   **guest\_permission\_level** (`string`, required) Permission level for the guest on the list. Options are `read`, `comment`, `edit`, or `create`.
-   **list\_id** (`integer`, required) The identifier of the list to which the guest will be added.
-   **include\_shared\_details** (`boolean`, optional) Set to false to exclude shared item details from the guest view; defaults to true to include them.

## ClickupApi.RemoveGuestFromList



Revoke a guest’s access to a specific list in ClickUp.

**Parameters**

-   **guest\_user\_id** (`integer`, required) The unique identifier of the guest whose access is to be revoked from the list.
-   **list\_identifier** (`integer`, required) The unique identifier for the list from which the guest’s access will be revoked. This must be an integer.
-   **include\_shared\_details** (`boolean`, optional) Set to `true` to include details of items shared with the guest. Default is `true`.

## ClickupApi.AddGuestToFolder



Share a folder with a guest in ClickUp’s Enterprise Plan.

**Parameters**

-   **folder\_id** (`integer`, required) The unique integer ID of the folder to be shared with the guest.
-   **guest\_identifier** (`integer`, required) The unique identifier for the guest to whom the folder will be shared. This should be an integer representing the guest’s ID.
-   **guest\_permission\_level** (`string`, required) Defines guest’s access level: ‘read’ for view only, ‘comment’, ‘edit’, or ‘create’ for full access.
-   **include\_shared\_items** (`boolean`, optional) Set to true to include details of items shared with the guest. Default is true.

## ClickupApi.RemoveGuestFromFolder



Revoke a guest’s access to a specified folder.

**Parameters**

-   **folder\_identifier** (`integer`, required) The unique identifier for the folder from which the guest’s access should be revoked. This ID is essential to specify the exact folder within the ClickUp workspace.
-   **guest\_identifier** (`integer`, required) The unique numeric ID of the guest to be removed from the folder. This is required to identify which guest’s access is being revoked.
-   **include\_shared\_items** (`boolean`, optional) Set to true to include details of items shared with the guest. Defaults to true.

## ClickupApi.ViewListsInFolder



Retrieve lists from a specific folder.

**Parameters**

-   **folder\_id** (`integer`, required) The unique identifier for the folder whose lists are to be retrieved. This is required to specify which folder’s lists to view.
-   **include\_archived\_lists** (`boolean`, optional) Specify whether to include archived lists. Set to true to include and false to exclude.

## ClickupApi.CreateClickupList



Create a new list in a ClickUp folder.

**Parameters**

-   **folder\_id** (`integer`, required) The unique integer identifier for the folder where the new list will be added.
-   **list\_name** (`string`, required) The name of the new list to be created within the specified ClickUp folder.
-   **due\_date\_timestamp** (`integer`, optional) The due date for the list in Unix timestamp format. Determines when the list should be completed.
-   **formatted\_list\_description** (`string`, optional) Provide a markdown-formatted description for the List. Use this instead of plain text content.
-   **include\_time\_in\_due\_date** (`boolean`, optional) Set to true to include a specific time with the due date.
-   **list\_assignee\_user\_id** (`integer`, optional) The user ID to assign this list to a specific user. This identifies who will be responsible for the list.
-   **list\_color** (`string`, optional) Specifies the color of the List, not related to task statuses.
-   **list\_description** (`string`, optional) A plain text description for the list. Use this to provide details about the list’s purpose.
-   **list\_priority** (`integer`, optional) An integer value indicating the priority of the list, where a higher number typically means higher priority.

## ClickupApi.CreateFolderFromTemplate



Creates a new folder from a template in a ClickUp space.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **clickup\_space\_id** (`string`, optional) ID of the ClickUp Space where the folder will be created. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **folder\_template\_id** (`string`, optional) The ID of the folder template to be used for creating a new folder in a ClickUp space. Ensure the template is added to your Workspace. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## ClickupApi.GetFolderlessLists



View Lists in a Space not located in a Folder.

**Parameters**

-   **space\_identifier** (`integer`, required) The unique identifier of the space to retrieve the folderless lists from. It should be an integer.
-   **include\_archived\_lists** (`boolean`, optional) Specify true to include archived lists, or false to exclude them.

## ClickupApi.AddFolderlessListToSpace



Add a new folderless list to a specified space.

**Parameters**

-   **list\_name** (`string`, required) The name of the new list to be created within the space.
-   **space\_id** (`integer`, required) The unique identifier of the space where the list will be added.
-   **due\_date\_timestamp** (`integer`, optional) An integer representing the UNIX timestamp for the list’s due date. This defines the deadline for the list.
-   **include\_due\_time** (`boolean`, optional) Set to true if the due date should include a specific time.
-   **list\_color\_status** (`string`, optional) Specifies the color representing the List. This is for visual identification and does not affect task statuses.
-   **list\_description** (`string`, optional) A text description for the new list. Use plain text. For markdown, use `markdown_content`.
-   **list\_markdown\_description** (`string`, optional) Markdown formatted description for the list. Use this instead of a plain text description.
-   **list\_owner\_user\_id** (`integer`, optional) The user ID for the list owner to be assigned to the new list.
-   **list\_priority\_level** (`integer`, optional) Set the priority level for the list. It should be an integer value indicating the list’s urgency or importance.

## ClickupApi.ViewListDetails



Retrieve details of a specific list in ClickUp.

**Parameters**

-   **list\_id** (`integer`, required) The unique ID of the list to view details. Right-click the list in your ClickUp sidebar, select ‘Copy link’, and paste the URL’s last string.

## ClickupApi.UpdateClickupList



Update the details of a ClickUp list.

**Parameters**

-   **list\_identifier** (`string`, required) The unique identifier of the ClickUp list to update. This is a required string field.
-   **list\_name** (`string`, required) The new name for the ClickUp list. This should be a string value.
-   **formatted\_list\_description** (`string`, optional) Formatted description of the list using Markdown syntax instead of plain text.
-   **include\_due\_date\_time** (`boolean`, optional) Set to true to include a specific time with the due date.
-   **list\_assignee\_id** (`string`, optional) The ID of the user to assign to the list. Provide a valid user ID string.
-   **list\_color** (`string`, optional) Specify the color of the list. This refers to the List color rather than task statuses.
-   **list\_description\_content** (`string`, optional) The plain text description to update for the ClickUp list. Use this instead of markdown for simple text updates.
-   **list\_due\_date** (`integer`, optional) Set the list’s due date as a Unix timestamp in milliseconds, representing the time the list is due.
-   **list\_priority** (`integer`, optional) Set the list’s priority as an integer. Usually, 1 is high, 2 is medium, and 3 is low priority.
-   **remove\_list\_color** (`boolean`, optional) Set to `true` to remove the List color; default is `false`.

## ClickupApi.DeleteWorkspaceList



Delete a list from your ClickUp workspace.

**Parameters**

-   **content\_type\_header** (`string`, required) Specifies the media type of the request. Typically set to ‘application/json’.
-   **workspace\_list\_id** (`integer`, required) The unique integer ID of the list to be deleted from the ClickUp workspace.

## ClickupApi.AddTaskToClickupList



Add a task to an additional list in ClickUp.

**Parameters**

-   **target\_list\_id** (`integer`, required) The unique identifier for the target list where the task will be added. This is required to associate the task with the correct list in ClickUp.
-   **task\_identifier** (`string`, required) Specify the ID of the task to be added to an additional list in ClickUp.

## ClickupApi.RemoveTaskFromAdditionalList



Remove a task from an additional list in ClickUp.

**Parameters**

-   **additional\_list\_id** (`integer`, required) The ID of the additional list from which the task should be removed. This is required for identifying the secondary list, not the task’s home list.
-   **task\_identifier** (`string`, required) The unique identifier for the task to be removed from the additional list.

## ClickupApi.GetTaskMembers



Retrieve members with direct access to a task.

**Parameters**

-   **task\_identifier** (`string`, required) The unique identifier of the task to retrieve members for. This ID is necessary to specify the task in question.

## ClickupApi.GetListMembers



Retrieve members with access to a specific list in ClickUp.

**Parameters**

-   **list\_id** (`integer`, required) The unique identifier for the list in ClickUp. It is required to fetch the members with access to this list.

## ClickupApi.GetWorkspaceCustomRoles



Retrieve custom roles from a specific workspace.

**Parameters**

-   **workspace\_id** (`integer`, required) The unique identifier for the workspace to retrieve custom roles from.
-   **include\_members** (`boolean`, optional) Include member details in the response. Set to true to include, false to exclude.

## ClickupApi.ViewSharedHierarchy



View shared tasks, lists, and folders.

**Parameters**

-   **workspace\_id** (`integer`, required) The Workspace ID to view shared tasks, lists, and folders.

## ClickupApi.RetrieveAvailableSpaces



View available Spaces in a Workspace.

**Parameters**

-   **workspace\_id** (`integer`, required) The ID of the workspace to retrieve available spaces from.
-   **include\_archived\_spaces** (`boolean`, optional) Set to true to include archived Spaces in the results. Otherwise, only active Spaces are returned.

## ClickupApi.CreateSpaceInWorkspace



Add a new Space to a Workspace.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **workspace\_id** (`integer`, optional) The ID of the workspace where the new space will be added. It should be an integer value. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## ClickupApi.GetWorkspaceSpaces



Retrieve available Spaces in a Workspace.

**Parameters**

-   **workspace\_space\_id** (`integer`, required) The unique identifier for the specific space in the workspace to retrieve details.

## ClickupApi.UpdateClickupSpace



Update space attributes in ClickUp.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **space\_identifier** (`integer`, optional) The unique identifier for the ClickUp space to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## ClickupApi.DeleteWorkspaceSpace



Delete a space from your ClickUp workspace.

**Parameters**

-   **workspace\_space\_id** (`integer`, required) The unique identifier for the space to delete in your ClickUp workspace. Provide the specific space ID to permanently remove the space and its data.

## ClickupApi.GetSpaceTags



Retrieve task tags for a specified space.

**Parameters**

-   **content\_type\_header** (`string`, required) The MIME type of the request. Generally set to ‘application/json’.
-   **space\_identifier** (`integer`, required) An integer representing the ID of the space for which to retrieve task tags. This ID is required to specify the space.

## ClickupApi.AddSpaceTaskTag



Add a new task tag to a specified space in ClickUp.

**Parameters**

-   **space\_identifier** (`integer`, required) The unique identifier for the space where the tag will be added. It must be an integer.
-   **tag\_background\_color** (`string`, required) Hex code representing the background color for the tag. It should be a string in the format ‘#RRGGBB’.
-   **tag\_foreground\_color** (`string`, required) Hex code for the tag’s foreground color. It defines the text color of the tag.
-   **tag\_name** (`string`, required) Name of the new tag to be added to the space. It should be a descriptive and concise identifier for categorizing tasks.

## ClickupApi.UpdateTaskTag



Update a task tag in a ClickUp space.

**Parameters**

-   **background\_color\_of\_tag** (`string`, required) The background color for the task tag. It should be a valid hex color code (e.g., #FFFFFF).
-   **current\_tag\_name** (`string`, required) The current name of the tag to be updated in the ClickUp space.
-   **new\_tag\_name** (`string`, required) The new name for the task tag to be updated in the ClickUp space. It must be a string representing the desired tag name after the update.
-   **space\_id** (`integer`, required) The unique identifier of the ClickUp space where the tag will be updated. This is required to specify which space’s tag needs modification.
-   **tag\_foreground\_color** (`string`, required) The foreground (text) color of the tag in a valid color format (e.g., HEX).

## ClickupApi.DeleteSpaceTag



Delete a task tag from a space in ClickUp.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **space\_identifier** (`integer`, optional) The unique identifier of the space from which the tag will be deleted. This should be an integer value. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **tag\_name\_to\_delete** (`string`, optional) The name of the tag to be deleted from the specified space. Ensure this tag name exists in the target space. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## ClickupApi.AddTagToTask



Add a tag to a specific task in ClickUp.

**Parameters**

-   **content\_type** (`string`, required) Specifies the media type of the request. Typically set to ‘application/json’.
-   **tag\_name** (`string`, required) The name of the tag to add to the task. This should be a string representing the desired tag.
-   **task\_identifier** (`string`, required) The unique identifier of the task to which the tag will be added. Can be a custom task ID if specified.
-   **use\_custom\_task\_ids** (`boolean`, optional) Set to true if you want to reference a task using its custom task ID.
-   **workspace\_id\_if\_custom\_task\_ids** (`integer`, optional) Workspace ID required when referencing a task by its custom task ID. Only needed if `custom_task_ids=true`.

## ClickupApi.RemoveTagFromTask



Remove a tag from a specific task in ClickUp.

**Parameters**

-   **content\_type\_header** (`string`, required) Specifies the media type of the request. Commonly set to ‘application/json’.
-   **tag\_name\_to\_remove** (`string`, required) The name of the tag to remove from the specified task.
-   **task\_id** (`string`, required) The unique identifier of the task from which the tag will be removed. Use the task’s regular ID unless custom task IDs are enabled.
-   **use\_custom\_task\_ids** (`boolean`, optional) Set to true to reference a task by its custom task ID, or false to use the standard ID.
-   **workspace\_id\_for\_custom\_task** (`integer`, optional) The Workspace ID required when referencing a task by its custom ID (if custom\_task\_ids is true).

## ClickupApi.GetListTasks



Retrieve tasks from a specific list in ClickUp.

**Parameters**

-   **list\_identifier** (`integer`, required) The unique identifier for the list. Find it by copying the link and extracting the number following /li in the URL.
-   **custom\_task\_type\_filters** (`array[number]`, optional) An array of numbers to filter tasks by custom types. Use 0 for tasks, 1 for Milestones, and other numbers for custom types defined in your Workspace.
-   **date\_created\_less\_than** (`integer`, optional) Filter tasks created before the specified Unix timestamp in milliseconds.
-   **display\_tasks\_in\_reverse\_order** (`boolean`, optional) Set to true to display tasks in reverse order.
-   **filter\_by\_assignees** (`array[string]`, optional) Filter tasks by assignee IDs. Provide an array of assignee IDs to filter tasks assigned to specific users.
-   **filter\_by\_custom\_field** (`array[string]`, optional) Include tasks with specific values in one Custom Field. This can be a Custom Relationship. Provide an array of strings representing the field values.
-   **filter\_by\_custom\_fields** (`array[string]`, optional) Include tasks with specific values in one or more Custom Fields. Use a JSON array of objects, where each object includes ‘field\_id’, ‘operator’, and ‘value’.
-   **filter\_by\_date\_done\_before** (`integer`, optional) Filter tasks completed before a specified Unix time in milliseconds.
-   **filter\_by\_statuses** (`array[string]`, optional) Filter tasks by their statuses. Use an array of status strings, such as \[‘to do’, ‘in progress’\].
-   **filter\_by\_tags** (`array[string]`, optional) Filter tasks by a list of tags. Provide an array of strings representing the tags to filter by.
-   **filter\_by\_watchers** (`array[string]`, optional) An array of watcher IDs to filter tasks by watchers. Each ID should be a string.
-   **filter\_date\_created\_after** (`integer`, optional) Filter tasks created after this Unix timestamp in milliseconds.
-   **filter\_date\_done\_after** (`integer`, optional) Filter tasks completed after a specified date in Unix time (milliseconds).
-   **filter\_date\_updated\_after** (`integer`, optional) Filter tasks updated after the specified Unix timestamp in milliseconds.
-   **filter\_date\_updated\_less\_than** (`integer`, optional) Filter tasks updated before a specific date, using Unix time in milliseconds.
-   **filter\_due\_date\_before** (`integer`, optional) Filter tasks with due dates earlier than the specified Unix time in milliseconds.
-   **filter\_due\_date\_greater\_than** (`integer`, optional) Filter tasks by a due date greater than the provided Unix time in milliseconds.
-   **include\_archived\_tasks** (`boolean`, optional) Set to true to include archived tasks in the results. By default, archived tasks are excluded.
-   **include\_closed\_tasks** (`boolean`, optional) Set to true to include closed tasks in the response. Defaults to false to exclude them.
-   **include\_markdown\_task\_descriptions** (`boolean`, optional) Set to true to return task descriptions in Markdown format.
-   **include\_subtasks** (`boolean`, optional) Set to true to include subtasks; false to exclude them. Defaults to false.
-   **include\_tasks\_in\_multiple\_lists** (`boolean`, optional) Set to true to include tasks that exist in multiple lists. By default, these tasks are excluded.
-   **order\_by\_field** (`string`, optional) Specify the field to order tasks by. Options: ‘id’, ‘created’, ‘updated’, ‘due\_date’. Defaults to ‘created’.
-   **page\_number\_to\_fetch** (`integer`, optional) Specify the page number to fetch tasks from, starting at 0.

## ClickupApi.CreateNewClickupTask



Create a new task in ClickUp.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **target\_list\_id** (`integer`, optional) The ID of the list where the new task will be created. This should be an integer identifying the list in ClickUp. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## ClickupApi.ViewTaskDetails



Retrieve detailed information about a specific task.

**Parameters**

-   **task\_identifier** (`string`, required) The unique identifier for the task you want to retrieve details for in ClickUp.
-   **filter\_custom\_fields** (`array[string]`, optional) Include tasks with specific values in one or more custom fields using the specified JSON format. Custom Relationships are supported.
-   **include\_markdown\_description** (`boolean`, optional) Set to true to return task descriptions in Markdown format.
-   **include\_subtasks** (`boolean`, optional) Include subtasks in the task details if set to true. Defaults to false.
-   **use\_custom\_task\_ids** (`boolean`, optional) Set to true to reference a task by its custom task ID.
-   **workspace\_id\_for\_custom\_task** (`integer`, optional) Provide the Workspace ID when referencing a task by its custom task ID. Required if `custom_task_ids` is true.

## ClickupApi.UpdateTaskInClickup



Update task details in ClickUp.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **task\_identifier** (`string`, optional) The ID of the task to be updated. Provide either the standard task ID or a custom task ID if ‘custom\_task\_ids’ is true. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **workspace\_id\_for\_custom\_task** (`integer`, optional) Provide the Workspace ID when referencing a task by its custom task ID (requires `custom_task_ids` set to true). Only used when mode is ‘execute’.
-   **use\_custom\_task\_ids** (`boolean`, optional) Set to true to reference a task by its custom task ID. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## ClickupApi.DeleteTask



Delete a task from your ClickUp Workspace.

**Parameters**

-   **content\_type** (`string`, required) Specify the media type of the resource. Typically set as ‘application/json’.
-   **task\_id** (`string`, required) The ID of the task to be deleted. This is mandatory and should be a valid task identifier.
-   **use\_custom\_task\_ids** (`boolean`, optional) Set to true if referencing a task by custom task ID is required.
-   **workspace\_id** (`integer`, optional) Provide the Workspace ID when referencing a task by its custom task ID. Required if `custom_task_ids` is true.

## ClickupApi.GetFilteredTeamTasks



Retrieve tasks from a workspace based on specified filters.

**Parameters**

-   **workspace\_id** (`integer`, required) The ID of the workspace to retrieve tasks from. Must be an integer.
-   **assignee\_ids** (`array[string]`, optional) Filter tasks by assignee using their ClickUp user IDs.
-   **custom\_task\_type\_filters** (`array[number]`, optional) Filter tasks by custom task types. Use `0` for tasks, `1` for Milestones, and other numbers for Workspace-defined types.
-   **display\_tasks\_in\_reverse\_order** (`boolean`, optional) Set to true to display tasks in reverse order.
-   **due\_date\_before** (`integer`, optional) Filter tasks with due dates earlier than the specified Unix timestamp in milliseconds.
-   **due\_date\_greater\_than** (`integer`, optional) Filter tasks by a due date greater than the specified Unix time in milliseconds.
-   **filter\_by\_custom\_fields** (`array[string]`, optional) Include tasks with specific values in Custom Fields. Provide an array of objects with field\_id, operator, and value keys.
-   **filter\_by\_date\_created\_before** (`integer`, optional) Filter tasks created before this date. Specify as Unix time in milliseconds.
-   **filter\_by\_date\_done\_after** (`integer`, optional) Filter tasks by the completion date after the given Unix time in milliseconds.
-   **filter\_by\_done\_date\_before** (`integer`, optional) Filter tasks completed before a specific date. Provide the date in Unix time (milliseconds).
-   **filter\_by\_list\_ids** (`array[string]`, optional) An array of list IDs to filter tasks by. Example: \[“1234”, “6789”\].
-   **filter\_by\_project\_ids** (`array[string]`, optional) An array of folder IDs to filter tasks by specific folders. For example, \[‘1234’, ‘6789’\].
-   **filter\_by\_space\_ids** (`array[string]`, optional) An array of space IDs to filter tasks by. Example values: \[‘1234’, ‘6789’\].
-   **filter\_by\_tags** (`array[string]`, optional) Filter tasks by tags. Use `%20` for spaces within tags. Example: `urgent%20task`.
-   **filter\_by\_update\_date\_before** (`integer`, optional) Filter tasks updated before a specific date, provided as Unix time in milliseconds.
-   **filter\_by\_updated\_date\_greater\_than** (`integer`, optional) Filter tasks by their updated date, greater than the specified Unix time in milliseconds.
-   **filter\_created\_date\_after** (`integer`, optional) Filter tasks by creation date greater than the specified Unix time in milliseconds.
-   **include\_closed\_tasks** (`boolean`, optional) Set to true to include closed tasks, false to exclude them. By default, closed tasks are excluded.
-   **include\_markdown\_description** (`boolean`, optional) Set to true to return task descriptions in Markdown format. Default is false.
-   **include\_subtasks** (`boolean`, optional) Set to true to include subtasks, or false to exclude them. Defaults to false (exclude).
-   **order\_tasks\_by** (`string`, optional) Specify the field by which to order tasks. Options include: ‘id’, ‘created’, ‘updated’, ‘due\_date’. Defaults to ‘created’.
-   **page\_number\_to\_fetch** (`integer`, optional) Page number to fetch, starting at 0, in the paginated list of tasks.
-   **parent\_task\_id** (`string`, optional) Include the parent task ID to return subtasks in the response.
-   **status\_filters** (`array[string]`, optional) Filter tasks by their statuses. Use ‘%20’ for spaces. Example: \[‘to%20do’, ‘in%20progress’\].

## ClickupApi.MergeTasksInClickup



Merge multiple tasks into a target task in ClickUp.

**Parameters**

-   **source\_task\_ids\_to\_merge** (`array[string]`, required) Array of task IDs to merge into the target task in ClickUp.
-   **target\_task\_id** (`string`, required) ID of the target task into which other tasks will be merged.

## ClickupApi.TaskStatusDuration



Get the duration a task spends in each status.

**Parameters**

-   **content\_type** (`string`, required) Specify the content type for the API request, typically ‘application/json’.
-   **task\_identifier** (`string`, required) The unique identifier for the task you want to query. Use this to specify which task’s status duration you are interested in.
-   **use\_custom\_task\_ids** (`boolean`, optional) Set to true to reference a task by its custom task ID.
-   **workspace\_id** (`integer`, optional) The Workspace ID must be provided when referencing a task by its custom task ID and `custom_task_ids` is set to `true`.

## ClickupApi.GetTaskTimeInStatus



Retrieve duration of tasks in various statuses.

**Parameters**

-   **content\_type\_header** (`string`, required) The MIME type of the body of the request. Typically set to ‘application/json’.
-   **task\_ids\_list** (`string`, required) A list of up to 100 task IDs to check duration in status. Include each task ID separated by commas.
-   **use\_custom\_task\_ids** (`boolean`, optional) Set to true to reference tasks by custom task IDs.
-   **workspace\_id\_for\_custom\_task\_ids** (`integer`, optional) Provide the Workspace ID if using custom task IDs. Required when `custom_task_ids` is `true`.

## ClickupApi.ViewTaskTemplates



View available task templates in a workspace.

**Parameters**

-   **content\_type\_header** (`string`, required) Sets the ‘Content-Type’ for the API request, typically ‘application/json’.
-   **page\_number** (`integer`, required) The page number of results to retrieve. Used for pagination.
-   **workspace\_id** (`integer`, required) The ID of the workspace for which to retrieve task templates. This is used to specify the target workspace in ClickUp.

## ClickupApi.CreateTaskFromTemplate



Create a task using an existing template.

**Parameters**

-   **target\_list\_id** (`integer`, required) The ID of the list where the task will be created. This should be an integer associated with the desired list in your workspace.
-   **task\_name** (`string`, required) The name of the task to be created using the template.
-   **task\_template\_id** (`string`, required) A string representing the ID of the task template to be used for task creation. Ensure the template is added to your workspace.

## ClickupApi.CreateListFromFolderTemplate



Create a new list in a folder using a template.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **folder\_identifier** (`string`, optional) The ID of the folder where the new list will be created using the specified template. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **template\_id\_for\_list\_creation** (`string`, optional) ID of the template to use for creating a new list in the folder. Ensure the template is added to your Workspace library. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## ClickupApi.CreateListFromTemplate



Create a new list in a ClickUp space using a template.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **space\_id\_for\_list\_creation** (`string`, optional) ID of the ClickUp Space where the new List will be created using the template. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **template\_id** (`string`, optional) ID of the template to use for creating the list in the specified ClickUp space. It must be accessible in your Workspace. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## ClickupApi.GetWorkspaceSeatDetails



Retrieve seat details for a workspace.

**Parameters**

-   **workspace\_id** (`string`, required) The unique ID of the workspace for which seat details are to be retrieved.

## ClickupApi.GetWorkspacePlan



Retrieve the current subscription plan for a workspace.

**Parameters**

-   **workspace\_id** (`string`, required) The unique ID for the workspace whose subscription plan you want to retrieve.

## ClickupApi.CreateUserGroup



Create a user group within a ClickUp workspace.

**Parameters**

-   **group\_name** (`string`, required) The name of the user group to be created within the workspace. This should be a descriptive name to identify the group easily.
-   **user\_group\_members** (`array[integer]`, required) List of user IDs to include in the user group. Each ID should be an integer representing a user within the workspace.
-   **workspace\_id** (`integer`, required) The unique ID of the ClickUp workspace where the user group will be created.
-   **group\_handle** (`string`, optional) A unique string identifier for the user group to be created. This will be used as the group’s handle within the workspace.

## ClickupApi.GetWorkspaceCustomTaskTypes



Retrieve custom task types for a specific workspace.

**Parameters**

-   **workspace\_id** (`integer`, required) The ID of the Workspace to retrieve custom task types for.

## ClickupApi.UpdateUserGroup



Update and manage user groups within a ClickUp Workspace.

**Parameters**

-   **user\_group\_id** (`string`, required) The unique identifier of the User Group within the Workspace. This ID is required to specify which group to update.
-   **add\_member\_ids** (`array[integer]`, optional) An array of user IDs to add to the User Group. Each ID should be an integer.
-   **handle\_identifier** (`string`, optional) A unique identifier or handle for the User Group. This is used to reference the group within ClickUp.
-   **remove\_members\_ids** (`array[integer]`, optional) An array of integer IDs representing the users to be removed from the User Group.
-   **user\_group\_name** (`string`, optional) The new name for the User Group within the ClickUp Workspace. This should be a string representing the desired name.

## ClickupApi.DeleteUserGroup



Delete a user group from your ClickUp workspace.

**Parameters**

-   **user\_group\_id** (`string`, required) The identifier of the user group to be deleted from the workspace.

## ClickupApi.GetUserGroupsInWorkspace



Retrieve user groups in a ClickUp workspace.

**Parameters**

-   **workspace\_id** (`integer`, required) The ID of the ClickUp workspace to retrieve user groups from.
-   **user\_group\_ids** (`string`, optional) List one or more User Group IDs to retrieve details about specific user groups in the workspace.

## ClickupApi.GetTrackedTimeForTask



Fetch tracked time for a specific task.

**Parameters**

-   **set\_content\_type\_header** (`string`, required) Set the Content-Type header for the request, typically as ‘application/json’.
-   **task\_id** (`string`, required) The unique identifier for the task whose tracked time you want to retrieve.
-   **use\_custom\_task\_ids** (`boolean`, optional) Set to true to reference tasks by their custom task IDs instead of default IDs.
-   **workspace\_id** (`integer`, optional) The ID of the Workspace to be provided when referencing a task by its custom task ID. Required if `custom_task_ids` is `true`.

## ClickupApi.ClickupLegacyTimeTracking



Log time entry for a ClickUp task using legacy endpoint.

**Parameters**

-   **clickup\_task\_id** (`string`, required) The unique identifier of the task for which time is being logged. This can refer to either the standard task ID or a custom task ID if specified.
-   **end\_timestamp** (`integer`, required) Epoch timestamp indicating when the time tracking ended for the task.
-   **start\_time\_unix\_epoch** (`integer`, required) The start time of the time entry in Unix epoch format. This is required to log time for a task.
-   **time\_spent\_seconds** (`integer`, required) Duration of time spent on the task in seconds. This is the time you want to log for the specific task.
-   **use\_custom\_task\_ids** (`boolean`, optional) Set to true to reference a task by its custom task ID.
-   **workspace\_id** (`integer`, optional) Provide the Workspace ID when `custom_task_ids` is `true`.

## ClickupApi.EditLegacyTimeEntry



Edit a legacy time tracked entry for a task in ClickUp.

**Parameters**

-   **end\_time\_epoch** (`integer`, required) The end time of the tracked interval in Unix epoch format. It marks when the time entry should conclude.
-   **legacy\_time\_interval\_id** (`string`, required) The unique identifier for the time interval to be edited.
-   **start\_timestamp** (`integer`, required) The start time of the time entry as a Unix timestamp in milliseconds.
-   **task\_identifier** (`string`, required) The unique identifier of the task for which the legacy time entry is being edited. This is required to specify the task in ClickUp.
-   **time\_duration\_in\_seconds** (`integer`, required) The total time duration (in seconds) for the time entry to be updated. This modifies the tracked time for a specific task.
-   **use\_custom\_task\_ids** (`boolean`, optional) Set to true to reference a task by its custom task ID.
-   **workspace\_id** (`integer`, optional) The Workspace ID required when custom task IDs are used. This must be set if `custom_task_ids` is `true`.

## ClickupApi.RemoveTimeEntry



Delete a specific time entry from a task.

**Parameters**

-   **content\_type\_header** (`string`, required) Specify the media type of the resource (usually ‘application/json’).
-   **interval\_id\_for\_removal** (`string`, required) The unique identifier of the time entry to delete from a task.
-   **task\_identifier** (`string`, required) The identifier of the task from which to delete the time entry. This must match the task ID used in ClickUp.
-   **use\_custom\_task\_ids** (`boolean`, optional) Set to true to reference a task by its custom task ID.
-   **workspace\_id** (`integer`, optional) Provide the Workspace ID when `use_custom_task_ids` is `true`. Required to identify the workspace in ClickUp.

## ClickupApi.GetTimeEntriesInDateRange



Retrieve time entries within a specified date range.

**Parameters**

-   **content\_type** (`string`, required) Specifies the format of the response content. Usually set to ‘application/json’.
-   **workspace\_id** (`integer`, required) Specify the Workspace ID for filtering time entries when using custom task IDs.
-   **end\_date\_unix\_milliseconds** (`number`, optional) Specify the end date in Unix time (milliseconds) to filter time entries up to this point.
-   **filter\_by\_assignee** (`number`, optional) Filter by user IDs. Use commas to separate multiple IDs (e.g., ‘1234,9876’). Only accessible to Workspace Owners/Admins.
-   **folder\_id** (`integer`, optional) Include time entries for tasks in a specific folder by providing its ID. Only one location filter (space, folder, list, or task) can be used at a time.
-   **include\_approval\_details** (`boolean`, optional) Include detailed approval information for each time entry, such as Approver ID, Approved Time, List of Approvers, and Approval Status.
-   **include\_approval\_history** (`boolean`, optional) Set to true to include the approval history for each time entry, with status changes, notes, and approvers.
-   **include\_location\_names** (`boolean`, optional) Include the names of the List, Folder, and Space in the response along with their IDs when set to true.
-   **include\_only\_billable\_entries** (`boolean`, optional) Set to `true` to include only billable time entries, or `false` for non-billable entries.
-   **include\_task\_tags** (`boolean`, optional) Set to true to include task tags in the response for associated time entries.
-   **space\_id** (`integer`, optional) Include time entries associated only with tasks in the specified Space using its ID.
-   **specific\_list\_id** (`integer`, optional) Include only time entries associated with tasks in a specified List by providing the List ID.
-   **specific\_task\_id** (`string`, optional) Include only time entries associated with the specified task.
-   **start\_date\_in\_unix\_milliseconds** (`number`, optional) The start date of the time entries in Unix time (milliseconds).
-   **use\_custom\_task\_ids** (`boolean`, optional) Set to true to reference tasks by their custom task IDs. Requires specifying the team\_id.
-   **workspace\_id\_for\_custom\_task\_ids** (`integer`, optional) Provide the Workspace ID when referencing a task by its custom task ID, and `custom_task_ids` is set to true.

## ClickupApi.CreateTimeEntry



Create a new time entry for tracking work.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **team\_id\_numeric** (`integer`, optional) The numeric ID of the workspace. Required if referencing a task by custom task ID. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **workspace\_id** (`integer`, optional) Required if `custom_task_ids` is true. Provide the Workspace ID for the team. Only used when mode is ‘execute’.
-   **use\_custom\_task\_ids** (`boolean`, optional) Set to true to reference a task by its custom task id. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## ClickupApi.ViewTimeEntry



Retrieve details of a specific time entry.

**Parameters**

-   **content\_type** (`string`, required) Specifies the format of the content being sent or received, such as ‘application/json’.
-   **time\_entry\_id** (`string`, required) The ID of a specific time entry, which can be found using the Get Time Entries Within a Date Range endpoint.
-   **workspace\_id** (`integer`, required) The ID of the workspace (team) to which the time entry belongs.
-   **include\_approval\_details** (`boolean`, optional) Include the details of the approval for the time entry when true.
-   **include\_approval\_history** (`boolean`, optional) Include the approval history of the time entry in the response. Set to true to include.
-   **include\_location\_names** (`boolean`, optional) Include names of the List, Folder, and Space in the response along with their respective IDs.
-   **include\_task\_tags** (`boolean`, optional) Set to true to include task tags in the response.

## ClickupApi.DeleteTimeEntry



Deletes a time entry from a ClickUp workspace.

**Parameters**

-   **content\_type\_header** (`string`, required) Specify the content type of the request, usually ‘application/json’.
-   **timer\_ids\_to\_delete** (`integer`, required) Comma-separated list of timer IDs to delete.
-   **workspace\_id** (`integer`, required) The unique identifier for the ClickUp workspace from which you want to delete the time entry.

## ClickupApi.UpdateTimeEntry



Update the details of a time entry.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **workspace\_id** (`integer`, optional) The Workspace ID is required when referencing a task by its custom task ID. Provide it if `custom_task_ids` is set to `true`. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **team\_identifier** (`integer`, optional) The ID of the workspace (team) where the time entry is located. This is an integer value. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **timer\_id** (`integer`, optional) The unique identifier of the time entry to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **use\_custom\_task\_ids** (`boolean`, optional) Set to true to reference tasks by custom task IDs instead of standard IDs. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## ClickupApi.ViewTimeEntryChanges



View a list of changes made to a time entry.

**Parameters**

-   **content\_type\_header** (`string`, required) The media type for the request, typically ‘application/json’. Required for HTTP headers.
-   **time\_entry\_id** (`string`, required) The ID of a time entry. This ID can be obtained using the Get Time Entries Within a Date Range endpoint.
-   **workspace\_id** (`integer`, required) The ID of the workspace (team) where the time entry resides.

## ClickupApi.GetCurrentRunningTimeEntry



Retrieve the current running time entry for the user.

**Parameters**

-   **content\_type\_header** (`string`, required) The MIME type of the content, e.g., ‘application/json’. Required for HTTP content negotiation.
-   **workspace\_id** (`integer`, required) The ID of the workspace to retrieve the running time entry for. It identifies the specific workspace within ClickUp.
-   **assignee\_user\_id** (`number`, optional) The user ID of the time entry assignee for whom the current running timer is being retrieved. This identifies which user’s timer is actively running.

## ClickupApi.RemoveTagsFromTimeEntries



Remove labels from specific time entries.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **workspace\_id** (`integer`, optional) The unique ID of the Workspace from which to remove labels from time entries. Must be an integer. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## ClickupApi.GetTimeEntryTags



Retrieve all tags from time entries in a workspace.

**Parameters**

-   **content\_type\_header** (`string`, required) The media type of the resource, usually set to ‘application/json’.
-   **workspace\_id** (`integer`, required) The unique ID of the workspace to retrieve tags from.

## ClickupApi.AddTagToTimeEntry



Add a label to a specific time entry in ClickUp.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **workspace\_id** (`integer`, optional) The ID of the workspace where the time entry is located. This is required to specify which team the tag should be added to. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## ClickupApi.RenameTimeEntryLabel



Rename a time entry label in ClickUp.

**Parameters**

-   **current\_label\_name** (`string`, required) The current name of the time entry label that needs to be renamed.
-   **foreground\_color\_for\_tag** (`string`, required) Specify the hexadecimal foreground color for the tag (e.g., ‘#FFFFFF’).
-   **label\_background\_color** (`string`, required) Hex code for the new background color of the label (e.g., ‘#FFFFFF’).
-   **new\_label\_name** (`string`, required) The new name for the time entry label to be applied in ClickUp.
-   **workspace\_id** (`integer`, required) The ID of the workspace where the label is located. This is required to specify the team in ClickUp whose label you want to rename.

## ClickupApi.StartTimerClickup



Start a timer for the authenticated ClickUp user.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **workspace\_identifier** (`integer`, optional) The Workspace ID required when custom task IDs are used. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **workspace\_id** (`integer`, optional) Provide the Workspace ID when `custom_task_ids` is `true`. Required for task referencing. Only used when mode is ‘execute’.
-   **use\_custom\_task\_ids** (`boolean`, optional) Set to true to reference a task by its custom task ID. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## ClickupApi.StopTimerEntry



Stops a running timer for the authenticated user.

**Parameters**

-   **content\_type** (`string`, required) Specifies the media type of the request. Usually ‘application/json’.
-   **workspace\_id** (`integer`, required) The ID of the workspace where the timer is running. Required to stop the timer.

## ClickupApi.InviteUserToWorkspace



Invite a user to your ClickUp Workspace as a member.

**Parameters**

-   **invite\_as\_admin** (`boolean`, required) Indicate if the user should be invited as an admin. True for admin, False for regular member.
-   **user\_email** (`string`, required) The email address of the user to be invited to the Workspace. Must be a valid email format.
-   **workspace\_id** (`integer`, required) The unique ID of the workspace to which the user is being invited.
-   **custom\_role\_id** (`integer`, optional) The ID of the custom role to assign to the user in the Workspace. Must be an integer.

## ClickupApi.GetWorkspaceUserInfo



Retrieve user information from a specified workspace.

**Parameters**

-   **user\_id** (`integer`, required) The unique identifier of the user to retrieve information for. This is required to specify which user’s information is being accessed in the workspace.
-   **workspace\_id** (`integer`, required) The unique ID of the Workspace. Used to specify which Workspace’s user information is to be retrieved.
-   **show\_shared\_items** (`boolean`, optional) Set to `true` to include details of shared items; `false` excludes them by default.

## ClickupApi.UpdateUserWorkspaceDetails



Update a user’s name and role in a ClickUp workspace.

**Parameters**

-   **assign\_admin\_role** (`boolean`, required) Set to true to assign the user as an admin in the workspace, otherwise false.
-   **custom\_role\_id** (`integer`, required) An integer representing the custom role ID to assign to the user in the workspace. This is required for users with specific roles.
-   **user\_identifier** (`integer`, required) The unique identifier for the user within the workspace. This value is required to specify which user’s details need updating.
-   **user\_name** (`string`, required) The new full name of the user to be updated in the ClickUp workspace.
-   **workspace\_id** (`integer`, required) The ID of the ClickUp workspace where the user’s details will be updated.

## ClickupApi.RemoveUserFromWorkspace



Remove a user from a ClickUp workspace.

**Parameters**

-   **user\_id** (`integer`, required) The ID of the user to be deactivated from the workspace.
-   **workspace\_id** (`integer`, required) The ID of the Workspace in ClickUp from which the user will be removed.

## ClickupApi.GetTeamViews



Retrieve task and page views at the workspace level.

**Parameters**

-   **workspace\_id** (`integer`, required) The ID of the workspace to retrieve task and page views from in ClickUp.

## ClickupApi.CreateTeamView



Add various views to a workspace at the Everything Level.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **workspace\_id** (`integer`, optional) The unique identifier for the workspace where the view will be added. This corresponds to the team or workspace ID. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## ClickupApi.GetSpaceViews



Retrieve the task and page views for a specified Space.

**Parameters**

-   **space\_identifier** (`integer`, required) The unique integer ID of the space for which to retrieve task and page views.

## ClickupApi.AddSpaceView



Add a new view to a ClickUp space.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **space\_id** (`integer`, optional) The unique identifier of the ClickUp space where the view will be added. It should be an integer. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## ClickupApi.GetFolderViews



Retrieve available task and page views for a Folder in ClickUp.

**Parameters**

-   **folder\_id** (`integer`, required) The ID of the folder to retrieve views for. This should be an integer value.

## ClickupApi.AddViewToFolder



Add various view types to a ClickUp folder.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **folder\_id** (`integer`, optional) The unique integer ID of the ClickUp folder where the view will be added. Required for specifying the target folder. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## ClickupApi.GetListViews



Retrieve available views for a specific list.

**Parameters**

-   **target\_list\_id** (`integer`, required) The unique identifier for the list to retrieve views from. This should be an integer.

## ClickupApi.AddViewToClickupList



Add various views to a ClickUp list.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **clickup\_list\_id** (`integer`, optional) An integer representing the ID of the ClickUp list to which the view will be added. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## ClickupApi.ViewTaskOrPageInfo



Retrieve details of a specific task or page view.

**Parameters**

-   **view\_identifier** (`string`, required) A unique identifier for the specific task or page view in ClickUp to be retrieved. This is required to obtain the relevant information.

## ClickupApi.UpdateViewSettings



Update the settings and configuration of a view.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **view\_identifier** (`string`, optional) The unique identifier for the view to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## ClickupApi.DeleteView



Delete a specified view from ClickUp.

**Parameters**

-   **view\_id** (`string`, required) The ID of the view to be deleted in ClickUp. Must be provided as a string.

## ClickupApi.GetVisibleTasksInView



Retrieve all visible tasks from a ClickUp view.

**Parameters**

-   **pagination\_page\_number** (`integer`, required) The specific page number of tasks to retrieve. Used for pagination in task lists, starting at 1.
-   **view\_identifier** (`string`, required) The ID of the ClickUp view from which to retrieve visible tasks. Must be a string.

## ClickupApi.GetWorkspaceWebhooks



Retrieve webhooks for a workspace.

**Parameters**

-   **workspace\_id** (`integer`, required) The ID of the Workspace to retrieve the webhooks for.

## ClickupApi.SetupClickupWebhook



Set up a ClickUp webhook to monitor events.

**Parameters**

-   **event\_types** (`array[string]`, required) An array of event types to subscribe to, or use `*` to subscribe to all events. Refer to ClickUp documentation for available options.
-   **webhook\_url** (`string`, required) The URL where the webhook will send POST requests. Must be reachable to receive event data.
-   **workspace\_id** (`integer`, required) The ID of the workspace where the webhook will be set up. Use this to specify the team context for monitoring.
-   **folder\_id** (`integer`, optional) Specify the folder ID in ClickUp for which the webhook is to be created. It should be an integer value representing the folder.
-   **space\_identifier** (`integer`, optional) The numeric ID of the space within a ClickUp workspace for which the webhook is set up.
-   **specific\_task\_id** (`string`, optional) Unique identifier for a specific task to monitor. Leave empty if not targeting a specific task.
-   **target\_list\_id** (`integer`, optional) The ID of the list in ClickUp for which you want to set up a webhook.

## ClickupApi.UpdateClickupWebhookEvents



Update a ClickUp webhook to modify monitored events.

**Parameters**

-   **monitored\_events** (`string`, required) A comma-separated list of events for the webhook to monitor. Use valid event names as per ClickUp webhook documentation.
-   **webhook\_endpoint\_url** (`string`, required) The URL where the webhook should send POST requests for the events. Must be a valid and accessible URL.
-   **webhook\_identifier** (`string`, required) The unique identifier for the webhook to be updated, formatted as a UUID.
-   **webhook\_status** (`string`, required) Specify the new status of the webhook. Use ‘active’ to enable or ‘inactive’ to disable it.

## ClickupApi.DeleteWebhook



Delete a webhook to stop event monitoring.

**Parameters**

-   **webhook\_id** (`string`, required) The unique identifier for the webhook to be deleted. Must be in UUID format.

## Reference

Below is a reference of enumerations used by some of the tools in the ClickupApi MCP Server:

### ToolMode

-   **GET\_REQUEST\_SCHEMA**: `get_request_schema`
-   **EXECUTE**: `execute`

## Auth

The ClickupApi MCP Server uses the Auth Provider with id `arcade-clickup` to connect to users’ ClickupApi accounts. In order to use the MCP Server, you will need to configure the `arcade-clickup` auth provider.

For detailed information on configuring the ClickUp OAuth provider with Arcade, see the [ClickUp Auth Provider documentation](/references/auth-providers/clickup.md).

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_clickup_api ``` Learn more](/guides/deployment-hosting.md)

Last updated on February 6, 2026

[CalendlyApi](/en/resources/integrations/productivity/calendly-api.md)
[FigmaApi](/en/resources/integrations/productivity/figma-api.md)
