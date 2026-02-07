---
title: "DatadogApi"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Developer Tools](/en/resources/integrations/development/e2b.md)
DatadogApi

# DatadogApi

Arcade Unoptimized

**Description:** Tools that enable LLMs to interact directly with the Datadog API.

**Author:** Arcade

**Auth:** API Key

[![PyPI Version](https://img.shields.io/pypi/v/arcade_datadog_api)](https://pypi.org/project/arcade_datadog_api/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_datadog_api)](https://pypi.org/project/arcade_datadog_api/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_datadog_api)](https://pypi.org/project/arcade_datadog_api/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_datadog_api)](https://pypi.org/project/arcade_datadog_api/)

DatadogApi is a [Unoptimized MCP Server](/guides/create-tools/improve/types-of-tools.md#unoptimized-tools)
: each tool mirrors one HTTP endpoint and offers LLMs a way to interact with the low-level API.



Differently from [Optimized MCP Servers](/guides/create-tools/improve/types-of-tools.md#optimized-tools)
, Unoptimized tools are heavily influenced by the original API design, which is not usually optimized for LLM usage. For this reason, we recommend thoroughly evaluating the tools with your Agents or chatbots before using it in production. [Read more](/guides/create-tools/improve/types-of-tools.md) about Optimized vs Unoptimized tools.

The DatadogApi MCP Server offers a comprehensive suite of tools for managing and interacting with Datadog’s services. Users can leverage these tools to:

## Authentication

The Arcade Datadog API MCP Server requires three environment variables to authenticate with the [Datadog API](https://docs.datadoghq.com/api/latest/) :

-   `DATADOG_API_KEY`
-   `DATADOG_APPLICATION_KEY`
-   `DATADOG_BASE_URL`

**How to obtain your credentials:**

1.  Log in to your [Datadog dashboard](https://app.datadoghq.com/)
     
2.  Navigate to **Organization Settings** (click your profile icon in the bottom left)
3.  Go to **API Keys** → click **New Key** → provide a name and click **Create Key**
4.  Go to **Application Keys** → click **New Key** → provide a name and click **Create Key**
5.  Determine your **Base URL** based on your Datadog site (check the URL in your browser):
    -   US1: `api.datadoghq.com`
    -   US3: `api.us3.datadoghq.com`
    -   US5: `api.us5.datadoghq.com`
    -   EU1: `api.datadoghq.eu`
    -   AP1: `api.ap1.datadoghq.com`
    -   GOV: `api.ddog-gov.com`

For more details, see the [Datadog API and Application Keys documentation](https://docs.datadoghq.com/account_management/api-app-keys/) .

## Available Tools

Tool Name

Description

DatadogApi.ListDatadogDatastores

Retrieve a list of all Datadog datastores.

DatadogApi.CreateNewDatastore

Creates a new datastore in Datadog.

DatadogApi.DeleteDatadogDatastore

Delete a Datadog datastore using its unique ID.

DatadogApi.RetrieveDatastore

Retrieve datastore information by ID.

DatadogApi.UpdateDatastoreAttributes

Update attributes of an existing datastore in Datadog.

DatadogApi.DeleteDatastoreItem

Delete an item from a datastore by its key.

DatadogApi.ListDatastoreItems

Retrieve items from a specified datastore.

DatadogApi.UpdateDatastoreItem

Partially update an item in a datastore by its key.

DatadogApi.BulkDeleteDatastoreItems

Delete multiple items from a datastore at once.

DatadogApi.BulkUpdateDatastoreItems

Perform bulk creation or replacement of datastore items.

DatadogApi.ListAppKeyRegistrations

Retrieve a list of app key registrations from Datadog.

DatadogApi.UnregisterAppKey

Unregister an application key to revoke its access.

DatadogApi.GetAppKeyRegistration

Retrieve details of an existing App Key Registration.

DatadogApi.RegisterDatadogAppKey

Register a new app key in Datadog.

DatadogApi.CreateActionConnection

Create a new action connection in Datadog.

DatadogApi.DeleteActionConnection

Delete an existing action connection in Datadog.

DatadogApi.GetActionConnection

Retrieve an existing Action Connection from Datadog.

DatadogApi.UpdateActionConnection

Update an existing action connection in Datadog.

DatadogApi.GetAwsScanOptions

Fetch AWS scan options for configured accounts.

DatadogApi.ActivateAwsScanOptions

Activate Agentless scan options for an AWS account.

DatadogApi.DeleteAwsScanOptions

Delete Agentless scan options for an AWS account.

DatadogApi.FetchAwsScanSettings

Fetches Agentless scan options for AWS accounts.

DatadogApi.UpdateAwsScanOptions

Update Agentless scan options for an AWS account.

DatadogApi.FetchAzureScanOptions

Fetches the scan options for Azure accounts from Datadog.

DatadogApi.ActivateAzureScanOptions

Activate Agentless scan options for Azure subscriptions.

DatadogApi.DeleteAzureSubscriptionScanOptions

Delete scan options for an Azure subscription.

DatadogApi.GetAgentlessScanOptions

Fetch Azure Agentless scan options for a subscription.

DatadogApi.UpdateAzureScanOptions

Update Agentless scan options for an Azure subscription.

DatadogApi.FetchGcpScanOptions

Fetch GCP project scan options.

DatadogApi.ActivateGcpScanOptions

Activate Agentless scan options for a GCP project.

DatadogApi.DeleteGcpScanOptions

Delete Agentless scan options for a GCP project.

DatadogApi.RetrieveGcpScanSettings

Retrieve GCP project agentless scan options.

DatadogApi.UpdateGcpScanOptions

Update scan options for a GCP project in Datadog.

DatadogApi.FetchRecentAwsOnDemandTasks

Retrieve the latest AWS on demand tasks.

DatadogApi.TriggerAwsResourceScan

Trigger a high-priority scan of an AWS resource.

DatadogApi.GetAwsOnDemandTaskData

Fetch data of a specific AWS on-demand task in Datadog.

DatadogApi.ListApiKeys

Retrieve all API keys for your Datadog account.

DatadogApi.CreateDatadogApiKey

Creates a new API key in Datadog.

DatadogApi.DeleteDatadogApiKey

Delete an API key from Datadog.

DatadogApi.GetApiKeyDetails

Retrieves details of a specific Datadog API key.

DatadogApi.UpdateDatadogApiKey

Update an API key in Datadog.

DatadogApi.ListSpanMetrics

Retrieve configured span-based metrics from Datadog.

DatadogApi.CreateSpanMetric

Create a metric based on ingested spans in your organization.

DatadogApi.DeleteSpanMetric

Delete a specific span-based metric from your organization.

DatadogApi.GetSpanMetric

Retrieve a specific span-based metric from Datadog.

DatadogApi.UpdateSpanMetric

Update a specific span-based metric in Datadog.

DatadogApi.GetApmRetentionFilters

Retrieve the list of APM retention filters from Datadog.

DatadogApi.CreateApmRetentionFilter

Create a retention filter for indexing spans in Datadog.

DatadogApi.ReorderApmRetentionFilters

Reorder execution order of APM retention filters.

DatadogApi.DeleteApmRetentionFilter

Delete a specific APM retention filter from your organization.

DatadogApi.GetApmRetentionFilter

Retrieve details of a specific APM retention filter.

DatadogApi.UpdateApmRetentionFilter

Update an APM retention filter in your organization.

DatadogApi.DeleteMultipleDatadogApps

Delete multiple apps in Datadog using app IDs.

DatadogApi.ListApps

Retrieve a list of all apps with optional filters and sorting.

DatadogApi.CreateNewApp

Create a new app and return its ID using Datadog.

DatadogApi.DeleteApp

Delete a specific app in Datadog.

DatadogApi.GetAppDetails

Retrieve comprehensive details of a Datadog app.

DatadogApi.UpdateAppVersion

Update an app by creating a new version.

DatadogApi.UnpublishApp

Unpublish an app to remove its live version.

DatadogApi.PublishAppOnDatadog

Publish an app for user access on Datadog.

DatadogApi.ListApplicationKeys

Retrieve all application keys for your organization.

DatadogApi.DeleteDatadogAppKey

Deletes an application key in Datadog.

DatadogApi.GetApplicationKey

Retrieve an application key for your organization from Datadog.

DatadogApi.UpdateDatadogAppKey

Edit a Datadog application key by ID.

DatadogApi.GetAuditLogs

Retrieve events matching an Audit Logs search query.

DatadogApi.SearchAuditLogs

Retrieve audit logs events based on a search query.

DatadogApi.ListAuthnMappings

Retrieve all AuthN Mappings in the organization.

DatadogApi.CreateAuthnMapping

Creates a new AuthN Mapping in Datadog.

DatadogApi.DeleteAuthnMapping

Delete an AuthN Mapping using its UUID.

DatadogApi.GetAuthnMapping

Retrieve an AuthN Mapping by its UUID.

DatadogApi.EditAuthnMapping

Edit an AuthN Mapping in Datadog.

DatadogApi.SearchCases

Search and retrieve support cases from Datadog.

DatadogApi.CreateSupportCase

Create a new support case in Datadog.

DatadogApi.GetAllProjects

Retrieve a list of all projects from Datadog.

DatadogApi.CreateProject

Create a new project in the system.

DatadogApi.RemoveProject

Remove a project using its ID.

DatadogApi.GetProjectDetails

Retrieve details of a specific project using project ID.

DatadogApi.RetrieveSupportCaseTypes

Retrieves all available support case types from Datadog.

DatadogApi.CreateCaseTypeInDatadog

Initiate the creation of a new case type in Datadog.

DatadogApi.GetAllCustomAttributes

Retrieve all custom attributes for cases in Datadog.

DatadogApi.DeleteCaseType

Delete a specific case type in Datadog.

DatadogApi.GetCustomAttributeConfigs

Retrieve all custom attribute configurations for a case type.

DatadogApi.CreateCustomAttributeConfig

Create a custom attribute configuration for a specific case type.

DatadogApi.DeleteCustomAttributeConfig

Deletes a custom attribute configuration for a case type.

DatadogApi.GetCaseDetails

Retrieve detailed information for a specific case.

DatadogApi.ArchiveCase

Archive a specific case in Datadog.

DatadogApi.AssignCaseToUser

Assign a case to a specific user.

DatadogApi.UpdateCaseAttributes

Update attributes of a specific case.

DatadogApi.AddCommentToCase

Add a comment to a specific case in Datadog.

DatadogApi.DeleteCaseComment

Deletes a specific comment from a case.

DatadogApi.DeleteCaseCustomAttribute

Removes a custom attribute from a specified case.

DatadogApi.UpdateCaseCustomAttribute

Update a custom attribute for a specific case in Datadog.

DatadogApi.UpdateCaseDescription

Update the description of a case in Datadog.

DatadogApi.UpdateCasePriority

Update the priority of a specific case.

DatadogApi.UpdateCaseStatus

Update the status of a specific case in Datadog.

DatadogApi.UpdateCaseTitle

Update the title of a specific case by ID.

DatadogApi.UnarchiveCase

Unarchive a specific support case in Datadog.

DatadogApi.UnassignCase

Unassigns a case from its current assignee.

DatadogApi.ListSoftwareCatalogEntities

Retrieve entities from the software catalog.

DatadogApi.ManageSoftwareCatalogEntity

Create or update entities in the Software Catalog.

DatadogApi.DeleteCatalogEntity

Delete a single entity from the Software Catalog.

DatadogApi.ListCatalogKinds

Retrieve entity kinds from the Software Catalog.

DatadogApi.UpdateSoftwareCatalogKind

Create or update kinds in the Software Catalog.

DatadogApi.DeleteCatalogKind

Delete a kind from the Software Catalog.

DatadogApi.ListCatalogEntityRelations

Retrieve entity relations from the software catalog.

DatadogApi.AggregatePipelineEvents

Aggregate CI pipeline event metrics and timeseries.

DatadogApi.ListCiPipelineEvents

Retrieve CI pipeline events based on a search query.

DatadogApi.SearchCiPipelineEvents

Retrieve CI pipeline events matching a search query.

DatadogApi.AggregateTestMetrics

Aggregate CI Visibility test events into metrics and timeseries.

DatadogApi.ListCiTestEvents

Retrieve CI test events based on a search query.

DatadogApi.SearchCiTestEvents

Retrieve CI Visibility test events with advanced search capabilities.

DatadogApi.CreateCustomSecurityFramework

Create a custom security framework in Datadog.

DatadogApi.DeleteCustomFramework

Delete a custom framework from Datadog.

DatadogApi.GetCustomFramework

Retrieve a specific custom framework by handle and version.

DatadogApi.UpdateCustomFramework

Update an existing custom security management framework.

DatadogApi.ListResourceFilters

Retrieve Datadog resource evaluation filters.

DatadogApi.UpdateResourceFilters

Update resource filters in cloud security management.

DatadogApi.ListContainerImages

Retrieve all container images for your organization.

DatadogApi.ListAllContainers

Retrieve all containers within your organization.

DatadogApi.ListCustomAllocationRules

Retrieve all custom allocation rules for the organization.

DatadogApi.CreateCustomAllocationRule

Create a custom allocation rule in Datadog.

DatadogApi.ReorderCustomAllocationRules

Change execution order of custom allocation rules in Datadog.

DatadogApi.DeleteCustomAllocationRule

Delete an existing custom allocation rule by ID.

DatadogApi.GetCustomAllocationRule

Retrieve a custom allocation rule by its ID.

DatadogApi.UpdateCustomAllocationRule

Update custom allocation rules with new filters and strategies.

DatadogApi.ListAwsCurConfigs

Retrieve AWS CUR configuration list from Datadog.

DatadogApi.CreateAwsCurConfig

Create an AWS CUR config for Cloud Cost Management.

DatadogApi.ArchiveCloudCostAccount

Archive a Cloud Cost Management Account.

DatadogApi.GetAwsCurConfig

Retrieve a specific AWS CUR configuration.

DatadogApi.UpdateAwsCurConfigStatus

Updates status or configuration of an AWS CUR config.

DatadogApi.ListAzureConfigs

Retrieve Azure configuration list from Datadog.

DatadogApi.CreateAzureCostManagementAccount

Create a Cloud Cost Management account for Azure.

DatadogApi.ArchiveAzureCostAccount

Archive an Azure Cloud Cost Management account in Datadog.

DatadogApi.GetAzureConfig

Retrieve details of a specific Azure configuration.

DatadogApi.UpdateAzureConfigStatus

Update status of Azure config to active or archived.

DatadogApi.ManageBudget

Create or update a budget in Datadog.

DatadogApi.DeleteBudget

Delete a specified budget.

DatadogApi.GetBudgetDetails

Retrieve detailed information about a specific budget.

DatadogApi.ListBudgets

Fetch a list of budgets from Datadog.

DatadogApi.ListCustomCostsFiles

Retrieve a list of custom costs files from Datadog.

DatadogApi.UploadCustomCostsFile

Upload a custom costs file to Datadog.

DatadogApi.DeleteCustomCostFile

Delete a specified custom costs file in Datadog.

DatadogApi.FetchCustomCostsFile

Fetch a specified Custom Costs file by file ID from Datadog.

DatadogApi.ListGcpUsageCostConfigs

Retrieve Google Cloud Usage Cost configurations from Datadog.

DatadogApi.CreateGcpCostManagementAccount

Create a cost management account for Google Cloud usage.

DatadogApi.ArchiveGcpCostManagementAccount

Archive a Cloud Cost Management account.

DatadogApi.GetGcpUsageCostConfig

Retrieve specific Google Cloud Usage Cost configuration details.

DatadogApi.UpdateGcpUsageCostStatus

Update the status of a GCP Usage Cost config.

DatadogApi.GetActiveBillingDimensions

Retrieve active billing dimensions for cost attribution.

DatadogApi.FetchMonthlyCostAttribution

Retrieve monthly cost attribution data by tag.

DatadogApi.ListAllCsmAgents

Retrieve all CSM Agents running on your infrastructure.

DatadogApi.GetCloudAccountsCoverageAnalysis

Retrieve CSM coverage analysis of your cloud accounts.

DatadogApi.GetCsmCoverageAnalysis

Retrieve CSM coverage analysis for hosts and containers.

DatadogApi.GetServerlessCoverageAnalysis

Retrieve CSM serverless coverage analysis data from Datadog.

DatadogApi.ListServerlessAgents

Retrieve all running CSM Serverless Agents.

DatadogApi.ListUserAppKeys

Retrieve all application keys for the current user.

DatadogApi.CreateUserApplicationKey

Create an application key for the current user in Datadog.

DatadogApi.DeleteUserApplicationKey

Delete an application key owned by the current user.

DatadogApi.GetUserApplicationKey

Retrieve an application key owned by the current user.

DatadogApi.EditUserAppKey

Edit an application key owned by the current user.

DatadogApi.DeleteDashboardFromList

Remove dashboards from a specified list in Datadog.

DatadogApi.FetchDashboardListItems

Fetch details of dashboards in a list.

DatadogApi.AddDashboardsToList

Add dashboards to an existing list in Datadog.

DatadogApi.UpdateDashboardListItems

Update dashboards in an existing dashboard list.

DatadogApi.GetAllDatasets

Retrieve all datasets configured for your organization.

DatadogApi.CreateDataset

Create a dataset with specified configurations.

DatadogApi.DeleteDataset

Deletes a dataset using its ID.

DatadogApi.RetrieveDatasetInfo

Retrieve detailed information about a specific dataset from Datadog.

DatadogApi.EditDataset

Edit the dataset using the specified ID.

DatadogApi.GetDomainAllowlist

Retrieve the domain allowlist for an organization.

DatadogApi.UpdateDomainAllowlist

Update the organization's domain allowlist to control domain access.

DatadogApi.ListScheduledDowntimes

Retrieve all scheduled downtimes from Datadog.

DatadogApi.ScheduleDowntime

Schedule downtime for services or systems through Datadog.

DatadogApi.CancelDowntime

Cancel an active downtime in Datadog.

DatadogApi.GetDowntimeDetails

Retrieve details of a specific downtime by ID.

DatadogApi.UpdateDowntime

Update downtime by its ID in Datadog.

DatadogApi.SearchDatadogIssues

Search and retrieve issues from Datadog using a query.

DatadogApi.GetErrorTrackingIssueDetails

Retrieve full details of a specific error tracking issue.

DatadogApi.UpdateIssueAssignee

Update the assignee of an issue in Datadog.

DatadogApi.UpdateIssueState

Update the state of an issue in Datadog.

DatadogApi.ListDatadogEvents

Retrieve events from Datadog based on a search query.

DatadogApi.SearchDatadogEvents

Search and filter events in Datadog.

DatadogApi.GetEventDetails

Retrieve detailed information about a specific event.

DatadogApi.ListOrganizationIncidents

Retrieve all incidents for your organization.

DatadogApi.CreateIncident

Create a new incident in Datadog.

DatadogApi.ListIncidentNotificationRules

Retrieve all incident notification rules for the organization.

DatadogApi.CreateIncidentNotificationRule

Creates a new incident notification rule in Datadog.

DatadogApi.DeleteIncidentNotificationRule

Delete an incident notification rule by its ID.

DatadogApi.GetIncidentNotificationRule

Retrieve details of a specific incident notification rule.

DatadogApi.UpdateIncidentNotificationRule

Update an incident notification rule in Datadog.

DatadogApi.ListIncidentNotificationTemplates

Retrieve all incident notification templates.

DatadogApi.CreateIncidentNotificationTemplate

Creates a new incident notification template.

DatadogApi.DeleteIncidentNotificationTemplate

Deletes a notification template by its ID.

DatadogApi.GetIncidentNotificationTemplate

Retrieve a specific incident notification template by ID.

DatadogApi.UpdateNotificationTemplate

Update attributes of a notification template.

DatadogApi.GetIncidentTypes

Retrieve all incident types from Datadog.

DatadogApi.CreateIncidentType

Create a new incident type in Datadog.

DatadogApi.DeleteIncidentType

Deletes a specified incident type from Datadog configuration.

DatadogApi.GetIncidentTypeDetails

Retrieve details of a specific incident type.

DatadogApi.UpdateIncidentType

Update the type of a specific incident in Datadog.

DatadogApi.SearchDatadogIncidents

Search for incidents in Datadog by query.

DatadogApi.DeleteIncident

Deletes an existing incident from the organization.

DatadogApi.GetIncidentDetails

Retrieve details of a specific incident using its ID.

DatadogApi.UpdateIncident

Partially update an incident's details.

DatadogApi.GetIncidentAttachments

Retrieve all attachments for a specified incident.

DatadogApi.ManageIncidentAttachments

Manage attachments for a specific incident in bulk.

DatadogApi.GetIncidentImpacts

Retrieve all impacts for a specified incident.

DatadogApi.CreateIncidentImpact

Create an impact for a specific incident.

DatadogApi.DeleteIncidentImpact

Delete a specific incident impact by ID.

DatadogApi.GetIncidentIntegrations

Retrieve integration metadata for a specific incident.

DatadogApi.CreateIncidentIntegration

Create incident integration metadata for an incident.

DatadogApi.DeleteIncidentIntegrationMetadata

Remove an incident integration metadata entry.

DatadogApi.GetIncidentIntegrationDetails

Fetches details of incident integration metadata.

DatadogApi.UpdateIncidentIntegration

Update incident integration metadata in Datadog.

DatadogApi.ListIncidentTodos

Retrieve all todos for a specified incident.

DatadogApi.CreateIncidentTodo

Create a task within an incident in Datadog.

DatadogApi.DeleteIncidentTodo

Delete a specified incident todo in Datadog.

DatadogApi.GetIncidentTodoDetails

Retrieve details of an incident todo item from Datadog.

DatadogApi.UpdateIncidentTodo

Update a specific incident todo in Datadog.

DatadogApi.ListAwsAccounts

Retrieve AWS account integration configurations.

DatadogApi.CreateAwsAccountIntegration

Create a new AWS Account Integration Config in Datadog.

DatadogApi.DeleteAwsAccountConfig

Delete an AWS account integration by config ID.

DatadogApi.GetAwsAccountIntegrationConfig

Retrieve AWS Account Integration Config by ID.

DatadogApi.UpdateAwsAccountIntegration

Update an AWS Account Integration configuration.

DatadogApi.GetAwsCloudwatchNamespaces

Retrieve available AWS CloudWatch namespaces for Datadog integration.

DatadogApi.GenerateAwsExternalId

Generate a new external ID for AWS authentication.

DatadogApi.FetchAwsIntegrationPermissions

Retrieve AWS IAM permissions for Datadog integration.

DatadogApi.GetAwsIamPermissions

Get required AWS IAM permissions for resource collection.

DatadogApi.GetAwsIntegrationIamPermissions

Fetch standard AWS IAM permissions for integration.

DatadogApi.ListAwsLogsServices

Retrieve AWS services for logging to Datadog.

DatadogApi.ListGcpStsAccounts

Retrieve all GCP STS-enabled service accounts from Datadog.

DatadogApi.CreateGcpStsAccount

Create a new GCP STS account entry in Datadog.

DatadogApi.DeleteGcpStsAccount

Delete an STS-enabled GCP account in Datadog.

DatadogApi.UpdateGcpStsAccount

Update an STS-enabled GCP service account configuration.

DatadogApi.GetGcpStsDelegate

Retrieve the Datadog-GCP STS delegate account configuration.

DatadogApi.CreateDatadogGcpPrincipal

Create a Datadog GCP principal.

DatadogApi.GetDatadogChannelInfo

Retrieve channel ID details for Datadog MS Teams integration.

DatadogApi.ListTenantBasedHandles

Retrieve Datadog's tenant-based handles for MS Teams integration.

DatadogApi.CreateTenantBasedHandle

Create a tenant-based handle in Datadog for Teams.

DatadogApi.DeleteMsTeamsTenantHandle

Delete a tenant-based handle from Datadog's Microsoft Teams integration.

DatadogApi.GetTeamsIntegrationInfo

Retrieve tenant, team, and channel info for a handle.

DatadogApi.UpdateMsTeamsTenantHandle

Update a Microsoft Teams tenant-based handle in Datadog.

DatadogApi.ListMsTeamsWorkflowWebhooks

Retrieve all Microsoft Teams workflow webhook handles from Datadog.

DatadogApi.CreateWorkflowWebhookHandle

Create a webhook handle for Datadog Microsoft Teams integration.

DatadogApi.DeleteWorkflowWebhookHandle

Delete a Workflows webhook handle in Datadog.

DatadogApi.GetMsTeamsWorkflowWebhookName

Retrieve the name of a MS Teams workflow webhook handle.

DatadogApi.UpdateWorkflowsWebhookHandle

Update a webhook handle in Datadog's Microsoft Teams integration.

DatadogApi.ListOpsgenieServices

Retrieve all services from Datadog Opsgenie integration.

DatadogApi.CreateOpsgenieService

Create a new Opsgenie service in Datadog integration.

DatadogApi.DeleteOpsgenieService

Delete a service in Datadog's Opsgenie integration.

DatadogApi.GetOpsgenieService

Retrieve a single Opsgenie service from Datadog.

DatadogApi.UpdateOpsgenieService

Update a service in the Datadog Opsgenie integration.

DatadogApi.ListCloudflareAccounts

Retrieve a list of Cloudflare accounts from Datadog.

DatadogApi.CreateCloudflareAccount

Create a Cloudflare account through Datadog integration.

DatadogApi.DeleteCloudflareAccount

Delete a Cloudflare account via Datadog integration.

DatadogApi.GetCloudflareAccount

Retrieve details of a Cloudflare account via Datadog.

DatadogApi.UpdateCloudflareAccount

Update details of a Cloudflare account.

DatadogApi.ListConfluentAccounts

Retrieve a list of Confluent accounts.

DatadogApi.CreateConfluentAccount

Create a Confluent account on Datadog.

DatadogApi.DeleteConfluentAccount

Delete a Confluent account using the account ID.

DatadogApi.GetConfluentAccountInfo

Retrieve Confluent account information by account ID.

DatadogApi.UpdateConfluentAccount

Updates the Confluent account details.

DatadogApi.GetConfluentResource

Retrieve Confluent resource details for a specific account ID.

DatadogApi.CreateConfluentResource

Create a Confluent resource for a specified account.

DatadogApi.DeleteConfluentResource

Deletes a specified Confluent resource in a Datadog account.

DatadogApi.FetchConfluentResource

Retrieve a Confluent resource using account and resource IDs.

DatadogApi.UpdateConfluentResource

Update a Confluent resource linked to a specified account.

DatadogApi.ListFastlyAccounts

Retrieve a list of Fastly accounts integrated with Datadog.

DatadogApi.CreateFastlyAccount

Create a new Fastly account through Datadog integration.

DatadogApi.DeleteFastlyAccount

Deletes a specified Fastly account integration.

DatadogApi.GetFastlyAccountInfo

Retrieves detailed information for a specific Fastly account.

DatadogApi.UpdateFastlyAccount

Updates a Fastly account via Datadog integration.

DatadogApi.ListFastlyServices

Retrieve Fastly services for a specific account.

DatadogApi.CreateFastlyService

Create a Fastly service for a specific account in Datadog.

DatadogApi.DeleteFastlyService

Delete a Fastly service for an account.

DatadogApi.GetFastlyServiceInfo

Retrieve Fastly service details for a specific account.

DatadogApi.UpdateFastlyService

Update a Fastly service for an account in Datadog.

DatadogApi.ListOktaAccounts

Retrieve a list of Okta accounts linked to Datadog.

DatadogApi.CreateOktaAccount

Create an Okta account via Datadog integration.

DatadogApi.DeleteOktaAccount

Delete an Okta account from Datadog integration.

DatadogApi.GetOktaAccountInfo

Retrieve detailed information about a specific Okta account.

DatadogApi.UpdateOktaAccount

Update details of an existing Okta account.

DatadogApi.GetIpAllowlist

Retrieve the IP allowlist and its status.

DatadogApi.UpdateIpAllowlist

Edit and toggle the IP allowlist settings in Datadog.

DatadogApi.AggregateLogs

Aggregate logs to compute metrics and timeseries.

DatadogApi.GetCurrentArchiveOrder

Retrieve the current order of logs archives.

DatadogApi.UpdateLogsArchiveOrder

Updates the order of log archives in Datadog.

DatadogApi.ListLogsArchives

Get the list of configured logs archives.

DatadogApi.CreateLogsArchive

Create an archive of logs in your organization.

DatadogApi.DeleteLogsArchive

Delete a specific logs archive from your organization.

DatadogApi.GetSpecificLogsArchive

Retrieve a specific logs archive from Datadog.

DatadogApi.UpdateArchiveConfiguration

Replace an existing archive configuration in Datadog.

DatadogApi.RemoveRoleFromArchive

Removes a role from a specified archive in Datadog.

DatadogApi.GetArchiveReadRoles

Retrieve roles with read access to a specific archive.

DatadogApi.AddReadRoleToArchive

Adds a read role to a specified archive.

DatadogApi.ListCustomLogDestinations

Retrieve configured custom log destinations from Datadog.

DatadogApi.CreateCustomLogDestination

Create a custom log destination in Datadog.

DatadogApi.DeleteCustomLogDestination

Delete a specific custom log destination.

DatadogApi.GetCustomDestination

Retrieve details of a specific custom log destination.

DatadogApi.UpdateLogsCustomDestination

Update specific fields of a custom logs destination.

DatadogApi.GetLogsMetricsList

Retrieve a list of log-based metrics and their definitions.

DatadogApi.CreateLogBasedMetric

Create a metric from your ingested logs.

DatadogApi.DeleteLogMetric

Delete a specific log-based metric from your organization.

DatadogApi.GetLogBasedMetric

Retrieve a specific log-based metric from Datadog.

DatadogApi.UpdateLogBasedMetric

Update a specific log-based metric in your organization.

DatadogApi.ListRestrictionQueries

Retrieve all restriction queries with their details.

DatadogApi.CreateDatadogRestrictionQuery

Create a new restriction query in Datadog.

DatadogApi.GetRoleRestrictionQuery

Retrieve the restriction query for a specific role.

DatadogApi.GetUserRestrictionQueries

Retrieve restriction queries for a specific user.

DatadogApi.DeleteRestrictionQuery

Deletes a restriction query from Datadog logs configuration.

DatadogApi.GetRestrictionQuery

Retrieve a restriction query by its ID within Datadog.

DatadogApi.EditRestrictionQuery

Edit an existing restriction query in Datadog.

DatadogApi.RemoveRoleFromRestrictionQuery

Removes a role from a Datadog restriction query.

DatadogApi.GetRestrictionQueryRoles

Retrieve roles associated with a specific restriction query.

DatadogApi.AddRoleToRestrictionQuery

Adds a role to a restriction query for logs configuration.

DatadogApi.ListLogsMatchingQuery

Retrieve logs that match a search query with pagination.

DatadogApi.ListLogs

Retrieve logs based on a search query with pagination.

DatadogApi.ListMetricTagConfigurations

Retrieve all metrics configurable in Datadog's Metrics Summary.

DatadogApi.DeleteBulkTagsMetrics

Delete custom lists of queryable tag keys for metrics.

DatadogApi.ConfigureBulkTagsForMetrics

Configure bulk tags for specified metrics in Datadog.

DatadogApi.ListActiveMetricConfigurations

Retrieve active metric tags and aggregations for a given metric name.

DatadogApi.ListMetricTags

Retrieve indexed tags for a metric over the last hour.

DatadogApi.ListMetricAssets

Retrieve assets associated with a specific metric.

DatadogApi.EstimateMetricsOutput

Estimate cardinality of a metric with specific settings.

DatadogApi.GetMetricTagCardinality

Retrieve cardinality details of tags for a specific metric.

DatadogApi.DeleteMetricTagConfiguration

Delete a metric's tag configuration.

DatadogApi.GetMetricTagConfiguration

Retrieve the tag configuration for a specific metric.

DatadogApi.UpdateMetricTagConfiguration

Update the tag configuration of a metric in Datadog.

DatadogApi.CreateMetricTagConfiguration

Create queryable tag configurations for metrics.

DatadogApi.ListMetricVolumes

Retrieve distinct metric volumes by name.

DatadogApi.GetMonitorNotificationRules

Retrieve all monitor notification rules from Datadog.

DatadogApi.CreateMonitorNotificationRule

Creates a monitor notification rule in Datadog.

DatadogApi.DeleteMonitorNotificationRule

Delete a monitor notification rule by ID.

DatadogApi.GetMonitorNotificationRule

Retrieve a monitor notification rule by its ID.

DatadogApi.UpdateMonitorNotificationRule

Updates a Datadog monitor notification rule.

DatadogApi.ListMonitorConfigPolicies

Retrieve all monitor configuration policies.

DatadogApi.CreateMonitorConfigPolicy

Create a new monitor configuration policy in Datadog.

DatadogApi.DeleteMonitorPolicy

Deletes a specific monitor configuration policy.

DatadogApi.GetMonitorConfigurationPolicy

Retrieve a monitor's configuration policy using its ID.

DatadogApi.EditMonitorConfigPolicy

Edit an existing monitor configuration policy in Datadog.

DatadogApi.GetAllMonitorUserTemplates

Retrieve all monitor user templates from Datadog.

DatadogApi.CreateMonitorUserTemplate

Create a new monitor user template in Datadog.

DatadogApi.ValidateMonitorUserTemplate

Validate the structure and content of a monitor user template.

DatadogApi.DeleteMonitorUserTemplate

Deletes a monitor user template by its ID on Datadog.

DatadogApi.GetMonitorUserTemplate

Retrieve a monitor user template by ID from Datadog.

DatadogApi.UpdateMonitorUserTemplate

Creates a new version of a monitor user template in Datadog.

DatadogApi.ValidateMonitorTemplate

Validate the structure and content of a monitor template update.

DatadogApi.ListMonitorDowntimes

Retrieve active downtimes for a specified monitor.

DatadogApi.GetDeviceList

Retrieve a list of devices from Datadog.

DatadogApi.GetDeviceDetails

Retrieve specific device details.

DatadogApi.GetDeviceInterfaces

Fetches the list of interfaces for a given device.

DatadogApi.GetDeviceUserTags

Retrieve the list of tags for a specific device.

DatadogApi.UpdateDeviceTags

Update the tags for a specified device.

DatadogApi.GetAggregatedConnections

Retrieve all aggregated network connections from Datadog.

DatadogApi.GetAggregatedDnsTraffic

Retrieve all aggregated DNS traffic data.

DatadogApi.CreateOnCallEscalationPolicy

Create a new On-Call escalation policy in Datadog.

DatadogApi.DeleteEscalationPolicy

Delete an On-Call escalation policy.

DatadogApi.GetOnCallEscalationPolicy

Retrieve details of an On-Call escalation policy.

DatadogApi.UpdateOnCallEscalationPolicy

Update an On-Call escalation policy in Datadog.

DatadogApi.TriggerOnCallPage

Triggers a new On-Call Page in Datadog.

DatadogApi.AcknowledgeOnCallPage

Acknowledge an On-Call Page alert in Datadog.

DatadogApi.EscalateOnCallPage

Escalate an on-call page to notify the responsible team.

DatadogApi.ResolveOnCallPage

Resolves an On-Call Page in Datadog.

DatadogApi.CreateOnCallSchedule

Create a new on-call schedule in Datadog.

DatadogApi.DeleteOnCallSchedule

Delete an On-Call schedule in Datadog.

DatadogApi.GetOnCallSchedule

Retrieve an On-Call schedule from Datadog.

DatadogApi.UpdateOnCallSchedule

Update an existing on-call schedule in Datadog.

DatadogApi.GetOnCallUser

Retrieve the current on-call user for a specific schedule.

DatadogApi.GetTeamOnCallUsers

Retrieve on-call users for a specific team.

DatadogApi.GetTeamOnCallRoutingRules

Retrieve a team's on-call routing rules from Datadog.

DatadogApi.SetOnCallTeamRoutingRules

Set or update a team's On-Call routing rules in Datadog.

DatadogApi.ListOrgConfigs

Retrieve all organization configurations.

DatadogApi.GetOrganizationConfigDetails

Retrieve organization configuration details by name.

DatadogApi.UpdateOrgConfig

Update a specified organization configuration in Datadog.

DatadogApi.ListOrgConnections

Retrieve a list of organization connections from Datadog.

DatadogApi.CreateOrgConnection

Creates a new organization connection in Datadog.

DatadogApi.DeleteOrgConnection

Delete an existing organization connection.

DatadogApi.UpdateOrgConnection

Update an existing organization connection in Datadog.

DatadogApi.ListPermissions

Retrieve all permissions from Datadog.

DatadogApi.ListFindings

Retrieve a list of security findings from Datadog.

DatadogApi.GetSecurityFinding

Retrieve details of a specific security finding for analysis.

DatadogApi.ListPowerpacks

Retrieve a list of all powerpacks from Datadog.

DatadogApi.CreatePowerpack

Creates a new powerpack in Datadog.

DatadogApi.DeletePowerpack

Delete a specified powerpack from Datadog.

DatadogApi.GetPowerpack

Retrieve details of a specific powerpack.

DatadogApi.UpdatePowerpack

Update the details of a specific powerpack in Datadog.

DatadogApi.ListAllOrganizationProcesses

Retrieve all processes for your organization from Datadog.

DatadogApi.QueryScalarData

Query scalar values from diverse data sources.

DatadogApi.QueryTimeseriesData

Query and process timeseries data from multiple sources.

DatadogApi.ListReferenceTables

Retrieve all reference tables in the organization.

DatadogApi.CreateReferenceTable

Create a new reference table in Datadog.

DatadogApi.DeleteReferenceTable

Delete a reference table by ID.

DatadogApi.GetReferenceTable

Retrieve details of a reference table by its ID.

DatadogApi.UpdateReferenceTable

Update data, description, and tags of a reference table.

DatadogApi.GetTableRowsById

Retrieve reference table rows using primary key values.

DatadogApi.CreateReferenceTableUpload

Create a reference table upload for bulk data ingestion.

DatadogApi.ListWafCustomRules

Retrieve a list of WAF custom rules.

DatadogApi.CreateWafCustomRule

Create a new web application firewall custom rule.

DatadogApi.DeleteWafCustomRule

Delete a specific WAF custom rule by ID.

DatadogApi.GetWafCustomRuleById

Retrieve a WAF custom rule by ID from Datadog.

DatadogApi.UpdateWafCustomRule

Update a specific WAF custom rule in Datadog.

DatadogApi.ListWafExclusionFilters

Retrieve a list of WAF exclusion filters.

DatadogApi.CreateWafExclusionFilter

Create a new WAF exclusion filter in Datadog.

DatadogApi.DeleteWafExclusionFilter

Delete a WAF exclusion filter using its ID.

DatadogApi.GetWafExclusionFilter

Retrieve a specific WAF exclusion filter by ID.

DatadogApi.UpdateWafExclusionFilter

Updates a WAF exclusion filter by its identifier.

DatadogApi.ListWorkloadProtectionAgentRules

Retrieve the list of Workload Protection agent rules.

DatadogApi.CreateWorkloadProtectionRule

Create a new Workload Protection agent rule.

DatadogApi.DeleteWorkloadProtectionAgentRule

Delete a specific Workload Protection agent rule.

DatadogApi.GetThreatProtectionAgentRule

Retrieve details of a specific Workload Protection agent rule.

DatadogApi.UpdateWorkloadProtectionAgentRule

Update a specific Workload Protection Agent rule.

DatadogApi.ListWorkloadProtectionPolicies

Retrieve a list of Workload Protection policies from Datadog.

DatadogApi.CreateWorkloadProtectionPolicy

Create a new Workload Protection policy for cloud workloads.

DatadogApi.DownloadCsmThreatsPolicy

Generate and download Workload Protection policy file.

DatadogApi.DeleteWorkloadProtectionPolicy

Delete a specific Workload Protection policy.

DatadogApi.GetWorkloadProtectionPolicyDetails

Get details of a specific Workload Protection policy.

DatadogApi.UpdateWorkloadProtectionPolicy

Update a specific Workload Protection policy in Datadog.

DatadogApi.ListPipelines

Retrieve a list of pipelines from Datadog.

DatadogApi.CreatePipeline

Create a new pipeline in Datadog's system.

DatadogApi.ValidatePipelineConfig

Validate a pipeline configuration without making changes.

DatadogApi.DeleteDataPipeline

Deletes a data pipeline from the Datadog configuration.

DatadogApi.GetSpecificPipelineById

Retrieve specific pipeline details by ID.

DatadogApi.UpdatePipeline

Update a pipeline in Datadog's remote config.

DatadogApi.DeleteRestrictionPolicy

Delete a restriction policy for a specified resource.

DatadogApi.RetrieveResourceRestrictionPolicy

Retrieve restriction policy for a specific resource.

DatadogApi.UpdateRestrictionPolicy

Update the restriction policy for a Datadog resource.

DatadogApi.ListUserRoles

Retrieve all roles from Datadog.

DatadogApi.CreateRole

Create a new role for your organization in Datadog.

DatadogApi.ListRoleTemplates

Retrieve all role templates from Datadog.

DatadogApi.DisableRole

Disables a specified role within Datadog.

DatadogApi.GetOrganizationRole

Retrieve details of a role using its role ID in the organization.

DatadogApi.EditRole

Edit a role with administrator application keys.

DatadogApi.CloneExistingRole

Clone an existing role based on role ID.

DatadogApi.RemovePermissionFromRole

Removes a permission from a specified role in Datadog.

DatadogApi.ListRolePermissions

Retrieve all permissions for a specific role.

DatadogApi.AddPermissionToRole

Assigns a specific permission to a given role.

DatadogApi.RemoveUserFromRole

Remove a user from a specified role in Datadog.

DatadogApi.ListRoleUsers

Retrieve all users belonging to a specific role.

DatadogApi.AddUserToRole

Adds a user to a specific role in Datadog.

DatadogApi.AggregateRumEvents

Aggregate RUM events into computed metrics and timeseries.

DatadogApi.ListRumApplications

Retrieve all RUM applications within your organization from Datadog.

DatadogApi.CreateRumApplication

Create a new RUM application within your organization.

DatadogApi.OrderRumRetentionFilters

Order RUM retention filters for a RUM application.

DatadogApi.GetRumRetentionFilters

Retrieve RUM retention filters for a specific application.

DatadogApi.CreateRumRetentionFilter

Create a RUM retention filter for a RUM application.

DatadogApi.DeleteRumRetentionFilter

Deletes a RUM retention filter for a specific application.

DatadogApi.GetRumRetentionFilter

Retrieve a RUM retention filter for a RUM application.

DatadogApi.UpdateRumRetentionFilter

Update a RUM retention filter for a RUM application.

DatadogApi.DeleteRumApplication

Deletes an existing RUM application in your organization.

DatadogApi.GetRumApplicationById

Retrieve RUM application details by ID.

DatadogApi.UpdateRumApplication

Update settings of a specific RUM application by ID.

DatadogApi.ListRumMetrics

Retrieve configured RUM-based metrics and their definitions.

DatadogApi.CreateRumMetric

Create a metric based on RUM data.

DatadogApi.DeleteRumMetric

Delete a specific RUM-based metric from your organization.

DatadogApi.GetRumMetric

Retrieve a specific RUM-based metric for your organization.

DatadogApi.UpdateRumMetric

Update a specific rum-based metric in your organization.

DatadogApi.ListRumEvents

Retrieve RUM events matching a search query.

DatadogApi.SearchRumEvents

Search and filter RUM events based on a query.

DatadogApi.FetchAllScorecardOutcomes

Retrieve all rule outcomes from scorecards.

DatadogApi.UpdateScorecardOutcomes

Update multiple scorecard rule outcomes in Datadog.

DatadogApi.SetServiceRuleOutcomesBatch

Batch set multiple service-rule outcomes.

DatadogApi.FetchScorecardRules

Fetch all scorecard rules from Datadog.

DatadogApi.CreateScorecardRule

Create a new scorecard rule in Datadog.

DatadogApi.DeleteScorecardRule

Deletes a scorecard rule by its ID.

DatadogApi.UpdateScorecardRule

Updates an existing scorecard rule in Datadog.

DatadogApi.DownloadCloudWorkloadPolicy

Downloads a Workload Protection policy file for agents.

DatadogApi.ListCloudWorkloadSecurityAgentRules

Retrieve the list of cloud workload security agent rules.

DatadogApi.CreateCloudWorkloadSecurityAgentRule

Create a new cloud workload security agent rule.

DatadogApi.DeleteCloudWorkloadSecurityAgentRule

Delete a specific cloud workload security agent rule.

DatadogApi.GetCloudWorkloadSecurityAgentRuleDetails

Retrieve details of a cloud workload security agent rule.

DatadogApi.UpdateCloudWorkloadSecurityAgentRule

Update a specific cloud workload security agent rule.

DatadogApi.ListSecurityFilters

Retrieve configured security filters from Datadog.

DatadogApi.CreateSecurityFilter

Create a security filter using Datadog's API.

DatadogApi.DeleteSecurityFilter

Delete a specific security filter in Datadog.

DatadogApi.GetSecurityFilterDetails

Retrieve the details of a specific security filter.

DatadogApi.UpdateSecurityFilter

Update a specific security filter's configuration.

DatadogApi.ListSuppressionRules

Retrieve the list of security monitoring suppression rules.

DatadogApi.CreateSuppressionRule

Create a new security monitoring suppression rule.

DatadogApi.GetFutureRuleSuppressions

Retrieve suppressions affecting a future security rule.

DatadogApi.GetSuppressionsForRule

Retrieve suppressions affecting a specific rule by ID.

DatadogApi.ValidateSuppressionRule

Validate a suppression rule in Datadog's monitoring system.

DatadogApi.DeleteSuppressionRule

Delete a specific suppression rule in Datadog.

DatadogApi.GetSuppressionRuleDetails

Get details of a specific security suppression rule.

DatadogApi.UpdateSuppressionRule

Update a specific suppression rule in Datadog.

DatadogApi.ListSecurityMonitoringRules

Retrieve a list of security monitoring rules.

DatadogApi.CreateSecurityMonitoringRule

Create a detection rule for monitoring security events.

DatadogApi.ConvertRuleJsonToTerraform

Converts Datadog security rules from JSON to Terraform format.

DatadogApi.TestSecurityRule

Test a security monitoring rule.

DatadogApi.ValidateSecurityMonitoringRule

Validate a detection rule in Datadog.

DatadogApi.DeleteSecurityMonitoringRule

Delete an existing security monitoring rule.

DatadogApi.GetSecurityMonitoringRuleDetails

Retrieve detailed information about a specific security rule.

DatadogApi.UpdateSecurityMonitoringRule

Update an existing Datadog security monitoring rule.

DatadogApi.ConvertSecurityRuleToTerraform

Convert existing security rule from JSON to Terraform.

DatadogApi.TestSecurityMonitoringRule

Test an existing security monitoring rule in Datadog.

DatadogApi.GetRuleVersionHistory

Retrieve a rule's version history.

DatadogApi.ListSecuritySignals

Retrieve security signals that match a search query.

DatadogApi.SearchSecuritySignals

Retrieve security signals based on a search query.

DatadogApi.GetSecuritySignalDetails

Retrieve details of a security monitoring signal.

DatadogApi.EditSignalAssignee

Modify the triage assignee of a security signal.

DatadogApi.EditSecuritySignalIncidents

Modify incidents linked to a security signal.

DatadogApi.ChangeSignalState

Change the triage state of a security signal.

DatadogApi.ListScanningGroups

Retrieve all scanning groups in your organization with Datadog's API.

DatadogApi.ReorderScanningGroups

Reorder the list of scanning groups.

DatadogApi.CreateScanningGroup

Create a new scanning group in Datadog.

DatadogApi.DeleteScanningGroup

Delete a specified scanning group in Datadog.

DatadogApi.UpdateScanningGroup

Update a scanning group's rule order in Datadog.

DatadogApi.CreateScanningRule

Create a scanning rule in a sensitive data group.

DatadogApi.DeleteScanningRule

Delete a specific scanning rule by ID.

DatadogApi.UpdateScanningRule

Update a scanning rule in Datadog.

DatadogApi.ListStandardPatterns

Retrieve all standard patterns for sensitive data scanning.

DatadogApi.CreateServiceAccount

Create a service account for your organization.

DatadogApi.ListServiceAccountAppKeys

Retrieve all app keys for a specific service account.

DatadogApi.CreateServiceAccountAppKey

Create an application key for a service account.

DatadogApi.DeleteServiceAccountAppKey

Delete an application key from a service account.

DatadogApi.GetDatadogServiceAccountAppKey

Retrieve a specific application key for a Datadog service account.

DatadogApi.EditServiceAccountKey

Edit an application key for a service account.

DatadogApi.GetServiceDefinitions

Retrieve all service definitions from the Datadog Service Catalog.

DatadogApi.CreateOrUpdateServiceDefinitions

Create or update service definitions in Datadog.

DatadogApi.DeleteServiceDefinition

Deletes a service definition from Datadog.

DatadogApi.GetServiceDefinition

Retrieve a service definition from Datadog's Service Catalog.

DatadogApi.ListSecurityMonitoringSignals

Retrieve a list of security monitoring hist signals.

DatadogApi.FindSecurityAlerts

Retrieve historical security monitoring signals from Datadog.

DatadogApi.GetHistSignalDetails

Retrieve details of a specific hist signal.

DatadogApi.ListHistoricalJobs

Retrieve a list of historical SIEM detection jobs from Datadog.

DatadogApi.RunHistoricalDetectionJob

Initiate a historical detection job in Datadog.

DatadogApi.ConvertJobResultToSignal

Convert a job result to a signal for detection purposes.

DatadogApi.DeleteHistoricalDetectionJob

Delete an existing historical detection job in Datadog.

DatadogApi.GetHistoricalJobDetails

Retrieve details of a specific historical job from Datadog.

DatadogApi.CancelHistoricalJob

Cancel a historical job in Datadog.

DatadogApi.GetHistoricalSecuritySignals

Retrieve historical security signals by job ID.

DatadogApi.CreateSloReportJob

Initiate the generation of an SLO report in Datadog.

DatadogApi.DownloadSloReport

Download a completed SLO report from Datadog.

DatadogApi.GetSloReportStatus

Retrieve the status of a specific SLO report job.

DatadogApi.GetSparkJobRecommendations

Retrieve resource recommendations for a Spark job.

DatadogApi.AggregateSpansMetrics

Aggregate spans to compute metrics and timeseries.

DatadogApi.ListLatestSpans

Retrieve the latest spans based on a search query.

DatadogApi.ListSpans

Fetch spans based on a search query with pagination.

DatadogApi.GetOnDemandConcurrencyCap

Retrieve the on-demand concurrency cap value from Datadog.

DatadogApi.SetOnDemandConcurrencyCap

Update the on-demand concurrency cap setting in Datadog.

DatadogApi.ListTagPipelineRulesets

Retrieve all tag pipeline rulesets for the organization.

DatadogApi.CreateTagPipelineRuleset

Create a tag pipeline ruleset with specified rules.

DatadogApi.ReorderTagPipelineRulesets

Change the execution order of tag pipeline rulesets.

DatadogApi.ValidateTagPipelineQuery

Validate the syntax and structure of a tag pipeline query.

DatadogApi.DeleteTagPipelineRuleset

Delete an existing tag pipeline ruleset by ID.

DatadogApi.GetTagPipelineRuleset

Retrieve a specific tag pipeline ruleset by its ID.

DatadogApi.UpdateTagPipelineRuleset

Update an existing tag pipeline ruleset with new rules.

DatadogApi.ListTeams

Retrieve all teams with optional filters.

DatadogApi.CreateNewTeam

Create a new team and add specified members.

DatadogApi.SyncDatadogTeamsWithGithub

Link existing Datadog teams with GitHub teams by name matching.

DatadogApi.ListAllMemberTeams

Retrieve all member teams for a super team.

DatadogApi.AddMemberTeamToSuperTeam

Add a member team to a super team.

DatadogApi.RemoveTeamMember

Removes a member team from a super team.

DatadogApi.DeleteTeam

Remove a team using its ID in Datadog.

DatadogApi.GetSingleTeamInfo

Retrieve details of a team using its ID.

DatadogApi.UpdateTeamInfo

Update and modify a team's configuration in Datadog.

DatadogApi.GetAllTeamLinks

Retrieve all links for a specific team.

DatadogApi.AddTeamLink

Add a new link to a Datadog team.

DatadogApi.RemoveTeamLink

Remove a link from a team.

DatadogApi.GetTeamLink

Retrieve a specific link for a team.

DatadogApi.UpdateTeamLink

Updates a team link in Datadog.

DatadogApi.GetTeamMembers

Retrieve a list of team members.

DatadogApi.AddUserToTeam

Add a user to a team in Datadog.

DatadogApi.RemoveUserFromTeam

Remove a user from a specified team.

DatadogApi.UpdateUserTeamMembership

Update a user's membership attributes on a team.

DatadogApi.GetTeamPermissionSettings

Retrieve permission settings for a specific team.

DatadogApi.UpdateTeamPermission

Update a team's permission setting in Datadog.

DatadogApi.SearchFlakyTests

Retrieve a list of flaky tests with pagination support.

DatadogApi.GetBillingDimensionMapping

Retrieve the mapping of billing dimensions to API keys.

DatadogApi.GetEstimatedCostDatadog

Retrieve estimated cost data for multi-org Datadog accounts.

DatadogApi.GetHistoricalCostByOrg

Retrieve historical cost data across different organizations.

DatadogApi.GetHourlyUsageByProductFamily

Fetch hourly usage data by product family from Datadog.

DatadogApi.GetProjectedCost

Retrieve projected cost for multi-org and single root-org accounts.

DatadogApi.SendInvitations

Invite users to join the organization via email.

DatadogApi.GetUserInvitation

Retrieve a user invitation using its UUID.

DatadogApi.ListAllOrganizationUsers

Retrieve all users in the organization including inactive ones.

DatadogApi.CreateOrganizationUser

Create a user for your organization in Datadog.

DatadogApi.DisableUser

Disable a specific user in the system.

DatadogApi.GetUserDetails

Retrieve details of a specific user by their user ID.

DatadogApi.UpdateDatadogUser

Update a user's information in Datadog.

DatadogApi.GetUserOrganizations

Retrieve a user's organizations and information.

DatadogApi.GetUserPermissions

Retrieve a user's permissions from Datadog.

DatadogApi.GetUserMemberships

Retrieve a user's memberships from Datadog.

DatadogApi.CreateDatadogWorkflow

Creates a new workflow in Datadog and returns its ID.

DatadogApi.DeleteWorkflow

Delete a specified workflow by its ID.

DatadogApi.GetWorkflowById

Retrieve workflow details using a unique ID.

DatadogApi.UpdateWorkflowById

Update a specific workflow by its ID.

DatadogApi.ListWorkflowInstances

Retrieve all instances of a specific workflow from Datadog.

DatadogApi.ExecuteWorkflow

Execute a specified workflow in Datadog.

DatadogApi.GetWorkflowInstance

Retrieve a specific workflow execution instance.

DatadogApi.CancelWorkflowInstance

Cancel a specific execution of a workflow.

If you need to perform an action that’s not listed here, you can [get in touch with us](mailto:contact@arcade.dev) to request a new tool, or [create your own tools](/guides/create-tools/tool-basics/build-mcp-server.md).

## DatadogApi.ListDatadogDatastores



Retrieve a list of all Datadog datastores.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreateNewDatastore



Creates a new datastore in Datadog.

**Parameters**

-   **datastore\_description** (`string`, optional) A human-readable description about the datastore.
-   **datastore\_display\_name** (`string`, optional) The display name for the new datastore. This should be a human-readable and descriptive name.
-   **datastore\_id** (`string`, optional) Optional ID for the new datastore. If not provided, a default one will be generated automatically.
-   **datastore\_resource\_type** (`string`, optional) Specifies the resource type for the datastore. Valid value is ‘datastores’.
-   **organization\_access\_level** (`string`, optional) The access level for the datastore within the organization. Options: ‘contributor’, ‘viewer’, or ‘manager’.
-   **primary\_key\_column\_name** (`string`, optional) The name of the primary key column for this datastore. Must follow PostgreSQL naming conventions and not exceed 63 characters.
-   **primary\_key\_generation\_strategy** (`string`, optional) Set to `uuid` for automatic primary key generation when new items are added. Default is `none`, requiring manual key assignment.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteDatadogDatastore



Delete a Datadog datastore using its unique ID.

**Parameters**

-   **datastore\_unique\_id** (`string`, required) The unique identifier of the datastore to delete in Datadog.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.RetrieveDatastore



Retrieve datastore information by ID.

**Parameters**

-   **datastore\_identifier** (`string`, required) The unique ID of the datastore to be retrieved from Datadog.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateDatastoreAttributes



Update attributes of an existing datastore in Datadog.

**Parameters**

-   **datastore\_unique\_identifier** (`string`, required) The unique identifier of the datastore to update in Datadog.
-   **datastore\_description** (`string`, optional) A human-readable description for the datastore. Use this to provide additional information or context about the datastore.
-   **datastore\_display\_name** (`string`, optional) The display name of the datastore to be updated. Provide a concise, human-readable name.
-   **datastore\_update\_id** (`string`, optional) The unique identifier for the datastore that needs to be updated.
-   **resource\_type\_for\_datastores** (`string`, optional) Specifies the resource type for datastores. Must be ‘datastores’.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteDatastoreItem



Delete an item from a datastore by its key.

**Parameters**

-   **datastore\_id** (`string`, required) A string representing the unique identifier of the datastore from which the item will be deleted.
-   **item\_primary\_key** (`string`, optional) The primary key value identifying the item to delete. Max length is 256 characters.
-   **item\_unique\_identifier** (`string`, optional) Optional unique identifier of the item to delete. Use if available for more precise deletion.
-   **resource\_type\_for\_datastore\_items** (`string`, optional) The resource type for datastore items. Must be ‘items’.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListDatastoreItems



Retrieve items from a specified datastore.

**Parameters**

-   **datastore\_identifier** (`string`, required) The unique identifier for the datastore from which to fetch items.
-   **item\_limit\_per\_page** (`integer`, optional) Limit the number of items to return per page for pagination. Maximum of 100 items per page.
-   **pagination\_offset** (`integer`, optional) Specifies the number of items to skip from the beginning of the result set for pagination.
-   **primary\_item\_key** (`string`, optional) Primary key to retrieve a specific item. Cannot be used with the filter parameter.
-   **search\_filter** (`string`, optional) Query filter to search datastore items using the logs search syntax. Cannot be used with item\_key.
-   **sort\_order** (`string`, optional) Sort results by a specific field. Use ’-’ prefix for descending order (e.g., ‘-created\_at’).

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateDatastoreItem



Partially update an item in a datastore by its key.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **datastore\_identifier** (`string`, optional) The unique identifier for the datastore that contains the item to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.BulkDeleteDatastoreItems



Delete multiple items from a datastore at once.

**Parameters**

-   **datastore\_identifier** (`string`, required) The unique ID of the datastore from which items will be deleted.
-   **datastore\_items\_id** (`string`, optional) ID for the datastore of items you want to delete.
-   **item\_keys\_to\_delete** (`array[string]`, optional) List of up to 100 primary keys identifying items to delete from the datastore.
-   **items\_resource\_type** (`string`, optional) Specifies the resource type of the items. Must be ‘items’.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.BulkUpdateDatastoreItems



Perform bulk creation or replacement of datastore items.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **datastore\_identifier** (`string`, optional) The unique identifier for the datastore where items will be updated or replaced. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListAppKeyRegistrations



Retrieve a list of app key registrations from Datadog.

**Parameters**

-   **page\_number** (`integer`, optional) The page number to return for paginating through app key registrations.
-   **results\_per\_page** (`integer`, optional) The number of App Key Registrations to return per page.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UnregisterAppKey



Unregister an application key to revoke its access.

**Parameters**

-   **app\_key\_id** (`string`, required) The unique identifier of the application key to be unregistered.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetAppKeyRegistration



Retrieve details of an existing App Key Registration.

**Parameters**

-   **app\_key\_id** (`string`, required) The unique ID of the app key to fetch its registration details.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.RegisterDatadogAppKey



Register a new app key in Datadog.

**Parameters**

-   **app\_key\_id** (`string`, required) The unique identifier for the app key to be registered with Datadog. It must be a valid string.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreateActionConnection



Create a new action connection in Datadog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteActionConnection



Delete an existing action connection in Datadog.

**Parameters**

-   **action\_connection\_id** (`string`, required) The unique identifier for the action connection to be deleted.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetActionConnection



Retrieve an existing Action Connection from Datadog.

**Parameters**

-   **action\_connection\_id** (`string`, required) The ID of the action connection to retrieve. Required for fetching details of a specific connection.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateActionConnection



Update an existing action connection in Datadog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **action\_connection\_id** (`string`, optional) The unique identifier for the action connection to be updated in Datadog. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetAwsScanOptions



Fetch AWS scan options for configured accounts.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ActivateAwsScanOptions



Activate Agentless scan options for an AWS account.

**Parameters**

-   **aws\_account\_id** (`string`, required) The ID of the AWS account for which to activate scan options.
-   **enable\_container\_vulnerability\_scanning** (`boolean`, required) Enable scanning for vulnerabilities in containers when set to true.
-   **enable\_lambda\_function\_scanning** (`boolean`, required) Enable scanning of Lambda functions. Set to true to enable, false to disable.
-   **enable\_sensitive\_data\_scanning** (`boolean`, required) Indicates if scanning for sensitive data is enabled for the AWS account.
-   **enable\_vulnerability\_scan\_host\_os** (`boolean`, required) Indicates if scanning for vulnerabilities in host operating systems is enabled.
-   **resource\_type** (`string`, optional) Specifies the resource type to activate. Must be ‘aws\_scan\_options’.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteAwsScanOptions



Delete Agentless scan options for an AWS account.

**Parameters**

-   **aws\_account\_id** (`string`, required) The unique identifier for the AWS account whose scan options you want to delete.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.FetchAwsScanSettings



Fetches Agentless scan options for AWS accounts.

**Parameters**

-   **aws\_account\_id** (`string`, required) The unique ID of an AWS account for fetching scan options.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateAwsScanOptions



Update Agentless scan options for an AWS account.

**Parameters**

-   **account\_identifier** (`string`, required) The ID of the AWS account that needs scan options updated.
-   **aws\_account\_id** (`string`, required) The ID of the AWS account for which to update scan options.
-   **enable\_lambda\_scanning** (`boolean`, optional) Set to true to enable scanning of AWS Lambda functions.
-   **enable\_sensitive\_data\_scanning** (`boolean`, optional) Enable scanning for sensitive data in the AWS account. Set to true to enable.
-   **enable\_vulnerability\_scanning\_for\_containers** (`boolean`, optional) Set to true to enable scanning for container vulnerabilities.
-   **enable\_vulnerability\_scanning\_in\_hosts** (`boolean`, optional) Enable scanning for vulnerabilities in hosts. Set to true to enable, false to disable.
-   **resource\_type** (`string`, optional) Specifies the resource type. Must be set to `aws_scan_options`.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.FetchAzureScanOptions



Fetches the scan options for Azure accounts from Datadog.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ActivateAzureScanOptions



Activate Agentless scan options for Azure subscriptions.

**Parameters**

-   **azure\_subscription\_id** (`string`, optional) The Azure subscription ID for which to activate the scan options.
-   **enable\_container\_vulnerability\_scan** (`boolean`, optional) Set to true to activate scanning for vulnerabilities in containers.
-   **enable\_vulnerability\_scan\_hosts** (`boolean`, optional) Indicate if scanning for vulnerabilities in Azure hosts is enabled. Set to true to activate.
-   **resource\_type** (`string`, optional) Specifies the resource type. Always use ‘azure\_scan\_options’.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteAzureSubscriptionScanOptions



Delete scan options for an Azure subscription.

**Parameters**

-   **azure\_subscription\_id** (`string`, required) The unique identifier for the Azure subscription whose scan options you want to delete.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetAgentlessScanOptions



Fetch Azure Agentless scan options for a subscription.

**Parameters**

-   **azure\_subscription\_id** (`string`, required) The Azure subscription ID to retrieve the Agentless scan options for.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateAzureScanOptions



Update Agentless scan options for an Azure subscription.

**Parameters**

-   **azure\_subscription\_id** (`string`, required) The unique identifier for the Azure subscription to update scan options.
-   **azure\_scan\_options\_resource\_type** (`string`, optional) Specifies the resource type for Azure scan options, must be ‘azure\_scan\_options’.
-   **azure\_subscription\_identifier** (`string`, optional) The Azure subscription ID for which to update scan options.
-   **enable\_container\_vulnerability\_scanning** (`boolean`, optional) Enable or disable container vulnerability scanning. Set to true to enable, false to disable.
-   **enable\_scanning\_for\_host\_vulnerabilities** (`boolean`, optional) Enable or disable scanning for vulnerabilities in host operating systems.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.FetchGcpScanOptions



Fetch GCP project scan options.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ActivateGcpScanOptions



Activate Agentless scan options for a GCP project.

**Parameters**

-   **enable\_container\_vulnerability\_scanning** (`boolean`, optional) Set to true to enable scanning for vulnerabilities in containers.
-   **enable\_vulnerability\_host\_scanning** (`boolean`, optional) Set to true to enable scanning for vulnerabilities in hosts in the GCP project.
-   **gcp\_project\_id** (`string`, optional) The Google Cloud Platform project ID for which to activate the scan options.
-   **gcp\_scan\_resource\_type** (`string`, optional) The type of GCP scan options resource. This is typically ‘gcp\_scan\_options’.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteGcpScanOptions



Delete Agentless scan options for a GCP project.

**Parameters**

-   **gcp\_project\_id** (`string`, required) The unique identifier for the Google Cloud Platform (GCP) project whose scan options you wish to delete.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.RetrieveGcpScanSettings



Retrieve GCP project agentless scan options.

**Parameters**

-   **gcp\_project\_id** (`string`, required) The unique ID of the GCP project to retrieve scan options for.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateGcpScanOptions



Update scan options for a GCP project in Datadog.

**Parameters**

-   **gcp\_project\_id** (`string`, required) The Google Cloud Platform project ID to update scan options for.
-   **enable\_container\_vulnerability\_scanning** (`boolean`, optional) Enable (True) or disable (False) scanning for vulnerabilities in containers.
-   **enable\_host\_vulnerability\_scanning** (`boolean`, optional) Indicate if scanning for vulnerabilities in host operating systems is enabled.
-   **gcp\_scan\_options\_resource\_type** (`string`, optional) Specifies the GCP scan options resource type, typically set to ‘gcp\_scan\_options’.
-   **google\_cloud\_project\_id** (`string`, optional) The ID of the GCP project to update scan options for, used as an identifier.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.FetchRecentAwsOnDemandTasks



Retrieve the latest AWS on demand tasks.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.TriggerAwsResourceScan



Trigger a high-priority scan of an AWS resource.

**Parameters**

-   **aws\_resource\_arn** (`string`, required) The ARN of the AWS resource to scan, such as EC2, Lambda, AMI, ECR, RDS, or S3.
-   **task\_type** (`string`, optional) The type of the on-demand task. This must always be set to ‘aws\_resource’.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetAwsOnDemandTaskData



Fetch data of a specific AWS on-demand task in Datadog.

**Parameters**

-   **aws\_task\_uuid** (`string`, required) The UUID of the AWS on-demand task to fetch data for. This is a unique identifier for the task.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListApiKeys



Retrieve all API keys for your Datadog account.

**Parameters**

-   **api\_key\_filter** (`string`, optional) String to filter API keys by specified criteria. Use it to narrow down the list based on specific string matches.
-   **created\_after\_date\_filter** (`string`, optional) Include API keys created on or after this date. Expected format: YYYY-MM-DD.
-   **filter\_api\_keys\_by\_category** (`string`, optional) Filter API keys by the specified category.
-   **filter\_by\_remote\_config\_read\_enabled** (`boolean`, optional) Set to true to filter API keys with remote config read enabled; false otherwise.
-   **filter\_created\_before\_date** (`string`, optional) Include only API keys created on or before this date in the format YYYY-MM-DD.
-   **include\_related\_resources** (`string`, optional) Comma-separated list of resource paths (`created_by`, `modified_by`) to include related data in the response.
-   **modified\_after\_date\_filter** (`string`, optional) Specify a date to include API keys modified on or after this date. Use YYYY-MM-DD format.
-   **modified\_before\_date** (`string`, optional) Include API keys modified on or before this specified date. Format should be YYYY-MM-DD.
-   **page\_size** (`integer`, optional) Specifies the number of API keys returned in a single page; maximum value is 100.
-   **sort\_by\_attribute** (`string`, optional) Attribute to sort API keys by. Use a minus sign for descending order.
-   **specific\_page\_number\_to\_return** (`integer`, optional) The specific page number to return from the paginated list of API keys.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreateDatadogApiKey



Creates a new API key in Datadog.

**Parameters**

-   **api\_key\_name** (`string`, required) Name of the API key to be created in Datadog. This should be a descriptive and unique string identifier.
-   **api\_keys\_resource\_type** (`string`, optional) Specify the resource type as ‘api\_keys’.
-   **apikey\_category** (`string`, optional) Specifies the category for the API key. This categorizes the key for organizational purposes.
-   **remote\_config\_read\_enabled** (`boolean`, optional) Indicates whether to enable read access to remote config for the new API key. Expects a boolean value.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteDatadogApiKey



Delete an API key from Datadog.

**Parameters**

-   **api\_key\_id** (`string`, required) The unique identifier of the API key to delete in Datadog.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetApiKeyDetails



Retrieves details of a specific Datadog API key.

**Parameters**

-   **api\_key\_id** (`string`, required) The unique identifier for the Datadog API key to be retrieved.
-   **include\_related\_resources** (`string`, optional) Comma-separated list of resource paths (`created_by`, `modified_by`) to include in the response.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateDatadogApiKey



Update an API key in Datadog.

**Parameters**

-   **api\_key\_id** (`string`, required) The unique identifier for the API key to be updated in Datadog.
-   **api\_key\_name** (`string`, required) The new name for the API key to be updated.
-   **key\_id** (`string`, required) ID of the API key to be updated in Datadog.
-   **api\_key\_category** (`string`, optional) The category of the API key for the update operation.
-   **api\_keys\_resource\_type** (`string`, optional) Specifies the resource type for API keys. Must be ‘api\_keys’.
-   **enable\_remote\_config\_read** (`boolean`, optional) Enable remote config read for the API key. Use true to enable, false to disable.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListSpanMetrics



Retrieve configured span-based metrics from Datadog.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreateSpanMetric



Create a metric based on ingested spans in your organization.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteSpanMetric



Delete a specific span-based metric from your organization.

**Parameters**

-   **metric\_id** (`string`, required) The unique identifier for the span-based metric to be deleted.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetSpanMetric



Retrieve a specific span-based metric from Datadog.

**Parameters**

-   **metric\_name** (`string`, required) The name of the span-based metric to be retrieved from Datadog.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateSpanMetric



Update a specific span-based metric in Datadog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **span\_metric\_name** (`string`, optional) The name of the span-based metric to update in Datadog. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetApmRetentionFilters



Retrieve the list of APM retention filters from Datadog.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreateApmRetentionFilter



Create a retention filter for indexing spans in Datadog.

**Parameters**

-   **enable\_retention\_filter** (`boolean`, required) Set to true to enable the retention filter or false to disable it.
-   **retention\_filter\_name** (`string`, required) The name for the retention filter to be created.
-   **search\_query** (`string`, required) The search query using span search syntax to define criteria for retention.
-   **span\_sample\_rate** (`number`, required) Sample rate for spans matching the query. A value of 1.0 processes all matching spans.
-   **resource\_type** (`string`, optional) Specify the type of the resource, always use ‘apm\_retention\_filter’.
-   **retention\_filter\_type** (`string`, optional) Set the type of retention filter. Must be ‘spans-sampling-processor’.
-   **trace\_sample\_rate** (`number`, optional) Sample rate for traces with spans going through the filter. Use 1.0 to keep all matching traces.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ReorderApmRetentionFilters



Reorder execution order of APM retention filters.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteApmRetentionFilter



Delete a specific APM retention filter from your organization.

**Parameters**

-   **retention\_filter\_id** (`string`, required) The ID of the retention filter to delete. Default filters cannot be deleted.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetApmRetentionFilter



Retrieve details of a specific APM retention filter.

**Parameters**

-   **retention\_filter\_id** (`string`, required) The unique identifier for the specific APM retention filter to retrieve.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateApmRetentionFilter



Update an APM retention filter in your organization.

**Parameters**

-   **enable\_retention\_filter** (`boolean`, required) Set to true to enable or false to disable the retention filter.
-   **filter\_id** (`string`, required) The unique identifier for the retention filter that you want to update.
-   **filter\_query** (`string`, required) The search query for the retention filter, following the span search syntax.
-   **retention\_filter\_id** (`string`, required) The unique ID of the retention filter to be updated.
-   **retention\_filter\_name** (`string`, required) Specify the name of the retention filter to update.
-   **span\_sample\_rate** (`number`, required) Sample rate to apply to spans going through this retention filter. A value of 1.0 keeps all spans matching the query. Expected to be a number between 0 and 1.
-   **resource\_type** (`string`, optional) Specifies the type of the APM retention filter resource, should be ‘apm\_retention\_filter’.
-   **retention\_filter\_type** (`string`, optional) Specify the type of retention filter. Valid options are: ‘spans-sampling-processor’, ‘spans-errors-sampling-processor’, ‘spans-appsec-sampling-processor’.
-   **trace\_sample\_rate** (`number`, optional) Sample rate for traces containing spans that pass through the retention filter. A value of 1.0 keeps all matching traces.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteMultipleDatadogApps



Delete multiple apps in Datadog using app IDs.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListApps



Retrieve a list of all apps with optional filters and sorting.

**Parameters**

-   **filter\_by\_app\_name** (`string`, optional) Filter the list of apps by specifying the app name.
-   **filter\_by\_creator\_email** (`string`, optional) Filter apps by the creator’s email address. This is used to narrow down apps created by a specific user.
-   **filter\_by\_creator\_uuid** (`string`, optional) Filter apps by the app creator’s UUID. Provide the UUID of the user who created the app to narrow down the results.
-   **filter\_by\_query** (`string`, optional) Filter apps by the app name or the app creator’s name.
-   **filter\_by\_tags** (`string`, optional) Filter apps by specifying tags. Separate multiple tags with commas.
-   **filter\_self\_service\_enabled** (`boolean`, optional) Filter apps by self-service enablement. True for enabled, false otherwise.
-   **include\_published\_apps** (`boolean`, optional) Set to true to include only published apps, false to exclude them.
-   **page\_number** (`integer`, optional) The page number to return for paginated results.
-   **page\_size** (`integer`, optional) The number of apps to return per page.
-   **show\_only\_favorite\_apps** (`boolean`, optional) Set to true to filter and show only apps that you have marked as favorites.
-   **sort\_fields\_and\_directions** (`array[string]`, optional) An array specifying the fields and directions (e.g., ‘name:asc’, ‘created\_at:desc’) to sort apps by.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreateNewApp



Create a new app and return its ID using Datadog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteApp



Delete a specific app in Datadog.

**Parameters**

-   **app\_id** (`string`, required) The ID of the app to delete in Datadog. Ensure this ID is accurate to avoid unintentional deletions.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetAppDetails



Retrieve comprehensive details of a Datadog app.

**Parameters**

-   **application\_id** (`string`, required) The unique ID of the Datadog app to retrieve details for. Required for fetching app information.
-   **app\_version** (`string`, optional) Specify the app version to retrieve. Use a version number starting from 1, or special values `latest` and `deployed` for the latest or published version, respectively.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateAppVersion



Update an app by creating a new version.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **application\_id** (`string`, optional) The unique ID of the app to update. Required for creating a new version. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UnpublishApp



Unpublish an app to remove its live version.

**Parameters**

-   **app\_identifier** (`string`, required) The ID of the app you want to unpublish, removing its live version.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.PublishAppOnDatadog



Publish an app for user access on Datadog.

**Parameters**

-   **app\_id\_of\_app\_to\_publish** (`string`, required) The unique identifier of the app you want to publish on Datadog.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListApplicationKeys



Retrieve all application keys for your organization.

**Parameters**

-   **created\_after\_date** (`string`, optional) Include application keys created on or after this date (YYYY-MM-DD).
-   **created\_before\_date** (`string`, optional) Filters application keys created on or before this date. Expected format is YYYY-MM-DD.
-   **filter\_application\_keys** (`string`, optional) Filter the application keys based on a specified string to narrow down the results.
-   **include\_related\_resource** (`string`, optional) Specify ‘owned\_by’ to include related resource information in the response.
-   **page\_number** (`integer`, optional) Specify the page number to return in the results.
-   **page\_size** (`integer`, optional) Specify the number of application keys to return per page. Maximum is 100.
-   **sort\_keys\_by\_attribute** (`string`, optional) Sort application keys by attribute such as ‘created\_at’, ‘name’, or ‘last4’. Use a minus sign for descending order, e.g., ‘-name’.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteDatadogAppKey



Deletes an application key in Datadog.

**Parameters**

-   **application\_key\_id** (`string`, required) The unique ID of the Datadog application key to delete.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetApplicationKey



Retrieve an application key for your organization from Datadog.

**Parameters**

-   **application\_key\_id** (`string`, required) The unique identifier for the application key to retrieve details from Datadog.
-   **include\_related\_resource** (`string`, optional) Resource path for related resources to include in the response. Currently, only `owned_by` is supported.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateDatadogAppKey



Edit a Datadog application key by ID.

**Parameters**

-   **app\_key\_id** (`string`, required) The unique ID of the Datadog application key to be edited.
-   **application\_key\_id** (`string`, required) The unique identifier for the Datadog application key that needs to be updated.
-   **application\_key\_name** (`string`, optional) Name of the application key to be updated.
-   **application\_key\_scopes** (`array[string]`, optional) Array of scopes to grant the application key. Each scope is a string specifying a permission level.
-   **application\_keys\_resource\_type** (`string`, optional) Fixed value for the resource type, which should always be ‘application\_keys’.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetAuditLogs



Retrieve events matching an Audit Logs search query.

**Parameters**

-   **audit\_logs\_search\_query** (`string`, optional) Search query using Audit Logs syntax to filter events.
-   **cursor\_for\_following\_results** (`string`, optional) Cursor to fetch subsequent pages of results. Use the cursor from the previous query’s response.
-   **max\_event\_timestamp** (`string`, optional) Specify the maximum timestamp for requested events in ISO 8601 format.
-   **max\_events\_per\_response** (`integer`, optional) Specifies the maximum number of events to return in the response.
-   **sort\_order\_of\_events** (`string`, optional) Specify the order of events in the results. Use ‘timestamp’ for ascending and ‘-timestamp’ for descending order.
-   **start\_time\_filter** (`string`, optional) Specify the minimum timestamp for requested events in the format YYYY-MM-DDTHH:MM:SSZ.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.SearchAuditLogs



Retrieve audit logs events based on a search query.

**Parameters**

-   **audit\_logs\_search\_query** (`string`, optional) A string representing the search query following the Audit Logs search syntax to filter the logs.
-   **max\_events\_limit** (`integer`, optional) Specify the maximum number of events to include in the response, enabling efficient pagination.
-   **maximum\_time\_for\_requested\_events** (`string`, optional) Maximum time for the requested events. Supports date, math, and regular timestamps (in milliseconds).
-   **minimum\_time** (`string`, optional) Minimum time for the requested events. Accepts date, math, or timestamps in milliseconds.
-   **pagination\_cursor** (`string`, optional) Cursor for retrieving subsequent pages of audit log results.
-   **sort\_parameter** (`string`, optional) Sort events by timestamp. Use ‘timestamp’ for ascending, ‘-timestamp’ for descending.
-   **time\_offset\_seconds** (`integer`, optional) Time offset in seconds to apply to the query, adjusting the timeframe of the log search.
-   **timezone** (`string`, optional) Specify the timezone for the query, using GMT, UTC, an offset like UTC+1, or a Timezone Database identifier like America/New\_York.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListAuthnMappings



Retrieve all AuthN Mappings in the organization.

**Parameters**

-   **filter\_authn\_mappings** (`string`, optional) Filter all authentication mappings using a specific string to refine the results.
-   **filter\_by\_resource\_type** (`string`, optional) Filter results by mapping resource type. Can be ‘role’ or ‘team’. Defaults to ‘role’.
-   **page\_number** (`integer`, optional) The specific page number to return from the list of AuthN Mappings.
-   **page\_size** (`integer`, optional) Number of results per page, with a maximum value of 100.
-   **sort\_authn\_mappings\_by** (`string`, optional) Sort AuthN Mappings by the specified field. Options include fields like created\_at, role\_id, saml\_assertion\_attribute\_id, etc. Prefix with ’-’ for descending order.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreateAuthnMapping



Creates a new AuthN Mapping in Datadog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteAuthnMapping



Delete an AuthN Mapping using its UUID.

**Parameters**

-   **authn\_mapping\_uuid** (`string`, required) The unique identifier (UUID) of the AuthN Mapping to be deleted.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetAuthnMapping



Retrieve an AuthN Mapping by its UUID.

**Parameters**

-   **authn\_mapping\_uuid** (`string`, required) The UUID of the AuthN Mapping to retrieve.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.EditAuthnMapping



Edit an AuthN Mapping in Datadog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **authn\_mapping\_uuid** (`string`, optional) The UUID of the AuthN Mapping to edit. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.SearchCases



Search and retrieve support cases from Datadog.

**Parameters**

-   **order\_ascending** (`boolean`, optional) Set to true for ascending order; false for descending.
-   **page\_number** (`integer`, optional) The specific page number to return in the search results.
-   **page\_size** (`integer`, optional) The number of results per page, with a maximum value of 100.
-   **search\_query** (`string`, optional) The search query to filter cases. Use keywords or phrases to specify your search criteria.
-   **sort\_by\_field** (`string`, optional) Specify the field to sort by. Options are ‘created\_at’, ‘priority’, or ‘status’.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreateSupportCase



Create a new support case in Datadog.

**Parameters**

-   **case\_title** (`string`, required) The title of the support case to be created. It should clearly summarize the issue or request.
-   **case\_type\_uuid** (`string`, required) UUID representing the case type. Provide a valid UUID to specify the type of case being created.
-   **assignee\_resource\_type** (`string`, optional) The type of resource for the assignee, usually ‘user’.
-   **assignee\_user\_id** (`string`, optional) A unique identifier for the user assigned to the case. Typically a UUID string.
-   **case\_description** (`string`, optional) A detailed description of the support case. Include all relevant information about the issue or request.
-   **case\_priority** (`string`, optional) The priority of the support case. Valid values are NOT\_DEFINED, P1, P2, P3, P4, P5.
-   **case\_resource\_type** (`string`, optional) Specifies the type of resource being created. Always use “case” for this argument.
-   **project\_id** (`string`, optional) Provide the unique identifier of the project related to the support case.
-   **project\_resource\_type** (`string`, optional) Specifies the project resource type. Must be ‘project’.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetAllProjects



Retrieve a list of all projects from Datadog.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreateProject



Create a new project in the system.

**Parameters**

-   **project\_key** (`string`, required) The unique key for the project. Cannot use the value ‘CASE’.
-   **project\_name** (`string`, required) Specify the name of the project to be created. It should be a descriptive string.
-   **project\_resource\_type** (`string`, optional) Specifies the project resource type, which must be ‘project’.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.RemoveProject



Remove a project using its ID.

**Parameters**

-   **project\_id** (`string`, required) The unique identifier (UUID) of the project to be removed.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetProjectDetails



Retrieve details of a specific project using project ID.

**Parameters**

-   **project\_uuid** (`string`, required) The unique identifier (UUID) of the project for which details are required.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.RetrieveSupportCaseTypes



Retrieves all available support case types from Datadog.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreateCaseTypeInDatadog



Initiate the creation of a new case type in Datadog.

**Parameters**

-   **case\_type\_name** (`string`, required) Specify the name of the case type to be created in Datadog.
-   **case\_type\_deleted\_timestamp** (`string`, optional) Timestamp indicating when the case type was deleted. Format should be a valid ISO 8601 string.
-   **case\_type\_description** (`string`, optional) A brief textual description of the case type to be created in Datadog.
-   **case\_type\_emoji** (`string`, optional) Emoji representing the case type. Use a short, descriptive Unicode emoji.
-   **case\_type\_resource\_type** (`string`, optional) Specify the resource type for the case. Must be ‘case\_type’.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetAllCustomAttributes



Retrieve all custom attributes for cases in Datadog.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteCaseType



Delete a specific case type in Datadog.

**Parameters**

-   **case\_type\_uuid** (`string`, required) The unique identifier (UUID) of the case type to be deleted.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetCustomAttributeConfigs



Retrieve all custom attribute configurations for a case type.

**Parameters**

-   **case\_type\_uuid** (`string`, required) UUID for the case type to retrieve its custom attribute configurations.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreateCustomAttributeConfig



Create a custom attribute configuration for a specific case type.

**Parameters**

-   **allow\_multiple\_values** (`boolean`, required) Indicates if multiple values can be set for the custom attribute.
-   **case\_type\_uuid** (`string`, required) UUID of the case type for which the custom attribute config is to be created.
-   **custom\_attribute\_display\_name** (`string`, required) The display name for the custom attribute.
-   **custom\_attribute\_key** (`string`, required) A string key used to search for the custom attribute. This is the identifier for the attribute.
-   **custom\_attribute\_type** (`string`, required) Type of the custom attribute. Options: ‘URL’, ‘TEXT’, or ‘NUMBER’.
-   **custom\_attribute\_description** (`string`, optional) Detailed description for the custom attribute. This helps define the attribute’s purpose and use.
-   **custom\_attributes\_config\_type** (`string`, optional) Specifies the JSON:API resource type for the custom attributes configuration. Must be ‘custom\_attribute’.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteCustomAttributeConfig



Deletes a custom attribute configuration for a case type.

**Parameters**

-   **case\_type\_uuid** (`string`, required) The UUID of the case type for which the custom attribute configuration should be deleted.
-   **custom\_attribute\_uuid** (`string`, required) The UUID of the case custom attribute to be deleted.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetCaseDetails



Retrieve detailed information for a specific case.

**Parameters**

-   **case\_identifier** (`string`, required) The unique identifier for the case, either a UUID or a specific key, required to retrieve case details.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ArchiveCase



Archive a specific case in Datadog.

**Parameters**

-   **case\_unique\_id** (`string`, required) The unique identifier or key of the case to be archived in Datadog.
-   **case\_resource\_type** (`string`, optional) Specify ‘case’ as the resource type to identify the case resource.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.AssignCaseToUser



Assign a case to a specific user.

**Parameters**

-   **assignee\_user\_id** (`string`, required) The UUID of the user to whom the case will be assigned.
-   **case\_id** (`string`, required) The unique identifier (UUID or key) of the case to be assigned.
-   **case\_resource\_type** (`string`, optional) Specify the resource type. Must be set to ‘case’.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateCaseAttributes



Update attributes of a specific case.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **case\_identifier** (`string`, optional) The unique identifier or key for the case to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.AddCommentToCase



Add a comment to a specific case in Datadog.

**Parameters**

-   **case\_identifier** (`string`, required) The unique identifier (UUID or key) for the case to which the comment will be added.
-   **comment\_message** (`string`, required) The message content to be added as a comment on the case.
-   **case\_resource\_type** (`string`, optional) Specify the type of resource, always set to ‘case’.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteCaseComment



Deletes a specific comment from a case.

**Parameters**

-   **case\_identifier** (`string`, required) The unique identifier or key of the case for which the comment will be deleted.
-   **timeline\_cell\_uuid** (`string`, required) The UUID of the timeline cell containing the comment to be deleted. Required for specifying the exact comment.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteCaseCustomAttribute



Removes a custom attribute from a specified case.

**Parameters**

-   **case\_custom\_attribute\_key** (`string`, required) The key of the custom attribute to be removed from a case.
-   **case\_identifier** (`string`, required) The unique identifier or key of the case from which the custom attribute is to be deleted.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateCaseCustomAttribute



Update a custom attribute for a specific case in Datadog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **case\_identifier** (`string`, optional) The UUID or key of the case to be updated. This identifies the specific case in Datadog. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **custom\_attribute\_key** (`string`, optional) The key for the custom attribute of the case to be updated. Provide the exact key name to ensure accurate updates. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateCaseDescription



Update the description of a case in Datadog.

**Parameters**

-   **case\_uuid\_or\_key** (`string`, required) The unique identifier (UUID or key) for the specific case you want to update in Datadog.
-   **new\_case\_description** (`string`, required) Provide the new description text for the case you wish to update. This replaces the current case description.
-   **case\_resource\_type** (`string`, optional) Specify the type of resource for the case. It must be ‘case’.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateCasePriority



Update the priority of a specific case.

**Parameters**

-   **case\_identifier** (`string`, required) The unique identifier for the case, either UUID or key.
-   **case\_priority** (`string`, optional) Specify the priority level of the case. Valid options are: ‘NOT\_DEFINED’, ‘P1’, ‘P2’, ‘P3’, ‘P4’, ‘P5’.
-   **case\_resource\_type** (`string`, optional) Specifies the type of resource, should be set to ‘case’.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateCaseStatus



Update the status of a specific case in Datadog.

**Parameters**

-   **case\_status** (`string`, required) Specify the status of the case. Valid values are ‘OPEN’, ‘IN\_PROGRESS’, ‘CLOSED’.
-   **case\_uuid\_or\_key** (`string`, required) The unique identifier or key for the case to update its status in Datadog.
-   **case\_resource\_type** (`string`, optional) Specifies the resource type of the case. Must be ‘case’.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateCaseTitle



Update the title of a specific case by ID.

**Parameters**

-   **case\_identifier** (`string`, required) The unique identifier (UUID or key) of the case whose title you want to update.
-   **new\_case\_title** (`string`, required) The new title for the case to be updated.
-   **case\_resource\_type** (`string`, optional) Specify the type of the case resource, which should be ‘case’.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UnarchiveCase



Unarchive a specific support case in Datadog.

**Parameters**

-   **case\_identifier** (`string`, required) The unique identifier (UUID or key) of the case to be unarchived.
-   **case\_resource\_type** (`string`, optional) The resource type of the case, must be ‘case’.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UnassignCase



Unassigns a case from its current assignee.

**Parameters**

-   **case\_identifier** (`string`, required) The unique UUID or key representing the case to be unassigned in Datadog.
-   **case\_resource\_type** (`string`, optional) Specifies the resource type of the case. Must be set to ‘case’.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListSoftwareCatalogEntities



Retrieve entities from the software catalog.

**Parameters**

-   **exclude\_snapshotted\_entities** (`string`, optional) Set to `true` to exclude entities that are snapshotted.
-   **filter\_by\_kind** (`string`, optional) Filter entities by specifying the kind of entity, provided as a string.
-   **filter\_by\_name** (`string`, optional) Filter entities by specifying their name.
-   **filter\_by\_owner** (`string`, optional) Filter the entities by their owner using a specific owner name or ID.
-   **filter\_by\_reference** (`string`, optional) Filter entities by their specific reference string.
-   **filter\_by\_relation\_type** (`string`, optional) Specify the relation type to filter entities. Options include: ‘RelationTypeOwns’, ‘RelationTypeOwnedBy’, ‘RelationTypeDependsOn’, ‘RelationTypeDependencyOf’, ‘RelationTypePartsOf’, ‘RelationTypeHasPart’, ‘RelationTypeOtherOwns’, ‘RelationTypeOtherOwnedBy’, ‘RelationTypeImplementedBy’, ‘RelationTypeImplements’.
-   **filter\_by\_uuid** (`string`, optional) Filter entities by their UUID. Provide the UUID as a string to retrieve specific entities.
-   **include\_relationship\_data** (`string`, optional) Specify which relationship data to include, such as ‘schema’, ‘raw\_schema’, ‘oncall’, ‘incident’, or ‘relation’.
-   **max\_entities\_per\_page** (`integer`, optional) Specifies the maximum number of entities to return per page in the response.
-   **pagination\_offset** (`integer`, optional) The starting point for pagination of the returned list of entities.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ManageSoftwareCatalogEntity



Create or update entities in the Software Catalog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteCatalogEntity



Delete a single entity from the Software Catalog.

**Parameters**

-   **catalog\_entity\_identifier** (`string`, required) The UUID or Entity Reference for the entity to be deleted from the Software Catalog.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListCatalogKinds



Retrieve entity kinds from the Software Catalog.

**Parameters**

-   **filter\_entity\_name** (`string`, optional) Filter entities in the Software Catalog by their name using a string value.
-   **filter\_uuid** (`string`, optional) Filter entities by their UUID in the catalog.
-   **max\_kinds\_in\_response** (`integer`, optional) Specify the maximum number of entity kinds to be returned in the response.
-   **page\_offset** (`integer`, optional) Specific offset to use as the beginning of the returned page. It determines where the data will start from in the list.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateSoftwareCatalogKind



Create or update kinds in the Software Catalog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteCatalogKind



Delete a kind from the Software Catalog.

**Parameters**

-   **catalog\_kind\_identifier** (`string`, required) The unique identifier for the kind to delete from the Software Catalog.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListCatalogEntityRelations



Retrieve entity relations from the software catalog.

**Parameters**

-   **filter\_by\_first\_entity\_reference** (`string`, optional) Filter relations by the reference of the first entity in the relation.
-   **filter\_relations\_by\_second\_entity\_reference** (`string`, optional) Filter relations by the reference of the second entity in the relation.
-   **include\_relationship\_data** (`string`, optional) Specify which relationship data to include: ‘entity’ or ‘schema’.
-   **maximum\_relations\_per\_page** (`integer`, optional) Maximum number of relations to include in the response.
-   **page\_offset** (`integer`, optional) The starting offset for the returned page of results.
-   **relation\_type\_filter** (`string`, optional) Filter relations by type using predefined relation types such as ‘RelationTypeOwns’, ‘RelationTypeDependsOn’, etc.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.AggregatePipelineEvents



Aggregate CI pipeline event metrics and timeseries.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListCiPipelineEvents



Retrieve CI pipeline events based on a search query.

**Parameters**

-   **cursor\_for\_next\_page** (`string`, optional) Cursor to paginate through results. Use the cursor from the previous query.
-   **event\_order** (`string`, optional) Specifies the order of CI pipeline events in the results. Use ‘timestamp’ for ascending and ‘-timestamp’ for descending order.
-   **max\_events\_response** (`integer`, optional) Specify the maximum number of events to include in the response. Accepts an integer value.
-   **maximum\_timestamp** (`string`, optional) Specify the maximum timestamp for the requested events. Format as an ISO 8601 string (e.g., 2023-10-01T00:00:00Z).
-   **min\_timestamp** (`string`, optional) Specify the earliest time for the events you want to retrieve. Use a timestamp string.
-   **search\_query** (`string`, optional) A search query using Datadog’s log syntax to filter CI pipeline events. Specify criteria to refine results.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.SearchCiPipelineEvents



Retrieve CI pipeline events matching a search query.

**Parameters**

-   **filter\_to\_time** (`string`, optional) The maximum time for requested events; supports date, math, and timestamps (in milliseconds).
-   **max\_events\_per\_page** (`integer`, optional) Specify the maximum number of events to retrieve in a single response. This limits the number of events returned in one page of results.
-   **min\_time\_for\_events** (`string`, optional) Specify the minimum time for the requested events. Supports date, math expressions, and timestamps in milliseconds.
-   **pagination\_cursor** (`string`, optional) Use this to fetch the next set of results by providing the cursor value from the previous query response.
-   **query\_time\_offset\_seconds** (`integer`, optional) The time offset in seconds to apply to the query for event retrieval.
-   **search\_query** (`string`, optional) The search query using CI Visibility Explorer search syntax to filter pipeline events.
-   **sort\_events\_by** (`string`, optional) Defines the order of CI pipeline events by timestamp. Use ‘timestamp’ for ascending order and ‘-timestamp’ for descending order.
-   **timezone** (`string`, optional) Specify the timezone as GMT, UTC, a UTC offset (like UTC+1), or a Timezone Database identifier (e.g., America/New\_York).

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.AggregateTestMetrics



Aggregate CI Visibility test events into metrics and timeseries.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListCiTestEvents



Retrieve CI test events based on a search query.

**Parameters**

-   **max\_events\_in\_response** (`integer`, optional) Specify the maximum number of CI test events to return in the response.
-   **max\_timestamp** (`string`, optional) Specify the maximum timestamp for the requested events.
-   **minimum\_timestamp** (`string`, optional) The minimum timestamp to filter requested events. Format is typically ISO 8601.
-   **pagination\_cursor** (`string`, optional) Cursor for fetching the next set of paginated results, provided by the previous query.
-   **search\_query** (`string`, optional) Search query using log syntax to filter CI Visibility test events.
-   **sort\_order** (`string`, optional) Specify the order of events by using ‘timestamp’ for ascending or ‘-timestamp’ for descending.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.SearchCiTestEvents



Retrieve CI Visibility test events with advanced search capabilities.

**Parameters**

-   **maximum\_event\_time** (`string`, optional) The maximum time for the requested events. Supports date strings, math expressions, or timestamps (in milliseconds).
-   **maximum\_events\_in\_response** (`integer`, optional) Specify the maximum number of events to be returned in the response. This limits the size of the result set.
-   **pagination\_cursor** (`string`, optional) Cursor for retrieving the next set of paginated results based on previous queries.
-   **search\_query** (`string`, optional) The search query using CI Visibility Explorer syntax for filtering test events.
-   **sort\_order** (`string`, optional) Specify the sorting order for events. Use ‘timestamp’ for ascending or ‘-timestamp’ for descending order.
-   **start\_time\_filter** (`string`, optional) The minimum time for requested events; can be a date, mathematical expression, or timestamp in milliseconds.
-   **time\_offset\_seconds** (`integer`, optional) The time offset, in seconds, to apply to the query for adjusting the search time range.
-   **timezone** (`string`, optional) Specify the timezone as GMT, UTC, a UTC offset (e.g., UTC+1), or a Timezone Database identifier (e.g., America/New\_York).

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreateCustomSecurityFramework



Create a custom security framework in Datadog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteCustomFramework



Delete a custom framework from Datadog.

**Parameters**

-   **framework\_handle** (`string`, required) The unique identifier for the custom framework to be deleted.
-   **framework\_version** (`string`, required) Specify the version of the custom framework to delete.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetCustomFramework



Retrieve a specific custom framework by handle and version.

**Parameters**

-   **framework\_handle** (`string`, required) The unique identifier for the custom framework to retrieve.
-   **framework\_version** (`string`, required) Specify the version of the framework to retrieve. Use the exact version number or identifier.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateCustomFramework



Update an existing custom security management framework.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **framework\_handle** (`string`, optional) The unique identifier for the framework to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **framework\_version** (`string`, optional) Specifies the version of the framework to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListResourceFilters



Retrieve Datadog resource evaluation filters.

**Parameters**

-   **cloud\_provider\_account\_id** (`string`, optional) Filter resource filters by the cloud provider’s account ID. This is valid only when a provider is specified.
-   **cloud\_provider\_filter** (`string`, optional) Specifies the cloud provider to filter resource filters, such as aws, gcp, or azure.
-   **skip\_cache\_for\_resource\_filters** (`boolean`, optional) Set to true to skip the cache when fetching resource filters. Useful when the latest resource data is needed.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateResourceFilters



Update resource filters in cloud security management.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListContainerImages



Retrieve all container images for your organization.

**Parameters**

-   **filter\_tags** (`string`, optional) Comma-separated list of tags to filter container images by.
-   **group\_container\_images\_by\_tags** (`string`, optional) Comma-separated list of tags to group container images by. Helps in organizing images based on specified criteria.
-   **max\_results\_per\_page** (`integer`, optional) The maximum number of container image results to return per page.
-   **next\_page\_cursor** (`string`, optional) String to query the next page of container image results. Obtain this from the `meta.pagination.next_cursor` in the API response.
-   **sort\_container\_images\_by** (`string`, optional) Attribute to sort Container Images by, such as ‘name’ or ‘date’.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListAllContainers



Retrieve all containers within your organization.

**Parameters**

-   **container\_sort\_attribute** (`string`, optional) Specify the attribute to sort containers by. Common values include ‘name’, ‘creation\_date’, etc.
-   **filter\_by\_tags** (`string`, optional) Comma-separated list of tags to filter containers by, narrowing down the results based on specified tags.
-   **group\_containers\_by\_tags** (`string`, optional) Comma-separated list of tags to group containers by.
-   **maximum\_results\_returned** (`integer`, optional) Maximum number of container results to return per page.
-   **pagination\_cursor** (`string`, optional) A string to query the next page of container results, using the `meta.pagination.next_cursor` from the API response.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListCustomAllocationRules



Retrieve all custom allocation rules for the organization.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreateCustomAllocationRule



Create a custom allocation rule in Datadog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ReorderCustomAllocationRules



Change execution order of custom allocation rules in Datadog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteCustomAllocationRule



Delete an existing custom allocation rule by ID.

**Parameters**

-   **custom\_allocation\_rule\_id** (`integer`, required) The unique identifier of the custom allocation rule to be deleted.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetCustomAllocationRule



Retrieve a custom allocation rule by its ID.

**Parameters**

-   **custom\_allocation\_rule\_id** (`integer`, required) The unique identifier for retrieving a specific custom allocation rule in Datadog.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateCustomAllocationRule



Update custom allocation rules with new filters and strategies.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **custom\_allocation\_rule\_id** (`integer`, optional) The unique identifier for the custom allocation rule to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListAwsCurConfigs



Retrieve AWS CUR configuration list from Datadog.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreateAwsCurConfig



Create an AWS CUR config for Cloud Cost Management.

**Parameters**

-   **aws\_account\_id** (`string`, optional) The AWS account ID for which the CUR config is created. This is required to specify which AWS account the configuration applies to.
-   **aws\_bucket\_name\_for\_cur** (`string`, optional) The AWS bucket name used to store the Cost and Usage Report.
-   **aws\_cur\_config\_type** (`string`, optional) Type of AWS CUR config post request. Choose from available options: ‘aws\_cur\_config\_post\_request’.
-   **bucket\_region** (`string`, optional) The AWS region where the bucket is located.
-   **excluded\_aws\_account\_ids** (`array[string]`, optional) List of AWS account IDs to exclude from the billing dataset. Used when `include_new_accounts` is `true`.
-   **include\_new\_member\_accounts** (`boolean`, optional) Set to true to automatically include new member accounts by default in your billing dataset.
-   **included\_aws\_account\_ids** (`array[string]`, optional) List of AWS account IDs to be included in the billing dataset, used when `include_new_accounts` is `false`.
-   **report\_month** (`integer`, optional) Specify the month for the AWS Cost and Usage Report. Use an integer (1-12) to represent the month.
-   **report\_name** (`string`, optional) The name of the Cost and Usage Report to create for AWS CUR configuration.
-   **report\_prefix** (`string`, optional) The prefix for the Cost and Usage Report (CUR).

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ArchiveCloudCostAccount



Archive a Cloud Cost Management Account.

**Parameters**

-   **cloud\_account\_id** (`integer`, required) The unique identifier for the Cloud Account to be archived in Datadog.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetAwsCurConfig



Retrieve a specific AWS CUR configuration.

**Parameters**

-   **cloud\_account\_id** (`integer`, required) The unique integer identifier of the AWS cloud account for which to fetch the CUR configuration.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateAwsCurConfigStatus



Updates status or configuration of an AWS CUR config.

**Parameters**

-   **cloud\_account\_id** (`integer`, required) The ID of the AWS cloud account to configure in Datadog.
-   **automatic\_inclusion\_of\_new\_accounts** (`boolean`, optional) Set to true to automatically include new member accounts by default in your billing dataset.
-   **aws\_cur\_config\_request\_type** (`string`, optional) Specify the type of AWS CUR config Patch Request, usually ‘aws\_cur\_config\_patch\_request’.
-   **excluded\_aws\_account\_ids** (`array[string]`, optional) List of AWS account IDs to exclude from the billing dataset when “include\_new\_accounts” is true.
-   **included\_aws\_accounts** (`array[string]`, optional) List of AWS account IDs to be included in the billing dataset when `include_new_accounts` is `false`.
-   **is\_cost\_management\_enabled** (`boolean`, optional) Indicates whether the Cloud Cost Management account is enabled. Accepts a boolean value.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListAzureConfigs



Retrieve Azure configuration list from Datadog.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreateAzureCostManagementAccount



Create a Cloud Cost Management account for Azure.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ArchiveAzureCostAccount



Archive an Azure Cloud Cost Management account in Datadog.

**Parameters**

-   **azure\_cloud\_account\_id** (`integer`, required) The ID of the Azure Cloud Cost Management account to archive. This is necessary to identify which account’s configurations will be removed.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetAzureConfig



Retrieve details of a specific Azure configuration.

**Parameters**

-   **azure\_cloud\_account\_id** (`integer`, required) The unique identifier for the Azure cloud account to retrieve the configuration.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateAzureConfigStatus



Update status of Azure config to active or archived.

**Parameters**

-   **cloud\_account\_id** (`integer`, required) The identifier for the Azure Cloud account whose configuration status is being updated.
-   **azure\_config\_patch\_request\_type** (`string`, optional) Specify the type of Azure config Patch Request, typically ‘azure\_uc\_config\_patch\_request’.
-   **enable\_cloud\_cost\_management** (`boolean`, optional) Set to true to enable the Cloud Cost Management account, false to disable it.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ManageBudget



Create or update a budget in Datadog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteBudget



Delete a specified budget.

**Parameters**

-   **budget\_id** (`string`, required) The unique identifier for the budget to be deleted. This ID is required to specify which budget to remove from the system.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetBudgetDetails



Retrieve detailed information about a specific budget.

**Parameters**

-   **budget\_identifier** (`string`, required) The unique identifier for the budget to retrieve details for.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListBudgets



Fetch a list of budgets from Datadog.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListCustomCostsFiles



Retrieve a list of custom costs files from Datadog.

**Parameters**

-   **filter\_by\_file\_status** (`string`, optional) Filter the custom costs files by their status. Accepts a string value representing the status to filter by, such as ‘active’, ‘inactive’, or ‘pending’.
-   **page\_number** (`integer`, optional) The page number to retrieve for pagination in the list of custom costs files.
-   **pagination\_page\_size** (`integer`, optional) The number of custom cost files to return per page for pagination.
-   **sort\_key** (`string`, optional) Specify the key for sorting the list, with an optional ’-’ prefix for descending order.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UploadCustomCostsFile



Upload a custom costs file to Datadog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteCustomCostFile



Delete a specified custom costs file in Datadog.

**Parameters**

-   **custom\_cost\_file\_id** (`string`, required) The unique identifier of the custom costs file to be deleted.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.FetchCustomCostsFile



Fetch a specified Custom Costs file by file ID from Datadog.

**Parameters**

-   **file\_identifier** (`string`, required) A unique identifier for the Custom Costs file to be retrieved from Datadog.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListGcpUsageCostConfigs



Retrieve Google Cloud Usage Cost configurations from Datadog.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreateGcpCostManagementAccount



Create a cost management account for Google Cloud usage.

**Parameters**

-   **gcp\_bucket\_name** (`string`, optional) The name of the Google Cloud bucket where the Usage Cost exports are stored.
-   **gcp\_usage\_cost\_export\_dataset\_name** (`string`, optional) The dataset name used for exporting the Google Cloud Usage Cost report.
-   **gcp\_usage\_cost\_report\_name** (`string`, optional) The name of the Google Cloud Usage Cost report to be used for cost management.
-   **google\_cloud\_billing\_account\_id** (`string`, optional) The Google Cloud account ID for cost management.
-   **google\_cloud\_export\_prefix** (`string`, optional) The export prefix for the Google Cloud Usage Cost report.
-   **google\_cloud\_service\_account\_email** (`string`, optional) The unique Google Cloud service account email required for the cost management setup.
-   **usage\_cost\_config\_type** (`string`, optional) Specifies the type of Google Cloud Usage Cost configuration post request. Use “gcp\_uc\_config\_post\_request” to indicate this type.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ArchiveGcpCostManagementAccount



Archive a Cloud Cost Management account.

**Parameters**

-   **cloud\_account\_identifier** (`integer`, required) The unique identifier for the GCP cloud account to be archived.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetGcpUsageCostConfig



Retrieve specific Google Cloud Usage Cost configuration details.

**Parameters**

-   **cloud\_account\_identifier** (`integer`, required) The unique identifier of the Google Cloud account for which to retrieve the usage cost configuration.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateGcpUsageCostStatus



Update the status of a GCP Usage Cost config.

**Parameters**

-   **cloud\_account\_id** (`integer`, required) The ID of the Google Cloud account for which the cost configuration status needs to be updated.
-   **cloud\_cost\_management\_enabled** (`boolean`, required) Set to ‘true’ to enable the Cloud Cost Management account or ‘false’ to disable it.
-   **gcp\_usage\_cost\_config\_request\_type** (`string`, optional) Type of Google Cloud Usage Cost configuration patch request. Use ‘gcp\_uc\_config\_patch\_request’.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetActiveBillingDimensions



Retrieve active billing dimensions for cost attribution.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.FetchMonthlyCostAttribution



Retrieve monthly cost attribution data by tag.

**Parameters**

-   **cost\_types\_fields** (`string`, required) Comma-separated list specifying cost types and proportions. Use `*` to retrieve all fields. Example: `infra_host_on_demand_cost,infra_host_percentage_in_account`.
-   **start\_month** (`string`, required) Datetime in ISO-8601 format, UTC, precise to month `[YYYY-MM]`. Represents the start of the costing period.
-   **end\_month** (`string`, optional) The final month for cost calculation. Use ISO-8601 format `[YYYY-MM]` to specify the month.
-   **include\_child\_organization\_costs** (`boolean`, optional) Include child organization costs in the response. Defaults to true.
-   **pagination\_next\_record\_id** (`string`, optional) Identifier for fetching the next set of results in a paginated response. Use the ‘next\_record\_id’ from the previous response.
-   **sort\_by\_billing\_dimension** (`string`, optional) Billing dimension to sort by. Defaults to sorting by total cost. Example: ‘infra\_host’.
-   **sort\_by\_direction** (`string`, optional) Specifies the direction to sort cost attribution data. Use ‘desc’ for descending or ‘asc’ for ascending order.
-   **tag\_keys\_for\_cost\_grouping** (`string`, optional) Comma-separated list of tag keys used to group costs. If empty, costs won’t be grouped by tag. Check `tag_config_source` in the API response for available tags.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListAllCsmAgents



Retrieve all CSM Agents running on your infrastructure.

**Parameters**

-   **filter\_query** (`string`, optional) A search query string to filter results, e.g., `hostname:COMP-T2H4J27423`.
-   **page\_size** (`integer`, optional) Specify the number of items to include in a single page for pagination.
-   **pagination\_page\_index** (`integer`, optional) The zero-based index of the page to retrieve for pagination.
-   **results\_sort\_direction** (`string`, optional) Sets sort order for results. Use ‘asc’ for ascending or ‘desc’ for descending.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetCloudAccountsCoverageAnalysis



Retrieve CSM coverage analysis of your cloud accounts.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetCsmCoverageAnalysis



Retrieve CSM coverage analysis for hosts and containers.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetServerlessCoverageAnalysis



Retrieve CSM serverless coverage analysis data from Datadog.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListServerlessAgents



Retrieve all running CSM Serverless Agents.

**Parameters**

-   **filter\_query** (`string`, optional) A search string to filter serverless agents, such as `hostname:COMP-T2H4J27423`.
-   **items\_per\_page** (`integer`, optional) The number of items to include in a single page of results.
-   **page\_index** (`integer`, optional) The zero-based page index for pagination when retrieving serverless agents.
-   **sort\_direction** (`string`, optional) The direction to sort results: ‘asc’ for ascending or ‘desc’ for descending order.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListUserAppKeys



Retrieve all application keys for the current user.

**Parameters**

-   **created\_after\_date** (`string`, optional) Include application keys created on or after this date in the results.
-   **filter\_by\_string** (`string`, optional) Filter application keys by the specified string to narrow down the results.
-   **filter\_created\_at\_end\_date** (`string`, optional) Include only application keys created on or before this date. Format: YYYY-MM-DD.
-   **include\_related\_resources** (`string`, optional) Specify ‘owned\_by’ to include related resources in the response.
-   **page\_number** (`integer`, optional) Specify the page number to retrieve application keys from.
-   **page\_size** (`integer`, optional) Specify the number of application keys per page. Maximum value is 100.
-   **sort\_application\_keys** (`string`, optional) Specify the attribute to sort the application keys. Use a minus sign for descending order.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreateUserApplicationKey



Create an application key for the current user in Datadog.

**Parameters**

-   **application\_key\_name** (`string`, required) The name of the application key to be created for the current user.
-   **application\_key\_resource\_type** (`string`, optional) Specifies the resource type, should always be ‘application\_keys’.
-   **application\_key\_scopes** (`array[string]`, optional) List of scopes to grant the application key for accessing specific resources.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteUserApplicationKey



Delete an application key owned by the current user.

**Parameters**

-   **application\_key\_id** (`string`, required) The ID of the application key to be deleted. Required to identify which key to remove.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetUserApplicationKey



Retrieve an application key owned by the current user.

**Parameters**

-   **application\_key\_id** (`string`, required) The ID of the application key to retrieve, owned by the current user.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.EditUserAppKey



Edit an application key owned by the current user.

**Parameters**

-   **app\_key\_identifier** (`string`, required) ID of the application key to be edited.
-   **application\_key\_id** (`string`, required) The ID of the application key to be edited. Must be a valid string ID.
-   **application\_key\_name** (`string`, optional) New name for the application key.
-   **application\_key\_resource\_type** (`string`, optional) Specifies the resource type for the application key. Use the value ‘application\_keys’.
-   **application\_key\_scopes** (`array[string]`, optional) List of scopes to grant the application key. Each scope is a string defining permissions.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteDashboardFromList



Remove dashboards from a specified list in Datadog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **dashboard\_list\_identifier** (`integer`, optional) The unique integer ID of the dashboard list from which dashboards will be deleted. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.FetchDashboardListItems



Fetch details of dashboards in a list.

**Parameters**

-   **dashboard\_list\_id** (`integer`, required) The unique integer ID of the dashboard list from which to retrieve dashboard definitions.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.AddDashboardsToList



Add dashboards to an existing list in Datadog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **dashboard\_list\_identifier** (`integer`, optional) Specify the integer ID of the dashboard list where dashboards will be added. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateDashboardListItems



Update dashboards in an existing dashboard list.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **dashboard\_list\_identifier** (`integer`, optional) ID of the dashboard list to update with new items. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetAllDatasets



Retrieve all datasets configured for your organization.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreateDataset



Create a dataset with specified configurations.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteDataset



Deletes a dataset using its ID.

**Parameters**

-   **dataset\_identifier** (`string`, required) The unique ID of the dataset to be deleted. Required for deletion.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.RetrieveDatasetInfo



Retrieve detailed information about a specific dataset from Datadog.

**Parameters**

-   **dataset\_identifier** (`string`, required) The unique identifier of the dataset to retrieve from Datadog.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.EditDataset



Edit the dataset using the specified ID.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **dataset\_id** (`string`, optional) The unique ID of the dataset to be edited in Datadog. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetDomainAllowlist



Retrieve the domain allowlist for an organization.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateDomainAllowlist



Update the organization’s domain allowlist to control domain access.

**Parameters**

-   **allowed\_domains\_list** (`array[string]`, optional) A list of domains to include in the organization’s email domain allowlist.
-   **email\_domain\_allowlist\_type** (`string`, optional) Type of email domain allowlist. Valid value: ‘domain\_allowlist’.
-   **enable\_email\_domain\_allowlist** (`boolean`, optional) Set to true to enable the email domain allowlist for the organization.
-   **organization\_identifier** (`string`, optional) The unique identifier for the organization to update the domain allowlist.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListScheduledDowntimes



Retrieve all scheduled downtimes from Datadog.

**Parameters**

-   **include\_resources\_in\_response** (`string`, optional) Comma-separated list of resource paths to include in the response, such as `created_by` and `monitor`.
-   **max\_downtimes\_in\_response** (`integer`, optional) Maximum number of downtimes to include in the response.
-   **page\_offset** (`integer`, optional) The starting point for the list of returned scheduled downtimes, used for pagination.
-   **return\_current\_downtimes\_only** (`boolean`, optional) Set to true to return only downtimes active at the time of the request.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ScheduleDowntime



Schedule downtime for services or systems through Datadog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CancelDowntime



Cancel an active downtime in Datadog.

**Parameters**

-   **downtime\_id** (`string`, required) Provide the ID of the downtime you wish to cancel.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetDowntimeDetails



Retrieve details of a specific downtime by ID.

**Parameters**

-   **downtime\_id** (`string`, required) The unique identifier for the downtime period to retrieve details for.
-   **include\_related\_resources** (`string`, optional) Comma-separated list of resource paths to include in the response. Options: `created_by`, `monitor`.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateDowntime



Update downtime by its ID in Datadog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **downtime\_id** (`string`, optional) The unique identifier of the downtime to be updated in Datadog. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.SearchDatadogIssues



Search and retrieve issues from Datadog using a query.

**Parameters**

-   **end\_date** (`integer`, required) End date (exclusive) for the query in milliseconds since the Unix epoch. Determines up to when the issues are retrieved.
-   **object\_type** (`string`, required) Specify the type of the object. The value must be ‘search\_request’.
-   **search\_event\_query** (`string`, required) Search query using the event search syntax to find relevant issues.
-   **start\_date\_millis** (`integer`, required) Start date (inclusive) of the query in milliseconds since the Unix epoch.
-   **event\_track\_to\_query** (`string`, optional) Specify the track of events to query: ‘trace’, ‘logs’, or ‘rum’. Either track or persona must be provided.
-   **include\_relationship\_objects** (`array[string]`, optional) List of relationship objects to include in the response, specified as an array of strings.
-   **search\_persona** (`string`, optional) Persona for the search. Choose from ALL, BROWSER, MOBILE, or BACKEND. Either track(s) or persona(s) must be specified.
-   **sort\_results\_by** (`string`, optional) Attribute to sort the search results. Options: TOTAL\_COUNT, FIRST\_SEEN, IMPACTED\_SESSIONS, PRIORITY.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetErrorTrackingIssueDetails



Retrieve full details of a specific error tracking issue.

**Parameters**

-   **issue\_identifier** (`string`, required) The unique identifier of the error tracking issue to retrieve details for.
-   **include\_relationship\_objects** (`array[string]`, optional) A list of relationship objects to include in the response. Provide as an array of strings.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateIssueAssignee



Update the assignee of an issue in Datadog.

**Parameters**

-   **issue\_identifier** (`string`, required) The unique identifier for the issue to update the assignee.
-   **object\_type** (`string`, required) Specifies the type of object being updated. For issue assignee, use ‘assignee’.
-   **user\_identifier** (`string`, required) The identifier of the user to assign the issue to.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateIssueState



Update the state of an issue in Datadog.

**Parameters**

-   **issue\_id\_value** (`string`, required) The identifier for the issue to update the state of in Datadog.
-   **issue\_identifier** (`string`, required) The unique identifier for the issue to update its state in Datadog.
-   **issue\_object\_type** (`string`, required) Specifies the type of the object. Accepted value is ‘error\_tracking\_issue’.
-   **issue\_state** (`string`, required) State of the issue, valid values are ‘OPEN’, ‘ACKNOWLEDGED’, ‘RESOLVED’, ‘IGNORED’, ‘EXCLUDED’.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListDatadogEvents



Retrieve events from Datadog based on a search query.

**Parameters**

-   **event\_search\_query** (`string`, optional) Search query following Datadog’s events syntax to filter events.
-   **max\_timestamp\_milliseconds** (`string`, optional) Specify the maximum timestamp for requested events in milliseconds. Use this to limit the latest time of events retrieved.
-   **maximum\_events\_per\_page** (`integer`, optional) Sets the maximum number of events to return in the response.
-   **minimum\_timestamp\_millis** (`string`, optional) The minimum timestamp in milliseconds for filtering requested events.
-   **pagination\_cursor** (`string`, optional) Cursor for paginating through results, provided in the previous query response.
-   **sort\_order** (`string`, optional) Specify the order of events: ‘timestamp’ for ascending, ‘-timestamp’ for descending.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.SearchDatadogEvents



Search and filter events in Datadog.

**Parameters**

-   **event\_search\_query** (`string`, optional) The search query using Datadog’s event search syntax to filter events.
-   **max\_event\_time** (`string`, optional) Specify the maximum time for the events. Supports date math and timestamps in milliseconds.
-   **maximum\_events\_per\_page** (`integer`, optional) Specify the maximum number of events returned per page in the response. This controls the pagination size.
-   **paging\_cursor** (`string`, optional) The cursor for pagination to retrieve the next set of results.
-   **sort\_order** (`string`, optional) Specify event sorting order: ‘timestamp’ for ascending, ‘-timestamp’ for descending.
-   **start\_time** (`string`, optional) The earliest time for requested events, using date math or timestamps in milliseconds.
-   **time\_offset\_seconds** (`integer`, optional) The time offset to apply to the query in seconds. Use an integer to specify the shift in time for the search results.
-   **timezone** (`string`, optional) Specify the timezone for the query. It can be GMT, UTC, an offset (like UTC+1), or a Timezone Database identifier (like America/New\_York).

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetEventDetails



Retrieve detailed information about a specific event.

**Parameters**

-   **event\_unique\_id** (`string`, required) The unique identifier of the event to retrieve details for. This should be a string representing the event’s UID.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListOrganizationIncidents



Retrieve all incidents for your organization.

**Parameters**

-   **include\_related\_objects** (`array[string]`, optional) List of related object types to include in the response. Specify as an array of strings.
-   **page\_offset** (`integer`, optional) Specific offset to start the returned page of incidents. Use this to paginate results.
-   **page\_size** (`integer`, optional) Integer specifying the number of incidents per page, up to a maximum of 100.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreateIncident



Create a new incident in Datadog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListIncidentNotificationRules



Retrieve all incident notification rules for the organization.

**Parameters**

-   **resources\_to\_include** (`string`, optional) Comma-separated list of resources to include. Supported values: `created_by_user`, `last_modified_by_user`, `incident_type`, `notification_template`.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreateIncidentNotificationRule



Creates a new incident notification rule in Datadog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteIncidentNotificationRule



Delete an incident notification rule by its ID.

**Parameters**

-   **notification\_rule\_id** (`string`, required) The unique identifier of the notification rule to be deleted.
-   **include\_resources** (`string`, optional) Comma-separated list of resources to include, such as `created_by_user`, `last_modified_by_user`, `incident_type`, `notification_template`.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetIncidentNotificationRule



Retrieve details of a specific incident notification rule.

**Parameters**

-   **notification\_rule\_id** (`string`, required) The unique identifier for the notification rule to retrieve details.
-   **include\_resources** (`string`, optional) Comma-separated list of resources to include in the response. Options: `created_by_user`, `last_modified_by_user`, `incident_type`, `notification_template`.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateIncidentNotificationRule



Update an incident notification rule in Datadog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **notification\_rule\_id** (`string`, optional) The unique identifier for the notification rule to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **include\_resources** (`string`, optional) Comma-separated list of resources to include: `created_by_user`, `last_modified_by_user`, `incident_type`, `notification_template`. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListIncidentNotificationTemplates



Retrieve all incident notification templates.

**Parameters**

-   **incident\_type\_id\_filter** (`string`, optional) Optional ID to filter notification templates by incident type.
-   **include\_relationships** (`string`, optional) Comma-separated list of relationships to include in the response. Supported values are `created_by_user`, `last_modified_by_user`, `incident_type`.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreateIncidentNotificationTemplate



Creates a new incident notification template.

**Parameters**

-   **notification\_content\_body** (`string`, required) The body content for the notification template, describing the detailed message of the notification.
-   **notification\_subject** (`string`, required) The subject line for the notification template. This sets the subject of the template being created.
-   **notification\_template\_category** (`string`, required) The category of the notification template.
-   **notification\_template\_name** (`string`, required) The name for the notification template to be created.
-   **resource\_type\_notification\_template** (`string`, required) Specify the resource type for notification templates, which should be ‘notification\_templates’.
-   **incident\_type\_id** (`string`, optional) The ID of the incident type to associate with the notification template.
-   **incident\_type\_resource\_type** (`string`, optional) The resource type for the incident, which should be ‘incident\_types’.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteIncidentNotificationTemplate



Deletes a notification template by its ID.

**Parameters**

-   **notification\_template\_id** (`string`, required) The unique ID of the incident notification template to be deleted.
-   **relationships\_to\_include** (`string`, optional) Comma-separated list of relationships to include. Options: `created_by_user`, `last_modified_by_user`, `incident_type`.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetIncidentNotificationTemplate



Retrieve a specific incident notification template by ID.

**Parameters**

-   **template\_id** (`string`, required) The ID of the notification template to retrieve from Datadog.
-   **include\_relationships** (`string`, optional) Comma-separated list of relationships to include. Supported values: `created_by_user`, `last_modified_by_user`, `incident_type`.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateNotificationTemplate



Update attributes of a notification template.

**Parameters**

-   **notification\_template\_id** (`string`, required) The unique identifier of the notification template to update.
-   **notification\_template\_resource\_type** (`string`, required) Specifies the type of the notification template resource. Must be ‘notification\_templates’.
-   **template\_id** (`string`, required) The unique identifier of the notification template to be updated.
-   **notification\_template\_category** (`string`, optional) The category of the notification template to update.
-   **notification\_template\_content** (`string`, optional) The content body of the notification template to be updated.
-   **notification\_template\_name** (`string`, optional) The name of the notification template to update in Datadog.
-   **notification\_template\_subject** (`string`, optional) The subject line of the notification template to be updated in Datadog.
-   **relationships\_to\_include** (`string`, optional) Comma-separated list of relationships to include. Valid values: `created_by_user`, `last_modified_by_user`, `incident_type`.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetIncidentTypes



Retrieve all incident types from Datadog.

**Parameters**

-   **include\_deleted** (`boolean`, optional) Include deleted incident types in the response when set to true.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreateIncidentType



Create a new incident type in Datadog.

**Parameters**

-   **incident\_type\_name** (`string`, required) The name of the incident type to be created in Datadog.
-   **creator\_user\_id** (`string`, optional) A unique ID representing the user who created the incident type.
-   **incident\_creation\_timestamp** (`string`, optional) Timestamp indicating when the incident type was created. Format should be ISO 8601.
-   **incident\_title\_prefix** (`string`, optional) The string prepended to the incident title throughout the Datadog app.
-   **incident\_type\_description** (`string`, optional) Text that describes the incident type. Provide a clear, concise explanation to aid in management and identification.
-   **incident\_type\_resource\_type** (`string`, optional) Specifies the incident type resource type. Must be ‘incident\_types’.
-   **last\_modified\_timestamp** (`string`, optional) Timestamp indicating when the incident type was last modified. Use ISO 8601 format, e.g., ‘2023-10-01T14:30:00Z’.
-   **last\_modified\_user\_id** (`string`, optional) Unique identifier for the user who last modified the incident type.
-   **set\_as\_default\_incident\_type** (`boolean`, optional) Set to true to make this the default incident type if no type is specified during incident creation.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteIncidentType



Deletes a specified incident type from Datadog configuration.

**Parameters**

-   **incident\_type\_uuid** (`string`, required) The unique identifier (UUID) of the incident type to be deleted in Datadog.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetIncidentTypeDetails



Retrieve details of a specific incident type.

**Parameters**

-   **incident\_type\_uuid** (`string`, required) The UUID of the specific incident type to retrieve details for.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateIncidentType



Update the type of a specific incident in Datadog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **incident\_type\_uuid** (`string`, optional) The UUID representing the incident type to be updated in Datadog. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.SearchDatadogIncidents



Search for incidents in Datadog by query.

**Parameters**

-   **incident\_query** (`string`, required) Query to determine which incidents to return. Use facets joined by `AND` and multiple values by `OR`, e.g., `state:active AND severity:(SEV-2 OR SEV-1)`.
-   **include\_related\_objects** (`string`, optional) Specifies which types of related objects (‘users’, ‘attachments’) should be included in the response.
-   **page\_offset** (`integer`, optional) The starting position offset for returning incidents. Use an integer value.
-   **page\_size** (`integer`, optional) Specify the number of incidents to return per page. The maximum allowed value is 100.
-   **sort\_order** (`string`, optional) Defines the order of returned incidents. Use ‘created’ for ascending and ‘-created’ for descending.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteIncident



Deletes an existing incident from the organization.

**Parameters**

-   **incident\_uuid** (`string`, required) The unique identifier (UUID) of the incident to delete.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetIncidentDetails



Retrieve details of a specific incident using its ID.

**Parameters**

-   **incident\_uuid** (`string`, required) The UUID of the incident to retrieve its details.
-   **include\_related\_objects** (`array[string]`, optional) Specify related object types to include in the response, such as users, logs, etc.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateIncident



Partially update an incident’s details.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **incident\_uuid** (`string`, optional) The unique identifier (UUID) for the incident to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **include\_related\_objects** (`array[string]`, optional) List of related object types to include in the response, such as ‘users’, ‘comments’, etc. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetIncidentAttachments



Retrieve all attachments for a specified incident.

**Parameters**

-   **incident\_uuid** (`string`, required) The unique identifier (UUID) of the incident whose attachments are to be retrieved.
-   **attachment\_types\_to\_include** (`array[string]`, optional) List the types of attachments to include in the response. Each type should be a string.
-   **include\_related\_objects** (`array[string]`, optional) A list of related object types to include in the response, such as ‘user’, ‘tags’.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ManageIncidentAttachments



Manage attachments for a specific incident in bulk.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **incident\_uuid** (`string`, optional) The UUID of the incident to manage its attachments. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **related\_objects\_inclusion** (`array[string]`, optional) List of related object types to include in the response (e.g., comments, attachments). Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetIncidentImpacts



Retrieve all impacts for a specified incident.

**Parameters**

-   **incident\_uuid** (`string`, required) The unique UUID of the incident to retrieve impacts for.
-   **include\_related\_resources** (`array[string]`, optional) Specify which related resources to include in the response as an array of strings.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreateIncidentImpact



Create an impact for a specific incident.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **incident\_uuid** (`string`, optional) The unique identifier (UUID) for the incident. This is required to log impact details for the specified incident. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **included\_resources** (`array[string]`, optional) List of related resources to include in the response, such as ‘users’ or ‘details’. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteIncidentImpact



Delete a specific incident impact by ID.

**Parameters**

-   **incident\_id** (`string`, required) The UUID of the incident to be deleted. Required for identifying the specific incident.
-   **incident\_impact\_uuid** (`string`, required) The UUID of the incident impact to be deleted. This is required to identify which specific impact to remove.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetIncidentIntegrations



Retrieve integration metadata for a specific incident.

**Parameters**

-   **incident\_uuid** (`string`, required) The unique UUID of the incident to retrieve integration metadata.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreateIncidentIntegration



Create incident integration metadata for an incident.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **incident\_uuid** (`string`, optional) The unique identifier (UUID) of the incident to create integration metadata for. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteIncidentIntegrationMetadata



Remove an incident integration metadata entry.

**Parameters**

-   **incident\_integration\_metadata\_uuid** (`string`, required) The UUID of the incident integration metadata to be deleted.
-   **incident\_uuid** (`string`, required) The UUID of the incident you want to delete integration metadata for.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetIncidentIntegrationDetails



Fetches details of incident integration metadata.

**Parameters**

-   **incident\_integration\_metadata\_uuid** (`string`, required) The UUID of the incident integration metadata required to fetch its details.
-   **incident\_uuid** (`string`, required) The UUID of the incident in Datadog for which to obtain integration metadata.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateIncidentIntegration



Update incident integration metadata in Datadog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **incident\_uuid** (`string`, optional) The UUID of the incident. This is a unique identifier used to specify which incident to update the integration metadata for. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **integration\_metadata\_uuid** (`string`, optional) The UUID of the incident integration metadata to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListIncidentTodos



Retrieve all todos for a specified incident.

**Parameters**

-   **incident\_uuid** (`string`, required) The unique identifier (UUID) of the incident for which to retrieve todos.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreateIncidentTodo



Create a task within an incident in Datadog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **incident\_uuid** (`string`, optional) The UUID of the incident for which the to-do is being created. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteIncidentTodo



Delete a specified incident todo in Datadog.

**Parameters**

-   **incident\_todo\_uuid** (`string`, required) The unique UUID for the incident todo to be deleted.
-   **incident\_uuid** (`string`, required) The unique identifier (UUID) of the incident to which the todo belongs. This is necessary to specify the incident context.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetIncidentTodoDetails



Retrieve details of an incident todo item from Datadog.

**Parameters**

-   **incident\_todo\_uuid** (`string`, required) The UUID of the incident todo to fetch details for. This is essential for identifying the specific todo item linked to an incident.
-   **incident\_uuid** (`string`, required) The UUID of the incident to get the todo details for.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateIncidentTodo



Update a specific incident todo in Datadog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **incident\_uuid** (`string`, optional) The unique identifier (UUID) of the incident to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **incident\_todo\_uuid** (`string`, optional) The unique identifier (UUID) of the incident todo to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListAwsAccounts



Retrieve AWS account integration configurations.

**Parameters**

-   **filter\_by\_aws\_account\_id** (`string`, optional) Optional parameter to filter AWS accounts by their ID. Provide a specific AWS Account ID to get its integration config. If omitted, configurations for all accounts are returned.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreateAwsAccountIntegration



Create a new AWS Account Integration Config in Datadog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteAwsAccountConfig



Delete an AWS account integration by config ID.

**Parameters**

-   **aws\_account\_configuration\_id** (`string`, required) Unique Datadog ID for the AWS Account Integration Config. Obtain this ID via the ‘List all AWS integrations’ Datadog endpoint.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetAwsAccountIntegrationConfig



Retrieve AWS Account Integration Config by ID.

**Parameters**

-   **aws\_account\_integration\_config\_id** (`string`, required) Unique Datadog ID of the AWS Account Integration Config. Obtain it using the List all AWS integrations endpoint.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateAwsAccountIntegration



Update an AWS Account Integration configuration.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **aws\_account\_integration\_config\_id** (`string`, optional) Unique Datadog ID for the AWS Account Integration Config. Retrieve using the List all AWS integrations endpoint and query by AWS Account ID. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetAwsCloudwatchNamespaces



Retrieve available AWS CloudWatch namespaces for Datadog integration.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GenerateAwsExternalId



Generate a new external ID for AWS authentication.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.FetchAwsIntegrationPermissions



Retrieve AWS IAM permissions for Datadog integration.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetAwsIamPermissions



Get required AWS IAM permissions for resource collection.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetAwsIntegrationIamPermissions



Fetch standard AWS IAM permissions for integration.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListAwsLogsServices



Retrieve AWS services for logging to Datadog.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListGcpStsAccounts



Retrieve all GCP STS-enabled service accounts from Datadog.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreateGcpStsAccount



Create a new GCP STS account entry in Datadog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteGcpStsAccount



Delete an STS-enabled GCP account in Datadog.

**Parameters**

-   **gcp\_sts\_account\_id** (`string`, required) The unique ID of the GCP STS-enabled service account to delete from Datadog.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateGcpStsAccount



Update an STS-enabled GCP service account configuration.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **service\_account\_id** (`string`, optional) Unique ID of your GCP STS-enabled service account to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetGcpStsDelegate



Retrieve the Datadog-GCP STS delegate account configuration.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreateDatadogGcpPrincipal



Create a Datadog GCP principal.

**Parameters**

-   **delegate\_service\_account\_data** (`json`, optional) JSON object containing details for creating a delegate service account within Datadog. Include necessary account parameters.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetDatadogChannelInfo



Retrieve channel ID details for Datadog MS Teams integration.

**Parameters**

-   **datadog\_channel\_name** (`string`, required) The name of the channel in the Datadog Microsoft Teams integration. Required to retrieve channel details.
-   **team\_name** (`string`, required) Specify the name of the team for which you want to retrieve channel ID details in the Datadog Microsoft Teams integration.
-   **tenant\_name** (`string`, required) The name of the tenant for which you want to get the channel information in Datadog’s Microsoft Teams integration.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListTenantBasedHandles



Retrieve Datadog’s tenant-based handles for MS Teams integration.

**Parameters**

-   **tenant\_handle\_name** (`string`, optional) The name of your tenant-based handle in the Datadog Microsoft Teams integration.
-   **tenant\_identifier** (`string`, optional) The ID of your tenant in Datadog to retrieve handles for MS Teams integration.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreateTenantBasedHandle



Create a tenant-based handle in Datadog for Teams.

**Parameters**

-   **channel\_id** (`string`, required) ID of the Microsoft Teams channel to associate with the tenant-based handle.
-   **handle\_name** (`string`, required) The name for the tenant-based handle you wish to create in the Datadog Microsoft Teams integration.
-   **team\_id** (`string`, required) The ID of the Microsoft Teams team to associate with the Datadog handle.
-   **tenant\_id** (`string`, required) The unique identifier for the tenant in the Datadog Microsoft Teams integration.
-   **resource\_type** (`string`, optional) Specifies the resource type as ‘tenant-based-handle’.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteMsTeamsTenantHandle



Delete a tenant-based handle from Datadog’s Microsoft Teams integration.

**Parameters**

-   **tenant\_handle\_id** (`string`, required) The unique identifier for the tenant-based handle to be deleted from the Microsoft Teams integration.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetTeamsIntegrationInfo



Retrieve tenant, team, and channel info for a handle.

**Parameters**

-   **tenant\_handle\_id** (`string`, required) The tenant-based handle ID for the Microsoft Teams integration used to retrieve tenant, team, and channel information.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateMsTeamsTenantHandle



Update a Microsoft Teams tenant-based handle in Datadog.

**Parameters**

-   **tenant\_handle\_id** (`string`, required) The unique ID of the tenant-based handle to update in Datadog.
-   **channel\_id** (`string`, optional) The ID of the Microsoft Teams channel to update for the tenant-based handle.
-   **team\_id** (`string`, optional) The Microsoft Teams Team ID for the tenant-based handle. Required for updating handle configurations.
-   **tenant\_handle\_name** (`string`, optional) Tenant-based handle name for the Microsoft Teams integration in Datadog. This specifies the handle’s identifier within the configuration.
-   **tenant\_handle\_resource\_type** (`string`, optional) Specifies the resource type for the tenant-based handle, usually ‘tenant-based-handle’.
-   **tenant\_id** (`string`, optional) The unique identifier for the tenant. Used to specify which tenant’s handle is being updated.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListMsTeamsWorkflowWebhooks



Retrieve all Microsoft Teams workflow webhook handles from Datadog.

**Parameters**

-   **webhook\_handle\_name** (`string`, optional) Specifies the name of your Workflows webhook handle to filter the list.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreateWorkflowWebhookHandle



Create a webhook handle for Datadog Microsoft Teams integration.

**Parameters**

-   **webhook\_handle\_name** (`string`, required) Name of the Workflows Webhook handle for Datadog Microsoft Teams integration.
-   **webhook\_url** (`string`, required) The URL for the Workflows Webhook in the Datadog Microsoft Teams integration.
-   **webhook\_handle\_resource\_type** (`string`, optional) Specifies the resource type for the Workflows webhook handle. Must be ‘workflows-webhook-handle’.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteWorkflowWebhookHandle



Delete a Workflows webhook handle in Datadog.

**Parameters**

-   **webhook\_handle\_id** (`string`, required) The unique identifier of the Workflows webhook handle to delete.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetMsTeamsWorkflowWebhookName



Retrieve the name of a MS Teams workflow webhook handle.

**Parameters**

-   **workflow\_webhook\_handle\_id** (`string`, required) The ID of the Workflows webhook handle to retrieve the name for. This is specific to the Datadog Microsoft Teams integration.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateWorkflowsWebhookHandle



Update a webhook handle in Datadog’s Microsoft Teams integration.

**Parameters**

-   **webhook\_handle\_id** (`string`, required) The unique identifier for the Workflows webhook handle to be updated.
-   **webhook\_handle\_name** (`string`, optional) The name of the Workflows Webhook handle to be updated. This should be a descriptive string identifying the webhook.
-   **webhook\_handle\_resource\_type** (`string`, optional) Specifies the Workflows webhook handle resource type. Use ‘workflows-webhook-handle’.
-   **workflows\_webhook\_url** (`string`, optional) The URL for the Workflows Webhook. Specify the endpoint to send requests to.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListOpsgenieServices



Retrieve all services from Datadog Opsgenie integration.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreateOpsgenieService



Create a new Opsgenie service in Datadog integration.

**Parameters**

-   **opsgenie\_api\_key** (`string`, required) The API key required to authenticate your Opsgenie service within Datadog. This key must be a valid string associated with your Opsgenie account.
-   **opsgenie\_service\_name** (`string`, required) The name for the Opsgenie service to be created in the Datadog integration.
-   **opsgenie\_service\_region** (`string`, required) The region for the Opsgenie service. Choose from ‘us’, ‘eu’, or ‘custom’.
-   **custom\_region\_url** (`string`, optional) The custom URL for a specific Opsgenie region. Used to connect to a custom region.
-   **opsgenie\_service\_resource\_type** (`string`, optional) Specify the Opsgenie service resource type, which must be ‘opsgenie-service’.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteOpsgenieService



Delete a service in Datadog’s Opsgenie integration.

**Parameters**

-   **service\_uuid** (`string`, required) The UUID of the service to be deleted in the Datadog Opsgenie integration.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetOpsgenieService



Retrieve a single Opsgenie service from Datadog.

**Parameters**

-   **service\_uuid** (`string`, required) The UUID of the Datadog Opsgenie service to retrieve.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateOpsgenieService



Update a service in the Datadog Opsgenie integration.

**Parameters**

-   **opsgenie\_service\_id** (`string`, required) The unique identifier of the Opsgenie service to be updated.
-   **service\_uuid** (`string`, required) The UUID of the service to be updated in the Datadog Opsgenie integration.
-   **custom\_region\_url** (`string`, optional) The custom URL for a specific Opsgenie region. Specify if using a custom region.
-   **opsgenie\_api\_key** (`string`, optional) The API key for your Opsgenie service, needed to authenticate the update request.
-   **opsgenie\_service\_name** (`string`, optional) The name for the Opsgenie service to update. It should uniquely identify the service within your Opsgenie account.
-   **opsgenie\_service\_region** (`string`, optional) Specify the region for the Opsgenie service. Allowed values are ‘us’, ‘eu’, or ‘custom’.
-   **opsgenie\_service\_resource\_type** (`string`, optional) Specify as ‘opsgenie-service’ to denote the Opsgenie service resource type.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListCloudflareAccounts



Retrieve a list of Cloudflare accounts from Datadog.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreateCloudflareAccount



Create a Cloudflare account through Datadog integration.

**Parameters**

-   **cloudflare\_account\_name** (`string`, required) The name for the Cloudflare account to be created.
-   **cloudflare\_api\_key** (`string`, required) The API key or token for the Cloudflare account required to authenticate and connect with the Cloudflare service.
-   **cloudflare\_account\_email** (`string`, optional) The email associated with the Cloudflare account. Required if using an API key instead of a token.
-   **json\_api\_type** (`string`, optional) Specifies the JSON:API type, must be ‘cloudflare-accounts’.
-   **resources\_allowlist** (`array[string]`, optional) List of resources such as ‘web’, ‘dns’, ‘lb’, or ‘worker’ to restrict metric pulling.
-   **zone\_allowlist** (`array[string]`, optional) A list of zones for restricting metric data collection.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteCloudflareAccount



Delete a Cloudflare account via Datadog integration.

**Parameters**

-   **cloudflare\_account\_id** (`string`, required) The ID of the Cloudflare account to delete from Datadog. This should be a string matching the account ID format.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetCloudflareAccount



Retrieve details of a Cloudflare account via Datadog.

**Parameters**

-   **cloudflare\_account\_id** (`string`, required) The unique identifier for the Cloudflare account to retrieve details from. This is required to access account-specific information.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateCloudflareAccount



Update details of a Cloudflare account.

**Parameters**

-   **cloudflare\_account\_id** (`string`, required) The unique identifier for the Cloudflare account to be updated.
-   **allowed\_resource\_types\_for\_metrics** (`array[string]`, optional) An array of resource types (‘web’, ‘dns’, ‘lb’, ‘worker’) to allow for metrics collection.
-   **cloudflare\_account\_email** (`string`, optional) The email associated with the Cloudflare account. Required if using an API key instead of a token.
-   **cloudflare\_account\_name** (`string`, optional) The name of the Cloudflare account to be updated.
-   **cloudflare\_api\_key** (`string`, optional) The API key for the Cloudflare account, required for authentication.
-   **json\_api\_type** (`string`, optional) The JSON:API type for this API. Always use `cloudflare-accounts`.
-   **zone\_allowlist** (`array[string]`, optional) A list of zone identifiers to restrict which metrics can be pulled for Cloudflare.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListConfluentAccounts



Retrieve a list of Confluent accounts.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreateConfluentAccount



Create a Confluent account on Datadog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteConfluentAccount



Delete a Confluent account using the account ID.

**Parameters**

-   **confluent\_account\_id** (`string`, required) The unique identifier for the Confluent Account to be deleted.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetConfluentAccountInfo



Retrieve Confluent account information by account ID.

**Parameters**

-   **confluent\_account\_id** (`string`, required) The unique identifier for the Confluent account to retrieve details from.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateConfluentAccount



Updates the Confluent account details.

**Parameters**

-   **confluent\_account\_id** (`string`, required) The unique ID of the Confluent account to be updated.
-   **confluent\_api\_key** (`string`, required) Provide the API key associated with your Confluent account.
-   **confluent\_api\_secret** (`string`, required) The API secret for the Confluent account. Required to authenticate and update the account details.
-   **api\_type** (`string`, optional) Set this to `confluent-cloud-accounts` to specify the JSON:API type for the update request.
-   **tags\_list** (`array[string]`, optional) A list of tag strings for the account. Use single keys or key-value pairs separated by a colon.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetConfluentResource



Retrieve Confluent resource details for a specific account ID.

**Parameters**

-   **confluent\_account\_id** (`string`, required) Enter the Confluent Account ID to retrieve the resource details linked to this account.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreateConfluentResource



Create a Confluent resource for a specified account.

**Parameters**

-   **confluent\_account\_id** (`string`, required) The ID of the Confluent account for which to create the resource.
-   **confluent\_resource\_id** (`string`, required) The unique ID for the Confluent resource to be created or managed.
-   **resource\_type** (`string`, required) The type of Confluent resource to create: `kafka`, `connector`, `ksql`, or `schema_registry`.
-   **enable\_custom\_metrics** (`boolean`, optional) Set to true to enable the `custom.consumer_lag_offset` metric with extra tags, false to disable.
-   **json\_api\_request\_type** (`string`, optional) The JSON:API type for this request. Must be ‘confluent-cloud-resources’.
-   **resource\_tags** (`array[string]`, optional) A list of tag strings for the Confluent resource. Use key-value pairs separated by colons or single keys.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteConfluentResource



Deletes a specified Confluent resource in a Datadog account.

**Parameters**

-   **confluent\_account\_id** (`string`, required) The unique identifier for the Confluent account linked to the resource to be deleted.
-   **confluent\_resource\_id** (`string`, required) A string representing the unique ID of the Confluent resource to be deleted.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.FetchConfluentResource



Retrieve a Confluent resource using account and resource IDs.

**Parameters**

-   **confluent\_account\_id** (`string`, required) The ID of the Confluent account to retrieve the resource for. This should be a string value representing the account identifier.
-   **confluent\_resource\_id** (`string`, required) The ID of the Confluent resource associated with the specified account. Provide this to retrieve the resource details.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateConfluentResource



Update a Confluent resource linked to a specified account.

**Parameters**

-   **confluent\_account\_id** (`string`, required) The ID of the Confluent account associated with the resource to be updated.
-   **confluent\_resource\_id** (`string`, required) The unique identifier for the Confluent resource to be updated.
-   **resource\_id** (`string`, required) The ID of the Confluent account resource to update.
-   **resource\_type** (`string`, required) Specifies the resource type of the Confluent resource. Valid values are ‘kafka’, ‘connector’, ‘ksql’, or ‘schema\_registry’.
-   **enable\_custom\_metrics** (`boolean`, optional) Set to true to enable the `custom.consumer_lag_offset` metric which includes extra metric tags.
-   **resource\_data\_type** (`string`, optional) The JSON:API type for this request. Must be ‘confluent-cloud-resources’.
-   **tags\_list** (`array[string]`, optional) A list of tags for the resource. Each tag can be a single key or a key-value pair separated by a colon.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListFastlyAccounts



Retrieve a list of Fastly accounts integrated with Datadog.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreateFastlyAccount



Create a new Fastly account through Datadog integration.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteFastlyAccount



Deletes a specified Fastly account integration.

**Parameters**

-   **fastly\_account\_id** (`string`, required) The unique identifier of the Fastly account to delete. Required for the deletion process.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetFastlyAccountInfo



Retrieves detailed information for a specific Fastly account.

**Parameters**

-   **fastly\_account\_id** (`string`, required) The unique identifier for the Fastly account to retrieve information about.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateFastlyAccount



Updates a Fastly account via Datadog integration.

**Parameters**

-   **fastly\_account\_id** (`string`, required) The unique identifier for the Fastly account to update.
-   **fastly\_account\_name** (`string`, optional) The name of the Fastly account to update.
-   **fastly\_api\_key** (`string`, optional) The API key for the Fastly account to be updated.
-   **json\_api\_type** (`string`, optional) Specifies the type for the Fastly account API. Must be ‘fastly-accounts’.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListFastlyServices



Retrieve Fastly services for a specific account.

**Parameters**

-   **fastly\_account\_id** (`string`, required) The unique identifier for a Fastly account to retrieve its services.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreateFastlyService



Create a Fastly service for a specific account in Datadog.

**Parameters**

-   **fastly\_account\_id** (`string`, required) Provide the Fastly Account ID to create the service under.
-   **fastly\_service\_id** (`string`, required) The ID of the Fastly service to create. Provide a valid Fastly service ID.
-   **fastly\_service\_tags** (`array[string]`, optional) A list of tags for the Fastly service to help categorize and organize the service.
-   **jsonapi\_type\_for\_fastly\_service** (`string`, optional) The JSON:API type, always set to ‘fastly-services’, for creating a Fastly service.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteFastlyService



Delete a Fastly service for an account.

**Parameters**

-   **fastly\_account\_id** (`string`, required) The ID of the Fastly account associated with the service to be deleted.
-   **fastly\_service\_id** (`string`, required) The unique identifier for the Fastly service to delete. Required to specify the exact service.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetFastlyServiceInfo



Retrieve Fastly service details for a specific account.

**Parameters**

-   **fastly\_account\_id** (`string`, required) The unique ID of the Fastly account for which to retrieve service details.
-   **fastly\_service\_id** (`string`, required) The ID of the Fastly service to retrieve details for, linked to the specified account.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateFastlyService



Update a Fastly service for an account in Datadog.

**Parameters**

-   **fastly\_account\_id** (`string`, required) The unique ID of the Fastly account to be updated.
-   **fastly\_service\_id** (`string`, required) Provide the Fastly Service ID to specify which service to update.
-   **fastly\_service\_identifier** (`string`, required) The ID of the Fastly service to be updated.
-   **fastly\_service\_json\_api\_type** (`string`, optional) The JSON:API type for this API, which should always be `fastly-services`.
-   **fastly\_service\_tags** (`array[string]`, optional) A list of tags to update the Fastly service with. Each tag should be a string.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListOktaAccounts



Retrieve a list of Okta accounts linked to Datadog.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreateOktaAccount



Create an Okta account via Datadog integration.

**Parameters**

-   **okta\_account\_domain** (`string`, required) The domain of the Okta account to be created.
-   **okta\_account\_name** (`string`, required) The name of the Okta account to be created via Datadog API integration.
-   **okta\_auth\_method** (`string`, required) Specify the authorization method for the Okta account.
-   **client\_secret** (`string`, optional) The client secret associated with the Okta app integration. This is required for authentication.
-   **okta\_account\_id** (`string`, optional) The ID of the Okta account, which is a UUID hash of the account name.
-   **okta\_account\_type** (`string`, optional) Specifies the type of account for the Okta account. The value should be ‘okta-accounts’.
-   **okta\_api\_key** (`string`, optional) The API key for the Okta account integration. This key is used for authenticating the account with Datadog.
-   **okta\_client\_id** (`string`, optional) The Client ID for the Okta app integration, necessary for the account setup.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteOktaAccount



Delete an Okta account from Datadog integration.

**Parameters**

-   **okta\_account\_id** (`string`, required) A string representing the ID of the Okta account to be deleted.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetOktaAccountInfo



Retrieve detailed information about a specific Okta account.

**Parameters**

-   **okta\_account\_id** (`string`, required) The unique identifier for the Okta account to retrieve information for.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateOktaAccount



Update details of an existing Okta account.

**Parameters**

-   **account\_id** (`string`, required) The unique identifier for the Okta account to be updated.
-   **account\_type** (`string`, optional) Specify the type of the Okta account. Must be ‘okta-accounts’.
-   **authorization\_method** (`string`, optional) Specify the authorization method for the Okta account. This is a required string value.
-   **okta\_account\_api\_key** (`string`, optional) The API key for authenticating the Okta account.
-   **okta\_client\_id** (`string`, optional) The Client ID of the Okta app integration to update.
-   **okta\_client\_secret** (`string`, optional) The client secret for the Okta app integration to be updated. Ensure this is kept secure.
-   **okta\_domain** (`string`, optional) The domain associated with the Okta account to update.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetIpAllowlist



Retrieve the IP allowlist and its status.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateIpAllowlist



Edit and toggle the IP allowlist settings in Datadog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.AggregateLogs



Aggregate logs to compute metrics and timeseries.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetCurrentArchiveOrder



Retrieve the current order of logs archives.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateLogsArchiveOrder



Updates the order of log archives in Datadog.

**Parameters**

-   **archive\_ids\_order** (`array[string]`, optional) An ordered list of `<ARCHIVE_ID>` strings to define the new archives order in Datadog.
-   **archive\_order\_type** (`string`, optional) Specifies the type for the archive order definition. Must be ‘archive\_order’.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListLogsArchives



Get the list of configured logs archives.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreateLogsArchive



Create an archive of logs in your organization.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteLogsArchive



Delete a specific logs archive from your organization.

**Parameters**

-   **archive\_id** (`string`, required) The unique identifier for the archive to be deleted from Datadog.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetSpecificLogsArchive



Retrieve a specific logs archive from Datadog.

**Parameters**

-   **archive\_id** (`string`, required) The unique identifier for the logs archive to retrieve from Datadog.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateArchiveConfiguration



Replace an existing archive configuration in Datadog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **archive\_identifier** (`string`, optional) The unique identifier for the archive you wish to update in Datadog. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.RemoveRoleFromArchive



Removes a role from a specified archive in Datadog.

**Parameters**

-   **archive\_id** (`string`, required) The ID of the archive from which the role will be removed.
-   **role\_type** (`string`, optional) The type of role to be removed, typically set to ‘roles’.
-   **role\_unique\_identifier** (`string`, optional) The unique identifier of the role to be removed from the archive.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetArchiveReadRoles



Retrieve roles with read access to a specific archive.

**Parameters**

-   **archive\_identifier** (`string`, required) The unique identifier for the archive to retrieve read access roles from.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.AddReadRoleToArchive



Adds a read role to a specified archive.

**Parameters**

-   **archive\_id** (`string`, required) The unique identifier for the archive to which a read role will be added. This is required to specify the target archive for access management.
-   **role\_type** (`string`, optional) The type of role to be added. Must be ‘roles’.
-   **role\_unique\_identifier** (`string`, optional) The unique identifier for the role to be added to the archive.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListCustomLogDestinations



Retrieve configured custom log destinations from Datadog.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreateCustomLogDestination



Create a custom log destination in Datadog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteCustomLogDestination



Delete a specific custom log destination.

**Parameters**

-   **custom\_destination\_id** (`string`, required) The unique identifier for the custom log destination to be deleted.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetCustomDestination



Retrieve details of a specific custom log destination.

**Parameters**

-   **custom\_destination\_id** (`string`, required) The ID of the custom destination to retrieve details from your organization.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateLogsCustomDestination



Update specific fields of a custom logs destination.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **custom\_destination\_id** (`string`, optional) The unique identifier for the custom logs destination to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetLogsMetricsList



Retrieve a list of log-based metrics and their definitions.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreateLogBasedMetric



Create a metric from your ingested logs.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteLogMetric



Delete a specific log-based metric from your organization.

**Parameters**

-   **log\_metric\_name** (`string`, required) The name of the log-based metric you want to delete.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetLogBasedMetric



Retrieve a specific log-based metric from Datadog.

**Parameters**

-   **log\_based\_metric\_name** (`string`, required) The name of the log-based metric to retrieve from Datadog.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateLogBasedMetric



Update a specific log-based metric in your organization.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **log\_metric\_name** (`string`, optional) The name of the log-based metric to be updated. It specifies which metric to modify in your organization. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListRestrictionQueries



Retrieve all restriction queries with their details.

**Parameters**

-   **page\_number** (`integer`, optional) The specific page number of results to return. Useful for paginating through result sets.
-   **page\_size** (`integer`, optional) The number of results to return per page. Maximum value is 100.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreateDatadogRestrictionQuery



Create a new restriction query in Datadog.

**Parameters**

-   **restriction\_query** (`string`, optional) A string representing the restriction query to manage log access and configurations.
-   **restriction\_query\_resource\_type** (`string`, optional) Specifies the type of restriction query resource. Must be ‘logs\_restriction\_queries’.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetRoleRestrictionQuery



Retrieve the restriction query for a specific role.

**Parameters**

-   **role\_id** (`string`, required) The unique identifier for the role whose restriction query you want to retrieve.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetUserRestrictionQueries



Retrieve restriction queries for a specific user.

**Parameters**

-   **user\_identifier** (`string`, required) The unique ID of the user for retrieving restriction queries.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteRestrictionQuery



Deletes a restriction query from Datadog logs configuration.

**Parameters**

-   **restriction\_query\_id** (`string`, required) The unique ID of the restriction query to be deleted from Datadog.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetRestrictionQuery



Retrieve a restriction query by its ID within Datadog.

**Parameters**

-   **restriction\_query\_id** (`string`, required) The unique identifier for the restriction query to retrieve its details.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.EditRestrictionQuery



Edit an existing restriction query in Datadog.

**Parameters**

-   **restriction\_query\_id** (`string`, required) The ID of the restriction query to be edited.
-   **restriction\_query\_resource\_type** (`string`, optional) The type of restriction query resource. Must be ‘logs\_restriction\_queries’.
-   **restriction\_query\_string** (`string`, optional) The restriction query string to update for the restriction query in Datadog.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.RemoveRoleFromRestrictionQuery



Removes a role from a Datadog restriction query.

**Parameters**

-   **restriction\_query\_id** (`string`, required) The ID of the restriction query to remove the role from.
-   **role\_type** (`string`, optional) The type of the role, must be ‘roles’.
-   **role\_unique\_identifier** (`string`, optional) The unique identifier of the role to be removed from the restriction query.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetRestrictionQueryRoles



Retrieve roles associated with a specific restriction query.

**Parameters**

-   **restriction\_query\_id** (`string`, required) The unique identifier of the restriction query to fetch associated roles.
-   **page\_number** (`integer`, optional) The specific page number to return in the response. Use this to navigate through paginated results.
-   **page\_size** (`integer`, optional) Specify the number of results per page. The maximum allowed value is 100.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.AddRoleToRestrictionQuery



Adds a role to a restriction query for logs configuration.

**Parameters**

-   **restriction\_query\_id** (`string`, required) The ID of the restriction query to which a role will be added.
-   **role\_type** (`string`, optional) The type of the role, expected to be ‘roles’.
-   **role\_unique\_identifier** (`string`, optional) The unique identifier of the role to be added to the restriction query.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListLogsMatchingQuery



Retrieve logs that match a search query with pagination.

**Parameters**

-   **max\_timestamp\_for\_logs** (`string`, optional) Specify the maximum timestamp for the requested logs. This represents the latest time point for log retrieval.
-   **maximum\_logs\_in\_response** (`integer`, optional) Maximum number of logs to include in the response. Specify an integer value.
-   **minimum\_timestamp\_for\_logs** (`string`, optional) Specify the earliest timestamp for the logs to be retrieved. Use ISO 8601 format for the timestamp.
-   **pagination\_cursor** (`string`, optional) Cursor for pagination to retrieve the next set of log results. Use the cursor from the previous query to continue fetching results.
-   **search\_indexes** (`array[string]`, optional) Specify the indexes to search. Defaults to ’\*’ for all indexes.
-   **search\_query** (`string`, optional) Search query using logs syntax to filter specific logs from Datadog.
-   **sort\_order** (`string`, optional) Specify the order of logs in results: ‘timestamp’ for ascending or ‘-timestamp’ for descending.
-   **storage\_type** (`string`, optional) Specifies the storage type. Options are ‘indexes’, ‘online-archives’, or ‘flex’.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListLogs



Retrieve logs based on a search query with pagination.

**Parameters**

-   **indexes\_to\_search** (`array[string]`, optional) Specify the indexes to search. Defaults to \[’\*’\] for all indexes.
-   **max\_log\_time** (`string`, optional) The maximum time for the requested logs. Supports date math and regular timestamps (milliseconds).
-   **maximum\_logs\_in\_response** (`integer`, optional) Specifies the maximum number of logs to return in the response, allowing control over pagination size.
-   **minimum\_time** (`string`, optional) The minimum time for the requested logs, supports date math and regular timestamps (milliseconds).
-   **pagination\_cursor** (`string`, optional) Cursor for retrieving the next set of paginated log results from a previous query.
-   **query\_timezone** (`string`, optional) Specify the timezone as GMT, UTC, an offset (e.g., UTC+1), or a Timezone Database ID (e.g., America/New\_York).
-   **search\_query** (`string`, optional) The search query following Datadog’s log search syntax to filter logs.
-   **sort\_order** (`string`, optional) Defines how logs are sorted: ‘timestamp’ for ascending order and ‘-timestamp’ for descending order.
-   **storage\_type** (`string`, optional) Specify the storage type: “indexes”, “online-archives”, or “flex”.
-   **time\_offset\_seconds** (`integer`, optional) The time offset in seconds to apply to the log search query.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListMetricTagConfigurations



Retrieve all metrics configurable in Datadog’s Metrics Summary.

**Parameters**

-   **filter\_by\_query\_status** (`boolean`, optional) Filter custom metrics that have or have not been queried within the specified time window.
-   **filter\_metrics\_by\_tags** (`string`, optional) Filter metrics by tags using boolean/wildcard expressions; combine with queried filter only.
-   **filter\_metrics\_used\_in\_assets** (`boolean`, optional) Boolean to filter metrics used in dashboards, monitors, notebooks, and SLOs.
-   **filter\_tag\_configurations** (`string`, optional) Filter tag configurations by specified configured tags. Use string values representing specific criteria for filtering.
-   **include\_metrics\_with\_configured\_tags** (`boolean`, optional) Set to true to filter and include only custom metrics with configured tags.
-   **include\_percentile\_aggregations** (`boolean`, optional) Set to true to include distributions with additional percentile aggregations enabled. Set to false to exclude them.
-   **look\_back\_seconds** (`integer`, optional) The number of seconds to look back for applying a filter on tags or queried metrics. Defaults to 3600 seconds (1 hour) with a max of 2,592,000 seconds (30 days).
-   **max\_results\_per\_page** (`integer`, optional) Maximum number of metric configurations to return per page.
-   **metric\_type\_filter** (`string`, optional) Filter metrics by type. Options are ‘non\_distribution’ or ‘distribution’.
-   **pagination\_cursor** (`string`, optional) String to query the next page of metric results. Use ‘next\_cursor’ from the previous response. Null when all pages are retrieved.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteBulkTagsMetrics



Delete custom lists of queryable tag keys for metrics.

**Parameters**

-   **metric\_name\_prefix** (`string`, required) A text prefix to match against metric names for tag deletion.
-   **metric\_bulk\_configure\_tags\_resource** (`string`, optional) The identifier for the metric bulk configure tags resource, which should be ‘metric\_bulk\_configure\_tags’.
-   **notification\_emails** (`array[string]`, optional) A list of account emails to notify when the configuration is applied.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ConfigureBulkTagsForMetrics



Configure bulk tags for specified metrics in Datadog.

**Parameters**

-   **metric\_name\_prefix** (`string`, required) A text prefix used to match against metric names for bulk tags configuration.
-   **actively\_queried\_tags\_window\_seconds** (`number`, optional) Time window in seconds for configuring actively queried tags for matching metrics. Minimum is 1 second, maximum is 7,776,000 seconds (90 days).
-   **exclude\_configured\_tags** (`boolean`, optional) Set to true to exclude configured tags and include all other tags. Defaults to false.
-   **metric\_bulk\_configure\_tags\_resource** (`string`, optional) The resource identifier for configuring bulk tags for metrics. Must be set to ‘metric\_bulk\_configure\_tags’.
-   **notification\_emails** (`array[string]`, optional) A list of account emails to notify when the configuration is applied.
-   **override\_existing\_configurations** (`boolean`, optional) Set to true to override any existing configurations for the metric with the new tags. Defaults to true.
-   **tags\_to\_apply** (`array[string]`, optional) A list of tag names to apply to the metric configuration in Datadog.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListActiveMetricConfigurations



Retrieve active metric tags and aggregations for a given metric name.

**Parameters**

-   **metric\_name** (`string`, required) Specify the name of the metric to retrieve active tags and aggregations for.
-   **lookback\_seconds** (`integer`, optional) Number of seconds to look back from the current time. Defaults to 604800 seconds (1 week). Minimum is 7200 seconds (2 hours), and maximum is 2630000 seconds (1 month).

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListMetricTags



Retrieve indexed tags for a metric over the last hour.

**Parameters**

-   **metric\_name** (`string`, required) The name of the metric to retrieve indexed tag key-value pairs from over the past hour.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListMetricAssets



Retrieve assets associated with a specific metric.

**Parameters**

-   **metric\_name** (`string`, required) The specific name of the metric to retrieve associated assets for. This is essential for querying the correct data.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.EstimateMetricsOutput



Estimate cardinality of a metric with specific settings.

**Parameters**

-   **metric\_name** (`string`, required) Specifies the name of the metric for which to estimate cardinality.
-   **filtered\_tag\_keys** (`string`, optional) Filtered tag keys that the metric is configured to query with, specified as a string.
-   **ignore\_num\_aggregations** (`integer`, optional) This argument is deprecated and has no impact on volume estimation. It is ignored in the current tool implementation.
-   **include\_percentile\_aggregators** (`boolean`, optional) Boolean to estimate cardinality if distribution metrics have additional percentile aggregators.
-   **lookback\_hours** (`integer`, optional) Specify the number of hours to look back from the current time to estimate cardinality. Defaults to 0 if not provided.
-   **lookback\_timespan\_hours** (`integer`, optional) A window, in hours, from the lookback to estimate cardinality. Minimum is 1 hour.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetMetricTagCardinality



Retrieve cardinality details of tags for a specific metric.

**Parameters**

-   **metric\_name** (`string`, required) The name of the metric for which cardinality details of tags are to be retrieved.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteMetricTagConfiguration



Delete a metric’s tag configuration.

**Parameters**

-   **metric\_name** (`string`, required) The name of the metric whose tag configuration is to be deleted. Ensure the application key has the necessary permissions.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetMetricTagConfiguration



Retrieve the tag configuration for a specific metric.

**Parameters**

-   **metric\_name** (`string`, required) The name of the metric for which to retrieve the tag configuration in Datadog.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateMetricTagConfiguration



Update the tag configuration of a metric in Datadog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **metric\_name** (`string`, optional) Specify the name of the metric whose tag configuration you wish to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreateMetricTagConfiguration



Create queryable tag configurations for metrics.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **metric\_name** (`string`, optional) The name of the existing metric for which the tag configuration is to be created. This is required to identify the specific metric in Datadog. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListMetricVolumes



Retrieve distinct metric volumes by name.

**Parameters**

-   **metric\_name** (`string`, required) The name of the metric to retrieve volumes for.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetMonitorNotificationRules



Retrieve all monitor notification rules from Datadog.

**Parameters**

-   **filter\_criteria** (`string`, optional) JSON string to filter rules by text, tags, or recipients. Use keys: `text`, `tags`, `recipients`.
-   **include\_related\_resources** (`string`, optional) Specify related resources to include in the response, such as `created_by`. Use a comma-separated list.
-   **number\_of\_rules\_per\_page** (`integer`, optional) The number of rules to return per page. Defaults to 100 if not specified.
-   **sort\_order** (`string`, optional) String for sort order. Example: `name:asc`. Directions: `asc`, `desc`. Fields: `name`, `created_at`.
-   **starting\_page\_number** (`integer`, optional) The page number to begin pagination. Defaults to the first page if not specified.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreateMonitorNotificationRule



Creates a monitor notification rule in Datadog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteMonitorNotificationRule



Delete a monitor notification rule by ID.

**Parameters**

-   **monitor\_notification\_rule\_id** (`string`, required) The unique identifier for the monitor notification rule to delete in Datadog.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetMonitorNotificationRule



Retrieve a monitor notification rule by its ID.

**Parameters**

-   **monitor\_rule\_id** (`string`, required) ID of the monitor notification rule to fetch. This is required to retrieve specific rule details.
-   **include\_related\_resources** (`string`, optional) Comma-separated list of related resource paths to include in the response, such as `created_by`.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateMonitorNotificationRule



Updates a Datadog monitor notification rule.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **monitor\_notification\_rule\_id** (`string`, optional) ID of the monitor notification rule to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListMonitorConfigPolicies



Retrieve all monitor configuration policies.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreateMonitorConfigPolicy



Create a new monitor configuration policy in Datadog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteMonitorPolicy



Deletes a specific monitor configuration policy.

**Parameters**

-   **monitor\_policy\_id** (`string`, required) ID of the monitor configuration policy to be deleted.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetMonitorConfigurationPolicy



Retrieve a monitor’s configuration policy using its ID.

**Parameters**

-   **monitor\_policy\_id** (`string`, required) ID of the monitor configuration policy to retrieve details for.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.EditMonitorConfigPolicy



Edit an existing monitor configuration policy in Datadog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **monitor\_policy\_id** (`string`, optional) The ID of the monitor configuration policy to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetAllMonitorUserTemplates



Retrieve all monitor user templates from Datadog.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreateMonitorUserTemplate



Create a new monitor user template in Datadog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ValidateMonitorUserTemplate



Validate the structure and content of a monitor user template.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteMonitorUserTemplate



Deletes a monitor user template by its ID on Datadog.

**Parameters**

-   **monitor\_user\_template\_id** (`string`, required) ID of the monitor user template to be deleted in Datadog.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetMonitorUserTemplate



Retrieve a monitor user template by ID from Datadog.

**Parameters**

-   **template\_id** (`string`, required) The unique identifier for the specific monitor user template to retrieve.
-   **include\_all\_versions** (`boolean`, optional) Include all versions of the template in the response if true.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateMonitorUserTemplate



Creates a new version of a monitor user template in Datadog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **monitor\_user\_template\_id** (`string`, optional) ID of the monitor user template to update with a new version. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ValidateMonitorTemplate



Validate the structure and content of a monitor template update.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **monitor\_template\_id** (`string`, optional) ID of the monitor user template to be validated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListMonitorDowntimes



Retrieve active downtimes for a specified monitor.

**Parameters**

-   **monitor\_id** (`integer`, required) The ID of the monitor for which to retrieve active downtimes. This should be provided as an integer.
-   **maximum\_downtime\_count** (`integer`, optional) Specifies the maximum number of downtime entries to return in the response.
-   **pagination\_offset** (`integer`, optional) Specify the offset for the beginning of the returned page, to manage pagination.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetDeviceList



Retrieve a list of devices from Datadog.

**Parameters**

-   **filter\_by\_tag** (`string`, optional) Filter devices by a specified tag.
-   **page\_number** (`integer`, optional) Specific page number to return when fetching the devices list.
-   **page\_size** (`integer`, optional) Specify the size for a given page, with a maximum allowed value of 100.
-   **sort\_devices\_by** (`string`, optional) Specify the field by which to sort the devices list.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetDeviceDetails



Retrieve specific device details.

**Parameters**

-   **device\_id** (`string`, required) The unique identifier of the device to retrieve details for.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetDeviceInterfaces



Fetches the list of interfaces for a given device.

**Parameters**

-   **device\_identifier** (`string`, required) The unique ID of the device to retrieve interfaces for. Expected to be a string.
-   **include\_ip\_addresses** (`boolean`, optional) Specify true to include IP addresses of the interfaces, or false to exclude them.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetDeviceUserTags



Retrieve the list of tags for a specific device.

**Parameters**

-   **device\_identifier** (`string`, required) The unique identifier of the device to fetch tags for from Datadog.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateDeviceTags



Update the tags for a specified device.

**Parameters**

-   **device\_identifier** (`string`, required) The ID of the device for which tags are being updated.
-   **device\_id\_for\_tags** (`string`, optional) The ID of the device for which the tags will be updated.
-   **device\_tags** (`array[string]`, optional) A list of tags to update for the device. Each tag should be a string.
-   **resource\_type** (`string`, optional) The type of resource, always set to ‘tags’.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetAggregatedConnections



Retrieve all aggregated network connections from Datadog.

**Parameters**

-   **connection\_limit** (`integer`, optional) Set the number of connections to be returned, maximum 7500, default 100.
-   **end\_query\_window** (`integer`, optional) Unix timestamp for the end of the query window. Defaults to current time if not provided.
-   **filter\_by\_tags** (`string`, optional) Comma-separated list of tags to filter connections by for more targeted querying.
-   **group\_by\_fields** (`string`, optional) Comma-separated list of fields to group connections by, with a maximum of 10 fields.
-   **start\_time\_unix\_timestamp** (`integer`, optional) Unix timestamp for the start of the query window. Defaults to 15 minutes before `end_time_unix_timestamp` if not provided.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetAggregatedDnsTraffic



Retrieve all aggregated DNS traffic data.

**Parameters**

-   **end\_timestamp** (`integer`, optional) Unix timestamp (seconds since epoch) for the end of the query window. Defaults to current time if not provided.
-   **filter\_dns\_traffic\_by\_tags** (`string`, optional) Comma-separated list of tags to filter the DNS traffic data within the query.
-   **group\_dns\_traffic\_by\_fields** (`string`, optional) Comma-separated list of fields to group DNS traffic by. Defaults to `network.dns_query` if unspecified. Use `server_ungrouped` to avoid grouping. Maximum of 10 fields.
-   **max\_dns\_entries** (`integer`, optional) Number of aggregated DNS entries to return, up to a maximum of 7500. Default is 100.
-   **start\_query\_timestamp** (`integer`, optional) Unix timestamp for the query window start. Defaults to 15 min before `to` timestamp if not specified.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreateOnCallEscalationPolicy



Create a new On-Call escalation policy in Datadog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **include\_relationships** (`string`, optional) Comma-separated list of included relationships to return. Allowed values: teams, steps, steps.targets. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteEscalationPolicy



Delete an On-Call escalation policy.

**Parameters**

-   **escalation\_policy\_id** (`string`, required) The unique ID of the escalation policy to be deleted.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetOnCallEscalationPolicy



Retrieve details of an On-Call escalation policy.

**Parameters**

-   **escalation\_policy\_id** (`string`, required) The unique identifier for the on-call escalation policy to retrieve.
-   **include\_relationships** (`string`, optional) A comma-separated list of relationships to include in the response. Allowed values: `teams`, `steps`, `steps.targets`.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateOnCallEscalationPolicy



Update an On-Call escalation policy in Datadog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **escalation\_policy\_id** (`string`, optional) The unique identifier of the escalation policy to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **include\_relationships** (`string`, optional) Comma-separated list of relationships to be returned. Options: `teams`, `steps`, `steps.targets`. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.TriggerOnCallPage



Triggers a new On-Call Page in Datadog.

**Parameters**

-   **issue\_summary** (`string`, optional) A short summary of the issue or context for the On-Call Page.
-   **on\_call\_page\_urgency\_level** (`string`, optional) Specifies the urgency level of the On-Call Page. Accepts ‘low’ or ‘high’.
-   **page\_title** (`string`, optional) The title of the On-Call Page. Provide a concise and clear title to identify the issue or alert.
-   **resource\_type\_for\_on\_call** (`string`, optional) Specify the type of resource for creating an On-Call Page. Use `pages`.
-   **tags\_for\_categorization** (`array[string]`, optional) An array of tags for categorizing or filtering the On-Call page.
-   **target\_identifier** (`string`, optional) Identifier for the target, such as a team handle or user ID, used to specify the intended recipient of the On-Call Page.
-   **target\_type** (`string`, optional) Specify the kind of target: ‘team\_id’, ‘team\_handle’, or ‘user\_id’.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.AcknowledgeOnCallPage



Acknowledge an On-Call Page alert in Datadog.

**Parameters**

-   **on\_call\_page\_id** (`string`, required) The unique identifier for the On-Call Page to acknowledge.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.EscalateOnCallPage



Escalate an on-call page to notify the responsible team.

**Parameters**

-   **on\_call\_page\_id** (`string`, required) The unique identifier for the on-call page to be escalated.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ResolveOnCallPage



Resolves an On-Call Page in Datadog.

**Parameters**

-   **on\_call\_page\_id** (`string`, required) The unique identifier of the on-call page to resolve in Datadog.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreateOnCallSchedule



Create a new on-call schedule in Datadog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **include\_relationships** (`string`, optional) Comma-separated list of relationships to return with the schedule. Options: `teams`, `layers`, `layers.members`, `layers.members.user`. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteOnCallSchedule



Delete an On-Call schedule in Datadog.

**Parameters**

-   **schedule\_id** (`string`, required) The unique identifier for the on-call schedule you wish to delete in Datadog. This is a required field.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetOnCallSchedule



Retrieve an On-Call schedule from Datadog.

**Parameters**

-   **schedule\_id** (`string`, required) The unique ID of the on-call schedule to be retrieved.
-   **include\_relationships** (`string`, optional) Comma-separated list of relationships to include in the response. Options: `teams`, `layers`, `layers.members`, `layers.members.user`.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateOnCallSchedule



Update an existing on-call schedule in Datadog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **schedule\_id** (`string`, optional) The unique identifier for the on-call schedule to update in Datadog. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **relationships\_to\_include** (`string`, optional) Comma-separated relationships to return, e.g., `teams`, `layers`. Allowed values: `teams`, `layers`, `layers.members`, `layers.members.user`. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetOnCallUser



Retrieve the current on-call user for a specific schedule.

**Parameters**

-   **schedule\_id** (`string`, required) The unique ID of the schedule to retrieve the on-call user from.
-   **include\_related\_resources** (`string`, optional) Specifies related resources to include in the response. Use ‘user’ to include user details.
-   **timestamp\_for\_on\_call\_user** (`string`, optional) Retrieves the on-call user at the specified timestamp (ISO-8601). Defaults to current time if omitted.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetTeamOnCallUsers



Retrieve on-call users for a specific team.

**Parameters**

-   **team\_id** (`string`, required) The unique identifier for the team whose on-call users are being retrieved.
-   **include\_relationships** (`string`, optional) Comma-separated list of relationships to include in the response: `responders`, `escalations`, `escalations.responders`.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetTeamOnCallRoutingRules



Retrieve a team’s on-call routing rules from Datadog.

**Parameters**

-   **team\_identifier** (`string`, required) The unique identifier for the team whose on-call routing rules are to be retrieved.
-   **include\_relationships** (`string`, optional) Comma-separated list of relationships to return, such as `rules` or `rules.policy`.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.SetOnCallTeamRoutingRules



Set or update a team’s On-Call routing rules in Datadog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **team\_identifier** (`string`, optional) The unique identifier for the team whose routing rules are being set. It should be a string. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **include\_relationships** (`string`, optional) Comma-separated list of relationships to include in the response. Allowed: `rules`, `rules.policy`. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListOrgConfigs



Retrieve all organization configurations.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetOrganizationConfigDetails



Retrieve organization configuration details by name.

**Parameters**

-   **organization\_config\_name** (`string`, required) The name of the organization configuration to retrieve details for.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateOrgConfig



Update a specified organization configuration in Datadog.

**Parameters**

-   **org\_config\_data\_type** (`string`, required) The data type of the organization configuration, which should be ‘org\_configs’.
-   **org\_config\_value** (`string`, required) The new value for the organization configuration. Provide the desired value to update the specific Org Config.
-   **organization\_configuration\_name** (`string`, required) The name of the organization configuration to update in Datadog.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListOrgConnections



Retrieve a list of organization connections from Datadog.

**Parameters**

-   **entry\_limit** (`integer`, optional) Specifies the maximum number of entries to return. Default is 1000.
-   **pagination\_offset** (`integer`, optional) The pagination offset to start querying from, with a default of 0. Use this for paginated results.
-   **sink\_organization\_id** (`string`, optional) The organization ID of the sink org. It identifies the destination organization in the connections list.
-   **source\_organization\_id** (`string`, optional) The ID of the source organization to query connections from.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreateOrgConnection



Creates a new organization connection in Datadog.

**Parameters**

-   **connection\_types** (`array[string]`, required) List of connection types to establish between the organizations.
-   **organization\_connection\_type** (`string`, required) Specify the type of the organization connection. Must be ‘org\_connection’.
-   **organization\_relationship\_type** (`string`, optional) Specifies the type of the organization relationship. Must be ‘orgs’.
-   **target\_org\_name** (`string`, optional) The name of the target organization to connect with.
-   **target\_org\_uuid** (`string`, optional) The UUID of the target organization to connect to.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteOrgConnection



Delete an existing organization connection.

**Parameters**

-   **connection\_id** (`string`, required) The unique identifier of the organization connection to be deleted.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateOrgConnection



Update an existing organization connection in Datadog.

**Parameters**

-   **org\_connection\_id** (`string`, required) The unique identifier of the organization connection in Datadog.
-   **org\_connection\_type** (`string`, required) Specifies the type of organization connection. Must be ‘org\_connection’.
-   **organization\_connection\_id** (`string`, required) The unique identifier of the organization connection to be updated.
-   **updated\_connection\_types** (`array[string]`, required) A list of updated connection types for the organization connection.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListPermissions



Retrieve all permissions from Datadog.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListFindings



Retrieve a list of security findings from Datadog.

**Parameters**

-   **filter\_by\_evaluation\_change\_date** (`string`, optional) Specify a date (Unix ms) or date range (using comparison operators) to find results altered from pass to fail or vice versa.
-   **filter\_by\_resource\_id** (`string`, optional) Return only findings for the specified resource ID.
-   **filter\_by\_resource\_type** (`string`, optional) Return findings only for the specified resource type. Use to narrow down results to specific resource types, such as ‘aws’, ‘gcp’, etc.
-   **filter\_by\_rule\_id** (`string`, optional) Provide a specific rule ID to filter findings related to that rule.
-   **filter\_by\_rule\_name** (`string`, optional) Specify the rule name to return findings associated with it. This filters findings based on the provided rule name.
-   **filter\_by\_tags** (`string`, optional) Specify tags to filter findings. Use the format `tag_key:tag_value`. Supports multiple tags separated by commas.
-   **filter\_discovery\_timestamp** (`string`, optional) Return findings discovered at a specific time (Unix ms) or within a date range using comparison operators (e.g., `>`, `<=`).
-   **filter\_evaluation\_status** (`string`, optional) Specify to return only findings that are either ‘pass’ or ‘fail’.
-   **include\_detailed\_findings** (`boolean`, optional) Set to true to retrieve additional fields like external ID, description, and IP addresses for some findings.
-   **max\_findings\_limit** (`integer`, optional) Set the maximum number of findings to return, up to a limit of 1000.
-   **next\_page\_cursor** (`string`, optional) Use this to return the next page of findings starting from this cursor’s position.
-   **return\_muted\_findings** (`boolean`, optional) Set to `true` to return muted findings. Set to `false` to exclude them.
-   **snapshot\_timestamp** (`integer`, optional) Specify the Unix timestamp (in milliseconds) to get findings for a specific snapshot of time.
-   **status\_filter** (`string`, optional) Specify the status of findings to return: critical, high, medium, low, or info.
-   **vulnerability\_type\_filters** (`array[string]`, optional) A list of strings to filter findings by matching vulnerability types. Repeatable for multiple types.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetSecurityFinding



Retrieve details of a specific security finding for analysis.

**Parameters**

-   **finding\_id** (`string`, required) The unique ID of the security finding to retrieve details for.
-   **snapshot\_unix\_timestamp** (`integer`, optional) Return the finding for a specific snapshot in time, given in Unix milliseconds.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListPowerpacks



Retrieve a list of all powerpacks from Datadog.

**Parameters**

-   **max\_powerpacks\_limit** (`integer`, optional) Maximum number of powerpacks to include in the response.
-   **page\_offset** (`integer`, optional) The specific offset to start returning powerpacks from, allowing for pagination.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreatePowerpack



Creates a new powerpack in Datadog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeletePowerpack



Delete a specified powerpack from Datadog.

**Parameters**

-   **powerpack\_id** (`string`, required) The unique identifier for the powerpack to be deleted.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetPowerpack



Retrieve details of a specific powerpack.

**Parameters**

-   **powerpack\_identifier** (`string`, required) The unique identifier for the desired powerpack, used to retrieve its details.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdatePowerpack



Update the details of a specific powerpack in Datadog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **powerpack\_id** (`string`, optional) The unique identifier for the powerpack to update in Datadog. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListAllOrganizationProcesses



Retrieve all processes for your organization from Datadog.

**Parameters**

-   **filter\_by\_tags** (`string`, optional) A comma-separated list of tags to filter the processes by. Use specific tags relevant to your organization’s processes for targeted results.
-   **max\_results\_per\_page** (`integer`, optional) Maximum number of process results to return in one page.
-   **pagination\_cursor** (`string`, optional) String token to retrieve the next page of process results. Use the value from `meta.page.after` provided in the previous API response.
-   **query\_window\_end\_timestamp** (`integer`, optional) Unix timestamp (seconds since epoch) marking the end of the query window. Defaults to 15 minutes after ‘from’ if not provided. If ‘from’ and ‘to’ are omitted, defaults to 15 minutes from current time.
-   **query\_window\_start\_timestamp** (`integer`, optional) Unix timestamp marking the start of the query window. Defaults to 15 minutes before the end of the window if not provided.
-   **search\_string\_for\_processes** (`string`, optional) String used to search and filter processes by specific criteria.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.QueryScalarData



Query scalar values from diverse data sources.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.QueryTimeseriesData



Query and process timeseries data from multiple sources.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListReferenceTables



Retrieve all reference tables in the organization.

**Parameters**

-   **exact\_table\_name\_filter** (`string`, optional) Filter by an exact table name match to retrieve specific reference tables.
-   **filter\_by\_table\_status** (`string`, optional) Filter tables by their status. Accepts status as a string, such as ‘active’, ‘inactive’, etc.
-   **filter\_table\_name\_contains** (`string`, optional) Filter tables by name containing this substring.
-   **number\_of\_tables\_to\_return** (`integer`, optional) Specify the number of tables to return in the response. Use an integer value.
-   **pagination\_offset** (`integer`, optional) Number of tables to skip for pagination.
-   **sort\_field\_and\_direction** (`string`, optional) Specify the field to sort by and the direction. Use a field name for ascending, prefix with ”-” for descending. Options include: updated\_at, table\_name, status, and their descending counterparts.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreateReferenceTable



Create a new reference table in Datadog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteReferenceTable



Delete a reference table by ID.

**Parameters**

-   **reference\_table\_id** (`string`, required) The unique identifier of the reference table to be deleted.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetReferenceTable



Retrieve details of a reference table by its ID.

**Parameters**

-   **reference\_table\_id** (`string`, required) The unique ID of the reference table to retrieve details from Datadog.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateReferenceTable



Update data, description, and tags of a reference table.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **reference\_table\_id** (`string`, optional) The ID of the reference table that needs to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetTableRowsById



Retrieve reference table rows using primary key values.

**Parameters**

-   **reference\_table\_id** (`string`, required) The unique ID of the reference table to retrieve rows from.
-   **row\_ids\_to\_retrieve** (`array[string]`, required) List of primary key values to specify which rows to retrieve from the reference table.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreateReferenceTableUpload



Create a reference table upload for bulk data ingestion.

**Parameters**

-   **file\_upload\_headers** (`array[string]`, optional) An array of strings representing the headers of the file to upload for the reference table.
-   **part\_size\_bytes** (`integer`, optional) The size of each part in the upload in bytes. For multipart uploads (part\_count > 1), all parts except the last one must be at least 5,000,000 bytes. For single-part uploads, any size is allowed.
-   **reference\_table\_name** (`string`, optional) The name of the reference table for the upload.
-   **upload\_id** (`string`, optional) The unique ID for the upload process in Datadog.
-   **upload\_part\_count** (`integer`, optional) Specify the number of parts in the upload. Used for multipart uploads.
-   **upload\_resource\_type** (`string`, optional) Specifies the resource type for the upload. Must be set to ‘upload’.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListWafCustomRules



Retrieve a list of WAF custom rules.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreateWafCustomRule



Create a new web application firewall custom rule.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteWafCustomRule



Delete a specific WAF custom rule by ID.

**Parameters**

-   **custom\_rule\_id** (`string`, required) The unique identifier for the WAF custom rule to be deleted. Required for identifying the specific rule.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetWafCustomRuleById



Retrieve a WAF custom rule by ID from Datadog.

**Parameters**

-   **custom\_rule\_id** (`string`, required) The unique identifier for the WAF custom rule to retrieve from Datadog.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateWafCustomRule



Update a specific WAF custom rule in Datadog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **custom\_rule\_id** (`string`, optional) Specify the ID of the custom WAF rule to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListWafExclusionFilters



Retrieve a list of WAF exclusion filters.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreateWafExclusionFilter



Create a new WAF exclusion filter in Datadog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteWafExclusionFilter



Delete a WAF exclusion filter using its ID.

**Parameters**

-   **waf\_exclusion\_filter\_id** (`string`, required) The unique identifier of the WAF exclusion filter to be deleted. Use this ID to specify which filter to remove.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetWafExclusionFilter



Retrieve a specific WAF exclusion filter by ID.

**Parameters**

-   **waf\_exclusion\_filter\_id** (`string`, required) The unique identifier of the WAF exclusion filter to retrieve.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateWafExclusionFilter



Updates a WAF exclusion filter by its identifier.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **waf\_exclusion\_filter\_identifier** (`string`, optional) The unique identifier of the WAF exclusion filter to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListWorkloadProtectionAgentRules



Retrieve the list of Workload Protection agent rules.

**Parameters**

-   **agent\_policy\_id** (`string`, optional) The ID of the Agent policy to retrieve the list of workload protection agent rules.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreateWorkloadProtectionRule



Create a new Workload Protection agent rule.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteWorkloadProtectionAgentRule



Delete a specific Workload Protection agent rule.

**Parameters**

-   **agent\_rule\_identifier** (`string`, required) The unique identifier for the Agent rule to be deleted.
-   **agent\_policy\_id** (`string`, optional) The unique identifier of the Workload Protection agent policy to delete.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetThreatProtectionAgentRule



Retrieve details of a specific Workload Protection agent rule.

**Parameters**

-   **agent\_rule\_id** (`string`, required) The unique identifier for the specific Agent rule to retrieve details for.
-   **agent\_policy\_id** (`string`, optional) The ID of the agent policy to retrieve the specific rule for.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateWorkloadProtectionAgentRule



Update a specific Workload Protection Agent rule.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **agent\_rule\_id** (`string`, optional) The unique identifier of the specific Agent rule to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **agent\_policy\_id** (`string`, optional) The ID of the Agent policy to be updated in the Workload Protection Agent rule. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListWorkloadProtectionPolicies



Retrieve a list of Workload Protection policies from Datadog.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreateWorkloadProtectionPolicy



Create a new Workload Protection policy for cloud workloads.

**Parameters**

-   **policy\_name** (`string`, required) The name of the workload protection policy to be created.
-   **host\_tags\_configuration** (`array[json]`, optional) Host tags for policy deployment: inner values linked with AND, outer with OR.
-   **host\_tags\_for\_policy\_deployment** (`array[string]`, optional) List of host tags to define where the policy is deployed. Each tag must be a string.
-   **policy\_description** (`string`, optional) Provide a description for the new workload protection policy.
-   **policy\_enabled** (`boolean`, optional) Set to true to enable the workload protection policy.
-   **resource\_type** (`string`, optional) Specifies the type of the resource. Must always be set to ‘policy’.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DownloadCsmThreatsPolicy



Generate and download Workload Protection policy file.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteWorkloadProtectionPolicy



Delete a specific Workload Protection policy.

**Parameters**

-   **agent\_policy\_id** (`string`, required) The unique ID of the agent policy to be deleted.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetWorkloadProtectionPolicyDetails



Get details of a specific Workload Protection policy.

**Parameters**

-   **agent\_policy\_id** (`string`, required) The unique ID of the Workload Protection Agent policy to retrieve details for.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateWorkloadProtectionPolicy



Update a specific Workload Protection policy in Datadog.

**Parameters**

-   **agent\_policy\_id** (`string`, required) The unique identifier for the Agent policy to update.
-   **host\_tags\_conditions** (`array[json]`, optional) Array of host tags specifying policy deployment conditions. Inner values use AND logic, outer values use OR logic.
-   **host\_tags\_for\_policy\_deployment** (`array[string]`, optional) An array of strings representing the host tags defining where this policy is deployed.
-   **policy\_description** (`string`, optional) A string that provides the description of the Workload Protection policy. This should explain the policy’s purpose or key features.
-   **policy\_enabled** (`boolean`, optional) Indicates if the policy is enabled. Use true for enabled, false for disabled.
-   **policy\_id** (`string`, optional) The unique identifier of the Agent policy to be updated.
-   **policy\_name** (`string`, optional) The name of the Workload Protection policy to be updated.
-   **resource\_type** (`string`, optional) The type of the resource, always set to ‘policy’.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListPipelines



Retrieve a list of pipelines from Datadog.

**Parameters**

-   **page\_number** (`integer`, optional) Specify the page number of pipelines to retrieve. Use this to navigate through the pages of results returned by the API.
-   **page\_size** (`integer`, optional) Number of pipelines to return per page, up to a maximum of 100.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreatePipeline



Create a new pipeline in Datadog’s system.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ValidatePipelineConfig



Validate a pipeline configuration without making changes.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteDataPipeline



Deletes a data pipeline from the Datadog configuration.

**Parameters**

-   **pipeline\_identifier** (`string`, required) The unique ID of the pipeline that you want to delete from Datadog.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetSpecificPipelineById



Retrieve specific pipeline details by ID.

**Parameters**

-   **pipeline\_id** (`string`, required) The unique ID of the pipeline to retrieve from Datadog.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdatePipeline



Update a pipeline in Datadog’s remote config.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **pipeline\_id** (`string`, optional) The unique ID of the pipeline to update in Datadog. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteRestrictionPolicy



Delete a restriction policy for a specified resource.

**Parameters**

-   **resource\_identifier** (`string`, required) Identifier formatted as `type:id` for the resource. Supported types: `dashboard`, `integration-service`, `integration-webhook`, `notebook`, and more.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.RetrieveResourceRestrictionPolicy



Retrieve restriction policy for a specific resource.

**Parameters**

-   **resource\_identifier** (`string`, required) The ID of the resource, formatted as `type:id`. Supported types: `dashboard`, `integration-service`, `integration-webhook`, `notebook`, `reference-table`, `security-rule`, `slo`, `workflow`, `app-builder-app`, `connection`, `connection-group`, `rum-application`, `cross-org-connection`, `spreadsheet`, `on-call-schedule`, `on-call-escalation-policy`, `on-call-team-routing-rules`.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateRestrictionPolicy



Update the restriction policy for a Datadog resource.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **resource\_identifier** (`string`, optional) Identifier of the resource, formatted as `type:id`. Includes supported types like `dashboard`, `integration-service`, `notebook`, and others. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **allow\_self\_lockout** (`boolean`, optional) Set to true to allow admins to remove their own access from the resource. Default is false, preventing self-lockout. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListUserRoles



Retrieve all roles from Datadog.

**Parameters**

-   **page\_number** (`integer`, optional) Specific page number to return.
-   **page\_size** (`integer`, optional) The number of roles to return per page, with a maximum of 100.
-   **role\_filter\_string** (`string`, optional) Filter roles using a specific string to match their details.
-   **role\_id\_filter** (`string`, optional) List of role IDs to filter roles by, supporting comma-separated values.
-   **sort\_roles\_by** (`string`, optional) Sort roles based on a specified field. Use prefixes to set ascending or descending order, e.g., ‘-name’ for descending by name.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreateRole



Create a new role for your organization in Datadog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListRoleTemplates



Retrieve all role templates from Datadog.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DisableRole



Disables a specified role within Datadog.

**Parameters**

-   **role\_identifier** (`string`, required) The unique identifier for the role to be disabled in Datadog.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetOrganizationRole



Retrieve details of a role using its role ID in the organization.

**Parameters**

-   **role\_id** (`string`, required) The unique identifier of the role in the organization.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.EditRole



Edit a role with administrator application keys.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **role\_identifier** (`string`, optional) The unique identifier for the role to be edited. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CloneExistingRole



Clone an existing role based on role ID.

**Parameters**

-   **new\_role\_name** (`string`, required) Name of the new role that is cloned from an existing role.
-   **role\_unique\_identifier** (`string`, required) The unique identifier of the role to be cloned.
-   **role\_type** (`string`, optional) Specifies the type of role for the clone operation. Must be ‘roles’.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.RemovePermissionFromRole



Removes a permission from a specified role in Datadog.

**Parameters**

-   **role\_identifier** (`string`, required) The unique identifier for the role from which a permission will be removed.
-   **permission\_id** (`string`, optional) ID of the permission to be removed from the specified role.
-   **permission\_resource\_type** (`string`, optional) This should be set to ‘permissions’ to specify the permissions resource type.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListRolePermissions



Retrieve all permissions for a specific role.

**Parameters**

-   **role\_identifier** (`string`, required) The unique identifier for the role whose permissions need to be retrieved.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.AddPermissionToRole



Assigns a specific permission to a given role.

**Parameters**

-   **role\_identifier** (`string`, required) The unique identifier of the role to which the permission will be added.
-   **permission\_id** (`string`, optional) ID of the permission to be added to the role.
-   **permissions\_resource\_type** (`string`, optional) The resource type for the permission, should be ‘permissions’.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.RemoveUserFromRole



Remove a user from a specified role in Datadog.

**Parameters**

-   **role\_identifier** (`string`, required) The unique identifier of the role to remove the user from.
-   **user\_identifier** (`string`, required) The unique identifier representing the user to be removed from the role.
-   **user\_resource\_type** (`string`, optional) Specifies the resource type, which should be set as ‘users’.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListRoleUsers



Retrieve all users belonging to a specific role.

**Parameters**

-   **role\_identifier** (`string`, required) The unique identifier of the role to list its associated users.
-   **page\_number** (`integer`, optional) The specific page number to return in the list of users.
-   **page\_size** (`integer`, optional) Size for a given page, with a maximum value of 100.
-   **user\_filter\_string** (`string`, optional) Filter users by a specific string. Defaults to no filtering.
-   **user\_sort\_order** (`string`, optional) Attribute to sort users by. Prefix with ’-’ for descending. Options: ‘name’, ‘email’, ‘status’.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.AddUserToRole



Adds a user to a specific role in Datadog.

**Parameters**

-   **role\_unique\_identifier** (`string`, required) The unique identifier for the role you want to assign the user to.
-   **user\_unique\_identifier** (`string`, required) A unique identifier representing the user to be added to the role.
-   **users\_resource\_type** (`string`, optional) Specifies the type of resource as ‘users’. Always use ‘users’.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.AggregateRumEvents



Aggregate RUM events into computed metrics and timeseries.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListRumApplications



Retrieve all RUM applications within your organization from Datadog.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreateRumApplication



Create a new RUM application within your organization.

**Parameters**

-   **rum\_application\_name** (`string`, required) The name of the RUM application to be created.
-   **product\_analytics\_retention\_state** (`string`, optional) Set the retention policy for Product Analytics data from RUM events. Options are ‘MAX’ or ‘NONE’.
-   **rum\_application\_creation\_type** (`string`, optional) Specifies the type for creating a RUM application. Use `rum_application_create`.
-   **rum\_application\_type** (`string`, optional) Specifies the type of the RUM application. Expected values: `browser`, `ios`, `android`, `react-native`, `flutter`, `roku`, `electron`, `unity`, `kotlin-multiplatform`.
-   **rum\_event\_processing\_state** (`string`, optional) Configures which RUM events are processed and stored for the application. Accepted values are ‘ALL’, ‘ERROR\_FOCUSED\_MODE’, or ‘NONE’.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.OrderRumRetentionFilters



Order RUM retention filters for a RUM application.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **rum\_application\_id** (`string`, optional) The ID of the RUM application for which to order retention filters. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetRumRetentionFilters



Retrieve RUM retention filters for a specific application.

**Parameters**

-   **rum\_application\_id** (`string`, required) The unique identifier for the RUM application to retrieve retention filters.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreateRumRetentionFilter



Create a RUM retention filter for a RUM application.

**Parameters**

-   **rum\_application\_id** (`string`, required) RUM application ID for which the retention filter is to be created.
-   **rum\_event\_type\_filter** (`string`, required) Specify the type of RUM events to filter. Options include: session, view, action, error, resource, long\_task, vital.
-   **rum\_retention\_filter\_name** (`string`, required) The name assigned to the RUM retention filter, used for identification.
-   **rum\_retention\_filter\_sample\_rate** (`integer`, required) The sample rate for a RUM retention filter, an integer between 0 and 100.
-   **enable\_retention\_filter** (`boolean`, optional) Set true to enable the retention filter, false to disable it.
-   **resource\_type\_for\_retention** (`string`, optional) Specifies the resource type as ‘retention\_filters’. This value should always be ‘retention\_filters’.
-   **rum\_retention\_filter\_query** (`string`, optional) The query string that defines the filtering criteria for the RUM retention filter.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteRumRetentionFilter



Deletes a RUM retention filter for a specific application.

**Parameters**

-   **retention\_filter\_id** (`string`, required) The ID of the retention filter to delete from the RUM application.
-   **rum\_application\_id** (`string`, required) The ID of the RUM application from which to delete the retention filter.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetRumRetentionFilter



Retrieve a RUM retention filter for a RUM application.

**Parameters**

-   **retention\_filter\_id** (`string`, required) The ID of the retention filter to retrieve for a RUM application.
-   **rum\_application\_id** (`string`, required) The unique identifier for the RUM application. Required to fetch the retention filter.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateRumRetentionFilter



Update a RUM retention filter for a RUM application.

**Parameters**

-   **filter\_id** (`string`, required) UUID of the retention filter to be updated.
-   **retention\_filter\_id** (`string`, required) The unique ID of the retention filter to be updated.
-   **rum\_application\_id** (`string`, required) The ID of the RUM application to update the retention filter. Required for identifying the application.
-   **enable\_retention\_filter** (`boolean`, optional) Set to true to enable the retention filter. Set to false to disable it.
-   **filter\_name** (`string`, optional) The name of the RUM retention filter to update.
-   **resource\_type** (`string`, optional) Specifies the resource type for the retention filter. Must be ‘retention\_filters’.
-   **rum\_event\_type\_filter** (`string`, optional) Specifies the type of RUM events to filter on, such as ‘session’, ‘view’, ‘action’, etc.
-   **rum\_retention\_filter\_query** (`string`, optional) The query string used to define criteria for the RUM retention filter.
-   **sample\_rate** (`integer`, optional) The sample rate for a RUM retention filter, an integer between 0 and 100, specifying the percentage of data to sample.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteRumApplication



Deletes an existing RUM application in your organization.

**Parameters**

-   **rum\_application\_id** (`string`, required) The unique identifier for the RUM application you wish to delete.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetRumApplicationById



Retrieve RUM application details by ID.

**Parameters**

-   **rum\_application\_id** (`string`, required) The ID of the RUM application to retrieve details for. This is a required string value.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateRumApplication



Update settings of a specific RUM application by ID.

**Parameters**

-   **rum\_app\_id** (`string`, required) The unique ID of the RUM application to update.
-   **rum\_application\_id** (`string`, required) The ID of the RUM application to update.
-   **product\_analytics\_retention\_state** (`string`, optional) Set the retention policy for Product Analytics data derived from RUM events. Accepted values: ‘MAX’, ‘NONE’.
-   **rum\_application\_name** (`string`, optional) The name of the RUM application to be updated.
-   **rum\_application\_type** (`string`, optional) Specify the type of RUM application. Valid options: `browser`, `ios`, `android`, `react-native`, `flutter`, `roku`, `electron`, `unity`, `kotlin-multiplatform`.
-   **rum\_application\_update\_type** (`string`, optional) Specifies the RUM application update type. Allowed value is ‘rum\_application\_update’.
-   **rum\_event\_processing\_state** (`string`, optional) Configures which RUM events are processed and stored. Accepts ‘ALL’, ‘ERROR\_FOCUSED\_MODE’, or ‘NONE’.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListRumMetrics



Retrieve configured RUM-based metrics and their definitions.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreateRumMetric



Create a metric based on RUM data.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteRumMetric



Delete a specific RUM-based metric from your organization.

**Parameters**

-   **rum\_metric\_id** (`string`, required) The ID of the RUM-based metric to be deleted from your Datadog organization.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetRumMetric



Retrieve a specific RUM-based metric for your organization.

**Parameters**

-   **metric\_identifier** (`string`, required) The unique identifier for the RUM-based metric you want to retrieve from your organization.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateRumMetric



Update a specific rum-based metric in your organization.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **metric\_name** (`string`, optional) The name of the rum-based metric to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListRumEvents



Retrieve RUM events matching a search query.

**Parameters**

-   **event\_sort\_order** (`string`, optional) Specify the order of events: ‘timestamp’ for ascending or ‘-timestamp’ for descending.
-   **maximum\_event\_count** (`integer`, optional) Specify the maximum number of events to retrieve in a single response.
-   **maximum\_timestamp** (`string`, optional) Maximum timestamp for requested events in ISO 8601 format.
-   **minimum\_timestamp** (`string`, optional) The starting timestamp for the requested RUM events. Use a string format compatible with the API.
-   **pagination\_cursor** (`string`, optional) Cursor for fetching the next set of paginated results in the queried RUM events.
-   **rum\_search\_query** (`string`, optional) Search query following RUM syntax for filtering events.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.SearchRumEvents



Search and filter RUM events based on a query.

**Parameters**

-   **filter\_max\_time** (`string`, optional) Specify the maximum event time in ISO 8601 format, mathematical expressions, or milliseconds.
-   **maximum\_events\_in\_response** (`integer`, optional) Specifies the maximum number of RUM events to return in the response.
-   **minimum\_event\_time** (`string`, optional) The minimum time for events in ISO 8601 format, math expressions, or milliseconds.
-   **pagination\_cursor** (`string`, optional) Provide the cursor to fetch the next set of results from a previous query.
-   **rum\_search\_query** (`string`, optional) The search query following the RUM search syntax to filter events.
-   **sort\_order** (`string`, optional) Specify the sort order for events by timestamp. Use ‘timestamp’ for ascending order and ‘-timestamp’ for descending order.
-   **time\_offset\_seconds** (`integer`, optional) The time offset in seconds to apply to the query.
-   **timezone** (`string`, optional) Specify the timezone as GMT, UTC, an offset (like UTC+1), or a Timezone Database identifier (like America/New\_York).

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.FetchAllScorecardOutcomes



Retrieve all rule outcomes from scorecards.

**Parameters**

-   **filter\_by\_rule\_id** (`string`, optional) Filter outcomes based on specific rule ID.
-   **filter\_by\_rule\_name** (`string`, optional) Filter outcomes based on a specific rule name.
-   **filter\_outcomes\_by\_service\_name** (`string`, optional) Filter outcomes based on a specific service name. Provide the service name as a string.
-   **filter\_rule\_enabled** (`boolean`, optional) Filter outcomes based on whether a rule is enabled (true) or disabled (false).
-   **include\_rule\_details** (`string`, optional) Specify if related rule details should be included in the response.
-   **outcome\_state\_filter** (`string`, optional) Filter the scorecard outcomes by a specific state. Accepts a state value as a string.
-   **page\_offset** (`integer`, optional) Specific offset to use as the beginning of the returned page, represented as an integer.
-   **page\_size** (`integer`, optional) The number of results per page, with a maximum of 100.
-   **rule\_fields\_to\_return** (`string`, optional) Specify which fields to return in the included rule details.
-   **specified\_outcome\_values** (`string`, optional) Comma-separated list of specific outcome attributes to return. Limits the response to these attributes.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateScorecardOutcomes



Update multiple scorecard rule outcomes in Datadog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.SetServiceRuleOutcomesBatch



Batch set multiple service-rule outcomes.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.FetchScorecardRules



Fetch all scorecard rules from Datadog.

**Parameters**

-   **filter\_custom\_rules\_only** (`boolean`, optional) Set to true to include only custom rules in the results.
-   **filter\_for\_enabled\_rules** (`boolean`, optional) Set to true to filter for enabled rules only.
-   **filter\_rule\_by\_id** (`string`, optional) Filter the rules based on a specific rule ID.
-   **filter\_rule\_description** (`string`, optional) Filter rules based on their description. Provide a string to match against the rule descriptions.
-   **filter\_rules\_by\_name** (`string`, optional) Specify a rule name to filter the scorecard rules.
-   **include\_scorecard\_details** (`string`, optional) Specify related scorecard details to include in the response.
-   **page\_offset** (`integer`, optional) Specific offset to use as the beginning of the returned page for fetching scorecard rules.
-   **page\_size** (`integer`, optional) Number of rules to return per page. Maximum value is 100.
-   **specific\_rule\_fields** (`string`, optional) Specify which rule fields to include in the response. Provide a comma-separated list of field names.
-   **specific\_scorecard\_fields** (`string`, optional) Specify which fields to include in the response for scorecard attributes. Use comma-separated values.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreateScorecardRule



Create a new scorecard rule in Datadog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteScorecardRule



Deletes a scorecard rule by its ID.

**Parameters**

-   **rule\_id** (`string`, required) The ID of the scorecard rule to be deleted.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateScorecardRule



Updates an existing scorecard rule in Datadog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **rule\_id** (`string`, optional) A unique identifier for the scorecard rule to be updated in Datadog. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DownloadCloudWorkloadPolicy



Downloads a Workload Protection policy file for agents.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListCloudWorkloadSecurityAgentRules



Retrieve the list of cloud workload security agent rules.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreateCloudWorkloadSecurityAgentRule



Create a new cloud workload security agent rule.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteCloudWorkloadSecurityAgentRule



Delete a specific cloud workload security agent rule.

**Parameters**

-   **agent\_rule\_identifier** (`string`, required) The unique identifier for the specific agent rule to delete.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetCloudWorkloadSecurityAgentRuleDetails



Retrieve details of a cloud workload security agent rule.

**Parameters**

-   **agent\_rule\_identifier** (`string`, required) Unique identifier for the cloud workload security agent rule to retrieve details.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateCloudWorkloadSecurityAgentRule



Update a specific cloud workload security agent rule.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **agent\_rule\_identifier** (`string`, optional) The unique identifier for the agent rule to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListSecurityFilters



Retrieve configured security filters from Datadog.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreateSecurityFilter



Create a security filter using Datadog’s API.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteSecurityFilter



Delete a specific security filter in Datadog.

**Parameters**

-   **security\_filter\_id** (`string`, required) The ID of the security filter to delete in Datadog.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetSecurityFilterDetails



Retrieve the details of a specific security filter.

**Parameters**

-   **security\_filter\_id** (`string`, required) The unique identifier for the security filter to retrieve details for.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateSecurityFilter



Update a specific security filter’s configuration.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **security\_filter\_id** (`string`, optional) The ID of the specific security filter to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListSuppressionRules



Retrieve the list of security monitoring suppression rules.

**Parameters**

-   **suppression\_query\_string** (`string`, optional) A query string to filter suppression rules. Use to specify search criteria.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreateSuppressionRule



Create a new security monitoring suppression rule.

**Parameters**

-   **enable\_suppression\_rule** (`boolean`, required) Enable the suppression rule. Use true to enable, false to disable.
-   **rule\_query** (`string`, required) The rule criteria for the suppression rule using detection rules syntax.
-   **suppression\_rule\_name** (`string`, required) The name of the suppression rule to be created.
-   **data\_exclusion\_query** (`string`, optional) An exclusion query for input data to ignore events in suppression rules, applicable to logs, Agent events, etc.
-   **expiration\_date\_unix\_ms** (`integer`, optional) A Unix millisecond timestamp for rule expiration. After this date, the rule will not suppress signals.
-   **resource\_type** (`string`, optional) The type of the resource, which should always be `suppressions`.
-   **start\_date\_timestamp** (`integer`, optional) A Unix millisecond timestamp indicating when the suppression rule begins to suppress signals.
-   **suppression\_query** (`string`, optional) The query used to suppress signals in the security rule. Matches are not triggered.
-   **suppression\_rule\_description** (`string`, optional) A description for the suppression rule. Provide a clear and concise explanation of the rule’s purpose.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetFutureRuleSuppressions



Retrieve suppressions affecting a future security rule.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetSuppressionsForRule



Retrieve suppressions affecting a specific rule by ID.

**Parameters**

-   **rule\_id** (`string`, required) The unique identifier of the specific rule for which to retrieve suppressions.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ValidateSuppressionRule



Validate a suppression rule in Datadog’s monitoring system.

**Parameters**

-   **is\_suppression\_rule\_enabled** (`boolean`, required) Indicates whether the suppression rule is currently active.
-   **suppression\_rule\_name** (`string`, required) The name of the suppression rule to be validated.
-   **suppression\_rule\_query** (`string`, required) The rule query for the suppression rule, using detection rules search bar syntax.
-   **exclusion\_query\_on\_input\_data** (`string`, optional) An exclusion query for input data, such as logs or events. Events matching this are ignored by detection rules in the suppression rule.
-   **resource\_type** (`string`, optional) Defines the type of the resource. Always set to `suppressions`.
-   **suppression\_query** (`string`, optional) The query for the suppression rule. Signals matching this query are suppressed, using Signals Explorer syntax.
-   **suppression\_rule\_description** (`string`, optional) A text description of the suppression rule, explaining its purpose and details.
-   **suppression\_rule\_expiration\_date** (`integer`, optional) A Unix millisecond timestamp for when the suppression rule expires and stops suppressing signals.
-   **suppression\_rule\_start\_date** (`integer`, optional) Unix millisecond timestamp for the start date of the suppression rule, when it begins suppressing signals.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteSuppressionRule



Delete a specific suppression rule in Datadog.

**Parameters**

-   **suppression\_rule\_id** (`string`, required) The unique identifier of the suppression rule to be deleted in Datadog.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetSuppressionRuleDetails



Get details of a specific security suppression rule.

**Parameters**

-   **suppression\_rule\_id** (`string`, required) The unique ID of the suppression rule you wish to retrieve details for.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateSuppressionRule



Update a specific suppression rule in Datadog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **suppression\_rule\_id** (`string`, optional) The unique identifier of the suppression rule to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListSecurityMonitoringRules



Retrieve a list of security monitoring rules.

**Parameters**

-   **page\_number** (`integer`, optional) The specific page number to return when listing the security monitoring rules.
-   **page\_size** (`integer`, optional) Size for a given page. The maximum allowed value is 100. Use an integer value.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreateSecurityMonitoringRule



Create a detection rule for monitoring security events.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ConvertRuleJsonToTerraform



Converts Datadog security rules from JSON to Terraform format.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.TestSecurityRule



Test a security monitoring rule.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ValidateSecurityMonitoringRule



Validate a detection rule in Datadog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteSecurityMonitoringRule



Delete an existing security monitoring rule.

**Parameters**

-   **security\_rule\_id** (`string`, required) The unique identifier of the security rule to be deleted. Default rules cannot be deleted.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetSecurityMonitoringRuleDetails



Retrieve detailed information about a specific security rule.

**Parameters**

-   **security\_rule\_id** (`string`, required) The unique identifier for the security monitoring rule you want to retrieve details for.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateSecurityMonitoringRule



Update an existing Datadog security monitoring rule.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **security\_rule\_id** (`string`, optional) The ID of the security monitoring rule to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ConvertSecurityRuleToTerraform



Convert existing security rule from JSON to Terraform.

**Parameters**

-   **rule\_id** (`string`, required) The ID of the Datadog security monitoring rule to convert.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.TestSecurityMonitoringRule



Test an existing security monitoring rule in Datadog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **security\_monitoring\_rule\_id** (`string`, optional) The ID of the existing security monitoring rule to test in Datadog. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetRuleVersionHistory



Retrieve a rule’s version history.

**Parameters**

-   **rule\_id** (`string`, required) The unique identifier for the rule. Required to fetch its version history in Datadog.
-   **page\_number** (`integer`, optional) The specific page number to return in the results.
-   **page\_size** (`integer`, optional) Size for a given page, maximum value is 100.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListSecuritySignals



Retrieve security signals that match a search query.

**Parameters**

-   **cursor\_based\_pagination** (`string`, optional) Cursor for pagination to continue retrieving results from a previous query.
-   **max\_security\_signals\_response** (`integer`, optional) Specify the maximum number of security signals to return in the response.
-   **max\_timestamp\_for\_security\_signals** (`string`, optional) Specify the maximum timestamp for retrieving security signals.
-   **minimum\_timestamp** (`string`, optional) The minimum timestamp to filter security signals. Format: ISO 8601 string.
-   **result\_sort\_order** (`string`, optional) Specify the sort order for the security signals. Use ‘timestamp’ for ascending order, ‘-timestamp’ for descending order.
-   **search\_query\_for\_security\_signals** (`string`, optional) The search query string used to filter security signals from Datadog.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.SearchSecuritySignals



Retrieve security signals based on a search query.

**Parameters**

-   **maximum\_signals\_per\_response** (`integer`, optional) The maximum number of security signals to return in the response.
-   **maximum\_timestamp\_for\_signals** (`string`, optional) The latest date and time for security signals to be included in the search results, formatted as a string.
-   **minimum\_timestamp** (`string`, optional) The minimum timestamp for requested security signals. Use ISO 8601 format, e.g., ‘2023-10-05T14:48:00Z’.
-   **pagination\_cursor** (`string`, optional) The cursor to continue listing results from the previous query. Use it for paginating results.
-   **search\_query** (`string`, optional) A string used to search and filter the security signals based on specific criteria.
-   **sort\_order** (`string`, optional) Specify how to sort the security signals. Use ‘timestamp’ for ascending and ‘-timestamp’ for descending order.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetSecuritySignalDetails



Retrieve details of a security monitoring signal.

**Parameters**

-   **signal\_id** (`string`, required) The unique identifier for the security monitoring signal to retrieve details for. This ID is used to specify which signal’s details to fetch.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.EditSignalAssignee



Modify the triage assignee of a security signal.

**Parameters**

-   **assignee\_uuid** (`string`, required) UUID assigned by Datadog to identify the user account for the signal’s assignee.
-   **signal\_id** (`string`, required) The unique identifier for the security signal to modify its assignee.
-   **assignee\_gravatar\_icon** (`string`, optional) URL for the Gravatar icon associated with the user account.
-   **assignee\_name** (`string`, optional) The name for the user account to be assigned the security signal.
-   **signal\_version\_number** (`integer`, optional) Integer representing the version of the updated signal. If the server-side version is higher, the update will be rejected.
-   **user\_account\_handle** (`string`, optional) The handle for the user account to be assigned the security signal.
-   **user\_account\_numerical\_id** (`integer`, optional) Numerical ID assigned by Datadog to the user account. Required for identifying the assignee.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.EditSecuritySignalIncidents



Modify incidents linked to a security signal.

**Parameters**

-   **incident\_ids** (`array[integer]`, required) An array of incident IDs to associate with the security signal.
-   **signal\_id** (`string`, required) The unique identifier for the security signal to modify.
-   **signal\_version** (`integer`, optional) Version of the updated signal. Ensure the client-side version is not lower than the server-side version to avoid rejection.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ChangeSignalState



Change the triage state of a security signal.

**Parameters**

-   **new\_triage\_state** (`string`, required) The new triage state of the signal. Valid options are ‘open’, ‘archived’, or ‘under\_review’.
-   **signal\_id** (`string`, required) The unique identifier of the security signal to be updated.
-   **archive\_comment** (`string`, optional) Optional comment to display on archived signals. Useful for context or documentation.
-   **archive\_reason** (`string`, optional) Reason for archiving the signal. Options include ‘none’, ‘false\_positive’, ‘testing\_or\_maintenance’, ‘investigated\_case\_opened’, or ‘other’.
-   **event\_type** (`string`, optional) The type of event, must be ‘signal\_metadata’.
-   **security\_signal\_unique\_id** (`string`, optional) The unique identifier for the security signal to be modified.
-   **updated\_signal\_version** (`integer`, optional) The version number of the signal to update. The update is rejected if the server’s version is higher.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListScanningGroups



Retrieve all scanning groups in your organization with Datadog’s API.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ReorderScanningGroups



Reorder the list of scanning groups.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreateScanningGroup



Create a new scanning group in Datadog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteScanningGroup



Delete a specified scanning group in Datadog.

**Parameters**

-   **group\_id** (`string`, required) The ID of the scanning group to be deleted.
-   **api\_version** (`integer`, optional) Optional version number of the API to use for the request.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateScanningGroup



Update a scanning group’s rule order in Datadog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **group\_id** (`string`, optional) The ID of the scanning group whose rules are being updated. This is required to identify the group. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreateScanningRule



Create a scanning rule in a sensitive data group.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteScanningRule



Delete a specific scanning rule by ID.

**Parameters**

-   **rule\_id** (`string`, required) The unique identifier for the scanning rule to be deleted.
-   **api\_version** (`integer`, optional) Specify the API version to use for the request (optional).

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateScanningRule



Update a scanning rule in Datadog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **rule\_id** (`string`, optional) The unique identifier for the scanning rule to be updated. This value is required. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListStandardPatterns



Retrieve all standard patterns for sensitive data scanning.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreateServiceAccount



Create a service account for your organization.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListServiceAccountAppKeys



Retrieve all app keys for a specific service account.

**Parameters**

-   **service\_account\_id** (`string`, required) The unique identifier for the service account whose application keys are to be retrieved.
-   **created\_at\_start\_filter** (`string`, optional) Include application keys created on or after this date. Use format YYYY-MM-DD.
-   **created\_before\_date** (`string`, optional) Include application keys created on or before this date.
-   **filter\_string\_for\_application\_keys** (`string`, optional) Specify a string to filter the application keys by. Only keys containing the string will be shown.
-   **page\_number** (`integer`, optional) Specify the page number to be returned.
-   **page\_size** (`integer`, optional) Number of application keys to retrieve per page. The maximum allowed value is 100.
-   **sort\_order\_attribute** (`string`, optional) Attribute to sort application keys. Prefix with ’-’ for descending order. Options: created\_at, last4, name.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreateServiceAccountAppKey



Create an application key for a service account.

**Parameters**

-   **application\_key\_name** (`string`, required) The name for the application key to be created for the service account.
-   **service\_account\_identifier** (`string`, required) The unique identifier of the service account for which the application key will be created.
-   **application\_key\_scopes** (`array[string]`, optional) List of scopes to assign to the application key for specific permissions.
-   **application\_keys\_resource\_type** (`string`, optional) Specify the resource type for the application key. This should always be ‘application\_keys’.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteServiceAccountAppKey



Delete an application key from a service account.

**Parameters**

-   **application\_key\_id** (`string`, required) The unique identifier for the application key to be deleted.
-   **service\_account\_id** (`string`, required) The unique identifier for the service account from which the application key will be deleted.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetDatadogServiceAccountAppKey



Retrieve a specific application key for a Datadog service account.

**Parameters**

-   **application\_key\_id** (`string`, required) The ID of the application key for the Datadog service account.
-   **service\_account\_id** (`string`, required) The unique identifier for the Datadog service account to retrieve the application key from.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.EditServiceAccountKey



Edit an application key for a service account.

**Parameters**

-   **app\_key\_identifier** (`string`, required) The unique identifier of the application key to be edited.
-   **application\_key\_id** (`string`, required) The unique identifier for the application key to be edited.
-   **service\_account\_id** (`string`, required) The unique identifier for the service account.
-   **application\_key\_name** (`string`, optional) Name of the application key to be updated.
-   **application\_key\_resource\_type** (`string`, optional) Specify the type of resource for the application key. Must be ‘application\_keys’.
-   **application\_key\_scopes** (`array[string]`, optional) Array of scopes to grant the application key. Each scope is a string representing a permission or capability.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetServiceDefinitions



Retrieve all service definitions from the Datadog Service Catalog.

**Parameters**

-   **page\_number** (`integer`, optional) The specific page number to retrieve from the service definitions list.
-   **page\_size** (`integer`, optional) Specify the number of items per page. The maximum allowed value is 100.
-   **response\_schema\_version** (`string`, optional) Specifies the version of the schema to be returned in the response. Acceptable values are ‘v1’, ‘v2’, ‘v2.1’, or ‘v2.2’.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreateOrUpdateServiceDefinitions



Create or update service definitions in Datadog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteServiceDefinition



Deletes a service definition from Datadog.

**Parameters**

-   **service\_name** (`string`, required) The name of the service to delete from the Datadog Service Catalog.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetServiceDefinition



Retrieve a service definition from Datadog’s Service Catalog.

**Parameters**

-   **service\_name** (`string`, required) The exact name of the service to retrieve from Datadog’s Service Catalog.
-   **desired\_schema\_version** (`string`, optional) Specify the schema version for the response. Options: ‘v1’, ‘v2’, ‘v2.1’, ‘v2.2’.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListSecurityMonitoringSignals



Retrieve a list of security monitoring hist signals.

**Parameters**

-   **max\_security\_signals** (`integer`, optional) The maximum number of security signals to return in the response. Specify an integer value.
-   **maximum\_timestamp\_for\_signals** (`string`, optional) The latest timestamp to fetch security signals up to, formatted as a string.
-   **minimum\_timestamp** (`string`, optional) The minimum timestamp for requested security signals in ISO 8601 format.
-   **results\_page\_cursor** (`string`, optional) Cursor for paginated results, using the cursor from the previous query.
-   **search\_query** (`string`, optional) The search query to filter security signals. Use this to specify criteria for filtering the results.
-   **sort\_order** (`string`, optional) Determine the order of security signals: ‘timestamp’ for ascending, ‘-timestamp’ for descending.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.FindSecurityAlerts



Retrieve historical security monitoring signals from Datadog.

**Parameters**

-   **max\_security\_signals** (`integer`, optional) Specify the maximum number of security signals to retrieve in the response.
-   **maximum\_timestamp\_for\_signals** (`string`, optional) The maximum timestamp for requested security signals, formatted as a string.
-   **minimum\_timestamp** (`string`, optional) The start timestamp for filtering requested security signals. Use ISO 8601 format.
-   **pagination\_cursor** (`string`, optional) String used to fetch the next set of results based on a previous query’s cursor.
-   **search\_query\_for\_security\_signals** (`string`, optional) Search query to filter and list specific security signals. Use keywords and operators to refine results.
-   **sort\_order** (`string`, optional) The criteria for sorting security signals, either ‘timestamp’ or ‘-timestamp’.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetHistSignalDetails



Retrieve details of a specific hist signal.

**Parameters**

-   **historical\_signal\_id** (`string`, required) The ID of the historical signal to retrieve details for.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListHistoricalJobs



Retrieve a list of historical SIEM detection jobs from Datadog.

**Parameters**

-   **filter\_query** (`string`, optional) A query string to filter items in the list of historical jobs. Use to specify criteria for narrowing down the results.
-   **page\_number** (`integer`, optional) The specific page number to return from the results.
-   **page\_size** (`integer`, optional) Specifies the number of results per page, with a maximum of 100.
-   **sort\_order** (`string`, optional) Specifies the order in which jobs are returned, such as ascending or descending.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.RunHistoricalDetectionJob



Initiate a historical detection job in Datadog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ConvertJobResultToSignal



Convert a job result to a signal for detection purposes.

**Parameters**

-   **job\_result\_ids** (`array[string]`, optional) Array of job result IDs to convert into signals.
-   **notifications\_sent** (`array[string]`, optional) List of notification types sent related to the signal.
-   **payload\_type** (`string`, optional) Type of payload, must be ‘historicalDetectionsJobResultSignalConversion’.
-   **request\_id** (`string`, optional) A unique identifier for the request that is used to convert the job result to a signal.
-   **signal\_message** (`string`, optional) Message content of the generated signals to be converted.
-   **signal\_severity** (`string`, optional) Severity level of the security signal. Accepts values: info, low, medium, high, critical.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteHistoricalDetectionJob



Delete an existing historical detection job in Datadog.

**Parameters**

-   **job\_id** (`string`, required) The unique identifier for the historical job to be deleted.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetHistoricalJobDetails



Retrieve details of a specific historical job from Datadog.

**Parameters**

-   **job\_id** (`string`, required) The unique identifier for the job whose details you want to retrieve.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CancelHistoricalJob



Cancel a historical job in Datadog.

**Parameters**

-   **job\_id** (`string`, required) The unique identifier of the historical job to be canceled in Datadog.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetHistoricalSecuritySignals



Retrieve historical security signals by job ID.

**Parameters**

-   **job\_identifier** (`string`, required) The unique identifier for the job whose historical security signals you want to retrieve.
-   **max\_security\_signals** (`integer`, optional) The maximum number of security signals to retrieve in the response.
-   **max\_timestamp\_for\_signals** (`string`, optional) The latest timestamp for the requested security signals.
-   **minimum\_timestamp** (`string`, optional) The earliest timestamp for retrieving security signals. Format should be ISO 8601 (e.g., ‘2023-10-01T00:00:00Z’).
-   **pagination\_cursor** (`string`, optional) Use the cursor from the previous query to paginate results.
-   **security\_signal\_search\_query** (`string`, optional) The search query to filter security signals.
-   **signal\_sort\_order** (`string`, optional) Specify the sort order of the security signals, either ‘timestamp’ for ascending or ‘-timestamp’ for descending.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreateSloReportJob



Initiate the generation of an SLO report in Datadog.

**Parameters**

-   **from\_timestamp\_epoch\_seconds** (`integer`, required) The starting timestamp for the SLO report in epoch seconds. Specifies when the report should begin.
-   **report\_to\_timestamp** (`integer`, required) The epoch timestamp representing the end time for the SLO report.
-   **slo\_query\_filter** (`string`, required) The query string to filter SLO results, e.g., ‘service:web-app’ or ‘slo-name’.
-   **report\_generation\_frequency** (`string`, optional) The frequency for generating report data. Options: daily, weekly, monthly.
-   **report\_timezone** (`string`, optional) The timezone to determine the start and end of each interval for the SLO report. It affects how intervals such as weekly start at 12am on Sunday in the specified timezone.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DownloadSloReport



Download a completed SLO report from Datadog.

**Parameters**

-   **report\_id** (`string`, required) The unique identifier for the SLO report job to download.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetSloReportStatus



Retrieve the status of a specific SLO report job.

**Parameters**

-   **slo\_report\_id** (`string`, required) The unique identifier of the SLO report job to check its current status.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetSparkJobRecommendations



Retrieve resource recommendations for a Spark job.

**Parameters**

-   **spark\_job\_service\_name** (`string`, required) The service name for the Spark job to retrieve recommendations.
-   **spark\_job\_shard\_identifier** (`string`, required) The shard identifier for a Spark job, differentiating jobs within the same service with distinct resource requirements.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.AggregateSpansMetrics



Aggregate spans to compute metrics and timeseries.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListLatestSpans



Retrieve the latest spans based on a search query.

**Parameters**

-   **max\_spans\_limit** (`integer`, optional) The maximum number of spans to return in the response. Specify an integer value to limit the results.
-   **max\_timestamp\_for\_spans** (`string`, optional) Maximum timestamp for requested spans. Use ISO8601, date math, or millisecond timestamps.
-   **minimum\_timestamp** (`string`, optional) Minimum timestamp for requested spans. Accepts ISO8601, date math, or timestamps in milliseconds.
-   **pagination\_cursor** (`string`, optional) Cursor for paginating results, provided by the previous query execution.
-   **sort\_order\_of\_spans** (`string`, optional) Specify the order of spans in the results. Use ‘timestamp’ for ascending and ‘-timestamp’ for descending order.
-   **span\_search\_query** (`string`, optional) A search query following the spans syntax to filter the spans you want to retrieve.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListSpans



Fetch spans based on a search query with pagination.

**Parameters**

-   **end\_time\_filter** (`string`, optional) The maximum time for requested spans. Supports ISO8601, date math, or timestamps in milliseconds.
-   **max\_number\_of\_spans** (`integer`, optional) Maximum number of spans to return in the response. Integer value expected.
-   **minimum\_time\_filter** (`string`, optional) The minimum time for the requested spans. Supports ISO8601, date math, and timestamps (milliseconds).
-   **pagination\_cursor** (`string`, optional) A string cursor to fetch the next set of results from the previous query.
-   **resource\_type** (`string`, optional) The type of resource; must be set to ‘search\_request’ for the query.
-   **sort\_order\_for\_spans** (`string`, optional) Set the sort order for querying spans. Use ‘timestamp’ for ascending or ‘-timestamp’ for descending.
-   **span\_search\_query** (`string`, optional) The search query string following the span search syntax to filter spans.
-   **time\_offset\_seconds** (`integer`, optional) The time offset in seconds to apply to the query for adjusting the time frame.
-   **timezone\_option** (`string`, optional) Specify the timezone using GMT, UTC, an offset (e.g., UTC+1), or a Timezone Database ID (e.g., America/New\_York).

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetOnDemandConcurrencyCap



Retrieve the on-demand concurrency cap value from Datadog.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.SetOnDemandConcurrencyCap



Update the on-demand concurrency cap setting in Datadog.

**Parameters**

-   **on\_demand\_concurrency\_cap\_value** (`number`, optional) Specify the new value for the on-demand concurrency cap in Datadog.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListTagPipelineRulesets



Retrieve all tag pipeline rulesets for the organization.

**Parameters**

This tool does not take any parameters. **Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreateTagPipelineRuleset



Create a tag pipeline ruleset with specified rules.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ReorderTagPipelineRulesets



Change the execution order of tag pipeline rulesets.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ValidateTagPipelineQuery



Validate the syntax and structure of a tag pipeline query.

**Parameters**

-   **query\_attributes** (`string`, optional) The tag pipeline query to validate. Ensure it is correctly structured and free of syntax errors.
-   **query\_request\_data\_id** (`string`, optional) The unique identifier for the RulesValidateQueryRequestData.
-   **query\_resource\_type** (`string`, optional) Specify the type of resource for query validation, always use ‘validate\_query’.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteTagPipelineRuleset



Delete an existing tag pipeline ruleset by ID.

**Parameters**

-   **ruleset\_id** (`string`, required) The unique identifier for the tag pipeline ruleset to be deleted.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetTagPipelineRuleset



Retrieve a specific tag pipeline ruleset by its ID.

**Parameters**

-   **ruleset\_identifier** (`string`, required) The unique identifier for the tag pipeline ruleset to retrieve.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateTagPipelineRuleset



Update an existing tag pipeline ruleset with new rules.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **ruleset\_identifier** (`string`, optional) A unique string identifier for the tag pipeline ruleset to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListTeams



Retrieve all teams with optional filters.

**Parameters**

-   **fields\_to\_fetch** (`array[string]`, optional) List of fields to retrieve for each team.
-   **include\_only\_user\_teams** (`boolean`, optional) When true, only teams the current user belongs to are returned.
-   **include\_related\_resources** (`array[string]`, optional) Specify related resources to include. Options: `team_links`, `user_team_permissions`.
-   **page\_number** (`integer`, optional) The specific page number to return for the list of teams.
-   **page\_size** (`integer`, optional) Specify the number of teams to return per page, up to a maximum of 100.
-   **search\_query\_for\_teams** (`string`, optional) Search for teams by name, handle, or team member email.
-   **sort\_order** (`string`, optional) Determines the order of the returned teams. Options: ‘name’, ‘-name’, ‘user\_count’, ‘-user\_count’.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreateNewTeam



Create a new team and add specified members.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.SyncDatadogTeamsWithGithub



Link existing Datadog teams with GitHub teams by name matching.

**Parameters**

-   **source\_platform** (`string`, required) Specify the external source platform for team synchronization. Only “github” is supported.
-   **synchronization\_type** (`string`, required) Type of synchronization operation. Only “link” is supported to match existing teams by name.
-   **team\_sync\_bulk\_type** (`string`, required) Specifies the type for bulk team synchronization. Use ‘team\_sync\_bulk’.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListAllMemberTeams



Retrieve all member teams for a super team.

**Parameters**

-   **super\_team\_identifier** (`string`, required) The unique identifier for the super team whose member teams you want to retrieve.
-   **fields\_to\_fetch** (`array[string]`, optional) A list of field names to be fetched for each team. Specify the fields you need details on.
-   **page\_number** (`integer`, optional) Specific page number to return in the list of teams.
-   **page\_size** (`integer`, optional) Size for a given page. Must be an integer up to 100.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.AddMemberTeamToSuperTeam



Add a member team to a super team.

**Parameters**

-   **member\_team\_identifier** (`string`, required) The unique identifier of the member team to be added to the super team.
-   **super\_team\_identifier** (`string`, required) The ID of the super team to which the member team will be added. It is a string value.
-   **member\_team\_type** (`string`, optional) Specifies the type of member team to be added. Must be ‘member\_teams’.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.RemoveTeamMember



Removes a member team from a super team.

**Parameters**

-   **member\_team\_identifier** (`string`, required) The unique ID of the member team to be removed from the super team.
-   **super\_team\_id** (`string`, required) The unique identifier for the super team from which a member team will be removed.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteTeam



Remove a team using its ID in Datadog.

**Parameters**

-   **team\_identifier** (`string`, required) The unique identifier for the team to be deleted in Datadog.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetSingleTeamInfo



Retrieve details of a team using its ID.

**Parameters**

-   **team\_id** (`string`, required) The unique identifier for the team. Provide this to retrieve specific team details.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateTeamInfo



Update and modify a team’s configuration in Datadog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **team\_identifier** (`string`, optional) The unique identifier for the team to be updated. Must be a valid string representing the team’s ID in Datadog. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetAllTeamLinks



Retrieve all links for a specific team.

**Parameters**

-   **team\_identifier** (`string`, required) The unique identifier for the team whose links are to be retrieved.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.AddTeamLink



Add a new link to a Datadog team.

**Parameters**

-   **link\_label** (`string`, required) The label for the link to be added to the team. This should be a descriptive text for the link.
-   **link\_url** (`string`, required) The URL to be added as a link for the team. This should be a valid web address.
-   **target\_team\_id** (`string`, required) The unique identifier for the team to which the link will be added.
-   **link\_position** (`integer`, optional) The position of the link in the team’s list, used for sorting links.
-   **team\_id\_for\_link** (`string`, optional) ID of the team the link is associated with. This should be a unique identifier for the specific team to which you want to add the link.
-   **team\_link\_type** (`string`, optional) Specify the type of team link. Must be ‘team\_links’.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.RemoveTeamLink



Remove a link from a team.

**Parameters**

-   **link\_identifier** (`string`, required) The unique identifier of the link to be removed from the team.
-   **team\_id** (`string`, required) The unique identifier of the team from which the link will be removed. Required for identifying the specific team.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetTeamLink



Retrieve a specific link for a team.

**Parameters**

-   **link\_id** (`string`, required) The unique identifier for the specific link you want to retrieve for a team in Datadog.
-   **team\_id** (`string`, required) The unique identifier for the team whose link you want to retrieve.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateTeamLink



Updates a team link in Datadog.

**Parameters**

-   **link\_identifier** (`string`, required) The unique identifier for the link you want to update.
-   **link\_label** (`string`, required) Specify the label for the link. This is used to identify or name the link within the team’s list of links.
-   **link\_url** (`string`, required) The URL for the team link. Provide a valid, well-formed URL.
-   **team\_identifier** (`string`, required) The unique string identifier for the team related to the link.
-   **link\_position** (`integer`, optional) The position of the link in the list, used to sort links for the team.
-   **team\_id\_associated\_with\_link** (`string`, optional) The ID of the team associated with the link to be updated.
-   **team\_link\_type** (`string`, optional) Specifies the type of team link. Must be ‘team\_links’.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetTeamMembers



Retrieve a list of team members.

**Parameters**

-   **team\_id** (`string`, required) The unique identifier for the team whose members are to be retrieved.
-   **page\_number** (`integer`, optional) The specific page number to retrieve from the list of team members.
-   **page\_size** (`integer`, optional) Specify the number of team members to return per page. Maximum is 100.
-   **search\_query** (`string`, optional) Search query for filtering members by user email or name.
-   **sort\_order** (`string`, optional) Specify the order of returned team memberships. Options include ‘manager\_name’, ‘-manager\_name’, ‘name’, ‘-name’, ‘handle’, ‘-handle’, ‘email’, ‘-email’.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.AddUserToTeam



Add a user to a team in Datadog.

**Parameters**

-   **team\_id** (`string`, required) The ID of the team to which the user will be added. This is required to specify the target team.
-   **provisioned\_user\_or\_service\_account\_id** (`string`, optional) UUID of the User or Service Account who provisioned the team membership, or null if done via SAML mapping.
-   **provisioning\_mechanism** (`string`, optional) Mechanism responsible for provisioning the team relationship. Possible values: null for user-added, “service\_account” for service account, “saml\_mapping” for SAML mapping.
-   **team\_identifier** (`string`, optional) The unique ID of the team to which the user will be added.
-   **team\_membership\_type** (`string`, optional) Specify the type of team membership. Use ‘team\_memberships’.
-   **user\_id** (`string`, optional) The ID of the user to be added to the team in Datadog.
-   **user\_role\_in\_team** (`string`, optional) Specifies the user’s role within the team. Currently, only ‘admin’ is supported as a role.
-   **user\_team\_type** (`string`, optional) Specifies the type for the team relationship, fixed as ‘team’.
-   **user\_team\_user\_type** (`string`, optional) Set to ‘users’ as the type for the user in the team.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.RemoveUserFromTeam



Remove a user from a specified team.

**Parameters**

-   **team\_identifier** (`string`, required) A string representing the unique identifier of the team from which the user will be removed.
-   **user\_identifier\_for\_removal** (`string`, required) The unique identifier of the user to be removed from the team.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateUserTeamMembership



Update a user’s membership attributes on a team.

**Parameters**

-   **team\_id** (`string`, required) The unique identifier of the team to update the user’s membership attributes.
-   **user\_identifier** (`string`, required) The unique identifier for the user whose membership is being updated. This is required to specify which user’s attributes will be changed.
-   **provisioning\_identifier** (`string`, optional) UUID of the User or Service Account who provisioned this team membership, or null if provisioned via SAML mapping.
-   **provisioning\_mechanism** (`string`, optional) Specifies how the team relationship was provisioned. Options: null, “service\_account”, “saml\_mapping”.
-   **team\_membership\_type** (`string`, optional) Specify the type of team membership. The value must be ‘team\_memberships’.
-   **user\_role\_in\_team** (`string`, optional) Specify the user’s role within the team. Accepts ‘admin’.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetTeamPermissionSettings



Retrieve permission settings for a specific team.

**Parameters**

-   **team\_identifier** (`string`, required) The unique identifier for the team whose permission settings are to be retrieved.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateTeamPermission



Update a team’s permission setting in Datadog.

**Parameters**

-   **action\_to\_update** (`string`, required) The specific action to update in the team’s permission setting, specifying what can be performed.
-   **team\_identifier** (`string`, required) The unique identifier of the team for which the permission setting will be updated.
-   **allowed\_user\_type\_for\_action** (`string`, optional) Specify the user type permitted to perform the action. Options: admins, members, organization, user\_access\_manage, teams\_manage.
-   **team\_permission\_setting\_type** (`string`, optional) Specify the team permission setting type. Required value: ‘team\_permission\_settings’.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.SearchFlakyTests



Retrieve a list of flaky tests with pagination support.

**Parameters**

-   **filter\_query** (`string`, optional) Search query for filtering flaky tests using log syntax. Keys include ‘flaky\_test\_state’, ‘flaky\_test\_category’, ‘@test.name’, ‘@test.suite’, ‘@test.module’, ‘@test.service’, ‘@git.repository.id\_v2’, ‘@git.branch’, ‘@test.codeowners’, ‘env’.
-   **maximum\_flaky\_tests\_limit** (`integer`, optional) Specify the maximum number of flaky tests to include in the response.
-   **pagination\_cursor** (`string`, optional) A cursor from the previous request to fetch the following results.
-   **request\_data\_type** (`string`, optional) Defines the data structure type for the Flaky Tests Search request. Use ‘search\_flaky\_tests\_request’.
-   **sort\_flaky\_tests** (`string`, optional) Sort flaky test results by specified criteria: FQN, first or last flaked, failure rate, etc. Use prefixed ’-’ for descending order.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetBillingDimensionMapping



Retrieve the mapping of billing dimensions to API keys.

**Parameters**

-   **billing\_dimension\_view** (`string`, optional) Specify ‘active’ for current contract mappings or ‘all’ for all mappings. Defaults to ‘active’.
-   **billing\_month** (`string`, optional) Date in ISO-8601 format (UTC) for the starting month of mappings. Defaults to the current month.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetEstimatedCostDatadog



Retrieve estimated cost data for multi-org Datadog accounts.

**Parameters**

-   **cost\_end\_month** (`string`, optional) Specify the ending month for the estimated cost in ISO-8601 format, UTC (`[YYYY-MM]`).
-   **cost\_view\_level** (`string`, optional) Specify if cost is broken down at the parent-org level (summary) or sub-org level (sub-org). Defaults to summary.
-   **end\_date** (`string`, optional) Specify the end date for cost estimation in ISO-8601 format (YYYY-MM-DD). It marks the last day of the period for which you need cost data.
-   **include\_connected\_accounts** (`boolean`, optional) Include accounts connected as partner customers in Datadog’s partner network program. Defaults to `false`.
-   **initial\_cost\_month** (`string`, optional) ISO-8601 month format `[YYYY-MM]`, specifying the start month for cost data. Cannot be older than two months. Provide `end_month` for month-over-month cost.
-   **start\_date\_for\_cost** (`string`, optional) Datetime in ISO-8601 format, UTC, precise to day: `[YYYY-MM-DD]` for cost beginning this day. Either specify `start_date_for_cost` or `start_month_for_cost`, but not both. The date cannot be more than two months in the past. Use with `end_date_for_cost` for cumulative day-over-day cost.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetHistoricalCostByOrg



Retrieve historical cost data across different organizations.

**Parameters**

-   **start\_month\_utc** (`string`, required) ISO-8601 date format `[YYYY-MM]`, UTC timezone, to specify the start month for cost calculation.
-   **cost\_view\_level** (`string`, optional) Specify cost breakdown level: ‘summary’ for parent-org or ‘sub-org’ for sub-org level. Defaults to ‘summary’.
-   **end\_month** (`string`, optional) Datetime in ISO-8601 format, UTC, precise to month `[YYYY-MM]` indicating the ending month for cost data.
-   **include\_connected\_accounts** (`boolean`, optional) Include accounts connected as partner customers in Datadog’s network. Defaults to false.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetHourlyUsageByProductFamily



Fetch hourly usage data by product family from Datadog.

**Parameters**

-   **product\_families\_to\_retrieve** (`string`, required) Comma-separated list of product families to retrieve usage data for. Available options include all, analyzed\_logs, application\_security, etc. Note: audit\_logs is deprecated.
-   **start\_timestamp** (`string`, required) Datetime in ISO-8601 format, UTC, precise to hour. Specify the start of usage collection, e.g., ‘2023-10-05T14’.
-   **end\_timestamp** (`string`, optional) Datetime in ISO-8601 format (UTC) for usage ending before this hour. Format: \[YYYY-MM-DDThh\].
-   **include\_connected\_accounts** (`boolean`, optional) Include accounts connected as partner customers in the response. Defaults to false.
-   **include\_descendants\_usage** (`boolean`, optional) Include child organization usage in the response. Set to true to include, false to exclude.
-   **include\_usage\_breakdown** (`boolean`, optional) Boolean to include breakdown of usage by subcategories for product family logs. Defaults to false.
-   **maximum\_results\_limit** (`integer`, optional) Set the maximum number of results to return per page, between 1 and 500. Defaults to 500.
-   **next\_record\_id** (`string`, optional) ID to continue listing results from the last query. Use the ID from previous queries to paginate through results.
-   **product\_family\_versions** (`string`, optional) Comma-separated list of product family versions in the format `product_family:version`. Defaults to latest if not specified.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetProjectedCost



Retrieve projected cost for multi-org and single root-org accounts.

**Parameters**

-   **cost\_view\_level** (`string`, optional) Specify cost breakdown level: `summary` for parent-org or `sub-org` for sub-org level. Defaults to `summary`.
-   **include\_connected\_accounts** (`boolean`, optional) Include accounts connected as partner customers in the Datadog partner network. Defaults to `false`.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.SendInvitations



Invite users to join the organization via email.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetUserInvitation



Retrieve a user invitation using its UUID.

**Parameters**

-   **user\_invitation\_uuid** (`string`, required) The unique UUID of the user invitation required to retrieve its details.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListAllOrganizationUsers



Retrieve all users in the organization including inactive ones.

**Parameters**

-   **order\_users\_by** (`string`, optional) Specify the user attribute to order results by. Options include `name`, `modified_at`, and `user_count`. Use a negative sign for descending order, e.g., `-name`.
-   **page\_number** (`integer`, optional) The specific page number of users to return. Use for pagination.
-   **page\_size** (`integer`, optional) Specifies the number of users to be returned in a single page. The maximum value allowed is 100.
-   **sort\_direction** (`string`, optional) Direction of sort for user listing. Options: ‘asc’ for ascending, ‘desc’ for descending.
-   **user\_filter\_string** (`string`, optional) String to filter users by. Defaults to no filtering if blank or omitted.
-   **user\_status\_filter** (`string`, optional) Filter users by status. Comma separated values: `Active`, `Pending`, `Disabled`. Defaults to no filtering.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreateOrganizationUser



Create a user for your organization in Datadog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DisableUser



Disable a specific user in the system.

**Parameters**

-   **user\_identifier** (`string`, required) The unique identifier of the user to be disabled.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetUserDetails



Retrieve details of a specific user by their user ID.

**Parameters**

-   **user\_id** (`string`, required) The unique identifier for the user whose details are being retrieved.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateDatadogUser



Update a user’s information in Datadog.

**Parameters**

-   **user\_id** (`string`, required) The unique identifier for the user to be updated in Datadog.
-   **user\_identifier** (`string`, required) The unique ID of the user to be updated in Datadog.
-   **disable\_user** (`boolean`, optional) Boolean value to set if the user is disabled (true) or enabled (false).
-   **user\_email** (`string`, optional) The email address of the user to be updated in Datadog.
-   **user\_name** (`string`, optional) The name of the user to be updated in Datadog.
-   **user\_resource\_type** (`string`, optional) Specifies the resource type for the user. Must be set to ‘users’.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetUserOrganizations



Retrieve a user’s organizations and information.

**Parameters**

-   **user\_identifier** (`string`, required) The unique ID of the user whose organizations and information are to be retrieved.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetUserPermissions



Retrieve a user’s permissions from Datadog.

**Parameters**

-   **user\_identifier** (`string`, required) The unique identifier for the Datadog user whose permissions you want to retrieve.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetUserMemberships



Retrieve a user’s memberships from Datadog.

**Parameters**

-   **user\_uuid** (`string`, required) The unique identifier for the user whose memberships are to be retrieved.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CreateDatadogWorkflow



Creates a new workflow in Datadog and returns its ID.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.DeleteWorkflow



Delete a specified workflow by its ID.

**Parameters**

-   **workflow\_id** (`string`, required) The ID of the workflow to be deleted. Ensure it is a valid and existing workflow ID in Datadog.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetWorkflowById



Retrieve workflow details using a unique ID.

**Parameters**

-   **workflow\_identifier** (`string`, required) The unique ID of the workflow to retrieve details for within Datadog.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.UpdateWorkflowById



Update a specific workflow by its ID.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **workflow\_identifier** (`string`, optional) The unique identifier for the workflow you wish to update in Datadog. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ListWorkflowInstances



Retrieve all instances of a specific workflow from Datadog.

**Parameters**

-   **workflow\_id** (`string`, required) The ID of the workflow to retrieve instances for.
-   **page\_number** (`integer`, optional) The specific page number to return when listing workflow instances.
-   **page\_size** (`integer`, optional) Size for a given page. Must be an integer with a maximum value of 100.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.ExecuteWorkflow



Execute a specified workflow in Datadog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **workflow\_identifier** (`string`, optional) The unique ID of the Datadog workflow to be executed. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.GetWorkflowInstance



Retrieve a specific workflow execution instance.

**Parameters**

-   **workflow\_id** (`string`, required) The unique identifier of the workflow to retrieve its specific execution details.
-   **workflow\_instance\_id** (`string`, required) The ID of the specific workflow instance to retrieve.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## DatadogApi.CancelWorkflowInstance



Cancel a specific execution of a workflow.

**Parameters**

-   **workflow\_id** (`string`, required) The unique ID of the workflow to cancel. It must be a valid string as per the API specifications.
-   **workflow\_instance\_id** (`string`, required) The unique identifier of the workflow instance to be canceled.

**Secrets**

This tool requires the following secrets: `DATADOG_API_KEY`, `DATADOG_APPLICATION_KEY`, `DATADOG_BASE_URL`. You can obtain these from your [Datadog Organization Settings](https://app.datadoghq.com/organization-settings/api-keys)  under API Keys and Application Keys. See the [Authentication section](#authentication) above for detailed instructions and the [Datadog API documentation](https://docs.datadoghq.com/account_management/api-app-keys/)  for more information.

## Reference

Below is a reference of enumerations used by some of the tools in the DatadogApi MCP Server:

### ToolMode

-   **GET\_REQUEST\_SCHEMA**: `get_request_schema`
-   **EXECUTE**: `execute`

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_datadog_api ``` Learn more](/guides/deployment-hosting.md)

Last updated on February 7, 2026

[CursorAgentsApi](/en/resources/integrations/development/cursor-agents-api.md)
[GithubApi](/en/resources/integrations/development/github-api.md)
