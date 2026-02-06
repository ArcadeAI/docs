---
title: "AirtableApi"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Productivity & Docs](/en/resources/integrations/productivity/asana.md)
AirtableApi

# AirtableApi

Arcade Unoptimized

**Description:** Tools that enable LLMs to interact directly with the airtable API.

**Author:** Arcade

**Auth:** User authorization

[![PyPI Version](https://img.shields.io/pypi/v/arcade_airtable_api)](https://pypi.org/project/arcade_airtable_api/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_airtable_api)](https://pypi.org/project/arcade_airtable_api/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_airtable_api)](https://pypi.org/project/arcade_airtable_api/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_airtable_api)](https://pypi.org/project/arcade_airtable_api/)

AirtableApi is a [Unoptimized MCP Server](/guides/create-tools/improve/types-of-tools.md#unoptimized-tools)
: each tool mirrors one HTTP endpoint and offers LLMs a way to interact with the low-level API.



Differently from [Optimized MCP Servers](/guides/create-tools/improve/types-of-tools.md#optimized-tools)
, Unoptimized tools are heavily influenced by the original API design, which is not usually optimized for LLM usage. For this reason, we recommend thoroughly evaluating the tools with your Agents or chatbots before using it in production. [Read more](/guides/create-tools/improve/types-of-tools.md) about Optimized vs Unoptimized tools.

The AirtableApi MCP Server offers a comprehensive suite of tools for managing and interacting with Airtable’s features. Users can efficiently perform actions such as:

## Available Tools

Tool Name

Description

AirtableApi.ListScimGroups

Retrieve a list of SCIM groups from Airtable.

AirtableApi.CreateScimGroup

Create a new SCIM group with no members.

AirtableApi.DeleteScimGroup

Delete a SCIM Group from Airtable.

AirtableApi.FetchScimGroup

Retrieve details of a specific SCIM Group by ID.

AirtableApi.UpdateGroupDetails

Update group details using SCIM patch operations.

AirtableApi.UpdateGroupAttributes

Replace a group's attributes with new values.

AirtableApi.ListScimUsers

Retrieve a list of SCIM users from Airtable.

AirtableApi.CreateScimUser

Create a new user using SCIM protocol.

AirtableApi.DeleteScimUser

Delete a SCIM user from the system.

AirtableApi.GetScimUser

Get details of a single SCIM User by userId.

AirtableApi.UpdateScimUserRecord

Apply SCIM patch operations to update user details.

AirtableApi.UpdateUserAttributes

Replace a user's attributes with new values.

AirtableApi.ListWebhooksForBase

Retrieve registered webhooks and their statuses for a base.

AirtableApi.CreateAirtableWebhook

Create a new webhook in a specified Airtable base.

AirtableApi.DeleteAirtableWebhook

Deletes a webhook in Airtable with required permissions.

AirtableApi.ToggleWebhookNotifications

Enable or disable webhook notification pings.

AirtableApi.ListWebhookPayloads

Retrieve update messages for a specified Airtable webhook.

AirtableApi.RefreshWebhookLifespan

Extend the expiration time of an active webhook.

AirtableApi.ListAirtableBases

Retrieve a list of accessible Airtable bases.

AirtableApi.CreateAirtableBase

Create a new Airtable base with specified tables and schema.

AirtableApi.DeleteAirtableBase

Delete a specified Airtable base.

AirtableApi.GetBaseCollaborators

Retrieve information on base collaborators.

AirtableApi.ListBaseBlockInstallations

Retrieve basic info of block installations for a specific base.

AirtableApi.DeleteAirtableBlockInstallation

Delete a block installation in Airtable, recoverable later.

AirtableApi.ManageAirtableBlockInstallation

Manages the installation state of an Airtable block.

AirtableApi.AddBaseCollaborator

Add a collaborator to an Airtable base.

AirtableApi.RemoveBaseCollaborator

Remove a collaborator from a base.

AirtableApi.UpdateCollaboratorPermission

Update a collaborator's permission level on a base.

AirtableApi.GetInterfaceInfo

Retrieve information about a specified interface.

AirtableApi.AddCollaboratorToAirtableInterface

Add a collaborator to an Airtable interface.

AirtableApi.RemoveInterfaceCollaborator

Remove a collaborator from an interface.

AirtableApi.UpdateCollaboratorPermissions

Update permissions for an interface-only collaborator.

AirtableApi.DeleteInterfaceInvite

Delete an outstanding interface invite in Airtable.

AirtableApi.DeleteBaseInvite

Delete an outstanding base invite.

AirtableApi.ListBaseShares

Lists basic information of base shares.

AirtableApi.DeleteAirtableShare

Permanently delete a share from an Airtable base.

AirtableApi.ManageAirtableSharing

Update and manage the share state of an Airtable base.

AirtableApi.GetAirtableBaseSchema

Retrieve the schema of tables in an Airtable base.

AirtableApi.CreateAirtableTable

Create a new table in Airtable and return its schema.

AirtableApi.UpdateAirtableTable

Update the properties of an Airtable table.

AirtableApi.CreateAirtableField

Creates a new column in an Airtable table and returns its schema.

AirtableApi.UpdateAirtableFieldDetails

Updates the name or description of an Airtable field.

AirtableApi.ListAirtableBaseViews

Retrieve information on Airtable base views.

AirtableApi.DeleteAirtableView

Deletes a specific view in Airtable by ID.

AirtableApi.GetAirtableViewMetadata

Get basic information about an Airtable base view.

AirtableApi.GetEnterpriseInfo

Retrieve basic information about an enterprise account.

AirtableApi.GetAuditLogEvents

Retrieve audit log events for an enterprise.

AirtableApi.RetrieveAuditLogRequests

Retrieve all audit log requests for an enterprise account.

AirtableApi.CreateAuditLogRequest

Initiate the creation of an audit log request.

AirtableApi.RetrieveAuditLog

Retrieve a specific audit log request.

AirtableApi.GetAirtableChangeEvents

Retrieve change events for Airtable enterprise bases.

AirtableApi.CreateDescendantEnterpriseAccount

Create a descendant enterprise account in Airtable.

AirtableApi.GetEdiscoveryExportsStatus

Retrieve status and results of all eDiscovery exports.

AirtableApi.CreateEdiscoveryExport

Initiate an eDiscovery export request.

AirtableApi.GetEdiscoveryExportStatus

Retrieve the status and result of an eDiscovery export.

AirtableApi.BatchMoveUserGroupsBetweenAccounts

Batch move user groups between enterprise accounts.

AirtableApi.MoveWorkspacesBetweenEnterpriseAccounts

Move workspaces between enterprise accounts within the same organization.

AirtableApi.DeleteUsersByEmail

Delete multiple users identified by their email addresses.

AirtableApi.GetAirtableUserInfo

Fetch user details from Airtable by ID or email.

AirtableApi.BatchManageEnterpriseUsers

Batch manage users in enterprise accounts.

AirtableApi.BatchManageUserMembership

Batch manage user membership in enterprise accounts.

AirtableApi.GrantAdminAccess

Grant admin access to specified users.

AirtableApi.RevokeAdminAccess

Revoke admin access from specified users.

AirtableApi.DeleteEnterpriseUser

Deletes an enterprise user by ID.

AirtableApi.GetUserInformation

Fetch user information by ID from Airtable Enterprise.

AirtableApi.ManageEnterpriseAccountUser

Manage users in enterprise accounts.

AirtableApi.LogoutEnterpriseUser

Logs out an enterprise account user from the system.

AirtableApi.RemoveUserFromEnterprise

Unshare a user from all enterprise assets and revoke admin access.

AirtableApi.GetUserGroupInfo

Retrieve basic information about a specific user group.

AirtableApi.RetrieveUserIdAndScopes

Retrieve user's ID, associated scopes, and email if available.

AirtableApi.CreateAirtableWorkspace

Create a new workspace in Airtable.

AirtableApi.DeleteWorkspace

Deletes a specified Airtable workspace.

AirtableApi.GetWorkspaceCollaborators

Retrieve information about workspace collaborators and invites.

AirtableApi.AddWorkspaceCollaborator

Add a collaborator to an Airtable workspace.

AirtableApi.RemoveWorkspaceCollaborator

Remove a collaborator from an Airtable workspace.

AirtableApi.UpdateWorkspaceCollaboratorPermission

Modify a collaborator's permission level in a workspace.

AirtableApi.DeleteWorkspaceInvite

Delete a workspace invite.

AirtableApi.MoveAirtableBase

Move a base between Airtable workspaces.

AirtableApi.UpdateWorkspaceRestrictions

Updates sharing restrictions for an Airtable workspace.

AirtableApi.UploadAttachmentToAirtable

Upload attachments to an Airtable record's cell.

AirtableApi.DeleteMultipleRecords

Delete multiple records from an Airtable table.

AirtableApi.ListAirtableRecords

Retrieve records from a specified Airtable table.

AirtableApi.UpdateAirtableRecords

Update or upsert multiple records in an Airtable table.

AirtableApi.CreateAirtableRecords

Create multiple records in an Airtable base.

AirtableApi.BulkUpdateAirtable

Update or upsert multiple records in an Airtable table.

AirtableApi.DeleteAirtableRecord

Deletes a single record from an Airtable base and table.

AirtableApi.AirtableGetRecord

Retrieve a single record from an Airtable table.

AirtableApi.UpdateAirtableRecord

Update a single Airtable record with specified fields.

AirtableApi.ModifyAirtableEntry

Update a specific record in an Airtable table.

AirtableApi.GetRecordComments

Retrieve comments for a specific record in Airtable.

AirtableApi.AddRecordComment

Creates a comment on a specified record.

AirtableApi.DeleteCommentFromRecord

Delete a comment from a record in Airtable.

AirtableApi.UpdateRecordComment

Update a comment on a specific record.

AirtableApi.DeleteRecordsByPrimaryKeys

Delete records from a HyperDB table using primary keys.

AirtableApi.ReadHyperdbTableRecords

Retrieve records from a specified HyperDB table.

AirtableApi.UpsertAirtableRecords

Update or insert records in an Airtable HyperDB table.

If you need to perform an action that’s not listed here, you can [get in touch with us](mailto:contact@arcade.dev) to request a new tool, or [create your own tools](/guides/create-tools/tool-basics/build-mcp-server.md).

## AirtableApi.ListScimGroups



Retrieve a list of SCIM groups from Airtable.

**Parameters**

-   **filter\_criteria** (`string`, optional) Defines a string-based filter to query specific SCIM groups in Airtable. Use SCIM filtering syntax to specify criteria.
-   **group\_count** (`number`, optional) Specify the maximum number of SCIM groups to list. It is an integer that determines how many groups the API should return.

## AirtableApi.CreateScimGroup



Create a new SCIM group with no members.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AirtableApi.DeleteScimGroup



Delete a SCIM Group from Airtable.

**Parameters**

-   **group\_id** (`string`, required) The unique identifier of the SCIM Group to be deleted from Airtable.

## AirtableApi.FetchScimGroup



Retrieve details of a specific SCIM Group by ID.

**Parameters**

-   **scim\_group\_id** (`string`, required) The unique identifier of the SCIM Group to retrieve.

## AirtableApi.UpdateGroupDetails



Update group details using SCIM patch operations.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **group\_id** (`string`, optional) A string representing the unique identifier of the group to be updated using SCIM patch operations. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AirtableApi.UpdateGroupAttributes



Replace a group’s attributes with new values.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **group\_id** (`string`, optional) The unique identifier for the group whose attributes need to be replaced. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AirtableApi.ListScimUsers



Retrieve a list of SCIM users from Airtable.

**Parameters**

-   **start\_index** (`number`, optional) The starting index for the list of SCIM users to retrieve. Use a positive integer to specify where to start listing from.
-   **user\_count\_limit** (`number`, optional) The maximum number of SCIM user objects to return in the response. This should be a positive integer.
-   **user\_filter** (`string`, optional) Apply a filter string to narrow down the list of SCIM users. Uses SCIM standard filtering syntax.

## AirtableApi.CreateScimUser



Create a new user using SCIM protocol.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AirtableApi.DeleteScimUser



Delete a SCIM user from the system.

**Parameters**

-   **scim\_user\_id** (`string`, required) Unique identifier for the SCIM user to delete. Cannot be the admin using the authentication token or the sole owner of a multi-collaborator workspace.

## AirtableApi.GetScimUser



Get details of a single SCIM User by userId.

**Parameters**

-   **user\_id** (`string`, required) The unique identifier of the SCIM User to retrieve details for.

## AirtableApi.UpdateScimUserRecord



Apply SCIM patch operations to update user details.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **user\_id** (`string`, optional) The unique identifier for the user to be updated. It should match the user’s existing SCIM record. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AirtableApi.UpdateUserAttributes



Replace a user’s attributes with new values.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **user\_id** (`string`, optional) The unique identifier of the user whose attributes are to be replaced. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AirtableApi.ListWebhooksForBase



Retrieve registered webhooks and their statuses for a base.

**Parameters**

-   **base\_identifier** (`string`, required) The unique identifier for the base whose webhooks you want to list.

## AirtableApi.CreateAirtableWebhook



Create a new webhook in a specified Airtable base.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **base\_id** (`string`, optional) The ID of the Airtable base where the webhook will be created. It should be a string. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AirtableApi.DeleteAirtableWebhook



Deletes a webhook in Airtable with required permissions.

**Parameters**

-   **airtable\_base\_id** (`string`, required) The unique ID of the Airtable base where the webhook is to be deleted. This is required to specify the target base.
-   **webhook\_id** (`string`, required) The unique identifier for the webhook to be deleted. This string is required to specify which webhook will be removed.

## AirtableApi.ToggleWebhookNotifications



Enable or disable webhook notification pings.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **airtable\_base\_id** (`string`, optional) The unique identifier for the Airtable base. This specifies which database to target for enabling or disabling webhook notifications. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **webhook\_id** (`string`, optional) The unique identifier for the webhook to be modified. Required for specifying which webhook’s notifications you want to enable or disable. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AirtableApi.ListWebhookPayloads



Retrieve update messages for a specified Airtable webhook.

**Parameters**

-   **base\_id** (`string`, required) Identifier for the Airtable base from which to list webhook payloads.
-   **webhook\_id** (`string`, required) The unique identifier for the webhook to retrieve update messages. This should be a string and should match the webhook set up in Airtable.
-   **maximum\_number\_of\_messages** (`number`, optional) The maximum number of update messages to retrieve for the webhook.
-   **pagination\_cursor** (`number`, optional) A numerical position indicating where to begin retrieving messages from the webhook payload list. Use this for pagination to continue from a previous list retrieval.

## AirtableApi.RefreshWebhookLifespan



Extend the expiration time of an active webhook.

**Parameters**

-   **base\_identifier** (`string`, required) The unique identifier for the Airtable base containing the webhook.
-   **webhook\_id** (`string`, required) The unique identifier of the webhook to extend. Ensure it is an active webhook with an expiration.
-   **webhook\_request\_body** (`json`, optional) JSON payload required for refreshing the webhook. Include necessary fields per API documentation.

## AirtableApi.ListAirtableBases



Retrieve a list of accessible Airtable bases.

**Parameters**

-   **pagination\_offset** (`string`, optional) A string token to fetch the next set of Airtable bases if more results are available. Use the token from the last response to continue pagination.

## AirtableApi.CreateAirtableBase



Create a new Airtable base with specified tables and schema.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AirtableApi.DeleteAirtableBase



Delete a specified Airtable base.

**Parameters**

-   **base\_id** (`string`, required) The unique identifier of the base you want to delete. This ID is required to perform the deletion.

## AirtableApi.GetBaseCollaborators



Retrieve information on base collaborators.

**Parameters**

-   **base\_id** (`string`, required) The unique identifier of the Airtable base to fetch collaborators from. This is a required string value.
-   **fields\_to\_include** (`array[string]`, optional) A list of fields to include in the response. Specify as an array of strings such as \[‘email’, ‘name’\].

## AirtableApi.ListBaseBlockInstallations



Retrieve basic info of block installations for a specific base.

**Parameters**

-   **base\_id** (`string`, required) The unique identifier for a specific Airtable base to retrieve block installations from.

## AirtableApi.DeleteAirtableBlockInstallation



Delete a block installation in Airtable, recoverable later.

**Parameters**

-   **airtable\_base\_id** (`string`, required) The unique identifier for the Airtable base from which the block installation will be deleted.
-   **block\_installation\_id** (`string`, required) The unique identifier of the block installation to be deleted. This is required to specify which block installation to remove.

## AirtableApi.ManageAirtableBlockInstallation



Manages the installation state of an Airtable block.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **airtable\_base\_id** (`string`, optional) The unique identifier for the Airtable base where the block is installed. It is required to specify the base for the block installation. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **block\_installation\_id** (`string`, optional) The unique identifier for the block installation to be managed. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AirtableApi.AddBaseCollaborator



Add a collaborator to an Airtable base.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **base\_id** (`string`, optional) The ID of the Airtable base to which the collaborator will be added. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AirtableApi.RemoveBaseCollaborator



Remove a collaborator from a base.

**Parameters**

-   **base\_id** (`string`, required) The unique identifier for the base from which the collaborator will be removed. This is a required field.
-   **collaborator\_id** (`string`, required) The unique identifier for the user or group to be removed from the base.

## AirtableApi.UpdateCollaboratorPermission



Update a collaborator’s permission level on a base.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **base\_identifier** (`string`, optional) The unique identifier for the base to update permission. Required as a string. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **collaborator\_id** (`string`, optional) The unique identifier for the user or group whose permission level is being updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AirtableApi.GetInterfaceInfo



Retrieve information about a specified interface.

**Parameters**

-   **airtable\_base\_id** (`string`, required) The unique identifier of the Airtable base. This ID specifies which base the interface information belongs to.
-   **interface\_id** (`string`, required) The ID of the Airtable interface to retrieve information for. This is found in the `interfaces` object from the `get base collaborators` endpoint.
-   **include\_elements** (`array[string]`, optional) Specify elements to include in the response. Provide as an array of strings representing the element names or IDs.

## AirtableApi.AddCollaboratorToAirtableInterface



Add a collaborator to an Airtable interface.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **airtable\_base\_id** (`string`, optional) The unique identifier for the Airtable base where the interface is located. This helps specify which base the collaborator will be added to. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **page\_bundle\_id** (`string`, optional) The unique identifier for the specific interface page bundle where the collaborator will be added. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AirtableApi.RemoveInterfaceCollaborator



Remove a collaborator from an interface.

**Parameters**

-   **base\_id** (`string`, required) The unique identifier for the Airtable base. This is required to specify which base the collaborator will be removed from.
-   **collaborator\_id** (`string`, required) The ID of the user or group to be removed as an interface collaborator. Must be a valid identifier.
-   **interface\_page\_bundle\_id** (`string`, required) The ID of the page bundle within the interface from which the collaborator is being removed.

## AirtableApi.UpdateCollaboratorPermissions



Update permissions for an interface-only collaborator.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **base\_identifier** (`string`, optional) The unique identifier for the Airtable base where the collaborator’s permissions are being updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **interface\_page\_bundle\_id** (`string`, optional) The unique identifier for the page bundle associated with the interface in Airtable. Required to specify which interface the permissions are being updated for. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **collaborator\_id** (`string`, optional) The unique ID of the user or group whose permissions are to be updated. This is required for specifying which collaborator’s access level should be modified. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AirtableApi.DeleteInterfaceInvite



Delete an outstanding interface invite in Airtable.

**Parameters**

-   **base\_identifier** (`string`, required) The unique identifier for the Airtable base from which the invite will be deleted.
-   **invite\_id** (`string`, required) The identifier of the outstanding interface invite to be deleted. Must be a valid string representing the invite ID.
-   **page\_bundle\_id** (`string`, required) The unique ID of the interface page bundle to identify which interface’s invite to delete.

## AirtableApi.DeleteBaseInvite



Delete an outstanding base invite.

**Parameters**

-   **base\_id** (`string`, required) The unique identifier of the base from which the invite should be deleted.
-   **invite\_id** (`string`, required) The unique identifier for the invite to be deleted. Ensure this is an outstanding invite.

## AirtableApi.ListBaseShares



Lists basic information of base shares.

**Parameters**

-   **base\_identifier** (`string`, required) The unique ID of the Airtable base to list shares for. Required to retrieve base share information.

## AirtableApi.DeleteAirtableShare



Permanently delete a share from an Airtable base.

**Parameters**

-   **airtable\_base\_id** (`string`, required) The unique identifier of the Airtable base from which the share will be deleted. This value is required.
-   **share\_id** (`string`, required) The unique identifier of the share to delete from an Airtable base.

## AirtableApi.ManageAirtableSharing



Update and manage the share state of an Airtable base.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **airtable\_base\_id** (`string`, optional) The unique identifier for the Airtable base to manage its share state. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **share\_identifier** (`string`, optional) The unique identifier for the share configuration to modify in Airtable. It specifies which share state needs to be managed. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AirtableApi.GetAirtableBaseSchema



Retrieve the schema of tables in an Airtable base.

**Parameters**

-   **airtable\_base\_id** (`string`, required) The unique identifier for the Airtable base whose schema is being requested. This ID can be found in the URL of the base when accessed in Airtable.
-   **fields\_to\_include** (`array[string]`, optional) A list of specific fields to include in the schema response. Each field should be a string representing the field name.

## AirtableApi.CreateAirtableTable



Create a new table in Airtable and return its schema.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **airtable\_base\_id** (`string`, optional) The identifier for the Airtable base where the table will be created. Must be a string. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AirtableApi.UpdateAirtableTable



Update the properties of an Airtable table.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **airtable\_base\_id** (`string`, optional) The unique identifier for the Airtable base containing the table to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **table\_id\_or\_name** (`string`, optional) The identifier or name of the table to update in Airtable. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AirtableApi.CreateAirtableField



Creates a new column in an Airtable table and returns its schema.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **airtable\_base\_id** (`string`, optional) The unique identifier for the Airtable base containing the table. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **table\_id** (`string`, optional) The unique identifier of the table where the new column will be created. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AirtableApi.UpdateAirtableFieldDetails



Updates the name or description of an Airtable field.

**Parameters**

-   **airtable\_base\_id** (`string`, required) The unique ID of the Airtable base containing the field to update.
-   **airtable\_table\_id** (`string`, required) The ID of the table in which the field’s metadata is to be updated.
-   **field\_column\_id** (`string`, required) The unique identifier for the field (column) to be updated in the Airtable base.
-   **new\_field\_description** (`string`, optional) The new description for the field. Optional, max 20,000 characters.
-   **new\_field\_name** (`string`, optional) The new name for the field in Airtable. This is optional but must be provided if no new description is given.

## AirtableApi.ListAirtableBaseViews



Retrieve information on Airtable base views.

**Parameters**

-   **airtable\_base\_id** (`string`, required) The ID of the Airtable base for which you want to list views.
-   **fields\_to\_include** (`array[string]`, optional) A list of specific fields to include in the response. It filters the fields returned for each view.

## AirtableApi.DeleteAirtableView



Deletes a specific view in Airtable by ID.

**Parameters**

-   **airtable\_base\_id** (`string`, required) The ID of the Airtable base from which the view will be deleted. Must be a valid string identifier.
-   **view\_identifier** (`string`, required) The unique identifier of the Airtable view to delete. Required to specify which view to remove.

## AirtableApi.GetAirtableViewMetadata



Get basic information about an Airtable base view.

**Parameters**

-   **base\_identifier** (`string`, required) The unique ID of the Airtable base. This is required to retrieve view metadata.
-   **view\_identifier** (`string`, required) A unique identifier for the Airtable view. Used to specify which view’s metadata to retrieve.
-   **include\_fields** (`array[string]`, optional) Array of field names to include in the view metadata response. Specify specific fields if required.

## AirtableApi.GetEnterpriseInfo



Retrieve basic information about an enterprise account.

**Parameters**

-   **enterprise\_account\_id** (`string`, required) The unique identifier for the target enterprise account. This is required to fetch the relevant account information.
-   **fields\_to\_include** (`array[string]`, optional) Specify an array of field names as strings to include in the response. Leaving this empty includes all default fields.

## AirtableApi.GetAuditLogEvents



Retrieve audit log events for an enterprise.

**Parameters**

-   **enterprise\_account\_id** (`string`, required) The unique identifier for the enterprise account to retrieve audit log events for.
-   **end\_time** (`string`, optional) The end time for retrieving audit log events. The format is ISO 8601 (e.g., ‘2023-10-15T10:00:00Z’).
-   **event\_category** (`string`, optional) Filter audit log events by specific categories. Accepts string values like ‘security’, ‘compliance’, etc.
-   **event\_type** (`string`, optional) Specify the type of event to filter the audit logs. Use a string representing the event category.
-   **filter\_by\_originating\_user\_id** (`string`, optional) Filter audit log events by the ID of the originating user.
-   **model\_identifier** (`string`, optional) A string that specifies the model ID related to the audit log event.
-   **next\_page\_token** (`string`, optional) Token to retrieve the next page of results when paginating through a large set of audit log events.
-   **page\_size** (`number`, optional) Number of log events to retrieve per page. It determines the size of the data fetched in a single API call.
-   **previous\_event\_marker** (`string`, optional) A string marker to paginate backwards through audit log events, indicating the last event seen.
-   **sort\_order** (`string`, optional) Defines the order in which results are sorted. Use ‘ascending’ or ‘descending’.
-   **start\_time** (`string`, optional) Specify the starting point for retrieving audit logs. Use ISO 8601 format (e.g., ‘2023-01-01T00:00:00Z’).

## AirtableApi.RetrieveAuditLogRequests



Retrieve all audit log requests for an enterprise account.

**Parameters**

-   **enterprise\_account\_id** (`string`, required) The unique identifier for the enterprise account to retrieve audit log requests for.
-   **audit\_log\_page\_size** (`number`, optional) Specify the number of audit log requests to return per page. Use this to control pagination.
-   **pagination\_offset** (`number`, optional) A number indicating the starting point for retrieving audit log requests. Used for pagination.

## AirtableApi.CreateAuditLogRequest



Initiate the creation of an audit log request.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **enterprise\_account\_id** (`string`, optional) The ID of the enterprise account for which the audit log is being requested. Necessary to initiate the log request process. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AirtableApi.RetrieveAuditLog



Retrieve a specific audit log request.

**Parameters**

-   **audit\_log\_task\_id** (`string`, required) The unique identifier for the specific audit log task to retrieve. This is required to fetch the log details.
-   **enterprise\_account\_id** (`string`, required) The unique identifier for the enterprise account. This ID is required to retrieve the specific audit log request.

## AirtableApi.GetAirtableChangeEvents



Retrieve change events for Airtable enterprise bases.

**Parameters**

-   **enterprise\_account\_id** (`string`, required) The unique identifier for the enterprise account. This ID is required to retrieve the change events specific to the account.
-   **end\_time** (`string`, optional) The end time for retrieving change events in ISO 8601 format (e.g., ‘2023-01-01T23:59:59Z’).
-   **page\_size\_limit** (`number`, optional) Specifies the maximum number of change events returned in a single request. Use a number to limit the size.
-   **pagination\_offset** (`string`, optional) String used to specify the starting point for the next page of results. Useful for pagination.
-   **start\_time** (`string`, optional) The starting timestamp for retrieving change events. Format is ISO 8601 (e.g., ‘2023-10-05T12:00:00Z’).

## AirtableApi.CreateDescendantEnterpriseAccount



Create a descendant enterprise account in Airtable.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **enterprise\_account\_id** (`string`, optional) The ID of the root enterprise account for which to create a descendant. This account must have Enterprise Hub enabled. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AirtableApi.GetEdiscoveryExportsStatus



Retrieve status and results of all eDiscovery exports.

**Parameters**

-   **enterprise\_account\_id** (`string`, required) The ID of the enterprise account for which to retrieve eDiscovery export status and results.
-   **ediscovery\_export\_state** (`string`, optional) Filter exports by state: ‘pending’, ‘processing’, ‘error’, or ‘done’.
-   **pagination\_offset** (`number`, optional) The number of records to skip for pagination. Useful for accessing data beyond initial pages.
-   **result\_page\_size** (`number`, optional) Specify the number of eDiscovery export results to return per page.

## AirtableApi.CreateEdiscoveryExport



Initiate an eDiscovery export request.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **enterprise\_account\_id** (`string`, optional) The unique identifier for the enterprise account. Required for creating an eDiscovery export. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AirtableApi.GetEdiscoveryExportStatus



Retrieve the status and result of an eDiscovery export.

**Parameters**

-   **enterprise\_account\_id** (`string`, required) The ID of the enterprise account for which to retrieve the eDiscovery export status and results.
-   **enterprise\_task\_id** (`string`, required) The unique identifier for the eDiscovery export task. Required to check the status and get results.

## AirtableApi.BatchMoveUserGroupsBetweenAccounts



Batch move user groups between enterprise accounts.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **target\_enterprise\_account\_id** (`string`, optional) The ID of the target enterprise account to which user groups are being moved. Must belong to the same organization and have the Enterprise Hub feature enabled. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AirtableApi.MoveWorkspacesBetweenEnterpriseAccounts



Move workspaces between enterprise accounts within the same organization.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **enterprise\_account\_id** (`string`, optional) The unique identifier of the enterprise account to which workspaces are being moved. Ensure it belongs to the same organization. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AirtableApi.DeleteUsersByEmail



Delete multiple users identified by their email addresses.

**Parameters**

-   **enterprise\_account\_id** (`string`, required) The unique ID of the enterprise account from which users will be deleted. Required for specifying the target enterprise.
-   **email\_addresses** (`array[string]`, optional) An array of email addresses of users to be deleted. Each email must be a valid string.

## AirtableApi.GetAirtableUserInfo



Fetch user details from Airtable by ID or email.

**Parameters**

-   **enterprise\_account\_id** (`string`, required) The ID of the enterprise account associated with the user. Used to target specific enterprise-level user data.
-   **include\_fields** (`array[string]`, optional) Specify fields to include in the response. Provide an array of field names (strings).
-   **user\_emails** (`array[string]`, optional) An array of user email addresses to fetch information for. Provide one or more email strings.
-   **user\_ids** (`array[string]`, optional) A list of user IDs to fetch details for. Each ID should be a string.

## AirtableApi.BatchManageEnterpriseUsers



Batch manage users in enterprise accounts.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **enterprise\_account\_id** (`string`, optional) The unique identifier for the enterprise account to manage users within. This must be provided as a string. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AirtableApi.BatchManageUserMembership



Batch manage user membership in enterprise accounts.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **enterprise\_account\_id** (`string`, optional) The unique identifier of the enterprise account in which user membership will be managed. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AirtableApi.GrantAdminAccess



Grant admin access to specified users.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **enterprise\_account\_id** (`string`, optional) The ID of the enterprise account to which admin access will be granted. Required for processing the request. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AirtableApi.RevokeAdminAccess



Revoke admin access from specified users.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **enterprise\_account\_id** (`string`, optional) The unique identifier for the enterprise account. Required to target the specific account for admin access revocation. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AirtableApi.DeleteEnterpriseUser



Deletes an enterprise user by ID.

**Parameters**

-   **enterprise\_account\_id** (`string`, required) The unique identifier for the enterprise account containing the user to be deleted. This is required for specifying the account context of the user.
-   **user\_id** (`string`, required) The unique identifier of the user to be deleted from the enterprise account.

## AirtableApi.GetUserInformation



Fetch user information by ID from Airtable Enterprise.

**Parameters**

-   **enterprise\_account\_id** (`string`, required) The ID of the Airtable Enterprise account associated with the user. This is required to fetch user data.
-   **user\_id** (`string`, required) The unique identifier for the user whose information is to be retrieved. Provide the user ID as a string.
-   **include\_fields** (`array[string]`, optional) Specify the list of fields to include in the user information response. Provide as an array of field names.

## AirtableApi.ManageEnterpriseAccountUser



Manage users in enterprise accounts.

**Parameters**

-   **enterprise\_account\_id** (`string`, required) The unique identifier for the enterprise account. Required to manage users within the account.
-   **user\_id** (`string`, required) The unique identifier for the user to be managed within the enterprise account.
-   **update\_user\_email** (`string`, optional) New email for the user. Ensure enterprise account owns both original and destination domains. Follow SSO steps if applicable.
-   **user\_first\_name** (`string`, optional) The new first name of the user in the enterprise account.
-   **user\_last\_name** (`string`, optional) The last name of the user to be updated in the enterprise account.
-   **user\_state** (`string`, optional) Specify the user’s state as ‘provisioned’ or ‘deactivated’. Only applicable for managed users.

## AirtableApi.LogoutEnterpriseUser



Logs out an enterprise account user from the system.

**Parameters**

-   **enterprise\_account\_id** (`string`, required) The ID of the enterprise account to log the user out from. Required for enterprise-level logout.
-   **enterprise\_user\_id** (`string`, required) The unique identifier of the enterprise user to log out.
-   **logout\_request\_body** (`json`, optional) A JSON object containing necessary details to process the logout request.

## AirtableApi.RemoveUserFromEnterprise



Unshare a user from all enterprise assets and revoke admin access.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **enterprise\_account\_id** (`string`, optional) The ID of the enterprise account from which the user will be removed. Required to specify the enterprise context for user unsharing. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **user\_id** (`string`, optional) The unique identifier of the user to be removed from the enterprise. It is a required string value. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AirtableApi.GetUserGroupInfo



Retrieve basic information about a specific user group.

**Parameters**

-   **user\_group\_id** (`string`, required) Provide the identifier for the user group to retrieve its basic information.
-   **include\_additional\_info** (`array[string]`, optional) An array of strings specifying additional data to be included in the response, such as ‘members’ or ‘permissions’.

## AirtableApi.RetrieveUserIdAndScopes



Retrieve user’s ID, associated scopes, and email if available.

**Parameters**

This tool does not take any parameters.

## AirtableApi.CreateAirtableWorkspace



Create a new workspace in Airtable.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AirtableApi.DeleteWorkspace



Deletes a specified Airtable workspace.

**Parameters**

-   **workspace\_id** (`string`, required) The unique identifier of the workspace to delete. Ensure no important data is lost before proceeding.

## AirtableApi.GetWorkspaceCollaborators



Retrieve information about workspace collaborators and invites.

**Parameters**

-   **workspace\_identifier** (`string`, required) The unique identifier of the workspace to retrieve collaborators and outstanding invites for. Provide the ID as a string.
-   **include\_additional\_information** (`array[string]`, optional) List of additional fields to include in the response. Specify field names as strings, like ‘email’ or ‘role’.

## AirtableApi.AddWorkspaceCollaborator



Add a collaborator to an Airtable workspace.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **workspace\_id** (`string`, optional) The unique identifier of the Airtable workspace where the collaborator will be added. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AirtableApi.RemoveWorkspaceCollaborator



Remove a collaborator from an Airtable workspace.

**Parameters**

-   **collaborator\_identifier** (`string`, required) The ID of the user or group to be removed from the workspace.
-   **workspace\_id** (`string`, required) The unique identifier of the Airtable workspace from which to remove a collaborator.

## AirtableApi.UpdateWorkspaceCollaboratorPermission



Modify a collaborator’s permission level in a workspace.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **workspace\_id** (`string`, optional) The unique identifier of the workspace where the collaborator’s permissions will be updated. This is required to specify which workspace is being modified. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **collaborator\_id** (`string`, optional) The identifier for the user or group whose permissions are being updated in the workspace. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AirtableApi.DeleteWorkspaceInvite



Delete a workspace invite.

**Parameters**

-   **invite\_id** (`string`, required) The unique identifier of the workspace invite to delete.
-   **workspace\_id** (`string`, required) The ID of the workspace from which the invite will be deleted. This is required to specify which workspace’s invite is being revoked.

## AirtableApi.MoveAirtableBase



Move a base between Airtable workspaces.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **target\_workspace\_id** (`string`, optional) The ID of the target workspace where the base will be moved. It should be a valid string ID of an existing workspace within the same Airtable enterprise. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AirtableApi.UpdateWorkspaceRestrictions



Updates sharing restrictions for an Airtable workspace.

**Parameters**

-   **workspace\_id** (`string`, required) The unique identifier for the Airtable workspace to update restrictions.
-   **invite\_creation\_restriction** (`string`, optional) Defines who can create invites in the workspace. Choose between ‘unrestricted’ or ‘onlyOwners’.
-   **share\_creation\_restriction** (`string`, optional) Specify the sharing creation restriction. Choose between ‘unrestricted’ or ‘onlyOwners’.

## AirtableApi.UploadAttachmentToAirtable



Upload attachments to an Airtable record’s cell.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **airtable\_base\_id** (`string`, optional) The unique identifier of the Airtable base where the attachment will be uploaded. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **airtable\_record\_id** (`string`, optional) The unique string identifier for the Airtable record to which the attachment will be uploaded. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **attachment\_field\_id\_or\_name** (`string`, optional) The ID or name of the field where the attachment will be uploaded. This specifies the target field in the Airtable record. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AirtableApi.DeleteMultipleRecords



Delete multiple records from an Airtable table.

**Parameters**

-   **base\_id** (`string`, required) The unique identifier of the Airtable base containing the records to be deleted.
-   **table\_identifier** (`string`, required) The unique identifier or name of the Airtable table from which records are to be deleted.
-   **record\_ids\_to\_delete** (`array[string]`, optional) An array of record IDs to delete from the table. Each ID should be a string.

## AirtableApi.ListAirtableRecords



Retrieve records from a specified Airtable table.

**Parameters**

-   **base\_id** (`string`, required) The unique identifier for the Airtable base where the table is located.
-   **table\_id\_or\_name** (`string`, required) The ID or name of the Airtable table to retrieve records from. Using table IDs is recommended for consistency.
-   **cell\_format\_method** (`string`, optional) Defines how cell values are returned. Specify ‘json’ for unformatted or ‘string’ for formatted values.
-   **filter\_by\_formula** (`string`, optional) A formula string to filter records. Use Airtable’s formula syntax where functions and operators will be applied to fields.
-   **maximum\_records** (`number`, optional) Specify the maximum number of records to retrieve from the Airtable table.
-   **output\_time\_zone** (`string`, optional) Specifies the time zone for datetimes returned in records. Use IANA time zone format (e.g., ‘America/Los\_Angeles’).
-   **page\_size** (`number`, optional) Number of records per page to fetch. Default is 100.
-   **pagination\_offset** (`string`, optional) A string used for pagination to fetch the next set of records. Use the offset provided in the previous response to continue retrieving records.
-   **record\_metadata\_fields** (`array[string]`, optional) An array of strings specifying which metadata fields to include for each record.
-   **return\_fields\_by\_field\_id** (`boolean`, optional) Return fields by their field ID instead of field name when set to true.
-   **sort\_order** (`string`, optional) Specifies the order of records. Use a JSON string with fields and directions (asc or desc).
-   **specific\_fields** (`string`, optional) Comma-separated list of field names to be included in the response. If omitted, all fields are returned.
-   **specified\_view** (`string`, optional) Specifies the view in the table to be used for record retrieval. Provide the name or ID of the view.
-   **user\_locale** (`string`, optional) Specify the user locale to determine the language and regional settings for the records.

## AirtableApi.UpdateAirtableRecords



Update or upsert multiple records in an Airtable table.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **airtable\_base\_id** (`string`, optional) The unique identifier for the Airtable base where the records will be updated or upserted. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **airtable\_table\_id\_or\_name** (`string`, optional) The ID or name of the Airtable table where records will be updated or upserted. Using the table ID is recommended for less disruption if the table name changes. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AirtableApi.CreateAirtableRecords



Create multiple records in an Airtable base.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **base\_id** (`string`, optional) The unique identifier for the Airtable base where records will be created. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **table\_id\_or\_name** (`string`, optional) The ID or name of the Airtable table where records will be created. Using the table ID is recommended for consistency. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AirtableApi.BulkUpdateAirtable



Update or upsert multiple records in an Airtable table.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **base\_id** (`string`, optional) The unique ID of the Airtable base containing the records to update. This is required to specify the target base. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **table\_identifier** (`string`, optional) The table ID or name in Airtable where the records will be updated. Use the table ID to avoid changes if the name changes. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AirtableApi.DeleteAirtableRecord



Deletes a single record from an Airtable base and table.

**Parameters**

-   **airtable\_base\_id** (`string`, required) The unique identifier for the Airtable base from which the record will be deleted. This ID is required to specify the correct base.
-   **record\_id** (`string`, required) The unique identifier of the record to be deleted from the specified table in Airtable.
-   **table\_identifier** (`string`, required) The ID or name of the Airtable table from which the record should be deleted. This specifies which table within the base to target.

## AirtableApi.AirtableGetRecord



Retrieve a single record from an Airtable table.

**Parameters**

-   **airtable\_base\_id** (`string`, required) The unique identifier for the Airtable base containing the table from which to retrieve the record. This ID is required to locate the correct base and perform the record search.
-   **record\_id** (`string`, required) The unique identifier for the record you wish to retrieve from the Airtable table. This ID should be valid and correspond to a record within the specified base.
-   **table\_identifier** (`string`, required) Specify the table’s ID or name from which to retrieve the record.
-   **cell\_format** (`string`, optional) Specify how cell values should be formatted. Options may include ‘json’ or ‘string’.
-   **return\_fields\_by\_field\_id** (`boolean`, optional) If true, fields are returned by Field ID instead of names.

## AirtableApi.UpdateAirtableRecord



Update a single Airtable record with specified fields.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **base\_id** (`string`, optional) The unique identifier of the Airtable base where the record exists. This ID is required to specify which base to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **table\_id\_or\_name** (`string`, optional) The identifier or name of the Airtable table where the record resides. Using table IDs is recommended for stability. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **airtable\_record\_id** (`string`, optional) The unique identifier for the Airtable record you want to update. It is required to specify which record to modify. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AirtableApi.ModifyAirtableEntry



Update a specific record in an Airtable table.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **base\_id** (`string`, optional) The unique identifier for the Airtable base. This specifies which base the record belongs to. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **table\_identifier** (`string`, optional) The unique identifier or name of the Airtable table where the record resides. Prefer using table IDs to avoid changes when table names are updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **record\_identifier** (`string`, optional) Unique identifier for the Airtable record to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AirtableApi.GetRecordComments



Retrieve comments for a specific record in Airtable.

**Parameters**

-   **base\_id** (`string`, required) The unique identifier for the Airtable base containing the record.
-   **record\_id** (`string`, required) Unique identifier for the record in Airtable whose comments are to be retrieved.
-   **table\_identifier** (`string`, required) The unique ID or name of the table containing the record. Specify either the ID or name to locate the table.
-   **pagination\_offset** (`string`, optional) A string used for pagination to fetch the next set of comments. Generally returned from a previous API call.
-   **results\_page\_size** (`number`, optional) Number of comments to return per page. Useful for pagination.

## AirtableApi.AddRecordComment



Creates a comment on a specified record.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **base\_identifier** (`string`, optional) The unique identifier of the Airtable base where the record is located. This is required to specify which base contains the record you want to comment on. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **table\_identifier** (`string`, optional) The ID or name of the table where the record is located. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **record\_identifier** (`string`, optional) The unique identifier of the record where the comment will be added. This value specifies which record in Airtable will receive the comment. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AirtableApi.DeleteCommentFromRecord



Delete a comment from a record in Airtable.

**Parameters**

-   **airtable\_base\_id** (`string`, required) The ID of the Airtable base. This is required to identify which base the comment belongs to.
-   **comment\_id\_to\_delete** (`string`, required) The unique identifier of the comment to be deleted. Required for deletion.
-   **record\_id** (`string`, required) The unique identifier for the record from which the comment will be deleted.
-   **table\_id\_or\_name** (`string`, required) The ID or name of the table containing the record from which the comment will be deleted.

## AirtableApi.UpdateRecordComment



Update a comment on a specific record.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **base\_identifier** (`string`, optional) The unique identifier for the Airtable base containing the record. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **table\_id\_or\_name** (`string`, optional) The ID or name of the Airtable table where the record with the comment is located. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **record\_id** (`string`, optional) The unique identifier of the record whose comment you want to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **comment\_id** (`string`, optional) The unique identifier of the comment to update. Ensure it belongs to the authorized user. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AirtableApi.DeleteRecordsByPrimaryKeys



Delete records from a HyperDB table using primary keys.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **enterprise\_account\_id** (`string`, optional) The unique identifier for the enterprise account. Required to access the correct HyperDB table. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **data\_table\_id** (`string`, optional) The unique identifier for the target HyperDB table from which records will be deleted. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## AirtableApi.ReadHyperdbTableRecords



Retrieve records from a specified HyperDB table.

**Parameters**

-   **data\_table\_id** (`string`, required) The identifier of the HyperDB table from which records are to be retrieved. It is required to specify the correct table ID to access the corresponding data.
-   **enterprise\_account\_id** (`string`, required) The unique identifier for the enterprise account. Required to access records from the specified HyperDB table.
-   **fields\_to\_retrieve** (`array[string]`, optional) List of field names to retrieve from the HyperDB table records. Specify as an array of strings.
-   **maximum\_records\_to\_retrieve** (`number`, optional) The maximum number of records to retrieve from the HyperDB table. Specify an integer value to limit the number of records returned.
-   **pagination\_cursor** (`string`, optional) A string representing the position within the dataset to start retrieving records from. Use for paginated data retrieval.
-   **primary\_keys\_to\_retrieve** (`array[string]`, optional) An array of primary key strings to specify which records to retrieve from the HyperDB table.

## AirtableApi.UpsertAirtableRecords



Update or insert records in an Airtable HyperDB table.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **enterprise\_account\_id** (`string`, optional) The identifier for the Airtable enterprise account. Required for accessing the HyperDB table. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **data\_table\_id** (`string`, optional) The identifier for the HyperDB data table in Airtable. Required for targeting the specific table for upsert operations. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## Reference

Below is a reference of enumerations used by some of the tools in the AirtableApi MCP Server:

### ToolMode

-   **GET\_REQUEST\_SCHEMA**: `get_request_schema`
-   **EXECUTE**: `execute`

* * *

## Auth

The Arcade Airtable MCP Server uses the [Airtable auth provider](/references/auth-providers/airtable.md) to connect to users’ Airtable accounts.

With the Arcade Cloud Platform, there’s nothing to configure. Your users will see `Arcade` as the name of the application that’s requesting permission.

With a self-hosted installation of Arcade, you need to [configure the Airtable auth provider](/references/auth-providers/airtable.md#configuring-airtable-auth) with your own Airtable app credentials.

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_airtable_api ``` Learn more](/guides/deployment-hosting.md)

Last updated on February 6, 2026

[Reference](/en/resources/integrations/productivity/outlook-mail/reference.md)
[AsanaApi](/en/resources/integrations/productivity/asana-api.md)
