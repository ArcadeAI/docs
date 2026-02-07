---
title: "Zendesk"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
Customer SupportZendesk

# Zendesk

Arcade Optimized

**Description:** Enable agents to interact with Zendesk

**Author:** Arcade

**Code:** [GitHub](https://github.com/ArcadeAI/arcade-ai/tree/main/resources/integrations/zendesk)

**Auth:** User authorization

[![PyPI Version](https://img.shields.io/pypi/v/arcade_zendesk)](https://pypi.org/project/arcade_zendesk/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_zendesk)](https://pypi.org/project/arcade_zendesk/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_zendesk)](https://pypi.org/project/arcade_zendesk/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_zendesk)](https://pypi.org/project/arcade_zendesk/)

The Zendesk MCP Server provides a set of tools for managing customer support tickets and knowledge base articles. With this MCP Sever, users can:

-   List and paginate through tickets in their Zendesk account.
-   Retrieve all comments for specific tickets, including the original description and conversation history.
-   Add comments to existing tickets to facilitate communication.
-   Mark tickets as solved, optionally including a final comment.
-   Search for published Help Center articles in the knowledge base, with support for multiple filters in a single request.

This MCP Sever streamlines the process of handling customer inquiries and accessing support resources.

## Available Tools

Tool Name

Description

Zendesk.ListTickets

List tickets from your Zendesk account with offset-based pagination.

Zendesk.GetTicketComments

Get all comments for a specific Zendesk ticket, including the original description.

Zendesk.AddTicketComment

Add a comment to an existing Zendesk ticket.

Zendesk.MarkTicketSolved

Mark a Zendesk ticket as solved, optionally with a final comment.

Zendesk.SearchArticles

Search for Help Center articles in your Zendesk knowledge base.

Zendesk.WhoAmI

Get comprehensive user profile and Zendesk account information.

If you need to perform an action that’s not listed here, you can [get in touch with us](mailto:contact@arcade.dev) to request a new tool, or [create your own tools](/guides/create-tools/tool-basics/build-mcp-server.md).

## Zendesk.ListTickets



List tickets from your Zendesk account with offset-based pagination.

**Parameters**

-   **status** (`Enum` [TicketStatus](/resources/integrations/customer-support/zendesk/reference.md#TicketStatus)
    , optional) The status of tickets to filter by. Defaults to ‘open’
-   **limit** (`integer`, optional) Number of tickets to return. Defaults to 30
-   **offset** (`integer`, optional) Number of tickets to skip before returning results. Defaults to 0
-   **sort\_order** (`Enum` [SortOrder](/resources/integrations/customer-support/zendesk/reference.md#SortOrder)
    , optional) Sort order for tickets by ID. ‘asc’ returns oldest first, ‘desc’ returns newest first. Defaults to ‘desc’

**Secrets**

This tool requires the following secrets: `zendesk_subdomain` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## Zendesk.GetTicketComments



Get all comments for a specific Zendesk ticket, including the original description.

**Parameters**

-   **ticket\_id** (`integer`, required) The ID of the ticket to get comments for

**Secrets**

This tool requires the following secrets: `zendesk_subdomain` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## Zendesk.AddTicketComment



Add a comment to an existing Zendesk ticket.

**Parameters**

-   **ticket\_id** (`integer`, required) The ID of the ticket to comment on
-   **comment\_body** (`string`, required) The text of the comment
-   **public** (`boolean`, optional) Whether the comment is public (visible to requester) or internal. Defaults to True

**Secrets**

This tool requires the following secrets: `zendesk_subdomain` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## Zendesk.MarkTicketSolved



Mark a Zendesk ticket as solved, optionally with a final comment.

**Parameters**

-   **ticket\_id** (`integer`, required) The ID of the ticket to mark as solved
-   **comment\_body** (`string`, optional) Optional final comment to add when solving the ticket
-   **comment\_public** (`boolean`, optional) Whether the comment is visible to the requester. Defaults to False

**Secrets**

This tool requires the following secrets: `zendesk_subdomain` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## Zendesk.SearchArticles



Search for Help Center articles in your Zendesk knowledge base.

**Parameters**

-   **query** (`string`, optional) Search text to match against articles. Supports quoted expressions for exact matching
-   **label\_names** (`array[string]`, optional) List of label names to filter by (case-insensitive). Article must have at least one matching label. Available on Professional/Enterprise plans only
-   **created\_after** (`string`, optional) Filter articles created after this date (format: YYYY-MM-DD)
-   **created\_before** (`string`, optional) Filter articles created before this date (format: YYYY-MM-DD)
-   **created\_at** (`string`, optional) Filter articles created on this exact date (format: YYYY-MM-DD)
-   **sort\_by** (`Enum` [ArticleSortBy](/resources/integrations/customer-support/zendesk/reference.md#ArticleSortBy)
    , optional) Field to sort articles by. Defaults to relevance according to the search query
-   **sort\_order** (`Enum` [SortOrder](/resources/integrations/customer-support/zendesk/reference.md#SortOrder)
    , optional) Sort order direction. Defaults to descending
-   **limit** (`integer`, optional) Number of articles to return. Defaults to 30
-   **offset** (`integer`, optional) Number of articles to skip before returning results. Defaults to 0
-   **include\_body** (`boolean`, optional) Include article body content in results. Bodies will be cleaned of HTML and truncated
-   **max\_article\_length** (`integer`, optional) Maximum length for article body content in characters. Set to None for no limit. Defaults to 500

**Secrets**

This tool requires the following secrets: `zendesk_subdomain` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## Zendesk.WhoAmI



Get comprehensive user profile and Zendesk account information.

**Parameters**

This tool does not take any parameters.

**Secrets**

This tool requires the following secrets: `zendesk_subdomain` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_zendesk ``` Learn more](/guides/deployment-hosting.md)

Last updated on February 7, 2026

[WeaviateApi](/en/resources/integrations/databases/weaviate-api.md)
[Reference](/en/resources/integrations/customer-support/zendesk/reference.md)
