---
title: "Dropbox"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Productivity & Docs](/en/resources/integrations/productivity/asana.md)
Dropbox

# Dropbox

Arcade Optimized

**Description:** Enable agents to interact with files and folders in Dropbox.

**Author:** Arcade

**Code:** [GitHub](https://github.com/ArcadeAI/arcade-ai/tree/main/resources/integrations/dropbox)

**Auth:** User authorization

[![PyPI Version](https://img.shields.io/pypi/v/arcade_dropbox)](https://pypi.org/project/arcade_dropbox/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_dropbox)](https://pypi.org/project/arcade_dropbox/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_dropbox)](https://pypi.org/project/arcade_dropbox/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_dropbox)](https://pypi.org/project/arcade_dropbox/)

The Arcade Dropbox MCP Server provides a pre-built set of tools for interacting with Dropbox. These tools make it easy to build agents and AI apps that can:

-   Browse files and folders
-   Search for files and folders
-   Download files

## Available Tools

Tool Name

Description

Dropbox.ListItemsInFolder

List all items in a folder.

Dropbox.SearchFilesAndFolders

Search for files and folders in Dropbox.

Dropbox.DownloadFile

Download a file from Dropbox.

If you need to perform an action that’s not listed here, you can [get in touch with us](mailto:contact@arcade.dev) to request a new tool, or [create your own tools](/guides/create-tools/tool-basics/build-mcp-server.md).

## Dropbox.ListItemsInFolder



List all items in a folder.

**Parameters**

-   **folder\_path** _(string, required)_ Path to the folder. E.g. ‘/My Documents/My Folder’
-   **limit** _(int, optional, Defaults to `100`)_ Maximum number of items to return. Defaults to 100. Maximum allowed is 2000.
-   **cursor** _(string, optional)_ A cursor to use for pagination. Defaults to `None`.

## Dropbox.SearchFilesAndFolders



Search for files and folders in Dropbox.

**Parameters**

-   **keywords** _(string, required)_ The keywords to search for. E.g. ‘quarterly report’
-   **search\_in\_folder\_path** _(string, optional)_ Restricts the search to the specified folder path. E.g. ‘/My Documents/My Folder’. Defaults to `None` (search in the entire Dropbox).
-   **filter\_by\_category** _(list of enum [DropboxItemCategory](/resources/integrations/productivity/dropbox/reference.md#dropboxitemcategory)
    , optional)_ Restricts the search to the specified category(ies) of items. Defaults to `None` (returns all items).
-   **limit** _(int, optional, Defaults to `100`)_ Maximum number of items to return. Defaults to 100. Maximum allowed is 2000.
-   **cursor** _(string, optional)_ A cursor to use for pagination. Defaults to `None`.

## Dropbox.DownloadFile



Download a file from Dropbox.

**Parameters**

-   **file\_path** _(string, optional)_ Path to the file. E.g. ‘/My Documents/My Folder/My File.pdf’
-   **file\_id** _(string, optional)_ The ID of the file to download. E.g. ‘id:a4ayc\_80\_OEAAAAAAAAAYa’

Note: to call this tool, you must provide either `file_path` or `file_id`.

## Auth

The Arcade Dropbox MCP Sever uses the [Dropbox auth provider](/references/auth-providers/dropbox.md) to connect to users’ Dropbox accounts.

With the Arcade Cloud Platform, there’s nothing to configure. Your users will see `Arcade` as the name of the application that’s requesting permission.

With a self-hosted installation of Arcade, you need to [configure the Dropbox auth provider](/references/auth-providers/dropbox.md#configuring-dropbox-auth) with your own Dropbox app credentials.

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_dropbox ``` Learn more](/guides/deployment-hosting.md)

Last updated on February 7, 2026

[Confluence](/en/resources/integrations/productivity/confluence.md)
[Reference](/en/resources/integrations/productivity/dropbox/reference.md)
