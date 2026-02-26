---
title: "ArcadeEngineApi"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Developer Tools](/en/resources/integrations/development/e2b.md)
ArcadeEngineApi

# ArcadeEngineApi

Arcade Unoptimized

**Description:** Tools that enable LLMs to interact directly with the engine API.

**Author:** Arcade

**Auth:** API Key

[![PyPI Version](https://img.shields.io/pypi/v/arcade_engine_api)](https://pypi.org/project/arcade_engine_api/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_engine_api)](https://pypi.org/project/arcade_engine_api/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_engine_api)](https://pypi.org/project/arcade_engine_api/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_engine_api)](https://pypi.org/project/arcade_engine_api/)

EngineApi is a [Unoptimized MCP Server](/guides/create-tools/improve/types-of-tools.md#unoptimized-tools)
: each tool mirrors one HTTP endpoint and offers LLMs a way to interact with the low-level API.



Differently from [Optimized MCP Servers](/guides/create-tools/improve/types-of-tools.md#optimized-tools)
, Unoptimized tools are heavily influenced by the original API design, which is not usually optimized for LLM usage. For this reason, we recommend thoroughly evaluating the tools with your Agents or chatbots before using it in production. [Read more](/guides/create-tools/improve/types-of-tools.md) about Optimized vs Unoptimized tools.

The EngineApi MCP Server offers a comprehensive suite of tools for managing authentication providers, secrets, and worker configurations. Users and LLMs can perform a variety of actions, including:

## Available Tools

Tool Name

Description

EngineApi.ListAvailableAuthProviders

Retrieve a list of available authentication providers.

EngineApi.GetAuthProviderDetails

Retrieve details of a specific authentication provider.

EngineApi.DeleteAuthProvider

Delete a specific auth provider by ID.

EngineApi.UpdateSessionVerificationSettings

Update session verification settings for a user.

EngineApi.ListAuthConnections

Retrieve all authentication connections for users.

EngineApi.DeleteUserAuthConnection

Deletes a user/auth provider connection.

EngineApi.CheckAuthStatus

Verify the ongoing authorization status of a tool.

EngineApi.RetrieveFormattedToolsList

Fetches a formatted list of tools from engine configuration.

EngineApi.GetFormattedToolSpecification

Fetches a formatted specification for a given tool.

EngineApi.CheckArcadeEngineHealth

Check the health status of the Arcade Engine.

EngineApi.DeleteMcpEndpoint

Delete the Model Context Protocol endpoint data.

EngineApi.ListAccessibleProjects

Retrieve a list of accessible projects.

EngineApi.GetProjectDetails

Retrieve detailed information about a specific project.

EngineApi.GetScheduledToolExecutions

Fetch a list of scheduled tool executions.

EngineApi.GetScheduledToolDetails

Retrieve details for a specific scheduled tool execution.

EngineApi.GetOpenAPISpecification

Get the OpenAPI 3.0 specification in JSON format.

EngineApi.GetToolsList

Retrieve a list of tools from the engine configuration.

EngineApi.AuthorizeUserToolAccess

Authorize a user to access a specific tool.

EngineApi.ExecuteTool

Execute a specified tool with given parameters.

EngineApi.GetToolSpecification

Retrieve the specification for a specific arcade tool.

EngineApi.ListWorkers

Retrieve a list of all workers with their definitions.

EngineApi.CreateWorker

Create a new worker in the system.

EngineApi.TestWorkerConnection

Test a worker connection before adding it to the system.

EngineApi.GetWorkerById

Retrieve worker details using their ID.

EngineApi.DeleteWorker

Deletes a specified worker from the system.

EngineApi.AuthorizeWorker

Authorize a worker based on their ID.

EngineApi.GetWorkerHealthStatus

Retrieve the health status of a worker.

EngineApi.FetchToolsPage

Retrieve a list of tools for a specific worker.

If you need to perform an action that’s not listed here, you can [get in touch with us](mailto:contact@arcade.dev) to request a new tool, or [create your own tools](/guides/create-tools/tool-basics/build-mcp-server.md).

## EngineApi.ListAvailableAuthProviders



Retrieve a list of available authentication providers.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `ARCADE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## EngineApi.GetAuthProviderDetails



Retrieve details of a specific authentication provider.

**Parameters**

-   **auth\_provider\_id** (`string`, required) The ID of the authentication provider to retrieve.

**Secrets**

This tool requires the following secrets: `ARCADE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## EngineApi.DeleteAuthProvider



Delete a specific auth provider by ID.

**Parameters**

-   **auth\_provider\_id** (`string`, required) The ID of the authentication provider to delete.

**Secrets**

This tool requires the following secrets: `ARCADE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## EngineApi.DeleteSecretById



Deletes a secret using its unique ID.

**Parameters**

-   **secret\_id** (`string`, required) The unique identifier of the secret to delete.

**Secrets**

This tool requires the following secrets: `ARCADE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## EngineApi.UpdateSessionVerificationSettings



Update session verification settings for a user.

**Parameters**

-   **unsafe\_skip\_verification** (`boolean`, optional) Set to true to skip the session verification, making it unsafe.
-   **verifier\_url** (`string`, optional) The URL of the verifier service used for session verification. Provide a valid URL.

**Secrets**

This tool requires the following secrets: `ARCADE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## EngineApi.ListAuthConnections



Retrieve all authentication connections for users.

**Parameters**

-   **page\_offset** (`integer`, optional) The starting point in the list for pagination. Useful for retrieving subsequent pages of data.
-   **page\_size** (`integer`, optional) Number of auth connections to return per page. Use to control the size of the result set.
-   **provider\_id** (`string`, optional) Unique identifier for the authentication provider.
-   **user\_id** (`string`, optional) The unique identifier for the user to list authentication connections for.

**Secrets**

This tool requires the following secrets: `ARCADE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## EngineApi.DeleteUserAuthConnection



Deletes a user/auth provider connection.

**Parameters**

-   **connection\_id** (`string`, required) The unique identifier for the user/auth provider connection to be deleted.

**Secrets**

This tool requires the following secrets: `ARCADE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## EngineApi.CheckAuthStatus



Verify the ongoing authorization status of a tool.

**Parameters**

-   **authorization\_id** (`string`, required) The unique ID for the authorization process to check its status.
-   **timeout\_in\_seconds** (`integer`, optional) Specify the timeout duration in seconds. Maximum allowed is 59 seconds.

**Secrets**

This tool requires the following secrets: `ARCADE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## EngineApi.RetrieveFormattedToolsList



Fetches a formatted list of tools from engine configuration.

**Parameters**

-   **filter\_by\_toolkit** (`string`, optional) Specify the toolkit name to filter the list of tools.
-   **number\_of\_items\_to\_return** (`integer`, optional) Specify the number of tools to return. Defaults to 25, with a maximum of 100.
-   **offset\_start\_index** (`integer`, optional) Offset from the start of the tools list. Default is 0.
-   **provider\_format** (`string`, optional) Format the tools according to the provider’s specifications. Accepts a string value.
-   **user\_identifier** (`string`, optional) The ID of the user for whom the tool list is to be retrieved.

**Secrets**

This tool requires the following secrets: `ARCADE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## EngineApi.GetFormattedToolSpecification



Fetches a formatted specification for a given tool.

**Parameters**

-   **tool\_name** (`string`, required) The name of the tool for which the formatted specification is requested.
-   **provider\_format** (`string`, optional) Specifies the format of the tool as required by the provider.
-   **user\_id** (`string`, optional) The identifier for the user requesting the tool specification. This should be a string.

**Secrets**

This tool requires the following secrets: `ARCADE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## EngineApi.CheckArcadeEngineHealth



Check the health status of the Arcade Engine.

**Parameters**

This tool does not take any parameters.

## EngineApi.DeleteMcpEndpoint



Delete the Model Context Protocol endpoint data.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `ARCADE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## EngineApi.ListAccessibleProjects



Retrieve a list of accessible projects.

**Parameters**

-   **bearer\_token** (`string`, required) A string containing the Bearer (JWT) token for authentication.
-   **items\_to\_skip** (`integer`, optional) The number of projects to skip before starting to collect the result set.
-   **maximum\_items\_to\_return** (`integer`, optional) Specifies the maximum number of projects to return. Must be an integer.

**Secrets**

This tool requires the following secrets: `ARCADE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## EngineApi.GetProjectDetails



Retrieve detailed information about a specific project.

**Parameters**

-   **authorization\_token** (`string`, required) JWT token required for authentication. Should be provided in the format: ‘Bearer <token>’.
-   **project\_id** (`string`, required) The unique identifier for the project to retrieve details for. This should be a string matching the project’s ID in the database.

**Secrets**

This tool requires the following secrets: `ARCADE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## EngineApi.GetScheduledToolExecutions



Fetch a list of scheduled tool executions.

**Parameters**

-   **items\_limit** (`integer`, optional) The number of scheduled tool executions to return. Defaults to 25, max is 100.
-   **list\_offset** (`integer`, optional) The starting position in the list of scheduled tool executions, default is 0.

**Secrets**

This tool requires the following secrets: `ARCADE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## EngineApi.GetScheduledToolDetails



Retrieve details for a specific scheduled tool execution.

**Parameters**

-   **scheduled\_execution\_id** (`string`, required) The unique identifier for the scheduled tool execution to retrieve details for.

**Secrets**

This tool requires the following secrets: `ARCADE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## EngineApi.GetOpenAPISpecification



Get the OpenAPI 3.0 specification in JSON format.

Use this tool to retrieve the OpenAPI 3.0 specification for the Arcade Engine API, which provides detailed information about all available endpoints and their usage.

**Parameters**

This tool does not take any parameters.

## EngineApi.GetToolsList



Retrieve a list of tools from the engine configuration.

**Parameters**

-   **include\_formats** (`array[string]`, optional) List of tool formats to include in the response, specified by their names.
-   **items\_per\_page** (`integer`, optional) Specify the number of tools to return, with a maximum of 100. Defaults to 25 if not specified.
-   **start\_offset** (`integer`, optional) Offset to determine the starting point from the list of tools. Default is 0.
-   **toolkit\_name** (`string`, optional) Specifies the name of the toolkit to filter the tools list.
-   **user\_id** (`string`, optional) The ID of the user requesting the tool list. It is used to filter the results for a specific user context.

**Secrets**

This tool requires the following secrets: `ARCADE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## EngineApi.AuthorizeUserToolAccess



Authorize a user to access a specific tool.

**Parameters**

-   **tool\_name\_for\_authorization** (`string`, required) Specify the name of the tool to authorize the user for access.
-   **redirect\_uri\_after\_authorization** (`string`, optional) Optional URI to redirect the user after authorization.
-   **tool\_version** (`string`, optional) Specify the tool version to authorize. If not provided, any version will be used.
-   **user\_id** (`string`, optional) The unique identifier for a user. Required only when using an API key for authorization.

**Secrets**

This tool requires the following secrets: `ARCADE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## EngineApi.ExecuteTool



Execute a specified tool with given parameters.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ARCADE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## EngineApi.GetToolSpecification



Retrieve the specification for a specific arcade tool.

**Parameters**

-   **tool\_name** (`string`, required) The name of the tool whose specification is to be retrieved. This should match the tool’s registered name.
-   **formats\_to\_include** (`array[string]`, optional) List of tool formats to include in the response. Provide formats as a list of strings.
-   **user\_identifier** (`string`, optional) The unique identifier for the user requesting the tool specification.

**Secrets**

This tool requires the following secrets: `ARCADE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## EngineApi.ListWorkers



Retrieve a list of all workers with their definitions.

**Parameters**

-   **number\_of\_items\_to\_return** (`integer`, optional) The maximum number of worker items to return, with a default of 25 and a maximum of 100.
-   **start\_offset** (`integer`, optional) Offset from the start of the list for pagination. Defaults to 0.

**Secrets**

This tool requires the following secrets: `ARCADE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## EngineApi.CreateWorker



Create a new worker in the system.

**Parameters**

-   **worker\_id** (`string`, required) A unique identifier for the worker to be created. It should be a string.
-   **enable\_worker** (`boolean`, optional) Set to true to enable the new worker upon creation, or false to keep it disabled.
-   **http\_retry\_attempts** (`integer`, optional) Number of retry attempts for HTTP requests if a failure occurs.
-   **http\_secret\_key** (`string`, optional) A secret key used for HTTP authentication and authorization. It should be a secure string provided by the service.
-   **http\_timeout\_seconds** (`integer`, optional) The timeout duration for the HTTP connection, specified in seconds. This defines how long the system should wait for the HTTP request to complete before timing out.
-   **mcp\_retry\_attempts** (`integer`, optional) Specifies the number of retry attempts for MCP connections. Provide an integer value to define how many times the system should retry a connection if it fails.
-   **mcp\_timeout\_duration** (`integer`, optional) The timeout duration for MCP operations in seconds. Must be an integer value.
-   **worker\_http\_uri** (`string`, optional) The HTTP URI for the worker’s endpoint. This expects a valid URL string that specifies where the worker’s service can be accessed.
-   **worker\_resource\_uri** (`string`, optional) The URI for the worker’s resource location or service endpoint. Provide the full URI as a string.
-   **worker\_type** (`string`, optional) Specifies the type of worker to be created. It should be a string indicating the category or role of the worker.

**Secrets**

This tool requires the following secrets: `ARCADE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## EngineApi.TestWorkerConnection



Test a worker connection before adding it to the system.

**Parameters**

-   **worker\_connection\_type** (`string`, required) Specify the type of worker connection to test. It must be a string value indicating the category or mode of the worker.
-   **http\_uri** (`string`, optional) Specify the HTTP URI of the worker to test the connection.
-   **mcp\_uri** (`string`, optional) The URI for the MCP connection required to test a worker connection.

**Secrets**

This tool requires the following secrets: `ARCADE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## EngineApi.GetWorkerById



Retrieve worker details using their ID.

**Parameters**

-   **worker\_id** (`string`, required) The unique identifier for the worker to retrieve details.

**Secrets**

This tool requires the following secrets: `ARCADE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## EngineApi.DeleteWorker



Deletes a specified worker from the system.

**Parameters**

-   **worker\_id** (`string`, required) The unique identifier for the worker to be deleted.

**Secrets**

This tool requires the following secrets: `ARCADE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## EngineApi.AuthorizeWorker



Authorize a worker based on their ID.

**Parameters**

-   **worker\_id** (`string`, required) The unique identifier for the worker to be authorized.

**Secrets**

This tool requires the following secrets: `ARCADE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## EngineApi.GetWorkerHealthStatus



Retrieve the health status of a worker.

**Parameters**

-   **worker\_id** (`string`, required) The unique identifier for the worker whose health status you want to check.

**Secrets**

This tool requires the following secrets: `ARCADE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## EngineApi.FetchToolsPage



Retrieve a list of tools for a specific worker.

**Parameters**

-   **worker\_id** (`string`, required) The unique ID of the worker for which to retrieve the tools list.
-   **number\_of\_items** (`integer`, optional) Number of items to return in the result set. Default is 25 and the maximum is 100.
-   **start\_offset** (`integer`, optional) Offset from the start of the list for pagination. Defaults to 0.

**Secrets**

This tool requires the following secrets: `ARCADE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## Secrets

This MCP Server requires the `ARCADE_API_KEY` secret to be configured. Learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md).

### Getting your Arcade API Key

To use the Arcade Engine API MCP Server, you need an Arcade API key. This key authenticates your requests to the Arcade Engine.

Learn how to create and manage your Arcade API keys in the [API Keys documentation](/get-started/setup/api-keys.md).

## Reference

Below is a reference of enumerations used by some of the tools in the ArcadeEngineApi MCP Server:

### ToolMode

-   **GET\_REQUEST\_SCHEMA**: `get_request_schema`
-   **EXECUTE**: `execute`

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_arcade_engine_api ``` Learn more](/guides/deployment-hosting.md)

Last updated on February 10, 2026

[PostHog API](/en/resources/integrations/development/posthog-api.md)
[Brightdata](/en/resources/integrations/development/brightdata.md)
