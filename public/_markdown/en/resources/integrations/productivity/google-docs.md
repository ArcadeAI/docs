---
title: "Google Docs"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Productivity & Docs](/en/resources/integrations/productivity/asana.md)
Google Docs

# Google Docs

Arcade Optimized

**Description:** Enable agents to interact with Google Docs documents.

**Author:** Arcade

**Auth:** User authorization via the [Google auth provider](/references/auth-providers/google.md)

This Toolkit is not available in Arcade Cloud. You can use these tools with a [self-hosted](/guides/deployment-hosting/configure-engine.md) instance of Arcade.



[![PyPI Version](https://img.shields.io/pypi/v/arcade_google_docs)](https://pypi.org/project/arcade_google_docs/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_google_docs)](https://pypi.org/project/arcade_google_docs/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_google_docs)](https://pypi.org/project/arcade_google_docs/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_google_docs)](https://pypi.org/project/arcade_google_docs/)

The Arcade Google Docs MCP Server provides a pre-built set of tools for interacting with Google Docs. These tools make it easy to build agents and AI apps that can:

-   Create, update, list, and delete documents
-   Access document metadata including hierarchical tab structures
-   Retrieve document content with full tab support in multiple formats (Markdown, HTML, DocMD)

## Available Tools

These tools are currently available in the Arcade Google Docs MCP Sever.

Tool Name

Description

GoogleDocs.WhoAmI

Get comprehensive user profile and Google Docs environment information.

GoogleDocs.GetDocumentById

Retrieve a Google Docs document by ID.

GoogleDocs.GetDocumentAsDocMD

Retrieve a Google Docs document by ID in DocMD format with metadata tags.

GoogleDocs.GetDocumentMetadata

Get metadata for a Google Docs document including hierarchical tab structure and approximate counts.

GoogleDocs.EditDocument

Edit a Google Docs document using natural language edit requests.

GoogleDocs.InsertTextAtEndOfDocument

Insert text at the end of a Google Docs document.

GoogleDocs.CreateBlankDocument

Create a new blank Google Docs document with a title.

GoogleDocs.CreateDocumentFromText

Create a new Google Docs document with specified text content.

GoogleDocs.SearchDocuments

Search for documents in the user's Google Drive.

GoogleDocs.SearchAndRetrieveDocuments

Search and retrieve the contents of Google documents in the user's Google Drive.

GoogleDocs.ListDocumentComments

List all comments on the specified Google Docs document.

GoogleDocs.CommentOnDocument

Comment on a specific document by its ID.

If you need to perform an action that’s not listed here, you can [get in touch with us](mailto:contact@arcade.dev) to request a new tool, or [create your own tools](/guides/create-tools/tool-basics/build-mcp-server.md) with the [Google auth provider](/references/auth-providers/google.md#using-google-auth-in-custom-tools).

Each tool requires specific Google OAuth scopes to function. You’ll find the required scopes listed in a blue info box at the end of each tool’s documentation below. For more information about configuring OAuth and tips for moving to production, see the \[Google auth provider documentation\](/references/auth-providers/google.

The `drive.file` scope only grants access to files that were created or opened by your application. If you need broader access to a user’s Google Drive documents (e.g., to access documents created by other applications), you’ll need to create your own Google OAuth provider and request the `drive.readonly` or `drive` scope. Note that these broader scopes are **not supported** by Arcade’s default Google OAuth provider.

## Find required scopes

Select the tools you plan to use to see the OAuth scopes your application needs:

### Scope calculator

Select the tools you plan to use to see the required OAuth scopes.

GetDocumentByIdGetDocumentAsDocMDGetDocumentMetadataEditDocumentInsertTextAtEndOfDocumentCreateBlankDocumentCreateDocumentFromTextSearchDocumentsSearchAndRetrieveDocumentsListDocumentCommentsCommentOnDocumentWhoAmI

#### Required scopes

Select tools above to see required scopes

* * *

## GoogleDocs.WhoAmI



Get comprehensive user profile and Google Docs environment information.

**Parameters**

This tool does not take any parameters.

-   `https://www.googleapis.com/auth/drive.file`
-   `https://www.googleapis.com/auth/userinfo.profile`
-   `https://www.googleapis.com/auth/userinfo.email`

* * *

## GoogleDocs.GetDocumentById



Get the latest version of the specified Google Docs document.

**Parameters**

-   **`document_id`** _(string, required)_ The ID of the document to retrieve.

`https://www.googleapis.com/auth/drive.file`

* * *

## GoogleDocs.GetDocumentAsDocMD



Get the latest version of the specified Google Docs document in DocMD format. The DocMD output includes tags that can be used to annotate the document with location information, block types, block IDs, and other metadata. If the document has tabs, all tabs are included in sequential order unless a specific `tab_id` is provided.

**Parameters**

-   **`document_id`** _(string, required)_ The ID of the document to retrieve.
-   **`tab_id`** _(string, optional)_ The ID of a specific tab to retrieve. If provided, returns only content from that tab. If omitted, returns all tabs in sequential depth-first order.

`https://www.googleapis.com/auth/drive.file`

* * *

## GoogleDocs.GetDocumentMetadata



Get metadata for a Google Docs document including hierarchical tab structure. Returns document title, ID, URL, approximate total character and word counts, and nested tab information with approximate character and word counts for each tab.

**Parameters**

-   **`document_id`** _(string, required)_ The ID of the document to get metadata for.

**Response Fields**

The response includes the following fields:

-   **`documentId`** _(string)_ The unique identifier of the document.
-   **`title`** _(string)_ The title of the document.
-   **`documentUrl`** _(string)_ The URL to open and edit the document in Google Docs.
-   **`approximateTotalCharacterCount`** _(int)_ Approximate total number of characters across all tabs (or main body if no tabs).
-   **`approximateTotalWordCount`** _(int)_ Approximate total number of words across all tabs (or main body if no tabs).
-   **`tabsCount`** _(int)_ The total number of tabs in the document.
-   **`tabs`** _(list\[dict\])_ List of tabs with hierarchical structure. Each tab includes:
    -   **`tabId`** _(string)_ The unique identifier of the tab.
    -   **`title`** _(string)_ The title/name of the tab.
    -   **`index`** _(int)_ The position of the tab among its siblings (0-indexed).
    -   **`nestingLevel`** _(int)_ The nesting depth (0 for top-level, 1 for child, 2 for grandchild).
    -   **`approximateCharacterCount`** _(int)_ Approximate number of characters in this tab’s content (excluding child tabs).
    -   **`approximateWordCount`** _(int)_ Approximate number of words in this tab’s content (excluding child tabs).
    -   **`parentTabId`** _(string, optional)_ The ID of the parent tab (if this is a nested tab).
    -   **`childTabs`** _(list\[dict\], optional)_ List of nested child tabs within this tab.

**Note on Approximate Counts**: The character and word counts are approximate and may differ slightly from the exact counts shown in Google Docs. The counts are calculated by parsing the document structure and may not include all formatting or hidden content.

`https://www.googleapis.com/auth/drive.file`

* * *

## GoogleDocs.EditDocument



Edit a Google Docs document using natural language edit requests. This tool is stateless and does not have context about previous edits. If your edit request depends on knowledge about previous edits, provide that context in the edit requests.

Note that this tool is agentic, and requires the secret OPENAI\_API\_KEY to be set.

**Parameters**

-   **`document_id`** _(string, required)_ The ID of the document to edit.
-   **`edit_requests`** _(list\[str\], required)_ A list of natural language descriptions of the desired changes to the document. Each entry should be a single, self-contained edit request that can be fully understood independently. Note: Each request may result in zero, one, or multiple actual edits depending on what changes are needed (e.g., a request might be ignored if the change already exists in the document).
-   **`reasoning_effort`** _(enum ([ReasoningEffort](#reasoningeffort)
    ), optional)_ The effort to put into reasoning about the edits. Defaults to medium.

`https://www.googleapis.com/auth/drive.file`

* * *

## GoogleDocs.InsertTextAtEndOfDocument



Insert text at the end of an existing Google Docs document.

**Parameters**

-   **`document_id`** _(string, required)_ The ID of the document to update.
-   **`text_content`** _(string, required)_ The text content to insert into the document.

`https://www.googleapis.com/auth/drive.file`

* * *

## GoogleDocs.CreateBlankDocument



Create a blank Google Docs document with the specified title.

**Parameters**

-   **`title`** _(string, required)_ The title of the blank document to create.

`https://www.googleapis.com/auth/drive.file`

* * *

## GoogleDocs.CreateDocumentFromText



Create a Google Docs document with the specified title and text content.

**Parameters**

-   **`title`** _(string, required)_ The title of the document to create.
-   **`text_content`** _(string, required)_ The text content to insert into the document.

`https://www.googleapis.com/auth/drive.file`

* * *

## GoogleDocs.SearchDocuments



Search Google documents in the user’s Google Drive. Excludes documents that are in the trash.

**Parameters**

-   **`document_contains`** _(list\[str\], optional)_ Keywords or phrases that must be in the document title or body. Provide a list of keywords or phrases if needed.
-   **`document_not_contains`** _(list\[str\], optional)_ Keywords or phrases that must not be in the document title or body. Provide a list of keywords or phrases if needed.
-   **`search_only_in_shared_drive_id`** _(str, optional)_ The ID of the shared drive to restrict the search to. If provided, the search will only return documents from this drive. Defaults to None, which searches across all drives.
-   **`include_shared_drives`** _(bool, optional)_ Whether to include documents from shared drives in the search results. Defaults to False (searches only in the user’s ‘My Drive’).
-   **`include_organization_domain_documents`** _(bool, optional)_ Whether to include documents from the organization’s domain. This is applicable to admin users who have permissions to view organization-wide documents in a Google Workspace account. Defaults to False.
-   **`order_by`** _(enum ([OrderBy](#orderby)
    ), optional)_ Sort order. Defaults to listing the most recently modified documents first.
-   **`limit`** _(int, optional)_ The number of documents to list. Defaults to `50`.
-   **`pagination_token`** _(str, optional)_ The pagination token to continue a previous request

`https://www.googleapis.com/auth/drive.file`

* * *

## GoogleDocs.SearchAndRetrieveDocuments



Searches for documents in the user’s Google Drive and returns a list of documents (with text content) matching the search criteria. Excludes documents that are in the trash. If the document has tabs, all tab content is included in the output.

**Parameters**

-   **`return_format`** _(enum ([DocumentFormat](#documentformat)
    ), optional)_ The format of the document to be returned. Defaults to Markdown. Can be `MARKDOWN`, `HTML`, `DOCMD`, or `GOOGLE_API_JSON`.
-   **`document_contains`** _(list\[str\], optional)_ Keywords or phrases that must be in the document title or body. Provide a list of keywords or phrases if needed.
-   **`document_not_contains`** _(list\[str\], optional)_ Keywords or phrases that must not be in the document title or body. Provide a list of keywords or phrases if needed.
-   **`search_only_in_shared_drive_id`** _(str, optional)_ The ID of the shared drive to restrict the search to. If provided, the search will only return documents from this drive. Defaults to None, which searches across all drives.
-   **`include_shared_drives`** _(bool, optional)_ Whether to include documents from shared drives in the search results. Defaults to False (searches only in the user’s ‘My Drive’).
-   **`include_organization_domain_documents`** _(bool, optional)_ Whether to include documents from the organization’s domain. This is applicable to admin users who have permissions to view organization-wide documents in a Google Workspace account. Defaults to False.
-   **`order_by`** _(enum ([OrderBy](#orderby)
    ), optional)_ Sort order. Defaults to listing the most recently modified documents first.
-   **`limit`** _(int, optional)_ The number of documents to list. Defaults to `50`.
-   **`pagination_token`** _(str, optional)_ The pagination token to continue a previous request

`https://www.googleapis.com/auth/drive.file`

* * *

## GoogleDocs.ListDocumentComments



List all comments on the specified Google Docs document.

**Parameters**

-   **`document_id`** _(string, required)_ The ID of the document to list comments for.
-   **`include_deleted`** _(bool, optional)_ Whether to include deleted comments in the results. Defaults to False.

`https://www.googleapis.com/auth/drive.file`

* * *

## GoogleDocs.CommentOnDocument



Comment on a specific document by its ID.

**Parameters**

-   **`document_id`** _(string, required)_ The ID of the document to comment on.
-   **`comment_text`** _(string, required)_ The comment to add to the document.

`https://www.googleapis.com/auth/drive.file`

* * *

## Tab Support

Google Docs supports hierarchical tabs within documents. The Google Docs tools provide comprehensive support for working with tabs:

-   **Tab Metadata**: `GetDocumentMetadata` returns hierarchical tab structures with approximate character and word counts for each tab
-   **Tab Content**: `GetDocumentAsDocMD` and `SearchAndRetrieveDocuments` include all tab content in their output
-   **Tab Filtering**: `GetDocumentAsDocMD` supports filtering to retrieve content from a specific tab using the `tab_id` parameter

Tabs are represented with the following structure:

-   Each tab has a unique `tabId`, `title`, `index`, and `nestingLevel`
-   Tabs can be nested up to 3 levels deep (parent → child → grandchild)
-   Tab metadata includes approximate character and word counts for each tab’s content

* * *

## Auth

The Arcade Docs MCP Sever uses the \[Google auth provider\](/references/auth-providers/google to connect to users’ Google accounts.

With the Arcade Cloud Platform, there’s nothing to configure. Your users will see `Arcade` as the name of the application that’s requesting permission.

With a self-hosted installation of Arcade, you need to [configure the Google auth provider](/references/auth-providers/google.md#configuring-google-auth) with your own Google app credentials.

* * *

## Reference

### DocumentFormat

The format of the document to be returned.

-   **`MARKDOWN`**: Markdown format. Includes all tabs in the output if present.
-   **`HTML`**: HTML format. Includes all tabs in the output if present.
-   **`DOCMD`**: DocMD format with metadata tags. Includes all tabs in the output if present.
-   **`GOOGLE_API_JSON`**: Original JSON format returned by the Google API.

### OrderBy

Sort keys for ordering files in Google Drive. Each key has both ascending and descending options.

-   **`CREATED_TIME`**: When the file was created (ascending).
-   **`CREATED_TIME_DESC`**: When the file was created (descending).
-   **`FOLDER`**: The folder ID, sorted using alphabetical ordering (ascending).
-   **`FOLDER_DESC`**: The folder ID, sorted using alphabetical ordering (descending).
-   **`MODIFIED_BY_ME_TIME`**: The last time the file was modified by the user (ascending).
-   **`MODIFIED_BY_ME_TIME_DESC`**: The last time the file was modified by the user (descending).
-   **`MODIFIED_TIME`**: The last time the file was modified by anyone (ascending).
-   **`MODIFIED_TIME_DESC`**: The last time the file was modified by anyone (descending).
-   **`NAME`**: The name of the file, sorted using alphabetical ordering (ascending).
-   **`NAME_DESC`**: The name of the file, sorted using alphabetical ordering (descending).
-   **`NAME_NATURAL`**: The name of the file, sorted using natural sort ordering (ascending).
-   **`NAME_NATURAL_DESC`**: The name of the file, sorted using natural sort ordering (descending).
-   **`QUOTA_BYTES_USED`**: The number of storage quota bytes used by the file (ascending).
-   **`QUOTA_BYTES_USED_DESC`**: The number of storage quota bytes used by the file (descending).
-   **`RECENCY`**: The most recent timestamp from the file’s date-time fields (ascending).
-   **`RECENCY_DESC`**: The most recent timestamp from the file’s date-time fields (descending).
-   **`SHARED_WITH_ME_TIME`**: When the file was shared with the user, if applicable (ascending).
-   **`SHARED_WITH_ME_TIME_DESC`**: When the file was shared with the user, if applicable (descending).
-   **`STARRED`**: Whether the user has starred the file (ascending).
-   **`STARRED_DESC`**: Whether the user has starred the file (descending).
-   **`VIEWED_BY_ME_TIME`**: The last time the file was viewed by the user (ascending).
-   **`VIEWED_BY_ME_TIME_DESC`**: The last time the file was viewed by the user (descending).

### ReasoningEffort

The effort to put into reasoning about document edits.

-   **`MINIMAL`**: Minimal reasoning effort for simple, straightforward edits.
-   **`LOW`**: Minimal reasoning effort for simple, straightforward edits.
-   **`MEDIUM`**: Moderate reasoning effort for most editing tasks (default).
-   **`HIGH`**: Maximum reasoning effort for complex edits requiring careful analysis.

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_google_docs ``` Learn more](/guides/deployment-hosting.md)

Last updated on January 5, 2026

[Google Contacts](/en/resources/integrations/productivity/google-contacts.md)
[Reference](/en/resources/integrations/productivity/google-docs/reference.md)
