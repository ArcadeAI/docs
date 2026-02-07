---
title: "Linear"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Productivity & Docs](/en/resources/integrations/productivity/asana.md)
Linear

# Linear

Arcade Optimized

**Description:** Enable agents to interact with Linear

**Author:** Arcade

**Auth:** User authorization

[![PyPI Version](https://img.shields.io/pypi/v/arcade_linear)](https://pypi.org/project/arcade_linear/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_linear)](https://pypi.org/project/arcade_linear/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_linear)](https://pypi.org/project/arcade_linear/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_linear)](https://pypi.org/project/arcade_linear/)

The Linear MCP Server provides a comprehensive set of tools for interacting with Linear’s issue tracking, project management, and team collaboration features. With this MCP Server, you can:

-   **Issues**: Create, update, search, and manage issues with full support for labels, priorities, assignments, and workflow states
-   **Projects**: Create and manage projects, track milestones, and post status updates
-   **Initiatives**: Manage high-level strategic goals and link projects to initiatives
-   **Teams**: Access team information and member details
-   **Cycles**: Work with time-boxed iterations (sprints) for organizing work
-   **Comments**: Add, update, and reply to comments on issues
-   **GitHub Integration**: Link GitHub PRs, commits, and issues to Linear issues
-   **User Context**: Access notifications, recent activity, and authenticated user information

## Available tools

Tool Name

Description

Linear.WhoAmI

Get the authenticated user's profile and team memberships

Linear.GetNotifications

Get the authenticated user's notifications

Linear.GetRecentActivity

Get the authenticated user's recent issue activity

Linear.GetTeam

Get detailed information about a specific team

Linear.ListTeams

List teams, optionally filtered by keywords

Linear.ListIssues

List issues with optional filters

Linear.GetIssue

Get detailed information about a specific issue

Linear.CreateIssue

Create a new issue with validation

Linear.UpdateIssue

Update an existing issue with partial updates

Linear.TransitionIssueState

Transition an issue to a new workflow state

Linear.CreateIssueRelation

Create a relation between two issues

Linear.ManageIssueSubscription

Subscribe to or unsubscribe from issue notifications

Linear.ArchiveIssue

Archive an issue

Linear.ListComments

List comments on an issue

Linear.AddComment

Add a comment to an issue

Linear.UpdateComment

Update an existing comment

Linear.ReplyToComment

Reply to an existing comment on an issue

Linear.GetProject

Get detailed information about a specific project

Linear.ListProjects

List projects with optional filters

Linear.GetProjectDescription

Get a project's full description with pagination

Linear.CreateProject

Create a new project

Linear.UpdateProject

Update an existing project

Linear.CreateProjectUpdate

Create a project status update

Linear.ArchiveProject

Archive a project

Linear.GetInitiative

Get detailed information about a specific initiative

Linear.ListInitiatives

List initiatives with optional filters

Linear.GetInitiativeDescription

Get an initiative's full description with pagination

Linear.CreateInitiative

Create a new initiative

Linear.UpdateInitiative

Update an existing initiative

Linear.AddProjectToInitiative

Link a project to an initiative

Linear.ArchiveInitiative

Archive an initiative

Linear.GetCycle

Get detailed information about a specific cycle

Linear.ListCycles

List cycles with optional filters

Linear.ListLabels

List available issue labels in the workspace

Linear.ListWorkflowStates

List available workflow states

Linear.LinkGithubToIssue

Link a GitHub PR, commit, or issue to a Linear issue

If you need to perform an action that’s not listed here, you can [get in touch with us](mailto:contact@arcade.dev) to request a new tool, or [create your own tools](/guides/create-tools/tool-basics/build-mcp-server.md).

Each tool includes behavior hints as defined by the [Model Context Protocol](https://modelcontextprotocol.io/specification/2025-06-18/server/tools#tool)  specification. These hints are not yet supported, but we’ve added them to help you understand the side effects of each tool:

-   `readOnlyHint` — The tool only reads data, no modifications
-   `openWorldHint` — The tool interacts with external systems (Linear’s API)
-   `destructiveHint` — The tool may cause irreversible changes (e.g., deletion)
-   `idempotentHint` — Repeated calls with the same arguments have no additional effect

* * *

## User context tools

### Linear.WhoAmI

Get the authenticated user’s profile and team memberships.



Returns the current user’s information including their name, email, organization, and the teams they belong to.

**Parameters**

This tool takes no parameters.

-   `readOnlyHint: true` - Only reads user profile, no modifications
-   `openWorldHint: true` - Interacts with Linear’s external API

Makes 2 API calls (viewer + viewer\_teams) executed in parallel.

* * *

### Linear.GetNotifications

Get the authenticated user’s notifications.



Returns notifications including issue mentions, comments, assignments, and state changes.

**Parameters**

-   **unread\_only** (`boolean`, _optional_) Only return unread notifications. Default is `False`.
-   **limit** (`integer`, _optional_) Maximum number of notifications to return. Min 1, max 50. Default is 20.
-   **end\_cursor** (`string`, _optional_) Cursor for pagination. Use ‘end\_cursor’ from previous response. Default is None.

-   `readOnlyHint: true` - Only reads notifications, no modifications
-   `openWorldHint: true` - Interacts with Linear’s external API

Makes 1 API call.

* * *

### Linear.GetRecentActivity

Get the authenticated user’s recent issue activity.



Returns issues the user has recently created or been assigned to within the specified time period.

**Parameters**

-   **days** (`integer`, _optional_) Number of days to look back for activity. Min 1, max 90. Default is 30.
-   **limit** (`integer`, _optional_) Maximum number of activities to return. Min 1, max 50. Default is 20.

-   `readOnlyHint: true` - Only reads activity data, no modifications
-   `openWorldHint: true` - Interacts with Linear’s external API

Makes 3 API calls (viewer + created issues + assigned issues) with issues fetched in parallel.

* * *

## Team tools

### Linear.GetTeam

Get detailed information about a specific Linear team.



Supports lookup by ID, key (like TOO, ENG), or name (with fuzzy matching).

**Parameters**

-   **value** (`string`, **required**) The value to look up (ID, key, or name depending on lookup\_by).
-   **lookup\_by** (`enum`, _optional_) How to look up the team. Options: `id`, `key`, `name`. Default is `id`.
-   **auto\_accept\_matches** (`boolean`, _optional_) Auto-accept fuzzy matches above 90% confidence. Only used when lookup\_by is name. Default is `False`.

-   `readOnlyHint: true` - Only reads team data, no modifications
-   `openWorldHint: true` - Interacts with Linear’s external API

Makes 1-2 API calls (ID: 1 call, KEY: 1 call, NAME: 1-2 calls if fuzzy match auto-accepts).

* * *

### Linear.ListTeams

List Linear teams, optionally filtered by keywords and other criteria.



Returns all teams when no filters provided, or filtered results when keywords or other filters are specified.

**Parameters**

-   **keywords** (`string`, _optional_) Search keywords to match in team names. Default is None (all teams).
-   **include\_archived** (`boolean`, _optional_) Include archived teams in results. Default is `False`.
-   **created\_after** (`string`, _optional_) Filter teams created after this date in ISO format (YYYY-MM-DD). Default is None (all time).
-   **limit** (`integer`, _optional_) Maximum number of teams to return. Min 1, max 50. Default is 20.
-   **end\_cursor** (`string`, _optional_) Cursor for pagination. Use ‘end\_cursor’ from previous response. Default is None.

-   `readOnlyHint: true` - Only reads team data, no modifications
-   `openWorldHint: true` - Interacts with Linear’s external API

Makes 1 API call.

* * *

## Issue tools

### Linear.ListIssues

List Linear issues, optionally filtered by keywords and other criteria.



Returns all issues when no filters provided, or filtered results when keywords or other filters are specified.

**Parameters**

-   **keywords** (`string`, _optional_) Search keywords to match in issue titles and descriptions. Default is None.
-   **team** (`string`, _optional_) Filter by team name or key. Default is None (all teams).
-   **state** (`string`, _optional_) Filter by workflow state name. Default is None (all states).
-   **assignee** (`string`, _optional_) Filter by assignee. Use ‘@me’ for current user. Default is None.
-   **priority** (`enum`, _optional_) Filter by priority level. Options: `urgent`, `high`, `medium`, `low`, `no_priority`. Default is None.
-   **label** (`string`, _optional_) Filter by label name. Default is None.
-   **project** (`string`, _optional_) Filter by project name. Default is None.
-   **created\_after** (`string`, _optional_) Filter issues created after this date in ISO format (YYYY-MM-DD). Default is None.
-   **limit** (`integer`, _optional_) Maximum number of issues to return. Min 1, max 50. Default is 20.
-   **end\_cursor** (`string`, _optional_) Cursor for pagination. Use ‘end\_cursor’ from previous response. Default is None.

-   `readOnlyHint: true` - Only reads issue data, no modifications
-   `openWorldHint: true` - Interacts with Linear’s external API

Makes 1 API call.

* * *

### Linear.GetIssue

Get detailed information about a specific Linear issue.



Accepts either the issue UUID or the human-readable identifier (like TOO-123).

**Parameters**

-   **issue\_id** (`string`, **required**) The Linear issue ID or identifier (like TOO-123).
-   **include\_comments** (`boolean`, _optional_) Include comments in the response. Default is `True`.
-   **include\_attachments** (`boolean`, _optional_) Include attachments in the response. Default is `True`.
-   **include\_relations** (`boolean`, _optional_) Include issue relations (blocks, dependencies). Default is `True`.
-   **include\_children** (`boolean`, _optional_) Include sub-issues in the response. Default is `True`.

-   `readOnlyHint: true` - Only reads issue data, no modifications
-   `openWorldHint: true` - Interacts with Linear’s external API

Makes 1 API call.

* * *

### Linear.CreateIssue

Create a new Linear issue with validation.



All entity references (team, assignee, labels, state, project, cycle, parent) are validated before creation. If an entity is not found, suggestions are returned to help correct the input.

**Parameters**

-   **team** (`string`, **required**) Team name, key, or ID.
-   **title** (`string`, **required**) Issue title.
-   **description** (`string`, _optional_) Issue description in Markdown format. Default is None.
-   **assignee** (`string`, _optional_) Assignee name or email. Use ‘@me’ for current user. Must be a team member. Default is ‘@me’.
-   **labels\_to\_add** (`array`, _optional_) Labels to add by name or ID. Default is None.
-   **priority** (`enum`, _optional_) Issue priority. Options: `urgent`, `high`, `medium`, `low`, `no_priority`. Default is None.
-   **state** (`string`, _optional_) Initial workflow state name. Default is team’s default state.
-   **project** (`string`, _optional_) Project name, slug, or ID to link. Default is None.
-   **cycle** (`string`, _optional_) Cycle name or number to link. Default is None.
-   **parent\_issue** (`string`, _optional_) Parent issue identifier to make this a sub-issue. Default is None.
-   **estimate** (`integer`, _optional_) Effort estimate in points. Default is None.
-   **due\_date** (`string`, _optional_) Due date in YYYY-MM-DD format. Default is None.
-   **attachment\_url** (`string`, _optional_) URL to attach to the issue. Default is None.
-   **attachment\_title** (`string`, _optional_) Title for the attached URL. Default is None (URL used as title).
-   **auto\_accept\_matches** (`boolean`, _optional_) Auto-accept fuzzy matches above 90% confidence. Default is `False`.

-   `readOnlyHint: false` - Creates new issue in Linear
-   `destructiveHint: false` - Additive operation, creates new resource
-   `idempotentHint: false` - Each call creates a new issue
-   `openWorldHint: true` - Interacts with Linear’s external API

Makes 2-5 API calls (validation + create, +1 if @me assignee, +1 if parent\_issue, +1 if attachment).

* * *

### Linear.UpdateIssue

Update a Linear issue with partial updates.



Only fields that are explicitly provided will be updated. All entity references are validated before update.

**Parameters**

-   **issue\_id** (`string`, **required**) Issue ID or identifier (like TOO-123).
-   **title** (`string`, _optional_) New issue title. Only updated if provided.
-   **description** (`string`, _optional_) New description in Markdown. Only updated if provided.
-   **assignee** (`string`, _optional_) New assignee name or email. Use ‘@me’ for current user. Only updated if provided.
-   **labels\_to\_add** (`array`, _optional_) Labels to add by name or ID. Default is None.
-   **labels\_to\_remove** (`array`, _optional_) Labels to remove by name or ID. Default is None.
-   **priority** (`enum`, _optional_) New priority. Options: `urgent`, `high`, `medium`, `low`, `no_priority`. Only updated if provided.
-   **state** (`string`, _optional_) New workflow state name. Only updated if provided.
-   **project** (`string`, _optional_) Project to link (name, slug, or ID). Only updated if provided.
-   **cycle** (`string`, _optional_) Cycle to link (name or number). Only updated if provided.
-   **estimate** (`integer`, _optional_) New effort estimate in points. Only updated if provided.
-   **due\_date** (`string`, _optional_) New due date in YYYY-MM-DD format. Only updated if provided.
-   **attachment\_url** (`string`, _optional_) URL to attach to the issue. Default is None.
-   **attachment\_title** (`string`, _optional_) Title for the attached URL. Default is None (URL used as title).
-   **auto\_accept\_matches** (`boolean`, _optional_) Auto-accept fuzzy matches above 90% confidence. Default is `False`.

-   `readOnlyHint: false` - Modifies existing issue
-   `destructiveHint: false` - Updates fields, doesn’t delete
-   `idempotentHint: true` - Same update with same args = same result
-   `openWorldHint: true` - Interacts with Linear’s external API

Makes 2-5 API calls (issue lookup + validation, +1 if @me, +1 for update, +1 if attachment).

* * *

### Linear.TransitionIssueState

Transition a Linear issue to a new workflow state.



The target state is validated against the team’s available states.

**Parameters**

-   **issue\_id** (`string`, **required**) Issue ID or identifier (like TOO-123).
-   **target\_state** (`string`, **required**) Target workflow state name.
-   **auto\_accept\_matches** (`boolean`, _optional_) Auto-accept fuzzy matches above 90% confidence. Default is `False`.

-   `readOnlyHint: false` - Changes issue workflow state
-   `destructiveHint: false` - Updates state, doesn’t delete
-   `idempotentHint: true` - Transitioning to same state = no change
-   `openWorldHint: true` - Interacts with Linear’s external API

Makes 2-3 API calls (1 for issue lookup, 1 for validation data, 1 for update).

* * *

### Linear.CreateIssueRelation

Create a relation between two issues.



Relation types define the relationship from the source issue’s perspective:

-   `blocks`: Source issue blocks the related issue
-   `blockedBy`: Source issue is blocked by the related issue
-   `duplicate`: Source issue is a duplicate of the related issue
-   `related`: Issues are related (bidirectional)

**Parameters**

-   **issue** (`string`, **required**) Source issue ID or identifier.
-   **related\_issue** (`string`, **required**) Related issue ID or identifier.
-   **relation\_type** (`enum`, **required**) Type of relation to create. Options: `blocks`, `blockedBy`, `duplicate`, `related`.

-   `readOnlyHint: false` - Creates relation between issues
-   `destructiveHint: false` - Additive operation, creates link
-   `idempotentHint: true` - Creating same relation again = no change
-   `openWorldHint: true` - Interacts with Linear’s external API

Makes 3 API calls (get source + related issue in parallel, create relation).

* * *

### Linear.ManageIssueSubscription

Subscribe to or unsubscribe from an issue’s notifications.



**Parameters**

-   **issue** (`string`, **required**) Issue ID or identifier.
-   **subscribe** (`boolean`, **required**) True to subscribe, False to unsubscribe.

-   `readOnlyHint: false` - Modifies user’s subscription state -
-   `destructiveHint: false` - Toggles subscription, reversible
-   `idempotentHint: true` - Subscribing when subscribed = no change
-   `openWorldHint: true` - Interacts with Linear’s external API

Makes 2 API calls (get issue, subscribe/unsubscribe).

* * *

### Linear.ArchiveIssue

Archive an issue.



Archived issues are hidden from default views but can be restored.

**Parameters**

-   **issue** (`string`, **required**) Issue ID or identifier to archive.

-   `readOnlyHint: false` - Archives (soft-deletes) issue
-   `destructiveHint: true` - Hides issue from default views
-   `idempotentHint: true` - Archiving already-archived = no change
-   `openWorldHint: true` - Interacts with Linear’s external API

Makes 2 API calls (get issue, archive).

* * *

## Comment tools

### Linear.ListComments

List comments on an issue.



Returns comments with user info, timestamps, and reply threading info.

**Parameters**

-   **issue** (`string`, **required**) Issue ID or identifier.
-   **limit** (`integer`, _optional_) Maximum number of comments to return. Min 1, max 50. Default is 20.
-   **end\_cursor** (`string`, _optional_) Cursor for pagination. Use ‘end\_cursor’ from previous response. Default is None.

-   `readOnlyHint: true` - Only reads comment data, no modifications
-   `openWorldHint: true` - Interacts with Linear’s external API

Makes 2 API calls (get issue, get comments).

* * *

### Linear.AddComment

Add a comment to an issue.



**Parameters**

-   **issue** (`string`, **required**) Issue ID or identifier to comment on.
-   **body** (`string`, **required**) Comment body in Markdown format.

-   `readOnlyHint: false` - Creates new comment on issue
-   `destructiveHint: false` - Additive operation, creates new comment
-   `idempotentHint: false` - Each call creates a new comment
-   `openWorldHint: true` - Interacts with Linear’s external API

Makes 2 API calls (get issue, create comment).

* * *

### Linear.UpdateComment

Update an existing comment.



**Parameters**

-   **comment\_id** (`string`, **required**) Comment ID to update.
-   **body** (`string`, **required**) New comment body in Markdown format.

-   `readOnlyHint: false` - Modifies existing comment
-   `destructiveHint: false`
-   Updates content, doesn’t delete
-   `idempotentHint: true` - Same update with same args = same result
-   `openWorldHint: true` - Interacts with Linear’s external API

Makes 1 API call.

* * *

### Linear.ReplyToComment

Reply to an existing comment on an issue.



Creates a threaded reply to the specified parent comment.

**Parameters**

-   **issue** (`string`, **required**) Issue ID or identifier.
-   **parent\_comment\_id** (`string`, **required**) ID of the comment to reply to.
-   **body** (`string`, **required**) Reply body in Markdown format.

-   `readOnlyHint: false` - Creates reply to existing comment -
-   `destructiveHint: false` - Additive operation, creates new reply -
-   `idempotentHint: false` - Each call creates a new reply
-   `openWorldHint: true` - Interacts with Linear’s external API

Makes 2 API calls (get issue, create reply).

* * *

## Project tools

### Linear.GetProject

Get detailed information about a specific Linear project.



Supports lookup by ID, slug\_id, or name (with fuzzy matching for name).

**Parameters**

-   **value** (`string`, **required**) The value to look up (ID, slug\_id, or name depending on lookup\_by).
-   **lookup\_by** (`enum`, _optional_) How to look up the project. Options: `id`, `slug_id`, `name`. Default is `id`.
-   **include\_milestones** (`boolean`, _optional_) Include project milestones in the response. Default is `True`.
-   **include\_members** (`boolean`, _optional_) Include project members in the response. Default is `True`.
-   **include\_issues** (`boolean`, _optional_) Include latest 10 issues (by updated\_at) in the response. Default is `True`.
-   **auto\_accept\_matches** (`boolean`, _optional_) Auto-accept fuzzy matches above 90% confidence. Only used when lookup\_by is name. Default is `False`.

-   `readOnlyHint: true` - Only reads project data, no modifications
-   `openWorldHint: true` - Interacts with Linear’s external API

Makes 1-2 API calls (1 for ID/slug lookup, 2 if fuzzy matching by name).

* * *

### Linear.ListProjects

List Linear projects, optionally filtered by keywords and other criteria.



Returns all projects when no filters provided, or filtered results when keywords or other filters are specified.

**Parameters**

-   **keywords** (`string`, _optional_) Search keywords to match in project names. Default is None (all projects).
-   **state** (`string`, _optional_) Filter by project state. Default is None (all states).
-   **team** (`string`, _optional_) Filter by team name. Default is None (all teams).
-   **created\_after** (`string`, _optional_) Filter projects created after this date in ISO format (YYYY-MM-DD). Default is None (all time).
-   **limit** (`integer`, _optional_) Maximum number of projects to return. Min 1, max 50. Default is 20.
-   **end\_cursor** (`string`, _optional_) Cursor for pagination. Use ‘end\_cursor’ from previous response. Default is None.

-   `readOnlyHint: true` - Only reads project data, no modifications
-   `openWorldHint: true` - Interacts with Linear’s external API

Makes 1 API call.

* * *

### Linear.GetProjectDescription

Get a project’s full description with pagination support.



Use this tool when you need the complete description of a project that was truncated in the get\_project response. Supports chunked reading for very large descriptions.

**Parameters**

-   **project\_id** (`string`, **required**) The project ID or slug\_id.
-   **offset** (`integer`, _optional_) Character offset to start reading from. Default is 0 (start).
-   **limit** (`integer`, _optional_) Maximum characters to return. Default is 5000.

-   `readOnlyHint: true` - Only reads description, no modifications
-   `openWorldHint: true` - Interacts with Linear’s external API

Makes 1 API call.

* * *

### Linear.CreateProject

Create a new Linear project.



Team is validated before creation. If team is not found, suggestions are returned to help correct the input. Lead is validated if provided.

**Parameters**

-   **name** (`string`, **required**) Project name.
-   **team** (`string`, **required**) Team name, key, or ID to associate the project with.
-   **description** (`string`, _optional_) Project description in Markdown format. Default is None.
-   **state** (`enum`, _optional_) Initial project state. Options: `planned`, `started`, `paused`, `completed`, `canceled`. Default is None (uses Linear default).
-   **lead** (`string`, _optional_) Project lead name or email. Must be a workspace member. Default is None.
-   **start\_date** (`string`, _optional_) Project start date in YYYY-MM-DD format. Default is None.
-   **target\_date** (`string`, _optional_) Target completion date in YYYY-MM-DD format. Default is None.
-   **auto\_accept\_matches** (`boolean`, _optional_) Auto-accept fuzzy matches above 90% confidence. Default is `False`.

-   `readOnlyHint: false` - Creates new project in Linear
-   `destructiveHint: false` - Additive operation, creates new resource
-   `idempotentHint: false` - Each call creates a new project
-   `openWorldHint: true` - Interacts with Linear’s external API

Makes 2 API calls (1 for validation data, 1 for creation).

* * *

### Linear.UpdateProject

Update a Linear project with partial updates.



Only fields that are explicitly provided will be updated. All entity references are validated before update.

**Parameters**

-   **project\_id** (`string`, **required**) Project ID or slug\_id.
-   **name** (`string`, _optional_) New project name. Only updated if provided.
-   **description** (`string`, _optional_) New project description in Markdown format. Only updated if provided.
-   **state** (`enum`, _optional_) New project state. Options: `planned`, `started`, `paused`, `completed`, `canceled`. Only updated if provided.
-   **lead** (`string`, _optional_) New project lead name or email. Only updated if provided.
-   **start\_date** (`string`, _optional_) New start date in YYYY-MM-DD format. Only updated if provided.
-   **target\_date** (`string`, _optional_) New target date in YYYY-MM-DD format. Only updated if provided.
-   **teams\_to\_add** (`array`, _optional_) Team names, keys, or IDs to add to the project. Only updated if provided.
-   **teams\_to\_remove** (`array`, _optional_) Team names, keys, or IDs to remove from the project. Only updated if provided.
-   **auto\_accept\_matches** (`boolean`, _optional_) Auto-accept fuzzy matches above 90% confidence. Default is `False`.

-   `readOnlyHint: false` - Modifies existing project
-   `destructiveHint: false`
-   Updates fields, doesn’t delete
-   `idempotentHint: true` - Same update with same args = same result
-   `openWorldHint: true` - Interacts with Linear’s external API

Makes 1-3 API calls (1 for update, +1-2 if resolving lead/team).

* * *

### Linear.CreateProjectUpdate

Create a project status update.



Project updates are posts that communicate progress, blockers, or status changes to stakeholders. They appear in the project’s Updates tab and can include a health status indicator.

**Parameters**

-   **project\_id** (`string`, **required**) The project ID to create an update for.
-   **body** (`string`, **required**) The update content in Markdown format.
-   **health** (`enum`, _optional_) Project health status. Options: `onTrack`, `atRisk`, `offTrack`. Default is None (no change).

-   `readOnlyHint: false` - Creates status update post
-   `destructiveHint: false` - Additive operation, creates new update
-   `idempotentHint: false` - Each call creates a new update
-   `openWorldHint: true` - Interacts with Linear’s external API

Makes 1 API call.

* * *

### Linear.ArchiveProject

Archive a project.



Archived projects are hidden from default views but can be restored.

**Parameters**

-   **project** (`string`, **required**) Project ID, slug\_id, or name to archive.
-   **auto\_accept\_matches** (`boolean`, _optional_) Auto-accept fuzzy matches above 90% confidence. Default is `False`.

-   `readOnlyHint: false` - Archives (soft-deletes) project
-   `destructiveHint: true` - Hides project from default views
-   `idempotentHint: true` - Archiving already-archived = no change
-   `openWorldHint: true` - Interacts with Linear’s external API

Makes 2 API calls (get project, archive).

* * *

## Initiative tools

### Linear.GetInitiative

Get detailed information about a specific Linear initiative.



Supports lookup by ID or name (with fuzzy matching for name).

**Parameters**

-   **value** (`string`, **required**) The value to look up (ID or name depending on lookup\_by).
-   **lookup\_by** (`enum`, _optional_) How to look up the initiative. Options: `id`, `name`. Default is `id`.
-   **include\_projects** (`boolean`, _optional_) Include linked projects in the response. Default is `True`.
-   **auto\_accept\_matches** (`boolean`, _optional_) Auto-accept fuzzy matches above 90% confidence. Only used when lookup\_by is name. Default is `False`.

-   `readOnlyHint: true` - Only reads initiative data, no modifications
-   `openWorldHint: true` - Interacts with Linear’s external API

Makes 1-2 API calls (1 for ID lookup, 2 if fuzzy matching by name).

* * *

### Linear.ListInitiatives

List Linear initiatives, optionally filtered by keywords and other criteria.



Returns all initiatives when no filters provided, or filtered results when keywords or other filters are specified.

**Parameters**

-   **keywords** (`string`, _optional_) Search keywords to match in initiative names. Default is None (all initiatives).
-   **state** (`enum`, _optional_) Filter by initiative state. Options: `planned`, `started`, `paused`, `completed`. Default is None (all states).
-   **limit** (`integer`, _optional_) Maximum number of initiatives to return. Min 1, max 50. Default is 20.
-   **end\_cursor** (`string`, _optional_) Cursor for pagination. Use ‘end\_cursor’ from previous response. Default is None.

-   `readOnlyHint: true` - Only reads initiative data, no modifications
-   `openWorldHint: true` - Interacts with Linear’s external API

Makes 1 API call.

* * *

### Linear.GetInitiativeDescription

Get an initiative’s full description with pagination support.



Use this tool when you need the complete description of an initiative that was truncated in the get\_initiative response. Supports chunked reading for very large descriptions.

**Parameters**

-   **initiative\_id** (`string`, **required**) The initiative ID.
-   **offset** (`integer`, _optional_) Character offset to start reading from. Default is 0 (start).
-   **limit** (`integer`, _optional_) Maximum characters to return. Default is 5000.

-   `readOnlyHint: true` - Only reads description, no modifications
-   `openWorldHint: true` - Interacts with Linear’s external API

Makes 1 API call.

* * *

### Linear.CreateInitiative

Create a new Linear initiative.



Initiatives are high-level strategic goals that group related projects.

**Parameters**

-   **name** (`string`, **required**) Initiative name.
-   **description** (`string`, _optional_) Initiative description in Markdown format. Default is None.
-   **status** (`enum`, _optional_) Initial initiative status. Options: `planned`, `started`, `paused`, `completed`. Default is None (uses Linear default).
-   **target\_date** (`string`, _optional_) Target completion date in YYYY-MM-DD format. Default is None.

-   `readOnlyHint: false` - Creates new initiative in Linear
-   `destructiveHint: false` - Additive operation, creates new resource
-   `idempotentHint: false` - Each call creates a new initiative
-   `openWorldHint: true` - Interacts with Linear’s external API

Makes 1 API call.

* * *

### Linear.UpdateInitiative

Update a Linear initiative with partial updates.



Only fields that are explicitly provided will be updated.

**Parameters**

-   **initiative\_id** (`string`, **required**) Initiative ID.
-   **name** (`string`, _optional_) New initiative name. Only updated if provided.
-   **description** (`string`, _optional_) New initiative description in Markdown format. Only updated if provided.
-   **status** (`enum`, _optional_) New initiative status. Options: `planned`, `started`, `paused`, `completed`. Only updated if provided.
-   **target\_date** (`string`, _optional_) New target date in YYYY-MM-DD format. Only updated if provided.

-   `readOnlyHint: false` - Modifies existing initiative
-   `destructiveHint: false` - Updates fields, doesn’t delete
-   `idempotentHint: true` - Same update with same args = same result
-   `openWorldHint: true` - Interacts with Linear’s external API

Makes 1 API call.

* * *

### Linear.AddProjectToInitiative

Link a project to an initiative.



Both initiative and project can be specified by ID or name. If a name is provided, fuzzy matching is used to resolve it.

**Parameters**

-   **initiative** (`string`, **required**) Initiative ID or name to link the project to.
-   **project** (`string`, **required**) Project ID or name to link.
-   **auto\_accept\_matches** (`boolean`, _optional_) Auto-accept fuzzy matches above 90% confidence. Default is `False`.

-   `readOnlyHint: false` - Creates link between project and initiative -
-   `destructiveHint: false` - Additive operation, creates association -
-   `idempotentHint: true` - Linking same project again = no change -
-   `openWorldHint: true` - Interacts with Linear’s external API

Makes 3 API calls (initiatives query, projects query, initiativeToProjectCreate mutation).

* * *

### Linear.ArchiveInitiative

Archive an initiative.



Archived initiatives are hidden from default views but can be restored.

**Parameters**

-   **initiative** (`string`, **required**) Initiative ID or name to archive.
-   **auto\_accept\_matches** (`boolean`, _optional_) Auto-accept fuzzy matches above 90% confidence. Default is `False`.

-   `readOnlyHint: false` - Archives (soft-deletes) initiative -
-   `destructiveHint: true` - Hides initiative from default views -
-   `idempotentHint: true` - Archiving already-archived = no change -
-   `openWorldHint: true` - Interacts with Linear’s external API

Makes 2 API calls (get initiative, archive).

* * *

## Cycle tools

### Linear.GetCycle

Get detailed information about a specific Linear cycle.



**Parameters**

-   **cycle\_id** (`string`, **required**) The cycle ID.

-   `readOnlyHint: true` - Only reads cycle data, no modifications
-   `openWorldHint: true` - Interacts with Linear’s external API

Makes 1 API call.

* * *

### Linear.ListCycles

List Linear cycles, optionally filtered by team and status.



Cycles are time-boxed iterations (like sprints) for organizing work.

**Parameters**

-   **team** (`string`, _optional_) Filter by team ID or key. Default is None (all teams).
-   **active\_only** (`boolean`, _optional_) Only return currently active cycles. Default is `False`.
-   **include\_completed** (`boolean`, _optional_) Include completed cycles. Default is `True`.
-   **limit** (`integer`, _optional_) Maximum number of cycles to return. Min 1, max 50. Default is 20.
-   **end\_cursor** (`string`, _optional_) Cursor for pagination. Use ‘end\_cursor’ from previous response. Default is None.

-   `readOnlyHint: true` - Only reads cycle data, no modifications
-   `openWorldHint: true` - Interacts with Linear’s external API

Makes 1-2 API calls (1 for cycles, +1 if team filter provided to resolve team ID).

* * *

## Metadata tools

### Linear.ListLabels

List available issue labels in the workspace.



Returns labels that can be applied to issues. Use label IDs or names when creating or updating issues.

**Parameters**

-   **limit** (`integer`, _optional_) Maximum number of labels to return. Min 1, max 100. Default is 50.

-   `readOnlyHint: true` - Only reads label data, no modifications
-   `openWorldHint: true` - Interacts with Linear’s external API

Makes 1 API call.

* * *

### Linear.ListWorkflowStates

List available workflow states in the workspace.



Returns workflow states that can be used for issue transitions. States are team-specific and have different types.

**Parameters**

-   **team** (`string`, _optional_) Filter by team name or key. Default is None (all teams).
-   **state\_type** (`enum`, _optional_) Filter by state type. Options: `triage`, `backlog`, `unstarted`, `started`, `completed`, `canceled`. Default is None (all types).
-   **limit** (`integer`, _optional_) Maximum number of states to return. Min 1, max 100. Default is 50.

-   `readOnlyHint: true` - Only reads workflow state data, no modifications
-   `openWorldHint: true` - Interacts with Linear’s external API

Makes 1 API call.

* * *

## GitHub integration tools

### Linear.LinkGithubToIssue

Link a GitHub PR, commit, or issue to a Linear issue.



Automatically detects the artifact type from the URL and generates an appropriate title if not provided.

**Parameters**

-   **issue** (`string`, **required**) Issue ID or identifier to link to.
-   **github\_url** (`string`, **required**) GitHub URL to link (PR, commit, or issue).
-   **title** (`string`, _optional_) Custom title for the link. If not provided, auto-generated from URL.

-   `readOnlyHint: false` - Attaches GitHub link to issue
-   `destructiveHint: false` - Additive operation, creates attachment
-   `idempotentHint: true` - Linking same URL again = no change
-   `openWorldHint: true` - Interacts with Linear’s external API

Makes 2 API calls (get issue, link URL).

* * *

## Auth

The Arcade Linear MCP Server uses the [Linear auth provider](/references/auth-providers/linear.md) to connect to users’ Linear accounts. Please refer to the [Linear auth provider](/references/auth-providers/linear.md) documentation to learn how to configure auth.

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_linear ``` Learn more](/guides/deployment-hosting.md)

Last updated on February 7, 2026

[Environment Variables](/en/resources/integrations/productivity/jira/environment-variables.md)
[Mailchimp Marketing API](/en/resources/integrations/productivity/mailchimp-marketing-api.md)
