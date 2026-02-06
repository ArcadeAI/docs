---
title: "Google Sheets"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Productivity & Docs](/en/resources/integrations/productivity/asana.md)
Google Sheets

# Google Sheets

Arcade Optimized

**Description:** Enable agents to interact with GoogleSheets

**Author:** Arcade

**Auth:** User authorization

[![PyPI Version](https://img.shields.io/pypi/v/arcade_google_sheets)](https://pypi.org/project/arcade_google_sheets/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_google_sheets)](https://pypi.org/project/arcade_google_sheets/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_google_sheets)](https://pypi.org/project/arcade_google_sheets/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_google_sheets)](https://pypi.org/project/arcade_google_sheets/)

The Arcade GoogleSheets MCP Server provides a pre-built set of tools for working with Google Sheets. These tools make it easy to build agents and AI apps that can:

-   Create new spreadsheets and seed initial data.
-   Search Google Drive for spreadsheets and retrieve metadata (titles, IDs, URLs; excludes trash).
-   Read specific ranges from sheets.
-   Write to single cells or update ranges with flexible data formats.
-   Add notes to cells.
-   Get detailed spreadsheet and sheet metadata (names, IDs, positions, row/column counts; metadata only).

## Available Tools

Tool Name

Description

GoogleSheets.CreateSpreadsheet

Create a new spreadsheet with the provided title and data in its first sheet

GoogleSheets.WriteToCell

Write a value to a single cell in a spreadsheet.

GoogleSheets.UpdateCells

Write values to a Google Sheet using a flexible data format.

GoogleSheets.AddNoteToCell

Add a note to a specific cell in a spreadsheet. A note is a small

GoogleSheets.SearchSpreadsheets

Searches for spreadsheets in the user's Google Drive based on the titles and content and

GoogleSheets.WhoAmI

Get comprehensive user profile and Google Sheets environment information.

GoogleSheets.GenerateGoogleFilePickerUrl

Generate a Google File Picker URL for user-driven file selection and authorization.

GoogleSheets.GetSpreadsheet

Gets the specified range of cells from a single sheet in the spreadsheet.

GoogleSheets.GetSpreadsheetMetadata

Gets the metadata for a spreadsheet including the metadata for the sheets in the spreadsheet.

If you need to perform an action that’s not listed here, you can [get in touch with us](mailto:contact@arcade.dev) to request a new tool, or [create your own tools](/guides/create-tools/tool-basics/build-mcp-server.md).

Each tool requires specific Google OAuth scopes to function. You’ll find the required scopes listed in a blue info box at the end of each tool’s documentation below. For more information about configuring OAuth and tips for moving to production, see the \[Google auth provider documentation\](/references/auth-providers/google.

The `drive.file` scope only grants access to files that were created or opened by your application. If you need broader access to a user’s Google Drive spreadsheets (e.g., to access spreadsheets created by other applications), you’ll need to create your own Google OAuth provider and request the `drive.readonly` or `drive` scope. Note that these broader scopes are **not supported** by Arcade’s default Google OAuth provider.

## Find required scopes

Select the tools you plan to use to see the OAuth scopes your application needs:

### Scope calculator

Select the tools you plan to use to see the required OAuth scopes.

CreateSpreadsheetWriteToCellUpdateCellsAddNoteToCellSearchSpreadsheetsGenerateGoogleFilePickerUrlGetSpreadsheetGetSpreadsheetMetadataWhoAmI

#### Required scopes

Select tools above to see required scopes

* * *

## GoogleSheets.CreateSpreadsheet



Create a new spreadsheet with the provided title and data in its first sheet

**Parameters**

-   **title** (`string`, optional) The title of the new spreadsheet
-   **data** (`string`, optional) The data to write to the spreadsheet. A JSON string (property names enclosed in double quotes) representing a dictionary that maps row numbers to dictionaries that map column letters to cell values. For example, data\[23\]\[‘C’\] would be the value of the cell in row 23, column C. Type hint: dict\[int, dict\[str, Union\[int, float, str, bool\]\]\]

`https://www.googleapis.com/auth/drive.file`

* * *

## GoogleSheets.WriteToCell



Write a value to a single cell in a spreadsheet.

**Parameters**

-   **spreadsheet\_id** (`string`, required) The id of the spreadsheet to write to
-   **column** (`string`, required) The column string to write to. For example, ‘A’, ‘F’, or ‘AZ’
-   **row** (`integer`, required) The row number to write to
-   **value** (`string`, required) The value to write to the cell
-   **sheet\_name** (`string`, optional) The name of the sheet to write to. Defaults to ‘Sheet1’

`https://www.googleapis.com/auth/drive.file`

* * *

## GoogleSheets.UpdateCells



Write values to a Google Sheet using a flexible data format.

**Parameters**

-   **spreadsheet\_id** (`string`, required) The id of the spreadsheet to write to
-   **data** (`string`, required) The data to write. A JSON string (property names enclosed in double quotes) representing a dictionary that maps row numbers to dictionaries that map column letters to cell values. For example, data\[23\]\[‘C’\] is the value for cell C23. This is the same format accepted by create\_spreadsheet. Type hint: dict\[int, dict\[str, int | float | str | bool\]\]
-   **sheet\_position** (`integer`, optional) The position/tab of the sheet in the spreadsheet to write to. A value of 1 represents the first (leftmost/Sheet1) sheet. Defaults to 1.
-   **sheet\_id\_or\_name** (`string`, optional) The id or name of the sheet to write to. If provided, takes precedence over sheet\_position.

`https://www.googleapis.com/auth/drive.file`

* * *

## GoogleSheets.AddNoteToCell



Add a note to a specific cell in a spreadsheet. A note is a small

**Parameters**

-   **spreadsheet\_id** (`string`, required) The id of the spreadsheet to add a comment to
-   **column** (`string`, required) The column string to add a note to. For example, ‘A’, ‘F’, or ‘AZ’
-   **row** (`integer`, required) The row number to add a note to
-   **note\_text** (`string`, required) The text for the note to add
-   **sheet\_position** (`integer`, optional) The position/tab of the sheet in the spreadsheet to write to. A value of 1 represents the first (leftmost/Sheet1) sheet. Defaults to 1.
-   **sheet\_id\_or\_name** (`string`, optional) The id or name of the sheet to write to. If provided, takes precedence over sheet\_position.

`https://www.googleapis.com/auth/drive.file`

* * *

## GoogleSheets.SearchSpreadsheets



Searches for spreadsheets in the user’s Google Drive based on the titles and content and

**Parameters**

-   **spreadsheet\_contains** (`array[string]`, optional) Keywords or phrases that must be in the spreadsheet title. Provide a list of keywords or phrases if needed.
-   **spreadsheet\_not\_contains** (`array[string]`, optional) Keywords or phrases that must NOT be in the spreadsheet title. Provide a list of keywords or phrases if needed.
-   **search\_only\_in\_shared\_drive\_id** (`string`, optional) The ID of the shared drive to restrict the search to. If provided, the search will only return spreadsheets from this drive. Defaults to None, which searches across all drives.
-   **include\_shared\_drives** (`boolean`, optional) Whether to include spreadsheets from shared drives. Defaults to False (searches only in the user’s ‘My Drive’).
-   **include\_organization\_domain\_spreadsheets** (`boolean`, optional) Whether to include spreadsheets from the organization’s domain. This is applicable to admin users who have permissions to view organization-wide spreadsheets in a Google Workspace account. Defaults to False.
-   **order\_by** (`Enum` [OrderBy](/resources/integrations/productivity/google-sheets/reference.md#orderby)
    , optional) Sort order. Defaults to listing the most recently modified spreadsheets first
-   **limit** (`integer`, optional) The maximum number of spreadsheets to list. Defaults to 10. Max is 50
-   **pagination\_token** (`string`, optional) The pagination token to continue a previous request

`https://www.googleapis.com/auth/drive.file`

* * *

## GoogleSheets.WhoAmI



Get comprehensive user profile and Google Sheets environment information.

**Parameters**

This tool does not take any parameters.

-   `https://www.googleapis.com/auth/drive.file`
-   `https://www.googleapis.com/auth/userinfo.profile`
-   `https://www.googleapis.com/auth/userinfo.email`

* * *

## GoogleSheets.GenerateGoogleFilePickerUrl



Generate a Google File Picker URL for user-driven file selection and authorization.

**Parameters**

This tool does not take any parameters.

No additional scopes required (uses basic Google authentication).

* * *

## GoogleSheets.GetSpreadsheet



Gets the specified range of cells from a single sheet in the spreadsheet.

**Parameters**

-   **spreadsheet\_id** (`string`, required) The id of the spreadsheet to get
-   **sheet\_position** (`integer`, optional) The position/tab of the sheet in the spreadsheet to get. A value of 1 represents the first (leftmost/Sheet1) sheet . Defaults to 1.
-   **sheet\_id\_or\_name** (`string`, optional) The id or name of the sheet to get. Defaults to None, which means sheet\_position will be used instead.
-   **start\_row** (`integer`, optional) Starting row number (1-indexed, defaults to 1)
-   **start\_col** (`string`, optional) Starting column letter(s) or 1-based column number (defaults to ‘A’)
-   **max\_rows** (`integer`, optional) Maximum number of rows to fetch for each sheet in the spreadsheet. Must be between 1 and 1000. Defaults to 1000.
-   **max\_cols** (`integer`, optional) Maximum number of columns to fetch for each sheet in the spreadsheet. Must be between 1 and 100. Defaults to 100.

`https://www.googleapis.com/auth/drive.file`

* * *

## GoogleSheets.GetSpreadsheetMetadata



Gets the metadata for a spreadsheet including the metadata for the sheets in the spreadsheet.

**Parameters**

-   **spreadsheet\_id** (`string`, required) The id of the spreadsheet to get metadata for

`https://www.googleapis.com/auth/drive.file`

* * *

## Auth

The Arcade GoogleSheets MCP Sever uses the \[Google auth provider\](/references/auth-providers/google to connect to users’ GoogleSheets accounts. Please refer to the \[Google auth provider\](/references/auth-providers/google documentation to learn how to configure auth.

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_google_sheets ``` Learn more](/guides/deployment-hosting.md)

Last updated on February 6, 2026

[Reference](/en/resources/integrations/productivity/google-drive/reference.md)
[Reference](/en/resources/integrations/productivity/google-sheets/reference.md)
