---
title: "Notion"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Productivity & Docs](/en/resources/integrations/productivity/asana.md)
Notion

# Notion

Arcade Optimized

**Description:** Enable agents to interact with Notion.

**Author:** Arcade

**Auth:** User authorization via the [Notion auth provider](/references/auth-providers/notion.md)

[![PyPI Version](https://img.shields.io/pypi/v/arcade_notion-MCP Sever)](https://pypi.org/project/arcade_notion-MCP Sever/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_notion-MCP Sever)](https://pypi.org/project/arcade_notion-MCP Sever/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_notion-MCP Sever)](https://pypi.org/project/arcade_notion-MCP Sever/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_notion-MCP Sever)](https://pypi.org/project/arcade_notion-MCP Sever/)

The Arcade Notion MCP Server provides a pre-built set of tools for interacting with Notion. These tools make it easy to build agents and AI apps that can:

-   Get a page’s content
-   Create a new page
-   Search for pages or databases by title
-   Get the metadata of a Notion object (page or database)
-   Get a workspace’s folder structure

## Available tools

These tools are currently available in the Arcade Notion MCP Sever.

Tool Name

Description

NotionToolkit.GetPageContentById

Get the content of a Notion page as markdown by page ID.

NotionToolkit.GetPageContentByTitle

Get the content of a Notion page as markdown by title.

NotionToolkit.CreatePage

Create a new Notion page by specifying a parent page title.

NotionToolkit.SearchByTitle

Search for pages or databases by title.

NotionToolkit.GetObjectMetadata

Get the metadata of a Notion object (page or database) using its title or ID.

NotionToolkit.GetWorkspaceStructure

Get the complete workspace structure of your Notion workspace.

NotionToolkit.AppendContentToEndOfPage

Append content to the end of a Notion page.

NotionToolkit.WhoAmI

Get comprehensive user profile and Notion workspace information.

If you need to perform an action that’s not listed here, you can [get in touch with us](mailto:contact@arcade.dev) to request a new tool, or [create your own tools](/guides/create-tools/tool-basics/build-mcp-server.md) with the [Notion auth provider](/references/auth-providers/notion.md).

## NotionToolkit.GetPageContentById



Get the content of a Notion page as markdown with the page’s ID.

**Parameters**

-   **`page_id`** _(string, required)_ The ID of the page to get content from.

* * *

## NotionToolkit.GetPageContentByTitle



Get the content of a Notion page as markdown with the page’s title.

**Parameters**

-   **`title`** _(string, required)_ The title of the page to get content from.

* * *

## NotionToolkit.CreatePage



Create a new Notion page by specifying an existing parent page and the new page details.

**Parameters**

-   **`parent_title`** _(string, required)_ Title of an existing page where the new page will be created.
-   **`title`** _(string, required)_ Title of the new page.
-   **`content`** _(string, optional)_ The content of the new page.

* * *

## NotionToolkit.SearchByTitle



Search for similar titles of pages, databases, or both within the user’s Notion workspace. This tool returns minimal information about matching objects without their content.

**Parameters**

-   **`query`** _(string, optional)_ A substring to search for within page and database titles. If not provided, all items are returned.
-   **`select`** _(str, optional)_ Limit the search to only pages or only databases. If provided, must be one of `page` or `database`. Defaults to both.
-   **`order_by`** _(str, optional)_ The direction to sort search results by last edited time. Must be either `ascending` or `descending`. Defaults to `descending`.
-   **`limit`** _(int, optional)_ The maximum number of results to return. Defaults to 100. Use -1 for no limit.

* * *

## NotionToolkit.GetObjectMetadata



Get the metadata of a Notion object (page or database) using its title or ID. One of `object_title` or `object_id` must be provided (but not both). The returned metadata includes the object’s ID, timestamps, properties, URL, and more.

**Parameters**

-   **`object_title`** _(string, optional)_ The title of the page or database whose metadata to retrieve.
-   **`object_id`** _(string, optional)_ The ID of the page or database whose metadata to retrieve.
-   **`object_type`** _(str, optional)_ The type of object to match the title against. If provided, must be one of `page` or `database`. Defaults to both if not provided.

* * *

## NotionToolkit.GetWorkspaceStructure



Get the complete workspace structure of your Notion workspace. This tool returns a hierarchical view of pages and databases, making it easier to understand the organization of your workspace.

**Parameters**

_None_

* * *

## NotionToolkit.AppendContentToEndOfPage



Append markdown content to the end of a Notion page using either the page’s ID or title.

**Parameters**

-   **`page_id_or_title`** _(string, required)_ The ID or title of the page to append content to.
-   **`content`** _(string, required)_ The markdown content to append to the end of the page.

* * *

## NotionToolkit.WhoAmI



Get comprehensive user profile and Notion workspace information.

**Parameters**

This tool does not take any parameters.

## Auth

The Arcade Notion MCP Sever uses the [Notion auth provider](/references/auth-providers/notion.md) to connect to users’ Notion accounts.

With the Arcade Cloud Platform, there’s nothing to configure. Your users will see `Arcade` as the name of the application that’s requesting permission.

With a self-hosted installation of Arcade, you need to [configure the Notion auth provider](/references/auth-providers/notion.md#configuring-notion-auth) with your own Notion app credentials.

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_notion_MCP Sever ``` Learn more](/guides/deployment-hosting.md)

Last updated on February 7, 2026

[Mailchimp Marketing API](/en/resources/integrations/productivity/mailchimp-marketing-api.md)
[Obsidian](/en/resources/integrations/productivity/obsidian.md)
