---
title: "CursorAgentsApi"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Developer Tools](/en/resources/integrations/development/e2b.md)
CursorAgentsApi

# CursorAgentsApi

Arcade Unoptimized

**Description:** Tools that enable LLMs to interact directly with the cursor\_agents API.

**Author:** Arcade

**Auth:** API Key

[![PyPI Version](https://img.shields.io/pypi/v/arcade_cursor_agents_api)](https://pypi.org/project/arcade_cursor_agents_api/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_cursor_agents_api)](https://pypi.org/project/arcade_cursor_agents_api/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_cursor_agents_api)](https://pypi.org/project/arcade_cursor_agents_api/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_cursor_agents_api)](https://pypi.org/project/arcade_cursor_agents_api/)

CursorAgentsApi is a [Unoptimized MCP Server](/guides/create-tools/improve/types-of-tools.md#unoptimized-tools)
: each tool mirrors one HTTP endpoint and offers LLMs a way to interact with the low-level API.



Differently from [Optimized MCP Servers](/guides/create-tools/improve/types-of-tools.md#optimized-tools)
, Unoptimized tools are heavily influenced by the original API design, which is not usually optimized for LLM usage. For this reason, we recommend thoroughly evaluating the tools with your Agents or chatbots before using it in production. [Read more](/guides/create-tools/improve/types-of-tools.md) about Optimized vs Unoptimized tools.

The CursorAgentsApi MCP Server provides tools for managing and inspecting background agents, authentication info, model recommendations, and linked GitHub repos. These tools let users and LLMs:

-   List, inspect, and delete background agents.
-   Retrieve an agent’s current status, results, and full conversation history.
-   Verify API key / user info used for authentication.
-   Fetch recommended models for background agents.
-   List GitHub repositories accessible to the authenticated user.

## Available Tools

Tool Name

Description

CursorAgentsApi.ListBackgroundAgents

List all background agents for the user.

CursorAgentsApi.GetAgentStatus

Retrieve the current status and results of a background agent.

CursorAgentsApi.DeleteBackgroundAgent

Permanently delete a background agent.

CursorAgentsApi.GetAgentConversationHistory

Retrieve the conversation history of a background agent.

CursorAgentsApi.RetrieveApiUserInfo

Retrieve information about the API key used for authentication.

CursorAgentsApi.ListRecommendedModels

Retrieve recommended models for background agents.

CursorAgentsApi.ListGithubRepositories

Retrieve accessible GitHub repositories for a user.

If you need to perform an action that’s not listed here, you can [get in touch with us](mailto:contact@arcade.dev) to request a new tool, or [create your own tools](/guides/create-tools/tool-basics/build-mcp-server.md).

## CursorAgentsApi.ListBackgroundAgents



List all background agents for the user.

**Parameters**

-   **agent\_limit** (`integer`, optional) Number of background agents to return for the request.
-   **pagination\_cursor** (`string`, optional) Pagination cursor from the previous response to navigate pages.

**Secrets**

This tool requires the following secrets: `CURSOR_AGENTS_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CursorAgentsApi.GetAgentStatus



Retrieve the current status and results of a background agent.

**Parameters**

-   **background\_agent\_id** (`string`, required) A unique identifier required to retrieve the status and results of the specified background agent.

**Secrets**

This tool requires the following secrets: `CURSOR_AGENTS_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CursorAgentsApi.DeleteBackgroundAgent



Permanently delete a background agent.

**Parameters**

-   **background\_agent\_id** (`string`, required) Unique identifier for the background agent to be deleted permanently.

**Secrets**

This tool requires the following secrets: `CURSOR_AGENTS_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CursorAgentsApi.GetAgentConversationHistory



Retrieve the conversation history of a background agent.

**Parameters**

-   **background\_agent\_id** (`string`, required) Unique identifier for the background agent to retrieve conversation history.

**Secrets**

This tool requires the following secrets: `CURSOR_AGENTS_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CursorAgentsApi.RetrieveApiUserInfo



Retrieve information about the API key used for authentication.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `CURSOR_AGENTS_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CursorAgentsApi.ListRecommendedModels



Retrieve recommended models for background agents.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `CURSOR_AGENTS_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## CursorAgentsApi.ListGithubRepositories



Retrieve accessible GitHub repositories for a user.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `CURSOR_AGENTS_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_cursor_agents_api ``` Learn more](/guides/deployment-hosting.md)

Last updated on February 7, 2026

[Brightdata](/en/resources/integrations/development/brightdata.md)
[DatadogApi](/en/resources/integrations/development/datadog-api.md)
