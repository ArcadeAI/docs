---
title: "HubspotCmsApi"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Sales](/en/resources/integrations/sales/hubspot.md)
HubspotCmsApi

# HubspotCmsApi

Arcade Unoptimized

**Description:** Tools that enable LLMs to interact directly with the HubSpot CMS API.

**Author:** Arcade

**Auth:** User authorization

[![PyPI Version](https://img.shields.io/pypi/v/arcade_hubspot_cms_api)](https://pypi.org/project/arcade_hubspot_cms_api/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_hubspot_cms_api)](https://pypi.org/project/arcade_hubspot_cms_api/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_hubspot_cms_api)](https://pypi.org/project/arcade_hubspot_cms_api/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_hubspot_cms_api)](https://pypi.org/project/arcade_hubspot_cms_api/)

HubspotCmsApi is a [Unoptimized MCP Server](/guides/create-tools/improve/types-of-tools.md#unoptimized-tools)
: each tool mirrors one HTTP endpoint and offers LLMs a way to interact with the low-level API.



Differently from [Optimized MCP Servers](/guides/create-tools/improve/types-of-tools.md#optimized-tools)
, Unoptimized tools are heavily influenced by the original API design, which is not usually optimized for LLM usage. For this reason, we recommend thoroughly evaluating the tools with your Agents or chatbots before using it in production. [Read more](/guides/create-tools/improve/types-of-tools.md) about Optimized vs Unoptimized tools.

The HubspotCmsApi MCP Server offers a comprehensive suite of tools for managing content within the HubSpot CMS. Users can efficiently perform actions such as:

-   Create, update, and delete blog posts, landing pages, and site pages.
-   Manage blog authors and tags, including creating language variations.
-   Handle multi-language support for content and manage URL redirects.
-   Retrieve detailed information about various content types, including revision histories and settings.

This server streamlines content management processes, making it easier to maintain and optimize your HubSpot CMS environment.

## Available Tools

Tool Name

Description

HubspotCmsApi.GetBlogAuthorById

Retrieve blog author details using an object ID.

HubspotCmsApi.DeleteBlogAuthor

Delete a specific blog author by ID.

HubspotCmsApi.UpdateBlogAuthor

Update specific details of a blog author.

HubspotCmsApi.DetachBlogAuthorFromLangGroup

Detach a Blog Author from a multi-language group.

HubspotCmsApi.UpdateBlogAuthorsBatch

Update multiple blog author objects at once.

HubspotCmsApi.SetPrimaryLanguageBlogAuthor

Set a blog author as the primary language in a multilingual group.

HubspotCmsApi.DeleteBlogAuthors

Delete specified blog authors in HubSpot CMS.

HubspotCmsApi.CreateBlogAuthorsBatch

Create multiple blog authors in a single batch request.

HubspotCmsApi.RetrieveBlogAuthors

Retrieve specified Blog Author objects from the CMS.

HubspotCmsApi.GetBlogAuthors

Retrieve the list of blog authors.

HubspotCmsApi.CreateBlogAuthor

Create a new Blog Author in HubSpot CMS.

HubspotCmsApi.AttachAuthorToMultilangGroup

Attach a Blog Author to a multi-language group.

HubspotCmsApi.CreateBlogAuthorLanguageVariation

Create a language variation for a blog author.

HubspotCmsApi.UpdateBlogAuthorLanguages

Set new languages for each blog author in a group.

HubspotCmsApi.GetBlogRevisionHistory

Retrieve the revision history of blog settings.

HubspotCmsApi.UpdateBlogLanguages

Update the languages for blog settings.

HubspotCmsApi.RetrieveBlogRevisionDetails

Retrieve specific blog revision details by ID.

HubspotCmsApi.GetBlogSettings

Fetch blog settings using a blog ID.

HubspotCmsApi.CreateBlogLanguageVariation

Create a language variation for a blog in HubSpot CMS.

HubspotCmsApi.RetrieveBlogSettings

Retrieve current blog settings from the HubSpot CMS.

HubspotCmsApi.SetNewBlogPrimaryLanguage

Set a new primary language for blogs.

HubspotCmsApi.DetachBlogFromLanguageGroup

Detach a blog from its multi-language group.

HubspotCmsApi.AttachBlogToLanguageGroup

Attach a blog to a multi-language group in HubSpot CMS.

HubspotCmsApi.RetrieveAuditLogs

Retrieve audit logs based on specified filters.

HubspotCmsApi.GetExistingDomains

Retrieve all existing domains in the CMS.

HubspotCmsApi.GetDomainById

Retrieve domain details by ID from HubSpot CMS.

HubspotCmsApi.ExportHubdbDraftTable

Export HubDB draft table to CSV or Excel format.

HubspotCmsApi.GetAllDraftTablesDetails

Retrieve details of all draft HubDB tables.

HubspotCmsApi.GetTableRow

Get a single row from a HubSpot CMS table by ID.

HubspotCmsApi.GetDraftHubdbTableRows

Retrieve rows from a draft HubDB table with optional filtering.

HubspotCmsApi.CloneHubdbDraftRow

Clone a single row in a HubDB draft table.

HubspotCmsApi.ResetHubdbDraftToPublished

Reset HubDB draft table to match the published version.

HubspotCmsApi.ExportTableFromHubdb

Exports a HubDB table in the desired format.

HubspotCmsApi.ReplaceDraftTableRows

Batch replace rows in HubSpot CMS draft tables.

HubspotCmsApi.CloneHubdbTable

Clone an existing HubDB table as a draft.

HubspotCmsApi.PermanentlyDeleteHubdbDraftRows

Permanently delete draft rows from a HubDB table.

HubspotCmsApi.GetDraftTableRowById

Retrieve a single draft row by ID from a HubDB table.

HubspotCmsApi.ReplaceDraftTableRow

Replace a row in the draft version of a HubDB table.

HubspotCmsApi.DeleteDraftTableRowHubspot

Permanently delete a row from a HubDB draft table.

HubspotCmsApi.UpdateHubdbRowDraft

Update specific fields in a HubDB table's draft row.

HubspotCmsApi.FetchHubdbTableRows

Fetch rows from a HubDB table using filters and sorting.

HubspotCmsApi.AddHubdbTableRow

Add a new row to a HubDB draft table.

HubspotCmsApi.ReadHubdbTableRows

Retrieve rows from a published HubDB table.

HubspotCmsApi.CreateDraftTableRows

Create draft rows in a specified HubSpot table.

HubspotCmsApi.GetHubdbTableDetails

Get details of a HubDB table, including columns and row count.

HubspotCmsApi.ArchiveHubdbTable

Archive a HubDB table in HubSpot CMS.

HubspotCmsApi.GetHubdbDraftRows

Fetch draft rows from a specified HubDB table.

HubspotCmsApi.CloneDraftTableRowsHubspot

Clone rows in a draft HubDB table by row IDs.

HubspotCmsApi.GetAllHubdbTables

Retrieve details of all published HubDB tables.

HubspotCmsApi.CreateHubdbTable

Create a new draft HubDB table with a unique name and label.

HubspotCmsApi.DeleteTableVersion

Delete a specific version of a HubDB table.

HubspotCmsApi.UnpublishHubdbTable

Unpublish a HubDB table to stop rendering data on website pages.

HubspotCmsApi.GetDraftTableDetails

Retrieve details of a draft HubDB table by ID or name.

HubspotCmsApi.UpdateHubdbDraftTable

Update or modify a HubDB table draft in HubSpot CMS.

HubspotCmsApi.PublishTableDraft

Publish draft table to update website pages.

HubspotCmsApi.BatchUpdateTableRowsHubspot

Update multiple draft table rows in HubSpot CMS.

HubspotCmsApi.CreateAttentionSpanEvent

Log viewer's attention span details for media events.

HubspotCmsApi.TrackMediaMilestones

Log user progress milestones in media content viewing.

HubspotCmsApi.CreateMediaPlayedEvent

Log an event when media playback starts.

HubspotCmsApi.RetrievePreviousSitePageVersion

Retrieve a previous version of a site page.

HubspotCmsApi.GetLandingPagePreviousVersions

Retrieve previous versions of a Landing Page for review.

HubspotCmsApi.UpdateSitePagesBatch

Batch update specified site pages in HubSpot CMS.

HubspotCmsApi.GetPreviousFolderVersions

Retrieve previous versions of a CMS folder.

HubspotCmsApi.RestorePageVersion

Restore a specific version of a HubSpot site page.

HubspotCmsApi.GetLandingPageFolders

Retrieve the list of landing page folders from HubSpot CMS.

HubspotCmsApi.CreateLandingPageFolder

Create a new folder in HubSpot CMS for landing pages.

HubspotCmsApi.AttachPageToLanguageGroup

Attach a site page to a multi-language group.

HubspotCmsApi.ScheduleSitePagePublication

Schedule a site page for publication at a specified time.

HubspotCmsApi.DetachSitePageFromLanguageGroup

Detach a site page from a multi-language group.

HubspotCmsApi.CreateLandingPageFolders

Create multiple landing page folders in HubSpot CMS.

HubspotCmsApi.GetPreviousSitePageVersions

Retrieve previous versions of a site page.

HubspotCmsApi.GetLandingPageDraft

Retrieve the full draft version of a landing page.

HubspotCmsApi.UpdateLandingPageDraft

Update draft of a specific landing page by ID.

HubspotCmsApi.GetLandingPages

Retrieve a list of HubSpot CMS landing pages.

HubspotCmsApi.CreateLandingPage

Create a new landing page in HubSpot.

HubspotCmsApi.EndActiveAbTest

End an active A/B test and designate a winner.

HubspotCmsApi.RestoreSitePageToDraft

Restore a specific site page version to draft.

HubspotCmsApi.CreateLandingPages

Create multiple landing pages in HubSpot CMS.

HubspotCmsApi.UpdateLandingPagesBatch

Batch update landing pages in HubSpot CMS.

HubspotCmsApi.RetrieveLandingPages

Retrieve specified Landing Page objects from HubSpot CMS.

HubspotCmsApi.CloneLandingPageHubspot

Clone a landing page in HubSpot CMS.

HubspotCmsApi.RestoreFolderVersion

Restore a specific version of a folder in HubSpot CMS.

HubspotCmsApi.SetPrimaryLandingPageLanguage

Set a landing page as the primary language for a group.

HubspotCmsApi.RestoreLandingPageVersion

Restore a specific version of a HubSpot landing page.

HubspotCmsApi.GetSitePageDraft

Retrieve the full draft version of the Site Page.

HubspotCmsApi.UpdateSitePageDraft

Update the draft version of a specific site page.

HubspotCmsApi.RetrieveSitePages

Retrieve Site Page objects from HubSpot CMS.

HubspotCmsApi.GetLandingPageFolderById

Retrieve details of a landing page folder by its ID.

HubspotCmsApi.DeleteLandingPageFolder

Deletes a CMS landing page folder by ID.

HubspotCmsApi.UpdateLandingPageFolder

Update specific attributes of a landing page folder.

HubspotCmsApi.CreateAbTestVariation

Create a new A/B test variation in HubSpot CMS.

HubspotCmsApi.GetSitePagesList

Retrieve a list of site pages with filtering options.

HubspotCmsApi.CreateSitePage

Create a new site page in HubSpot CMS.

HubspotCmsApi.AttachLandingPageToLanguageGroup

Attach a landing page to a multi-language group.

HubspotCmsApi.CreateLanguageVariation

Create a new language variation for a site page.

HubspotCmsApi.RetrievePreviousLandingPageVersion

Retrieve a previous version of a Landing Page.

HubspotCmsApi.EndAbTestSelectWinner

End an active A/B test and designate a winner.

HubspotCmsApi.PublishLandingPageDraft

Publish changes from a landing page draft to live.

HubspotCmsApi.DetachLandingPageFromLanguageGroup

Detach a landing page from a multi-language group.

HubspotCmsApi.NewAbTestVariation

Create a new A/B test variation in HubSpot CMS.

HubspotCmsApi.ScheduleLandingPage

Schedule a landing page for publication.

HubspotCmsApi.UpdateLandingPageLanguages

Update languages for landing pages in a multi-language group.

HubspotCmsApi.UpdateSitePageLanguages

Set new languages for site pages in a multi-language group.

HubspotCmsApi.RerunPreviousAbTest

Rerun a previous A/B test on a landing page.

HubspotCmsApi.DeleteLandingPageFolders

Delete specified landing page folders in HubSpot CMS.

HubspotCmsApi.CreateSitePagesBatch

Create multiple site page objects in batch.

HubspotCmsApi.DeleteCmsSitePages

Delete specified Site Page objects in the CMS.

HubspotCmsApi.UpdateLandingPageFolders

Update multiple HubSpot CMS landing page folders.

HubspotCmsApi.CloneSitePage

Clone an existing site page in HubSpot CMS.

HubspotCmsApi.SetPrimaryLanguageForSitePage

Set a site page as the primary language of its group.

HubspotCmsApi.RetrieveFolderPreviousVersion

Retrieve a previous version of a folder in HubSpot CMS.

HubspotCmsApi.ResetLandingPageDraft

Reset a landing page draft to its live version.

HubspotCmsApi.GetLandingPageById

Retrieve details of a specific landing page by ID.

HubspotCmsApi.DeleteLandingPage

Delete a specified landing page by its ID.

HubspotCmsApi.UpdateLandingPage

Update specific fields of a landing page by ID.

HubspotCmsApi.PublishSitePage

Publish draft changes to live site page.

HubspotCmsApi.CreateMultilanguageLandingPage

Create a new language variation for a landing page.

HubspotCmsApi.DeleteLandingPages

Deletes specified HubSpot landing pages permanently.

HubspotCmsApi.RestoreLandingPageDraft

Restore a specified landing page version to draft.

HubspotCmsApi.RestartAbTest

Rerun a previous A/B test to gain new insights.

HubspotCmsApi.ResetHubspotPageDraft

Resets HubSpot CMS draft to the live version.

HubspotCmsApi.RetrieveSitePageById

Retrieve Site Page details by ID.

HubspotCmsApi.DeleteSitePage

Delete a specified site page in HubSpot CMS.

HubspotCmsApi.UpdateSitePage

Update specific fields of a HubSpot site page.

HubspotCmsApi.UpdateFolderObjects

Update specified folder objects in HubSpot CMS.

HubspotCmsApi.ScheduleBlogPost

Schedule a blog post for future publication.

HubspotCmsApi.RetrieveBlogPostsById

Retrieve a batch of blog posts by their IDs.

HubspotCmsApi.UpdateBlogPostLanguages

Set new languages for multi-language blog posts.

HubspotCmsApi.CreateBatchBlogPosts

Create multiple blog posts in a single request.

HubspotCmsApi.UpdateBlogPostsBatch

Update a batch of blog posts in the CMS.

HubspotCmsApi.RestoreBlogPostToDraft

Restore a previous blog post version to draft.

HubspotCmsApi.GetBlogPostDraft

Retrieve the full draft version of a blog post.

HubspotCmsApi.UpdateBlogPostDraft

Update specific fields of a blog post draft.

HubspotCmsApi.RetrievePreviousBlogVersion

Retrieve a previous version of a blog post.

HubspotCmsApi.NewLanguageBlogVariation

Create a new language variation from an existing blog post.

HubspotCmsApi.CloneBlogPost

Creates a copy of an existing blog post.

HubspotCmsApi.RetrieveBlogPosts

Retrieve all blog posts with optional paging and filtering.

HubspotCmsApi.CreateBlogPost

Create a new blog post with specified content.

HubspotCmsApi.RestoreBlogPostVersion

Restore a blog post to a previous version.

HubspotCmsApi.DetachBlogPostLanguageGroup

Detach a blog post from a multi-language group.

HubspotCmsApi.PublishBlogPost

Publish a draft blog post to make it live.

HubspotCmsApi.DeleteBlogPost

Delete a blog post by its unique ID.

HubspotCmsApi.ResetBlogPostDraft

Resets a blog post draft to the currently published content.

HubspotCmsApi.AttachBlogPostToLanguageGroup

Attach a blog post to a multi-language group in HubSpot CMS.

HubspotCmsApi.SetPrimaryLanguageBlogPost

Set the primary language of a blog post in a multi-language group.

HubspotCmsApi.GetPreviousBlogPostVersions

Retrieve all previous versions of a blog post in HubSpot.

HubspotCmsApi.RetrieveBlogPostById

Retrieve a blog post by its ID from HubSpot CMS.

HubspotCmsApi.RemoveBlogPost

Delete a blog post by its ID.

HubspotCmsApi.UpdateBlogPost

Update specific fields of a blog post by ID.

HubspotCmsApi.RetrieveIndexedDataByContentId

Retrieve all indexed data for a specific document by ID.

HubspotCmsApi.SearchWebsiteContent

Search for website content on a HubSpot account.

HubspotCmsApi.GetFileMetadata

Retrieve metadata for a file in a specified environment.

HubspotCmsApi.DownloadFileFromHubspotCms

Download file content from HubSpot CMS by path and environment.

HubspotCmsApi.DeleteFileInCmsEnvironment

Deletes a file in a specified CMS environment.

HubspotCmsApi.ExtractZipFileAsync

Initiate asynchronous extraction of a zip file on HubSpot CMS.

HubspotCmsApi.CheckExtractionStatus

Retrieve the current status of a source-code extraction task.

HubspotCmsApi.UpdateBlogTags

Update multiple blog tags in HubSpot CMS.

HubspotCmsApi.UpdateBlogTagLanguages

Update languages for blog tags in a multi-language group.

HubspotCmsApi.DetachBlogTagFromLanguageGroup

Detach a Blog Tag from a multi-language group.

HubspotCmsApi.CreateBlogTagsBatch

Create multiple blog tags in a single request.

HubspotCmsApi.ArchiveBlogTags

Archive multiple blog tags in HubSpot CMS.

HubspotCmsApi.SetBlogTagPrimaryLanguage

Set a blog tag as the primary language in a multi-language group.

HubspotCmsApi.RetrieveBlogTags

Retrieve Blog Tag objects based on specified IDs.

HubspotCmsApi.GetBlogTags

Retrieve a list of blog tags with paging and filtering options.

HubspotCmsApi.CreateBlogTag

Create a new blog tag in HubSpot CMS.

HubspotCmsApi.AttachTagToLanguageGroup

Attach a blog tag to a multi-language group.

HubspotCmsApi.RetrieveBlogTagById

Retrieve blog tag details using its ID.

HubspotCmsApi.DeleteBlogTag

Delete a specified Blog Tag in HubSpot CMS.

HubspotCmsApi.UpdateBlogTag

Update specific fields of a blog tag by its ID.

HubspotCmsApi.CreateBlogTagLanguageVariation

Create a new language variation from an existing blog tag.

HubspotCmsApi.FetchUrlRedirects

Retrieve all URL redirects with optional filters.

HubspotCmsApi.CreateUrlRedirect

Creates and configures a new URL redirect in HubSpot CMS.

HubspotCmsApi.GetUrlRedirectDetailsById

Retrieve details of a URL redirect by ID.

HubspotCmsApi.DeleteUrlRedirect

Deletes an existing URL redirect in HubSpot CMS.

HubspotCmsApi.UpdateUrlRedirectSettings

Update settings for an existing URL redirect in HubSpot CMS.

If you need to perform an action that’s not listed here, you can [get in touch with us](mailto:contact@arcade.dev) to request a new tool, or [create your own tools](/guides/create-tools/tool-basics/build-mcp-server.md).

## HubspotCmsApi.GetBlogAuthorById



Retrieve blog author details using an object ID.

**Parameters**

-   **blog\_author\_id** (`string`, required) The unique identifier for the blog author to retrieve their details.
-   **include\_deleted\_blog\_authors** (`boolean`, optional) Set to true to include deleted blog authors in the results. Defaults to false.
-   **specific\_author\_property** (`string`, optional) Specify a property to retrieve specific details about the blog author, such as a specific attribute or field.

## HubspotCmsApi.DeleteBlogAuthor



Delete a specific blog author by ID.

**Parameters**

-   **blog\_author\_id** (`string`, required) The unique identifier of the Blog Author to be deleted.
-   **return\_archived\_only** (`boolean`, optional) Set to true to return only archived blog authors. Use for fetching deleted or inactive authors.

## HubspotCmsApi.UpdateBlogAuthor



Update specific details of a blog author.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **blog\_author\_id** (`string`, optional) The unique ID of the blog author to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **update\_deleted\_blog\_authors** (`boolean`, optional) Set to `true` to update deleted Blog Authors. Defaults to `false`. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCmsApi.DetachBlogAuthorFromLangGroup



Detach a Blog Author from a multi-language group.

**Parameters**

-   **author\_id\_to\_detach** (`string`, required) ID of the blog author to remove from a multi-language group in HubSpot CMS.

## HubspotCmsApi.UpdateBlogAuthorsBatch



Update multiple blog author objects at once.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **update\_deleted\_blog\_authors** (`boolean`, optional) Set to true to update deleted Blog Authors. Defaults to false. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCmsApi.SetPrimaryLanguageBlogAuthor



Set a blog author as the primary language in a multilingual group.

**Parameters**

-   **primary\_language\_author\_id** (`string`, required) The ID of the blog author to be set as the primary in a multi-language group.

## HubspotCmsApi.DeleteBlogAuthors



Delete specified blog authors in HubSpot CMS.

**Parameters**

-   **blog\_author\_ids** (`array[string]`, required) List of blog author IDs to delete from HubSpot CMS.

## HubspotCmsApi.CreateBlogAuthorsBatch



Create multiple blog authors in a single batch request.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCmsApi.RetrieveBlogAuthors



Retrieve specified Blog Author objects from the CMS.

**Parameters**

-   **author\_identifiers** (`array[string]`, required) An array of strings representing the identifiers for the blog authors to retrieve.
-   **include\_deleted\_authors** (`boolean`, optional) Specifies whether to include deleted Blog Authors in the results. Set to true to include them.

## HubspotCmsApi.GetBlogAuthors



Retrieve the list of blog authors.

**Parameters**

-   **created\_after** (`string`, optional) Return only blog authors created after this specified timestamp.
-   **created\_at\_exact\_time** (`string`, optional) Return blog authors created at exactly the specified time. Use ISO 8601 format for timestamps.
-   **filter\_by\_creation\_before\_date** (`string`, optional) Return Blog Authors created before the specified date and time in ISO 8601 format.
-   **filter\_by\_last\_updated\_before** (`string`, optional) Only return blog authors last updated before the specified timestamp. Format: YYYY-MM-DDTHH:MM:SSZ.
-   **filter\_by\_updated\_after** (`string`, optional) Return Blog Authors updated after a specific time. Use an ISO 8601 datetime string, e.g., ‘2023-01-01T00:00:00Z’.
-   **include\_archived\_authors** (`boolean`, optional) Specify `true` to include archived (deleted) blog authors in the results. Defaults to `false`.
-   **included\_properties** (`string`, optional) Comma-separated list of specific properties to include in the response for each author. If empty, all properties will be fetched by default.
-   **pagination\_cursor\_token** (`string`, optional) The cursor token from `paging.next.after` to fetch the next set of results.
-   **result\_limit** (`integer`, optional) Maximum number of blog authors to return. Default is 100.
-   **sort\_fields** (`array[string]`, optional) Fields for sorting results. Choose from: `name`, `createdAt`, `updatedAt`, `createdBy`, `updatedBy`. Default is `createdAt`.
-   **updated\_at\_timestamp** (`string`, optional) Return blog authors last updated at the specified exact time (ISO 8601 format).

## HubspotCmsApi.CreateBlogAuthor



Create a new Blog Author in HubSpot CMS.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCmsApi.AttachAuthorToMultilangGroup



Attach a Blog Author to a multi-language group.

**Parameters**

-   **author\_object\_id** (`string`, required) ID of the blog author to add to a multi-language group in HubSpot CMS.
-   **designated\_language** (`string`, required) The language code of the blog author to be added to a multi-language group, e.g., ‘en’ for English.
-   **primary\_language\_object\_id** (`string`, required) ID of the primary language object in the multi-language group.
-   **primary\_language** (`string`, optional) Specify the primary language of the multi-language group to which the author will be attached.

## HubspotCmsApi.CreateBlogAuthorLanguageVariation



Create a language variation for a blog author.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCmsApi.UpdateBlogAuthorLanguages



Set new languages for each blog author in a group.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCmsApi.GetBlogRevisionHistory



Retrieve the revision history of blog settings.

**Parameters**

-   **blog\_id** (`string`, required) The unique identifier for the blog whose settings history is being retrieved. This is required for querying specific blog settings.
-   **retrieve\_revisions\_before\_timestamp** (`string`, optional) Retrieve revisions before this timestamp in milliseconds since Unix Epoch.
-   **revision\_limit** (`integer`, optional) The maximum number of blog setting revisions to retrieve. Provide an integer value to restrict the number of results.
-   **start\_date\_for\_revisions** (`string`, optional) Specify a date to filter revisions that occurred after this date. Format: YYYY-MM-DD.

## HubspotCmsApi.UpdateBlogLanguages



Update the languages for blog settings.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCmsApi.RetrieveBlogRevisionDetails



Retrieve specific blog revision details by ID.

**Parameters**

-   **blog\_id** (`string`, required) The unique identifier for the blog post. It is required to fetch the specific revision details.
-   **revision\_id** (`string`, required) A unique string identifier for a specific blog revision to be retrieved.

## HubspotCmsApi.GetBlogSettings



Fetch blog settings using a blog ID.

**Parameters**

-   **blog\_id** (`string`, required) The unique identifier of the blog for which you want to fetch the settings. This is required to specify which blog’s details to retrieve.

## HubspotCmsApi.CreateBlogLanguageVariation



Create a language variation for a blog in HubSpot CMS.

**Parameters**

-   **blog\_id** (`string`, required) ID of the blog to clone for creating a language variation.
-   **blog\_slug** (`string`, optional) Path to the blog. Used to specify the location of the language variation within the CMS.
-   **primary\_language** (`string`, optional) Specify the language of the primary blog to clone. This determines the source content for the new language variation.
-   **target\_language\_for\_blog\_variant** (`string`, optional) The language code for the new blog variant, specifying the target language for translation.

## HubspotCmsApi.RetrieveBlogSettings



Retrieve current blog settings from the HubSpot CMS.

**Parameters**

-   **created\_before** (`string`, optional) Retrieve blog settings created before this date. Format as ‘YYYY-MM-DD’.
-   **created\_timestamp** (`string`, optional) The exact timestamp when the blog settings were created, formatted as an ISO 8601 string.
-   **filter\_created\_after\_date** (`string`, optional) Filter settings to only include blogs created after the specified date (ISO 8601 format).
-   **include\_archived** (`boolean`, optional) Set to true to include archived blog settings and false to exclude them.
-   **max\_number\_of\_results** (`integer`, optional) The maximum number of blog settings to retrieve. The value should be an integer.
-   **pagination\_cursor** (`string`, optional) A token to retrieve the next set of blog settings after the current page. Use this for paginating results.
-   **sort\_options** (`array[string]`, optional) An array specifying fields to sort by, in order of priority (e.g., \[‘createdAt’, ‘-updatedAt’\] for ascending and descending).
-   **updated\_after\_timestamp** (`string`, optional) Fetch settings for blogs updated after this date and time. Use ISO 8601 format.
-   **updated\_at\_exact\_timestamp** (`string`, optional) Fetch blogs with this exact update timestamp. Use ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ).
-   **updated\_before\_date** (`string`, optional) The latest date (inclusive) to filter blog updates. Provide in ‘YYYY-MM-DD’ format.

## HubspotCmsApi.SetNewBlogPrimaryLanguage



Set a new primary language for blogs.

**Parameters**

-   **primary\_language\_object\_id** (`string`, required) ID of the blog object to set as primary in the multi-language group.

## HubspotCmsApi.DetachBlogFromLanguageGroup



Detach a blog from its multi-language group.

**Parameters**

-   **object\_id\_to\_detach** (`string`, required) ID of the blog to remove from its multi-language group in HubSpot CMS.

## HubspotCmsApi.AttachBlogToLanguageGroup



Attach a blog to a multi-language group in HubSpot CMS.

**Parameters**

-   **designated\_language** (`string`, required) The language code of the blog to add to a multi-language group. Use standard language codes like ‘en’, ‘fr’, etc.
-   **object\_id\_to\_add** (`string`, required) ID of the blog object to be added to a multi-language group in HubSpot CMS.
-   **primary\_language\_object\_id** (`string`, required) ID of the primary language object in the multi-language group to which the blog will be attached.
-   **primary\_language** (`string`, optional) Primary language code for the multi-language group to which the blog should be attached (e.g., ‘en’, ‘fr’).

## HubspotCmsApi.RetrieveAuditLogs



Retrieve audit logs based on specified filters.

**Parameters**

-   **event\_types** (`array[string]`, optional) A list of event types to filter by, such as CREATED, UPDATED, PUBLISHED, DELETED, UNPUBLISHED.
-   **filter\_by\_object\_ids** (`array[string]`, optional) List of object IDs to filter the audit logs by.
-   **filter\_by\_object\_type** (`array[string]`, optional) List the object types to filter audit logs by, such as BLOG, LANDING\_PAGE, DOMAIN, etc. Use a comma-separated format.
-   **number\_of\_logs\_to\_return** (`integer`, optional) Specifies the number of audit logs to retrieve.
-   **sort\_direction** (`array[string]`, optional) Specify the sort direction for audit logs by timestamp, e.g., ‘asc’ or ‘desc’.
-   **timestamp\_after** (`string`, optional) Timestamp (in ISO 8601 format) after which audit logs will be returned.
-   **timestamp\_before** (`string`, optional) A timestamp to filter audit logs before the specified date and time.
-   **user\_ids\_to\_filter** (`array[string]`, optional) Array of user IDs to filter the audit logs by. Provide as a list of strings.

## HubspotCmsApi.GetExistingDomains



Retrieve all existing domains in the CMS.

**Parameters**

-   **created\_at\_date\_filter** (`string`, optional) Specify a date to return only domains created on this exact date. Format: YYYY-MM-DD.
-   **created\_before\_date** (`string`, optional) Filter to return only domains created before the specified date. Format: YYYY-MM-DD.
-   **filter\_by\_update\_date** (`string`, optional) Only return domains updated on this specific date. Use ‘YYYY-MM-DD’ format.
-   **filter\_domains\_updated\_after** (`string`, optional) Return domains updated after this specified date. Use ISO 8601 format (YYYY-MM-DD).
-   **filter\_updated\_before\_date** (`string`, optional) Return only domains updated before this date in ISO 8601 format (e.g., ‘2023-10-05T00:00:00Z’).
-   **get\_domains\_created\_after\_date** (`string`, optional) Only return domains created after the specified date (in YYYY-MM-DD format).
-   **maximum\_results\_per\_page** (`integer`, optional) Specifies the maximum number of domain results to return per page.
-   **paging\_cursor\_token** (`string`, optional) The paging cursor token of the last successfully read resource, used for paginated results.
-   **return\_archived** (`boolean`, optional) Return only archived domains if true. Return unarchived if false.
-   **sort\_criteria** (`array[string]`, optional) Defines the order of the domain results. Provide an array of strings specifying fields to sort by, such as \[‘createdAt’, ‘updatedAt’\].

## HubspotCmsApi.GetDomainById



Retrieve domain details by ID from HubSpot CMS.

**Parameters**

-   **domain\_id** (`string`, required) The unique ID of the domain to retrieve details for from HubSpot CMS.

## HubspotCmsApi.ExportHubdbDraftTable



Export HubDB draft table to CSV or Excel format.

**Parameters**

-   **table\_id\_or\_name** (`string`, required) The ID or name of the table to export. Use this to specify the exact table you want to download.
-   **export\_file\_format** (`string`, optional) The file format for exporting the draft table. Choose from `CSV`, `XLSX`, or `XLS`.

## HubspotCmsApi.GetAllDraftTablesDetails



Retrieve details of all draft HubDB tables.

**Parameters**

-   **content\_type** (`string`, optional) Specify the content type filter for retrieving draft tables. Leave empty for no filter.
-   **created\_after\_date** (`string`, optional) Return tables created after the specified date and time. Format: YYYY-MM-DDTHH:MM:SSZ.
-   **created\_at\_exact\_time** (`string`, optional) Return tables created at the specified exact time (ISO 8601 format).
-   **created\_before\_date** (`string`, optional) Return tables created before this specified time.
-   **filter\_by\_updated\_before\_date** (`string`, optional) Return tables last updated before this specified time in ISO 8601 format.
-   **include\_archived\_tables** (`boolean`, optional) Set to true to include archived tables in the results, false by default.
-   **include\_localized\_schema** (`boolean`, optional) Indicates whether to include localized schema information for draft tables. Accepts a boolean value.
-   **maximum\_results\_limit** (`integer`, optional) Specifies the maximum number of draft table results to return, with a default of 1000.
-   **pagination\_cursor\_token** (`string`, optional) Cursor token to fetch the next set of results from a paginated response.
-   **return\_tables\_updated\_after** (`string`, optional) Only return tables that were last updated after the specified timestamp (ISO 8601 format).
-   **sort\_fields\_for\_results** (`array[string]`, optional) Fields to sort the results by. Valid fields are `name`, `createdAt`, `updatedAt`, `createdBy`, `updatedBy`. Defaults to `createdAt`.
-   **updated\_at\_specific\_time** (`string`, optional) Return tables last updated at the specified exact time.

## HubspotCmsApi.GetTableRow



Get a single row from a HubSpot CMS table by ID.

**Parameters**

-   **row\_id** (`string`, required) The ID of the row to retrieve from the table.
-   **table\_id\_or\_name** (`string`, required) The ID or name of the HubSpot CMS table to retrieve the row from.
-   **archived** (`boolean`, optional) A boolean to retrieve archived rows. Set to True to include archived rows, or False to exclude them.

## HubspotCmsApi.GetDraftHubdbTableRows



Retrieve rows from a draft HubDB table with optional filtering.

**Parameters**

-   **table\_id\_or\_name** (`string`, required) The ID or name of the HubDB table to query for draft rows.
-   **include\_archived\_rows** (`boolean`, optional) Specify whether to include archived rows in the results. Use `true` to include archived rows, `false` to exclude them.
-   **maximum\_results\_limit** (`integer`, optional) Specifies the maximum number of results to return from the draft table. Default is 1000.
-   **next\_page\_cursor** (`string`, optional) Cursor token to retrieve the next set of results, from `paging.next.after` in a paged response.
-   **result\_offset** (`integer`, optional) The number of rows to skip before starting to collect the result set from the draft version of a table.
-   **sort\_columns** (`array[string]`, optional) List of column names to sort the results by. Use format like \[‘column1’, ‘-column2’\] to specify ascending or descending order.
-   **specified\_columns** (`array[string]`, optional) Specify the column names to return only these columns in the result, instead of all columns.

## HubspotCmsApi.CloneHubdbDraftRow



Clone a single row in a HubDB draft table.

**Parameters**

-   **row\_id\_to\_clone** (`string`, required) The ID of the row to be cloned in the draft table.
-   **table\_id\_or\_name** (`string`, required) The ID or name of the table to be cloned.
-   **new\_row\_name** (`string`, optional) The name for the cloned row. Specify a new name if required.

## HubspotCmsApi.ResetHubdbDraftToPublished



Reset HubDB draft table to match the published version.

**Parameters**

-   **table\_identifier** (`string`, required) The ID or name of the HubDB table to reset to the published version.
-   **include\_foreign\_ids** (`boolean`, optional) Set to true to populate foreign ID values in the response.

## HubspotCmsApi.ExportTableFromHubdb



Exports a HubDB table in the desired format.

**Parameters**

-   **hubdb\_table\_id\_or\_name** (`string`, required) The ID or name of the HubDB table to export.
-   **file\_format\_to\_export** (`string`, optional) The file format for exporting the table. Options are `CSV`, `XLSX`, and `XLS`.

## HubspotCmsApi.ReplaceDraftTableRows



Batch replace rows in HubSpot CMS draft tables.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **table\_identifier** (`string`, optional) The ID or name of the table in which you want to replace draft rows. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCmsApi.CloneHubdbTable



Clone an existing HubDB table as a draft.

**Parameters**

-   **copy\_rows** (`boolean`, required) Boolean indicating whether to copy the rows during the cloning process.
-   **is\_hubspot\_defined** (`boolean`, required) Indicate if the table is defined by HubSpot. This is a boolean value where true means the table is HubSpot-defined.
-   **source\_table\_id\_or\_name** (`string`, required) The ID or name of the HubDB table to clone.
-   **new\_table\_label** (`string`, optional) The label for the new cloned table. Specify a descriptive label for identification.
-   **new\_table\_name** (`string`, optional) The desired new name for the cloned HubDB table draft.

## HubspotCmsApi.PermanentlyDeleteHubdbDraftRows



Permanently delete draft rows from a HubDB table.

**Parameters**

-   **row\_ids\_to\_delete** (`array[string]`, required) An array of up to 100 row IDs to permanently delete from the draft version of the table.
-   **table\_id\_or\_name** (`string`, required) The ID or name of the HubDB table to target for deleting draft rows.

## HubspotCmsApi.GetDraftTableRowById



Retrieve a single draft row by ID from a HubDB table.

**Parameters**

-   **row\_id** (`string`, required) The ID of the row in the table’s draft version to retrieve.
-   **table\_identifier** (`string`, required) The ID or name of the HubDB table to fetch the draft row from.
-   **include\_archived** (`boolean`, optional) Set to true to include archived rows in the search result. Defaults to false.

## HubspotCmsApi.ReplaceDraftTableRow



Replace a row in the draft version of a HubDB table.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **table\_id\_or\_name** (`string`, optional) The ID or name of the HubDB table to replace the row in. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **row\_id** (`string`, optional) The unique identifier of the row to be replaced in the draft table. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCmsApi.DeleteDraftTableRowHubspot



Permanently delete a row from a HubDB draft table.

**Parameters**

-   **row\_id** (`string`, required) The unique ID of the row to be permanently deleted from the draft version of the HubDB table.
-   **table\_id\_or\_name** (`string`, required) The ID or name of the HubDB table from which the draft row will be deleted.

## HubspotCmsApi.UpdateHubdbRowDraft



Update specific fields in a HubDB table’s draft row.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **table\_identifier** (`string`, optional) The ID or name of the HubDB table to update the draft row in. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **row\_id** (`string`, optional) The unique ID of the row to be updated in the draft table. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCmsApi.FetchHubdbTableRows



Fetch rows from a HubDB table using filters and sorting.

**Parameters**

-   **table\_identifier** (`string`, required) The ID or name of the HubDB table to query for fetching row data.
-   **include\_archived\_rows** (`boolean`, optional) Set to true to include archived rows in the results; false to exclude them.
-   **maximum\_results\_limit** (`integer`, optional) Specifies the maximum number of results to return. The default value is 1000, which can be adjusted to retrieve fewer entries.
-   **pagination\_cursor\_token** (`string`, optional) Cursor token to fetch the next set of results. Obtainable from the `paging.next.after` of a paged response.
-   **requested\_columns** (`array[string]`, optional) Specify column names to retrieve only the required columns’ data, excluding others.
-   **row\_offset** (`integer`, optional) The starting point for fetching a subset of rows, useful for pagination. It’s similar to specifying which row to start fetching from.
-   **sort\_columns** (`array[string]`, optional) List of column names to sort the results by. Each entry is a string representing a column. Prefix with ’-’ for descending order.

## HubspotCmsApi.AddHubdbTableRow



Add a new row to a HubDB draft table.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **target\_table\_id\_or\_name** (`string`, optional) The ID or name of the target HubDB table to add the row to. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCmsApi.ReadHubdbTableRows



Retrieve rows from a published HubDB table.

**Parameters**

-   **hubdb\_table\_id\_or\_name** (`string`, required) The ID or name of the HubDB table to query. Use this to specify which table’s rows to retrieve.
-   **row\_ids** (`array[string]`, required) An array of strings representing the row IDs to retrieve from the specified HubDB table.

## HubspotCmsApi.CreateDraftTableRows



Create draft rows in a specified HubSpot table.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **table\_id\_or\_name** (`string`, optional) The ID or name of the HubSpot table to which the draft rows are being added. This is required to specify which table you want to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCmsApi.GetHubdbTableDetails



Get details of a HubDB table, including columns and row count.

**Parameters**

-   **table\_id\_or\_name** (`string`, required) The ID or name of the HubDB table to retrieve details for.
-   **get\_localized\_schema** (`boolean`, optional) Set to `true` to return the localized schema for the table. If `false`, returns the default schema.
-   **include\_foreign\_id\_values** (`boolean`, optional) Set this to true to populate foreign ID values in the result.
-   **return\_archived\_table\_details** (`boolean`, optional) Set to true to return details for an archived table. Defaults to false.

## HubspotCmsApi.ArchiveHubdbTable



Archive a HubDB table in HubSpot CMS.

**Parameters**

-   **hubdb\_table\_identifier** (`string`, required) The ID or name of the HubDB table to archive. Provides the reference needed to identify the table within the system.

## HubspotCmsApi.GetHubdbDraftRows



Fetch draft rows from a specified HubDB table.

**Parameters**

-   **row\_ids** (`array[string]`, required) An array of row IDs to retrieve draft rows from the specified HubDB table.
-   **table\_id\_or\_name** (`string`, required) ID or name of the HubDB table to retrieve draft rows from.

## HubspotCmsApi.CloneDraftTableRowsHubspot



Clone rows in a draft HubDB table by row IDs.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **hubdb\_table\_id\_or\_name** (`string`, optional) The ID or name of the HubDB table to clone rows from. Specify either the unique table ID or its name. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCmsApi.GetAllHubdbTables



Retrieve details of all published HubDB tables.

**Parameters**

-   **content\_type\_filter** (`string`, optional) Filter tables by the specified content type to return only those matching it.
-   **created\_after** (`string`, optional) Return tables created after the specified time in ISO 8601 format.
-   **created\_before\_timestamp** (`string`, optional) Return tables created before this timestamp. Format should be in ISO 8601.
-   **cursor\_token\_for\_next\_results** (`string`, optional) The cursor token to retrieve the next set of results. Obtain this from the `paging.next.after` in a paged response.
-   **filter\_by\_creation\_time** (`string`, optional) Return tables created at the specified time. Format: ISO 8601.
-   **include\_archived\_tables** (`boolean`, optional) Specifies whether to include archived tables in the results. Defaults to `false`.
-   **include\_localized\_schema** (`boolean`, optional) Include localized schema details in the response if true.
-   **last\_updated\_exact\_time** (`string`, optional) Only return tables last updated at exactly the specified time, formatted as a string.
-   **max\_table\_results** (`integer`, optional) Maximum number of HubDB table results to return. Default is 1000.
-   **sort\_fields** (`array[string]`, optional) Specify fields for sorting results: `name`, `createdAt`, `updatedAt`, `createdBy`, `updatedBy`. Defaults to `createdAt`.
-   **updated\_after\_timestamp** (`string`, optional) Return tables last updated after this timestamp. Format: ‘YYYY-MM-DDTHH:MM:SSZ’.
-   **updated\_before\_time** (`string`, optional) Return tables updated before this specific time.

## HubspotCmsApi.CreateHubdbTable



Create a new draft HubDB table with a unique name and label.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCmsApi.DeleteTableVersion



Delete a specific version of a HubDB table.

**Parameters**

-   **table\_identifier** (`string`, required) The unique ID or name of the HubDB table whose version you want to delete.
-   **table\_version\_id** (`integer`, required) Specify the ID of the table version to delete. This should be an integer value that identifies a specific version in HubDB.

## HubspotCmsApi.UnpublishHubdbTable



Unpublish a HubDB table to stop rendering data on website pages.

**Parameters**

-   **table\_identifier** (`string`, required) The ID or name of the HubDB table to unpublish.
-   **include\_foreign\_ids** (`boolean`, optional) Set this to true to populate foreign ID values in the response.

## HubspotCmsApi.GetDraftTableDetails



Retrieve details of a draft HubDB table by ID or name.

**Parameters**

-   **table\_id\_or\_name** (`string`, required) The ID or name of the HubDB table to retrieve draft details for.
-   **include\_foreign\_ids** (`boolean`, optional) Set this to `true` to populate foreign ID values in the result.
-   **include\_localized\_schema** (`boolean`, optional) Set to true to include the localized schema in the result.
-   **return\_archived\_table** (`boolean`, optional) Set to `true` to return an archived table. Defaults to `false`.

## HubspotCmsApi.UpdateHubdbDraftTable



Update or modify a HubDB table draft in HubSpot CMS.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **table\_id\_or\_name** (`string`, optional) The ID or name of the HubDB table to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **return\_archived\_tables** (`boolean`, optional) Set to true to return archived tables. Defaults to false. Only used when mode is ‘execute’.
-   **populate\_foreign\_ids** (`boolean`, optional) Set to true to populate foreign ID values in the table result. Only used when mode is ‘execute’.
-   **retrieve\_localized\_schema** (`boolean`, optional) Set to true to retrieve the localized schema of the HubDB table, if available. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCmsApi.PublishTableDraft



Publish draft table to update website pages.

**Parameters**

-   **table\_identifier** (`string`, required) The ID or name of the HubSpot CMS table to publish. This identifies which draft table’s data and schema should be copied to the published version.
-   **include\_foreign\_id\_values** (`boolean`, optional) Set to `true` to populate foreign ID values in the response.

## HubspotCmsApi.BatchUpdateTableRowsHubspot



Update multiple draft table rows in HubSpot CMS.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **table\_id\_or\_name** (`string`, optional) The ID or name of the table to update rows in the draft version. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCmsApi.CreateAttentionSpanEvent



Log viewer’s attention span details for media events.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCmsApi.TrackMediaMilestones



Log user progress milestones in media content viewing.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCmsApi.CreateMediaPlayedEvent



Log an event when media playback starts.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCmsApi.RetrievePreviousSitePageVersion



Retrieve a previous version of a site page.

**Parameters**

-   **site\_page\_id** (`string`, required) The unique identifier for the site page whose previous version is to be retrieved.
-   **site\_page\_revision\_id** (`string`, required) The ID of the specific revision of the site page to retrieve.

## HubspotCmsApi.GetLandingPagePreviousVersions



Retrieve previous versions of a Landing Page for review.

**Parameters**

-   **landing\_page\_id** (`string`, required) The ID of the Landing Page to retrieve previous versions for.
-   **cursor\_token\_for\_next\_set** (`string`, optional) The cursor token for retrieving the next set of results, from the `paging.next.after` JSON property.
-   **limit\_page\_fetching\_before\_cursor** (`string`, optional) A token used for fetching results before a specific cursor position in paged results. Typically used in pagination to navigate backwards.
-   **max\_results** (`integer`, optional) The maximum number of previous landing page versions to return. Default is 100.

## HubspotCmsApi.UpdateSitePagesBatch



Batch update specified site pages in HubSpot CMS.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **update\_deleted\_site\_pages** (`boolean`, optional) Specify true to update deleted Site Pages. Defaults to false. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCmsApi.GetPreviousFolderVersions



Retrieve previous versions of a CMS folder.

**Parameters**

-   **folder\_id** (`string`, required) The unique ID of the folder to retrieve its previous versions.
-   **before\_token** (`string`, optional) A cursor token to fetch items before a certain point in the result set, used for pagination.
-   **max\_results** (`integer`, optional) Specifies the maximum number of folder versions to retrieve. Default is 100.
-   **pagination\_cursor\_after** (`string`, optional) The cursor token to retrieve the next set of results from the `paging.next.after` property in a paged response.

## HubspotCmsApi.RestorePageVersion



Restore a specific version of a HubSpot site page.

**Parameters**

-   **page\_version\_to\_restore** (`string`, required) The ID of the site page version to restore. Use this to revert to a previous version.
-   **site\_page\_id** (`string`, required) The unique identifier for the Site Page to be restored.

## HubspotCmsApi.GetLandingPageFolders



Retrieve the list of landing page folders from HubSpot CMS.

**Parameters**

-   **created\_after** (`string`, optional) Return folders created after this specified ISO 8601 timestamp.
-   **created\_before\_time** (`string`, optional) Return folders created before this specific time.
-   **exact\_update\_time** (`string`, optional) Return folders last updated at exactly the specified time. Use a string format for the timestamp.
-   **filter\_folders\_created\_at** (`string`, optional) Return folders created at an exact specified time. Use ISO 8601 format.
-   **folder\_property** (`string`, optional) Specify properties to include in the response for each folder. Leave empty for all properties.
-   **include\_deleted\_folders** (`boolean`, optional) Include deleted folders in the results when set to true. Defaults to false.
-   **max\_results\_limit** (`integer`, optional) The maximum number of folder results to return. Default is 100.
-   **next\_page\_cursor** (`string`, optional) The cursor token to retrieve the next set of results from a paged response.
-   **sort\_criteria** (`array[string]`, optional) Fields to use for sorting results. Valid options: `name`, `createdAt`, `updatedAt`, `createdBy`, `updatedBy`. Default: `createdAt`.
-   **updated\_after\_date** (`string`, optional) Only return folders last updated after the specified time. Use ISO 8601 format for the date and time.
-   **updated\_before\_timestamp** (`string`, optional) Return folders last updated before this specified timestamp.

## HubspotCmsApi.CreateLandingPageFolder



Create a new folder in HubSpot CMS for landing pages.

**Parameters**

-   **deletion\_timestamp** (`string`, required) The ISO8601 timestamp indicating when the folder was deleted. Leave this empty if the folder is active.
-   **folder\_category** (`integer`, required) The type of object this folder applies to. Must be set to LANDING\_PAGE.
-   **folder\_creation\_date** (`string`, required) The ISO8601 timestamp when this folder was created.
-   **folder\_name** (`string`, required) The name of the folder to display in the app dashboard.
-   **folder\_unique\_id** (`string`, required) The unique identifier for the content folder. This is a string that serves as the primary key for the folder.
-   **parent\_folder\_id** (`integer`, required) The ID of the parent content folder under which the new folder will be nested.
-   **updated\_timestamp** (`string`, required) The timestamp in ISO8601 format indicating when the folder was last updated.

## HubspotCmsApi.AttachPageToLanguageGroup



Attach a site page to a multi-language group.

**Parameters**

-   **object\_id\_to\_add\_to\_language\_group** (`string`, required) ID of the site page object to add to a multi-language group.
-   **page\_language** (`string`, required) Designated language code (e.g., ‘en’, ‘fr’) of the page to add to a multi-language group.
-   **primary\_language\_object\_id** (`string`, required) ID of the primary language object in the multi-language group to which the page will be attached.
-   **primary\_language\_of\_group** (`string`, optional) Specify the primary language for the multi-language group.

## HubspotCmsApi.ScheduleSitePagePublication



Schedule a site page for publication at a specified time.

**Parameters**

-   **object\_id\_to\_schedule** (`string`, required) The ID of the site page to be scheduled for publication.
-   **publication\_date** (`string`, required) The date and time when the site page should be published. Use ISO 8601 format (e.g., ‘2023-12-31T23:59:00Z’).

## HubspotCmsApi.DetachSitePageFromLanguageGroup



Detach a site page from a multi-language group.

**Parameters**

-   **object\_id\_to\_detach** (`string`, required) The ID of the site page to detach from the multi-language group.

## HubspotCmsApi.CreateLandingPageFolders



Create multiple landing page folders in HubSpot CMS.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCmsApi.GetPreviousSitePageVersions



Retrieve previous versions of a site page.

**Parameters**

-   **site\_page\_id** (`string`, required) The unique identifier for the Site Page to retrieve its previous versions.
-   **max\_results\_limit** (`integer`, optional) The maximum number of previous versions to retrieve. Defaults to 100 if not specified.
-   **next\_results\_cursor** (`string`, optional) The cursor token to fetch the next set of site page versions. Obtain this from `paging.next.after` in the response of a previous request.
-   **page\_version\_cursor\_before** (`string`, optional) The cursor token to get the set of results before a specific point. Useful for backward paging through results.

## HubspotCmsApi.GetLandingPageDraft



Retrieve the full draft version of a landing page.

**Parameters**

-   **landing\_page\_id** (`string`, required) The unique identifier for the Landing Page draft to be retrieved.

## HubspotCmsApi.UpdateLandingPageDraft



Update draft of a specific landing page by ID.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **landing\_page\_id** (`string`, optional) The ID of the landing page to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCmsApi.GetLandingPages



Retrieve a list of HubSpot CMS landing pages.

**Parameters**

-   **created\_after** (`string`, optional) Return landing pages created after this specified timestamp (ISO 8601 format).
-   **created\_at\_timestamp** (`string`, optional) Return landing pages created at the specified exact timestamp. Format: ISO 8601.
-   **created\_before\_timestamp** (`string`, optional) Only return landing pages created before the specified ISO 8601 timestamp.
-   **cursor\_after\_token** (`string`, optional) The token to get the next set of results. Obtainable from `paging.next.after` in a paged response.
-   **filter\_by\_property** (`string`, optional) Specify a property to filter the landing pages by.
-   **include\_archived\_pages** (`boolean`, optional) Specify whether to include deleted landing pages in the results. Defaults to false.
-   **last\_updated\_before** (`string`, optional) Return landing pages updated before this specified datetime (ISO format).
-   **last\_updated\_exact\_time** (`string`, optional) Return Landing Pages last updated at exactly this time. Use ISO 8601 format.
-   **max\_results** (`integer`, optional) Specify the maximum number of landing pages to return. Default is 100.
-   **sort\_fields\_for\_results** (`array[string]`, optional) Specifies fields for sorting results. Valid options: `name`, `createdAt`, `updatedAt`, `createdBy`, `updatedBy`. Default is `createdAt`.
-   **updated\_after\_datetime** (`string`, optional) Return landing pages updated after this datetime in ISO 8601 format.

## HubspotCmsApi.CreateLandingPage



Create a new landing page in HubSpot.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCmsApi.EndActiveAbTest



End an active A/B test and designate a winner.

**Parameters**

-   **test\_id\_to\_end** (`string`, required) The unique identifier of the A/B test that you want to conclude in the HubSpot CMS.
-   **winner\_id** (`string`, required) The ID of the object to designate as the winner of the A/B test. This should match the ID used in the CMS to identify the specific variant.

## HubspotCmsApi.RestoreSitePageToDraft



Restore a specific site page version to draft.

**Parameters**

-   **site\_page\_id** (`string`, required) The ID of the Site Page to be restored to draft.
-   **site\_page\_version\_id\_to\_restore** (`integer`, required) The ID of the Site Page version to restore as the new draft.

## HubspotCmsApi.CreateLandingPages



Create multiple landing pages in HubSpot CMS.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCmsApi.UpdateLandingPagesBatch



Batch update landing pages in HubSpot CMS.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **update\_deleted\_landing\_pages** (`boolean`, optional) Set to true to update deleted (archived) Landing Pages. Defaults to false. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCmsApi.RetrieveLandingPages



Retrieve specified Landing Page objects from HubSpot CMS.

**Parameters**

-   **landing\_page\_ids** (`array[string]`, required) Array of strings, each representing a Landing Page ID to retrieve details for.
-   **return\_archived\_landing\_pages** (`boolean`, optional) Specify whether to return deleted Landing Pages. Defaults to `false`.

## HubspotCmsApi.CloneLandingPageHubspot



Clone a landing page in HubSpot CMS.

**Parameters**

-   **landing\_page\_id** (`string`, required) ID of the landing page to be cloned. Required for identifying the source page.
-   **cloned\_landing\_page\_name** (`string`, optional) The name to assign to the newly cloned landing page in HubSpot CMS.

## HubspotCmsApi.RestoreFolderVersion



Restore a specific version of a folder in HubSpot CMS.

**Parameters**

-   **folder\_id** (`string`, required) The unique identifier for the folder you want to restore in HubSpot CMS.
-   **folder\_version\_id\_to\_restore** (`string`, required) The ID of the folder version to be restored in HubSpot CMS.

## HubspotCmsApi.SetPrimaryLandingPageLanguage



Set a landing page as the primary language for a group.

**Parameters**

-   **landing\_page\_id** (`string`, required) The ID of the landing page to set as primary in the multi-language group.

## HubspotCmsApi.RestoreLandingPageVersion



Restore a specific version of a HubSpot landing page.

**Parameters**

-   **landing\_page\_id** (`string`, required) The unique identifier for the landing page you want to restore.
-   **landing\_page\_version\_id** (`string`, required) The ID of the Landing Page version to be restored.

## HubspotCmsApi.GetSitePageDraft



Retrieve the full draft version of the Site Page.

**Parameters**

-   **site\_page\_id** (`string`, required) The unique identifier for the site page to retrieve its draft version.

## HubspotCmsApi.UpdateSitePageDraft



Update the draft version of a specific site page.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **site\_page\_id** (`string`, optional) The unique identifier for the Site Page to update the draft. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCmsApi.RetrieveSitePages



Retrieve Site Page objects from HubSpot CMS.

**Parameters**

-   **page\_identifiers** (`array[string]`, required) An array of strings, each representing an identifier for a Site Page to be retrieved. Use these IDs to specify which Site Pages to access.
-   **return\_deleted\_site\_pages** (`boolean`, optional) Set to true to return deleted Site Pages; false to exclude them.

## HubspotCmsApi.GetLandingPageFolderById



Retrieve details of a landing page folder by its ID.

**Parameters**

-   **folder\_id** (`string`, required) The unique identifier for the landing page folder to retrieve.
-   **filter\_by\_property** (`string`, optional) Specify properties to include in the response for the folder object. Leave empty to fetch all properties.
-   **include\_archived\_folders** (`boolean`, optional) Specifies whether to include deleted folders in the response. Use ‘true’ to include them; defaults to ‘false’.

## HubspotCmsApi.DeleteLandingPageFolder



Deletes a CMS landing page folder by ID.

**Parameters**

-   **folder\_id** (`string`, required) The ID of the folder to be deleted. Provide the specific ID of the CMS landing page folder you wish to delete.
-   **return\_only\_archived\_results** (`boolean`, optional) Set to true to return only archived results.

## HubspotCmsApi.UpdateLandingPageFolder



Update specific attributes of a landing page folder.

**Parameters**

-   **content\_folder\_unique\_id** (`string`, required) The unique ID of the landing page content folder to be updated.
-   **creation\_timestamp** (`string`, required) The creation timestamp of the folder in ISO8601 format. Used for reference only, typically not updated.
-   **deletion\_timestamp\_iso8601** (`string`, required) The timestamp in ISO8601 format indicating when the content folder was deleted. Required for specifying deletion time.
-   **folder\_category** (`integer`, required) Specify the object type for the folder. Must be LANDING\_PAGE.
-   **folder\_id** (`string`, required) The unique ID of the landing page folder to be updated.
-   **folder\_name** (`string`, required) Specify the new name of the landing page folder to display in the app dashboard.
-   **parent\_folder\_id** (`integer`, required) The ID of the content folder this folder is nested under. Specify this to set a new parent folder.
-   **update\_timestamp** (`string`, required) The timestamp when the folder was last updated, in ISO8601 format. This indicates when changes were made.
-   **update\_deleted\_folders** (`boolean`, optional) Set to true to update folders marked as deleted. Defaults to false.

## HubspotCmsApi.CreateAbTestVariation



Create a new A/B test variation in HubSpot CMS.

**Parameters**

-   **ab\_test\_variation\_name** (`string`, required) The name of the A/B test variation to be created.
-   **object\_test\_id** (`string`, required) The ID of the object to be tested in the A/B test variation.

## HubspotCmsApi.GetSitePagesList



Retrieve a list of site pages with filtering options.

**Parameters**

-   **created\_at\_time\_filter** (`string`, optional) Return Site Pages created at exactly the specified time. Accepts an exact timestamp in string format.
-   **created\_before\_date\_time** (`string`, optional) Return Site Pages created before this date-time. Use ISO 8601 format.
-   **filter\_created\_after** (`string`, optional) Return Site Pages created after the specified time. Use an ISO 8601 timestamp format.
-   **filter\_updated\_after** (`string`, optional) Return site pages updated after this specific time. Use ISO 8601 format.
-   **include\_deleted\_site\_pages** (`boolean`, optional) Set to true to include deleted Site Pages in the results. Defaults to false if not specified.
-   **include\_property\_details** (`string`, optional) Specify the properties to include in the Site Pages results. Leave empty to include all properties.
-   **last\_updated\_before** (`string`, optional) Return site pages last updated before this datetime. Format: ISO 8601 string.
-   **last\_updated\_exact\_time** (`string`, optional) Return site pages last updated at exactly the specified time in ISO 8601 format.
-   **maximum\_results** (`integer`, optional) The maximum number of site pages to return. Default is 100.
-   **next\_page\_cursor** (`string`, optional) Cursor token for paged results; use `paging.next.after` for the next set.
-   **sort\_fields\_for\_results** (`array[string]`, optional) Specify fields for sorting site pages. Options: `name`, `createdAt`, `updatedAt`, `createdBy`, `updatedBy`. Default is `createdAt`.

## HubspotCmsApi.CreateSitePage



Create a new site page in HubSpot CMS.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCmsApi.AttachLandingPageToLanguageGroup



Attach a landing page to a multi-language group.

**Parameters**

-   **designated\_language\_to\_add** (`string`, required) The language of the landing page to add to a multi-language group. Expect a language code.
-   **object\_id\_for\_language\_group** (`string`, required) ID of the landing page to add to the multi-language group.
-   **primary\_language\_object\_id** (`string`, required) Provide the ID of the primary language object in the multi-language group to which the landing page will be attached.
-   **primary\_language** (`string`, optional) Specifies the primary language of the multi-language group to which the landing page will be attached.

## HubspotCmsApi.CreateLanguageVariation



Create a new language variation for a site page.

**Parameters**

-   **content\_id\_to\_clone** (`string`, required) ID of the site page content to clone for creating a language variation.
-   **primary\_content\_language** (`string`, optional) Specify the language of the primary content to clone for creating the variation.
-   **target\_language** (`string`, optional) Target language code for the new site page variant, e.g., ‘fr’ for French.

## HubspotCmsApi.RetrievePreviousLandingPageVersion



Retrieve a previous version of a Landing Page.

**Parameters**

-   **landing\_page\_id** (`string`, required) The unique identifier for the landing page.
-   **landing\_page\_version\_id** (`string`, required) The ID of the landing page version to retrieve.

## HubspotCmsApi.EndAbTestSelectWinner



End an active A/B test and designate a winner.

**Parameters**

-   **test\_id\_to\_end** (`string`, required) ID of the A/B test to be ended.
-   **winner\_object\_id** (`string`, required) ID of the landing page variant to designate as the winner of the A/B test.

## HubspotCmsApi.PublishLandingPageDraft



Publish changes from a landing page draft to live.

**Parameters**

-   **landing\_page\_id** (`string`, required) The ID of the landing page whose draft will be pushed live.

## HubspotCmsApi.DetachLandingPageFromLanguageGroup



Detach a landing page from a multi-language group.

**Parameters**

-   **landing\_page\_id** (`string`, required) The ID of the landing page to detach from the multi-language group in HubSpot CMS.

## HubspotCmsApi.NewAbTestVariation



Create a new A/B test variation in HubSpot CMS.

**Parameters**

-   **ab\_test\_variation\_name** (`string`, required) The name for the new A/B test variation to be created.
-   **object\_id\_to\_test** (`string`, required) ID of the object to be tested in the A/B test variation.

## HubspotCmsApi.ScheduleLandingPage



Schedule a landing page for publication.

**Parameters**

-   **landing\_page\_id** (`string`, required) The unique identifier for the landing page to be scheduled for publication.
-   **publication\_date** (`string`, required) The date when the landing page should be published. Use the format YYYY-MM-DD.

## HubspotCmsApi.UpdateLandingPageLanguages



Update languages for landing pages in a multi-language group.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCmsApi.UpdateSitePageLanguages



Set new languages for site pages in a multi-language group.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCmsApi.RerunPreviousAbTest



Rerun a previous A/B test on a landing page.

**Parameters**

-   **test\_id\_to\_rerun** (`string`, required) Provide the ID of the test you want to rerun on the landing page.
-   **variation\_id** (`string`, required) Provide the ID of the object you wish to reactivate as a test variation. This ID is necessary to specify which variation of the landing page you intend to rerun in the A/B test.

## HubspotCmsApi.DeleteLandingPageFolders



Delete specified landing page folders in HubSpot CMS.

**Parameters**

-   **folder\_identifiers** (`array[string]`, required) An array of strings representing the identifiers of the folders to be deleted.

## HubspotCmsApi.CreateSitePagesBatch



Create multiple site page objects in batch.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCmsApi.DeleteCmsSitePages



Delete specified Site Page objects in the CMS.

**Parameters**

-   **page\_ids\_to\_delete** (`array[string]`, required) An array of strings representing the IDs of the Site Page objects to delete.

## HubspotCmsApi.UpdateLandingPageFolders



Update multiple HubSpot CMS landing page folders.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **only\_include\_archived\_results** (`boolean`, optional) Set to true to return only archived folder results; false to return all folders. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCmsApi.CloneSitePage



Clone an existing site page in HubSpot CMS.

**Parameters**

-   **object\_id\_to\_clone** (`string`, required) ID of the site page to be cloned in HubSpot CMS.
-   **clone\_name** (`string`, optional) The desired name for the cloned site page object.

## HubspotCmsApi.SetPrimaryLanguageForSitePage



Set a site page as the primary language of its group.

**Parameters**

-   **page\_id\_to\_set\_primary** (`string`, required) The ID of the site page to set as the primary language in the multi-language group.

## HubspotCmsApi.RetrieveFolderPreviousVersion



Retrieve a previous version of a folder in HubSpot CMS.

**Parameters**

-   **folder\_id** (`string`, required) The unique identifier for the folder whose previous version you want to retrieve.
-   **folder\_version\_id** (`string`, required) The unique identifier for the folder version to be retrieved.

## HubspotCmsApi.ResetLandingPageDraft



Reset a landing page draft to its live version.

**Parameters**

-   **landing\_page\_id** (`string`, required) The ID of the Landing Page whose draft will be reset to the live version.

## HubspotCmsApi.GetLandingPageById



Retrieve details of a specific landing page by ID.

**Parameters**

-   **landing\_page\_id** (`string`, required) The unique identifier of the landing page to be retrieved.
-   **include\_archived** (`boolean`, optional) Include deleted landing pages in the response if set to true. Defaults to false.
-   **landing\_page\_property** (`string`, optional) Specify which properties of the landing page to retrieve, such as ‘title’ or ‘url’. Leave blank to fetch all.

## HubspotCmsApi.DeleteLandingPage



Delete a specified landing page by its ID.

**Parameters**

-   **landing\_page\_id** (`string`, required) The unique identifier of the landing page to delete in HubSpot CMS.
-   **return\_archived\_results\_only** (`boolean`, optional) Set to true to only return results that have been archived.

## HubspotCmsApi.UpdateLandingPage



Update specific fields of a landing page by ID.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **landing\_page\_id** (`string`, optional) The unique ID of the landing page to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **update\_archived\_pages** (`boolean`, optional) Set to true to update archived (deleted) Landing Pages. Defaults to false. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCmsApi.PublishSitePage



Publish draft changes to live site page.

**Parameters**

-   **site\_page\_id** (`string`, required) The ID of the Site Page whose draft will be published live. Ensure it corresponds to the correct page in HubSpot CMS.

## HubspotCmsApi.CreateMultilanguageLandingPage



Create a new language variation for a landing page.

**Parameters**

-   **content\_id\_to\_clone** (`string`, required) The ID of the landing page content to be cloned for creating a new language variation.
-   **primary\_language\_of\_content** (`string`, optional) Language code of the primary content to be cloned for creating the new language variation.
-   **target\_language** (`string`, optional) Specify the target language for the new landing page variant.

## HubspotCmsApi.DeleteLandingPages



Deletes specified HubSpot landing pages permanently.

**Parameters**

-   **landing\_page\_ids** (`array[string]`, required) An array of strings representing the IDs of landing pages to delete permanently.

## HubspotCmsApi.RestoreLandingPageDraft



Restore a specified landing page version to draft.

**Parameters**

-   **landing\_page\_id** (`string`, required) The ID of the landing page to restore a specific version to draft.
-   **landing\_page\_version\_id\_to\_restore** (`integer`, required) The ID of the landing page version you want to restore as the new draft.

## HubspotCmsApi.RestartAbTest



Rerun a previous A/B test to gain new insights.

**Parameters**

-   **ab\_test\_id** (`string`, required) The unique ID of the A/B test you wish to rerun on your HubSpot CMS site pages.
-   **test\_variation\_id** (`string`, required) ID of the object to reactivate as a test variation for the A/B test.

## HubspotCmsApi.ResetHubspotPageDraft



Resets HubSpot CMS draft to the live version.

**Parameters**

-   **site\_page\_id** (`string`, required) The ID of the HubSpot Site Page whose draft will be reset to the live version.

## HubspotCmsApi.RetrieveSitePageById



Retrieve Site Page details by ID.

**Parameters**

-   **site\_page\_id** (`string`, required) The unique identifier for the Site Page to retrieve.
-   **return\_archived\_site\_pages** (`boolean`, optional) Boolean indicating whether to return deleted Site Pages. Defaults to ‘false’.
-   **site\_page\_property** (`string`, optional) Specify the property of the Site Page to return. Leave empty to retrieve all properties.

## HubspotCmsApi.DeleteSitePage



Delete a specified site page in HubSpot CMS.

**Parameters**

-   **site\_page\_id** (`string`, required) The unique identifier for the site page to be deleted in HubSpot CMS.
-   **return\_only\_archived\_results** (`boolean`, optional) Set to true to return only the pages that have been archived.

## HubspotCmsApi.UpdateSitePage



Update specific fields of a HubSpot site page.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **site\_page\_id** (`string`, optional) The unique identifier for the Site Page to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **update\_deleted\_site\_pages** (`boolean`, optional) Boolean to specify whether to update deleted Site Pages. Defaults to `false`. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCmsApi.UpdateFolderObjects



Update specified folder objects in HubSpot CMS.

**Parameters**

-   **folder\_identifiers** (`array[string]`, required) An array of strings identifying folder objects to update in HubSpot CMS.
-   **include\_archived\_folders** (`boolean`, optional) Indicate whether to include archived folders in the results. Defaults to `false`.

## HubspotCmsApi.ScheduleBlogPost



Schedule a blog post for future publication.

**Parameters**

-   **blog\_post\_id** (`string`, required) The ID of the blog post to be scheduled for future publication.
-   **scheduled\_publish\_date** (`string`, required) The date and time when the blog post should be published, formatted as a string (e.g., ‘2023-12-31T23:59:59’).

## HubspotCmsApi.RetrieveBlogPostsById



Retrieve a batch of blog posts by their IDs.

**Parameters**

-   **blog\_post\_ids** (`array[string]`, required) A list of blog post IDs to retrieve. Each ID should be a string.
-   **include\_archived\_posts** (`boolean`, optional) Include deleted blog posts if true. Defaults to `false`.

## HubspotCmsApi.UpdateBlogPostLanguages



Set new languages for multi-language blog posts.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCmsApi.CreateBatchBlogPosts



Create multiple blog posts in a single request.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCmsApi.UpdateBlogPostsBatch



Update a batch of blog posts in the CMS.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **update\_archived\_posts** (`boolean`, optional) Indicates whether to update deleted blog posts. Defaults to `false`. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCmsApi.RestoreBlogPostToDraft



Restore a previous blog post version to draft.

**Parameters**

-   **blog\_post\_id** (`string`, required) The unique identifier for the blog post to be restored to a draft version. This is the same as the blog post’s current ID in the HubSpot CMS.
-   **version\_to\_restore\_id** (`integer`, required) The ID of the blog post version to revert to the draft state.

## HubspotCmsApi.GetBlogPostDraft



Retrieve the full draft version of a blog post.

**Parameters**

-   **blog\_post\_id** (`string`, required) The ID of the blog post to retrieve the draft version.

## HubspotCmsApi.UpdateBlogPostDraft



Update specific fields of a blog post draft.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **blog\_post\_id** (`string`, optional) The ID of the blog post draft to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCmsApi.RetrievePreviousBlogVersion



Retrieve a previous version of a blog post.

**Parameters**

-   **blog\_post\_id** (`string`, required) The unique identifier for the blog post whose previous version is to be retrieved.
-   **version\_id** (`string`, required) The ID of the specific blog post version to retrieve.

## HubspotCmsApi.NewLanguageBlogVariation



Create a new language variation from an existing blog post.

**Parameters**

-   **blog\_post\_id** (`string`, required) The ID of the blog post you want to clone into a new language variation.
-   **target\_language** (`string`, optional) The language code for the target language of the new blog post variation (e.g., ‘fr’ for French).

## HubspotCmsApi.CloneBlogPost



Creates a copy of an existing blog post.

**Parameters**

-   **blog\_post\_id** (`string`, required) ID of the blog post to be cloned. This identifies the specific blog post you want to duplicate.
-   **cloned\_blog\_post\_name** (`string`, optional) The name for the newly cloned blog post. This is how the cloned post will be titled or identified.

## HubspotCmsApi.RetrieveBlogPosts



Retrieve all blog posts with optional paging and filtering.

**Parameters**

-   **created\_after** (`string`, optional) Return blog posts created after the specified time. Use ISO 8601 format for the date-time.
-   **created\_before** (`string`, optional) Only return blog posts created before the specified time in ISO 8601 format.
-   **filter\_by\_creation\_time** (`string`, optional) Return only blog posts created at the specified time in ISO 8601 format.
-   **filter\_by\_update\_after** (`string`, optional) Only return blog posts last updated after the specified timestamp. Use a format such as ISO 8601 for date and time.
-   **include\_archived\_posts** (`boolean`, optional) Specify true to include archived (deleted) blog posts in the results. Defaults to false.
-   **max\_results** (`integer`, optional) The maximum number of blog post results to return. Default is 20.
-   **pagination\_cursor\_token** (`string`, optional) The cursor token to retrieve the next set of blog post results. Obtain from `paging.next.after` in a previous response.
-   **return\_specific\_properties** (`string`, optional) Comma-separated list of specific fields to return for each blog post (e.g., ‘title,author,date’). Leave empty to return all fields.
-   **sort\_fields\_for\_results** (`array[string]`, optional) An array specifying fields to sort blog posts. Use fields like `createdAt`, `name`, `updatedAt`, `createdBy`, `updatedBy`.
-   **updated\_at\_exact** (`string`, optional) Return blog posts last updated at the exact specified time in ISO 8601 format.
-   **updated\_before\_date** (`string`, optional) Return blog posts last updated before this date. Use ISO 8601 format (e.g., ‘2023-09-04T15:00:00Z’).

## HubspotCmsApi.CreateBlogPost



Create a new blog post with specified content.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCmsApi.RestoreBlogPostVersion



Restore a blog post to a previous version.

**Parameters**

-   **blog\_post\_id** (`string`, required) The ID of the blog post to be restored to a previous version.
-   **version\_to\_restore\_id** (`string`, required) The unique identifier of the blog post version to which you want to revert.

## HubspotCmsApi.DetachBlogPostLanguageGroup



Detach a blog post from a multi-language group.

**Parameters**

-   **object\_id\_to\_detach\_from\_language\_group** (`string`, required) ID of the blog post to be removed from the multi-language group.

## HubspotCmsApi.PublishBlogPost



Publish a draft blog post to make it live.

**Parameters**

-   **blog\_post\_id** (`string`, required) The unique identifier of the blog post to be published live.

## HubspotCmsApi.DeleteBlogPost



Delete a blog post by its unique ID.

**Parameters**

-   **blog\_post\_ids\_to\_delete** (`array[string]`, required) An array of blog post IDs to delete. Each ID should be a string representing a unique blog post.

## HubspotCmsApi.ResetBlogPostDraft



Resets a blog post draft to the currently published content.

**Parameters**

-   **blog\_post\_id** (`string`, required) The unique ID of the blog post draft that you want to reset to the published version.

## HubspotCmsApi.AttachBlogPostToLanguageGroup



Attach a blog post to a multi-language group in HubSpot CMS.

**Parameters**

-   **designated\_language** (`string`, required) Specify the language code (e.g., ‘en’, ‘fr’, ‘es’) for the blog post to be added to the multi-language group.
-   **object\_id** (`string`, required) The ID of the blog post to attach to a multi-language group.
-   **primary\_language\_object\_id** (`string`, required) ID of the primary language object in the multi-language group.
-   **primary\_language** (`string`, optional) Primary language of the multi-language group. Specify in ISO language code format (e.g., ‘en’, ‘fr’).

## HubspotCmsApi.SetPrimaryLanguageBlogPost



Set the primary language of a blog post in a multi-language group.

**Parameters**

-   **blog\_post\_id** (`string`, required) The ID of the blog post to set as primary in its multi-language group.

## HubspotCmsApi.GetPreviousBlogPostVersions



Retrieve all previous versions of a blog post in HubSpot.

**Parameters**

-   **blog\_post\_id** (`string`, required) The unique ID of the blog post for retrieving its previous versions in HubSpot CMS.
-   **before\_timestamp** (`string`, optional) The timestamp to retrieve versions updated before this time.
-   **maximum\_results\_limit** (`integer`, optional) The maximum number of blog post versions to return. Default is 100.
-   **next\_page\_cursor** (`string`, optional) The cursor token to retrieve the next set of blog post versions, obtained from `paging.next.after`.

## HubspotCmsApi.RetrieveBlogPostById



Retrieve a blog post by its ID from HubSpot CMS.

**Parameters**

-   **blog\_post\_id** (`string`, required) The unique identifier of the blog post to retrieve from HubSpot CMS.
-   **include\_archived\_posts** (`boolean`, optional) If true, includes deleted (archived) blog posts in the retrieval. Defaults to false.
-   **return\_specific\_properties** (`string`, optional) Comma-separated list of specific properties to retrieve from the blog post.

## HubspotCmsApi.RemoveBlogPost



Delete a blog post by its ID.

**Parameters**

-   **blog\_post\_id** (`string`, required) The unique ID of the blog post to delete. This ID identifies which specific post will be removed.
-   **only\_archived\_results** (`boolean`, optional) Set to true to return only deleted (archived) blog posts.

## HubspotCmsApi.UpdateBlogPost



Update specific fields of a blog post by ID.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **blog\_post\_id** (`string`, optional) The unique identifier of the blog post to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **update\_archived\_posts** (`boolean`, optional) Set to true to update deleted (archived) blog posts. Defaults to false. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCmsApi.RetrieveIndexedDataByContentId



Retrieve all indexed data for a specific document by ID.

**Parameters**

-   **document\_id** (`string`, required) ID of the target document when searching for indexed properties in HubSpot CMS.
-   **document\_type** (`string`, optional) Specify the document type, such as `SITE_PAGE`, `BLOG_POST`, or `KNOWLEDGE_ARTICLE`.

## HubspotCmsApi.SearchWebsiteContent



Search for website content on a HubSpot account.

**Parameters**

-   **blog\_ids\_to\_search** (`array[integer]`, optional) List of blog IDs to search within. Allows searching multiple blogs by their IDs.
-   **boost\_recent\_time\_window** (`string`, optional) A relative time window to boost scores of documents published within this period. Use ‘10d’ for 10 days. Supported units: ms, s, m, h, d. Applicable to blog posts only.
-   **content\_language\_code** (`string`, optional) Specifies the language of content to be searched using a valid ISO 639-1 code (e.g. ‘es’ for Spanish).
-   **content\_type\_filters** (`array[string]`, optional) List of content types to search, such as SITE\_PAGE, LANDING\_PAGE, BLOG\_POST, LISTING\_PAGE, and KNOWLEDGE\_ARTICLE.
-   **hubdb\_query\_filter** (`string`, optional) Specify a HubDB query to filter search results in the specified table.
-   **hubdb\_table\_id** (`integer`, optional) Specifies a specific HubDB table to search. Only results from this table are returned. Can be combined with ‘hubdb\_query’ for further filtering.
-   **invert\_path\_prefix\_filter** (`boolean`, optional) Set to ‘false’ to apply the normal behavior of the pathPrefix filter; ‘true’ to invert it.
-   **maximum\_boost\_limit** (`number`, optional) Specifies the maximum amount a result will be boosted based on its view count. Defaults to 5.0.
-   **pagination\_offset** (`integer`, optional) Integer used to page through results. Use the offset from the previous request to access the next set of results.
-   **path\_prefixes** (`array[string]`, optional) An array of strings to filter search results by URL path prefix. Only returns results with paths starting with specified prefixes.
-   **popularity\_boost** (`number`, optional) Specify the boost factor for a result based on its view count. Defaults to 1.0.
-   **result\_length** (`string`, optional) Specifies whether search results should be detailed (LONG) or brief (SHORT).
-   **results\_limit** (`integer`, optional) The number of search results to return. Defaults to 10 and has a maximum of 100.
-   **search\_domains** (`array[string]`, optional) List of domains to match search results for. Multiple domains can be included by separating them with ’&’.
-   **search\_properties** (`array[string]`, optional) A list of properties to include in the search. Options: `title`, `description`, `html`. By default, all properties are searched.
-   **search\_term** (`string`, optional) The term to search for in the HubSpot website content.
-   **show\_autocomplete** (`boolean`, optional) Specify whether autocomplete results should be shown. Defaults to false.

## HubspotCmsApi.GetFileMetadata



Retrieve metadata for a file in a specified environment.

**Parameters**

-   **file\_environment** (`string`, required) Specify the environment of the file, either ‘draft’ or ‘published’.
-   **file\_path** (`string`, required) The file system location of the file to retrieve metadata for.
-   **include\_properties** (`string`, optional) Comma-separated list of additional properties to include in the metadata response, if applicable.

## HubspotCmsApi.DownloadFileFromHubspotCms



Download file content from HubSpot CMS by path and environment.

**Parameters**

-   **file\_environment** (`string`, required) Specify the environment of the file. Options are ‘draft’ or ‘published’.
-   **file\_system\_path** (`string`, required) The file system path to the file within HubSpot CMS to be downloaded.

## HubspotCmsApi.DeleteFileInCmsEnvironment



Deletes a file in a specified CMS environment.

**Parameters**

-   **file\_environment** (`string`, required) Specify the environment of the file to delete. Valid values are “draft” or “published”.
-   **file\_system\_location** (`string`, required) The file system location of the file to be deleted.

## HubspotCmsApi.ExtractZipFileAsync



Initiate asynchronous extraction of a zip file on HubSpot CMS.

**Parameters**

-   **zip\_file\_path** (`string`, required) The path to the zip file in the developer file system that needs extraction.

## HubspotCmsApi.CheckExtractionStatus



Retrieve the current status of a source-code extraction task.

**Parameters**

-   **extraction\_task\_id** (`integer`, required) The unique ID of the extraction task, obtained from the initial `extract/async` request. This ID is required to check the status of the extraction.

## HubspotCmsApi.UpdateBlogTags



Update multiple blog tags in HubSpot CMS.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **update\_deleted\_blog\_tags** (`boolean`, optional) Specifies whether to update deleted blog tags. Defaults to false. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCmsApi.UpdateBlogTagLanguages



Update languages for blog tags in a multi-language group.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCmsApi.DetachBlogTagFromLanguageGroup



Detach a Blog Tag from a multi-language group.

**Parameters**

-   **blog\_tag\_id** (`string`, required) ID of the blog tag to remove from a multi-language group in HubSpot CMS.

## HubspotCmsApi.CreateBlogTagsBatch



Create multiple blog tags in a single request.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCmsApi.ArchiveBlogTags



Archive multiple blog tags in HubSpot CMS.

**Parameters**

-   **blog\_tag\_identifiers** (`array[string]`, required) An array of strings representing the blog tag identifiers to be archived.

## HubspotCmsApi.SetBlogTagPrimaryLanguage



Set a blog tag as the primary language in a multi-language group.

**Parameters**

-   **primary\_language\_tag\_id** (`string`, required) ID of the blog tag to set as the primary language in a multi-language group.

## HubspotCmsApi.RetrieveBlogTags



Retrieve Blog Tag objects based on specified IDs.

**Parameters**

-   **blog\_tag\_ids** (`array[string]`, required) A list of strings representing the IDs of the Blog Tag objects to retrieve.
-   **include\_deleted\_tags** (`boolean`, optional) Boolean indicating if deleted Blog Tags should be included in the response. If true, deleted tags are returned.

## HubspotCmsApi.GetBlogTags



Retrieve a list of blog tags with paging and filtering options.

**Parameters**

-   **additional\_properties** (`string`, optional) Include additional fields in the response. Specify the properties you want to retrieve.
-   **created\_after\_time** (`string`, optional) Only return Blog Tags created after the specified time. Provide the time in ISO 8601 format.
-   **filter\_by\_creation\_time** (`string`, optional) Filter blog tags to return only those created at the specified exact time. Use ISO 8601 format for the date-time.
-   **filter\_tags\_created\_before** (`string`, optional) Only return blog tags created before the specified date and time in UTC, formatted as an ISO 8601 string.
-   **include\_archived\_tags** (`boolean`, optional) Specify whether to return deleted blog tags. Defaults to false.
-   **last\_updated\_before** (`string`, optional) Return blog tags updated before this date and time (in ISO 8601 format).
-   **maximum\_results\_to\_return** (`integer`, optional) Specify the maximum number of blog tags to return. Default is 100.
-   **pagination\_cursor\_token** (`string`, optional) The token to retrieve the next set of results from a paginated response. Obtain this from the `paging.next.after` property in the previous response.
-   **sort\_fields\_for\_results** (`array[string]`, optional) Fields to sort results by. Options: `name`, `createdAt`, `updatedAt`, `createdBy`, `updatedBy`. Default is `createdAt`.
-   **updated\_after** (`string`, optional) Return Blog Tags last updated after the specified date and time. Provide in ISO 8601 format, e.g., ‘2023-10-21T15:30:00Z’.
-   **updated\_at\_exact** (`string`, optional) Return blog tags last updated at the specified exact time (ISO 8601 format).

## HubspotCmsApi.CreateBlogTag



Create a new blog tag in HubSpot CMS.

**Parameters**

-   **blog\_tag\_unique\_id** (`string`, required) The unique ID assigned to the Blog Tag.
-   **creation\_timestamp** (`string`, required) The timestamp (ISO8601 format) when this Blog Tag was created. Leave empty if not applicable.
-   **deletion\_timestamp** (`string`, required) The ISO8601 timestamp marking when the blog tag was deleted.
-   **language\_code** (`string`, required) The explicit ISO 639 language code for the tag, such as ‘en’ for English or ‘es’ for Spanish.
-   **primary\_tag\_translation\_id** (`integer`, required) Specify the ID of the primary tag that this tag was translated from.
-   **tag\_name** (`string`, required) The name for the new blog tag to be created in HubSpot CMS.
-   **updated\_timestamp** (`string`, required) The timestamp (ISO8601 format) when the Blog Tag was last updated.

## HubspotCmsApi.AttachTagToLanguageGroup



Attach a blog tag to a multi-language group.

**Parameters**

-   **designated\_language** (`string`, required) Specify the language of the blog tag to add to a multi-language group. Use a language code like ‘en’ for English.
-   **object\_id\_for\_multilanguage\_group** (`string`, required) ID of the blog tag to add to the multi-language group.
-   **primary\_language\_object\_id** (`string`, required) ID of the primary language object in the multi-language group.
-   **primary\_language** (`string`, optional) Specifies the primary language of the multi-language group.

## HubspotCmsApi.RetrieveBlogTagById



Retrieve blog tag details using its ID.

**Parameters**

-   **blog\_tag\_id** (`string`, required) The unique identifier for the Blog Tag to be retrieved.
-   **include\_archived\_blog\_tags** (`boolean`, optional) Specify whether to include archived blog tags in the response. Defaults to `false`.
-   **property\_name** (`string`, optional) Specify a property of the blog tag to retrieve. Leave blank to get all details.

## HubspotCmsApi.DeleteBlogTag



Delete a specified Blog Tag in HubSpot CMS.

**Parameters**

-   **blog\_tag\_id** (`string`, required) The unique identifier for the Blog Tag to be deleted.
-   **return\_only\_archived\_results** (`boolean`, optional) Set to true to return only blog tags that have been archived.

## HubspotCmsApi.UpdateBlogTag



Update specific fields of a blog tag by its ID.

**Parameters**

-   **blog\_tag\_id** (`string`, required) The unique identifier for the blog tag to be updated.
-   **blog\_tag\_unique\_id** (`string`, required) The unique ID of the Blog Tag to be updated.
-   **created\_timestamp** (`string`, required) The timestamp (ISO8601 format) when the blog tag was created. This field is optional and can be used if the creation time needs to be updated.
-   **deleted\_timestamp** (`string`, required) The ISO8601 timestamp indicating when the blog tag was deleted.
-   **language** (`string`, required) The ISO 639 language code for the tag. Select from the available options.
-   **last\_updated\_timestamp** (`string`, required) The ISO8601 timestamp when the blog tag was last updated.
-   **primary\_tag\_translated\_from\_id** (`integer`, required) ID of the primary tag from which this tag was translated.
-   **tag\_name** (`string`, required) The new name for the blog tag to be updated. This is a required field when changing the tag’s name.
-   **update\_deleted\_blog\_tags** (`boolean`, optional) Set to `true` to update deleted Blog Tags. Defaults to `false`.

## HubspotCmsApi.CreateBlogTagLanguageVariation



Create a new language variation from an existing blog tag.

**Parameters**

-   **blog\_tag\_id** (`string`, required) ID of the existing blog tag to be cloned for creating a language variation.
-   **new\_blog\_tag\_name** (`string`, required) The name for the newly cloned blog tag language variation.
-   **primary\_blog\_tag\_language** (`string`, optional) Specify the language code of the primary blog tag to be cloned, such as ‘en’, ‘fr’, etc.
-   **target\_language\_for\_blog\_tag\_variation** (`string`, optional) Specifies the target language for the new blog tag variant.

## HubspotCmsApi.FetchUrlRedirects



Retrieve all URL redirects with optional filters.

**Parameters**

-   **created\_after\_date** (`string`, optional) Return redirects created after this date (format: YYYY-MM-DD).
-   **created\_at** (`string`, optional) Return redirects created exactly on this date. Format: YYYY-MM-DD.
-   **filter\_by\_exact\_update\_date** (`string`, optional) Return redirects last updated on this exact date. Use a valid date format (e.g., YYYY-MM-DD).
-   **filter\_created\_before\_date** (`string`, optional) Return redirects created before this date. Expected format: YYYY-MM-DD.
-   **filter\_updated\_after** (`string`, optional) Only include redirects updated after this specified date (ISO 8601 format).
-   **paging\_cursor\_token** (`string`, optional) Token for the last read resource to fetch additional results.
-   **results\_per\_page\_limit** (`integer`, optional) Maximum number of URL redirects to return per page. Use to control pagination.
-   **return\_archived\_only** (`boolean`, optional) Set to true to return only archived URL redirects, false to exclude them.
-   **sort\_criteria** (`array[string]`, optional) Specify fields to sort the URL redirects by. Can include multiple fields such as ‘createdAt’ or ‘updatedAt’.
-   **updated\_before\_date** (`string`, optional) Only return redirects last updated before this date (in YYYY-MM-DD format).

## HubspotCmsApi.CreateUrlRedirect



Creates and configures a new URL redirect in HubSpot CMS.

**Parameters**

-   **redirect\_destination\_url** (`string`, required) The target URL to which the redirect will point. This should be a valid and complete URL.
-   **redirect\_style** (`integer`, required) Integer indicating the style of the redirect. Defines the behavior and type of the redirect, such as permanent (301) or temporary (302).
-   **route\_prefix** (`string`, required) Defines the prefix for the URL route to be redirected. Provide the specific path without the domain, e.g., ‘/example-path’.
-   **apply\_only\_after\_not\_found** (`boolean`, optional) Applies the redirect only after a 404 Not Found response if true.
-   **enable\_pattern\_matching** (`boolean`, optional) Set to true to enable URL pattern matching for the redirect. False matches exact URLs only.
-   **enable\_protocol\_agnostic** (`boolean`, optional) Set to true to ignore the protocol (HTTP/HTTPS) when matching URLs. Enables protocol-agnostic redirects.
-   **ignore\_trailing\_slash** (`boolean`, optional) Set to true to ignore trailing slashes, allowing flexibility in URL matches.
-   **match\_full\_url** (`boolean`, optional) Set to true to match the entire URL exactly. False applies partial matching.
-   **match\_query\_string** (`boolean`, optional) Indicates whether the redirect should match the query string. Set to true to match, false to ignore.
-   **redirect\_precedence** (`integer`, optional) An integer indicating the priority of the redirect if multiple rules match. Higher numbers take precedence.

## HubspotCmsApi.GetUrlRedirectDetailsById



Retrieve details of a URL redirect by ID.

**Parameters**

-   **url\_redirect\_id** (`string`, required) The ID of the target URL redirect to fetch details for.

## HubspotCmsApi.DeleteUrlRedirect



Deletes an existing URL redirect in HubSpot CMS.

**Parameters**

-   **url\_redirect\_id** (`string`, required) The unique identifier of the URL redirect to be deleted within the HubSpot CMS.

## HubspotCmsApi.UpdateUrlRedirectSettings



Update settings for an existing URL redirect in HubSpot CMS.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **url\_redirect\_id** (`string`, optional) The unique identifier for the URL redirect to be updated. This ID specifies which redirect’s settings will be modified. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## Reference

Below is a reference of enumerations used by some of the tools in the HubspotCmsApi MCP Server:

### ToolMode

-   **GET\_REQUEST\_SCHEMA**: `get_request_schema`
-   **EXECUTE**: `execute`

## Auth

The HubspotCmsApi MCP Server uses the Auth Provider with id `arcade-hubspot` to connect to users’ HubspotCmsApi accounts. In order to use the MCP Server, you will need to configure the `arcade-hubspot` auth provider.

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_hubspot_cms_api ``` Learn more](/guides/deployment-hosting.md)

Last updated on February 7, 2026

[HubspotAutomationApi](/en/resources/integrations/sales/hubspot-automation-api.md)
[HubspotConversationsApi](/en/resources/integrations/sales/hubspot-conversations-api.md)
