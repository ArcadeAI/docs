---
title: "TicktickApi"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Productivity & Docs](/en/resources/integrations/productivity/asana.md)
TicktickApi

# TicktickApi

Arcade Unoptimized

**Description:** Tools that enable LLMs to interact directly with the ticktick API.

**Author:** Arcade

**Auth:** User authorization

[![PyPI Version](https://img.shields.io/pypi/v/arcade_ticktick_api)](https://pypi.org/project/arcade_ticktick_api/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_ticktick_api)](https://pypi.org/project/arcade_ticktick_api/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_ticktick_api)](https://pypi.org/project/arcade_ticktick_api/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_ticktick_api)](https://pypi.org/project/arcade_ticktick_api/)

TicktickApi is a [Unoptimized MCP Server](/guides/create-tools/improve/types-of-tools.md#unoptimized-tools)
: each tool mirrors one HTTP endpoint and offers LLMs a way to interact with the low-level API.



Differently from [Optimized MCP Servers](/guides/create-tools/improve/types-of-tools.md#optimized-tools)
, Unoptimized tools are heavily influenced by the original API design, which is not usually optimized for LLM usage. For this reason, we recommend thoroughly evaluating the tools with your Agents or chatbots before using it in production. [Read more](/guides/create-tools/improve/types-of-tools.md) about Optimized vs Unoptimized tools.

The TicktickApi MCP Server offers a comprehensive set of tools for managing tasks and projects within Ticktick. Users can easily create, update, and delete tasks and projects, as well as retrieve detailed information about them. Key actions include:

## Available Tools

Tool Name

Description

TicktickApi.RetrieveTaskDetails

Retrieve detailed information for a specific task.

TicktickApi.DeleteSpecificTask

Permanently delete a task using project and task IDs.

TicktickApi.CreateTaskTicktick

Create a new task in Ticktick with specified properties.

TicktickApi.UpdateTaskProperties

Update a task's properties in Ticktick.

TicktickApi.MarkTaskComplete

Marks a specific task as completed in Ticktick.

TicktickApi.GetUserProjects

Retrieve all user-accessible projects from Ticktick.

TicktickApi.CreateProjectInTicktick

Create a new project in Ticktick with optional properties.

TicktickApi.GetTicktickProjectById

Retrieve Ticktick project details by project ID.

TicktickApi.UpdateProjectProperties

Update properties of an existing project.

TicktickApi.DeleteTicktickProject

Permanently delete a project in Ticktick by ID.

TicktickApi.RetrieveProjectWithTasks

Retrieve detailed project information and all related tasks.

If you need to perform an action that’s not listed here, you can [get in touch with us](mailto:contact@arcade.dev) to request a new tool, or [create your own tools](/guides/create-tools/tool-basics/build-mcp-server.md).

## TicktickApi.RetrieveTaskDetails



Retrieve detailed information for a specific task.

**Parameters**

-   **project\_identifier** (`string`, required) The unique ID of the project containing the task to retrieve.
-   **task\_identifier** (`string`, required) Unique identifier for the task to retrieve detailed information including subtasks and reminders.

## TicktickApi.DeleteSpecificTask



Permanently delete a task using project and task IDs.

**Parameters**

-   **project\_id** (`string`, required) The unique ID of the project containing the task to be deleted.
-   **task\_identifier\_to\_delete** (`string`, required) The unique ID of the task to permanently delete from a project.

## TicktickApi.CreateTaskTicktick



Create a new task in Ticktick with specified properties.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## TicktickApi.UpdateTaskProperties



Update a task’s properties in Ticktick.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **task\_identifier** (`string`, optional) The unique ID of the task to update in Ticktick. This is required to identify the specific task to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## TicktickApi.MarkTaskComplete



Marks a specific task as completed in Ticktick.

**Parameters**

-   **project\_id** (`string`, required) Unique ID of the project containing the task to be completed.
-   **task\_identifier** (`string`, required) The unique ID of the task to be marked as completed.

## TicktickApi.GetUserProjects



Retrieve all user-accessible projects from Ticktick.

**Parameters**

This tool does not take any parameters.

## TicktickApi.CreateProjectInTicktick



Create a new project in Ticktick with optional properties.

**Parameters**

-   **project\_name** (`string`, required) Name of the project to be created. This is a required field.
-   **project\_color** (`string`, optional) Hex color code representing the project’s color (e.g., ‘#F18181’).
-   **project\_kind** (`string`, optional) Specifies the type of items the project will store. Choose ‘TASK’ for tasks or ‘NOTE’ for notes.
-   **project\_sort\_order** (`integer`, optional) The integer value representing the project’s sort order.
-   **project\_view\_mode** (`string`, optional) The display mode for the project: choose from ‘list’, ‘kanban’, or ‘timeline’.

## TicktickApi.GetTicktickProjectById



Retrieve Ticktick project details by project ID.

**Parameters**

-   **project\_id** (`string`, required) The unique ID of the Ticktick project to retrieve.

## TicktickApi.UpdateProjectProperties



Update properties of an existing project.

**Parameters**

-   **project\_identifier** (`string`, required) Unique ID of the project to update.
-   **project\_color** (`string`, optional) Hex color code representing the color of the project, such as ‘#FFFFFF’.
-   **project\_kind** (`string`, optional) Specify the type of project: TASK or NOTE.
-   **project\_name** (`string`, optional) The new name for the project to be updated. This should be a string representing the desired project name.
-   **project\_sort\_order** (`integer`, optional) Sort order value for the project, default is 0. Determines the project’s position relative to others.
-   **project\_view\_mode** (`string`, optional) Specifies the view mode of the project. Options are ‘list’, ‘kanban’, or ‘timeline’.

## TicktickApi.DeleteTicktickProject



Permanently delete a project in Ticktick by ID.

**Parameters**

-   **project\_id** (`string`, required) The unique ID of the Ticktick project to permanently delete. Ensure the ID is correct, as this action cannot be undone.

## TicktickApi.RetrieveProjectWithTasks



Retrieve detailed project information and all related tasks.

**Parameters**

-   **project\_id** (`string`, required) The unique ID of the project to retrieve with all data, including tasks and columns.

## Reference

Below is a reference of enumerations used by some of the tools in the TicktickApi MCP Server:

### ToolMode

-   **GET\_REQUEST\_SCHEMA**: `get_request_schema`
-   **EXECUTE**: `execute`

## Auth

The TicktickApi MCP Server uses the Auth Provider with id `arcade-ticktick` to connect to users’ TickTick accounts. In order to use the MCP Server, you will need to configure the `arcade-ticktick` auth provider.

Learn how to configure the TickTick auth provider in the [TickTick auth provider documentation](/references/auth-providers/ticktick.md).

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_ticktick_api ``` Learn more](/guides/deployment-hosting.md)

Last updated on February 7, 2026

[SquareupApi](/en/resources/integrations/productivity/squareup-api.md)
[TrelloApi](/en/resources/integrations/productivity/trello-api.md)
