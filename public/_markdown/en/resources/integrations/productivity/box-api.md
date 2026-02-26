---
title: "BoxApi"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Productivity & Docs](/en/resources/integrations/productivity/asana.md)
BoxApi

# BoxApi

Arcade Unoptimized

**Description:** Tools that enable LLMs to interact directly with the box API.

**Author:** Arcade

**Auth:** User authorization

[![PyPI Version](https://img.shields.io/pypi/v/arcade_box_api)](https://pypi.org/project/arcade_box_api/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_box_api)](https://pypi.org/project/arcade_box_api/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_box_api)](https://pypi.org/project/arcade_box_api/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_box_api)](https://pypi.org/project/arcade_box_api/)

BoxApi is a [Unoptimized MCP Server](/guides/create-tools/improve/types-of-tools.md#unoptimized-tools)
: each tool mirrors one HTTP endpoint and offers LLMs a way to interact with the low-level API.



Differently from [Optimized MCP Servers](/guides/create-tools/improve/types-of-tools.md#optimized-tools)
, Unoptimized tools are heavily influenced by the original API design, which is not usually optimized for LLM usage. For this reason, we recommend thoroughly evaluating the tools with your Agents or chatbots before using it in production. [Read more](/guides/create-tools/improve/types-of-tools.md) about Optimized vs Unoptimized tools.

The BoxApi MCP Server offers a comprehensive set of tools for managing Box content, metadata, security, collaboration, enterprise settings, Doc Gen/Sign workflows, and integrations. Key capabilities include:

-   Manage files, folders, trashed items, versions, thumbnails, downloads, and upload sessions (including chunked uploads).
-   Inspect and modify file/folder metadata, classifications, watermarks, skills metadata, and app associations.
-   Manage collaborations, comments, tasks, collections, shared links, web links, and related permissions.
-   Create, list, inspect, and remove Box Doc Gen templates, template tags, and Doc Gen jobs (including batch and template-specific job listings).
-   Manage Box Sign requests and templates (retrieve, resend, cancel, list).
-   Admin and enterprise ops: list/manage users, groups, Hubs, archives, storage policies, retention and legal hold policies, device pins, terms of service, safe-collaboration domains, shield information barriers, and enterprise events.
-   Manage metadata templates, cascade policies, and metadata instances (retrieve, find, delete).
-   Manage webhooks, integrations (Slack, Teams), AI agents, and related mappings.
-   Retrieve audit/operational data: recent items, events, collections, and activity for troubleshooting or reporting.
-   Permanently delete or restore content: delete files/folders, remove from trash, delete archives, templates, policies, and other irreversible removals.

Use these tools to build agents or apps that automate Box content lifecycle, security/compliance workflows, collaboration administration, document generation/signing, and enterprise integrations.

## Available Tools

Tool Name

Description

BoxApi.ListBoxDocTemplates

Retrieve Box Doc Gen templates the user collaborates on.

BoxApi.UnmarkBoxDocTemplate

Unmarks a file as a Box Doc Gen template.

BoxApi.GetBoxDocgenTemplateDetails

Fetch details of a specific Box Doc Gen template.

BoxApi.ListBoxDocgenTemplateTags

Retrieve tags from a specific Box Doc Gen template.

BoxApi.GetBoxDocgenJobDetails

Retrieve details of a Box Doc Gen job using its ID.

BoxApi.ListBoxDocgenJobs

Retrieves a list of Box Doc Gen jobs for a user.

BoxApi.ListTemplateJobs

Retrieve jobs associated with a specific document template.

BoxApi.ListDocgenBatchJobs

Retrieve details of Box Doc Gen jobs in a batch.

BoxApi.GetBoxHubs

Retrieve all Box Hubs for the user.

BoxApi.GetEnterpriseBoxHubs

Retrieve Box Hubs for an enterprise.

BoxApi.RetrieveBoxHubDetails

Fetch Box Hub details using its ID.

BoxApi.DeleteBoxHub

Delete a specific Box Hub using its ID.

BoxApi.RetrieveBoxHubCollaborations

Retrieves collaborations for a Box Hub.

BoxApi.GetBoxHubCollaborationDetails

Retrieve details for a Box Hub collaboration by ID.

BoxApi.DeleteBoxHubCollaboration

Remove a specific Box Hub collaboration.

BoxApi.RetrieveBoxHubItems

Fetch all items from a specified Box Hub.

BoxApi.GetEnterpriseShieldLists

Retrieve all shield lists for the enterprise.

BoxApi.RetrieveShieldListById

Retrieve details of a specific shield list by ID.

BoxApi.DeleteShieldListById

Delete a shield list using its ID.

BoxApi.RetrieveEnterpriseArchives

Retrieve archives for an enterprise from Box.

BoxApi.DeleteArchive

Permanently delete an archive by ID.

BoxApi.RetrieveFileDetails

Fetch details about a specific file using its ID.

BoxApi.DeleteFileFromBox

Delete a file from Box or move it to trash.

BoxApi.GetFileAppAssociations

Retrieve app items associated with a specific file.

BoxApi.DownloadFileContent

Retrieve the binary content of a specified file.

BoxApi.GetUploadSessionDetails

Retrieve details of a specific file upload session.

BoxApi.AbortUploadSession

Abort an upload session and discard all uploaded data.

BoxApi.GetUploadedChunksList

Retrieve the list of uploaded chunks for an upload session.

BoxApi.RetrieveFileThumbnail

Retrieves a thumbnail image of a specified file.

BoxApi.GetFileCollaborations

Retrieve collaborations for a specific file.

BoxApi.GetFileComments

Retrieve comments for a specific file.

BoxApi.GetFileTasks

Retrieve all tasks associated with a specific file.

BoxApi.RetrieveTrashedFile

Retrieve a file that has been moved to the trash.

BoxApi.PermanentlyDeleteFileFromTrash

Permanently delete a file that is in the trash.

BoxApi.GetFileVersionHistory

Retrieve a list of past versions for a file.

BoxApi.RetrieveFileVersion

Retrieve a specific version of a file for premium Box users.

BoxApi.DeleteBoxFileVersion

Delete a specific file version from Box.

BoxApi.RetrieveFileMetadata

Retrieve all metadata for a specific file.

BoxApi.GetFileClassificationMetadata

Retrieve classification metadata for a specific file.

BoxApi.RemoveFileClassification

Remove classifications from a specified file.

BoxApi.RetrieveFileTemplateMetadata

Retrieve metadata for a specific file template.

BoxApi.DeleteFileMetadata

Deletes metadata from a specified file.

BoxApi.GetBoxSkillsMetadata

Retrieve Box Skills metadata cards for a given file.

BoxApi.RemoveBoxSkillsMetadata

Remove Box Skills cards metadata from a file.

BoxApi.GetFileWatermark

Retrieve the watermark for a file by its ID.

BoxApi.RemoveFileWatermark

Removes the watermark from a specified file.

BoxApi.RetrieveFileRequestInfo

Retrieve information about a specific file request.

BoxApi.DeleteFileRequest

Permanently delete a specific file request.

BoxApi.GetFolderDetails

Retrieve details for a folder and its first 100 entries.

BoxApi.DeleteFolder

Delete a folder permanently or move it to the trash.

BoxApi.GetFolderAppItemAssociations

Retrieve app items associated with a specific folder.

BoxApi.RetrieveFolderItems

Retrieve items in a specified folder, including files and links.

BoxApi.GetFolderCollaborations

Retrieve pending and active collaborations for a folder.

BoxApi.RetrieveTrashedFolder

Retrieve a specific folder from the trash.

BoxApi.PermanentlyDeleteFolderInTrash

Permanently delete a folder from the trash.

BoxApi.RetrieveFolderMetadata

Retrieve all metadata for a specific folder.

BoxApi.GetFolderClassification

Retrieve classification metadata for a specific folder.

BoxApi.RemoveFolderClassifications

Remove classifications from a specified folder.

BoxApi.GetFolderMetadata

Retrieve metadata template instance applied to a folder.

BoxApi.DeleteFolderMetadata

Deletes metadata from a specified folder.

BoxApi.RetrieveTrashedItems

Retrieve files and folders from the trash.

BoxApi.GetFolderWatermark

Retrieve the watermark for a specific folder.

BoxApi.RemoveWatermarkFromFolder

Removes the watermark from a specified folder.

BoxApi.RetrieveFolderLockDetails

Retrieve lock details for a specific folder.

BoxApi.DeleteFolderLock

Delete a specific folder lock if you're the owner or co-owner.

BoxApi.FindMetadataTemplate

Retrieve metadata template details by ID.

BoxApi.GetClassificationMetadata

Retrieve classification metadata template for the enterprise.

BoxApi.RetrieveMetadataTemplate

Retrieve a metadata template by scope and template key.

BoxApi.DeleteMetadataTemplate

Permanently delete a metadata template and its instances.

BoxApi.FetchMetadataTemplateById

Retrieve a metadata template using its ID.

BoxApi.RetrieveGlobalMetadataTemplates

Fetches global metadata templates from Box.

BoxApi.RetrieveEnterpriseMetadataTemplates

Retrieve metadata templates for the user's enterprise.

BoxApi.GetMetadataCascadePolicies

Retrieve metadata cascade policies for a folder.

BoxApi.RetrieveMetadataCascadePolicy

Retrieve a specific metadata cascade policy for a folder.

BoxApi.DeleteMetadataCascadePolicy

Deletes a metadata cascade policy by ID.

BoxApi.FetchCommentDetails

Retrieve detailed information about a specific comment.

BoxApi.DeleteComment

Permanently deletes a specific comment by ID.

BoxApi.GetCollaborationDetails

Retrieve details of a specific collaboration.

BoxApi.DeleteCollaboration

Deletes a specified collaboration by ID.

BoxApi.GetPendingCollaborationInvites

Retrieve user's pending collaboration invites from Box.

BoxApi.RetrieveTaskInformation

Fetch details of a specific task by ID.

BoxApi.DeleteTaskFromFile

Removes a specific task from a file.

BoxApi.ListTaskAssignments

Retrieve all assignments for a specified task.

BoxApi.RetrieveTaskAssignmentInfo

Retrieve detailed information about a task assignment.

BoxApi.DeleteTaskAssignment

Delete a specific task assignment.

BoxApi.RetrieveSharedFileInfo

Retrieve file information from a shared link.

BoxApi.GetSharedLinkInfo

Retrieve shared link details for a specific file.

BoxApi.GetSharedFolderInfo

Retrieve folder details using a shared link.

BoxApi.GetFolderSharedLinkInfo

Retrieve information for a shared link on a folder.

BoxApi.RetrieveWebLinkInfo

Retrieve information about a specific web link.

BoxApi.DeleteWebLink

Delete a specified web link based on its ID.

BoxApi.RetrieveTrashedWebLink

Retrieves a web link that has been moved to the trash.

BoxApi.PermanentlyDeleteTrashedWebLink

Permanently delete a trashed web link.

BoxApi.RetrieveSharedWebLink

Retrieve information about a shared web link using a shared link.

BoxApi.GetSharedWebLinkInfo

Retrieve shared link information for a web link.

BoxApi.GetSharedAppItem

Retrieve details of an app item using a shared link.

BoxApi.ListEnterpriseUsers

Retrieve all users in the enterprise.

BoxApi.GetAuthenticatedUserInfo

Retrieve details of the currently authenticated user.

BoxApi.GetUserInformation

Retrieve detailed user information in the enterprise.

BoxApi.DeleteUserAccount

Delete a user account from the system.

BoxApi.GetUserAvatar

Retrieve the image of a user's avatar.

BoxApi.RemoveUserAvatar

Removes a user's existing avatar.

BoxApi.GetUserEmailAliases

Retrieve all email aliases for a specific user.

BoxApi.RemoveUserEmailAlias

Removes an email alias from a user account.

BoxApi.GetUserGroupMemberships

Retrieve all groups a user belongs to.

BoxApi.CheckUserInviteStatus

Retrieve the status of a specific user invite.

BoxApi.RetrieveEnterpriseGroups

Retrieve all groups for an enterprise with admin rights.

BoxApi.RetrieveGroupInfo

Retrieve detailed information about a specified group.

BoxApi.DeleteGroup

Permanently delete a group with admin permissions.

BoxApi.RetrieveGroupMemberships

Fetch members of a specified group.

BoxApi.GetGroupCollaborations

Retrieve collaborations for a specified group.

BoxApi.RetrieveGroupMembership

Fetch details of a specific group membership.

BoxApi.DeleteGroupMembership

Delete a specific group membership by ID.

BoxApi.ListDefinedWebhooks

Retrieve all webhooks for your application.

BoxApi.GetSpecificWebhook

Retrieve details of a specific webhook by ID.

BoxApi.DeleteWebhook

Delete a specified webhook.

BoxApi.GetBoxEvents

Retrieve up to a year of past events for a user or enterprise.

BoxApi.RetrieveUserCollections

Retrieve collections for a user, including favorites.

BoxApi.RetrieveCollectionContents

Fetch files and folders from a specific collection.

BoxApi.RetrieveCollectionById

Retrieve details of a collection using its ID.

BoxApi.GetRecentItemsInfo

Fetch recent items accessed by a user in Box.

BoxApi.GetEnterpriseRetentionPolicies

Retrieve all retention policies for an enterprise.

BoxApi.GetRetentionPolicy

Retrieve details of a specified retention policy.

BoxApi.DeleteRetentionPolicy

Permanently deletes a specified retention policy.

BoxApi.GetRetentionPolicyAssignments

Retrieve retention policy assignments by policy ID.

BoxApi.RetrieveRetentionPolicyAssignment

Fetch details of a retention policy assignment by ID.

BoxApi.RemoveRetentionPolicyAssignment

Removes a retention policy assignment from content.

BoxApi.ListFilesUnderRetentionPolicy

Retrieve files under a retention policy assignment.

BoxApi.GetFileVersionsUnderRetention

Fetch file versions under a specific retention policy assignment.

BoxApi.RetrieveLegalHoldPolicies

Retrieve a list of enterprise legal hold policies.

BoxApi.RetrieveLegalHoldPolicy

Retrieve information about a specific legal hold policy.

BoxApi.DeleteLegalHoldPolicy

Initiate deletion of a legal hold policy.

BoxApi.GetLegalHoldPolicyAssignments

Retrieve items assigned to a legal hold policy.

BoxApi.RetrieveLegalHoldPolicyAssignment

Retrieve details of a specific legal hold policy assignment.

BoxApi.RemoveLegalHoldFromItem

Initiate removal of a legal hold from an item.

BoxApi.GetFilesOnLegalHold

Retrieve files currently on legal hold for a specific assignment.

BoxApi.GetFileVersionRetentions

Retrieve file version retentions for an enterprise.

BoxApi.GetFileVersionsOnLegalHold

Retrieve previous file versions under a legal hold assignment.

BoxApi.GetFileVersionRetentionInfo

Retrieve details of a file version retention.

BoxApi.RetrieveFileVersionLegalHolds

Get details of legal holds on a specific file version.

BoxApi.GetLegacyFileVersionLegalHolds

Retrieve file versions on legal hold in the legacy system.

BoxApi.GetShieldInformationBarrier

Retrieve shield information barrier by ID.

BoxApi.GetShieldInformationBarriers

Retrieve shield information barriers for the enterprise.

BoxApi.GetShieldInformationBarrierReports

Retrieve shield information barrier reports.

BoxApi.FetchShieldBarrierReport

Retrieve details of a shield information barrier report by ID.

BoxApi.GetShieldInfoBarrierSegment

Retrieve shield information barrier segment by ID.

BoxApi.DeleteShieldInformationBarrierSegment

Delete a shield information barrier segment by ID.

BoxApi.GetShieldInformationBarrierSegments

Retrieve shield information barrier segment details.

BoxApi.GetShieldInfoBarrierMember

Retrieve details of a shield information barrier segment member.

BoxApi.RemoveShieldBarrierMember

Delete a shield information barrier segment member by ID.

BoxApi.ListShieldBarrierSegmentMembers

Retrieve members of shield information barrier segments.

BoxApi.GetShieldInformationBarrierSegmentInfo

Retrieve shield barrier segment restriction by ID.

BoxApi.DeleteShieldBarrierSegmentRestriction

Delete a specific shield barrier segment restriction by ID.

BoxApi.GetShieldInformationRestrictions

Retrieve restrictions for a shield information barrier segment.

BoxApi.GetDevicePinInfo

Retrieve details of a specific device pin.

BoxApi.DeleteDevicePin

Delete a specific device pin from the system.

BoxApi.GetEnterpriseDevicePins

Retrieve all device pins for a specific enterprise.

BoxApi.GetEnterpriseTermsOfService

Retrieve the enterprise's terms of service.

BoxApi.GetSpecificTermsOfService

Fetches details of a specific terms of service.

BoxApi.GetUserTosStatus

Retrieve user acceptance status for terms of service.

BoxApi.GetSafeCollaborationDomains

Retrieve domains approved for safe collaboration.

BoxApi.FetchSafeCollaborationDomain

Retrieve a designated safe collaboration domain within an enterprise.

BoxApi.RemoveSafeCollaborationDomain

Remove a domain from the safe collaboration list.

BoxApi.GetCollaborationWhitelistExemptUsers

Retrieve users exempt from collaboration restrictions.

BoxApi.GetCollaborationWhitelistExemptUser

Retrieve user exempt from collaboration restrictions.

BoxApi.RemoveCollaborationWhitelistExemption

Remove a user's exemption from domain restrictions in collaborations.

BoxApi.FetchEnterpriseStoragePolicies

Fetches all storage policies in the enterprise.

BoxApi.FetchStoragePolicy

Retrieve details of a specific storage policy.

BoxApi.FetchStoragePolicyAssignments

Retrieve storage policy assignments for enterprise or user.

BoxApi.FetchStoragePolicyAssignment

Retrieve a storage policy assignment by ID.

BoxApi.DeleteStoragePolicyAssignment

Delete a user's storage policy assignment.

BoxApi.DownloadZipContent

Download the contents of a zip archive.

BoxApi.CheckZipDownloadStatus

Check the status of a zip archive download.

BoxApi.CancelSignRequest

Cancel an existing sign request to stop further processing.

BoxApi.ResendSignatureRequestEmail

Resend signature request email to outstanding signers.

BoxApi.RetrieveSignRequestById

Retrieve details of a specific sign request by ID.

BoxApi.FetchSignatureRequests

Retrieve signature requests created by a user.

BoxApi.GetManualStartWorkflows

Retrieve workflows with manual start triggers for a folder.

BoxApi.GetBoxSignTemplates

Retrieve Box Sign templates created by a user.

BoxApi.FetchBoxSignTemplateDetails

Retrieve details of a specific Box Sign template.

BoxApi.ListSlackIntegrationMappings

Retrieve Slack integration mappings for a Box enterprise.

BoxApi.DeleteSlackIntegrationMapping

Deletes a Slack integration mapping for Box content.

BoxApi.GetTeamsIntegrationMappings

Retrieve Teams integration mappings for an enterprise.

BoxApi.DeleteTeamsIntegrationMapping

Deletes a Teams integration mapping in Box.

BoxApi.GetAiAgentDefaultConfig

Retrieve the default configuration for the AI agent.

BoxApi.ListAiAgents

Retrieve a list of AI agents with specified parameters.

BoxApi.GetAiAgentDetails

Retrieve details of a specific AI agent by ID.

BoxApi.DeleteAiAgent

Removes an AI agent by its ID.

If you need to perform an action that’s not listed here, you can [get in touch with us](mailto:contact@arcade.dev) to request a new tool, or [create your own tools](/guides/create-tools/tool-basics/build-mcp-server.md).

## BoxApi.ListBoxDocTemplates



Retrieve Box Doc Gen templates the user collaborates on.

**Parameters**

-   **pagination\_start\_marker** (`string`, optional) Defines the starting position for pagination of results. Requires `usemarker` to be set to `true`.
-   **max\_items\_per\_page** (`integer`, optional) Specify the maximum number of Box Doc Gen templates to return in a single page.

## BoxApi.UnmarkBoxDocTemplate



Unmarks a file as a Box Doc Gen template.

**Parameters**

-   **file\_id\_to\_unmark** (`string`, required) The ID of the file that will no longer be marked as a Box Doc Gen template.

## BoxApi.GetBoxDocgenTemplateDetails



Fetch details of a specific Box Doc Gen template.

**Parameters**

-   **box\_docgen\_template\_id** (`string`, required) The ID of the Box Doc Gen template to retrieve details for.

## BoxApi.ListBoxDocgenTemplateTags



Retrieve tags from a specific Box Doc Gen template.

**Parameters**

-   **template\_id** (`string`, required) The unique identifier for the Box Doc Gen template whose tags you want to retrieve.
-   **template\_version\_id** (`string`, optional) The ID of the specific version of the template to retrieve tags from.
-   **pagination\_start\_marker** (`string`, optional) Defines the starting position for results when using marker-based pagination. Must have `usemarker` set to `true`.
-   **maximum\_items\_per\_page** (`integer`, optional) Specifies the maximum number of tags to return per page from the Box Doc Gen template.

## BoxApi.GetBoxDocgenJobDetails



Retrieve details of a Box Doc Gen job using its ID.

**Parameters**

-   **box\_doc\_gen\_job\_id** (`string`, required) The unique identifier for the Box Doc Gen job you want details for.

## BoxApi.ListBoxDocgenJobs



Retrieves a list of Box Doc Gen jobs for a user.

**Parameters**

-   **pagination\_marker** (`string`, optional) Starting position marker for paginating results. Requires ‘usemarker’ set to true.
-   **maximum\_items\_per\_page** (`integer`, optional) The maximum number of items to return per page. Specify an integer value to set the limit for pagination.

## BoxApi.ListTemplateJobs



Retrieve jobs associated with a specific document template.

**Parameters**

-   **template\_identifier** (`string`, required) The unique ID of the template for which jobs need to be retrieved.
-   **pagination\_start\_marker** (`string`, optional) Defines the starting position for pagination. Requires ‘usemarker’ to be set to true.
-   **max\_items\_per\_page** (`integer`, optional) The maximum number of items to return per page from the list of jobs.

## BoxApi.ListDocgenBatchJobs



Retrieve details of Box Doc Gen jobs in a batch.

**Parameters**

-   **box\_doc\_gen\_batch\_id** (`string`, required) The identifier for a Box Doc Gen batch used to retrieve specific job details.
-   **pagination\_marker** (`string`, optional) The position marker to start returning results. Use for marker-based pagination. Requires `usemarker` set to `true`.
-   **maximum\_items\_per\_page** (`integer`, optional) The maximum number of items to return per page when retrieving Box Doc Gen jobs.

## BoxApi.GetBoxHubs



Retrieve all Box Hubs for the user.

**Parameters**

-   **hub\_search\_query** (`string`, optional) The string to search for specific Box Hubs. Use keywords to refine search results.
-   **hub\_scope** (`string`, optional) Specifies which Box Hubs to retrieve. Options: `editable`, `view_only`, `all`. Default is `all`.
-   **sort\_results\_by** (`string`, optional) Field to sort Box Hubs by: `name`, `updated_at`, `last_accessed_at`, `view_count`, `relevance` (default: `relevance`).
-   **sort\_direction** (`string`, optional) Specify the sort order: ‘ASC’ for ascending or ‘DESC’ for descending.
-   **pagination\_start\_marker** (`string`, optional) Defines the position marker to begin returning results, used for marker-based pagination.
-   **max\_items\_per\_page** (`integer`, optional) The maximum number of Box Hubs to return per page. Use for pagination control.

## BoxApi.GetEnterpriseBoxHubs



Retrieve Box Hubs for an enterprise.

**Parameters**

-   **search\_query\_for\_box\_hubs** (`string`, optional) The search query string to find specific Box Hubs within an enterprise.
-   **sort\_results\_by** (`string`, optional) The field to sort the Box Hubs by. Options: ‘name’, ‘updated\_at’, ‘last\_accessed\_at’, ‘view\_count’, ‘relevance’. Default is ‘relevance’.
-   **sort\_direction** (`string`, optional) The direction to sort results: alphabetical ascending (‘ASC’) or descending (‘DESC’).
-   **pagination\_marker** (`string`, optional) The starting position marker for returning results, used in marker-based pagination.
-   **max\_items\_per\_page** (`integer`, optional) The maximum number of Box Hubs to return per page. This controls the page size for the result set.

## BoxApi.RetrieveBoxHubDetails



Fetch Box Hub details using its ID.

**Parameters**

-   **box\_hub\_identifier** (`string`, required) The unique ID representing a Box Hub, found in the URL when visiting the hub.

## BoxApi.DeleteBoxHub



Delete a specific Box Hub using its ID.

**Parameters**

-   **box\_hub\_unique\_id** (`string`, required) The unique identifier for a Box Hub, obtainable from the hub’s URL.

## BoxApi.RetrieveBoxHubCollaborations



Retrieves collaborations for a Box Hub.

**Parameters**

-   **hub\_identifier** (`string`, required) The unique string identifier for a Box Hub, found in the Hub’s URL.
-   **pagination\_marker** (`string`, optional) The position marker to begin returning results, used for marker-based pagination. Ensure `usemarker` is set to `true`.
-   **max\_items\_per\_page** (`integer`, optional) The maximum number of collaboration items to return per page. Determines the page size for results.

## BoxApi.GetBoxHubCollaborationDetails



Retrieve details for a Box Hub collaboration by ID.

**Parameters**

-   **hub\_collaboration\_id** (`string`, required) The unique identifier for the specific Box Hub collaboration you want to retrieve details for.

## BoxApi.DeleteBoxHubCollaboration



Remove a specific Box Hub collaboration.

**Parameters**

-   **hub\_collaboration\_identifier** (`string`, required) The unique identifier for the Box Hub collaboration to be deleted.

## BoxApi.RetrieveBoxHubItems



Fetch all items from a specified Box Hub.

**Parameters**

-   **hub\_identifier** (`string`, required) The unique ID representing a Box Hub, retrievable from the hub’s URL.
-   **pagination\_start\_marker** (`string`, optional) Defines the starting position for results when using marker-based pagination. Requires `usemarker` to be `true`.
-   **maximum\_items\_per\_page** (`integer`, optional) The maximum number of items to return per page from a Box Hub. Specify an integer value to limit the number of items in each result set.

## BoxApi.GetEnterpriseShieldLists



Retrieve all shield lists for the enterprise.

**Parameters**

This tool does not take any parameters.

## BoxApi.RetrieveShieldListById



Retrieve details of a specific shield list by ID.

**Parameters**

-   **shield\_list\_identifier** (`string`, required) The unique identifier for a shield list. Retrieve this ID by calling the endpoint that lists all shield lists for your enterprise.

## BoxApi.DeleteShieldListById



Delete a shield list using its ID.

**Parameters**

-   **shield\_list\_id** (`string`, required) The unique identifier for the shield list to be deleted. Obtainable from the response of fetching all shield lists for the enterprise.

## BoxApi.RetrieveEnterpriseArchives



Retrieve archives for an enterprise from Box.

**Parameters**

-   **max\_items\_per\_page** (`integer`, optional) The maximum number of archive items to return per page when retrieving data.
-   **pagination\_start\_marker** (`string`, optional) Defines the position marker to start returning results for pagination in archive retrieval.

## BoxApi.DeleteArchive



Permanently delete an archive by ID.

**Parameters**

-   **archive\_id** (`string`, required) The unique identifier of the archive to be permanently deleted. This ID is required for the deletion process.

## BoxApi.RetrieveFileDetails



Fetch details about a specific file using its ID.

**Parameters**

-   **file\_identifier** (`string`, required) The unique identifier for a file, found in the URL of the file in the web application. Example: from `https://*.app.box.com/files/123`, use `123`.
-   **included\_file\_attributes** (`array[string]`, optional) Specify attributes to include in the response as a list of strings. Additional attributes replace standard fields unless explicitly included. Metadata can be queried using ‘metadata’ with scope and key.
-   **etag\_conditional\_retrieval** (`string`, optional) Provide the last observed etag value to retrieve the file only if it has changed. Returns a 304 status if unchanged.
-   **shared\_link\_with\_optional\_password** (`string`, optional) Provide the shared link URL for the item. Use the format ‘shared\_link=\[link\]’ or ‘shared\_link=\[link\]&shared\_link\_password=\[password\]’ if a password is required.
-   **file\_representations\_request** (`string`, optional) Request specific representations of a file using hints, e.g., ‘\[jpg?dimensions=32x32\]\[jpg?dimensions=64x64\]’.

## BoxApi.DeleteFileFromBox



Delete a file from Box or move it to trash.

**Parameters**

-   **file\_identifier** (`string`, required) The unique ID representing a file in Box. Found in the URL when viewing a file: https://\*.app.box.com/files/file\_id.
-   **ensure\_no\_recent\_changes\_etag** (`string`, optional) Pass the file’s last observed etag value to ensure it hasn’t changed before deletion. If the etag has changed, the operation will fail.

## BoxApi.GetFileAppAssociations



Retrieve app items associated with a specific file.

**Parameters**

-   **file\_identifier** (`string`, required) The unique ID representing a file in Box. Can be obtained from the file URL.
-   **items\_per\_page\_limit** (`integer`, optional) The maximum number of items to return per page.
-   **pagination\_marker** (`string`, optional) Defines the position marker for pagination. Required if using marker-based pagination. Ensure `usemarker` is set to `true`.
-   **filter\_by\_application\_type** (`string`, optional) Specify the application type to filter and return only app items related to it.

## BoxApi.DownloadFileContent



Retrieve the binary content of a specified file.

**Parameters**

-   **file\_identifier** (`string`, required) The unique identifier for the file to download. Obtainable from the file’s URL in the web application.
-   **file\_version\_to\_download** (`string`, optional) The specific version of the file to retrieve in binary format.
-   **optional\_access\_token** (`string`, optional) A string for an optional access token to pre-authenticate the file download request. Ensure it’s scoped for read access only.
-   **download\_byte\_range** (`string`, optional) Specify the byte range for the content to download in the format `bytes={start_byte}-{end_byte}` to define which section of the file to retrieve.
-   **shared\_link\_with\_optional\_password** (`string`, optional) Provide the shared link URL of the item. Include a password if required, using the format `shared_link=[link]` or `shared_link=[link]&shared_link_password=[password]`. This allows access to files not explicitly shared with the user.

## BoxApi.GetUploadSessionDetails



Retrieve details of a specific file upload session.

**Parameters**

-   **upload\_session\_id** (`string`, required) The ID of the upload session to retrieve information for.

## BoxApi.AbortUploadSession



Abort an upload session and discard all uploaded data.

**Parameters**

-   **upload\_session\_id** (`string`, required) The unique identifier of the upload session to be aborted. This ID is required to specify which upload session should be cancelled and its data discarded.

## BoxApi.GetUploadedChunksList



Retrieve the list of uploaded chunks for an upload session.

**Parameters**

-   **upload\_session\_identifier** (`string`, required) The unique identifier for the upload session. Use this to retrieve the list of uploaded chunks.
-   **response\_offset** (`integer`, optional) The starting position of the response item list. Must not exceed 10000, as higher values will result in a 400 error.
-   **max\_items\_per\_page** (`integer`, optional) The maximum number of uploaded chunks to return per page in the response.

## BoxApi.RetrieveFileThumbnail



Retrieves a thumbnail image of a specified file.

**Parameters**

-   **file\_identifier** (`string`, required) The unique identifier for the file. You can find this ID in the file URL on the Box web application.
-   **thumbnail\_file\_format** (`string`, required) Specify the file format for the thumbnail, either ‘png’ or ‘jpg’.
-   **minimum\_thumbnail\_height** (`integer`, optional) Specify the minimum height for the thumbnail image required. Accepts an integer value.
-   **minimum\_thumbnail\_width** (`integer`, optional) The minimum width of the thumbnail to be retrieved. Specify an integer value.
-   **maximum\_thumbnail\_height** (`integer`, optional) The maximum height of the thumbnail in pixels. Valid values depend on the specified format. For .png, maximum is 256; for .jpg, maximum is 320.
-   **maximum\_thumbnail\_width** (`integer`, optional) The maximum width for the thumbnail image in pixels. Define the width according to the available sizes in .png or .jpg formats.

## BoxApi.GetFileCollaborations



Retrieve collaborations for a specific file.

**Parameters**

-   **file\_identifier** (`string`, required) The unique file ID needed to retrieve collaborations. Obtainable from the file’s URL in the web app.
-   **requested\_fields** (`array[string]`, optional) A list of specific attributes to include in the response. These fields are not typically included and override the standard response fields.
-   **max\_items\_per\_page** (`integer`, optional) The maximum number of collaboration items to return per page in the response. Useful for paginating results.
-   **pagination\_start\_marker** (`string`, optional) Specifies the position marker for starting result pagination. Requires ‘usemarker’ set to ‘true’.

## BoxApi.GetFileComments



Retrieve comments for a specific file.

**Parameters**

-   **file\_identifier** (`string`, required) The unique file ID, found in the Box web app URL, e.g., for `https://*.app.box.com/files/123`, the ID is `123`.
-   **include\_fields\_in\_response** (`array[string]`, optional) List of attributes to include in the response. Only specified fields and mini representation are returned.
-   **maximum\_items\_per\_page** (`integer`, optional) The maximum number of comments to return per page for the specified file.
-   **response\_start\_offset** (`integer`, optional) The starting point for comments retrieval. Must not exceed 10000, or a 400 error occurs.

## BoxApi.GetFileTasks



Retrieve all tasks associated with a specific file.

**Parameters**

-   **file\_identifier** (`string`, required) The unique identifier for a file, found in the file URL on the Box web application.

## BoxApi.RetrieveTrashedFile



Retrieve a file that has been moved to the trash.

**Parameters**

-   **file\_identifier** (`string`, required) The unique identifier of a file moved to trash, obtained from the file’s URL in the web application.
-   **include\_attributes\_in\_response** (`array[string]`, optional) A list of attributes to include in the response. Only specified fields and mini representation fields are returned.

## BoxApi.PermanentlyDeleteFileFromTrash



Permanently delete a file that is in the trash.

**Parameters**

-   **file\_identifier** (`string`, required) The unique identifier of a file to be permanently deleted from the trash. Obtainable from the file URL.

## BoxApi.GetFileVersionHistory



Retrieve a list of past versions for a file.

**Parameters**

-   **file\_identifier** (`string`, required) The unique ID representing a file in Box. Obtainable from the file’s URL, e.g., `https://*.app.box.com/files/123` where `123` is the ID.
-   **requested\_fields** (`array[string]`, optional) A list of specific file attributes to include in the response. Only these fields, plus the mini representation, will be returned.
-   **max\_items\_per\_page** (`integer`, optional) Maximum number of file versions to return per page.
-   **response\_start\_offset** (`integer`, optional) The item offset to begin the response from. Must not exceed 10000; otherwise, a 400 error will be returned.

## BoxApi.RetrieveFileVersion



Retrieve a specific version of a file for premium Box users.

**Parameters**

-   **unique\_file\_identifier** (`string`, required) The unique identifier for a file on Box. Obtainable from the file’s URL (e.g., ‘123’ in ‘https://\*.app.box.com/files/123’).
-   **file\_version\_identifier** (`string`, required) The unique ID representing the specific version of a file to retrieve.
-   **include\_additional\_attributes** (`array[string]`, optional) List of additional attributes to include in the response. Specify as an array of strings. Only fields specified will be returned, along with the mini representation.

## BoxApi.DeleteBoxFileVersion



Delete a specific file version from Box.

**Parameters**

-   **file\_identifier** (`string`, required) The unique identifier for a file in Box. Obtain it from the file’s URL in the web app. Example: ‘123’ for URL ‘https://\*.app.box.com/files/123’.
-   **file\_version\_id** (`string`, required) The unique identifier of the file version to be deleted. Obtainable from the Box platform.
-   **if\_match\_etag\_value** (`string`, optional) Pass the item’s last observed etag value to ensure it hasn’t changed before deletion. Use this to prevent conflicts.

## BoxApi.RetrieveFileMetadata



Retrieve all metadata for a specific file.

**Parameters**

-   **file\_identifier** (`string`, required) The unique identifier of a file, obtained from the URL in the Box web application. For example, from `https://*.app.box.com/files/123`, the `file_id` is `123`.

## BoxApi.GetFileClassificationMetadata



Retrieve classification metadata for a specific file.

**Parameters**

-   **file\_identifier** (`string`, required) The unique identifier for a file, obtained from the file’s URL in the Box web application. For example, in `https://*.app.box.com/files/123`, the `file_id` is `123`.

## BoxApi.RemoveFileClassification



Remove classifications from a specified file.

**Parameters**

-   **file\_identifier** (`string`, required) The unique identifier for the file whose classification is to be removed. Obtainable from the Box file URL.

## BoxApi.RetrieveFileTemplateMetadata



Retrieve metadata for a specific file template.

**Parameters**

-   **file\_identifier** (`string`, required) The unique identifier for a file, obtainable from the file URL in the Box web application.
-   **metadata\_scope** (`string`, required) Defines the scope of the metadata template to be retrieved. Options are ‘global’ or ‘enterprise’.
-   **metadata\_template\_name** (`string`, required) The name of the metadata template to retrieve for the specified file.

## BoxApi.DeleteFileMetadata



Deletes metadata from a specified file.

**Parameters**

-   **file\_identifier** (`string`, required) The unique identifier for a file, retrievable from the file URL, e.g., `https://*.app.box.com/files/123` where `123` is the ID.
-   **metadata\_scope** (`string`, required) Specifies the scope of the metadata template. Choose ‘global’ or ‘enterprise’.
-   **metadata\_template\_name** (`string`, required) The name of the metadata template to be deleted from the file.

## BoxApi.GetBoxSkillsMetadata



Retrieve Box Skills metadata cards for a given file.

**Parameters**

-   **file\_id** (`string`, required) The unique identifier for the file in Box. Obtainable from the file’s URL in the Box web app.

## BoxApi.RemoveBoxSkillsMetadata



Remove Box Skills cards metadata from a file.

**Parameters**

-   **file\_identifier** (`string`, required) The unique identifier for a file, which can be extracted from the URL in the web application. For example, in `https://*.app.box.com/files/123`, the `file_id` is `123`.

## BoxApi.GetFileWatermark



Retrieve the watermark for a file by its ID.

**Parameters**

-   **file\_identifier** (`string`, required) The unique identifier of a file. Obtainable from the URL when viewing a file on the web application.

## BoxApi.RemoveFileWatermark



Removes the watermark from a specified file.

**Parameters**

-   **file\_identifier** (`string`, required) The unique ID for the file, found in its Box URL. For example, from `https://*.app.box.com/files/123`, `file_id` is `123`.

## BoxApi.RetrieveFileRequestInfo



Retrieve information about a specific file request.

**Parameters**

-   **file\_request\_unique\_id** (`string`, required) The unique identifier for a file request, obtainable from the URL in the file request builder.

## BoxApi.DeleteFileRequest



Permanently delete a specific file request.

**Parameters**

-   **file\_request\_identifier** (`string`, required) The unique ID representing a file request, extracted from the URL in the file request builder.

## BoxApi.GetFolderDetails



Retrieve details for a folder and its first 100 entries.

**Parameters**

-   **folder\_unique\_identifier** (`string`, required) The unique identifier for a folder. Obtainable from the folder’s URL, e.g., `123` in `https://*.app.box.com/folder/123`. The root folder’s ID is `0`.
-   **requested\_fields** (`array[string]`, optional) A list of attributes to include in the response. Use for fields not normally returned in standard responses or for querying file metadata.
-   **secondary\_sort\_attribute** (`string`, optional) Defines the second attribute by which folder items are sorted. Options include ‘id’, ‘name’, ‘date’, or ‘size’. Not supported for root folders.
-   **sort\_direction** (`string`, optional) The order to sort results: ‘ASC’ for ascending or ‘DESC’ for descending.
-   **response\_offset** (`integer`, optional) The zero-based index to start the response from. Values exceeding 10000 are rejected with a 400 error.
-   **max\_items\_per\_page** (`integer`, optional) The maximum number of items to return in a single page of results. Controls pagination by limiting the number of entries per response.
-   **ensure\_item\_has\_changed** (`string`, optional) Supply the item’s last known etag value to receive a response only if the item has changed. If unchanged, it returns a 304 status.
-   **shared\_link\_credentials** (`string`, optional) The URL and optional password for the shared link to access items. Format as `shared_link=[link]` or `shared_link=[link]&shared_link_password=[password]`.

## BoxApi.DeleteFolder



Delete a folder permanently or move it to the trash.

**Parameters**

-   **folder\_identifier** (`string`, required) The unique identifier representing a folder. Determine it by copying the ID from the folder’s URL in the Box web application. The root folder ID is ‘0’.
-   **ensure\_unchanged\_etag** (`string`, optional) Last observed `etag` value to ensure the folder hasn’t changed before deletion. If changed, the operation fails with a 412 error.
-   **delete\_recursively** (`boolean`, optional) Set to true to delete a non-empty folder and all its content recursively.

## BoxApi.GetFolderAppItemAssociations



Retrieve app items associated with a specific folder.

**Parameters**

-   **folder\_identifier** (`string`, required) The unique identifier representing a folder. Obtainable from the folder’s URL. The root folder ID is ‘0’.
-   **max\_items\_per\_page** (`integer`, optional) The maximum number of items to return per page when retrieving app items associated with a folder.
-   **pagination\_start\_marker** (`string`, optional) Position marker to begin returning results. Used for marker-based pagination. Requires `usemarker` set to `true`.
-   **filter\_by\_application\_type** (`string`, optional) Return only app items for the specified application type.

## BoxApi.RetrieveFolderItems



Retrieve items in a specified folder, including files and links.

**Parameters**

-   **folder\_identifier** (`string`, required) Unique ID of a folder. Obtainable from the folder’s URL. Root folder ID is always ‘0’.
-   **included\_attributes** (`array[string]`, optional) List of attributes to include in the response. Specify fields normally omitted in standard responses or query metadata using the format ‘metadata.scope.key’.
-   **pagination\_start\_marker** (`string`, optional) Specifies the starting point for marker-based pagination. Requires ‘usemarker’ to be set to true.
-   **starting\_item\_offset** (`integer`, optional) Specifies the starting point for the items to be returned. Must be an integer and cannot exceed 10000, or a 400 response is returned.
-   **max\_items\_per\_page** (`integer`, optional) The maximum number of items to return per page. Specify an integer value.
-   **sort\_attribute** (`string`, optional) Specifies the secondary attribute for sorting folder items. Options: ‘id’, ‘name’, ‘date’, or ‘size’. Not supported for marker-based pagination on root folders.
-   **sort\_direction** (`string`, optional) The direction to sort results: alphabetical ascending (ASC) or descending (DESC).
-   **shared\_link\_credentials** (`string`, optional) Provide the shared link URL and optional password to access items not explicitly shared with a user. Use ‘shared\_link=\[link\]’ or ‘shared\_link=\[link\]&shared\_link\_password=\[password\]’.
-   **use\_marker\_based\_pagination** (`boolean`, optional) Set to true to enable marker-based pagination, which returns a marker for fetching the next page. Only one pagination method can be active at a time.

## BoxApi.GetFolderCollaborations



Retrieve pending and active collaborations for a folder.

**Parameters**

-   **folder\_identifier** (`string`, required) The unique identifier for a folder, obtainable from the folder’s URL in the Box web application. For example, in the URL `https://*.app.box.com/folder/123`, the `folder_id` is `123`.
-   **included\_attributes** (`array[string]`, optional) List of attributes to include in the response, overriding standard fields unless specified.
-   **max\_items\_per\_page** (`integer`, optional) The maximum number of items to return per page.
-   **start\_position\_marker** (`string`, optional) The position marker to begin returning results for marker-based pagination. Requires usemarker set to true.

## BoxApi.RetrieveTrashedFolder



Retrieve a specific folder from the trash.

**Parameters**

-   **folder\_identifier** (`string`, required) The unique identifier for a folder. Obtainable from the folder’s URL in the web application. ‘0’ represents the root folder.
-   **include\_attributes\_in\_response** (`array[string]`, optional) A list of attribute names to include in the response, specifying non-standard fields for retrieval.

## BoxApi.PermanentlyDeleteFolderInTrash



Permanently delete a folder from the trash.

**Parameters**

-   **folder\_identifier** (`string`, required) The unique identifier representing a folder to be permanently deleted from the trash. Obtainable from folder URL or use ‘0’ for root folder.

## BoxApi.RetrieveFolderMetadata



Retrieve all metadata for a specific folder.

**Parameters**

-   **folder\_identifier** (`string`, required) The unique identifier for a folder, excluding the root folder with ID `0`. Obtainable from the URL when viewing a folder in Box.

## BoxApi.GetFolderClassification



Retrieve classification metadata for a specific folder.

**Parameters**

-   **folder\_identifier** (`string`, required) The unique identifier for a folder, retrievable from the folder’s URL or as `0` for the root folder.

## BoxApi.RemoveFolderClassifications



Remove classifications from a specified folder.

**Parameters**

-   **folder\_identifier** (`string`, required) The unique identifier representing a folder. Obtain this by visiting the folder URL (e.g., `https://*.app.box.com/folder/123`). The root folder ID is `0`.

## BoxApi.GetFolderMetadata



Retrieve metadata template instance applied to a folder.

**Parameters**

-   **folder\_identifier** (`string`, required) The unique ID representing a folder. Obtainable from the folder’s URL, but not the root folder (ID `0`).
-   **metadata\_scope** (`string`, required) The scope of the metadata template. It can be either ‘global’ or ‘enterprise’.
-   **metadata\_template\_name** (`string`, required) The name of the metadata template to retrieve from the folder. Excludes root folder (ID `0`).

## BoxApi.DeleteFolderMetadata



Deletes metadata from a specified folder.

**Parameters**

-   **folder\_identifier** (`string`, required) The unique identifier for a folder. Obtainable from the folder URL; use ‘0’ for the root folder.
-   **metadata\_template\_scope** (`string`, required) The scope of the metadata template. Choose either ‘global’ or ‘enterprise’.
-   **metadata\_template\_name** (`string`, required) The name of the metadata template to be deleted from the folder.

## BoxApi.RetrieveTrashedItems



Retrieve files and folders from the trash.

**Parameters**

-   **include\_attributes** (`array[string]`, optional) List of attributes to include in the response, such as non-default fields. Only these and mini representation fields will be returned.
-   **maximum\_items\_per\_page** (`integer`, optional) Specify the maximum number of items to return per page when retrieving trashed items. This value controls pagination to limit the items returned in a single request.
-   **pagination\_offset** (`integer`, optional) The index to start retrieving items from the trash. Must be less than or equal to 10000.
-   **pagination\_marker** (`string`, optional) Defines the position marker for marker-based pagination. Requires ‘use\_marker\_based\_pagination’ to be true.
-   **sort\_direction** (`string`, optional) The direction to sort results: ‘ASC’ for ascending or ‘DESC’ for descending alphabetical order.
-   **secondary\_sort\_attribute** (`string`, optional) Defines the second attribute by which items are sorted, such as ‘name’, ‘date’, or ‘size’. Unsupported with marker-based pagination.
-   **use\_marker\_based\_pagination** (`boolean`, optional) Set to true to use marker-based pagination instead of offset-based pagination, allowing retrieval of the next page with a ‘marker’ field.

## BoxApi.GetFolderWatermark



Retrieve the watermark for a specific folder.

**Parameters**

-   **folder\_identifier** (`string`, required) The unique ID representing a folder. It can be found in the URL when viewing the folder in the web app. The root folder ID is ‘0’.

## BoxApi.RemoveWatermarkFromFolder



Removes the watermark from a specified folder.

**Parameters**

-   **folder\_identifier** (`string`, required) The unique identifier for a folder. This ID can be found in the URL when visiting the folder in the Box web application. For instance, in `https://*.app.box.com/folder/123`, the `folder_id` is `123`. The root folder is always `0`.

## BoxApi.RetrieveFolderLockDetails



Retrieve lock details for a specific folder.

**Parameters**

-   **folder\_identifier** (`string`, required) The unique identifier for a folder. Obtainable by visiting the folder URL in the Box web app. The root folder is ID ‘0’.

## BoxApi.DeleteFolderLock



Delete a specific folder lock if you’re the owner or co-owner.

**Parameters**

-   **folder\_lock\_identifier** (`string`, required) The unique ID of the folder lock to be deleted. You must be the owner or co-owner of the folder.

## BoxApi.FindMetadataTemplate



Retrieve metadata template details by ID.

**Parameters**

-   **metadata\_instance\_id** (`string`, required) The ID of the metadata template instance to retrieve details for.
-   **pagination\_position\_marker** (`string`, optional) Defines the starting position for marker-based pagination results. Requires `usemarker` to be `true`.
-   **items\_per\_page\_limit** (`integer`, optional) Specify the maximum number of items to return per page for pagination purposes.

## BoxApi.GetClassificationMetadata



Retrieve classification metadata template for the enterprise.

**Parameters**

This tool does not take any parameters.

## BoxApi.RetrieveMetadataTemplate



Retrieve a metadata template by scope and template key.

**Parameters**

-   **metadata\_template\_scope** (`string`, required) Specifies the scope for the metadata template. Choose between ‘global’ or ‘enterprise’.
-   **metadata\_template\_name** (`string`, required) The name of the metadata template to retrieve its details.

## BoxApi.DeleteMetadataTemplate



Permanently delete a metadata template and its instances.

**Parameters**

-   **metadata\_template\_scope** (`string`, required) Specifies the scope of the metadata template. Allowed values are ‘global’ or ‘enterprise’.
-   **metadata\_template\_name** (`string`, required) The name of the metadata template to be permanently deleted.

## BoxApi.FetchMetadataTemplateById



Retrieve a metadata template using its ID.

**Parameters**

-   **template\_id** (`string`, required) The unique identifier for the metadata template to be retrieved. Provide a valid template ID.

## BoxApi.RetrieveGlobalMetadataTemplates



Fetches global metadata templates from Box.

**Parameters**

-   **pagination\_start\_marker** (`string`, optional) Specifies the position marker to begin returning results for paginated data.
-   **max\_items\_per\_page** (`integer`, optional) The maximum number of metadata templates to return per page from the Box global templates.

## BoxApi.RetrieveEnterpriseMetadataTemplates



Retrieve metadata templates for the user’s enterprise.

**Parameters**

-   **pagination\_start\_marker** (`string`, optional) Position marker to begin returning results, used with marker-based pagination. Requires `usemarker` to be `true`.
-   **maximum\_items\_per\_page** (`integer`, optional) The maximum number of items to return per page when retrieving metadata templates.

## BoxApi.GetMetadataCascadePolicies



Retrieve metadata cascade policies for a folder.

**Parameters**

-   **target\_folder\_id** (`string`, required) The ID of the folder to query for metadata cascade policies. The root folder with ID ‘0’ is not allowed.
-   **owner\_enterprise\_id** (`string`, optional) The ID of the enterprise to find metadata cascade policies for. Defaults to the current enterprise if not specified.
-   **pagination\_marker** (`string`, optional) Position marker for paginating results. Set `usemarker` to true to enable.
-   **response\_offset** (`integer`, optional) The offset at which to begin the response, must not exceed 10000.

## BoxApi.RetrieveMetadataCascadePolicy



Retrieve a specific metadata cascade policy for a folder.

**Parameters**

-   **metadata\_cascade\_policy\_id** (`string`, required) The unique identifier for the metadata cascade policy to retrieve.

## BoxApi.DeleteMetadataCascadePolicy



Deletes a metadata cascade policy by ID.

**Parameters**

-   **metadata\_cascade\_policy\_id** (`string`, required) The unique ID of the metadata cascade policy to be deleted. Ensure it is valid and exists.

## BoxApi.FetchCommentDetails



Retrieve detailed information about a specific comment.

**Parameters**

-   **comment\_id** (`string`, required) The unique identifier for the comment whose details are being fetched. This ID is required to retrieve the comment’s message, metadata, and creator information.
-   **include\_fields** (`array[string]`, optional) A list of attributes to include in the response. Only specified fields will be returned along with the mini representation.

## BoxApi.DeleteComment



Permanently deletes a specific comment by ID.

**Parameters**

-   **comment\_id** (`string`, required) The unique identifier of the comment you want to permanently delete.

## BoxApi.GetCollaborationDetails



Retrieve details of a specific collaboration.

**Parameters**

-   **collaboration\_id** (`string`, required) The unique identifier for the collaboration to retrieve details about.
-   **include\_fields** (`array[string]`, optional) List of specific attributes to include in the response, which are not typically returned. Specify explicitly to retrieve these fields.

## BoxApi.DeleteCollaboration



Deletes a specified collaboration by ID.

**Parameters**

-   **collaboration\_id\_to\_delete** (`string`, required) The unique identifier of the collaboration to be deleted. Provide this ID to remove the specified collaboration.

## BoxApi.GetPendingCollaborationInvites



Retrieve user’s pending collaboration invites from Box.

**Parameters**

-   **collaboration\_status** (`string`, required) Set to ‘pending’ to retrieve all pending collaboration invitations.
-   **include\_attributes** (`array[string]`, optional) List of attribute names to include in the response. This overrides default fields, returning only specified attributes.
-   **starting\_item\_offset** (`integer`, optional) Starting index for the response items. Cannot exceed 10000 to avoid errors.
-   **maximum\_items\_per\_page** (`integer`, optional) The maximum number of collaboration invites to return per page.

## BoxApi.RetrieveTaskInformation



Fetch details of a specific task by ID.

**Parameters**

-   **task\_id** (`string`, required) The unique identifier for the specific task to retrieve information about.

## BoxApi.DeleteTaskFromFile



Removes a specific task from a file.

**Parameters**

-   **task\_identifier** (`string`, required) The unique identifier for the task to be removed from the file.

## BoxApi.ListTaskAssignments



Retrieve all assignments for a specified task.

**Parameters**

-   **task\_id** (`string`, required) The unique identifier of the task for which assignments need to be retrieved. It must be provided as a string.

## BoxApi.RetrieveTaskAssignmentInfo



Retrieve detailed information about a task assignment.

**Parameters**

-   **task\_assignment\_id** (`string`, required) The unique identifier for the task assignment to retrieve its details.

## BoxApi.DeleteTaskAssignment



Delete a specific task assignment.

**Parameters**

-   **task\_assignment\_id** (`string`, required) The unique identifier of the task assignment to be deleted.

## BoxApi.RetrieveSharedFileInfo



Retrieve file information from a shared link.

**Parameters**

-   **shared\_link\_credentials** (`string`, required) A header string containing the shared link and optional password. Format: `shared_link=[link]&shared_link_password=[password]`.
-   **include\_attributes\_in\_response** (`array[string]`, optional) A list of attributes to include in the response, specifying non-standard fields and affecting returned data format.
-   **etag\_for\_change\_detection** (`string`, optional) Pass the last observed etag value to return the item only if it has changed.

## BoxApi.GetSharedLinkInfo



Retrieve shared link details for a specific file.

**Parameters**

-   **include\_shared\_link\_fields** (`string`, required) Specify if the `shared_link` fields should be explicitly returned for the file item.
-   **file\_identifier** (`string`, required) The unique identifier for a file, found in the URL when accessing a file in the web application (e.g., for the URL `https://*.app.box.com/files/123`, the `file_id` is `123`).

## BoxApi.GetSharedFolderInfo



Retrieve folder details using a shared link.

**Parameters**

-   **shared\_link\_header** (`string`, required) A string containing the shared link and optional password formatted as ‘shared\_link=\[link\]&shared\_link\_password=\[password\]’.
-   **include\_fields** (`array[string]`, optional) A list of specific attributes to include in the response. Only these fields will be returned unless explicitly specified otherwise.
-   **etag\_condition** (`string`, optional) Provide the last observed etag to receive the item only if it has changed. Useful for caching and reducing unnecessary data transfer.

## BoxApi.GetFolderSharedLinkInfo



Retrieve information for a shared link on a folder.

**Parameters**

-   **include\_shared\_link\_fields** (`string`, required) Specify if the shared\_link fields should be explicitly returned for this folder.
-   **folder\_identifier** (`string`, required) The unique ID of the folder to retrieve shared link info for. It can be found in the folder URL in Box or use ‘0’ for the root folder.

## BoxApi.RetrieveWebLinkInfo



Retrieve information about a specific web link.

**Parameters**

-   **web\_link\_id** (`string`, required) The unique identifier for the web link to retrieve information about.
-   **shared\_link\_access\_details** (`string`, optional) The URL and optional password for accessing the shared link, formatted as `shared_link=[link]` or `shared_link=[link]&shared_link_password=[password]`. Use this to access items not explicitly shared with a user.

## BoxApi.DeleteWebLink



Delete a specified web link based on its ID.

**Parameters**

-   **web\_link\_id** (`string`, required) The unique identifier for the web link to be deleted.

## BoxApi.RetrieveTrashedWebLink



Retrieves a web link that has been moved to the trash.

**Parameters**

-   **web\_link\_id** (`string`, required) The unique identifier of the web link to retrieve from the trash.
-   **include\_fields\_in\_response** (`array[string]`, optional) List of attributes to include in the response, overriding standard fields; only mini representation plus these fields will be returned.

## BoxApi.PermanentlyDeleteTrashedWebLink



Permanently delete a trashed web link.

**Parameters**

-   **web\_link\_identifier** (`string`, required) The unique identifier of the web link to be permanently deleted from the trash. This ID is required to specify which web link should be removed.

## BoxApi.RetrieveSharedWebLink



Retrieve information about a shared web link using a shared link.

**Parameters**

-   **shared\_link\_header** (`string`, required) A string containing the shared link and optional password in the format: ‘shared\_link=\[link\]&shared\_link\_password=\[password\]’.
-   **include\_attributes\_in\_response** (`array[string]`, optional) A list of attributes to include in the response. Only specified fields and fields for the mini representation will be returned.
-   **etag\_if\_updated\_only** (`string`, optional) Provide the last observed etag value to only return the web link if it has been updated. This helps avoid unnecessary data transfer if no changes have occurred.

## BoxApi.GetSharedWebLinkInfo



Retrieve shared link information for a web link.

**Parameters**

-   **request\_shared\_link\_fields** (`string`, required) Specify the shared link fields to be explicitly returned for the web link.
-   **web\_link\_identifier** (`string`, required) The ID of the web link for which to retrieve shared link information.

## BoxApi.GetSharedAppItem



Retrieve details of an app item using a shared link.

**Parameters**

-   **shared\_link\_information** (`string`, required) A string with the format `shared_link=[link]&shared_link_password=[password]`, containing the shared link and an optional password.

## BoxApi.ListEnterpriseUsers



Retrieve all users in the enterprise.

**Parameters**

-   **search\_term\_for\_user\_filtering** (`string`, optional) Limits results to users whose name or login begins with the specified term. Complete match required for external users.
-   **user\_type\_filter** (`string`, optional) Specify the type of users to include: ‘all’, ‘managed’, or ‘external’.
-   **filter\_by\_external\_app\_user\_id** (`string`, optional) Filter results to app users with the specified external app user ID. Used for retrieving users matching this ID.
-   **include\_additional\_fields** (`array[string]`, optional) Specify additional attributes for inclusion in the response. Only selected fields and mini representation fields will be returned.
-   **response\_offset** (`integer`, optional) The starting point for the response; queries exceeding 10000 will return a 400 error.
-   **max\_items\_per\_page** (`integer`, optional) The maximum number of user records to return per page.
-   **pagination\_start\_marker** (`string`, optional) Defines the position marker where results begin when using marker-based pagination. Requires `usemarker` set to `true`.
-   **use\_marker\_pagination** (`boolean`, optional) Set to true to use marker-based pagination. This enables a `marker` field in the response for pagination.

## BoxApi.GetAuthenticatedUserInfo



Retrieve details of the currently authenticated user.

**Parameters**

-   **requested\_user\_attributes** (`array[string]`, optional) List of user attributes to include in the response. Use to request non-standard fields, results in basic fields only unless specified.

## BoxApi.GetUserInformation



Retrieve detailed user information in the enterprise.

**Parameters**

-   **user\_identifier** (`string`, required) The unique identifier for the user whose information you want to retrieve.
-   **requested\_user\_fields** (`array[string]`, optional) An array of attributes to include in the response. Only specified fields are returned unless otherwise stated.

## BoxApi.DeleteUserAccount



Delete a user account from the system.

**Parameters**

-   **user\_id** (`string`, required) The unique identifier for the user to be deleted. Required for specifying which user account to delete.
-   **send\_deletion\_notification** (`boolean`, optional) Indicate whether the user should receive an email notification about the deletion. Set to true to send notification.
-   **force\_delete\_user** (`boolean`, optional) Set to true to delete the user and their files even if they still own content.

## BoxApi.GetUserAvatar



Retrieve the image of a user’s avatar.

**Parameters**

-   **user\_id** (`string`, required) The ID of the user whose avatar you want to retrieve.

## BoxApi.RemoveUserAvatar



Removes a user’s existing avatar.

**Parameters**

-   **user\_identifier** (`string`, required) The unique identifier of the user whose avatar is to be deleted. Ensure this ID is correct, as the operation cannot be reversed.

## BoxApi.GetUserEmailAliases



Retrieve all email aliases for a specific user.

**Parameters**

-   **user\_identifier** (`string`, required) The unique ID of the user to retrieve email aliases for, formatted as a string.

## BoxApi.RemoveUserEmailAlias



Removes an email alias from a user account.

**Parameters**

-   **user\_identifier** (`string`, required) The unique ID of the user whose email alias is to be removed.
-   **email\_alias\_id** (`string`, required) The unique identifier of the email alias to be removed. This is required to specify which alias to delete from the user account.

## BoxApi.GetUserGroupMemberships



Retrieve all groups a user belongs to.

**Parameters**

-   **user\_identifier** (`string`, required) The ID of the user to retrieve group memberships for.
-   **max\_items\_per\_page** (`integer`, optional) Maximum number of items to return per page. Set an integer value to limit the results displayed at once.
-   **response\_offset** (`integer`, optional) The starting point offset for the response items. Must be 10000 or less.

## BoxApi.CheckUserInviteStatus



Retrieve the status of a specific user invite.

**Parameters**

-   **invite\_id** (`string`, required) The unique identifier for the user invite you want to check. This ID is necessary to retrieve the invite’s status.
-   **included\_attributes** (`array[string]`, optional) A list of attributes to include in the response. Specify attributes not normally returned in a standard response. Only the mini representation fields are returned unless explicitly specified.

## BoxApi.RetrieveEnterpriseGroups



Retrieve all groups for an enterprise with admin rights.

**Parameters**

-   **group\_name\_starts\_with** (`string`, optional) Returns groups whose names start with this search term.
-   **included\_attributes** (`array[string]`, optional) List of specific attributes to include in the response. Defaults to mini representation if unspecified.
-   **max\_items\_per\_page** (`integer`, optional) The maximum number of groups to return per page.
-   **starting\_item\_offset** (`integer`, optional) The offset of the item at which to begin the response. Ensure the value does not exceed 10000 to avoid errors.

## BoxApi.RetrieveGroupInfo



Retrieve detailed information about a specified group.

**Parameters**

-   **group\_id** (`string`, required) The unique identifier of the group to retrieve information for. Ensure the user has the necessary permissions.
-   **include\_additional\_fields** (`array[string]`, optional) A list of attributes to include in the response. Only specified fields will be returned alongside default mini representation fields.

## BoxApi.DeleteGroup



Permanently delete a group with admin permissions.

**Parameters**

-   **group\_id** (`string`, required) The unique identifier of the group to be permanently deleted. Must be used by an admin.

## BoxApi.RetrieveGroupMemberships



Fetch members of a specified group.

**Parameters**

-   **group\_identifier** (`string`, required) The unique ID of the group to fetch its members. Only members or admins can access this.
-   **max\_items\_per\_page** (`integer`, optional) Specify the maximum number of members to retrieve per page.
-   **response\_offset** (`integer`, optional) The starting point for retrieving members. Must not exceed 10000 to avoid errors.

## BoxApi.GetGroupCollaborations



Retrieve collaborations for a specified group.

**Parameters**

-   **group\_id** (`string`, required) The unique identifier of the group whose collaborations you want to retrieve. This ID is required to specify the group.
-   **max\_items\_per\_page** (`integer`, optional) Specifies the maximum number of collaboration items to return per page. Accepts an integer value.
-   **response\_offset** (`integer`, optional) Starting point in the list of collaborations. Must be an integer not exceeding 10000 to avoid rejection.

## BoxApi.RetrieveGroupMembership



Fetch details of a specific group membership.

**Parameters**

-   **group\_membership\_id** (`string`, required) The unique identifier for the specific group membership to retrieve. Only admins or users with admin-level permissions can access this information.
-   **include\_fields\_list** (`array[string]`, optional) List of specific attributes to include in the response, overriding standard fields.

## BoxApi.DeleteGroupMembership



Delete a specific group membership by ID.

**Parameters**

-   **group\_membership\_id** (`string`, required) The unique identifier for the group membership to be deleted. Required for specifying which membership to remove.

## BoxApi.ListDefinedWebhooks



Retrieve all webhooks for your application.

**Parameters**

-   **pagination\_start\_marker** (`string`, optional) The position marker to start returning results from. Required for marker-based pagination with `usemarker` set to `true`.
-   **maximum\_items\_per\_page** (`integer`, optional) The maximum number of webhooks to return per page.

## BoxApi.GetSpecificWebhook



Retrieve details of a specific webhook by ID.

**Parameters**

-   **webhook\_id** (`string`, required) The unique identifier of the webhook to retrieve details for.

## BoxApi.DeleteWebhook



Delete a specified webhook.

**Parameters**

-   **webhook\_id** (`string`, required) The unique identifier of the webhook to be deleted. It must be a valid string.

## BoxApi.GetBoxEvents



Retrieve up to a year of past events for a user or enterprise.

**Parameters**

-   **event\_stream\_type** (`string`, optional) Specifies the category of events to retrieve. Options: ‘all’ for all user events, ‘changes’ for file updates, ‘sync’ for synced folders, ‘admin\_logs’ for full enterprise events (requires admin), and ‘admin\_logs\_streaming’ for live enterprise events (requires admin).
-   **event\_stream\_start\_position** (`string`, optional) Specifies where to start receiving events in the stream. Use ‘now’ for initialization or ‘0’ to retrieve all events.
-   **event\_limit** (`integer`, optional) The maximum number of events to retrieve. Fewer events may be returned if already available.
-   **event\_type\_filter** (`array[string]`, optional) List of event types to filter by. Only applicable for ‘admin\_logs’ or ‘admin\_logs\_streaming’ stream types.
-   **event\_start\_date** (`string`, optional) The start date and time for filtering events. Used only with ‘admin\_logs’ stream type.
-   **event\_time\_upper\_bound** (`string`, optional) The upper bound date and time for returning events, used only with ‘admin\_logs’ stream type. Ignored for other stream types.

## BoxApi.RetrieveUserCollections



Retrieve collections for a user, including favorites.

**Parameters**

-   **requested\_fields** (`array[string]`, optional) A list of attribute names to include in the response. Only specified fields will be returned along with the mini representation.
-   **pagination\_offset** (`integer`, optional) Offset of the item to start the response. Must be 10000 or less to avoid rejection with a 400 error.
-   **maximum\_items\_per\_page** (`integer`, optional) The maximum number of items to return per page when retrieving user collections.

## BoxApi.RetrieveCollectionContents



Fetch files and folders from a specific collection.

**Parameters**

-   **collection\_id** (`string`, required) The unique identifier for the collection whose contents are to be retrieved.
-   **attributes\_to\_include** (`array[string]`, optional) List of attributes to include in the response. Only the specified fields will be returned alongside the mini representation.
-   **response\_offset** (`integer`, optional) The starting position in the collection. Must not exceed 10000 to avoid errors.
-   **max\_items\_per\_page** (`integer`, optional) Specifies the maximum number of items to return per page when retrieving the collection contents. This controls pagination and helps manage large datasets.

## BoxApi.RetrieveCollectionById



Retrieve details of a collection using its ID.

**Parameters**

-   **collection\_identifier** (`string`, required) The unique ID of the collection to retrieve details for.

## BoxApi.GetRecentItemsInfo



Fetch recent items accessed by a user in Box.

**Parameters**

-   **include\_additional\_fields** (`array[string]`, optional) A list of attributes to include in the response, overriding the default fields.
-   **max\_items\_per\_page** (`integer`, optional) The maximum number of items to return per page when fetching recent items accessed by a user.
-   **pagination\_start\_marker** (`string`, optional) A position marker to begin returning results, used for marker-based pagination. Requires `usemarker=true`.

## BoxApi.GetEnterpriseRetentionPolicies



Retrieve all retention policies for an enterprise.

**Parameters**

-   **filter\_by\_policy\_name\_prefix** (`string`, optional) Filter results using a case-sensitive prefix for retention policy names.
-   **filter\_by\_retention\_policy\_type** (`string`, optional) Filter retention policies by type: ‘finite’ or ‘indefinite’.
-   **filter\_by\_creator\_user\_id** (`string`, optional) Filters the retention policies by the ID of the user who created them. Provide the user ID for specific filtering.
-   **include\_fields** (`array[string]`, optional) A list of attributes to include in the response, replacing standard fields unless specified.
-   **maximum\_items\_per\_page** (`integer`, optional) The maximum number of retention policies to return per page.
-   **pagination\_start\_marker** (`string`, optional) Defines the position marker to begin returning results for marker-based pagination.

## BoxApi.GetRetentionPolicy



Retrieve details of a specified retention policy.

**Parameters**

-   **retention\_policy\_id** (`string`, required) The ID of the retention policy to retrieve details for. This ID is essential for accessing the specific policy information.
-   **include\_attributes** (`array[string]`, optional) List of attributes to include in the response. Standard fields are omitted unless explicitly specified.

## BoxApi.DeleteRetentionPolicy



Permanently deletes a specified retention policy.

**Parameters**

-   **retention\_policy\_id** (`string`, required) The unique identifier of the retention policy to be permanently deleted.

## BoxApi.GetRetentionPolicyAssignments



Retrieve retention policy assignments by policy ID.

**Parameters**

-   **retention\_policy\_id** (`string`, required) The unique identifier of the retention policy to retrieve assignments for.
-   **assignment\_type** (`string`, optional) The type of retention policy assignment to retrieve, such as ‘folder’, ‘enterprise’, or ‘metadata\_template’.
-   **include\_fields\_in\_response** (`array[string]`, optional) A list of attribute names to include in the response. These specify additional fields to return beyond the standard response.
-   **pagination\_start\_marker** (`string`, optional) The position marker to begin returning results for marker-based pagination.
-   **max\_items\_per\_page** (`integer`, optional) The maximum number of items to return per page when retrieving retention policy assignments.

## BoxApi.RetrieveRetentionPolicyAssignment



Fetch details of a retention policy assignment by ID.

**Parameters**

-   **retention\_policy\_assignment\_id** (`string`, required) The ID of the specific retention policy assignment to retrieve details for.
-   **include\_fields\_in\_response** (`array[string]`, optional) A list of attributes to include in the response. If specified, standard fields are excluded unless explicitly mentioned.

## BoxApi.RemoveRetentionPolicyAssignment



Removes a retention policy assignment from content.

**Parameters**

-   **retention\_policy\_assignment\_id** (`string`, required) The unique identifier for the retention policy assignment to be removed.

## BoxApi.ListFilesUnderRetentionPolicy



Retrieve files under a retention policy assignment.

**Parameters**

-   **retention\_policy\_assignment\_id** (`string`, required) The ID of the retention policy assignment used to identify which retention policy’s files to retrieve.
-   **position\_marker** (`string`, optional) A string to define where to start returning results for pagination using marker-based pagination. Requires `usemarker` to be `true`.
-   **max\_items\_per\_page** (`integer`, optional) The maximum number of files to retrieve per page. Determines the page size for the results.

## BoxApi.GetFileVersionsUnderRetention



Fetch file versions under a specific retention policy assignment.

**Parameters**

-   **retention\_policy\_assignment\_id** (`string`, required) The ID of the retention policy assignment to retrieve file versions under retention.
-   **pagination\_start\_marker** (`string`, optional) Defines the position marker to start returning results. Requires `usemarker` to be `true` for marker-based pagination.
-   **max\_items\_per\_page** (`integer`, optional) Specifies the maximum number of file versions to return per page during retrieval.

## BoxApi.RetrieveLegalHoldPolicies



Retrieve a list of enterprise legal hold policies.

**Parameters**

-   **policy\_name\_prefix** (`string`, optional) Limits results to policies where names start with this term. It’s case-insensitive.
-   **response\_attributes** (`array[string]`, optional) A list of attributes to include in the response. Only the specified fields and mini representation fields will be returned.
-   **pagination\_marker** (`string`, optional) The position marker to start returning results, used for marker-based pagination. Requires `usemarker` to be `true`.
-   **maximum\_items\_per\_page** (`integer`, optional) The maximum number of items to return per page. This controls the number of legal hold policies retrieved in a single request.

## BoxApi.RetrieveLegalHoldPolicy



Retrieve information about a specific legal hold policy.

**Parameters**

-   **legal\_hold\_policy\_id** (`string`, required) The unique identifier for the specific legal hold policy to retrieve.

## BoxApi.DeleteLegalHoldPolicy



Initiate deletion of a legal hold policy.

**Parameters**

-   **legal\_hold\_policy\_id** (`string`, required) The ID of the legal hold policy to delete. This is necessary to identify and initiate the deletion of the specified policy.

## BoxApi.GetLegalHoldPolicyAssignments



Retrieve items assigned to a legal hold policy.

**Parameters**

-   **legal\_hold\_policy\_id** (`string`, required) The unique identifier for the legal hold policy to retrieve assignments for.
-   **filter\_by\_assignment\_type** (`string`, optional) Specify the type of item (e.g., file, folder, user, etc.) the policy was applied to. Choices: \[‘file’, ‘file\_version’, ‘folder’, ‘user’, ‘ownership’, ‘interactions’\].
-   **filter\_by\_item\_id** (`string`, optional) Filters results by the ID of the item the policy was applied to.
-   **pagination\_marker** (`string`, optional) Specifies the position to start retrieving results using marker-based pagination. Requires `usemarker` to be set to `true`.
-   **maximum\_items\_per\_page** (`integer`, optional) Set the maximum number of items to retrieve per page for optimal pagination control.
-   **response\_fields** (`array[string]`, optional) List of attributes to include in the response, overriding standard fields unless specified.

## BoxApi.RetrieveLegalHoldPolicyAssignment



Retrieve details of a specific legal hold policy assignment.

**Parameters**

-   **legal\_hold\_policy\_assignment\_id** (`string`, required) The unique identifier for the legal hold policy assignment to retrieve details about.

## BoxApi.RemoveLegalHoldFromItem



Initiate removal of a legal hold from an item.

**Parameters**

-   **legal\_hold\_policy\_assignment\_id** (`string`, required) The unique identifier for the legal hold policy assignment you wish to remove. This value is necessary to initiate the removal process.

## BoxApi.GetFilesOnLegalHold



Retrieve files currently on legal hold for a specific assignment.

**Parameters**

-   **legal\_hold\_policy\_assignment\_id** (`string`, required) The ID of the legal hold policy assignment to retrieve files currently on hold.
-   **pagination\_marker** (`string`, optional) Position marker for starting the result set when using marker-based pagination. Requires the ‘usemarker’ parameter to be true.
-   **maximum\_items\_per\_page** (`integer`, optional) The maximum number of items to return per page. Use this to control pagination size.
-   **included\_attributes** (`array[string]`, optional) A list of specific attributes to include in the response. Only these attributes will be returned unless others are explicitly specified. Use this to customize the response fields.

## BoxApi.GetFileVersionRetentions



Retrieve file version retentions for an enterprise.

**Parameters**

-   **filter\_by\_file\_id** (`string`, optional) Filters results to include only files with this specific file ID.
-   **filter\_by\_file\_version\_id** (`string`, optional) Filters results by file versions matching this ID.
-   **retention\_policy\_id** (`string`, optional) Filter results by the specific retention policy ID.
-   **filter\_by\_disposition\_action** (`string`, optional) Filter results based on the retention policy’s disposition action, such as ‘permanently\_delete’ or ‘remove\_retention’.
-   **filter\_by\_disposition\_before\_date** (`string`, optional) Provide a date to filter results by files that will have their disposition come into effect before this date. Format: YYYY-MM-DD.
-   **disposition\_effective\_after\_date** (`string`, optional) Filter results by files with disposition effective after this date. Use ISO 8601 format (e.g., ‘2023-10-01’).
-   **max\_items\_per\_page** (`integer`, optional) The maximum number of items to return per page.
-   **pagination\_start\_marker** (`string`, optional) Defines the starting point for paginated results using a position marker. Requires marker-based pagination to be enabled.

## BoxApi.GetFileVersionsOnLegalHold



Retrieve previous file versions under a legal hold assignment.

**Parameters**

-   **legal\_hold\_policy\_assignment\_id** (`string`, required) The ID of the legal hold policy assignment to retrieve previous file versions for.
-   **pagination\_start\_marker** (`string`, optional) Defines the position marker to start returning results for paginated data retrieval. Requires `usemarker` to be set to `true`.
-   **max\_items\_per\_page** (`integer`, optional) The maximum number of items to return per page when retrieving file versions.
-   **include\_additional\_fields\_in\_response** (`array[string]`, optional) List of attribute names to include in the response. Only specified fields and mini representation fields will be returned.

## BoxApi.GetFileVersionRetentionInfo



Retrieve details of a file version retention.

**Parameters**

-   **file\_version\_retention\_id** (`string`, required) The ID of the specific file version retention to retrieve information for. This is required to access retention details.

## BoxApi.RetrieveFileVersionLegalHolds



Get details of legal holds on a specific file version.

**Parameters**

-   **file\_version\_legal\_hold\_id** (`string`, required) The unique identifier of the file version legal hold to retrieve specific legal hold policy details.

## BoxApi.GetLegacyFileVersionLegalHolds



Retrieve file versions on legal hold in the legacy system.

**Parameters**

-   **legal\_hold\_policy\_id** (`string`, required) The ID of the legal hold policy for which file version legal holds need to be retrieved.
-   **pagination\_marker** (`string`, optional) A string that defines the starting point for marker-based pagination. Requires `usemarker` to be true.
-   **max\_items\_per\_page** (`integer`, optional) Specify the maximum number of items to return per page for the request.

## BoxApi.GetShieldInformationBarrier



Retrieve shield information barrier by ID.

**Parameters**

-   **shield\_information\_barrier\_id** (`string`, required) The unique identifier for the shield information barrier to be retrieved.

## BoxApi.GetShieldInformationBarriers



Retrieve shield information barriers for the enterprise.

**Parameters**

-   **pagination\_marker** (`string`, optional) Defines the starting point for paginated results using marker-based pagination.
-   **max\_items\_per\_page** (`integer`, optional) The maximum number of shield information barrier objects to return per page. This controls the pagination size.

## BoxApi.GetShieldInformationBarrierReports



Retrieve shield information barrier reports.

**Parameters**

-   **shield\_information\_barrier\_id** (`string`, required) The unique identifier for the shield information barrier whose reports need to be fetched.
-   **pagination\_marker** (`string`, optional) Position marker to start returning results for pagination. Requires ‘usemarker’ set to ‘true’.
-   **maximum\_items\_per\_page** (`integer`, optional) The maximum number of shield information barrier reports to return per page. This integer value controls the page size for result sets.

## BoxApi.FetchShieldBarrierReport



Retrieve details of a shield information barrier report by ID.

**Parameters**

-   **shield\_barrier\_report\_id** (`string`, required) The unique ID of the shield information barrier report to retrieve.

## BoxApi.GetShieldInfoBarrierSegment



Retrieve shield information barrier segment by ID.

**Parameters**

-   **barrier\_segment\_id** (`string`, required) The unique ID of the shield information barrier segment to be retrieved.

## BoxApi.DeleteShieldInformationBarrierSegment



Delete a shield information barrier segment by ID.

**Parameters**

-   **shield\_information\_barrier\_segment\_id** (`string`, required) The ID of the shield information barrier segment to delete. This should be a valid string representing the segment’s unique identifier.

## BoxApi.GetShieldInformationBarrierSegments



Retrieve shield information barrier segment details.

**Parameters**

-   **shield\_information\_barrier\_id** (`string`, required) The unique identifier for the shield information barrier that specifies the segment objects to retrieve.
-   **pagination\_position\_marker** (`string`, optional) Defines the position marker to start returning results from, used for marker-based pagination. Requires usemarker to be true.
-   **maximum\_items\_per\_page** (`integer`, optional) The maximum number of shield information barrier segment items to return in a single request. Ideal for controlling page size during pagination.

## BoxApi.GetShieldInfoBarrierMember



Retrieve details of a shield information barrier segment member.

**Parameters**

-   **member\_id** (`string`, required) The ID of the shield information barrier segment member to retrieve details for.

## BoxApi.RemoveShieldBarrierMember



Delete a shield information barrier segment member by ID.

**Parameters**

-   **member\_id\_for\_deletion** (`string`, required) The ID of the shield information barrier segment member to be deleted.

## BoxApi.ListShieldBarrierSegmentMembers



Retrieve members of shield information barrier segments.

**Parameters**

-   **segment\_id** (`string`, required) The ID of the shield information barrier segment to retrieve members for.
-   **pagination\_marker** (`string`, optional) The position marker to begin returning paginated results. Requires `usemarker` to be `true`.
-   **items\_per\_page\_limit** (`integer`, optional) The maximum number of segment members to return per page. Use this to control pagination by specifying the number of results per page.

## BoxApi.GetShieldInformationBarrierSegmentInfo



Retrieve shield barrier segment restriction by ID.

**Parameters**

-   **segment\_restriction\_id** (`string`, required) The unique identifier for the shield information barrier segment restriction.

## BoxApi.DeleteShieldBarrierSegmentRestriction



Delete a specific shield barrier segment restriction by ID.

**Parameters**

-   **barrier\_segment\_restriction\_id** (`string`, required) The ID of the shield information barrier segment restriction to delete.

## BoxApi.GetShieldInformationRestrictions



Retrieve restrictions for a shield information barrier segment.

**Parameters**

-   **segment\_id** (`string`, required) The unique identifier for the shield information barrier segment to retrieve restrictions.
-   **pagination\_position\_marker** (`string`, optional) Defines the position marker to begin results, used for marker-based pagination. Requires `usemarker` to be `true`.
-   **max\_items\_per\_page** (`integer`, optional) The maximum number of items to return per page when retrieving shield information barrier segment restrictions.

## BoxApi.GetDevicePinInfo



Retrieve details of a specific device pin.

**Parameters**

-   **device\_pin\_identifier** (`string`, required) The unique identifier for the device pin to retrieve information about.

## BoxApi.DeleteDevicePin



Delete a specific device pin from the system.

**Parameters**

-   **device\_pin\_id** (`string`, required) The unique identifier of the device pin to be deleted.

## BoxApi.GetEnterpriseDevicePins



Retrieve all device pins for a specific enterprise.

**Parameters**

-   **enterprise\_id** (`string`, required) The unique identifier for the enterprise whose device pins are to be retrieved. This is a mandatory field.
-   **pagination\_start\_marker** (`string`, optional) Defines the starting position for paginated results. Requires ‘usemarker’ to be true.
-   **max\_items\_per\_page** (`integer`, optional) The maximum number of device pins to retrieve per page.
-   **sort\_direction** (`string`, optional) The direction to sort results: alphabetical ascending (‘ASC’) or descending (‘DESC’).

## BoxApi.GetEnterpriseTermsOfService



Retrieve the enterprise’s terms of service.

**Parameters**

-   **terms\_of\_service\_type** (`string`, optional) Specify the type of terms of service to retrieve. Options are ‘external’ or ‘managed’.

## BoxApi.GetSpecificTermsOfService



Fetches details of a specific terms of service.

**Parameters**

-   **terms\_of\_service\_id** (`string`, required) The unique identifier for the terms of service to be fetched.

## BoxApi.GetUserTosStatus



Retrieve user acceptance status for terms of service.

**Parameters**

-   **terms\_of\_service\_id** (`string`, required) The unique identifier for the specific terms of service document.
-   **filter\_by\_user\_id** (`string`, optional) Limits results to the specified user ID for retrieving their terms of service acceptance status.

## BoxApi.GetSafeCollaborationDomains



Retrieve domains approved for safe collaboration.

**Parameters**

-   **pagination\_start\_marker** (`string`, optional) The position marker to begin returning results, used for marker-based pagination. Requires `usemarker` to be `true`.
-   **maximum\_items\_per\_page** (`integer`, optional) The maximum number of domains to return per page. Adjust this to control the page size of results.

## BoxApi.FetchSafeCollaborationDomain



Retrieve a designated safe collaboration domain within an enterprise.

**Parameters**

-   **collaboration\_whitelist\_entry\_id** (`string`, required) The ID of the trusted domain entry in the whitelist. Provide this to retrieve its details.

## BoxApi.RemoveSafeCollaborationDomain



Remove a domain from the safe collaboration list.

**Parameters**

-   **whitelist\_entry\_id** (`string`, required) The unique identifier for the domain entry in the safe collaboration list to be removed.

## BoxApi.GetCollaborationWhitelistExemptUsers



Retrieve users exempt from collaboration restrictions.

**Parameters**

-   **pagination\_position\_marker** (`string`, optional) Start position for returning results. Used for marker-based pagination. Requires `usemarker` set to `true`.
-   **max\_items\_per\_page** (`integer`, optional) The maximum number of users to return per page. Controls pagination size.

## BoxApi.GetCollaborationWhitelistExemptUser



Retrieve user exempt from collaboration restrictions.

**Parameters**

-   **exemption\_target\_id** (`string`, required) The ID of the user who is exempt from collaboration domain restrictions. This ID is required to retrieve specific user details.

## BoxApi.RemoveCollaborationWhitelistExemption



Remove a user’s exemption from domain restrictions in collaborations.

**Parameters**

-   **exemption\_id** (`string`, required) The ID of the user’s exemption to be removed from the collaboration whitelist.

## BoxApi.FetchEnterpriseStoragePolicies



Fetches all storage policies in the enterprise.

**Parameters**

-   **include\_attributes** (`array[string]`, optional) An array of attribute names to include in the response. Specify attributes not normally returned in a standard response. Only mini representation fields and requested attributes will be returned.
-   **pagination\_marker** (`string`, optional) Defines the starting position for returning results using marker-based pagination. Requires `usemarker` to be `true`.
-   **max\_items\_per\_page** (`integer`, optional) Specify the maximum number of storage policy items to return per page.

## BoxApi.FetchStoragePolicy



Retrieve details of a specific storage policy.

**Parameters**

-   **storage\_policy\_identifier** (`string`, required) The unique ID of the storage policy to retrieve details for.

## BoxApi.FetchStoragePolicyAssignments



Retrieve storage policy assignments for enterprise or user.

**Parameters**

-   **target\_type\_for\_assignments** (`string`, required) Specifies whether to return storage policy assignments for a ‘user’ or ‘enterprise’.
-   **target\_user\_or\_enterprise\_id** (`string`, required) The ID of the user or enterprise to fetch storage policy assignments for.
-   **pagination\_marker** (`string`, optional) Defines the position marker to start returning results for pagination. Requires ‘usemarker’ to be true.

## BoxApi.FetchStoragePolicyAssignment



Retrieve a storage policy assignment by ID.

**Parameters**

-   **storage\_policy\_assignment\_id** (`string`, required) The unique identifier of the storage policy assignment to be retrieved.

## BoxApi.DeleteStoragePolicyAssignment



Delete a user’s storage policy assignment.

**Parameters**

-   **storage\_policy\_assignment\_id** (`string`, required) The ID of the storage policy assignment to delete. This is required and identifies which assignment to delete, reverting the user to the default policy.

## BoxApi.DownloadZipContent



Download the contents of a zip archive.

**Parameters**

-   **zip\_archive\_unique\_id** (`string`, required) The unique identifier for the zip archive to be downloaded. This ID must be obtained from the ‘Create zip download’ API response.

## BoxApi.CheckZipDownloadStatus



Check the status of a zip archive download.

**Parameters**

-   **zip\_archive\_unique\_identifier** (`string`, required) The unique identifier representing the zip archive for which to check download status. Obtainable from the `status_url` in the Create zip download API.

## BoxApi.CancelSignRequest



Cancel an existing sign request to stop further processing.

**Parameters**

-   **sign\_request\_id** (`string`, required) The unique identifier of the signature request to be cancelled.

## BoxApi.ResendSignatureRequestEmail



Resend signature request email to outstanding signers.

**Parameters**

-   **signature\_request\_id** (`string`, required) The unique identifier of the signature request to resend emails to outstanding signers.

## BoxApi.RetrieveSignRequestById



Retrieve details of a specific sign request by ID.

**Parameters**

-   **signature\_request\_id** (`string`, required) The unique identifier for the signature request to retrieve.

## BoxApi.FetchSignatureRequests



Retrieve signature requests created by a user.

**Parameters**

-   **pagination\_marker** (`string`, optional) Defines the starting point for returning results, used for marker-based pagination. Requires use\_marker to be true.
-   **max\_items\_per\_page** (`integer`, optional) Specify the maximum number of signature requests to return per page.
-   **sender\_email\_list** (`array[string]`, optional) A list of sender emails to filter the signature requests by sender. `shared_requests` must be `true` if provided.
-   **include\_shared\_requests** (`boolean`, optional) Set to true to include signature requests where the user is a collaborator but not the owner. Must be true if sender emails are provided.

## BoxApi.GetManualStartWorkflows



Retrieve workflows with manual start triggers for a folder.

**Parameters**

-   **folder\_id** (`string`, required) The unique identifier representing a folder. You can find this by visiting the folder in the web application and copying the ID from the URL. The root folder is always represented by ID ‘0’.
-   **trigger\_type\_filter** (`string`, optional) Specify the trigger type to search for in workflows. Use ‘WORKFLOW\_MANUAL\_START’ for manual triggers.
-   **max\_items\_per\_page** (`integer`, optional) The maximum number of workflows to retrieve per page. Adjust based on your needs to control pagination.
-   **pagination\_marker** (`string`, optional) Specifies the position marker to start returning results. Used for marker-based pagination and requires `usemarker` to be set to `true`.

## BoxApi.GetBoxSignTemplates



Retrieve Box Sign templates created by a user.

**Parameters**

-   **pagination\_marker** (`string`, optional) The starting position marker for result pagination. Requires `usemarker` to be set to `true`.
-   **max\_items\_per\_page** (`integer`, optional) The maximum number of templates to return in a single response.

## BoxApi.FetchBoxSignTemplateDetails



Retrieve details of a specific Box Sign template.

**Parameters**

-   **box\_sign\_template\_id** (`string`, required) The unique identifier for a Box Sign template to retrieve its details.

## BoxApi.ListSlackIntegrationMappings



Retrieve Slack integration mappings for a Box enterprise.

**Parameters**

-   **pagination\_start\_marker** (`string`, optional) Defines the starting position for pagination results. Requires ‘usemarker’ to be true.
-   **max\_items\_per\_page** (`integer`, optional) The maximum number of Slack integration mappings to return per page from the user’s enterprise.
-   **mapped\_item\_type** (`string`, optional) The type of mapped item for which the Slack integration mapping should be returned. Only ‘channel’ is supported.
-   **mapped\_item\_id** (`string`, optional) ID of the mapped item for which the Slack integration mapping should be retrieved.
-   **box\_item\_id** (`string`, optional) Box item ID for which to retrieve Slack integration mappings. Must be a valid ID within the user’s enterprise.
-   **box\_item\_type** (`string`, optional) Specify the type of Box item for which the mappings should be returned. Currently, only ‘folder’ is supported.
-   **include\_manually\_created\_mappings** (`boolean`, optional) Set to true to include mappings that have been manually created.

## BoxApi.DeleteSlackIntegrationMapping



Deletes a Slack integration mapping for Box content.

**Parameters**

-   **slack\_integration\_mapping\_id** (`string`, required) The ID of the Slack integration mapping to be deleted. This requires Admin or Co-Admin permission.

## BoxApi.GetTeamsIntegrationMappings



Retrieve Teams integration mappings for an enterprise.

**Parameters**

-   **mapped\_item\_type** (`string`, optional) Specify the type of item (‘channel’ or ‘team’) for which the mapping should be returned.
-   **mapped\_item\_id** (`string`, optional) The ID of the mapped item for which the mapping should be returned. Required for retrieving specific integration mappings.
-   **box\_item\_id\_for\_mappings** (`string`, optional) The Box item ID to retrieve integration mappings for. Required for fetching specific mappings.
-   **box\_item\_type** (`string`, optional) Specify the type of Box item for which the mappings should be returned. Acceptable value is ‘folder’.

## BoxApi.DeleteTeamsIntegrationMapping



Deletes a Teams integration mapping in Box.

**Parameters**

-   **integration\_mapping\_identifier** (`string`, required) The ID of the Teams integration mapping to be deleted. Required for identifying the specific mapping.

## BoxApi.GetAiAgentDefaultConfig



Retrieve the default configuration for the AI agent.

**Parameters**

-   **filter\_mode** (`string`, required) Specifies the mode to filter and return the agent configuration. Options: ‘ask’, ‘text\_gen’, ‘extract’, ‘extract\_structured’.
-   **agent\_config\_language\_code** (`string`, optional) The ISO language code to specify the language for the AI agent configuration. Default is returned if unsupported.
-   **model\_identifier** (`string`, optional) Specify the model name to retrieve the default agent configuration. Ensure it matches the supported model names.

## BoxApi.ListAiAgents



Retrieve a list of AI agents with specified parameters.

**Parameters**

-   **filter\_by\_mode** (`array[string]`, optional) List of modes to filter the agent configuration. Options: `ask`, `text_gen`, `extract`.
-   **response\_fields** (`array[string]`, optional) List of fields to return for each AI agent in the response. Specify as an array of strings.
-   **agent\_state\_filter** (`array[string]`, optional) Specify the states of agents to return. Acceptable values include: ‘enabled’, ‘disabled’, and ‘enabled\_for\_selected\_users’.
-   **results\_start\_position\_marker** (`string`, optional) The starting point marker for returning paginated results. Use this to continue a previous query from where it left off.
-   **max\_items\_per\_page** (`integer`, optional) The maximum number of AI agents to return for a single page of results.
-   **include\_box\_default\_agents** (`boolean`, optional) Set to true to include Box default AI agents in the response, false otherwise.

## BoxApi.GetAiAgentDetails



Retrieve details of a specific AI agent by ID.

**Parameters**

-   **agent\_unique\_identifier** (`string`, required) The unique identifier of the AI agent to retrieve details for.
-   **fields\_to\_return** (`array[string]`, optional) List of specific fields to return in the response for the AI agent details.

## BoxApi.DeleteAiAgent



Removes an AI agent by its ID.

**Parameters**

-   **agent\_id** (`string`, required) The unique identifier of the AI agent you want to delete. This ID specifies which agent will be removed.

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_box_api ``` Learn more](/guides/deployment-hosting.md)

Last updated on February 10, 2026

[AshbyApi](/en/resources/integrations/productivity/ashby-api.md)
[CalendlyApi](/en/resources/integrations/productivity/calendly-api.md)
