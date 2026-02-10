---
title: "AsanaApi"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Productivity & Docs](/en/resources/integrations/productivity/asana.md)
AsanaApi

# AsanaApi

Arcade Unoptimized

**Description:** Tools that enable LLMs to interact directly with the Asana API.

**Author:** Arcade

**Auth:** User authorization

[![PyPI Version](https://img.shields.io/pypi/v/arcade_asana_api)](https://pypi.org/project/arcade_asana_api/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_asana_api)](https://pypi.org/project/arcade_asana_api/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_asana_api)](https://pypi.org/project/arcade_asana_api/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_asana_api)](https://pypi.org/project/arcade_asana_api/)

AsanaApi is a [Unoptimized MCP Server](/guides/create-tools/improve/types-of-tools.md#unoptimized-tools)
: each tool mirrors one HTTP endpoint and offers LLMs a way to interact with the low-level API.



Differently from [Optimized MCP Servers](/guides/create-tools/improve/types-of-tools.md#optimized-tools)
, Unoptimized tools are heavily influenced by the original API design, which is not usually optimized for LLM usage. For this reason, we recommend thoroughly evaluating the tools with your Agents or chatbots before using it in production. [Read more](/guides/create-tools/improve/types-of-tools.md) about Optimized vs Unoptimized tools.

The AsanaApi MCP Server offers a comprehensive suite of tools for managing and interacting with Asana’s features. Users can perform a variety of actions, including:

## Available Tools

Tool Name

Description

AsanaApi.GetPendingAccessRequests

Fetch pending access requests for a target object.

AsanaApi.SubmitAccessRequestAsana

Submit a new access request for Asana projects or portfolios.

AsanaApi.ApproveAccessRequest

Approves an access request for a target object in Asana.

AsanaApi.RejectAccessRequest

Reject an access request for a target object.

AsanaApi.GetAllocationRecord

Fetch the complete allocation record for a given ID.

AsanaApi.UpdateAllocation

Update an existing allocation in Asana.

AsanaApi.DeleteAllocation

Deletes a specific allocation in Asana.

AsanaApi.GetProjectAllocations

Retrieve allocations for a specific project, user, or placeholder.

AsanaApi.CreateAllocation

Creates a new allocation in Asana and returns its details.

AsanaApi.FetchAttachmentDetails

Fetch the full record of a specific attachment.

AsanaApi.DeleteAttachment

Delete a specific attachment in Asana.

AsanaApi.GetAttachments

Retrieve all attachments for a specified Asana object.

AsanaApi.RetrieveAuditLogEvents

Retrieve audit log events from your Asana domain.

AsanaApi.CreateParallelRequestsAsana

Execute multiple requests to Asana's API simultaneously.

AsanaApi.GetCustomFieldSettingsForProject

Get custom field settings for a specified project.

AsanaApi.GetPortfolioCustomFieldSettings

Retrieve custom field settings for an Asana portfolio.

AsanaApi.CreateCustomFieldInWorkspace

Create a new custom field in an Asana workspace.

AsanaApi.GetCustomFieldMetadata

Retrieve complete metadata of a custom field in Asana.

AsanaApi.UpdateAsanaCustomField

Update specific fields of an Asana custom field.

AsanaApi.DeleteCustomField

Delete a specific custom field in Asana.

AsanaApi.GetCustomFieldsForWorkspace

Retrieve custom fields for a specific workspace.

AsanaApi.AddEnumOptionToCustomField

Add an enum option to a custom field in Asana.

AsanaApi.ReorderEnumOptionCustomField

Reorder enum options in a custom field.

AsanaApi.UpdateEnumOption

Update an existing enum option in Asana custom fields.

AsanaApi.GetCustomTypes

Retrieve all custom types for a project in Asana.

AsanaApi.GetCustomTypeDetails

Retrieve complete details of a specific custom type in Asana.

AsanaApi.FetchAsanaEvents

Fetches detailed records of recent Asana events.

AsanaApi.InitiateGraphExport

Initiate a graph export job for Asana objects.

AsanaApi.InitiateBulkResourceExport

Initiate a bulk export of tasks, teams, or messages in a workspace.

AsanaApi.GetGoalRelationshipDetails

Retrieve details of a specific Asana goal relationship.

AsanaApi.UpdateGoalRelationship

Update an existing goal relationship in Asana.

AsanaApi.GetGoalRelationships

Retrieve compact goal relationship records from Asana.

AsanaApi.CreateGoalSupportingRelationship

Add a supporting resource to a specific goal in Asana.

AsanaApi.RemoveGoalRelationship

Removes a supporting relationship from a goal in Asana.

AsanaApi.GetAsanaGoalDetails

Fetches detailed information for a specific Asana goal.

AsanaApi.UpdateAsanaGoal

Update a specific goal in Asana.

AsanaApi.DeleteAsanaGoal

Delete a specific goal in Asana.

AsanaApi.GetCompactGoals

Retrieve compact goal records from Asana.

AsanaApi.CreateAsanaGoal

Create a new goal in Asana workspace or team.

AsanaApi.CreateGoalMetric

Create and add a goal metric to a specific goal.

AsanaApi.UpdateGoalMetric

Updates a goal's current metric value in Asana.

AsanaApi.AddFollowersToGoal

Add followers to a specific goal in Asana.

AsanaApi.RemoveGoalFollowers

Remove followers from a specific goal in Asana.

AsanaApi.GetParentGoalsForGoal

Fetches parent goals for a specific Asana goal.

AsanaApi.FetchJobDetails

Fetch complete details for a specific job record in Asana.

AsanaApi.GetMemberships

Retrieve compact membership records from Asana.

AsanaApi.CreateAsanaMembership

Create a new membership in Asana for goals, projects, portfolios, or custom fields.

AsanaApi.GetMembershipInfo

Retrieve membership record details by ID.

AsanaApi.UpdateMembership

Update an existing membership in Asana.

AsanaApi.DeleteAsanaMembership

Delete a membership in Asana.

AsanaApi.RequestOrganizationExport

Submit a request to export an organization in Asana.

AsanaApi.GetOrganizationExportDetails

Fetch details of a specific organization export.

AsanaApi.GetPortfolioMemberships

Retrieve portfolio memberships from Asana.

AsanaApi.GetPortfolioMembership

Retrieve a single portfolio membership record.

AsanaApi.RetrievePortfolioMemberships

Retrieve compact portfolio membership records for a portfolio.

AsanaApi.GetUserOwnedPortfolios

Retrieve a list of portfolios owned by the user.

AsanaApi.CreateAsanaPortfolio

Create a new portfolio in an Asana workspace.

AsanaApi.GetPortfolioDetails

Retrieve complete details of a specific portfolio in Asana.

AsanaApi.UpdatePortfolio

Update an existing Asana portfolio.

AsanaApi.DeletePortfolio

Delete an existing portfolio in Asana.

AsanaApi.GetPortfolioItems

Retrieve a list of items in a portfolio.

AsanaApi.AddItemToPortfolio

Add an item to a portfolio in Asana.

AsanaApi.RemoveItemFromPortfolio

Remove an item from a portfolio in Asana.

AsanaApi.AddCustomFieldToPortfolio

Add a custom field setting to an Asana portfolio.

AsanaApi.RemoveCustomFieldFromPortfolio

Removes a custom field from an Asana portfolio.

AsanaApi.AddPortfolioMembers

Add specified users as members of a portfolio on Asana.

AsanaApi.RemovePortfolioMembers

Remove specified members from a portfolio.

AsanaApi.GetProjectBrief

Retrieve the full record for a project brief.

AsanaApi.UpdateProjectBriefAsana

Update an Asana project brief.

AsanaApi.DeleteProjectBrief

Delete a specific project brief in Asana.

AsanaApi.CreateProjectBrief

Create a new project brief in Asana.

AsanaApi.GetProjectMembershipDetails

Retrieve detailed information for a project membership in Asana.

AsanaApi.GetProjectMemberships

Fetch project membership records from Asana.

AsanaApi.GetProjectStatusUpdate

Fetches a complete status update record for a project.

AsanaApi.DeleteProjectStatus

Delete a specific project status update in Asana.

AsanaApi.GetProjectStatusUpdates

Fetch compact status updates for a given project.

AsanaApi.CreateProjectStatusUpdate

Creates a new status update for a project.

AsanaApi.GetProjectTemplateDetails

Retrieve complete details of a specific Asana project template.

AsanaApi.DeleteProjectTemplate

Delete a specific existing project template in Asana.

AsanaApi.GetAsanaProjectTemplates

Fetch project template records from Asana.

AsanaApi.GetProjectTemplatesForTeam

Retrieve compact project template records for a team.

AsanaApi.InstantiateProjectFromTemplate

Asynchronously instantiate a project from a template.

AsanaApi.GetAsanaProjects

Fetch filtered project records from Asana.

AsanaApi.CreateNewAsanaProject

Create a new project in an Asana workspace or team.

AsanaApi.GetProjectDetails

Retrieve complete details of a specified Asana project.

AsanaApi.UpdateProjectDetails

Update specific fields of an existing project.

AsanaApi.DeleteAsanaProject

Delete a specific project in Asana.

AsanaApi.AsanaDuplicateProject

Initiate duplication of a project in Asana.

AsanaApi.GetProjectsForTask

Retrieve all projects associated with a specific task.

AsanaApi.GetTeamProjects

Fetch the list of projects for a specified team.

AsanaApi.CreateAsanaProjectForTeam

Create a new Asana project for a specific team.

AsanaApi.GetWorkspaceProjects

Fetch compact project records for a workspace.

AsanaApi.CreateProjectInWorkspace

Create a new project in a specified workspace.

AsanaApi.AddCustomFieldSettingToProject

Add a custom field setting to a project in Asana.

AsanaApi.RemoveCustomFieldFromProject

Remove a custom field setting from an Asana project.

AsanaApi.GetTaskCountsForProject

Retrieve task count details for a specific project in Asana.

AsanaApi.AddMembersToProject

Add specified users as members of a project in Asana.

AsanaApi.RemoveMembersFromProject

Remove specified users from a project in Asana.

AsanaApi.AddFollowersToProject

Add specified users as followers to an Asana project.

AsanaApi.RemoveFollowersFromProject

Remove specified users from following a project in Asana.

AsanaApi.CreateProjectTemplate

Create a project template in Asana asynchronously.

AsanaApi.FetchReactionsByEmoji

Retrieve reactions with a specific emoji on an object.

AsanaApi.TriggerAsanaRule

Trigger a rule in Asana using an incoming web request.

AsanaApi.GetAsanaSection

Retrieve a complete record of a single Asana section.

AsanaApi.UpdateSectionNameAsana

Update the name of a specific section in Asana.

AsanaApi.DeleteAsanaSection

Delete a specific, existing section in Asana.

AsanaApi.GetProjectSections

Fetch compact records for sections in a specified project.

AsanaApi.CreateSectionInProject

Create a new section in an Asana project.

AsanaApi.AddTaskToSection

Add a task to a specified section in Asana.

AsanaApi.MoveSectionInProject

Reorder sections within a project in Asana.

AsanaApi.FetchStatusUpdate

Fetch the complete record for a specific status update.

AsanaApi.DeleteStatusUpdate

Delete a specific status update from Asana.

AsanaApi.GetStatusUpdatesForObject

Retrieve status updates for a specified object in Asana.

AsanaApi.CreateStatusUpdate

Create a new status update on an object in Asana.

AsanaApi.GetAsanaStory

Fetch the full record of a specific Asana story.

AsanaApi.UpdateAsanaStory

Update an Asana story's details.

AsanaApi.DeleteAsanaStory

Delete a story you've created on Asana.

AsanaApi.GetTaskStories

Retrieve all stories for a specified Asana task.

AsanaApi.AddTaskComment

Add a comment to a specific task in Asana.

AsanaApi.GetFilteredTags

Retrieve compact tag records with optional filters.

AsanaApi.CreateNewAsanaTag

Create a new tag in an Asana workspace or organization.

AsanaApi.GetAsanaTagDetails

Retrieve complete details for a specific Asana tag.

AsanaApi.UpdateAsanaTag

Update properties of an Asana tag.

AsanaApi.DeleteAsanaTag

Delete a specific tag in Asana with its unique ID.

AsanaApi.GetTagsForTask

Retrieve all tags for a given task.

AsanaApi.RetrieveWorkspaceTags

Retrieve tags for a specific workspace in Asana.

AsanaApi.CreateWorkspaceTag

Create a new tag in a specific Asana workspace.

AsanaApi.FetchProjectTaskTemplates

Retrieve compact task template records for a specific project.

AsanaApi.FetchTaskTemplate

Retrieve the complete record of a specific task template in Asana.

AsanaApi.DeleteTaskTemplate

Delete a specific task template by its ID.

AsanaApi.CreateAsanaTask

Create and initiate an Asana task asynchronously.

AsanaApi.GetFilteredTasks

Retrieve filtered task records from Asana.

AsanaApi.AddAsanaTask

Create a new task in Asana.

AsanaApi.GetTaskDetails

Fetch detailed information for a specific Asana task.

AsanaApi.UpdateTask

Update specific fields of an existing Asana task.

AsanaApi.DeleteAsanaTask

Delete an existing task in Asana, moving it to trash.

AsanaApi.DuplicateAsanaTask

Create a job to duplicate a task in Asana.

AsanaApi.GetProjectTasks

Fetch tasks from a specific Asana project.

AsanaApi.GetTasksForSection

Fetch tasks for a specific section in Asana.

AsanaApi.GetTasksForTag

Retrieve tasks associated with a specific tag in Asana.

AsanaApi.GetUserTaskList

Retrieve tasks in a user's My Tasks list.

AsanaApi.GetTaskSubtasks

Retrieve subtasks for a specific task in Asana.

AsanaApi.CreateSubtaskForTask

Create a new subtask under a specified parent task.

AsanaApi.UpdateTaskParentAsana

Update the parent of an Asana task.

AsanaApi.GetTaskDependencies

Retrieve all dependencies for a specific Asana task.

AsanaApi.AddTaskDependencies

Add dependencies to an Asana task.

AsanaApi.RemoveTaskDependencies

Unlink dependencies from a specified task on Asana.

AsanaApi.GetTaskDependents

Retrieve the dependents of a specific task.

AsanaApi.AddDependentsToTask

Add dependents to an Asana task.

AsanaApi.RemoveTaskDependents

Unlink dependents from an Asana task.

AsanaApi.AddTaskToProject

Add a task to a specified Asana project.

AsanaApi.RemoveTaskFromProject

Remove a task from the specified project in Asana.

AsanaApi.AddTagToTask

Add a tag to a specific Asana task.

AsanaApi.RemoveTagFromTask

Remove a tag from a task in Asana.

AsanaApi.AddFollowersToTask

Adds followers to an Asana task.

AsanaApi.AsanaRemoveFollowerForTask

Remove followers from an Asana task.

AsanaApi.RetrieveTaskByCustomId

Retrieve a task using a custom ID in Asana.

AsanaApi.SearchTasksInWorkspace

Search for tasks in an Asana workspace using complex filters.

AsanaApi.GetTeamMembership

Retrieve complete details for a team membership.

AsanaApi.GetTeamMemberships

Retrieve compact team membership records from Asana.

AsanaApi.FetchTeamMembers

Retrieve the team memberships for a given team in Asana.

AsanaApi.GetUserTeamMemberships

Retrieve team membership records for a specific user.

AsanaApi.AsanaCreateTeam

Create a team in your current Asana workspace.

AsanaApi.GetAsanaTeamDetails

Retrieve detailed information for a specific Asana team.

AsanaApi.UpdateTeamInWorkspace

Update a team within the current workspace.

AsanaApi.GetAsanaTeamsForWorkspace

Retrieve all teams for a specified Asana workspace.

AsanaApi.GetAsanaTeamsForUser

Get all teams assigned to a specific Asana user.

AsanaApi.AddUserToTeam

Adds a user to a specified team on Asana.

AsanaApi.RemoveUserFromTeam

Removes a user from a specified Asana team.

AsanaApi.GetTimePeriodRecord

Retrieve detailed information for a specific time period.

AsanaApi.GetTimePeriods

Retrieve compact time period records from Asana.

AsanaApi.GetTimeTrackingEntries

Retrieve time tracking entries for a specified task.

AsanaApi.CreateTimeTrackingEntry

Create a time tracking entry on a task.

AsanaApi.GetTimeTrackingEntry

Retrieve a time tracking entry from Asana.

AsanaApi.UpdateTimeTrackingEntry

Updates an existing time tracking entry in Asana.

AsanaApi.DeleteTimeTrackingEntry

Delete a specific time tracking entry in Asana.

AsanaApi.FetchTimeTrackingData

Fetch time tracking entries from Asana.

AsanaApi.WorkspaceTypeaheadSearch

Retrieve workspace objects using a typeahead search.

AsanaApi.FetchUserTaskDetails

Retrieve the full record for a user task list.

AsanaApi.FetchUserTasks

Fetch the full task list record for a user from Asana.

AsanaApi.GetAsanaUsers

Retrieve Asana user records across workspaces.

AsanaApi.GetUserDetails

Retrieve detailed user information from Asana.

AsanaApi.GetUserFavorites

Retrieve a user's favorites from a specified Asana workspace.

AsanaApi.GetTeamUsersAsana

Retrieve user records for a specific Asana team.

AsanaApi.GetWorkspaceUsers

Retrieve all users from a specified workspace.

AsanaApi.GetAsanaWebhooks

Retrieve all registered Asana webhooks for a workspace.

AsanaApi.CreateAsanaWebhook

Initiates the creation of a webhook in Asana.

AsanaApi.RetrieveWebhookDetails

Retrieve the full record of a specified webhook.

AsanaApi.AsanaUpdateWebhookFilters

Update filters for an Asana webhook.

AsanaApi.DeleteAsanaWebhook

Permanently delete a webhook in Asana.

AsanaApi.GetWorkspaceMembership

Get the complete record for a workspace membership.

AsanaApi.GetUserWorkspaceMemberships

Fetches a user's workspace membership records in Asana.

AsanaApi.GetWorkspaceMemberships

Retrieve workspace membership records.

AsanaApi.GetVisibleWorkspaces

Retrieve all workspaces visible to the user.

AsanaApi.GetWorkspaceDetails

Retrieve detailed information about a specific Asana workspace.

AsanaApi.UpdateWorkspaceName

Update the name of an existing Asana workspace.

AsanaApi.AddUserToWorkspace

Add a user to an Asana workspace or organization.

AsanaApi.RemoveUserFromWorkspace

Remove a user from an Asana workspace or organization.

AsanaApi.GetWorkspaceEvents

Retrieve all events in a workspace since a specific sync token.

If you need to perform an action that’s not listed here, you can [get in touch with us](mailto:contact@arcade.dev) to request a new tool, or [create your own tools](/guides/create-tools/tool-basics/build-mcp-server.md).

## AsanaApi.GetPendingAccessRequests



Fetch pending access requests for a target object.

**Parameters**

-   **target\_object\_id** (`string`, required) Globally unique identifier for the target object in Asana.
-   **enable\_pretty\_output** (`boolean`, optional) Set to true for readable, indented output. Use primarily for debugging due to increased response size.
-   **filter\_by\_user** (`string`, optional) User identifier to filter requests. Accepts ‘me’, an email, or a user gid.
-   **include\_optional\_properties** (`array[string]`, optional) Comma-separated list of optional properties to include in the response.

## AsanaApi.SubmitAccessRequestAsana



Submit a new access request for Asana projects or portfolios.

**Parameters**

-   **access\_request\_message** (`string`, optional) Optional message providing context or additional information for the access request.
-   **target\_gid** (`string`, optional) The GID of the project or portfolio you are requesting access to in Asana.

## AsanaApi.ApproveAccessRequest



Approves an access request for a target object in Asana.

**Parameters**

-   **access\_request\_global\_id** (`string`, required) Globally unique identifier for the specific access request to approve.

## AsanaApi.RejectAccessRequest



Reject an access request for a target object.

**Parameters**

-   **access\_request\_identifier** (`string`, required) Globally unique identifier for the access request to be rejected. This value is required for identifying which access request to reject in Asana.

## AsanaApi.GetAllocationRecord



Fetch the complete allocation record for a given ID.

**Parameters**

-   **allocation\_unique\_id** (`string`, required) Globally unique identifier for the allocation to fetch the complete record.
-   **enable\_pretty\_output** (`boolean`, optional) Set to true to receive the response in a pretty, readable format. Useful for debugging, but increases response size and time.
-   **include\_optional\_properties** (`array[string]`, optional) Comma-separated list of optional properties to include in the response, as some properties are excluded by default.

## AsanaApi.UpdateAllocation



Update an existing allocation in Asana.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **allocation\_global\_id** (`string`, optional) Globally unique identifier for the allocation to be updated. This is required to specify which allocation record to modify. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **include\_optional\_fields** (`array[string]`, optional) Comma-separated list of optional properties to include in the response. Only used when mode is ‘execute’.
-   **enable\_pretty\_output** (`boolean`, optional) Set to true to receive the response in a more readable, formatted JSON output. This increases response size and should be used mainly for debugging purposes. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AsanaApi.DeleteAllocation



Deletes a specific allocation in Asana.

**Parameters**

-   **allocation\_id** (`string`, required) Globally unique identifier for the allocation to be deleted.
-   **pretty\_formatting** (`boolean`, optional) Provide pretty JSON formatting for better readability, recommended for debugging.

## AsanaApi.GetProjectAllocations



Retrieve allocations for a specific project, user, or placeholder.

**Parameters**

-   **assignee\_id** (`string`, optional) Globally unique identifier for the user or placeholder the allocation is assigned to.
-   **enable\_pretty\_output** (`boolean`, optional) Enable pretty output format for JSON. Use this for easier reading during debugging, as it increases response size and processing time.
-   **include\_optional\_properties** (`array[string]`, optional) List properties to include in the response, provided as a list of strings. Provides access to additional data fields.
-   **pagination\_offset** (`string`, optional) Offset token for pagination. Use this to retrieve the next page of results. If not provided, the first page will be returned. Only use offsets returned from previous requests.
-   **project\_id** (`string`, optional) Globally unique identifier for the project to filter allocations by.
-   **results\_per\_page** (`integer`, optional) The number of allocations to return per page, between 1 and 100.
-   **workspace\_id** (`string`, optional) Globally unique identifier for the workspace to filter allocations by.

## AsanaApi.CreateAllocation



Creates a new allocation in Asana and returns its details.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **optional\_properties\_to\_include** (`array[string]`, optional) List the properties to include that are not included by default in the allocation resource response. Provide as an array of strings. Only used when mode is ‘execute’.
-   **enable\_pretty\_output** (`boolean`, optional) Enable pretty formatting for the response to improve readability with line breaks and indentation. Recommended only for debugging due to increased response time and size. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AsanaApi.FetchAttachmentDetails



Fetch the full record of a specific attachment.

**Parameters**

-   **attachment\_unique\_id** (`string`, required) The globally unique identifier for the attachment in Asana.
-   **enable\_pretty\_output** (`boolean`, optional) Set to true for pretty-printed JSON output. Increases response size and time; recommended for debugging.
-   **include\_optional\_properties** (`array[string]`, optional) An array of properties to include in the response. Specify which additional fields you want in the returned attachment record.

## AsanaApi.DeleteAttachment



Delete a specific attachment in Asana.

**Parameters**

-   **attachment\_unique\_id** (`string`, required) Globally unique identifier for the attachment to be deleted.
-   **pretty\_output\_enabled** (`boolean`, optional) Set to true to return the response in a readable format with line breaks and indentation. Use for debugging, as it increases response time and size.

## AsanaApi.GetAttachments



Retrieve all attachments for a specified Asana object.

**Parameters**

-   **object\_gid** (`string`, required) Globally unique identifier for the Asana object to fetch attachments from, such as a `project`, `project_brief`, or `task`.
-   **enable\_pretty\_output** (`boolean`, optional) Return the response in a readable format with line breaks and indentation. Recommended for debugging as it may increase response size and time.
-   **include\_optional\_properties** (`array[string]`, optional) Comma-separated list of properties to include, which are excluded by default.
-   **pagination\_offset\_token** (`string`, optional) Token for pagination. Use this to get the next page of results. If omitted, the first page is returned. Use only tokens from previous responses.
-   **results\_per\_page** (`integer`, optional) Number of objects to return per page, must be between 1 and 100.

## AsanaApi.RetrieveAuditLogEvents



Retrieve audit log events from your Asana domain.

**Parameters**

-   **workspace\_unique\_id** (`string`, required) Globally unique identifier for the workspace or organization to filter the audit log events.
-   **actor\_id\_filter** (`string`, optional) Filter events to those triggered by the actor with this unique ID.
-   **actor\_type\_filter** (`string`, optional) Specify the actor type to filter events. Use only if not querying by actor ID.
-   **event\_type\_filter** (`string`, optional) Specify the type of events to filter. Refer to the supported audit log events for valid types.
-   **filter\_by\_resource\_id** (`string`, optional) Filter events based on the specific resource ID to retrieve only those associated with this ID.
-   **filter\_events\_end\_time** (`string`, optional) Filter events to include only those created before this date and time (exclusive).
-   **pagination\_offset** (`string`, optional) Offset token to specify the starting point for retrieving the next page of results. Use the token from the previous response to continue paging through results. Leaving this unset will fetch the first page.
-   **results\_per\_page** (`integer`, optional) Set the number of audit log events to return per page of results, between 1 and 100.
-   **start\_time\_filter** (`string`, optional) Filter events created on or after this time (inclusive). Provide in ISO 8601 format.

## AsanaApi.CreateParallelRequestsAsana



Execute multiple requests to Asana’s API simultaneously.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **include\_optional\_fields** (`array[string]`, optional) A list of optional properties to include in the response. Provide as an array of strings. Only used when mode is ‘execute’.
-   **enable\_pretty\_output** (`boolean`, optional) Enable pretty output format with line breaks and indentation. Useful for debugging but may increase response size and time. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AsanaApi.GetCustomFieldSettingsForProject



Get custom field settings for a specified project.

**Parameters**

-   **project\_id** (`string`, required) Globally unique identifier for the Asana project to retrieve custom field settings.
-   **enable\_pretty\_output** (`boolean`, optional) Enable to receive a pretty, human-readable response with line breaks and indentation. Increases response time and size, use for debugging.
-   **include\_optional\_fields** (`array[string]`, optional) Comma-separated list of property names to include in the response, expanding beyond the default fields.
-   **pagination\_offset\_token** (`string`, optional) An offset token for pagination. Use the token from a previous request to get the next page of results. If not provided, it returns the first page.
-   **results\_per\_page** (`integer`, optional) Specify the number of custom field settings to return per page, between 1 and 100.

## AsanaApi.GetPortfolioCustomFieldSettings



Retrieve custom field settings for an Asana portfolio.

**Parameters**

-   **portfolio\_unique\_id** (`string`, required) Globally unique identifier for the portfolio in Asana.
-   **include\_optional\_fields** (`array[string]`, optional) List optional properties to include in the response, specified as an array of strings.
-   **pagination\_offset\_token** (`string`, optional) Offset token to fetch the next page of results. Use a token returned from a previous request. If not provided, the first page of results will be returned.
-   **pretty\_output** (`boolean`, optional) Set to true for pretty-formatted JSON output, with line breaks and indentation, mainly for debugging purposes.
-   **results\_per\_page** (`integer`, optional) Specify the number of results to return per page. Must be between 1 and 100.

## AsanaApi.CreateCustomFieldInWorkspace



Create a new custom field in an Asana workspace.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **include\_optional\_properties** (`array[string]`, optional) A list of optional property names to include in the response. Ensure these do not conflict with defaults. Only used when mode is ‘execute’.
-   **enable\_pretty\_output** (`boolean`, optional) Set to true to receive a JSON response with line breaks and indentation for better readability, mainly for debugging purposes. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AsanaApi.GetCustomFieldMetadata



Retrieve complete metadata of a custom field in Asana.

**Parameters**

-   **custom\_field\_id** (`string`, required) Globally unique identifier for the custom field in Asana to retrieve its metadata.
-   **enable\_pretty\_output** (`boolean`, optional) Enable pretty printing for the output, making it more readable. Ideal for debugging, but increases response time and size.
-   **include\_optional\_properties** (`array[string]`, optional) Comma-separated list of optional properties to include in the response.

## AsanaApi.UpdateAsanaCustomField



Update specific fields of an Asana custom field.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **custom\_field\_global\_id** (`string`, optional) Globally unique identifier for the custom field to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **include\_optional\_properties** (`array[string]`, optional) Comma-separated list of optional properties to include in the response, as the endpoint excludes some by default. Only used when mode is ‘execute’.
-   **pretty\_output** (`boolean`, optional) Set to true to receive a pretty-formatted output with line breaks and indentation. Increases response time and size, suitable for debugging. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AsanaApi.DeleteCustomField



Delete a specific custom field in Asana.

**Parameters**

-   **custom\_field\_id** (`string`, required) The unique global identifier for the custom field to be deleted.
-   **pretty\_output** (`boolean`, optional) Set to true for a formatted and indented response; mainly for debugging.

## AsanaApi.GetCustomFieldsForWorkspace



Retrieve custom fields for a specific workspace.

**Parameters**

-   **workspace\_identifier** (`string`, required) Globally unique identifier for the workspace or organization in Asana.
-   **enable\_pretty\_output** (`boolean`, optional) Enable pretty printed output for the response, useful for debugging. This increases response time and size.
-   **include\_optional\_properties** (`array[string]`, optional) A list of properties to include in the response for a workspace’s custom fields. Include values such as ‘name’, ‘type’, etc.
-   **pagination\_offset\_token** (`string`, optional) An offset token for pagination. Use a token from a previous request to continue where it left off. If not used, retrieves the first page.
-   **results\_per\_page** (`integer`, optional) Specifies the number of custom fields to return per page, between 1 and 100.

## AsanaApi.AddEnumOptionToCustomField



Add an enum option to a custom field in Asana.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **custom\_field\_identifier** (`string`, optional) Globally unique identifier for the custom field in Asana. Use this to specify the field you want to modify. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **include\_optional\_properties** (`array[string]`, optional) List of properties to include in the response that are excluded by default. Provide these as an array of strings. Only used when mode is ‘execute’.
-   **enable\_pretty\_output** (`boolean`, optional) Enable to receive a readable JSON response with line breaks and indentation. Use primarily for debugging as it increases response size and time. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AsanaApi.ReorderEnumOptionCustomField



Reorder enum options in a custom field.

**Parameters**

-   **custom\_field\_id** (`string`, required) Globally unique identifier for the custom field to be modified.
-   **enable\_pretty\_output** (`boolean`, optional) Enable pretty output for a more readable JSON response format, useful for debugging.
-   **enum\_option\_gid\_to\_relocate** (`string`, optional) The globally unique identifier (GID) of the enum option to relocate within the custom field.
-   **include\_optional\_properties** (`array[string]`, optional) A list of resource properties to include in the response, which are excluded by default. This should be a list of strings.
-   **insert\_after\_enum\_option** (`string`, optional) The ID of an existing enum option after which the new option should be inserted. Cannot be used with ‘insert\_before\_enum\_option’.
-   **insert\_before\_enum\_option\_gid** (`string`, optional) GID of an existing enum option before which the new option should be inserted. Cannot be used with after\_enum\_option.

## AsanaApi.UpdateEnumOption



Update an existing enum option in Asana custom fields.

**Parameters**

-   **enum\_option\_gid** (`string`, required) The globally unique identifier for the enum option to update.
-   **enum\_option\_color** (`string`, optional) The color of the enum option. Defaults to ‘none’ if not provided.
-   **enum\_option\_enabled** (`boolean`, optional) Indicates if the enum option is selectable for the custom field. Provide ‘true’ to make it selectable, ‘false’ otherwise.
-   **enum\_option\_name** (`string`, optional) The name of the enum option to be updated.
-   **include\_optional\_properties** (`array[string]`, optional) Provide a list of properties to include in the response, beyond the default set.
-   **pretty\_output** (`boolean`, optional) Set to true to receive the response in a pretty-printed format. Increases response time and size, useful for debugging.
-   **resource\_gid** (`string`, optional) Globally unique identifier for the resource as a string.
-   **resource\_type** (`string`, optional) The base type of the resource, specified as a string. This is necessary for updating the enum option.

## AsanaApi.GetCustomTypes



Retrieve all custom types for a project in Asana.

**Parameters**

-   **project\_id** (`string`, required) Globally unique identifier for the project to filter custom types.
-   **enable\_pretty\_output** (`boolean`, optional) Set to true for pretty-printed JSON output during debugging. Increases response size and time.
-   **include\_optional\_properties** (`array[string]`, optional) Comma-separated list of properties to include in the response for additional details.
-   **next\_page\_offset\_token** (`string`, optional) Offset token from a previous response to fetch the next page of results. If not provided, the first page will be returned.
-   **results\_per\_page** (`integer`, optional) Number of custom types to return per page. Must be between 1 and 100.

## AsanaApi.GetCustomTypeDetails



Retrieve complete details of a specific custom type in Asana.

**Parameters**

-   **custom\_type\_id** (`string`, required) Globally unique identifier for the custom type in Asana.
-   **enable\_pretty\_output** (`boolean`, optional) If true, the response is formatted with line breaks and indentation for readability. Use this for debugging; it may increase response time and size.
-   **include\_optional\_fields** (`array[string]`, optional) A list of property names to include in the response for the custom type. These are optional fields that are not included by default.

## AsanaApi.FetchAsanaEvents



Fetches detailed records of recent Asana events.

**Parameters**

-   **target\_resource\_id** (`string`, required) The ID of the resource to subscribe to. It can be a task, project, or goal.
-   **enable\_pretty\_output** (`boolean`, optional) Enable pretty JSON output with line breaks and indentation for readability; primarily for debugging.
-   **include\_optional\_properties** (`array[string]`, optional) Comma-separated list of property names to include in the response for more detailed event records.
-   **sync\_token** (`string`, optional) A sync token from the last request, or omit on the first sync to receive events from the start point. Ensure to handle the token for continued syncing.

## AsanaApi.InitiateGraphExport



Initiate a graph export job for Asana objects.

**Parameters**

-   **parent\_object\_id** (`string`, optional) Globally unique ID of the Asana parent object: goal, project, portfolio, or team.

## AsanaApi.InitiateBulkResourceExport



Initiate a bulk export of tasks, teams, or messages in a workspace.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AsanaApi.GetGoalRelationshipDetails



Retrieve details of a specific Asana goal relationship.

**Parameters**

-   **goal\_relationship\_identifier** (`string`, required) Globally unique identifier for the goal relationship you want to retrieve.
-   **enable\_pretty\_output** (`boolean`, optional) Enables pretty formatting for the response, increasing readability but also response size and time. Use for debugging.
-   **include\_optional\_properties** (`array[string]`, optional) A comma-separated list of optional properties to include in the response. Use this to include properties that are not returned by default.

## AsanaApi.UpdateGoalRelationship



Update an existing goal relationship in Asana.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **goal\_relationship\_unique\_id** (`string`, optional) The globally unique identifier for the specific goal relationship to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **include\_optional\_properties** (`array[string]`, optional) Specify properties to include in the response. Provide as a list of property names, which will include optional fields in the returned goal relationship. Only used when mode is ‘execute’.
-   **enable\_pretty\_output** (`boolean`, optional) Set to true for a readable response with indentation. Increases response size/time, recommended for debugging. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AsanaApi.GetGoalRelationships



Retrieve compact goal relationship records from Asana.

**Parameters**

-   **supported\_goal\_id** (`string`, required) Globally unique identifier for the supported goal in the goal relationship.
-   **enable\_pretty\_output** (`boolean`, optional) Set to true for pretty JSON output with indentation. Use mainly for debugging as it increases response size and time.
-   **goal\_relationship\_resource\_subtype** (`string`, optional) Filter goal relationships by a specific resource subtype.
-   **include\_optional\_properties** (`array[string]`, optional) Comma-separated list of optional properties to include in the response. Allows access to additional fields excluded by default.
-   **pagination\_offset** (`string`, optional) Token to specify the starting point for the next page of results. Use the token from the previous response to continue pagination.
-   **results\_per\_page** (`integer`, optional) Specify the number of goal relationship records to return per page. Must be between 1 and 100.

## AsanaApi.CreateGoalSupportingRelationship



Add a supporting resource to a specific goal in Asana.

**Parameters**

-   **goal\_global\_identifier** (`string`, required) Globally unique identifier for the goal to which a supporting resource will be added.
-   **enable\_pretty\_output** (`boolean`, optional) Enable to receive the response in a formatted and indented manner for easier readability. Recommended for debugging purposes as it increases response time and size.
-   **include\_optional\_fields** (`array[string]`, optional) Comma-separated list of optional resource properties to include in the response.
-   **insert\_after\_subgoal\_id** (`string`, optional) ID of the subgoal to insert the new subgoal after. Cannot use with `insert_before`. Only for subgoal addition.
-   **insert\_subgoal\_before\_id** (`string`, optional) The ID of an existing subgoal. The new subgoal will be placed before this subgoal. Cannot be used with `insert_after_subgoal_id`. Only for adding subgoals.
-   **supporting\_goal\_contribution\_weight** (`integer`, optional) A number between 0 and 1 indicating the supporting goal’s contribution to the parent goal’s progress. Defaults to 0.
-   **supporting\_resource\_id** (`string`, optional) The GID of the supporting resource to add to the parent goal. It must be the GID of a goal, project, task, or portfolio.

## AsanaApi.RemoveGoalRelationship



Removes a supporting relationship from a goal in Asana.

**Parameters**

-   **goal\_global\_id** (`string`, required) Globally unique identifier for the goal to identify which goal is being modified.
-   **provide\_pretty\_output** (`boolean`, optional) Provides pretty-printed output for debugging, enhancing readability with line breaks and indentation. Increases response size and time.
-   **supporting\_resource\_gid** (`string`, optional) The globally unique identifier (gid) of the supporting resource (goal, project, task, or portfolio) to remove from the parent goal.

## AsanaApi.GetAsanaGoalDetails



Fetches detailed information for a specific Asana goal.

**Parameters**

-   **goal\_global\_identifier** (`string`, required) Globally unique identifier for the goal to be retrieved.
-   **enable\_pretty\_output** (`boolean`, optional) If true, formats the response with line breaks and indentation for readability, increasing response size and time.
-   **include\_optional\_fields** (`array[string]`, optional) Specify optional properties to include in the response as a list of strings.

## AsanaApi.UpdateAsanaGoal



Update a specific goal in Asana.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **goal\_unique\_id** (`string`, optional) Globally unique identifier for the goal to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **included\_goal\_properties** (`array[string]`, optional) List of optional goal properties to include in the response. Provide as an array of strings. Only used when mode is ‘execute’.
-   **enable\_pretty\_output** (`boolean`, optional) Set to true to format the response with line breaks and indentation for readability. Mainly for debugging as it increases response size. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AsanaApi.DeleteAsanaGoal



Delete a specific goal in Asana.

**Parameters**

-   **goal\_identifier** (`string`, required) The unique global identifier for the specific Asana goal to delete.
-   **enable\_pretty\_output** (`boolean`, optional) If true, provides pretty JSON output with indentation and line breaks for readability. Recommended for debugging due to increased response size and time.

## AsanaApi.GetCompactGoals



Retrieve compact goal records from Asana.

**Parameters**

-   **enable\_pretty\_output** (`boolean`, optional) Enable pretty formatting for readable JSON response. Mainly for debugging; increases response time and size.
-   **included\_optional\_properties** (`array[string]`, optional) A list of specific properties to include in the response. Use a comma-separated list format.
-   **is\_workspace\_level** (`boolean`, optional) Set to true to filter for goals where the workspace level is active. Must be used with the workspace parameter.
-   **pagination\_offset\_token** (`string`, optional) Offset token for pagination. Use the token from a previous response to retrieve the next page. If not provided, returns the first page.
-   **portfolio\_id** (`string`, optional) Globally unique identifier for the supporting portfolio in Asana.
-   **project\_id** (`string`, optional) Globally unique identifier for the project. Used to filter goals associated with a specific project.
-   **results\_per\_page** (`integer`, optional) The number of goal records to return per page. Must be between 1 and 100.
-   **supporting\_task\_id** (`string`, optional) Globally unique identifier for the supporting task in Asana.
-   **team\_id** (`string`, optional) Globally unique identifier for the team. Use this to filter goals associated with a specific team.
-   **time\_period\_identifiers** (`array[string]`, optional) A list of globally unique identifiers for the desired time periods to filter the goals.
-   **workspace\_id** (`string`, optional) Globally unique identifier for the workspace.

## AsanaApi.CreateAsanaGoal



Create a new goal in Asana workspace or team.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **include\_optional\_properties** (`array[string]`, optional) Comma-separated list of optional properties to include in the response for a more comprehensive goal record. Only used when mode is ‘execute’.
-   **enable\_pretty\_output** (`boolean`, optional) Enables pretty formatting for the API response, useful for debugging. Increases response time and size. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AsanaApi.CreateGoalMetric



Create and add a goal metric to a specific goal.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **goal\_global\_id** (`string`, optional) Globally unique identifier for the goal to which the metric will be added. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **include\_optional\_properties** (`array[string]`, optional) Specify the optional properties to include in the response as a list of strings. Only used when mode is ‘execute’.
-   **enable\_pretty\_output** (`boolean`, optional) Set to true for formatted, human-readable output in JSON. Ideal for debugging. May increase response time and size. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AsanaApi.UpdateGoalMetric



Updates a goal’s current metric value in Asana.

**Parameters**

-   **goal\_unique\_identifier** (`string`, required) Globally unique identifier for the Asana goal to be updated.
-   **current\_metric\_value** (`number`, optional) The current numeric value of a goal metric. Required if metric type is number.
-   **include\_optional\_fields** (`array[string]`, optional) Comma-separated list of optional properties to include in the response.
-   **pretty\_output** (`boolean`, optional) Set to true for a more readable response format, useful for debugging.
-   **resource\_base\_type** (`string`, optional) The base type of the resource to update. It must be a string indicating the type of resource.
-   **resource\_unique\_identifier** (`string`, optional) Globally unique identifier of the resource in Asana, represented as a string.

## AsanaApi.AddFollowersToGoal



Add followers to a specific goal in Asana.

**Parameters**

-   **goal\_unique\_id** (`string`, required) Globally unique identifier for the goal to which you want to add followers.
-   **enable\_pretty\_output** (`boolean`, optional) Set to true to receive the response in a human-readable format with proper indentation and line breaks. Useful for debugging but increases response size and time.
-   **optional\_properties\_to\_include** (`array[string]`, optional) Comma-separated list of optional properties to include in the response for additional details.
-   **user\_identifiers\_array** (`array[string]`, optional) An array of user identifiers to add as followers. These can be ‘me’, emails, or user gids.

## AsanaApi.RemoveGoalFollowers



Remove followers from a specific goal in Asana.

**Parameters**

-   **goal\_unique\_id** (`string`, required) Globally unique identifier for the goal to remove followers from.
-   **enable\_pretty\_output** (`boolean`, optional) Enable pretty JSON output with line breaking and indentation. Useful for debugging; increases response time and size.
-   **followers\_to\_remove** (`array[string]`, optional) An array of user identifiers to remove as followers. These can be “me”, an email, or a user gid.
-   **included\_optional\_fields** (`array[string]`, optional) Comma-separated list of optional properties to include in the response for additional details.

## AsanaApi.GetParentGoalsForGoal



Fetches parent goals for a specific Asana goal.

**Parameters**

-   **goal\_unique\_identifier** (`string`, required) Globally unique identifier for the Asana goal whose parent goals are to be fetched.
-   **include\_optional\_properties** (`array[string]`, optional) List of optional properties to include in the response. It should be a comma-separated list of strings.
-   **pretty\_output\_enabled** (`boolean`, optional) Set to true for a readable output format with line breaks and indentation, suitable for debugging. May increase response size and time.

## AsanaApi.FetchJobDetails



Fetch complete details for a specific job record in Asana.

**Parameters**

-   **job\_id** (`string`, required) Globally unique identifier for the job to fetch details for.
-   **include\_optional\_properties** (`array[string]`, optional) Comma-separated list of optional properties to include in the response for the job.
-   **opt\_pretty** (`boolean`, optional) Set to true for pretty output with line breaks and indentation. Use this for debugging as it increases response time and size.

## AsanaApi.GetMemberships



Retrieve compact membership records from Asana.

**Parameters**

-   **enable\_pretty\_output** (`boolean`, optional) Enable pretty JSON output with line breaks and indentation for readability. Use for debugging purposes as it may increase response time and size.
-   **include\_optional\_fields** (`array[string]`, optional) Comma-separated list of optional fields to include in the response.
-   **member\_identifier** (`string`, optional) Globally unique identifier for a team or user to filter specific memberships.
-   **pagination\_offset\_token** (`string`, optional) Token for pagination. Use the offset from a previous API response to get the next page of results.
-   **parent\_id** (`string`, optional) Globally unique identifier for a goal, project, portfolio, or custom field in Asana.
-   **results\_per\_page** (`integer`, optional) Specifies the number of objects to return per page. Must be between 1 and 100.

## AsanaApi.CreateAsanaMembership



Create a new membership in Asana for goals, projects, portfolios, or custom fields.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **enable\_pretty\_output** (`boolean`, optional) If true, returns the response in a formatted JSON with line breaks and indentation. Recommended only for debugging, as it increases response size and processing time. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AsanaApi.GetMembershipInfo



Retrieve membership record details by ID.

**Parameters**

-   **membership\_id** (`string`, required) Globally unique identifier for the membership. Used to specify which membership record to retrieve.
-   **enable\_pretty\_output** (`boolean`, optional) Enable pretty output with indentation and line breaks for readability. Use for debugging as it increases response size and time.

## AsanaApi.UpdateMembership



Update an existing membership in Asana.

**Parameters**

-   **membership\_id** (`string`, required) Globally unique identifier for the membership to update.
-   **enable\_pretty\_output** (`boolean`, optional) If true, formats the response for readability with line breaks and indentation, useful for debugging.
-   **member\_access\_level** (`string`, optional) Specify the access level for the member. Valid options depend on the membership type: Goals (‘viewer’, ‘commenter’, ‘editor’, ‘admin’), Projects (‘admin’, ‘editor’, ‘commenter’), Portfolios (‘admin’, ‘editor’, ‘viewer’), Custom Fields (‘admin’, ‘editor’, ‘user’).

## AsanaApi.DeleteAsanaMembership



Delete a membership in Asana.

**Parameters**

-   **membership\_id** (`string`, required) Globally unique identifier for the membership to be deleted.
-   **pretty\_output\_enabled** (`boolean`, optional) Enable pretty-printed JSON format for a more readable response. Recommended for debugging, as it increases response time and size.

## AsanaApi.RequestOrganizationExport



Submit a request to export an organization in Asana.

**Parameters**

-   **enable\_pretty\_output** (`boolean`, optional) Enable to receive the response in a formatted JSON with proper indentation. Increases response size and time; use primarily for debugging.
-   **include\_optional\_properties** (`array[string]`, optional) List of property names to include in the export, separated by commas. Use to include non-default properties.
-   **organization\_id** (`string`, optional) Globally unique identifier for the workspace or organization to be exported in Asana.

## AsanaApi.GetOrganizationExportDetails



Fetch details of a specific organization export.

**Parameters**

-   **organization\_export\_id** (`string`, required) Globally unique identifier for the organization export. Required to retrieve the export details.
-   **enable\_pretty\_output** (`boolean`, optional) Set to true for a human-readable response with line breaks and indentation. Recommended for debugging due to increased response size.
-   **include\_optional\_properties** (`array[string]`, optional) Optional properties to include in the response, as a list of strings. This specifies which additional fields should be returned with the organization export details.

## AsanaApi.GetPortfolioMemberships



Retrieve portfolio memberships from Asana.

**Parameters**

-   **enable\_pretty\_output** (`boolean`, optional) Enable pretty output formatting with indentation for readability. Ideal for debugging, it increases response time and size.
-   **include\_optional\_fields** (`array[string]`, optional) A list of optional properties to include in the response. Provide them as an array of strings.
-   **pagination\_offset\_token** (`string`, optional) Token for pagination to retrieve the next page of results. Use the offset provided by a previous response.
-   **portfolio\_filter** (`string`, optional) Specify the portfolio ID to filter the results.
-   **results\_per\_page** (`integer`, optional) Specifies the number of portfolio memberships to return per page, between 1 and 100.
-   **user\_identifier** (`string`, optional) A string identifier for a user: “me”, an email, or the user’s gid.
-   **workspace\_filter** (`string`, optional) Specify the workspace to filter portfolio membership results. This should match the workspace identifier used in Asana.

## AsanaApi.GetPortfolioMembership



Retrieve a single portfolio membership record.

**Parameters**

-   **portfolio\_membership\_id** (`string`, required) The unique identifier for the portfolio membership to retrieve.
-   **enable\_pretty\_output** (`boolean`, optional) If true, enables pretty JSON output with line breaking and indentation, increasing response size and time. Useful for debugging.
-   **include\_optional\_properties** (`array[string]`, optional) A list of optional properties to include in the response, specified as strings.

## AsanaApi.RetrievePortfolioMemberships



Retrieve compact portfolio membership records for a portfolio.

**Parameters**

-   **portfolio\_identifier** (`string`, required) Globally unique identifier for the portfolio required to fetch membership records.
-   **enable\_pretty\_output** (`boolean`, optional) Set to true to receive a readable, formatted response. Use this primarily for debugging due to increased response size and time.
-   **include\_optional\_fields** (`array[string]`, optional) Specify a list of optional properties to include, using a comma-separated list.
-   **pagination\_offset\_token** (`string`, optional) Offset token used for pagination to retrieve the next page of results. Use the token returned from a previous request.
-   **results\_per\_page** (`integer`, optional) Number of portfolio memberships to return per page, between 1 and 100.
-   **user\_identifier** (`string`, optional) A string identifying a user. This can be ‘me’, an email, or the user’s gid.

## AsanaApi.GetUserOwnedPortfolios



Retrieve a list of portfolios owned by the user.

**Parameters**

-   **workspace\_identifier** (`string`, required) The unique identifier for the workspace or organization to filter portfolios on.
-   **enable\_pretty\_output** (`boolean`, optional) Enable pretty formatting for the output, improving readability with line breaks and indentation. This may increase response size and time, suitable for debugging.
-   **include\_optional\_fields** (`array[string]`, optional) Comma-separated list of properties to include in the response, allowing retrieval of additional optional fields.
-   **pagination\_offset\_token** (`string`, optional) A token to retrieve the next page of results. Use the offset token from a previous API response for pagination. If omitted, returns the first page.
-   **portfolio\_owner\_identifier** (`string`, optional) Specify the user who owns the portfolio. Only applicable if using a Service Account for accessing portfolios owned by different users.
-   **results\_per\_page** (`integer`, optional) The number of portfolios to return per page. Must be between 1 and 100.

## AsanaApi.CreateAsanaPortfolio



Create a new portfolio in an Asana workspace.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **include\_optional\_fields** (`array[string]`, optional) List the optional properties to include in the response, such as \[‘name’, ‘members’\]. Only used when mode is ‘execute’.
-   **enable\_pretty\_output** (`boolean`, optional) If true, formats the response with line breaks and indentation for easier readability. Recommended for debugging as it may increase response size and time. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AsanaApi.GetPortfolioDetails



Retrieve complete details of a specific portfolio in Asana.

**Parameters**

-   **portfolio\_unique\_id** (`string`, required) Globally unique identifier for the specific portfolio to retrieve details.
-   **enable\_pretty\_output** (`boolean`, optional) Set to true for pretty, readable formatting of the output. Useful for debugging, but increases response size and time.
-   **include\_optional\_properties** (`array[string]`, optional) List of properties to include in the response. Specify as a list of strings for fields you wish to include, as the API excludes some by default.

## AsanaApi.UpdatePortfolio



Update an existing Asana portfolio.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **portfolio\_unique\_identifier** (`string`, optional) Globally unique identifier for the portfolio to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **include\_optional\_fields** (`array[string]`, optional) A list of optional portfolio properties to include in the response, specified as an array of strings. Only used when mode is ‘execute’.
-   **enable\_pretty\_output** (`boolean`, optional) Provides formatted and indented output. Use primarily for debugging as it increases response size and processing time. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AsanaApi.DeletePortfolio



Delete an existing portfolio in Asana.

**Parameters**

-   **portfolio\_global\_id** (`string`, required) Globally unique identifier for the portfolio to be deleted.
-   **enable\_pretty\_output** (`boolean`, optional) Enable this to receive a ‘pretty’ formatted JSON response, advisable for debugging only as it increases response time and size.

## AsanaApi.GetPortfolioItems



Retrieve a list of items in a portfolio.

**Parameters**

-   **portfolio\_unique\_id** (`string`, required) Globally unique identifier for the portfolio. Required to fetch items for a specific portfolio.
-   **enable\_pretty\_output** (`boolean`, optional) If true, the response will be formatted for readability with line breaks and indentation. Recommended for debugging as this can increase response size and time.
-   **include\_optional\_properties** (`array[string]`, optional) Comma-separated list of optional properties to include in the response.
-   **pagination\_offset\_token** (`string`, optional) Token for offsetting to the next page of results. Use a token from previous pagination to retrieve subsequent pages.
-   **results\_per\_page** (`integer`, optional) The number of items to return per page, between 1 and 100.

## AsanaApi.AddItemToPortfolio



Add an item to a portfolio in Asana.

**Parameters**

-   **portfolio\_unique\_id** (`string`, required) Globally unique identifier for the portfolio to which the item will be added.
-   **add\_after\_item\_id** (`string`, optional) ID of an item in the portfolio where the new item will be added after. Cannot be used with ‘add\_before\_item\_id’.
-   **enable\_pretty\_output** (`boolean`, optional) Enable pretty JSON formatting for debugging. This increases response size and processing time.
-   **insert\_item\_before\_id** (`string`, optional) ID of an existing portfolio item. The new item will be placed before this item. Cannot be used with `insert_after_id`.
-   **item\_to\_add\_to\_portfolio** (`string`, optional) The ID of the item to be added to the Asana portfolio.

## AsanaApi.RemoveItemFromPortfolio



Remove an item from a portfolio in Asana.

**Parameters**

-   **portfolio\_identifier** (`string`, required) Globally unique identifier for the portfolio to remove the item from.
-   **enable\_pretty\_output** (`boolean`, optional) Enable this to receive the response in a readable, formatted way. This can increase response size and is best for debugging.
-   **item\_to\_remove** (`string`, optional) Specify the ID of the item to be removed from the portfolio.

## AsanaApi.AddCustomFieldToPortfolio



Add a custom field setting to an Asana portfolio.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **portfolio\_identifier** (`string`, optional) Globally unique identifier for the portfolio to which the custom field will be added. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **pretty\_formatting\_enabled** (`boolean`, optional) Set to true to format the response for better readability, useful for debugging. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AsanaApi.RemoveCustomFieldFromPortfolio



Removes a custom field from an Asana portfolio.

**Parameters**

-   **portfolio\_global\_id** (`string`, required) Globally unique identifier for the portfolio to identify which portfolio the custom field should be removed from.
-   **custom\_field\_id\_to\_remove** (`string`, optional) The unique identifier of the custom field to be removed from the portfolio.
-   **enable\_pretty\_output** (`boolean`, optional) Enable pretty format for the output, adding line breaks and indentation for readability. Increases response size and processing time, recommended for debugging.

## AsanaApi.AddPortfolioMembers



Add specified users as members of a portfolio on Asana.

**Parameters**

-   **portfolio\_global\_id** (`string`, required) Globally unique identifier for the portfolio to which members will be added.
-   **enable\_pretty\_output** (`boolean`, optional) Set to true for readable line-breaking and indentation in the response. Use for debugging as it increases response size and time.
-   **include\_optional\_properties** (`array[string]`, optional) A list of optional properties to include in the response, provided as an array of strings.
-   **portfolio\_member\_identifiers** (`string`, optional) An array of strings identifying users to add. Use ‘me’, an email, or user gid.

## AsanaApi.RemovePortfolioMembers



Remove specified members from a portfolio.

**Parameters**

-   **portfolio\_unique\_id** (`string`, required) Globally unique identifier for the portfolio to modify. Required for removing members.
-   **enable\_pretty\_output** (`boolean`, optional) Enable to format the response with line breaks and indentation for readability. Recommended only for debugging.
-   **include\_optional\_properties** (`array[string]`, optional) Comma-separated list of properties to include in the response, allowing for additional data retrieval.
-   **members\_to\_remove** (`string`, optional) List of user identifiers to remove from the portfolio. Use ‘me’, an email, or user gid.

## AsanaApi.GetProjectBrief



Retrieve the full record for a project brief.

**Parameters**

-   **project\_brief\_identifier** (`string`, required) Globally unique identifier for the specific project brief to retrieve.
-   **include\_optional\_properties** (`array[string]`, optional) An array of property names to include in the response. These properties are excluded by default.
-   **pretty\_output\_enabled** (`boolean`, optional) Enable readable, formatted output. Suitable for debugging. Increases response time and size.

## AsanaApi.UpdateProjectBriefAsana



Update an Asana project brief.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_brief\_id** (`string`, optional) Globally unique identifier for the specific project brief to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **include\_optional\_properties** (`array[string]`, optional) Specify a list of properties to include in the response, separated by commas. Only used when mode is ‘execute’.
-   **provide\_pretty\_output** (`boolean`, optional) If true, the response is formatted with line breaks and indentation for readability. Use primarily for debugging. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AsanaApi.DeleteProjectBrief



Delete a specific project brief in Asana.

**Parameters**

-   **project\_brief\_unique\_id** (`string`, required) Globally unique identifier for the project brief to be deleted.
-   **enable\_pretty\_output** (`boolean`, optional) Set to true for pretty-formatted output, making it more readable. Useful for debugging, this may increase response time and size.

## AsanaApi.CreateProjectBrief



Create a new project brief in Asana.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_global\_id** (`string`, optional) Globally unique identifier for the project in which the brief will be created. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **include\_optional\_properties** (`array[string]`, optional) List of properties to include that are excluded by default in the response. Provide as an array of strings. Only used when mode is ‘execute’.
-   **enable\_pretty\_output** (`boolean`, optional) Set to true to format the response with line breaks and indentation for readability. Useful for debugging. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AsanaApi.GetProjectMembershipDetails



Retrieve detailed information for a project membership in Asana.

**Parameters**

-   **project\_membership\_id** (`string`, required) The unique identifier for the project membership to retrieve details for.
-   **enable\_pretty\_output** (`boolean`, optional) Set to true for a human-readable response format, useful for debugging.
-   **include\_optional\_properties** (`array[string]`, optional) A list of optional project membership properties to include in the response. These are normally excluded by default.

## AsanaApi.GetProjectMemberships



Fetch project membership records from Asana.

**Parameters**

-   **project\_unique\_identifier** (`string`, required) Globally unique identifier for the project to fetch memberships for.
-   **enable\_pretty\_output** (`boolean`, optional) Enable pretty formatting for the response output. Useful for debugging as it adds line breaks and indentation, making it more readable. Note: This increases response size and time.
-   **include\_optional\_properties** (`array[string]`, optional) List of properties to include in the response. Use a comma-separated list to specify optional properties to be included in the response.
-   **page\_offset\_token** (`string`, optional) Token for pagination to retrieve the next set of results. Use the token from a previous response to get subsequent pages.
-   **results\_per\_page** (`integer`, optional) The number of objects to return per page (between 1 and 100).
-   **user\_identifier** (`string`, optional) A string identifying a user, either “me”, an email, or the user’s gid.

## AsanaApi.GetProjectStatusUpdate



Fetches a complete status update record for a project.

**Parameters**

-   **project\_status\_update\_id** (`string`, required) The ID of the project status update to retrieve. This should be a unique identifier for the specific status update.
-   **enable\_pretty\_output** (`boolean`, optional) If true, formats the response with line breaks and indentation for readability. Recommended for debugging only, as it increases response size.
-   **include\_optional\_properties** (`array[string]`, optional) A list of optional properties to include in the response. This allows fetching additional details that are excluded by default.

## AsanaApi.DeleteProjectStatus



Delete a specific project status update in Asana.

**Parameters**

-   **project\_status\_id** (`string`, required) The identifier for the project status update you wish to delete.
-   **pretty\_output** (`boolean`, optional) Enable pretty output for readable formatting during debugging; increases response size and time.

## AsanaApi.GetProjectStatusUpdates



Fetch compact status updates for a given project.

**Parameters**

-   **project\_global\_identifier** (`string`, required) Globally unique identifier for the project in Asana.
-   **enable\_pretty\_output** (`boolean`, optional) Enable to format the response for readability with line breaks and indentation. Only recommended for debugging due to increased response size and processing time.
-   **include\_optional\_fields** (`array[string]`, optional) Comma-separated list of optional properties to include in the response.
-   **pagination\_offset\_token** (`string`, optional) Offset token for pagination. Use the token provided by a previous request to retrieve the next page of results.
-   **results\_per\_page** (`integer`, optional) Number of status updates to return per page, must be between 1 and 100.

## AsanaApi.CreateProjectStatusUpdate



Creates a new status update for a project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_global\_id** (`string`, optional) Globally unique identifier for the project in Asana. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **included\_optional\_properties** (`array[string]`, optional) Comma-separated list of optional properties to include in the response, which are excluded by default. Only used when mode is ‘execute’.
-   **enable\_pretty\_output** (`boolean`, optional) If true, format the response for readability with line breaks and indentation. Mainly for debugging purposes. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AsanaApi.GetProjectTemplateDetails



Retrieve complete details of a specific Asana project template.

**Parameters**

-   **project\_template\_id** (`string`, required) Globally unique identifier for the project template to fetch complete details.
-   **include\_optional\_properties** (`array[string]`, optional) List properties to include in the response. Exclude default properties, using a comma-separated format.
-   **pretty\_output\_enabled** (`boolean`, optional) Set to true to receive a formatted and readable response output, suitable for debugging. Increases response time and size.

## AsanaApi.DeleteProjectTemplate



Delete a specific existing project template in Asana.

**Parameters**

-   **project\_template\_identifier** (`string`, required) Globally unique identifier for the Asana project template to delete.
-   **enable\_pretty\_output** (`boolean`, optional) If true, outputs the response in a readable, pretty format with line breaks and indentation, mainly for debugging purposes.

## AsanaApi.GetAsanaProjectTemplates



Fetch project template records from Asana.

**Parameters**

-   **include\_optional\_fields** (`array[string]`, optional) A list of optional properties to include in the response. Provide as an array of strings, with each string representing a property name.
-   **pagination\_offset\_token** (`string`, optional) Offset token for pagination. Use the token returned from a previous request to fetch the next page of results. If omitted, the first page is returned.
-   **pretty\_output** (`boolean`, optional) Set to true to enable pretty JSON formatting for debugging, despite increased size and time.
-   **results\_per\_page** (`integer`, optional) Specify the number of project templates to return per page, between 1 and 100.
-   **team\_filter** (`string`, optional) The team ID to filter project templates on.
-   **workspace\_identifier** (`string`, optional) The identifier of the workspace to filter project templates results on.

## AsanaApi.GetProjectTemplatesForTeam



Retrieve compact project template records for a team.

**Parameters**

-   **team\_id** (`string`, required) Globally unique identifier for the team to retrieve project templates.
-   **enable\_pretty\_output** (`boolean`, optional) Enable to get the response in a readable, “pretty” JSON format. Useful for debugging.
-   **include\_optional\_properties** (`array[string]`, optional) Comma-separated list of optional properties to include in the response. Specify any properties excluded by default that you wish to see.
-   **pagination\_offset\_token** (`string`, optional) Offset token to fetch the next page of results. Use the token returned from a previous request’s pagination.
-   **results\_per\_page** (`integer`, optional) Number of project templates to return per page. Must be between 1 and 100.

## AsanaApi.InstantiateProjectFromTemplate



Asynchronously instantiate a project from a template.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_template\_id** (`string`, optional) Globally unique identifier for the project template to instantiate the project from. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **include\_optional\_properties** (`array[string]`, optional) A list of optional properties to include in the response. Provide as a comma-separated list. Only used when mode is ‘execute’.
-   **enable\_pretty\_output** (`boolean`, optional) Enable pretty formatting for the response. Use this for debugging purposes as it increases response time and size. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AsanaApi.GetAsanaProjects



Fetch filtered project records from Asana.

**Parameters**

-   **enable\_pretty\_output** (`boolean`, optional) Enable pretty JSON formatting for debugging. Increases response size and processing time.
-   **optional\_fields\_to\_include** (`array[string]`, optional) Comma-separated list of optional properties to include in the response.
-   **pagination\_offset\_token** (`string`, optional) The offset token for pagination to obtain the next page of results. Use this token received from a previous request to continue retrieving subsequent data.
-   **results\_per\_page** (`integer`, optional) Number of projects to return per page, from 1 to 100.
-   **return\_only\_archived\_projects** (`boolean`, optional) Boolean to filter projects by their archived status. Setting this to true returns only archived projects.
-   **team\_filter** (`string`, optional) Specify the team to filter projects in the Asana workspace.
-   **workspace\_filter** (`string`, optional) Specify the workspace or organization to filter the Asana projects.

## AsanaApi.CreateNewAsanaProject



Create a new project in an Asana workspace or team.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **included\_properties\_list** (`array[string]`, optional) List of properties to include in the response. Specify as a comma-separated list to include optional fields that are excluded by default. Only used when mode is ‘execute’.
-   **enable\_pretty\_output** (`boolean`, optional) Set to true for readable JSON formatting with indents and line breaks. This is useful for debugging but increases response size and time. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AsanaApi.GetProjectDetails



Retrieve complete details of a specified Asana project.

**Parameters**

-   **project\_global\_identifier** (`string`, required) A unique identifier for the Asana project you want to retrieve details for.
-   **enable\_pretty\_output** (`boolean`, optional) Set to true for nicely formatted, readable output, mainly for debugging due to increased size and time.
-   **include\_optional\_properties** (`array[string]`, optional) A list of optional property names to include in the project details response. Provide these as a list of strings.

## AsanaApi.UpdateProjectDetails



Update specific fields of an existing project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_global\_id** (`string`, optional) Globally unique identifier for the project to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **include\_optional\_properties** (`array[string]`, optional) Comma-separated list of properties to include in the response, showing optional fields by default excluded. Only used when mode is ‘execute’.
-   **enable\_pretty\_output** (`boolean`, optional) Enable pretty formatting for the response output, making it more readable with line breaks and indentation. Use this primarily for debugging as it increases response size and processing time. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AsanaApi.DeleteAsanaProject



Delete a specific project in Asana.

**Parameters**

-   **project\_unique\_identifier** (`string`, required) Globally unique identifier for the project to be deleted in Asana.
-   **enable\_pretty\_output** (`boolean`, optional) Enable pretty formatting for the response to make it more readable. It’s recommended for debugging purposes only due to increased response size and time.

## AsanaApi.AsanaDuplicateProject



Initiate duplication of a project in Asana.

**Parameters**

-   **project\_global\_id** (`string`, required) Globally unique identifier for the project to be duplicated.
-   **include\_elements\_in\_project\_duplication** (`string`, optional) A comma-separated list of optional elements to include when duplicating a project. Some elements are auto-included and cannot be excluded.
-   **include\_optional\_fields** (`array[string]`, optional) Comma-separated list of optional properties to include in the response, such as additional project details.
-   **last\_due\_date\_in\_duplicated\_project** (`string`, optional) Sets the last due date in the duplicated project. The subsequent due dates will be offset similarly to the original project.
-   **new\_project\_name** (`string`, optional) The name for the duplicated project in Asana.
-   **new\_project\_team\_id** (`string`, optional) Globally unique identifier for the team to set for the new project. If not provided, the project will remain in the same team as the original.
-   **pretty\_output\_enabled** (`boolean`, optional) Enable pretty formatting for the response output. Useful for debugging but increases response size and time.
-   **skip\_weekends\_in\_schedule** (`boolean`, optional) Set to true to skip weekends for auto-shifted dates in the duplicated project schedule. This is a required parameter.
-   **start\_date\_for\_first\_task** (`string`, optional) Sets the first start date in the duplicated project. Adjusts other start dates based on this.

## AsanaApi.GetProjectsForTask



Retrieve all projects associated with a specific task.

**Parameters**

-   **task\_identifier** (`string`, required) The identifier of the task to retrieve associated projects for.
-   **enable\_pretty\_output** (`boolean`, optional) Set to true to receive the output in a ‘pretty’ format, useful for debugging. Note: This increases response time and size.
-   **optional\_fields\_to\_include** (`array[string]`, optional) Comma-separated list of optional project properties to include in the response.
-   **pagination\_offset** (`string`, optional) Offset token used for pagination. If not provided, the first page is returned. Only pass an offset returned from a previous request.
-   **results\_per\_page** (`integer`, optional) Number of project entries to return per page, between 1 and 100.

## AsanaApi.GetTeamProjects



Fetch the list of projects for a specified team.

**Parameters**

-   **team\_identifier** (`string`, required) Globally unique identifier for the team whose projects are to be retrieved. It is required to specify the team.
-   **enable\_pretty\_output** (`boolean`, optional) Enable pretty formatting for the response, making it more readable. Use mainly for debugging due to increased response size.
-   **include\_optional\_properties** (`array[string]`, optional) A list of optional properties to include in the response for the projects. Specify as a list of strings.
-   **only\_archived\_projects** (`boolean`, optional) Return projects based on their archived status. True for archived projects, False for non-archived projects.
-   **pagination\_offset\_token** (`string`, optional) Offset token used for pagination to fetch the next page of results. If not provided, the first page is returned. Use an offset from a previous response for subsequent pages.
-   **results\_per\_page** (`integer`, optional) Number of projects to return per page, between 1 and 100.

## AsanaApi.CreateAsanaProjectForTeam



Create a new Asana project for a specific team.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **team\_global\_id** (`string`, optional) Globally unique identifier for the team in Asana. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **include\_optional\_project\_properties** (`array[string]`, optional) Specify properties to include as a comma-separated list to get additional project details. Only used when mode is ‘execute’.
-   **enable\_pretty\_output** (`boolean`, optional) Set to true for readable output with line breaks and indentation. Recommended for debugging due to increased response size. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AsanaApi.GetWorkspaceProjects



Fetch compact project records for a workspace.

**Parameters**

-   **workspace\_identifier** (`string`, required) Globally unique identifier for the workspace or organization in Asana.
-   **archived\_projects\_only** (`boolean`, optional) Specify `true` to return only archived projects, and `false` to include unarchived ones.
-   **enable\_pretty\_output** (`boolean`, optional) Enable pretty formatting for the response output. Use this for a readable JSON format, mainly during debugging.
-   **optional\_fields\_to\_include** (`array[string]`, optional) Specify a list of property names to include in the response. These properties are not included by default.
-   **pagination\_offset\_token** (`string`, optional) Offset token for pagination. Use to request subsequent pages. If omitted, returns the first page. Only use tokens from previous requests.
-   **results\_per\_page** (`integer`, optional) Specify the number of project records to return per page. Must be between 1 and 100.

## AsanaApi.CreateProjectInWorkspace



Create a new project in a specified workspace.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **workspace\_identifier** (`string`, optional) Globally unique identifier for the workspace or organization where the project will be created. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **include\_optional\_properties** (`array[string]`, optional) Comma-separated list of optional properties to include in the response. Only used when mode is ‘execute’.
-   **pretty\_output** (`boolean`, optional) Set to true for formatted, readable output. Use mainly during debugging as it increases response time and size. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AsanaApi.AddCustomFieldSettingToProject



Add a custom field setting to a project in Asana.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_global\_id** (`string`, optional) Globally unique identifier for the project in Asana. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **include\_optional\_properties** (`array[string]`, optional) Comma-separated list of properties to include in the response, typically those excluded by default. Only used when mode is ‘execute’.
-   **enable\_pretty\_output** (`boolean`, optional) Set to true for a readable output format with line breaks and indentation. Increases response time and size, so use it mainly for debugging. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AsanaApi.RemoveCustomFieldFromProject



Remove a custom field setting from an Asana project.

**Parameters**

-   **project\_unique\_id** (`string`, required) Globally unique identifier for the Asana project.
-   **custom\_field\_id\_to\_remove** (`string`, optional) The ID of the custom field to remove from the specified project in Asana.
-   **enable\_pretty\_output** (`boolean`, optional) Formats the response in a readable way with line breaks and indentation. Use for debugging as it increases response time and size.

## AsanaApi.GetTaskCountsForProject



Retrieve task count details for a specific project in Asana.

**Parameters**

-   **project\_global\_id** (`string`, required) Globally unique identifier for the project in Asana.
-   **enable\_pretty\_output** (`boolean`, optional) Set to true to format the response in a readable way with line breaks and indentation. Use for debugging due to increased response size.
-   **include\_optional\_fields** (`array[string]`, optional) Comma-separated list of properties to include in the response. Opt-in to get specific data fields from the endpoint.

## AsanaApi.AddMembersToProject



Add specified users as members of a project in Asana.

**Parameters**

-   **project\_unique\_identifier** (`string`, required) Globally unique identifier for the project in Asana.
-   **include\_optional\_properties** (`array[string]`, optional) A comma-separated list of optional properties to include in the response. This adds excluded properties by default.
-   **pretty\_output** (`boolean`, optional) If true, the response is formatted with line breaks and indentation for readability. Use mainly for debugging.
-   **user\_identifiers\_array** (`string`, optional) An array of strings identifying users to be added to the project. Values can be ‘me’, an email, or a user GID.

## AsanaApi.RemoveMembersFromProject



Remove specified users from a project in Asana.

**Parameters**

-   **project\_identifier** (`string`, required) Globally unique identifier for the project.
-   **enable\_pretty\_output** (`boolean`, optional) Set to true for formatted, human-readable JSON. Increases response size; use for debugging.
-   **include\_optional\_fields** (`array[string]`, optional) A list of optional fields to include in the response. Use a comma-separated list to specify.
-   **user\_identifiers** (`string`, optional) Array of user identifiers to be removed from the project. Accepts “me”, email, or user gid.

## AsanaApi.AddFollowersToProject



Add specified users as followers to an Asana project.

**Parameters**

-   **project\_unique\_id** (`string`, required) Globally unique identifier for the project to which followers will be added.
-   **enable\_pretty\_output** (`boolean`, optional) Enable pretty JSON output for readability, useful for debugging. May slow responses.
-   **optional\_fields\_to\_include** (`array[string]`, optional) Comma-separated list of optional properties to include in the response to enrich data output.
-   **user\_identifiers\_to\_add\_as\_followers** (`string`, optional) An array of user identifiers to add as followers. Accepts ‘me’, email addresses, or user gids.

## AsanaApi.RemoveFollowersFromProject



Remove specified users from following a project in Asana.

**Parameters**

-   **project\_global\_id** (`string`, required) Globally unique identifier for the project in Asana.
-   **enable\_pretty\_output** (`boolean`, optional) Set to true to format the response with line breaks and indentation for readability. Useful for debugging.
-   **include\_optional\_properties** (`array[string]`, optional) A list of property names to include in the response, specified as strings. This should be used to include properties that are not returned by default.
-   **user\_identifiers\_to\_unfollow** (`string`, optional) Array of user identifiers (e.g. “me”, email, or gid) to remove from following the project.

## AsanaApi.CreateProjectTemplate



Create a project template in Asana asynchronously.

**Parameters**

-   **project\_global\_id** (`string`, required) Globally unique identifier for the project. Required to specify which project is being saved as a template.
-   **enable\_pretty\_output** (`boolean`, optional) Enable pretty output formatting for easier readability in the response. Use mainly for debugging as it may increase response time and size.
-   **include\_optional\_properties** (`array[string]`, optional) Specify a list of optional properties to include in the response by listing their names as strings.
-   **make\_template\_public** (`boolean`, optional) Specify true to make the project template public to its team. Use false to keep it private.
-   **team\_id\_for\_project\_template** (`string`, optional) Specify the team ID for the new project template. Use this when the project is in an organization.
-   **template\_name** (`string`, optional) The name of the new project template in Asana.
-   **workspace\_id\_for\_project\_template** (`string`, optional) Globally unique identifier for the workspace of the new project template. Use only if the project is in a workspace.

## AsanaApi.FetchReactionsByEmoji



Retrieve reactions with a specific emoji on an object.

**Parameters**

-   **emoji\_base\_character** (`string`, required) Specify the emoji base character to filter reactions. Returns only reactions with this emoji.
-   **object\_gid** (`string`, required) Globally unique identifier (GID) for the Asana object (status update or story) from which to fetch reactions.
-   **enable\_pretty\_output** (`boolean`, optional) Enable for readable JSON output with line breaks and indentation. Use primarily for debugging due to increased response size and time.
-   **pagination\_offset\_token** (`string`, optional) Offset token to retrieve the next page of results. Use the token provided by a previous paginated request. If not specified, the API returns the first page.
-   **results\_per\_page** (`integer`, optional) Specify the number of results to return per page. Must be between 1 and 100.

## AsanaApi.TriggerAsanaRule



Trigger a rule in Asana using an incoming web request.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **incoming\_web\_request\_trigger\_id** (`string`, optional) The ID of the incoming web request trigger used to execute the rule in Asana. This is automatically generated for the API endpoint. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AsanaApi.GetAsanaSection



Retrieve a complete record of a single Asana section.

**Parameters**

-   **section\_global\_id** (`string`, required) The globally unique identifier for the section to retrieve.
-   **enable\_pretty\_output** (`boolean`, optional) Set to true to receive the response in a ‘pretty’ format with line breaks and indentation. Useful for debugging. This increases response time and size.
-   **include\_optional\_properties** (`array[string]`, optional) Specify a list of optional properties to include in the response. This should be an array of strings.

## AsanaApi.UpdateSectionNameAsana



Update the name of a specific section in Asana.

**Parameters**

-   **section\_global\_identifier** (`string`, required) The globally unique identifier for the section to be updated in Asana.
-   **include\_optional\_properties** (`array[string]`, optional) Comma-separated list of properties to include in the response. Allows inclusion of optional fields excluded by default.
-   **insert\_after\_section\_id** (`string`, optional) Identifier of an existing section after which the updated section should be inserted. Cannot be used with `insert_before_section_id`.
-   **pretty\_output** (`boolean`, optional) Set to true for a readable, pretty formatted response with line breaks and indentation. Recommended for debugging as it increases response size.
-   **section\_insert\_before\_id** (`string`, optional) The ID of an existing section in the project before which the updated section should be inserted. Cannot be provided with section\_insert\_after\_id.
-   **section\_name** (`string`, optional) The new name for the section. It cannot be an empty string.

## AsanaApi.DeleteAsanaSection



Delete a specific, existing section in Asana.

**Parameters**

-   **section\_global\_identifier** (`string`, required) The globally unique identifier for the section to be deleted in Asana.
-   **enable\_pretty\_output** (`boolean`, optional) If true, returns JSON with line breaks and indentation for readability. Increases response time and size, suitable for debugging.

## AsanaApi.GetProjectSections



Fetch compact records for sections in a specified project.

**Parameters**

-   **project\_unique\_identifier** (`string`, required) Globally unique identifier for the project in Asana.
-   **enable\_pretty\_output** (`boolean`, optional) Enables readable formatting of the response when true, using line breaks and indentation. Recommended for debugging as it increases response time and size.
-   **included\_optional\_fields** (`array[string]`, optional) List of optional properties to include in the response, specified as strings. This allows you to fetch additional details about the sections that are not included by default.
-   **pagination\_offset\_token** (`string`, optional) Offset token for paginated API requests. Use it to retrieve the next set of results. If not provided, the API returns the first page.
-   **results\_per\_page** (`integer`, optional) Specify the number of sections to return per page, between 1 and 100.

## AsanaApi.CreateSectionInProject



Create a new section in an Asana project.

**Parameters**

-   **project\_global\_id** (`string`, required) Globally unique identifier for the project in which to create the section.
-   **enable\_pretty\_output** (`boolean`, optional) Set to true for a readable response format with line breaks and indentation. Use for debugging only.
-   **include\_optional\_properties** (`array[string]`, optional) Comma-separated list of optional properties to include in the response.
-   **insert\_after\_section\_id** (`string`, optional) ID of an existing section to insert the new section after. Cannot be used with insert\_before\_section\_id.
-   **insert\_before\_section\_id** (`string`, optional) ID of an existing section in the project before which the new section will be inserted. Cannot be used with ‘insert\_after\_section\_id’.
-   **section\_name** (`string`, optional) The name to display as the section title in the project. This cannot be empty.

## AsanaApi.AddTaskToSection



Add a task to a specified section in Asana.

**Parameters**

-   **section\_global\_identifier** (`string`, required) The globally unique identifier for the section where the task will be added.
-   **enable\_pretty\_output** (`boolean`, optional) Enable pretty formatting for the API response, with line breaks and indentation for readability. Use mainly for debugging.
-   **insert\_after\_task\_id** (`string`, optional) Specify the task ID after which the new task should be inserted within the section. Cannot be used with insert\_before.
-   **insert\_task\_before** (`string`, optional) The ID of an existing task in the section to insert the new task before. Cannot be used with insert\_task\_after.
-   **task\_description** (`string`, optional) The name or description of the task to be added to the specified section.

## AsanaApi.MoveSectionInProject



Reorder sections within a project in Asana.

**Parameters**

-   **project\_global\_id** (`string`, required) Globally unique identifier for the project in Asana.
-   **enable\_pretty\_output** (`boolean`, optional) If true, enables pretty output with line breaks and indentation for readability. Use primarily for debugging, as it may increase response time and size.
-   **insert\_after\_section\_id** (`string`, optional) The ID of the section after which the given section will be inserted. Specify to reorder sections within the same project.
-   **insert\_before\_section\_id** (`string`, optional) Specify the section ID to place the given section immediately before it.
-   **section\_to\_reorder** (`string`, optional) Globally unique identifier for the section to move within the project.

## AsanaApi.FetchStatusUpdate



Fetch the complete record for a specific status update.

**Parameters**

-   **status\_update\_id** (`string`, required) Unique identifier for the status update to retrieve the complete record.
-   **enable\_pretty\_output** (`boolean`, optional) Set to true for a readable, pretty format with indentation. Useful for debugging.
-   **include\_optional\_fields** (`array[string]`, optional) A list of optional fields to include in the response. Provide the fields as a list of strings.

## AsanaApi.DeleteStatusUpdate



Delete a specific status update from Asana.

**Parameters**

-   **status\_update\_id** (`string`, required) Unique ID of the status update to be deleted.
-   **pretty\_output** (`boolean`, optional) If true, the response is formatted for readability with line breaks and indentation. This increases response size and time, so use for debugging.

## AsanaApi.GetStatusUpdatesForObject



Retrieve status updates for a specified object in Asana.

**Parameters**

-   **object\_gid** (`string`, required) Globally unique identifier (GID) for the Asana object (project, portfolio, or goal) to fetch status updates from.
-   **created\_since\_time** (`string`, optional) Return statuses created after the specified time. Use ISO 8601 format.
-   **enable\_pretty\_output** (`boolean`, optional) Enable pretty JSON output with line breaks and indentation for readability. Mainly used for debugging, as it increases response size.
-   **optional\_fields\_to\_include** (`array[string]`, optional) List the optional properties to include in the response. Provide as a comma-separated list of property names.
-   **pagination\_offset\_token** (`string`, optional) Token to fetch the next page of results. Use an offset returned from a previous paginated request.
-   **results\_per\_page** (`integer`, optional) Number of results to return per page. Must be between 1 and 100.

## AsanaApi.CreateStatusUpdate



Create a new status update on an object in Asana.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **results\_per\_page** (`integer`, optional) Number of status updates to return per page, between 1 and 100. Only used when mode is ‘execute’.
-   **pagination\_offset\_token** (`string`, optional) Token to fetch the next page of results. Received from a previous API response for pagination. If omitted, the first page is returned. Only used when mode is ‘execute’.
-   **include\_optional\_fields** (`array[string]`, optional) List of properties to include. Provide as an array of strings to include optional properties in the response. Only used when mode is ‘execute’.
-   **enable\_pretty\_output** (`boolean`, optional) Set to true to receive the response in a readable, indented format. Use for debugging as it increases response time and size. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AsanaApi.GetAsanaStory



Fetch the full record of a specific Asana story.

**Parameters**

-   **story\_identifier** (`string`, required) Globally unique identifier for the Asana story to be retrieved.
-   **enable\_pretty\_output** (`boolean`, optional) Set to true to format the response with line breaks and indentation for readability. Recommended only for debugging, as it increases response size and processing time.
-   **include\_optional\_properties** (`array[string]`, optional) A list of optional properties to include in the story record, specified as an array of strings.

## AsanaApi.UpdateAsanaStory



Update an Asana story’s details.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **story\_global\_id** (`string`, optional) Globally unique identifier for the Asana story to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **include\_optional\_properties** (`array[string]`, optional) Comma-separated list of optional properties to include in the response. Defaults to excluding some properties. Only used when mode is ‘execute’.
-   **enable\_pretty\_output** (`boolean`, optional) Set to true for a readable, formatted response. Use for debugging as it increases response size and time. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AsanaApi.DeleteAsanaStory



Delete a story you’ve created on Asana.

**Parameters**

-   **story\_unique\_id** (`string`, required) Globally unique identifier for the story to be deleted.
-   **enable\_pretty\_output** (`boolean`, optional) Enable this for a readable, formatted response. Useful for debugging, but increases response time.

## AsanaApi.GetTaskStories



Retrieve all stories for a specified Asana task.

**Parameters**

-   **task\_identifier** (`string`, required) The unique identifier for the task to retrieve stories from.
-   **enable\_pretty\_output** (`boolean`, optional) Set to true for a readable, pretty format with line breaks and indentation. Useful for debugging. This will increase response time and size.
-   **include\_optional\_fields** (`array[string]`, optional) List of optional resource properties to include, specified as an array of strings.
-   **pagination\_offset** (`string`, optional) An offset token for paginating through results. Use a token returned from a previous API call to access subsequent pages. If not provided, the first page is returned.
-   **results\_per\_page** (`integer`, optional) Specify the number of stories to return per page, between 1 and 100.

## AsanaApi.AddTaskComment



Add a comment to a specific task in Asana.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **target\_task\_id** (`string`, optional) The ID of the task to which the comment will be added. It is required to specify the task you want to operate on. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **include\_optional\_properties** (`array[string]`, optional) Comma-separated list of optional properties to include in the response, as the endpoint excludes some by default. Only used when mode is ‘execute’.
-   **enable\_pretty\_output** (`boolean`, optional) Formats the response for readability with line breaks and indentation when true. Recommended for debugging due to extra processing time. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AsanaApi.GetFilteredTags



Retrieve compact tag records with optional filters.

**Parameters**

-   **enable\_pretty\_output** (`boolean`, optional) Set to ‘true’ for pretty JSON output with line breaks and indentation. Use for readability during debugging.
-   **include\_optional\_properties** (`array[string]`, optional) A list of properties to include in the response, specified as strings. Use to retrieve fields not returned by default.
-   **pagination\_offset** (`string`, optional) Offset token for pagination. Use the offset from the previous response to get the next page. If not provided, returns the first page.
-   **results\_per\_page** (`integer`, optional) Specifies how many tag records to return per page. Must be an integer between 1 and 100.
-   **workspace\_for\_filtering** (`string`, optional) The workspace ID used to filter tags in the request.

## AsanaApi.CreateNewAsanaTag



Create a new tag in an Asana workspace or organization.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **include\_optional\_properties** (`array[string]`, optional) Specify optional properties to include in the response as a list of strings. These properties are excluded by default. Only used when mode is ‘execute’.
-   **pretty\_output\_enabled** (`boolean`, optional) Set to true for a well-indented, readable response format. Recommend use only for debugging due to increased response size and time. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AsanaApi.GetAsanaTagDetails



Retrieve complete details for a specific Asana tag.

**Parameters**

-   **tag\_global\_identifier** (`string`, required) Globally unique identifier for the tag in Asana used to fetch the complete tag details.
-   **enable\_pretty\_output** (`boolean`, optional) Enable to format the response in a readable, pretty format. Increases response size and time; useful for debugging.
-   **include\_optional\_fields** (`array[string]`, optional) Comma-separated list of additional tag properties to include in the response.

## AsanaApi.UpdateAsanaTag



Update properties of an Asana tag.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **tag\_global\_identifier** (`string`, optional) Globally unique identifier for the tag to update in Asana. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **include\_optional\_fields** (`array[string]`, optional) List of optional properties to include with the tag resource. Provide as an array of property names. Only used when mode is ‘execute’.
-   **enable\_pretty\_output** (`boolean`, optional) Set to true to receive the response in a readable format with proper indentation and line breaks. This is advised only for debugging as it increases response size. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AsanaApi.DeleteAsanaTag



Delete a specific tag in Asana with its unique ID.

**Parameters**

-   **tag\_unique\_identifier** (`string`, required) The globally unique identifier for the Asana tag to be deleted.
-   **enable\_pretty\_output** (`boolean`, optional) Set to true for formatted JSON output with line breaks and indentation. Use mainly for debugging as it increases response size.

## AsanaApi.GetTagsForTask



Retrieve all tags for a given task.

**Parameters**

-   **task\_identifier** (`string`, required) The unique identifier of the task to retrieve tags for in Asana.
-   **enable\_pretty\_output** (`boolean`, optional) Set to true to receive the response in a formatted, readable form. Useful for debugging as it increases response size and time.
-   **include\_optional\_fields** (`array[string]`, optional) List of optional properties to include in the response as comma-separated values.
-   **pagination\_offset\_token** (`string`, optional) An offset token for paginating results. Use the token from a previous response to access subsequent pages.
-   **results\_per\_page** (`integer`, optional) Number of objects to return per page. Must be between 1 and 100.

## AsanaApi.RetrieveWorkspaceTags



Retrieve tags for a specific workspace in Asana.

**Parameters**

-   **workspace\_identifier** (`string`, required) Globally unique identifier for the Asana workspace or organization.
-   **enable\_pretty\_output** (`boolean`, optional) Enable pretty JSON output with proper line breaking and indentation intended for debugging. This may increase response time and size.
-   **include\_optional\_properties** (`array[string]`, optional) List of optional tag properties to include, specified as strings. These properties are excluded by default.
-   **offset\_token** (`string`, optional) The offset token to retrieve the next page of results. Use a token from a previous response for pagination.
-   **results\_per\_page** (`integer`, optional) Specify the number of tag records to return per page, between 1 and 100.

## AsanaApi.CreateWorkspaceTag



Create a new tag in a specific Asana workspace.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **workspace\_id** (`string`, optional) Globally unique identifier for the workspace or organization in Asana. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **included\_optional\_properties** (`array[string]`, optional) List of optional properties to include in the response, specified as an array of strings. Only used when mode is ‘execute’.
-   **enable\_pretty\_output** (`boolean`, optional) Enable pretty JSON formatting for improved readability. Use mainly during debugging as it may increase response size. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AsanaApi.FetchProjectTaskTemplates



Retrieve compact task template records for a specific project.

**Parameters**

-   **enable\_pretty\_output** (`boolean`, optional) Enable this to receive the response in a readable format with proper indentation. Useful for debugging, but increases response time and size.
-   **optional\_fields\_to\_include** (`array[string]`, optional) A list of property names to include in the response. Specify the properties you wish to see for the task templates.
-   **pagination\_offset\_token** (`string`, optional) Offset token for pagination, returned by the API. Use to request the next page of results.
-   **project\_id** (`string`, optional) The unique identifier for the project to filter task templates.
-   **results\_per\_page** (`integer`, optional) Number of task templates to return per page, between 1 and 100.

## AsanaApi.FetchTaskTemplate



Retrieve the complete record of a specific task template in Asana.

**Parameters**

-   **task\_template\_unique\_id** (`string`, required) Globally unique identifier for the task template to retrieve its complete record.
-   **enable\_pretty\_output** (`boolean`, optional) Enable pretty formatting for the output, making it more readable with line breaking and indentation. Use mainly for debugging.
-   **include\_optional\_fields** (`array[string]`, optional) Specify properties to include in the response. Provide as a list of strings.

## AsanaApi.DeleteTaskTemplate



Delete a specific task template by its ID.

**Parameters**

-   **task\_template\_id** (`string`, required) Globally unique identifier for the task template to be deleted.
-   **enable\_pretty\_output** (`boolean`, optional) Set to True for a pretty, formatted JSON response. This is useful for debugging but may increase response time and size.

## AsanaApi.CreateAsanaTask



Create and initiate an Asana task asynchronously.

**Parameters**

-   **task\_template\_id** (`string`, required) Globally unique identifier for the task template used to create the task.
-   **enable\_pretty\_output** (`boolean`, optional) Enable ‘pretty’ formatting of the response for better readability. Useful for debugging but may increase response time and size.
-   **include\_optional\_properties** (`array[string]`, optional) List of optional properties to include in the task resource, comma-separated.
-   **task\_name** (`string`, optional) The name of the new task to be created. If not provided, the task template name will be used by default.

## AsanaApi.GetFilteredTasks



Retrieve filtered task records from Asana.

**Parameters**

-   **assignee\_id** (`string`, optional) The ID of the assignee to filter tasks on. If searching for unassigned tasks, use ‘null’. Must be used with ‘workspace’.
-   **completed\_since\_date\_time** (`string`, optional) Tasks must be incomplete or completed since this date/time. Provide in ISO 8601 format (e.g., ‘2023-10-01T12:00:00Z’).
-   **enable\_pretty\_output** (`boolean`, optional) If true, provides the response in a pretty-printed, readable format. Use primarily for debugging as it increases response time and size.
-   **filter\_by\_project** (`string`, optional) Specify the project to filter tasks. Use a string identifier for the project.
-   **filter\_by\_workspace** (`string`, optional) The workspace to filter tasks by. Must be used with ‘filter\_by\_assignee’.
-   **modified\_since\_time** (`string`, optional) Return tasks modified since this time. Include changes in properties or associations. Format as string (e.g., ‘YYYY-MM-DDTHH:MM:SSZ’).
-   **optional\_fields\_to\_include** (`array[string]`, optional) Specify properties to include in the response by providing an array of property names. These properties are excluded by default.
-   **pagination\_offset** (`string`, optional) An offset token for pagination to retrieve the next page of results. Use a previously returned token to continue pagination.
-   **results\_per\_page** (`integer`, optional) Defines the number of task records to return per page. The value must be between 1 and 100.
-   **section\_filter** (`string`, optional) The section to filter tasks within a project in Asana. Specify a section name to narrow down the tasks.

## AsanaApi.AddAsanaTask



Create a new task in Asana.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **include\_optional\_fields** (`array[string]`, optional) Comma-separated list of optional task properties to include in the response. Excludes some properties by default. Only used when mode is ‘execute’.
-   **enable\_pretty\_output** (`boolean`, optional) Enable to receive the response in a readable format with line breaks and indentation. Use for debugging as it increases response time and size. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AsanaApi.GetTaskDetails



Fetch detailed information for a specific Asana task.

**Parameters**

-   **task\_identifier** (`string`, required) Specify the unique identifier of the Asana task to retrieve detailed information.
-   **enable\_pretty\_output** (`boolean`, optional) Set to true for a prettily formatted response, which may increase response time and size. Best used for debugging.
-   **include\_optional\_properties** (`array[string]`, optional) Specify optional task properties to include in the response. Use a list of strings representing property names.

## AsanaApi.UpdateTask



Update specific fields of an existing Asana task.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **task\_id** (`string`, optional) The unique identifier of the task to update in Asana. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **include\_optional\_properties** (`array[string]`, optional) Comma-separated list of task properties to include in the response, such as ‘created\_at’, ‘due\_date’, etc. Only used when mode is ‘execute’.
-   **pretty\_output\_enabled** (`boolean`, optional) Set to true for a formatted response with line breaks and indentation. Useful for debugging. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AsanaApi.DeleteAsanaTask



Delete an existing task in Asana, moving it to trash.

**Parameters**

-   **task\_identifier** (`string`, required) The unique identifier of the task to delete in Asana.
-   **pretty\_output\_enabled** (`boolean`, optional) Set to true for ‘pretty’ formatted response, useful for debugging. May increase response size and time.

## AsanaApi.DuplicateAsanaTask



Create a job to duplicate a task in Asana.

**Parameters**

-   **task\_gid** (`string`, required) The unique identifier of the task to duplicate in Asana.
-   **enable\_pretty\_output** (`boolean`, optional) Enable pretty printing of the JSON response for improved readability. Use this primarily for debugging as it increases response size and time.
-   **fields\_to\_duplicate** (`string`, optional) Comma-separated list of task fields to duplicate, such as assignee, attachments, dates, etc.
-   **new\_task\_name** (`string`, optional) The name for the newly duplicated task in Asana.
-   **optional\_fields\_to\_include** (`array[string]`, optional) Comma-separated list of optional properties to include in the response.

## AsanaApi.GetProjectTasks



Fetch tasks from a specific Asana project.

**Parameters**

-   **project\_global\_id** (`string`, required) Globally unique identifier for the Asana project. Required to retrieve tasks from a specific project.
-   **completed\_since** (`string`, optional) Return tasks incomplete or completed after this date-time or ‘now’.
-   **enable\_pretty\_output** (`boolean`, optional) Enable pretty formatting for the response. This makes the output more readable but increases response size and time. Useful for debugging.
-   **include\_optional\_fields** (`array[string]`, optional) Comma-separated list of optional properties to include in the response.
-   **pagination\_offset\_token** (`string`, optional) Token for paginating results. Use it to retrieve the next set of tasks from a previously returned offset.
-   **results\_per\_page** (`integer`, optional) Number of task records to return per page in the result. Must be between 1 and 100.

## AsanaApi.GetTasksForSection



Fetch tasks for a specific section in Asana.

**Parameters**

-   **section\_unique\_identifier** (`string`, required) The globally unique identifier for the section in Asana to fetch tasks from. Required to specify the exact section targeted.
-   **completed\_since\_filter** (`string`, optional) Return tasks incomplete or completed since a specific time. Use a date-time string or ‘now’.
-   **enable\_pretty\_output** (`boolean`, optional) Enable pretty formatting of the response for readability. Increases response time and size. Use mainly for debugging.
-   **optional\_fields\_to\_include** (`array[string]`, optional) Comma-separated list of optional properties to include in the response.
-   **pagination\_offset** (`string`, optional) Offset token for pagination. Use it to fetch the next page of results. If not provided, the first page will be returned.
-   **results\_per\_page** (`integer`, optional) Number of tasks to return per page, between 1 and 100.

## AsanaApi.GetTasksForTag



Retrieve tasks associated with a specific tag in Asana.

**Parameters**

-   **tag\_global\_id** (`string`, required) Globally unique identifier for the tag to retrieve associated tasks.
-   **enable\_pretty\_output** (`boolean`, optional) Formats the response for readability with line breaks and indentation. Use true only during debugging due to increased response size.
-   **optional\_fields\_to\_include** (`array[string]`, optional) List of optional property names to include in the response for each task (comma-separated).
-   **pagination\_offset** (`string`, optional) A token for pagination to fetch the next set of results. Use the token returned from a previous call for fetching subsequent pages. If not provided, the first page of results is returned.
-   **results\_per\_page** (`integer`, optional) The number of task objects to return per page, ranging from 1 to 100.

## AsanaApi.GetUserTaskList



Retrieve tasks in a user’s My Tasks list.

**Parameters**

-   **user\_task\_list\_id** (`string`, required) Globally unique identifier for the user’s task list. This ID is required to fetch tasks from the specified user list.
-   **enable\_pretty\_output** (`boolean`, optional) Enable pretty output to make the JSON response more readable. This increases response time and size, so it’s recommended for debugging only.
-   **filter\_completed\_tasks\_since** (`string`, optional) Return only tasks that are either incomplete or completed since this date-time or the keyword ‘now’.
-   **include\_optional\_fields** (`array[string]`, optional) List the optional properties to include in the response, as a list of strings. These properties are excluded by default.
-   **pagination\_offset\_token** (`string`, optional) Offset token for pagination. Use the token returned from a previous request to fetch the next page. If not provided, the first page is returned.
-   **tasks\_per\_page** (`integer`, optional) Specify the number of tasks to return per page, between 1 and 100.

## AsanaApi.GetTaskSubtasks



Retrieve subtasks for a specific task in Asana.

**Parameters**

-   **task\_id** (`string`, required) The unique identifier of the task to retrieve subtasks for.
-   **enable\_pretty\_output** (`boolean`, optional) Enable to receive the response in a ‘pretty’ format with line breaks and indentation. Useful for debugging. May increase response time and size.
-   **include\_optional\_fields** (`array[string]`, optional) Comma-separated list of optional properties to include in the response.
-   **pagination\_offset** (`string`, optional) An offset token for pagination to retrieve the next page of results. Pass the token from a previous paginated request. If not provided, the first page is returned.
-   **results\_per\_page** (`integer`, optional) Specify the number of subtasks to return per page. Must be between 1 and 100.

## AsanaApi.CreateSubtaskForTask



Create a new subtask under a specified parent task.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **parent\_task\_id** (`string`, optional) The ID of the parent task for which the new subtask will be created. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **included\_optional\_fields** (`array[string]`, optional) Comma-separated list of properties to include in the response. Allows access to optional fields not included by default. Only used when mode is ‘execute’.
-   **enable\_pretty\_output** (`boolean`, optional) Set to true for a formatted JSON response with line breaks and indentation. Increases size and time; use for debugging. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AsanaApi.UpdateTaskParentAsana



Update the parent of an Asana task.

**Parameters**

-   **task\_identifier** (`string`, required) The unique identifier of the task to operate on. It should be a string.
-   **enable\_pretty\_output** (`boolean`, optional) Set this to true to receive formatted output with line breaks and indentation. This is useful for debugging but increases response size and time.
-   **include\_optional\_properties** (`array[string]`, optional) A list of optional task properties to include in the response. Use a list of property names.
-   **new\_task\_parent** (`string`, optional) The new parent task ID for the task, or null to remove its current parent.
-   **subtask\_to\_insert\_after** (`string`, optional) Specify the subtask ID to insert the task after, or use ‘null’ to insert at the beginning of the list.
-   **subtask\_to\_insert\_before** (`string`, optional) Specify a subtask ID to insert the task before, or null to place at the end of the list.

## AsanaApi.GetTaskDependencies



Retrieve all dependencies for a specific Asana task.

**Parameters**

-   **task\_id** (`string`, required) The global ID of the task to retrieve dependencies for in Asana.
-   **enable\_pretty\_output** (`boolean`, optional) Enable pretty formatting for output; useful for debugging. Increases response size and time.
-   **included\_fields** (`array[string]`, optional) Comma-separated list of properties to include in the response. Some properties are excluded by default.
-   **pagination\_offset\_token** (`string`, optional) The offset token for pagination, used to retrieve the next page of results. Pass this only if paginating a previous request.
-   **results\_per\_page** (`integer`, optional) Specify the number of task dependencies to return per page. Must be between 1 and 100.

## AsanaApi.AddTaskDependencies



Add dependencies to an Asana task.

**Parameters**

-   **task\_id\_to\_modify** (`string`, required) The unique identifier of the task to which dependencies will be added.
-   **enable\_pretty\_output** (`boolean`, optional) Enable pretty formatting for the response output. Provides improved readability with line breaking and indentation, recommended for debugging only.
-   **task\_dependency\_ids** (`array[string]`, optional) An array of task GIDs that the current task depends on. These are required to establish dependencies between tasks in Asana.

## AsanaApi.RemoveTaskDependencies



Unlink dependencies from a specified task on Asana.

**Parameters**

-   **task\_id** (`string`, required) The unique identifier of the task to operate on for removing dependencies.
-   **enable\_pretty\_output** (`boolean`, optional) Set to true to receive a formatted, readable response. Useful for debugging, but increases response size and time.
-   **task\_dependency\_ids\_to\_remove** (`array[string]`, optional) An array of task GIDs representing dependencies to be removed from the specified task.

## AsanaApi.GetTaskDependents



Retrieve the dependents of a specific task.

**Parameters**

-   **task\_identifier** (`string`, required) The unique identifier of the task to retrieve dependents for.
-   **enable\_pretty\_output** (`boolean`, optional) Enable this for JSON responses with readable line breaks and indentation. Use mainly for debugging.
-   **include\_optional\_fields** (`array[string]`, optional) A list of optional properties to include in the response, specified as strings.
-   **pagination\_offset** (`string`, optional) Offset token for paginated results. Use a token from a previous response to continue fetching results. Defaults to the first page if not provided.
-   **results\_per\_page** (`integer`, optional) Number of results to return per page, between 1 and 100.

## AsanaApi.AddDependentsToTask



Add dependents to an Asana task.

**Parameters**

-   **target\_task\_id** (`string`, required) The unique identifier for the task to add dependents to.
-   **dependent\_task\_gids** (`array[string]`, optional) An array of task GIDs to be marked as dependents for this task.
-   **enable\_pretty\_output** (`boolean`, optional) Set to true to format the response for readability. Use during debugging, as it increases response time and size.

## AsanaApi.RemoveTaskDependents



Unlink dependents from an Asana task.

**Parameters**

-   **task\_id** (`string`, required) The unique identifier of the task to operate on.
-   **dependents\_task\_ids** (`array[string]`, optional) An array of task GIDs that should be unlinked from the specified task.
-   **enable\_pretty\_output** (`boolean`, optional) Set to true for prettified JSON output. Recommended only for debugging as it increases response size and time.

## AsanaApi.AddTaskToProject



Add a task to a specified Asana project.

**Parameters**

-   **task\_global\_id** (`string`, required) The unique global ID of the task to be operated on.
-   **enable\_pretty\_output** (`boolean`, optional) Set to true for formatted JSON output, making it more readable. Useful for debugging. Note: This increases response time and size.
-   **insert\_after\_task\_id** (`string`, optional) Provide the ID of a task in the project to insert this task after, or use ‘null’ to insert at the beginning.
-   **insert\_task\_before** (`string`, optional) Specify a task ID to insert the new task before it in the project, or use `null` to insert at the end of the list.
-   **project\_id\_to\_add\_task** (`string`, optional) The unique identifier of the project to which the task will be added.
-   **target\_section\_id** (`string`, optional) The ID of the section in the project to insert the task at the bottom.

## AsanaApi.RemoveTaskFromProject



Remove a task from the specified project in Asana.

**Parameters**

-   **task\_identifier** (`string`, required) The unique identifier of the task to remove from the project.
-   **enable\_pretty\_output** (`boolean`, optional) Enable ‘pretty’ response formatting. Provides line breaks and indentation for readability, useful mainly for debugging.
-   **project\_to\_remove\_task\_from** (`string`, optional) The identifier of the project from which the task will be removed.

## AsanaApi.AddTagToTask



Add a tag to a specific Asana task.

**Parameters**

-   **task\_id** (`string`, required) The unique identifier of the task to which the tag should be added.
-   **enable\_pretty\_output** (`boolean`, optional) Enable this to receive a prettified JSON response. Useful for debugging, but increases response time and size.
-   **tag\_gid\_to\_add** (`string`, optional) The GID of the tag to be added to the specified task.

## AsanaApi.RemoveTagFromTask



Remove a tag from a task in Asana.

**Parameters**

-   **task\_identifier** (`string`, required) The unique identifier of the task from which the tag should be removed.
-   **enable\_pretty\_output** (`boolean`, optional) If true, formats the response for readability with line breaks and indentation. Use primarily for debugging.
-   **tag\_gid\_to\_remove** (`string`, optional) The GID of the tag to be removed from the task in Asana.

## AsanaApi.AddFollowersToTask



Adds followers to an Asana task.

**Parameters**

-   **task\_gid** (`string`, required) The unique identifier of the task to add followers to. This is required to specify which task the followers should be added to.
-   **enable\_pretty\_output** (`boolean`, optional) Enables pretty formatting for the response, adding line breaks and indentation. Useful for debugging but increases response size.
-   **followers\_identification** (`array[string]`, optional) An array of strings identifying users, which can be ‘me’, an email, or a user gid.
-   **include\_optional\_properties** (`array[string]`, optional) Comma-separated list of optional task properties to include in the response.

## AsanaApi.AsanaRemoveFollowerForTask



Remove followers from an Asana task.

**Parameters**

-   **task\_id** (`string`, required) The unique identifier of the task from which followers are to be removed.
-   **enable\_pretty\_output** (`boolean`, optional) Set to true for readable JSON with line breaks and indentation. Use for debugging; increases response size and processing time.
-   **followers\_to\_remove** (`array[string]`, optional) An array of strings identifying users to remove as followers. Acceptable formats: “me”, an email, or a user’s gid.
-   **include\_optional\_properties** (`array[string]`, optional) A list of optional task properties to include in the response. Specify as an array of strings.

## AsanaApi.RetrieveTaskByCustomId



Retrieve a task using a custom ID in Asana.

**Parameters**

-   **task\_custom\_id** (`string`, required) The generated custom ID used to identify a specific task in Asana.
-   **workspace\_global\_id** (`string`, required) Globally unique identifier for the workspace or organization in Asana.

## AsanaApi.SearchTasksInWorkspace



Search for tasks in an Asana workspace using complex filters.

**Parameters**

-   **workspace\_global\_id** (`string`, required) Globally unique identifier for the workspace or organization where tasks are searched.
-   **all\_tags\_filters** (`string`, optional) Comma-separated list of tag IDs to filter tasks that have all specified tags.
-   **assigned\_by\_user\_ids** (`string`, optional) A comma-separated list of user IDs to filter tasks assigned by specific users.
-   **assignee\_identifiers\_any** (`string`, optional) Provide a comma-separated list of user identifiers for any assignee to include in the search.
-   **before\_modified\_on\_date** (`string`, optional) ISO 8601 date string to filter tasks modified before this date.
-   **completed\_at\_after** (`string`, optional) Specify an ISO 8601 datetime string to filter tasks completed after this date and time.
-   **completed\_at\_before\_datetime** (`string`, optional) Filter tasks completed before the specified ISO 8601 datetime.
-   **completed\_on\_after\_date** (`string`, optional) Specify an ISO 8601 date to filter tasks completed after this date.
-   **completed\_on\_before\_date** (`string`, optional) Filter tasks completed before a specific date using an ISO 8601 date string.
-   **completed\_on\_date** (`string`, optional) Filter tasks by their completion date using an ISO 8601 date string or `null` for no specific date.
-   **created\_after\_date** (`string`, optional) Specify the earliest creation date for tasks using an ISO 8601 date string. Filters tasks created after this date.
-   **created\_after\_datetime** (`string`, optional) Filter tasks created after this ISO 8601 datetime string.
-   **created\_at\_before** (`string`, optional) An ISO 8601 datetime string to filter tasks created before this date and time.
-   **created\_by\_users** (`string`, optional) Comma-separated list of user IDs to filter tasks created by specific users.
-   **created\_on\_before\_date** (`string`, optional) Filter tasks created before a specific date using an ISO 8601 date string format.
-   **created\_on\_date** (`string`, optional) Filter tasks by their creation date using an ISO 8601 date string or `null`.
-   **due\_at\_after\_datetime** (`string`, optional) Specify the start date and time for tasks due after this point. Use an ISO 8601 datetime string.
-   **due\_at\_before** (`string`, optional) An ISO 8601 datetime string to filter tasks due before this date and time.
-   **due\_date\_on** (`string`, optional) Filter tasks due on a specific date using an ISO 8601 date string or specify `null` for tasks with no due date.
-   **enable\_pretty\_output** (`boolean`, optional) Formats the response with line breaks and indentation for readability. Use for debugging, as it increases response size and processing time.
-   **end\_date\_before\_start\_on** (`string`, optional) Filter tasks starting before a specified date, using an ISO 8601 date string.
-   **exclude\_assigned\_by\_users** (`string`, optional) A comma-separated list of user IDs to exclude tasks assigned by these users.
-   **exclude\_assignees** (`string`, optional) Comma-separated list of user identifiers to exclude from the search results.
-   **exclude\_created\_by\_user\_ids** (`string`, optional) Comma-separated list of user IDs to exclude from the search results.
-   **exclude\_followers\_by\_user\_ids** (`string`, optional) Comma-separated list of user identifiers to exclude from the followers filter.
-   **exclude\_projects\_by\_id** (`string`, optional) A comma-separated list of project IDs to exclude from the search results.
-   **exclude\_sections\_by\_id** (`string`, optional) Comma-separated list of section or column IDs to exclude from the search results.
-   **exclude\_tags\_by\_ids** (`string`, optional) A comma-separated list of tag IDs to exclude from the search results.
-   **exclude\_tasks\_commented\_by\_users** (`string`, optional) Comma-separated list of user identifiers to exclude tasks commented on by these users.
-   **excluded\_liked\_by\_user\_ids** (`string`, optional) A comma-separated list of user IDs to exclude tasks liked by these users.
-   **filter\_by\_all\_projects** (`string`, optional) Comma-separated list of project IDs to filter tasks that belong to all specified projects.
-   **filter\_by\_any\_follower\_ids** (`string`, optional) Filter tasks by providing a comma-separated list of user IDs who are followers of the tasks.
-   **filter\_by\_any\_team\_ids** (`string`, optional) Comma-separated list of team IDs to filter tasks associated with any of these teams.
-   **filter\_due\_date\_before** (`string`, optional) Specify tasks with a due date earlier than this ISO 8601 date string.
-   **filter\_modified\_date\_start** (`string`, optional) Start date to filter tasks modified after this date in ISO 8601 format.
-   **filter\_sections\_all** (`string`, optional) Comma-separated list of section or column IDs to filter tasks by inclusion in all specified sections.
-   **filter\_tasks\_with\_attachments** (`boolean`, optional) Set to true to filter tasks that have attachments, and false to include all tasks regardless of attachments.
-   **filter\_tasks\_with\_incomplete\_dependencies** (`boolean`, optional) Filter tasks to those with incomplete dependencies. Use true to apply the filter.
-   **filter\_to\_completed\_tasks** (`boolean`, optional) Set to true to filter and display only completed tasks.
-   **filter\_to\_incomplete\_tasks\_with\_dependents** (`boolean`, optional) Set to true to filter tasks to those that are incomplete and have dependents.
-   **include\_any\_tags\_ids** (`string`, optional) Comma-separated list of tag IDs to include in the search filter.
-   **include\_only\_subtasks** (`boolean`, optional) Set to true to include only subtasks in the results, false to include all tasks.
-   **include\_sections\_in\_search** (`string`, optional) A comma-separated list of section or column IDs to filter tasks in the search.
-   **included\_optional\_properties** (`array[string]`, optional) List of optional properties to include for each returned task. Provide as comma-separated values.
-   **last\_modified\_on** (`string`, optional) ISO 8601 date string or `null` to filter tasks based on the modification date.
-   **modified\_after\_datetime** (`string`, optional) Filter tasks modified after this ISO 8601 datetime string.
-   **modified\_at\_before\_date** (`string`, optional) Filter tasks modified before this date. Use ISO 8601 datetime format.
-   **portfolio\_ids\_included** (`string`, optional) A comma-separated list of portfolio IDs to include in the search.
-   **project\_ids\_any** (`string`, optional) Comma-separated list of project IDs to include in the search.
-   **search\_text** (`string`, optional) Full-text search on task names and descriptions within the workspace.
-   **sort\_results\_ascending** (`boolean`, optional) Set to true to sort search results in ascending order. Default is false.
-   **start\_date\_after** (`string`, optional) An ISO 8601 date string to filter tasks starting after this date.
-   **start\_on\_date** (`string`, optional) ISO 8601 date string specifying the start date of tasks to be searched, or `null` for unspecified.
-   **task\_resource\_subtype** (`string`, optional) Filter tasks by their resource subtype, such as ‘default\_task’, ‘milestone’, or ‘approval’.
-   **task\_sort\_order** (`string`, optional) Specify the sorting criteria for the task results. Options include ‘due\_date’, ‘created\_at’, ‘completed\_at’, ‘likes’, or ‘modified\_at’. Defaults to ‘modified\_at’.
-   **tasks\_due\_after\_date** (`string`, optional) Specify an ISO 8601 date string to filter tasks due after this date.

## AsanaApi.GetTeamMembership



Retrieve complete details for a team membership.

**Parameters**

-   **team\_membership\_id** (`string`, required) The unique identifier for the specific team membership to retrieve.
-   **enable\_pretty\_output** (`boolean`, optional) Enable pretty formatting for the response with line breaks and indentation. Useful for debugging, but increases response time and size.
-   **include\_optional\_properties** (`array[string]`, optional) A list of optional properties to include in the response, specified as strings.

## AsanaApi.GetTeamMemberships



Retrieve compact team membership records from Asana.

**Parameters**

-   **enable\_pretty\_output** (`boolean`, optional) Return response in a readable format with line breaks and indentation. Ideal for debugging.
-   **optional\_fields\_to\_include** (`array[string]`, optional) List the properties to include in the response, as some are excluded by default.
-   **pagination\_offset\_token** (`string`, optional) An offset token for pagination. Use a previously returned token to access subsequent pages. If omitted, the first page is returned.
-   **results\_per\_page** (`integer`, optional) Specify the number of results to return per page. Must be between 1 and 100.
-   **team\_identifier** (`string`, optional) Globally unique identifier for the team in Asana.
-   **user\_identifier** (`string`, optional) A string identifying a user. Use ‘me’, an email, or a user gid. Must be used with ‘workspace’.
-   **workspace\_id** (`string`, optional) Globally unique identifier for the workspace. This parameter must be used with the user\_id parameter.

## AsanaApi.FetchTeamMembers



Retrieve the team memberships for a given team in Asana.

**Parameters**

-   **team\_global\_identifier** (`string`, required) Globally unique identifier for the team to retrieve memberships for.
-   **enable\_pretty\_output** (`boolean`, optional) Boolean to enable pretty formatted output with line breaks and indentation. Recommended for debugging due to increased response size and time.
-   **optional\_properties\_to\_include** (`array[string]`, optional) A list of optional properties to include in the results, given as an array of strings. Each string should be a property you wish to include.
-   **pagination\_offset\_token** (`string`, optional) Token to retrieve the next page of results. Use the offset provided in a previous response for pagination.
-   **results\_per\_page** (`integer`, optional) Number of objects to return per page. Must be between 1 and 100.

## AsanaApi.GetUserTeamMemberships



Retrieve team membership records for a specific user.

**Parameters**

-   **user\_identifier** (`string`, required) A string identifying a user, which can be ‘me’, an email, or the user’s gid.
-   **workspace\_identifier** (`string`, required) Globally unique identifier for the workspace in Asana.
-   **enable\_pretty\_output** (`boolean`, optional) Enable pretty formatting for the response output with line breaks and indentation, useful for debugging. It increases response size and time.
-   **include\_optional\_fields** (`array[string]`, optional) A list of optional properties to include in the response, specified as strings. Use to get excluded fields.
-   **pagination\_offset** (`string`, optional) Offset token for pagination. Use the offset to get the next page of results, returned from a previous paginated request.
-   **results\_per\_page** (`integer`, optional) Number of records to return per page, ranging from 1 to 100.

## AsanaApi.AsanaCreateTeam



Create a team in your current Asana workspace.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **include\_optional\_properties** (`array[string]`, optional) Comma-separated list of optional properties to include in the response, enhancing the returned team’s details. Only used when mode is ‘execute’.
-   **pretty\_output\_enabled** (`boolean`, optional) Set to true to receive pretty, human-readable output with line breaks and indentation. Use for debugging. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AsanaApi.GetAsanaTeamDetails



Retrieve detailed information for a specific Asana team.

**Parameters**

-   **team\_global\_id** (`string`, required) Globally unique identifier for the specific Asana team to retrieve details for.
-   **enable\_pretty\_output** (`boolean`, optional) Set to true for human-readable formatting, with line breaks and indentation. Increases response time and size; use for debugging.
-   **include\_optional\_fields** (`array[string]`, optional) Comma-separated list of optional properties to include in the response.

## AsanaApi.UpdateTeamInWorkspace



Update a team within the current workspace.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **team\_global\_id** (`string`, optional) Globally unique identifier for the team to update in the workspace. Required to specify which team will be modified. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **include\_optional\_properties** (`array[string]`, optional) List of optional properties to include in the response. Use a list format for specifying multiple properties. Only used when mode is ‘execute’.
-   **enable\_pretty\_output** (`boolean`, optional) Enable ‘pretty’ formatted output for easier readability in responses, increasing response size and time, mainly used for debugging. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AsanaApi.GetAsanaTeamsForWorkspace



Retrieve all teams for a specified Asana workspace.

**Parameters**

-   **workspace\_global\_id** (`string`, required) Globally unique identifier for the workspace or organization in Asana.
-   **enable\_pretty\_output** (`boolean`, optional) Set to true to receive the response in a ‘pretty’ JSON format with line breaks and indentation. Useful for debugging but increases response time and size.
-   **include\_optional\_fields** (`array[string]`, optional) Comma-separated list of optional properties to include in the response.
-   **pagination\_offset\_token** (`string`, optional) An offset token for pagination. Use a token from a previous request to retrieve the next page of results. If not provided, the first page is returned.
-   **results\_per\_page** (`integer`, optional) Number of teams to return per page, between 1 and 100.

## AsanaApi.GetAsanaTeamsForUser



Get all teams assigned to a specific Asana user.

**Parameters**

-   **filter\_by\_organization** (`string`, required) Specify the workspace or organization to filter the teams on for the Asana user.
-   **user\_identifier** (`string`, required) A string identifying a user. Accepts ‘me’, an email, or user’s gid.
-   **enable\_pretty\_output** (`boolean`, optional) Set to true to format the response with line breaks and indentation. Useful for debugging but can increase response size.
-   **include\_optional\_fields** (`array[string]`, optional) Comma-separated list of optional properties to include in the response.
-   **pagination\_offset\_token** (`string`, optional) Offset token to navigate through paginated results. Use an offset from a previous request to get the next page. If not provided, the first page is returned.
-   **results\_per\_page** (`integer`, optional) Number of team records to return per page. Must be between 1 and 100.

## AsanaApi.AddUserToTeam



Adds a user to a specified team on Asana.

**Parameters**

-   **team\_unique\_identifier** (`string`, required) Globally unique identifier for the team to which the user is being added.
-   **enable\_pretty\_output** (`boolean`, optional) Set to true for a readable response format with line breaks and indentation. Use mainly for debugging due to increased response time and size.
-   **include\_optional\_properties** (`array[string]`, optional) Comma-separated list of properties to include in the response, which are excluded by default.
-   **user\_identifier** (`string`, optional) Identifies the user to add. Use “me”, an email, or the user’s global ID (gid).

## AsanaApi.RemoveUserFromTeam



Removes a user from a specified Asana team.

**Parameters**

-   **team\_global\_identifier** (`string`, required) Globally unique identifier for the team to remove a user from.
-   **enable\_pretty\_output** (`boolean`, optional) Enable pretty JSON formatting for the response. This increases readability but also response size, so it’s advisable for debugging.
-   **user\_identifier** (`string`, optional) A string identifying the user to be removed. It can be ‘me’, an email, or the user’s gid.

## AsanaApi.GetTimePeriodRecord



Retrieve detailed information for a specific time period.

**Parameters**

-   **time\_period\_id** (`string`, required) Globally unique identifier for the time period to retrieve its record.
-   **enable\_pretty\_output** (`boolean`, optional) Enable pretty formatting for output. Use only for debugging as it increases response size and processing time.
-   **include\_optional\_properties** (`array[string]`, optional) List of property names to include in the response. These properties are excluded by default.

## AsanaApi.GetTimePeriods



Retrieve compact time period records from Asana.

**Parameters**

-   **workspace\_id** (`string`, required) Globally unique identifier for the Asana workspace.
-   **enable\_pretty\_output** (`boolean`, optional) Set to true to receive formatted, readable output mainly for debugging, increasing response size.
-   **end\_date** (`string`, optional) The end date for time periods in ISO 8601 format. Specify the last date to include in the returned results.
-   **include\_optional\_properties** (`array[string]`, optional) A list of optional property names to include in the response, specified as an array of strings.
-   **pagination\_offset** (`string`, optional) Offset token for pagination. Use the offset from a previous API response to retrieve the next page of results. If omitted, the first page is returned.
-   **results\_per\_page** (`integer`, optional) The number of results to return per page, from 1 to 100.
-   **start\_date** (`string`, optional) Start date for the time period in ISO 8601 format. Determines the beginning of the time period records to be retrieved.

## AsanaApi.GetTimeTrackingEntries



Retrieve time tracking entries for a specified task.

**Parameters**

-   **task\_id** (`string`, required) The unique identifier for the task to retrieve time tracking entries for.
-   **enable\_pretty\_output** (`boolean`, optional) Set to true for a readable, pretty-formatted output. Recommended for debugging as it may increase response time and size.
-   **include\_optional\_fields** (`array[string]`, optional) Comma-separated list of optional properties to include in the response, enhancing the returned resource details.
-   **pagination\_offset** (`string`, optional) Token for pagination; use to retrieve the next set of results. If not provided, the first page is returned.
-   **results\_per\_page** (`integer`, optional) Number of time tracking entries to return per page, must be between 1 and 100.

## AsanaApi.CreateTimeTrackingEntry



Create a time tracking entry on a task.

**Parameters**

-   **task\_id** (`string`, required) The unique identifier for the task to operate on.
-   **duration\_minutes\_tracked** (`integer`, optional) Time in minutes tracked by the entry. Must be greater than 0.
-   **enable\_pretty\_output** (`boolean`, optional) Set to true to receive formatted, human-readable JSON responses. Useful for debugging as it may slow down the response.
-   **entry\_logged\_date** (`string`, optional) Optional. The date the time entry is logged. Defaults to today if not specified.
-   **include\_optional\_properties** (`array[string]`, optional) A list of optional property names to include in the response. This should be used to specify which additional fields you want to include in the return data format when creating a time tracking entry.
-   **project\_gid\_attribution** (`string`, optional) Optional. The GID of the project to which the tracked time is attributed. If not provided, no project attribution is made.

## AsanaApi.GetTimeTrackingEntry



Retrieve a time tracking entry from Asana.

**Parameters**

-   **time\_tracking\_entry\_id** (`string`, required) Globally unique identifier for the time tracking entry. Used to specify which entry to retrieve.
-   **enable\_pretty\_output** (`boolean`, optional) Enable to get the response in a readable format with line breaks and indentation. Use only for debugging, as it may increase response time and size.
-   **include\_optional\_properties** (`array[string]`, optional) A list of property names to include as optional fields in the response. Provide properties as strings in a comma-separated format. Default properties are excluded unless explicitly specified here.

## AsanaApi.UpdateTimeTrackingEntry



Updates an existing time tracking entry in Asana.

**Parameters**

-   **time\_tracking\_entry\_id** (`string`, required) Globally unique identifier for the time tracking entry to be updated.
-   **duration\_minutes\_tracked** (`integer`, optional) The time in minutes tracked by the entry. Optional field.
-   **enable\_pretty\_output** (`boolean`, optional) Enable formatted output for easier readability. Use mainly for debugging as it increases response time and size.
-   **entry\_logged\_date** (`string`, optional) The date the entry is logged. Defaults to today if not specified. Use format ‘YYYY-MM-DD’.
-   **include\_optional\_properties** (`array[string]`, optional) Comma-separated list of optional properties to include in the response.
-   **project\_attributable\_gid** (`string`, optional) Optional. The globally unique identifier (gid) of the project to which the time is attributable.

## AsanaApi.DeleteTimeTrackingEntry



Delete a specific time tracking entry in Asana.

**Parameters**

-   **time\_tracking\_entry\_identifier** (`string`, required) Globally unique identifier for the time tracking entry to be deleted.
-   **enable\_pretty\_output** (`boolean`, optional) Set to true for a formatted, readable JSON response. Use for debugging; increases response time and size.

## AsanaApi.FetchTimeTrackingData



Fetch time tracking entries from Asana.

**Parameters**

-   **enable\_pretty\_output** (`boolean`, optional) Enable pretty formatting for the response. Useful for debugging, but increases response time and size.
-   **include\_optional\_fields** (`array[string]`, optional) Include optional properties in the response by listing field names as a comma-separated array. This enhances the response data detail.
-   **pagination\_offset\_token** (`string`, optional) Token to specify the starting point for retrieving the next page of results. Use the offset returned from a previous request. If not provided, the first page is returned.
-   **portfolio\_id** (`string`, optional) Globally unique identifier for the portfolio to filter time tracking entries by.
-   **project\_identifier\_attribution** (`string`, optional) Unique ID for the project to filter time tracking entries by attribution.
-   **results\_per\_page** (`integer`, optional) Specify the number of time tracking entries to return per page. Acceptable values are between 1 and 100.
-   **task\_id** (`string`, optional) Globally unique identifier for the task to filter time tracking entries by. This is used to specify the task whose time tracking entries you want to retrieve.
-   **user\_id\_filter** (`string`, optional) Globally unique identifier for the user to filter time tracking entries by.
-   **workspace\_identifier** (`string`, optional) Globally unique identifier for the Asana workspace to filter the time tracking entries.

## AsanaApi.WorkspaceTypeaheadSearch



Retrieve workspace objects using a typeahead search.

**Parameters**

-   **workspace\_id** (`string`, required) Globally unique identifier for the workspace or organization.
-   **enable\_pretty\_output** (`boolean`, optional) Enable pretty format for the response with proper indentation. Use for debugging due to increased response size, but not recommended for production.
-   **include\_optional\_fields** (`array[string]`, optional) A list of properties to include in the response, set as a comma-separated list to include optional fields in the result.
-   **resource\_type** (`string`, optional) Specify the type of workspace objects to return, such as ‘custom\_field’, ‘portfolio’, ‘project’, ‘tag’, ‘task’, or ‘user’.
-   **results\_count** (`integer`, optional) The number of results to return, ranging from 1 to 100. Default is 20.
-   **search\_query** (`string`, optional) String to search for relevant workspace objects. An empty string will return results.
-   **search\_result\_resource\_type** (`string`, optional) Specify the type of objects to return in the typeahead search. Options: custom\_field, goal, project, project\_template, portfolio, tag, task, team, user. Only one type can be used at a time.

## AsanaApi.FetchUserTaskDetails



Retrieve the full record for a user task list.

**Parameters**

-   **user\_task\_list\_global\_id** (`string`, required) Globally unique identifier for the user task list in Asana.
-   **enable\_pretty\_output** (`boolean`, optional) Set to true for readable, indented JSON output. Use primarily for debugging due to increased response size.
-   **include\_optional\_properties** (`array[string]`, optional) Specify which optional properties should be included in the response. Provide as a list of strings.

## AsanaApi.FetchUserTasks



Fetch the full task list record for a user from Asana.

**Parameters**

-   **user\_identifier** (`string`, required) A string to identify the user, either “me”, an email, or the user’s gid.
-   **workspace\_id** (`string`, required) The ID of the workspace to retrieve the user’s task list from in Asana.
-   **enable\_pretty\_output** (`boolean`, optional) Enable pretty formatting for JSON responses. When true, the response includes line breaks and indentation for better readability. This increases response size and processing time, so use primarily for debugging.
-   **include\_optional\_properties** (`array[string]`, optional) A list of optional properties to include in the response, specified as an array of strings.

## AsanaApi.GetAsanaUsers



Retrieve Asana user records across workspaces.

**Parameters**

-   **enable\_pretty\_output** (`boolean`, optional) Enable pretty formatting of the response for easier readability. Recommended for debugging as it increases response size and time.
-   **filter\_by\_team\_id** (`string`, optional) The team ID to filter users in Asana. It allows you to specify a particular team to narrow down the user results.
-   **include\_optional\_properties** (`array[string]`, optional) Comma-separated list of optional user properties to include in the response. Use this to fetch additional fields excluded by default.
-   **pagination\_offset\_token** (`string`, optional) Offset token for pagination, used to fetch subsequent pages of results. Only valid when using an offset returned in a prior request.
-   **results\_per\_page** (`integer`, optional) The number of user records to return per page. Must be between 1 and 100.
-   **workspace\_id** (`string`, optional) The ID of the workspace or organization to filter users on.

## AsanaApi.GetUserDetails



Retrieve detailed user information from Asana.

**Parameters**

-   **user\_identifier** (`string`, required) A string to identify a user, which can be ‘me’, an email, or a user’s gid.
-   **enable\_pretty\_output** (`boolean`, optional) Set to true to format the response for readability with line breaks and indentation. Recommended for debugging, as it may increase response time and size.
-   **include\_optional\_properties** (`array[string]`, optional) Specify properties to include in the response using a comma-separated list of strings.

## AsanaApi.GetUserFavorites



Retrieve a user’s favorites from a specified Asana workspace.

**Parameters**

-   **user\_identifier** (`string`, required) String to identify a user: ‘me’, an email, or a user GID.
-   **workspace\_id** (`string`, required) The unique identifier of the Asana workspace to retrieve favorites from.
-   **favorites\_resource\_type** (`string`, optional) Specifies the type of favorites to return (e.g., ‘portfolio’, ‘project’).
-   **include\_optional\_fields** (`array[string]`, optional) Specify a list of optional properties to include in the response, separated by commas.
-   **pagination\_offset** (`string`, optional) An offset token for pagination. Use a token returned from a previous request to navigate pages. If not provided, the first page is returned.
-   **pretty\_output** (`boolean`, optional) Set to true for readable, formatted output with line breaks and indentation, ideal for debugging.
-   **results\_per\_page** (`integer`, optional) Specifies the number of objects to return per page, between 1 and 100.

## AsanaApi.GetTeamUsersAsana



Retrieve user records for a specific Asana team.

**Parameters**

-   **team\_global\_identifier** (`string`, required) Globally unique identifier for the Asana team to retrieve users from.
-   **enable\_pretty\_output** (`boolean`, optional) Enable pretty output with line breaks and indentation for readability. Recommended for debugging as it increases response time and size.
-   **include\_optional\_fields** (`array[string]`, optional) Comma-separated list of properties you wish to include in the response. These are excluded by default.
-   **pagination\_offset\_token** (`string`, optional) Offset token for pagination. Use this token from a previous response to fetch the next page of results.

## AsanaApi.GetWorkspaceUsers



Retrieve all users from a specified workspace.

**Parameters**

-   **workspace\_unique\_id** (`string`, required) Globally unique identifier for the workspace or organization in Asana.
-   **enable\_pretty\_output** (`boolean`, optional) Set to true for a “pretty” response with indentation and line breaks. Recommended for debugging as it increases response size and time.
-   **include\_optional\_fields** (`array[string]`, optional) List properties to include in the response. Provide these as an array of strings to retrieve additional user information beyond the default fields.
-   **pagination\_offset\_token** (`string`, optional) An offset token used for paginating results. It allows you to retrieve the next page of results by using a token returned from a previous request. If omitted, the first page is returned.

## AsanaApi.GetAsanaWebhooks



Retrieve all registered Asana webhooks for a workspace.

**Parameters**

-   **workspace\_id** (`string`, required) The unique identifier of the Asana workspace to query for webhooks.
-   **enable\_pretty\_output** (`boolean`, optional) Set to true for a readable, pretty-formatted JSON output. Increases response time and size. Use mainly for debugging.
-   **include\_optional\_properties** (`array[string]`, optional) Comma-separated list of properties to include in the response, which are excluded by default.
-   **pagination\_offset\_token** (`string`, optional) An offset token to retrieve the next page of results. Use the token from a previous API response for pagination.
-   **results\_per\_page** (`integer`, optional) Number of webhooks to return per page, between 1 and 100.
-   **specific\_resource** (`string`, optional) Specify the resource ID to filter webhooks for that particular resource.

## AsanaApi.CreateAsanaWebhook



Initiates the creation of a webhook in Asana.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **include\_optional\_properties** (`array[string]`, optional) Specify properties to include in the response. Provide a list of property names to include those optional properties in the response. Only used when mode is ‘execute’.
-   **enable\_pretty\_output** (`boolean`, optional) If true, provides the response in a pretty format with line breaks and indentation. Use it for debugging as it increases response time and size. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AsanaApi.RetrieveWebhookDetails



Retrieve the full record of a specified webhook.

**Parameters**

-   **webhook\_global\_identifier** (`string`, required) Globally unique identifier for the webhook to retrieve its full record.
-   **enable\_pretty\_output** (`boolean`, optional) Enables pretty output formatting with line breaks and indentation. Use this for debugging, but be aware it increases response time and size.
-   **included\_fields** (`array[string]`, optional) List of optional properties to include in the response. Provide these as an array of strings.

## AsanaApi.AsanaUpdateWebhookFilters



Update filters for an Asana webhook.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **webhook\_global\_id** (`string`, optional) Globally unique identifier for the webhook to update its filters. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **include\_optional\_properties** (`array[string]`, optional) Comma-separated list of optional properties to include in the response. Only used when mode is ‘execute’.
-   **enable\_pretty\_output** (`boolean`, optional) Enable this to receive the response in a human-readable format with line breaking and indentation. Recommended only for debugging as it increases response size and time. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AsanaApi.DeleteAsanaWebhook



Permanently delete a webhook in Asana.

**Parameters**

-   **webhook\_global\_id** (`string`, required) Globally unique identifier for the specific webhook to delete in Asana.
-   **enable\_pretty\_output** (`boolean`, optional) If true, formats the response with line breaks and indentation for readability. Use primarily for debugging as it increases response time and size.

## AsanaApi.GetWorkspaceMembership



Get the complete record for a workspace membership.

**Parameters**

-   **workspace\_membership\_id** (`string`, required) The unique identifier for the workspace membership to retrieve.
-   **enable\_pretty\_output** (`boolean`, optional) Set to true for “pretty” JSON formatting with line breaks and indentation. Increases response time and size; use for debugging.
-   **include\_optional\_properties** (`array[string]`, optional) List of specific properties to include in the response, as some are excluded by default.

## AsanaApi.GetUserWorkspaceMemberships



Fetches a user’s workspace membership records in Asana.

**Parameters**

-   **user\_identifier** (`string`, required) String identifying a user. Use ‘me’, an email, or a user gid.
-   **enable\_pretty\_output** (`boolean`, optional) If true, provides the response in a readable, pretty format with line breaks and indentation. Useful for debugging.
-   **include\_optional\_fields** (`array[string]`, optional) Comma-separated list of optional user properties to include in the response.
-   **page\_offset\_token** (`string`, optional) Token to fetch the next page of results from a paginated request. Use a token returned from a previous response.
-   **results\_per\_page** (`integer`, optional) Number of objects to return per page, between 1 and 100.

## AsanaApi.GetWorkspaceMemberships



Retrieve workspace membership records.

**Parameters**

-   **workspace\_global\_id** (`string`, required) A globally unique identifier for the workspace or organization to fetch memberships for.
-   **enable\_pretty\_output** (`boolean`, optional) Enable pretty output with line breaks and indentation for debugging purposes.
-   **include\_optional\_fields** (`array[string]`, optional) An array of strings specifying optional properties to include in the response.
-   **pagination\_offset** (`string`, optional) Offset token for pagination to retrieve the next page of results. Use the token returned from a previous call for continuous paging, or leave empty for the first page.
-   **results\_per\_page** (`integer`, optional) Specify the number of membership records to return per page, from 1 to 100.
-   **user\_identifier** (`string`, optional) A string to identify a user, such as ‘me’, an email, or a user’s gid in Asana.

## AsanaApi.GetVisibleWorkspaces



Retrieve all workspaces visible to the user.

**Parameters**

-   **enable\_pretty\_output** (`boolean`, optional) Enable for pretty, readable response. Ideal for debugging as it increases response time and size.
-   **include\_optional\_properties** (`array[string]`, optional) Comma-separated list of optional fields to include in the response. Use this to include properties that are excluded by default.
-   **pagination\_offset** (`string`, optional) An offset token for paginating through the results. Use the token returned from a previous request to access the next page.
-   **results\_limit\_per\_page** (`integer`, optional) Specify the number of workspaces to return per page. Must be between 1 and 100.

## AsanaApi.GetWorkspaceDetails



Retrieve detailed information about a specific Asana workspace.

**Parameters**

-   **workspace\_global\_id** (`string`, required) Globally unique identifier for the Asana workspace or organization.
-   **enable\_pretty\_output** (`boolean`, optional) Enable this to provide a response with pretty formatting, including line breaks and indentation. Recommended for debugging due to increased response size and time.
-   **include\_optional\_properties** (`array[string]`, optional) List the optional properties to include, as a comma-separated list, to extend the default fields in the workspace record.

## AsanaApi.UpdateWorkspaceName



Update the name of an existing Asana workspace.

**Parameters**

-   **workspace\_global\_id** (`string`, required) Globally unique identifier for the workspace or organization.
-   **enable\_pretty\_output** (`boolean`, optional) Enable this to receive the response in a readable and formatted style. Useful for debugging. May increase response size and time.
-   **include\_optional\_fields** (`array[string]`, optional) List of additional workspace properties to include in the response, comma-separated.
-   **resource\_base\_type** (`string`, optional) Specify the base type of the resource to update the workspace name.
-   **workspace\_name** (`string`, optional) The new name for the Asana workspace you want to update.
-   **workspace\_resource\_gid** (`string`, optional) Globally unique identifier of the workspace resource. This is required to specify which workspace to update.

## AsanaApi.AddUserToWorkspace



Add a user to an Asana workspace or organization.

**Parameters**

-   **workspace\_global\_identifier** (`string`, required) Globally unique identifier for the workspace or organization in Asana.
-   **enable\_pretty\_output** (`boolean`, optional) Enable this to receive the response in a readable JSON format with line breaks and indentation. This is useful for debugging but can increase response time and size.
-   **include\_optional\_fields** (`array[string]`, optional) Comma-separated list of optional properties to include in the response.
-   **user\_identifier** (`string`, optional) A string identifying a user. Can be “me”, an email, or a user ID (gid).

## AsanaApi.RemoveUserFromWorkspace



Remove a user from an Asana workspace or organization.

**Parameters**

-   **workspace\_identifier** (`string`, required) Globally unique identifier for the workspace or organization in Asana.
-   **enable\_pretty\_output** (`boolean`, optional) Enable to receive formatted and more readable output. Use for debugging due to increased response size and time.
-   **user\_identifier** (`string`, optional) Identifies the user to be removed. Accepts ‘me’, an email, or a globally unique user ID.

## AsanaApi.GetWorkspaceEvents



Retrieve all events in a workspace since a specific sync token.

**Parameters**

-   **workspace\_global\_id** (`string`, required) Globally unique identifier for the workspace or organization in Asana.
-   **enable\_pretty\_output** (`boolean`, optional) Enable pretty output for better readability. Recommended for debugging as it increases response size and takes extra time.
-   **sync\_token** (`string`, optional) A sync token received from the last request to fetch events from a specific point in time. Omit on first sync to receive a new token.

## Reference

Below is a reference of enumerations used by some of the tools in the AsanaApi MCP Server:

### ToolMode

-   **GET\_REQUEST\_SCHEMA**: `get_request_schema`
-   **EXECUTE**: `execute`

## Auth

The AsanaApi MCP Server uses the Auth Provider with id `arcade-asana` to connect to users’ AsanaApi accounts. In order to use the MCP Server, you will need to configure the `arcade-asana` auth provider.

For detailed information on configuring the Asana OAuth provider with Arcade, see the [Asana Auth Provider documentation](/references/auth-providers/asana.md).

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_asana_api ``` Learn more](/guides/deployment-hosting.md)

Last updated on February 10, 2026

[AirtableApi](/en/resources/integrations/productivity/airtable-api.md)
[AshbyApi](/en/resources/integrations/productivity/ashby-api.md)
