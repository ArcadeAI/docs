---
title: "WeaviateApi"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Databases](/en/resources/integrations/databases/postgres.md)
WeaviateApi

# WeaviateApi

Arcade Starter

**Description:** Tools that enable LLMs to interact directly with the weaviate API.

**Author:** Arcade

**Auth:** API Key

[![PyPI Version](https://img.shields.io/pypi/v/arcade_weaviate_api)](https://pypi.org/project/arcade_weaviate_api/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_weaviate_api)](https://pypi.org/project/arcade_weaviate_api/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_weaviate_api)](https://pypi.org/project/arcade_weaviate_api/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_weaviate_api)](https://pypi.org/project/arcade_weaviate_api/)

WeaviateApi is a [Starter MCP Server](/guides/create-tools/improve/types-of-tools.md#starter-tools)
: each tool mirrors one HTTP endpoint and offers LLMs a way to interact with the low-level API.



Differently from [Optimized MCP Servers](/guides/create-tools/improve/types-of-tools.md#optimized-tools)
, Starter tools are heavily influenced by the original API design, which is not usually optimized for LLM usage. For this reason, we recommend thoroughly evaluating the tools with your Agents or chatbots before using it in production. [Read more](/guides/create-tools/improve/types-of-tools.md) about Optimized vs Starter tools.

The WeaviateApi MCP Server offers a comprehensive suite of tools for managing and interacting with Weaviate, a vector search engine. Users can perform a variety of actions, including:

## Authentication

The Arcade Weaviate API MCP Server requires two environment variables to authenticate with your Weaviate instance:

-   `WEAVIATE_API_KEY`
-   `WEAVIATE_SERVER_URL`

**How to obtain your credentials:**

1.  Log in to your [Weaviate Console](https://console.weaviate.cloud/)
     
2.  Select your Weaviate cluster
3.  Navigate to **Details** or **API Keys** section
4.  Click **Create API Key** or use an existing key
5.  Copy your **API Key**
6.  Copy your **Cluster URL** (this is your server URL and must include `https://`)

**Note:** The `WEAVIATE_SERVER_URL` must include the full URL with the `https://` protocol (e.g., `https://your-cluster.weaviate.network`).

For more details, see the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication) .

## Available Tools

Tool Name

Description

WeaviateApi.DiscoverApiEndpoints

Retrieve links to available REST API endpoints.

WeaviateApi.CheckWeaviateLiveness

Check if the Weaviate instance is running properly.

WeaviateApi.CheckWeaviateReadiness

Check if the Weaviate instance is ready to accept traffic.

WeaviateApi.GetOidcDiscovery

Fetches OIDC discovery details for Weaviate authentication.

WeaviateApi.ReplicateShardReplica

Initiates replication of a shard replica to a target node.

WeaviateApi.DeleteAllReplications

Schedule deletion of all replication operations across the system.

WeaviateApi.ForceDeleteReplications

Forcefully delete replication operations with caution.

WeaviateApi.FetchReplicationStatus

Retrieve the status of a specific replication operation.

WeaviateApi.CancelReplicationOperation

Cancel an active replication operation.

WeaviateApi.ListReplicationStatus

Retrieve registered replication operations and details.

WeaviateApi.CancelReplication

Cancel an active replication operation by ID.

WeaviateApi.FetchShardingState

Fetch the current sharding state and replica details for collections.

WeaviateApi.GetAuthenticatedUserInfo

Retrieve details about the authenticated user and their roles.

WeaviateApi.ListDbUsers

Retrieve all database users and their roles and statuses.

WeaviateApi.GetDatabaseUserInfo

Retrieve information about a specific database user.

WeaviateApi.CreateDatabaseUser

Create a new database user and obtain an API key.

WeaviateApi.DeleteDatabaseUser

Delete a specific database user.

WeaviateApi.RotateUserApiKey

Revoke and regenerate the API key for a database user.

WeaviateApi.ActivateDatabaseUser

Activate a deactivated database user account.

WeaviateApi.DeactivateDatabaseUser

Deactivate a database user account.

WeaviateApi.GetRolesAndPermissions

Retrieve all roles and their assigned permissions.

WeaviateApi.CreateRoleWithPermissions

Create a new role with specified permissions.

WeaviateApi.AddPermissionsToRole

Add new permissions to a role without affecting existing ones.

WeaviateApi.RevokeRolePermissions

Revoke permissions from a specified role.

WeaviateApi.FetchRoleByName

Fetch role details using its name.

WeaviateApi.DeleteRole

Delete a role and revoke its permissions system-wide.

WeaviateApi.CheckRolePermission

Check if a role has specific permissions in the system.

WeaviateApi.GetUsersByRole

Retrieve users with a specific role assignment.

WeaviateApi.GetGroupsForRole

Retrieve groups assigned to a specific role.

WeaviateApi.GetUserRoles

Retrieve all roles assigned to a specific user.

WeaviateApi.AssignRolesToUser

Assign roles to a user in the system.

WeaviateApi.RevokeUserRole

Remove roles from a specified user in the system.

WeaviateApi.AssignRoleToGroup

Assign roles to a specific group.

WeaviateApi.RevokeRoleFromGroup

Revoke roles from a specified group to manage permissions.

WeaviateApi.GetRolesForGroup

Retrieve roles assigned to a specific group.

WeaviateApi.RetrieveGroupNames

Retrieve available group names for a specified type.

WeaviateApi.ListDataObjects

Retrieve a list of data objects from a specified collection.

WeaviateApi.CreateObjectInWeaviate

Create a new data object in Weaviate.

WeaviateApi.GetDataObject

Retrieve a data object using collection name and UUID.

WeaviateApi.UpdateObjectProperties

Replace properties of a data object using its class and ID.

WeaviateApi.DeleteDataObject

Delete a data object from a specified collection using its UUID.

WeaviateApi.UpdateDataObject

Update specific properties of a data object.

WeaviateApi.ReplaceObjectReferences

Replace existing references for an object in Weaviate.

WeaviateApi.AddReferenceToObject

Add a reference to an object's property.

WeaviateApi.DeleteReferenceFromObject

Delete a specific reference from an object's property.

WeaviateApi.ValidateDataObjectStructure

Validate a data object's structure against the schema.

WeaviateApi.BatchRegisterObjects

Register multiple data objects in a single request.

WeaviateApi.DeleteMultipleObjects

Deletes multiple data objects using specified filter criteria.

WeaviateApi.BatchCreateReferences

Batch create cross-references between items in a collection.

WeaviateApi.ExecuteGraphqlQuery

Executes a GraphQL query on Weaviate.

WeaviateApi.ExecuteGraphqlBatchQueries

Execute multiple GraphQL queries in a single request.

WeaviateApi.GetWeaviateInstanceMeta

Get meta-information about a Weaviate instance.

WeaviateApi.RetrieveDatabaseSchema

Retrieve definitions of all classes in the database schema.

WeaviateApi.CreateSchemaObject

Create a new collection (class) in Weaviate.

WeaviateApi.RetrieveCollectionSchema

Retrieve the schema of a specified collection.

WeaviateApi.UpdateCollectionSettings

Update settings of an existing collection.

WeaviateApi.DeleteSchemaCollection

Permanently delete a collection from the schema.

WeaviateApi.AddPropertyToCollection

Add a new property to an existing collection schema.

WeaviateApi.GetCollectionShardStatus

Retrieves status of shards for a specified collection.

WeaviateApi.UpdateShardStatus

Update the status of a specific shard in a collection.

WeaviateApi.GetCollectionTenants

Retrieve tenants for a specified collection.

WeaviateApi.UpdateTenantStatus

Update the activity status of specified tenants.

WeaviateApi.CreateTenants

Create new tenants in a specified collection.

WeaviateApi.DeleteTenants

Permanently delete specified tenants from a collection.

WeaviateApi.GetTenantDetails

Retrieve details about a specific tenant's status.

WeaviateApi.RetrieveAliases

Retrieve all aliases from the system.

WeaviateApi.CreateAliasMapping

Create a new alias for a collection in Weaviate.

WeaviateApi.RetrieveAliasDetails

Retrieve details about a specific alias by its name.

WeaviateApi.UpdateCollectionAlias

Redirect an alias to a different collection.

WeaviateApi.DeleteAlias

Delete an existing alias from the system.

WeaviateApi.ListBackups

Retrieve all backup IDs and their statuses.

WeaviateApi.CreateBackup

Initiates backup creation for specified collections.

WeaviateApi.CheckBackupStatus

Get the current status of a backup creation process.

WeaviateApi.CancelBackup

Cancel a backup by its ID from a specified backend storage.

WeaviateApi.CheckBackupRestoreStatus

Check the status of a backup restoration process.

WeaviateApi.RestoreBackup

Restore collections from a specified backup.

WeaviateApi.GetWeaviateClusterStatistics

Get Weaviate cluster Raft protocol statistics.

WeaviateApi.GetClusterNodeStatus

Retrieve status information about all nodes in a cluster.

WeaviateApi.GetShardHostNodesStatus

Retrieve status of nodes hosting shards for a collection.

WeaviateApi.ListDistributedTasks

Retrieve all distributed tasks in the cluster.

WeaviateApi.InitiateClassificationTask

Initiate a classification task in the background.

WeaviateApi.GetClassificationStatus

Retrieve status and results of a classification task.

If you need to perform an action that’s not listed here, you can [get in touch with us](mailto:contact@arcade.dev) to request a new tool, or [create your own tools](/guides/create-tools/tool-basics/build-mcp-server.md).

## WeaviateApi.DiscoverApiEndpoints



Retrieve links to available REST API endpoints.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.CheckWeaviateLiveness



Check if the Weaviate instance is running properly.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.CheckWeaviateReadiness



Check if the Weaviate instance is ready to accept traffic.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.GetOidcDiscovery



Fetches OIDC discovery details for Weaviate authentication.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.ReplicateShardReplica



Initiates replication of a shard replica to a target node.

**Parameters**

-   **shard\_name** (`string`, required) The name of the shard whose replica is to be moved or copied. Specify the shard to initiate the operation.
-   **source\_node** (`string`, required) The name of the Weaviate node currently hosting the shard replica to be moved or copied.
-   **target\_collection\_name** (`string`, required) The name of the collection to which the target shard belongs in the Weaviate database.
-   **target\_weaviate\_node** (`string`, required) Name of the Weaviate node for creating the new shard replica during the operation.
-   **replication\_operation\_type** (`string`, optional) Specifies whether to ‘COPY’ or ‘MOVE’ the shard replica. Defaults to ‘COPY’ if not provided.

**Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.DeleteAllReplications



Schedule deletion of all replication operations across the system.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.ForceDeleteReplications



Forcefully delete replication operations with caution.

**Parameters**

-   **collection\_name** (`string`, optional) The name of the collection associated with the shard being replicated.
-   **dry\_run** (`boolean`, optional) When set to true, the operation simulates the deletion and returns the expected result without executing it.
-   **replication\_operation\_id** (`string`, optional) The unique identifier (ID) of the replication operation to be forcefully deleted.
-   **shard\_identifier** (`string`, optional) The unique identifier of the shard involved in the replication operations.
-   **target\_node\_name** (`string`, optional) The name of the target node where replication operations are registered.

**Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.FetchReplicationStatus



Retrieve the status of a specific replication operation.

**Parameters**

-   **replication\_operation\_id** (`string`, required) The unique identifier for the replication operation to fetch details for.
-   **include\_history** (`boolean`, optional) Set to true to include the history of the replication operation.

**Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.CancelReplicationOperation



Cancel an active replication operation.

**Parameters**

-   **replication\_operation\_id** (`string`, required) The unique identifier of the replication operation to be canceled and deleted.

**Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.ListReplicationStatus



Retrieve registered replication operations and details.

**Parameters**

-   **collection\_name** (`string`, optional) Specify the name of the collection for which to retrieve replication details.
-   **include\_replication\_history** (`boolean`, optional) Set to true to include the history of the replication operation, false to exclude it.
-   **shard\_name** (`string`, optional) The specific shard for which to retrieve replication details.
-   **target\_node\_name** (`string`, optional) The name of the target node to retrieve replication operation details for.

**Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.CancelReplication



Cancel an active replication operation by ID.

**Parameters**

-   **replication\_operation\_id** (`string`, required) The ID of the replication operation you wish to cancel. This is a string identifier for the specific operation.

**Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.FetchShardingState



Fetch the current sharding state and replica details for collections.

**Parameters**

-   **collection\_name** (`string`, optional) The name of the collection to retrieve the sharding state for.
-   **target\_shard** (`string`, optional) Specify the shard name to retrieve its sharding state in a collection.

**Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.GetAuthenticatedUserInfo



Retrieve details about the authenticated user and their roles.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.ListDbUsers



Retrieve all database users and their roles and statuses.

**Parameters**

-   **include\_last\_used\_time** (`boolean`, optional) Include the last time users were utilized in the response.

**Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.GetDatabaseUserInfo



Retrieve information about a specific database user.

**Parameters**

-   **database\_user\_name** (`string`, required) The unique identifier or name of the database user to retrieve information for.
-   **include\_last\_used\_time** (`boolean`, optional) Set to true to include the last used time in the user’s information.

**Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.CreateDatabaseUser



Create a new database user and obtain an API key.

**Parameters**

-   **user\_name** (`string`, required) Specify the name for the new database user. It should be a string that identifies the user.
-   **disable\_import\_experimental** (`boolean`, optional) Set to true to prevent importing an API key from a static user. Experimental and will be removed.
-   **set\_creation\_time\_experimental** (`string`, optional) EXPERIMENTAL: Set the given time as creation time. This will be removed in future versions.

**Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.DeleteDatabaseUser



Delete a specific database user.

**Parameters**

-   **user\_identifier** (`string`, required) Specify the name of the user you want to delete. This cannot be the current user.

**Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.RotateUserApiKey



Revoke and regenerate the API key for a database user.

**Parameters**

-   **database\_user\_name** (`string`, required) The name of the database user for which the API key will be rotated.

**Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.ActivateDatabaseUser



Activate a deactivated database user account.

**Parameters**

-   **user\_name** (`string`, required) The name of the database user to activate.

**Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.DeactivateDatabaseUser



Deactivate a database user account.

**Parameters**

-   **database\_user\_id** (`string`, required) The unique identifier for the database user to be deactivated.
-   **revoke\_api\_key** (`boolean`, optional) Revoke the user’s API key when deactivating. Set to true to enable.

**Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.GetRolesAndPermissions



Retrieve all roles and their assigned permissions.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.CreateRoleWithPermissions



Create a new role with specified permissions.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.AddPermissionsToRole



Add new permissions to a role without affecting existing ones.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **role\_id** (`string`, optional) The ID of the role to which new permissions will be added. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.RevokeRolePermissions



Revoke permissions from a specified role.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **role\_name** (`string`, optional) The name of the role from which permissions are being revoked. Removing all permissions will delete the role. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.FetchRoleByName



Fetch role details using its name.

**Parameters**

-   **role\_name** (`string`, required) The name of the role to fetch details for.

**Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.DeleteRole



Delete a role and revoke its permissions system-wide.

**Parameters**

-   **role\_name** (`string`, required) Specify the name of the role to be deleted and revoked from users.

**Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.CheckRolePermission



Check if a role has specific permissions in the system.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **role\_name** (`string`, optional) The name of the role to check permissions for. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.GetUsersByRole



Retrieve users with a specific role assignment.

**Parameters**

-   **role\_id** (`string`, required) The unique identifier for the role to fetch associated users.

**Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.GetGroupsForRole



Retrieve groups assigned to a specific role.

**Parameters**

-   **role\_name** (`string`, required) The unique name of the role to retrieve associated groups.

**Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.GetUserRoles



Retrieve all roles assigned to a specific user.

**Parameters**

-   **user\_id** (`string`, required) The unique name or identifier of the user for whom roles are being retrieved.
-   **user\_type** (`string`, required) Specify the user type: ‘oidc’ for OpenID Connect or ‘db’ for database.
-   **include\_detailed\_role\_information** (`boolean`, optional) Set to true to include detailed role information like assigned permissions.

**Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.AssignRolesToUser



Assign roles to a user in the system.

**Parameters**

-   **user\_name** (`string`, required) The name or identifier of the user to assign roles to.
-   **assigned\_roles** (`array[string]`, optional) List of roles to assign to the specified user. Each role should be a string.
-   **user\_type** (`string`, optional) Specify the user type. Choose ‘db’ for Weaviate managed users or ‘oidc’ for users managed by an external OIDC provider.

**Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.RevokeUserRole



Remove roles from a specified user in the system.

**Parameters**

-   **user\_id** (`string`, required) The unique identifier or name of the user from whom roles will be revoked.
-   **roles\_to\_revoke** (`array[string]`, optional) A list of roles to be removed from the specified user. Provide each role as a string in the array.
-   **user\_type** (`string`, optional) Specify the user type: `db` for Weaviate-managed or `oidc` for external OIDC-managed users.

**Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.AssignRoleToGroup



Assign roles to a specific group.

**Parameters**

-   **group\_name** (`string`, required) The name of the group to which roles will be assigned.
-   **group\_type** (`string`, optional) Indicate if the group contains OIDC or database users. Choose ‘oidc’ for OIDC users.
-   **roles\_to\_assign** (`array[string]`, optional) A list of roles to assign to a specified group. Each role is a string.

**Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.RevokeRoleFromGroup



Revoke roles from a specified group to manage permissions.

**Parameters**

-   **group\_name** (`string`, required) The name of the group from which roles will be revoked.
-   **group\_type** (`string`, optional) Specifies whether the group contains OIDC or database users.
-   **roles\_to\_revoke** (`array[string]`, optional) An array of role names to revoke from the specified group.

**Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.GetRolesForGroup



Retrieve roles assigned to a specific group.

**Parameters**

-   **group\_name** (`string`, required) The unique name of the group to retrieve roles for.
-   **group\_type** (`string`, required) Specifies the type of the group, either ‘db’ or ‘oidc’.
-   **include\_full\_role\_definitions** (`boolean`, optional) Include full role definitions with all permissions if true; return only role names if false.

**Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.RetrieveGroupNames



Retrieve available group names for a specified type.

**Parameters**

-   **group\_type** (`string`, required) Specifies the group type to retrieve, either ‘oidc’ or ‘db’.

**Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.ListDataObjects



Retrieve a list of data objects from a specified collection.

**Parameters**

-   **collection\_name** (`string`, optional) Specifies the collection name to query objects from. If not provided, no objects will be returned.
-   **include\_additional\_information** (`string`, optional) Include additional information types such as `classification`, `vector`, or `interpretation`.
-   **maximum\_items\_per\_page** (`integer`, optional) The maximum number of items to be returned per page. The default is 25 unless set otherwise as an environment variable.
-   **query\_start\_index** (`integer`, optional) The starting index for the result window. Retrieves `offset+limit` results and returns `limit` results from this index onward. Cannot be used with `after`. Should be used with `limit`.
-   **sort\_order** (`string`, optional) Specify how to order the data within the sorted field(s). Use ‘asc’ for ascending and ‘desc’ for descending. Should match the order of fields used in `sort`. Multiple values should be separated by commas.
-   **sort\_properties** (`string`, optional) Names of properties to sort by, e.g., ‘city’ or ‘country,city’.
-   **tenant\_identifier** (`string`, optional) Specifies the tenant for requests targeting a multi-tenant collection (class).
-   **threshold\_uuid\_after** (`string`, optional) A UUID to retrieve objects after, excluding this object. Use with `class` and `limit`. Leave empty for the start.

**Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.CreateObjectInWeaviate



Create a new data object in Weaviate.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **consistency\_level\_replica\_acknowledgement** (`string`, optional) Specifies the number of replicas that must confirm the request for it to be successful. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.GetDataObject



Retrieve a data object using collection name and UUID.

**Parameters**

-   **collection\_name** (`string`, required) Name of the collection (class) the object belongs to.
-   **object\_uuid** (`string`, required) Unique UUID of the object to be retrieved from the specified collection.
-   **include\_additional\_information** (`string`, optional) Specify additional info to include: `classification`, `vector`, or `interpretation`.
-   **required\_replica\_acknowledgment** (`string`, optional) Specifies how many replicas must confirm a request for success. Relates to consistency level.
-   **target\_node\_name** (`string`, optional) Specify the target node to fulfill the request.
-   **tenant\_identifier** (`string`, optional) Specify the tenant for a multi-tenant collection request.

**Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.UpdateObjectProperties



Replace properties of a data object using its class and ID.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **collection\_name** (`string`, optional) The name of the class (collection) to which the object belongs. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **object\_uuid** (`string`, optional) Unique UUID of the object to be replaced. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **required\_replica\_acknowledgement** (`string`, optional) Specifies how many replicas must acknowledge a request for it to be successful. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.DeleteDataObject



Delete a data object from a specified collection using its UUID.

**Parameters**

-   **collection\_name** (`string`, required) Name of the collection (class) the object belongs to.
-   **object\_uuid** (`string`, required) Unique UUID of the object to be deleted from the collection.
-   **replica\_acknowledgment\_level** (`string`, optional) Specifies the number of replicas needed to confirm request success.
-   **tenant\_identifier** (`string`, optional) Specifies the tenant when targeting a multi-tenant collection (class).

**Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.UpdateDataObject



Update specific properties of a data object.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **collection\_name** (`string`, optional) Specifies the name of the collection or class the object belongs to. This identifies where the object is stored. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **object\_uuid** (`string`, optional) Unique UUID of the object to be patched within the specified collection. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **consistency\_level** (`string`, optional) Specify the number of replicas that must acknowledge the request for success. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.ReplaceObjectReferences



Replace existing references for an object in Weaviate.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **collection\_name** (`string`, optional) Name of the collection the source object belongs to. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **source\_object\_uuid** (`string`, optional) Unique UUID of the source object to identify it for reference replacement. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **reference\_property\_name** (`string`, optional) Unique name of the reference property for the source object to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **consistency\_level** (`string`, optional) Defines the required number of replica acknowledgements for request success. Only used when mode is ‘execute’.
-   **tenant\_identifier** (`string`, optional) Specifies the tenant in a request targeting a multi-tenant collection (class). Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.AddReferenceToObject



Add a reference to an object’s property.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **source\_class\_name** (`string`, optional) Name of the collection (class) the source object belongs to. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **source\_object\_uuid** (`string`, optional) Unique UUID identifying the source object to which the reference will be added. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **reference\_property\_name** (`string`, optional) Unique name of the reference property of the source object to which the reference will be added. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **required\_consistency\_level** (`string`, optional) Specifies the number of replicas that must acknowledge a request for it to be successful. Only used when mode is ‘execute’.
-   **tenant\_identifier** (`string`, optional) Specifies the tenant for multi-tenant collection requests in a Weaviate class. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.DeleteReferenceFromObject



Delete a specific reference from an object’s property.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **collection\_name** (`string`, optional) Name of the collection (class) the source object belongs to. This identifies where the object is located. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **source\_object\_uuid** (`string`, optional) Unique UUID of the source object from which the reference will be deleted. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **reference\_property\_name** (`string`, optional) Unique name of the reference property of the source object from which to delete the reference. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **required\_consistency\_level** (`string`, optional) Specifies how many replicas must acknowledge the request for success. Only used when mode is ‘execute’.
-   **tenant\_identifier** (`string`, optional) Specifies the tenant in a request targeting a multi-tenant collection (class). Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.ValidateDataObjectStructure



Validate a data object’s structure against the schema.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.BatchRegisterObjects



Register multiple data objects in a single request.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **consistency\_level** (`string`, optional) Specifies how many replicas must confirm a request for it to be successful. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.DeleteMultipleObjects



Deletes multiple data objects using specified filter criteria.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **replica\_acknowledgement\_level** (`string`, optional) Specifies the number of replicas that must confirm the request for it to be deemed successful. Only used when mode is ‘execute’.
-   **target\_tenant** (`string`, optional) Specifies the tenant when targeting a multi-tenant collection. Use the tenant’s unique identifier. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.BatchCreateReferences



Batch create cross-references between items in a collection.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **consistency\_level** (`string`, optional) Specifies the number of replicas needed to acknowledge a request for it to be deemed successful. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.ExecuteGraphqlQuery



Executes a GraphQL query on Weaviate.

**Parameters**

-   **graphql\_query** (`string`, optional) A GraphQL query string to execute on Weaviate, following GraphQL syntax.
-   **operation\_name** (`string`, optional) The name of the operation if multiple operations exist in the GraphQL query.
-   **query\_variables** (`json`, optional) Additional JSON variables for the GraphQL query used to provide external values for operations.

**Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.ExecuteGraphqlBatchQueries



Execute multiple GraphQL queries in a single request.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.GetWeaviateInstanceMeta



Get meta-information about a Weaviate instance.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.RetrieveDatabaseSchema



Retrieve definitions of all classes in the database schema.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.CreateSchemaObject



Create a new collection (class) in Weaviate.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.RetrieveCollectionSchema



Retrieve the schema of a specified collection.

**Parameters**

-   **collection\_name** (`string`, required) The name of the collection to retrieve the schema for.

**Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.UpdateCollectionSettings



Update settings of an existing collection.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **collection\_name\_to\_update** (`string`, optional) The name of the collection to be updated. Specify the collection’s class name. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.DeleteSchemaCollection



Permanently delete a collection from the schema.

**Parameters**

-   **collection\_name\_to\_delete** (`string`, required) The name of the collection (class) that will be permanently deleted from the schema.

**Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.AddPropertyToCollection



Add a new property to an existing collection schema.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **collection\_name** (`string`, optional) The name of the collection (class) to which the property will be added. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.GetCollectionShardStatus



Retrieves status of shards for a specified collection.

**Parameters**

-   **collection\_name** (`string`, required) The name of the collection (class) whose shards to query.
-   **tenant\_name** (`string`, optional) The name of the tenant for retrieving shard statuses, applicable only for multi-tenant collections.

**Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.UpdateShardStatus



Update the status of a specific shard in a collection.

**Parameters**

-   **collection\_name** (`string`, required) The name of the collection or class containing the shard to be updated.
-   **shard\_name** (`string`, required) The specific name of the shard to update in the collection.
-   **shard\_status** (`string`, optional) The status to set for the shard, such as ‘READY’ or ‘READONLY’.

**Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.GetCollectionTenants



Retrieve tenants for a specified collection.

**Parameters**

-   **collection\_name** (`string`, required) The name of the collection (class) whose tenants to list.

**Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.UpdateTenantStatus



Update the activity status of specified tenants.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **collection\_name** (`string`, optional) The name of the collection (class) containing the tenants whose status is to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.CreateTenants



Create new tenants in a specified collection.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **collection\_name** (`string`, optional) The name of the multi-tenant enabled collection for creating tenants. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.DeleteTenants



Permanently delete specified tenants from a collection.

**Parameters**

-   **collection\_name** (`string`, required) The name of the collection from which to delete tenants.
-   **tenant\_names\_to\_delete** (`array[string]`, required) An array of tenant names to permanently delete from the specified collection.

**Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.GetTenantDetails



Retrieve details about a specific tenant’s status.

**Parameters**

-   **collection\_name** (`string`, required) The name of the collection (class) that contains the tenant.
-   **tenant\_name** (`string`, required) The name of the tenant to retrieve details about within the specified collection.

**Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.RetrieveAliases



Retrieve all aliases from the system.

**Parameters**

-   **filter\_by\_collection\_name** (`string`, optional) Optional filter to retrieve aliases for a specific collection (class) only. If not provided, returns all aliases.

**Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.CreateAliasMapping



Create a new alias for a collection in Weaviate.

**Parameters**

-   **alias\_name** (`string`, optional) The unique name of the alias, serving as an alternative identifier for the specified collection.
-   **collection\_class\_name** (`string`, optional) The name of the collection (class) to which the alias is mapped.

**Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.RetrieveAliasDetails



Retrieve details about a specific alias by its name.

**Parameters**

-   **alias\_name** (`string`, required) The name of the alias to retrieve details for, including its associated collection.

**Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.UpdateCollectionAlias



Redirect an alias to a different collection.

**Parameters**

-   **alias\_name** (`string`, required) The name of the existing alias that you want to update to point to a new collection.
-   **new\_collection\_name** (`string`, optional) Specify the new collection (class) for the alias to point to.

**Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.DeleteAlias



Delete an existing alias from the system.

**Parameters**

-   **alias\_name** (`string`, required) The name of the alias to be deleted. This identifier specifies which alias mapping to remove from the system.

**Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.ListBackups



Retrieve all backup IDs and their statuses.

**Parameters**

-   **backend\_storage\_system** (`string`, required) Specifies the backend storage system to list backups from (e.g., `filesystem`, `gcs`, `s3`, `azure`).

**Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.CreateBackup



Initiates backup creation for specified collections.

**Parameters**

-   **backend\_storage\_system** (`string`, required) Specifies the backend storage system where the backup will be stored, such as `filesystem`, `gcs`, `s3`, or `azure`.
-   **backup\_chunk\_size** (`integer`, optional) Set the chunk size for the backup with a minimum of 2MB, default of 128MB, and a maximum of 512MB.
-   **backup\_id** (`string`, optional) The ID of the backup. Must be URL-safe, using only lowercase, numbers, underscore, and minus characters.
-   **bucket\_name** (`string`, optional) Name of the bucket, container, or volume where the backup will be stored.
-   **bucket\_path** (`string`, optional) Specifies the path or key within the storage bucket. This helps in locating where the backup will be stored within the bucket.
-   **collections\_to\_include\_in\_backup** (`array[string]`, optional) List of collections to include in the backup. If not set, all collections are included. Cannot be used with `collections_to_exclude_in_backup`.
-   **compression\_level** (`string`, optional) Specifies the compression level for the backup: DefaultCompression, BestSpeed, or BestCompression.
-   **cpu\_utilization\_percentage** (`integer`, optional) Sets desired CPU core utilization, ranging from 1% to 80%, during backup creation.
-   **exclude\_collections** (`array[string]`, optional) List of collections to exclude from the backup. Overrides include if both are set.
-   **storage\_endpoint\_name** (`string`, optional) Name of the storage endpoint, such as s3.amazonaws.com, where the backup will be stored.

**Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.CheckBackupStatus



Get the current status of a backup creation process.

**Parameters**

-   **backup\_backend\_system** (`string`, required) Specifies the backend storage system where the backup resides, such as ‘filesystem’, ‘gcs’, ‘s3’, or ‘azure’.
-   **backup\_identifier** (`string`, required) The unique identifier of the backup. Use only lowercase, numbers, underscores, and minus characters.
-   **backup\_storage\_path** (`string`, optional) Specifies the path within the bucket/container/volume if the backup is not at the root. Optional.
-   **bucket\_name** (`string`, optional) Specifies the bucket, container, or volume name if required by the backend.

**Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.CancelBackup



Cancel a backup by its ID from a specified backend storage.

**Parameters**

-   **backup\_id** (`string`, required) The unique ID of the backup to delete. Must be URL-safe, using lowercase, numbers, underscores, and minus characters.
-   **storage\_backend\_system** (`string`, required) Specifies the backend storage system where the backup resides (e.g., ‘filesystem’, ‘gcs’, ‘s3’, ‘azure’).
-   **backup\_subpath** (`string`, optional) Specifies the optional path within the storage if the backup is not at the root.
-   **specified\_bucket\_name** (`string`, optional) Specifies the bucket, container, or volume name if required by the backend storage system. Optional parameter.

**Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.CheckBackupRestoreStatus



Check the status of a backup restoration process.

**Parameters**

-   **backend\_storage\_system** (`string`, required) Specifies the backend storage system where the backup resides, such as ‘filesystem’, ‘gcs’, ‘s3’, or ‘azure’.
-   **backup\_id** (`string`, required) The URL-safe unique identifier of the backup being restored. Use lowercase, numbers, underscores, and minus characters only.
-   **backup\_bucket\_name** (`string`, optional) Specifies the bucket, container, or volume name if required by the backend.
-   **bucket\_path** (`string`, optional) Specifies the path within the bucket, optional based on backend requirements.

**Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.RestoreBackup



Restore collections from a specified backup.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **backup\_backend\_storage** (`string`, optional) Specifies the backend storage system where the backup resides, such as `filesystem`, `gcs`, `s3`, or `azure`. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **backup\_identifier** (`string`, optional) The unique identifier for the backup to restore. It must be URL-safe and compatible with filesystem paths, using only lowercase letters, numbers, underscores, and minus characters. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.GetWeaviateClusterStatistics



Get Weaviate cluster Raft protocol statistics.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.GetClusterNodeStatus



Retrieve status information about all nodes in a cluster.

**Parameters**

-   **output\_verbosity** (`string`, optional) Controls the verbosity of the output for node status information. Accepted values: `minimal`, `verbose`. Defaults to `minimal`.

**Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.GetShardHostNodesStatus



Retrieve status of nodes hosting shards for a collection.

**Parameters**

-   **collection\_class\_name** (`string`, required) The name of the collection (class) for which to retrieve node status.
-   **output\_verbosity** (`string`, optional) Set the verbosity of the output. Possible values: ‘minimal’, ‘verbose’. Defaults to ‘minimal’.
-   **shard\_name** (`string`, optional) Specifies the name of the shard for which to retrieve node status information. This helps to focus the request on specific shards within a collection.

**Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.ListDistributedTasks



Retrieve all distributed tasks in the cluster.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.InitiateClassificationTask



Initiate a classification task in the background.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## WeaviateApi.GetClassificationStatus



Retrieve status and results of a classification task.

**Parameters**

-   **classification\_task\_id** (`string`, required) The unique identifier (UUID) of the classification task to retrieve its status and results.

**Secrets**

This tool requires the following secrets: `WEAVIATE_API_KEY`, `WEAVIATE_SERVER_URL`. You can obtain these from your [Weaviate Console](https://console.weaviate.cloud/) . Note that `WEAVIATE_SERVER_URL` must include the `https://` protocol. See the [Authentication section](#authentication) above for detailed instructions and the [Weaviate Authentication documentation](https://weaviate.io/developers/weaviate/configuration/authentication)  for more information.

## Reference

Below is a reference of enumerations used by some of the tools in the WeaviateApi MCP Server:

### ToolMode

-   **GET\_REQUEST\_SCHEMA**: `get_request_schema`
-   **EXECUTE**: `execute`

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_weaviate_api ``` Learn more](/guides/deployment-hosting.md)

Last updated on January 5, 2026

[ClickHouse](/en/resources/integrations/databases/clickhouse.md)
[Zendesk](/en/resources/integrations/customer-support/zendesk.md)
