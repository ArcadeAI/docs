---
title: "PagerdutyApi"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Developer Tools](/en/resources/integrations/development/e2b.md)
PagerdutyApi

# PagerdutyApi

Arcade Unoptimized

**Description:** Tools that enable LLMs to interact directly with the Pagerduty API.

**Author:** Arcade

**Auth:** User authorization

[![PyPI Version](https://img.shields.io/pypi/v/arcade_pagerduty_api)](https://pypi.org/project/arcade_pagerduty_api/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_pagerduty_api)](https://pypi.org/project/arcade_pagerduty_api/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_pagerduty_api)](https://pypi.org/project/arcade_pagerduty_api/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_pagerduty_api)](https://pypi.org/project/arcade_pagerduty_api/)

PagerdutyApi is a [Unoptimized MCP Server](/guides/create-tools/improve/types-of-tools.md#unoptimized-tools)
: each tool mirrors one HTTP endpoint and offers LLMs a way to interact with the low-level API.



Differently from [Optimized MCP Servers](/guides/create-tools/improve/types-of-tools.md#optimized-tools)
, Unoptimized tools are heavily influenced by the original API design, which is not usually optimized for LLM usage. For this reason, we recommend thoroughly evaluating the tools with your Agents or chatbots before using it in production. [Read more](/guides/create-tools/improve/types-of-tools.md) about Optimized vs Unoptimized tools.

The PagerDutyApi MCP Server offers a comprehensive suite of tools for managing incidents, services, and integrations within the PagerDuty platform. Users can leverage these tools to:

## Available Tools

Tool Name

Description

PagerdutyApi.AssignTagsToPagerdutyEntity

Assign tags to PagerDuty entities like policies, teams, or users.

PagerdutyApi.GetTagsByEntityId

Retrieve tags for Users, Teams, or Escalation Policies.

PagerdutyApi.GetAccountAbilities

Retrieve your account's available abilities by feature name.

PagerdutyApi.CheckAbilityStatus

Check if your account has a specific ability.

PagerdutyApi.ListAddons

Retrieve all installed add-ons on your PagerDuty account.

PagerdutyApi.InstallPagerdutyAddon

Install an add-on for your PagerDuty account.

PagerdutyApi.GetAddonDetails

Retrieve detailed information about a PagerDuty add-on.

PagerdutyApi.RemoveAddon

Remove an existing add-on from PagerDuty.

PagerdutyApi.UpdatePagerdutyAddon

Update an existing add-on in PagerDuty.

PagerdutyApi.ListAlertGroupingSettings

Retrieve all alert grouping settings.

PagerdutyApi.CreateAlertGroupingSetting

Create a new Alert Grouping Setting in PagerDuty.

PagerdutyApi.GetAlertGroupingSetting

Retrieve an existing alert grouping setting.

PagerdutyApi.DeleteAlertGroupingSetting

Delete an existing alert grouping setting.

PagerdutyApi.UpdateAlertGroupingSetting

Update an existing alert grouping setting in PagerDuty.

PagerdutyApi.GetIncidentMetrics

Retrieve aggregated metrics for PagerDuty incidents.

PagerdutyApi.GetEscalationPolicyMetrics

Get aggregated incident metrics by escalation policy.

PagerdutyApi.FetchIncidentMetrics

Get aggregated metrics across all escalation policies.

PagerdutyApi.GetIncidentAnalyticsMetrics

Retrieve aggregated incident metrics by service over time.

PagerdutyApi.GetAggregatedIncidentMetrics

Retrieve aggregated incident metrics across all services.

PagerdutyApi.GetTeamIncidentMetrics

Fetch aggregated incident metrics by team and time unit.

PagerdutyApi.GetAnalyticsMetricsForAllTeams

Fetches aggregated incident metrics across all teams.

PagerdutyApi.GetAnalyticsMetricsPdAdvanceUsage

Retrieve aggregated metrics for PD Advance usage.

PagerdutyApi.RetrieveAnalyticsData

Provides aggregated incident metrics for selected responders.

PagerdutyApi.FetchResponderTeamMetrics

Fetch incident metrics for team responders.

PagerdutyApi.GetIncidentAnalytics

Fetch enriched incident metrics and data from PagerDuty Analytics.

PagerdutyApi.GetEnrichedIncidentData

Retrieve enriched incident metrics for a specific incident.

PagerdutyApi.GetIncidentResponseAnalytics

Provides enriched responder data for a single incident.

PagerdutyApi.GetResponderIncidentAnalytics

Retrieve enriched incident metrics for a specific responder.

PagerdutyApi.ListAuditRecords

Retrieve audit trail records from PagerDuty.

PagerdutyApi.CreateAutomationAction

Create a script, process, or runbook automation action.

PagerdutyApi.ListAutomationActions

Retrieve all automation actions with optional query filters.

PagerdutyApi.GetAutomationAction

Retrieve details of a specific automation action.

PagerdutyApi.DeleteAutomationAction

Delete an automation action by ID.

PagerdutyApi.UpdateAutomationAction

Update an existing automation action.

PagerdutyApi.InvokeAutomationAction

Triggers an automation action in PagerDuty.

PagerdutyApi.GetServiceReferencesForAutomationAction

Retrieve services linked to a specific automation action.

PagerdutyApi.AssociateAutomationActionWithService

Associate an Automation Action with a service.

PagerdutyApi.GetAutomationActionServiceAssociation

Retrieve details of an Automation Action and service relation.

PagerdutyApi.DisassociateAutomationActionFromService

Disassociate an Automation Action from a service.

PagerdutyApi.AssociateAutomationActionWithTeam

Associate an Automation Action with a team.

PagerdutyApi.GetTeamReferencesForAutomationAction

Retrieve teams associated with a specific automation action.

PagerdutyApi.DisassociateAutomationActionFromTeam

Disassociate an automation action from a team in PagerDuty.

PagerdutyApi.GetAutomationActionTeamAssociation

Retrieve details of an Automation Action and team relationship.

PagerdutyApi.ListAutomationActionInvocations

Retrieve a list of automation action invocations.

PagerdutyApi.GetAutomationActionInvocation

Retrieve details of an automation action invocation.

PagerdutyApi.CreateAutomationRunner

Create a Process or Runbook Automation runner.

PagerdutyApi.ListAutomationActionRunners

Retrieve a list of Automation Action runners.

PagerdutyApi.GetAutomationActionRunner

Retrieve details of an Automation Action runner by ID.

PagerdutyApi.UpdateAutomationActionRunner

Update an Automation Action runner in PagerDuty.

PagerdutyApi.DeleteAutomationActionRunner

Delete an Automation Action runner by ID.

PagerdutyApi.AssociateRunnerWithTeam

Associate a runner with a specified team.

PagerdutyApi.GetRunnerTeamAssociations

Retrieve team references linked to a specific runner.

PagerdutyApi.DisassociateRunnerFromTeam

Disassociate a runner from a team in PagerDuty.

PagerdutyApi.GetRunnerTeamAssociation

Retrieve details of a runner and team relationship.

PagerdutyApi.ListBusinessServices

Retrieve a list of existing business services.

PagerdutyApi.CreateBusinessService

Create a new business service in PagerDuty.

PagerdutyApi.GetBusinessServiceDetails

Retrieve details about a specific Business Service.

PagerdutyApi.DeleteBusinessService

Delete an existing Business Service in PagerDuty.

PagerdutyApi.UpdateBusinessService

Update the details of a business service in PagerDuty.

PagerdutyApi.SubscribeToBusinessService

Subscribe your account to a PagerDuty business service.

PagerdutyApi.UnsubscribeFromBusinessService

Unsubscribe an account from a business service.

PagerdutyApi.GetBusinessServiceSubscribers

Retrieve notification subscribers of a business service.

PagerdutyApi.SubscribeBusinessServiceEntities

Subscribe entities to a specified business service.

PagerdutyApi.RetrieveImpactfulSupportingBusinessServices

Retrieve top supporting Business Services by impact for a given service.

PagerdutyApi.UnsubscribeBusinessServiceNotifications

Unsubscribe users from Business Service notifications.

PagerdutyApi.GetTopLevelImpactorsForBusinessServices

Retrieve high-priority incidents impacting top-level business services.

PagerdutyApi.GetBusinessServiceImpacts

Get top-level Business Services sorted by highest impact.

PagerdutyApi.GetPriorityThresholds

Retrieve priority threshold details for an account.

PagerdutyApi.ClearBusinessServicePriorityThresholds

Clear priority thresholds for business services.

PagerdutyApi.SetBusinessServicePriority

Set the priority threshold for a business service.

PagerdutyApi.ListChangeEvents

Fetch a list of existing change events from PagerDuty.

PagerdutyApi.SendChangeEvent

Send a change event to PagerDuty's API.

PagerdutyApi.GetChangeEventDetails

Retrieve detailed information about a Change Event.

PagerdutyApi.UpdateChangeEvent

Updates an existing change event in PagerDuty.

PagerdutyApi.ListEscalationPolicies

Retrieve all current escalation policies.

PagerdutyApi.CreateEscalationPolicy

Create a new escalation policy in PagerDuty.

PagerdutyApi.GetEscalationPolicy

Retrieve details of an escalation policy and its rules.

PagerdutyApi.DeleteEscalationPolicy

Delete an existing escalation policy from PagerDuty.

PagerdutyApi.UpdateEscalationPolicy

Update an existing escalation policy and its rules.

PagerdutyApi.GetEscalationPolicyAuditRecords

Retrieve audit records for a specific escalation policy.

PagerdutyApi.ListEventOrchestrations

Retrieve all Global Event Orchestrations from an account.

PagerdutyApi.CreateGlobalEventOrchestration

Create a Global Event Orchestration in PagerDuty.

PagerdutyApi.GetGlobalEventOrchestration

Retrieve details of a Global Event Orchestration by ID.

PagerdutyApi.UpdateEventOrchestration

Update a Global Event Orchestration in PagerDuty.

PagerdutyApi.DeleteEventOrchestration

Delete a Global Event Orchestration on PagerDuty.

PagerdutyApi.ListOrchestrationIntegrations

Retrieve integrations for an event orchestration.

PagerdutyApi.CreateEventIntegration

Create an integration for event orchestration in PagerDuty.

PagerdutyApi.GetIntegrationDetails

Retrieve details of an orchestration integration.

PagerdutyApi.UpdateEventIntegration

Update an event orchestration integration.

PagerdutyApi.DeleteIntegrationRoutingKey

Delete an integration and its associated routing key.

PagerdutyApi.MigrateIntegrationToEventOrchestration

Migrate an integration to a different event orchestration.

PagerdutyApi.GetGlobalOrchestrationRules

Retrieve global orchestration rules for an event.

PagerdutyApi.UpdateEventOrchestrationGlobalRules

Update global orchestration rules for event orchestration.

PagerdutyApi.GetGlobalOrchestrationRoutingRules

Retrieve Global Orchestration's routing rules from PagerDuty.

PagerdutyApi.UpdateOrchestrationRoutingRules

Update rules for routing events in Global Orchestration.

PagerdutyApi.GetUnroutedEventOrchestrationRules

Retrieve rules for unrouted event orchestration in PagerDuty.

PagerdutyApi.UpdateUnroutedEventRules

Update rules for Unrouted events in Global Event Orchestration.

PagerdutyApi.GetServiceOrchestration

Retrieve details of a service orchestration configuration.

PagerdutyApi.UpdateServiceOrchestration

Update a Service Orchestration with new event rules.

PagerdutyApi.GetServiceOrchestrationStatus

Retrieve the active status of a Service Orchestration.

PagerdutyApi.UpdateServiceOrchestrationStatus

Update the active status of a service orchestration.

PagerdutyApi.ListCacheVariables

Retrieve cache variables for a global event orchestration.

PagerdutyApi.CreateCacheVariableEventOrchestration

Create a cache variable for global event orchestration rules.

PagerdutyApi.GetCacheVariableGlobalEvent

Retrieve a cache variable for a global event orchestration.

PagerdutyApi.UpdateCacheVariable

Update a cache variable for event orchestration rules.

PagerdutyApi.DeleteCacheVariableGlobalEvent

Delete a cache variable for a global event orchestration.

PagerdutyApi.GetExternalDataCacheVar

Retrieve external data Cache Variable data from Global Orchestration.

PagerdutyApi.UpdateExternalDataCacheVariable

Update values for external data cache variables in global event orchestration.

PagerdutyApi.DeleteExternalDataCacheVariable

Deletes external data cache variable for event orchestration.

PagerdutyApi.ListCacheVariablesForServiceEventOrchestration

Retrieve cache variables for service event orchestration.

PagerdutyApi.AddCacheVariableToServiceEvent

Create a cache variable for a service event orchestration.

PagerdutyApi.GetServiceEventCacheVariable

Get a cache variable for a service event orchestration.

PagerdutyApi.UpdateServiceEventCacheVariable

Update a cache variable for a service event orchestration.

PagerdutyApi.DeleteServiceCacheVariable

Delete a cache variable for a service event orchestration.

PagerdutyApi.GetServiceEventCacheData

Retrieve external data cache variable for event orchestration.

PagerdutyApi.UpdateCacheVariableData

Update cache variable data for service event orchestration.

PagerdutyApi.RemoveServiceCacheVariable

Delete external data cache variable on a service orchestration.

PagerdutyApi.ListEventOrchestrationEnablings

Retrieve feature enablement settings for Event Orchestrations.

PagerdutyApi.UpdateEventOrchestrationFeatures

Update features for Event Orchestration in PagerDuty.

PagerdutyApi.ListExtensionSchemas

Retrieve a list of all PagerDuty extension schemas.

PagerdutyApi.GetExtensionVendorDetails

Retrieve details of a specific PagerDuty extension vendor.

PagerdutyApi.ListExtensions

Retrieve a list of existing extensions and their details.

PagerdutyApi.CreateServiceExtension

Create a new extension for a service in PagerDuty.

PagerdutyApi.GetExtensionDetails

Retrieve details about a specific extension on PagerDuty.

PagerdutyApi.DeleteExtension

Delete an existing extension in PagerDuty.

PagerdutyApi.UpdateExtension

Update an existing extension in PagerDuty.

PagerdutyApi.EnablePagerdutyExtension

Enable a disabled extension on PagerDuty.

PagerdutyApi.ListIncidentWorkflows

Retrieve all incident workflows in your PagerDuty account.

PagerdutyApi.CreateIncidentWorkflow

Create a new incident workflow to automate actions.

PagerdutyApi.GetIncidentWorkflow

Retrieve an existing Incident Workflow.

PagerdutyApi.DeleteIncidentWorkflow

Deletes an existing incident workflow in PagerDuty.

PagerdutyApi.UpdateIncidentWorkflow

Updates an existing incident workflow in PagerDuty.

PagerdutyApi.StartIncidentWorkflow

Start an instance of an incident workflow for automation.

PagerdutyApi.ListIncidentWorkflowActions

Retrieve a list of incident workflow actions.

PagerdutyApi.GetIncidentWorkflowAction

Retrieve details of an incident workflow action.

PagerdutyApi.ListIncidentWorkflowTriggers

Retrieve a list of existing incident workflow triggers.

PagerdutyApi.CreateIncidentWorkflowTrigger

Initiate a new PagerDuty incident workflow trigger.

PagerdutyApi.GetIncidentWorkflowTrigger

Retrieve an existing Incident Workflows Trigger.

PagerdutyApi.UpdateIncidentWorkflowTrigger

Update an existing incident workflow trigger.

PagerdutyApi.DeleteIncidentWorkflowTrigger

Deletes an existing incident workflow trigger using its ID.

PagerdutyApi.AssociateServiceToIncidentWorkflowTrigger

Associate a service with an existing incident workflow trigger.

PagerdutyApi.RemoveServiceFromIncidentTrigger

Remove a service from an incident workflow trigger.

PagerdutyApi.ListExistingIncidents

Retrieve a list of existing incidents.

PagerdutyApi.UpdateIncidents

Manage the status of multiple incidents.

PagerdutyApi.CreateIncident

Create an incident in PagerDuty.

PagerdutyApi.GetIncidentDetails

Retrieve detailed information about a PagerDuty incident.

PagerdutyApi.ManageIncidentStatus

Manage PagerDuty incident status and assignments.

PagerdutyApi.ListIncidentAlerts

Retrieve alerts for a specified incident.

PagerdutyApi.ResolveOrReassociateIncidentAlerts

Resolve or reassign alerts to incidents.

PagerdutyApi.GetIncidentAlertDetails

Retrieve detailed information about a specific alert.

PagerdutyApi.ResolveOrUpdateIncidentAlert

Resolve an alert or update its associated incident.

PagerdutyApi.UpdateIncidentServiceImpact

Update the impact of an incident on a business service.

PagerdutyApi.GetImpactedBusinessServices

Retrieve business services impacted by an incident.

PagerdutyApi.GetCustomFieldValues

Retrieve custom field values for a specific incident.

PagerdutyApi.UpdateIncidentCustomFields

Update custom field values for a specific incident.

PagerdutyApi.ListIncidentLogEntries

Retrieve log entries for a specific incident.

PagerdutyApi.MergeIncidents

Merge source incidents into a target incident.

PagerdutyApi.ListIncidentNotes

List notes for a specific incident.

PagerdutyApi.AddIncidentNote

Add a new note to a specific incident.

PagerdutyApi.GetOutlierIncidentInfo

Retrieve information about an outlier incident for a service.

PagerdutyApi.RetrievePastIncidents

Retrieve past incidents with similar metadata.

PagerdutyApi.GetIncidentRelatedChangeEvents

Retrieve change events related to a specific incident.

PagerdutyApi.GetRelatedIncidents

Retrieve recent related incidents impacting services.

PagerdutyApi.CreateIncidentResponderRequest

Send a responder request for a specified incident.

PagerdutyApi.SnoozeIncident

Temporarily suspend alerts for an incident.

PagerdutyApi.UpdateIncidentStatus

Create a status update for a specific incident.

PagerdutyApi.GetIncidentNotificationSubscribers

Retrieve a list of notification subscribers for an incident.

PagerdutyApi.SubscribeIncidentNotifications

Subscribe entities to incident status update notifications.

PagerdutyApi.UnsubscribeIncidentNotification

Unsubscribe users from incident status update notifications.

PagerdutyApi.ListIncidentTypes

Retrieve available incident types from PagerDuty.

PagerdutyApi.CreateIncidentType

Create a new incident type in PagerDuty to categorize incidents.

PagerdutyApi.GetIncidentTypeDetails

Retrieve detailed information on a specific incident type.

PagerdutyApi.UpdateIncidentType

Update or categorize an incident type on PagerDuty.

PagerdutyApi.ListIncidentTypeCustomFields

List custom fields for a specified incident type.

PagerdutyApi.CreateIncidentTypeCustomField

Create a custom field for a specific incident type.

PagerdutyApi.GetIncidentTypeCustomField

Retrieve a custom field for a specific incident type.

PagerdutyApi.UpdateIncidentCustomField

Update a custom field for a specific incident type.

PagerdutyApi.DeleteIncidentTypeCustomField

Delete a custom field for a specified incident type.

PagerdutyApi.ListCustomFieldOptions

Retrieve options for a custom field in an incident type.

PagerdutyApi.CreateCustomFieldOption

Create a custom field option for incidents.

PagerdutyApi.GetCustomFieldOption

Retrieve a specific custom field option for an incident type.

PagerdutyApi.UpdateCustomFieldOption

Update a field option for a custom incident field.

PagerdutyApi.DeleteCustomFieldOption

Delete a custom field option for an incident type.

PagerdutyApi.ListUserLicenseAllocations

Retrieve licenses allocated to users in your account.

PagerdutyApi.ListAccountLicenses

Retrieve the list of licenses for your account.

PagerdutyApi.FetchIncidentLogs

Retrieve all incident log entries across the account.

PagerdutyApi.GetIncidentLogEntryDetails

Retrieve detailed information about a specific incident log entry.

PagerdutyApi.UpdateIncidentLogEntry

Update an existing incident log entry channel.

PagerdutyApi.ListMaintenanceWindows

Retrieve maintenance windows with optional filters for service or team.

PagerdutyApi.CreateMaintenanceWindow

Create a maintenance window for specified services.

PagerdutyApi.GetMaintenanceWindow

Retrieve details of an existing maintenance window in PagerDuty.

PagerdutyApi.DeleteMaintenanceWindow

Delete or end a maintenance window in PagerDuty.

PagerdutyApi.UpdateMaintenanceWindow

Update an existing maintenance window for services.

PagerdutyApi.ListNotifications

Retrieve notifications within a specified time range.

PagerdutyApi.DeleteOauthDelegations

Revoke OAuth app access for a user or account.

PagerdutyApi.ListOnCallEntries

Retrieve on-call entries for a specified time range.

PagerdutyApi.GetPausedIncidentReportAlerts

Retrieve recent paused incident report alerts.

PagerdutyApi.GetPausedIncidentReportCounts

Retrieve reporting counts for paused incident usage.

PagerdutyApi.ListIncidentPriorities

Retrieve a list of incident priorities by severity.

PagerdutyApi.ListRulesets

Retrieve a list of all rulesets from PagerDuty.

PagerdutyApi.CreateRuleset

Create a new ruleset to manage event routing.

PagerdutyApi.GetRuleset

Retrieve details of a ruleset from PagerDuty.

PagerdutyApi.UpdateRuleset

Update an existing ruleset in PagerDuty.

PagerdutyApi.DeleteRuleset

Delete an existing ruleset in PagerDuty.

PagerdutyApi.ListEventRules

Retrieve all event rules within a specified ruleset.

PagerdutyApi.CreateEventRule

Create a new event rule within a ruleset.

PagerdutyApi.GetEventRule

Retrieve details of an event rule from a ruleset.

PagerdutyApi.UpdateEventRule

Update an existing event rule within a ruleset.

PagerdutyApi.DeleteEventRule

Delete an event rule from a specified ruleset.

PagerdutyApi.ListOnCallSchedules

Retrieve the on-call schedules from PagerDuty.

PagerdutyApi.CreateOnCallSchedule

Create a new on-call schedule for users.

PagerdutyApi.GetScheduleDetails

Retrieve detailed schedule information.

PagerdutyApi.DeleteSchedule

Delete an on-call schedule.

PagerdutyApi.UpdateOnCallSchedule

Update an existing on-call schedule in PagerDuty.

PagerdutyApi.ListScheduleAuditRecords

Retrieve sorted audit records for a specific schedule.

PagerdutyApi.ListScheduleOverrides

Fetch overrides for a specific schedule and time range.

PagerdutyApi.CreateScheduleOverride

Create schedule overrides for specific users and time ranges.

PagerdutyApi.DeleteScheduleOverride

Remove or truncate an on-call schedule override.

PagerdutyApi.ListOnCallUsers

Retrieve users on call for a given schedule and time range.

PagerdutyApi.PreviewOnCallSchedule

Generate a preview of an on-call schedule without saving it.

PagerdutyApi.CreateServiceDependency

Creates dependencies between two services in PagerDuty.

PagerdutyApi.GetBusinessServiceDependencies

Retrieve immediate dependencies of a Business Service.

PagerdutyApi.RemoveServiceDependency

Disassociate dependencies between two services.

PagerdutyApi.GetServiceDependencies

Fetch immediate dependencies of a technical service.

PagerdutyApi.ListServices

Retrieve a list of existing services.

PagerdutyApi.CreateNewService

Create a new service for incident management.

PagerdutyApi.GetServiceDetails

Retrieve details about an existing service.

PagerdutyApi.DeleteService

Remove a service to prevent new incident creation.

PagerdutyApi.UpdateServiceDetails

Update details of an existing service in PagerDuty.

PagerdutyApi.ListServiceAuditRecords

Retrieve service audit records sorted by execution time.

PagerdutyApi.ListServiceChangeEvents

Retrieve change events for a specific service.

PagerdutyApi.CreateServiceIntegration

Create a new integration for a specific service.

PagerdutyApi.UpdateServiceIntegration

Update an integration for a specific service.

PagerdutyApi.GetServiceIntegrationDetails

Retrieve details about a specific service integration.

PagerdutyApi.ListServiceEventRules

Retrieve a list of event rules for a specific service.

PagerdutyApi.CreateServiceEventRule

Create a new Event Rule on a Service in PagerDuty.

PagerdutyApi.ConvertServiceEventRules

Convert service event rules to orchestration rules.

PagerdutyApi.GetEventRuleFromService

Retrieve an event rule from a specified service.

PagerdutyApi.UpdateServiceEventRule

Update a specific event rule within a service.

PagerdutyApi.DeleteServiceEventRule

Delete an event rule from a service in PagerDuty.

PagerdutyApi.CreateServiceCustomField

Create a new custom field for services.

PagerdutyApi.ListServiceCustomFields

Retrieve the custom fields for PagerDuty services.

PagerdutyApi.GetServiceCustomFieldInfo

Retrieve detailed information about a custom field for a service.

PagerdutyApi.UpdateServiceCustomField

Update a custom field for a PagerDuty service.

PagerdutyApi.DeleteServiceCustomField

Deletes a custom field from a service.

PagerdutyApi.ListServiceCustomFieldOptions

Retrieve all options for a specific custom field in PagerDuty.

PagerdutyApi.AddServiceFieldOption

Create a new option for a custom field in PagerDuty services.

PagerdutyApi.GetServiceCustomFieldOption

Retrieve a service custom field option by field and option ID.

PagerdutyApi.UpdateServiceCustomFieldOption

Update a custom field option in a service.

PagerdutyApi.DeleteServiceCustomFieldOption

Delete a custom field option from a service.

PagerdutyApi.GetServiceCustomFieldValues

Retrieve custom field values for a specific service.

PagerdutyApi.SetServiceCustomFieldValues

Update custom field values for a specific service.

PagerdutyApi.ListServiceFeatureEnablements

List feature enablement settings for a service.

PagerdutyApi.UpdateServiceFeatureEnablement

Update the feature enablement for a service addon.

PagerdutyApi.RetrieveSessionConfigurations

Retrieve session configurations for a PagerDuty account.

PagerdutyApi.UpdateSessionConfigurations

Create or update session configurations in PagerDuty.

PagerdutyApi.DeletePagerdutySessionConfigurations

Delete session configurations for a PagerDuty account.

PagerdutyApi.GetAccountStandards

Retrieve all standards of an account.

PagerdutyApi.UpdateStandard

Updates a standard in PagerDuty.

PagerdutyApi.ListResourceStandards

Retrieve standards applied to multiple resources.

PagerdutyApi.GetResourceStandards

Retrieve standards applied to a specified resource on PagerDuty.

PagerdutyApi.GetStatusDashboards

Retrieve all custom Status Dashboard views for your account.

PagerdutyApi.GetStatusDashboard

Retrieve PagerDuty status dashboard details by ID.

PagerdutyApi.GetImpactedServicesDashboard

Get most impacted Business Services for a Status Dashboard.

PagerdutyApi.GetStatusDashboardBySlug

Retrieve a PagerDuty Status Dashboard by its URL slug.

PagerdutyApi.GetServiceImpactsByUrlSlug

Retrieve impacted business services from a status dashboard.

PagerdutyApi.ListStatusPages

Retrieve a list of status pages.

PagerdutyApi.ListStatusPageImpacts

Retrieve impacts for a specified status page by ID.

PagerdutyApi.GetStatusPageImpact

Retrieve impact details for a specific status page.

PagerdutyApi.ListStatusPageServices

Retrieve services for a specific Status Page by ID.

PagerdutyApi.GetStatusPageService

Get service details for a status page by ID and service ID.

PagerdutyApi.ListStatusPageSeverities

Retrieve severities for a specified status page.

PagerdutyApi.GetStatusPageSeverity

Retrieve severity details for a status page using IDs.

PagerdutyApi.ListStatusPageStatuses

Retrieve statuses for a specific status page by ID.

PagerdutyApi.GetStatusPageStatus

Retrieve the status of a status page by ID and status ID.

PagerdutyApi.ListStatusPagePosts

Retrieve posts for a specific status page using its ID.

PagerdutyApi.CreateStatusPagePost

Create a status page post using a specific page ID.

PagerdutyApi.GetStatusPagePost

Retrieve a post from a specific status page.

PagerdutyApi.UpdateStatusPagePost

Update a post on a status page by its ID.

PagerdutyApi.DeleteStatusPagePost

Delete a post from a status page using its ID.

PagerdutyApi.ListStatusUpdates

Retrieve post updates for a specific status page and post ID.

PagerdutyApi.CreateStatusPagePostUpdate

Create a post update for a specific status page post.

PagerdutyApi.GetPostUpdate

Retrieve specific post updates by post and update IDs.

PagerdutyApi.ModifyStatusPagePostUpdate

Update a specific status page post update.

PagerdutyApi.DeleteStatusPagePostUpdate

Delete a specific post update on PagerDuty.

PagerdutyApi.GetPostmortemByPostId

Retrieve postmortem details using post ID.

PagerdutyApi.CreateStatusPagePostmortem

Create a postmortem for a status page post.

PagerdutyApi.UpdateStatusPagePostmortem

Update a postmortem for a specific post by ID.

PagerdutyApi.DeletePostmortem

Deletes a postmortem from a status page post by ID.

PagerdutyApi.ListStatusPageSubscriptions

Retrieve subscriptions for a specific status page by ID.

PagerdutyApi.CreateStatusPageSubscription

Subscribe to a status page by ID.

PagerdutyApi.GetStatusPageSubscription

Retrieve a status page subscription by ID.

PagerdutyApi.DeleteStatusPageSubscription

Delete a status page subscription by ID.

PagerdutyApi.ListAccountTags

Retrieve all tags for your account.

PagerdutyApi.CreateTag

Create a tag for filtering in PagerDuty.

PagerdutyApi.GetTagDetails

Retrieve details about a specific PagerDuty Tag.

PagerdutyApi.RemoveTag

Remove an existing tag from escalation policies, teams, or users.

PagerdutyApi.GetTagsByEntity

Retrieve related entities for a specific tag.

PagerdutyApi.CreateNewTeam

Create a new team with users and escalation policies.

PagerdutyApi.ListPagerdutyTeams

Retrieve a list of teams from your PagerDuty account.

PagerdutyApi.GetTeamDetails

Retrieve details about a specified team.

PagerdutyApi.DeleteTeamInPagerduty

Delete an existing team in PagerDuty.

PagerdutyApi.UpdateTeam

Update the details of an existing team.

PagerdutyApi.GetLatestTeamAuditRecords

Retrieve the latest audit records for a specific team.

PagerdutyApi.RemoveTeamEscalationPolicy

Remove an escalation policy from a team.

PagerdutyApi.AddEscalationPolicyToTeam

Add an escalation policy to a team.

PagerdutyApi.ListTeamMembers

Retrieve details of members in a specified team.

PagerdutyApi.GetTeamNotificationSubscriptions

Retrieve a team's notification subscriptions from PagerDuty.

PagerdutyApi.CreateTeamNotificationSubscriptions

Create notification subscriptions for a specified team.

PagerdutyApi.UnsubscribeTeamNotifications

Unsubscribe a team from specific notification subscriptions.

PagerdutyApi.RemoveUserFromTeam

Remove a user from a specific team in PagerDuty.

PagerdutyApi.AddUserToTeam

Add a user to a specified team on PagerDuty.

PagerdutyApi.GetTemplateList

Retrieve a list of all templates on an account.

PagerdutyApi.CreateAlertTemplate

Create a new alert or incident template.

PagerdutyApi.GetTemplateDetails

Retrieve details of a specific template using its ID.

PagerdutyApi.UpdateTemplate

Update an existing template in PagerDuty.

PagerdutyApi.DeleteTemplate

Delete a specific template on the PagerDuty account.

PagerdutyApi.RenderStatusUpdateTemplate

Renders a status update template with given incident data.

PagerdutyApi.GetTemplateFields

Retrieve fields for account templates.

PagerdutyApi.ListPagerdutyUsers

Retrieve users from your PagerDuty account.

PagerdutyApi.CreatePagerdutyUser

Create a new user in PagerDuty for account interaction.

PagerdutyApi.GetUserDetails

Retrieve details about a specific PagerDuty user.

PagerdutyApi.RemoveUserFromPagerduty

Remove an existing user from PagerDuty.

PagerdutyApi.UpdatePagerdutyUser

Update an existing PagerDuty user's information.

PagerdutyApi.GetUserAuditRecords

Retrieve audit records for a specified user.

PagerdutyApi.GetUserContactMethods

Retrieve a user's contact methods from PagerDuty.

PagerdutyApi.CreateUserContactMethod

Create a new contact method for a PagerDuty user.

PagerdutyApi.GetUserContactMethodInfo

Retrieve details about a user's contact method in PagerDuty.

PagerdutyApi.RemoveUserContactMethod

Remove a user's contact method from PagerDuty.

PagerdutyApi.UpdateUserContactMethod

Update a user's contact method on PagerDuty.

PagerdutyApi.GetUserLicense

Retrieve the license allocated to a user.

PagerdutyApi.ListUserNotificationRules

Retrieve a PagerDuty user's notification rules.

PagerdutyApi.CreateUserNotificationRule

Create a new user notification rule in PagerDuty.

PagerdutyApi.GetUserNotificationRule

Retrieve details about a user's notification rule.

PagerdutyApi.RemoveUserNotificationRule

Remove a user's notification rule on PagerDuty.

PagerdutyApi.UpdateUserNotificationRule

Update a user's notification rule in PagerDuty.

PagerdutyApi.GetUserNotificationSubscriptions

Retrieve a user's notification subscriptions.

PagerdutyApi.CreateUserNotificationSubscriptions

Create new notification subscriptions for a user.

PagerdutyApi.UnsubscribeUserNotifications

Unsubscribe a user from notification subscriptions.

PagerdutyApi.ListUserHandoffNotificationRules

List handoff notification rules for a PagerDuty user.

PagerdutyApi.CreateHandoffNotificationRule

Create a handoff notification rule for PagerDuty users.

PagerdutyApi.GetUserHandoffNotificationRule

Fetch a user's handoff notification rule details.

PagerdutyApi.DeleteUserHandoffNotificationRule

Remove a handoff notification rule for a PagerDuty user.

PagerdutyApi.UpdateUserHandoffNotification

Update a user's handoff notification rule in PagerDuty.

PagerdutyApi.GetUserActiveSessions

List active sessions of a specified PagerDuty user.

PagerdutyApi.GetUserSessionDetails

Fetches details about a specific PagerDuty user session.

PagerdutyApi.GetUserNotificationRules

Retrieve status update notification rules for a PagerDuty user.

PagerdutyApi.CreateUserStatusUpdateNotificationRule

Create a new status update notification rule for a user.

PagerdutyApi.GetUserStatusUpdateNotificationRule

Get details about a user's status update notification rule.

PagerdutyApi.RemoveUserStatusUpdateNotificationRule

Removes a user's status update notification rule in PagerDuty.

PagerdutyApi.UpdateUserStatusNotificationRule

Update a user's status update notification rule.

PagerdutyApi.GetCurrentUserDetails

Retrieves details about the current PagerDuty user.

PagerdutyApi.ListAllVendors

Retrieve a list of all vendor integrations.

PagerdutyApi.GetVendorDetails

Fetch detailed information about a specific vendor on PagerDuty.

PagerdutyApi.ListWebhookSubscriptions

Retrieve existing webhook subscriptions from PagerDuty.

PagerdutyApi.CreateWebhookSubscription

Create a new webhook subscription in PagerDuty.

PagerdutyApi.GetWebhookSubscriptionDetails

Retrieve details about a specific webhook subscription.

PagerdutyApi.UpdateWebhookSubscription

Update an existing webhook subscription.

PagerdutyApi.DeleteWebhookSubscription

Delete a webhook subscription in PagerDuty.

PagerdutyApi.EnableWebhookSubscription

Enable a temporarily disabled webhook subscription.

PagerdutyApi.TestWebhookSubscription

Test a webhook subscription by firing a test event.

PagerdutyApi.ListOauthClients

Retrieve all OAuth clients for webhook subscriptions.

PagerdutyApi.CreateOauthClient

Create a new OAuth client for webhook subscriptions.

PagerdutyApi.GetOauthClientDetails

Retrieve details of a specific OAuth client by ID.

PagerdutyApi.UpdateOauthClient

Update an existing OAuth client configuration.

PagerdutyApi.DeleteOauthClient

Delete an OAuth client from webhook subscriptions.

PagerdutyApi.ListWorkflowIntegrations

Retrieve a list of available workflow integrations.

PagerdutyApi.GetWorkflowIntegrationDetails

Retrieve details about a PagerDuty workflow integration.

PagerdutyApi.ListWorkflowIntegrationConnections

Retrieve all workflow integration connections from PagerDuty.

PagerdutyApi.GetWorkflowConnections

Retrieve connections for a specific workflow integration.

PagerdutyApi.CreateWorkflowIntegrationConnection

Create a new workflow integration connection in PagerDuty.

PagerdutyApi.GetWorkflowIntegrationConnectionDetails

Retrieve details of a Workflow Integration Connection.

PagerdutyApi.UpdateWorkflowIntegrationConnection

Update an existing Workflow Integration Connection.

PagerdutyApi.DeleteWorkflowIntegrationConnection

Delete a Workflow Integration Connection on PagerDuty.

If you need to perform an action that’s not listed here, you can [get in touch with us](mailto:contact@arcade.dev) to request a new tool, or [create your own tools](/guides/create-tools/tool-basics/build-mcp-server.md).

## PagerdutyApi.AssignTagsToPagerdutyEntity



Assign tags to PagerDuty entities like policies, teams, or users.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **entity\_type** (`string`, optional) Specify the entity type to tag. Options: ‘users’, ‘teams’, ‘escalation\_policies’. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **resource\_id** (`string`, optional) The unique identifier of the PagerDuty entity to assign tags to. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.GetTagsByEntityId



Retrieve tags for Users, Teams, or Escalation Policies.

**Parameters**

-   **entity\_id** (`string`, required) The unique identifier of the resource for which to retrieve tags. This ID corresponds to a specific User, Team, or Escalation Policy.
-   **entity\_type** (`string`, required) Specifies the type of entity (users, teams, escalation\_policies) to retrieve related tags for.
-   **include\_total\_in\_response** (`boolean`, optional) Set to true to include the total number of results in the pagination response.
-   **pagination\_offset** (`integer`, optional) The offset position to start paginating search results. Useful for browsing through large sets of data.
-   **results\_per\_page** (`integer`, optional) The number of results to return per page when retrieving tags.

## PagerdutyApi.GetAccountAbilities



Retrieve your account’s available abilities by feature name.

**Parameters**

This tool does not take any parameters.

## PagerdutyApi.CheckAbilityStatus



Check if your account has a specific ability.

**Parameters**

-   **resource\_id** (`string`, required) The unique ID of the resource or ability to check on your account.

## PagerdutyApi.ListAddons



Retrieve all installed add-ons on your PagerDuty account.

**Parameters**

-   **addon\_type\_filter** (`string`, optional) Filters the results, showing only Add-ons of the specified type, such as ‘full\_page\_addon’ or ‘incident\_show\_addon’.
-   **filter\_by\_service\_ids** (`array[string]`, optional) An array of service IDs to filter results, showing only Add-ons for these services.
-   **include\_additional\_models** (`string`, optional) Specify additional models to include in the response, such as ‘services’.
-   **include\_total\_field** (`boolean`, optional) Set to true to include the total count of results in the response, which can affect response times.
-   **pagination\_start\_offset** (`integer`, optional) Offset to start pagination of search results. This determines where to begin the list of add-ons.
-   **results\_per\_page** (`integer`, optional) Specify the number of results to return per page.

## PagerdutyApi.InstallPagerdutyAddon



Install an add-on for your PagerDuty account.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.GetAddonDetails



Retrieve detailed information about a PagerDuty add-on.

**Parameters**

-   **addon\_id** (`string`, required) The unique ID of the PagerDuty add-on to retrieve details for.

## PagerdutyApi.RemoveAddon



Remove an existing add-on from PagerDuty.

**Parameters**

-   **resource\_id** (`string`, required) The unique identifier for the add-on to be removed.

## PagerdutyApi.UpdatePagerdutyAddon



Update an existing add-on in PagerDuty.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **resource\_id** (`string`, optional) The unique identifier for the add-on resource to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.ListAlertGroupingSettings



Retrieve all alert grouping settings.

**Parameters**

-   **include\_total\_in\_response** (`boolean`, optional) Set to true to include the total number of records in the response; default is null for faster responses.
-   **pagination\_cursor\_after** (`string`, optional) Cursor to retrieve the next page of results; used if additional data pages exist.
-   **previous\_page\_cursor** (`string`, optional) Cursor to retrieve the previous page; use only if not on the first page.
-   **results\_per\_page** (`integer`, optional) Specify the number of alert grouping settings to display per page.
-   **service\_id\_list** (`array[string]`, optional) An array of service IDs to filter results. Only results for these IDs will be returned.

## PagerdutyApi.CreateAlertGroupingSetting



Create a new Alert Grouping Setting in PagerDuty.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.GetAlertGroupingSetting



Retrieve an existing alert grouping setting.

**Parameters**

-   **resource\_id** (`string`, required) The unique identifier for the alert grouping setting you want to retrieve.

## PagerdutyApi.DeleteAlertGroupingSetting



Delete an existing alert grouping setting.

**Parameters**

-   **alert\_grouping\_setting\_id** (`string`, required) The ID of the alert grouping setting to be deleted. This identifies the specific resource in PagerDuty.

## PagerdutyApi.UpdateAlertGroupingSetting



Update an existing alert grouping setting in PagerDuty.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **resource\_id** (`string`, optional) The ID of the alert grouping setting to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.GetIncidentMetrics



Retrieve aggregated metrics for PagerDuty incidents.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.GetEscalationPolicyMetrics



Get aggregated incident metrics by escalation policy.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.FetchIncidentMetrics



Get aggregated metrics across all escalation policies.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.GetIncidentAnalyticsMetrics



Retrieve aggregated incident metrics by service over time.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.GetAggregatedIncidentMetrics



Retrieve aggregated incident metrics across all services.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.GetTeamIncidentMetrics



Fetch aggregated incident metrics by team and time unit.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.GetAnalyticsMetricsForAllTeams



Fetches aggregated incident metrics across all teams.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.GetAnalyticsMetricsPdAdvanceUsage



Retrieve aggregated metrics for PD Advance usage.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.RetrieveAnalyticsData



Provides aggregated incident metrics for selected responders.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.FetchResponderTeamMetrics



Fetch incident metrics for team responders.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.GetIncidentAnalytics



Fetch enriched incident metrics and data from PagerDuty Analytics.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.GetEnrichedIncidentData



Retrieve enriched incident metrics for a specific incident.

**Parameters**

-   **incident\_id** (`string`, required) The unique identifier for the incident to retrieve analytics for.

## PagerdutyApi.GetIncidentResponseAnalytics



Provides enriched responder data for a single incident.

**Parameters**

-   **incident\_id** (`string`, required) The ID of the incident to retrieve analytics for.
-   **display\_order** (`string`, optional) Specifies the order to display results: ‘asc’ for ascending, ‘desc’ for descending. Defaults to ‘desc’.
-   **order\_results\_by\_column** (`string`, optional) Specify the column to use for ordering the results, such as ‘requested\_at’.
-   **results\_limit** (`integer`, optional) The number of results to include in each batch. Acceptable values range from 1 to 1000.
-   **time\_zone\_for\_results** (`string`, optional) The time zone to use for displaying the results.

## PagerdutyApi.GetResponderIncidentAnalytics



Retrieve enriched incident metrics for a specific responder.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **responder\_id** (`string`, optional) The unique identifier of the responder whose incident metrics are to be retrieved. It is required to specify which responder’s data is needed. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.ListAuditRecords



Retrieve audit trail records from PagerDuty.

**Parameters**

-   **action\_filters** (`string`, optional) Filter the audit records by specific actions such as ‘create’, ‘update’, or ‘delete’.
-   **actor\_type\_filter** (`string`, optional) Specifies the type of actor to filter the audit records by. Acceptable values are ‘user\_reference’, ‘api\_key\_reference’, or ‘app\_reference’.
-   **end\_date\_range** (`string`, optional) Specifies the end date for the audit record search. Defaults to now if not specified and cannot exceed 31 days after the start date.
-   **filter\_by\_actor\_id** (`string`, optional) Filter audit records by actor ID. Requires `actor_type` to be specified.
-   **method\_truncated\_token** (`string`, optional) Filter records by method truncated token. Requires ‘method\_type’ parameter for qualification.
-   **method\_type\_filter** (`string`, optional) Specify the method type for filtering audit records. Options include ‘browser’, ‘oauth’, ‘api\_token’, ‘identity\_provider’, and ‘other’.
-   **next\_result\_cursor** (`string`, optional) Use this to fetch the next set of results. Typically acquired from the `next_cursor` of the prior request. If not provided, it starts from the beginning of the result set.
-   **record\_limit** (`integer`, optional) Specifies the maximum number of audit records to return. It is either the requested limit or the API’s maximum request size.
-   **resource\_type\_filter** (`string`, optional) Filter records by specified root resource types such as users, teams, or services.
-   **start\_date** (`string`, optional) The start date for the search range. Defaults to 24 hours ago if not specified.

## PagerdutyApi.CreateAutomationAction



Create a script, process, or runbook automation action.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.ListAutomationActions



Retrieve all automation actions with optional query filters.

**Parameters**

-   **classification\_filter** (`string`, optional) Filters results to include only those matching the specified classification, such as ‘diagnostic’ or ‘remediation’.
-   **filter\_by\_action\_type** (`string`, optional) Filter results to include only those matching the specified action type. Accepts ‘script’ or ‘process\_automation’.
-   **filter\_by\_name** (`string`, optional) Filters results to include actions matching the specified name using case insensitive substring matching.
-   **filter\_by\_runner\_id** (`string`, optional) Filter results to include actions linked to a specific runner. Use ‘any’ to include only those linked to any runner, excluding unlinked actions.
-   **filter\_by\_service\_id** (`string`, optional) Filters results to include only those actions associated with the specified service ID.
-   **filter\_by\_team\_id** (`string`, optional) Filters results to include actions associated with a specified team by providing its ID.
-   **max\_results** (`integer`, optional) Maximum number of results to return, limited by the API’s maximum request size.
-   **next\_page\_cursor** (`string`, optional) Cursor to request the next set of results, typically obtained from the previous response.

## PagerdutyApi.GetAutomationAction



Retrieve details of a specific automation action.

**Parameters**

-   **resource\_id** (`string`, required) The unique identifier for the automation action to retrieve.

## PagerdutyApi.DeleteAutomationAction



Delete an automation action by ID.

**Parameters**

-   **resource\_id** (`string`, required) The unique ID of the automation action to be deleted. Required for identifying the specific resource.

## PagerdutyApi.UpdateAutomationAction



Update an existing automation action.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **resource\_id** (`string`, optional) The unique identifier of the automation action to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.InvokeAutomationAction



Triggers an automation action in PagerDuty.

**Parameters**

-   **incident\_id** (`string`, required) The ID of the incident associated with the automation action invocation. This ties the action to a specific incident.
-   **resource\_id** (`string`, required) The unique identifier for the resource to be invoked.
-   **alert\_id\_metadata** (`string`, optional) The alert ID to be used in the invocation metadata for the automation action. This identifier specifies which alert is associated with the action.

## PagerdutyApi.GetServiceReferencesForAutomationAction



Retrieve services linked to a specific automation action.

**Parameters**

-   **resource\_id** (`string`, required) The unique identifier for the automation action resource.

## PagerdutyApi.AssociateAutomationActionWithService



Associate an Automation Action with a service.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **resource\_id** (`string`, optional) The unique identifier of the resource to be associated with the service. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.GetAutomationActionServiceAssociation



Retrieve details of an Automation Action and service relation.

**Parameters**

-   **resource\_id** (`string`, required) The ID of the resource to retrieve details about. This identifies the specific Automation Action.
-   **service\_identifier** (`string`, required) The unique identifier for the service to retrieve its relation with the Automation Action.

## PagerdutyApi.DisassociateAutomationActionFromService



Disassociate an Automation Action from a service.

**Parameters**

-   **resource\_id** (`string`, required) The unique identifier of the resource to disassociate.
-   **service\_id** (`string`, required) The unique identifier of the service to be disassociated from the automation action. This should be provided as a string.

## PagerdutyApi.AssociateAutomationActionWithTeam



Associate an Automation Action with a team.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **resource\_id** (`string`, optional) The unique identifier of the resource to be associated with a team. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.GetTeamReferencesForAutomationAction



Retrieve teams associated with a specific automation action.

**Parameters**

-   **resource\_id** (`string`, required) The ID of the Automation Action resource to retrieve associated teams for.

## PagerdutyApi.DisassociateAutomationActionFromTeam



Disassociate an automation action from a team in PagerDuty.

**Parameters**

-   **resource\_id** (`string`, required) The ID of the automation action to disassociate from the team.
-   **team\_id** (`string`, required) The unique identifier of the team to be disassociated from an automation action.

## PagerdutyApi.GetAutomationActionTeamAssociation



Retrieve details of an Automation Action and team relationship.

**Parameters**

-   **resource\_id** (`string`, required) The unique ID of the resource (Automation Action) to retrieve details for.
-   **team\_id** (`string`, required) The unique identifier for the team associated with the Automation Action.

## PagerdutyApi.ListAutomationActionInvocations



Retrieve a list of automation action invocations.

**Parameters**

-   **action\_id** (`string`, optional) The unique identifier for the action to filter invocations by.
-   **exclude\_invocation\_state** (`string`, optional) Filter out invocations not in the specified state. Supported states: prepared, created, sent, queued, running, aborted, completed, error, unknown.
-   **filter\_by\_invocation\_state** (`string`, optional) Filter the invocations by their state. Options include ‘prepared’, ‘created’, ‘sent’, ‘queued’, ‘running’, ‘aborted’, ‘completed’, ‘error’, or ‘unknown’.
-   **incident\_id** (`string`, optional) The unique identifier for the incident. Use this to filter invocations related to a specific incident.

## PagerdutyApi.GetAutomationActionInvocation



Retrieve details of an automation action invocation.

**Parameters**

-   **resource\_id** (`string`, required) The unique identifier of the automation action resource to retrieve.

## PagerdutyApi.CreateAutomationRunner



Create a Process or Runbook Automation runner.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.ListAutomationActionRunners



Retrieve a list of Automation Action runners.

**Parameters**

-   **include\_additional\_data\_elements** (`array[string]`, optional) List of additional data elements to include in the response. Each entry should be a string representing the type of data element to include.
-   **next\_cursor** (`string`, optional) Optional cursor for requesting the next set of results. Use the value obtained from a previous response’s `next_cursor`. If not provided, retrieval starts from the beginning.
-   **result\_limit** (`integer`, optional) Specifies the maximum number of Automation Action runners to return in the response. The actual response will have a minimum of this limit or the maximum allowed by the API.
-   **runner\_name\_filter** (`string`, optional) Filter results to include Automation Action runners with names matching this substring (case insensitive).

## PagerdutyApi.GetAutomationActionRunner



Retrieve details of an Automation Action runner by ID.

**Parameters**

-   **resource\_id** (`string`, required) The unique identifier for the Automation Action runner to retrieve details.

## PagerdutyApi.UpdateAutomationActionRunner



Update an Automation Action runner in PagerDuty.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **resource\_id** (`string`, optional) The unique identifier of the Automation Action runner to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.DeleteAutomationActionRunner



Delete an Automation Action runner by ID.

**Parameters**

-   **runner\_id** (`string`, required) The unique ID of the Automation Action runner to delete.

## PagerdutyApi.AssociateRunnerWithTeam



Associate a runner with a specified team.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **resource\_id** (`string`, optional) Unique identifier for the resource to associate a runner with a team in PagerDuty. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.GetRunnerTeamAssociations



Retrieve team references linked to a specific runner.

**Parameters**

-   **runner\_resource\_id** (`string`, required) The ID of the automation actions runner to retrieve associated team references for.

## PagerdutyApi.DisassociateRunnerFromTeam



Disassociate a runner from a team in PagerDuty.

**Parameters**

-   **resource\_id** (`string`, required) The unique ID of the resource to be disassociated from the team. This is required to identify the runner.
-   **team\_id** (`string`, required) The unique identifier for the team from which the runner will be disassociated.

## PagerdutyApi.GetRunnerTeamAssociation



Retrieve details of a runner and team relationship.

**Parameters**

-   **resource\_id** (`string`, required) The unique identifier for the resource to fetch runner-team association details.
-   **team\_identifier** (`string`, required) The unique ID representing the team for which the runner relation details are needed.

## PagerdutyApi.ListBusinessServices



Retrieve a list of existing business services.

**Parameters**

-   **include\_total\_count** (`boolean`, optional) Set to true to include the total count of results in the pagination response.
-   **pagination\_offset** (`integer`, optional) Offset to start pagination of the search results. Use this to skip a set number of entries.
-   **results\_per\_page** (`integer`, optional) Specify the number of results to display on each page.

## PagerdutyApi.CreateBusinessService



Create a new business service in PagerDuty.

**Parameters**

-   **business\_service\_description** (`string`, optional) Provide a description for the Business Service. This should clearly outline the service’s purpose and scope.
-   **business\_service\_name** (`string`, optional) The name of the Business Service to be created.
-   **business\_service\_owner** (`string`, optional) The owner or point of contact for the business service.
-   **team\_id** (`string`, optional) The unique identifier for the team associated with the business service.

## PagerdutyApi.GetBusinessServiceDetails



Retrieve details about a specific Business Service.

**Parameters**

-   **business\_service\_id** (`string`, required) The ID of the business service to retrieve details for.

## PagerdutyApi.DeleteBusinessService



Delete an existing Business Service in PagerDuty.

**Parameters**

-   **business\_service\_id** (`string`, required) The unique identifier of the Business Service to be deleted.

## PagerdutyApi.UpdateBusinessService



Update the details of a business service in PagerDuty.

**Parameters**

-   **resource\_id** (`string`, required) The unique identifier for the business service that needs updating.
-   **business\_service\_description** (`string`, optional) The description of the Business Service to be updated.
-   **business\_service\_name** (`string`, optional) The name of the Business Service to be updated.
-   **business\_service\_owner** (`string`, optional) Specify the owner of the Business Service. Typically, this should be the point of contact responsible for the service.
-   **team\_id** (`string`, optional) The ID of the team associated with the business service.

## PagerdutyApi.SubscribeToBusinessService



Subscribe your account to a PagerDuty business service.

**Parameters**

-   **resource\_id** (`string`, required) The ID of the business service resource to subscribe to.

## PagerdutyApi.UnsubscribeFromBusinessService



Unsubscribe an account from a business service.

**Parameters**

-   **business\_service\_id** (`string`, required) The unique identifier of the business service to unsubscribe from.

## PagerdutyApi.GetBusinessServiceSubscribers



Retrieve notification subscribers of a business service.

**Parameters**

-   **business\_service\_id** (`string`, required) The unique identifier for the business service to retrieve subscribers.

## PagerdutyApi.SubscribeBusinessServiceEntities



Subscribe entities to a specified business service.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **resource\_id** (`string`, optional) The unique identifier of the business service to which entities will be subscribed. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.RetrieveImpactfulSupportingBusinessServices



Retrieve top supporting Business Services by impact for a given service.

**Parameters**

-   **service\_id** (`string`, required) The unique identifier for the business service to retrieve its supporting services by impact.
-   **include\_additional\_fields** (`string`, optional) Specify additional fields to include, such as highest impacting priority or total impacted count. Accepts ‘services.highest\_impacting\_priority’ or ‘total\_impacted\_count’.
-   **resource\_ids** (`string`, optional) List of resource IDs to retrieve their supporting Business Services impacts. Include multiple IDs if needed.

## PagerdutyApi.UnsubscribeBusinessServiceNotifications



Unsubscribe users from Business Service notifications.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **resource\_id** (`string`, optional) The unique identifier of the resource to unsubscribe from. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.GetTopLevelImpactorsForBusinessServices



Retrieve high-priority incidents impacting top-level business services.

**Parameters**

-   **business\_service\_ids** (`string`, optional) List of business service IDs to fetch impactors for.

## PagerdutyApi.GetBusinessServiceImpacts



Get top-level Business Services sorted by highest impact.

**Parameters**

-   **business\_service\_ids** (`string`, optional) A list of specific Business Service IDs to retrieve impact information for.
-   **include\_additional\_fields** (`string`, optional) Specify additional fields to include, such as ‘services.highest\_impacting\_priority’ or ‘total\_impacted\_count’.

## PagerdutyApi.GetPriorityThresholds



Retrieve priority threshold details for an account.

**Parameters**

This tool does not take any parameters.

## PagerdutyApi.ClearBusinessServicePriorityThresholds



Clear priority thresholds for business services.

**Parameters**

This tool does not take any parameters.

## PagerdutyApi.SetBusinessServicePriority



Set the priority threshold for a business service.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.ListChangeEvents



Fetch a list of existing change events from PagerDuty.

**Parameters**

-   **end\_date\_utc** (`string`, optional) The end date in UTC ISO 8601 format for the date range to search. Note: Must be a valid UTC string.
-   **include\_total\_in\_pagination** (`boolean`, optional) Set to true to include the total count of results in pagination responses, which is null by default.
-   **integration\_ids** (`array[string]`, optional) Array of integration IDs; filters results to these integrations.
-   **pagination\_offset** (`integer`, optional) Offset to start retrieving paginated search results.
-   **results\_per\_page** (`integer`, optional) Specify the number of change event results to return per page.
-   **start\_date\_time\_utc** (`string`, optional) The start date and time for searching change events, in UTC ISO 8601 format.
-   **team\_ids** (`array[string]`, optional) Array of team IDs. Filters results to those teams. Requires ‘teams’ ability.

## PagerdutyApi.SendChangeEvent



Send a change event to PagerDuty’s API.

**Parameters**

This tool does not take any parameters.

## PagerdutyApi.GetChangeEventDetails



Retrieve detailed information about a Change Event.

**Parameters**

-   **change\_event\_id** (`string`, required) The unique identifier of the Change Event to retrieve details for.

## PagerdutyApi.UpdateChangeEvent



Updates an existing change event in PagerDuty.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **resource\_id** (`string`, optional) The unique identifier of the change event to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.ListEscalationPolicies



Retrieve all current escalation policies.

**Parameters**

-   **additional\_models\_to\_include** (`string`, optional) Array of models to include in the response. Options: ‘services’, ‘teams’, ‘targets’.
-   **filter\_by\_user\_ids** (`array[string]`, optional) Filters the results to show only escalation policies where any specified user is a target. Provide an array of user IDs.
-   **include\_total\_in\_pagination** (`boolean`, optional) Set to true to include the total count of records in the pagination response. False ensures faster response times by setting it to null.
-   **name\_filter\_query** (`string`, optional) A string to filter results by matching escalation policy names.
-   **pagination\_offset** (`integer`, optional) Offset to start pagination for search results.
-   **results\_per\_page** (`integer`, optional) Specifies the number of escalation policy results to display per page.
-   **sort\_by\_field** (`string`, optional) Specify the sorting field for results: ‘name’, ‘name:asc’, or ‘name:desc’.
-   **team\_ids** (`array[string]`, optional) A list of team IDs to filter escalation policies. Requires ‘teams’ ability.

## PagerdutyApi.CreateEscalationPolicy



Create a new escalation policy in PagerDuty.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **change\_tracking\_user\_email** (`string`, optional) The optional email address of a user for change tracking. Must be associated with the account making the request. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.GetEscalationPolicy



Retrieve details of an escalation policy and its rules.

**Parameters**

-   **resource\_id** (`string`, required) The unique identifier of the escalation policy to retrieve.
-   **include\_models** (`string`, optional) Specify additional models to include in the response, such as services, teams, or targets.

## PagerdutyApi.DeleteEscalationPolicy



Delete an existing escalation policy from PagerDuty.

**Parameters**

-   **escalation\_policy\_id** (`string`, required) The ID of the escalation policy to be deleted. Ensure the policy is not in use by any services and that you have the required permissions.

## PagerdutyApi.UpdateEscalationPolicy



Update an existing escalation policy and its rules.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **escalation\_policy\_id** (`string`, optional) The unique identifier of the escalation policy to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.GetEscalationPolicyAuditRecords



Retrieve audit records for a specific escalation policy.

**Parameters**

-   **resource\_id** (`string`, required) Identifier for the escalation policy to retrieve audit records for.
-   **end\_date\_of\_search** (`string`, optional) The end date of the search range. Defaults to now if not specified. Cannot exceed 31 days after the start date.
-   **next\_cursor** (`string`, optional) A string used to fetch the next set of results. Obtain from the `next_cursor` of the previous request. If empty, it starts from the beginning of the result set.
-   **result\_limit** (`integer`, optional) Specifies the maximum number of audit records to return. It’s the smaller of the provided limit or the API’s max size.
-   **start\_date\_for\_audit\_search** (`string`, optional) The start date for the audit record search. If not specified, defaults to 24 hours ago.

## PagerdutyApi.ListEventOrchestrations



Retrieve all Global Event Orchestrations from an account.

**Parameters**

-   **pagination\_offset** (`integer`, optional) The starting point for pagination in search results, specified as an integer.
-   **results\_per\_page** (`integer`, optional) The number of results to return per page when listing the Global Event Orchestrations.
-   **sort\_field\_with\_order** (`string`, optional) Specify the field and order (asc/desc) for sorting results. Options include: ‘name:asc’, ‘name:desc’, ‘routes:asc’, ‘routes:desc’, ‘created\_at:asc’, ‘created\_at:desc’.

## PagerdutyApi.CreateGlobalEventOrchestration



Create a Global Event Orchestration in PagerDuty.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.GetGlobalEventOrchestration



Retrieve details of a Global Event Orchestration by ID.

**Parameters**

-   **event\_orchestration\_id** (`string`, required) The unique identifier for the Event Orchestration to be retrieved.

## PagerdutyApi.UpdateEventOrchestration



Update a Global Event Orchestration in PagerDuty.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **event\_orchestration\_id** (`string`, optional) The unique identifier for the Event Orchestration to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.DeleteEventOrchestration



Delete a Global Event Orchestration on PagerDuty.

**Parameters**

-   **event\_orchestration\_id** (`string`, required) The ID of the Global Event Orchestration to delete.

## PagerdutyApi.ListOrchestrationIntegrations



Retrieve integrations for an event orchestration.

**Parameters**

-   **event\_orchestration\_id** (`string`, required) The unique identifier for the Event Orchestration to retrieve integrations for. This ID is necessary to specify which event orchestration’s integrations you wish to list.

## PagerdutyApi.CreateEventIntegration



Create an integration for event orchestration in PagerDuty.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **event\_orchestration\_id** (`string`, optional) The unique identifier for the Event Orchestration within PagerDuty. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.GetIntegrationDetails



Retrieve details of an orchestration integration.

**Parameters**

-   **event\_orchestration\_id** (`string`, required) The ID of the Event Orchestration to retrieve integration details for.
-   **integration\_id** (`string`, required) The ID of the integration to retrieve details for within an event orchestration in PagerDuty.

## PagerdutyApi.UpdateEventIntegration



Update an event orchestration integration.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **event\_orchestration\_id** (`string`, optional) The unique ID of the event orchestration to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **integration\_id\_for\_update** (`string`, optional) The ID of an Integration to update within the event orchestration. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.DeleteIntegrationRoutingKey



Delete an integration and its associated routing key.

**Parameters**

-   **event\_orchestration\_id** (`string`, required) The identifier for the Event Orchestration to be deleted.
-   **integration\_id** (`string`, required) The unique ID of the integration to be deleted. This is necessary to identify which integration and its routing key should be removed.

## PagerdutyApi.MigrateIntegrationToEventOrchestration



Migrate an integration to a different event orchestration.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **event\_orchestration\_id** (`string`, optional) The unique identifier of an Event Orchestration to migrate the integration to. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.GetGlobalOrchestrationRules



Retrieve global orchestration rules for an event.

**Parameters**

-   **event\_orchestration\_id** (`string`, required) The ID of the specific Event Orchestration to retrieve rules for.

## PagerdutyApi.UpdateEventOrchestrationGlobalRules



Update global orchestration rules for event orchestration.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **event\_orchestration\_id** (`string`, optional) The unique identifier for an Event Orchestration to update its global rules. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.GetGlobalOrchestrationRoutingRules



Retrieve Global Orchestration’s routing rules from PagerDuty.

**Parameters**

-   **event\_orchestration\_id** (`string`, required) The ID of the Event Orchestration to retrieve routing rules for.

## PagerdutyApi.UpdateOrchestrationRoutingRules



Update rules for routing events in Global Orchestration.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **event\_orchestration\_id** (`string`, optional) The unique identifier for the Event Orchestration to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.GetUnroutedEventOrchestrationRules



Retrieve rules for unrouted event orchestration in PagerDuty.

**Parameters**

-   **event\_orchestration\_id** (`string`, required) The unique identifier for the Event Orchestration to retrieve unrouted event rules.

## PagerdutyApi.UpdateUnroutedEventRules



Update rules for Unrouted events in Global Event Orchestration.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **event\_orchestration\_id** (`string`, optional) The unique identifier for the Event Orchestration to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.GetServiceOrchestration



Retrieve details of a service orchestration configuration.

**Parameters**

-   **service\_identifier** (`string`, required) The unique identifier for the service you want to retrieve orchestration details for.
-   **include\_models\_in\_response** (`string`, optional) Specify additional models like ‘migrated\_metadata’ to include in the response.

## PagerdutyApi.UpdateServiceOrchestration



Update a Service Orchestration with new event rules.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **service\_identifier** (`string`, optional) The unique identifier for the service to update the orchestration rules. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.GetServiceOrchestrationStatus



Retrieve the active status of a Service Orchestration.

**Parameters**

-   **service\_id** (`string`, required) The unique identifier for the service to check its orchestration status.

## PagerdutyApi.UpdateServiceOrchestrationStatus



Update the active status of a service orchestration.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **service\_id** (`string`, optional) The unique identifier for the service to update the orchestration status. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.ListCacheVariables



Retrieve cache variables for a global event orchestration.

**Parameters**

-   **event\_orchestration\_id** (`string`, required) The unique identifier for an Event Orchestration to retrieve its cache variables.

## PagerdutyApi.CreateCacheVariableEventOrchestration



Create a cache variable for global event orchestration rules.

**Parameters**

-   **event\_orchestration\_id** (`string`, required) The ID of an Event Orchestration for which the cache variable is to be created.

## PagerdutyApi.GetCacheVariableGlobalEvent



Retrieve a cache variable for a global event orchestration.

**Parameters**

-   **cache\_variable\_identifier** (`string`, required) The unique identifier for a Cache Variable in a global event orchestration.
-   **event\_orchestration\_id** (`string`, required) The ID of the event orchestration to retrieve the cache variable from.

## PagerdutyApi.UpdateCacheVariable



Update a cache variable for event orchestration rules.

**Parameters**

-   **cache\_variable\_id** (`string`, required) The ID of the cache variable to update for the event orchestration.
-   **event\_orchestration\_id** (`string`, required) The ID of the Event Orchestration to update the cache variable for.

## PagerdutyApi.DeleteCacheVariableGlobalEvent



Delete a cache variable for a global event orchestration.

**Parameters**

-   **cache\_variable\_id** (`string`, required) The unique identifier of the cache variable to delete.
-   **event\_orchestration\_id** (`string`, required) The unique identifier for the event orchestration from which the cache variable will be deleted.

## PagerdutyApi.GetExternalDataCacheVar



Retrieve external data Cache Variable data from Global Orchestration.

**Parameters**

-   **cache\_variable\_id** (`string`, required) Provide the ID of the Cache Variable whose data you want to retrieve.
-   **event\_orchestration\_id** (`string`, required) The unique identifier of an Event Orchestration to retrieve its cache variable data.

## PagerdutyApi.UpdateExternalDataCacheVariable



Update values for external data cache variables in global event orchestration.

**Parameters**

-   **cache\_variable\_id** (`string`, required) The unique identifier for a Cache Variable within the event orchestration. This ID is used to specify which cache variable’s data is to be updated.
-   **event\_orchestration\_id** (`string`, required) The unique identifier for an Event Orchestration to be updated.

## PagerdutyApi.DeleteExternalDataCacheVariable



Deletes external data cache variable for event orchestration.

**Parameters**

-   **cache\_variable\_id** (`string`, required) The ID of the cache variable to delete within the event orchestration.
-   **event\_orchestration\_id** (`string`, required) The unique identifier for the Event Orchestration to target for cache variable deletion.

## PagerdutyApi.ListCacheVariablesForServiceEventOrchestration



Retrieve cache variables for service event orchestration.

**Parameters**

-   **service\_id** (`string`, required) The unique identifier of the service. It specifies which service’s event orchestration cache variables to list.

## PagerdutyApi.AddCacheVariableToServiceEvent



Create a cache variable for a service event orchestration.

**Parameters**

-   **service\_identifier** (`string`, required) The ID of the service for which the cache variable is being created. This should be a string representing the unique identifier of the service.

## PagerdutyApi.GetServiceEventCacheVariable



Get a cache variable for a service event orchestration.

**Parameters**

-   **cache\_variable\_id** (`string`, required) The unique identifier of the cache variable to retrieve.
-   **service\_identifier** (`string`, required) The unique identifier of the service. Use this to specify the service whose event orchestration cache variable you want to access.

## PagerdutyApi.UpdateServiceEventCacheVariable



Update a cache variable for a service event orchestration.

**Parameters**

-   **cache\_variable\_id** (`string`, required) The ID of the cache variable to update for the service event orchestration.
-   **service\_identifier** (`string`, required) The unique identifier for the service to update the cache variable on a service event orchestration.

## PagerdutyApi.DeleteServiceCacheVariable



Delete a cache variable for a service event orchestration.

**Parameters**

-   **cache\_variable\_id** (`string`, required) The unique identifier for the cache variable to be deleted in the service event orchestration.
-   **service\_identifier** (`string`, required) The unique identifier for the service related to the event orchestration.

## PagerdutyApi.GetServiceEventCacheData



Retrieve external data cache variable for event orchestration.

**Parameters**

-   **cache\_variable\_id** (`string`, required) The ID of the Cache Variable to retrieve data for, used in service event orchestration.
-   **service\_identifier** (`string`, required) The unique identifier for the service to retrieve the cache variable data from.

## PagerdutyApi.UpdateCacheVariableData



Update cache variable data for service event orchestration.

**Parameters**

-   **cache\_variable\_id** (`string`, required) The unique identifier for the Cache Variable to be updated.
-   **service\_identifier** (`string`, required) A unique identifier for the service whose cache variable data is to be updated.

## PagerdutyApi.RemoveServiceCacheVariable



Delete external data cache variable on a service orchestration.

**Parameters**

-   **cache\_variable\_id** (`string`, required) The unique identifier for an external data cache variable to be deleted from the service event orchestration.
-   **service\_identifier** (`string`, required) The unique identifier for the service. Required for deleting cache variable data.

## PagerdutyApi.ListEventOrchestrationEnablings



Retrieve feature enablement settings for Event Orchestrations.

**Parameters**

-   **event\_orchestration\_id** (`string`, required) The unique identifier for a specific Event Orchestration in PagerDuty. This is required to retrieve its feature enablement settings.

## PagerdutyApi.UpdateEventOrchestrationFeatures



Update features for Event Orchestration in PagerDuty.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **event\_orchestration\_id** (`string`, optional) The unique identifier for an Event Orchestration to update features. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **feature\_enablement\_identifier** (`string`, optional) Specifies the feature enablement identifier for a product addon. Currently, only ‘aiops’ is supported. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.ListExtensionSchemas



Retrieve a list of all PagerDuty extension schemas.

**Parameters**

-   **include\_total\_in\_response** (`boolean`, optional) Set to true to populate the total field in pagination responses, providing the total count, which may affect response time.
-   **pagination\_offset** (`integer`, optional) The starting point for pagination in the result set, defined as the number of items to skip.
-   **results\_per\_page** (`integer`, optional) Specify the number of results to display per page.

## PagerdutyApi.GetExtensionVendorDetails



Retrieve details of a specific PagerDuty extension vendor.

**Parameters**

-   **resource\_id** (`string`, required) The unique identifier for the extension vendor resource.

## PagerdutyApi.ListExtensions



Retrieve a list of existing extensions and their details.

**Parameters**

-   **filter\_by\_extension\_object\_id** (`string`, optional) Filter the extensions by specifying the extension object’s ID you want to include.
-   **filter\_by\_extension\_vendor\_id** (`string`, optional) Specify the extension vendor ID to filter extensions by vendor.
-   **include\_details** (`string`, optional) Specify additional details to include, such as ‘extension\_objects’ or ‘extension\_schemas’.
-   **include\_total\_in\_response** (`boolean`, optional) Set to true to populate the total field in pagination responses, providing the total count of results.
-   **name\_query\_filter** (`string`, optional) Filter results to show only records whose name matches this query string.
-   **pagination\_offset** (`integer`, optional) Offset to begin pagination search results listing. Specify an integer value to set the starting point.
-   **results\_per\_page** (`integer`, optional) The number of results to return per page retrieval request.

## PagerdutyApi.CreateServiceExtension



Create a new extension for a service in PagerDuty.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.GetExtensionDetails



Retrieve details about a specific extension on PagerDuty.

**Parameters**

-   **resource\_id** (`string`, required) The unique identifier of the extension resource to retrieve details for.
-   **include\_additional\_details** (`string`, optional) Specify additional details to include, such as ‘extension\_schemas’, ‘extension\_objects’, or ‘temporarily\_disabled’.

## PagerdutyApi.DeleteExtension



Delete an existing extension in PagerDuty.

**Parameters**

-   **resource\_id** (`string`, required) The unique identifier of the extension to be deleted.

## PagerdutyApi.UpdateExtension



Update an existing extension in PagerDuty.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **resource\_id** (`string`, optional) The ID of the extension resource you want to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.EnablePagerdutyExtension



Enable a disabled extension on PagerDuty.

**Parameters**

-   **resource\_id** (`string`, required) The unique ID of the PagerDuty extension to enable.

## PagerdutyApi.ListIncidentWorkflows



Retrieve all incident workflows in your PagerDuty account.

**Parameters**

-   **filter\_by\_name** (`string`, optional) Filter results to show only records whose name matches the query.
-   **include\_additional\_details** (`string`, optional) Specify additional details to include, such as ‘steps’ or ‘team’.
-   **include\_total\_in\_pagination** (`boolean`, optional) Set to true to populate the `total` field in pagination responses, false otherwise to optimize for speed.
-   **pagination\_offset** (`integer`, optional) Offset to start pagination search results.
-   **results\_per\_page** (`integer`, optional) Specifies the number of results to return per page in the response.

## PagerdutyApi.CreateIncidentWorkflow



Create a new incident workflow to automate actions.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.GetIncidentWorkflow



Retrieve an existing Incident Workflow.

**Parameters**

-   **incident\_workflow\_id** (`string`, required) The ID of the Incident Workflow to be retrieved.

## PagerdutyApi.DeleteIncidentWorkflow



Deletes an existing incident workflow in PagerDuty.

**Parameters**

-   **resource\_id** (`string`, required) The unique identifier of the incident workflow to be deleted.

## PagerdutyApi.UpdateIncidentWorkflow



Updates an existing incident workflow in PagerDuty.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **incident\_workflow\_id** (`string`, optional) The unique ID of the incident workflow to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.StartIncidentWorkflow



Start an instance of an incident workflow for automation.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **resource\_id** (`string`, optional) The ID of the resource to start the incident workflow for. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.ListIncidentWorkflowActions



Retrieve a list of incident workflow actions.

**Parameters**

-   **filter\_by\_keyword** (`string`, optional) Show actions tagged with the specified keyword. Provide a specific keyword to filter results.
-   **max\_results\_limit** (`integer`, optional) The maximum number of incident workflow actions to return in a single request. This value is the lesser of the specified limit or the API’s maximum request size.
-   **pagination\_cursor** (`string`, optional) Optional parameter to fetch the next set of results. Use ‘next\_cursor’ from the previous response. Starts at the beginning if not provided.

## PagerdutyApi.GetIncidentWorkflowAction



Retrieve details of an incident workflow action.

**Parameters**

-   **resource\_id** (`string`, required) The unique ID of the incident workflow action to retrieve.

## PagerdutyApi.ListIncidentWorkflowTriggers



Retrieve a list of existing incident workflow triggers.

**Parameters**

-   **filter\_by\_service\_id** (`string`, optional) Show triggers for incidents in the given service. Cannot be used with `incident_id`.
-   **filter\_by\_trigger\_type** (`string`, optional) Specify the type of triggers to show, such as ‘manual’, ‘conditional’, or ‘incident\_type’.
-   **filter\_for\_disabled\_triggers** (`boolean`, optional) Set to true to filter for disabled triggers, false for enabled. This parameter is deprecated.
-   **incident\_id\_filter** (`string`, optional) Show triggers for the service of the specified incident. Cannot be used with `service_id`.
-   **maximum\_results** (`integer`, optional) Specify the maximum number of triggers to return. This limits the size of the response, constrained by the API’s maximum request size.
-   **pagination\_cursor** (`string`, optional) Optional parameter to request the next set of results, usually from the `next_cursor` field of a previous request. Starts at the beginning if not provided.
-   **sort\_triggers\_by** (`string`, optional) Specify the property to sort triggers, such as ‘workflow\_id asc’ or ‘workflow\_name desc’.
-   **workflow\_id\_filter** (`string`, optional) If provided, only show triggers configured to start the specified workflow, useful for listing services linked to a workflow.
-   **workflow\_name\_contains** (`string`, optional) Filter triggers by workflow names containing this value.

## PagerdutyApi.CreateIncidentWorkflowTrigger



Initiate a new PagerDuty incident workflow trigger.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.GetIncidentWorkflowTrigger



Retrieve an existing Incident Workflows Trigger.

**Parameters**

-   **incident\_workflow\_trigger\_id** (`string`, required) The unique ID of the Incident Workflow Trigger to be retrieved.

## PagerdutyApi.UpdateIncidentWorkflowTrigger



Update an existing incident workflow trigger.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **resource\_id** (`string`, optional) The ID of the incident workflow trigger to be updated in PagerDuty. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.DeleteIncidentWorkflowTrigger



Deletes an existing incident workflow trigger using its ID.

**Parameters**

-   **incident\_workflow\_trigger\_id** (`string`, required) The unique identifier of the incident workflow trigger to delete.

## PagerdutyApi.AssociateServiceToIncidentWorkflowTrigger



Associate a service with an existing incident workflow trigger.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **resource\_id** (`string`, optional) The unique identifier of the resource to associate with the incident workflow trigger. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.RemoveServiceFromIncidentTrigger



Remove a service from an incident workflow trigger.

**Parameters**

-   **service\_identifier** (`string`, required) The unique identifier for the service to remove from the incident workflow trigger.
-   **trigger\_identifier** (`string`, required) The unique identifier for the incident workflow trigger from which the service will be removed.

## PagerdutyApi.ListExistingIncidents



Retrieve a list of existing incidents.

**Parameters**

-   **additional\_details\_to\_include** (`string`, optional) Array of additional details to include in the incident list, such as ‘acknowledgers’, ‘agents’, ‘assignees’, etc.
-   **assigned\_user\_ids** (`array[string]`, optional) Return incidents currently assigned to specific users by providing their user IDs. Only incidents with statuses ‘triggered’ or ‘acknowledged’ are returned. Resolved incidents are not included.
-   **end\_date\_range** (`string`, optional) The end date of the range for searching incidents. Maximum range is 6 months; default is 1 month.
-   **filter\_by\_team\_ids** (`array[string]`, optional) Array of team IDs to filter incidents. Requires `teams` ability.
-   **ignore\_since\_until\_date\_range** (`string`, optional) Set to ‘all’ to ignore the ‘since’ and ‘until’ parameters, extending the search to all dates.
-   **incident\_deduplication\_key** (`string`, optional) A unique key to identify and retrieve specific incidents. Useful for querying by matching alert keys.
-   **incident\_statuses** (`string`, optional) Specify the list of incident statuses to filter by, such as ‘triggered’, ‘acknowledged’, or ‘resolved’.
-   **incident\_urgencies** (`string`, optional) Array of incident urgencies to filter results by. Valid values are ‘high’ or ‘low’. Defaults to all urgencies.
-   **include\_total\_in\_response** (`boolean`, optional) Set to true to include the total number of incidents in the response, which may reduce response speed.
-   **pagination\_offset** (`integer`, optional) Offset to start pagination of the incident search results. Specify the number of entries to skip before starting to collect the result set.
-   **render\_time\_zone** (`string`, optional) Specify the time zone for rendering results. Defaults to the account time zone.
-   **results\_per\_page** (`integer`, optional) The number of results per page. Specify up to a maximum of 100.
-   **service\_ids** (`array[string]`, optional) A list of service IDs to filter incidents associated with specific services.
-   **sort\_incidents\_by** (`array[string]`, optional) Specify fields and directions for sorting incidents, e.g., ‘created\_at:asc’. Separate fields with a comma.
-   **start\_date\_range** (`string`, optional) The start date to begin searching for incidents, within a 6-month range. Defaults to 1 month if not provided.

## PagerdutyApi.UpdateIncidents



Manage the status of multiple incidents.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **user\_email** (`string`, optional) The email address of a valid user associated with the account making the request. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **results\_per\_page** (`integer`, optional) Specifies the maximum number of incident results to return per page. Only used when mode is ‘execute’.
-   **pagination\_start\_offset** (`integer`, optional) Offset from where to start paginated search results. This is used to navigate search results effectively. Only used when mode is ‘execute’.
-   **include\_total\_in\_pagination** (`boolean`, optional) Set to true to populate the ‘total’ field in pagination responses. Otherwise, it remains null for faster response times. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.CreateIncident



Create an incident in PagerDuty.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **user\_email** (`string`, optional) The email address of a valid user associated with the account making the request. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.GetIncidentDetails



Retrieve detailed information about a PagerDuty incident.

**Parameters**

-   **incident\_id** (`string`, required) The unique identifier for the specific incident. Include either the incident ID or number to retrieve details.
-   **include\_details** (`string`, optional) List of additional incident details to include, such as ‘acknowledgers’, ‘agents’, ‘assignees’, etc.

## PagerdutyApi.ManageIncidentStatus



Manage PagerDuty incident status and assignments.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **incident\_id** (`string`, optional) The unique identifier of the incident to be managed. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **user\_email\_for\_request** (`string`, optional) Email address of a valid user associated with the account making the request. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.ListIncidentAlerts



Retrieve alerts for a specified incident.

**Parameters**

-   **incident\_id** (`string`, required) The unique identifier of the incident to retrieve alerts for.
-   **alert\_deduplication\_key** (`string`, optional) The unique key used for alert de-duplication.
-   **filter\_by\_statuses** (`string`, optional) Filter alerts by specific statuses, such as ‘triggered’ or ‘resolved’.
-   **include\_additional\_details** (`string`, optional) Specify additional details to include, such as services, first\_trigger\_log\_entries, or incidents.
-   **include\_pagination\_total** (`boolean`, optional) Set to `true` to include the total count of results in pagination responses for faster response times. Set to `false` for the default behavior of `null`, which is faster.
-   **results\_per\_page** (`integer`, optional) Specify the number of alert results per page for pagination.
-   **sort\_incident\_alerts\_by** (`string`, optional) Specify the field and order for sorting alerts (created\_at or resolved\_at, with ascending or descending options).
-   **start\_pagination\_offset** (`integer`, optional) Offset for starting the pagination in search results. Use for navigating through paginated data.

## PagerdutyApi.ResolveOrReassociateIncidentAlerts



Resolve or reassign alerts to incidents.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **incident\_resource\_id** (`string`, optional) The unique identifier for the incident resource to be resolved or reassociated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **user\_email** (`string`, optional) The email address of a valid user associated with the account making the request. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **results\_per\_page** (`integer`, optional) Specify the number of results to be returned per page. Must be an integer. Only used when mode is ‘execute’.
-   **pagination\_offset** (`integer`, optional) Offset for pagination to specify where search results should begin. Only used when mode is ‘execute’.
-   **populate\_total** (`boolean`, optional) Set to `true` to populate the `total` field in pagination responses, otherwise it remains `null` for faster response. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.GetIncidentAlertDetails



Retrieve detailed information about a specific alert.

**Parameters**

-   **alert\_identifier** (`string`, required) The unique identifier of the alert to retrieve details for.
-   **resource\_id** (`string`, required) The unique identifier for the resource. This ID is used to fetch specific alert details in PagerDuty.

## PagerdutyApi.ResolveOrUpdateIncidentAlert



Resolve an alert or update its associated incident.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **resource\_id** (`string`, optional) The unique identifier for the resource you want to update or resolve. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **alert\_id** (`string`, optional) The ID of the alert to resolve or update its parent incident. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **user\_email\_address** (`string`, optional) The email address of a valid user associated with the account making the request. Ensure it is linked to the account with necessary permissions. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.UpdateIncidentServiceImpact



Update the impact of an incident on a business service.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **resource\_id** (`string`, optional) The unique identifier for the incident resource to update impact. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **business\_service\_id** (`string`, optional) The ID of the specific business service affected by the incident. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.GetImpactedBusinessServices



Retrieve business services impacted by an incident.

**Parameters**

-   **incident\_id** (`string`, required) The ID of the incident to retrieve impacted business services for.

## PagerdutyApi.GetCustomFieldValues



Retrieve custom field values for a specific incident.

**Parameters**

-   **incident\_id** (`string`, required) The unique identifier for the incident whose custom field values are being requested.

## PagerdutyApi.UpdateIncidentCustomFields



Update custom field values for a specific incident.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **incident\_id** (`string`, optional) The ID of the incident to update custom field values. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.ListIncidentLogEntries



Retrieve log entries for a specific incident.

**Parameters**

-   **incident\_id** (`string`, required) The unique identifier for the incident to retrieve log entries for.
-   **additional\_models\_to\_include** (`string`, optional) Array of additional models to include in the response, such as ‘incidents’, ‘services’, ‘channels’, or ‘teams’.
-   **end\_date** (`string`, optional) Specify the end date for the log entry search range. Format as ‘YYYY-MM-DD’.
-   **include\_total\_in\_response** (`boolean`, optional) Set to true to populate the total field in pagination responses for more detailed information. Defaults to null for faster responses.
-   **pagination\_start\_offset** (`integer`, optional) Specifies the starting point for pagination to search results. Use an integer value.
-   **results\_per\_page** (`integer`, optional) Specify the number of results to display per page.
-   **results\_time\_zone** (`string`, optional) Time zone for rendering the results, defaults to the account time zone.
-   **return\_important\_changes\_only** (`boolean`, optional) If `true`, returns a subset of log entries showing only the most important changes to the incident.
-   **start\_date** (`string`, optional) The start date for the range to search log entries. Expected format: YYYY-MM-DDTHH:MM:SSZ.

## PagerdutyApi.MergeIncidents



Merge source incidents into a target incident.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **resource\_id** (`string`, optional) The ID of the target incident for merging source incidents. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **user\_email\_address** (`string`, optional) The email address of a valid user associated with the account making the request. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.ListIncidentNotes



List notes for a specific incident.

**Parameters**

-   **incident\_id** (`string`, required) The unique identifier for the incident whose notes you want to retrieve.

## PagerdutyApi.AddIncidentNote



Add a new note to a specific incident.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **incident\_id** (`string`, optional) The unique identifier of the incident to which the note will be added. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **user\_email\_address** (`string`, optional) The email address of a valid user associated with the account making the request. This must be an email registered with the PagerDuty account. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.GetOutlierIncidentInfo



Retrieve information about an outlier incident for a service.

**Parameters**

-   **incident\_resource\_id** (`string`, required) The unique identifier for the incident resource you want details about.
-   **include\_additional\_incident\_details** (`string`, optional) Include additional attributes for related incidents, specified as strings.
-   **start\_date\_range** (`string`, optional) The start date for the search range in YYYY-MM-DD format.

## PagerdutyApi.RetrievePastIncidents



Retrieve past incidents with similar metadata.

**Parameters**

-   **incident\_id** (`string`, required) The unique identifier of the incident. Used to fetch past incidents with similar metadata.
-   **include\_total\_past\_incidents** (`boolean`, optional) Set to true to include the total number of past incidents in the response. This may increase response time.
-   **results\_limit** (`integer`, optional) Specifies the maximum number of past incidents to return.

## PagerdutyApi.GetIncidentRelatedChangeEvents



Retrieve change events related to a specific incident.

**Parameters**

-   **incident\_id** (`string`, required) The unique identifier of the incident for which related change events are to be listed.
-   **results\_per\_page\_limit** (`integer`, optional) The maximum number of change events to return per page for a specific incident.

## PagerdutyApi.GetRelatedIncidents



Retrieve recent related incidents impacting services.

**Parameters**

-   **resource\_id** (`string`, required) The unique identifier of the resource to retrieve related incidents for.
-   **additional\_attributes** (`string`, optional) Array of additional attributes to include for each related incident. Use ‘incident’ as the value.

## PagerdutyApi.CreateIncidentResponderRequest



Send a responder request for a specified incident.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **incident\_id** (`string`, optional) The unique identifier for the incident requiring a responder request. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **user\_email** (`string`, optional) The email address of a valid user associated with the account making the request. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.SnoozeIncident



Temporarily suspend alerts for an incident.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **incident\_id** (`string`, optional) The unique ID of the incident to snooze. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **user\_email** (`string`, optional) The email address of a valid user associated with the account making the request. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.UpdateIncidentStatus



Create a status update for a specific incident.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **incident\_id** (`string`, optional) The ID of the incident to update. This is required to specify which incident the status update is for. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **requestor\_email** (`string`, optional) The email address of a valid user making the request in PagerDuty. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.GetIncidentNotificationSubscribers



Retrieve a list of notification subscribers for an incident.

**Parameters**

-   **incident\_id** (`string`, required) The unique identifier of the incident resource.

## PagerdutyApi.SubscribeIncidentNotifications



Subscribe entities to incident status update notifications.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **resource\_id** (`string`, optional) The ID of the resource to subscribe entities for notification updates. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.UnsubscribeIncidentNotification



Unsubscribe users from incident status update notifications.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **resource\_id** (`string`, optional) The unique identifier for the incident resource to unsubscribe from notifications. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.ListIncidentTypes



Retrieve available incident types from PagerDuty.

**Parameters**

-   **incident\_type\_filter** (`string`, optional) Filter incident types by their enabled state. Options: ‘enabled’, ‘disabled’, ‘all’.

## PagerdutyApi.CreateIncidentType



Create a new incident type in PagerDuty to categorize incidents.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.GetIncidentTypeDetails



Retrieve detailed information on a specific incident type.

**Parameters**

-   **incident\_type\_identifier** (`string`, required) The ID or name of the Incident Type to retrieve details for.

## PagerdutyApi.UpdateIncidentType



Update or categorize an incident type on PagerDuty.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **incident\_type\_id\_or\_name** (`string`, optional) The ID or name of the incident type to be updated. Specify to categorize the incident. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.ListIncidentTypeCustomFields



List custom fields for a specified incident type.

**Parameters**

-   **incident\_type\_id\_or\_name** (`string`, required) The ID or name of the incident type to retrieve custom fields for.
-   **include\_additional\_details** (`string`, optional) Specify additional details to include, such as ‘field\_options’.

## PagerdutyApi.CreateIncidentTypeCustomField



Create a custom field for a specific incident type.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **incident\_type\_id\_or\_name** (`string`, optional) The ID or name of the incident type for which the custom field is created. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.GetIncidentTypeCustomField



Retrieve a custom field for a specific incident type.

**Parameters**

-   **field\_id** (`string`, required) The ID of the custom field to retrieve for the incident type.
-   **incident\_type\_id\_or\_name** (`string`, required) The ID or name of the Incident Type for which to retrieve the custom field.
-   **include\_field\_details** (`string`, optional) Specify additional details, such as ‘field\_options’, to include in the response.

## PagerdutyApi.UpdateIncidentCustomField



Update a custom field for a specific incident type.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **incident\_type\_identifier** (`string`, optional) The ID or name of the specific incident type to update the custom field for. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **field\_identifier** (`string`, optional) Provide the unique ID of the field to be updated for the incident type. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.DeleteIncidentTypeCustomField



Delete a custom field for a specified incident type.

**Parameters**

-   **field\_id** (`string`, required) The unique identifier of the custom field to be deleted.
-   **incident\_type\_id\_or\_name** (`string`, required) The ID or name of the specific incident type to delete a custom field from.

## PagerdutyApi.ListCustomFieldOptions



Retrieve options for a custom field in an incident type.

**Parameters**

-   **field\_identifier** (`string`, required) The unique identifier for the custom field.
-   **incident\_type\_identifier** (`string`, required) The ID or name of the Incident Type for which to retrieve custom field options.

## PagerdutyApi.CreateCustomFieldOption



Create a custom field option for incidents.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **incident\_type\_id\_or\_name** (`string`, optional) The ID or name of the incident type for which the custom field option will be created. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **field\_id** (`string`, optional) The unique identifier for the custom field to which the option will be added. This should be a string that specifies the field within the incident type. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.GetCustomFieldOption



Retrieve a specific custom field option for an incident type.

**Parameters**

-   **field\_id** (`string`, required) The ID of the custom field for which the field option details are retrieved. This ID specifies the field within the incident type.
-   **field\_option\_id** (`string`, required) The unique identifier for the field option within a custom field. Used to retrieve specific option details.
-   **incident\_type\_identifier** (`string`, required) The ID or name of the incident type for which the custom field option is to be retrieved.

## PagerdutyApi.UpdateCustomFieldOption



Update a field option for a custom incident field.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **incident\_type\_id\_or\_name** (`string`, optional) The ID or name of the PagerDuty incident type. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **field\_option\_identifier** (`string`, optional) The unique identifier for the field option to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **field\_id** (`string`, optional) The ID of the custom field to be updated in the incident type. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.DeleteCustomFieldOption



Delete a custom field option for an incident type.

**Parameters**

-   **field\_identifier** (`string`, required) The unique identifier of the custom field from which the option will be deleted.
-   **field\_option\_id** (`string`, required) The ID of the field option to be deleted. This is required for identifying which option to remove from the custom field.
-   **incident\_type\_identifier** (`string`, required) The ID or name of the incident type for which the custom field option should be deleted.

## PagerdutyApi.ListUserLicenseAllocations



Retrieve licenses allocated to users in your account.

**Parameters**

-   **pagination\_offset** (`integer`, optional) The starting position for pagination in the search results.
-   **results\_per\_page** (`integer`, optional) Specifies the number of results to display per page when retrieving user licenses.

## PagerdutyApi.ListAccountLicenses



Retrieve the list of licenses for your account.

**Parameters**

This tool does not take any parameters.

## PagerdutyApi.FetchIncidentLogs



Retrieve all incident log entries across the account.

**Parameters**

-   **additional\_models\_to\_include** (`string`, optional) Specify additional models to include in the response, such as incidents, services, channels, or teams.
-   **include\_total\_in\_pagination** (`boolean`, optional) Set to true to populate the total field in pagination responses. Set to false for faster response times.
-   **pagination\_offset** (`integer`, optional) Offset to start pagination in search results. Used for navigating through large datasets.
-   **render\_results\_in\_time\_zone** (`string`, optional) Time zone for rendering results. Defaults to the account time zone if not specified.
-   **results\_per\_page** (`integer`, optional) Specifies the number of results returned per page.
-   **return\_important\_changes\_only** (`boolean`, optional) If true, return only the most important changes to the incident in log entries.
-   **search\_end\_date** (`string`, optional) The end date for the search range. Specify in YYYY-MM-DD format.
-   **start\_date\_range** (`string`, optional) Specify the start date for the search range. Format: YYYY-MM-DD.
-   **team\_ids** (`array[string]`, optional) Array of team IDs to filter log entries. Requires ‘teams’ ability on the account.

## PagerdutyApi.GetIncidentLogEntryDetails



Retrieve detailed information about a specific incident log entry.

**Parameters**

-   **resource\_id** (`string`, required) The unique identifier of the incident log entry to retrieve details for.
-   **additional\_models\_to\_include** (`string`, optional) List of additional models like ‘incidents’, ‘services’, ‘channels’, or ‘teams’ to include in the response.
-   **render\_results\_in\_time\_zone** (`string`, optional) Specify the time zone for rendering the results. Defaults to the account’s time zone if not provided.

## PagerdutyApi.UpdateIncidentLogEntry



Update an existing incident log entry channel.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **incident\_resource\_id** (`string`, optional) The unique ID of the incident log entry resource to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **user\_email** (`string`, optional) The email address of a valid user associated with the account making the log entry update request. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.ListMaintenanceWindows



Retrieve maintenance windows with optional filters for service or team.

**Parameters**

-   **filter\_by\_name** (`string`, optional) Filter maintenance windows to show only those with names matching the query.
-   **filter\_by\_service\_ids** (`array[string]`, optional) An array of service IDs to filter maintenance windows. Only results related to these services will be returned.
-   **filter\_by\_team\_ids** (`array[string]`, optional) Array of team IDs to filter results. Requires ‘teams’ ability.
-   **include\_models** (`string`, optional) Specify models to include in the response, such as ‘teams’, ‘services’, or ‘users’.
-   **include\_total\_in\_response** (`boolean`, optional) Set to true to populate the `total` field in pagination responses and get the total count of records.
-   **maintenance\_window\_state** (`string`, optional) Specify the state of maintenance windows to return: ‘past’, ‘future’, ‘ongoing’, ‘open’, or ‘all’.
-   **pagination\_offset** (`integer`, optional) Offset to start the pagination of search results. Use to skip a number of results.
-   **results\_per\_page** (`integer`, optional) The number of maintenance window results to display per page.

## PagerdutyApi.CreateMaintenanceWindow



Create a maintenance window for specified services.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **user\_email** (`string`, optional) The email address of a valid user associated with the account making the request. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.GetMaintenanceWindow



Retrieve details of an existing maintenance window in PagerDuty.

**Parameters**

-   **maintenance\_window\_id** (`string`, required) The unique identifier of the maintenance window to retrieve.
-   **include\_models** (`string`, optional) Array of additional models to include in the response. Options are ‘teams’, ‘services’, or ‘users’.

## PagerdutyApi.DeleteMaintenanceWindow



Delete or end a maintenance window in PagerDuty.

**Parameters**

-   **maintenance\_window\_id** (`string`, required) The unique identifier for the maintenance window to delete or end.

## PagerdutyApi.UpdateMaintenanceWindow



Update an existing maintenance window for services.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **resource\_id** (`string`, optional) The unique identifier for the maintenance window to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.ListNotifications



Retrieve notifications within a specified time range.

**Parameters**

-   **end\_date\_for\_search** (`string`, required) The end of the date range for the search. Must be in the same format as the ‘since’ date and within 3 months of it.
-   **start\_date** (`string`, required) The start date for the search range. Time is optional and must match format of ‘until’.
-   **additional\_details\_include** (`string`, optional) Specify additional details to include, such as ‘users’.
-   **include\_total\_in\_response** (`boolean`, optional) Set to true to populate the total field in pagination responses, otherwise it will be null.
-   **notification\_type\_filter** (`string`, optional) Return notifications of a specific type such as SMS, email, phone, or push.
-   **output\_time\_zone** (`string`, optional) Time zone for rendering results. Defaults to the account’s time zone if not specified.
-   **pagination\_offset** (`integer`, optional) Offset number to begin the pagination of search results.
-   **results\_per\_page** (`integer`, optional) The number of results to display per page.

## PagerdutyApi.DeleteOauthDelegations



Revoke OAuth app access for a user or account.

**Parameters**

-   **delegation\_type** (`string`, required) Specify the OAuth delegation type(s) to target: ‘mobile’ for mobile app or ‘web’ for web app sign-out. Multiple types can be separated by commas, for example, ‘mobile,web’.
-   **user\_identifier** (`string`, required) The unique ID of the user whose OAuth delegations will be deleted.

## PagerdutyApi.ListOnCallEntries



Retrieve on-call entries for a specified time range.

**Parameters**

-   **additional\_details\_to\_include** (`string`, optional) Array of additional details to include such as escalation policies, users, or schedules.
-   **end\_time\_for\_on\_call\_search** (`string`, optional) Specify the end of the time period to search for on-call entries. The end time must be after the start time (‘since’) and cannot exceed 90 days in the future. Defaults to current time if not specified.
-   **filter\_by\_escalation\_policy\_ids** (`array[string]`, optional) Array of escalation policy IDs to filter the on-call results. Only entries matching these IDs will be included.
-   **filter\_user\_ids** (`array[string]`, optional) An array of user IDs to filter and show only the on-calls for these users.
-   **include\_total\_in\_response** (`boolean`, optional) Set to true to populate the total field in pagination responses, enhancing the response with total entry count.
-   **pagination\_offset** (`integer`, optional) Offset indicating where to start the pagination for search results.
-   **results\_per\_page** (`integer`, optional) The maximum number of on-call entries to return per page. Set this to control pagination.
-   **results\_time\_zone** (`string`, optional) Specifies the time zone for rendering results. Defaults to the account time zone if not provided.
-   **return\_earliest\_on\_call** (`boolean`, optional) Set to true to filter and return only the earliest on-call entry for each combination of escalation policy, escalation level, and user.
-   **schedule\_ids\_filter** (`array[string]`, optional) Array of schedule IDs to filter results. Include `null` to cover permanent on-calls from direct user escalations.
-   **start\_time\_range** (`string`, optional) The start time for the search range. On-call periods overlapping this time will be included. Defaults to the current time. Limited to 90 days in the future.

## PagerdutyApi.GetPausedIncidentReportAlerts



Retrieve recent paused incident report alerts.

**Parameters**

-   **end\_date\_range** (`string`, optional) The end date for the search range to retrieve alerts. Must be within 6 months.
-   **filter\_by\_suspend\_method** (`string`, optional) Filter alerts by suspension type: ‘Auto Pause’ or ‘Event Rules’.
-   **service\_identifier** (`string`, optional) Filter reports to a specific service by providing its service ID.
-   **start\_date** (`string`, optional) The start date for the search range. It should be in ISO 8601 format (YYYY-MM-DD).

## PagerdutyApi.GetPausedIncidentReportCounts



Retrieve reporting counts for paused incident usage.

**Parameters**

-   **end\_date** (`string`, optional) End date for the date range over which to search for paused incident reports. Format: YYYY-MM-DD.
-   **filter\_by\_suspended\_type** (`string`, optional) Filter to specify whether to include alerts suspended by Auto Pause or Event Rules. Use ‘Auto Pause’ or ‘Event Rules’.
-   **service\_identifier** (`string`, optional) Filter to limit reporting to a particular service by providing a specific service ID.
-   **start\_date** (`string`, optional) The start date for the reporting period to search, in YYYY-MM-DD format.

## PagerdutyApi.ListIncidentPriorities



Retrieve a list of incident priorities by severity.

**Parameters**

-   **include\_total\_in\_response** (`boolean`, optional) Set to true to include the total number of results in the response, which is not shown by default for performance reasons.
-   **pagination\_offset** (`integer`, optional) Offset to start pagination from this position in the results.
-   **results\_per\_page** (`integer`, optional) The number of incident priorities to display per page.

## PagerdutyApi.ListRulesets



Retrieve a list of all rulesets from PagerDuty.

**Parameters**

-   **include\_total\_count** (`boolean`, optional) Set to true to include the total count of results in the response. By default, this is omitted for speed. Refer to the Pagination Docs for details.
-   **pagination\_offset** (`integer`, optional) The starting point for pagination in search results. Use this to skip a specific number of results.
-   **results\_per\_page** (`integer`, optional) Specify the number of ruleset results to return per page.

## PagerdutyApi.CreateRuleset



Create a new ruleset to manage event routing.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.GetRuleset



Retrieve details of a ruleset from PagerDuty.

**Parameters**

-   **ruleset\_id** (`string`, required) The unique identifier for the ruleset to retrieve from PagerDuty.

## PagerdutyApi.UpdateRuleset



Update an existing ruleset in PagerDuty.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **resource\_id** (`string`, optional) The unique identifier for the ruleset to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.DeleteRuleset



Delete an existing ruleset in PagerDuty.

**Parameters**

-   **ruleset\_id** (`string`, required) The unique identifier of the ruleset to be deleted.

## PagerdutyApi.ListEventRules



Retrieve all event rules within a specified ruleset.

**Parameters**

-   **ruleset\_id** (`string`, required) The unique identifier for the ruleset to list event rules from.
-   **include\_total\_in\_response** (`boolean`, optional) Set to true to include the total number of results in the pagination response. This may impact response time.
-   **pagination\_start\_offset** (`integer`, optional) The starting point for pagination to begin returning results from a specific offset.
-   **results\_per\_page** (`integer`, optional) Specify the number of results to return per page.

## PagerdutyApi.CreateEventRule



Create a new event rule within a ruleset.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **resource\_id** (`string`, optional) The unique identifier for the resource (ruleset) in which the event rule will be created. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.GetEventRule



Retrieve details of an event rule from a ruleset.

**Parameters**

-   **event\_rule\_id** (`string`, required) The ID of the Event Rule to retrieve from a ruleset.
-   **resource\_id** (`string`, required) The unique ID of the resource to retrieve details for. This is required to specify which resource’s event rule details are needed.

## PagerdutyApi.UpdateEventRule



Update an existing event rule within a ruleset.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **resource\_id** (`string`, optional) The unique ID of the ruleset resource to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **event\_rule\_id** (`string`, optional) The unique identifier of the Event Rule to update within the ruleset. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.DeleteEventRule



Delete an event rule from a specified ruleset.

**Parameters**

-   **event\_rule\_id** (`string`, required) The unique identifier of the Event Rule to be deleted.
-   **resource\_id** (`string`, required) The unique identifier of the resource (ruleset) to delete the event rule from.

## PagerdutyApi.ListOnCallSchedules



Retrieve the on-call schedules from PagerDuty.

**Parameters**

-   **additional\_details\_to\_include** (`string`, optional) Specify additional details to include, such as ‘schedule\_layers’, ‘overrides\_subschedule’, ‘final\_schedule’.
-   **end\_date\_range** (`string`, optional) Specify the end date for the schedule entries range. Defaults to 2 weeks after the ‘since’ date if not provided.
-   **filter\_by\_name** (`string`, optional) Filters results to show records with matching names.
-   **include\_total\_in\_pagination** (`boolean`, optional) Set to true to populate the total field in pagination responses. Defaults to null for faster response times if false.
-   **pagination\_offset** (`integer`, optional) The starting point for pagination of search results. Use this to skip a specific number of results.
-   **render\_results\_in\_time\_zone** (`string`, optional) Specify the time zone for displaying results. Defaults to the user’s or account’s time zone.
-   **results\_per\_page** (`integer`, optional) The number of results to retrieve per page for the on-call schedules.
-   **start\_date\_for\_schedule\_entries** (`string`, optional) The start date for showing schedule entries. Defaults to 2 weeks before the ‘until’ date if not specified.
-   **user\_id\_for\_next\_oncall** (`string`, optional) Specify a user\_id to get information about this user’s next on-call schedule.

## PagerdutyApi.CreateOnCallSchedule



Create a new on-call schedule for users.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **allow\_overflow** (`boolean`, optional) Set to true to allow on-call schedule entries to extend beyond date range bounds. Defaults to false. This results in longer schedule entries that encompass the full day if applicable. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.GetScheduleDetails



Retrieve detailed schedule information.

**Parameters**

-   **schedule\_id** (`string`, required) The unique identifier for the schedule to retrieve details.
-   **allow\_schedule\_overflow** (`boolean`, optional) If true, schedule entries can extend beyond date range bounds. Defaults to false, truncating entries at bounds.
-   **date\_range\_start** (`string`, optional) The start date for the schedule entries. Defaults to 2 weeks before the end date if not provided. Optional parameter.
-   **end\_date\_for\_schedule\_entries** (`string`, optional) The end of the date range to display schedule entries. Defaults to 2 weeks after the start date if provided.
-   **results\_time\_zone** (`string`, optional) The time zone in which the schedule results will be rendered. Defaults to the schedule’s time zone if not specified.
-   **user\_id\_for\_next\_oncall** (`string`, optional) Specify the `user_id` to get information about this user’s next on-call schedule.

## PagerdutyApi.DeleteSchedule



Delete an on-call schedule.

**Parameters**

-   **schedule\_id** (`string`, required) The unique identifier for the schedule to delete.

## PagerdutyApi.UpdateOnCallSchedule



Update an existing on-call schedule in PagerDuty.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **schedule\_id** (`string`, optional) The ID of the on-call schedule to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **allow\_schedule\_overflow** (`boolean`, optional) Allows schedule entries to exceed date range bounds if set to true. Defaults to false. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.ListScheduleAuditRecords



Retrieve sorted audit records for a specific schedule.

**Parameters**

-   **resource\_id** (`string`, required) The unique identifier of the schedule resource to retrieve audit records for.
-   **end\_of\_date\_range** (`string`, optional) The end date for the search range. Defaults to ‘now’ if not specified; must be within 31 days after the ‘since’ date.
-   **maximum\_records\_limit** (`integer`, optional) The maximum number of records to return. This is the lesser of the specified limit or the API’s maximum size.
-   **pagination\_cursor** (`string`, optional) Cursor for requesting the next set of results. Use the `next_cursor` from the previous request to paginate.
-   **start\_date** (`string`, optional) The start date for searching audit records. Defaults to 24 hours ago if not specified.

## PagerdutyApi.ListScheduleOverrides



Fetch overrides for a specific schedule and time range.

**Parameters**

-   **end\_date\_range** (`string`, required) The end date for the search range in which to list schedule overrides.
-   **resource\_id** (`string`, required) Specify the ID of the schedule resource to fetch overrides.
-   **start\_date** (`string`, required) The start date for the search range, formatted as YYYY-MM-DD.
-   **include\_overflown\_entries** (`boolean`, optional) Set to true to include schedule entries extending beyond date range bounds. Defaults to false.
-   **return\_only\_editable\_overrides** (`boolean`, optional) Set to true to return only editable overrides. Only future overrides will be included.

## PagerdutyApi.CreateScheduleOverride



Create schedule overrides for specific users and time ranges.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **resource\_id** (`string`, optional) The unique identifier for the schedule resource to which the override will be applied. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.DeleteScheduleOverride



Remove or truncate an on-call schedule override.

**Parameters**

-   **override\_id** (`string`, required) The unique identifier for the schedule override to be deleted or truncated.
-   **resource\_id** (`string`, required) The unique identifier for the schedule to remove or truncate the override from.

## PagerdutyApi.ListOnCallUsers



Retrieve users on call for a given schedule and time range.

**Parameters**

-   **schedule\_resource\_id** (`string`, required) The ID of the schedule resource to retrieve on-call users for.
-   **end\_date\_range** (`string`, optional) The end date for the time range of user search. Format as YYYY-MM-DD.
-   **start\_date\_range** (`string`, optional) The start date of the range to search for users on call. Format should be YYYY-MM-DD.

## PagerdutyApi.PreviewOnCallSchedule



Generate a preview of an on-call schedule without saving it.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **start\_date\_range** (`string`, optional) The start date and time for the schedule preview. Use ISO 8601 format (e.g., ‘2023-10-01T10:00:00Z’). Only used when mode is ‘execute’.
-   **end\_date** (`string`, optional) The end date of the range for the on-call schedule preview. Format as ISO 8601 string. Only used when mode is ‘execute’.
-   **include\_overflow\_entries** (`boolean`, optional) Set to true to allow schedule entries to overflow beyond the date range bounds. Defaults to false. True includes entries beyond specified dates. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.CreateServiceDependency



Creates dependencies between two services in PagerDuty.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.GetBusinessServiceDependencies



Retrieve immediate dependencies of a Business Service.

**Parameters**

-   **service\_id** (`string`, required) The ID of the Business Service to retrieve its dependencies.

## PagerdutyApi.RemoveServiceDependency



Disassociate dependencies between two services.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.GetServiceDependencies



Fetch immediate dependencies of a technical service.

**Parameters**

-   **resource\_id** (`string`, required) The ID of the technical service whose dependencies are to be retrieved.

## PagerdutyApi.ListServices



Retrieve a list of existing services.

**Parameters**

-   **filter\_by\_service\_name** (`string`, optional) Filters results to show only services with the specified name.
-   **filter\_by\_team\_ids** (`array[string]`, optional) Filter results to only include services related to the specified team IDs. Requires ‘teams’ ability.
-   **include\_additional\_details** (`string`, optional) Array of additional details to include, such as ‘escalation\_policies’, ‘teams’, ‘integrations’, or ‘auto\_pause\_notifications\_parameters’.
-   **include\_total\_in\_response** (`boolean`, optional) Set to true to include the total count of results in the pagination response.
-   **name\_query\_filter** (`string`, optional) Filters results to show only services with names matching the query.
-   **pagination\_offset** (`integer`, optional) Offset to start pagination search results.
-   **results\_per\_page** (`integer`, optional) Specify the number of results to be returned per page.
-   **results\_time\_zone** (`string`, optional) Time zone for rendering results, defaulting to the account time zone.
-   **sort\_results\_by** (`string`, optional) Specifies the field and order (ascending/descending) to sort the results by. Options include: ‘name’, ‘name:asc’, ‘name:desc’.

## PagerdutyApi.CreateNewService



Create a new service for incident management.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.GetServiceDetails



Retrieve details about an existing service.

**Parameters**

-   **service\_id** (`string`, required) The unique identifier of the service to retrieve details for.
-   **additional\_details\_to\_include** (`string`, optional) Array of additional details to include, such as escalation policies, teams, auto pause notifications parameters, or integrations.

## PagerdutyApi.DeleteService



Remove a service to prevent new incident creation.

**Parameters**

-   **service\_id** (`string`, required) The unique ID of the service to be deleted.

## PagerdutyApi.UpdateServiceDetails



Update details of an existing service in PagerDuty.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **service\_id** (`string`, optional) The unique identifier of the service to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.ListServiceAuditRecords



Retrieve service audit records sorted by execution time.

**Parameters**

-   **resource\_id** (`string`, required) The ID of the service for which audit records are being retrieved.
-   **end\_date** (`string`, optional) The end of the date range for searching audit records. Defaults to `now()` if unspecified. Must be within 31 days after `start_date`.
-   **pagination\_cursor** (`string`, optional) Optional parameter to retrieve the next set of audit records. Use the token from `next_cursor` of the previous response. Defaults to the start if not provided.
-   **result\_limit** (`integer`, optional) Specify the maximum number of audit records to return. Accepts an integer value.
-   **start\_date\_range** (`string`, optional) The start of the date range for search. Defaults to 24 hours ago if not specified.

## PagerdutyApi.ListServiceChangeEvents



Retrieve change events for a specific service.

**Parameters**

-   **resource\_id** (`string`, required) The ID of the service resource for which to list change events.
-   **end\_date\_utc** (`string`, optional) The end of the date range for the search, in UTC ISO 8601 format. Only UTC dates are accepted.
-   **filter\_by\_integration\_ids** (`array[string]`, optional) An array of integration IDs to filter results. Only events related to these integrations will be returned.
-   **include\_total\_in\_response** (`boolean`, optional) Set to true to populate the total field in pagination responses, which may affect response time.
-   **pagination\_offset** (`integer`, optional) Offset to start pagination search results.
-   **results\_per\_page** (`integer`, optional) Specify the number of results to return per page.
-   **start\_date** (`string`, optional) The start date of the search range, in UTC ISO 8601 format (e.g., ‘2023-10-01T00:00:00Z’). Ensure it is in UTC to avoid errors.
-   **team\_ids** (`array[string]`, optional) An array of team IDs to filter results. Account must have `teams` ability to use this.

## PagerdutyApi.CreateServiceIntegration



Create a new integration for a specific service.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **resource\_id** (`string`, optional) The ID of the resource to create an integration for. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.UpdateServiceIntegration



Update an integration for a specific service.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **resource\_id** (`string`, optional) The unique identifier of the resource to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **service\_integration\_id** (`string`, optional) The unique identifier for the integration associated with the service to update. This ID specifies which integration to modify. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.GetServiceIntegrationDetails



Retrieve details about a specific service integration.

**Parameters**

-   **integration\_id** (`string`, required) The unique ID of the integration on the specified service in PagerDuty.
-   **resource\_id** (`string`, required) The unique identifier for the service resource to retrieve integration details.
-   **include\_additional\_details** (`string`, optional) Specify additional details like ‘services’ or ‘vendors’ to include.

## PagerdutyApi.ListServiceEventRules



Retrieve a list of event rules for a specific service.

**Parameters**

-   **service\_id** (`string`, required) The unique identifier for the service whose event rules are being listed.
-   **include\_additional\_models** (`string`, optional) Array of additional models to include in response, such as ‘migrated\_metadata’.
-   **pagination\_offset** (`integer`, optional) The starting point for pagination of search results, specified as an integer.
-   **populate\_total\_field** (`boolean`, optional) Set to true to populate the total field in pagination responses; set to false to keep it null for faster responses.
-   **results\_per\_page** (`integer`, optional) Specifies the number of results returned per page in the response.

## PagerdutyApi.CreateServiceEventRule



Create a new Event Rule on a Service in PagerDuty.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **service\_resource\_id** (`string`, optional) The unique ID of the service resource where the event rule will be created. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.ConvertServiceEventRules



Convert service event rules to orchestration rules.

**Parameters**

-   **resource\_id** (`string`, required) The unique identifier of the service to be converted. This is required to specify which service’s event rules need to be converted to orchestration rules.

## PagerdutyApi.GetEventRuleFromService



Retrieve an event rule from a specified service.

**Parameters**

-   **event\_rule\_id** (`string`, required) The ID of the event rule to retrieve from the specified service.
-   **resource\_id** (`string`, required) The unique identifier of the service resource to retrieve the event rule for.

## PagerdutyApi.UpdateServiceEventRule



Update a specific event rule within a service.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **resource\_id** (`string`, optional) The unique ID of the service resource to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **event\_rule\_id** (`string`, optional) The ID of the Event Rule to update within the service. It identifies which event rule the update will apply to. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.DeleteServiceEventRule



Delete an event rule from a service in PagerDuty.

**Parameters**

-   **event\_rule\_id** (`string`, required) The ID of the Event Rule to be deleted. Use this to specify which rule to remove.
-   **service\_id** (`string`, required) The unique identifier of the service resource from which to delete the event rule.

## PagerdutyApi.CreateServiceCustomField



Create a new custom field for services.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.ListServiceCustomFields



Retrieve the custom fields for PagerDuty services.

**Parameters**

-   **include\_additional\_details** (`string`, optional) Specify additional details to include, such as ‘field\_options’.

## PagerdutyApi.GetServiceCustomFieldInfo



Retrieve detailed information about a custom field for a service.

**Parameters**

-   **field\_id** (`string`, required) The unique identifier for the custom field you want to retrieve information about.
-   **include\_field\_details** (`string`, optional) Specify additional details to include, such as ‘field\_options’.

## PagerdutyApi.UpdateServiceCustomField



Update a custom field for a PagerDuty service.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **service\_field\_id** (`string`, optional) The unique identifier of the custom field to update in PagerDuty. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.DeleteServiceCustomField



Deletes a custom field from a service.

**Parameters**

-   **field\_id** (`string`, required) The ID of the custom field you want to delete from the service.

## PagerdutyApi.ListServiceCustomFieldOptions



Retrieve all options for a specific custom field in PagerDuty.

**Parameters**

-   **field\_id** (`string`, required) The unique identifier for the custom field to retrieve options for.

## PagerdutyApi.AddServiceFieldOption



Create a new option for a custom field in PagerDuty services.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **field\_identifier** (`string`, optional) The unique identifier for the custom field where the new option will be added. This is required to specify which field you are modifying. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.GetServiceCustomFieldOption



Retrieve a service custom field option by field and option ID.

**Parameters**

-   **field\_id** (`string`, required) The unique identifier for the field to which the custom option belongs. Required to fetch the specific field option.
-   **field\_option\_identifier** (`string`, required) The unique identifier for the field option. Use to specify which custom field option to retrieve.

## PagerdutyApi.UpdateServiceCustomFieldOption



Update a custom field option in a service.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **field\_id** (`string`, optional) The unique identifier of the field to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **field\_option\_id** (`string`, optional) The ID of the custom field option to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.DeleteServiceCustomFieldOption



Delete a custom field option from a service.

**Parameters**

-   **field\_identifier** (`string`, required) The ID of the field to be deleted from the service.
-   **field\_option\_id** (`string`, required) The unique identifier for the custom field option to be deleted.

## PagerdutyApi.GetServiceCustomFieldValues



Retrieve custom field values for a specific service.

**Parameters**

-   **service\_id** (`string`, required) The unique identifier for the PagerDuty service whose custom field values are to be retrieved.

## PagerdutyApi.SetServiceCustomFieldValues



Update custom field values for a specific service.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **service\_id** (`string`, optional) The unique identifier of the service whose custom field values need to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.ListServiceFeatureEnablements



List feature enablement settings for a service.

**Parameters**

-   **service\_id** (`string`, required) The unique identifier for the PagerDuty service whose feature enablements you want to list.

## PagerdutyApi.UpdateServiceFeatureEnablement



Update the feature enablement for a service addon.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **resource\_id** (`string`, optional) The ID of the PagerDuty resource to update the feature enablement for. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **feature\_enablement\_identifier** (`string`, optional) Specify the feature enablement identifier, typically the addon name. Currently, only ‘aiops’ is supported. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.RetrieveSessionConfigurations



Retrieve session configurations for a PagerDuty account.

**Parameters**

-   **session\_configuration\_type** (`string`, optional) Specifies session configuration type: ‘mobile’ or ‘web’. Omit to return both types.

## PagerdutyApi.UpdateSessionConfigurations



Create or update session configurations in PagerDuty.

**Parameters**

-   **absolute\_session\_time\_to\_live\_seconds** (`integer`, required) Specify the absolute session time to live in seconds.
-   **idle\_session\_time\_to\_live** (`integer`, required) Specify the idle session time to live in seconds. This determines how long a session remains active without activity before being terminated.
-   **session\_configuration\_type** (`string`, required) Specify session configuration type: ‘mobile’, ‘web’, or a comma-separated list of both.

## PagerdutyApi.DeletePagerdutySessionConfigurations



Delete session configurations for a PagerDuty account.

**Parameters**

-   **session\_configuration\_type** (`string`, required) Specify ‘mobile’, ‘web’, or a comma-separated list of both to define which session configurations to delete.

## PagerdutyApi.GetAccountStandards



Retrieve all standards of an account.

**Parameters**

-   **active\_standards\_only** (`boolean`, optional) Set to true to include only active standards. Set to false to include both active and inactive standards.
-   **resource\_type\_filter** (`string`, optional) Specify the type of resource to filter standards. Must be ‘technical\_service’.

## PagerdutyApi.UpdateStandard



Updates a standard in PagerDuty.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **standard\_id** (`string`, optional) The unique identifier of the standard to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.ListResourceStandards



Retrieve standards applied to multiple resources.

**Parameters**

-   **resource\_ids** (`array[string]`, required) Array of resource IDs to which standards will be applied. Maximum of 100 items.
-   **resource\_type** (`string`, required) Specifies the type of resources to which the standards are applied. For example, ‘technical\_services’.

## PagerdutyApi.GetResourceStandards



Retrieve standards applied to a specified resource on PagerDuty.

**Parameters**

-   **resource\_id** (`string`, required) The ID of the resource for which you want to list the applied standards.
-   **resource\_type** (`string`, required) Specify the type of resource to which standards are applied, such as ‘technical\_services’.

## PagerdutyApi.GetStatusDashboards



Retrieve all custom Status Dashboard views for your account.

**Parameters**

This tool does not take any parameters.

## PagerdutyApi.GetStatusDashboard



Retrieve PagerDuty status dashboard details by ID.

**Parameters**

-   **status\_dashboard\_id** (`string`, required) The unique ID of the PagerDuty status dashboard to retrieve.

## PagerdutyApi.GetImpactedServicesDashboard



Get most impacted Business Services for a Status Dashboard.

**Parameters**

-   **status\_dashboard\_id** (`string`, required) The ID of the Status Dashboard to fetch impacted Business Services for.
-   **include\_additional\_fields** (`string`, optional) Specify additional fields to include, like highest impacting priority or total impacted count. Use values: ‘services.highest\_impacting\_priority’ or ‘total\_impacted\_count’.

## PagerdutyApi.GetStatusDashboardBySlug



Retrieve a PagerDuty Status Dashboard by its URL slug.

**Parameters**

-   **status\_dashboard\_url\_slug** (`string`, required) The URL slug for a status dashboard, typically a dash-separated string like ‘dash-separated-string’. Used to identify a specific dashboard in PagerDuty.

## PagerdutyApi.GetServiceImpactsByUrlSlug



Retrieve impacted business services from a status dashboard.

**Parameters**

-   **status\_dashboard\_url\_slug** (`string`, required) The URL slug for the specific status dashboard to retrieve service impacts from.
-   **include\_additional\_fields** (`string`, optional) Specify whether to include additional fields such as highest impacting priority and total impacted count. Choose from ‘services.highest\_impacting\_priority’ or ‘total\_impacted\_count’.

## PagerdutyApi.ListStatusPages



Retrieve a list of status pages.

**Parameters**

-   **status\_page\_type** (`string`, optional) Specifies the type of the status page. Must be ‘public’ or ‘private’.

## PagerdutyApi.ListStatusPageImpacts



Retrieve impacts for a specified status page by ID.

**Parameters**

-   **status\_page\_id** (`string`, required) The ID of the status page to retrieve impacts for.
-   **filter\_by\_post\_type** (`string`, optional) Specify the type of posts to filter by: ‘incident’ or ‘maintenance’.

## PagerdutyApi.GetStatusPageImpact



Retrieve impact details for a specific status page.

**Parameters**

-   **status\_page\_id** (`string`, required) The ID of the status page resource to retrieve impact details for.
-   **status\_page\_impact\_id** (`string`, required) The unique identifier for the Status Page Impact. Use this to fetch specific impact details.

## PagerdutyApi.ListStatusPageServices



Retrieve services for a specific Status Page by ID.

**Parameters**

-   **status\_page\_id** (`string`, required) The unique identifier of the Status Page to retrieve associated services.

## PagerdutyApi.GetStatusPageService



Get service details for a status page by ID and service ID.

**Parameters**

-   **resource\_id** (`string`, required) The ID of the status page resource to fetch the service for.
-   **status\_page\_service\_id** (`string`, required) The unique identifier of the Status Page service to be retrieved.

## PagerdutyApi.ListStatusPageSeverities



Retrieve severities for a specified status page.

**Parameters**

-   **status\_page\_id** (`string`, required) The unique identifier for the status page to retrieve severities.
-   **post\_type\_filter** (`string`, optional) Specify the type of post to filter. Options: ‘incident’ or ‘maintenance’.

## PagerdutyApi.GetStatusPageSeverity



Retrieve severity details for a status page using IDs.

**Parameters**

-   **status\_page\_id** (`string`, required) The unique identifier for the status page resource.
-   **status\_page\_severity\_id** (`string`, required) The unique identifier for the specific severity on a status page. Used to fetch severity details.

## PagerdutyApi.ListStatusPageStatuses



Retrieve statuses for a specific status page by ID.

**Parameters**

-   **status\_page\_id** (`string`, required) The unique ID of the status page to retrieve statuses for.
-   **filter\_by\_post\_type** (`string`, optional) Filter statuses by post type. Options include ‘incident’ or ‘maintenance’.

## PagerdutyApi.GetStatusPageStatus



Retrieve the status of a status page by ID and status ID.

**Parameters**

-   **resource\_id** (`string`, required) The unique identifier for the resource to fetch the status for.
-   **status\_page\_status\_id** (`string`, required) The ID of the Status Page status to retrieve. This is required to specify which status is being queried.

## PagerdutyApi.ListStatusPagePosts



Retrieve posts for a specific status page using its ID.

**Parameters**

-   **status\_page\_id** (`string`, required) The unique ID of the status page to retrieve posts from.
-   **filter\_by\_post\_type** (`string`, optional) Filter posts by type. Acceptable values are ‘incident’ or ‘maintenance’.
-   **filter\_by\_reviewed\_status** (`string`, optional) Filter posts by their reviewed status. Possible values are ‘approved’ or ‘not\_reviewed’.
-   **status\_identifiers** (`array[string]`, optional) Filter posts by an array of status identifiers to specify which statuses to retrieve.

## PagerdutyApi.CreateStatusPagePost



Create a status page post using a specific page ID.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **status\_page\_id** (`string`, optional) The unique identifier for the status page to which the post will be added. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.GetStatusPagePost



Retrieve a post from a specific status page.

**Parameters**

-   **status\_page\_id** (`string`, required) The ID of the status page resource to retrieve the post from.
-   **status\_page\_post\_id** (`string`, required) The unique identifier for the Status Page Post to retrieve details.
-   **include\_models** (`array[string]`, optional) Array of model names to include in the response for additional detail.

## PagerdutyApi.UpdateStatusPagePost



Update a post on a status page by its ID.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **resource\_id** (`string`, optional) The ID of the status page resource to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **status\_page\_post\_id** (`string`, optional) The ID of the status page post to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.DeleteStatusPagePost



Delete a post from a status page using its ID.

**Parameters**

-   **status\_page\_id** (`string`, required) The unique identifier for the status page from which the post will be deleted.
-   **status\_page\_post\_id** (`string`, required) The unique identifier for the Status Page Post to be deleted.

## PagerdutyApi.ListStatusUpdates



Retrieve post updates for a specific status page and post ID.

**Parameters**

-   **resource\_id** (`string`, required) The unique ID of the status page resource for which updates are needed.
-   **status\_page\_post\_id** (`string`, required) The ID of the specific status page post to retrieve updates for. This identifies which post’s updates will be listed.
-   **filter\_by\_reviewed\_status** (`string`, optional) Filter post updates by their reviewed status. Options are ‘approved’ or ‘not\_reviewed’.

## PagerdutyApi.CreateStatusPagePostUpdate



Create a post update for a specific status page post.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **resource\_id** (`string`, optional) The unique identifier of the resource you are targeting. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **status\_page\_post\_id** (`string`, optional) The ID of the Status Page Post for which the update is created. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.GetPostUpdate



Retrieve specific post updates by post and update IDs.

**Parameters**

-   **post\_update\_id** (`string`, required) The ID of the Status Page Post Update required for fetching specific update details.
-   **resource\_id** (`string`, required) The unique identifier for the resource to retrieve the post update.
-   **status\_page\_post\_id** (`string`, required) The unique identifier for the Status Page Post to retrieve updates for.

## PagerdutyApi.ModifyStatusPagePostUpdate



Update a specific status page post update.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **resource\_id** (`string`, optional) The unique identifier for the resource to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **status\_page\_post\_id** (`string`, optional) The unique ID of the Status Page Post to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **status\_page\_post\_update\_id** (`string`, optional) The unique identifier for the specific status page post update to be modified. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.DeleteStatusPagePostUpdate



Delete a specific post update on PagerDuty.

**Parameters**

-   **resource\_id** (`string`, required) The unique ID of the resource to be deleted.
-   **status\_page\_post\_id** (`string`, required) The ID of the Status Page Post to identify the specific post.
-   **status\_page\_post\_update\_id** (`string`, required) The unique ID of the status page post update to delete.

## PagerdutyApi.GetPostmortemByPostId



Retrieve postmortem details using post ID.

**Parameters**

-   **resource\_id** (`string`, required) The unique identifier for the resource. Used to retrieve the specific postmortem information.
-   **status\_page\_post\_id** (`string`, required) The ID of the Status Page Post to retrieve postmortem details.

## PagerdutyApi.CreateStatusPagePostmortem



Create a postmortem for a status page post.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **resource\_id** (`string`, optional) The unique ID of the resource for which the postmortem is being created. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **status\_page\_post\_id** (`string`, optional) The unique identifier of the status page post for which the postmortem is being created. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.UpdateStatusPagePostmortem



Update a postmortem for a specific post by ID.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **resource\_id** (`string`, optional) The unique ID of the resource to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **status\_page\_post\_id** (`string`, optional) The ID of the Status Page Post to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.DeletePostmortem



Deletes a postmortem from a status page post by ID.

**Parameters**

-   **resource\_id** (`string`, required) The unique identifier of the resource to delete.
-   **status\_page\_post\_id** (`string`, required) The unique identifier for the status page post whose postmortem you want to delete.

## PagerdutyApi.ListStatusPageSubscriptions



Retrieve subscriptions for a specific status page by ID.

**Parameters**

-   **status\_page\_id** (`string`, required) The unique identifier for the status page. Required to retrieve subscriptions associated with it.
-   **subscription\_channel\_filter** (`string`, optional) Specify the channel to filter subscriptions. Options: webhook, email, slack.
-   **subscription\_status\_filter** (`string`, optional) Filter the list of subscriptions by their status: ‘active’ or ‘pending’.

## PagerdutyApi.CreateStatusPageSubscription



Subscribe to a status page by ID.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **status\_page\_id** (`string`, optional) The ID of the status page to subscribe to. This string is used to identify the specific page. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.GetStatusPageSubscription



Retrieve a status page subscription by ID.

**Parameters**

-   **resource\_id** (`string`, required) The unique ID of the status page resource to retrieve the subscription details.
-   **status\_page\_subscription\_id** (`string`, required) The unique identifier for the Status Page subscription.

## PagerdutyApi.DeleteStatusPageSubscription



Delete a status page subscription by ID.

**Parameters**

-   **resource\_id** (`string`, required) The unique identifier of the status page resource to delete the subscription from.
-   **status\_page\_subscription\_id** (`string`, required) The unique identifier for the specific status page subscription to be deleted.

## PagerdutyApi.ListAccountTags



Retrieve all tags for your account.

**Parameters**

-   **include\_total\_in\_pagination** (`boolean`, optional) Set to true to include the total number of results in the pagination response. Defaults to false for faster response without total.
-   **pagination\_offset** (`integer`, optional) Offset to start pagination search results. Use this to specify the starting point for retrieval when paginating through results.
-   **results\_per\_page** (`integer`, optional) The number of results to display per page.
-   **tag\_filter\_query** (`string`, optional) Filters the results to show only tags whose labels match this query string.

## PagerdutyApi.CreateTag



Create a tag for filtering in PagerDuty.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.GetTagDetails



Retrieve details about a specific PagerDuty Tag.

**Parameters**

-   **resource\_id** (`string`, required) The unique ID of the PagerDuty Tag to retrieve details for.

## PagerdutyApi.RemoveTag



Remove an existing tag from escalation policies, teams, or users.

**Parameters**

-   **resource\_id** (`string`, required) The unique identifier of the resource (tag) to be removed.

## PagerdutyApi.GetTagsByEntity



Retrieve related entities for a specific tag.

**Parameters**

-   **entity\_type** (`string`, required) Specify the type of entity related to the tag. Options: ‘users’, ‘teams’, or ‘escalation\_policies’.
-   **resource\_id** (`string`, required) The unique identifier of the resource to retrieve related entities for a tag.
-   **include\_total\_in\_pagination** (`boolean`, optional) Set to true to include the total count of results in pagination responses, which may impact response times.
-   **pagination\_offset** (`integer`, optional) Offset to start pagination of search results.
-   **results\_per\_page** (`integer`, optional) Specify the number of results to return per page.

## PagerdutyApi.CreateNewTeam



Create a new team with users and escalation policies.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.ListPagerdutyTeams



Retrieve a list of teams from your PagerDuty account.

**Parameters**

-   **filter\_by\_name\_query** (`string`, optional) Specify a query to filter teams by name. Only teams with names matching this query will be returned.
-   **include\_total\_in\_response** (`boolean`, optional) Set to true to include the total count of results in the response for pagination. This may impact response time.
-   **pagination\_offset** (`integer`, optional) Offset to start returning team results from in pagination.
-   **results\_per\_page** (`integer`, optional) Specify the number of teams to return per page.

## PagerdutyApi.GetTeamDetails



Retrieve details about a specified team.

**Parameters**

-   **team\_id** (`string`, required) The unique ID of the team to retrieve information for.
-   **include\_additional\_models** (`string`, optional) Specify additional models like ‘privileges’ to include in the response.

## PagerdutyApi.DeleteTeamInPagerduty



Delete an existing team in PagerDuty.

**Parameters**

-   **team\_id** (`string`, required) The unique identifier of the team to be deleted in PagerDuty.
-   **reassignment\_team\_id** (`string`, optional) The ID of the team to reassign unresolved incidents. If omitted, incidents will become account-level.

## PagerdutyApi.UpdateTeam



Update the details of an existing team.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **team\_id** (`string`, optional) The unique identifier of the team to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.GetLatestTeamAuditRecords



Retrieve the latest audit records for a specific team.

**Parameters**

-   **resource\_id** (`string`, required) The unique identifier of the team or resource for which you want to retrieve audit records. This ID specifies which team’s audit records to retrieve.
-   **end\_date\_for\_search\_range** (`string`, optional) The end date of the search range. Defaults to current date if not specified, and must be within 31 days of the ‘since’ date.
-   **next\_results\_cursor** (`string`, optional) Cursor for fetching the next set of results. Obtained from the `next_cursor` of a previous request. Starts from the beginning if not provided.
-   **number\_of\_records\_limit** (`integer`, optional) Specify the maximum number of audit records to retrieve in the request.
-   **start\_date\_range** (`string`, optional) The date from which to start searching audit records. Defaults to 24 hours ago if not specified.

## PagerdutyApi.RemoveTeamEscalationPolicy



Remove an escalation policy from a team.

**Parameters**

-   **escalation\_policy\_id** (`string`, required) The identifier of the escalation policy to remove from the team.
-   **resource\_id** (`string`, required) The unique identifier of the team resource from which the escalation policy will be removed.

## PagerdutyApi.AddEscalationPolicyToTeam



Add an escalation policy to a team.

**Parameters**

-   **escalation\_policy\_id** (`string`, required) The ID of the escalation policy to be added to the team. Ensure it is a valid policy ID within your organization.
-   **team\_resource\_id** (`string`, required) The unique identifier for the team resource to update with an escalation policy.

## PagerdutyApi.ListTeamMembers



Retrieve details of members in a specified team.

**Parameters**

-   **team\_id** (`string`, required) The unique identifier for the team whose members you want to retrieve.
-   **include\_total\_in\_pagination** (`boolean`, optional) Set to true to populate the total field in pagination responses. Default is false for faster response times.
-   **include\_users\_in\_response** (`string`, optional) Include additional models such as ‘users’ in the team members response.
-   **pagination\_offset** (`integer`, optional) Integer to set the starting point for pagination in search results.
-   **results\_per\_page** (`integer`, optional) Specifies the number of results to return per page.

## PagerdutyApi.GetTeamNotificationSubscriptions



Retrieve a team’s notification subscriptions from PagerDuty.

**Parameters**

-   **team\_id** (`string`, required) The ID of the team to retrieve notification subscriptions for. This must be a valid team ID added through the notification subscriptions endpoint.

## PagerdutyApi.CreateTeamNotificationSubscriptions



Create notification subscriptions for a specified team.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **team\_id** (`string`, optional) The ID of the team for which you want to create notification subscriptions. This is a required identifier. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.UnsubscribeTeamNotifications



Unsubscribe a team from specific notification subscriptions.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **resource\_id** (`string`, optional) The ID of the resource to unsubscribe from notifications. This should be a string value representing the unique identifier for the specific resource. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.RemoveUserFromTeam



Remove a user from a specific team in PagerDuty.

**Parameters**

-   **team\_id** (`string`, required) The ID of the team from which the user will be removed.
-   **team\_user\_id** (`string`, required) The ID of the user to be removed from the team in PagerDuty.

## PagerdutyApi.AddUserToTeam



Add a user to a specified team on PagerDuty.

**Parameters**

-   **team\_id** (`string`, required) The ID of the team to which the user will be added.
-   **user\_id** (`string`, required) The unique identifier for the user to be added to the team. This ID should match a user already present in the system.
-   **user\_role\_on\_team** (`string`, optional) Specify the role of the user on the team. Allowed values are ‘observer’, ‘responder’, or ‘manager’.

## PagerdutyApi.GetTemplateList



Retrieve a list of all templates on an account.

**Parameters**

-   **filter\_by\_template\_type** (`string`, optional) Specify the type of template to filter results by. Use this to narrow down the list to specific template types.
-   **include\_total\_in\_response** (`boolean`, optional) Set to true to include the total count of templates in the response. This may affect response time.
-   **pagination\_offset** (`integer`, optional) Offset to start pagination search results. Define where the returned list should begin.
-   **results\_per\_page** (`integer`, optional) The number of template results returned per page. Use this to control pagination size.
-   **search\_template\_query** (`string`, optional) Template name or description to search for in the templates list.
-   **sort\_by\_field\_and\_direction** (`string`, optional) Specify the field (‘name’ or ‘created\_at’) and direction (‘asc’ or ‘desc’) to sort results. Format: field:direction, defaulting to ascending.

## PagerdutyApi.CreateAlertTemplate



Create a new alert or incident template.

**Parameters**

-   **email\_body\_html** (`string`, optional) The HTML body content for the email message to be sent as part of the template.
-   **email\_subject** (`string`, optional) The subject line for the email template, which will appear as the email’s subject.
-   **short\_message\_template** (`string`, optional) The short message for the template, used in SMS, Push notifications, Slack, etc.
-   **template\_description** (`string`, optional) Provide a brief description of the template, outlining its purpose and use case.
-   **template\_name** (`string`, optional) The name for the new template to be created in PagerDuty.
-   **template\_type** (`string`, optional) The type of template. Currently, only ‘status\_update’ is supported.

## PagerdutyApi.GetTemplateDetails



Retrieve details of a specific template using its ID.

**Parameters**

-   **template\_id** (`string`, required) The unique ID of the template to retrieve details for.

## PagerdutyApi.UpdateTemplate



Update an existing template in PagerDuty.

**Parameters**

-   **resource\_id** (`string`, required) The unique identifier of the template to be updated.
-   **email\_body\_html** (`string`, optional) The HTML content for the email body of the template.
-   **email\_subject** (`string`, optional) The subject of the email to be updated in the template.
-   **short\_message\_template** (`string`, optional) The short message content for the template used in SMS, Push notifications, Slack, etc.
-   **template\_description** (`string`, optional) Provide a brief description of the template. This helps to explain its purpose and content.
-   **template\_name** (`string`, optional) The name of the template to update in PagerDuty.
-   **template\_type** (`string`, optional) The type of template. Only ‘status\_update’ is supported.

## PagerdutyApi.DeleteTemplate



Delete a specific template on the PagerDuty account.

**Parameters**

-   **template\_id** (`string`, required) The ID of the template resource to delete from the PagerDuty account. Required for deletion.

## PagerdutyApi.RenderStatusUpdateTemplate



Renders a status update template with given incident data.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **incident\_id** (`string`, optional) The ID of the incident resource to render the template for. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.GetTemplateFields



Retrieve fields for account templates.

**Parameters**

This tool does not take any parameters.

## PagerdutyApi.ListPagerdutyUsers



Retrieve users from your PagerDuty account.

**Parameters**

-   **additional\_models\_to\_include** (`string`, optional) Array of additional models to include in the response, such as ‘contact\_methods’, ‘notification\_rules’, ‘teams’, or ‘subdomains’.
-   **include\_total\_in\_response** (`boolean`, optional) Set to true to include the total count in pagination responses, which may slow down the response time.
-   **pagination\_offset** (`integer`, optional) Offset to start pagination in search results. Specify the number of items to skip.
-   **results\_per\_page** (`integer`, optional) Specify the number of user results to be returned per page.
-   **team\_ids** (`array[string]`, optional) An array of team IDs to filter the user results. Requires the account to have the ‘teams’ ability.
-   **user\_name\_filter** (`string`, optional) String to filter users by name in the PagerDuty account.

## PagerdutyApi.CreatePagerdutyUser



Create a new user in PagerDuty for account interaction.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **requester\_email** (`string`, optional) The email of a valid user associated with the account making the request. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.GetUserDetails



Retrieve details about a specific PagerDuty user.

**Parameters**

-   **user\_id** (`string`, required) The unique identifier for the specific PagerDuty user whose details are to be retrieved.
-   **additional\_models\_to\_include** (`string`, optional) Specify additional models (e.g., ‘contact\_methods’, ‘notification\_rules’) to include in the response.

## PagerdutyApi.RemoveUserFromPagerduty



Remove an existing user from PagerDuty.

**Parameters**

-   **user\_id** (`string`, required) The unique identifier of the user to be removed from PagerDuty.

## PagerdutyApi.UpdatePagerdutyUser



Update an existing PagerDuty user’s information.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **user\_id** (`string`, optional) The unique identifier for the user to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.GetUserAuditRecords



Retrieve audit records for a specified user.

**Parameters**

-   **user\_id** (`string`, required) The unique identifier for the user whose audit records are being retrieved.
-   **end\_date\_range** (`string`, optional) The end date for searching audit records. Defaults to now and cannot exceed 31 days after `since`.
-   **pagination\_cursor** (`string`, optional) Optional string to fetch the next set of results. Use the `next_cursor` from previous responses.
-   **result\_limit** (`integer`, optional) Specifies the maximum number of audit records to retrieve in a single request.
-   **start\_date** (`string`, optional) The start date for the search range. Defaults to 24 hours ago if not specified.

## PagerdutyApi.GetUserContactMethods



Retrieve a user’s contact methods from PagerDuty.

**Parameters**

-   **user\_id** (`string`, required) The ID of the PagerDuty user whose contact methods are to be retrieved.

## PagerdutyApi.CreateUserContactMethod



Create a new contact method for a PagerDuty user.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **user\_id** (`string`, optional) The unique identifier of the user for whom the contact method is being created. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.GetUserContactMethodInfo



Retrieve details about a user’s contact method in PagerDuty.

**Parameters**

-   **resource\_id** (`string`, required) The ID of the user resource to retrieve contact method details for.
-   **user\_contact\_method\_id** (`string`, required) The unique identifier for a user’s specific contact method in PagerDuty.

## PagerdutyApi.RemoveUserContactMethod



Remove a user’s contact method from PagerDuty.

**Parameters**

-   **contact\_method\_id** (`string`, required) The identifier for the user’s contact method to be removed from PagerDuty.
-   **user\_resource\_id** (`string`, required) The ID of the user resource to identify which user the contact method belongs to.

## PagerdutyApi.UpdateUserContactMethod



Update a user’s contact method on PagerDuty.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **resource\_id** (`string`, optional) The unique identifier of the user whose contact method is being updated. It should be a string representing the user’s ID in PagerDuty. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **user\_contact\_method\_id** (`string`, optional) The unique identifier for the user’s contact method to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.GetUserLicense



Retrieve the license allocated to a user.

**Parameters**

-   **user\_id** (`string`, required) The unique identifier of the user to fetch license information for.

## PagerdutyApi.ListUserNotificationRules



Retrieve a PagerDuty user’s notification rules.

**Parameters**

-   **user\_resource\_id** (`string`, required) The unique identifier of the PagerDuty user whose notification rules are to be retrieved.
-   **incident\_urgency** (`string`, optional) Specify the incident urgency for the notification rules: ‘high’, ‘low’, or ‘all’. Defaults to ‘high’.
-   **include\_additional\_details** (`string`, optional) Specify additional details to include, such as ‘contact\_methods’.

## PagerdutyApi.CreateUserNotificationRule



Create a new user notification rule in PagerDuty.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **user\_resource\_id** (`string`, optional) The unique ID of the user resource for which the notification rule is being created. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.GetUserNotificationRule



Retrieve details about a user’s notification rule.

**Parameters**

-   **notification\_rule\_id** (`string`, required) The unique identifier for the user’s notification rule to be retrieved.
-   **user\_id** (`string`, required) The unique identifier of the user in PagerDuty. Required to fetch their notification rule.
-   **include\_additional\_details** (`string`, optional) Specify additional details to include such as ‘contact\_methods’.

## PagerdutyApi.RemoveUserNotificationRule



Remove a user’s notification rule on PagerDuty.

**Parameters**

-   **notification\_rule\_identifier** (`string`, required) The unique identifier for the notification rule to be removed from the user’s profile.
-   **resource\_id** (`string`, required) The ID of the user who owns the notification rule.

## PagerdutyApi.UpdateUserNotificationRule



Update a user’s notification rule in PagerDuty.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **resource\_id** (`string`, optional) The unique ID of the user’s notification resource to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **notification\_rule\_id** (`string`, optional) The ID of the user’s notification rule to update in PagerDuty. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.GetUserNotificationSubscriptions



Retrieve a user’s notification subscriptions.

**Parameters**

-   **user\_id** (`string`, required) The unique identifier for the user whose notification subscriptions are being retrieved.

## PagerdutyApi.CreateUserNotificationSubscriptions



Create new notification subscriptions for a user.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **resource\_id** (`string`, optional) The unique identifier of the resource for which to create notification subscriptions. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.UnsubscribeUserNotifications



Unsubscribe a user from notification subscriptions.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **resource\_id** (`string`, optional) The unique identifier of the resource from which to unsubscribe the user. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.ListUserHandoffNotificationRules



List handoff notification rules for a PagerDuty user.

**Parameters**

-   **user\_id** (`string`, required) The unique identifier of the PagerDuty user whose handoff notification rules you want to retrieve.

## PagerdutyApi.CreateHandoffNotificationRule



Create a handoff notification rule for PagerDuty users.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **resource\_id** (`string`, optional) The unique identifier for the user or resource for which the handoff notification rule will be created. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.GetUserHandoffNotificationRule



Fetch a user’s handoff notification rule details.

**Parameters**

-   **oncall\_handoff\_notification\_rule\_id** (`string`, required) The ID of the oncall handoff notification rule for the user.
-   **user\_id** (`string`, required) The unique identifier for the user whose handoff notification rule details are being retrieved. This is required to specify the target user in PagerDuty.

## PagerdutyApi.DeleteUserHandoffNotificationRule



Remove a handoff notification rule for a PagerDuty user.

**Parameters**

-   **oncall\_handoff\_notification\_rule\_id** (`string`, required) The unique ID of the on-call handoff notification rule to be deleted for the user.
-   **user\_resource\_id** (`string`, required) The ID of the user resource to delete the handoff notification rule from. Required for identifying the user.

## PagerdutyApi.UpdateUserHandoffNotification



Update a user’s handoff notification rule in PagerDuty.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **resource\_id** (`string`, optional) The unique ID of the resource to be updated, representing the user in PagerDuty. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **handoff\_notification\_rule\_id** (`string`, optional) The ID of the oncall handoff notification rule to update for the user. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.GetUserActiveSessions



List active sessions of a specified PagerDuty user.

**Parameters**

-   **user\_id** (`string`, required) The ID of the PagerDuty user whose active sessions are to be retrieved.

## PagerdutyApi.GetUserSessionDetails



Fetches details about a specific PagerDuty user session.

**Parameters**

-   **resource\_id** (`string`, required) The unique ID of the PagerDuty user whose session details you want to retrieve.
-   **session\_type** (`string`, required) Specifies the type of the user session. This information is required to identify the nature of the session for the user session ID.
-   **user\_session\_id** (`string`, required) The unique session ID for a specific PagerDuty user to retrieve session details.

## PagerdutyApi.GetUserNotificationRules



Retrieve status update notification rules for a PagerDuty user.

**Parameters**

-   **user\_id** (`string`, required) The unique identifier for the PagerDuty user whose notification rules are to be retrieved.
-   **include\_additional\_details** (`string`, optional) Specify additional details to include, such as ‘contact\_methods’.

## PagerdutyApi.CreateUserStatusUpdateNotificationRule



Create a new status update notification rule for a user.

**Parameters**

-   **resource\_id** (`string`, required) The ID of the user resource for which the notification rule is being created.
-   **status\_update\_notification\_rule** (`json`, optional) A JSON object representing the rule for contacting the user for incident status updates. It includes details like contact method and notification preferences.

## PagerdutyApi.GetUserStatusUpdateNotificationRule



Get details about a user’s status update notification rule.

**Parameters**

-   **status\_update\_notification\_rule\_id** (`string`, required) The ID of the user’s status update notification rule to retrieve details for.
-   **user\_id** (`string`, required) The unique identifier of the user whose notification rule details are to be retrieved.
-   **include\_contact\_methods** (`string`, optional) Specify ‘contact\_methods’ to include additional contact method details in the response. Leave empty if no additional details are needed.

## PagerdutyApi.RemoveUserStatusUpdateNotificationRule



Removes a user’s status update notification rule in PagerDuty.

**Parameters**

-   **resource\_id** (`string`, required) The unique identifier of the user whose notification rule is being deleted.
-   **status\_update\_notification\_rule\_id** (`string`, required) The ID of the status update notification rule for a specific user in PagerDuty.

## PagerdutyApi.UpdateUserStatusNotificationRule



Update a user’s status update notification rule.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **resource\_id** (`string`, optional) The unique identifier for the user resource to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **status\_update\_notification\_rule\_id** (`string`, optional) The ID of the user’s status update notification rule to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.GetCurrentUserDetails



Retrieves details about the current PagerDuty user.

**Parameters**

-   **additional\_models\_to\_include** (`string`, optional) Specifies additional models, such as contact methods or teams, to include in the response. Options: contact\_methods, notification\_rules, teams, subdomains.

## PagerdutyApi.ListAllVendors



Retrieve a list of all vendor integrations.

**Parameters**

-   **include\_total\_in\_pagination** (`boolean`, optional) Set to true to populate the `total` field in pagination responses, which provides the total number of results but may affect performance.
-   **pagination\_offset** (`integer`, optional) Offset for starting pagination of the search results.
-   **results\_per\_page** (`integer`, optional) The maximum number of vendor results to return per page. Use to control pagination.

## PagerdutyApi.GetVendorDetails



Fetch detailed information about a specific vendor on PagerDuty.

**Parameters**

-   **vendor\_id** (`string`, required) The unique identifier for the vendor whose details are being requested.

## PagerdutyApi.ListWebhookSubscriptions



Retrieve existing webhook subscriptions from PagerDuty.

**Parameters**

-   **include\_total\_in\_pagination** (`boolean`, optional) Set to true to populate the `total` field in pagination responses. Useful if you need the total number of entries.
-   **pagination\_offset** (`integer`, optional) Offset to start the pagination of search results.
-   **resource\_filter\_id** (`string`, optional) The ID of the resource to filter upon. Required if filtering by service or team.
-   **resource\_filter\_type** (`string`, optional) Specify the type of resource to filter webhook subscriptions by, such as ‘account’, ‘service’, or ‘team’.
-   **results\_per\_page** (`integer`, optional) Specify the number of webhook subscription results to return per page.

## PagerdutyApi.CreateWebhookSubscription



Create a new webhook subscription in PagerDuty.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## PagerdutyApi.GetWebhookSubscriptionDetails



Retrieve details about a specific webhook subscription.

**Parameters**

-   **resource\_id** (`string`, required) The unique identifier of the webhook subscription to retrieve details for.

## PagerdutyApi.UpdateWebhookSubscription



Update an existing webhook subscription.

**Parameters**

-   **resource\_id** (`string`, required) The unique identifier of the webhook subscription to be updated.
-   **filter\_object\_id** (`string`, optional) The ID of the object used as the filter. Required unless the filter type is account\_reference.
-   **filter\_object\_type** (`string`, optional) Specify the type of object used as the filter: ‘account\_reference’, ‘service\_reference’, or ‘team\_reference’.
-   **oauth\_client\_id** (`string`, optional) The ID of the OAuth client for authenticating webhook requests. This field is optional.
-   **send\_webhook** (`boolean`, optional) Set to true to send a webhook. Default is true. False to disable.
-   **webhook\_events** (`array[string]`, optional) List of outbound event types the subscription will receive.
-   **webhook\_subscription\_description** (`string`, optional) A short description of the webhook subscription.

## PagerdutyApi.DeleteWebhookSubscription



Delete a webhook subscription in PagerDuty.

**Parameters**

-   **resource\_id** (`string`, required) The unique identifier for the webhook subscription to be deleted.

## PagerdutyApi.EnableWebhookSubscription



Enable a temporarily disabled webhook subscription.

**Parameters**

-   **resource\_id** (`string`, required) The unique identifier for the webhook subscription to be enabled.

## PagerdutyApi.TestWebhookSubscription



Test a webhook subscription by firing a test event.

**Parameters**

-   **resource\_id** (`string`, required) The unique ID of the webhook subscription to be tested.

## PagerdutyApi.ListOauthClients



Retrieve all OAuth clients for webhook subscriptions.

**Parameters**

This tool does not take any parameters.

## PagerdutyApi.CreateOauthClient



Create a new OAuth client for webhook subscriptions.

**Parameters**

-   **oauth\_client\_id** (`string`, required) The OAuth client ID provided by the OAuth server.
-   **oauth\_client\_name** (`string`, required) A human-readable name for the OAuth client. It is used to identify the client in a user-friendly manner.
-   **oauth\_client\_secret** (`string`, required) The client secret provided by the OAuth server for the OAuth client.
-   **oauth\_grant\_type** (`string`, required) The OAuth grant type. Currently, only ‘client\_credentials’ is supported.
-   **oauth\_token\_endpoint\_url** (`string`, required) The URL for the OAuth token endpoint required to obtain an access token.
-   **oauth\_scopes\_requested** (`string`, optional) The OAuth scopes requested for this client.

## PagerdutyApi.GetOauthClientDetails



Retrieve details of a specific OAuth client by ID.

**Parameters**

-   **oauth\_client\_id** (`string`, required) The unique identifier of the OAuth client to retrieve details for.

## PagerdutyApi.UpdateOauthClient



Update an existing OAuth client configuration.

**Parameters**

-   **resource\_id** (`string`, required) The unique identifier for the OAuth client resource to update.
-   **oauth\_client\_id** (`string`, optional) The OAuth client ID as provided by the OAuth server.
-   **oauth\_client\_name** (`string`, optional) A human-readable name for the OAuth client.
-   **oauth\_client\_secret** (`string`, optional) The OAuth client secret provided by the OAuth server for authentication.
-   **oauth\_grant\_type** (`string`, optional) Specifies the OAuth grant type to use, currently only ‘client\_credentials’ is supported. Always use ‘client\_credentials’ as input.
-   **oauth\_scopes\_requested** (`string`, optional) The OAuth scopes requested for this client. Provide as a space-separated string.
-   **oauth\_token\_endpoint\_url** (`string`, optional) The URL for the OAuth token endpoint required for this client.

## PagerdutyApi.DeleteOauthClient



Delete an OAuth client from webhook subscriptions.

**Parameters**

-   **resource\_id** (`string`, required) The unique identifier of the OAuth client to be deleted.

## PagerdutyApi.ListWorkflowIntegrations



Retrieve a list of available workflow integrations.

**Parameters**

-   **include\_deprecated\_integrations** (`boolean`, optional) Set to true to include deprecated integrations in the response; false to exclude them.
-   **next\_results\_cursor** (`string`, optional) A string to request the next set of results, usually from the `next_cursor` field of the previous response. Defaults to starting at the beginning if not provided.
-   **result\_limit** (`integer`, optional) The limit on the number of workflow integrations to return in the response.

## PagerdutyApi.GetWorkflowIntegrationDetails



Retrieve details about a PagerDuty workflow integration.

**Parameters**

-   **resource\_id** (`string`, required) The unique identifier of the workflow integration resource in PagerDuty that you want to retrieve details for.

## PagerdutyApi.ListWorkflowIntegrationConnections



Retrieve all workflow integration connections from PagerDuty.

**Parameters**

-   **filter\_by\_partial\_name** (`string`, optional) Filter integrations by a partial name match to narrow down the results.
-   **next\_results\_cursor** (`string`, optional) Optional parameter to retrieve the next set of results from the API. Typically obtained from the previous request’s `next_cursor` field. If not provided, the request starts from the beginning.
-   **response\_limit** (`integer`, optional) The maximum number of results to return for the request.

## PagerdutyApi.GetWorkflowConnections



Retrieve connections for a specific workflow integration.

**Parameters**

-   **workflow\_integration\_id** (`string`, required) Specify the unique ID of the workflow integration to retrieve its connections.
-   **filter\_by\_partial\_name** (`string`, optional) Filter integrations by a partial name match. Provide part of the integration name to refine results.
-   **next\_result\_cursor** (`string`, optional) Request the next set of results using the cursor obtained from a previous response. Leave empty to start from the beginning.
-   **result\_limit** (`integer`, optional) Specifies the maximum number of results to return. It is the minimum of the request’s limit or the API’s maximum request size.

## PagerdutyApi.CreateWorkflowIntegrationConnection



Create a new workflow integration connection in PagerDuty.

**Parameters**

-   **workflow\_integration\_id** (`string`, required) The ID of the Workflow Integration to create a connection for.

## PagerdutyApi.GetWorkflowIntegrationConnectionDetails



Retrieve details of a Workflow Integration Connection.

**Parameters**

-   **resource\_id** (`string`, required) The unique ID of the Workflow Integration Connection resource.
-   **workflow\_integration\_id** (`string`, required) The unique ID of the Workflow Integration to retrieve details for.

## PagerdutyApi.UpdateWorkflowIntegrationConnection



Update an existing Workflow Integration Connection.

**Parameters**

-   **integration\_id** (`string`, required) The ID of the Workflow Integration to be updated. Required to specify which integration connection to modify.
-   **resource\_id** (`string`, required) The ID of the resource to be updated.

## PagerdutyApi.DeleteWorkflowIntegrationConnection



Delete a Workflow Integration Connection on PagerDuty.

**Parameters**

-   **resource\_id** (`string`, required) The unique identifier for the resource to be deleted.
-   **workflow\_integration\_id** (`string`, required) The unique ID of the Workflow Integration to be deleted.

## Reference

Below is a reference of enumerations used by some of the tools in the PagerdutyApi MCP Server:

### ToolMode

-   **GET\_REQUEST\_SCHEMA**: `get_request_schema`
-   **EXECUTE**: `execute`

* * *

## Auth

The Arcade PagerDuty MCP Server uses the [PagerDuty auth provider](/references/auth-providers/pagerduty.md) to connect to users’ PagerDuty accounts.

With the Arcade Cloud Platform, there’s nothing to configure. Your users will see `Arcade` as the name of the application that’s requesting permission.

With a self-hosted installation of Arcade, you need to [configure the PagerDuty auth provider](/references/auth-providers/pagerduty.md#configuring-pagerduty-auth) with your own PagerDuty app credentials.

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_pagerduty_api ``` Learn more](/guides/deployment-hosting.md)

Last updated on February 6, 2026

[GithubApi](/en/resources/integrations/development/github-api.md)
[ZohoCreatorApi](/en/resources/integrations/development/zoho-creator-api.md)
