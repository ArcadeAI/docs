---
title: "VercelApi"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Developer Tools](/en/resources/integrations/development/e2b.md)
Vercel API

# VercelApi

Arcade Unoptimized

**Description:** Tools that enable LLMs to interact directly with the vercel API.

**Author:** Arcade

**Auth:** API Key

[![PyPI Version](https://img.shields.io/pypi/v/arcade_vercel_api)](https://pypi.org/project/arcade_vercel_api/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_vercel_api)](https://pypi.org/project/arcade_vercel_api/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_vercel_api)](https://pypi.org/project/arcade_vercel_api/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_vercel_api)](https://pypi.org/project/arcade_vercel_api/)

VercelApi is a [Unoptimized MCP Server](/guides/create-tools/improve/types-of-tools.md#unoptimized-tools)
: each tool mirrors one HTTP endpoint and offers LLMs a way to interact with the low-level API.



Differently from [Optimized MCP Servers](/guides/create-tools/improve/types-of-tools.md#optimized-tools)
, Unoptimized tools are heavily influenced by the original API design, which is not usually optimized for LLM usage. For this reason, we recommend thoroughly evaluating the tools with your Agents or chatbots before using it in production. [Read more](/guides/create-tools/improve/types-of-tools.md) about Optimized vs Unoptimized tools.

The VercelApi MCP Server offers a comprehensive suite of tools for managing Vercel projects, domains, and integrations. Users can efficiently perform actions such as:

## Available Tools

Tool Name

Description

VercelApi.ReadAccessGroup

Retrieve details of a specific access group.

VercelApi.UpdateAccessGroup

Update metadata for an access group.

VercelApi.DeleteAccessGroup

Deletes an access group by ID or name.

VercelApi.ListAccessGroupMembers

Retrieve members of a specific access group.

VercelApi.ListAccessGroups

Retrieve a list of access groups within Vercel.

VercelApi.CreateAccessGroup

Create a new access group on Vercel.

VercelApi.ListAccessGroupProjects

Retrieve a list of projects for a given access group.

VercelApi.CreateAccessGroupProject

Create a project within a specific access group.

VercelApi.GetAccessGroupProject

Retrieve details of a specific access group project.

VercelApi.UpdateAccessGroupProject

Update an access group project in Vercel.

VercelApi.DeleteAccessGroupProject

Delete a specified access group project on Vercel.

VercelApi.RecordCacheEvents

Record artifacts cache usage events for Vercel.

VercelApi.CheckRemoteCachingStatus

Check the status of Remote Caching.

VercelApi.DownloadCacheArtifact

Downloads a cache artifact using its hash identifier.

VercelApi.QueryArtifactsInfo

Retrieve detailed information about multiple artifacts.

VercelApi.CreateNewDeploymentCheck

Create a new deployment check using Vercel API.

VercelApi.ListDeploymentChecks

List all checks for a specific deployment.

VercelApi.GetDeploymentCheckDetails

Retrieve details for a specific deployment check.

VercelApi.UpdateExistingCheck

Updates an existing deployment check.

VercelApi.RerequestCheck

Retries a failed deployment check.

VercelApi.UpdateProjectDataCache

Update the data cache for a Vercel project.

VercelApi.FetchDeploymentLogs

Retrieve build logs for a specific deployment by ID.

VercelApi.UpdateIntegrationDeployment

Update a deployment integration action.

VercelApi.GetDeploymentInfo

Retrieve deployment information by ID or URL.

VercelApi.CreateVercelDeployment

Create a new deployment on Vercel.

VercelApi.CancelDeployment

Cancel a currently building deployment.

VercelApi.PurchaseDomain

Facilitates the purchase of a specified domain.

VercelApi.GetDomainPrice

Retrieve domain price and purchase period details.

VercelApi.CheckDomainAvailability

Check if a domain name is available for purchase.

VercelApi.GetDnsRecords

Retrieve DNS records for a specified domain name.

VercelApi.CreateDnsRecord

Creates a DNS record for a domain.

VercelApi.UpdateDnsRecord

Update an existing DNS record for a domain.

VercelApi.RemoveDnsRecord

Removes an existing DNS record from a domain.

VercelApi.GetSupportedTlds

Retrieve a list of TLDs supported by Vercel.

VercelApi.GetTldPrice

Retrieve base price for a specific TLD.

VercelApi.DomainAvailabilityStatus

Check if a domain is available for purchase.

VercelApi.FetchDomainPrice

Retrieve price data for a specific domain from Vercel.

VercelApi.CheckDomainAvailabilityBulk

Check availability for multiple domains.

VercelApi.GetDomainAuthCode

Retrieve the auth code for transferring a domain from Vercel.

VercelApi.PurchaseDomainVercel

Purchase a domain with Vercel's API.

VercelApi.PurchaseMultipleDomains

Purchase multiple domains simultaneously.

VercelApi.TransferDomainToVercel

Transfer a domain to Vercel from another registrar.

VercelApi.CheckDomainTransferStatus

Retrieve the transfer status of a domain.

VercelApi.RenewDomain

Renews a domain registration through Vercel.

VercelApi.UpdateDomainAutoRenew

Update the auto-renew setting for a domain.

VercelApi.UpdateDomainNameservers

Update the nameservers for a domain.

VercelApi.GetDomainContactInfoSchema

Retrieve the schema for TLD-specific contact information.

VercelApi.GetDomainOrderInfo

Retrieve information about a domain order by its ID.

VercelApi.FetchDomainTransferAvailability

Fetch a domain's transfer status or availability.

VercelApi.GetDomainConfiguration

Retrieve configuration details for a specific domain.

VercelApi.GetDomainInfo

Retrieve information on a single domain from Vercel.

VercelApi.GetRegisteredDomains

Retrieve a list of registered domains for the user or team.

VercelApi.AddNewDomainVercel

Add a new apex domain with Vercel for the user.

VercelApi.UpdateApexDomain

Update or move the apex domain configuration.

VercelApi.DeleteVercelDomain

Delete a domain from Vercel and remove associated aliases.

VercelApi.InvalidateCacheByTags

Mark cache tags as stale for revalidation in the background.

VercelApi.DeleteCacheByTags

Marks cache tags as deleted to revalidate associated entries.

VercelApi.GetEdgeConfigs

Fetch all Edge Configs from Vercel's service.

VercelApi.CreateEdgeConfig

Create a new Edge Configuration.

VercelApi.GetEdgeConfig

Retrieve Edge Config details from Vercel.

VercelApi.UpdateEdgeConfig

Update an existing Edge Config to apply changes.

VercelApi.DeleteEdgeConfig

Delete a Vercel Edge Config by ID.

VercelApi.GetEdgeConfigItems

Retrieve all items from an Edge Config.

VercelApi.UpdateEdgeConfigItems

Batch update Edge Config Items efficiently.

VercelApi.GetEdgeConfigSchema

Retrieve the schema of an Edge Config.

VercelApi.UpdateEdgeConfigSchema

Update an Edge Config's schema to modify its structure.

VercelApi.DeleteEdgeConfigSchema

Deletes an existing Edge Config schema.

VercelApi.GetEdgeConfigItem

Retrieve a specific Edge Config Item by its identifiers.

VercelApi.GetEdgeConfigTokens

Retrieve all tokens of a specific Edge Config.

VercelApi.DeleteEdgeConfigTokens

Delete tokens from an existing Edge Config.

VercelApi.GetEdgeConfigTokenInfo

Retrieve metadata about an Edge Config token.

VercelApi.AddEdgeConfigToken

Adds a token to an existing Edge Config.

VercelApi.RetrieveEdgeConfigBackup

Retrieve a specific Edge Config version from backup storage.

VercelApi.GetEdgeConfigBackups

Retrieve backups of an Edge Config.

VercelApi.ListUserEvents

Fetches a list of user-generated events on Vercel.

VercelApi.RetrieveBillingPlans

Retrieve billing plans for a specific integration and product.

VercelApi.ConnectIntegrationResourceToProject

Connect an integration resource to a Vercel project.

VercelApi.UpdateIntegrationInstallation

Updates an integration installation configuration.

VercelApi.FetchAccountInfo

Fetch the best account or user's contact info.

VercelApi.GetMemberRoleInfo

Retrieve member role and details for a specific member ID.

VercelApi.NotifyVercelOfUpdates

Send update notifications to Vercel for installations or resources.

VercelApi.GetIntegrationResources

Retrieve all resources for a given installation ID.

VercelApi.FetchIntegrationResource

Fetch a resource using its partner ID.

VercelApi.DeleteIntegrationResource

Delete a resource from an integration by ID.

VercelApi.ImportResourceToVercel

Import or synchronize a resource to Vercel.

VercelApi.UpdateResource

Update an existing resource with new information.

VercelApi.SubmitBillingData

Submit billing and usage data to the server.

VercelApi.SubmitInvoiceToVercel

Submit an invoice to Vercel's billing system.

VercelApi.GetInvoiceDetails

Retrieve invoice details and status by ID.

VercelApi.RequestVercelInvoiceRefund

Request a refund for an invoice in Vercel.

VercelApi.SubmitPrepaymentBalances

Submit prepayment balances to Vercel for billing.

VercelApi.UpdateResourceSecrets

Updates the secrets of a specified resource.

VercelApi.UpdateSecretsById

Update the secrets of a Vercel resource by ID.

VercelApi.RetrieveIntegrationConfigurations

Retrieve all configurations for an authenticated integration.

VercelApi.GetIntegrationConfiguration

Retrieve configuration details by ID.

VercelApi.RemoveVercelConfiguration

Delete a Vercel configuration by ID.

VercelApi.ListIntegrationConfigurationProducts

Retrieve products for a specific integration configuration.

VercelApi.ExchangeSsoToken

Exchange OAuth code for an OIDC token to authenticate users.

VercelApi.RetrieveIntegrationLogDrains

Retrieve all integration log drains for the user or team.

VercelApi.CreateIntegrationLogDrain

Sets up an Integration log drain for Vercel.

VercelApi.DeleteIntegrationLogDrain

Delete an Integration log drain by ID.

VercelApi.GetDeploymentRuntimeLogs

Get logs for a specific deployment's runtime.

VercelApi.CreateExperimentationItems

Create one or multiple experimentation items.

VercelApi.UpdateExperimentationItem

Update an existing experimentation item.

VercelApi.DeleteExperimentationItem

Delete an existing experimentation item.

VercelApi.PushEdgeConfig

Push configuration data to Edge Config for syncing.

VercelApi.ListProjectMembers

Retrieve all members of a specified project on Vercel.

VercelApi.AddProjectMember

Add a new member to a Vercel project.

VercelApi.RemoveProjectMember

Removes a member from a specific project.

VercelApi.RetrieveProjectsList

Retrieve the list of user's or team's projects.

VercelApi.CreateNewProject

Create a new project with specified configurations.

VercelApi.GetProjectInfo

Retrieve specific project details using project ID or name.

VercelApi.UpdateProjectDetails

Update a project's fields using its name or ID.

VercelApi.DeleteProject

Delete a Vercel project by ID or name.

VercelApi.UpdateProjectNetworkLinks

Update project connections to shared Secure Compute networks.

VercelApi.CreateCustomEnvironment

Create a custom environment for your Vercel project.

VercelApi.GetCustomProjectEnvironments

Retrieve custom environments for a specified project.

VercelApi.RetrieveCustomEnvironment

Retrieve custom environment details for a project.

VercelApi.UpdateCustomEnvironment

Update a custom environment for a Vercel project.

VercelApi.RemoveCustomEnvironment

Remove a specified custom environment from a project.

VercelApi.RetrieveProjectDomains

Retrieve domains linked to a specific project.

VercelApi.FetchProjectDomain

Fetch domain details for a specific project.

VercelApi.UpdateProjectDomainConfig

Update a project's domain configuration.

VercelApi.RemoveProjectDomain

Removes a domain from a specified project.

VercelApi.AddProjectDomain

Add a domain to a specified Vercel project.

VercelApi.MoveProjectDomain

Transfer a domain from one project to another.

VercelApi.VerifyProjectDomain

Verify the status of a project domain's verification challenge.

VercelApi.GetProjectEnvironmentVariables

Retrieve environment variables for a specified project.

VercelApi.CreateProjectEnvironmentVariables

Create or update environment variables for a Vercel project.

VercelApi.RetrieveProjectEnvironmentVariable

Retrieve the environment variable for a given project.

VercelApi.DeleteProjectEnvVariable

Delete a project's specific environment variable.

VercelApi.EditProjectEnvironmentVariable

Edit a specific environment variable for a project.

VercelApi.DeleteProjectEnvVariables

Delete multiple environment variables from a Vercel project.

VercelApi.UploadClientCertToProject

Upload a client certificate for mTLS authentication.

VercelApi.GetRollingReleaseBillingStatus

Get the billing status for a project's rolling releases.

VercelApi.GetRollingReleaseConfig

Fetch the rolling releases configuration for a project.

VercelApi.DisableRollingReleases

Disable rolling releases for a Vercel project.

VercelApi.UpdateRollingReleaseConfig

Update or disable rolling releases for a Vercel project.

VercelApi.GetRollingRelease

Retrieve the rolling release for a specific project.

VercelApi.AdvanceRolloutStage

Advance a rollout to the next stage when manual approval is required.

VercelApi.ForceCompleteRollingRelease

Complete a rolling release to serve 100% traffic from canary.

VercelApi.InitiateProjectTransfer

Initiate a project transfer request between teams.

VercelApi.AcceptProjectTransfer

Accept a project transfer request on Vercel.

VercelApi.UpdateProjectProtectionBypass

Update the deployment protection bypass for a Vercel project.

VercelApi.PromoteDeploymentToProduction

Promotes a deployment to production without rebuilding it.

VercelApi.GetLastPromoteAliasesStatus

Retrieve aliases and their mapping status from last promote request.

VercelApi.PauseProject

Pause a Vercel project by its ID.

VercelApi.UnpauseProject

Unpause a Vercel project using its project ID.

VercelApi.UpdateAttackChallengeMode

Updates Attack Challenge mode setting for a project.

VercelApi.SetFirewallConfiguration

Update firewall configuration with specified rules.

VercelApi.UpdateFirewallConfig

Modify the existing firewall config for a project.

VercelApi.GetFirewallConfig

Retrieve the active firewall configuration for a project.

VercelApi.GetActiveAttackStatus

Retrieve active attack data from the Vercel firewall.

VercelApi.RetrieveProjectBypassRules

Retrieve the bypass rules for a specified project.

VercelApi.CreateFirewallBypassRule

Create a new firewall bypass rule.

VercelApi.RemoveBypassRule

Removes a bypass rule from the firewall.

VercelApi.CreateIntegrationStore

Create integration stores for FREE and PAID billing plans.

VercelApi.GetTeamMembers

Retrieve a list of team members for a specified team.

VercelApi.InviteUserToTeam

Invite a user to join a Vercel team.

VercelApi.RequestTeamAccess

Request to join a team on Vercel.

VercelApi.CheckTeamAccessStatus

Check the status of a team access request.

VercelApi.JoinVercelTeam

Join a Vercel team using invite code or team ID.

VercelApi.UpdateTeamMember

Update a team member's role or confirm membership.

VercelApi.RemoveTeamMember

Remove or dismiss a team member or leave a team.

VercelApi.GetTeamInfo

Retrieve information for a specified team using teamId.

VercelApi.UpdateTeamInfo

Update information of a specified team.

VercelApi.GetUserTeams

Retrieve all teams for the authenticated user.

VercelApi.CreateVercelTeam

Create a new team in your Vercel account.

VercelApi.DeleteTeam

Delete a team from your Vercel account.

VercelApi.DeleteTeamInviteCode

Delete an active team invite code in Vercel.

VercelApi.RetrieveAuthTokens

Retrieve a list of the current user's authentication tokens.

VercelApi.CreateAuthToken

Create a new authentication token for the user.

VercelApi.RetrieveAuthTokenMetadata

Retrieve metadata about an authentication token.

VercelApi.InvalidateAuthToken

Invalidate an authentication token to revoke access.

VercelApi.GetAuthenticatedUserInfo

Retrieve current authenticated user's information.

VercelApi.InitiateUserDeletion

Initiates user deletion and sends a confirmation email.

VercelApi.CreateVercelWebhook

Create a new webhook in Vercel projects.

VercelApi.ListVercelWebhooks

Retrieve a list of webhooks from Vercel.

VercelApi.GetWebhook

Retrieve details of a specific webhook using its ID.

VercelApi.DeleteVercelWebhook

Delete a specific webhook from Vercel.

VercelApi.GetDeploymentAliases

Fetch aliases for a specific deployment by ID.

VercelApi.SetDeploymentAlias

Assigns a new alias to a Vercel deployment.

VercelApi.ListAliases

Retrieve a list of Vercel aliases for a user or team.

VercelApi.RetrieveVercelAlias

Retrieve Vercel alias information for a host name or alias ID.

VercelApi.DeleteAliasById

Delete a specific alias by its ID.

VercelApi.UpdateUrlProtectionBypass

Update the protection bypass for a Vercel URL.

VercelApi.RetrieveCertificateById

Retrieve a Vercel certificate using its ID.

VercelApi.RemoveCertificate

Remove a certificate from Vercel using its ID.

VercelApi.IssueVercelCertificate

Request a new SSL certificate from Vercel.

VercelApi.UploadCertificate

Uploads a certificate to Vercel.

VercelApi.GetVercelDeploymentFiles

Retrieve the file structure of a Vercel deployment.

VercelApi.RetrieveDeploymentFileContents

Retrieve the contents of a file from a Vercel deployment.

VercelApi.ListVercelDeployments

Retrieve deployments from Vercel for a user or team.

VercelApi.DeleteDeployment

Delete a Vercel deployment using its ID or URL.

If you need to perform an action that’s not listed here, you can [get in touch with us](mailto:contact@arcade.dev) to request a new tool, or [create your own tools](/guides/create-tools/tool-basics/build-mcp-server.md).

## VercelApi.ReadAccessGroup



Retrieve details of a specific access group.

**Parameters**

-   **access\_group\_id\_or\_name** (`string`, required) The ID or name of the access group to retrieve details for.
-   **team\_identifier** (`string`, optional) The identifier of the team to perform the request on behalf of.
-   **team\_slug** (`string`, optional) The Team slug used to perform the request on behalf of the specified team.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.UpdateAccessGroup



Update metadata for an access group.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **access\_group\_id\_or\_name** (`string`, optional) The ID or name of the access group to update. Use either the unique identifier or the group’s name to specify which access group you want to modify. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **team\_identifier** (`string`, optional) The unique identifier for the team on whose behalf the request is performed. Only used when mode is ‘execute’.
-   **team\_slug** (`string`, optional) The identifier for the team, used to perform the request on its behalf. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.DeleteAccessGroup



Deletes an access group by ID or name.

**Parameters**

-   **group\_id\_or\_name** (`string`, required) The ID or name of the access group to be deleted.
-   **team\_identifier** (`string`, optional) The identifier for the team on whose behalf the request is made.
-   **team\_slug** (`string`, optional) The slug for the team on whose behalf the request will be made. This identifies the team uniquely.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.ListAccessGroupMembers



Retrieve members of a specific access group.

**Parameters**

-   **access\_group\_id\_or\_name** (`string`, required) Specify the ID or name of the access group to list its members.
-   **continuation\_cursor\_for\_paging** (`string`, optional) Cursor used to retrieve the next page of access group members.
-   **member\_limit** (`integer`, optional) Specify the maximum number of access group members to return.
-   **member\_search\_query** (`string`, optional) Search for members using their name, username, or email.
-   **team\_identifier** (`string`, optional) The Team identifier for which to list access group members.
-   **team\_slug** (`string`, optional) The unique slug of the team for which you want to list access group members.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.ListAccessGroups



Retrieve a list of access groups within Vercel.

**Parameters**

-   **access\_groups\_limit** (`integer`, optional) Specify the maximum number of access groups to be returned in the response.
-   **continuation\_cursor\_for\_next\_page** (`string`, optional) A string to retrieve the next page of results using a continuation cursor.
-   **max\_projects\_in\_response** (`integer`, optional) Specify the maximum number of projects to include in the response list.
-   **members\_inclusion\_limit** (`integer`, optional) Specify the number of members to include in the response.
-   **project\_id** (`string`, optional) Filter access groups by the specified project ID in Vercel.
-   **search\_access\_groups\_by\_name** (`string`, optional) Provide a name or keyword to search for specific access groups.
-   **team\_identifier** (`string`, optional) The ID of the team for which to list access groups. Specify this to perform the request on behalf of a specific team.
-   **team\_slug** (`string`, optional) A string representing the Team slug to perform the request on behalf of.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.CreateAccessGroup



Create a new access group on Vercel.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **team\_identifier** (`string`, optional) The identifier of the team on whose behalf the access group is being created. Only used when mode is ‘execute’.
-   **team\_slug** (`string`, optional) The unique slug identifier for the team to create the access group for. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.ListAccessGroupProjects



Retrieve a list of projects for a given access group.

**Parameters**

-   **access\_group\_identifier** (`string`, required) The ID or name of the Access Group to list its projects.
-   **continuation\_cursor** (`string`, optional) The continuation cursor used to retrieve the next page of results in a paginated response.
-   **max\_project\_count** (`integer`, optional) Maximum number of access group projects to return. Must be an integer.
-   **team\_identifier** (`string`, optional) The unique identifier for the team to perform the request on behalf of. This specifies which team’s access group projects to list.
-   **team\_slug** (`string`, optional) The slug of the team to perform the request on behalf of. Specify to filter projects by team.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.CreateAccessGroupProject



Create a project within a specific access group.

**Parameters**

-   **access\_group\_id\_or\_name** (`string`, required) Identifier or name of the access group to associate with the project. It helps specify which access group the new project will be part of.
-   **project\_id** (`string`, required) The unique ID of the project to be added to the access group.
-   **project\_role** (`string`, required) The role to be assigned to the project within the access group. Options: ‘ADMIN’, ‘PROJECT\_VIEWER’, ‘PROJECT\_DEVELOPER’.
-   **team\_identifier** (`string`, optional) The unique identifier for the team to perform the request on behalf of.
-   **team\_slug** (`string`, optional) The unique identifier slug for the team on whose behalf the request is made.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.GetAccessGroupProject



Retrieve details of a specific access group project.

**Parameters**

-   **access\_group\_id\_or\_name** (`string`, required) The identifier or name of the access group for the project.
-   **project\_id** (`string`, required) The unique identifier for the project within the access group. It is required to fetch the project details.
-   **team\_identifier** (`string`, optional) The identifier of the team to perform the request on behalf of. This should be a string representing the team’s unique ID.
-   **team\_slug** (`string`, optional) The Team slug to perform the request on behalf of. Provide the specific slug associated with the team.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.UpdateAccessGroupProject



Update an access group project in Vercel.

**Parameters**

-   **access\_group\_id\_or\_name** (`string`, required) Specify the access group by its ID or name to target the update.
-   **project\_id** (`string`, required) The unique identifier for the project to update in the access group.
-   **project\_role** (`string`, required) Specify the project role to add to the access group. Choose from ‘ADMIN’, ‘PROJECT\_VIEWER’, or ‘PROJECT\_DEVELOPER’.
-   **team\_identifier** (`string`, optional) The unique identifier for the team on whose behalf the request is made.
-   **team\_slug** (`string`, optional) The unique identifier for the team to perform the request on behalf of.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.DeleteAccessGroupProject



Delete a specified access group project on Vercel.

**Parameters**

-   **access\_group\_id\_or\_name** (`string`, required) Enter the access group ID or name to identify the specific group for project deletion.
-   **project\_id** (`string`, required) The ID of the project you want to delete from the access group.
-   **team\_identifier** (`string`, optional) The ID of the team to perform the request on behalf of.
-   **team\_slug** (`string`, optional) The slug of the team to perform the deletion on behalf of.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.RecordCacheEvents



Record artifacts cache usage events for Vercel.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **team\_identifier** (`string`, optional) The Team identifier to perform the request on behalf of. Used to specify which team’s cache usage events are being recorded. Only used when mode is ‘execute’.
-   **team\_slug** (`string`, optional) The Team slug to perform the request on behalf of. It identifies the specific team within Vercel. Only used when mode is ‘execute’.
-   **ci\_environment** (`string`, optional) The continuous integration or delivery environment where this artifact is downloaded. Only used when mode is ‘execute’.
-   **is\_interactive\_shell** (`integer`, optional) Set to 1 if the client is an interactive shell, otherwise set to 0. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.CheckRemoteCachingStatus



Check the status of Remote Caching.

**Parameters**

-   **team\_identifier** (`string`, optional) The unique identifier for the team to perform the request on behalf of.
-   **team\_slug** (`string`, optional) The unique slug identifier for the team on whose behalf the request is made.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.DownloadCacheArtifact



Downloads a cache artifact using its hash identifier.

**Parameters**

-   **artifact\_hash** (`string`, required) The unique hash identifier for the cache artifact to download.
-   **ci\_environment** (`string`, optional) Specify the continuous integration or delivery environment from which the artifact is downloaded.
-   **interactive\_shell\_client** (`integer`, optional) Set to 1 if the client is an interactive shell; otherwise set to 0.
-   **team\_identifier** (`string`, optional) The Team identifier to perform the request on behalf of.
-   **team\_slug** (`string`, optional) The slug of the team to perform the request on behalf of, identifying which team’s artifact to download.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.QueryArtifactsInfo



Retrieve detailed information about multiple artifacts.

**Parameters**

-   **artifact\_hashes** (`array[string]`, required) An array of artifact hashes to query information for.
-   **team\_identifier** (`string`, optional) The identifier of the team to perform the request on behalf of.
-   **team\_slug** (`string`, optional) The slug identifying the team for which the request is performed.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.CreateNewDeploymentCheck



Create a new deployment check using Vercel API.

**Parameters**

-   **block\_deployment\_on\_failure** (`boolean`, required) Indicates if the check should block a deployment from succeeding.
-   **check\_name** (`string`, required) The name of the check being created. This is required to identify the check purpose.
-   **deployment\_id** (`string`, required) The unique identifier of the deployment to create the check for.
-   **allow\_rerun\_request** (`boolean`, optional) Allow users to request a rerun of the check if it fails. Use a boolean value.
-   **details\_url** (`string`, optional) A URL that provides further details about the check. Expected format is a valid URL string.
-   **external\_identifier** (`string`, optional) A unique identifier used as an external reference for the check.
-   **page\_path\_to\_check** (`string`, optional) Specify the path of the page that is being checked. This should be a string value representing the specific page path for the deployment check.
-   **team\_identifier** (`string`, optional) The unique identifier used to perform the request on behalf of a team.
-   **team\_slug** (`string`, optional) The slug (unique identifier) of the team to perform the request on behalf of.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.ListDeploymentChecks



List all checks for a specific deployment.

**Parameters**

-   **deployment\_id** (`string`, required) The ID of the deployment to retrieve checks for.
-   **team\_identifier** (`string`, optional) The ID of the team to perform the request for. This identifies which team’s context is used.
-   **team\_slug** (`string`, optional) The Team slug used to perform the request. This identifies the team under which the deployment was made.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.GetDeploymentCheckDetails



Retrieve details for a specific deployment check.

**Parameters**

-   **check\_identifier** (`string`, required) The unique identifier of the check to fetch details for.
-   **deployment\_id** (`string`, required) The ID of the deployment for which the check details are required.
-   **team\_id** (`string`, optional) The identifier for the team on whose behalf the request is performed.
-   **team\_slug** (`string`, optional) The slug identifier for the team to perform the request on behalf of. It uniquely represents the team within the system.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.UpdateExistingCheck



Updates an existing deployment check.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **deployment\_id** (`string`, optional) The identifier for the deployment to update the check for. Ensure it is a valid string. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **check\_identifier** (`string`, optional) The unique identifier of the check to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **team\_identifier** (`string`, optional) The identifier of the Team to perform the request on behalf of. Only used when mode is ‘execute’.
-   **team\_slug** (`string`, optional) The slug of the team to perform the request on behalf of. This identifies the team within Vercel. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.RerequestCheck



Retries a failed deployment check.

**Parameters**

-   **check\_to\_rerun\_id** (`string`, required) The ID of the check you want to rerun. This identifies the specific failed check to retry.
-   **deployment\_id** (`string`, required) The ID of the deployment for which the check needs to be rerun. This specifies the which specific deployment’s check is to be retried.
-   **mark\_check\_as\_running** (`boolean`, optional) Mark the check as running if set to true when re-requested.
-   **team\_identifier** (`string`, optional) The Team identifier to perform the request on behalf of. It specifies which team’s context the request should be executed in.
-   **team\_slug** (`string`, optional) The identifier for the team to perform the check rerequest on behalf of. Use the team’s slug format.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.UpdateProjectDataCache



Update the data cache for a Vercel project.

**Parameters**

-   **project\_id** (`string`, required) The unique identifier for the Vercel project to update the data cache.
-   **disable\_data\_cache** (`boolean`, optional) Set to true to disable the project’s data cache, or false to enable it. Default is false.
-   **team\_identifier** (`string`, optional) The unique Team ID to perform the request on behalf of. Required for targeted updates.
-   **team\_slug** (`string`, optional) The Team slug to perform the request on behalf of. Use this to specify which team’s project to update.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.FetchDeploymentLogs



Retrieve build logs for a specific deployment by ID.

**Parameters**

-   **deployment\_identifier\_or\_hostname** (`string`, required) The unique identifier or hostname of the deployment to fetch logs for.
-   **build\_event\_delimiter** (`number`, optional) Specify the delimiter type for separating logged events. Use ‘0’ for no delimiter and ‘1’ for an alternative separation method.
-   **deployment\_build\_id** (`string`, optional) The unique identifier for the deployment build for which logs are to be retrieved.
-   **enable\_live\_streaming** (`number`, optional) Set to ‘1’ to enable live streaming of events as they happen. Use ‘0’ to disable live streaming.
-   **event\_order** (`string`, optional) Specifies the order of returned events by timestamp. Use ‘forward’ for chronological order or ‘backward’ for reverse order.
-   **fetch\_until\_timestamp** (`number`, optional) Timestamp up to which the build logs should be retrieved.
-   **filter\_by\_status\_code** (`string`, optional) Specify the HTTP status code range to filter deployment events.
-   **include\_builds** (`number`, optional) Specify whether to include build events (1) or not (0) in the response.
-   **maximum\_events\_to\_return** (`number`, optional) Specify the max number of events to return. Use `-1` for all available logs.
-   **start\_timestamp\_for\_logs** (`number`, optional) Timestamp from which to start retrieving build logs. Provide in milliseconds.
-   **team\_identifier** (`string`, optional) Identifies the team on whose behalf the request is performed.
-   **team\_slug** (`string`, optional) The unique identifier (slug) of the Team for which the request is made. Used to specify the team context.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.UpdateIntegrationDeployment



Update a deployment integration action.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **deployment\_id** (`string`, optional) The unique identifier for the deployment to update. This is required to specify which deployment’s integration action should be modified. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **integration\_configuration\_id** (`string`, optional) The ID of the integration configuration to update. This is required to specify which integration setup the action applies to. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **resource\_id** (`string`, optional) The unique identifier for the resource to be updated in the deployment integration. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **deployment\_action** (`string`, optional) Specifies the action to be taken for the deployment integration. Expected as a descriptive string indicating the action type. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.GetDeploymentInfo



Retrieve deployment information by ID or URL.

**Parameters**

-   **deployment\_id\_or\_url** (`string`, required) The unique identifier or hostname of the deployment to retrieve details for.
-   **include\_git\_repo\_information** (`string`, optional) Set to ‘true’ to include Git repository details or ‘false’ to exclude them.
-   **team\_identifier** (`string`, optional) The unique identifier for the team on whose behalf the request is made.
-   **team\_slug** (`string`, optional) The Team slug for performing the request on behalf of that team.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.CreateVercelDeployment



Create a new deployment on Vercel.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **force\_new\_deployment** (`string`, optional) Set to ‘true’ to force a new deployment even if a similar one exists. Only used when mode is ‘execute’.
-   **skip\_framework\_detection\_confirmation** (`string`, optional) Set to ‘true’ to skip framework detection and avoid confirmation request failures. Only used when mode is ‘execute’.
-   **team\_identifier** (`string`, optional) The Team identifier to perform the request on behalf of for creating a deployment on Vercel. Only used when mode is ‘execute’.
-   **team\_slug** (`string`, optional) The slug identifying the team to perform the deployment on behalf of. This is essential for specifying the target team for the deployment request. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.CancelDeployment



Cancel a currently building deployment.

**Parameters**

-   **deployment\_id** (`string`, required) The unique identifier of the deployment to cancel.
-   **team\_identifier** (`string`, optional) The Team identifier to perform the request on behalf of when canceling a deployment.
-   **team\_slug** (`string`, optional) The Team slug for which the deployment cancellation should be performed.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.PurchaseDomain



Facilitates the purchase of a specified domain.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **team\_identifier** (`string`, optional) The unique identifier for the team to perform the domain purchase request. Only used when mode is ‘execute’.
-   **team\_slug** (`string`, optional) The slug representing the team to perform the purchase on behalf of. This identifies the team within Vercel. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.GetDomainPrice



Retrieve domain price and purchase period details.

**Parameters**

-   **domain\_name** (`string`, required) The domain name to check the purchase price for.
-   **domain\_status\_for\_pricing** (`string`, optional) Specifies the domain status (‘new’, ‘renewal’, ‘transfer’, ‘redemption’) to check the price for.
-   **team\_identifier** (`string`, optional) The Team identifier for executing the request on behalf of a specific team. This is usually a unique string assigned to the team.
-   **team\_slug\_for\_request** (`string`, optional) The slug identifier of the team to perform the request on behalf of.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.CheckDomainAvailability



Check if a domain name is available for purchase.

**Parameters**

-   **domain\_name** (`string`, required) The domain name you want to check for purchase availability.
-   **team\_identifier** (`string`, optional) The identifier of the Team on whose behalf the request is performed.
-   **team\_slug** (`string`, optional) The slug for the team or organization on whose behalf the request is performed.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.GetDnsRecords



Retrieve DNS records for a specified domain name.

**Parameters**

-   **domain\_name** (`string`, required) The domain name for which to retrieve DNS records. Must be a valid domain.
-   **maximum\_records\_to\_list** (`string`, optional) Specify the maximum number of DNS records to retrieve in a single request.
-   **records\_created\_after\_timestamp** (`string`, optional) Get records created after this specified JavaScript timestamp. It filters DNS records based on the creation date.
-   **team\_identifier** (`string`, optional) The identifier of the team to perform the request on behalf of.
-   **team\_slug** (`string`, optional) The slug representing the team on whose behalf the request is made.
-   **until\_timestamp** (`string`, optional) Retrieve records created before the specified JavaScript timestamp.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.CreateDnsRecord



Creates a DNS record for a domain.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **domain\_name\_for\_dns\_record** (`string`, optional) The domain for which the DNS record will be created. Must be a valid and registered domain name. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **team\_identifier** (`string`, optional) The Team identifier for performing the request. Only used when mode is ‘execute’.
-   **team\_slug** (`string`, optional) The slug identifier for the team performing the DNS record creation. It should be a string that represents the team’s unique slug. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.UpdateDnsRecord



Update an existing DNS record for a domain.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **dns\_record\_id** (`string`, optional) The unique identifier of the DNS record to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **team\_identifier** (`string`, optional) The unique identifier of the team performing the request. Only used when mode is ‘execute’.
-   **team\_slug** (`string`, optional) The slug representing the Team to perform the DNS update on behalf of. It is used to specify the team context for the request. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.RemoveDnsRecord



Removes an existing DNS record from a domain.

**Parameters**

-   **dns\_record\_id** (`string`, required) The unique identifier of the DNS record to be removed. Required for specifying which record to delete.
-   **domain\_name** (`string`, required) The domain from which the DNS record will be removed. Provide the full domain name.
-   **team\_identifier** (`string`, optional) The identifier for the team on whose behalf the request is performed.
-   **team\_slug** (`string`, optional) The slug representing the team on whose behalf the DNS record is removed.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.GetSupportedTlds



Retrieve a list of TLDs supported by Vercel.

**Parameters**

-   **team\_id** (`string`, optional) The ID of the team for which to retrieve supported TLDs.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.GetTldPrice



Retrieve base price for a specific TLD.

**Parameters**

-   **top\_level\_domain** (`string`, required) The top-level domain (TLD) for which to retrieve the base price. Examples include ‘com’, ‘net’, ‘org’.
-   **registration\_years** (`string`, optional) The number of years for which the TLD registration price should be calculated. Provide this as an integer representing the duration in years.
-   **team\_id** (`string`, optional) The ID of the team for which the TLD price data is requested.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.DomainAvailabilityStatus



Check if a domain is available for purchase.

**Parameters**

-   **domain\_name\_to\_check\_availability** (`string`, required) The domain name to check for availability. Must be a valid and complete domain name string.
-   **team\_identifier** (`string`, optional) A unique identifier for the team whose domain availability is being queried. This is a string value.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.FetchDomainPrice



Retrieve price data for a specific domain from Vercel.

**Parameters**

-   **domain\_name** (`string`, required) The domain name to check the pricing for. Provide a fully qualified domain like ‘example.com’.
-   **number\_of\_years** (`string`, optional) Specify the number of years for which the domain pricing is needed. Typically set to 1 or more.
-   **team\_identifier** (`string`, optional) A string representing the unique identifier of the team associated with the domain. This is required for specifying which team’s domain pricing information should be retrieved.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.CheckDomainAvailabilityBulk



Check availability for multiple domains.

**Parameters**

-   **domain\_names** (`array[string]`, required) A list of domain names to check, with a maximum of 50 domains.
-   **team\_identifier** (`string`, optional) Unique identifier for the team or organization associated with the request. It may be required to access specific domain availability data.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.GetDomainAuthCode



Retrieve the auth code for transferring a domain from Vercel.

**Parameters**

-   **domain\_name** (`string`, required) The domain name for which the auth code is being requested. It should be a valid domain registered with Vercel.
-   **team\_id** (`string`, optional) The ID representing the Vercel team associated with the domain. Required for accessing team-specific domains.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.PurchaseDomainVercel



Purchase a domain with Vercel’s API.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **domain\_name** (`string`, optional) The domain name that you wish to purchase using Vercel’s API. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **team\_id** (`string`, optional) The unique identifier for the team under which the domain will be purchased. This is expected to be a string. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.PurchaseMultipleDomains



Purchase multiple domains simultaneously.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **team\_id** (`string`, optional) The unique identifier for the team under which the domains will be purchased. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.TransferDomainToVercel



Transfer a domain to Vercel from another registrar.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **domain\_name** (`string`, optional) The domain name to be transferred to Vercel. It should be a valid domain currently registered elsewhere. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **team\_identifier** (`string`, optional) The unique identifier for the Vercel team requesting the domain transfer. It helps associate the domain transfer with the correct Vercel team. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.CheckDomainTransferStatus



Retrieve the transfer status of a domain.

**Parameters**

-   **domain\_name** (`string`, required) Specifies the domain name to check the transfer status for. It should be a valid domain string.
-   **team\_id** (`string`, optional) The unique identifier of the team requesting the domain transfer status.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.RenewDomain



Renews a domain registration through Vercel.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **domain\_name** (`string`, optional) The domain name to be renewed, in string format. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **team\_identifier** (`string`, optional) The unique identifier for the team that owns the domain. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.UpdateDomainAutoRenew



Update the auto-renew setting for a domain.

**Parameters**

-   **domain\_name** (`string`, required) The domain for which you want to update the auto-renew setting. It should be a valid domain name, such as ‘example.com’.
-   **enable\_auto\_renew** (`boolean`, required) Set to true to enable auto-renewal of the domain, or false to disable it.
-   **team\_id** (`string`, optional) The unique identifier for the team associated with the domain.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.UpdateDomainNameservers



Update the nameservers for a domain.

**Parameters**

-   **domain\_name** (`string`, required) The domain name to update the nameservers for. Provide the full domain, e.g., ‘example.com’.
-   **nameservers\_list** (`array[string]`, required) A list of nameservers to set for the domain. Pass an empty list to revert to Vercel’s default nameservers.
-   **team\_id** (`string`, optional) The unique identifier for the team to which the domain belongs. If not provided, the default team context is used.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.GetDomainContactInfoSchema



Retrieve the schema for TLD-specific contact information.

**Parameters**

-   **domain\_name** (`string`, required) The domain name for which to retrieve the TLD-specific contact information schema.
-   **team\_id** (`string`, optional) A unique identifier for the team within Vercel. Required to retrieve domain-specific contact info.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.GetDomainOrderInfo



Retrieve information about a domain order by its ID.

**Parameters**

-   **order\_id** (`string`, required) The unique ID of the domain order to retrieve information about.
-   **team\_id** (`string`, optional) The ID of the team associated with the domain order. This identifies the specific team within Vercel that the domain order belongs to.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.FetchDomainTransferAvailability



Fetch a domain’s transfer status or availability.

**Parameters**

-   **domain\_name** (`string`, required) The domain name to check for transfer status or availability.
-   **team\_identifier** (`string`, optional) The Team identifier to perform the request on behalf of. It should be a string representing the team’s unique ID.
-   **team\_slug** (`string`, optional) The identifier slug of the team to perform the request on behalf of.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.GetDomainConfiguration



Retrieve configuration details for a specific domain.

**Parameters**

-   **domain\_name** (`string`, required) The name of the domain to retrieve configuration details for.
-   **include\_only\_assigned\_nameservers** (`string`, optional) When true, only nameservers assigned directly to the domain are included. When false, parent zone nameservers are included if no direct assignment exists.
-   **project\_id\_or\_name** (`string`, optional) The project ID or name associated with the domain, used if not yet linked to a project.
-   **team\_identifier** (`string`, optional) The identifier for the team to perform the request on behalf of. It specifies which team’s context to use when fetching domain configurations.
-   **team\_slug** (`string`, optional) The Team slug used to perform the request on behalf of a specific team.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.GetDomainInfo



Retrieve information on a single domain from Vercel.

**Parameters**

-   **domain\_name** (`string`, required) The name of the domain to retrieve information for.
-   **team\_identifier** (`string`, optional) The identifier for the team to perform the request on behalf of. Typically a unique string.
-   **team\_slug** (`string`, optional) The slug identifier for the team on behalf of whom the request is made. It uniquely identifies the team in Vercel.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.GetRegisteredDomains



Retrieve a list of registered domains for the user or team.

**Parameters**

-   **domains\_created\_since\_timestamp** (`number`, optional) Get domains created after the specified JavaScript timestamp.
-   **maximum\_domains\_to\_list** (`number`, optional) The maximum number of domains to include in the list returned by the request.
-   **team\_id** (`string`, optional) The unique Team identifier to retrieve domains for a specific team instead of the authenticated user.
-   **team\_slug** (`string`, optional) The team slug used to perform the request on behalf of a specific team.
-   **until\_timestamp** (`number`, optional) Fetch domains created before this JavaScript timestamp.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.AddNewDomainVercel



Add a new apex domain with Vercel for the user.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **team\_identifier** (`string`, optional) The identifier of the Team on whose behalf the request is made. Only used when mode is ‘execute’.
-   **team\_slug** (`string`, optional) The identifier for the team to execute the request on behalf of. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.UpdateApexDomain



Update or move the apex domain configuration.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **apex\_domain\_name** (`string`, optional) The apex domain to update or move. Accepts a string value representing the domain name (e.g., ‘example.com’). Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **team\_identifier** (`string`, optional) The unique identifier for the team to perform the domain update on behalf of. This allows the request to be associated with a specific team. Only used when mode is ‘execute’.
-   **team\_slug** (`string`, optional) The slug identifying the Team on whose behalf the request is made. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.DeleteVercelDomain



Delete a domain from Vercel and remove associated aliases.

**Parameters**

-   **domain\_name** (`string`, required) The domain name to be deleted from Vercel. This action will also remove any associated aliases.
-   **team\_identifier** (`string`, optional) The identifier of the team to perform the domain deletion request on behalf of.
-   **team\_slug** (`string`, optional) The specific team slug to perform the deletion request on behalf of.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.InvalidateCacheByTags



Mark cache tags as stale for revalidation in the background.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_id\_or\_name** (`string`, optional) Specify the project ID or name for which the cache tags should be marked as stale. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **team\_id** (`string`, optional) The Team identifier to execute the request for. Provide the team’s unique ID. Only used when mode is ‘execute’.
-   **team\_slug** (`string`, optional) The identifier (slug) for the team to perform the request on their behalf. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.DeleteCacheByTags



Marks cache tags as deleted to revalidate associated entries.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_id\_or\_name** (`string`, optional) The ID or name of the project associated with the cache tags to delete. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **team\_identifier** (`string`, optional) The identifier for the team on whose behalf the cache deletion request is performed. Only used when mode is ‘execute’.
-   **team\_slug** (`string`, optional) Specify the team slug to perform the cache deletion on behalf of a team. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.GetEdgeConfigs



Fetch all Edge Configs from Vercel’s service.

**Parameters**

-   **team\_identifier** (`string`, optional) Specify the Team identifier for which the Edge Configs need to be fetched.
-   **team\_slug** (`string`, optional) The Team slug to perform the request on behalf of.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.CreateEdgeConfig



Create a new Edge Configuration.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **team\_identifier** (`string`, optional) The identifier of the team to perform the request for. This is required to specify on whose behalf the request is made. Only used when mode is ‘execute’.
-   **team\_slug** (`string`, optional) The Team slug that specifies the team to perform the request on behalf of. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.GetEdgeConfig



Retrieve Edge Config details from Vercel.

**Parameters**

-   **edge\_config\_id** (`string`, required) The unique identifier for the Edge Config to retrieve details from Vercel.
-   **team\_identifier** (`string`, optional) The unique identifier for the team to perform the request on behalf of in Vercel.
-   **team\_slug** (`string`, optional) The slug of the team to perform the request on behalf of in Vercel. This identifier is needed to specify which team’s settings are being accessed.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.UpdateEdgeConfig



Update an existing Edge Config to apply changes.

**Parameters**

-   **edge\_config\_identifier** (`string`, required) The unique identifier of the Edge Config to be updated. This is required to specify which configuration should be modified.
-   **edge\_config\_slug** (`string`, required) The unique slug identifier for the Edge Config that needs updating.
-   **team\_slug** (`string`, required) The slug identifying the team on whose behalf the request is performed.
-   **team\_identifier** (`string`, optional) The unique identifier of the team to perform the request for. Required for updating the Edge Config on behalf of a specific team.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.DeleteEdgeConfig



Delete a Vercel Edge Config by ID.

**Parameters**

-   **edge\_config\_id** (`string`, required) The unique identifier of the Edge Config to be deleted.
-   **team\_identifier** (`string`, optional) The unique identifier for the team on whose behalf the request is made.
-   **team\_slug** (`string`, optional) The slug of the team on whose behalf the request is performed.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.GetEdgeConfigItems



Retrieve all items from an Edge Config.

**Parameters**

-   **edge\_config\_id** (`string`, required) The ID of the Edge Config to retrieve items from. This is required to specify which Edge Config data to access.
-   **team\_identifier** (`string`, optional) The Team identifier to perform the request for a specific Vercel team.
-   **team\_slug** (`string`, optional) The slug representing the team on whose behalf the request is made. Each team has a unique slug identifier.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.UpdateEdgeConfigItems



Batch update Edge Config Items efficiently.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **edge\_config\_identifier** (`string`, optional) The identifier for the specific Edge Config to update in the batch request. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **team\_identifier** (`string`, optional) The unique identifier of the Team on whose behalf the request is made. Only used when mode is ‘execute’.
-   **team\_slug** (`string`, optional) The unique slug of the team to perform the request on behalf of. It identifies the team in a URL-friendly format. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.GetEdgeConfigSchema



Retrieve the schema of an Edge Config.

**Parameters**

-   **edge\_config\_id** (`string`, required) The identifier for the specific Edge Config to retrieve its schema. It is required to specify which configuration’s schema you want to query.
-   **team\_identifier** (`string`, optional) The unique identifier for the team to make requests on their behalf.
-   **team\_slug** (`string`, optional) The slug of the team to perform the request on behalf of.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.UpdateEdgeConfigSchema



Update an Edge Config’s schema to modify its structure.

**Parameters**

-   **edge\_config\_identifier** (`string`, required) The unique identifier for the Edge Config to update its schema.
-   **edge\_config\_schema\_definition** (`string`, required) JSON string defining the updated structure and settings of the Edge Config.
-   **enable\_dry\_run** (`string`, optional) Set to true to simulate the update without applying changes. Useful for testing.
-   **team\_identifier** (`string`, optional) The unique ID of the team on whose behalf the request will be made.
-   **team\_slug** (`string`, optional) The Team slug to perform the request on behalf of. It identifies the specific team for the operation.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.DeleteEdgeConfigSchema



Deletes an existing Edge Config schema.

**Parameters**

-   **edge\_config\_id** (`string`, required) The unique identifier for the specific Edge Config schema to be deleted.
-   **team\_identifier** (`string`, optional) The identifier of the team on whose behalf the request is made.
-   **team\_slug** (`string`, optional) The slug representing the team on whose behalf the request is performed. It uniquely identifies the team within Vercel.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.GetEdgeConfigItem



Retrieve a specific Edge Config Item by its identifiers.

**Parameters**

-   **edge\_config\_id** (`string`, required) The ID of the Edge Config to retrieve a specific item from.
-   **edge\_config\_item\_key** (`string`, required) The key of the specific Edge Config Item to retrieve.
-   **team\_identifier** (`string`, optional) The ID of the team to perform the request on behalf of.
-   **team\_slug** (`string`, optional) The slug of the team for which the Edge Config Item is requested.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.GetEdgeConfigTokens



Retrieve all tokens of a specific Edge Config.

**Parameters**

-   **edge\_config\_id** (`string`, required) A string representing the unique identifier of the Edge Config to retrieve tokens for. This ID is necessary to specify which Edge Config’s tokens are being accessed.
-   **team\_identifier** (`string`, optional) The ID of the team to perform the request on behalf of. It identifies which team’s Edge Config tokens to retrieve.
-   **team\_slug** (`string`, optional) Slug of the team to perform the request on behalf of.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.DeleteEdgeConfigTokens



Delete tokens from an existing Edge Config.

**Parameters**

-   **edge\_config\_id** (`string`, required) The unique identifier for the Edge Config from which tokens will be deleted. Required for specifying the target Edge Config.
-   **tokens\_to\_delete** (`array[string]`, required) A list of token identifiers to be deleted from the Edge Config. Each token should be a string.
-   **team\_identifier** (`string`, optional) The unique identifier of the team to perform the request on behalf of.
-   **team\_slug** (`string`, optional) The Team slug representing the team on whose behalf the request is performed.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.GetEdgeConfigTokenInfo



Retrieve metadata about an Edge Config token.

**Parameters**

-   **edge\_config\_id** (`string`, required) The identifier for the Edge Config to retrieve metadata for. This is required to specify which configuration token’s information is needed.
-   **edge\_config\_token** (`string`, required) The token used to obtain metadata for a specific Edge Config.
-   **team\_identifier** (`string`, optional) The identifier of the team to perform the request on behalf of.
-   **team\_slug** (`string`, optional) The Team slug for performing the request on behalf of a specific team.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.AddEdgeConfigToken



Adds a token to an existing Edge Config.

**Parameters**

-   **edge\_config\_id** (`string`, required) The unique identifier for the Edge Config to which the token will be added.
-   **token\_label** (`string`, required) A descriptive label for the token being added to the Edge Config.
-   **team\_identifier** (`string`, optional) The identifier for the team on whose behalf the request is performed.
-   **team\_slug** (`string`, optional) The slug identifying the Team on whose behalf the request is made. This is used for specifying the target team within Vercel.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.RetrieveEdgeConfigBackup



Retrieve a specific Edge Config version from backup storage.

**Parameters**

-   **edge\_config\_backup\_version\_id** (`string`, required) The unique identifier for the backup version of the Edge Config to retrieve.
-   **edge\_config\_id** (`string`, required) The ID of the Edge Config to retrieve from backup storage.
-   **team\_identifier** (`string`, optional) The unique identifier of the Team to perform the request on behalf of.
-   **team\_slug** (`string`, optional) The team’s unique slug to perform the request on behalf of.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.GetEdgeConfigBackups



Retrieve backups of an Edge Config.

**Parameters**

-   **edge\_config\_id** (`string`, required) The unique identifier for the Edge Config whose backups you want to retrieve.
-   **backup\_limit** (`number`, optional) The maximum number of Edge Config backups to return. This is useful for paginating results.
-   **include\_metadata** (`string`, optional) Indicate if metadata should be included in the response. Use ‘true’ to include.
-   **next\_page\_token** (`string`, optional) A token for fetching the next page of results if pagination is needed.
-   **team\_identifier** (`string`, optional) The identifier for the team on whose behalf the request is made.
-   **team\_slug** (`string`, optional) The team slug to perform the request on behalf of. It identifies the specific team in Vercel.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.ListUserEvents



Fetches a list of user-generated events on Vercel.

**Parameters**

-   **deprecated\_user\_id** (`string`, optional) Deprecated. Use ‘principal\_id’ instead. If both ‘principal\_id’ and ‘deprecated\_user\_id’ exist, ‘principal\_id’ will be used.
-   **end\_time\_filter** (`string`, optional) Timestamp to filter events created until this time.
-   **event\_types\_filter** (`string`, optional) Comma-delimited list of event types to filter the results by.
-   **filter\_by\_principal\_id** (`string`, optional) Filter events generated by a specific principal when retrieving events for a Team.
-   **include\_event\_payload** (`string`, optional) Set to ‘true’ to include the ‘payload’ field in each event response.
-   **include\_items\_since\_timestamp** (`string`, optional) Timestamp to only include items created since then. Use ISO 8601 format.
-   **maximum\_items\_to\_return** (`number`, optional) Maximum number of items that can be returned from the request.
-   **project\_ids\_filter** (`string`, optional) Comma-separated list of project IDs to filter the events by.
-   **team\_identifier** (`string`, optional) Specify the Team ID to retrieve events related to that team.
-   **team\_slug** (`string`, optional) The Team slug to perform the request on behalf of. Use this to specify which team’s events to retrieve.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.RetrieveBillingPlans



Retrieve billing plans for a specific integration and product.

**Parameters**

-   **integration\_identifier\_or\_slug** (`string`, required) The unique identifier or slug for the integration to retrieve billing plans for. Use the specific key related to the integration.
-   **product\_id\_or\_slug** (`string`, required) The unique identifier or slug for the product to retrieve billing plans.
-   **additional\_metadata** (`string`, optional) Optional metadata for the request, provided as a string.
-   **team\_identifier** (`string`, optional) The identifier for the team to perform the request on behalf of.
-   **team\_slug** (`string`, optional) The unique team slug used to identify which team’s context the request should be performed in.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.ConnectIntegrationResourceToProject



Connect an integration resource to a Vercel project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **integration\_configuration\_id** (`string`, optional) The identifier for the integration configuration to be connected to the Vercel project. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **resource\_id** (`string`, optional) The ID of the integration resource to connect to the Vercel project. This is required to establish the link. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **team\_identifier** (`string`, optional) The identifier of the team to perform the request on behalf of. Only used when mode is ‘execute’.
-   **team\_slug** (`string`, optional) The unique team slug used to perform the request on behalf of a specific team in Vercel. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.UpdateIntegrationInstallation



Updates an integration installation configuration.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **integration\_configuration\_id** (`string`, optional) The ID of the integration configuration to update. This should be a string identifying the specific installation. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.FetchAccountInfo



Fetch the best account or user’s contact info.

**Parameters**

-   **integration\_configuration\_id** (`string`, required) The unique identifier for the integration configuration. Required to fetch the user’s account info.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.GetMemberRoleInfo



Retrieve member role and details for a specific member ID.

**Parameters**

-   **integration\_configuration\_id** (`string`, required) A unique identifier for the integration configuration. Required to specify which integration to retrieve member details from.
-   **member\_id** (`string`, required) The ID of the member to retrieve role and details for. This corresponds to the “user\_id” claim in the SSO OIDC token.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.NotifyVercelOfUpdates



Send update notifications to Vercel for installations or resources.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **integration\_configuration\_id** (`string`, optional) The ID of the integration configuration. It links the notification to the specific Vercel installation or resource. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.GetIntegrationResources



Retrieve all resources for a given installation ID.

**Parameters**

-   **installation\_id** (`string`, required) The unique identifier of the integration installation to fetch resources for.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.FetchIntegrationResource



Fetch a resource using its partner ID.

**Parameters**

-   **integration\_configuration\_id** (`string`, required) The ID of the specific installation to which the resource belongs.
-   **third\_party\_resource\_id** (`string`, required) The ID provided by the third-party provider for the specific resource.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.DeleteIntegrationResource



Delete a resource from an integration by ID.

**Parameters**

-   **integration\_installation\_id** (`string`, required) The ID of the installation to delete the resource from.
-   **resource\_id** (`string`, required) The ID of the resource to be deleted. Required for identifying the specific resource within the integration.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.ImportResourceToVercel



Import or synchronize a resource to Vercel.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **integration\_configuration\_id** (`string`, optional) The unique identifier for the integration configuration in Vercel. Required to specify which configuration to use when importing the resource. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **resource\_identifier** (`string`, optional) The unique identifier for the resource to be imported or synchronized with Vercel. This ID is used to match the resource between the partner’s system and Vercel’s system. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.UpdateResource



Update an existing resource with new information.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **integration\_configuration\_id** (`string`, optional) The unique identifier for the integration configuration to update. Required for identifying which integration configuration is being modified. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **resource\_id** (`string`, optional) The unique identifier of the resource to be updated. This is required to specify which resource you are targeting for updates. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.SubmitBillingData



Submit billing and usage data to the server.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **integration\_configuration\_id** (`string`, optional) A string representing the unique identifier for the integration configuration. This is required to submit billing data. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.SubmitInvoiceToVercel



Submit an invoice to Vercel’s billing system.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **integration\_configuration\_id** (`string`, optional) The unique ID for the Vercel integration configuration. This links the invoice submission to the correct integration setup in Vercel. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.GetInvoiceDetails



Retrieve invoice details and status by ID.

**Parameters**

-   **integration\_configuration\_id** (`string`, required) The unique identifier for the integration configuration. Required to specify the configuration context for the invoice retrieval.
-   **invoice\_id** (`string`, required) The unique identifier of the invoice to retrieve details and status for.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.RequestVercelInvoiceRefund



Request a refund for an invoice in Vercel.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **vercel\_integration\_configuration\_id** (`string`, optional) The unique identifier for the Vercel integration configuration related to the invoice. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **invoice\_id** (`string`, optional) The unique identifier for the invoice for which the refund is requested. This ID is obtained from the invoice creation process. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.SubmitPrepaymentBalances



Submit prepayment balances to Vercel for billing.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **integration\_configuration\_id** (`string`, optional) The unique identifier for the integration configuration. Use the ID provided during the integration setup. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.UpdateResourceSecrets



Updates the secrets of a specified resource.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **integration\_configuration\_id** (`string`, optional) The unique identifier for the integration configuration associated with the resource. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **integration\_product\_id\_or\_slug** (`string`, optional) Specify the product ID or slug to identify the integration product for the resource update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **resource\_id** (`string`, optional) The unique identifier for the resource whose secrets are being updated. This is required to specify which resource’s secrets need modification. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.UpdateSecretsById



Update the secrets of a Vercel resource by ID.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **integration\_configuration\_id** (`string`, optional) The ID of the integration configuration. This identifies the specific configuration in Vercel to update secrets for. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **resource\_id** (`string`, optional) The unique identifier of the Vercel resource whose secrets are to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.RetrieveIntegrationConfigurations



Retrieve all configurations for an authenticated integration.

**Parameters**

-   **configuration\_view\_type** (`string`, required) Specify ‘account’ to view all configurations or ‘project’ to exclude configurations generated from the authorization flow.
-   **installation\_type** (`string`, optional) Specifies the installation type. Options are ‘marketplace’ or ‘external’.
-   **integration\_id** (`string`, optional) The ID or slug of the integration to retrieve configurations for.
-   **team\_identifier** (`string`, optional) Specifies the Team ID to perform the request on behalf of.
-   **team\_slug** (`string`, optional) The Team slug to perform the request on behalf of when retrieving configurations.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.GetIntegrationConfiguration



Retrieve configuration details by ID.

**Parameters**

-   **configuration\_id** (`string`, required) ID of the configuration to retrieve. The user or team must own this configuration.
-   **team\_identifier** (`string`, optional) The identifier for the team on whose behalf the request is made.
-   **team\_slug** (`string`, optional) The unique team slug to perform the request on behalf of a specific team.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.RemoveVercelConfiguration



Delete a Vercel configuration by ID.

**Parameters**

-   **configuration\_id** (`string`, required) The unique identifier of the Vercel configuration to be deleted.
-   **team\_identifier** (`string`, optional) The identifier for the team on behalf of which the configuration is removed.
-   **team\_slug** (`string`, optional) The team slug representing the Vercel team to perform the action on behalf of.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.ListIntegrationConfigurationProducts



Retrieve products for a specific integration configuration.

**Parameters**

-   **integration\_configuration\_id** (`string`, required) ID of the specific integration configuration to list available products for.
-   **team\_identifier** (`string`, optional) The Team identifier to perform the request on behalf of. It specifies which team’s configuration products to list.
-   **team\_slug** (`string`, optional) The slug of the team to perform the request on behalf of.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.ExchangeSsoToken



Exchange OAuth code for an OIDC token to authenticate users.

**Parameters**

-   **authorization\_code** (`string`, required) The sensitive OAuth authorization code received from Vercel for the SSO token exchange process.
-   **integration\_client\_id** (`string`, required) The unique client ID for the integration, required for authentication.
-   **integration\_client\_secret** (`string`, required) The secret key for the integration client, used for authentication.
-   **authorization\_state** (`string`, optional) The state received from the initialization request for security validation.
-   **integration\_redirect\_uri** (`string`, optional) The URL where the user will be redirected after authentication.
-   **sso\_grant\_type** (`string`, optional) Specifies the grant type as ‘authorization\_code’ for OAuth process.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.RetrieveIntegrationLogDrains



Retrieve all integration log drains for the user or team.

**Parameters**

-   **team\_identifier** (`string`, optional) The identifier for the Team to perform the request on behalf of.
-   **team\_slug** (`string`, optional) The slug of the team to perform the request on behalf of. Used to specify which team’s log drains to retrieve.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.CreateIntegrationLogDrain



Sets up an Integration log drain for Vercel.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **team\_identifier** (`string`, optional) The Team identifier for performing the request on behalf of a specific team in Vercel. Only used when mode is ‘execute’.
-   **team\_slug** (`string`, optional) The slug representing the team to perform the request on behalf of. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.DeleteIntegrationLogDrain



Delete an Integration log drain by ID.

**Parameters**

-   **log\_drain\_id** (`string`, required) The ID of the log drain to be deleted. This identifies the specific log drain for removal.
-   **team\_identifier** (`string`, optional) The identifier of the Team on whose behalf the request is made.
-   **team\_slug** (`string`, optional) The slug of the team on whose behalf the request is performed.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.GetDeploymentRuntimeLogs



Get logs for a specific deployment’s runtime.

**Parameters**

-   **deployment\_id** (`string`, required) The unique identifier for the deployment whose runtime logs are to be retrieved.
-   **project\_id** (`string`, required) The unique identifier for the project related to the deployment. This is necessary to retrieve the correct runtime logs.
-   **team\_identifier** (`string`, optional) The unique identifier for the team to make the request on behalf of.
-   **team\_slug** (`string`, optional) The unique slug representing the team on whose behalf the request is made.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.CreateExperimentationItems



Create one or multiple experimentation items.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **integration\_configuration\_id** (`string`, optional) The ID of the integration configuration for which to create experimentation items. This ties the items to a specific setup or environment. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **resource\_identifier** (`string`, optional) The unique identifier of the resource to associate with the experimentation items. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.UpdateExperimentationItem



Update an existing experimentation item.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **integration\_configuration\_id** (`string`, optional) The ID of the integration configuration to be updated. This identifies which configuration is being patched. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **resource\_identifier** (`string`, optional) The unique identifier of the experimentation resource to update. Provides context for which item needs modification. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **experiment\_item\_id** (`string`, optional) The unique identifier for the experimentation item to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.DeleteExperimentationItem



Delete an existing experimentation item.

**Parameters**

-   **experiment\_item\_id** (`string`, required) The unique identifier for the experimentation item to be deleted.
-   **integration\_configuration\_id** (`string`, required) The ID of the integration configuration to identify the correct setup.
-   **resource\_id** (`string`, required) The unique identifier for the resource containing the item to be deleted. This is required to specify which resource the item belongs to.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.PushEdgeConfig



Push configuration data to Edge Config for syncing.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **integration\_configuration\_id** (`string`, optional) The unique identifier for the integration configuration. Use this to specify which configuration to push to Edge Config. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **resource\_identifier** (`string`, optional) The ID of the resource for the configuration data to be pushed. Required for identifying the target Edge Config. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.ListProjectMembers



Retrieve all members of a specified project on Vercel.

**Parameters**

-   **project\_id\_or\_name** (`string`, required) The ID or name of the project to list members for.
-   **added\_since\_timestamp** (`integer`, optional) Timestamp in milliseconds to include members added since this time.
-   **end\_time\_timestamp** (`integer`, optional) The timestamp in milliseconds to include project members added until this time.
-   **member\_limit** (`integer`, optional) Specify the maximum number of project members to return. Provide an integer value.
-   **search\_project\_members** (`string`, optional) Search for project members by name, username, or email.
-   **team\_identifier** (`string`, optional) The unique identifier of the team to perform the request on behalf of. This should be a string.
-   **team\_slug** (`string`, optional) The Team slug to perform the request on behalf of, identifying the specific team associated with the project.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.AddProjectMember



Add a new member to a Vercel project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_id\_or\_name** (`string`, optional) The ID or name of the Vercel project to which a new member will be added. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **team\_identifier** (`string`, optional) The unique identifier of the Team to perform the request on behalf of. Only used when mode is ‘execute’.
-   **team\_slug** (`string`, optional) The slug identifying the team for performing the request. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.RemoveProjectMember



Removes a member from a specific project.

**Parameters**

-   **project\_id\_or\_name** (`string`, required) The ID or name of the project from which the member will be removed.
-   **user\_id** (`string`, required) The unique user ID of the member to be removed from the project.
-   **team\_identifier** (`string`, optional) The identifier for the team on whose behalf the request is made. This should be a string.
-   **team\_slug** (`string`, optional) The slug used to identify the Team for which the request is being made.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.RetrieveProjectsList



Retrieve the list of user’s or team’s projects.

**Parameters**

-   **exclude\_repositories** (`string`, optional) Comma-separated list of repository names to exclude from the results.
-   **filter\_by\_edge\_config\_id** (`string`, optional) Filter results by connected Edge Config ID. Provide the ID as a string to retrieve projects linked to this specific config.
-   **filter\_by\_edge\_config\_token\_id** (`string`, optional) Filter results by the connected Edge Config Token ID. Provide the specific token ID to refine project search.
-   **filter\_by\_elastic\_concurrency** (`string`, optional) Filter projects by elastic concurrency status. Use ‘1’ for enabled or ‘0’ for disabled.
-   **filter\_by\_repo** (`string`, optional) Filter the project results by the specified repository name, also used for project count.
-   **filter\_by\_repository\_id** (`string`, optional) Filter the project results by specifying the Repository ID.
-   **filter\_by\_static\_ips\_enabled** (`string`, optional) Set to ‘1’ to filter projects with Static IPs enabled, ‘0’ otherwise.
-   **include\_deprecated\_projects** (`boolean`, optional) Include deprecated projects in the results when set to True.
-   **max\_projects\_returned** (`string`, optional) Specifies the maximum number of projects to return in the list.
-   **repository\_url\_filter** (`string`, optional) URL to filter projects associated with a specific repository.
-   **require\_git\_fork\_authorization** (`string`, optional) Set to ‘1’ to require authorization for Git fork PRs before deployment, or ‘0’ to disable.
-   **search\_by\_project\_name** (`string`, optional) Search for projects using a keyword or term in the name field.
-   **team\_identifier** (`string`, optional) The ID of the team to perform the request on behalf of.
-   **team\_slug** (`string`, optional) The team slug to perform the request on behalf of, representing a specific team within Vercel.
-   **updated\_after** (`string`, optional) Filter projects updated after the specified timestamp or using a continuation token.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.CreateNewProject



Create a new project with specified configurations.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **team\_identifier** (`string`, optional) The identifier of the team on whose behalf the project will be created. Only used when mode is ‘execute’.
-   **team\_slug** (`string`, optional) The slug representing the Team to perform the request on behalf of. It should be a string identifier. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.GetProjectInfo



Retrieve specific project details using project ID or name.

**Parameters**

-   **project\_identifier\_or\_name** (`string`, required) The unique project identifier or the project name to retrieve details.
-   **team\_identifier** (`string`, optional) The unique identifier for the team to perform the request on behalf of.
-   **team\_slug** (`string`, optional) The unique slug representing the team on whose behalf the request is performed.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.UpdateProjectDetails



Update a project’s fields using its name or ID.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_id\_or\_name** (`string`, optional) The unique identifier or name of the Vercel project to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **team\_identifier** (`string`, optional) The unique identifier of the team on whose behalf the request is made. Only used when mode is ‘execute’.
-   **team\_slug** (`string`, optional) The slug of the team on whose behalf the request is made. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.DeleteProject



Delete a Vercel project by ID or name.

**Parameters**

-   **project\_identifier\_or\_name** (`string`, required) The unique project identifier or the project name to specify which project to delete.
-   **team\_identifier** (`string`, optional) The unique identifier of the team to perform the project deletion.
-   **team\_slug** (`string`, optional) The slug representing the team to execute the request on behalf of.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.UpdateProjectNetworkLinks



Update project connections to shared Secure Compute networks.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_identifier\_or\_name** (`string`, optional) Specify the unique project identifier or project name for the network connection update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **team\_identifier** (`string`, optional) The identifier for the team on whose behalf the request is made. This is required to specify the context of the update. Only used when mode is ‘execute’.
-   **team\_slug** (`string`, optional) The unique slug of the team that this request should be performed on behalf of. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.CreateCustomEnvironment



Create a custom environment for your Vercel project.

**Parameters**

-   **project\_unique\_identifier\_or\_name** (`string`, required) The unique project identifier or project name for which the custom environment is being created.
-   **branch\_matcher\_type** (`string`, optional) Specifies the type of branch matcher: ‘equals’, ‘startsWith’, or ‘endsWith’.
-   **copy\_environment\_variables\_from** (`string`, optional) Specify the source environment to copy variables from. This is optional.
-   **custom\_environment\_slug** (`string`, optional) Specify the slug for the new custom environment. It cannot be ‘Production’ or ‘Preview’.
-   **environment\_description** (`string`, optional) Optional description for the custom environment being created.
-   **git\_branch\_name\_pattern** (`string`, optional) Git branch name or part of it to match with the custom environment.
-   **team\_identifier** (`string`, optional) The identifier of the team to perform the request on behalf of.
-   **team\_slug** (`string`, optional) The slug of the team to perform the request on behalf of. It is required to specify the unique team for the custom environment.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.GetCustomProjectEnvironments



Retrieve custom environments for a specified project.

**Parameters**

-   **project\_id\_or\_name** (`string`, required) The unique identifier or name of the project to retrieve custom environments.
-   **git\_branch\_name** (`string`, optional) Specify the git branch to fetch custom environments from. This identifies the branch to retrieve environments for.
-   **team\_identifier** (`string`, optional) The identifier for the Team to perform the request on behalf of. Expected as a string.
-   **team\_slug** (`string`, optional) The slug of the team to perform the request on behalf of. This identifies the specific team related to the project.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.RetrieveCustomEnvironment



Retrieve custom environment details for a project.

**Parameters**

-   **custom\_environment\_identifier** (`string`, required) The unique identifier for a custom environment within the project, excluding ‘Production’ or ‘Preview’.
-   **project\_identifier\_or\_name** (`string`, required) The unique project identifier or the project’s name to retrieve details for.
-   **team\_identifier** (`string`, optional) The unique Team identifier used to perform the request on behalf of a specified team.
-   **team\_slug** (`string`, optional) The Team slug used to perform the request.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.UpdateCustomEnvironment



Update a custom environment for a Vercel project.

**Parameters**

-   **custom\_environment\_id** (`string`, required) The unique identifier for the custom environment within the project.
-   **project\_identifier\_or\_name** (`string`, required) The unique project identifier or project name for the custom environment.
-   **branch\_matcher\_type** (`string`, optional) Specifies the branch matcher type: ‘equals’, ‘startsWith’, or ‘endsWith’.
-   **branch\_name\_pattern** (`string`, optional) Specify a portion or full Git branch name for matching. Used to identify branches in custom environments.
-   **custom\_environment\_description** (`string`, optional) Optional description of the custom environment to be updated.
-   **custom\_environment\_slug** (`string`, optional) Slug of the custom environment to update. Must not be ‘Production’ or ‘Preview’.
-   **team\_identifier** (`string`, optional) The identifier of the team to perform the request on behalf of.
-   **team\_slug** (`string`, optional) The slug of the team to perform the update on behalf of.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.RemoveCustomEnvironment



Remove a specified custom environment from a project.

**Parameters**

-   **custom\_environment\_identifier** (`string`, required) The unique identifier for the custom environment within the project to be removed.
-   **project\_identifier\_or\_name** (`string`, required) The unique project identifier or the project name to target the environment removal.
-   **delete\_unassigned\_environment\_variables** (`boolean`, optional) Delete environment variables that are not assigned to any environments when set to true.
-   **team\_identifier** (`string`, optional) The identifier for the team to make the request on behalf of.
-   **team\_slug** (`string`, optional) The slug representing the team on whose behalf to perform the request.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.RetrieveProjectDomains



Retrieve domains linked to a specific project.

**Parameters**

-   **project\_id\_or\_name** (`string`, required) Specify the unique project identifier or the project name.
-   **created\_before\_timestamp** (`number`, optional) Get domains created before this JavaScript timestamp for filtering results.
-   **custom\_environment\_id** (`string`, optional) The unique custom environment identifier within the project.
-   **domains\_created\_since\_timestamp** (`number`, optional) Get domains created after this JavaScript timestamp.
-   **domains\_sort\_order** (`string`, optional) Sort order for domains based on creation date.
-   **filter\_by\_git\_branch** (`string`, optional) Specify the branch to filter domains associated with that branch.
-   **filter\_by\_redirect\_target** (`string`, optional) Specify the redirect target to filter domains. Useful for targeting specific redirections.
-   **filter\_by\_verification\_status** (`string`, optional) Filter domains by their verification status (e.g., verified, unverified).
-   **filter\_production\_domains** (`string`, optional) Set to ‘true’ to filter only production domains; otherwise, returns all.
-   **filter\_target\_domain** (`string`, optional) Specify ‘production’ or ‘preview’ to filter domains based on their target environment.
-   **include\_redirect\_domains** (`string`, optional) Specify whether to include redirect project domains. Use “true” to include (default), “false” to exclude.
-   **max\_domains\_to\_list** (`number`, optional) The maximum number of domains to list in the response, with a maximum value of 100.
-   **team\_identifier** (`string`, optional) The unique identifier for the team to perform the request on behalf of.
-   **team\_slug** (`string`, optional) The slug representing the team on whose behalf the request is made.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.FetchProjectDomain



Fetch domain details for a specific project.

**Parameters**

-   **project\_domain\_name** (`string`, required) The name of the project’s domain to fetch details for.
-   **project\_id\_or\_name** (`string`, required) The unique project identifier or the project name for fetching domain details.
-   **team\_identifier** (`string`, optional) The Team identifier to perform the request on behalf of.
-   **team\_slug** (`string`, optional) The slug of the team on whose behalf the request is made.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.UpdateProjectDomainConfig



Update a project’s domain configuration.

**Parameters**

-   **project\_domain\_name** (`string`, required) The project domain name to be updated. Example: ‘example.com’.
-   **project\_identifier\_or\_name** (`string`, required) The unique project identifier or the project name used to update domain configuration.
-   **linked\_git\_branch** (`string`, optional) The Git branch to associate with the project domain.
-   **redirect\_status\_code** (`integer`, optional) HTTP status code for the domain redirect. Acceptable values are 301, 302, 307, 308, or None if no redirect is required.
-   **redirect\_target\_domain** (`string`, optional) Specify the target destination domain for the redirect of a project domain.
-   **team\_identifier** (`string`, optional) The identifier for the team to perform the request on behalf of.
-   **team\_slug** (`string`, optional) The slug identifier for the team to perform the request on behalf of.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.RemoveProjectDomain



Removes a domain from a specified project.

**Parameters**

-   **project\_domain\_name** (`string`, required) The domain name of the project to be removed.
-   **project\_id\_or\_name** (`string`, required) The unique project identifier or name to specify which project’s domain is to be removed.
-   **remove\_redirects** (`boolean`, optional) Set to true to remove all domains from the project that redirect to the domain being removed.
-   **team\_identifier** (`string`, optional) The identifier for the team on whose behalf the request is performed.
-   **team\_slug** (`string`, optional) The slug identifier of the team to perform the request on behalf of. Used to specify which team’s project domain should be removed.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.AddProjectDomain



Add a domain to a specified Vercel project.

**Parameters**

-   **project\_domain\_name** (`string`, required) The domain name to be added to the specified Vercel project.
-   **project\_identifier\_or\_name** (`string`, required) The unique identifier or name of the project to which the domain will be added.
-   **custom\_environment\_id** (`string`, optional) The unique custom environment identifier within the project.
-   **git\_branch\_to\_link\_domain** (`string`, optional) The Git branch to associate with the project domain when adding it to a Vercel project. This allows the domain to be tied to a specific branch in the repository.
-   **redirect\_status\_code** (`integer`, optional) HTTP status code for redirecting the domain. Options are: 301, 302, 307, 308, or None.
-   **redirect\_target\_domain** (`string`, optional) Specify the target destination domain to redirect to.
-   **team\_identifier** (`string`, optional) The identifier of the team for which the request is made. This ensures the request is executed on behalf of the specified team.
-   **team\_slug** (`string`, optional) The slug of the team to perform the request on behalf of. This identifies the team context for the domain addition.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.MoveProjectDomain



Transfer a domain from one project to another.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_id\_or\_name** (`string`, optional) Provide the unique project identifier or the project name for the domain transfer. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_domain\_name** (`string`, optional) The domain name of the project to be moved to another project. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **team\_identifier** (`string`, optional) The identifier for the team on whose behalf the request is made. Only used when mode is ‘execute’.
-   **team\_slug** (`string`, optional) The slug for the team on whose behalf the request is made. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.VerifyProjectDomain



Verify the status of a project domain’s verification challenge.

**Parameters**

-   **project\_id\_or\_name** (`string`, required) The unique project identifier or the project name to verify the domain for.
-   **verify\_domain\_name** (`string`, required) The domain name you want to verify for the project.
-   **team\_identifier** (`string`, optional) The Team identifier to perform the request on behalf of. Provide as a string.
-   **team\_slug** (`string`, optional) The Team slug used to perform the verification request on behalf of a specific team.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.GetProjectEnvironmentVariables



Retrieve environment variables for a specified project.

**Parameters**

-   **project\_id\_or\_name** (`string`, required) The unique identifier or name of the project to retrieve environment variables for.
-   **caller\_source** (`string`, optional) Specify the source making the API call.
-   **custom\_environment\_id** (`string`, optional) The unique custom environment identifier within the project. Use this to specify a specific custom environment.
-   **custom\_environment\_slug** (`string`, optional) The custom environment slug (name) within the project to filter specific settings.
-   **decrypt\_values** (`string`, optional) Set to ‘true’ to decrypt environment variable values. Use ‘false’ to keep them encrypted.
-   **filter\_by\_git\_branch** (`string`, optional) Specify the git branch to filter the environment variable results. Must have target set to ‘preview’.
-   **team\_identifier** (`string`, optional) The unique identifier of the team to perform the request on behalf of.
-   **team\_slug** (`string`, optional) The Team slug to perform the request on behalf of. Use this to specify the team context for the request.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.CreateProjectEnvironmentVariables



Create or update environment variables for a Vercel project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_identifier\_or\_name** (`string`, optional) The unique identifier or name of the Vercel project to create or update environment variables for. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **allow\_override\_existing\_variable** (`string`, optional) Allows updating the value of an existing environment variable if set to true. Only used when mode is ‘execute’.
-   **team\_identifier** (`string`, optional) The Team identifier to perform the request on behalf of, specified as a string. Only used when mode is ‘execute’.
-   **team\_slug** (`string`, optional) The Team slug for the project. Used to perform the request on behalf of a specific team. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.RetrieveProjectEnvironmentVariable



Retrieve the environment variable for a given project.

**Parameters**

-   **environment\_variable\_id** (`string`, required) The unique ID for the environment variable to retrieve its decrypted value.
-   **project\_identifier\_or\_name** (`string`, required) The unique identifier or name of the project to retrieve its environment variable.
-   **team\_identifier** (`string`, optional) The identifier for the team to perform the request on behalf of.
-   **team\_slug** (`string`, optional) The slug for the team to perform the request on behalf of. This identifies the team in a user-friendly way.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.DeleteProjectEnvVariable



Delete a project’s specific environment variable.

**Parameters**

-   **environment\_variable\_identifier** (`string`, required) The unique identifier of the environment variable to be deleted.
-   **project\_identifier\_or\_name** (`string`, required) The unique project identifier or name to identify the target project for which the environment variable should be deleted.
-   **custom\_environment\_identifier** (`string`, optional) The unique custom environment identifier within the project.
-   **team\_identifier** (`string`, optional) The Team identifier to perform the request on behalf of.
-   **team\_slug** (`string`, optional) The Team slug used to perform the request on behalf of a team.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.EditProjectEnvironmentVariable



Edit a specific environment variable for a project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_id\_or\_name** (`string`, optional) Specify the unique project identifier or the project name. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **environment\_variable\_id** (`string`, optional) The unique environment variable identifier for the Vercel project. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **team\_identifier** (`string`, optional) The unique identifier for the team on whose behalf the request is made. Only used when mode is ‘execute’.
-   **team\_slug** (`string`, optional) The identifier for the team on whose behalf the request is made. This is usually a URL-friendly name for the team. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.DeleteProjectEnvVariables



Delete multiple environment variables from a Vercel project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_id\_or\_name** (`string`, optional) The unique project identifier or the project name to specify which project to delete variables from. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **team\_identifier** (`string`, optional) The Team identifier to perform the request on behalf of when deleting environment variables. Only used when mode is ‘execute’.
-   **team\_slug** (`string`, optional) The slug representing the team on whose behalf the request is performed. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.UploadClientCertToProject



Upload a client certificate for mTLS authentication.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_id\_or\_name** (`string`, optional) The unique identifier or name of the Vercel project to upload the client certificate to. This is required to specify which project the mTLS certificate should be associated with. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **team\_identifier** (`string`, optional) The string identifier of the team to perform the request on behalf of. Only used when mode is ‘execute’.
-   **team\_slug** (`string`, optional) The slug representing the team on whose behalf the request is made. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.GetRollingReleaseBillingStatus



Get the billing status for a project’s rolling releases.

**Parameters**

-   **project\_id\_or\_name** (`string`, required) Project ID or name, URL-encoded, to identify the project for which to retrieve billing status.
-   **team\_identifier** (`string`, optional) The identifier for the team to perform the request on behalf of.
-   **team\_slug** (`string`, optional) The slug representation of the team to perform the request for. Used to specify which team’s billing status is being queried.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.GetRollingReleaseConfig



Fetch the rolling releases configuration for a project.

**Parameters**

-   **project\_identifier** (`string`, required) The project ID or name, URL-encoded, to identify the project for the configuration request.
-   **team\_identifier** (`string`, optional) The unique identifier for the Team on whose behalf the request is made.
-   **team\_slug** (`string`, optional) The slug representing the team to perform the request on behalf of.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.DisableRollingReleases



Disable rolling releases for a Vercel project.

**Parameters**

-   **project\_id\_or\_name** (`string`, required) Project ID or URL-encoded name to specify the Vercel project.
-   **team\_identifier** (`string`, optional) The identifier of the team to execute the request on behalf of.
-   **team\_slug** (`string`, optional) The slug identifying the team to perform the request on behalf of. This should be a string value.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.UpdateRollingReleaseConfig



Update or disable rolling releases for a Vercel project.

**Parameters**

-   **project\_id\_or\_name** (`string`, required) Project ID or name (URL-encoded) for updating rolling release settings.
-   **team\_identifier** (`string`, optional) The identifier for the team to perform the request on behalf of.
-   **team\_slug** (`string`, optional) The slug identifying the team for which the request is made.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.GetRollingRelease



Retrieve the rolling release for a specific project.

**Parameters**

-   **project\_id\_or\_name** (`string`, required) The project ID or URL-encoded project name to identify the specific project.
-   **filter\_by\_release\_state** (`string`, optional) Filter the rolling release by its state: ACTIVE, COMPLETE, or ABORTED.
-   **team\_identifier** (`string`, optional) The unique identifier of the team on whose behalf the request is made.
-   **team\_slug** (`string`, optional) The slug that identifies the team on whose behalf the request is made. This is required for team-specific data access.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.AdvanceRolloutStage



Advance a rollout to the next stage when manual approval is required.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_identifier** (`string`, optional) Project ID or URL-encoded project name to identify the project. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **team\_identifier** (`string`, optional) The Team identifier used for performing the request on behalf of the specified team. Only used when mode is ‘execute’.
-   **team\_slug** (`string`, optional) The slug representing the team for which the rollout action will be performed. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.ForceCompleteRollingRelease



Complete a rolling release to serve 100% traffic from canary.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_identifier** (`string`, optional) The project ID or URL-encoded project name in Vercel. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **team\_identifier** (`string`, optional) The unique identifier for the team on whose behalf the request is performed. Only used when mode is ‘execute’.
-   **team\_slug** (`string`, optional) The slug of the team for which the request is performed. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.InitiateProjectTransfer



Initiate a project transfer request between teams.

**Parameters**

-   **project\_id\_or\_name** (`string`, required) The ID or name of the project to transfer between teams.
-   **team\_identifier** (`string`, optional) The unique identifier of the team initiating the project transfer.
-   **team\_slug** (`string`, optional) The Team slug to perform the project transfer request on behalf of. This is a unique identifier for the team on Vercel.
-   **webhook\_callback\_url** (`string`, optional) The URL to send a webhook to when the project transfer is accepted.
-   **webhook\_signing\_secret** (`string`, optional) The secret key used to sign the webhook payload with HMAC-SHA256 for security verification.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.AcceptProjectTransfer



Accept a project transfer request on Vercel.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_transfer\_code** (`string`, optional) The unique code of the project transfer request, required to accept the transfer. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **team\_identifier** (`string`, optional) The unique identifier of the team to perform the request on behalf of. Only used when mode is ‘execute’.
-   **team\_slug** (`string`, optional) The team slug used to perform the project transfer request on behalf of a specific team. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.UpdateProjectProtectionBypass



Update the deployment protection bypass for a Vercel project.

**Parameters**

-   **project\_id\_or\_name** (`string`, required) The unique Vercel project identifier or project name to update the protection bypass for.
-   **create\_new\_automation\_bypass** (`boolean`, optional) Create a new automation bypass after revoking the current secret.
-   **optional\_secret\_value** (`string`, optional) Optional value of the secret to generate; omit for OAuth2 tokens.
-   **revoke\_automation\_bypass** (`string`, optional) Secret value of the automation bypass to be revoked for a Vercel project.
-   **team\_identifier** (`string`, optional) The identifier for the team to perform the request on behalf of.
-   **team\_slug** (`string`, optional) The slug of the team to perform the request on behalf of.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.PromoteDeploymentToProduction



Promotes a deployment to production without rebuilding it.

**Parameters**

-   **deployment\_identifier** (`string`, required) The ID of the deployment to be promoted to production. It should be a valid string representing the deployment ID.
-   **project\_id** (`string`, required) The unique identifier of the project associated with the deployment to promote.
-   **team\_identifier** (`string`, optional) The unique identifier for the team on whose behalf the request is made. It should be a string value.
-   **team\_slug** (`string`, optional) The slug of the team to perform the promotion request on behalf of.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.GetLastPromoteAliasesStatus



Retrieve aliases and their mapping status from last promote request.

**Parameters**

-   **project\_id** (`string`, required) Specify the Project ID to filter the promote aliases related to that specific project.
-   **aliases\_created\_before\_timestamp** (`number`, optional) Get aliases created before this epoch timestamp.
-   **filter\_failed\_aliases** (`boolean`, optional) Set to true to filter results to only include aliases that failed to map to the requested deployment.
-   **get\_aliases\_created\_after\_epoch** (`number`, optional) Get aliases created after the specified epoch timestamp.
-   **max\_aliases\_to\_list** (`number`, optional) Specify the maximum number of aliases to list from the request. The maximum allowed is 100.
-   **team\_identifier** (`string`, optional) The Team identifier to perform the request on behalf of. Must be a string.
-   **team\_slug** (`string`, optional) The slug representing the team to perform the request on behalf of.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.PauseProject



Pause a Vercel project by its ID.

**Parameters**

-   **project\_id** (`string`, required) The unique identifier for the Vercel project you wish to pause.
-   **team\_identifier** (`string`, optional) The identifier of the team to perform the request on behalf of.
-   **team\_slug** (`string`, optional) The Team slug to perform the request on behalf of.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.UnpauseProject



Unpause a Vercel project using its project ID.

**Parameters**

-   **project\_id** (`string`, required) The unique identifier for the Vercel project to be unpaused.
-   **team\_identifier** (`string`, optional) The identifier for the team on behalf of which the request is performed. Used to specify the target team in Vercel.
-   **team\_slug** (`string`, optional) The slug identifying the team to perform the request on behalf of. Required for targeting the correct team’s project.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.UpdateAttackChallengeMode



Updates Attack Challenge mode setting for a project.

**Parameters**

-   **enable\_attack\_challenge\_mode** (`boolean`, required) Set to true to enable Attack Challenge mode; false to disable it.
-   **project\_id** (`string`, required) The unique identifier of the project to update the Attack Challenge mode for.
-   **attack\_mode\_active\_until** (`number`, optional) The UNIX timestamp indicating when the Attack Challenge mode should be active until. Specify this to control the duration of the mode being enabled.
-   **team\_identifier** (`string`, optional) The unique identifier for the team on whose behalf the request is made.
-   **team\_slug** (`string`, optional) The unique slug of the team on behalf of which the request is made.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.SetFirewallConfiguration



Update firewall configuration with specified rules.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_id** (`string`, optional) The unique identifier for the project to configure the firewall settings. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **team\_identifier** (`string`, optional) The unique identifier of the team to perform the request on behalf of. Only used when mode is ‘execute’.
-   **team\_slug** (`string`, optional) The slug representing the team for which the firewall configuration will be updated. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.UpdateFirewallConfig



Modify the existing firewall config for a project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_identifier** (`string`, optional) The unique identifier for the project to modify the firewall config. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **team\_identifier** (`string`, optional) The unique identifier for the team to perform the request on behalf of. Only used when mode is ‘execute’.
-   **team\_slug** (`string`, optional) The Team slug used to identify the team for the request. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.GetFirewallConfig



Retrieve the active firewall configuration for a project.

**Parameters**

-   **firewall\_configuration\_version** (`string`, required) The deployed version of the firewall configuration to retrieve.
-   **project\_id** (`string`, required) The unique identifier for the project whose firewall configuration is being retrieved.
-   **team\_identifier** (`string`, optional) The identifier for the team to perform the request on behalf of.
-   **team\_slug** (`string`, optional) The team slug to perform the request on behalf of. It identifies the specific team by its slug name.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.GetActiveAttackStatus



Retrieve active attack data from the Vercel firewall.

**Parameters**

-   **project\_id** (`string`, required) The unique identifier of the project to retrieve attack data for.
-   **active\_days\_since** (`number`, optional) Number of days in the past to look for active attack data. Defaults to 1 day if not specified.
-   **team\_identifier** (`string`, optional) The unique identifier of the team to perform the request on behalf of.
-   **team\_slug** (`string`, optional) The slug of the team to perform the request on behalf of. This identifies which team to target for the retrieval of attack data within Vercel’s system.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.RetrieveProjectBypassRules



Retrieve the bypass rules for a specified project.

**Parameters**

-   **project\_id** (`string`, required) The unique identifier of the project for which to retrieve bypass rules.
-   **filter\_by\_domain** (`string`, optional) Specify the domain to filter bypass rules. This filters rules related to the given domain.
-   **filter\_by\_project\_scope** (`boolean`, optional) Set to true to filter results by project-scoped rules.
-   **filter\_by\_source\_ip** (`string`, optional) Specify a source IP to filter the system bypass rules for a project.
-   **pagination\_offset** (`string`, optional) Pagination offset, retrieving results after the specified ID.
-   **result\_limit** (`number`, optional) The maximum number of rules to retrieve. Specify as a number. This is useful for controlling the volume of data returned.
-   **team\_identifier** (`string`, optional) The unique identifier of the team on whose behalf the request is performed.
-   **team\_slug** (`string`, optional) The slug representing the team to make the request on behalf of.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.CreateFirewallBypassRule



Create a new firewall bypass rule.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_id** (`string`, optional) The identifier for the project to create a bypass rule for. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **team\_identifier** (`string`, optional) The identifier for the team on whose behalf the request is made. Only used when mode is ‘execute’.
-   **team\_slug** (`string`, optional) The slug identifier of the team for which the bypass rule is created. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.RemoveBypassRule



Removes a bypass rule from the firewall.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_id** (`string`, optional) The unique identifier for the project from which to remove the bypass rule. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **team\_identifier** (`string`, optional) The unique identifier for the team on whose behalf the request is made. Only used when mode is ‘execute’.
-   **team\_slug** (`string`, optional) The Team slug indicating which team to perform the request on behalf of. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.CreateIntegrationStore



Create integration stores for FREE and PAID billing plans.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **team\_identifier** (`string`, optional) The unique identifier of the team on whose behalf the request is being made. Only used when mode is ‘execute’.
-   **team\_slug** (`string`, optional) The unique slug of the team for which the integration store is being created. This identifies the team on behalf of which the request is made. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.GetTeamMembers



Retrieve a list of team members for a specified team.

**Parameters**

-   **added\_since\_timestamp** (`number`, optional) Include team members added since this timestamp in milliseconds.
-   **exclude\_project\_id** (`string`, optional) Exclude members belonging to the specified project using the project ID.
-   **filter\_by\_team\_role** (`string`, optional) Return members with the specified team role. Valid roles include OWNER, MEMBER, DEVELOPER, SECURITY, BILLING, VIEWER, VIEWER\_FOR\_PLUS, and CONTRIBUTOR.
-   **include\_members\_until** (`number`, optional) Timestamp in milliseconds to include members added until this time.
-   **member\_limit** (`number`, optional) Specify the maximum number of team members to return in a single request.
-   **project\_id\_for\_eligible\_members** (`string`, optional) Include team members eligible for the specified project by providing the project ID.
-   **search\_team\_members** (`string`, optional) Search for team members by their name, username, or email.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.InviteUserToTeam



Invite a user to join a Vercel team.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **team\_id** (`string`, optional) The unique identifier for the Vercel team to which the user is being invited. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.RequestTeamAccess



Request to join a team on Vercel.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **team\_id** (`string`, optional) The unique identifier of the Vercel team you want to join. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.CheckTeamAccessStatus



Check the status of a team access request.

**Parameters**

-   **team\_id** (`string`, required) The unique identifier for the team whose access request status is being checked.
-   **user\_id** (`string`, required) The ID of the user whose team access request status is being checked. Leave empty to use the authenticated user.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.JoinVercelTeam



Join a Vercel team using invite code or team ID.

**Parameters**

-   **team\_id** (`string`, required) The unique ID of the Vercel team to join. Use this if you have the team ID instead of an invite code.
-   **team\_invite\_code** (`string`, optional) The invite code used to join a specific Vercel team. This is a string value provided to new members for team access.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.UpdateTeamMember



Update a team member’s role or confirm membership.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **member\_id** (`string`, optional) The unique identifier for the team member to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **team\_id** (`string`, optional) The unique ID of the team where the member’s role or membership status will be updated. It is required to identify the specific team. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.RemoveTeamMember



Remove or dismiss a team member or leave a team.

**Parameters**

-   **team\_id** (`string`, required) The ID of the team from which to remove or dismiss a member, or leave.
-   **user\_id** (`string`, required) The unique identifier of the user to be removed or dismissed from the team.
-   **new\_default\_team\_id** (`string`, optional) The ID of the team to set as the new default team for the Northstar user when removing another team member.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.GetTeamInfo



Retrieve information for a specified team using teamId.

**Parameters**

-   **team\_identifier** (`string`, required) The unique identifier for the team to retrieve information about.
-   **team\_slug** (`string`, optional) A string representing the unique slug of the team. Used to specify which team’s data to retrieve.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.UpdateTeamInfo



Update information of a specified team.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **team\_identifier** (`string`, optional) The unique identifier for the team whose information you want to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **team\_slug** (`string`, optional) The unique slug for the team used to perform the request. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.GetUserTeams



Retrieve all teams for the authenticated user.

**Parameters**

-   **max\_number\_of\_teams** (`number`, optional) Maximum number of teams to return in the response.
-   **teams\_created\_since\_timestamp** (`number`, optional) Timestamp in milliseconds to include only teams created since this time.
-   **teams\_created\_until** (`number`, optional) Timestamp in milliseconds to filter Teams created until the specified time.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.CreateVercelTeam



Create a new team in your Vercel account.

**Parameters**

-   **team\_slug** (`string`, required) The desired slug for the new team, used as a team identifier.
-   **session\_landing\_page** (`string`, optional) The URL of the landing page where the session started. This is used for session attribution on Vercel.
-   **session\_referrer** (`string`, optional) Referrer URL for the session initiating the team creation process.
-   **signup\_referrer\_page** (`string`, optional) The referrer URL of the page before the signup page, used for tracking attribution.
-   **team\_name** (`string`, optional) The desired name for the Team. If not provided, it will be generated from the slug.
-   **utm\_campaign\_name** (`string`, optional) Specifies the UTM campaign name for tracking purposes when creating a team.
-   **utm\_medium** (`string`, optional) The medium through which the user arrived, such as email, social, or cpc.
-   **utm\_source** (`string`, optional) The UTM source identifier, indicating where the traffic originates from, such as a search engine or newsletter.
-   **utm\_term** (`string`, optional) The UTM term used for tracking specific keywords in marketing campaigns.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.DeleteTeam



Delete a team from your Vercel account.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **team\_identifier** (`string`, optional) The unique identifier of the team to be deleted in your Vercel account. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **new\_default\_team\_id** (`string`, optional) Specify the team ID to set as the new default after deletion. Only used when mode is ‘execute’.
-   **team\_slug** (`string`, optional) The slug of the team you want to delete. Used to identify the team for the delete operation. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.DeleteTeamInviteCode



Delete an active team invite code in Vercel.

**Parameters**

-   **team\_identifier** (`string`, required) The unique identifier of the team to perform the operation for in Vercel.
-   **team\_invite\_code\_id** (`string`, required) The ID of the team invite code to be deleted in Vercel.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.RetrieveAuthTokens



Retrieve a list of the current user’s authentication tokens.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.CreateAuthToken



Create a new authentication token for the user.

**Parameters**

-   **token\_name** (`string`, required) A descriptive name for the authentication token. This helps in identifying the token’s purpose or context.
-   **expiration\_timestamp** (`number`, optional) The expiration time for the token, specified as a Unix timestamp. This defines when the token will no longer be valid.
-   **team\_identifier** (`string`, optional) The unique identifier for the Team to perform the request on behalf of.
-   **team\_slug** (`string`, optional) The slug of the Team to perform the request on behalf of. This identifies the specific team within your Vercel account.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.RetrieveAuthTokenMetadata



Retrieve metadata about an authentication token.

**Parameters**

-   **authentication\_token\_identifier** (`string`, required) The ID of the token to retrieve metadata for. Use “current” for the token that the current request is authenticated with.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.InvalidateAuthToken



Invalidate an authentication token to revoke access.

**Parameters**

-   **token\_id** (`string`, required) The ID of the token to invalidate. Use ‘current’ to invalidate the token used for this request.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.GetAuthenticatedUserInfo



Retrieve current authenticated user’s information.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.InitiateUserDeletion



Initiates user deletion and sends a confirmation email.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.CreateVercelWebhook



Create a new webhook in Vercel projects.

**Parameters**

-   **events\_list** (`array[string]`, required) A list of event types that trigger the webhook. Must be an array of strings, each representing an event.
-   **webhook\_url** (`string`, required) The target URL where the webhook will send POST requests. It should be a valid and publicly accessible URL.
-   **project\_ids** (`array[string]`, optional) List of project IDs for which the webhook is being created. Each ID should be a string.
-   **team\_identifier** (`string`, optional) The identifier for the team on whose behalf the request is performed.
-   **team\_slug** (`string`, optional) The slug representing the Vercel team to target the request for. It identifies the team on whose behalf the webhook is created.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.ListVercelWebhooks



Retrieve a list of webhooks from Vercel.

**Parameters**

-   **project\_id** (`string`, optional) The unique identifier for the project to retrieve webhooks from.
-   **team\_identifier** (`string`, optional) The identifier for the Vercel team to perform the request on behalf of.
-   **team\_slug** (`string`, optional) The slug identifier for the team to perform the request on behalf of. This is used to specify which team’s webhooks you want to retrieve.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.GetWebhook



Retrieve details of a specific webhook using its ID.

**Parameters**

-   **webhook\_id** (`string`, required) The unique identifier of the webhook to retrieve details for.
-   **team\_identifier** (`string`, optional) The identifier of the team on whose behalf the request is made. Required to specify the team context.
-   **team\_slug** (`string`, optional) The slug representing the team to perform the request on behalf of.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.DeleteVercelWebhook



Delete a specific webhook from Vercel.

**Parameters**

-   **webhook\_id** (`string`, required) The unique identifier of the webhook to be deleted.
-   **team\_identifier** (`string`, optional) The Team identifier used to perform the request on behalf of the specified team.
-   **team\_slug** (`string`, optional) The slug representing the Vercel team to perform the request on behalf of.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.GetDeploymentAliases



Fetch aliases for a specific deployment by ID.

**Parameters**

-   **deployment\_id** (`string`, required) The ID of the deployment for which to list the aliases.
-   **team\_identifier** (`string`, optional) The identifier of the team to perform the request on behalf of. It is required to retrieve deployment aliases.
-   **team\_slug** (`string`, optional) The slug representing the team on whose behalf the request is made.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.SetDeploymentAlias



Assigns a new alias to a Vercel deployment.

**Parameters**

-   **deployment\_id** (`string`, required) The ID of the deployment to assign the alias to. This identifier is crucial for specifying which deployment will receive the new alias.
-   **deployment\_alias** (`string`, optional) The alias to assign to the specified Vercel deployment.
-   **redirect\_hostname** (`string`, optional) Hostname to redirect the alias to, using status code 307. This will override the deployment ID from the URL.
-   **team\_identifier** (`string`, optional) The identifier of the team to perform the alias assignment on behalf of. Required for team-based operations.
-   **team\_slug** (`string`, optional) The Team slug to perform the request on behalf of. This identifies the team for the deployment operation.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.ListAliases



Retrieve a list of Vercel aliases for a user or team.

**Parameters**

-   **aliases\_created\_after\_timestamp** (`number`, optional) Get aliases created after this JavaScript timestamp. Use a timestamp in milliseconds since the epoch.
-   **created\_after\_timestamp** (`number`, optional) Return aliases created after this UNIX timestamp.
-   **filter\_by\_domain** (`string`, optional) Return only aliases associated with the specified domain name.
-   **get\_aliases\_before\_timestamp** (`number`, optional) Retrieve aliases created before the specified JavaScript timestamp.
-   **maximum\_aliases\_to\_list** (`number`, optional) Specifies the maximum number of aliases to retrieve in the request.
-   **project\_id\_filter** (`string`, optional) Filter to list aliases associated with the specified project ID.
-   **rollback\_deployment\_id** (`string`, optional) Specify the deployment ID to get aliases that would be rolled back for that deployment.
-   **team\_identifier** (`string`, optional) The identifier for the team to perform the request on behalf of. Use this to specify the team whose aliases should be listed.
-   **team\_slug** (`string`, optional) The slug identifier for the team to perform the request on behalf of.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.RetrieveVercelAlias



Retrieve Vercel alias information for a host name or alias ID.

**Parameters**

-   **alias\_identifier** (`string`, required) The alias or alias ID of the Vercel entity to retrieve.
-   **after\_timestamp** (`number`, optional) Get the alias only if it was created after this JavaScript timestamp (milliseconds since epoch).
-   **created\_after\_timestamp** (`number`, optional) Retrieve the alias only if it was created after the specified timestamp (in milliseconds).
-   **created\_before\_timestamp** (`number`, optional) Retrieve the alias only if it was created before this JavaScript timestamp.
-   **project\_id** (`string`, optional) Fetch the alias only if it is associated with this project ID in Vercel.
-   **team\_identifier** (`string`, optional) The Team identifier to perform the request on behalf of.
-   **team\_slug** (`string`, optional) The Team slug to perform the request on behalf of. This specifies the team context for the alias retrieval.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.DeleteAliasById



Delete a specific alias by its ID.

**Parameters**

-   **alias\_id\_to\_remove** (`string`, required) The unique ID or alias of the item to be removed from Vercel.
-   **team\_identifier** (`string`, optional) The unique identifier for the team to execute the request.
-   **team\_slug** (`string`, optional) The unique slug of the team for which the alias will be deleted.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.UpdateUrlProtectionBypass



Update the protection bypass for a Vercel URL.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **alias\_or\_deployment\_id** (`string`, optional) The ID of the alias or deployment for which to update the protection bypass. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **team\_identifier** (`string`, optional) The unique identifier of the team on whose behalf the request is made. Only used when mode is ‘execute’.
-   **team\_slug** (`string`, optional) The team slug representing which team the request should be performed for in Vercel. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.RetrieveCertificateById



Retrieve a Vercel certificate using its ID.

**Parameters**

-   **certificate\_id** (`string`, required) The unique identifier of the certificate to be retrieved from Vercel.
-   **team\_identifier** (`string`, optional) The identifier of the team to perform the request on behalf of.
-   **team\_slug** (`string`, optional) The slug identifying the team to perform the request on behalf of.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.RemoveCertificate



Remove a certificate from Vercel using its ID.

**Parameters**

-   **certificate\_id** (`string`, required) The unique identifier of the certificate to remove.
-   **team\_identifier** (`string`, optional) The identifier for the team on whose behalf the removal request is made.
-   **team\_slug** (`string`, optional) The slug of the team to perform the request on behalf of in Vercel.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.IssueVercelCertificate



Request a new SSL certificate from Vercel.

**Parameters**

-   **common\_names\_for\_certificate** (`array[string]`, optional) List of common names (domains) that the SSL certificate should be issued for.
-   **team\_id** (`string`, optional) The identifier for the Vercel team on whose behalf the certificate request is made.
-   **team\_slug** (`string`, optional) The team slug identifier for cert request on behalf of a specific team.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.UploadCertificate



Uploads a certificate to Vercel.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **team\_identifier** (`string`, optional) The unique identifier for the team to perform the request on behalf of. Only used when mode is ‘execute’.
-   **team\_slug** (`string`, optional) Specify the team slug to perform the request on behalf of in Vercel. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.GetVercelDeploymentFiles



Retrieve the file structure of a Vercel deployment.

**Parameters**

-   **deployment\_identifier** (`string`, required) The unique identifier for the deployment to retrieve its file structure.
-   **team\_identifier** (`string`, optional) The identifier of the team on whose behalf the request is made.
-   **team\_slug** (`string`, optional) The slug of the team performing the request. It is required for team-scoped requests.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.RetrieveDeploymentFileContents



Retrieve the contents of a file from a Vercel deployment.

**Parameters**

-   **deployment\_unique\_identifier** (`string`, required) The unique identifier for the deployment from which to retrieve the file.
-   **file\_identifier** (`string`, required) The unique identifier for the file you want to retrieve from the deployment.
-   **file\_path** (`string`, optional) Path to the file to fetch, applicable only for Git-based deployments.
-   **team\_identifier** (`string`, optional) The identifier of the team to make the request on behalf of.
-   **team\_slug** (`string`, optional) The slug of the team to perform the request on behalf of. Specify which team’s context to use.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.ListVercelDeployments



Retrieve deployments from Vercel for a user or team.

**Parameters**

-   **branch\_name\_filter** (`string`, optional) Specify the branch name to filter deployments.
-   **created\_after\_timestamp** (`number`, optional) Retrieve deployments created after this Date timestamp. Defaults to current time if not specified.
-   **deployment\_name** (`string`, optional) The name of the deployment to filter results.
-   **deployment\_since\_timestamp** (`number`, optional) Retrieve deployments created after this JavaScript timestamp.
-   **deployment\_state\_filter** (`string`, optional) Filter deployments by their state, such as `BUILDING`, `ERROR`, `INITIALIZING`, `QUEUED`, `READY`, or `CANCELED`.
-   **fetch\_deployments\_before\_timestamp** (`number`, optional) Specify a JavaScript timestamp to retrieve deployments created before this time.
-   **filter\_by\_environment** (`string`, optional) Specify the environment to filter deployments (e.g., ‘production’, ‘staging’).
-   **filter\_by\_project\_id** (`string`, optional) Filter deployments using a specific project ID or name.
-   **filter\_by\_project\_ids** (`array[string]`, optional) Filter deployments from specified project IDs. Cannot be used with the ‘filter\_by\_project\_id’ argument.
-   **filter\_by\_rollback\_candidacy** (`boolean`, optional) Set to true to filter and include only rollback candidate deployments.
-   **filter\_by\_sha** (`string`, optional) Filter deployments based on the specific SHA value.
-   **get\_deployments\_before\_timestamp** (`number`, optional) A timestamp to get deployments created before a specific date. Useful for filtering older deployments. Defaults to the current time if not specified.
-   **maximum\_deployments\_to\_list** (`number`, optional) Sets the maximum number of deployments to retrieve in one request.
-   **team\_identifier** (`string`, optional) The identifier for the team to perform the request on behalf of. Use when filtering deployments by team.
-   **team\_slug** (`string`, optional) The team slug to perform the request on behalf of. Specify which team’s deployments to retrieve.
-   **user\_filter** (`string`, optional) Filter deployments by the user who created them. Provide a username or user ID.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## VercelApi.DeleteDeployment



Delete a Vercel deployment using its ID or URL.

**Parameters**

-   **deployment\_id** (`string`, required) The ID of the deployment to be deleted. Use this if not providing a URL.
-   **deployment\_url** (`string`, optional) A Deployment or Alias URL for identifying the deployment to delete. The ID will be ignored if this is provided.
-   **team\_identifier** (`string`, optional) The unique identifier for the team on whose behalf the request is executed.
-   **team\_slug** (`string`, optional) The Team slug to perform the deletion on behalf of. Specify which team’s deployment to delete.

**Secrets**

This tool requires the following secrets: `VERCEL_ACCESS_TOKEN` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

To obtain a Vercel access token:

1.  Log in to your [Vercel Dashboard](https://vercel.com/dashboard)
     
2.  Go to Settings → Tokens
3.  Click “Create” and provide a descriptive name
4.  Set the desired scope and click “Create Token”
5.  Copy and securely store the token (it won’t be displayed again)

For detailed instructions, see the [Vercel API Access Token guide](https://vercel.com/guides/how-do-i-use-a-vercel-api-access-token) .

## Reference

Below is a reference of enumerations used by some of the tools in the VercelApi MCP Server:

### ToolMode

-   **GET\_REQUEST\_SCHEMA**: `get_request_schema`
-   **EXECUTE**: `execute`

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_vercel_api ``` Learn more](/guides/deployment-hosting.md)

Last updated on February 10, 2026

[Reference](/en/resources/integrations/development/firecrawl/reference.md)
[PostHog API](/en/resources/integrations/development/posthog-api.md)
