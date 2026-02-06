---
title: "PosthogApi"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Developer Tools](/en/resources/integrations/development/e2b.md)
PostHog API

# PosthogApi

Arcade Unoptimized

**Description:** Tools that enable LLMs to interact directly with the PostHog API.

**Author:** Arcade

**Auth:** API Key

[![PyPI Version](https://img.shields.io/pypi/v/arcade_posthog_api)](https://pypi.org/project/arcade_posthog_api/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_posthog_api)](https://pypi.org/project/arcade_posthog_api/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_posthog_api)](https://pypi.org/project/arcade_posthog_api/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_posthog_api)](https://pypi.org/project/arcade_posthog_api/)

PosthogApi is a [Unoptimized MCP Server](/guides/create-tools/improve/types-of-tools.md#unoptimized-tools)
: each tool mirrors one HTTP endpoint and offers LLMs a way to interact with the low-level API.



Differently from [Optimized MCP Servers](/guides/create-tools/improve/types-of-tools.md#optimized-tools)
, Unoptimized tools are heavily influenced by the original API design, which is not usually optimized for LLM usage. For this reason, we recommend thoroughly evaluating the tools with your Agents or chatbots before using it in production. [Read more](/guides/create-tools/improve/types-of-tools.md) about Optimized vs Unoptimized tools.

The PosthogApi MCP Server offers a comprehensive suite of tools for managing and analyzing data within the PostHog platform. Users can leverage these tools to:

## Configuration

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md)) The PosthogApi MCP Server requires two secrets to authenticate with your PostHog instance:

### Getting Your PostHog Server URL

The server URL depends on your PostHog deployment:

-   **PostHog Cloud (US Region)**: `https://us.posthog.com`
-   **PostHog Cloud (EU Region)**: `https://eu.posthog.com`
-   **Self-Hosted**: Use your instance’s base URL (e.g., `https://analytics.yourdomain.com`)

You can verify your server URL by checking your PostHog account settings or the URL you use to access PostHog.

### Getting Your Personal API Key

To generate a PostHog personal API key:

1.  Log in to your PostHog account
2.  Click your avatar in the bottom-left corner
3.  Select the gear icon to open “Account settings”
4.  Navigate to the “Personal API Keys” section
5.  Click ”+ Create a personal API key”
6.  Provide a descriptive label for the key
7.  Select the necessary scopes (choose only the scopes required for your use case)
8.  Click “Create key”
9.  **Copy and securely store the key immediately** - it won’t be shown again

For more details on authentication and API usage, refer to the [PostHog API documentation](https://posthog.com/docs/api) .

Once you have both values, configure them as secrets when using the PosthogApi MCP Server. Learn more about [configuring secrets](/guides/create-tools/tool-basics/create-tool-secrets.md).

## Available Tools

Tool Name

Description

PosthogApi.RetrieveAppMetrics

Retrieve application metrics for a specific project environment.

PosthogApi.RetrieveAppMetricsErrorDetails

Retrieve detailed error metrics for a specific app.

PosthogApi.RetrieveAppMetricsExports

Retrieve historical app metrics exports for a project.

PosthogApi.RetrieveHistoricalAppMetrics

Retrieve historical app metrics for a specific environment.

PosthogApi.ListEnvBatchExports

Retrieve the list of batch exports for a specific environment.

PosthogApi.CreateBatchExportForEnvironments

Initiate a batch export for selected environments.

PosthogApi.ListBatchExportBackfills

Retrieve a list of batch export backfills.

PosthogApi.CreateBackfillForBatchExport

Create a new backfill for a BatchExport.

PosthogApi.RetrieveBatchExportBackfill

Retrieve details of a batch export backfill.

PosthogApi.CancelBatchExportBackfill

Cancel a batch export backfill process.

PosthogApi.ListEnvironmentExports

Fetches a list of batch export runs for a given environment.

PosthogApi.RetrieveEnvironmentExportRun

Retrieve details of a specific environment export run.

PosthogApi.CancelBatchExportRun

Cancel an ongoing batch export run.

PosthogApi.RetrieveEnvironmentBatchExportLogs

Retrieve logs from a specific environment batch export run.

PosthogApi.RetryBatchExportRun

Initiate a retry of a batch export run.

PosthogApi.RetrieveEnvironmentBatchExport

Retrieve details of a specific environment batch export.

PosthogApi.UpdateEnvironmentBatchExports

Update environment batch exports details.

PosthogApi.UpdateEnvironmentExport

Update environment export batch details.

PosthogApi.DeleteBatchExport

Delete a batch export in a specific environment.

PosthogApi.TriggerBatchExportBackfill

Trigger a backfill for a BatchExport.

PosthogApi.RetrieveEnvironmentLogs

Retrieve logs from environment batch exports.

PosthogApi.PauseBatchExport

Pause a batch export operation.

PosthogApi.RunEnvironmentTestStep

Initiate a test step execution for environment batch exports.

PosthogApi.UnpauseBatchExport

Unpause a paused BatchExport to resume data export.

PosthogApi.CreateEnvironmentBatchExport

Initiate a batch export for environment tests.

PosthogApi.GetEnvironmentsBatchExportStatus

Gets the status of a test batch export for environments.

PosthogApi.ListEnvironmentDashboards

Retrieve dashboards for a specific environment.

PosthogApi.CreateEnvironmentDashboard

Create a new dashboard within a specific environment.

PosthogApi.ListCollaboratorsOnDashboard

Retrieve collaborators for a dashboard in a project.

PosthogApi.AddDashboardCollaborator

Add a collaborator to a specific dashboard.

PosthogApi.RemoveDashboardCollaborator

Remove a collaborator from a dashboard in a specific environment.

PosthogApi.ListSharedDashboards

Retrieve shared dashboard information for a specified project.

PosthogApi.CreateDashboardSharingPassword

Create a password for sharing a dashboard.

PosthogApi.DeleteDashboardSharingPassword

Delete a password from a dashboard's sharing configuration.

PosthogApi.RefreshDashboardSharing

Refresh a dashboard's sharing link in Datadog environments.

PosthogApi.GetEnvironmentDashboard

Retrieve a specific dashboard for an environment.

PosthogApi.UpdateEnvironmentDashboard

Update settings of an environment dashboard.

PosthogApi.UpdateDashboardEnvironment

Update specific dashboard settings in an environment.

PosthogApi.DeleteDashboard

Mark a dashboard as deleted.

PosthogApi.MoveDashboardTile

Move a tile's position in a specific dashboard.

PosthogApi.StreamDashboardTiles

Stream dashboard metadata and tiles via Server-Sent Events.

PosthogApi.CreateEnvironmentDashboardFromTemplate

Create an environment dashboard from a template.

PosthogApi.ListDataColorThemes

Retrieve data color themes for a specific environment.

PosthogApi.CreateDataColorTheme

Create a new data color theme for the environment.

PosthogApi.RetrieveEnvironmentColorTheme

Retrieve color theme data for a specific environment.

PosthogApi.UpdateEnvironmentColorTheme

Update the color theme of an environment.

PosthogApi.UpdateEnvironmentTheme

Update color themes for project environments.

PosthogApi.DeleteEnvironmentColorTheme

Delete a specific environment's color theme in Datadog.

PosthogApi.ListEnvironmentDatasetItems

Retrieve dataset items for a specific environment.

PosthogApi.CreateEnvironmentDatasetItem

Create a dataset item in the specified environment.

PosthogApi.RetrieveEnvironmentDatasetItem

Retrieve a specific environment dataset item by ID.

PosthogApi.UpdateEnvironmentDatasetItem

Update an environment dataset item in a project.

PosthogApi.ModifyEnvironmentDatasetItem

Update specific fields in an environment dataset item.

PosthogApi.DeleteEnvironmentDatasetItem

Marks a dataset item in an environment as deleted.

PosthogApi.ListEnvironmentDatasets

Retrieve datasets for a specified project environment.

PosthogApi.CreateEnvironmentDataset

Create a dataset environment in a specified project.

PosthogApi.RetrieveEnvironmentDataset

Retrieve a specific environment dataset by ID.

PosthogApi.UpdateEnvironmentDataset

Updates details of a specific environment dataset.

PosthogApi.ModifyEnvironmentDataset

Update dataset in a specific environment.

PosthogApi.DeleteDataset

Delete a dataset by setting it to deleted status.

PosthogApi.FetchEndpointRunStatus

Retrieve the run status of an endpoint.

PosthogApi.UpdateEnvironmentEndpoint

Update an existing environment endpoint.

PosthogApi.GetLastExecutionTimes

Retrieve last execution times for multiple endpoints.

PosthogApi.ListErrorTrackingAssignmentRules

Retrieve error tracking assignment rules for a given environment.

PosthogApi.CreateErrorTrackingAssignmentRule

Create a new error tracking assignment rule.

PosthogApi.RetrieveErrorTrackingAssignmentRules

Retrieve error tracking assignment rules for a project.

PosthogApi.UpdateErrorTrackingRules

Updates error tracking assignment rules for a project.

PosthogApi.UpdateErrorTrackingAssignmentRules

Partially update error tracking assignment rules for environments.

PosthogApi.DeleteErrorTrackingRule

Deletes a specified error tracking assignment rule.

PosthogApi.ReorderAssignmentRules

Reorder error tracking assignment rules in a project environment.

PosthogApi.ListErrorTrackingFingerprints

Retrieve error tracking fingerprints for a specific project.

PosthogApi.GetErrorTrackingFingerprint

Retrieve a specific error tracking fingerprint by ID.

PosthogApi.DeleteErrorFingerprint

Mark an error fingerprint as deleted in Datadog.

PosthogApi.ResolveGithubFileLinks

Resolve GitHub file links for error tracking projects.

PosthogApi.ListErrorTrackingGroupingRules

Retrieve error tracking grouping rules for a project.

PosthogApi.CreateErrorTrackingGroupingRule

Create a new error tracking grouping rule for a project.

PosthogApi.RetrieveErrorGroupingRules

Retrieve error tracking grouping rules for an environment.

PosthogApi.UpdateErrorTrackingGroupingRules

Update error tracking grouping rules for a project.

PosthogApi.ModifyGroupingRules

Update error tracking grouping rules for a project.

PosthogApi.RemoveErrorTrackingRule

Delete an error tracking grouping rule in a project.

PosthogApi.ReorderErrorTrackingRules

Reorder error tracking grouping rules in a project.

PosthogApi.ListErrorTrackingReleases

Retrieve releases from error tracking for a specific environment.

PosthogApi.CreateErrorTrackingRelease

Create a new error tracking release for a project.

PosthogApi.RetrieveErrorTrackingRelease

Retrieves details of a specific error tracking release.

PosthogApi.UpdateErrorTrackingReleases

Update error tracking releases in a project environment.

PosthogApi.UpdateErrorTrackingRelease

Update details for an error tracking release.

PosthogApi.DeleteErrorTrackingRelease

Deletes a specific error tracking release from a project environment.

PosthogApi.RetrieveErrorTrackingReleaseHash

Retrieve details for a specific error tracking release hash.

PosthogApi.ListErrorTrackingSuppressionRules

List error tracking suppression rules for a project environment.

PosthogApi.CreateErrorTrackingSuppressionRule

Create a new error tracking suppression rule.

PosthogApi.GetSuppressionRuleDetails

Retrieve details of a suppression rule in error tracking.

PosthogApi.UpdateErrorTrackingSuppressionRules

Update error tracking suppression rules for a project.

PosthogApi.UpdateErrorSuppressionRule

Update error tracking suppression rules for a project.

PosthogApi.RemoveErrorSuppressionRule

Delete an error tracking suppression rule.

PosthogApi.ReorderErrorTrackingSuppressionRules

Reorder error tracking suppression rules for a project.

PosthogApi.ListErrorTrackingSymbolSets

Retrieve error tracking symbol sets for a project.

PosthogApi.CreateSymbolSet

Create a new symbol set for error tracking in a project.

PosthogApi.RetrieveErrorTrackingSymbolSet

Retrieve details of a specific error tracking symbol set.

PosthogApi.UpdateEnvironmentSymbolSet

Update error tracking symbol sets in environments.

PosthogApi.UpdateErrorTrackingSymbols

Update symbol sets for error tracking in a specific environment.

PosthogApi.DeleteSymbolSet

Deletes an error tracking symbol set by ID.

PosthogApi.CompleteSymbolSetUpload

Finalize the upload of symbol sets in Datadog error tracking.

PosthogApi.CompleteSymbolSetsUpload

Complete the uploading process for symbol sets in error tracking.

PosthogApi.StartErrorTrackingUpload

Initiate a bulk upload for error tracking symbols.

PosthogApi.StartSymbolUpload

Initiate symbol set upload for error tracking environments.

PosthogApi.CreateEvaluationRun

Initiate a new evaluation run for a project.

PosthogApi.ListEnvironmentEvaluations

Retrieve evaluations for a specific project environment.

PosthogApi.CreateEnvironmentEvaluation

Create a new environment evaluation for a project.

PosthogApi.RetrieveEnvironmentEvaluation

Retrieve details of a specific environment evaluation.

PosthogApi.UpdateEnvironmentEvaluation

Update an environment's evaluation in a project.

PosthogApi.ModifyEnvironmentEvaluation

Update specific environment evaluation details.

PosthogApi.DeleteEvaluation

Marks an evaluation as deleted in the environment.

PosthogApi.RetrieveEnvironmentEvent

Retrieve details of a specific environment event.

PosthogApi.RetrieveEnvironmentEventValues

Retrieve event values for a specific environment.

PosthogApi.EnvironmentExportsOverview

Retrieve a list of exports for a specified environment.

PosthogApi.CreateEnvironmentExports

Initiates the creation of environment exports in Datadog.

PosthogApi.RetrieveEnvironmentExports

Retrieve details of an environment export in Datadog.

PosthogApi.RetrieveEnvironmentExportContent

Retrieve content of a specific environment export.

PosthogApi.ListProjectFileSystems

Retrieve file systems for a given project environment.

PosthogApi.CreateFileSystemEnvironment

Create a new file system environment in a project.

PosthogApi.GetEnvironmentFileSystemDetails

Retrieve details of a file system in a specific environment.

PosthogApi.UpdateEnvironmentFileSystem

Update a file system for a specific environment.

PosthogApi.ModifyEnvironmentFileSystem

Partially update a file system environment in a project.

PosthogApi.DeleteFilesystemEnvironment

Deletes a file system in the specified environment.

PosthogApi.GetFileCountInFolder

Retrieve the count of all files in a specified folder.

PosthogApi.CreateEnvironmentFileSystemLink

Create a link between environment and file system.

PosthogApi.MoveFileWithinEnvironment

Move a file within an environment's file system.

PosthogApi.CountFilesInDirectory

Get count of all files in a specified folder.

PosthogApi.CreateEnvironmentFileSystemLogView

Create a file system log view for an environment.

PosthogApi.RetrieveUnfiledFileSystemItems

Retrieve unfiled file system items for a project.

PosthogApi.ListFileSystemShortcuts

Retrieve file system shortcuts for a specified project.

PosthogApi.CreateFileSystemShortcut

Create a file system shortcut for a project environment.

PosthogApi.RetrieveFileSystemShortcut

Retrieve details of a specific file system shortcut.

PosthogApi.UpdateEnvFileSystemShortcut

Updates a file system shortcut in a specified environment.

PosthogApi.ModifyEnvFileSystemShortcut

Update a file system shortcut in a specific environment.

PosthogApi.DeleteFileSystemShortcut

Deletes a file system shortcut in an environment.

PosthogApi.ListEnvironmentGroups

Retrieve all groups for a specific environment's group type.

PosthogApi.CreateEnvironmentGroup

Create a new environment group in a project.

PosthogApi.RetrieveEnvironmentGroupActivity

Retrieve activity data for groups within an environment.

PosthogApi.DeleteEnvironmentGroupProperty

Deletes a property from an environment group.

PosthogApi.FindEnvironmentGroups

Retrieve details of environment groups by project ID.

PosthogApi.RetrieveEnvironmentPropertyDefinitions

Retrieve property definitions for environment groups.

PosthogApi.RetrieveEnvironmentPropertyValues

Retrieve property values of environments within a project.

PosthogApi.GetRelatedEnvironmentGroups

Retrieve related environment groups for a project.

PosthogApi.UpdateEnvironmentGroupProperty

Update a property of an environment group.

PosthogApi.ListProjectHogFunctions

Retrieve a list of hog functions for a given project.

PosthogApi.CreateHogFunctionEnvironment

Track and create a new file system view in an environment.

PosthogApi.TrackHogFunctionViews

Tracks views on a specific hog function by logging access.

PosthogApi.UpdateHogFunctions

Update and log views of file system resources.

PosthogApi.UpdateHogFunctionViewLog

Log a new view for an environment's hog function.

PosthogApi.DeleteHogFunction

Marks a hog function as deleted in a project.

PosthogApi.CreateHogFunctionBroadcast

Create a broadcast for hog functions in an environment.

PosthogApi.TrackHogFunctionInvocation

Track and log hog function invocations in a project.

PosthogApi.RetrieveHogFunctionLogs

Retrieve logs for hog function views in an environment.

PosthogApi.RetrieveHogFunctionMetrics

Retrieve hog function metrics for a specific environment.

PosthogApi.RetrieveHogFunctionMetricsTotals

Retrieve total metrics for a specific HOG function.

PosthogApi.RetrieveHogFunctionIcon

Retrieve the icon for a specified hog function view access.

PosthogApi.RetrieveEnvironmentHogFunctionIcons

Logs and retrieves hog function icons for a given environment.

PosthogApi.UpdateHogFunctionsOrder

Update the execution order of HogFunctions.

PosthogApi.GetEnvironmentInsights

Retrieve insights for a specific environment.

PosthogApi.CreateEnvironmentInsight

Create a new insight for an environment.

PosthogApi.ListEnvironmentInsights

Retrieve sharing details of environment insights.

PosthogApi.CreateSharingPassword

Create a new password for sharing configuration.

PosthogApi.DeleteInsightSharingPassword

Delete a password from an insight's sharing configuration.

PosthogApi.RefreshInsightsSharing

Refresh sharing status of insights in a project.

PosthogApi.FetchEnvironmentInsights

Retrieve insights for a specific environment.

PosthogApi.UpdateEnvironmentInsights

Update insights for a specified environment.

PosthogApi.UpdateEnvironmentInsightsLog

Log a view of environment insights to track changes.

PosthogApi.DeleteEnvironmentInsight

Marks an environment insight as deleted.

PosthogApi.RetrieveEnvironmentInsightActivity

Retrieve logs of views on environment insights.

PosthogApi.TrackEnvironmentInsights

Retrieve and log environment activity insights.

PosthogApi.CancelInsightCreation

Cancel the creation of an environment insight.

PosthogApi.RetrieveLastViewedInsights

Fetches the last 5 insights viewed, sorted by recency.

PosthogApi.UpdateInsightViewTimestamps

Updates the view timestamps for specific insights.

PosthogApi.ListEnvironmentIntegrations

Retrieve a list of integrations for a specified environment.

PosthogApi.CreateEnvironmentIntegration

Create a new integration for a specified environment.

PosthogApi.RetrieveIntegrationDetails

Retrieve integration details for a specific environment.

PosthogApi.DeleteEnvironmentIntegration

Delete an integration from a project environment.

PosthogApi.RetrieveIntegrationChannels

Retrieve integration channels for a specific project.

PosthogApi.RetrieveClickupLists

Retrieve ClickUp lists for specific project integrations.

PosthogApi.GetClickupSpaces

Retrieve ClickUp spaces for a specific integration.

PosthogApi.GetClickupWorkspaces

Retrieve ClickUp workspaces for a specific integration.

PosthogApi.VerifyEmailIntegration

Verify email address for an integration's environment.

PosthogApi.GetGithubReposForIntegration

Retrieve GitHub repositories linked to a Datadog integration.

PosthogApi.RetrieveGoogleAccessibleAccounts

Retrieve Google accessible accounts for a given integration.

PosthogApi.GetGoogleConversionActions

Retrieve Google conversion actions for a specific environment.

PosthogApi.RetrieveIntegrationTeams

Retrieve linear teams for an integration in a project.

PosthogApi.GetLinkedinAdsAccounts

Retrieve LinkedIn Ads accounts linked to a project.

PosthogApi.RetrieveLinkedinAdsConversionRules

Retrieve LinkedIn Ads conversion rules for a project.

PosthogApi.GetTwilioPhoneNumbers

Retrieve Twilio phone numbers for a specific integration.

PosthogApi.RetrieveIntegrationAuthorization

Retrieve integration authorization status for a project.

PosthogApi.RetrieveEnvironmentLogAttributes

Retrieve log attributes for a specific environment.

PosthogApi.CreateLogsQueryForEnvironment

Create a logs query for a specific environment.

PosthogApi.CreateEnvironmentLogSparkline

Create a sparkline for environment logs in Datadog.

PosthogApi.RetrieveEnvironmentLogsValues

Fetch log values for a given environment and project.

PosthogApi.CreateMaxToolsInsight

Create an insight for maximum tools in a project.

PosthogApi.GetPersistedFolders

Retrieve a list of persisted folders for a given environment.

PosthogApi.CreatePersistedFolder

Create a persisted folder in a Datadog environment.

PosthogApi.RetrievePersistedEnvironmentFolder

Retrieve details of a persisted environment folder by ID.

PosthogApi.UpdateEnvironmentFolder

Update a specific folder in an environment project.

PosthogApi.ModifyEnvFolder

Partially update a specific environment folder.

PosthogApi.DeletePersistedFolder

Delete a persisted folder from a project environment.

PosthogApi.RetrievePersonDetails

Retrieve details of a specific person in a project.

PosthogApi.UpdatePersonProperties

Update specific properties of a person in a project.

PosthogApi.ModifyPersonsInEnvironment

Modify or remove persons in a given environment.

PosthogApi.DeletePersonRecord

Deletes an individual person record from a project.

PosthogApi.RetrievePersonActivity

Retrieve a person's activity from the environment.

PosthogApi.QueuePersonEventsDeletion

Queue the deletion of all events for a specific person.

PosthogApi.DeletePersonProperty

Deletes a specific property from a person.

PosthogApi.DeletePersonRecordings

Queue deletion of all recordings associated with a person.

PosthogApi.RetrievePersonPropertyTimeline

Retrieve timeline of property changes for a person.

PosthogApi.ReadOrDeletePerson

Read or delete a person's record in the environment.

PosthogApi.UpdatePersonProperty

Update a specific property for a person in an environment.

PosthogApi.GetPersonsActivity

Retrieve activity data for persons in a project environment.

PosthogApi.BulkDeletePersonsInEnvironment

Bulk delete persons by IDs in a Datadog environment.

PosthogApi.RetrievePersonsCohorts

Retrieve persons cohort data from specified environments.

PosthogApi.FetchPersonsFunnelData

Fetch persons data from the funnel in a specified environment.

PosthogApi.CreatePersonsFunnel

Create a funnel for tracking persons.

PosthogApi.RetrievePersonsFunnelCorrelation

Retrieve persons related to funnel correlation in an environment.

PosthogApi.CreatePersonsFunnelCorrelation

Create a funnel correlation for persons in a project.

PosthogApi.RetrievePersonsLifecycle

Retrieve lifecycle details of persons in a project.

PosthogApi.ResetDistinctId

Reset a distinct\_id for a deleted person.

PosthogApi.RetrievePersonStickiness

Retrieve stickiness data for persons in a project environment.

PosthogApi.RetrievePersonsTrends

Retrieve trends data for persons in a specified environment.

PosthogApi.RetrievePersonsData

Retrieve information about persons in a specified environment.

PosthogApi.ListEnvironmentPluginLogs

Retrieve logs for a plugin configuration in a specific environment.

PosthogApi.GetEnvironmentQueryResults

Retrieve results of an environment query for a project.

PosthogApi.DeleteEnvironmentQuery

Delete a specific query environment.

PosthogApi.RetrieveQueryLogDetails

Retrieve query log details for a given query ID.

PosthogApi.CheckPosthogEnvAuthenticationAsync

Check authentication for Datadog environment asynchronously.

PosthogApi.RetrieveEnvironmentDraftSql

Retrieve draft SQL for a specific environment.

PosthogApi.ListSyntheticPlaylists

Retrieve synthetic session recording playlists.

PosthogApi.CreateSessionRecordingPlaylist

Create a new session recording playlist for an environment.

PosthogApi.RetrieveSessionRecordingPlaylists

Retrieve a session recording playlist for a specific project.

PosthogApi.UpdateSessionRecordingPlaylist

Update a session recording playlist within an environment.

PosthogApi.ModifyRecordingPlaylist

Update session recording playlists for a given project and ID.

PosthogApi.DeleteSessionRecordingPlaylist

Mark a session recording playlist as deleted.

PosthogApi.RetrieveSessionRecordings

Retrieve session recordings for a specified playlist.

PosthogApi.CreateSessionRecordingPlaylistEntry

Add a recording to a session playlist.

PosthogApi.DeleteSessionRecording

Deletes a session recording from a playlist.

PosthogApi.ListSessionRecordings

Retrieve session recordings for a specific environment.

PosthogApi.RetrieveSessionRecording

Retrieve a specific session recording by ID.

PosthogApi.ModifySessionRecording

Update session recording details for a specific environment.

PosthogApi.UpdateSessionRecording

Partially update session recording details.

PosthogApi.RemoveSessionRecording

Delete a session recording from an environment.

PosthogApi.ListSessionRecordingSharing

Retrieve sharing details for a specific session recording.

PosthogApi.GenerateRecordingPassword

Create a password for session recording sharing.

PosthogApi.DeleteSharingPassword

Delete a password from the sharing configuration.

PosthogApi.RefreshSessionRecordingSharing

Refreshes the sharing status of a session recording.

PosthogApi.GenerateSessionSummaries

Generate AI summaries for session recordings.

PosthogApi.GenerateIndividualSessionSummary

Generate individual AI summaries for each session.

PosthogApi.RetrieveEnvironmentSessionProperties

Retrieve session property definitions for an environment.

PosthogApi.GetEnvironmentSessionValues

Retrieve session values for a specific environment.

PosthogApi.ListEnvironmentSubscriptions

Retrieve subscriptions for environment projects.

PosthogApi.CreateEnvironmentSubscription

Create a new subscription for an environment.

PosthogApi.RetrieveSubscriptionDetails

Retrieve details of a project's subscription environment.

PosthogApi.UpdateEnvironmentSubscription

Update environment subscription for a project.

PosthogApi.ModifyEnvironmentSubscription

Update a subscription for a specific environment.

PosthogApi.DeleteEnvironmentSubscription

Marks an environment subscription as deleted in Datadog.

PosthogApi.ListUserInterviews

Retrieve user interviews for a project environment.

PosthogApi.CreateUserInterviewEnvironment

Create a user interview environment in a project.

PosthogApi.RetrieveUserInterview

Retrieve details of a specific user interview.

PosthogApi.UpdateUserInterviewEnvironment

Update environment details for a user interview.

PosthogApi.ModifyInterviewEnvironment

Partially update a user interview environment.

PosthogApi.DeleteUserInterview

Delete a user interview from an environment.

PosthogApi.ListWarehouseSavedQueries

Retrieve a list of saved warehouse queries for a project.

PosthogApi.CreateWarehouseSavedQuery

Create a new warehouse saved query.

PosthogApi.GetWarehouseSavedQuery

Retrieve details of a warehouse saved query.

PosthogApi.UpdateWarehouseQuery

Updates a saved query in the data warehouse.

PosthogApi.UpdateWarehouseSavedQuery

Update a warehouse saved query in a specified environment.

PosthogApi.DeleteSavedQuery

Delete a saved query from the warehouse.

PosthogApi.RetrieveEnvironmentQueryActivity

Retrieve activity details of a saved warehouse query.

PosthogApi.FetchSavedQueryAncestors

Retrieve ancestors of a saved query, including parents and beyond.

PosthogApi.CancelSavedQueryWorkflow

Cancel a running saved query workflow in Datadog.

PosthogApi.GetDescendantsSavedQuery

Retrieve descendants of a specified saved query.

PosthogApi.UndoMaterializationPosthog

Revert materialization to the original view in Datadog.

PosthogApi.RunSavedQuery

Execute a saved query in the Datadog environment.

PosthogApi.ListWarehouseTables

Retrieve a list of warehouse tables for a given environment.

PosthogApi.CreateWarehouseTable

Create a new warehouse table for a specified environment.

PosthogApi.RetrieveWarehouseTable

Retrieve details of a specific warehouse table.

PosthogApi.ModifyWarehouseTable

Update a specific warehouse table's information.

PosthogApi.UpdateWarehouseTable

Update specific warehouse tables in a project.

PosthogApi.DeleteWarehouseTable

Delete a specific warehouse table in a project.

PosthogApi.RefreshWarehouseTableSchema

Refresh the schema of a warehouse table.

PosthogApi.UpdateWarehouseTableSchema

Update the schema of a warehouse table.

PosthogApi.ManageWarehouseTable

Create a warehouse table in Datadog environments.

PosthogApi.RetrieveWebVitals

Retrieve web vitals for a specific project environment.

PosthogApi.ListOrganizations

Retrieve a list of organizations.

PosthogApi.CreateOrganization

Create a new organization in Datadog.

PosthogApi.GetOrganizationDetails

Retrieve details of a specific organization.

PosthogApi.UpdateOrganizationDetails

Update details for a specific organization.

PosthogApi.UpdateOrganizationInfo

Partially update organization information.

PosthogApi.DeleteOrganization

Delete an organization from Datadog.

PosthogApi.RollbackEnvironmentsMigration

Trigger rollback migration for multi-environment projects.

PosthogApi.ListBatchExports

Retrieve a list of batch exports for an organization.

PosthogApi.CreateBatchExports

Create a new batch export for an organization.

PosthogApi.RetrieveBatchExportDetails

Retrieve details of a specific batch export in an organization.

PosthogApi.UpdateBatchExports

Update batch exports for a specific organization.

PosthogApi.ModifyBatchExports

Update batch exports for an organization.

PosthogApi.RemoveBatchExport

Delete a batch export from an organization.

PosthogApi.InitiateExportBackfill

Triggers a backfill for a BatchExport.

PosthogApi.RetrieveBatchExportLogs

Retrieve logs from a specific batch export.

PosthogApi.HaltBatchExport

Pause an ongoing BatchExport process.

PosthogApi.RunBatchExportTestStep

Run a test step for a batch export in Datadog.

PosthogApi.ResumeBatchExport

Unpause a paused BatchExport for a given organization.

PosthogApi.RunTestStepNewForBatchExports

Run a new test step for batch exports.

PosthogApi.RetrieveBatchExportsTest

Retrieve batch exports test details for an organization.

PosthogApi.ListOrganizationDomains

Retrieve a list of domains for a specified organization.

PosthogApi.CreateDomainInOrganization

Add a new domain to an organization.

PosthogApi.RetrieveDomainDetails

Fetch details of a specific domain in an organization.

PosthogApi.UpdateOrganizationDomain

Update an organization's domain using Datadog's API.

PosthogApi.UpdateDomainPartial

Partially update domain information for an organization.

PosthogApi.DeleteDomain

Remove a domain from an organization.

PosthogApi.VerifyDomainForOrg

Verify a domain for a specified organization.

PosthogApi.ListOrganizationInvites

Retrieve all pending invites for an organization.

PosthogApi.CreateOrganizationInvite

Send an invitation to join an organization.

PosthogApi.CancelInvitation

Cancels an invitation to join an organization.

PosthogApi.CreateBulkInvites

Create bulk invites for an organization.

PosthogApi.ListOrganizationMembers

Retrieve the list of members in an organization.

PosthogApi.UpdateOrganizationMember

Update a member's information in an organization.

PosthogApi.UpdateOrganizationMemberDetails

Update details of an organization member in Datadog.

PosthogApi.RemoveOrganizationMember

Remove a member from an organization.

PosthogApi.RetrieveMemberScopedApiKeys

Retrieve scoped API keys for a member in an organization.

PosthogApi.GetCurrentOrgProjects

Retrieve projects for the current organization.

PosthogApi.CreateProjectForOrganization

Create a new project for the current organization.

PosthogApi.GetOrganizationProjectDetails

Fetch details of a specific project within an organization.

PosthogApi.UpdateProjectDetails

Update project details for the current organization.

PosthogApi.UpdateOrganizationProject

Update a project's details within an organization.

PosthogApi.DeleteProject

Deletes a project from the current organization.

PosthogApi.RetrieveProjectActivity

Retrieve project activity for a specific organization and project.

PosthogApi.UpdateProjectProductIntent

Update product intent for a specific project in an organization.

PosthogApi.CreateOrganizationProject

Create a project for the current organization.

PosthogApi.UpdateProjectOnboardingStatus

Update the onboarding status of a project in an organization.

PosthogApi.DeleteSecretTokenBackup

Deletes a secret token backup for a specified project.

PosthogApi.CheckDemoDataGenerationStatus

Check if demo data is being generated for a project.

PosthogApi.ResetProjectToken

Reset a project's token in the current organization.

PosthogApi.RotateSecretTokenForProject

Rotate the secret token for a specific project.

PosthogApi.GetProxyRecords

Retrieve proxy records for a given organization.

PosthogApi.CreateProxyRecords

Create a proxy record for an organization.

PosthogApi.RetrieveProxyRecord

Retrieve details of a specific proxy record.

PosthogApi.UpdateProxyRecord

Update a proxy record within an organization.

PosthogApi.ModifyProxyRecord

Update partial details of a proxy record.

PosthogApi.DeleteProxyRecord

Deletes a proxy record for an organization.

PosthogApi.ListOrganizationRoles

Fetches the list of roles for a specified organization.

PosthogApi.CreateRoleInOrganization

Create a new role within an organization.

PosthogApi.RetrieveRoleDetails

Retrieve details of a specific role within an organization.

PosthogApi.UpdateOrganizationRole

Update an organization's role details.

PosthogApi.UpdateRoleDetails

Partially update organization role details.

PosthogApi.DeleteRoleInOrganization

Delete a specific role within an organization.

PosthogApi.ListRoleMemberships

Retrieve role memberships for a specified role within an organization.

PosthogApi.CreateRoleMembership

Create a role membership in an organization.

PosthogApi.RemoveRoleMembership

Remove a role membership from an organization.

PosthogApi.ListProjectActions

Retrieve and log actions for a specific project.

PosthogApi.LogTrackFilesystemViews

Log a new view for file system access tracking.

PosthogApi.RetrieveProjectAction

Retrieve logs for a specific project action.

PosthogApi.UpdateProjectAction

Update and track views for a project action in Datadog.

PosthogApi.UpdateActionPartial

Partially update an action in a project to track views.

PosthogApi.MarkActionAsDeleted

Mark an action as deleted in a specific project.

PosthogApi.GetProjectActivityLog

Fetch the activity log for a specific project.

PosthogApi.ListAvailableAgents

Retrieve a list of agent definitions for tasks.

PosthogApi.RetrieveAgentDefinition

Retrieve a specific agent definition by ID.

PosthogApi.ListAnnotationsForProject

Retrieve annotations for a specific project.

PosthogApi.CreateAnnotation

Create a new annotation for a project.

PosthogApi.RetrieveProjectAnnotation

Retrieve details of a specific annotation by ID.

PosthogApi.UpdateAnnotation

Update an existing annotation by ID.

PosthogApi.ModifyAnnotation

Update specific details of an annotation in a project.

PosthogApi.DeleteAnnotation

Mark an annotation as deleted in a project.

PosthogApi.GetAppMetrics

Retrieve application metrics for a specific project and ID.

PosthogApi.GetErrorDetailsForAppMetrics

Retrieve error details for specific app metrics.

PosthogApi.FetchMetricsHistory

Retrieve historical exports of app metrics.

PosthogApi.RetrieveAppMetricsHistoricalExports

Retrieve historical export data for app metrics.

PosthogApi.FetchBatchExports

Retrieve a list of batch exports for a specific project.

PosthogApi.CreateBatchExport

Initiate a batch export for a project.

PosthogApi.ListBackfillExports

Retrieve list of batch export backfills for a project.

PosthogApi.CreateBatchExportBackfill

Create a new backfill for a batch export.

PosthogApi.GetBatchExportBackfill

Retrieve details of a specific batch export backfill.

PosthogApi.TerminateBatchExportBackfill

Cancel a batch export backfill in Datadog.

PosthogApi.ListBatchExportRuns

Retrieve batch export runs for a specific project and export.

PosthogApi.RetrieveBatchExportRun

Retrieve details of a specific batch export run.

PosthogApi.StopBatchExportRun

Cancel an ongoing batch export run in a specific project.

PosthogApi.RetrieveBatchExportRunLogs

Retrieve logs for a specific batch export run.

PosthogApi.RetryExportRun

Retry a batch export run in Datadog.

PosthogApi.RetrievePosthogBatchExports

Retrieve specific Datadog batch export details.

PosthogApi.UpdateBatchExport

Update an existing batch export in a project.

PosthogApi.EditBatchExports

Update specific details of batch exports.

PosthogApi.DestroyBatchExport

Deletes a specific batch export in a project.

PosthogApi.StartBatchExportBackfill

Initiate a backfill process for a BatchExport.

PosthogApi.RetrieveLogExports

Retrieve logs from batch exports by project and export ID.

PosthogApi.SuspendBatchExport

Pause an ongoing batch export process in a project.

PosthogApi.RunTestStepBatchExport

Initiate a test step for batch exports.

PosthogApi.ReactivateBatchExport

Unpause a paused BatchExport in a project.

PosthogApi.RunBatchExportsTestStep

Triggers a test step for batch exports in a specified project.

PosthogApi.RetrieveBatchExportTests

Retrieve batch export test details for a project.

PosthogApi.ListProjectCohorts

Retrieve a list of cohorts for a given project.

PosthogApi.CreateCohortTracking

Logs a new view on the resource for tracking purposes.

PosthogApi.RetrieveCohortsData

Retrieve cohort details and access logs for a project.

PosthogApi.ModifyCohortViews

Update cohort views to track new file system accesses.

PosthogApi.UpdateCohortViews

Update and track cohort file system views.

PosthogApi.SetCohortDeleted

Mark a cohort as deleted in the Datadog project.

PosthogApi.GetCohortActivity

Retrieve logs of file system views for a cohort.

PosthogApi.AddPersonsToStaticCohort

Add persons to a static cohort in Datadog.

PosthogApi.RetrieveCohortCalculationHistory

Retrieve calculation history for a specific cohort.

PosthogApi.CreateStaticCohortCopy

Create a static copy of a dynamic cohort.

PosthogApi.GetCohortPersons

Retrieve a list of persons in a specific project cohort.

PosthogApi.RemovePersonFromStaticCohort

Removes a person from a static cohort in a project.

PosthogApi.RetrieveCohortActivity

Retrieve logs of cohort activity views.

PosthogApi.ListDashboardTemplates

Retrieve a list of dashboard templates for a project.

PosthogApi.CreateDashboardTemplate

Create a new dashboard template in a Datadog project.

PosthogApi.RetrieveDashboardTemplate

Retrieve a specific dashboard template by ID.

PosthogApi.ModifyDashboardTemplate

Update a Datadog dashboard template.

PosthogApi.UpdateDashboardTemplate

Partially update a dashboard template in Datadog.

PosthogApi.DeleteDashboardTemplate

Mark a Datadog dashboard template as deleted.

PosthogApi.RetrieveDashboardTemplateSchema

Retrieve JSON schema for dashboard templates.

PosthogApi.GetAvailableDashboards

Retrieve a list of dashboards for a specific project.

PosthogApi.CreateDashboard

Create a new dashboard for a specified project.

PosthogApi.ListDashboardCollaborators

Retrieve the list of collaborators for a dashboard.

PosthogApi.CreateDashboardCollaborator

Add a collaborator to a specified dashboard.

PosthogApi.DeleteCollaboratorFromDashboard

Remove a collaborator from a specific dashboard.

PosthogApi.ListDashboardShares

Retrieve information about how dashboards are shared.

PosthogApi.SetDashboardSharingPassword

Create a new password for dashboard sharing configuration.

PosthogApi.RemoveDashboardSharingPassword

Remove a password from a dashboard's sharing configuration.

PosthogApi.RefreshDashboardSharingLink

Refresh the sharing link for a specific dashboard.

PosthogApi.GetDashboardDetails

Retrieve details of a specific dashboard.

PosthogApi.UpdateDashboard

Update a specific Datadog dashboard.

PosthogApi.UpdateDashboardPartial

Partially update a dashboard's details.

PosthogApi.RemoveDashboard

Request the deletion of a specified dashboard.

PosthogApi.UpdateDashboardTilePosition

Repositions a tile on a Datadog dashboard.

PosthogApi.RetrieveDashboardTiles

Stream metadata and tiles of a dashboard.

PosthogApi.CreateDashboardFromTemplate

Create a dashboard from a template JSON.

PosthogApi.FetchDataColorThemes

Retrieve a list of data color themes for a project.

PosthogApi.AddDataColorTheme

Create a new data color theme for a project.

PosthogApi.RetrieveDataColorTheme

Retrieve details of a specific data color theme.

PosthogApi.UpdateDataColorTheme

Update the color theme for a specific project.

PosthogApi.ModifyDataTheme

Update a specific data color theme for a project.

PosthogApi.DeleteDataColorTheme

Delete a data color theme from a project.

PosthogApi.ListProjectDatasetItems

Retrieve dataset items for a specific project in Datadog.

PosthogApi.CreateDatasetItem

Create a new dataset item in a specified project.

PosthogApi.RetrieveDatasetItem

Retrieve details of a specific dataset item.

PosthogApi.UpdateDatasetItem

Update an existing dataset item with new information.

PosthogApi.ModifyDatasetItem

Update specific details of a dataset item.

PosthogApi.SetDatasetItemDeleted

Mark a dataset item as deleted in a project.

PosthogApi.ListDatasets

Retrieve a list of datasets for a specific project.

PosthogApi.CreateDatasetProject

Create a new dataset within a specified project.

PosthogApi.RetrieveDatasetInfo

Retrieve details of a specific dataset in a project.

PosthogApi.UpdateDataset

Update a specific dataset within a project.

PosthogApi.UpdateDatasetInfo

Update specific dataset information in a project.

PosthogApi.DeleteDatasetById

Facilitates marking a dataset as deleted in a project.

PosthogApi.GetEarlyAccessFeatures

Retrieve a list of early access features for a project.

PosthogApi.CreateEarlyAccessFeatureTracking

Create tracking for early access feature views.

PosthogApi.RetrieveEarlyAccessFeature

Retrieve information about an early access feature.

PosthogApi.ModifyEarlyAccessFeature

Update early access feature for a project.

PosthogApi.UpdateEarlyAccessFeature

Update an early access feature for a project.

PosthogApi.RemoveEarlyAccessFeature

Remove an early access feature from a project.

PosthogApi.RetrievePosthogEndpointRun

Retrieve details of a specific Datadog endpoint run.

PosthogApi.UpdateEndpoint

Update an existing endpoint run in a project.

PosthogApi.FetchRecentExecutionTimes

Fetch the last 6 months of execution times for endpoints.

PosthogApi.ListProjectEnvironments

Get a list of environments for a specific project.

PosthogApi.CreateProjectEnvironment

Create a new environment for a specific project.

PosthogApi.GetProjectEnvironmentDetails

Retrieve details of a specific environment within a project.

PosthogApi.EditProjectEnvironment

Update environment settings for a specified project.

PosthogApi.ModifyProjectEnvironment

Update a specific environment of a project.

PosthogApi.DeleteEnvironment

Delete a specific environment from a project.

PosthogApi.GetEnvironmentActivity

Retrieve project environment activity details.

PosthogApi.UpdateProjectEnvironment

Update product intent for a project environment.

PosthogApi.CompleteProjectOnboarding

Mark a project's product onboarding as complete in an organization.

PosthogApi.RetrieveDefaultEvaluationTags

Retrieve default evaluation tags for a project environment.

PosthogApi.CreateDefaultEvaluationTags

Manage default evaluation tags for a team environment.

PosthogApi.DeleteDefaultEvaluationTags

Delete default evaluation tags for a project environment.

PosthogApi.DeleteEnvSecretTokenBackup

Deletes a secret token backup in a project environment.

PosthogApi.GetProjectEventRestrictions

Retrieve event ingestion restrictions for a project environment.

PosthogApi.DemoDataStatus

Check if an environment is generating demo data.

PosthogApi.ResetProjectEnvironmentToken

Resets the token for a specified project environment.

PosthogApi.RotateEnvironmentSecretToken

Rotate the secret token for a project environment.

PosthogApi.RetrieveEventDefinitions

Retrieve event definitions for a specified project.

PosthogApi.RetrieveEventDefinition

Retrieve details of a specific event definition by ID.

PosthogApi.UpdateEventDefinition

Update an existing event definition in a project.

PosthogApi.ModifyEventDefinition

Update an event definition in a project.

PosthogApi.DeleteEventDefinition

Delete an event definition by ID and project.

PosthogApi.RetrieveEventDefinitionMetrics

Retrieve metrics for a specific event definition.

PosthogApi.RetrieveEventDetails

Retrieve details of a specific event.

PosthogApi.RetrieveEventValues

Retrieve event values for a specified project.

PosthogApi.GetExperimentHoldouts

Retrieve the list of experiment holdouts for a project.

PosthogApi.CreateExperimentHoldout

Create a new experiment holdout within a project.

PosthogApi.GetExperimentHoldout

Retrieve details of a specific experiment holdout from a project.

PosthogApi.UpdateExperimentHoldout

Update an experiment holdout in a specific project.

PosthogApi.ModifyExperimentHoldout

Update the details of an experiment holdout.

PosthogApi.DeleteExperimentHoldout

Delete an experiment holdout from a project.

PosthogApi.ListExperimentSavedMetrics

Retrieve saved metrics for an experiment in a project.

PosthogApi.CreateExperimentSavedMetrics

Create and save metrics for an experiment in a project.

PosthogApi.RetrieveExperimentMetrics

Retrieve saved experiment metrics from a project.

PosthogApi.UpdateExperimentSavedMetrics

Update saved metrics for a specific experiment in Datadog.

PosthogApi.UpdateExperimentMetrics

Update saved metrics for a specific experiment.

PosthogApi.DeleteSavedMetric

Deletes a saved experimental metric.

PosthogApi.ListPosthogExperiments

Retrieve a list of experiments from a Datadog project.

PosthogApi.CreateExperimentInProject

Create a new experiment within a specified project.

PosthogApi.GetProjectExperimentDetails

Retrieve details of a specific experiment within a project.

PosthogApi.UpdateExperiment

Update details of a specific experiment in a project.

PosthogApi.UpdateExperimentDetails

Partially update experiment details in a project.

PosthogApi.DeleteExperiment

Delete an experiment by setting it as deleted.

PosthogApi.CreateExposureCohortForExperiment

Create an exposure cohort for an experiment.

PosthogApi.DuplicateExperimentPosthog

Create a duplicate of a specific experiment.

PosthogApi.CreateExperimentTimeseriesRecalculation

Initiate recalculation of experiment timeseries data.

PosthogApi.RetrieveExperimentTimeseries

Retrieve timeseries data for an experiment-metric pair.

PosthogApi.ListExperimentsEligibleFeatureFlags

Retrieve feature flags eligible for experiments.

PosthogApi.RetrieveExperimentsFlagStatus

Retrieve status of experiments requiring flag implementation.

PosthogApi.ListProjectExports

Retrieve a list of exports for a given project ID.

PosthogApi.CreateExports

Initiate the export process for Datadog projects.

PosthogApi.RetrieveProjectExport

Retrieve data of a specific project export.

PosthogApi.RetrieveExportedContent

Retrieve exported content from a specific project.

PosthogApi.ListFeatureFlags

Retrieve feature flags for a specified project.

PosthogApi.CreateFeatureFlag

Create a new feature flag in a specific project.

PosthogApi.RetrieveFeatureFlags

Retrieve details of a specific feature flag.

PosthogApi.ModifyFeatureFlags

Update existing feature flags in a project.

PosthogApi.UpdateFeatureFlags

Update feature flags for a specific project.

PosthogApi.MarkFeatureFlagDeleted

Mark a feature flag as deleted.

PosthogApi.RetrieveFeatureFlagActivity

Retrieve activity details for a specific feature flag.

PosthogApi.CreateStaticCohortForFeatureFlag

Create a static cohort for a specific feature flag.

PosthogApi.CreateFeatureFlagsDashboard

Create a dashboard for feature flags in a project.

PosthogApi.CreateFeatureFlagUsageDashboard

Create or manage feature flag usage dashboards.

PosthogApi.RetrieveFeatureFlagConfig

Retrieve remote configuration of a specific feature flag.

PosthogApi.RetrieveFeatureFlagStatus

Retrieve the status of a specific feature flag for a project.

PosthogApi.RetrieveFeatureFlagsActivity

Retrieve feature flags activity for a specific project.

PosthogApi.GetFeatureFlagKeys

Retrieve feature flag keys using a list of IDs.

PosthogApi.RetrieveFeatureFlagsEvaluationReasons

Retrieve evaluation reasons for feature flags by project.

PosthogApi.RetrieveLocalFeatureFlags

Retrieve feature flags for local evaluation in a project.

PosthogApi.GetFeatureFlags

Retrieve current feature flags for a user's project.

PosthogApi.CreateFeatureFlagBlastRadius

Create a feature flag blast radius for a project.

PosthogApi.ListFileSystems

Fetches the list of file systems for a given project.

PosthogApi.CreateProjectFileSystem

Create a file system for a specified project.

PosthogApi.RetrieveFileSystemInfo

Retrieve detailed file system information for a project.

PosthogApi.UpdateFileSystem

Updates a file system in a specific project by ID.

PosthogApi.ModifyFileSystem

Update specific details of a file system.

PosthogApi.DeleteFileSystem

Delete a specified file system in a project.

PosthogApi.FetchFolderFileCount

Get the count of all files in a folder.

PosthogApi.CreateFileSystemLink

Create a link for a file system in a specific project.

PosthogApi.MoveFileSystemEntry

Moves a file system entry to a new location within the project.

PosthogApi.FetchFileCountByPath

Retrieve the count of files in a specified folder.

PosthogApi.CreateFileSystemLogView

Create a new file system log view for a project.

PosthogApi.RetrieveUnfiledFiles

Retrieve unfiled files for a specific project.

PosthogApi.GetFileShortcuts

Retrieve a list of file system shortcuts for a given project.

PosthogApi.FileSystemShortcutCreate

Create a file system shortcut in a specific project.

PosthogApi.GetFileSystemShortcut

Retrieve details of a file system shortcut.

PosthogApi.ModifyFileSystemShortcut

Update a file system shortcut in a specified project.

PosthogApi.UpdateFileSystemShortcut

Update a file system shortcut in a project.

PosthogApi.RemoveFileSystemShortcut

Delete a file system shortcut from a project.

PosthogApi.GetFeatureFlagValues

Retrieve possible values for a feature flag.

PosthogApi.ListGroupsByType

Retrieve all groups for a specified group type.

PosthogApi.CreateProjectGroup

Create a new group in a specified project.

PosthogApi.RetrieveGroupActivity

Fetches activity data for specified project groups.

PosthogApi.DeleteGroupProperty

Delete a group property in a Datadog project.

PosthogApi.RetrieveProjectGroups

Retrieve group details for a specific project.

PosthogApi.RetrieveGroupPropertyDefinitions

Retrieve group property definitions for a project.

PosthogApi.RetrieveGroupPropertyValues

Retrieve property values for groups within a project.

PosthogApi.RetrieveRelatedGroups

Retrieve related groups for a specific project in Datadog.

PosthogApi.UpdateGroupProperty

Update a property of a group within a project.

PosthogApi.ListGroupTypes

Retrieve list of group types for a specific project.

PosthogApi.DeleteGroupType

Delete a specified group type in a project.

PosthogApi.GetGroupTypeMetrics

Retrieve metrics for a specific group type in a project.

PosthogApi.CreateGroupTypeMetric

Create a new metric for a specific group type.

PosthogApi.RetrieveGroupTypeMetric

Retrieve metrics for a specific group type.

PosthogApi.UpdateGroupTypeMetrics

Updates metrics for a specified group type in a project.

PosthogApi.UpdateMetricsForGroupType

Update metrics for a specific group type in a project.

PosthogApi.DeleteGroupTypeMetric

Delete a specific metric from a group type.

PosthogApi.UpdateGroupDashboard

Update a project's group detail dashboard.

PosthogApi.UpdateDefaultGroupColumns

Update default columns for group types in a project.

PosthogApi.UpdateGroupTypeMetadata

Updates metadata for group types in a project.

PosthogApi.ListHogFunctions

Retrieve a list of hog functions for a project.

PosthogApi.CreateHogFunction

Log a new file system view for a specified project.

PosthogApi.RetrieveProjectHogFunction

Retrieve details of a hog function in a project.

PosthogApi.ModifyHogFunctions

Update and track file system views for hog functions.

PosthogApi.UpdateHogFunctionViews

Log and update views for hog functions in a project.

PosthogApi.RemoveHogFunction

Marks a HOG function as deleted in a Datadog project.

PosthogApi.TrackFileSystemView

Log and track a file system view on resource access.

PosthogApi.TrackFsView

Logs a view each time a resource is accessed via GET.

PosthogApi.RetrieveLogsForFileSystemViews

Retrieves logs for tracked file system views.

PosthogApi.TrackFileSystemViews

Retrieve metrics for tracking file system views.

PosthogApi.GetHogFunctionMetricsTotals

Retrieve total metrics for a specified hog function.

PosthogApi.GetHogFunctionIcon

Retrieve the icon for hog functions in a specific project.

PosthogApi.RetrieveProjectIcons

Retrieve and log views of project icons.

PosthogApi.UpdateHogfunctionOrder

Modify the order of execution for HogFunctions.

PosthogApi.ListProjectInsights

Retrieve insights list for a specific project.

PosthogApi.CreateInsightEntry

Logs a new file system view entry for insights.

PosthogApi.ListInsightSharing

Retrieve sharing details for a specific insight.

PosthogApi.CreateInsightsSharingPassword

Create a new password for insights sharing configuration.

PosthogApi.DeletePasswordFromSharingConfig

Delete a password from the sharing configuration of an insight.

PosthogApi.RefreshInsightSharing

Refresh the sharing settings of an insight.

PosthogApi.RetrieveInsightData

Retrieve tracked insights for project file system views.

PosthogApi.UpdateInsights

Update insights tracking view for a project resource.

PosthogApi.UpdateInsightsViewLog

Log a new view for a specific insight resource.

PosthogApi.DeleteInsight

Marks an insight as deleted in a project.

PosthogApi.GetInsightsActivity

Retrieve logs of insight views for a project.

PosthogApi.RetrieveInsightsActivity

Retrieve insights activity logs for a specified project.

PosthogApi.StopInsightProcess

Cancel the ongoing insight creation process for a project.

PosthogApi.RetrieveRecentlyViewedInsights

Retrieve details of the last 5 insights viewed by the user.

PosthogApi.RecordInsightViews

Update the view timestamps for specified insights.

PosthogApi.ListProjectIntegrations

Retrieve a list of integrations for a specific project.

PosthogApi.CreateProjectIntegration

Creates a new integration for a specific project.

PosthogApi.GetIntegrationDetails

Retrieve integration details for a specific project.

PosthogApi.DeleteIntegration

Delete an existing integration for a project.

PosthogApi.GetIntegrationChannels

Retrieve integration channels for a specific project and ID.

PosthogApi.GetClickupLists

Retrieve ClickUp lists for a specific project integration.

PosthogApi.RetrieveClickupSpaces

Retrieve ClickUp spaces for a specific integration.

PosthogApi.RetrieveClickupWorkspaces

Retrieve ClickUp workspaces for a project integration.

PosthogApi.CreateEmailVerificationIntegration

Initiate an email verification integration for a project.

PosthogApi.FetchGithubReposForIntegration

Retrieve GitHub repositories for a specified integration.

PosthogApi.GetGoogleAccessibleAccounts

Retrieve accessible Google accounts for integration.

PosthogApi.RetrieveGoogleConversionData

Retrieve Google conversion actions for a specific project.

PosthogApi.RetrieveLinearTeams

Fetch Linear team details for a specific integration.

PosthogApi.RetrieveLinkedinAdsAccounts

Retrieve LinkedIn Ads accounts for a project integration.

PosthogApi.GetLinkedinAdsConversionRules

Retrieve LinkedIn Ads conversion rules for a specific project.

PosthogApi.RetrieveTwilioPhoneNumbers

Retrieve Twilio phone numbers for a specific integration.

PosthogApi.GetIntegrationAuthorization

Retrieve integration authorization details for a project.

PosthogApi.CreateChatCompletion

Create a chat completion using OpenAI or compatible models.

PosthogApi.CreateMessageWithClaude

Create a message using Anthropic's Claude models.

PosthogApi.RetrieveLogAttributes

Retrieve log attributes for a specific project.

PosthogApi.CreateLogQuery

Initiate a logs query for a specific project.

PosthogApi.CreateLogsSparkline

Create a sparkline for project logs.

PosthogApi.RetrieveLogValues

Retrieve log values for a specified project.

PosthogApi.ListPosthogNotebooks

Retrieve a list of notebooks from Datadog.

PosthogApi.CreateNotebook

Create a new notebook within a specified project.

PosthogApi.RetrieveNotebookDetails

Retrieve details of a specific notebook.

PosthogApi.UpdateNotebook

Update a specific notebook's details.

PosthogApi.UpdateNotebookDetails

Update notebook details in a specified project.

PosthogApi.DeleteNotebook

Deletes a specific notebook by marking it as deleted.

PosthogApi.RetrieveNotebookActivity

Retrieve activity details of a specific notebook.

PosthogApi.GetNotebookActivity

Retrieve activity details for a specific project notebook.

PosthogApi.RetrieveNotebookComments

Retrieve comments from notebook recordings in a project.

PosthogApi.ListPersistedFolders

Retrieve persisted folders for a given project.

PosthogApi.PersistFolderCreation

Create a new persisted folder in Datadog.

PosthogApi.RetrievePersistedFolder

Retrieve a specific persisted folder within a project.

PosthogApi.UpdatePersistedFolder

Update details of a persisted folder in a project.

PosthogApi.UpdateFolderInfo

Update a persisted folder's metadata in Datadog.

PosthogApi.RemoveFolder

Deletes a specified persisted folder from a project.

PosthogApi.RetrievePersonData

Retrieve detailed information about a specific person.

PosthogApi.ModifyPersonDetails

Update properties for a person in the project.

PosthogApi.UpdatePersonInfo

Update person details using partial data.

PosthogApi.DeletePerson

Delete an individual person from a project.

PosthogApi.GetPersonActivity

Retrieve activities and details of a specific person.

PosthogApi.QueuePersonEventDeletion

Queue deletion of events for a person during non-peak hours.

PosthogApi.RemovePersonAttribute

Delete a specific property from a person's profile.

PosthogApi.RemovePersonRecordings

Queue deletion of all recordings associated with a person.

PosthogApi.RetrievePersonPropertiesTimeline

Retrieve the timeline of a person's properties changes.

PosthogApi.SplitPersonEntityCreate

Create a sub-person entity for an existing person.

PosthogApi.ModifyUserAttribute

Update a specific property for a person in a project.

PosthogApi.PersonActivityInfo

Retrieve details of a person's activities.

PosthogApi.BulkDeletePersons

Bulk delete persons by IDs in a specified project.

PosthogApi.GetPersonsCohorts

Retrieve information about person cohorts in a project.

PosthogApi.RetrievePersonsFunnel

Retrieve persons data for a project funnel.

PosthogApi.CreateOrUpdatePersons

Create or update persons in a project funnel.

PosthogApi.FunnelCorrelationPersonsRetrieve

Retrieve funnel correlation data for persons in a project.

PosthogApi.AddPersonsFunnelCorrelation

Create or update persons in a funnel correlation.

PosthogApi.GetPersonsLifecycle

Retrieve lifecycle information of persons in a project.

PosthogApi.ResetPersonDistinctId

Reset a distinct\_id for a deleted person to reuse it.

PosthogApi.RetrievePersonsStickiness

Retrieve information about persons' stickiness in a project.

PosthogApi.GetPersonTrends

Retrieve trends related to persons in a project.

PosthogApi.GetPersonInfo

Retrieve or delete person details in a Datadog project.

PosthogApi.ListPluginConfigLogs

Retrieve logs for a specific plugin configuration.

PosthogApi.ListPropertyDefinitions

Retrieve a list of property definitions for a specific project.

PosthogApi.RetrievePropertyDefinitions

Retrieve details of property definitions for a given project.

PosthogApi.UpdatePropertyDefinitions

Update property definitions for a specific project.

PosthogApi.UpdatePropertyDefinition

Update partial property definition details.

PosthogApi.DeletePropertyDefinition

Delete a property definition from a project.

PosthogApi.CheckPropertyEventAssociation

Check if a property has been seen with specified event names.

PosthogApi.RetrieveQueryFromProject

Retrieve a specific query from a project.

PosthogApi.DeleteProjectQuery

Delete a specific project query.

PosthogApi.GetQueryLogDetails

Retrieve query log details for a specified query ID.

PosthogApi.CheckAsyncAuth

Checks authorization for creating asynchronous queries.

PosthogApi.RetrieveDraftSqlQuery

Retrieve draft SQL query for a specific project.

PosthogApi.ListSessionPlaylists

Retrieve session recording playlists, including synthetic ones.

PosthogApi.NewSessionRecordingPlaylist

Create a new session recording playlist for a project.

PosthogApi.RetrieveRecordingPlaylist

Retrieve a session recording playlist for a project.

PosthogApi.ModifySessionRecordingPlaylist

Update session recording playlists for a project.

PosthogApi.EditSessionPlaylist

Partially update a session recording playlist.

PosthogApi.RemoveSessionRecordingPlaylist

Soft delete a session recording playlist in a project.

PosthogApi.RetrieveRecordingPlaylistViews

Retrieve and log views of session recording playlists.

PosthogApi.AddSessionRecordingToPlaylist

Add a session recording to a specified playlist.

PosthogApi.DeleteSessionRecording2

Delete a session recording from a playlist in a project.

PosthogApi.FetchSessionRecordings

Retrieve session recordings for a specific project.

PosthogApi.FetchSessionRecording

Retrieve details of a specific session recording.

PosthogApi.UpdateSessionRecording2

Update session recording details for a specific project.

PosthogApi.EditSessionRecording

Update specific details of a session recording.

PosthogApi.DestroySessionRecording

Delete a specific session recording from a project.

PosthogApi.GetSessionRecordingsSharingLinks

Obtain sharing links for a Datadog session recording.

PosthogApi.CreateRecordingSharePassword

Create a new password for sharing configuration of a recording.

PosthogApi.RemoveSharingPassword

Delete a sharing configuration password from a session recording.

PosthogApi.UpdateSessionRecordingSharing

Refresh session recording sharing status.

PosthogApi.RetrieveSessionPropertyDefinitions

Retrieve definitions of session properties for a project.

PosthogApi.RetrieveProjectSessionValues

Retrieve session values for a specific project.

PosthogApi.GetProjectSubscriptions

Retrieve a list of subscriptions for a specific project.

PosthogApi.CreateProjectSubscription

Create a new subscription for a specified project.

PosthogApi.GetSubscriptionInfo

Retrieve details of a specific project subscription.

PosthogApi.UpdateSubscriptionSettings

Update subscription settings for a project.

PosthogApi.UpdateSubscriptionDetails

Update details of a project subscription.

PosthogApi.UnsubscribeFromProjectAlerts

Set project alert subscription as deleted.

PosthogApi.GetProjectSurveys

Retrieve a list of surveys for a given project.

PosthogApi.CreateSurvey

Create a new survey for a project.

PosthogApi.RetrieveSurveyData

Retrieve data for a specific survey using project and survey IDs.

PosthogApi.UpdateSurveyTracking

Tracks a new view for a survey by logging access.

PosthogApi.UpdateSurveyInfo

Update information for a specific survey.

PosthogApi.DeleteSurvey

Delete a survey from a specific project.

PosthogApi.FetchSurveyActivity

Retrieve logs of survey activity views.

PosthogApi.DuplicateSurveyToProjects

Duplicate a survey to multiple projects in one transaction.

PosthogApi.GetSurveyResponseStatistics

Get survey response statistics for a specific survey.

PosthogApi.SummarizeSurveyResponses

Create a summary of survey responses for a project.

PosthogApi.TrackSurveyActivity

Retrieve and log survey activity views.

PosthogApi.GetSurveyResponseCount

Retrieve the count of survey responses for a project.

PosthogApi.GetSurveyStatistics

Retrieve aggregated response statistics for surveys.

PosthogApi.ListProjectTasks

Retrieve tasks for a specific project.

PosthogApi.CreateProjectTask

Create a new task within a specified project.

PosthogApi.GetProjectTaskDetails

Retrieve details of a specific task within a project.

PosthogApi.UpdateProjectTask

Update task details within a project.

PosthogApi.UpdateTaskInProject

Update a specific task within a project.

PosthogApi.DeleteProjectTask

Delete a specific task within a project.

PosthogApi.InitiateTaskWorkflow

Initiate the workflow for a specific task stage.

PosthogApi.UpdateTaskPosition

Update the position of a task within its current stage.

PosthogApi.ListTaskRuns

Retrieve a list of task run executions for a specific task.

PosthogApi.CreateTaskRun

Create and manage execution of a specific task by ID.

PosthogApi.GetTaskRunDetails

Retrieve details of a specific task run execution.

PosthogApi.UpdateTaskRunStatus

Update the status of a specific task run.

PosthogApi.AppendTaskRunLogs

Append log entries to a specific task run log array.

PosthogApi.UpdateTaskRunOutput

Update the output field for a specific task run.

PosthogApi.GetSavedQueriesList

Retrieve saved warehouse queries for a specific project.

PosthogApi.AddWarehouseSavedQuery

Create a warehouse saved query for data management.

PosthogApi.RetrieveWarehouseSavedQuery

Retrieve details of a specific warehouse saved query.

PosthogApi.EditWarehouseSavedQuery

Update a specific warehouse saved query.

PosthogApi.ModifyWarehouseQuery

Partially update a warehouse saved query in a project.

PosthogApi.DeleteWarehouseSavedQuery

Deletes a specified warehouse saved query.

PosthogApi.RetrieveSavedQueryActivity

Retrieve activity details of a saved warehouse query.

PosthogApi.GetAncestorsOfSavedQuery

Retrieve ancestors of a saved query in Datadog.

PosthogApi.CancelRunningSavedQuery

Cancel a running saved query workflow in progress.

PosthogApi.GetQueryDescendants

Retrieve descendants of a saved query.

PosthogApi.UndoMaterialization

Revert back to the original view by undoing materialization.

PosthogApi.ExecuteSavedQuery

Executes a saved query in Datadog's warehouse.

PosthogApi.WarehouseTablesOverview

Retrieve a list of warehouse tables for a specific project.

PosthogApi.AddWarehouseTable

Create a new warehouse table in a specified project.

PosthogApi.GetWarehouseTable

Retrieve details of a specific warehouse table.

PosthogApi.EditWarehouseTable

Updates information for a specific warehouse table.

PosthogApi.UpdateWarehouseTable2

Partially update a warehouse table entry.

PosthogApi.RemoveWarehouseTable

Delete a specified warehouse table from a project.

PosthogApi.UpdateTableSchema

Refresh the schema of a specific warehouse table.

PosthogApi.ModifyTableSchema

Update the schema of a warehouse table.

PosthogApi.WarehouseTableFileOperations

Create a new warehouse table from a file.

PosthogApi.FetchWebAnalyticsBreakdown

Retrieve breakdown of web analytics by property.

PosthogApi.GetWebAnalyticsOverview

Retrieve an overview of web analytics data for a project.

PosthogApi.ListWebExperiments

Retrieve a list of web experiments for a given project.

PosthogApi.CreateWebExperiment

Create a web experiment for a project.

PosthogApi.RetrieveWebExperiment

Retrieve details of a specific web experiment.

PosthogApi.UpdateWebExperiment

Update web experiment details within a project.

PosthogApi.UpdateWebExperimentStatus

Update the status of a web experiment.

PosthogApi.DeleteWebExperiment

Delete a web experiment from a specific project.

PosthogApi.ListUsers

Retrieve a list of users from Datadog.

PosthogApi.RetrieveUserInformation

Retrieve detailed information about a specific user.

PosthogApi.UpdateUserDetails

Update user details in the database.

PosthogApi.UpdateUserInfo

Partially update a user's information in Datadog.

PosthogApi.DeleteUserAccount

Deletes a user account from the system.

PosthogApi.RetrieveUserHedgehogConfig

Retrieve a user's hedgehog configuration details.

PosthogApi.UpdateUserHedgehogConfig

Update a user's hedgehog configuration settings in Datadog.

PosthogApi.CreateUserScenePersonalization

Create personalized scene settings for a user.

PosthogApi.InitiateUser2faSetup

Initiate two-factor authentication setup for a user.

PosthogApi.GenerateBackupCodes

Generate new backup codes for two-factor authentication.

PosthogApi.DisableUser2fa

Disable two-factor authentication for a user.

PosthogApi.RetrieveUser2faSetupStatus

Retrieve a user's two-factor authentication setup status.

PosthogApi.Retrieve2faStatus

Retrieve current 2FA status and backup codes if enabled.

PosthogApi.ValidateTwoFactorAuthentication

Validate a user's two-factor authentication code.

PosthogApi.ValidateUser2fa

Validate a user's two-factor authentication status.

PosthogApi.CancelEmailChangeRequest

Cancel a pending email change request.

PosthogApi.RequestEmailVerification

Request an email verification for a user.

PosthogApi.VerifyUserEmail

Initiates the email verification process for a user.

If you need to perform an action that’s not listed here, you can [get in touch with us](mailto:contact@arcade.dev) to request a new tool, or [create your own tools](/guides/create-tools/tool-basics/build-mcp-server.md).

## PosthogApi.RetrieveAppMetrics



Retrieve application metrics for a specific project environment.

**Parameters**

-   **plugin\_config\_id** (`integer`, required) A unique integer value identifying the plugin configuration.
-   **project\_id** (`string`, required) A string representing the ID of the project to access metrics for. Obtain this ID by calling /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveAppMetricsErrorDetails



Retrieve detailed error metrics for a specific app.

**Parameters**

-   **plugin\_config\_id** (`integer`, required) A unique integer identifying the plugin configuration.
-   **project\_id** (`string`, required) String representing the Project ID to access. Obtain this ID via /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveAppMetricsExports



Retrieve historical app metrics exports for a project.

**Parameters**

-   **plugin\_configuration\_id** (`string`, required) The ID of the plugin configuration to retrieve metrics for. Ensure it matches the correct configuration in your Datadog setup.
-   **project\_id\_of\_the\_posthog\_project** (`string`, required) The ID of the Datadog project to access. Obtain it via the /api/projects/ endpoint.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveHistoricalAppMetrics



Retrieve historical app metrics for a specific environment.

**Parameters**

-   **export\_id** (`string`, required) The identifier of the historical export you want to retrieve. This should be a valid string corresponding to a specific export.
-   **plugin\_configuration\_id** (`string`, required) The ID of the plugin configuration to retrieve historical metrics for. This identifies which plugin’s data you want to access.
-   **project\_id** (`string`, required) The Project ID to access for retrieving historical app metrics. Obtain it via a call to /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ListEnvBatchExports



Retrieve the list of batch exports for a specific environment.

**Parameters**

-   **project\_identifier** (`string`, required) The Project ID to access for fetching batch exports. Obtain it by calling /api/projects/.
-   **initial\_result\_index** (`integer`, optional) The initial index from which to return the results. Use this to navigate pages.
-   **results\_per\_page** (`integer`, optional) Specify the number of results to return per page.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateBatchExportForEnvironments



Initiate a batch export for selected environments.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_id** (`string`, optional) The ID of the project you want to access for batch export. Obtain it via a call to /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ListBatchExportBackfills



Retrieve a list of batch export backfills.

**Parameters**

-   **batch\_export\_identifier** (`string`, required) The unique identifier for the batch export to retrieve specific backfill details.
-   **project\_id** (`string`, required) The ID of the project to access batch export backfills. Obtainable via /api/projects/.
-   **pagination\_cursor** (`string`, optional) The pagination cursor for retrieving the next set of results in a paginated response.
-   **results\_ordering\_field** (`string`, optional) Specify the field by which to order the batch export backfills results.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateBackfillForBatchExport



Create a new backfill for a BatchExport.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **batch\_export\_identifier** (`string`, optional) The unique identifier of the BatchExport for which to create a backfill. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) The ID of the project to access. Call /api/projects/ to retrieve this ID. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveBatchExportBackfill



Retrieve details of a batch export backfill.

**Parameters**

-   **batch\_export\_backfill\_uuid** (`string`, required) The UUID identifying the specific batch export backfill to retrieve.
-   **batch\_export\_identifier** (`string`, required) The identifier for the specific batch export. Provide as a string to retrieve backfill details.
-   **project\_id** (`string`, required) The unique ID of the project to access. Use /api/projects/ to retrieve the ID if unknown.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CancelBatchExportBackfill



Cancel a batch export backfill process.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **batch\_export\_identifier** (`string`, optional) A unique identifier string for the batch export backfill to be canceled. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **batch\_export\_backfill\_id** (`string`, optional) A UUID string identifying the specific batch export backfill to cancel. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) The ID of the project to access. Call /api/projects/ to find the project ID. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ListEnvironmentExports



Fetches a list of batch export runs for a given environment.

**Parameters**

-   **batch\_export\_identifier** (`string`, required) The ID of the batch export you wish to access. Required to retrieve batch export runs for a specific project.
-   **project\_id** (`string`, required) The unique identifier of the project you want to access in Datadog. Use /api/projects/ to find the ID.
-   **order\_by\_field** (`string`, optional) Specify the field used to order the batch export run results. This determines the sorting criteria for the list of export runs.
-   **pagination\_cursor** (`string`, optional) The value used for paginating results in a list of export runs. It allows fetching subsequent pages of results.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveEnvironmentExportRun



Retrieve details of a specific environment export run.

**Parameters**

-   **batch\_export\_id** (`string`, required) A unique identifier for the batch export run. Provide the UUID identifying this export.
-   **batch\_export\_run\_id** (`string`, required) A UUID string identifying this specific batch export run for retrieval.
-   **project\_id** (`string`, required) The unique identifier for the project you wish to access. Retrieve this by calling /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CancelBatchExportRun



Cancel an ongoing batch export run.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **batch\_export\_run\_id** (`string`, optional) A UUID string identifying the specific batch export run to be canceled. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **batch\_export\_run\_uuid** (`string`, optional) A UUID string that identifies the batch export run to be canceled. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) The ID of the project you want to access. Use /api/projects/ to find this ID. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveEnvironmentBatchExportLogs



Retrieve logs from a specific environment batch export run.

**Parameters**

-   **batch\_export\_identifier** (`string`, required) A string representing the unique identifier for the batch export.
-   **batch\_export\_run\_id** (`string`, required) A UUID string identifying the specific batch export run.
-   **project\_identifier** (`string`, required) The unique Project ID needed to access the specific project. Retrieve this ID by calling /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetryBatchExportRun



Initiate a retry of a batch export run.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **batch\_export\_identifier** (`string`, optional) A string representing the UUID of the batch export run to retry. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **batch\_export\_run\_id** (`string`, optional) The UUID identifying the batch export run to retry. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) Project ID for accessing the specific project. Use /api/projects/ to find this ID. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveEnvironmentBatchExport



Retrieve details of a specific environment batch export.

**Parameters**

-   **batch\_export\_uuid** (`string`, required) A UUID string identifying the specific batch export to retrieve details for.
-   **project\_id** (`string`, required) The ID of the project to access. Retrieve via /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateEnvironmentBatchExports



Update environment batch exports details.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **batch\_export\_uuid** (`string`, optional) The UUID identifying the specific batch export to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) Project ID to access; retrieve from /api/projects/ if needed. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateEnvironmentExport



Update environment export batch details.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **batch\_export\_id** (`string`, optional) A UUID string that uniquely identifies the environment export batch to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) The ID of the project to access. Retrieve it with a call to /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.DeleteBatchExport



Delete a batch export in a specific environment.

**Parameters**

-   **batch\_export\_uuid** (`string`, required) A UUID string identifying the batch export to delete.
-   **project\_id** (`string`, required) The ID of the project to access for batch export deletion. Obtainable via /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.TriggerBatchExportBackfill



Trigger a backfill for a BatchExport.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **batch\_export\_uuid** (`string`, optional) A UUID string identifying this batch export. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) The Project ID for accessing the desired project. Retrieve it via /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveEnvironmentLogs



Retrieve logs from environment batch exports.

**Parameters**

-   **batch\_export\_id** (`string`, required) A UUID string that specifies the batch export to retrieve logs for. This is a unique identifier for the log batch export.
-   **project\_id** (`string`, required) The ID of the project to access for retrieving environment batch export logs. Obtainable via a call to /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.PauseBatchExport



Pause a batch export operation.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **batch\_export\_id** (`string`, optional) A UUID string identifying the batch export to be paused. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) The unique identifier for the project. Use /api/projects/ to find it. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RunEnvironmentTestStep



Initiate a test step execution for environment batch exports.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **batch\_export\_uuid** (`string`, optional) A UUID string to identify the specific batch export for the test step execution. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) The unique Project ID for the targeted environment. Obtainable via `/api/projects/`. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UnpauseBatchExport



Unpause a paused BatchExport to resume data export.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **batch\_export\_id** (`string`, optional) A UUID string identifying the batch export to unpause. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) The ID of the project to access. Retrieve using a call to /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateEnvironmentBatchExport



Initiate a batch export for environment tests.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_id** (`string`, optional) The ID of the project to access for initiating the batch export. To find this, call /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetEnvironmentsBatchExportStatus



Gets the status of a test batch export for environments.

**Parameters**

-   **project\_id\_for\_export\_status** (`string`, required) The Project ID to retrieve the test batch export status. Obtainable from a call to /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ListEnvironmentDashboards



Retrieve dashboards for a specific environment.

**Parameters**

-   **project\_id** (`string`, required) Project ID required to access a specific environment in Datadog. Use the /api/projects/ endpoint to find the ID.
-   **initial\_index\_for\_results** (`integer`, optional) The index from which to start returning results, useful for pagination.
-   **response\_format** (`string`, optional) Specifies the format of the response. Accepted values are ‘json’ or ‘txt’.
-   **results\_per\_page** (`integer`, optional) The number of dashboard results to return per page.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateEnvironmentDashboard



Create a new dashboard within a specific environment.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_identifier** (`string`, optional) The ID of the project for accessing its environment. Retrieve via /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **response\_format** (`string`, optional) Specify the format of the response. Options: ‘json’, ‘txt’. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ListCollaboratorsOnDashboard



Retrieve collaborators for a dashboard in a project.

**Parameters**

-   **dashboard\_identifier** (`integer`, required) The unique identifier for the dashboard. Must be an integer and is required to retrieve collaborators.
-   **project\_identifier** (`string`, required) The unique identifier for the project. Obtainable by calling the /api/projects/ endpoint.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.AddDashboardCollaborator



Add a collaborator to a specific dashboard.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **dashboard\_id** (`integer`, optional) The unique identifier of the dashboard to which the collaborator is being added. It must be an integer value. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) The ID of the project to access. Retrieve using the /api/projects/ endpoint. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RemoveDashboardCollaborator



Remove a collaborator from a dashboard in a specific environment.

**Parameters**

-   **collaborator\_user\_uuid** (`string`, required) The unique user ID of the collaborator to be removed from the dashboard.
-   **dashboard\_id** (`integer`, required) The unique identifier of the dashboard from which you want to remove a collaborator. This should be an integer.
-   **project\_id** (`string`, required) ID of the project to access. Retrieve the ID using the /api/projects/ endpoint if needed.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ListSharedDashboards



Retrieve shared dashboard information for a specified project.

**Parameters**

-   **dashboard\_identifier** (`integer`, required) The unique integer ID of the dashboard whose sharing information you want to retrieve.
-   **project\_id** (`string`, required) The ID of the project you want to access for retrieving shared dashboard details. Obtain this by calling /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateDashboardSharingPassword



Create a password for sharing a dashboard.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **dashboard\_identifier** (`integer`, optional) The unique integer identifier for the dashboard. This ID is required to create a sharing password. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) The ID of the project for which you want to create a dashboard sharing password. Use /api/projects/ to find this ID. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.DeleteDashboardSharingPassword



Delete a password from a dashboard’s sharing configuration.

**Parameters**

-   **dashboard\_identifier** (`integer`, required) The unique integer identifier for the dashboard from which the password is to be deleted.
-   **password\_identifier** (`string`, required) The unique identifier of the password to be deleted from the dashboard’s sharing configuration. This is required to specify which password to remove.
-   **project\_identifier** (`string`, required) Unique identifier for the project. Retrieve by calling /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RefreshDashboardSharing



Refresh a dashboard’s sharing link in Datadog environments.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **dashboard\_id** (`integer`, optional) The unique integer ID of the Datadog dashboard to refresh the sharing link for. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) Specify the Project ID for accessing the desired project in Datadog. Retrieve it via a call to /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetEnvironmentDashboard



Retrieve a specific dashboard for an environment.

**Parameters**

-   **dashboard\_id** (`integer`, required) A unique integer value identifying the dashboard to retrieve.
-   **project\_id** (`string`, required) Project ID for accessing the specific environment dashboard. Obtainable via call to /api/projects/.
-   **response\_format** (`string`, optional) Specify the format of the response data. Use ‘json’ for JSON format or ‘txt’ for plain text format.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateEnvironmentDashboard



Update settings of an environment dashboard.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **dashboard\_id** (`integer`, optional) A unique integer value to identify the environment dashboard to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) The ID of the project to access. Retrieve this using the /api/projects/ endpoint if needed. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **response\_format** (`string`, optional) Specify the desired format of the response. Options are ‘json’ or ‘txt’. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateDashboardEnvironment



Update specific dashboard settings in an environment.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **dashboard\_id** (`integer`, optional) Unique integer identifying the dashboard to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) The ID of the project to access. Call /api/projects/ to find this ID. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **response\_format** (`string`, optional) Specifies the format of the response. Options include ‘json’ or ‘txt’. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.DeleteDashboard



Mark a dashboard as deleted.

**Parameters**

-   **dashboard\_id** (`integer`, required) A unique integer value identifying the dashboard to be marked as deleted.
-   **project\_id** (`string`, required) Project ID to access the desired project. Retrieve using /api/projects/ if needed.
-   **response\_format** (`string`, optional) Specifies the format of the response. Options include ‘json’ and ‘txt’.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.MoveDashboardTile



Move a tile’s position in a specific dashboard.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **dashboard\_id** (`integer`, optional) A unique integer value identifying this dashboard within Datadog. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) The identifier for the project you want to access. Retrieve it by calling the /api/projects/ endpoint. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **response\_format** (`string`, optional) Specifies the desired format of the response data. Options are ‘json’ or ‘txt’. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.StreamDashboardTiles



Stream dashboard metadata and tiles via Server-Sent Events.

**Parameters**

-   **dashboard\_id** (`integer`, required) A unique integer value identifying the dashboard to stream.
-   **project\_id** (`string`, required) The ID of the project you wish to access. Obtain this by calling /api/projects/.
-   **response\_format** (`string`, optional) Specifies the format for the streamed dashboard response. Choose ‘json’ for JSON format or ‘txt’ for plain text.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateEnvironmentDashboardFromTemplate



Create an environment dashboard from a template.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_identifier** (`string`, optional) The Project ID for the target environment in Datadog. Retrieve this ID via the /api/projects/ API call. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **response\_format** (`string`, optional) Specifies the format of the response. Choose between ‘json’ or ‘txt’. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ListDataColorThemes



Retrieve data color themes for a specific environment.

**Parameters**

-   **project\_identifier** (`string`, required) Project ID to access specific environment data color themes. Obtain by calling /api/projects/.
-   **initial\_index** (`integer`, optional) The initial index from which to return the results. Used for pagination.
-   **results\_per\_page** (`integer`, optional) The maximum number of results to return on each page.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateDataColorTheme



Create a new data color theme for the environment.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_identifier** (`string`, optional) Project ID to access the desired project. Obtain it through a call to /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveEnvironmentColorTheme



Retrieve color theme data for a specific environment.

**Parameters**

-   **color\_theme\_id** (`integer`, required) A unique integer value identifying the data color theme for the environment.
-   **project\_identifier** (`string`, required) The ID of the project whose environment color theme data is being accessed. Obtain it via `/api/projects/`.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateEnvironmentColorTheme



Update the color theme of an environment.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **data\_color\_theme\_id** (`integer`, optional) A unique integer value identifying the data color theme to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) The ID of the project to access. Retrieve it via a call to /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateEnvironmentTheme



Update color themes for project environments.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **color\_theme\_id** (`integer`, optional) A unique integer identifying the data color theme to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) The unique ID of the project you want to access. Obtain it via /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.DeleteEnvironmentColorTheme



Delete a specific environment’s color theme in Datadog.

**Parameters**

-   **data\_color\_theme\_id** (`integer`, required) A unique integer value used to identify the data color theme to be deleted.
-   **project\_id** (`string`, required) The ID of the project for accessing its environment. Obtain by calling /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ListEnvironmentDatasetItems



Retrieve dataset items for a specific environment.

**Parameters**

-   **project\_identifier** (`string`, required) The ID of the project you’re accessing. Use /api/projects/ to find it.
-   **filter\_by\_dataset\_id** (`string`, optional) Specify the dataset ID to filter the results by a specific dataset.
-   **results\_per\_page** (`integer`, optional) Number of results to return per page. This defines pagination size.
-   **results\_start\_index** (`integer`, optional) The initial index from which to return the results. Use this to control the starting point of the returned dataset items.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateEnvironmentDatasetItem



Create a dataset item in the specified environment.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_id** (`string`, optional) The unique identifier for the project you want to access. Obtain it by calling /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveEnvironmentDatasetItem



Retrieve a specific environment dataset item by ID.

**Parameters**

-   **dataset\_item\_id** (`string`, required) A UUID string that identifies the specific dataset item to retrieve.
-   **project\_id** (`string`, required) The unique identifier for the project to access. To find it, call /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateEnvironmentDatasetItem



Update an environment dataset item in a project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **dataset\_item\_uuid** (`string`, optional) A UUID string uniquely identifying the dataset item to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) The unique identifier of the project you want to access. Retrieve it by making a call to /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ModifyEnvironmentDatasetItem



Update specific fields in an environment dataset item.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **dataset\_item\_id** (`string`, optional) A UUID string specifying the dataset item to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) The unique ID of the project to access. Use /api/projects/ to find this ID. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.DeleteEnvironmentDatasetItem



Marks a dataset item in an environment as deleted.

**Parameters**

-   **dataset\_item\_id** (`string`, required) A UUID string identifying the dataset item to mark as deleted.
-   **project\_id** (`string`, required) The unique Project ID for accessing the desired project. Retrieve by calling /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ListEnvironmentDatasets



Retrieve datasets for a specified project environment.

**Parameters**

-   **project\_id** (`string`, required) The ID of the project to access. Retrieve the ID by calling /api/projects/.
-   **dataset\_ids** (`array[string]`, optional) List of dataset IDs to filter results. Provide multiple IDs separated by commas.
-   **ordering\_criteria** (`array[string]`, optional) Specify the ordering of the dataset results. Options include `created_at`, `-created_at`, `updated_at`, `-updated_at`. Multiple criteria can be provided as a list.
-   **results\_limit\_per\_page** (`integer`, optional) Specifies the number of datasets to return per page. This is used to control pagination and manage the volume of data retrieved in a single call.
-   **results\_start\_index** (`integer`, optional) The initial index to start returning datasets from, for pagination purposes.
-   **search\_terms** (`string`, optional) Search terms to filter datasets by name, description, or metadata.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateEnvironmentDataset



Create a dataset environment in a specified project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_id\_for\_environment** (`string`, optional) Project ID for accessing the project where the dataset environment will be created. To get this ID, call the /api/projects/ endpoint. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveEnvironmentDataset



Retrieve a specific environment dataset by ID.

**Parameters**

-   **environment\_dataset\_id** (`string`, required) A UUID string identifying the specific environment dataset to retrieve.
-   **project\_id** (`string`, required) The ID of the project you want to access. Use /api/projects/ to find this ID.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateEnvironmentDataset



Updates details of a specific environment dataset.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **dataset\_id** (`string`, optional) A UUID string identifying the specific dataset to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) The ID of the project you want to access. Retrieve the ID by calling /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ModifyEnvironmentDataset



Update dataset in a specific environment.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **dataset\_uuid** (`string`, optional) A UUID string identifying the dataset to update within the environment. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) The unique identifier of the project to access. Retrieve via /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.DeleteDataset



Delete a dataset by setting it to deleted status.

**Parameters**

-   **dataset\_uuid** (`string`, required) A UUID string identifying the dataset to be marked as deleted.
-   **project\_identifier** (`string`, required) The unique identifier for the project. Use /api/projects/ to find it.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.FetchEndpointRunStatus



Retrieve the run status of an endpoint.

**Parameters**

-   **endpoint\_name** (`string`, required) The name of the endpoint you want to update or retrieve status for.
-   **project\_id** (`string`, required) The unique ID of the project to access. Obtain it via a call to /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateEnvironmentEndpoint



Update an existing environment endpoint.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **endpoint\_name** (`string`, optional) The name of the endpoint to update. This is used to identify the specific endpoint within the project. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) The ID of the project to access. Retrieve it via a call to /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetLastExecutionTimes



Retrieve last execution times for multiple endpoints.

**Parameters**

-   **endpoint\_names** (`array[string]`, required) List of endpoint names to retrieve execution times for. Each name should be a string.
-   **project\_id** (`string`, required) The ID of the project you wish to access. Use the /api/projects/ endpoint to retrieve the ID if needed.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ListErrorTrackingAssignmentRules



Retrieve error tracking assignment rules for a given environment.

**Parameters**

-   **project\_id** (`string`, required) The unique ID of the project to access. Retrieve it by calling /api/projects/.
-   **results\_per\_page** (`integer`, optional) Specify the number of results to return per page when listing error tracking assignment rules.
-   **results\_start\_index** (`integer`, optional) The initial index to start returning results from within the list.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateErrorTrackingAssignmentRule



Create a new error tracking assignment rule.

**Parameters**

-   **assignee\_username** (`string`, required) Username of the individual to whom the error tracking assignment rule is assigned. This should be a valid username within the project.
-   **assignment\_rule\_filters** (`string`, required) Filters to specify the criteria for the error tracking assignment rule. Input as a string.
-   **order\_key\_priority** (`integer`, required) An integer specifying the priority order of the rule. Lower values imply higher priority.
-   **project\_id** (`string`, required) ID of the project to access. Retrieve via /api/projects/ call.
-   **rule\_id** (`string`, required) A unique identifier for the error tracking assignment rule to be created.
-   **disabled\_data\_state** (`string`, optional) Indicates if data for the error tracking rule is disabled. Use ‘true’ to disable, ‘false’ to enable.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveErrorTrackingAssignmentRules



Retrieve error tracking assignment rules for a project.

**Parameters**

-   **error\_tracking\_rule\_id** (`string`, required) A UUID identifying the error tracking assignment rule to retrieve.
-   **project\_id** (`string`, required) The unique identifier for the project to access. Obtain this by calling /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateErrorTrackingRules



Updates error tracking assignment rules for a project.

**Parameters**

-   **assignee\_identifier** (`string`, required) The unique identifier for the person to whom errors will be assigned. This can be a user ID or username within the project.
-   **assignment\_rule\_id** (`string`, required) A UUID string that identifies the error tracking assignment rule to update.
-   **environment\_id** (`string`, required) The unique identifier for the environment whose error tracking rules are being updated.
-   **filter\_criteria** (`string`, required) Specifies the filter criteria for updating error tracking assignment rules. This should be a string detailing the conditions used to filter the errors.
-   **project\_id** (`string`, required) Project ID to access. Retrieve it via a call to /api/projects/.
-   **update\_order\_key** (`integer`, required) The order key for arranging assignment rules in a specified sequence. Provide an integer value.
-   **disable\_error\_data** (`string`, optional) Specify whether to disable error data for tracking rules. Accepts a string value indicating the disabled state.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateErrorTrackingAssignmentRules



Partially update error tracking assignment rules for environments.

**Parameters**

-   **project\_identifier** (`string`, required) The unique ID of the project to access for updating error tracking rules. Obtain it via `/api/projects/`.
-   **assignee\_for\_error\_tracking** (`string`, optional) The identifier of the assignee for the error tracking rule. This should be a string representing the user or team to which the error tracking assignment is being made.
-   **disabled\_data** (`string`, optional) Provide a string indicating which data or fields should be marked as disabled in the error tracking rules.
-   **error\_tracking\_rule\_id** (`string`, optional) A UUID string identifying the specific error tracking assignment rule to update.
-   **filter\_expression** (`string`, optional) Provide a string that specifies criteria for selecting which rules to update. Use logical expressions to define this filter.
-   **order\_key** (`integer`, optional) The order key for sorting or prioritizing the assignment rules. Provide as an integer.
-   **rule\_identifier** (`string`, optional) The unique ID of the error tracking assignment rule to update.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.DeleteErrorTrackingRule



Deletes a specified error tracking assignment rule.

**Parameters**

-   **project\_id** (`string`, required) The ID of the project to access. Obtain this by calling /api/projects/.
-   **rule\_id** (`string`, required) The UUID of the error tracking assignment rule to be deleted.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ReorderAssignmentRules



Reorder error tracking assignment rules in a project environment.

**Parameters**

-   **project\_id** (`string`, required) The Project ID for accessing the desired project. Retrieve it using /api/projects/.
-   **disable\_rule\_data** (`string`, optional) Specify whether rule data is disabled, using ‘true’ or ‘false’.
-   **rule\_filters** (`string`, optional) A string containing conditions to filter assignment rules for reordering. Useful for applying specific criteria when reordering rules.
-   **rule\_id** (`string`, optional) The specific ID of the assignment rule to be reordered within the project environment.
-   **rule\_order\_position** (`integer`, optional) The new position for the assignment rule in the order list. Use an integer to specify the desired position.
-   **target\_assignee** (`string`, optional) Specifies the assignee for the error tracking rules in the project. This should be a valid user identifier in the Datadog environment.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ListErrorTrackingFingerprints



Retrieve error tracking fingerprints for a specific project.

**Parameters**

-   **project\_identifier** (`string`, required) The unique ID of the project you want to access. Obtain this by calling /api/projects/.
-   **initial\_index\_for\_results** (`integer`, optional) The initial index from which to return the results for the error tracking fingerprints list.
-   **results\_per\_page** (`integer`, optional) Number of results to return per page.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetErrorTrackingFingerprint



Retrieve a specific error tracking fingerprint by ID.

**Parameters**

-   **error\_tracking\_fingerprint\_uuid** (`string`, required) A UUID identifying the error tracking issue fingerprint v2.
-   **project\_id** (`string`, required) Project ID to access specific project data. Use /api/projects/ to retrieve this ID.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.DeleteErrorFingerprint



Mark an error fingerprint as deleted in Datadog.

**Parameters**

-   **error\_fingerprint\_uuid** (`string`, required) A UUID string identifying the specific error tracking issue fingerprint to be marked as deleted.
-   **posthog\_project\_id** (`string`, required) The ID of the Datadog project you want to modify. Obtainable via a call to /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ResolveGithubFileLinks



Resolve GitHub file links for error tracking projects.

**Parameters**

-   **project\_id** (`string`, required) The ID of the project to access. Retrieve the ID via a call to /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ListErrorTrackingGroupingRules



Retrieve error tracking grouping rules for a project.

**Parameters**

-   **project\_id** (`string`, required) The ID of the project to access. Retrieve it by calling /api/projects/.
-   **initial\_index\_for\_results** (`integer`, optional) The starting index from which to return results, used for pagination.
-   **results\_per\_page** (`integer`, optional) Number of results to return per page when listing error tracking grouping rules.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateErrorTrackingGroupingRule



Create a new error tracking grouping rule for a project.

**Parameters**

-   **assignee\_identifier** (`string`, required) The identifier of the user to whom the error tracking issue is assigned. Provide a valid user ID or username.
-   **error\_tracking\_filters** (`string`, required) Filters for error tracking grouping rule. Provide criteria to classify errors, such as error types or patterns.
-   **order\_priority\_key** (`integer`, required) An integer representing the priority or sequence order of the error tracking grouping rule within the project.
-   **project\_id** (`string`, required) The ID of the project to access. Obtainable via a call to /api/projects/.
-   **rule\_identifier** (`string`, required) A unique string identifier for the new error tracking grouping rule.
-   **grouping\_rule\_disabled\_data** (`string`, optional) Indicate if the grouping rule data should be disabled. Accepts a boolean in string form, like ‘true’ or ‘false’.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveErrorGroupingRules



Retrieve error tracking grouping rules for an environment.

**Parameters**

-   **grouping\_rule\_id** (`string`, required) A UUID string identifying this specific error tracking grouping rule for retrieval.
-   **project\_id\_for\_access** (`string`, required) The ID of the project you are trying to access for retrieving error tracking grouping rules. Obtain using the /api/projects/ endpoint.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateErrorTrackingGroupingRules



Update error tracking grouping rules for a project.

**Parameters**

-   **assignee\_user\_id** (`string`, required) The user ID of the person to whom the error tracking task is assigned.
-   **filters\_for\_grouping\_rules** (`string`, required) Specify filters as a string to refine which errors to group. This can include criteria like error type or severity.
-   **grouping\_rule\_id** (`string`, required) A UUID string identifying the error tracking grouping rule to update in Datadog.
-   **priority\_order\_key** (`integer`, required) Specify the integer value to determine the priority order of grouping rules.
-   **project\_id** (`string`, required) The ID of the project to access. Retrieve this by calling /api/projects/.
-   **rule\_id** (`string`, required) The unique identifier for the error tracking grouping rule to be updated.
-   **disabled\_data** (`string`, optional) A string indicating which data to disable in the error tracking grouping rules. Provide the specific data identifier or description.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ModifyGroupingRules



Update error tracking grouping rules for a project.

**Parameters**

-   **project\_id** (`string`, required) The ID of the project you want to access. Retrieve it by calling /api/projects/.
-   **assigned\_user** (`string`, optional) Specify the user assigned to manage the error tracking rules. It should be the username or ID of the Datadog user.
-   **disable\_data\_filtering** (`string`, optional) Specifies data filtering rules to be disabled. Provide a string indicating the types of rules or data aspects to disable.
-   **error\_tracking\_rule\_uuid** (`string`, optional) A UUID string identifying the error tracking grouping rule to update.
-   **filters\_string** (`string`, optional) String containing filtering conditions for updating grouping rules. Specify conditions to narrow down rules to be updated.
-   **grouping\_rule\_order\_key** (`integer`, optional) An integer that specifies the priority order of the error grouping rule within a project. Higher values may denote higher priority.
-   **rule\_id** (`string`, optional) The ID of the grouping rule to be updated. Required for specifying which rule to modify within the project.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RemoveErrorTrackingRule



Delete an error tracking grouping rule in a project.

**Parameters**

-   **error\_tracking\_rule\_id** (`string`, required) A UUID string identifying the specific error tracking grouping rule to be deleted.
-   **project\_identifier** (`string`, required) The ID of the project to access. Obtain it using /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ReorderErrorTrackingRules



Reorder error tracking grouping rules in a project.

**Parameters**

-   **project\_identifier** (`string`, required) The unique identifier for the project you wish to access. Obtainable via the /api/projects/ endpoint.
-   **disabled\_data\_details** (`string`, optional) Specify details of the data to disable or modify. Format as a string describing which elements are affected.
-   **error\_grouping\_filters** (`string`, optional) Filters to apply for selecting specific error tracking rules to reorder. This can include criteria like rule severity, type, etc.
-   **error\_tracking\_rule\_id** (`string`, optional) Unique identifier for the error tracking rule you want to reorder.
-   **new\_order\_key** (`integer`, optional) An integer representing the new order position for the error tracking grouping rules.
-   **rule\_assignee** (`string`, optional) Assign a person or role responsible for the error tracking grouping rule. Expected to be a string representing a user’s name or identifier.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ListErrorTrackingReleases



Retrieve releases from error tracking for a specific environment.

**Parameters**

-   **project\_id** (`string`, required) The unique identifier of the project to access. Obtain by calling /api/projects/.
-   **results\_per\_page** (`integer`, optional) The number of results to return per page for error tracking releases.
-   **start\_index\_for\_results** (`integer`, optional) The starting index for the results to be returned. Use this to paginate results in the list of error tracking releases.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateErrorTrackingRelease



Create a new error tracking release for a project.

**Parameters**

-   **error\_release\_id** (`string`, required) Unique identifier for the error tracking release to be accessed or modified.
-   **hash\_identifier** (`string`, required) Unique string identifier for the release hash. Required for tracking specific releases.
-   **project\_id** (`string`, required) ID of the project for which to create an error tracking release. Obtainable via /api/projects/.
-   **project\_name** (`string`, required) The name of the project for which you want to create an error tracking release.
-   **release\_creation\_timestamp** (`string`, required) Timestamp indicating when the error tracking release was created. Format should be ISO 8601 (e.g., 2023-10-02T14:48:00Z).
-   **release\_version** (`string`, required) The version identifier for the new error tracking release.
-   **team\_identifier** (`integer`, required) The integer ID of the team associated with the error tracking release. Required to specify the team context in Datadog.
-   **release\_metadata** (`string`, optional) Optional metadata for the error tracking release. Provide additional information in a string format.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveErrorTrackingRelease



Retrieves details of a specific error tracking release.

**Parameters**

-   **project\_identifier** (`string`, required) Project ID to access specific error tracking release data. Obtainable via /api/projects/ call.
-   **release\_uuid** (`string`, required) A UUID string identifying the specific error tracking release to retrieve details for.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateErrorTrackingReleases



Update error tracking releases in a project environment.

**Parameters**

-   **created\_at\_timestamp** (`string`, required) The timestamp indicating when the release was created. Format should be ISO 8601 (e.g., ‘2023-09-23T18:25:43.511Z’).
-   **project\_identifier** (`string`, required) The Project ID for accessing the specific project in Datadog. Obtainable by calling /api/projects/.
-   **project\_key** (`string`, required) The identifier or name of the project for which you’re updating the error tracking release.
-   **release\_hash\_id** (`string`, required) A unique identifier for the release you want to update. Provides a reference to the specific release version within the project’s error tracking data.
-   **release\_id** (`string`, required) A UUID string identifying the error tracking release to update.
-   **release\_version** (`string`, required) The version of the release being updated. This should typically be a string representing the version code or number.
-   **team\_identifier** (`integer`, required) The unique integer identifier for the team. Used to specify which team’s release information to update.
-   **update\_id** (`string`, required) The unique identifier for the release you want to update.
-   **metadata\_description** (`string`, optional) Provide a string with additional information or details about the release metadata.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateErrorTrackingRelease



Update details for an error tracking release.

**Parameters**

-   **project\_id** (`string`, required) The ID of the project to access. Retrieve by calling /api/projects/.
-   **error\_tracking\_release\_id** (`string`, optional) A UUID string identifying the error tracking release to be updated.
-   **release\_creation\_date** (`string`, optional) The date and time when the error tracking release was created. Expected in ISO 8601 format (e.g., 2023-10-31T14:30:00Z).
-   **release\_hash\_identifier** (`string`, optional) A unique string identifier for the error tracking release to be updated.
-   **release\_id** (`string`, optional) The unique identifier of the error tracking release to update.
-   **release\_metadata** (`string`, optional) Metadata for the error tracking release. This should be a string detailing any additional information relevant to the release.
-   **release\_project\_name** (`string`, optional) The name of the project associated with the error tracking release to be updated.
-   **release\_version** (`string`, optional) The specific version of the error tracking release to update. It should be a string representing the version number.
-   **team\_identifier** (`integer`, optional) The unique identifier for the team associated with the error tracking release. Expected to be an integer.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.DeleteErrorTrackingRelease



Deletes a specific error tracking release from a project environment.

**Parameters**

-   **error\_tracking\_release\_id** (`string`, required) A UUID string identifying the error tracking release to be deleted.
-   **project\_id** (`string`, required) The ID of the project being accessed. Use `/api/projects/` to find the ID.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveErrorTrackingReleaseHash



Retrieve details for a specific error tracking release hash.

**Parameters**

-   **project\_id** (`string`, required) The ID of the project to access. Obtainable via a call to /api/projects/.
-   **release\_hash\_id** (`string`, required) The unique identifier for the error tracking release hash. This ID is necessary to retrieve the specific details.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ListErrorTrackingSuppressionRules



List error tracking suppression rules for a project environment.

**Parameters**

-   **project\_id** (`string`, required) The ID of the project to access. Obtain by calling /api/projects/.
-   **results\_per\_page** (`integer`, optional) Number of results to return per page.
-   **results\_start\_index** (`integer`, optional) The starting index for the results to be returned, useful for pagination.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateErrorTrackingSuppressionRule



Create a new error tracking suppression rule.

**Parameters**

-   **project\_id** (`string`, required) The unique ID of the project to access. Obtain it by calling /api/projects/.
-   **suppress\_rule\_order\_key** (`integer`, required) An integer representing the order or priority of the suppression rule in the list. Determines processing sequence.
-   **suppression\_rule\_filters** (`string`, required) A string defining the criteria to filter which errors should be suppressed. Specify conditions relevant to your project’s needs.
-   **suppression\_rule\_id** (`string`, required) A unique identifier for the suppression rule to be created. This ID helps in tracking and managing the specific rule.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetSuppressionRuleDetails



Retrieve details of a suppression rule in error tracking.

**Parameters**

-   **project\_identifier** (`string`, required) The unique identifier for the project to access. Obtainable via the /api/projects/ call.
-   **suppression\_rule\_uuid** (`string`, required) A UUID string identifying the specific error tracking suppression rule.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateErrorTrackingSuppressionRules



Update error tracking suppression rules for a project.

**Parameters**

-   **filters** (`string`, required) String criteria used to specify which errors to suppress. Format should align with Datadog’s filtering syntax.
-   **project\_identifier** (`string`, required) The unique identifier for the project you want to access. Use the API call /api/projects/ to obtain this ID.
-   **rule\_id** (`string`, required) The unique identifier for the suppression rule to be updated.
-   **suppression\_rule\_id** (`string`, required) A UUID string identifying the error tracking suppression rule.
-   **suppression\_rule\_order\_key** (`integer`, required) Specify the order key for the suppression rule. This determines its priority in execution.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateErrorSuppressionRule



Update error tracking suppression rules for a project.

**Parameters**

-   **project\_id** (`string`, required) The ID of the project you’re trying to access. Call /api/projects/ to find the ID.
-   **rule\_id** (`string`, optional) The unique identifier of the suppression rule to update. This ID is required to specify which rule you want to partially update.
-   **rule\_order\_key** (`integer`, optional) Specify the order for the suppression rule as an integer. Determines rule priority or execution sequence.
-   **suppression\_rule\_filters** (`string`, optional) A string defining filters for the suppression rule updates (e.g., specific conditions or parameters).
-   **suppression\_rule\_id** (`string`, optional) The UUID identifying the error tracking suppression rule to update.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RemoveErrorSuppressionRule



Delete an error tracking suppression rule.

**Parameters**

-   **project\_identifier** (`string`, required) The ID of the project to access. Use /api/projects/ to find it.
-   **suppression\_rule\_uuid** (`string`, required) A UUID string that uniquely identifies the error tracking suppression rule to be deleted.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ReorderErrorTrackingSuppressionRules



Reorder error tracking suppression rules for a project.

**Parameters**

-   **project\_id** (`string`, required) The unique ID of the project for which you want to reorder suppression rules. To locate the ID, make a call to /api/projects/.
-   **error\_tracking\_filters** (`string`, optional) Specify filter criteria to narrow down which suppression rules are reordered, using a string format.
-   **new\_order\_key** (`integer`, optional) Integer representing the new order sequence for suppression rules in a project.
-   **suppression\_rule\_id** (`string`, optional) The unique ID of the suppression rule you’re reordering within the project.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ListErrorTrackingSymbolSets



Retrieve error tracking symbol sets for a project.

**Parameters**

-   **project\_id** (`string`, required) The unique ID of the project to access. Obtain it by calling /api/projects/.
-   **results\_per\_page** (`integer`, optional) Specifies the number of results to return per page.
-   **start\_index** (`integer`, optional) The initial index from which to return the results for pagination.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateSymbolSet



Create a new symbol set for error tracking in a project.

**Parameters**

-   **project\_id** (`string`, required) Project ID needed to access the specific project for creating a symbol set. Obtainable via /api/projects/ call.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveErrorTrackingSymbolSet



Retrieve details of a specific error tracking symbol set.

**Parameters**

-   **error\_tracking\_symbol\_set\_uuid** (`string`, required) A UUID string identifying the specific error tracking symbol set to retrieve.
-   **project\_id** (`string`, required) Project ID for accessing the specified project. Use /api/projects/ to find this ID.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateEnvironmentSymbolSet



Update error tracking symbol sets in environments.

**Parameters**

-   **error\_tracking\_symbol\_set\_id** (`string`, required) A UUID identifying the error tracking symbol set to update.
-   **project\_id\_for\_symbol\_set\_update** (`string`, required) The ID of the project for updating the symbol set. Obtainable via /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateErrorTrackingSymbols



Update symbol sets for error tracking in a specific environment.

**Parameters**

-   **error\_tracking\_symbol\_set\_id** (`string`, required) A UUID identifying the error tracking symbol set to update.
-   **project\_identifier** (`string`, required) The ID of the project you wish to access. Retrieve by calling /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.DeleteSymbolSet



Deletes an error tracking symbol set by ID.

**Parameters**

-   **project\_identifier** (`string`, required) The ID of the project to access. Use the /api/projects/ endpoint to find this ID.
-   **symbol\_set\_id** (`string`, required) A UUID string identifying the error tracking symbol set to delete.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CompleteSymbolSetUpload



Finalize the upload of symbol sets in Datadog error tracking.

**Parameters**

-   **project\_id\_for\_symbol\_set** (`string`, required) Specify the Project ID for accessing the project in Datadog. Retrieve using the /api/projects/ endpoint.
-   **reference\_id** (`string`, required) A unique identifier for the symbol set upload reference.
-   **symbol\_set\_id** (`string`, required) A UUID string identifying the specific error tracking symbol set to be finalized.
-   **team\_identifier** (`integer`, required) The unique integer identifier representing the team within the Datadog project.
-   **upload\_created\_at\_timestamp** (`string`, required) The timestamp marking when the upload was created, in ISO 8601 format.
-   **upload\_session\_id** (`string`, required) The unique identifier for the symbol set upload session you wish to complete. This ID is obtained during the initial upload process.
-   **storage\_pointer** (`string`, optional) A string representing the storage location pointer for the symbol set. Required to identify the upload location within Datadog.
-   **upload\_failure\_reason** (`string`, optional) Provide the reason for upload failure if applicable. This helps in diagnosing issues related to the symbol set upload process in Datadog.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CompleteSymbolSetsUpload



Complete the uploading process for symbol sets in error tracking.

**Parameters**

-   **project\_id** (`string`, required) Specifies the Project ID for access. Obtain this ID via the /api/projects/ endpoint.
-   **reference\_identifier** (`string`, required) A string used to identify the symbol set upload reference. It helps in finalizing the upload process.
-   **symbol\_set\_id** (`string`, required) Unique identifier for the symbol set upload session to complete.
-   **team\_identifier** (`integer`, required) The integer ID of the team associated with the symbol sets upload you are finalizing. Required for access control and process completion.
-   **upload\_completion\_timestamp** (`string`, required) Timestamp indicating when the upload process was completed, in ISO 8601 format.
-   **storage\_pointer** (`string`, optional) A string value representing the storage pointer identifier for the symbol sets. Used to specify the location where the symbol sets are stored.
-   **upload\_failure\_reason** (`string`, optional) A description of the reason for the upload failure, if applicable. Provide detailed information about what caused the issue.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.StartErrorTrackingUpload



Initiate a bulk upload for error tracking symbols.

**Parameters**

-   **project\_id** (`string`, required) The unique ID of the project to access. Obtainable via /api/projects/ API call.
-   **team\_id** (`integer`, required) Numeric ID of the team associated with the error tracking upload.
-   **upload\_creation\_timestamp** (`string`, required) The ISO 8601 timestamp indicating when the upload was created. This helps to record the exact time of initiating the upload process.
-   **upload\_reference** (`string`, required) A unique identifier for the bulk upload session to ensure proper tracking and management.
-   **upload\_task\_id** (`string`, required) Unique identifier for the bulk upload task. Used to reference the upload process.
-   **storage\_pointer** (`string`, optional) A string that identifies where the symbol sets are stored. Use this to specify the location for the bulk upload.
-   **upload\_failure\_reason** (`string`, optional) Provide a description if there was a failure during bulk upload initiation. This can help identify issues with the upload process.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.StartSymbolUpload



Initiate symbol set upload for error tracking environments.

**Parameters**

-   **project\_identifier** (`string`, required) The ID of the project to access. Obtain it via a call to /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateEvaluationRun



Initiate a new evaluation run for a project.

**Parameters**

-   **project\_identifier** (`string`, required) The ID of the project to access for the evaluation run. Retrieve it using /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ListEnvironmentEvaluations



Retrieve evaluations for a specific project environment.

**Parameters**

-   **project\_identifier** (`string`, required) The unique ID of the project to access evaluations. Retrieve via /api/projects/.
-   **evaluation\_ids** (`array[string]`, optional) List of evaluation IDs to filter results. Multiple IDs allowed, separated by commas.
-   **evaluation\_ordering** (`array[string]`, optional) Specify the ordering of results. Use created\_at, updated\_at, or name, with optional ’-’ for descending.
-   **filter\_by\_enabled\_status** (`boolean`, optional) Filter by enabled (true) or disabled (false) evaluations.
-   **results\_offset\_index** (`integer`, optional) The initial index from which to return the results, allowing pagination control.
-   **results\_per\_page** (`integer`, optional) Number of results to return per page in the environment evaluations list.
-   **search\_query** (`string`, optional) Search in the evaluation’s name or description. Use this to filter results by specific keywords.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateEnvironmentEvaluation



Create a new environment evaluation for a project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_id** (`string`, optional) Project ID to access. Obtainable from calling /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveEnvironmentEvaluation



Retrieve details of a specific environment evaluation.

**Parameters**

-   **evaluation\_id** (`string`, required) A UUID string that uniquely identifies the evaluation to be retrieved.
-   **project\_id** (`string`, required) The unique identifier for the project to access. Use /api/projects/ to find it.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateEnvironmentEvaluation



Update an environment’s evaluation in a project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **evaluation\_id** (`string`, optional) A UUID string uniquely identifying the evaluation to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) The ID of the project you want to update. Obtainable via the /api/projects/ endpoint. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ModifyEnvironmentEvaluation



Update specific environment evaluation details.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **evaluation\_id** (`string`, optional) A UUID string that identifies the specific environment evaluation to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) Provide the Project ID to identify and access the specific project. Use /api/projects/ to retrieve the ID if needed. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.DeleteEvaluation



Marks an evaluation as deleted in the environment.

**Parameters**

-   **evaluation\_uuid** (`string`, required) A UUID string identifying the evaluation to be marked as deleted.
-   **project\_identifier** (`string`, required) The ID of the project to access in Datadog. Retrieve it via a call to /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveEnvironmentEvent



Retrieve details of a specific environment event.

**Parameters**

-   **event\_id** (`string`, required) The unique identifier for the environment event you want to retrieve details for.
-   **project\_identifier** (`string`, required) The unique ID of the project you want to access. Use /api/projects/ to obtain it if unknown.
-   **response\_format** (`string`, optional) Specify the desired format of the response. Options are ‘csv’ or ‘json’.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveEnvironmentEventValues



Retrieve event values for a specific environment.

**Parameters**

-   **project\_id** (`string`, required) The ID of the project to access environment data. Retrieve via /api/projects/.
-   **output\_format** (`string`, optional) Specifies the format of the returned data. Use ‘csv’ or ‘json’.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.EnvironmentExportsOverview



Retrieve a list of exports for a specified environment.

**Parameters**

-   **project\_identifier** (`string`, required) The ID of the project to access. Retrieve the ID using a call to /api/projects/.
-   **result\_start\_index** (`integer`, optional) The initial index from which to start returning results for the exports list.
-   **results\_per\_page** (`integer`, optional) Specify the number of results to return per page.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateEnvironmentExports



Initiates the creation of environment exports in Datadog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_id** (`string`, optional) The unique ID of the project for which you want to create environment exports. Use /api/projects/ to find the ID. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveEnvironmentExports



Retrieve details of an environment export in Datadog.

**Parameters**

-   **export\_id** (`integer`, required) A unique integer value identifying the exported asset to retrieve.
-   **project\_id** (`string`, required) The ID of the project to access. Retrieve using /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveEnvironmentExportContent



Retrieve content of a specific environment export.

**Parameters**

-   **exported\_asset\_id** (`integer`, required) A unique integer value identifying the exported asset. Required to retrieve the specific environment export content.
-   **project\_identifier** (`string`, required) Project ID to access the desired project. Retrieve the ID by calling /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ListProjectFileSystems



Retrieve file systems for a given project environment.

**Parameters**

-   **project\_identifier** (`string`, required) The ID of the project to access. Use /api/projects/ to retrieve this ID if unknown.
-   **initial\_result\_index** (`integer`, optional) The initial index from which to return the results. Use this to paginate through data.
-   **results\_per\_page\_limit** (`integer`, optional) Specify the number of results to return per page when listing file systems.
-   **search\_term** (`string`, optional) A search term to filter the results based on specific criteria.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateFileSystemEnvironment



Create a new file system environment in a project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_id** (`string`, optional) The ID of the project to access for environment creation. Retrieve it from /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetEnvironmentFileSystemDetails



Retrieve details of a file system in a specific environment.

**Parameters**

-   **file\_system\_uuid** (`string`, required) A UUID string identifying the file system to retrieve details for.
-   **project\_identifier** (`string`, required) Project ID to access the specific project environment. Use /api/projects/ to find this ID.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateEnvironmentFileSystem



Update a file system for a specific environment.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **file\_system\_id** (`string`, optional) A UUID string identifying this file system for the update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) The unique identifier for the project containing the environment. Retrieve using the /api/projects/ endpoint if unknown. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ModifyEnvironmentFileSystem



Partially update a file system environment in a project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **file\_system\_id** (`string`, optional) A UUID string that uniquely identifies the specific file system to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) The unique identifier for the project you want to modify. Use the endpoint `/api/projects/` to retrieve this ID if unknown. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.DeleteFilesystemEnvironment



Deletes a file system in the specified environment.

**Parameters**

-   **filesystem\_id** (`string`, required) A UUID string identifying the file system to be deleted.
-   **project\_identifier** (`string`, required) The Project ID of the specific environment. Obtainable through /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetFileCountInFolder



Retrieve the count of all files in a specified folder.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **file\_system\_uuid** (`string`, optional) A UUID string identifying the file system to get the file count. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) Project ID for accessing the desired project. Use /api/projects/ to find the ID. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateEnvironmentFileSystemLink



Create a link between environment and file system.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **file\_system\_uuid** (`string`, optional) A UUID string that uniquely identifies the file system to be linked. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) The ID of the project to access. Retrieve using /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.MoveFileWithinEnvironment



Move a file within an environment’s file system.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **file\_system\_uuid** (`string`, optional) A UUID string identifying the file system to move within the environment. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) Project ID for accessing the specific project environment. Obtain it via a call to /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CountFilesInDirectory



Get count of all files in a specified folder.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_identifier** (`string`, optional) The project ID for accessing the desired project. Retrieve this ID by calling /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateEnvironmentFileSystemLogView



Create a file system log view for an environment.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_id** (`string`, optional) Project ID to access the specific environment. Use /api/projects/ to find it. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveUnfiledFileSystemItems



Retrieve unfiled file system items for a project.

**Parameters**

-   **project\_id** (`string`, required) The ID of the specific project whose unfiled file system items you want to retrieve. To obtain this ID, call /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ListFileSystemShortcuts



Retrieve file system shortcuts for a specified project.

**Parameters**

-   **project\_id** (`string`, required) The ID of the project whose file system shortcuts you want to access. Use the /api/projects/ call to find the ID.
-   **result\_start\_index** (`integer`, optional) The initial index from which to start returning results for the file system shortcuts list.
-   **results\_per\_page** (`integer`, optional) Specifies the number of results to return per page when retrieving file system shortcuts.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateFileSystemShortcut



Create a file system shortcut for a project environment.

**Parameters**

-   **creation\_timestamp** (`string`, required) The timestamp indicating when the file system shortcut was created. Format: YYYY-MM-DDTHH:MM:SSZ.
-   **file\_system\_path** (`string`, required) The file system path where the shortcut will point to. This should specify the environment-specific directory.
-   **project\_identifier** (`string`, required) The unique ID of the project to access. Obtain it via a call to /api/projects/.
-   **shortcut\_identifier** (`string`, required) A unique identifier for the filesystem shortcut to be created. Used to distinguish this shortcut.
-   **reference\_name** (`string`, optional) A string representing the reference name for the file system shortcut. Use a unique identifier or description that aids in shortcut identification.
-   **shortcut\_type** (`string`, optional) Specify the type of shortcut to create, such as “folder” or “file”.
-   **target\_href** (`string`, optional) The URL or path to which the file system shortcut will point. This should be a valid string representing the reference destination.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveFileSystemShortcut



Retrieve details of a specific file system shortcut.

**Parameters**

-   **file\_system\_shortcut\_id** (`string`, required) A UUID string identifying the specific file system shortcut to retrieve details for.
-   **project\_identifier** (`string`, required) The unique Project ID needed to access the specific project. Obtain this by querying /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateEnvFileSystemShortcut



Updates a file system shortcut in a specified environment.

**Parameters**

-   **creation\_timestamp** (`string`, required) The timestamp when the shortcut was created. Format: ISO 8601 string.
-   **file\_system\_path** (`string`, required) The path of the file system shortcut to update. Specify the full directory path as a string.
-   **file\_system\_shortcut\_id** (`string`, required) A UUID string identifying the file system shortcut to be updated.
-   **project\_identifier** (`string`, required) The ID of the project to access. Retrieve this by calling /api/projects/.
-   **shortcut\_id** (`string`, required) Unique identifier of the file system shortcut to update in the specified environment.
-   **reference\_identifier** (`string`, optional) The reference identifier for the file system shortcut to be updated.
-   **shortcut\_href** (`string`, optional) The URL or URI of the file system shortcut to update.
-   **shortcut\_type** (`string`, optional) Specifies the type of the file system shortcut to be updated, such as ‘document’ or ‘folder’.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ModifyEnvFileSystemShortcut



Update a file system shortcut in a specific environment.

**Parameters**

-   **project\_id** (`string`, required) The unique ID of the project to access. Retrieve it via a call to /api/projects/.
-   **created\_at\_timestamp** (`string`, optional) The timestamp of when the file system shortcut was created, in ISO 8601 format.
-   **file\_system\_shortcut\_id** (`string`, optional) Unique identifier for the file system shortcut to be updated.
-   **file\_system\_shortcut\_type** (`string`, optional) Specifies the type of the file system shortcut to update, such as ‘symlink’ or ‘hardlink’.
-   **reference\_identifier** (`string`, optional) A unique string identifier for the file system shortcut to be updated.
-   **shortcut\_file\_path** (`string`, optional) The path to the file system shortcut that needs to be updated in the environment.
-   **shortcut\_href** (`string`, optional) The URL or link to the file system shortcut that needs updating. This should be a valid URI.
-   **shortcut\_id** (`string`, optional) A UUID string that uniquely identifies the file system shortcut to update.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.DeleteFileSystemShortcut



Deletes a file system shortcut in an environment.

**Parameters**

-   **file\_system\_shortcut\_id** (`string`, required) The UUID string that uniquely identifies the file system shortcut to be deleted.
-   **project\_identifier** (`string`, required) The unique identifier for the project you wish to access. Retrieve this by calling /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ListEnvironmentGroups



Retrieve all groups for a specific environment’s group type.

**Parameters**

-   **group\_type\_index** (`integer`, required) The index representing the specific group type to list. Use this to filter groups by type.
-   **project\_id** (`string`, required) ID of the project to access. Retrieve the ID from the /api/projects/ endpoint.
-   **search\_group\_name** (`string`, required) Search term for the group name to filter results.
-   **pagination\_cursor** (`string`, optional) The pagination cursor value to navigate through the paginated list of environment groups.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateEnvironmentGroup



Create a new environment group in a project.

**Parameters**

-   **environment\_group\_key** (`string`, required) A string identifier for the environment group. It must be unique within the project.
-   **group\_type\_index** (`integer`, required) An integer representing the index of the group type to be created within the project. Ensure it matches the available types for grouping.
-   **project\_identifier** (`string`, required) The unique identifier for the project to access. Retrieve using /api/projects/.
-   **environment\_group\_properties** (`string`, optional) A JSON string containing key-value pairs for the properties of the environment group. Define attributes like settings and configurations relevant to the group.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveEnvironmentGroupActivity



Retrieve activity data for groups within an environment.

**Parameters**

-   **group\_type\_index** (`integer`, required) An integer that specifies the type of group to find within the environment.
-   **project\_id** (`string`, required) Project ID required to access activity data for the specified environment group. Obtain this ID by making a call to /api/projects/.
-   **user\_id\_for\_group\_retrieval** (`string`, required) Specify the user ID to retrieve group activities for within a project.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.DeleteEnvironmentGroupProperty



Deletes a property from an environment group.

**Parameters**

-   **creation\_date** (`string`, required) The date when the property was created, in ISO 8601 format.
-   **environment\_group\_type\_index** (`integer`, required) An integer representing the group type index to identify the environment group.
-   **group\_key** (`string`, required) Specify the key of the environment group you want to target for property deletion.
-   **group\_key\_for\_deletion** (`string`, required) The key of the property to delete from the environment group.
-   **group\_type\_index** (`integer`, required) Specify the group type index to identify which group to delete the property from. This should be an integer value.
-   **project\_id** (`string`, required) The unique identifier for the project. Obtain it by calling /api/projects/.
-   **group\_properties\_to\_delete** (`string`, optional) A comma-separated list of property names you want to delete from the environment group.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.FindEnvironmentGroups



Retrieve details of environment groups by project ID.

**Parameters**

-   **environment\_group\_key** (`string`, required) Specify the key of the environment group you want to find within the project.
-   **group\_type\_to\_find** (`integer`, required) Specify the type of environment group to find. This is represented as an integer value that corresponds to a specific group type within the project.
-   **project\_id** (`string`, required) The ID of the project to access. Call /api/projects/ to find the project ID.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveEnvironmentPropertyDefinitions



Retrieve property definitions for environment groups.

**Parameters**

-   **project\_identifier** (`string`, required) Project ID for accessing environment groups. Use /api/projects/ to find this ID.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveEnvironmentPropertyValues



Retrieve property values of environments within a project.

**Parameters**

-   **project\_identifier** (`string`, required) The unique ID of the project to access. Retrieve this ID via a call to the /api/projects/ endpoint.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetRelatedEnvironmentGroups



Retrieve related environment groups for a project.

**Parameters**

-   **group\_type\_identifier** (`integer`, required) An integer representing the specific group type to locate within the environment groups.
-   **project\_id** (`string`, required) The unique ID of the project to access related environment groups. Obtainable via a call to /api/projects/.
-   **user\_id\_for\_group\_search** (`string`, required) The ID of the user for whom you want to find related groups. This helps in retrieving specific group associations for the given user.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateEnvironmentGroupProperty



Update a property of an environment group.

**Parameters**

-   **creation\_timestamp** (`string`, required) The date and time when the property was created, in ISO 8601 format (e.g., ‘2023-10-05T14:48:00Z’).
-   **environment\_group\_key** (`string`, required) A unique identifier for the environment group whose property is being updated.
-   **group\_key** (`string`, required) Specify the key of the group to locate within the project for updating properties.
-   **group\_type\_identifier** (`integer`, required) A unique integer representing the type of environment group to locate and update.
-   **group\_type\_index\_identifier** (`integer`, required) The integer index identifying the type of the environment group to be updated. Ensure it corresponds to the correct group type required for the operation.
-   **project\_id** (`string`, required) The unique Project ID for accessing specific project resources. Retrieve this ID by making a call to /api/projects/.
-   **group\_properties** (`string`, optional) A JSON string representing the properties to update in the environment group.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ListProjectHogFunctions



Retrieve a list of hog functions for a given project.

**Parameters**

-   **project\_identifier** (`string`, required) The Project ID to access the specific project. Use /api/projects/ to find the ID.
-   **created\_at** (`string`, optional) The creation date of the hog function. Expected in ISO 8601 format (e.g., 2023-10-11T15:00:00Z).
-   **created\_by\_user\_id** (`integer`, optional) The user ID of the person who created the hog functions.
-   **function\_id** (`string`, optional) The unique identifier for the hog function to be retrieved. Specify this to get details of a specific function.
-   **function\_types** (`array[string]`, optional) Specify one or more hog function types to filter by, separated by commas.
-   **include\_enabled\_functions** (`boolean`, optional) If set to true, returns only enabled hog functions; otherwise, returns all functions.
-   **results\_offset** (`integer`, optional) The initial index from which to return the results for paginated data.
-   **results\_per\_page** (`integer`, optional) Specify the number of results to return per page for the hog functions list.
-   **search\_term** (`string`, optional) A string used to search and filter the list of hog functions.
-   **update\_timestamp** (`string`, optional) A timestamp indicating the last update time of the hog function. Use format YYYY-MM-DDTHH:MM:SSZ.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateHogFunctionEnvironment



Track and create a new file system view in an environment.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_id** (`string`, optional) The ID of the project to access. Call /api/projects/ to retrieve project IDs if needed. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.TrackHogFunctionViews



Tracks views on a specific hog function by logging access.

**Parameters**

-   **hog\_function\_uuid** (`string`, required) A UUID string to identify the specific hog function for view tracking.
-   **target\_project\_id** (`string`, required) The ID of the project to access. Use /api/projects/ to find the ID.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateHogFunctions



Update and log views of file system resources.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **hog\_function\_uuid** (`string`, optional) A UUID string identifying this hog function to update and log views. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) The ID of the project you want to access. Retrieve it using a call to /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateHogFunctionViewLog



Log a new view for an environment’s hog function.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **hog\_function\_uuid** (`string`, optional) A UUID string identifying the hog function to log a view for. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) The ID of the project to access. Retrieve it by calling /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.DeleteHogFunction



Marks a hog function as deleted in a project.

**Parameters**

-   **hog\_function\_id** (`string`, required) A UUID string identifying the specific hog function to mark as deleted.
-   **project\_identifier** (`string`, required) The unique identifier for the project to access. To find it, make a call to /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateHogFunctionBroadcast



Create a broadcast for hog functions in an environment.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **hog\_function\_id** (`string`, optional) A UUID string identifying the hog function for broadcast creation. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) String representing the ID of the project to access. Obtain the ID via a call to /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.TrackHogFunctionInvocation



Track and log hog function invocations in a project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **hog\_function\_id** (`string`, optional) A UUID string identifying the hog function to track in the specified project environment. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) The ID of the project to access. Call /api/projects/ to retrieve the ID if needed. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveHogFunctionLogs



Retrieve logs for hog function views in an environment.

**Parameters**

-   **hog\_function\_uuid** (`string`, required) A UUID string identifying the specific hog function to retrieve logs for.
-   **project\_identifier** (`string`, required) The unique identifier for the project to access. Obtainable via a call to /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveHogFunctionMetrics



Retrieve hog function metrics for a specific environment.

**Parameters**

-   **hog\_function\_uuid** (`string`, required) A UUID string identifying the specific hog function for which metrics are being retrieved.
-   **project\_identifier** (`string`, required) Project ID of the target project. Retrieve via /api/projects/ if unknown.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveHogFunctionMetricsTotals



Retrieve total metrics for a specific HOG function.

**Parameters**

-   **hog\_function\_uuid** (`string`, required) A UUID string identifying the specific HOG function for which to retrieve metrics.
-   **project\_id** (`string`, required) The ID of the project to access. Obtainable via the /api/projects/ endpoint.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveHogFunctionIcon



Retrieve the icon for a specified hog function view access.

**Parameters**

-   **project\_id** (`string`, required) The ID of the project to access. Obtain it by calling /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveEnvironmentHogFunctionIcons



Logs and retrieves hog function icons for a given environment.

**Parameters**

-   **project\_id** (`string`, required) The ID of the project to access. Use /api/projects/ to find the correct ID.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateHogFunctionsOrder



Update the execution order of HogFunctions.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_id** (`string`, optional) The unique identifier for the project whose HogFunctions you want to rearrange. Use /api/projects/ to find it. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetEnvironmentInsights



Retrieve insights for a specific environment.

**Parameters**

-   **project\_id** (`string`, required) The ID of the project to access. Use /api/projects/ to find the correct ID.
-   **created\_by\_user\_id** (`integer`, optional) The user ID of who created the insight. Expected as an integer.
-   **initial\_result\_index** (`integer`, optional) The initial index from which to start returning results.
-   **refresh\_method** (`string`, optional) Strategy for refreshing insights, with options for cache use and sync/async execution. Choices include: ‘force\_cache’, ‘blocking’, ‘async’, ‘lazy\_async’, ‘force\_blocking’, and ‘force\_async’.
-   **response\_format** (`string`, optional) Specify the format of the retrieved insights (csv or json).
-   **results\_per\_page** (`integer`, optional) Number of results to return per page for pagination.
-   **return\_basic\_insight\_metadata\_only** (`boolean`, optional) Set to true to return only basic metadata without results for faster response.
-   **short\_identifier** (`string`, optional) The short identifier for the environment to retrieve insights for. This is unique per environment.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateEnvironmentInsight



Create a new insight for an environment.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_id** (`string`, optional) Project ID to access the specific project. Retrieve using /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **output\_format** (`string`, optional) Specify the format of the output data. Accepted values are ‘csv’ or ‘json’. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ListEnvironmentInsights



Retrieve sharing details of environment insights.

**Parameters**

-   **insight\_id** (`integer`, required) The identifier for the specific insight. Provide as an integer to specify which insight’s sharing details to retrieve.
-   **project\_identifier** (`string`, required) Unique identifier for the project to access. Retrieve via /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateSharingPassword



Create a new password for sharing configuration.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **insight\_identifier** (`integer`, optional) The unique integer ID of the insight for which you want to create a sharing password. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) The ID of the project you want to access. Obtain this by calling /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.DeleteInsightSharingPassword



Delete a password from an insight’s sharing configuration.

**Parameters**

-   **insight\_identifier** (`integer`, required) The unique integer ID of the insight whose sharing password you want to delete.
-   **password\_identifier** (`string`, required) The unique identifier of the password to be deleted from the sharing configuration.
-   **project\_id** (`string`, required) The unique identifier for the project you wish to access. Obtain this ID by calling /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RefreshInsightsSharing



Refresh sharing status of insights in a project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **insight\_id** (`integer`, optional) The ID of the insight you want to refresh sharing for. This should be an integer. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) The ID of the project you want to access. Use /api/projects/ to find the project ID. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.FetchEnvironmentInsights



Retrieve insights for a specific environment.

**Parameters**

-   **insight\_identifier** (`integer`, required) A unique integer identifying the specific insight to retrieve.
-   **project\_identifier** (`string`, required) The ID of the project to access. Retrieve it by calling /api/projects/.
-   **dashboard\_id\_context** (`integer`, optional) The ID of the dashboard to apply its filters and date range if loading insight in the context of a dashboard.
-   **insight\_refresh\_strategy** (`string`, optional) Determines how to refresh the insight: choose from ‘force\_cache’, ‘blocking’, ‘async’, ‘lazy\_async’, ‘force\_blocking’, or ‘force\_async’. Dictates calculation synchronization and use of cache.
-   **output\_format** (`string`, optional) Specify the format for the output data. Options are ‘csv’ or ‘json’.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateEnvironmentInsights



Update insights for a specified environment.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **insight\_identifier** (`integer`, optional) A unique integer identifying the specific insight to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) The unique string ID of the project to access. Obtainable via /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **output\_format** (`string`, optional) Specify the format for the response data. Options are ‘csv’ or ‘json’. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateEnvironmentInsightsLog



Log a view of environment insights to track changes.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **insight\_identifier** (`integer`, optional) A unique integer identifying the environment insight to log. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) The Project ID needed to access the desired environment insights. Retrieve it by calling /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **output\_format** (`string`, optional) Specify the format of the data to be returned. Options are ‘csv’ or ‘json’. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.DeleteEnvironmentInsight



Marks an environment insight as deleted.

**Parameters**

-   **insight\_id** (`integer`, required) A unique integer value identifying the environment insight to be marked as deleted.
-   **project\_identification** (`string`, required) The ID of the project to access. Obtain by calling /api/projects/.
-   **response\_format** (`string`, optional) Specify the response format for the deletion confirmation, either ‘csv’ or ‘json’.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveEnvironmentInsightActivity



Retrieve logs of views on environment insights.

**Parameters**

-   **insight\_id** (`integer`, required) A unique integer identifying the specific insight to retrieve logs for.
-   **project\_id** (`string`, required) The unique ID of the project to access. Call /api/projects/ to retrieve it.
-   **response\_format** (`string`, optional) Specify the format of the response. Allowed values are ‘csv’ or ‘json’.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.TrackEnvironmentInsights



Retrieve and log environment activity insights.

**Parameters**

-   **environment\_project\_id** (`string`, required) Project ID for accessing environment insights. Obtainable via the /api/projects/ endpoint.
-   **output\_format** (`string`, optional) Specify the output format of the retrieved data. Accepts ‘csv’ or ‘json’.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CancelInsightCreation



Cancel the creation of an environment insight.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_identifier** (`string`, optional) The ID of the project to access. Use /api/projects/ to find the ID. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **response\_format** (`string`, optional) Specify the response format as either ‘csv’ or ‘json’. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveLastViewedInsights



Fetches the last 5 insights viewed, sorted by recency.

**Parameters**

-   **project\_id** (`string`, required) The ID of the project to access insights for. Use /api/projects/ to find the ID.
-   **response\_format** (`string`, optional) Specifies the format of the returned data. Accepts ‘csv’ or ‘json’. Defaults to ‘json’.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateInsightViewTimestamps



Updates the view timestamps for specific insights.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_identifier** (`string`, optional) Project ID to access. Retrieve this ID using the /api/projects/ endpoint if needed. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **response\_format** (`string`, optional) Specifies the format of the returned data. Options are ‘csv’ or ‘json’. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ListEnvironmentIntegrations



Retrieve a list of integrations for a specified environment.

**Parameters**

-   **project\_identifier** (`string`, required) Project ID for accessing the desired project’s environment. Obtain this ID by calling /api/projects/.
-   **results\_per\_page** (`integer`, optional) Number of results to return per page for the environment integrations list.
-   **starting\_index** (`integer`, optional) The initial index from which to return results, used for pagination.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateEnvironmentIntegration



Create a new integration for a specified environment.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_identifier** (`string`, optional) Project ID needed to access the specific project. Retrieve it via /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveIntegrationDetails



Retrieve integration details for a specific environment.

**Parameters**

-   **integration\_id** (`integer`, required) A unique integer value identifying the specific integration to retrieve.
-   **project\_identifier** (`string`, required) Project ID to access the specific environment. Retrieve it via the /api/projects/ endpoint.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.DeleteEnvironmentIntegration



Delete an integration from a project environment.

**Parameters**

-   **integration\_id** (`integer`, required) A unique integer representing the integration to be deleted.
-   **project\_identifier** (`string`, required) The unique identifier for the project. Use an API call to /api/projects/ to retrieve this if unknown.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveIntegrationChannels



Retrieve integration channels for a specific project.

**Parameters**

-   **integration\_id** (`integer`, required) A unique integer identifying the specific integration within Datadog.
-   **project\_id** (`string`, required) The unique ID of the project you want to access. Obtain it by calling /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveClickupLists



Retrieve ClickUp lists for specific project integrations.

**Parameters**

-   **integration\_id** (`integer`, required) Unique integer identifying the specific integration.
-   **project\_id** (`string`, required) The unique ID of the project you want to access. Retrieve it via the /api/projects/ endpoint.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetClickupSpaces



Retrieve ClickUp spaces for a specific integration.

**Parameters**

-   **integration\_identifier** (`integer`, required) An integer value uniquely identifying the integration to retrieve ClickUp spaces for.
-   **project\_identifier** (`string`, required) The unique ID of the project to access specific ClickUp spaces. Obtain this ID via the /api/projects/ endpoint.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetClickupWorkspaces



Retrieve ClickUp workspaces for a specific integration.

**Parameters**

-   **clickup\_project\_id** (`string`, required) The Project ID for accessing the desired ClickUp workspace. Obtain the ID by calling /api/projects/.
-   **integration\_id** (`integer`, required) A unique integer value identifying the integration to retrieve workspaces for.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.VerifyEmailIntegration



Verify email address for an integration’s environment.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **integration\_id** (`integer`, optional) A unique integer value identifying this integration within the environment. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) Project ID for which you want to verify the email integration. Retrieve it by calling /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetGithubReposForIntegration



Retrieve GitHub repositories linked to a Datadog integration.

**Parameters**

-   **integration\_id** (`integer`, required) A unique integer identifying the specific integration within Datadog.
-   **project\_id** (`string`, required) The unique ID of the project to access. Obtain the project ID using the /api/projects/ endpoint.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveGoogleAccessibleAccounts



Retrieve Google accessible accounts for a given integration.

**Parameters**

-   **integration\_id** (`integer`, required) A unique integer identifying the integration.
-   **project\_id** (`string`, required) Project ID to access specific Google accounts. Obtain by calling /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetGoogleConversionActions



Retrieve Google conversion actions for a specific environment.

**Parameters**

-   **integration\_identifier** (`integer`, required) A unique integer identifying the integration.
-   **project\_id** (`string`, required) The ID of the project you want to access. Obtain this from /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveIntegrationTeams



Retrieve linear teams for an integration in a project.

**Parameters**

-   **integration\_id** (`integer`, required) A unique integer identifying the integration to retrieve team details.
-   **project\_id** (`string`, required) The ID of the project you want to access. Find this ID by calling /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetLinkedinAdsAccounts



Retrieve LinkedIn Ads accounts linked to a project.

**Parameters**

-   **integration\_id** (`integer`, required) A unique integer to identify the LinkedIn Ads integration within Datadog.
-   **project\_id** (`string`, required) The ID of the project to access LinkedIn Ads accounts. Retrieve this ID via the /api/projects/ endpoint.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveLinkedinAdsConversionRules



Retrieve LinkedIn Ads conversion rules for a project.

**Parameters**

-   **integration\_id** (`integer`, required) A unique integer identifying the LinkedIn Ads integration to retrieve conversion rules for.
-   **project\_id** (`string`, required) The ID of the project for which you want to retrieve LinkedIn Ads conversion rules. Obtain this ID by calling /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetTwilioPhoneNumbers



Retrieve Twilio phone numbers for a specific integration.

**Parameters**

-   **integration\_identifier** (`integer`, required) A unique integer value identifying the Twilio integration for which phone numbers should be retrieved.
-   **project\_id** (`string`, required) The ID of the project you want to access. Use /api/projects/ to retrieve the ID if needed.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveIntegrationAuthorization



Retrieve integration authorization status for a project.

**Parameters**

-   **project\_id** (`string`, required) The unique identifier for the project you want to access. Obtain the ID by calling /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveEnvironmentLogAttributes



Retrieve log attributes for a specific environment.

**Parameters**

-   **project\_id** (`string`, required) The unique identifier for the project whose environment log attributes you want to retrieve. Obtainable via a call to /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateLogsQueryForEnvironment



Create a logs query for a specific environment.

**Parameters**

-   **project\_identifier** (`string`, required) The unique ID of the project being accessed. Use /api/projects/ to find it.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateEnvironmentLogSparkline



Create a sparkline for environment logs in Datadog.

**Parameters**

-   **project\_id\_for\_log\_sparkline** (`string`, required) The Project ID for accessing the environment logs in Datadog. Retrieve this ID by calling /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveEnvironmentLogsValues



Fetch log values for a given environment and project.

**Parameters**

-   **project\_id** (`string`, required) The unique ID of the project to access. Obtainable via a call to /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateMaxToolsInsight



Create an insight for maximum tools in a project.

**Parameters**

-   **project\_id** (`string`, required) The ID of the project you want to access to create the insight. Obtainable via /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetPersistedFolders



Retrieve a list of persisted folders for a given environment.

**Parameters**

-   **project\_id** (`string`, required) The ID of the project you want to access. Obtain this by calling /api/projects/.
-   **results\_per\_page** (`integer`, optional) Number of results to return per page when retrieving folders.
-   **starting\_index** (`integer`, optional) The initial index from which to return the results, used for pagination.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreatePersistedFolder



Create a persisted folder in a Datadog environment.

**Parameters**

-   **folder\_creation\_timestamp** (`string`, required) Timestamp indicating when the folder was created. It should be in ISO 8601 format.
-   **folder\_id** (`string`, required) A unique identifier for the persisted folder to be created in the environment.
-   **folder\_type** (`string`, required) Specifies the type of the folder to create. Acceptable values are ‘home’ for Home directory and ‘pinned’ for Pinned directory.
-   **folder\_updated\_at** (`string`, required) Timestamp indicating when the folder was last updated.
-   **project\_identifier** (`string`, required) The ID of the Datadog project for accessing a specific environment. Obtain this by calling /api/projects/.
-   **folder\_protocol** (`string`, optional) Specify the protocol for the persisted folder, typically as a string indicator.
-   **persisted\_folder\_path** (`string`, optional) Specify the path for the persisted folder in the Datadog environment. This should be a valid directory path within the project.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrievePersistedEnvironmentFolder



Retrieve details of a persisted environment folder by ID.

**Parameters**

-   **persisted\_folder\_id** (`string`, required) A UUID string identifying the persisted folder to retrieve.
-   **project\_identifier** (`string`, required) The unique identifier for the project related to the persisted folder. Obtainable via a call to /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateEnvironmentFolder



Update a specific folder in an environment project.

**Parameters**

-   **folder\_creation\_date** (`string`, required) The date and time when the folder was created, in ISO 8601 format (e.g., ‘2023-10-12T14:23:30Z’).
-   **folder\_id** (`string`, required) The identifier for the folder to be updated in the environment.
-   **folder\_type** (`string`, required) Specify the type of the folder: ‘home’ for Home, ‘pinned’ for Pinned.
-   **folder\_update\_timestamp** (`string`, required) Timestamp indicating when the folder was last updated. Expected in ISO 8601 format.
-   **folder\_uuid** (`string`, required) A UUID string identifying the Persisted Folder to update.
-   **project\_identifier** (`string`, required) String ID of the project to access. Retrieve by calling /api/projects/.
-   **folder\_path** (`string`, optional) The path of the folder within the environment project to update.
-   **folder\_protocol\_type** (`string`, optional) Specifies the protocol type for accessing the folder. Must be a string.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ModifyEnvFolder



Partially update a specific environment folder.

**Parameters**

-   **project\_id** (`string`, required) Provide the Project ID to access the specific environment. Retrieve it via /api/projects/.
-   **environment\_folder\_creation\_date** (`string`, optional) The creation date of the environment folder. Expected in YYYY-MM-DD format.
-   **environment\_folder\_id** (`string`, optional) The unique identifier for the environment folder to update. Provide a valid string ID.
-   **environment\_folder\_last\_updated** (`string`, optional) The timestamp when the environment folder was last updated. Use ISO 8601 format.
-   **environment\_folder\_protocol** (`string`, optional) Specify the protocol type for the environment folder, such as ‘home’ or ‘pinned’.
-   **folder\_path** (`string`, optional) Specify the updated path for the environment folder.
-   **folder\_type** (`string`, optional) Specify the type of the folder: `home` for Home or `pinned` for Pinned.
-   **persisted\_folder\_id** (`string`, optional) A UUID string that uniquely identifies the persisted folder to be updated.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.DeletePersistedFolder



Delete a persisted folder from a project environment.

**Parameters**

-   **persisted\_folder\_uuid** (`string`, required) A UUID identifying the persisted folder to be deleted.
-   **project\_id** (`string`, required) The unique ID of the project where the folder resides. Retrieve this ID by calling /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrievePersonDetails



Retrieve details of a specific person in a project.

**Parameters**

-   **person\_id** (`integer`, required) Unique integer identifying the person to retrieve details for.
-   **project\_identifier** (`string`, required) The ID of the project to retrieve the person’s details. Obtainable via a call to /api/projects/.
-   **response\_format** (`string`, optional) Specify the format for the response data. Options are ‘csv’ or ‘json’.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdatePersonProperties



Update specific properties of a person in a project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **person\_id** (`integer`, optional) A unique integer identifier for the person whose properties are to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) The ID of the project to access. Retrieve using /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **response\_format** (`string`, optional) Specify the format for the endpoint response. Choose between ‘csv’ or ‘json’. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ModifyPersonsInEnvironment



Modify or remove persons in a given environment.

**Parameters**

-   **project\_id\_of\_target\_environment** (`string`, required) The Project ID for the environment you want to access. Find it with a call to /api/projects/.
-   **distinct\_ids\_list** (`array[string]`, optional) List of unique identifiers for individuals to be updated or deleted. Each identifier should be a string.
-   **person\_created\_at** (`string`, optional) The timestamp of when the person was created, formatted as a string. This helps identify the creation date of the person within the system.
-   **person\_id** (`integer`, optional) The unique identifier for the person you want to update or delete. This is an integer value.
-   **person\_identifier** (`integer`, optional) A unique integer used to identify the person for modification or deletion.
-   **person\_identifier\_uuid** (`string`, optional) The unique identifier for the person whose data is to be updated or deleted. This UUID is required for the operation.
-   **person\_name** (`string`, optional) The name of the person to modify. This is required for updating the person’s information.
-   **person\_properties** (`string`, optional) JSON string of properties and values to update for a person. This may include attributes like name, email, etc.
-   **response\_format** (`string`, optional) Specifies the format of the response data. Acceptable values are ‘csv’ or ‘json’.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.DeletePersonRecord



Deletes an individual person record from a project.

**Parameters**

-   **person\_id** (`integer`, required) A unique integer value identifying the person to be deleted.
-   **project\_id** (`string`, required) The ID of the project to access. Obtain it by calling /api/projects/.
-   **delete\_events\_task** (`boolean`, optional) If true, a task to delete all events associated with this person is created and queued, running every Sunday at 5 AM UTC.
-   **response\_format** (`string`, optional) Specifies the format of the response, either ‘csv’ or ‘json’.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrievePersonActivity



Retrieve a person’s activity from the environment.

**Parameters**

-   **person\_id** (`integer`, required) A unique integer identifying the person whose activity you want to retrieve.
-   **project\_id** (`string`, required) Project ID to access. Obtain by calling /api/projects/.
-   **output\_format** (`string`, optional) Specify the output format for the data, either ‘csv’ or ‘json’.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.QueuePersonEventsDeletion



Queue the deletion of all events for a specific person.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **person\_identifier** (`integer`, optional) A unique integer identifying the person whose events are to be deleted. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) Project ID needed to access the specific project. Obtainable via /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **events\_export\_format** (`string`, optional) The format in which to export events before deletion. Acceptable values are ‘csv’ or ‘json’. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.DeletePersonProperty



Deletes a specific property from a person.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **property\_key\_to\_delete** (`string`, optional) Specify the property key of the person to delete. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **person\_identifier** (`integer`, optional) A unique integer identifier for the person whose property is to be deleted. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) The ID of the project to access. Use /api/projects/ to retrieve this ID. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **response\_format** (`string`, optional) Specify the format of the response. Options are ‘csv’ or ‘json’. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.DeletePersonRecordings



Queue deletion of all recordings associated with a person.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **person\_id** (`integer`, optional) A unique integer identifier for the person whose recordings should be deleted. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) The ID of the project for which you want to queue recording deletions. Obtainable via /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **response\_format** (`string`, optional) Specify the format for the response, either ‘csv’ or ‘json’. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrievePersonPropertyTimeline



Retrieve timeline of property changes for a person.

**Parameters**

-   **person\_identifier** (`integer`, required) Unique integer value for identifying the person.
-   **project\_id** (`string`, required) The ID of the project to access. Obtainable via a call to /api/projects/.
-   **output\_format** (`string`, optional) Specify the format of the data to be retrieved. Options are ‘csv’ or ‘json’.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ReadOrDeletePerson



Read or delete a person’s record in the environment.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **person\_id** (`integer`, optional) Unique integer identifier for the person to read or delete. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) Unique identifier for the project to access. Retrieve via /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **output\_format** (`string`, optional) Specify the format of the response. Choose between ‘csv’ or ‘json’. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdatePersonProperty



Update a specific property for a person in an environment.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **property\_key** (`string`, optional) The key of the property you want to update for a person. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **property\_value** (`string`, optional) Specify the value for the property to update for a person. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **person\_identifier** (`integer`, optional) Unique identifier for the person. Use an integer value to specify the person whose property you wish to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) Specify the ID of the project you wish to access. Retrieve the project ID via /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **output\_format** (`string`, optional) The format in which the response is returned. Choose either ‘csv’ or ‘json’. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetPersonsActivity



Retrieve activity data for persons in a project environment.

**Parameters**

-   **project\_identifier** (`string`, required) The unique ID of the project to access. Use /api/projects/ to find the ID.
-   **response\_format** (`string`, optional) Specifies the format of the response data. Choose either ‘csv’ or ‘json’.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.BulkDeletePersonsInEnvironment



Bulk delete persons by IDs in a Datadog environment.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **target\_project\_id** (`string`, optional) The ID of the project you wish to access for this operation. Retrieve it using the /api/projects/ endpoint. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **distinct\_ids\_to\_delete** (`json`, optional) Provide a list of up to 1000 distinct IDs to delete all associated persons. Only used when mode is ‘execute’.
-   **response\_format** (`string`, optional) Specify the format of the API response, either ‘csv’ or ‘json’. Only used when mode is ‘execute’.
-   **posthog\_person\_ids** (`json`, optional) A list of up to 1000 PostHog person IDs to delete from the environment. Only used when mode is ‘execute’.
-   **delete\_events** (`boolean`, optional) If true, a task to delete all events related to this person will be created and queued, executing at 5AM UTC every Sunday. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrievePersonsCohorts



Retrieve persons cohort data from specified environments.

**Parameters**

-   **project\_id** (`string`, required) Project ID for accessing the specified cohort data. Obtain this by calling /api/projects/.
-   **response\_format** (`string`, optional) Specifies the format of the response. Supported values are ‘csv’ and ‘json’.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.FetchPersonsFunnelData



Fetch persons data from the funnel in a specified environment.

**Parameters**

-   **project\_id** (`string`, required) The ID of the project to access. Use /api/projects/ to find this ID.
-   **output\_format** (`string`, optional) Specify the format of the data output: ‘csv’ or ‘json’.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreatePersonsFunnel



Create a funnel for tracking persons.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **target\_project\_id** (`string`, optional) The ID of the project you want to access. Obtain it via /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **output\_format** (`string`, optional) Specify the output format for the funnel creation. Options are ‘csv’ or ‘json’. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrievePersonsFunnelCorrelation



Retrieve persons related to funnel correlation in an environment.

**Parameters**

-   **project\_id** (`string`, required) The ID of the project to access. Retrieve using /api/projects/.
-   **response\_format** (`string`, optional) Specifies the format of the response. Acceptable values are ‘csv’ or ‘json’.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreatePersonsFunnelCorrelation



Create a funnel correlation for persons in a project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_id** (`string`, optional) The unique identifier for the project to access. Obtain this by calling /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **output\_format** (`string`, optional) Specifies the output format of the response. Accepts ‘csv’ or ‘json’. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrievePersonsLifecycle



Retrieve lifecycle details of persons in a project.

**Parameters**

-   **project\_id** (`string`, required) The unique identifier of the project to access. Use /api/projects/ to find this ID.
-   **response\_format** (`string`, optional) Specify the format of the response data. Choose either ‘csv’ or ‘json’.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ResetDistinctId



Reset a distinct\_id for a deleted person.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_id** (`string`, optional) The ID of the project to access. Retrieve this via the /api/projects/ endpoint. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **response\_format** (`string`, optional) Specify the format of the response. Options are ‘csv’ or ‘json’. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrievePersonStickiness



Retrieve stickiness data for persons in a project environment.

**Parameters**

-   **project\_identifier** (`string`, required) The unique Project ID needed to access stickiness data. Obtainable via a call to /api/projects/.
-   **response\_format** (`string`, optional) Specifies the format of the response data. Available options are ‘csv’ or ‘json’.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrievePersonsTrends



Retrieve trends data for persons in a specified environment.

**Parameters**

-   **project\_id** (`string`, required) The ID of the project to access for retrieving person trends. Obtain this by calling /api/projects/.
-   **response\_format** (`string`, optional) Specify the format of the response: ‘csv’ or ‘json’.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrievePersonsData



Retrieve information about persons in a specified environment.

**Parameters**

-   **project\_identifier** (`string`, required) The unique Project ID required to access the specific environment. Obtainable via /api/projects/.
-   **response\_format** (`string`, optional) Specifies the format in which the response should be returned. Options are ‘csv’ or ‘json’.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ListEnvironmentPluginLogs



Retrieve logs for a plugin configuration in a specific environment.

**Parameters**

-   **plugin\_configuration\_id** (`string`, required) The identifier for the plugin configuration to retrieve logs for. Required to specify which plugin configuration’s logs to access.
-   **project\_id** (`string`, required) The ID of the project to access logs for. Obtain this ID by calling /api/projects/.
-   **results\_offset\_index** (`integer`, optional) The starting index for the results to return from the API. Used for pagination.
-   **results\_per\_page** (`integer`, optional) Specify the number of results to return per page for pagination.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetEnvironmentQueryResults



Retrieve results of an environment query for a project.

**Parameters**

-   **project\_id** (`string`, required) The ID of the project you want to access. Retrieve it via a call to /api/projects/.
-   **query\_id** (`string`, required) The ID of the specific query to retrieve results for within the project’s environment.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.DeleteEnvironmentQuery



Delete a specific query environment.

**Parameters**

-   **project\_id\_access** (`string`, required) Specify the Project ID of the project you want to access. Obtain the ID by calling /api/projects/.
-   **query\_id** (`string`, required) The unique ID of the environment query to be deleted. This is necessary to specify which query environment should be removed.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveQueryLogDetails



Retrieve query log details for a given query ID.

**Parameters**

-   **project\_id** (`string`, required) The unique identifier for the project. Call /api/projects/ to find it.
-   **query\_id** (`string`, required) The unique identifier for the query issued in the last 24 hours to retrieve its log details.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CheckPosthogEnvAuthenticationAsync



Check authentication for Datadog environment asynchronously.

**Parameters**

-   **posthog\_project\_id** (`string`, required) Project ID to access a specific Datadog environment. Obtainable via a call to /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveEnvironmentDraftSql



Retrieve draft SQL for a specific environment.

**Parameters**

-   **project\_identifier** (`string`, required) The ID of the project to access. Obtain by calling /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ListSyntheticPlaylists



Retrieve synthetic session recording playlists.

**Parameters**

-   **project\_identifier** (`string`, required) A string representing the Project ID to access specific project environments for synthetic session recording playlists. Obtain the ID by calling /api/projects/.
-   **created\_by\_user\_id** (`integer`, optional) The user ID of the creator of the playlists to filter results by. If not specified, playlists by any creator will be included.
-   **playlist\_short\_id** (`string`, optional) A unique identifier for the playlist. Used to specify which playlist to retrieve or target.
-   **results\_per\_page** (`integer`, optional) Specifies the number of results to return per page.
-   **starting\_index\_for\_results** (`integer`, optional) The starting index from which the results will be returned. Used for pagination in retrieving playlists.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateSessionRecordingPlaylist



Create a new session recording playlist for an environment.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_id** (`string`, optional) Provide the Project ID to access the specific project. You can retrieve the ID by calling /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveSessionRecordingPlaylists



Retrieve a session recording playlist for a specific project.

**Parameters**

-   **playlist\_short\_id** (`string`, required) The short identifier of the session recording playlist to retrieve. Required for accessing specific playlist details.
-   **project\_id** (`string`, required) The unique identifier of the project to access. Obtain this ID from the /api/projects/ endpoint.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateSessionRecordingPlaylist



Update a session recording playlist within an environment.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_id** (`string`, optional) Project ID required to access the specific project. Obtainable via the /api/projects/ endpoint. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **playlist\_short\_id** (`string`, optional) The short ID of the session recording playlist to update. It identifies the specific playlist within a project environment. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ModifyRecordingPlaylist



Update session recording playlists for a given project and ID.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_id** (`string`, optional) The unique ID of the project to access. Retrieve the ID via /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **session\_recording\_short\_id** (`string`, optional) The unique short identifier for the session recording playlist you want to update. Typically a concise string for quick reference. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.DeleteSessionRecordingPlaylist



Mark a session recording playlist as deleted.

**Parameters**

-   **project\_id** (`string`, required) The ID of the project to access. Retrieve by calling /api/projects/.
-   **session\_recording\_playlist\_short\_id** (`string`, required) The short ID of the session recording playlist to mark as deleted.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveSessionRecordings



Retrieve session recordings for a specified playlist.

**Parameters**

-   **playlist\_short\_id** (`string`, required) The unique short ID of the session recording playlist to retrieve recordings from.
-   **project\_id** (`string`, required) The unique ID of the project. Obtain this by calling the /api/projects/ endpoint.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateSessionRecordingPlaylistEntry



Add a recording to a session playlist.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_id** (`string`, optional) The unique identifier for the project to access. Obtain by calling /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **session\_recording\_id** (`string`, optional) The ID of the session recording to be added to the playlist. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **session\_recording\_short\_id** (`string`, optional) The short ID of the session recording to add to the playlist. It must be a valid string identifier. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.DeleteSessionRecording



Deletes a session recording from a playlist.

**Parameters**

-   **project\_id** (`string`, required) The ID of the project to access. Use /api/projects/ to find it.
-   **session\_recording\_identifier** (`string`, required) The unique identifier of the session recording to be deleted. This ID is required to specify which recording to remove from the playlist.
-   **session\_recording\_short\_id** (`string`, required) The short ID of the session recording to be deleted.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ListSessionRecordings



Retrieve session recordings for a specific environment.

**Parameters**

-   **project\_id** (`string`, required) The unique identifier for the project to access session recordings. Use the `/api/projects/` endpoint to find this ID if unknown.
-   **results\_per\_page** (`integer`, optional) Number of session recordings to return per page.
-   **starting\_index\_for\_results** (`integer`, optional) The initial index from which to return the session recordings results.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveSessionRecording



Retrieve a specific session recording by ID.

**Parameters**

-   **project\_id** (`string`, required) The ID of the Datadog project to access. Obtain it by calling /api/projects/.
-   **session\_recording\_id** (`string`, required) A UUID string identifying the specific session recording to retrieve.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ModifySessionRecording



Update session recording details for a specific environment.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **session\_recording\_id** (`string`, optional) A UUID string identifying the session recording to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) Project ID to access. Obtain it via the /api/projects/ call. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateSessionRecording



Partially update session recording details.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **session\_recording\_uuid** (`string`, optional) A UUID string identifying the session recording to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) The ID of the project to access. Obtain it by calling /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RemoveSessionRecording



Delete a session recording from an environment.

**Parameters**

-   **project\_identifier** (`string`, required) The unique identifier for the project you want to access. Retrieve from /api/projects/.
-   **session\_recording\_id** (`string`, required) A UUID string identifying the session recording to delete.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ListSessionRecordingSharing



Retrieve sharing details for a specific session recording.

**Parameters**

-   **project\_id** (`string`, required) The ID of the project to access. Use /api/projects/ to find the project ID.
-   **session\_recording\_id** (`string`, required) The unique ID of the session recording you want to retrieve sharing details for.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GenerateRecordingPassword



Create a password for session recording sharing.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_identifier** (`string`, optional) Project ID for accessing a specific project. Retrieve via /api/projects/ to find the correct ID. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **recording\_id** (`string`, optional) The unique identifier of the session recording for which you want to create a sharing password. This ID is necessary to specify the exact recording within the project. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.DeleteSharingPassword



Delete a password from the sharing configuration.

**Parameters**

-   **password\_identifier** (`string`, required) The unique identifier of the password to be deleted from the sharing configuration.
-   **recording\_id** (`string`, required) The ID of the recording from which the password is to be deleted. This identifies the specific session recording.
-   **target\_project\_id** (`string`, required) The ID of the project from which to delete the password. Obtain this ID via a call to /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RefreshSessionRecordingSharing



Refreshes the sharing status of a session recording.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_id** (`string`, optional) The unique identifier for the project. Retrieve it using the /api/projects/ endpoint. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **session\_recording\_id** (`string`, optional) The unique identifier of the session recording to refresh sharing status. Required to specify which recording’s sharing status to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GenerateSessionSummaries



Generate AI summaries for session recordings.

**Parameters**

-   **project\_id** (`string`, required) The ID of the project you want to access. Retrieve it by calling the /api/projects/ endpoint.
-   **session\_id\_list** (`array[string]`, required) List of session IDs to be summarized, with a maximum of 300 IDs.
-   **summarization\_focus\_area** (`string`, optional) Optional focus area for the summarization to guide the AI in highlighting specific patterns or information.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GenerateIndividualSessionSummary



Generate individual AI summaries for each session.

**Parameters**

-   **project\_id** (`string`, required) The ID of the project to access. Obtain it by calling /api/projects/.
-   **session\_ids\_to\_summarize** (`array[string]`, required) List of session IDs for summarization, up to a maximum of 300.
-   **summarization\_focus\_area** (`string`, optional) Optional focus area for refining the session summarization. Enhances the summary by concentrating on specified topics or elements.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveEnvironmentSessionProperties



Retrieve session property definitions for an environment.

**Parameters**

-   **project\_identifier** (`string`, required) The ID of the project to access. Obtain from calling /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetEnvironmentSessionValues



Retrieve session values for a specific environment.

**Parameters**

-   **project\_id** (`string`, required) The ID of the project for which to retrieve session values. Obtainable via a call to /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ListEnvironmentSubscriptions



Retrieve subscriptions for environment projects.

**Parameters**

-   **project\_id** (`string`, required) The unique identifier for the project to access its environment subscriptions. Obtain this ID from the /api/projects/ endpoint.
-   **result\_start\_index** (`integer`, optional) Initial index to start retrieving results from for pagination purposes.
-   **results\_per\_page** (`integer`, optional) Number of results to return per page.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateEnvironmentSubscription



Create a new subscription for an environment.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_id** (`string`, optional) Project ID to access the specific project. Use /api/projects/ to find this ID. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveSubscriptionDetails



Retrieve details of a project’s subscription environment.

**Parameters**

-   **project\_identifier** (`string`, required) The unique identifier for the project you want to access. Obtain by calling /api/projects/.
-   **subscription\_id** (`integer`, required) A unique integer value identifying the subscription to retrieve details for.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateEnvironmentSubscription



Update environment subscription for a project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **subscription\_identifier** (`integer`, optional) A unique integer value identifying the subscription to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) The ID of the project you’re accessing. Retrieve it by calling /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ModifyEnvironmentSubscription



Update a subscription for a specific environment.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **subscription\_id** (`integer`, optional) Unique integer identifying the subscription to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) The ID of the project to access. Retrieve it via /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.DeleteEnvironmentSubscription



Marks an environment subscription as deleted in Datadog.

**Parameters**

-   **project\_id** (`string`, required) The ID of the project for accessing its environment subscription. Obtain via a call to /api/projects/.
-   **subscription\_id** (`integer`, required) A unique integer value identifying the subscription to be marked as deleted.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ListUserInterviews



Retrieve user interviews for a project environment.

**Parameters**

-   **project\_id** (`string`, required) The ID of the project for accessing user interviews. Retrieve this by calling /api/projects/.
-   **result\_start\_index** (`integer`, optional) The starting index for returning user interviews results.
-   **results\_per\_page** (`integer`, optional) Specify the number of results to return per page.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateUserInterviewEnvironment



Create a user interview environment in a project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **access\_project\_id** (`string`, optional) The ID of the project to access for creating a user interview environment. Use /api/projects/ endpoint to retrieve if unknown. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveUserInterview



Retrieve details of a specific user interview.

**Parameters**

-   **interview\_id** (`string`, required) A UUID string identifying the specific user interview to be retrieved.
-   **project\_identifier** (`string`, required) The ID of the project to access. Use /api/projects/ to find this ID.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateUserInterviewEnvironment



Update environment details for a user interview.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **user\_interview\_id** (`string`, optional) A UUID string that uniquely identifies the user interview to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) The ID of the project for accessing environment details. Obtain by calling /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ModifyInterviewEnvironment



Partially update a user interview environment.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **user\_interview\_id** (`string`, optional) A UUID string that uniquely identifies the user interview to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **target\_project\_id** (`string`, optional) The ID of the project to access. Obtain by calling /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.DeleteUserInterview



Delete a user interview from an environment.

**Parameters**

-   **project\_id** (`string`, required) The ID of the project for accessing the specific user interview. Obtain this by calling /api/projects/.
-   **user\_interview\_id** (`string`, required) A UUID string identifying the user interview to delete.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ListWarehouseSavedQueries



Retrieve a list of saved warehouse queries for a project.

**Parameters**

-   **project\_id** (`string`, required) The unique identifier for the project you want to access. Obtain this ID by calling /api/projects/.
-   **page\_number** (`integer`, optional) The page number within the paginated result set to retrieve. Use for navigating through results.
-   **search\_term** (`string`, optional) The term used to filter and search through the saved queries.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateWarehouseSavedQuery



Create a new warehouse saved query.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_id** (`string`, optional) The ID of the project to access. Retrieve it via a call to /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetWarehouseSavedQuery



Retrieve details of a warehouse saved query.

**Parameters**

-   **project\_id** (`string`, required) The ID of the project to access. Retrieve this by calling /api/projects/.
-   **saved\_query\_id** (`string`, required) A UUID string identifying the specific data warehouse saved query to retrieve.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateWarehouseQuery



Updates a saved query in the data warehouse.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **saved\_query\_uuid** (`string`, optional) A UUID identifying the specific saved query to update in the data warehouse. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) The unique ID of the project to access. Obtain this by calling /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateWarehouseSavedQuery



Update a warehouse saved query in a specified environment.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **saved\_query\_uuid** (`string`, optional) A UUID string identifying this data warehouse saved query for updates. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) The ID of the project you want to access. Obtain it by calling /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.DeleteSavedQuery



Delete a saved query from the warehouse.

**Parameters**

-   **project\_identifier** (`string`, required) The ID of the project to access. Retrieve it with a call to /api/projects/.
-   **saved\_query\_uuid** (`string`, required) A UUID string identifying the data warehouse saved query to be deleted.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveEnvironmentQueryActivity



Retrieve activity details of a saved warehouse query.

**Parameters**

-   **project\_identifier** (`string`, required) Project ID for accessing the specific project. Retrieve it using /api/projects/.
-   **query\_id** (`string`, required) A UUID string identifying the data warehouse saved query for retrieving activity details.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.FetchSavedQueryAncestors



Retrieve ancestors of a saved query, including parents and beyond.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **saved\_query\_id** (`string`, optional) A UUID string identifying the specific data warehouse saved query to fetch ancestors for. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) ID of the project to access. Retrieve via a call to /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CancelSavedQueryWorkflow



Cancel a running saved query workflow in Datadog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **saved\_query\_id** (`string`, optional) A UUID string identifying the data warehouse saved query to cancel. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) The ID of the project to access for canceling the saved query. Retrieve the project ID by calling /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetDescendantsSavedQuery



Retrieve descendants of a specified saved query.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **saved\_query\_uuid** (`string`, optional) The UUID that uniquely identifies this saved query in the data warehouse. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) The unique ID of the project to access. Get this ID via a call to /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UndoMaterializationPosthog



Revert materialization to the original view in Datadog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **saved\_query\_uuid** (`string`, optional) A UUID string identifying the data warehouse saved query to be reverted. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id\_for\_access** (`string`, optional) Project ID to access the relevant Datadog environment. Retrieve by calling /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RunSavedQuery



Execute a saved query in the Datadog environment.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **saved\_query\_uuid** (`string`, optional) A UUID string identifying the saved query to be executed. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) The ID of the project to access. To find the ID, call /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ListWarehouseTables



Retrieve a list of warehouse tables for a given environment.

**Parameters**

-   **project\_identifier** (`string`, required) The unique identifier of the project to access. Use /api/projects/ to find this ID.
-   **results\_per\_page** (`integer`, optional) Specify the number of results to return per page.
-   **search\_term** (`string`, optional) A term to filter the warehouse tables based on specific criteria.
-   **starting\_index\_for\_results** (`integer`, optional) The index from which to begin returning the list of results for warehouse tables.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateWarehouseTable



Create a new warehouse table for a specified environment.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_identifier** (`string`, optional) The ID of the project to access for creating a warehouse table. Obtain it from /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveWarehouseTable



Retrieve details of a specific warehouse table.

**Parameters**

-   **project\_id** (`string`, required) Project ID for accessing the specific data warehouse. Retrieve it using /api/projects/.
-   **warehouse\_table\_id** (`string`, required) A UUID string identifying this specific data warehouse table for retrieval.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ModifyWarehouseTable



Update a specific warehouse table’s information.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **warehouse\_table\_id** (`string`, optional) A UUID string identifying the data warehouse table to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) The ID of the project you want to access. Retrieve via /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateWarehouseTable



Update specific warehouse tables in a project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **warehouse\_table\_uuid** (`string`, optional) A UUID string that identifies the specific data warehouse table to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) The unique ID of the project you wish to access. Obtainable by calling /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.DeleteWarehouseTable



Delete a specific warehouse table in a project.

**Parameters**

-   **project\_id** (`string`, required) The ID of the project containing the warehouse table to delete. Use /api/projects/ to obtain IDs.
-   **warehouse\_table\_id** (`string`, required) A UUID string that uniquely identifies the data warehouse table to be deleted.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RefreshWarehouseTableSchema



Refresh the schema of a warehouse table.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **warehouse\_table\_uuid** (`string`, optional) A UUID string identifying the specific data warehouse table. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) The ID of the project to access. Obtain it by calling the /api/projects/ endpoint. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateWarehouseTableSchema



Update the schema of a warehouse table.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **warehouse\_table\_id** (`string`, optional) A UUID string identifying the data warehouse table to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) The Project ID for accessing the desired project. Retrieve using /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ManageWarehouseTable



Create a warehouse table in Datadog environments.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_identifier** (`string`, optional) Specify the Project ID for accessing the desired project. Obtain it by calling /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveWebVitals



Retrieve web vitals for a specific project environment.

**Parameters**

-   **filter\_by\_pathname** (`string`, required) Specify the pathname to filter web vitals data for a particular resource.
-   **project\_id** (`string`, required) Project ID for accessing the specific project’s web vitals.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ListOrganizations



Retrieve a list of organizations.

**Parameters**

-   **results\_per\_page** (`integer`, optional) Specify the number of organization results to return per page.
-   **results\_start\_index** (`integer`, optional) The initial index from where to start returning results. Useful for pagination.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateOrganization



Create a new organization in Datadog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetOrganizationDetails



Retrieve details of a specific organization.

**Parameters**

-   **organization\_id** (`string`, required) A UUID string to identify the organization whose details you want to retrieve.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateOrganizationDetails



Update details for a specific organization.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) A UUID string identifying the organization to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateOrganizationInfo



Partially update organization information.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) A UUID string identifying the organization to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.DeleteOrganization



Delete an organization from Datadog.

**Parameters**

-   **organization\_id** (`string`, required) A UUID string to identify the organization to be deleted.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RollbackEnvironmentsMigration



Trigger rollback migration for multi-environment projects.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_uuid** (`string`, optional) A UUID string identifying the organization for the rollback operation. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ListBatchExports



Retrieve a list of batch exports for an organization.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier of the organization for which to list batch exports. This is required to specify which organization’s exports to retrieve.
-   **result\_offset** (`integer`, optional) The starting index for returning results. Useful for pagination.
-   **results\_per\_page** (`integer`, optional) Number of results to return per page for batch exports.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateBatchExports



Create a new batch export for an organization.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) A string representing the unique identifier for the organization. Required to specify which organization the batch export will be created for. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveBatchExportDetails



Retrieve details of a specific batch export in an organization.

**Parameters**

-   **batch\_export\_id** (`string`, required) A UUID string identifying this specific batch export.
-   **organization\_id** (`string`, required) A unique identifier for the organization. Provide this to retrieve batch export details.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateBatchExports



Update batch exports for a specific organization.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **batch\_export\_id** (`string`, optional) A UUID string identifying this batch export that needs to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **organization\_identifier** (`string`, optional) A string representing the unique identifier for the organization whose batch export settings need updating. Ensure the correct ID is provided for successful updates. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ModifyBatchExports



Update batch exports for an organization.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **batch\_export\_id** (`string`, optional) A UUID string that uniquely identifies the batch export to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **organization\_identifier** (`string`, optional) A string representing the unique identifier of the organization for which the batch exports need to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RemoveBatchExport



Delete a batch export from an organization.

**Parameters**

-   **batch\_export\_id** (`string`, required) A UUID string that uniquely identifies the batch export to be deleted.
-   **organization\_id** (`string`, required) A string representing the unique identifier of the organization from which the batch export will be removed.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.InitiateExportBackfill



Triggers a backfill for a BatchExport.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **batch\_export\_id** (`string`, optional) A UUID string identifying the batch export to backfill. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **organization\_identifier** (`string`, optional) A string representing the unique identifier of the organization. Required for initiating the backfill process. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveBatchExportLogs



Retrieve logs from a specific batch export.

**Parameters**

-   **batch\_export\_id** (`string`, required) A UUID string to identify the batch export for log retrieval.
-   **organization\_id** (`string`, required) A string representing the unique identifier of the organization. Required to retrieve specific batch export logs.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.HaltBatchExport



Pause an ongoing BatchExport process.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **batch\_export\_id** (`string`, optional) A UUID string that uniquely identifies the specific batch export to be paused. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **organization\_identifier** (`string`, optional) The UUID string that identifies the organization related to the batch export. Required for pausing the export. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RunBatchExportTestStep



Run a test step for a batch export in Datadog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **batch\_export\_uuid** (`string`, optional) A UUID string that uniquely identifies the batch export to be tested. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **organization\_id** (`string`, optional) A string identifying the organization within Datadog for which the batch export test step is to be run. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ResumeBatchExport



Unpause a paused BatchExport for a given organization.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **batch\_export\_id** (`string`, optional) A UUID string identifying the batch export to unpause. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **organization\_identifier** (`string`, optional) A string representing the organization’s unique identifier within Datadog. Required to specify which organization’s BatchExport to unpause. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RunTestStepNewForBatchExports



Run a new test step for batch exports.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_identifier** (`string`, optional) The unique identifier of the organization where the test step will be initiated. It is required to specify which organization’s batch exports you want to test. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveBatchExportsTest



Retrieve batch exports test details for an organization.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization to retrieve batch export test details.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ListOrganizationDomains



Retrieve a list of domains for a specified organization.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization whose domains are to be retrieved. This is required to specify which organization’s domains you want to list.
-   **initial\_index\_for\_results** (`integer`, optional) The starting index from which the domain results are returned, useful for pagination.
-   **results\_per\_page** (`integer`, optional) Specify the number of results to return per page. Use this to control pagination of domain listings.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateDomainInOrganization



Add a new domain to an organization.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique identifier for the organization to which the domain will be added. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveDomainDetails



Fetch details of a specific domain in an organization.

**Parameters**

-   **domain\_id** (`string`, required) A UUID string identifying the specific domain.
-   **organization\_id** (`string`, required) A string representing the unique identifier for the organization to which the domain belongs. Required to retrieve domain details.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateOrganizationDomain



Update an organization’s domain using Datadog’s API.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **domain\_uuid** (`string`, optional) The UUID string identifying the domain to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **organization\_id** (`string`, optional) The unique identifier for the organization whose domain needs to be updated. This should be a string. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateDomainPartial



Partially update domain information for an organization.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **domain\_id** (`string`, optional) A UUID string that uniquely identifies the domain to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **organization\_identifier** (`string`, optional) The unique identifier for the organization whose domain is being partially updated. Expected to be a string. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.DeleteDomain



Remove a domain from an organization.

**Parameters**

-   **domain\_uuid** (`string`, required) A UUID string that uniquely identifies the domain to be deleted.
-   **organization\_identifier** (`string`, required) A string that uniquely identifies the organization from which the domain will be removed. This should be specified when calling the tool.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.VerifyDomainForOrg



Verify a domain for a specified organization.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **domain\_uuid** (`string`, optional) A UUID string identifying the domain to be verified for the organization. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **organization\_identifier** (`string`, optional) A unique string ID representing the organization associated with the domain to verify. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ListOrganizationInvites



Retrieve all pending invites for an organization.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization whose pending invites you want to retrieve.
-   **results\_per\_page** (`integer`, optional) Number of results to return per page when listing organization invites.
-   **start\_index** (`integer`, optional) The initial index from which to return the results. Use this for pagination.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateOrganizationInvite



Send an invitation to join an organization.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique identifier for the Datadog organization to which the invitation will be sent. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CancelInvitation



Cancels an invitation to join an organization.

**Parameters**

-   **invite\_identifier\_uuid** (`string`, required) A UUID string representing the invitation to be cancelled.
-   **organization\_id** (`string`, required) A string identifier for the organization whose invitation is to be canceled.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateBulkInvites



Create bulk invites for an organization.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_identifier** (`string`, optional) The unique string ID of the organization where you want to create bulk invites. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ListOrganizationMembers



Retrieve the list of members in an organization.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization whose members are to be listed. This ID determines which organization’s members will be retrieved.
-   **results\_per\_page** (`integer`, optional) Number of results to return per page when listing organization members.
-   **results\_start\_index** (`integer`, optional) The initial index from which to return the results, for pagination purposes.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateOrganizationMember



Update a member’s information in an organization.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_identifier** (`string`, optional) A string representing the unique identifier of the organization in Datadog. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **user\_uuid** (`string`, optional) The unique identifier (UUID) of the user to be updated in the organization. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateOrganizationMemberDetails



Update details of an organization member in Datadog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_identifier** (`string`, optional) The unique identifier for the organization in Datadog. This is required to specify which organization’s member is being updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **member\_user\_uuid** (`string`, optional) The unique user UUID of the organization member to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RemoveOrganizationMember



Remove a member from an organization.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization from which the member is to be removed.
-   **user\_uuid** (`string`, required) The unique identifier (UUID) of the user to be removed from the organization.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveMemberScopedApiKeys



Retrieve scoped API keys for a member in an organization.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization whose member’s scoped API keys are to be retrieved.
-   **user\_uuid** (`string`, required) The unique identifier for the user within the organization. This is required to retrieve their scoped API keys.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetCurrentOrgProjects



Retrieve projects for the current organization.

**Parameters**

-   **organization\_identifier** (`string`, required) A string representing the unique identifier of the current organization. Required to fetch projects.
-   **results\_per\_page** (`integer`, optional) Specify the number of results to return per page.
-   **start\_index** (`integer`, optional) The initial index from which to return the results. Use this to paginate results starting from a specific point.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateProjectForOrganization



Create a new project for the current organization.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_identifier** (`string`, optional) The unique identifier for the organization. Used to specify which organization’s project is being created. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetOrganizationProjectDetails



Fetch details of a specific project within an organization.

**Parameters**

-   **organization\_identifier** (`string`, required) A string representing the unique identifier for the organization whose project details are to be retrieved.
-   **project\_id** (`integer`, required) A unique identifier for the project. This is required to retrieve specific project details within an organization.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateProjectDetails



Update project details for the current organization.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_id** (`integer`, optional) A unique integer identifying the project to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **organization\_identifier** (`string`, optional) A unique string identifying the organization whose project details are to be updated. Required for specifying the target organization. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateOrganizationProject



Update a project’s details within an organization.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_id** (`integer`, optional) A unique integer value identifying the project to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **organization\_identifier** (`string`, optional) A string representing the identifier of the organization. Required to update the project details. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.DeleteProject



Deletes a project from the current organization.

**Parameters**

-   **organization\_identifier** (`string`, required) The unique identifier for the organization from which the project is to be deleted. Ensure this ID is correct to prevent errors.
-   **project\_id** (`integer`, required) A unique integer identifying the project to delete.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveProjectActivity



Retrieve project activity for a specific organization and project.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier of the organization for which to retrieve project activity.
-   **project\_id** (`integer`, required) A unique integer value identifying the specific project to retrieve activity for.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateProjectProductIntent



Update product intent for a specific project in an organization.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_id** (`integer`, optional) A unique integer value identifying the project to update within the organization. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **organization\_identifier** (`string`, optional) The unique identifier of the organization. Provide this to specify which organization’s project is being updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateOrganizationProject



Create a project for the current organization.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_unique\_id** (`integer`, optional) An integer that uniquely identifies the project to be created for the organization. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **organization\_identifier** (`string`, optional) A unique string that identifies the organization for which the project is being created. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateProjectOnboardingStatus



Update the onboarding status of a project in an organization.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_id** (`integer`, optional) A unique integer identifying the specific project to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **organization\_identifier** (`string`, optional) A string representing the unique ID of the organization to update the project onboarding status within. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.DeleteSecretTokenBackup



Deletes a secret token backup for a specified project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_id** (`integer`, optional) The unique ID of the project whose secret token backup is to be deleted. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **organization\_id** (`string`, optional) A unique identifier for the organization. This is required to specify which organization’s project the secret token backup belongs to. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CheckDemoDataGenerationStatus



Check if demo data is being generated for a project.

**Parameters**

-   **organization\_identifier** (`string`, required) A string that uniquely identifies the organization for the project.
-   **project\_identifier** (`integer`, required) An integer uniquely identifying the project to check demo data generation status for.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ResetProjectToken



Reset a project’s token in the current organization.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_id** (`integer`, optional) A unique identifier for the project whose token will be reset. This is required to specify which project’s token needs to be reset. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **organization\_id** (`string`, optional) The unique identifier for the organization in which the project is located. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RotateSecretTokenForProject



Rotate the secret token for a specific project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_id** (`integer`, optional) A unique integer identifying the project for which you want to rotate the secret token. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **organization\_id** (`string`, optional) The ID of the organization to which the project belongs. Required for token rotation. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetProxyRecords



Retrieve proxy records for a given organization.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier of the organization for which to retrieve proxy records.
-   **results\_per\_page** (`integer`, optional) Specifies the number of results to return per page when retrieving proxy records.
-   **starting\_index\_for\_results** (`integer`, optional) The initial index from which to begin returning results. Use this to paginate through the list of proxy records.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateProxyRecords



Create a proxy record for an organization.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_identifier** (`string`, optional) A unique string identifier for the organization to which the proxy record will be added. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveProxyRecord



Retrieve details of a specific proxy record.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization whose proxy record you want to retrieve.
-   **proxy\_record\_id** (`string`, required) The unique identifier for the proxy record to be retrieved.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateProxyRecord



Update a proxy record within an organization.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **proxy\_record\_id** (`string`, optional) The unique identifier for the proxy record to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **organization\_id** (`string`, optional) A unique identifier for the organization whose proxy record is being updated. This must be a valid string representing the organization in Datadog. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ModifyProxyRecord



Update partial details of a proxy record.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **proxy\_record\_id** (`string`, optional) The unique identifier for the proxy record to be updated. This is required to specify which record is being modified. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **organization\_id** (`string`, optional) The unique identifier for the organization. It determines the organization within which the proxy record needs to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.DeleteProxyRecord



Deletes a proxy record for an organization.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization from which the proxy record will be deleted. This is required to specify the target organization.
-   **proxy\_record\_id** (`string`, required) The unique identifier of the proxy record to be deleted. Required for deletion.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ListOrganizationRoles



Fetches the list of roles for a specified organization.

**Parameters**

-   **organization\_identifier** (`string`, required) The unique ID of the organization to fetch roles for. Must be a valid string identifier.
-   **results\_per\_page** (`integer`, optional) Specify the number of roles to return per page.
-   **starting\_result\_index** (`integer`, optional) The starting index from which to return role results for pagination.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateRoleInOrganization



Create a new role within an organization.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique identifier of the organization where the role will be created. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveRoleDetails



Retrieve details of a specific role within an organization.

**Parameters**

-   **organization\_identifier** (`string`, required) A string that uniquely identifies the organization within which the role is being retrieved. Required to ensure that the role details correspond to the correct organization.
-   **role\_id** (`string`, required) A UUID string to identify the specific role within the organization.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateOrganizationRole



Update an organization’s role details.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **role\_uuid** (`string`, optional) A UUID string identifying the role to be updated in the organization. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **organization\_id** (`string`, optional) A unique identifier for the organization where the role will be updated. This is a required parameter. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateRoleDetails



Partially update organization role details.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **role\_uuid** (`string`, optional) A UUID string identifying the role to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **organization\_id** (`string`, optional) A string representing the identifier of the organization. Required for role updates. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.DeleteRoleInOrganization



Delete a specific role within an organization.

**Parameters**

-   **organization\_id** (`string`, required) The ID of the organization from which the role will be deleted. This should be a string.
-   **role\_id** (`string`, required) A UUID string identifying the role to be deleted.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ListRoleMemberships



Retrieve role memberships for a specified role within an organization.

**Parameters**

-   **organization\_id** (`string`, required) A unique identifier for the organization within Datadog.
-   **role\_identifier** (`string`, required) The unique identifier of the role for which memberships are to be retrieved within an organization.
-   **result\_start\_index** (`integer`, optional) The initial index from which to return the role membership results.
-   **results\_per\_page** (`integer`, optional) Specifies the number of results to return per page when listing role memberships.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateRoleMembership



Create a role membership in an organization.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique identifier for the organization in which the role membership is to be created. This is required to specify the targeted organization within Datadog. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **role\_identifier** (`string`, optional) The unique identifier of the role to which the user will be assigned. It should be a string that matches the specific role in Datadog. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RemoveRoleMembership



Remove a role membership from an organization.

**Parameters**

-   **organization\_identifier** (`string`, required) A string representing the unique identifier of the organization. Required to specify which organization the role membership belongs to.
-   **role\_id** (`string`, required) The unique identifier for the role from which membership will be removed. It should be a valid UUID string.
-   **role\_membership\_id** (`string`, required) A UUID string identifying the specific role membership to be removed.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ListProjectActions



Retrieve and log actions for a specific project.

**Parameters**

-   **project\_identifier** (`string`, required) Project ID to access specific project actions. Obtain via /api/projects/ if unknown.
-   **response\_format** (`string`, optional) Specify the format for the response data. Options are ‘csv’ or ‘json’.
-   **results\_per\_page** (`integer`, optional) Specify the number of results to return per page.
-   **starting\_index\_for\_results** (`integer`, optional) The initial index from which results should start when retrieving project actions.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.LogTrackFilesystemViews



Log a new view for file system access tracking.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_id** (`string`, optional) The ID of the project to access. Call /api/projects/ to obtain it. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **response\_format** (`string`, optional) Specify the format of the response. Valid options are ‘csv’ or ‘json’. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveProjectAction



Retrieve logs for a specific project action.

**Parameters**

-   **action\_id** (`integer`, required) Unique integer identifying the specific action to retrieve logs for.
-   **project\_id** (`string`, required) The ID of the project to access. Use /api/projects/ to find this ID.
-   **response\_format** (`string`, optional) Specify the format for the response data. Options are ‘csv’ or ‘json’.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateProjectAction



Update and track views for a project action in Datadog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **action\_id** (`integer`, optional) The unique integer to identify the action within the project for updating. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) ID of the project to access. Obtain this by calling /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **output\_format** (`string`, optional) Specifies the format of the data response. Options are ‘csv’ or ‘json’. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateActionPartial



Partially update an action in a project to track views.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **action\_id** (`integer`, optional) A unique integer value identifying the action to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) The unique ID of the project you want to access. Use /api/projects/ to find this ID. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **response\_format** (`string`, optional) Specify the format for the output data. Choose between ‘csv’ or ‘json’. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.MarkActionAsDeleted



Mark an action as deleted in a specific project.

**Parameters**

-   **action\_id** (`integer`, required) A unique integer identifying the action you want to mark as deleted in the project.
-   **project\_identifier** (`string`, required) The unique Project ID to access the specific project. Retrieve this by calling /api/projects/.
-   **response\_format** (`string`, optional) Specify the format of the response, either ‘csv’ or ‘json’.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetProjectActivityLog



Fetch the activity log for a specific project.

**Parameters**

-   **project\_identifier** (`string`, required) The unique ID of the project you want to access the activity log for. Retrieve by calling /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ListAvailableAgents



Retrieve a list of agent definitions for tasks.

**Parameters**

-   **project\_identification** (`string`, required) The ID of the project you want to access. Obtain the ID by calling /api/projects/.
-   **result\_start\_index** (`integer`, optional) The initial index to begin returning agent definitions from the list.
-   **results\_per\_page** (`integer`, optional) Specify the number of agent definitions to return per page.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveAgentDefinition



Retrieve a specific agent definition by ID.

**Parameters**

-   **agent\_id** (`string`, required) The unique identifier of the agent to retrieve. This ID specifies which agent’s details to fetch.
-   **project\_id** (`string`, required) The unique identifier for the project you want to access. Use the API call /api/projects/ to find the project ID.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ListAnnotationsForProject



Retrieve annotations for a specific project.

**Parameters**

-   **project\_id** (`string`, required) The ID of the project to access. Obtain by calling /api/projects/.
-   **initial\_result\_index** (`integer`, optional) The starting index for the results to return in pagination.
-   **results\_limit\_per\_page** (`integer`, optional) Specify the number of results to return per page when retrieving annotations for a project.
-   **search\_term** (`string`, optional) A search term to filter the annotations. Can be a keyword or phrase.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateAnnotation



Create a new annotation for a project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_id** (`string`, optional) The ID of the project where the annotation will be created. Obtain it via /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveProjectAnnotation



Retrieve details of a specific annotation by ID.

**Parameters**

-   **annotation\_id** (`integer`, required) A unique integer identifying the specific annotation to retrieve from a project.
-   **project\_identifier** (`string`, required) Project ID to access the desired project in Datadog. Obtainable via `/api/projects/`.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateAnnotation



Update an existing annotation by ID.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **annotation\_id** (`integer`, optional) A unique integer identifying the annotation to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) Project ID for accessing the desired project. Retrieve ID with /api/projects/ call. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ModifyAnnotation



Update specific details of an annotation in a project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **annotation\_id** (`integer`, optional) A unique integer to identify the specific annotation to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) The ID of the project to access. Obtainable via a call to /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.DeleteAnnotation



Mark an annotation as deleted in a project.

**Parameters**

-   **annotation\_id** (`integer`, required) A unique integer identifier for the annotation to be marked as deleted.
-   **project\_id\_for\_annotation** (`string`, required) The ID of the project where the annotation should be marked as deleted. Use /api/projects/ to find the correct ID.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetAppMetrics



Retrieve application metrics for a specific project and ID.

**Parameters**

-   **plugin\_config\_id** (`integer`, required) A unique integer identifying the plugin configuration.
-   **project\_id\_for\_app\_metrics** (`string`, required) The Project ID for the project whose app metrics you want to retrieve. Find the ID by calling /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetErrorDetailsForAppMetrics



Retrieve error details for specific app metrics.

**Parameters**

-   **plugin\_config\_id** (`integer`, required) A unique integer identifying the plugin configuration to retrieve error details for.
-   **project\_identifier** (`string`, required) The unique Project ID for accessing specific app metrics error details. Obtain this by calling /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.FetchMetricsHistory



Retrieve historical exports of app metrics.

**Parameters**

-   **plugin\_configuration\_identifier** (`string`, required) The ID of the plugin configuration for which historical metrics exports are being fetched.
-   **project\_identifier** (`string`, required) The Project ID required to access the desired project’s historical data. Obtainable via a /api/projects/ call.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveAppMetricsHistoricalExports



Retrieve historical export data for app metrics.

**Parameters**

-   **export\_id** (`string`, required) The unique identifier for the specific app metrics export record to retrieve.
-   **plugin\_configuration\_id** (`string`, required) The ID for the plugin configuration to be used when retrieving app metrics. This is required to specify the context of the metrics data.
-   **project\_identifier** (`string`, required) Project ID to access the targeted project. Retrieve the ID using the /api/projects/ endpoint if needed.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.FetchBatchExports



Retrieve a list of batch exports for a specific project.

**Parameters**

-   **project\_identifier** (`string`, required) The ID of the project for which to access batch exports. Obtain this by calling /api/projects/.
-   **results\_per\_page** (`integer`, optional) Specify the number of results to return per page when retrieving batch exports.
-   **starting\_index** (`integer`, optional) The initial index from which to return the results in the list of batch exports.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateBatchExport



Initiate a batch export for a project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_id** (`string`, optional) The ID of the project you want to access for batch export. Retrieve from /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ListBackfillExports



Retrieve list of batch export backfills for a project.

**Parameters**

-   **batch\_export\_identifier** (`string`, required) The unique identifier for the batch export to retrieve backfills for. Required to specify which export’s backfills are listed.
-   **project\_identifier** (`string`, required) The ID of the project to access. Obtainable via /api/projects/ call.
-   **ordering\_field\_for\_results** (`string`, optional) Specify the field to use for ordering the backfill export results.
-   **pagination\_cursor** (`string`, optional) The pagination cursor value used to navigate through paginated results.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateBatchExportBackfill



Create a new backfill for a batch export.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **batch\_export\_identifier** (`string`, optional) The unique identifier for the batch export to be backfilled. This ID determines which specific export the backfill will apply to. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) The unique ID of the project to access. Retrieve this via a call to /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetBatchExportBackfill



Retrieve details of a specific batch export backfill.

**Parameters**

-   **batch\_export\_backfill\_id** (`string`, required) A UUID string identifying the specific batch export backfill to retrieve.
-   **batch\_export\_identifier** (`string`, required) A string representing the batch export backfill ID to retrieve details.
-   **project\_id** (`string`, required) The ID of the project to access. Retrieve the project ID by calling /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.TerminateBatchExportBackfill



Cancel a batch export backfill in Datadog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **batch\_export\_identifier** (`string`, optional) A unique identifier for the batch export backfill to be canceled. This ID specifies which batch export backfill is targeted for termination. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **backfill\_id** (`string`, optional) A UUID string identifying this batch export backfill in Datadog. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) Project ID to access. Use /api/projects/ to find the ID. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ListBatchExportRuns



Retrieve batch export runs for a specific project and export.

**Parameters**

-   **batch\_export\_identifier** (`string`, required) The unique identifier for the batch export. Used to specify which export runs to retrieve.
-   **project\_id** (`string`, required) The ID of the project to access. Use /api/projects/ to find the ID.
-   **pagination\_cursor** (`string`, optional) The pagination cursor value used to fetch the next page of results.
-   **results\_ordering\_field** (`string`, optional) Specify the field for ordering the results of the batch export runs. Common fields might include date, status, or name.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveBatchExportRun



Retrieve details of a specific batch export run.

**Parameters**

-   **batch\_export\_id** (`string`, required) A unique string to identify the batch export run you want to retrieve details for.
-   **batch\_export\_run\_uuid** (`string`, required) A UUID string identifying the specific batch export run for detailed retrieval.
-   **project\_id** (`string`, required) Provide the Project ID to access the specific project. Use /api/projects/ to obtain the ID if unknown.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.StopBatchExportRun



Cancel an ongoing batch export run in a specific project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **batch\_export\_run\_identifier** (`string`, optional) A UUID string uniquely identifying the batch export run to be canceled. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **batch\_export\_run\_id** (`string`, optional) A UUID string that uniquely identifies the batch export run to be canceled. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) The ID of the project you want to access. Use /api/projects/ to find the correct ID. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveBatchExportRunLogs



Retrieve logs for a specific batch export run.

**Parameters**

-   **batch\_export\_identifier** (`string`, required) A unique identifier for the batch export. Necessary for retrieving logs for that specific export run.
-   **batch\_export\_run\_id** (`string`, required) A UUID string identifying this specific batch export run in Datadog.
-   **project\_id** (`string`, required) The unique identifier for the project you want to access. Retrieve it by calling `/api/projects/`.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetryExportRun



Retry a batch export run in Datadog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **batch\_export\_identifier** (`string`, optional) The unique identifier for the batch export run to retry. It should be provided as a string. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **batch\_export\_run\_id** (`string`, optional) A UUID string that identifies the specific batch export run to retry in Datadog. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) The Project ID you want to access in Datadog. Retrieve it via /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrievePosthogBatchExports



Retrieve specific Datadog batch export details.

**Parameters**

-   **batch\_export\_id** (`string`, required) A UUID string that uniquely identifies the batch export in Datadog.
-   **project\_id** (`string`, required) The ID of the project you want to access. Call /api/projects/ to find this ID.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateBatchExport



Update an existing batch export in a project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **batch\_export\_id** (`string`, optional) A UUID string identifying the batch export to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) The ID of the project to access. Retrieve this by calling /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.EditBatchExports



Update specific details of batch exports.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **batch\_export\_id** (`string`, optional) A UUID string identifying the batch export to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) The unique ID of the project you’re accessing. Retrieve it by calling /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.DestroyBatchExport



Deletes a specific batch export in a project.

**Parameters**

-   **batch\_export\_uuid** (`string`, required) A UUID string identifying the batch export to be deleted.
-   **project\_id** (`string`, required) The unique identifier for the project to access. Use /api/projects/ to retrieve it.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.StartBatchExportBackfill



Initiate a backfill process for a BatchExport.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **batch\_export\_id** (`string`, optional) A UUID string identifying the specific batch export. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) The ID of the project you want to access. Obtain this by calling /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveLogExports



Retrieve logs from batch exports by project and export ID.

**Parameters**

-   **batch\_export\_id** (`string`, required) A UUID specifying the batch export to retrieve logs from.
-   **project\_id** (`string`, required) Project ID for accessing the specific project. Obtainable via a call to /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.SuspendBatchExport



Pause an ongoing batch export process in a project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **batch\_export\_uuid** (`string`, optional) A UUID identifying the batch export to pause. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) Project ID for accessing the specific project. Use /api/projects/ to find this ID. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RunTestStepBatchExport



Initiate a test step for batch exports.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **batch\_export\_id** (`string`, optional) A UUID string used to identify the specific batch export for the test step. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) The ID of the project you want to access for batch export testing. Retrieve this ID via /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ReactivateBatchExport



Unpause a paused BatchExport in a project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **batch\_export\_uuid** (`string`, optional) A UUID string identifying this batch export to be unpaused. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) The ID of the project to access for unpausing the BatchExport. Make a call to /api/projects/ to find the project ID. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RunBatchExportsTestStep



Triggers a test step for batch exports in a specified project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_id** (`string`, optional) The unique identifier for the project you want to access for the batch export test step. Retrieve it by calling /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveBatchExportTests



Retrieve batch export test details for a project.

**Parameters**

-   **project\_identifier** (`string`, required) The ID of the project to access. Use the /api/projects/ endpoint to find this ID.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ListProjectCohorts



Retrieve a list of cohorts for a given project.

**Parameters**

-   **project\_id** (`string`, required) The unique identifier of the project to access. To obtain this ID, call /api/projects/.
-   **results\_per\_page** (`integer`, optional) Specify the number of results to return per page.
-   **results\_start\_index** (`integer`, optional) The initial index from which to return the results. Use this to paginate through larger sets of data.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateCohortTracking



Logs a new view on the resource for tracking purposes.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_id** (`string`, optional) The ID of the project you wish to access. Obtain it by calling /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveCohortsData



Retrieve cohort details and access logs for a project.

**Parameters**

-   **cohort\_identifier** (`integer`, required) A unique integer that identifies the specific cohort you wish to retrieve data for.
-   **project\_id** (`string`, required) The ID of the project to access. Obtain it by calling /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ModifyCohortViews



Update cohort views to track new file system accesses.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **cohort\_identifier** (`integer`, optional) A unique integer identifying the specific cohort to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) The unique ID of the project being accessed. Call /api/projects/ to obtain this ID if unknown. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateCohortViews



Update and track cohort file system views.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **cohort\_id** (`integer`, optional) A unique integer identifier for the cohort. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) The ID of the project you’re trying to access. Obtain it by calling /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.SetCohortDeleted



Mark a cohort as deleted in the Datadog project.

**Parameters**

-   **cohort\_id** (`integer`, required) A unique integer used to identify the cohort to be marked as deleted.
-   **project\_id** (`string`, required) The ID of the Datadog project you want to mark the cohort as deleted in. Obtainable via the /api/projects/ endpoint.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetCohortActivity



Retrieve logs of file system views for a cohort.

**Parameters**

-   **cohort\_id** (`integer`, required) A unique integer value identifying the specific cohort whose file system view logs are to be retrieved.
-   **project\_id** (`string`, required) The identifier of the project to access. Obtainable via /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.AddPersonsToStaticCohort



Add persons to a static cohort in Datadog.

**Parameters**

-   **cohort\_id** (`integer`, required) A unique integer that identifies the cohort to update.
-   **project\_identifier** (`string`, required) The ID of the project to access. Retrieve it via /api/projects/.
-   **person\_uuids\_to\_add** (`array[string]`, optional) List of person UUIDs to add to the cohort.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveCohortCalculationHistory



Retrieve calculation history for a specific cohort.

**Parameters**

-   **cohort\_id** (`integer`, required) A unique integer identifying the cohort to retrieve calculation history for.
-   **project\_id** (`string`, required) The ID of the project you are accessing. Use /api/projects/ to find IDs.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateStaticCohortCopy



Create a static copy of a dynamic cohort.

**Parameters**

-   **cohort\_identifier** (`integer`, required) A unique integer identifying the dynamic cohort to be duplicated as a static cohort.
-   **project\_identifier** (`string`, required) The ID of the project to access. Obtain it by calling /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetCohortPersons



Retrieve a list of persons in a specific project cohort.

**Parameters**

-   **cohort\_id** (`integer`, required) A unique integer value identifying this cohort. Required to retrieve the list of persons associated with it.
-   **project\_id** (`string`, required) The ID of the project you want to access. Obtain this via the /api/projects/ endpoint.
-   **output\_format** (`string`, optional) Specify the format of the returned data. Options are ‘csv’ or ‘json’.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RemovePersonFromStaticCohort



Removes a person from a static cohort in a project.

**Parameters**

-   **cohort\_id** (`integer`, required) Unique integer ID for the specific cohort from which to remove the person.
-   **project\_id** (`string`, required) The Project ID you want to access. Obtain it by calling /api/projects/.
-   **person\_uuid\_to\_remove** (`string`, optional) Provide the UUID of the person to remove from the cohort.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveCohortActivity



Retrieve logs of cohort activity views.

**Parameters**

-   **project\_id** (`string`, required) Project ID to access specific cohort activity logs. Retrieve the ID by calling /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ListDashboardTemplates



Retrieve a list of dashboard templates for a project.

**Parameters**

-   **project\_id** (`string`, required) The unique identifier of the specific project for which you want to retrieve dashboard templates. This ID can be obtained by calling the `/api/projects/` endpoint.
-   **results\_per\_page** (`integer`, optional) Specify the number of dashboard templates to return per page.
-   **starting\_index\_for\_results** (`integer`, optional) The index from which to start returning results, useful for pagination.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateDashboardTemplate



Create a new dashboard template in a Datadog project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_id** (`string`, optional) The unique identifier for the Datadog project where you want to create the dashboard template. Obtain it by calling /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveDashboardTemplate



Retrieve a specific dashboard template by ID.

**Parameters**

-   **dashboard\_template\_uuid** (`string`, required) A UUID string identifying the dashboard template to retrieve.
-   **project\_identifier** (`string`, required) A string representing the ID of the project you want to access. Obtain it by calling /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ModifyDashboardTemplate



Update a Datadog dashboard template.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **dashboard\_template\_uuid** (`string`, optional) A UUID string that identifies the dashboard template to be modified. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) The unique Project ID for accessing a specific Datadog project. Retrieve this by calling /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateDashboardTemplate



Partially update a dashboard template in Datadog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **dashboard\_template\_id** (`string`, optional) A UUID string identifying the dashboard template to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **dashboard\_project\_id** (`string`, optional) Project ID to access a specific dashboard. Obtain it by calling /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.DeleteDashboardTemplate



Mark a Datadog dashboard template as deleted.

**Parameters**

-   **dashboard\_template\_id** (`string`, required) A UUID string uniquely identifying the Datadog dashboard template to be marked as deleted.
-   **project\_identifier** (`string`, required) The Project ID needed to access the specific project. Obtainable via the “/api/projects/” endpoint.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveDashboardTemplateSchema



Retrieve JSON schema for dashboard templates.

**Parameters**

-   **project\_id** (`string`, required) Specify the Project ID for accessing the relevant dashboard template schema. Obtain the ID via the /api/projects/ endpoint if unknown.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetAvailableDashboards



Retrieve a list of dashboards for a specific project.

**Parameters**

-   **project\_identifier** (`string`, required) The unique identifier for the project you want to access. Retrieve this by calling /api/projects/.
-   **response\_format** (`string`, optional) Specify the format of the response. Accepted values are ‘json’ or ‘txt’.
-   **results\_per\_page** (`integer`, optional) Specify the number of dashboards to return per page. This controls pagination for the results.
-   **start\_index\_for\_results** (`integer`, optional) The starting index for returning the list of dashboards, used for pagination.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateDashboard



Create a new dashboard for a specified project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_identifier** (`string`, optional) The ID of the project for which you want to create the dashboard. Retrieve this ID by calling /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **output\_format** (`string`, optional) Specify the format of the dashboard creation response. Options are ‘json’ or ‘txt’. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ListDashboardCollaborators



Retrieve the list of collaborators for a dashboard.

**Parameters**

-   **dashboard\_identifier** (`integer`, required) The integer ID of the dashboard for which to retrieve the list of collaborators. This ID is unique for each dashboard.
-   **project\_id** (`string`, required) The unique ID of the Datadog project to access. Retrieve this by calling /api/projects.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateDashboardCollaborator



Add a collaborator to a specified dashboard.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **dashboard\_identifier** (`integer`, optional) The unique integer ID of the dashboard to which you want to add a collaborator. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) Project ID for accessing the project. Retrieve it via /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.DeleteCollaboratorFromDashboard



Remove a collaborator from a specific dashboard.

**Parameters**

-   **dashboard\_id** (`integer`, required) The unique identifier for the dashboard from which you want to remove the collaborator. It’s required to specify which dashboard the action pertains to.
-   **project\_id** (`string`, required) The ID of the project for accessing the dashboard. Obtainable via /api/projects/.
-   **user\_uuid** (`string`, required) The unique identifier of the user to be removed from the dashboard.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ListDashboardShares



Retrieve information about how dashboards are shared.

**Parameters**

-   **dashboard\_identifier** (`integer`, required) The unique integer identifier for the dashboard whose sharing information is being requested.
-   **project\_identifier** (`string`, required) The ID of the project to access. Obtain this by calling /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.SetDashboardSharingPassword



Create a new password for dashboard sharing configuration.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **dashboard\_identifier** (`integer`, optional) The identifier for the dashboard you want to configure with sharing passwords. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) The ID of the project you want to access. To retrieve this ID, use the endpoint /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RemoveDashboardSharingPassword



Remove a password from a dashboard’s sharing configuration.

**Parameters**

-   **dashboard\_identifier** (`integer`, required) The unique identifier for the dashboard from which the password should be deleted. This is an integer value.
-   **password\_identifier** (`string`, required) The unique identifier of the password to delete from the sharing configuration.
-   **project\_id** (`string`, required) The unique identifier for the project you’re trying to access. Obtain this by calling /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RefreshDashboardSharingLink



Refresh the sharing link for a specific dashboard.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **dashboard\_identification\_number** (`integer`, optional) An integer representing the specific dashboard to refresh the sharing link for. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) The unique ID of the project. Retrieve it via the /api/projects/ endpoint. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetDashboardDetails



Retrieve details of a specific dashboard.

**Parameters**

-   **dashboard\_id** (`integer`, required) A unique integer value identifying the specific dashboard to retrieve details for.
-   **project\_id** (`string`, required) Project ID to specify which project to access. Obtain from /api/projects/.
-   **response\_format** (`string`, optional) The format in which the dashboard details should be returned. Accepted values are ‘json’ or ‘txt’.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateDashboard



Update a specific Datadog dashboard.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **dashboard\_id** (`integer`, optional) A unique integer value identifying the specific Datadog dashboard to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) The Project ID to access the relevant dashboard. Use the ‘/api/projects/’ endpoint to retrieve the ID if necessary. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **response\_format** (`string`, optional) Specify the format for the response, either ‘json’ or ‘txt’. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateDashboardPartial



Partially update a dashboard’s details.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **dashboard\_id** (`integer`, optional) A unique integer identifying the dashboard to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) The ID of the project you’re trying to access. Use an API call to /api/projects/ to find it. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **response\_format** (`string`, optional) Defines the format of the response returned by the API. Options are ‘json’ or ‘txt’. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RemoveDashboard



Request the deletion of a specified dashboard.

**Parameters**

-   **dashboard\_id** (`integer`, required) A unique integer identifying the dashboard to delete. Specify the ID for the target dashboard.
-   **project\_identifier** (`string`, required) The unique ID of the project for accessing its dashboards. Retrieve it via /api/projects/.
-   **response\_format** (`string`, optional) Specify the format of the response. Options are ‘json’ or ‘txt’.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateDashboardTilePosition



Repositions a tile on a Datadog dashboard.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **dashboard\_id** (`integer`, optional) A unique integer value identifying the specific dashboard to update the tile position. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) The ID of the project to access. Obtainable via the /api/projects/ endpoint. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **response\_format** (`string`, optional) Specify the desired format of the response. Choose between ‘json’ or ‘txt’. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveDashboardTiles



Stream metadata and tiles of a dashboard.

**Parameters**

-   **dashboard\_id** (`integer`, required) A unique integer identifying the dashboard to stream metadata and tiles from.
-   **project\_id** (`string`, required) The ID of the project to access. Obtainable via a call to /api/projects/.
-   **response\_format** (`string`, optional) Specify the format of the streamed data. Options include ‘json’ and ‘txt’.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateDashboardFromTemplate



Create a dashboard from a template JSON.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_id** (`string`, optional) The ID of the project to access. Use /api/projects/ to find it. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **response\_format** (`string`, optional) Specify the format for the response. Options are ‘json’ or ‘txt’. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.FetchDataColorThemes



Retrieve a list of data color themes for a project.

**Parameters**

-   **project\_id** (`string`, required) The unique identifier of the project to access color themes. Retrieve the ID via /api/projects/.
-   **results\_per\_page** (`integer`, optional) Specifies the number of data color themes to return per page.
-   **starting\_index** (`integer`, optional) The initial index from which to start returning the results for data color themes.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.AddDataColorTheme



Create a new data color theme for a project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_id** (`string`, optional) The unique identifier of the project for which you want to create a data color theme. Retrieve this ID with a call to /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveDataColorTheme



Retrieve details of a specific data color theme.

**Parameters**

-   **data\_color\_theme\_id** (`integer`, required) A unique integer value identifying the specific data color theme to retrieve.
-   **project\_identifier** (`string`, required) The unique ID of the project to access. Use /api/projects/ to find this ID.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateDataColorTheme



Update the color theme for a specific project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **color\_theme\_id** (`integer`, optional) A unique integer identifying the data color theme to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) The unique ID of the project you want to access. Retrieve the ID by querying /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ModifyDataTheme



Update a specific data color theme for a project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **theme\_id** (`integer`, optional) A unique integer value identifying the data color theme to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) The ID of the project you want to access. Use /api/projects/ to find the ID. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.DeleteDataColorTheme



Delete a data color theme from a project.

**Parameters**

-   **data\_color\_theme\_id** (`integer`, required) A unique integer identifying the data color theme to delete.
-   **project\_id** (`string`, required) The ID of the project containing the data color theme to delete. Retrieve this by calling /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ListProjectDatasetItems



Retrieve dataset items for a specific project in Datadog.

**Parameters**

-   **project\_id** (`string`, required) The unique identifier for the project whose dataset items you want to retrieve. Obtainable via /api/projects/.
-   **filter\_by\_dataset\_id** (`string`, optional) A string representing the dataset ID to filter the results by.
-   **results\_per\_page** (`integer`, optional) Specify the number of dataset items to return per page.
-   **start\_index** (`integer`, optional) The initial index from which to return the dataset items, used for pagination.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateDatasetItem



Create a new dataset item in a specified project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_id** (`string`, optional) Project ID for the target project. Obtain by calling /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveDatasetItem



Retrieve details of a specific dataset item.

**Parameters**

-   **dataset\_item\_id** (`string`, required) The UUID identifying the specific dataset item to retrieve.
-   **project\_id** (`string`, required) The ID of the project to access. Use ‘/api/projects/’ to find this ID if needed.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateDatasetItem



Update an existing dataset item with new information.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **dataset\_item\_id** (`string`, optional) A UUID string identifying the dataset item to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) Project ID of the project to access. You can find this ID by making a call to /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ModifyDatasetItem



Update specific details of a dataset item.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **dataset\_item\_uuid** (`string`, optional) A UUID string identifying the dataset item to be modified. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) The ID of the project where the dataset item is located. Retrieve this by calling /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.SetDatasetItemDeleted



Mark a dataset item as deleted in a project.

**Parameters**

-   **dataset\_item\_uuid** (`string`, required) A UUID string identifying the specific dataset item to mark as deleted.
-   **project\_identifier** (`string`, required) ID of the project to access. To find this, call /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ListDatasets



Retrieve a list of datasets for a specific project.

**Parameters**

-   **project\_id** (`string`, required) The ID of the project to access datasets for. Use /api/projects/ to find this ID.
-   **dataset\_ids** (`array[string]`, optional) A list of dataset IDs. Can include multiple IDs separated by commas.
-   **initial\_result\_index** (`integer`, optional) The initial index from which to return the results.
-   **order\_datasets\_by** (`array[string]`, optional) Specify the order of dataset results. Options: ‘created\_at’, ‘-created\_at’, ‘updated\_at’, ‘-updated\_at’.
-   **results\_per\_page** (`integer`, optional) Specify the number of results returned per page. This determines how many datasets are retrieved in one API call.
-   **search\_query** (`string`, optional) Search within dataset name, description, or metadata using a keyword or phrase.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateDatasetProject



Create a new dataset within a specified project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_id** (`string`, optional) The ID of the project where the dataset will be created. Obtainable via the /api/projects/ call. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveDatasetInfo



Retrieve details of a specific dataset in a project.

**Parameters**

-   **dataset\_identifier** (`string`, required) A UUID string identifying the specific dataset to retrieve.
-   **project\_identifier** (`string`, required) The ID of the project to access. Use /api/projects/ to retrieve project IDs.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateDataset



Update a specific dataset within a project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **dataset\_identifier** (`string`, optional) A UUID string identifying the dataset to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) The ID of the project to access. Use /api/projects/ to find this ID. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateDatasetInfo



Update specific dataset information in a project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **dataset\_uuid** (`string`, optional) A UUID string that uniquely identifies the dataset to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) The ID of the project to be accessed. Retrieve using a call to /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.DeleteDatasetById



Facilitates marking a dataset as deleted in a project.

**Parameters**

-   **dataset\_uuid** (`string`, required) A UUID string that uniquely identifies the dataset to be marked as deleted within the project.
-   **project\_identifier** (`string`, required) Provide the Project ID for accessing the desired project. Use the /api/projects/ endpoint to locate the ID.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetEarlyAccessFeatures



Retrieve a list of early access features for a project.

**Parameters**

-   **project\_id** (`string`, required) The ID of the project to retrieve early access features for. Obtainable via /api/projects/.
-   **number\_of\_results\_per\_page** (`integer`, optional) Specify the number of results to return per page for early access features.
-   **result\_start\_index** (`integer`, optional) The initial index from which to return the results when paginating through early access features.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateEarlyAccessFeatureTracking



Create tracking for early access feature views.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_id** (`string`, optional) Project ID to access specific project features. Retrieve this ID by calling /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveEarlyAccessFeature



Retrieve information about an early access feature.

**Parameters**

-   **feature\_uuid** (`string`, required) A UUID string identifying the early access feature to retrieve.
-   **project\_identifier** (`string`, required) The unique ID of the project you want to access. Retrieve this by calling the /api/projects/ endpoint.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ModifyEarlyAccessFeature



Update early access feature for a project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **early\_access\_feature\_id** (`string`, optional) A UUID string identifying the early access feature to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) The unique identifier for the project. Fetch it by calling /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateEarlyAccessFeature



Update an early access feature for a project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **early\_access\_feature\_id** (`string`, optional) A UUID string identifying the specific early access feature. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) The ID of the project you want to access. Retrieve this from the /api/projects/ endpoint. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RemoveEarlyAccessFeature



Remove an early access feature from a project.

**Parameters**

-   **early\_access\_feature\_id** (`string`, required) A UUID string that identifies the specific early access feature to be removed.
-   **project\_id\_for\_removal** (`string`, required) Project ID to identify the project for accessing or removing the early access feature. Use the /api/projects/ endpoint to find this ID.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrievePosthogEndpointRun



Retrieve details of a specific Datadog endpoint run.

**Parameters**

-   **endpoint\_name** (`string`, required) The name of the Datadog endpoint to retrieve details for. This specifies which endpoint’s run details you want to access.
-   **project\_identifier** (`string`, required) The ID of the project to access. Obtainable via a call to /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateEndpoint



Update an existing endpoint run in a project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **endpoint\_name** (`string`, optional) The name of the endpoint to be updated. This is a required string parameter. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) Project ID to access the specific project. Obtainable via a call to /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.FetchRecentExecutionTimes



Fetch the last 6 months of execution times for endpoints.

**Parameters**

-   **endpoint\_names** (`array[string]`, required) An array of endpoint names to retrieve execution times for, within the specified project.
-   **project\_id** (`string`, required) The Project ID you want to access. Retrieve it using /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ListProjectEnvironments



Get a list of environments for a specific project.

**Parameters**

-   **project\_identifier** (`string`, required) The unique identifier for the project whose environments you want to list. Retrieve this by calling `/api/projects/`.
-   **initial\_result\_index** (`integer`, optional) The initial index from which to return the results, used to paginate.
-   **results\_per\_page** (`integer`, optional) The number of environments to return on each page of results. Specify an integer value.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateProjectEnvironment



Create a new environment for a specific project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_id** (`string`, optional) The ID of the project to access. Retrieve it by calling `/api/projects/`. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetProjectEnvironmentDetails



Retrieve details of a specific environment within a project.

**Parameters**

-   **environment\_id** (`integer`, required) Unique integer identifying the environment (or team) to retrieve details for.
-   **project\_identifier** (`string`, required) Project ID to access specific project details. Retrieve this by calling /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.EditProjectEnvironment



Update environment settings for a specified project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **environment\_identifier** (`integer`, optional) A unique integer identifying the environment (aka team) for modification. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) String ID of the project to access. Obtain ID via /api/projects/ call. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ModifyProjectEnvironment



Update a specific environment of a project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **environment\_identifier** (`integer`, optional) A unique integer identifying the environment or team to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) The ID of the project you want to access. Use /api/projects/ to find the Project ID. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.DeleteEnvironment



Delete a specific environment from a project.

**Parameters**

-   **environment\_id** (`integer`, required) A unique integer identifying the environment to delete.
-   **project\_identifier** (`string`, required) The ID of the project you’re trying to access. Find this by calling the /api/projects/ endpoint.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetEnvironmentActivity



Retrieve project environment activity details.

**Parameters**

-   **environment\_id** (`integer`, required) A unique integer identifying the environment (aka team).
-   **project\_identifier** (`string`, required) The unique identifier for the project you wish to access. Obtainable by calling /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateProjectEnvironment



Update product intent for a project environment.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **environment\_identifier** (`integer`, optional) A unique integer that identifies the environment or team. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) The ID of the project to be accessed. Obtainable via the /api/projects/ endpoint. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CompleteProjectOnboarding



Mark a project’s product onboarding as complete in an organization.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **environment\_id** (`integer`, optional) A unique integer value identifying this environment (aka team). Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) The ID of the project to access. Retrieve this by calling the /api/projects/ endpoint. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveDefaultEvaluationTags



Retrieve default evaluation tags for a project environment.

**Parameters**

-   **environment\_id** (`integer`, required) A unique integer value identifying the environment or team for tag retrieval.
-   **project\_id** (`string`, required) The unique identifier for the project. Retrieve the ID by calling /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateDefaultEvaluationTags



Manage default evaluation tags for a team environment.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **environment\_id** (`integer`, optional) A unique integer value identifying the environment (team) for which to manage evaluation tags. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) The ID of the project you want to access for managing evaluation tags. Retrieve using /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.DeleteDefaultEvaluationTags



Delete default evaluation tags for a project environment.

**Parameters**

-   **environment\_identifier** (`integer`, required) A unique integer identifying the environment (or team) for tag management.
-   **project\_id** (`string`, required) The unique ID of the project to access. Find this ID through a call to /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.DeleteEnvSecretTokenBackup



Deletes a secret token backup in a project environment.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **environment\_id** (`integer`, optional) A unique integer identifying the environment (aka team) to target for deletion. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) The Project ID to access for managing secret token backups. Retrieve IDs via /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetProjectEventRestrictions



Retrieve event ingestion restrictions for a project environment.

**Parameters**

-   **environment\_identifier** (`integer`, required) A unique integer identifying the environment (team) for which to retrieve event restrictions.
-   **project\_identifier** (`string`, required) The ID of the project to access. Retrieve it via a call to /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.DemoDataStatus



Check if an environment is generating demo data.

**Parameters**

-   **environment\_id** (`integer`, required) A unique integer value identifying the environment (aka team) for which you want to check demo data status.
-   **project\_identifier** (`string`, required) The unique ID of the project to access. Retrieve ID by calling /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ResetProjectEnvironmentToken



Resets the token for a specified project environment.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **environment\_identifier** (`integer`, optional) A unique integer value identifying the environment or team. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) The ID of the project to access. Retrieve this by calling /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RotateEnvironmentSecretToken



Rotate the secret token for a project environment.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **environment\_id** (`integer`, optional) A unique integer identifying the environment or team to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) Project ID for the environment. Obtainable by calling /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveEventDefinitions



Retrieve event definitions for a specified project.

**Parameters**

-   **project\_id** (`string`, required) The ID of the project to access event definitions. Obtainable via a call to /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveEventDefinition



Retrieve details of a specific event definition by ID.

**Parameters**

-   **event\_definition\_id** (`string`, required) A UUID string identifying the specific event definition to retrieve.
-   **project\_id** (`string`, required) The ID of the project to access. Find this by calling /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateEventDefinition



Update an existing event definition in a project.

**Parameters**

-   **event\_definition\_id** (`string`, required) A UUID string identifying the event definition to update.
-   **project\_id** (`string`, required) Project ID of the project you’re trying to access. Retrieve the ID by calling /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ModifyEventDefinition



Update an event definition in a project.

**Parameters**

-   **event\_definition\_uuid** (`string`, required) A UUID string identifying the event definition to be updated.
-   **project\_identifier** (`string`, required) Project ID to access the specific project in Datadog. Obtain by calling /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.DeleteEventDefinition



Delete an event definition by ID and project.

**Parameters**

-   **event\_definition\_id** (`string`, required) A UUID string that uniquely identifies the event definition to be deleted.
-   **project\_identifier** (`string`, required) Project ID of the target project. Retrieve this ID via /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveEventDefinitionMetrics



Retrieve metrics for a specific event definition.

**Parameters**

-   **event\_definition\_id** (`string`, required) A UUID string identifying the specific event definition.
-   **project\_identifier** (`string`, required) The unique ID of the project to access. Retrieve this via the /api/projects/ endpoint.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveEventDetails



Retrieve details of a specific event.

**Parameters**

-   **event\_id** (`string`, required) The unique identifier for the event you want to retrieve details about.
-   **project\_identifier** (`string`, required) The ID of the project to access. Obtain it with a call to /api/projects/.
-   **response\_format** (`string`, optional) Specifies the format of the response data. Options are ‘csv’ or ‘json’.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveEventValues



Retrieve event values for a specified project.

**Parameters**

-   **project\_id** (`string`, required) Project ID to access specific event data. Obtain by calling /api/projects/.
-   **output\_format** (`string`, optional) Specifies the format of the retrieved event values. Acceptable values are ‘csv’ or ‘json’.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetExperimentHoldouts



Retrieve the list of experiment holdouts for a project.

**Parameters**

-   **project\_id** (`string`, required) The unique identifier of the project for which you want to retrieve experiment holdouts. Obtain this ID by calling the `/api/projects/` endpoint.
-   **initial\_index** (`integer`, optional) The initial index from which to return the results. Used for pagination in retrieving experiment holdouts.
-   **results\_per\_page** (`integer`, optional) Specify the number of results to return per page for the query.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateExperimentHoldout



Create a new experiment holdout within a project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_id** (`string`, optional) The unique identifier for the project you want to access. Obtainable via a call to /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetExperimentHoldout



Retrieve details of a specific experiment holdout from a project.

**Parameters**

-   **experiment\_holdout\_id** (`integer`, required) A unique integer value identifying the specific experiment holdout.
-   **project\_identifier** (`string`, required) The ID of the project you want to access. Retrieve this ID using a call to /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateExperimentHoldout



Update an experiment holdout in a specific project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **experiment\_holdout\_id** (`integer`, optional) Unique integer identifying the specific experiment holdout to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) The ID of the project to access for updating the experiment holdout. Retrieve this by calling the /api/projects/ endpoint. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ModifyExperimentHoldout



Update the details of an experiment holdout.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **experiment\_holdout\_id** (`integer`, optional) The unique integer identifier for the experiment holdout you wish to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **target\_project\_id** (`string`, optional) Specify the ID of the project you want to access. Retrieve the ID using /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.DeleteExperimentHoldout



Delete an experiment holdout from a project.

**Parameters**

-   **experiment\_holdout\_id** (`integer`, required) A unique integer identifying the experiment holdout to be deleted.
-   **project\_id** (`string`, required) The ID of the project from which to delete the experiment holdout. Obtainable via /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ListExperimentSavedMetrics



Retrieve saved metrics for an experiment in a project.

**Parameters**

-   **project\_id** (`string`, required) The ID of the project to access. Obtain the ID by calling /api/projects/.
-   **initial\_result\_index** (`integer`, optional) The starting index for returning results, used for pagination.
-   **results\_per\_page** (`integer`, optional) Specify the number of metric results to return per page.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateExperimentSavedMetrics



Create and save metrics for an experiment in a project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_id** (`string`, optional) The ID of the project for which you want to create and save experiment metrics. Obtain from /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveExperimentMetrics



Retrieve saved experiment metrics from a project.

**Parameters**

-   **experiment\_metric\_id** (`integer`, required) A unique integer value identifying the experiment’s saved metric to retrieve.
-   **project\_identifier** (`string`, required) The ID of the project for which you want to retrieve saved experiment metrics. Obtain this by making a call to /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateExperimentSavedMetrics



Update saved metrics for a specific experiment in Datadog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **experiment\_metric\_id** (`integer`, optional) A unique integer identifying the specific experiment saved metric to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) The ID of the Datadog project containing the experiment whose metrics you wish to update. Obtain this by calling /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateExperimentMetrics



Update saved metrics for a specific experiment.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **experiment\_metric\_id** (`integer`, optional) A unique integer identifying the experiment saved metric to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) The ID of the project to access. Obtain it via a call to /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.DeleteSavedMetric



Deletes a saved experimental metric.

**Parameters**

-   **experiment\_metric\_id** (`integer`, required) A unique integer identifying the experiment saved metric to delete.
-   **project\_id** (`string`, required) The ID of the project containing the saved metric to delete. Obtainable via the /api/projects/ endpoint.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ListPosthogExperiments



Retrieve a list of experiments from a Datadog project.

**Parameters**

-   **project\_id** (`string`, required) The ID of the Datadog project to access. Obtainable via a call to /api/projects/.
-   **page\_result\_limit** (`integer`, optional) The number of experiment results to return per page. Specify as an integer.
-   **start\_index** (`integer`, optional) The index from which to start returning results. Used for pagination.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateExperimentInProject



Create a new experiment within a specified project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_id\_for\_experiment\_creation** (`string`, optional) The ID of the project where the experiment will be created. Obtain this by calling the /api/projects/ endpoint. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetProjectExperimentDetails



Retrieve details of a specific experiment within a project.

**Parameters**

-   **experiment\_id** (`integer`, required) A unique integer identifying the experiment to retrieve details for.
-   **project\_id** (`string`, required) The ID of the project to access. Use /api/projects/ to find the ID.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateExperiment



Update details of a specific experiment in a project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **experiment\_id** (`integer`, optional) A unique integer that identifies the experiment to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) The unique string ID of the project to be accessed. Retrieve by calling /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateExperimentDetails



Partially update experiment details in a project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **experiment\_id** (`integer`, optional) A unique integer value identifying the experiment to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) Provide the ID of the project you want to access. Use the /api/projects/ endpoint to find this ID. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.DeleteExperiment



Delete an experiment by setting it as deleted.

**Parameters**

-   **experiment\_id** (`integer`, required) A unique integer value used to identify the experiment to be marked as deleted.
-   **project\_id** (`string`, required) The unique ID of the project containing the experiment to be deleted. Obtainable via the /api/projects/ endpoint.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateExposureCohortForExperiment



Create an exposure cohort for an experiment.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **experiment\_id** (`integer`, optional) A unique integer used to identify the specific experiment. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) The unique identifier for the project you’re accessing. Obtain this via a call to /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.DuplicateExperimentPosthog



Create a duplicate of a specific experiment.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **experiment\_id** (`integer`, optional) Unique integer to identify the experiment to duplicate. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) The ID of the project you want to access in Datadog. Obtain this by calling the /api/projects/ endpoint. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateExperimentTimeseriesRecalculation



Initiate recalculation of experiment timeseries data.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **experiment\_id** (`integer`, optional) A unique integer value identifying this experiment for recalculation. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) The unique identifier of the project you want to access for the recalculation. Obtain this by calling /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveExperimentTimeseries



Retrieve timeseries data for an experiment-metric pair.

**Parameters**

-   **experiment\_id** (`integer`, required) A unique integer identifying the experiment to retrieve timeseries data for.
-   **project\_id** (`string`, required) The unique identifier for the project to access. Retrieve the ID with a call to /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ListExperimentsEligibleFeatureFlags



Retrieve feature flags eligible for experiments.

**Parameters**

-   **project\_id** (`string`, required) The unique identifier for the project to access. Use /api/projects/ to find this ID.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveExperimentsFlagStatus



Retrieve status of experiments requiring flag implementation.

**Parameters**

-   **project\_id** (`string`, required) The ID of the project to access for flag implementation status retrieval. Obtain using /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ListProjectExports



Retrieve a list of exports for a given project ID.

**Parameters**

-   **project\_id** (`string`, required) The ID of the project to access exports for. Use /api/projects/ to find the project ID.
-   **results\_per\_page** (`integer`, optional) Number of results to return per page for export details.
-   **start\_index** (`integer`, optional) The initial index to start returning results from. Use this to paginate results.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateExports



Initiate the export process for Datadog projects.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_id** (`string`, optional) The unique identifier of the Datadog project to initiate exports. Obtainable via a call to /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveProjectExport



Retrieve data of a specific project export.

**Parameters**

-   **export\_id** (`integer`, required) Unique integer to identify the exported asset.
-   **project\_id** (`string`, required) The ID of the project to access. Use /api/projects/ to find the project ID.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveExportedContent



Retrieve exported content from a specific project.

**Parameters**

-   **exported\_asset\_id** (`integer`, required) A unique integer identifying the exported asset.
-   **project\_identifier** (`string`, required) The ID of the project you want to access. Use /api/projects/ to find the project ID.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ListFeatureFlags



Retrieve feature flags for a specified project.

**Parameters**

-   **project\_identifier** (`string`, required) The identifier for the project to access feature flags. Retrieve using /api/projects/.
-   **exclude\_feature\_flag\_keys** (`string`, optional) A JSON-encoded list of feature flag keys to exclude from the results. Useful for filtering.
-   **feature\_flag\_search\_term** (`string`, optional) Search for a feature flag by its key or name, case insensitive.
-   **filter\_by\_active\_status** (`string`, optional) Filter feature flags by active status. Use ‘STALE’, ‘false’, or ‘true’.
-   **filter\_by\_evaluation\_runtime** (`string`, optional) Filter feature flags by their evaluation runtime. Options: ‘both’, ‘client’, ‘server’.
-   **filter\_by\_tags** (`string`, optional) A JSON-encoded list of tag names to filter feature flags by. Use this to specify which tags should be included in the results.
-   **flag\_type** (`string`, optional) Specifies the feature flag type to filter results. Options are ‘boolean’, ‘experiment’, or ‘multivariant’.
-   **initial\_creator\_user\_id** (`string`, optional) The User ID that initially created the feature flag. It helps filter feature flags created by a specific user.
-   **results\_offset\_index** (`integer`, optional) The starting index for the results to be returned.
-   **results\_per\_page** (`integer`, optional) Specify the number of feature flags to return for each page of results.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateFeatureFlag



Create a new feature flag in a specific project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_unique\_identifier** (`string`, optional) The unique identifier for the project to access. Retrieve it by calling the /api/projects/ endpoint. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveFeatureFlags



Retrieve details of a specific feature flag.

**Parameters**

-   **feature\_flag\_identifier** (`integer`, required) The unique integer ID that identifies the specific feature flag to retrieve.
-   **project\_id** (`string`, required) ID of the project to access. Retrieve by calling /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ModifyFeatureFlags



Update existing feature flags in a project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **feature\_flag\_id** (`integer`, optional) A unique integer identifying the feature flag to modify. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) The ID of the project you want to access. Retrieve it via a call to /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateFeatureFlags



Update feature flags for a specific project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **feature\_flag\_id** (`integer`, optional) A unique integer value identifying the specific feature flag to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) The unique identifier for the project to access. Obtainable via a call to /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.MarkFeatureFlagDeleted



Mark a feature flag as deleted.

**Parameters**

-   **feature\_flag\_id** (`integer`, required) A unique integer value used to identify the feature flag.
-   **project\_identifier** (`string`, required) Project ID to access a specific project. Retrieve by calling /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveFeatureFlagActivity



Retrieve activity details for a specific feature flag.

**Parameters**

-   **feature\_flag\_id** (`integer`, required) A unique integer identifying the feature flag to retrieve activity for.
-   **project\_identifier** (`string`, required) Unique identifier for the project to access. Obtain from the /api/projects/ endpoint.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateStaticCohortForFeatureFlag



Create a static cohort for a specific feature flag.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **feature\_flag\_id** (`integer`, optional) A unique integer value identifying the specific feature flag to create a static cohort for. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) The ID of the project to access for creating a static cohort for the feature flag. Retrieve via a call to /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateFeatureFlagsDashboard



Create a dashboard for feature flags in a project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **feature\_flag\_id** (`integer`, optional) A unique integer value identifying this feature flag for creation or modification. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) The ID of the project to access. Retrieve this by calling /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateFeatureFlagUsageDashboard



Create or manage feature flag usage dashboards.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **feature\_flag\_id** (`integer`, optional) A unique integer identifying this feature flag for the usage dashboard. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) The ID of the project you want to access. Retrieve it via a call to /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveFeatureFlagConfig



Retrieve remote configuration of a specific feature flag.

**Parameters**

-   **feature\_flag\_identifier** (`integer`, required) The unique integer that identifies the specific feature flag to retrieve.
-   **project\_identifier** (`string`, required) The ID of the project to access. Use /api/projects/ to find the ID.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveFeatureFlagStatus



Retrieve the status of a specific feature flag for a project.

**Parameters**

-   **feature\_flag\_id** (`integer`, required) A unique integer identifying the feature flag whose status you want to retrieve.
-   **project\_identifier** (`string`, required) Project ID to access a specific project. Obtain by calling /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveFeatureFlagsActivity



Retrieve feature flags activity for a specific project.

**Parameters**

-   **project\_identifier** (`string`, required) Unique identifier for the project to retrieve feature flags activity. Obtainable via /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetFeatureFlagKeys



Retrieve feature flag keys using a list of IDs.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_id** (`string`, optional) The ID of the project to access. Obtain the ID by calling /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveFeatureFlagsEvaluationReasons



Retrieve evaluation reasons for feature flags by project.

**Parameters**

-   **project\_id\_for\_feature\_flags** (`string`, required) The ID of the project to access for retrieving feature flags evaluation reasons. Obtainable via /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveLocalFeatureFlags



Retrieve feature flags for local evaluation in a project.

**Parameters**

-   **project\_identifier** (`string`, required) The ID of the project to access feature flags for. Retrieve this ID via /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetFeatureFlags



Retrieve current feature flags for a user’s project.

**Parameters**

-   **project\_id** (`string`, required) The ID of the project to access feature flags for. Make a call to /api/projects/ to find the project’s ID.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateFeatureFlagBlastRadius



Create a feature flag blast radius for a project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **feature\_flag\_project\_id** (`string`, optional) The Project ID for accessing the desired project. Obtainable via the /api/projects/ endpoint. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ListFileSystems



Fetches the list of file systems for a given project.

**Parameters**

-   **project\_id** (`string`, required) The ID of the project for which you want to list file systems. Obtain by calling /api/projects/.
-   **results\_per\_page** (`integer`, optional) Number of results to return per page for file system listings.
-   **search\_term** (`string`, optional) A search term to filter the list of file systems.
-   **start\_index** (`integer`, optional) The initial index from which to return the file system results.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateProjectFileSystem



Create a file system for a specified project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_id** (`string`, optional) The ID of the project for which you want to create a file system. Retrieve this ID by calling `/api/projects/`. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveFileSystemInfo



Retrieve detailed file system information for a project.

**Parameters**

-   **file\_system\_id** (`string`, required) A UUID string identifying the file system to retrieve details for.
-   **project\_id** (`string`, required) The ID of the project to access. Get this ID by calling the /api/projects/ endpoint.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateFileSystem



Updates a file system in a specific project by ID.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **file\_system\_id** (`string`, optional) A UUID string uniquely identifying the file system to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) The identifier for the project you want to access. Use the project ID to specify which project’s file system to update. Retrieve the ID by calling the /api/projects/ endpoint if needed. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ModifyFileSystem



Update specific details of a file system.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **file\_system\_id** (`string`, optional) A UUID string used to identify the specific file system to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) The unique ID of the project. Use /api/projects/ to find this ID. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.DeleteFileSystem



Delete a specified file system in a project.

**Parameters**

-   **file\_system\_id** (`string`, required) A UUID string identifying the file system to delete.
-   **project\_id** (`string`, required) Provide the Project ID of the project you’re trying to access. Retrieve the ID with a /api/projects/ call.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.FetchFolderFileCount



Get the count of all files in a folder.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **file\_system\_uuid** (`string`, optional) A UUID string that uniquely identifies the file system for which you want to get the file count. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) Project ID to access the project for counting files. Obtain via /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateFileSystemLink



Create a link for a file system in a specific project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **file\_system\_id** (`string`, optional) A UUID string that uniquely identifies the file system. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) The ID of the project you want to access. Obtain it by calling /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.MoveFileSystemEntry



Moves a file system entry to a new location within the project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **file\_system\_id** (`string`, optional) A UUID string identifying the file system to be moved within the project. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **target\_project\_id** (`string`, optional) The Project ID of the target project where the file system entry will be moved. Obtain this ID from the /api/projects/ endpoint if necessary. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.FetchFileCountByPath



Retrieve the count of files in a specified folder.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_identifier** (`string`, optional) The ID of the project to access. Retrieve by calling /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateFileSystemLogView



Create a new file system log view for a project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **target\_project\_id** (`string`, optional) The ID of the project for which you want to create a file system log view. Use the API to retrieve the project ID if unknown. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveUnfiledFiles



Retrieve unfiled files for a specific project.

**Parameters**

-   **project\_id** (`string`, required) The unique identifier for the project whose unfiled files you want to retrieve. Make a call to /api/projects/ to find this ID.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetFileShortcuts



Retrieve a list of file system shortcuts for a given project.

**Parameters**

-   **project\_id** (`string`, required) The ID of the project to access file system shortcuts. Obtain this ID via /api/projects/.
-   **initial\_result\_index** (`integer`, optional) The zero-based index from which to start returning results. Use to manage pagination.
-   **results\_per\_page** (`integer`, optional) Specifies the number of results to return per page when retrieving file system shortcuts.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.FileSystemShortcutCreate



Create a file system shortcut in a specific project.

**Parameters**

-   **file\_system\_shortcut\_path** (`string`, required) The file path where the shortcut will be created. It should be a valid string path within the project.
-   **project\_id** (`string`, required) The ID of the project to access. Retrieve project IDs by calling /api/projects/.
-   **shortcut\_creation\_timestamp** (`string`, required) The timestamp when the shortcut was created, in string format. Typically, in ISO 8601 format.
-   **shortcut\_id** (`string`, required) A unique identifier for the file system shortcut being created.
-   **reference\_id** (`string`, optional) A unique reference string for the shortcut. This identifies the shortcut within the project.
-   **shortcut\_type** (`string`, optional) Specifies the type of file system shortcut to be created. Accepted values could include types like ‘link’, ‘alias’, or ‘junction’.
-   **shortcut\_url** (`string`, optional) The URL reference for the file system shortcut to be created.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetFileSystemShortcut



Retrieve details of a file system shortcut.

**Parameters**

-   **project\_id** (`string`, required) The ID of the project to access. Use the /api/projects/ endpoint to find the ID if needed.
-   **shortcut\_id** (`string`, required) A UUID string to identify the file system shortcut to retrieve details for.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ModifyFileSystemShortcut



Update a file system shortcut in a specified project.

**Parameters**

-   **creation\_timestamp** (`string`, required) A string representing the creation date and time of the shortcut. Format: ISO 8601 (e.g., ‘2021-09-15T13:45:30Z’).
-   **file\_system\_path** (`string`, required) The file system path of the shortcut to be updated. Provide the exact path within the project.
-   **file\_system\_shortcut\_id** (`string`, required) The UUID string identifying the file system shortcut to be updated.
-   **project\_id** (`string`, required) The unique ID of the project you want to update the file system shortcut for. Retrieve this ID by calling /api/projects/.
-   **shortcut\_id** (`string`, required) The unique identifier for the file system shortcut to be updated.
-   **file\_system\_shortcut\_href** (`string`, optional) The URL of the file system shortcut to be updated. It specifies the link to the resource.
-   **reference\_identifier** (`string`, optional) A unique string identifier for the file system shortcut to be updated. This is used to specify which shortcut you are modifying.
-   **shortcut\_type** (`string`, optional) Specifies the type of the file system shortcut to update. Accepted values may vary based on use case.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateFileSystemShortcut



Update a file system shortcut in a project.

**Parameters**

-   **project\_id** (`string`, required) The ID of the project you want to access. Retrieve it by calling /api/projects/.
-   **file\_system\_shortcut\_id** (`string`, optional) A UUID identifying the file system shortcut to be updated.
-   **file\_system\_shortcut\_link** (`string`, optional) The URL or path to link the file system shortcut to. This should be a valid URL or path, depending on the system configuration.
-   **reference\_identifier** (`string`, optional) The reference identifier for the file system shortcut to be updated. This is a string value required to specify which shortcut you are targeting for the update.
-   **shortcut\_creation\_date** (`string`, optional) ISO 8601 format string representing when the shortcut was created.
-   **shortcut\_id** (`string`, optional) The unique identifier for the file system shortcut to be updated. This ID specifies which shortcut will have its details modified.
-   **shortcut\_path** (`string`, optional) The file path for the shortcut to be updated. This should specify the exact location within the file system where the shortcut is located.
-   **shortcut\_type** (`string`, optional) Specify the type of the file system shortcut, such as ‘symbolic’ or ‘hard’.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RemoveFileSystemShortcut



Delete a file system shortcut from a project.

**Parameters**

-   **file\_system\_shortcut\_uuid** (`string`, required) A UUID string identifying the file system shortcut to delete.
-   **project\_identifier** (`string`, required) The Project ID to access. Retrieve it by calling /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetFeatureFlagValues



Retrieve possible values for a feature flag.

**Parameters**

-   **project\_id** (`string`, required) The unique ID of the project to access. Obtain this by calling /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ListGroupsByType



Retrieve all groups for a specified group type.

**Parameters**

-   **group\_type\_to\_list** (`integer`, required) Specify the type of the group to retrieve by providing the index.
-   **project\_id** (`string`, required) Project ID of the target project. It can be found by calling /api/projects/.
-   **search\_group\_name** (`string`, required) Search for a group by its name. Provide keywords or partial names to filter the group list.
-   **pagination\_cursor\_value** (`string`, optional) Provide the pagination cursor value to navigate through paginated results.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateProjectGroup



Create a new group in a specified project.

**Parameters**

-   **group\_identifier\_key** (`string`, required) A unique string identifier for the new group being created within a project. This key should be distinct to avoid conflicts with existing groups.
-   **group\_type\_identifier** (`integer`, required) An integer specifying the type of group to create within the project.
-   **project\_identifier** (`string`, required) The ID of the project where the new group will be created. Use /api/projects/ to find the ID.
-   **group\_properties** (`string`, optional) Specify the properties of the group you want to create. Provide this as a JSON string with property keys and values.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveGroupActivity



Fetches activity data for specified project groups.

**Parameters**

-   **group\_type\_id** (`integer`, required) The numeric identifier for the group type to retrieve activity data.
-   **project\_identifier** (`string`, required) Project ID to access the specific group activity. Find this ID via the /api/projects/ endpoint.
-   **user\_id\_for\_group\_retrieval** (`string`, required) Specify the user ID to find associated groups for activity retrieval.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.DeleteGroupProperty



Delete a group property in a Datadog project.

**Parameters**

-   **group\_identifier\_key** (`string`, required) The unique identifier key of the group from which the property will be deleted. This is required to specify the exact group within the project.
-   **group\_index\_type** (`integer`, required) An integer representing the index of the group type to delete a property from.
-   **group\_key\_for\_deletion** (`string`, required) The unique key identifying the group from which the property will be deleted.
-   **group\_type\_index** (`integer`, required) An integer specifying the group type to find within a project for property deletion.
-   **project\_id** (`string`, required) The ID of the Datadog project for accessing and managing group properties. To find this ID, make a call to /api/projects/.
-   **property\_creation\_date** (`string`, required) The timestamp when the group property was created. Use ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ).
-   **group\_property\_key** (`string`, optional) The key of the group property to be deleted from the Datadog project.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveProjectGroups



Retrieve group details for a specific project.

**Parameters**

-   **group\_key\_to\_find** (`string`, required) Specify the key of the group you want to find. This is used to identify the specific group within the project.
-   **group\_type\_index** (`integer`, required) Specify the integer index for the group type you want to find within a project.
-   **project\_id** (`string`, required) The unique identifier for the project to access group details. Obtainable via the /api/projects/ endpoint.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveGroupPropertyDefinitions



Retrieve group property definitions for a project.

**Parameters**

-   **project\_id** (`string`, required) The ID of the project to access. Obtainable via a call to /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveGroupPropertyValues



Retrieve property values for groups within a project.

**Parameters**

-   **project\_id** (`string`, required) The ID of the project to access. Obtain it by calling /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveRelatedGroups



Retrieve related groups for a specific project in Datadog.

**Parameters**

-   **group\_type\_index** (`integer`, required) The index specifying the type of group to find.
-   **project\_id** (`string`, required) The ID of the project to access. Obtainable via the /api/projects/ endpoint.
-   **user\_id\_to\_find\_groups** (`string`, required) The ID of the user to find related groups for within a specified project. It should be a string value.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateGroupProperty



Update a property of a group within a project.

**Parameters**

-   **group\_identifier** (`string`, required) Specify the unique key of the group to locate and update within the project.
-   **group\_identifier\_key** (`string`, required) The unique key identifying the group to update. This key ensures that the correct group is modified.
-   **group\_property\_creation\_date** (`string`, required) The date and time when the group property was created. Use ISO 8601 format, e.g., ‘2023-10-05T14:48:00Z’.
-   **group\_type\_index** (`integer`, required) Specify the integer index of the group type to identify the group.
-   **index\_of\_group\_type** (`integer`, required) An integer representing the index of the group type to update. Specify the correct index to modify the desired group type within the project.
-   **project\_id** (`string`, required) The unique ID of the project to access. Retrieve it by calling /api/projects/.
-   **group\_properties\_value** (`string`, optional) The properties or attributes to update for the specified group in the project. This should be a string describing the desired changes.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ListGroupTypes



Retrieve list of group types for a specific project.

**Parameters**

-   **project\_identifier** (`string`, required) The unique identifier for the project you want to access. Obtain this by calling /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.DeleteGroupType



Delete a specified group type in a project.

**Parameters**

-   **group\_type\_index** (`integer`, required) Index of the group type to be deleted. Use an integer value to specify the group type.
-   **project\_id** (`string`, required) The ID of the project you want to access. Obtain this ID by calling /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetGroupTypeMetrics



Retrieve metrics for a specific group type in a project.

**Parameters**

-   **group\_type\_index** (`integer`, required) The index of the group type for which to retrieve metrics. This identifies the specific group type within the project.
-   **project\_identifier** (`string`, required) String representing the Project ID to access the desired project in Datadog. Obtain it through a call to /api/projects/.
-   **results\_offset** (`integer`, optional) The starting index for returning results, used for pagination.
-   **results\_per\_page** (`integer`, optional) Specifies the number of results to return per page.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateGroupTypeMetric



Create a new metric for a specific group type.

**Parameters**

-   **group\_type\_index** (`integer`, required) An integer representing the index of the group type to which a new metric will be added.
-   **group\_type\_metric\_id** (`string`, required) The unique identifier for the metric you wish to create. It should be a string value.
-   **metric\_filters** (`string`, required) Optional filters to apply when creating the group type metric. It accepts a string of filter criteria to narrow down the data.
-   **metric\_name** (`string`, required) The name of the metric to be created for the group type. This should be a descriptive and unique identifier that helps distinguish this metric from others.
-   **project\_id** (`string`, required) Project ID for accessing the specific project. Make a call to /api/projects/ to retrieve available IDs.
-   **display\_format** (`string`, optional) Specifies how the metric will be displayed: ‘number’ for a numeric display, or ‘sparkline’ for a graphical display.
-   **interval\_in\_days** (`integer`, optional) Specify the interval in days for the metric data aggregation.
-   **metric\_format** (`string`, optional) Specify the format for the metric. Options are ‘numeric’ or ‘currency’.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveGroupTypeMetric



Retrieve metrics for a specific group type.

**Parameters**

-   **group\_type\_index** (`integer`, required) An integer representing the index of the group type to retrieve metrics for.
-   **group\_usage\_metric\_id** (`string`, required) A UUID string identifying this group usage metric to retrieve its details.
-   **project\_id** (`string`, required) The ID of the project to access, retrievable via the /api/projects/ endpoint.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateGroupTypeMetrics



Updates metrics for a specified group type in a project.

**Parameters**

-   **filters\_criteria** (`string`, required) Specify criteria to filter metrics data. Use a string representation of conditions.
-   **group\_type\_index** (`integer`, required) An integer representing the index of the group type to be updated. This is required to identify which group type’s metrics need modification.
-   **group\_usage\_metric\_id** (`string`, required) A UUID string identifying the group usage metric to be updated.
-   **metric\_id** (`string`, required) Unique identifier for the metric to be updated. Expect a string value.
-   **metric\_name** (`string`, required) The name of the metric to update for the specified group type in a project.
-   **project\_id** (`string`, required) The ID of the project you want to access. Use /api/projects/ to find it.
-   **interval\_in\_days** (`integer`, optional) Specify the interval in days for updating metrics.
-   **metric\_display\_type** (`string`, optional) Defines how the metrics are displayed. Options are ‘number’ or ‘sparkline’.
-   **metric\_format\_type** (`string`, optional) Specifies the display format of the metric: ‘numeric’ for numeric values or ‘currency’ for currency representation.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateMetricsForGroupType



Update metrics for a specific group type in a project.

**Parameters**

-   **group\_type\_position** (`integer`, required) The index of the group type to update within the metrics. It should be an integer value.
-   **project\_id** (`string`, required) The unique ID of the project you want to access. Retrieve it by calling /api/projects/.
-   **filter\_conditions** (`string`, optional) Conditions to filter the metrics. Specify as a string, e.g., ‘status:active’.
-   **group\_metric\_name** (`string`, optional) The name of the metric to update for the specified group type.
-   **group\_type\_id** (`string`, optional) The unique identifier for the group type to update metrics for.
-   **group\_usage\_metric\_id** (`string`, optional) A UUID string identifying the group usage metric to update.
-   **metric\_display\_type** (`string`, optional) Defines how the metric should be displayed: ‘number’ or ‘sparkline’.
-   **metric\_format\_type** (`string`, optional) Specifies the format of the metric. Can be ‘numeric’ or ‘currency’. Choose ‘numeric’ for plain numbers and ‘currency’ for currency representation.
-   **update\_interval\_days** (`integer`, optional) Number of days to set as the interval for updating metrics.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.DeleteGroupTypeMetric



Delete a specific metric from a group type.

**Parameters**

-   **group\_type\_index** (`integer`, required) An integer representing the position of the group type in the list. Specify the exact index to delete the associated metric.
-   **metric\_uuid** (`string`, required) A UUID string identifying the metric to be deleted from the group type.
-   **project\_id** (`string`, required) The ID of the project to access. Retrieve it via the /api/projects/ endpoint.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateGroupDashboard



Update a project’s group detail dashboard.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_id** (`string`, optional) The string representing the Project ID you want to access. Retrieve it via /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateDefaultGroupColumns



Update default columns for group types in a project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_id** (`string`, optional) The unique identifier for the project you want to access. Retrieve it by calling the /api/projects/ endpoint. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateGroupTypeMetadata



Updates metadata for group types in a project.

**Parameters**

-   **project\_identifier** (`string`, required) Project ID to access a specific project. Use /api/projects/ to find the ID.
-   **default\_columns** (`array[string]`, optional) An array of strings representing the default columns for the group type metadata. Each string specifies a column name to be included by default.
-   **detail\_dashboard\_id** (`integer`, optional) The integer ID of the detail dashboard associated with the group type.
-   **group\_type\_creation\_date** (`string`, optional) The creation date of the group type in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ).
-   **group\_type\_identifier** (`string`, optional) The identifier for the group type to update metadata for. Provide a unique string value that represents the group type within the project.
-   **group\_type\_index** (`integer`, optional) An integer representing the index of the group type you want to update within the project. It identifies which specific group type’s metadata is to be modified.
-   **group\_type\_name\_plural** (`string`, optional) The plural name for the group type to be updated. This should reflect the plural form used in the project metadata.
-   **singular\_group\_name** (`string`, optional) The singular name to be used for a specific group type. This is used for clear identification and communication.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ListHogFunctions



Retrieve a list of hog functions for a project.

**Parameters**

-   **project\_identifier** (`string`, required) The unique identifier for the project you want to access. Obtain via /api/projects/.
-   **created\_at** (`string`, optional) Specify the creation date for filtering hog functions. Use ISO 8601 format (YYYY-MM-DD).
-   **created\_by\_user\_id** (`integer`, optional) The unique integer ID of the user who created the resource.
-   **function\_id** (`string`, optional) The unique identifier for the hog function to retrieve details for.
-   **hog\_function\_types** (`array[string]`, optional) A list of hog function types, specified as strings. Supports multiple values.
-   **include\_only\_enabled\_functions** (`boolean`, optional) Include only enabled functions. Set to true to include enabled functions, false to include all.
-   **result\_offset** (`integer`, optional) The starting index for the returned results, used for pagination.
-   **results\_per\_page** (`integer`, optional) Integer specifying the number of results to return per page.
-   **search\_term** (`string`, optional) A search term used to filter the list of hog functions based on specific criteria.
-   **updated\_timestamp** (`string`, optional) The timestamp for the latest update of the hog function. Use an ISO 8601 format.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateHogFunction



Log a new file system view for a specified project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_identifier** (`string`, optional) The unique ID of the project to access. Retrieve this by calling /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveProjectHogFunction



Retrieve details of a hog function in a project.

**Parameters**

-   **hog\_function\_id** (`string`, required) A UUID string identifying the specific hog function to retrieve.
-   **project\_identifier** (`string`, required) The unique ID of the project you want to access. Retrieve it via the /api/projects/ endpoint.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ModifyHogFunctions



Update and track file system views for hog functions.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **hog\_function\_uuid** (`string`, optional) A UUID string to uniquely identify the hog function to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) The ID of the desired project. Retrieve via a call to /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateHogFunctionViews



Log and update views for hog functions in a project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **hog\_function\_uuid** (`string`, optional) A UUID string identifying the hog function to log a view for. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) The unique ID of the project. Retrieve by calling /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RemoveHogFunction



Marks a HOG function as deleted in a Datadog project.

**Parameters**

-   **hog\_function\_id** (`string`, required) A UUID string identifying the HOG function to be marked as deleted.
-   **project\_id\_for\_deletion** (`string`, required) The unique identifier of the project where the HOG function resides. Obtain by calling /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.TrackFileSystemView



Log and track a file system view on resource access.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **hog\_function\_uuid** (`string`, optional) A UUID string identifying the hog function to track. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) A string representing the Project ID of the project to access. Retrieve this ID by calling /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.TrackFsView



Logs a view each time a resource is accessed via GET.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **hog\_function\_uuid** (`string`, optional) A UUID string identifying this hog function. Required for logging views. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) The ID of the project you are accessing. Retrieve it via /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveLogsForFileSystemViews



Retrieves logs for tracked file system views.

**Parameters**

-   **hog\_function\_uuid** (`string`, required) A UUID string identifying the specific hog function to retrieve logs for.
-   **project\_identifier** (`string`, required) A string representing the Project ID for access. Call /api/projects/ to find the ID.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.TrackFileSystemViews



Retrieve metrics for tracking file system views.

**Parameters**

-   **hog\_function\_id** (`string`, required) A UUID string identifying the specific hog function for tracking views.
-   **project\_identifier** (`string`, required) The ID of the project to access. Retrieve via /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetHogFunctionMetricsTotals



Retrieve total metrics for a specified hog function.

**Parameters**

-   **hog\_function\_uuid** (`string`, required) A UUID string identifying the specific hog function for which metrics are being retrieved.
-   **project\_identifier** (`string`, required) Project ID for accessing the specific project. Obtainable via a call to /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetHogFunctionIcon



Retrieve the icon for hog functions in a specific project.

**Parameters**

-   **project\_id** (`string`, required) The ID of the project for which you want to retrieve the hog function icon. Obtain the ID via /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveProjectIcons



Retrieve and log views of project icons.

**Parameters**

-   **project\_identifier** (`string`, required) The ID of the project you want to access. Retrieve it using /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateHogfunctionOrder



Modify the order of execution for HogFunctions.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_identifier** (`string`, optional) ID of the project to access. Obtainable via a call to /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ListProjectInsights



Retrieve insights list for a specific project.

**Parameters**

-   **project\_id** (`string`, required) Project ID to access specific insights. Obtain it via /api/projects/.
-   **creator\_user\_id** (`integer`, optional) The user ID of the creator of the insights. Provide this as an integer value to filter insights by the creator.
-   **insights\_refresh\_mode** (`string`, optional) Determine how aggressively to refresh insights: ‘force\_cache’, ‘blocking’, ‘async’, ‘lazy\_async’, ‘force\_blocking’, or ‘force\_async’.
-   **project\_short\_id** (`string`, optional) The short identifier for the project within Datadog. Used to specify which project’s insights to retrieve.
-   **response\_format** (`string`, optional) Specifies the format of the response, either ‘csv’ or ‘json’. Choose based on your output preference.
-   **results\_offset\_index** (`integer`, optional) The starting index for returning results from the insights list.
-   **results\_per\_page** (`integer`, optional) Specify the number of insights to return per page.
-   **return\_basic\_metadata\_only** (`boolean`, optional) If true, return only basic insight metadata without results for a faster response.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateInsightEntry



Logs a new file system view entry for insights.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_identifier** (`string`, optional) The ID of the project for which you want to log a file system view. Obtain it using the /api/projects/ endpoint. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **response\_format** (`string`, optional) Specify the format of the response, either ‘csv’ or ‘json’. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ListInsightSharing



Retrieve sharing details for a specific insight.

**Parameters**

-   **insight\_identifier** (`integer`, required) The unique identifier for the specific insight you want to retrieve sharing details for. This is an integer value that uniquely represents an insight within the project.
-   **project\_id** (`string`, required) The ID of the project to access. Retrieve via the /api/projects/ endpoint.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateInsightsSharingPassword



Create a new password for insights sharing configuration.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **insight\_identifier** (`integer`, optional) The numerical ID representing the specific insight to create a password for. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) The ID of the project you want to access. Obtain it by calling /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.DeletePasswordFromSharingConfig



Delete a password from the sharing configuration of an insight.

**Parameters**

-   **insight\_identifier** (`integer`, required) The unique integer identifier for the insight from which the password is being deleted.
-   **project\_identifier** (`string`, required) The ID of the project to access. Retrieve it via the /api/projects endpoint.
-   **sharing\_password\_id** (`string`, required) The unique ID of the password to be deleted from the sharing configuration.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RefreshInsightSharing



Refresh the sharing settings of an insight.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **insight\_identifier** (`integer`, optional) The unique integer identifier for the insight to refresh sharing settings. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) The Project ID to access. Retrieve it by calling /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveInsightData



Retrieve tracked insights for project file system views.

**Parameters**

-   **insight\_id** (`integer`, required) A unique integer identifying the specific insight to retrieve.
-   **project\_id** (`string`, required) Project ID to access. Obtain it by calling /api/projects/.
-   **dashboard\_context\_id** (`integer`, optional) ID of the dashboard for context-specific insight. Filters and date range from this dashboard will be applied.
-   **output\_format** (`string`, optional) Specifies the format for the retrieved insights data. Options are ‘csv’ or ‘json’.
-   **refresh\_insight\_strategy** (`string`, optional) Defines the strategy for refreshing the insight. Options include ‘force\_cache’, ‘blocking’, ‘async’, ‘lazy\_async’, ‘force\_blocking’, and ‘force\_async’, determining sync/async behavior and cache usage.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateInsights



Update insights tracking view for a project resource.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **insight\_id** (`integer`, optional) A unique integer identifying the insight to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) The ID of the project to access. Retrieve it by calling /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **output\_format** (`string`, optional) Specify the format of the response data. Accepts ‘csv’ or ‘json’. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateInsightsViewLog



Log a new view for a specific insight resource.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **insight\_id** (`integer`, optional) A unique integer value to identify the specific insight. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) Project ID to access the required insight. Obtainable via a call to /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **response\_format** (`string`, optional) Specifies the format of the response. Acceptable values are ‘csv’ or ‘json’. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.DeleteInsight



Marks an insight as deleted in a project.

**Parameters**

-   **insight\_id** (`integer`, required) A unique integer identifying the insight to be marked as deleted.
-   **project\_identifier** (`string`, required) Project ID to access and mark an insight as deleted. Use /api/projects/ to find the ID.
-   **response\_format** (`string`, optional) Specifies the format of the response data. Options are ‘csv’ or ‘json’.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetInsightsActivity



Retrieve logs of insight views for a project.

**Parameters**

-   **insight\_id** (`integer`, required) A unique integer identifying the specific insight to retrieve logs for.
-   **project\_id\_for\_access** (`string`, required) Project ID to access the desired project. Retrieve ID via /api/projects/ if unknown.
-   **response\_format** (`string`, optional) Specify the format of the response: ‘csv’ or ‘json’.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveInsightsActivity



Retrieve insights activity logs for a specified project.

**Parameters**

-   **project\_id** (`string`, required) The ID of the project to access insights activity data. Obtain by calling /api/projects/.
-   **output\_format** (`string`, optional) Specify the format for the output: ‘csv’ or ‘json’.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.StopInsightProcess



Cancel the ongoing insight creation process for a project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_identifier** (`string`, optional) The unique identifier for the project. Use /api/projects/ to find it. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **response\_format** (`string`, optional) The desired format of the response, either ‘csv’ or ‘json’. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveRecentlyViewedInsights



Retrieve details of the last 5 insights viewed by the user.

**Parameters**

-   **project\_id** (`string`, required) Project ID for accessing the specific project insights. Obtainable via `/api/projects/`.
-   **response\_format** (`string`, optional) Specify the format of the returned data. Options are ‘csv’ or ‘json’.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RecordInsightViews



Update the view timestamps for specified insights.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_id** (`string`, optional) The ID of the project to access. Retrieve the ID by calling /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **response\_format** (`string`, optional) Specifies the format of the response. Choose between ‘csv’ or ‘json’. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ListProjectIntegrations



Retrieve a list of integrations for a specific project.

**Parameters**

-   **project\_id** (`string`, required) Specify the Project ID to retrieve its associated integrations. You can find this ID by calling /api/projects/.
-   **results\_per\_page** (`integer`, optional) Specify the number of results to return per page.
-   **starting\_index\_for\_results** (`integer`, optional) The index to start returning results from, used for pagination.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateProjectIntegration



Creates a new integration for a specific project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_id** (`string`, optional) The unique identifier for the project. Retrieve this by calling /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetIntegrationDetails



Retrieve integration details for a specific project.

**Parameters**

-   **integration\_id** (`integer`, required) A unique integer identifying this integration.
-   **project\_id** (`string`, required) The ID of the project for which integration details are needed. Obtainable via a call to /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.DeleteIntegration



Delete an existing integration for a project.

**Parameters**

-   **integration\_id** (`integer`, required) The unique integer used to identify the specific integration to be deleted.
-   **project\_id** (`string`, required) The Project ID needed to access the project. Retrieve it by calling /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetIntegrationChannels



Retrieve integration channels for a specific project and ID.

**Parameters**

-   **integration\_id** (`integer`, required) A unique integer identifying the specific integration in Datadog.
-   **project\_identifier** (`string`, required) Project identifier for accessing a specific project. Use the /api/projects/ endpoint to find the ID if needed.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetClickupLists



Retrieve ClickUp lists for a specific project integration.

**Parameters**

-   **integration\_id** (`integer`, required) A unique integer to identify the integration for retrieving ClickUp lists.
-   **project\_identifier** (`string`, required) The ID of the project to access. Obtain this by calling /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveClickupSpaces



Retrieve ClickUp spaces for a specific integration.

**Parameters**

-   **integration\_id** (`integer`, required) A unique integer identifying the integration to retrieve associated ClickUp spaces.
-   **project\_id** (`string`, required) The ID of the project to access spaces for. Obtainable via /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveClickupWorkspaces



Retrieve ClickUp workspaces for a project integration.

**Parameters**

-   **integration\_unique\_identifier** (`integer`, required) A unique integer identifying the integration for retrieving ClickUp workspaces.
-   **project\_id** (`string`, required) Project ID to access specific ClickUp workspaces. Obtain the ID by calling /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateEmailVerificationIntegration



Initiate an email verification integration for a project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **integration\_id** (`integer`, optional) A unique integer identifying the integration to set up email verification for. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) The ID of the project for which the email verification integration is to be initiated. Obtain this ID by calling the /api/projects/ endpoint. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.FetchGithubReposForIntegration



Retrieve GitHub repositories for a specified integration.

**Parameters**

-   **integration\_id** (`integer`, required) A unique integer representing the integration whose associated GitHub repositories will be retrieved.
-   **project\_identifier** (`string`, required) The ID of the project you wish to access in Datadog. Obtainable via a call to /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetGoogleAccessibleAccounts



Retrieve accessible Google accounts for integration.

**Parameters**

-   **integration\_id** (`integer`, required) A unique integer identifying the specific integration.
-   **project\_id** (`string`, required) The ID of the project you want to access. Retrieve this ID by making a call to /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveGoogleConversionData



Retrieve Google conversion actions for a specific project.

**Parameters**

-   **integration\_id** (`integer`, required) A unique integer identifying the integration for which to retrieve Google conversion actions.
-   **project\_id** (`string`, required) The ID of the project you wish to access. Use this to retrieve specific Google conversion actions. You can find the project ID by calling /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveLinearTeams



Fetch Linear team details for a specific integration.

**Parameters**

-   **integration\_id** (`integer`, required) A unique integer identifying the specific integration to retrieve Linear team details.
-   **project\_identifier** (`string`, required) The ID of the project to access. Obtain it through the /api/projects/ endpoint.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveLinkedinAdsAccounts



Retrieve LinkedIn Ads accounts for a project integration.

**Parameters**

-   **integration\_id** (`integer`, required) A unique integer identifying the LinkedIn integration for the project.
-   **project\_id** (`string`, required) Unique ID of the project for accessing LinkedIn Ads accounts. Obtainable by calling /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetLinkedinAdsConversionRules



Retrieve LinkedIn Ads conversion rules for a specific project.

**Parameters**

-   **integration\_id** (`integer`, required) A unique integer value identifying the LinkedIn integration.
-   **project\_id** (`string`, required) The ID of the project to access LinkedIn Ads conversion rules. Retrieve via /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveTwilioPhoneNumbers



Retrieve Twilio phone numbers for a specific integration.

**Parameters**

-   **integration\_id** (`integer`, required) A unique integer value identifying this Twilio integration to retrieve phone numbers for.
-   **project\_id\_for\_twilio\_integration** (`string`, required) The ID of the project to access Twilio phone numbers. Obtainable via /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetIntegrationAuthorization



Retrieve integration authorization details for a project.

**Parameters**

-   **project\_identifier** (`string`, required) The unique ID of the project to access integration authorization details. Obtainable via /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateChatCompletion



Create a chat completion using OpenAI or compatible models.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_identifier** (`string`, optional) The unique identifier for the project to access. Retrieve via a call to /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **response\_format** (`string`, optional) Specify the format of the chat completion response. Possible values are ‘json’ or ‘txt’. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateMessageWithClaude



Create a message using Anthropic’s Claude models.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_identifier** (`string`, optional) The ID of the project you want to access. Retrieve this by calling /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **message\_format** (`string`, optional) Specify the format of the message. Options are ‘json’ or ‘txt’. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveLogAttributes



Retrieve log attributes for a specific project.

**Parameters**

-   **project\_id** (`string`, required) The ID of the project to access. Obtainable via the /api/projects/ endpoint.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateLogQuery



Initiate a logs query for a specific project.

**Parameters**

-   **project\_id** (`string`, required) The unique Project ID for accessing the desired project in Datadog. Obtain by calling /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateLogsSparkline



Create a sparkline for project logs.

**Parameters**

-   **project\_id** (`string`, required) The ID of the project for which you want to create a sparkline. Retrieve the ID using the /api/projects/ endpoint before using it here.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveLogValues



Retrieve log values for a specified project.

**Parameters**

-   **project\_id** (`string`, required) The ID of the project to retrieve logs from. Obtain the project ID via a call to /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ListPosthogNotebooks



Retrieve a list of notebooks from Datadog.

**Parameters**

-   **project\_id** (`string`, required) The ID of the project you want to access notebooks for. Use /api/projects/ to find the ID.
-   **filter\_by\_logged\_in\_user** (`string`, optional) Provide any value to filter results to notebooks created by the logged-in user.
-   **filter\_criteria** (`string`, optional) String to filter notebooks. Use colon-separated key-value pairs, separated by space or comma.
-   **filter\_date\_before** (`string`, optional) Filter for notebooks created before this specified date and time. Use ISO 8601 format (e.g., ‘2023-10-01T15:00:00Z’).
-   **filter\_from\_date** (`string`, optional) Filter for notebooks created after this specific date and time. The date should be provided in an appropriate format, such as ISO 8601.
-   **notebook\_creator\_uuid** (`integer`, optional) The UUID of the notebook’s creator. Use this to filter notebooks by their creator.
-   **results\_per\_page** (`integer`, optional) Specifies the number of notebook results to return per page.
-   **starting\_index\_for\_results** (`integer`, optional) The index to start returning results from. This is used for pagination.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateNotebook



Create a new notebook within a specified project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_identifier** (`string`, optional) The ID of the project where the notebook will be created. Use /api/projects/ to find the ID. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveNotebookDetails



Retrieve details of a specific notebook.

**Parameters**

-   **notebook\_short\_id** (`string`, required) The short ID of the notebook you want to retrieve details for. This is required to specify the notebook within the project.
-   **project\_identifier** (`string`, required) Project ID to access specific project details. Obtain via /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateNotebook



Update a specific notebook’s details.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_id** (`string`, optional) The ID of the project you are accessing. Retrieve it via /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **notebook\_short\_id** (`string`, optional) Provide the unique short ID of the notebook to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateNotebookDetails



Update notebook details in a specified project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **target\_project\_id** (`string`, optional) The ID of the project to access. Use /api/projects/ to find the project ID. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **notebook\_short\_id** (`string`, optional) The unique short identifier for the notebook to be updated. This ID is required to specify which notebook to modify within the project. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.DeleteNotebook



Deletes a specific notebook by marking it as deleted.

**Parameters**

-   **notebook\_short\_id** (`string`, required) The short ID of the notebook to mark as deleted. This ID uniquely identifies the notebook within the project.
-   **project\_id** (`string`, required) The ID of the project to access. Obtain it by calling /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveNotebookActivity



Retrieve activity details of a specific notebook.

**Parameters**

-   **notebook\_short\_id** (`string`, required) The unique short identifier of the notebook for which activity details are requested. Used to specify the exact notebook within the project.
-   **project\_id** (`string`, required) The ID of the project you’re trying to access. Obtain it by calling /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetNotebookActivity



Retrieve activity details for a specific project notebook.

**Parameters**

-   **project\_id** (`string`, required) The ID of the project from which to retrieve notebook activity. Obtainable via a call to /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveNotebookComments



Retrieve comments from notebook recordings in a project.

**Parameters**

-   **project\_identifier** (`string`, required) Provide the Project ID to access specific notebook comments. Use /api/projects/ to find the ID.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ListPersistedFolders



Retrieve persisted folders for a given project.

**Parameters**

-   **project\_id** (`string`, required) Project ID of the project to access. Obtain the ID by calling /api/projects/.
-   **results\_per\_page** (`integer`, optional) Specifies the number of results to return per page.
-   **start\_index** (`integer`, optional) The initial index from which to start returning the results.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.PersistFolderCreation



Create a new persisted folder in Datadog.

**Parameters**

-   **folder\_category** (`string`, required) Specifies the type of the persisted folder. Options are ‘home’ for Home or ‘pinned’ for Pinned.
-   **folder\_creation\_date** (`string`, required) The date and time when the persisted folder is created, in ISO 8601 format.
-   **folder\_last\_updated** (`string`, required) A string representing the timestamp of the last update to the folder, in ISO 8601 format.
-   **folder\_type** (`string`, required) Specifies the type of the folder. Possible values are ‘home’ for Home or ‘pinned’ for Pinned.
-   **project\_identifier** (`string`, required) The unique identifier for the target project. Retrieve it via /api/projects/.
-   **folder\_path** (`string`, optional) Specify the path where the persisted folder will be created within the project. It should be a string representing the directory structure needed.
-   **folder\_protocol** (`string`, optional) Specify the protocol for the persisted folder. Expected values are network protocol types like HTTP or FTP.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrievePersistedFolder



Retrieve a specific persisted folder within a project.

**Parameters**

-   **persisted\_folder\_uuid** (`string`, required) A UUID string identifying the persisted folder to be retrieved.
-   **project\_id** (`string`, required) The unique identifier for the project to access the persisted folder. Obtainable via a call to /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdatePersistedFolder



Update details of a persisted folder in a project.

**Parameters**

-   **folder\_creation\_date** (`string`, required) The date when the folder was originally created, in string format. Use this to specify the creation timestamp for folder updates.
-   **folder\_id** (`string`, required) The unique identifier of the folder to update within the project.
-   **folder\_type** (`string`, required) Specify the folder type: ‘home’ for Home or ‘pinned’ for Pinned.
-   **persisted\_folder\_id** (`string`, required) A UUID string identifying the persisted folder to update.
-   **project\_id** (`string`, required) The ID of the project to access. Retrieve using /api/projects/.
-   **update\_timestamp** (`string`, required) Provide the timestamp when the folder was last updated. Use ISO 8601 format (e.g., ‘2023-10-01T12:34:56Z’).
-   **folder\_path** (`string`, optional) Specify the path where the persisted folder is located within the project.
-   **update\_protocol** (`string`, optional) Specify the protocol for the folder update. This value should be a string.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateFolderInfo



Update a persisted folder’s metadata in Datadog.

**Parameters**

-   **project\_id** (`string`, required) The ID of the Datadog project you want to access. Make a call to /api/projects/ to find it.
-   **folder\_creation\_date** (`string`, optional) The date when the folder was created, expected in a string format (e.g., YYYY-MM-DD).
-   **folder\_id** (`string`, optional) The unique identifier of the persisted folder to update.
-   **folder\_path** (`string`, optional) The path to the persisted folder to update in Datadog. This specifies the location or hierarchy within the project where the folder resides.
-   **folder\_type** (`string`, optional) Specify the type of the folder. Options are ‘home’ for Home or ‘pinned’ for Pinned.
-   **persisted\_folder\_id** (`string`, optional) A UUID string identifying the persisted folder to update.
-   **protocol\_type** (`string`, optional) Specify the protocol type for the persisted folder metadata. This is typically a string indicating the protocol used.
-   **update\_timestamp** (`string`, optional) Timestamp indicating when the persisted folder was last updated. Use ISO 8601 format.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RemoveFolder



Deletes a specified persisted folder from a project.

**Parameters**

-   **persisted\_folder\_id** (`string`, required) A UUID string identifying the persisted folder to be deleted.
-   **project\_id** (`string`, required) The ID of the project to access. Obtain this by calling /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrievePersonData



Retrieve detailed information about a specific person.

**Parameters**

-   **person\_identifier** (`integer`, required) Unique integer identifying the person to retrieve information for.
-   **project\_id** (`string`, required) The ID of the project for accessing specific person data. Obtain it via /api/projects/.
-   **output\_format** (`string`, optional) Specify the format in which to retrieve the person data. Options are ‘csv’ or ‘json’.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ModifyPersonDetails



Update properties for a person in the project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **person\_id** (`integer`, optional) A unique integer representing a person to update in the project. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) ID of the target project for accessing person data. Retrieve the ID via a call to /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **response\_format** (`string`, optional) Specifies the format of the response output, either ‘csv’ or ‘json’. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdatePersonInfo



Update person details using partial data.

**Parameters**

-   **project\_id** (`string`, required) Project ID for accessing the intended project. Obtain by calling /api/projects/.
-   **creation\_timestamp** (`string`, optional) The timestamp when the person data was initially created, in ISO 8601 format (e.g., ‘2023-10-05T14:48:00.000Z’).
-   **person\_distinct\_ids** (`array[string]`, optional) An array of unique identifiers for the person whose data is being updated. These identifiers help to distinguish between different users.
-   **person\_id** (`integer`, optional) The identifier of the person whose information is being updated. It should be an integer.
-   **person\_identifier** (`integer`, optional) A unique integer identifying the person to update.
-   **person\_name** (`string`, optional) The name of the person whose details are being updated. This should be a string representing the person’s full name.
-   **person\_properties** (`string`, optional) Stringified JSON containing specific person properties to update.
-   **response\_format** (`string`, optional) The format of the response. Options are ‘csv’ or ‘json’.
-   **user\_uuid** (`string`, optional) The unique identifier for the person to be updated. Must be a valid UUID string.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.DeletePerson



Delete an individual person from a project.

**Parameters**

-   **person\_id** (`integer`, required) A unique integer identifying the person to be deleted.
-   **project\_id** (`string`, required) The ID of the project to access. Retrieve by calling /api/projects/.
-   **delete\_events** (`boolean`, optional) Set to true to create a task to delete all events associated with this person, batched and executed at 5AM UTC every Sunday.
-   **response\_format** (`string`, optional) Specify the format of the response data. Choose between ‘csv’ or ‘json’.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetPersonActivity



Retrieve activities and details of a specific person.

**Parameters**

-   **person\_identifier** (`integer`, required) A unique integer value identifying the person. Required for retrieving their activity details.
-   **project\_id** (`string`, required) The ID of the project to access. Obtainable via /api/projects/.
-   **response\_format** (`string`, optional) Specify the format of the response, either ‘csv’ or ‘json’.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.QueuePersonEventDeletion



Queue deletion of events for a person during non-peak hours.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **person\_identifier** (`integer`, optional) A unique integer value identifying the person whose events are to be deleted. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) Unique identifier for the project. Obtain via /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **response\_format** (`string`, optional) Specify the format of the response. Choose either ‘csv’ or ‘json’. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RemovePersonAttribute



Delete a specific property from a person’s profile.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **property\_key\_to\_delete** (`string`, optional) Specify the property key you want to delete from a person’s profile. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **person\_identifier** (`integer`, optional) A unique integer to identify the person whose property you want to delete. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) The unique ID of the project you want to access. Retrieve it by calling /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **response\_format** (`string`, optional) Specify the desired format for the response. Can be ‘csv’ or ‘json’. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RemovePersonRecordings



Queue deletion of all recordings associated with a person.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **person\_identifier** (`integer`, optional) A unique integer value used to identify the person whose recordings are to be deleted. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) The unique identifier for the project. To obtain this ID, call /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **file\_format** (`string`, optional) Specify the format type for the output. Acceptable values are ‘csv’ or ‘json’. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrievePersonPropertiesTimeline



Retrieve the timeline of a person’s properties changes.

**Parameters**

-   **person\_id** (`integer`, required) A unique integer value identifying this person.
-   **project\_id** (`string`, required) The unique identifier for the project you’re trying to access. Obtain it via a call to /api/projects/.
-   **response\_format** (`string`, optional) Specify the format of the response. Accepted values are ‘csv’ or ‘json’.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.SplitPersonEntityCreate



Create a sub-person entity for an existing person.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **person\_identifier** (`integer`, optional) A unique integer identifying the person for whom a sub-entity will be created. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) The ID of the project to access. Retrieve by calling `/api/projects/`. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **output\_format** (`string`, optional) Specifies the output format for the response. Accepts ‘csv’ or ‘json’. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ModifyUserAttribute



Update a specific property for a person in a project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **property\_key** (`string`, optional) The key for the property you want to update for the person. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **property\_value** (`string`, optional) Specify the value of the property to be updated for a person. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **person\_identifier** (`integer`, optional) A unique integer value used to identify the person whose property is being updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) Project ID to access the relevant project. Retrieve it via `/api/projects/`. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **response\_format** (`string`, optional) Specify the format for the response. Use ‘csv’ or ‘json’. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.PersonActivityInfo



Retrieve details of a person’s activities.

**Parameters**

-   **access\_project\_id** (`string`, required) The ID of the project you want to access. Call /api/projects/ to find this ID.
-   **response\_format** (`string`, optional) Specify the format for the response, either ‘csv’ or ‘json’.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.BulkDeletePersons



Bulk delete persons by IDs in a specified project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_id** (`string`, optional) The ID of the project to access for deleting persons. Use /api/projects/ to find this ID. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **distinct\_ids\_list** (`json`, optional) A list of distinct IDs to delete associated persons, limited to 1000 IDs per call. Only used when mode is ‘execute’.
-   **response\_format** (`string`, optional) Specifies the format of the response, either ‘csv’ or ‘json’. Only used when mode is ‘execute’.
-   **posthog\_person\_ids** (`json`, optional) A JSON list of up to 1000 PostHog person IDs to delete. Only used when mode is ‘execute’.
-   **delete\_associated\_events** (`boolean`, optional) If true, a task is created to delete all events related to the persons being deleted. It runs every Sunday at 5AM UTC. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetPersonsCohorts



Retrieve information about person cohorts in a project.

**Parameters**

-   **project\_id** (`string`, required) Project ID of the project to access. Use /api/projects/ to find this ID.
-   **response\_format** (`string`, optional) Specify the format of the response: ‘csv’ or ‘json’.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrievePersonsFunnel



Retrieve persons data for a project funnel.

**Parameters**

-   **project\_id** (`string`, required) The ID of the project to access. Find it by calling /api/projects/.
-   **output\_format** (`string`, optional) Specify the desired output format. Options are ‘csv’ or ‘json’.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateOrUpdatePersons



Create or update persons in a project funnel.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_id** (`string`, optional) The unique identifier for the project to access. Use /api/projects/ to find the ID. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **response\_format** (`string`, optional) Specify the format of the response. Options are ‘csv’ or ‘json’. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.FunnelCorrelationPersonsRetrieve



Retrieve funnel correlation data for persons in a project.

**Parameters**

-   **project\_id** (`string`, required) The unique identifier for the project you want to access. Retrieve this ID by calling /api/projects/.
-   **response\_format** (`string`, optional) Format of the response data. Choose ‘csv’ or ‘json’.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.AddPersonsFunnelCorrelation



Create or update persons in a funnel correlation.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_id** (`string`, optional) Project ID for accessing the project. Obtain by calling /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **response\_format** (`string`, optional) Specify the format of the response. Options are ‘csv’ or ‘json’. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetPersonsLifecycle



Retrieve lifecycle information of persons in a project.

**Parameters**

-   **project\_id** (`string`, required) Project ID to access the specific project. Use /api/projects/ to find the ID if unknown.
-   **response\_format** (`string`, optional) The format in which to retrieve lifecycle information. Options are ‘csv’ or ‘json’.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ResetPersonDistinctId



Reset a distinct\_id for a deleted person to reuse it.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_id** (`string`, optional) The ID of the project you want to access. Use the /api/projects/ endpoint to retrieve available IDs. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **response\_format** (`string`, optional) Specify the response format. Options are ‘csv’ or ‘json’. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrievePersonsStickiness



Retrieve information about persons’ stickiness in a project.

**Parameters**

-   **project\_id** (`string`, required) The unique identifier of the project to access. Retrieve by calling /api/projects/.
-   **response\_format** (`string`, optional) Determines the format of the response. Options are ‘csv’ or ‘json’.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetPersonTrends



Retrieve trends related to persons in a project.

**Parameters**

-   **project\_identifier** (`string`, required) The Project ID required to access and retrieve trends of persons for a specific project. Use the /api/projects/ endpoint to find the ID.
-   **response\_format** (`string`, optional) Specify the format for the response data. Options are ‘csv’ or ‘json’.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetPersonInfo



Retrieve or delete person details in a Datadog project.

**Parameters**

-   **project\_id** (`string`, required) Project ID to access specific project details in Datadog. Obtain this by calling /api/projects/.
-   **response\_format** (`string`, optional) Specifies the format of the response data. Options are ‘csv’ or ‘json’.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ListPluginConfigLogs



Retrieve logs for a specific plugin configuration.

**Parameters**

-   **plugin\_configuration\_id** (`string`, required) The ID of the plugin configuration whose logs you want to retrieve.
-   **project\_id** (`string`, required) The unique identifier for the project whose plugin logs you want to access. Obtain this by calling /api/projects/.
-   **results\_per\_page** (`integer`, optional) Number of results to return per page for the log list.
-   **starting\_index** (`integer`, optional) The starting index for results retrieval, used to paginate through logs.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ListPropertyDefinitions



Retrieve a list of property definitions for a specific project.

**Parameters**

-   **project\_id** (`string`, required) ID of the project you’re accessing. Use /api/projects/ to find it.
-   **event\_names\_json** (`string`, optional) A JSON-encoded string of event names to populate `is_seen_on_filtered_events` in the response.
-   **exclude\_core\_properties** (`boolean`, optional) Set to true to exclude core properties from the response; false to include them.
-   **exclude\_hidden\_properties** (`boolean`, optional) Set to true to exclude properties marked as hidden from the results.
-   **excluded\_properties\_list** (`string`, optional) A JSON-encoded list of property names to exclude from the response.
-   **filter\_feature\_flag\_properties** (`boolean`, optional) Set to true to include only feature flag properties, false to exclude them.
-   **filter\_properties\_by\_event\_names** (`boolean`, optional) Set to true to return only properties for events specified in `event_names`.
-   **filter\_properties\_list** (`string`, optional) Comma-separated list of properties to filter the results by.
-   **group\_type\_index\_for\_group\_properties** (`integer`, optional) Provide the group type index specifically for properties of type ‘group’. This should only be set if the type is set to ‘group’.
-   **include\_only\_numerical\_properties** (`boolean`, optional) Set to true to return only numerical property definitions, false to exclude them.
-   **property\_definition\_type** (`string`, optional) Specify which type of property definitions to return: ‘event’, ‘person’, ‘group’, or ‘session’.
-   **result\_start\_index** (`integer`, optional) The initial index from which to return the results. Use this to paginate through results starting from a specific index.
-   **results\_per\_page** (`integer`, optional) Specify the number of results to return per page when retrieving property definitions.
-   **search\_query** (`string`, optional) Keyword to search properties by name in the project.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrievePropertyDefinitions



Retrieve details of property definitions for a given project.

**Parameters**

-   **project\_id** (`string`, required) The ID of the project you want to access. Retrieve it via /api/projects/.
-   **property\_definition\_id** (`string`, required) A UUID string identifying the specific property definition.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdatePropertyDefinitions



Update property definitions for a specific project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **property\_definition\_id** (`string`, optional) A UUID string identifying the specific property definition to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) Project ID to access specific project details in Datadog. Call /api/projects/ to find it. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdatePropertyDefinition



Update partial property definition details.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **property\_definition\_id** (`string`, optional) A UUID string identifying the property definition to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) The ID of the project to access. Retrieve it via /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.DeletePropertyDefinition



Delete a property definition from a project.

**Parameters**

-   **project\_id** (`string`, required) The ID of the project to access. Retrieve it via the /api/projects/ endpoint.
-   **property\_definition\_id** (`string`, required) A UUID string identifying the property definition to be deleted.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CheckPropertyEventAssociation



Check if a property has been seen with specified event names.

**Parameters**

-   **project\_id** (`string`, required) The unique identifier for the target project. Obtainable via a call to /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveQueryFromProject



Retrieve a specific query from a project.

**Parameters**

-   **project\_id** (`string`, required) The unique identifier of the project you want to access. Obtainable via a call to /api/projects/.
-   **query\_id** (`string`, required) The unique identifier of the query you want to retrieve from the project. This is required to specify which query to access.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.DeleteProjectQuery



Delete a specific project query.

**Parameters**

-   **project\_id** (`string`, required) ID of the project you want to access. Retrieve it via a call to /api/projects/.
-   **query\_id** (`string`, required) The unique identifier for the query to be deleted within the project.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetQueryLogDetails



Retrieve query log details for a specified query ID.

**Parameters**

-   **project\_id** (`string`, required) Project ID for accessing the specific project. Retrieve by calling /api/projects/.
-   **query\_id** (`string`, required) The unique identifier of the query to retrieve log details. The query must have been issued within the last 24 hours.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CheckAsyncAuth



Checks authorization for creating asynchronous queries.

**Parameters**

-   **project\_id\_for\_auth\_check** (`string`, required) The ID of the Datadog project to check access for creating asynchronous queries. Obtain the ID by calling /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveDraftSqlQuery



Retrieve draft SQL query for a specific project.

**Parameters**

-   **project\_id** (`string`, required) The ID of the project to access for the draft SQL query. Obtainable via a call to /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ListSessionPlaylists



Retrieve session recording playlists, including synthetic ones.

**Parameters**

-   **project\_identifier** (`string`, required) The ID of the project you’re trying to access. Obtain it by calling /api/projects/.
-   **created\_by\_user\_id** (`integer`, optional) ID of the user who created the playlist. Must be an integer.
-   **playlist\_short\_id** (`string`, optional) A specific short identifier for the playlist to retrieve.
-   **results\_offset** (`integer`, optional) The index from which to start returning results. Useful for pagination.
-   **results\_per\_page** (`integer`, optional) Number of results to return per page.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.NewSessionRecordingPlaylist



Create a new session recording playlist for a project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_id** (`string`, optional) The ID of the project for which you want to create a session recording playlist. Obtain this by calling /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveRecordingPlaylist



Retrieve a session recording playlist for a project.

**Parameters**

-   **playlist\_short\_id** (`string`, required) The short ID of the session recording playlist to retrieve. This helps identify the specific playlist to fetch.
-   **project\_id** (`string`, required) The ID of the project to access. Retrieve it by calling /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ModifySessionRecordingPlaylist



Update session recording playlists for a project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_id** (`string`, optional) The ID of the project you want to access. Retrieve the ID by calling /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **playlist\_short\_identifier** (`string`, optional) A unique identifier for the session recording playlist to be updated. It is used to specify the exact playlist within the project. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.EditSessionPlaylist



Partially update a session recording playlist.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_identifier** (`string`, optional) The unique identifier of the project. Obtain it by calling /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **playlist\_short\_id** (`string`, optional) The short ID of the session recording playlist to modify. Required for identifying the playlist. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RemoveSessionRecordingPlaylist



Soft delete a session recording playlist in a project.

**Parameters**

-   **project\_identifier** (`string`, required) The ID of the project to access. Retrieve this by calling /api/projects/.
-   **session\_recording\_playlist\_short\_id** (`string`, required) A unique short identifier for the session recording playlist to be deleted.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveRecordingPlaylistViews



Retrieve and log views of session recording playlists.

**Parameters**

-   **project\_id** (`string`, required) Project ID to access specific recording playlists. Use /api/projects/ to find the ID.
-   **recording\_short\_id** (`string`, required) The short identifier of the recording playlist to retrieve views for. Required for accessing specific recordings.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.AddSessionRecordingToPlaylist



Add a session recording to a specified playlist.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_id** (`string`, optional) Project ID to access the specific project. Retrieve by calling /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **session\_recording\_identifier** (`string`, optional) The unique ID of the session recording to be added to the playlist. This ID identifies the specific recording you want to track or log in the given playlist. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **session\_recording\_short\_id** (`string`, optional) The unique short identifier of the session recording to add to the playlist within the specified project. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.DeleteSessionRecording2



Delete a session recording from a playlist in a project.

**Parameters**

-   **project\_id** (`string`, required) The ID of the project you want to access. Obtainable via /api/projects/.
-   **session\_recording\_id** (`string`, required) The unique identifier for the session recording to be deleted.
-   **session\_recording\_short\_id** (`string`, required) The unique short ID of the session recording to delete from the playlist.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.FetchSessionRecordings



Retrieve session recordings for a specific project.

**Parameters**

-   **project\_id** (`string`, required) The unique identifier of the project for which to retrieve session recordings. Obtainable via the /api/projects/ endpoint.
-   **results\_per\_page** (`integer`, optional) Number of session recordings to return per page. This controls the pagination size.
-   **start\_index\_for\_results** (`integer`, optional) The initial index from which to start returning the results.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.FetchSessionRecording



Retrieve details of a specific session recording.

**Parameters**

-   **project\_id** (`string`, required) The ID of the project to access. Find the project ID with /api/projects/.
-   **session\_recording\_id** (`string`, required) A UUID string that uniquely identifies the session recording to retrieve.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateSessionRecording2



Update session recording details for a specific project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **session\_recording\_id** (`string`, optional) A UUID string identifying the session recording to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) The ID of the project to access. To find this ID, use the /api/projects/ endpoint. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.EditSessionRecording



Update specific details of a session recording.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **session\_recording\_id** (`string`, optional) A UUID string used to uniquely identify the session recording to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) The ID of the project to access. Retrieve it via /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.DestroySessionRecording



Delete a specific session recording from a project.

**Parameters**

-   **project\_id** (`string`, required) The ID of the project containing the session recording to delete. Retrieve using /api/projects/.
-   **session\_recording\_id** (`string`, required) A UUID string identifying this session recording for deletion.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetSessionRecordingsSharingLinks



Obtain sharing links for a Datadog session recording.

**Parameters**

-   **project\_id** (`string`, required) The ID of the project to access session recordings. Retrieve via /api/projects/.
-   **session\_recording\_id** (`string`, required) The unique ID of the session recording for which you want to obtain sharing links. This ID is required to specify the exact recording within the project.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateRecordingSharePassword



Create a new password for sharing configuration of a recording.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_id** (`string`, optional) The ID of the project to access. Use the /api/projects/ endpoint to find the project ID. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **recording\_id** (`string`, optional) Unique identifier of the recording for which the sharing password is being created. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RemoveSharingPassword



Delete a sharing configuration password from a session recording.

**Parameters**

-   **password\_identifier** (`string`, required) The unique identifier for the password to be removed from the sharing configuration.
-   **project\_identifier** (`string`, required) The unique ID of the project for accessing its session recordings. Retrieve this by calling /api/projects/.
-   **session\_recording\_id** (`string`, required) The ID of the session recording from which the password will be deleted.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateSessionRecordingSharing



Refresh session recording sharing status.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_id** (`string`, optional) The unique string identifier for the project you want to access. Obtainable via the /api/projects/ endpoint. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **session\_recording\_id** (`string`, optional) The unique ID of the session recording to update the sharing status for. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveSessionPropertyDefinitions



Retrieve definitions of session properties for a project.

**Parameters**

-   **project\_identifier** (`string`, required) The ID of the project to access session property definitions. Obtainable via the /api/projects/ call.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveProjectSessionValues



Retrieve session values for a specific project.

**Parameters**

-   **project\_id** (`string`, required) Project ID to access session values. Obtain it via a call to /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetProjectSubscriptions



Retrieve a list of subscriptions for a specific project.

**Parameters**

-   **project\_identifier** (`string`, required) The ID of the project to access subscriptions for. Use /api/projects/ to find the ID if unknown.
-   **results\_per\_page** (`integer`, optional) Specify the number of results to return per page for the subscription list.
-   **results\_start\_index** (`integer`, optional) The index position to start returning results from within the subscription list.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateProjectSubscription



Create a new subscription for a specified project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_identifier** (`string`, optional) The ID of the project to access. Retrieve it by calling /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetSubscriptionInfo



Retrieve details of a specific project subscription.

**Parameters**

-   **project\_id** (`string`, required) The ID of the project to access. Obtain it via a call to /api/projects/.
-   **subscription\_id** (`integer`, required) A unique integer value identifying this subscription.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateSubscriptionSettings



Update subscription settings for a project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **subscription\_id** (`integer`, optional) A unique integer identifying the subscription to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) The ID of the project to access. Retrieve it via /api/projects/ if unknown. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateSubscriptionDetails



Update details of a project subscription.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **subscription\_id** (`integer`, optional) A unique integer value identifying this subscription. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) The unique ID of the project you want to access. Retrieve it via a call to /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UnsubscribeFromProjectAlerts



Set project alert subscription as deleted.

**Parameters**

-   **project\_identifier** (`string`, required) The ID of the project to access. Retrieve it from the /api/projects/ endpoint.
-   **subscription\_id** (`integer`, required) A unique integer identifier for the project alert subscription to be marked as deleted.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetProjectSurveys



Retrieve a list of surveys for a given project.

**Parameters**

-   **project\_id** (`string`, required) The ID of the project to access. Retrieve project ID via the /api/projects/ endpoint.
-   **initial\_result\_index** (`integer`, optional) The starting index for returning survey results, used for pagination.
-   **results\_per\_page** (`integer`, optional) Specify the number of results to return per page, as an integer.
-   **search\_term** (`string`, optional) A search term to filter the list of surveys.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateSurvey



Create a new survey for a project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_id** (`string`, optional) The ID of the project for creating a survey. Retrieve this ID via a call to /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveSurveyData



Retrieve data for a specific survey using project and survey IDs.

**Parameters**

-   **project\_id** (`string`, required) The ID of the project you want to access. Retrieve it via /api/projects/ if unknown.
-   **survey\_uuid** (`string`, required) A UUID string identifying the specific survey to be retrieved.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateSurveyTracking



Tracks a new view for a survey by logging access.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **survey\_uuid** (`string`, optional) A UUID string that uniquely identifies the survey to track. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) The unique identifier of the project to access. Retrieve this ID by making a call to /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateSurveyInfo



Update information for a specific survey.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **survey\_uuid** (`string`, optional) A UUID string identifying the survey to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) The ID of the project to access. Use /api/projects/ to find this ID. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.DeleteSurvey



Delete a survey from a specific project.

**Parameters**

-   **project\_identifier** (`string`, required) The unique ID of the project containing the survey to delete. Obtainable via the /api/projects/ endpoint.
-   **survey\_uuid** (`string`, required) A UUID string that uniquely identifies the survey to delete.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.FetchSurveyActivity



Retrieve logs of survey activity views.

**Parameters**

-   **project\_id** (`string`, required) The ID of the project you want to access. Retrieve this by calling /api/projects/.
-   **survey\_uuid** (`string`, required) A UUID string uniquely identifying the survey to retrieve activity logs for.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.DuplicateSurveyToProjects



Duplicate a survey to multiple projects in one transaction.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **survey\_uuid** (`string`, optional) A UUID string identifying the survey to be duplicated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **target\_project\_id** (`string`, optional) The ID of the target project where the survey will be duplicated. Obtain this ID via the /api/projects/ call. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetSurveyResponseStatistics



Get survey response statistics for a specific survey.

**Parameters**

-   **project\_identifier** (`string`, required) The ID of the project to access. Retrieve this using the /api/projects/ endpoint.
-   **survey\_uuid** (`string`, required) A UUID string identifying the specific survey to retrieve statistics for.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.SummarizeSurveyResponses



Create a summary of survey responses for a project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **survey\_uuid** (`string`, optional) A UUID string that uniquely identifies the survey for which responses are to be summarized. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) The unique identifier string for the project. Obtain it by calling the /api/projects/ endpoint. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.TrackSurveyActivity



Retrieve and log survey activity views.

**Parameters**

-   **project\_id** (`string`, required) The Project ID to access and track survey activities. Find the ID using /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetSurveyResponseCount



Retrieve the count of survey responses for a project.

**Parameters**

-   **project\_identifier** (`string`, required) The unique identifier for the project whose survey response count you want to retrieve. Use /api/projects/ to find the ID.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetSurveyStatistics



Retrieve aggregated response statistics for surveys.

**Parameters**

-   **project\_id** (`string`, required) The unique identifier for the project to access. Get this by calling /api/projects/.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ListProjectTasks



Retrieve tasks for a specific project.

**Parameters**

-   **project\_identifier** (`string`, required) The unique identifier of the project for which to retrieve tasks. Obtain this ID via the /api/projects/ endpoint.
-   **results\_per\_page** (`integer`, optional) Number of task results to return per page. Use this to limit the result set size.
-   **start\_index** (`integer`, optional) The zero-based index from which to begin returning task results.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateProjectTask



Create a new task within a specified project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_identifier** (`string`, optional) The ID of the project to access for task creation. Retrieve the ID using a call to /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetProjectTaskDetails



Retrieve details of a specific task within a project.

**Parameters**

-   **project\_identifier** (`string`, required) The unique ID of the project to access task details. Use /api/projects/ to find available project IDs.
-   **task\_id** (`string`, required) A UUID string identifying the specific task within the project.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateProjectTask



Update task details within a project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **task\_uuid** (`string`, optional) A UUID string identifying the task to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) The ID of the project being accessed. Use /api/projects/ to find project IDs. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateTaskInProject



Update a specific task within a project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **task\_uuid** (`string`, optional) A UUID string that uniquely identifies the specific task to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) The unique ID of the project to access for task updates. Retrieve this using the /api/projects/ endpoint. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.DeleteProjectTask



Delete a specific task within a project.

**Parameters**

-   **project\_identifier** (`string`, required) Project ID of the target project. Obtain this by calling /api/projects/.
-   **task\_uuid** (`string`, required) A UUID string identifying the specific task to delete within a project.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.InitiateTaskWorkflow



Initiate the workflow for a specific task stage.

**Parameters**

-   **project\_identifier** (`string`, required) The ID of the project to access. Retrieve this by calling /api/projects/.
-   **task\_uuid** (`string`, required) A UUID string used to uniquely identify the task to be initiated.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateTaskPosition



Update the position of a task within its current stage.

**Parameters**

-   **project\_identifier** (`string`, required) The ID of the project for accessing or modifying tasks. Obtainable via a call to /api/projects/.
-   **task\_identifier** (`string`, required) A UUID string specifying the task to be updated.
-   **new\_task\_position** (`integer`, optional) The new integer position for the task within its current stage.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ListTaskRuns



Retrieve a list of task run executions for a specific task.

**Parameters**

-   **project\_id** (`string`, required) The ID of the project you want to access. Obtain it via a call to /api/projects/.
-   **task\_identifier** (`string`, required) The unique ID of the task for which you want to list the run executions. Ensures retrieval of all run data related to this specific task.
-   **results\_per\_page** (`integer`, optional) Specify the number of results to return per page. This is useful for paginating large datasets.
-   **starting\_index\_for\_results** (`integer`, optional) The starting index for returning results in a paginated list of task runs.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateTaskRun



Create and manage execution of a specific task by ID.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_id** (`string`, optional) The ID of the project to access. Use /api/projects/ to retrieve project IDs. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **task\_id** (`string`, optional) The identifier for the specific task to run within the project. Ensure it matches the correct task you intend to execute. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetTaskRunDetails



Retrieve details of a specific task run execution.

**Parameters**

-   **project\_identifier** (`string`, required) The unique identifier for the project you want to access. Obtain it via a call to /api/projects/.
-   **task\_identifier** (`string`, required) A UUID string identifying the specific task run execution.
-   **task\_run\_id** (`string`, required) A UUID string to identify the specific task run execution.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateTaskRunStatus



Update the status of a specific task run.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **task\_run\_id** (`string`, optional) A UUID string identifying the specific task run to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) The ID of the project to access. Retrieve via /api/projects/ if unknown. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **task\_run\_task\_identifier** (`string`, optional) The unique task ID for identifying the specific task run to update. This ID is associated with the task execution. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.AppendTaskRunLogs



Append log entries to a specific task run log array.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **task\_run\_uuid** (`string`, optional) A UUID string to identify the specific task run for log appending. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) ID of the project to access. Retrieve it by calling /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **task\_run\_task\_id** (`string`, optional) A string representing the task ID for the task run. This identifies which task the logs are associated with. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateTaskRunOutput



Update the output field for a specific task run.

**Parameters**

-   **project\_identifier** (`string`, required) The unique Project ID required to access and update the specific task run details within a project. Obtainable via the /api/projects/ endpoint.
-   **task\_identifier** (`string`, required) A string representing the unique identifier for a particular task run being accessed.
-   **task\_run\_id** (`string`, required) A UUID string that uniquely identifies the task run to update.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetSavedQueriesList



Retrieve saved warehouse queries for a specific project.

**Parameters**

-   **project\_id** (`string`, required) The ID of the project you want to access. Retrieve this ID by calling /api/projects/.
-   **current\_page\_number** (`integer`, optional) Indicates the page number for retrieving paginated results of saved warehouse queries.
-   **search\_term** (`string`, optional) A search term to filter the saved warehouse queries.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.AddWarehouseSavedQuery



Create a warehouse saved query for data management.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_id\_for\_access** (`string`, optional) The ID of the project to access. Obtainable by calling /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveWarehouseSavedQuery



Retrieve details of a specific warehouse saved query.

**Parameters**

-   **project\_id** (`string`, required) Project ID to access the specific project. Retrieve it via /api/projects/.
-   **query\_uuid** (`string`, required) A UUID string identifying the specific data warehouse saved query to retrieve.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.EditWarehouseSavedQuery



Update a specific warehouse saved query.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **saved\_query\_id** (`string`, optional) A UUID string identifying the specific data warehouse saved query to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) The unique ID of the project to access. Retrieve this ID via /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ModifyWarehouseQuery



Partially update a warehouse saved query in a project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **query\_identifier** (`string`, optional) A UUID string that identifies the specific warehouse saved query to be partially updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) Project ID for the warehouse saved query. Obtain it via /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.DeleteWarehouseSavedQuery



Deletes a specified warehouse saved query.

**Parameters**

-   **project\_id\_to\_access** (`string`, required) Provide the Project ID for the warehouse project. Obtain the ID by calling /api/projects/.
-   **saved\_query\_uuid** (`string`, required) A UUID string that uniquely identifies the data warehouse saved query to be deleted.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveSavedQueryActivity



Retrieve activity details of a saved warehouse query.

**Parameters**

-   **project\_identifier** (`string`, required) The identifier for the project you want to access. Retrieve it via /api/projects/.
-   **saved\_query\_id** (`string`, required) The UUID of the data warehouse saved query to retrieve activity details for.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetAncestorsOfSavedQuery



Retrieve ancestors of a saved query in Datadog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **data\_warehouse\_query\_uuid** (`string`, optional) A UUID identifying the specific data warehouse saved query to retrieve ancestors for. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) Project ID to access. Retrieve the ID using the /api/projects/ endpoint if needed. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CancelRunningSavedQuery



Cancel a running saved query workflow in progress.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **saved\_query\_uuid** (`string`, optional) A UUID string that identifies the saved data warehouse query to cancel. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) Project ID to access the specific project. Obtainable via a call to /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetQueryDescendants



Retrieve descendants of a saved query.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **query\_id** (`string`, optional) A UUID string identifying the data warehouse saved query to retrieve descendants for. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) The ID of the project to access. Retrieve it by calling the /api/projects/ endpoint. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UndoMaterialization



Revert back to the original view by undoing materialization.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **saved\_query\_uuid** (`string`, optional) A UUID string identifying the specific data warehouse saved query to be reverted. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) Provide the Project ID for accessing the specific project. Obtainable via a call to /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ExecuteSavedQuery



Executes a saved query in Datadog’s warehouse.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **query\_uuid** (`string`, optional) The UUID string identifying the specific data warehouse saved query to execute. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) The ID of the project you want to access. Retrieve it by calling /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.WarehouseTablesOverview



Retrieve a list of warehouse tables for a specific project.

**Parameters**

-   **project\_identifier** (`string`, required) The unique identifier of the project whose warehouse tables you wish to access. Use the project ID obtained via a call to /api/projects/.
-   **results\_per\_page** (`integer`, optional) Specifies the number of results to return per page when listing warehouse tables.
-   **results\_start\_index** (`integer`, optional) The initial index from which the results should start. Useful for pagination.
-   **search\_term** (`string`, optional) A term to filter the list of warehouse tables by matching names or descriptions.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.AddWarehouseTable



Create a new warehouse table in a specified project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_identifier** (`string`, optional) The ID of the project to access. Retrieve it by calling /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetWarehouseTable



Retrieve details of a specific warehouse table.

**Parameters**

-   **project\_identifier** (`string`, required) The ID of the project to retrieve the warehouse table from. Obtainable by calling /api/projects/.
-   **warehouse\_table\_id** (`string`, required) A UUID string identifying the data warehouse table to be retrieved.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.EditWarehouseTable



Updates information for a specific warehouse table.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **warehouse\_table\_id** (`string`, optional) A UUID string identifying the data warehouse table to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) The ID of the project you want to access. Obtainable via a call to /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateWarehouseTable2



Partially update a warehouse table entry.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **warehouse\_table\_id** (`string`, optional) A UUID string identifying the data warehouse table to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) Project ID of the project you’re trying to access. Use the `/api/projects/` endpoint to find the correct ID. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RemoveWarehouseTable



Delete a specified warehouse table from a project.

**Parameters**

-   **project\_identifier** (`string`, required) The ID of the project to access. Use /api/projects/ to find this ID.
-   **warehouse\_table\_uuid** (`string`, required) A UUID string identifying the data warehouse table to be deleted.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateTableSchema



Refresh the schema of a specific warehouse table.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **warehouse\_table\_uuid** (`string`, optional) A UUID string identifying the warehouse table to refresh the schema for. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_id** (`string`, optional) String representing the Project ID for accessing a specific project. Retrieve this by calling /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ModifyTableSchema



Update the schema of a warehouse table.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **table\_id** (`string`, optional) A UUID string to identify the data warehouse table for schema modification. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) The unique Project ID for accessing the desired project. To obtain this ID, call /api/projects/. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.WarehouseTableFileOperations



Create a new warehouse table from a file.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **project\_id\_for\_access** (`string`, optional) Specify the Project ID to access the desired project. Use /api/projects/ to find available IDs. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.FetchWebAnalyticsBreakdown



Retrieve breakdown of web analytics by property.

**Parameters**

-   **breakdown\_property** (`string`, required) Specify the property to break down web analytics by, such as Browser, DeviceType, Country, etc.
-   **end\_date** (`string`, required) The end date for retrieving web analytics data, formatted as YYYY-MM-DD.
-   **project\_id\_for\_access** (`string`, required) Project ID to access specific analytics data. Obtainable via a call to /api/projects/.
-   **start\_date** (`string`, required) Start date for the query in the format YYYY-MM-DD.
-   **apply\_url\_path\_cleaning** (`boolean`, optional) Set to true to apply URL path cleaning.
-   **filter\_by\_host** (`string`, optional) Specify the domain to filter the results by, such as ‘example.com’.
-   **filter\_test\_accounts** (`boolean`, optional) Set to true to filter out test accounts from the results.
-   **results\_limit** (`integer`, optional) Specify the maximum number of results to return from the query.
-   **results\_offset** (`integer`, optional) Number of results to skip for paginated data retrieval.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GetWebAnalyticsOverview



Retrieve an overview of web analytics data for a project.

**Parameters**

-   **end\_date\_query** (`string`, required) End date for the query in the format YYYY-MM-DD.
-   **project\_id** (`string`, required) The unique identifier for the project you want to access web analytics data for. Obtain this by calling /api/projects/.
-   **start\_date** (`string`, required) Start date for the query in YYYY-MM-DD format. Determines the beginning of the analytics data range.
-   **filter\_test\_accounts** (`boolean`, optional) Set to true to filter out test accounts from the analytics data.
-   **host\_filter** (`string`, optional) Specify the host to filter web analytics data by (e.g., example.com).

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ListWebExperiments



Retrieve a list of web experiments for a given project.

**Parameters**

-   **project\_id** (`string`, required) The ID of the project to access web experiments. Retrieve this ID via the /api/projects/ endpoint.
-   **results\_per\_page** (`integer`, optional) Specifies the number of results to return per page when retrieving web experiments.
-   **start\_index\_for\_results** (`integer`, optional) The initial index from which to return the experiment results.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateWebExperiment



Create a web experiment for a project.

**Parameters**

-   **experiment\_id** (`integer`, required) Unique integer ID for the web experiment. Required for identifying the experiment within the project.
-   **experiment\_name** (`string`, required) The name for the web experiment you want to create in Datadog.
-   **feature\_flag\_key** (`string`, required) Unique identifier for the feature flag associated with the web experiment.
-   **project\_id** (`string`, required) ID of the project for the web experiment. Obtain it via /api/projects/.
-   **web\_experiment\_variants** (`string`, required) JSON string defining the variants for the web experiment, including transforms, conditions, and rollout percentages.
-   **experiment\_creation\_date** (`string`, optional) The timestamp when the web experiment was created, in ISO 8601 format.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveWebExperiment



Retrieve details of a specific web experiment.

**Parameters**

-   **project\_id** (`string`, required) The ID of the project you want to access. Call /api/projects/ to retrieve the ID.
-   **web\_experiment\_id** (`integer`, required) A unique integer identifying the web experiment to retrieve details for.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateWebExperiment



Update web experiment details within a project.

**Parameters**

-   **experiment\_id** (`integer`, required) The ID of the web experiment to update. Must be an integer.
-   **experiment\_name** (`string`, required) Specify the name of the web experiment to update. This is used to identify the experiment for modification within the project.
-   **feature\_flag\_key** (`string`, required) Unique identifier for the feature flag associated with the web experiment.
-   **project\_id** (`string`, required) The ID of the project to access. Retrieve this ID via the `/api/projects/` endpoint.
-   **web\_experiment\_id** (`integer`, required) A unique integer identifying this web experiment to be updated.
-   **web\_experiment\_variants** (`string`, required) JSON string specifying variants for the web experiment. Include control, transforms, conditions, and rollout\_percentage.
-   **creation\_timestamp** (`string`, optional) Timestamp indicating when the web experiment was created. It should be in ISO 8601 format.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateWebExperimentStatus



Update the status of a web experiment.

**Parameters**

-   **project\_id\_for\_access** (`string`, required) Project ID to access the specific project. Obtain it via /api/projects/.
-   **creation\_timestamp** (`string`, optional) The timestamp when the web experiment was created. Must be in ISO 8601 format (e.g., ‘2023-10-05T14:48:00.000Z’).
-   **experiment\_identifier** (`integer`, optional) The unique identifier for the web experiment that needs to be updated.
-   **experiment\_name** (`string`, optional) The name of the web experiment to be updated. This should be a descriptive string identifying the specific experiment within the project.
-   **feature\_flag\_key** (`string`, optional) A string representing the feature flag key associated with the web experiment. It uniquely identifies the feature toggle you want to update.
-   **web\_experiment\_id** (`integer`, optional) A unique integer identifying the web experiment.
-   **web\_experiment\_variants** (`string`, optional) JSON string defining the variants for the web experiment. Include text, HTML, selector, conditions, and rollout percentage for each variant. Example: `{ "control": { "transforms": [ { "text": "Here comes Superman!", "html": "", "selector": "#page > #body > .header h1" } ], "conditions": "None", "rollout_percentage": 50 } }`

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.DeleteWebExperiment



Delete a web experiment from a specific project.

**Parameters**

-   **project\_identifier** (`string`, required) The ID of the project from which you want to delete the web experiment. Obtainable via the /api/projects/ call.
-   **web\_experiment\_id** (`integer`, required) Unique integer identifying the web experiment to delete.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ListUsers



Retrieve a list of users from Datadog.

**Parameters**

-   **filter\_staff\_only** (`boolean`, optional) Set to true to list only staff members; set to false to include all users.
-   **results\_per\_page** (`integer`, optional) Specify the number of results to return per page when listing users.
-   **start\_index** (`integer`, optional) The index to start retrieving results from. Useful for pagination of user results.
-   **user\_email** (`string`, optional) Filter users by email. Use a full or partial email address to narrow results.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveUserInformation



Retrieve detailed information about a specific user.

**Parameters**

-   **user\_unique\_identifier** (`string`, required) The unique identifier for a specific user in Datadog. This should be a string value.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateUserDetails



Update user details in the database.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **user\_uuid** (`string`, optional) The unique identifier (UUID) of the user to be updated. Required for identifying the specific user record. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateUserInfo



Partially update a user’s information in Datadog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **user\_uuid** (`string`, optional) The unique identifier for the user to be updated. This is required to specify which user’s information should be modified. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.DeleteUserAccount



Deletes a user account from the system.

**Parameters**

-   **user\_uuid** (`string`, required) The UUID of the user account to be deleted.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveUserHedgehogConfig



Retrieve a user’s hedgehog configuration details.

**Parameters**

-   **user\_uuid** (`string`, required) The unique UUID of the user whose hedgehog configuration details are to be retrieved.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.UpdateUserHedgehogConfig



Update a user’s hedgehog configuration settings in Datadog.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **user\_uuid** (`string`, optional) A unique identifier for the user whose hedgehog configuration is to be updated. It is a string value that must be provided to target the correct user. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CreateUserScenePersonalization



Create personalized scene settings for a user.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **user\_uuid** (`string`, optional) The unique identifier for the user whose scene you want to personalize. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.InitiateUser2faSetup



Initiate two-factor authentication setup for a user.

**Parameters**

-   **user\_uuid** (`string`, required) A unique identifier for the user to initiate 2FA setup.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.GenerateBackupCodes



Generate new backup codes for two-factor authentication.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **user\_uuid** (`string`, optional) A unique identifier for the user to generate new backup codes. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.DisableUser2fa



Disable two-factor authentication for a user.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **user\_unique\_identifier** (`string`, optional) The unique identifier of the user whose 2FA is to be disabled. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RetrieveUser2faSetupStatus



Retrieve a user’s two-factor authentication setup status.

**Parameters**

-   **user\_identifier** (`string`, required) A unique identifier for the user whose two-factor authentication setup status is being retrieved. This is typically a UUID string.

## PosthogApi.Retrieve2faStatus



Retrieve current 2FA status and backup codes if enabled.

**Parameters**

-   **user\_identifier\_uuid** (`string`, required) A unique identifier for the user to retrieve the 2FA status. Typically a string of alphanumeric characters.

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ValidateTwoFactorAuthentication



Validate a user’s two-factor authentication code.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **user\_identifier** (`string`, optional) The unique identifier for the user whose two-factor authentication is being validated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.ValidateUser2fa



Validate a user’s two-factor authentication status.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **user\_uuid** (`string`, optional) The unique identifier for the user whose 2FA status needs to be validated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.CancelEmailChangeRequest



Cancel a pending email change request.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.RequestEmailVerification



Request an email verification for a user.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## PosthogApi.VerifyUserEmail



Initiates the email verification process for a user.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `POSTHOG_SERVER_URL`, `POSTHOG_PERSONAL_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## Reference

Below is a reference of enumerations used by some of the tools in the PosthogApi MCP Server:

### ToolMode

-   **GET\_REQUEST\_SCHEMA**: `get_request_schema`
-   **EXECUTE**: `execute`

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_posthog_api ``` Learn more](/guides/deployment-hosting.md)

Last updated on February 6, 2026

[Vercel API](/en/resources/integrations/development/vercel-api.md)
[ArcadeEngineApi](/en/resources/integrations/development/arcade-engine-api.md)
