---
title: "Sharepoint"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Productivity & Docs](/en/resources/integrations/productivity/asana.md)
Sharepoint

# Sharepoint

Arcade Optimized

**Description:** Enable agents to interact with Sharepoint

**Author:** Arcade

**Auth:** User authorization

[![PyPI Version](https://img.shields.io/pypi/v/arcade_sharepoint)](https://pypi.org/project/arcade_sharepoint/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_sharepoint)](https://pypi.org/project/arcade_sharepoint/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_sharepoint)](https://pypi.org/project/arcade_sharepoint/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_sharepoint)](https://pypi.org/project/arcade_sharepoint/)

The SharePoint MCP Server provides a comprehensive set of tools for interacting with SharePoint sites and their contents. Users can perform various actions, including:

-   Retrieve lists, items, and pages from SharePoint sites.
-   Access metadata and content of specific pages.
-   Search for and retrieve information about SharePoint sites and drives.
-   Browse and download files from SharePoint drives / document libraries.

This MCP Sever simplifies the process of accessing and managing SharePoint resources efficiently for AI Agents and chat bots.

The SharePoint MCP Server requires a Microsoft 365 account. Personal Microsoft accounts are not supported.

## Available Tools

Tool Name

Description

Sharepoint.GetListsFromSite

Retrieve lists from a SharePoint site.

Sharepoint.GetItemsFromList

Retrieve items from a list in a SharePoint site.

Sharepoint.GetPage

Retrieve metadata and the contents of a page in a SharePoint site.

Sharepoint.ListPages

Retrieve pages from a SharePoint site.

Sharepoint.GetSite

Retrieve information about a specific SharePoint site by its ID, URL, or name.

Sharepoint.SearchSites

Search for SharePoint sites by name or description.

Sharepoint.ListSites

List all SharePoint sites accessible to the current user.

Sharepoint.GetFollowedSites

Retrieve a list of SharePoint sites that are followed by the current user.

Sharepoint.GetDrivesFromSite

Retrieve drives / document libraries from a SharePoint site.

Sharepoint.ListRootItemsInDrive

Retrieve items from the root of a drive in a SharePoint site.

Sharepoint.ListItemsInFolder

Retrieve items from a folder in a drive in a SharePoint site.

Sharepoint.SearchDriveItems

Search for items in one or more Sharepoint drives.

If you need to perform an action that’s not listed here, you can [get in touch with us](mailto:contact@arcade.dev) to request a new tool, or [create your own tools](/guides/create-tools/tool-basics/build-mcp-server.md).

## Sharepoint.GetListsFromSite



Retrieve lists from a SharePoint site.

**Parameters**

-   **site** (`string`, required) Site ID, SharePoint URL, or site name to get lists from. Prefer using a site ID whenever available for optimal performance.

## Sharepoint.GetItemsFromList



Retrieve items from a list in a SharePoint site.

**Parameters**

-   **site** (`string`, required) Site ID, SharePoint URL, or site name to get lists from. Prefer using a site ID whenever available for optimal performance.
-   **list\_id** (`string`, required) The ID of the list to get items from.

## Sharepoint.GetPage



Retrieve metadata and the contents of a page in a SharePoint site.

**Parameters**

-   **site** (`string`, required) Site ID, SharePoint URL, or site name to retrieve base pages from. Prefer using a site ID whenever available for optimal performance
-   **page\_id** (`string`, required) The ID of the page to retrieve.
-   **include\_page\_content** (`boolean`, optional) Whether to include the page content in the response. Defaults to True. If set to False, the tool will return only the page metadata.

## Sharepoint.ListPages



Retrieve pages from a SharePoint site.

**Parameters**

-   **site** (`string`, required) Site ID, SharePoint URL, or site name to retrieve base pages from. Prefer using a site ID whenever available for optimal performance.
-   **limit** (`integer`, optional) The maximum number of pages to return. Defaults to 10, max is 200.

## Sharepoint.GetSite



Retrieve information about a specific SharePoint site by its ID, URL, or name.

**Parameters**

-   **site** (`string`, required) Site ID, SharePoint URL, or site name to search for.

## Sharepoint.SearchSites



Search for SharePoint sites by name or description.

**Parameters**

-   **keywords** (`string`, required) The search term to find sites by name or description.
-   **limit** (`integer`, optional) The maximum number of sites to return. Defaults to 10, max is 100.
-   **offset** (`integer`, optional) The offset to start from.

## Sharepoint.ListSites



List all SharePoint sites accessible to the current user.

**Parameters**

-   **limit** (`integer`, optional) The maximum number of sites to return. Defaults to 10, max is 100.
-   **offset** (`integer`, optional) The offset to start from.

## Sharepoint.GetFollowedSites



Retrieve a list of SharePoint sites that are followed by the current user.

**Parameters**

-   **limit** (`integer`, optional) The maximum number of sites to return. Defaults to 10, max is 100.

## Sharepoint.GetDrivesFromSite



Retrieve drives / document libraries from a SharePoint site.

**Parameters**

-   **site** (`string`, required) Site ID, SharePoint URL, or site name to get drives from. Prefer using a site ID whenever available for optimal performance.

## Sharepoint.ListRootItemsInDrive



Retrieve items from the root of a drive in a SharePoint site.

**Parameters**

-   **drive\_id** (`string`, required) The ID of the drive to get items from.
-   **limit** (`integer`, optional) The number of items to get. Defaults to 100, max is 500.
-   **offset** (`integer`, optional) The number of items to skip.

## Sharepoint.ListItemsInFolder



Retrieve items from a folder in a drive in a SharePoint site.

**Parameters**

-   **drive\_id** (`string`, required) The ID of the drive to get items from.
-   **folder\_id** (`string`, required) The ID of the folder to get items from.
-   **limit** (`integer`, optional) The number of items to get. Defaults to 100, max is 500.
-   **offset** (`integer`, optional) The number of items to skip.

## Sharepoint.SearchDriveItems



Search for items in one or more Sharepoint drives.

**Parameters**

-   **keywords** (`string`, required) The keywords to search for files in the drive.
-   **drive\_id** (`string`, optional) Optionally, the ID of the drive to search items in. If not provided, the search will be performed in all drives.
-   **folder\_id** (`string`, optional) Optionally narrow the search within a specific folder by its ID. If not provided, the search will be performed in the whole drive. If a folder\_id is provided, it is required to provide a drive\_id as well.
-   **limit** (`integer`, optional) The number of files to get. Defaults to 50, max is 500.
-   **offset** (`integer`, optional) The number of files to skip.

## Auth

The Arcade Sharepoint MCP Sever uses the [Microsoft auth provider](/references/auth-providers/microsoft.md) to connect to users’ Sharepoint accounts. Please refer to the [Microsoft auth provider](/references/auth-providers/microsoft.md) documentation to learn how to configure auth.

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_sharepoint ``` Learn more](/guides/deployment-hosting.md)

Last updated on February 7, 2026

[MiroApi](/en/resources/integrations/productivity/miro-api.md)
[SquareupApi](/en/resources/integrations/productivity/squareup-api.md)
