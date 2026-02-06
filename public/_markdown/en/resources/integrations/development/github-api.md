---
title: "GithubApi"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Developer Tools](/en/resources/integrations/development/e2b.md)
GithubApi

# GithubApi

Arcade Unoptimized

**Description:** Tools that enable LLMs to interact directly with the GitHub API.

**Author:** Arcade

**Auth:** User authorization

[![PyPI Version](https://img.shields.io/pypi/v/arcade_github_api)](https://pypi.org/project/arcade_github_api/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_github_api)](https://pypi.org/project/arcade_github_api/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_github_api)](https://pypi.org/project/arcade_github_api/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_github_api)](https://pypi.org/project/arcade_github_api/)

GithubApi is a [Unoptimized MCP Server](/guides/create-tools/improve/types-of-tools.md#unoptimized-tools)
: each tool mirrors one HTTP endpoint and offers LLMs a way to interact with the low-level API.



Differently from [Optimized MCP Servers](/guides/create-tools/improve/types-of-tools.md#optimized-tools)
, Unoptimized tools are heavily influenced by the original API design, which is not usually optimized for LLM usage. For this reason, we recommend thoroughly evaluating the tools with your Agents or chatbots before using it in production. [Read more](/guides/create-tools/improve/types-of-tools.md) about Optimized vs Unoptimized tools.

The GitHubApi MCP Server offers a comprehensive suite of tools for interacting with GitHub, enabling users and applications to manage repositories, issues, pull requests, and more. With this server, you can:

## Available Tools

Tool Name

Description

GithubApi.GetGithubRootLinks

Retrieve Hypermedia links to GitHub's REST API resources.

GithubApi.ListGlobalWebhooks

Retrieve a list of global webhooks from GitHub Enterprise.

GithubApi.CreateGlobalWebhook

Create a global webhook in GitHub Enterprise Admin.

GithubApi.DeleteGlobalWebhook

Delete a global webhook in GitHub Enterprise.

GithubApi.GetGithubGlobalWebhook

Retrieve details of a specific global webhook in GitHub Enterprise.

GithubApi.UpdateGlobalWebhook

Update a GitHub enterprise global webhook.

GithubApi.TriggerGithubWebhookPing

Trigger a ping event to a GitHub webhook.

GithubApi.ListGithubPublicKeys

Retrieve GitHub Enterprise Admin public keys.

GithubApi.DeleteGithubPublicKey

Delete a public key from GitHub Enterprise.

GithubApi.UpdateLdapMappingForTeam

Update the LDAP mapping for a GitHub team.

GithubApi.QueueLdapSyncForTeam

Queue an LDAP sync job for a specified team.

GithubApi.UpdateLdapMappingForUser

Update LDAP mapping for a user in GitHub Enterprise Admin.

GithubApi.SyncGithubLdapUserMapping

Queue a sync job for LDAP mapping of a GitHub user.

GithubApi.CreateGithubOrganization

Create a new organization on GitHub.

GithubApi.UpdateGithubOrgName

Updates the organization name on GitHub Enterprise.

GithubApi.ListPreReceiveEnvironments

Retrieve a list of pre-receive environments for GitHub Enterprise.

GithubApi.CreatePreReceiveEnvironment

Create a new pre-receive environment on GitHub Enterprise.

GithubApi.DeletePreReceiveEnvironment

Delete a specified pre-receive environment in GitHub Enterprise.

GithubApi.GetGithubPreReceiveEnvironment

Retrieve a GitHub pre-receive environment by ID.

GithubApi.UpdateGithubPreReceiveEnvironment

Update a pre-receive environment in GitHub Enterprise.

GithubApi.TriggerEnvironmentDownload

Start a new download of the environment tarball.

GithubApi.GetPreReceiveEnvDownloadStatus

Retrieve the latest download status for a pre-receive environment.

GithubApi.ListPreReceiveHooks

Retrieve the list of pre-receive hooks in GitHub Enterprise.

GithubApi.CreatePreReceiveHook

Create a pre-receive hook for GitHub enterprise administration.

GithubApi.DeletePreReceiveHook

Delete a pre-receive hook from GitHub Enterprise Admin.

GithubApi.GetPreReceiveHook

Retrieve details of a specific pre-receive hook in GitHub Enterprise Admin.

GithubApi.UpdateGithubPreReceiveHook

Update a GitHub enterprise pre-receive hook.

GithubApi.ListPersonalAccessTokens

Retrieve personal access tokens for all users including admins.

GithubApi.DeleteGithubPersonalAccessToken

Delete a GitHub personal access token.

GithubApi.CreateEnterpriseUser

Creates a new user in GitHub enterprise with external authentication.

GithubApi.DeleteGithubEnterpriseUser

Delete a GitHub Enterprise user and their data.

GithubApi.UpdateGithubUsername

Update a GitHub user's username.

GithubApi.DeleteImpersonationOauthToken

Deletes an impersonation OAuth token for a user in GitHub Enterprise Admin.

GithubApi.CreateImpersonationOauthToken

Create an impersonation OAuth token for a GitHub user.

GithubApi.GetGithubAppInfo

Retrieve details about the authenticated GitHub App.

GithubApi.CompleteGithubAppHandshake

Complete the GitHub App Manifest handshake to retrieve app details.

GithubApi.GetGithubAppWebhookConfig

Fetches the webhook configuration for a GitHub App.

GithubApi.UpdateGithubAppWebhookConfig

Update the webhook configuration for a GitHub App.

GithubApi.ListWebhookDeliveries

Retrieve webhook deliveries for a GitHub App.

GithubApi.GetGithubAppWebhookDelivery

Retrieve delivery details for a GitHub App webhook.

GithubApi.RedeliverGithubWebhookDelivery

Redeliver a GitHub App webhook delivery.

GithubApi.ListGithubAppInstallations

Retrieve installations of a GitHub app using a JWT.

GithubApi.UninstallGithubApp

Uninstall a GitHub App from an account.

GithubApi.GetGithubAppInstallationInfo

Fetch information of a GitHub App installation by ID.

GithubApi.CreateGithubAppInstallationToken

Create an installation access token for a GitHub App.

GithubApi.RemoveGithubAppSuspension

Unsuspend a GitHub App installation.

GithubApi.SuspendGithubAppInstallation

Suspend a GitHub App's installation for specified accounts.

GithubApi.RevokeGithubOauthGrant

Revoke OAuth grant for a GitHub application and user.

GithubApi.RevokeGithubOauthToken

Revoke a GitHub OAuth application's token.

GithubApi.ResetGithubOauthToken

Reset an OAuth token for a GitHub application.

GithubApi.CheckGithubTokenValidity

Check GitHub OAuth token validity with reduced rate limits.

GithubApi.CreateGithubScopedToken

Create a GitHub repository and permission scoped token.

GithubApi.GetGithubAppDetailsBySlug

Retrieve GitHub App details using its slug.

GithubApi.GetAllGithubCodesOfConduct

Retrieve all GitHub codes of conduct.

GithubApi.GetCodeOfConduct

Retrieve a specific code of conduct from GitHub.

GithubApi.ListGithubEmojis

Lists all available GitHub emojis.

GithubApi.RemoveEnterpriseAnnouncement

Removes the global announcement banner in your enterprise.

GithubApi.GetEnterpriseAnnouncementBanner

Retrieve the global announcement banner for your enterprise.

GithubApi.SetGithubAnnouncement

Set the announcement banner message and expiration in GitHub Enterprise.

GithubApi.GetLicenseInformation

Retrieve GitHub Enterprise license information.

GithubApi.GetGithubEnterpriseStats

Retrieve all statistics for GitHub Enterprise.

GithubApi.GetCommentStatistics

Retrieve comment statistics from GitHub Enterprise.

GithubApi.GetGitGistStatistics

Retrieve gist statistics from GitHub Enterprise.

GithubApi.GetHooksStatistics

Retrieves statistics about enterprise webhooks on GitHub.

GithubApi.GetGithubIssueStatistics

Retrieve statistics on GitHub issues for an enterprise.

GithubApi.GetMilestoneStatistics

Retrieve GitHub enterprise milestone statistics.

GithubApi.GetGithubOrgStats

Retrieve organization statistics from GitHub Enterprise.

GithubApi.GetGithubPagesStats

Retrieve statistics for GitHub Pages in an enterprise account.

GithubApi.GetPullRequestStatistics

Retrieve pull request statistics from GitHub Enterprise.

GithubApi.GetRepositoryStatistics

Retrieve statistics for GitHub repositories.

GithubApi.GetGithubUserStats

Retrieve user statistics from GitHub Enterprise.

GithubApi.GetGithubActionsCacheUsageForEnterprise

Retrieve GitHub Actions cache usage for an enterprise.

GithubApi.GetGithubActionsCachePolicy

Retrieve the GitHub Actions cache usage policy for an enterprise.

GithubApi.SetGithubActionsCachePolicy

Set GitHub Actions cache usage policy for an enterprise.

GithubApi.GetGithubActionsPermissions

Get GitHub Actions permissions for an enterprise.

GithubApi.SetGithubActionsPermissions

Set GitHub Actions permissions for an enterprise.

GithubApi.ListActionsEnabledOrgsEnterprise

List organizations with GitHub Actions enabled in an enterprise.

GithubApi.SetGithubActionsEnabledOrgs

Replace organizations enabled for GitHub Actions in an enterprise.

GithubApi.DisableOrgGithubActions

Disable GitHub Actions for an organization in an enterprise.

GithubApi.EnableGithubActionsForOrg

Enable GitHub Actions for a selected organization in an enterprise.

GithubApi.GetAllowedActionsForEnterprise

Retrieve the actions allowed in a GitHub enterprise.

GithubApi.SetAllowedActionsEnterprise

Configure allowed GitHub Actions for an enterprise.

GithubApi.GetGithubTokenWorkflowPermissions

Retrieve GitHub Actions default workflow permissions for an enterprise.

GithubApi.SetEnterpriseWorkflowPermissions

Set default GitHub Actions permissions for an enterprise.

GithubApi.ListSelfHostedRunnerGroups

Retrieve all self-hosted runner groups for an enterprise.

GithubApi.CreateSelfHostedRunnerGroup

Create a self-hosted runner group for an enterprise.

GithubApi.DeleteSelfHostedRunnerGroup

Delete a self-hosted runner group for an enterprise.

GithubApi.GetSelfHostedRunnerGroup

Retrieve a specific self-hosted runner group for an enterprise.

GithubApi.UpdateRunnerGroupEnterprise

Update the name and visibility of a self-hosted runner group in an enterprise.

GithubApi.ListOrgAccessRunnerGroup

List organizations with access to a self-hosted runner group.

GithubApi.SetGhOrgAccessToRunnerGroup

Update organization access for a GitHub runner group.

GithubApi.RemoveOrgAccessRunnerGroup

Removes an organization's access to a self-hosted runner group.

GithubApi.AddOrgAccessToRunnerGroup

Add organization access to a self-hosted runner group in an enterprise.

GithubApi.ListSelfHostedRunnersInGroup

Retrieve self-hosted runners in an enterprise group.

GithubApi.UpdateSelfHostedRunnersInGroup

Update self-hosted runners in an enterprise group.

GithubApi.RemoveRunnerFromEnterpriseGroup

Remove a self-hosted runner from an enterprise group.

GithubApi.AddSelfHostedRunnerToGroup

Add a self-hosted runner to an enterprise group in GitHub.

GithubApi.ListSelfHostedRunnersForEnterprise

Retrieve all self-hosted runners for a GitHub enterprise.

GithubApi.ListRunnerBinariesForEnterprise

Retrieve download links for runner application binaries.

GithubApi.CreateGithubEnterpriseRegistrationToken

Generate a registration token for GitHub Enterprise runners.

GithubApi.GetRemoveTokenForEnterpriseRunner

Generates a token to remove a self-hosted runner from an enterprise.

GithubApi.RemoveSelfHostedRunnerFromEnterprise

Remove a self-hosted runner from an enterprise.

GithubApi.GetSelfHostedRunnerInfo

Retrieve details of a self-hosted runner in an enterprise.

GithubApi.RemoveCustomLabelsFromRunner

Remove all custom labels from an enterprise's self-hosted runner.

GithubApi.ListLabelsForRunner

Retrieve all labels for a self-hosted runner in an enterprise.

GithubApi.AddCustomLabelsToRunner

Add custom labels to a self-hosted runner in an enterprise.

GithubApi.SetCustomLabelsForSelfHostedRunner

Set custom labels for a self-hosted runner in an enterprise.

GithubApi.RemoveCustomLabelFromRunner

Remove a custom label from a self-hosted runner in an enterprise.

GithubApi.GetEnterpriseAuditLog

Retrieve the audit log for a specified enterprise.

GithubApi.ListEnterpriseCodeScanningAlerts

Retrieve code scanning alerts for enterprise repositories.

GithubApi.GetSecurityAnalysisSettings

Get security analysis settings for an enterprise.

GithubApi.UpdateSecuritySettingsEnterprise

Update security and scanning settings for enterprise repositories.

GithubApi.ListEnterpriseDependabotAlerts

Get Dependabot alerts for enterprise-owned repositories.

GithubApi.ListSecretScanningAlertsForEnterprise

Retrieve secret scanning alerts for enterprise repositories.

GithubApi.GetGithubSecurityBillingInfo

Retrieve GitHub Advanced Security billing details for an enterprise.

GithubApi.ManageEnterpriseSecurityFeature

Enable or disable a security feature for an enterprise.

GithubApi.ListRecentGithubEvents

Retrieve recent public events from GitHub.

GithubApi.GetGithubFeeds

Retrieve available GitHub feeds for an authenticated user.

GithubApi.ListUserGists

Lists a user's gists or public gists if unauthenticated.

GithubApi.CreateGist

Create a new gist with one or more files on GitHub.

GithubApi.ListRecentPublicGists

Retrieve the most recently updated public gists.

GithubApi.ListStarredGists

Retrieve the authenticated user's starred gists.

GithubApi.DeleteGithubGist

Delete a GitHub gist by its ID.

GithubApi.GetGithubGist

Retrieve details of a specific GitHub gist using its ID.

GithubApi.UpdateGithubGist

Update a GitHub gist's description and files.

GithubApi.ListGistComments

Retrieve comments for a specific GitHub gist.

GithubApi.CreateGistComment

Create a comment on a GitHub gist.

GithubApi.DeleteGistComment

Delete a comment from a GitHub gist.

GithubApi.GetGistComment

Retrieve a specific comment from a GitHub gist.

GithubApi.UpdateGistComment

Update an existing comment on a GitHub gist.

GithubApi.ListGistCommits

Retrieve the commit history of a specified GitHub gist.

GithubApi.ListGistForks

Retrieve a list of forks for a specific gist.

GithubApi.ForkGist

Fork a GitHub gist to your account.

GithubApi.UnstarGithubGist

Unstar a GitHub gist by its ID.

GithubApi.CheckIfGistIsStarred

Determine if a specific gist is starred on GitHub.

GithubApi.StarGithubGist

Star a gist on GitHub using its gist ID.

GithubApi.GetGistRevision

Retrieve a specific revision of a GitHub gist.

GithubApi.ListGitignoreTemplates

Retrieve all available .gitignore templates from GitHub.

GithubApi.FetchGitignoreTemplate

Fetches the raw .gitignore template by name.

GithubApi.ListGithubAppAccessibleRepos

List repositories accessible to a GitHub app installation.

GithubApi.RevokeGithubInstallationToken

Revoke your GitHub installation access token.

GithubApi.ListGithubIssues

Get issues assigned to you across all GitHub repositories.

GithubApi.GetCommonlyUsedLicenses

Fetch a list of commonly used software licenses.

GithubApi.GetGithubLicense

Retrieve a specific GitHub license by its key.

GithubApi.RenderMarkdown

Convert Markdown content to HTML rendering.

GithubApi.RenderMarkdownPlain

Convert Markdown text to rendered plain text format.

GithubApi.GetGithubEnterpriseMetaInfo

Retrieve GitHub Enterprise Server meta information.

GithubApi.ListRepoNetworkPublicEvents

Retrieve public events for a network of repositories.

GithubApi.ListUserNotifications

Retrieve notifications for the authenticated GitHub user.

GithubApi.MarkGithubNotificationsAsRead

Mark all GitHub notifications as read for the current user.

GithubApi.GetGithubNotificationThread

Retrieve information about a GitHub notification thread.

GithubApi.MarkGithubThreadAsRead

Mark a GitHub thread notification as read.

GithubApi.MuteGithubThreadNotifications

Mute all future notifications for a GitHub thread.

GithubApi.CheckThreadSubscription

Check if the authenticated user is subscribed to a thread.

GithubApi.ManageGithubThreadNotifications

Manage GitHub notifications for specific threads.

GithubApi.GetOctocatAsciiArt

Retrieve the octocat as ASCII art.

GithubApi.ListGithubOrganizations

Retrieve a list of GitHub organizations.

GithubApi.ListGithubCustomRoles

Retrieve custom repository roles for a GitHub organization.

GithubApi.GetGithubOrgInfo

Retrieve detailed information about a GitHub organization.

GithubApi.UpdateGithubOrganization

Update a GitHub organization's profile and member privileges.

GithubApi.FetchOrgActionsCacheUsage

Fetches GitHub Actions cache usage for a specified organization.

GithubApi.GetGithubActionsCacheUsageForOrg

Retrieve GitHub Actions cache usage for an organization's repositories.

GithubApi.GetOidcCustomSubTemplateForOrg

Retrieves the OIDC subject claim customization template for an organization.

GithubApi.UpdateGithubOidcTemplate

Update OIDC custom subject claim template for GitHub organization.

GithubApi.GetGithubActionsPermissionsForOrganization

Retrieve GitHub Actions permissions for an organization.

GithubApi.ConfigureGithubActionsPermissions

Configure GitHub Actions permissions for an organization.

GithubApi.ListActionsEnabledRepos

Retrieve repositories enabled for GitHub Actions in an organization.

GithubApi.SetGithubActionsReposForOrg

Configure selected repositories for GitHub Actions in an organization.

GithubApi.DisableGithubActionsRepo

Disable GitHub Actions for a specific repo in an organization.

GithubApi.EnableGithubActionsForRepo

Enable a repository for GitHub Actions in an organization.

GithubApi.GetAllowedActionsForOrganization

Retrieve the allowed GitHub Actions for an organization.

GithubApi.SetAllowedActionsForOrganization

Set allowed GitHub Actions for an organization.

GithubApi.GetDefaultGithubActionsWorkflowPermissions

Fetches default workflow permissions for an organization's GitHub Actions.

GithubApi.SetDefaultGithubActionsPermissions

Configure default GitHub Actions permissions for an organization.

GithubApi.ListRequiredWorkflows

Retrieve all required workflows in a GitHub organization.

GithubApi.CreateGithubRequiredWorkflow

Create a required workflow in a GitHub organization.

GithubApi.DeleteGithubRequiredWorkflow

Deletes a required workflow in a GitHub organization.

GithubApi.GetRequiredWorkflow

Retrieve a required workflow for a GitHub organization.

GithubApi.UpdateGithubRequiredWorkflow

Update a required workflow in a GitHub organization.

GithubApi.ListRequiredWorkflowRepositories

List repositories configured for a required workflow.

GithubApi.SetGithubReposForRequiredWorkflow

Set repositories for a GitHub required workflow.

GithubApi.RemoveRepoFromRequiredWorkflow

Removes a repository from a GitHub required workflow.

GithubApi.AddRepoToRequiredWorkflow

Adds a repository to a GitHub required workflow.

GithubApi.ListRunnerGroupsForOrg

Retrieve self-hosted runner groups for a GitHub organization.

GithubApi.CreateRunnerGroupForOrg

Create a self-hosted runner group for an organization.

GithubApi.DeleteRunnerGroupFromOrganization

Delete a self-hosted runner group from an organization.

GithubApi.GetSelfHostedRunnerGroupForOrg

Retrieve a specific self-hosted runner group for an organization.

GithubApi.UpdateRunnerGroupSettings

Update name and visibility of a runner group in an organization.

GithubApi.ListReposWithRunnerGroupAccess

Retrieve repositories with access to a runner group in an organization.

GithubApi.SetGithubRunnerGroupRepoAccess

Update repository access for a GitHub runner group.

GithubApi.RemoveRepoAccessFromRunnerGroup

Remove repository access from a self-hosted runner group.

GithubApi.AddRepoAccessToRunnerGroup

Add repository access to a self-hosted runner group.

GithubApi.ListOrgRunnerGroupRunners

List self-hosted runners in an organization group.

GithubApi.UpdateSelfHostedRunnersForOrgGroup

Update self-hosted runners in an organization's runner group.

GithubApi.RemoveRunnerFromGroup

Remove a self-hosted runner from an organization's group.

GithubApi.AddRunnerToGroup

Add a self-hosted runner to an organization's runner group.

GithubApi.ListOrgSelfHostedRunners

Retrieve self-hosted runners for a GitHub organization.

GithubApi.ListGithubRunnerBinariesForOrg

Retrieve downloadable binaries for GitHub runner application.

GithubApi.CreateOrgRunnerRegistrationToken

Generate a registration token for GitHub organization runners.

GithubApi.GetOrgRunnerRemovalToken

Get a token to remove a self-hosted runner from an organization.

GithubApi.RemoveSelfHostedRunnerFromOrg

Forcefully remove a self-hosted runner from an organization.

GithubApi.GetOrgSelfHostedRunner

Get details of a self-hosted runner for an organization.

GithubApi.RemoveAllCustomLabelsRunnerOrg

Remove all custom labels from an organization's self-hosted runner.

GithubApi.ListRunnerLabelsForOrg

Retrieve labels for a self-hosted runner in an organization.

GithubApi.AddLabelsToRunner

Add custom labels to a self-hosted runner in an organization.

GithubApi.SetCustomLabelsRunnerOrg

Set custom labels for a self-hosted runner in an organization.

GithubApi.DeleteCustomRunnerLabel

Remove a custom label from a self-hosted runner in an organization.

GithubApi.ListOrganizationSecrets

Retrieve all organization secrets without values.

GithubApi.GetOrganizationPublicKey

Retrieve the public key for GitHub organization secrets encryption.

GithubApi.DeleteGithubOrgSecret

Deletes a secret from a GitHub organization.

GithubApi.GetGithubOrgSecret

Retrieve details of a GitHub organization secret.

GithubApi.CreateOrUpdateOrgSecret

Create or update an organization's secret on GitHub.

GithubApi.ListReposWithOrgSecret

Retrieve repositories with access to a specific organization secret.

GithubApi.UpdateOrgSecretRepos

Update repositories for an organization secret.

GithubApi.RemoveRepoFromOrgSecret

Remove a repository from an organization's secret access.

GithubApi.AddRepoToOrgSecret

Add a repository to an organization's secret.

GithubApi.ListOrgVariables

Retrieve all variables for a GitHub organization.

GithubApi.CreateGithubOrgVariable

Create an organization variable for GitHub Actions workflows.

GithubApi.DeleteGithubOrgVariable

Delete an organization's variable on GitHub.

GithubApi.GetOrganizationVariable

Retrieve a specific variable from a GitHub organization.

GithubApi.UpdateGithubOrgActionVariable

Update an organization variable in GitHub Actions.

GithubApi.ListReposWithOrgVariableAccess

Retrieve repos accessing an organization's variable.

GithubApi.SetOrgVariableRepos

Replace repositories for an organization's variable.

GithubApi.RemoveRepoFromOrgVariable

Remove a repository from a GitHub organization variable.

GithubApi.AddRepoToOrgVariable

Add a repository to an organization's selected variables.

GithubApi.RemoveOrgAnnouncementBanner

Remove the announcement banner for a GitHub organization.

GithubApi.GetOrgAnnouncementBanner

Retrieve the announcement banner for a specific organization.

GithubApi.SetOrgAnnouncementBanner

Sets the announcement banner for a GitHub organization.

GithubApi.GetOrgAuditLog

Retrieve the audit log for a GitHub organization.

GithubApi.ListOrgCodeScanningAlerts

Retrieve code scanning alerts for an organization's repositories.

GithubApi.ListDependabotAlertsForOrganization

Lists Dependabot alerts for an organization.

GithubApi.ListGithubOrgSecrets

Retrieve Dependabot organization secrets from GitHub.

GithubApi.GetOrgPublicKey

Retrieve the public key for encrypting GitHub Dependabot secrets.

GithubApi.RemoveGithubOrgSecret

Delete a secret from a GitHub organization.

GithubApi.GetOrgSecretInfo

Retrieve details of an organization's secret without revealing the encrypted value.

GithubApi.UpdateGithubOrgSecret

Create or update a GitHub organization secret.

GithubApi.ListSelectedRepositoriesForSecret

Retrieve repositories with selected access for an org secret.

GithubApi.SetReposForOrgSecret

Update selected repos for an organization's Dependabot secret.

GithubApi.DeleteRepoFromOrgSecret

Remove a repository from a GitHub organization secret.

GithubApi.AddRepositoryToSecret

Add a repository to a GitHub organization secret.

GithubApi.ListPublicOrgEvents

List public events for a GitHub organization.

GithubApi.GetGithubExternalGroupInfo

Retrieve information about a GitHub external group's usage.

GithubApi.ListExternalGroupsForOrg

Retrieve external groups available in a GitHub organization.

GithubApi.ListOrganizationWebhooks

Retrieve the webhooks for a specific organization on GitHub.

GithubApi.CreateGithubOrgWebhook

Create a webhook for a GitHub organization.

GithubApi.DeleteOrgWebhook

Delete a webhook from a GitHub organization.

GithubApi.GetOrgWebhookDetails

Retrieve details of a specific organization webhook.

GithubApi.UpdateGithubOrgWebhook

Update a webhook configured in a GitHub organization.

GithubApi.GetOrgWebhookConfiguration

Retrieve webhook configuration for a GitHub organization.

GithubApi.UpdateOrgWebhookConfig

Update webhook configuration for a GitHub organization.

GithubApi.GetWebhookEventDeliveries

Retrieve webhook deliveries for an organization.

GithubApi.GetGithubWebhookDelivery

Retrieve a webhook delivery for a GitHub organization.

GithubApi.RedeliverWebhookDelivery

Redeliver an organization's webhook delivery attempt.

GithubApi.SendGithubHookPing

Triggers a ping event on a GitHub organization webhook.

GithubApi.GetGithubOrgInstallationInfo

Retrieve GitHub organization's installation information.

GithubApi.OrganizationAppInstallations

Retrieve GitHub App installations for an organization.

GithubApi.ListOrganizationIssuesForUser

Retrieve issues and pull requests for a user in an organization.

GithubApi.ListOrgMembers

Retrieve members of a GitHub organization.

GithubApi.RemoveOrganizationMember

Remove a user from an organization's access list.

GithubApi.CheckUserMembershipInOrg

Checks if a user is a member of a GitHub organization.

GithubApi.RemoveOrgMember

Remove a user's membership from a GitHub organization.

GithubApi.GetUserOrgMembershipStatus

Get a user's membership status in an organization.

GithubApi.UpdateOrgMembership

Manage user membership for a GitHub organization.

GithubApi.ListRecentGithubMigrations

Retrieve the latest GitHub migrations for an organization.

GithubApi.StartOrgMigration

Initiates a migration archive for a GitHub organization.

GithubApi.CheckOrgMigrationStatus

Fetches the status of an organization's migration.

GithubApi.DeleteGithubOrgMigrationArchive

Delete a previous GitHub organization migration archive.

GithubApi.FetchOrgMigrationArchiveUrl

Fetches the URL to download an organization's migration archive.

GithubApi.UnlockGithubRepoForOrgMigration

Unlock a locked repository after migration for an organization.

GithubApi.ListReposForOrgMigration

List all repositories for an organization's migration.

GithubApi.ListOrgOutsideCollaborators

Retrieve outside collaborators for a GitHub organization.

GithubApi.RemoveOrgOutsideCollaborator

Remove a user from all organization repositories.

GithubApi.ConvertMemberToOutsideCollaborator

Convert GitHub org member to outside collaborator.

GithubApi.ListOrgPreReceiveHooks

Retrieve pre-receive hooks for a GitHub organization.

GithubApi.RemoveOrgPreReceiveHook

Removes pre-receive hook enforcement overrides for an organization.

GithubApi.GetOrgPreReceiveHook

Retrieve a pre-receive hook for an organization.

GithubApi.UpdatePreReceiveHookEnforcement

Update pre-receive hook enforcement for a GitHub organization.

GithubApi.ListOrganizationProjects

Retrieve a list of projects for a given organization on GitHub.

GithubApi.CreateOrgProjectGithub

Create a project board for a GitHub organization.

GithubApi.ListPublicOrgMembers

Retrieve public members of a GitHub organization.

GithubApi.RemovePublicOrgMembership

Remove public organization membership for the user.

GithubApi.CheckGithubOrgMembership

Checks if a user is a public member of a GitHub organization.

GithubApi.SetOwnGithubPublicMembership

Publicize your GitHub organization membership.

GithubApi.ListOrganizationRepositories

Retrieve repositories for a specific organization on GitHub.

GithubApi.CreateGithubOrganizationRepo

Create a new repository in a GitHub organization.

GithubApi.ListOrgSecretScanningAlerts

Retrieve secret scanning alerts for an organization's repositories.

GithubApi.ListSecurityManagerTeams

Retrieve teams that are security managers in an organization.

GithubApi.RemoveSecurityManagerRole

Remove security manager role from a team in an organization.

GithubApi.AddSecurityManagerTeam

Add a team as a security manager for an organization.

GithubApi.GetAdvancedSecurityCommitters

Retrieve GitHub Advanced Security committers for an organization.

GithubApi.ListOrganizationTeams

Retrieve teams visible to the user in a GitHub organization.

GithubApi.CreateGithubTeam

Create a new team in a GitHub organization.

GithubApi.DeleteTeamInOrg

Delete a team in a GitHub organization.

GithubApi.GetTeamBySlug

Retrieve team details using organization and team slug.

GithubApi.UpdateGithubTeam

Update a team's details within a GitHub organization.

GithubApi.ListTeamDiscussions

Retrieve all discussions from a team's page in an organization.

GithubApi.CreateTeamDiscussionGithub

Create a discussion post on a GitHub team's page.

GithubApi.DeleteTeamDiscussion

Delete a discussion from a team's page on GitHub.

GithubApi.GetTeamDiscussion

Retrieve a specific team discussion from GitHub.

GithubApi.UpdateTeamDiscussion

Edits the title and body of a team discussion post.

GithubApi.ListTeamDiscussionComments

Retrieve comments from a team discussion in an organization.

GithubApi.CreateTeamDiscussionComment

Create a new comment on a team discussion in an organization.

GithubApi.DeleteTeamDiscussionComment

Deletes a comment on a team discussion in an organization.

GithubApi.GetGithubTeamDiscussionComment

Retrieve a specific comment from a GitHub team discussion.

GithubApi.UpdateGithubDiscussionComment

Updates a GitHub discussion comment's text.

GithubApi.ListTeamDiscussionCommentReactions

Retrieve reactions for a team discussion comment in an organization.

GithubApi.AddReactionToTeamDiscussionComment

Add a reaction to a GitHub team discussion comment.

GithubApi.DeleteTeamDiscussionCommentReaction

Delete a reaction from a team discussion comment on GitHub.

GithubApi.GetTeamDiscussionReactions

Retrieve reactions to a specific team discussion in a GitHub organization.

GithubApi.AddReactionToGithubTeamDiscussion

Add a reaction to a GitHub team discussion.

GithubApi.DeleteGithubTeamDiscussionReaction

Delete a reaction from a GitHub team discussion.

GithubApi.UnlinkExternalIdpGroupFromTeam

Unlink an external IdP group from a GitHub team.

GithubApi.ListLinkedExternalGroups

Retrieve connections between a GitHub team and external groups.

GithubApi.LinkExternalGroupToTeam

Link an external IDP group to a GitHub team.

GithubApi.ListTeamMembersInOrg

Retrieve team members in a specified organization.

GithubApi.RemoveTeamMembership

Remove a user's membership from a GitHub team.

GithubApi.GetUserTeamMembershipInOrg

Retrieve a user's team membership status in an organization.

GithubApi.AddUpdateGithubTeamMembership

Add or update a user's membership in a GitHub team.

GithubApi.ListTeamProjectsInOrg

Retrieve a list of projects for a team in an organization.

GithubApi.RemoveProjectFromTeam

Remove a project from a team in a GitHub organization.

GithubApi.CheckTeamProjectPermissions

Check team's permissions for an organization's project.

GithubApi.AddOrUpdateGithubTeamProjectPermissions

Add or update a GitHub team's permissions on an organization project.

GithubApi.ListTeamRepositories

Retrieve a list of repositories for a specified team.

GithubApi.RemoveRepoFromTeam

Remove a repository from a GitHub team within an organization.

GithubApi.CheckTeamRepoPermissions

Check a team's permissions for a specific repository within an organization.

GithubApi.UpdateTeamRepoPermissions

Manage team repository access and permissions.

GithubApi.ListChildTeams

Retrieves child teams of a specified team in an organization.

GithubApi.ManageOrgSecurityFeatures

Toggle security features for all repositories in an organization.

GithubApi.DeleteProjectCard

Delete a project card from GitHub projects.

GithubApi.GetProjectCard

Retrieve details of a specific project card in GitHub.

GithubApi.UpdateGithubProjectCard

Update an existing project card on GitHub.

GithubApi.MoveProjectCard

Move a project card to a different position within the same column or to a different column.

GithubApi.DeleteGithubProjectColumn

Deletes a specific project column on GitHub.

GithubApi.GetGithubProjectColumn

Retrieve details of a GitHub project column using its ID.

GithubApi.UpdateProjectColumn

Update an existing project column on GitHub.

GithubApi.ListProjectCards

Retrieve project cards for a specific column on GitHub projects.

GithubApi.CreateGithubProjectCard

Create a project card in a specified GitHub column.

GithubApi.MoveGithubProjectColumn

Move a column within a GitHub project board.

GithubApi.DeleteProjectBoard

Deletes a specified project board on GitHub.

GithubApi.GetGithubProjectById

Retrieve details of a GitHub project by its ID.

GithubApi.UpdateProjectBoard

Update a project board's information on GitHub.

GithubApi.ListProjectCollaborators

Retrieve collaborators for a GitHub organization project.

GithubApi.RemoveProjectCollaborator

Remove a collaborator from a GitHub organization project.

GithubApi.AddProjectCollaborator

Add a collaborator to an organization project.

GithubApi.GetUserProjectPermission

Retrieve a user's permission level for an organization project.

GithubApi.ListGithubProjectColumns

Retrieve columns of a specific GitHub project.

GithubApi.CreateProjectColumn

Create a new column in a GitHub project.

GithubApi.GetGithubRateLimit

Retrieve current GitHub API rate limit status.

GithubApi.ListRepoRequiredWorkflows

Retrieve required workflows in a GitHub repository.

GithubApi.GetGithubRepoRequiredWorkflow

Retrieve a specific required workflow from a GitHub repository.

GithubApi.DeleteGithubRepository

Deletes a specified GitHub repository.

GithubApi.GetGithubRepositoryDetails

Retrieve detailed information about a GitHub repository.

GithubApi.UpdateGithubRepository

Update repository details on GitHub.

GithubApi.ListGithubRepoArtifacts

Retrieve all artifacts for a GitHub repository.

GithubApi.DeleteGithubArtifact

Deletes a specified GitHub artifact.

GithubApi.GetWorkflowArtifact

Retrieve a specific artifact from a GitHub workflow run.

GithubApi.GetGithubArtifactDownloadUrl

Retrieve a URL to download a GitHub artifact zip file.

GithubApi.GetGithubActionsCacheUsage

Fetch GitHub Actions cache usage for a repository.

GithubApi.FetchGithubActionsCachePolicy

Retrieve the cache usage policy for GitHub Actions in a repository.

GithubApi.ConfigureGithubActionsCache

Set GitHub Actions cache usage policy for a repository.

GithubApi.RemoveActionsCacheKey

Delete GitHub Actions caches by key for a repository.

GithubApi.ListGithubActionsCaches

Retrieve the list of GitHub Actions caches for a repository.

GithubApi.DeleteGithubActionsCache

Delete a GitHub Actions cache by ID for a repository.

GithubApi.GetGithubWorkflowJob

Retrieve a specific job from a GitHub workflow run.

GithubApi.DownloadGithubWorkflowJobLogs

Retrieve a URL to download GitHub workflow job logs.

GithubApi.GithubRerunWorkflowJob

Re-run a job in a GitHub workflow.

GithubApi.GetOidcSubjectClaimTemplate

Retrieve the OIDC subject claim customization template for a repository.

GithubApi.SetGithubOidcSubjectClaim

Customize OIDC subject claim for a GitHub repository.

GithubApi.FetchGithubActionsPerms

Retrieve GitHub Actions permissions for a repository.

GithubApi.UpdateRepoActionsPermissions

Sets GitHub Actions permissions for a repository.

GithubApi.GetWorkflowAccessLevel

Determine external workflow access level for a repository.

GithubApi.SetWorkflowAccess

Set the access level for workflows in a repository.

GithubApi.GetAllowedActionsForRepo

Retrieve allowed GitHub Actions settings for a repository.

GithubApi.SetGithubActionsAllowedInRepo

Set allowed GitHub Actions in a repository.

GithubApi.GetDefaultGithubActionsPermissions

Retrieve default GitHub Actions workflow permissions for a repository.

GithubApi.ConfigureGithubTokenPermissions

Set default workflow permissions for a repository's GitHub Actions.

GithubApi.ListRequiredWorkflowRuns

Retrieve all workflow runs for a required workflow.

GithubApi.ListSelfHostedRunners

Retrieve self-hosted runners for a GitHub repository.

GithubApi.ListRunnerAppsForRepo

Retrieve runner application binaries for a GitHub repository.

GithubApi.CreateRepoRegistrationToken

Obtain a registration token for GitHub repository actions.

GithubApi.GenerateGithubRunnerRemoveToken

Generate a token to remove a GitHub self-hosted runner.

GithubApi.RemoveSelfHostedRunner

Removes a self-hosted runner from a GitHub repository.

GithubApi.RetrieveRunnerDetails

Retrieve information about a self-hosted runner in a GitHub repo.

GithubApi.RemoveCustomLabelsRunnerRepo

Remove all custom labels from a self-hosted runner in a repository.

GithubApi.ListRunnerLabels

Retrieve all labels for a self-hosted runner in a GitHub repo.

GithubApi.LabelRunnerForRepo

Add custom labels to a repository's self-hosted runner.

GithubApi.SetRunnerLabels

Update custom labels for a self-hosted runner in a GitHub repo.

GithubApi.RemoveRunnerLabel

Remove a custom label from a self-hosted runner in a repository.

GithubApi.ListGithubWorkflowRuns

Retrieve all workflow runs for a GitHub repository.

GithubApi.DeleteGithubWorkflowRun

Delete a specific GitHub workflow run.

GithubApi.GetGithubWorkflowRun

Retrieve details of a specific GitHub workflow run.

GithubApi.GetGithubActionsRunReviews

Retrieve reviews for a GitHub Actions run.

GithubApi.ListWorkflowArtifacts

Retrieve artifacts from a GitHub workflow run.

GithubApi.GetGithubWorkflowRunAttempt

Retrieve details of a specific GitHub workflow run attempt.

GithubApi.ListWorkflowRunJobs

Retrieve jobs from a specific GitHub workflow run attempt.

GithubApi.GetWorkflowRunAttemptLogsUrl

Retrieve a URL to download workflow run attempt logs.

GithubApi.CancelGithubWorkflowRun

Cancels a GitHub workflow run using its ID.

GithubApi.ListGithubWorkflowJobs

Fetches jobs for a specific GitHub workflow run.

GithubApi.DeleteGithubWorkflowRunLogs

Deletes all logs for a specified workflow run on GitHub.

GithubApi.DownloadWorkflowRunLogs

Get a redirect URL to download workflow run log files.

GithubApi.GetPendingDeploymentsForRun

Retrieve pending deployments for a GitHub workflow run.

GithubApi.ApproveOrRejectPendingDeployments

Approve or reject pending deployments for a workflow run.

GithubApi.RerunGithubWorkflow

Initiates the rerun of a specific GitHub workflow.

GithubApi.RerunFailedGithubWorkflowJobs

Re-run failed jobs in a GitHub workflow run.

GithubApi.ListRepoSecrets

Retrieve all repository secrets without values.

GithubApi.GetRepoPublicKey

Retrieve the public key for encrypting repository secrets.

GithubApi.DeleteGithubRepoSecret

Deletes a secret from a GitHub repository.

GithubApi.GetRepositorySecretInfo

Retrieve metadata for a specific GitHub repository secret.

GithubApi.CreateOrUpdateGithubRepoSecret

Create or update a GitHub repository secret with an encrypted value.

GithubApi.ListGithubRepoVariables

Retrieve all variables for a specified GitHub repository.

GithubApi.CreateGithubRepoVariable

Create a variable for a GitHub repository to use in Actions workflows.

GithubApi.DeleteGithubRepoVariable

Delete a repository variable on GitHub using its name.

GithubApi.GetGithubRepoVariable

Retrieve a specific variable from a GitHub repository.

GithubApi.UpdateGithubRepoVariable

Update a variable in a GitHub repository for actions workflows.

GithubApi.ListGithubRepoWorkflows

Retrieve GitHub workflows in a repository.

GithubApi.ListGithubIssueAssignees

Retrieve available assignees for GitHub issues.

GithubApi.CheckUserAssignmentPermission

Check if a user can be assigned to a GitHub issue.

GithubApi.GetRepoAutolinks

Retrieve autolinks for a specific GitHub repository.

GithubApi.CreateRepositoryAutolink

Create an autolink reference in a GitHub repository.

GithubApi.DeleteGithubRepoAutolink

Delete an autolink reference from a GitHub repository.

GithubApi.GetRepositoryAutolink

Retrieve a specific GitHub repository autolink by ID.

GithubApi.ListGithubRepoBranches

Retrieve branches from a specific GitHub repository.

GithubApi.GetGithubRepoBranch

Retrieve details of a specific branch from a GitHub repository.

GithubApi.DeleteBranchProtection

Remove protection from a specified GitHub branch.

GithubApi.GetGithubBranchProtection

Retrieve protection settings for a GitHub branch.

GithubApi.UpdateBranchProtection

Update GitHub repository branch protection settings.

GithubApi.DeleteAdminBranchProtection

Remove admin enforcement on a protected branch.

GithubApi.GetAdminBranchProtectionStatus

Get admin branch protection status on GitHub.

GithubApi.SetAdminBranchProtection

Set admin branch protection in a GitHub repository.

GithubApi.RemovePullRequestReviewProtection

Remove pull request review protection from a branch.

GithubApi.GetPullRequestReviewProtection

Get pull request review protection details for a branch.

GithubApi.UpdatePullRequestReviewProtection

Update pull request review protection settings for a branch.

GithubApi.DisableCommitSignatureProtection

Disable required signed commits on a branch.

GithubApi.CheckBranchCommitSignatureStatus

Check if a branch requires signed commits for protection.

GithubApi.RequireSignedCommitsOnBranch

Enable signed commit requirement on a GitHub branch.

GithubApi.RemoveStatusCheckProtection

Remove status check protection from a GitHub branch.

GithubApi.GetBranchProtectionStatusChecks

Retrieve status check protections for a GitHub branch.

GithubApi.UpdateBranchStatusCheckProtection

Update status check protection for a GitHub branch.

GithubApi.RemoveBranchStatusCheckContexts

Remove status check contexts from a protected branch.

GithubApi.GetGithubStatusCheckContexts

Retrieve status check contexts for a protected GitHub branch.

GithubApi.AddStatusCheckContextsToBranch

Add status check contexts to a protected branch.

GithubApi.SetBranchStatusCheckContexts

Set status check contexts for a protected branch.

GithubApi.RemoveBranchAccessRestriction

Remove access restrictions from a GitHub branch.

GithubApi.GetBranchAccessRestrictions

Retrieve access information for a protected branch.

GithubApi.RemoveGithubAppBranchAccess

Remove an app's access to a protected GitHub branch.

GithubApi.GetAppsWithBranchAccess

Retrieve GitHub Apps with access to a protected branch.

GithubApi.AddAppAccessRestrictions

Grant specified apps push access to a protected branch.

GithubApi.SetBranchAppAccessRestrictions

Replace apps with push access on a protected branch.

GithubApi.RemoveTeamAccessFromBranch

Remove a team's push access to a protected GitHub branch.

GithubApi.GetTeamsWithPushAccessToBranch

Retrieve teams with push access to a protected branch.

GithubApi.AddTeamAccessToBranch

Grant push access to teams for a specific branch.

GithubApi.SetGithubBranchTeamAccess

Update the team access restrictions on a GitHub branch.

GithubApi.RemoveUserAccessFromBranch

Remove users' push access from a GitHub branch.

GithubApi.ListUsersWithBranchAccess

Retrieve users with push access to a protected branch on GitHub.

GithubApi.GrantPushAccessGithubBranch

Grant push access to specified users for a GitHub branch.

GithubApi.SetBranchUserAccessRestrictions

Set user access restrictions for a GitHub branch.

GithubApi.RenameGithubBranch

Rename a branch in a GitHub repository.

GithubApi.CreateGithubCheckRun

Create a new check run for a GitHub repository commit.

GithubApi.GetGithubCheckRun

Retrieve a specific GitHub check run by its ID.

GithubApi.UpdateCheckRunStatus

Update a check run for a specific commit in a repository.

GithubApi.ListCheckRunAnnotations

Retrieve annotations for a GitHub check run.

GithubApi.TriggerGithubCheckRerequest

Triggers a rerequest for an existing GitHub check run.

GithubApi.CreateGithubCheckSuite

Manually create a check suite on GitHub.

GithubApi.SetCheckSuitePreferences

Set preferences for check suite creation in a repository.

GithubApi.GetGithubCheckSuite

Retrieve a GitHub check suite by ID.

GithubApi.ListGithubCheckRunsForSuite

List check runs for a GitHub check suite using its ID.

GithubApi.RerequestGithubCheckSuite

Rerequest a check suite on GitHub without code changes.

GithubApi.ListCodeScanningAlerts

Retrieve code scanning alerts for a repository.

GithubApi.GetCodeScanningAlert

Retrieve a single code scanning alert from a GitHub repo.

GithubApi.UpdateGithubCodeScanningAlert

Update the status of a GitHub code scanning alert.

GithubApi.ListCodeScanningAlertInstances

Retrieve instances of a specific code scanning alert.

GithubApi.ListRecentCodeScanningAnalyses

Retrieve recent code scanning analyses for a repository.

GithubApi.DeleteCodeScanningAnalysis

Delete a specific code scanning analysis from a GitHub repository.

GithubApi.GetCodeScanningAnalysis

Retrieve detailed code scanning analysis for a GitHub repository.

GithubApi.UploadSarifCodeScanningResults

Upload SARIF data to GitHub for code scanning results.

GithubApi.GetSarifAnalysisInfo

Retrieve SARIF upload status and analysis URL.

GithubApi.ListCodeownersErrors

Identify syntax errors in a repository's CODEOWNERS file.

GithubApi.ListGithubRepoCollaborators

Retrieve collaborators of a GitHub repository.

GithubApi.RemoveRepoCollaborator

Remove a collaborator from a GitHub repository.

GithubApi.CheckGithubRepoCollaborator

Check if a user is a collaborator on a GitHub repository.

GithubApi.AddOrUpdateGithubCollaborator

Add or update a collaborator on a GitHub repository.

GithubApi.CheckRepoCollaboratorPermission

Check a collaborator's permission level in a GitHub repo.

GithubApi.ListRepoCommitComments

Retrieve commit comments for a GitHub repository.

GithubApi.DeleteGithubCommitComment

Deletes a specific commit comment on GitHub.

GithubApi.GetGithubCommitComment

Retrieve details of a specific commit comment on GitHub.

GithubApi.UpdateCommitComment

Update a comment on a GitHub commit.

GithubApi.ListCommitCommentReactions

Retrieve reactions for a GitHub commit comment.

GithubApi.AddReactionToCommitComment

Add a reaction to a GitHub commit comment.

GithubApi.DeleteCommitCommentReaction

Delete a reaction from a commit comment on GitHub.

GithubApi.CheckCommitSignatureVerification

Fetches verification status of a commit's signature on GitHub.

GithubApi.ListBranchesForCommit

Retrieve branches for a specific commit in a GitHub repository.

GithubApi.ListCommitComments

Retrieve comments for a specific commit in a GitHub repo.

GithubApi.CreateGithubCommitComment

Create a comment on a specific GitHub commit.

GithubApi.ListPullRequestsForCommit

Retrieve pull requests linked to a specific commit.

GithubApi.GetCommitDetails

Retrieve details of a single commit reference.

GithubApi.ListCheckRunsForCommitRef

Lists check runs for a given commit reference.

GithubApi.ListCheckSuitesForRef

List check suites for a specific commit reference.

GithubApi.GetCombinedCommitStatus

Retrieve the combined status of a commit for a given reference.

GithubApi.GetCommitStatuses

Retrieve commit statuses for a specific ref in a repository.

GithubApi.CompareGithubCommits

Compares two commits in a GitHub repository.

GithubApi.DeleteGithubFile

Delete a file from a GitHub repository.

GithubApi.GetGithubRepoContent

Retrieve file or directory contents from a GitHub repository.

GithubApi.UpdateOrCreateGithubFile

Create or update a file in a GitHub repository.

GithubApi.ListGithubRepoContributors

Retrieve contributors for a specific GitHub repository.

GithubApi.ListDependabotAlertsForRepo

Retrieve Dependabot alerts for a specific repository.

GithubApi.GetDependabotAlert

Retrieve details of a specific Dependabot alert.

GithubApi.UpdateGithubDependabotAlert

Update a GitHub Dependabot alert.

GithubApi.ListGitRepoSecrets

Retrieve a list of secrets in a GitHub repository.

GithubApi.GetGithubRepoPublicKey

Retrieve the public key for encrypting repository secrets.

GithubApi.RemoveGithubRepoSecret

Delete a secret from a GitHub repository.

GithubApi.GetRepoSecretInfo

Retrieve metadata of a repository secret from GitHub.

GithubApi.ManageGithubRepoSecret

Create or update an encrypted GitHub repository secret.

GithubApi.CompareDependencyChanges

Get dependency changes between two commits of a repository.

GithubApi.CreateRepoDependencySnapshot

Create a snapshot of a repository's dependencies.

GithubApi.ListGithubDeployments

Retrieve deployments from a GitHub repository.

GithubApi.CreateGithubDeployment

Create a GitHub deployment for a specified repository ref.

GithubApi.DeleteGithubDeployment

Delete a GitHub repository deployment.

GithubApi.GetGithubDeploymentStatus

Retrieve details of a specific GitHub deployment.

GithubApi.ListGithubDeploymentStatuses

Retrieve deployment statuses for a specified GitHub deployment.

GithubApi.CreateGithubDeploymentStatus

Create deployment statuses for a GitHub deployment.

GithubApi.FetchDeploymentStatusGithub

Retrieve a deployment status from a GitHub repository.

GithubApi.TriggerGithubDispatchEvent

Triggers a GitHub repository dispatch event.

GithubApi.ListRepositoryEnvironments

Retrieve environments for a GitHub repository.

GithubApi.DeleteRepoEnvironment

Deletes a specific environment in a GitHub repository.

GithubApi.GetGithubRepoEnvironmentDetails

Retrieve details about a GitHub repository environment.

GithubApi.GithubManageEnvironment

Create or update a GitHub environment with protection rules.

GithubApi.ListDeploymentBranchPolicies

Lists deployment branch policies for a GitHub environment.

GithubApi.CreateGithubDeploymentBranchPolicy

Creates a deployment branch policy for a GitHub environment.

GithubApi.DeleteDeploymentBranchPolicy

Delete a deployment branch policy for a GitHub environment.

GithubApi.GetDeploymentBranchPolicy

Retrieve deployment branch policy for a specific environment.

GithubApi.UpdateDeploymentBranchPolicy

Update a deployment branch policy for a GitHub environment.

GithubApi.ListGithubRepoEvents

Retrieve GitHub repository events.

GithubApi.ListGithubRepoForks

Fetches the list of forks for a specified GitHub repository.

GithubApi.CreateGithubFork

Create a fork of a GitHub repository for the user.

GithubApi.CreateGithubBlob

Create a new blob in a GitHub repository.

GithubApi.GetGithubBlobContent

Retrieve Base64 encoded content of a GitHub blob.

GithubApi.CreateGitCommit

Create a new Git commit on a GitHub repository.

GithubApi.FetchCommitInfo

Retrieve details and signature verification for a Git commit.

GithubApi.ListGitMatchingRefs

Retrieve Git references matching a specific name pattern.

GithubApi.GetGitReference

Fetch a specific Git reference from a repository.

GithubApi.CreateGitReference

Create a new reference in a GitHub repository.

GithubApi.DeleteGitReference

Deletes a specified Git reference in a repository.

GithubApi.UpdateGitReference

Update a Git reference in a GitHub repository.

GithubApi.CreateGitTag

Create a Git tag object on GitHub.

GithubApi.GetGitTagSignatureVerification

Retrieve verification details of a git tag signature.

GithubApi.CreateGitTree

Create or modify a git tree in a GitHub repository.

GithubApi.GetGitTree

Fetch a git tree by its SHA1 value from a GitHub repo.

GithubApi.ListRepositoryWebhooks

Retrieve webhooks for a specified GitHub repository.

GithubApi.CreateGithubRepoWebhook

Create a webhook for a GitHub repository.

GithubApi.DeleteRepoWebhook

Delete a webhook from a GitHub repository.

GithubApi.GetRepoWebhook

Retrieve the webhook configuration for a specific repository.

GithubApi.UpdateGithubRepoWebhook

Update a webhook for a GitHub repository.

GithubApi.GetRepoWebhookConfig

Get the webhook configuration for a GitHub repository.

GithubApi.UpdateRepoWebhookConfig

Update GitHub repository webhook configuration settings.

GithubApi.ListGithubWebhookDeliveries

Fetch webhook delivery events for a specific GitHub repository.

GithubApi.GetWebhookDelivery

Retrieve a specific webhook delivery from a repository.

GithubApi.RedeliverGithubWebhook

Redelivers a webhook delivery for a GitHub repository.

GithubApi.SendPingEventToWebhook

Triggers a ping event to a GitHub webhook.

GithubApi.TriggerGithubWebhookTest

Trigger a GitHub webhook test with the latest push event.

GithubApi.GetGithubAppRepoInstallation

Fetches GitHub App installation info for a repository.

GithubApi.ListRepoInvitations

List open invitations for a GitHub repository.

GithubApi.DeleteRepoInvitation

Delete a repository invitation on GitHub.

GithubApi.UpdateRepoInvitation

Update a repository invitation on GitHub.

GithubApi.ListGithubIssuesForRepo

Retrieve open issues from a GitHub repository.

GithubApi.CreateGithubIssue

Create a new issue in a GitHub repository.

GithubApi.ListIssueComments

Fetch comments for all issues in a repository.

GithubApi.DeleteGithubIssueComment

Delete a specific comment from a GitHub issue.

GithubApi.GetGithubIssueComment

Retrieve a comment from a GitHub issue.

GithubApi.UpdateGithubIssueComment

Update a comment on a GitHub issue.

GithubApi.ListIssueCommentReactions

Retrieve reactions for a GitHub issue comment.

GithubApi.AddReactionToGithubComment

Add a reaction to a GitHub issue comment.

GithubApi.DeleteGithubIssueCommentReaction

Deletes a reaction from a GitHub issue comment.

GithubApi.ListGithubRepoIssueEvents

Retrieve events for issues in a GitHub repository.

GithubApi.FetchGithubIssueEvent

Retrieve details of a specific GitHub issue event.

GithubApi.GetGithubIssueDetails

Fetch details of a specific issue or pull request on GitHub.

GithubApi.UpdateGithubIssue

Update details of a GitHub issue.

GithubApi.RemoveIssueAssignees

Remove assignees from a GitHub issue.

GithubApi.AssignGithubIssue

Assign users to a GitHub issue.

GithubApi.CheckUserAssignPermission

Check if a user can be assigned to a GitHub issue.

GithubApi.ListGithubIssueComments

Retrieve comments for a specific GitHub issue.

GithubApi.GithubCreateIssueComment

Create a comment on a GitHub issue.

GithubApi.ListGithubIssueEvents

Retrieve events for a specific GitHub issue.

GithubApi.RemoveAllLabelsFromGithubIssue

Remove all labels from a GitHub issue.

GithubApi.ListLabelsOnGithubIssue

Retrieve all labels associated with a GitHub issue.

GithubApi.AddLabelsToGithubIssue

Add labels to a GitHub issue to categorize it.

GithubApi.SetGithubIssueLabels

Set new labels for a GitHub issue.

GithubApi.RemoveIssueLabel

Remove a specified label from a GitHub issue.

GithubApi.UnlockGithubIssue

Unlock a locked GitHub issue conversation.

GithubApi.LockGithubIssue

Lock a GitHub issue or pull request conversation.

GithubApi.ListIssueReactions

Retrieve reactions from a GitHub issue.

GithubApi.AddReactionToGithubIssue

Add a reaction to a GitHub issue.

GithubApi.DeleteGithubIssueReaction

Deletes a reaction from a GitHub issue.

GithubApi.GetIssueTimelineEvents

Retrieve timeline events for a GitHub issue.

GithubApi.ListGithubDeployKeys

Retrieve deploy keys for a specific GitHub repository.

GithubApi.CreateGithubDeployKey

Create a read-only deploy key for a GitHub repository.

GithubApi.DeleteGithubDeployKey

Delete a deploy key from a GitHub repository.

GithubApi.GetGithubDeployKey

Retrieve a deploy key from a GitHub repository.

GithubApi.ListRepositoryLabels

Retrieve labels for a GitHub repository.

GithubApi.CreateGithubLabel

Creates a label in a specified GitHub repository.

GithubApi.DeleteGithubLabel

Delete a label from a GitHub repository.

GithubApi.GetGithubLabel

Retrieve details of a GitHub repository label.

GithubApi.UpdateGithubLabel

Update a label on a GitHub repository.

GithubApi.ListRepoLanguages

List programming languages used in a GitHub repository.

GithubApi.DisableLfsForGithubRepo

Disable Git LFS for a specified GitHub repository.

GithubApi.EnableGitLfs

Enables Git LFS for a specified repository.

GithubApi.GetRepoLicense

Fetch the license file of a GitHub repository.

GithubApi.SyncForkWithUpstream

Sync a forked repository's branch with the upstream repo.

GithubApi.MergeGithubBranch

Merge a branch into a GitHub repository.

GithubApi.ListGithubMilestones

Retrieve milestones from a GitHub repository.

GithubApi.CreateGithubMilestone

Create a milestone in a GitHub repository.

GithubApi.DeleteGithubMilestone

Delete a milestone from a GitHub repository.

GithubApi.GetGithubMilestone

Retrieve details of a GitHub milestone for a repository.

GithubApi.UpdateGithubMilestone

Update a GitHub repository milestone.

GithubApi.ListLabelsForMilestone

Retrieve labels for issues in a specific milestone on GitHub.

GithubApi.GetRepoNotifications

Retrieve notifications for the user in a specific repository.

GithubApi.MarkRepoNotificationsAsRead

Mark all repository notifications as read for the user.

GithubApi.DeleteGithubPagesSite

Delete a GitHub Pages site from a repository.

GithubApi.GetGithubPagesSite

Retrieve details of a GitHub Pages site for a repository.

GithubApi.ConfigureGithubPagesSite

Configures a GitHub Pages site for a repository.

GithubApi.UpdateGithubPagesInfo

Update information for a GitHub Pages site.

GithubApi.ListGithubPagesBuilds

Retrieve GitHub Pages build statuses for a repository.

GithubApi.RequestGithubPagesBuild

Request a build for your GitHub Pages site.

GithubApi.GetLatestGithubPagesBuild

Retrieve the latest GitHub Pages build information.

GithubApi.GetGithubPagesBuild

Retrieve details of a GitHub Pages build for a repository.

GithubApi.CreateGithubPagesDeployment

Create a GitHub Pages deployment for a repository.

GithubApi.ListRepoPreReceiveHooks

List pre-receive hooks for a GitHub repository.

GithubApi.RemoveRepoHookEnforcement

Remove overridden pre-receive hook enforcement for a repository.

GithubApi.GetPreReceiveHookForRepo

Retrieve a pre-receive hook for a specific repository.

GithubApi.UpdateHookEnforcementForRepo

Update pre-receive hook enforcement for a GitHub repository.

GithubApi.ListRepositoryProjects

Retrieve projects from a specific GitHub repository.

GithubApi.CreateGithubProjectBoard

Create a project board for a GitHub repository.

GithubApi.ListPullRequests

Retrieve pull requests from a GitHub repository.

GithubApi.CreateGithubPullRequest

Create a draft pull request on GitHub repositories.

GithubApi.ListReviewCommentsForRepo

Retrieve review comments for all pull requests in a repository.

GithubApi.DeleteGithubReviewComment

Delete a review comment on a GitHub pull request.

GithubApi.GetGithubReviewCommentDetails

Get details for a specific GitHub review comment.

GithubApi.EditGithubReviewComment

Edit a review comment on a GitHub pull request.

GithubApi.ListPullRequestCommentReactions

Retrieve reactions for a pull request review comment.

GithubApi.AddReactionToPrComment

Adds a reaction to a pull request review comment on GitHub.

GithubApi.DeletePullRequestCommentReaction

Delete a reaction from a pull request comment.

GithubApi.GetPullRequestDetails

Retrieve details of a specific GitHub pull request.

GithubApi.UpdatePullRequest

Update an existing pull request on GitHub.

GithubApi.ListPullRequestReviewComments

Retrieve all review comments for a pull request.

GithubApi.CreatePullRequestReviewComment

Create a review comment on a GitHub pull request.

GithubApi.CreateReplyToReviewComment

Create a reply to a top-level review comment on a pull request.

GithubApi.ListPullRequestCommits

Retrieve up to 250 commits for a specific pull request.

GithubApi.ListGithubPullRequestFiles

Retrieve files changed in a GitHub pull request.

GithubApi.CheckPrMergeStatus

Check if a pull request has been merged.

GithubApi.MergeGithubPullRequest

Merge a pull request on GitHub.

GithubApi.RemovePullRequestReviewers

Remove requested reviewers from a GitHub pull request.

GithubApi.GetRequestedReviewersForPr

Retrieve users or teams requested for a pull request review.

GithubApi.RequestGithubPullRequestReviewers

Request reviewers for a GitHub pull request.

GithubApi.ListGithubPullRequestReviews

Retrieve reviews for a specific GitHub pull request.

GithubApi.CreateGithubPullRequestReview

Create a review for a GitHub pull request.

GithubApi.DeleteGithubPullRequestPendingReview

Delete a pending review for a GitHub pull request.

GithubApi.GetGithubReview

Retrieve details of a specific pull request review from GitHub.

GithubApi.UpdatePullRequestReview

Update the review summary comment on a pull request.

GithubApi.GetReviewComments

Retrieve comments for a specific pull request review.

GithubApi.DismissPullRequestReview

Dismiss a pull request review on GitHub.

GithubApi.SubmitPullRequestReview

Submit a review for a pull request on GitHub.

GithubApi.UpdatePullRequestBranch

Update a pull request branch with latest upstream changes.

GithubApi.GetRepositoryReadme

Retrieve the preferred README for a GitHub repository.

GithubApi.FetchRepoReadme

Retrieve the README from a specific repository directory.

GithubApi.GetGithubReleases

Retrieve a list of releases for a GitHub repository.

GithubApi.CreateGithubRelease

Creates a new release in a specified GitHub repository.

GithubApi.DeleteReleaseAsset

Deletes a specific release asset on GitHub.

GithubApi.DownloadGithubReleaseAsset

Download binary content of a GitHub release asset.

GithubApi.EditGithubReleaseAsset

Edit a GitHub release asset with push access.

GithubApi.GenerateGithubReleaseNotes

Generate release notes for a GitHub repository.

GithubApi.GetLatestGithubRelease

Retrieve the latest full release from a GitHub repository.

GithubApi.GetGithubReleaseByTag

Retrieve GitHub release details by tag.

GithubApi.DeleteGithubRelease

Delete a GitHub release with push access permissions.

GithubApi.GetGithubReleaseDetails

Retrieve details of a specific GitHub release.

GithubApi.UpdateGithubRelease

Edit a GitHub release with push access.

GithubApi.ListGithubReleaseAssets

Retrieve a list of assets for a GitHub release.

GithubApi.ListGithubReleaseReactions

Retrieve reactions for a GitHub release.

GithubApi.AddGithubReleaseReaction

Add a reaction to a GitHub release.

GithubApi.DeleteReleaseReaction

Delete a reaction from a GitHub release.

GithubApi.ListRepoCacheStatus

Lists the status of each repository cache replica.

GithubApi.ListGithubRepoSecretAlerts

Retrieve secret scanning alerts for a GitHub repository.

GithubApi.GetGithubSecretScanningAlert

Retrieve a specific secret scanning alert from a GitHub repository.

GithubApi.UpdateSecretScanningAlertStatus

Update the status of a secret scanning alert on GitHub.

GithubApi.ListSecretScanningAlertLocations

Retrieve locations for a secret scanning alert in a repository.

GithubApi.ListRepoStargazers

Retrieve users who starred a specific GitHub repository.

GithubApi.GetRepoCodeFrequency

Get weekly code frequency stats for a GitHub repository.

GithubApi.GetCommitActivity

Fetch yearly commit activity grouped by week.

GithubApi.GetGithubContributorStats

Retrieve GitHub repository contributor statistics.

GithubApi.GetRepoCommitParticipation

Retrieve weekly commit participation stats for a GitHub repo.

GithubApi.GetCommitActivityByHour

Retrieve commit activity per hour for a GitHub repository.

GithubApi.CreateGithubCommitStatus

Create a commit status for a specific SHA on GitHub.

GithubApi.ListWatchersForRepo

Retrieve the list of users watching a GitHub repository.

GithubApi.UnsubscribeFromRepo

Stop receiving notifications for a repository.

GithubApi.GetRepoSubscription

Retrieve subscription status for a GitHub repository.

GithubApi.SetRepoSubscription

Manage your GitHub repository subscription settings.

GithubApi.ListGithubRepoTags

Retrieve tags for a specified GitHub repository.

GithubApi.GetRepositoryTagProtectionStates

Fetch the tag protection states of a GitHub repository.

GithubApi.CreateRepositoryTagProtection

Create tag protection for a GitHub repository.

GithubApi.DeleteRepositoryTagProtection

Deletes a tag protection from a GitHub repository.

GithubApi.DownloadGithubRepoTarball

Retrieve a URL to download a GitHub repository tarball.

GithubApi.ListRepositoryTeams

Retrieve a list of teams for a specified GitHub repository.

GithubApi.GetRepoTopics

Retrieve all topics for a specific GitHub repository.

GithubApi.UpdateGithubRepoTopics

Replace topics for a specific GitHub repository.

GithubApi.TransferGithubRepository

Initiate the transfer of a GitHub repository to a new owner.

GithubApi.DownloadGithubRepoZip

Retrieve a URL to download a GitHub repository as a zip file.

GithubApi.CreateRepoFromTemplate

Create a new repository from a template.

GithubApi.ListPublicGithubRepositories

Retrieve all public GitHub repositories.

GithubApi.ListGithubEnvironmentSecrets

Retrieve secrets for a GitHub environment.

GithubApi.GetGithubEnvironmentPublicKey

Fetch the public key for a GitHub environment.

GithubApi.DeleteGithubEnvironmentSecret

Delete a GitHub environment secret by name.

GithubApi.GetEnvironmentSecretInfo

Retrieve details of an environment secret on GitHub.

GithubApi.ManageGithubEnvironmentSecret

Create or update an encrypted environment secret on GitHub.

GithubApi.ListGithubEnvironmentVariables

Retrieve environment variables from a GitHub repository's environment.

GithubApi.CreateGithubEnvVariable

Create an environment variable for GitHub Actions workflows.

GithubApi.DeleteGithubEnvVariable

Deletes an environment variable in a GitHub repository environment.

GithubApi.GetGithubEnvVariable

Retrieve specific environment variable details from GitHub.

GithubApi.UpdateGithubActionsEnvVar

Update an environment variable in GitHub Actions workflow.

GithubApi.ListProvisionedGroupsForEnterprise

Retrieve provisioned SCIM groups for an enterprise.

GithubApi.CreateEnterpriseScimGroup

Create a SCIM group for a GitHub enterprise account.

GithubApi.DeleteScimGroupFromEnterprise

Delete a SCIM group from an enterprise.

GithubApi.GetScimGroupInfo

Retrieve provisioning information for a SCIM group in an enterprise.

GithubApi.UpdateEnterpriseGroupAttributes

Update attributes for a provisioned enterprise group.

GithubApi.UpdateEnterpriseGroupInfo

Replace all information for a provisioned enterprise group.

GithubApi.ListScimEnterpriseMembers

Lists provisioned SCIM enterprise members for GitHub enterprises.

GithubApi.ProvisionEnterpriseUser

Create a new SCIM enterprise user identity.

GithubApi.DeleteUserFromEnterprise

Permanently delete a SCIM user from an enterprise account.

GithubApi.GetScimUserInfo

Fetch SCIM user provisioning information.

GithubApi.UpdateEnterpriseUserAttribute

Update individual attributes for a provisioned enterprise user.

GithubApi.UpdateProvisionedEnterpriseUserInfo

Update all information for a provisioned enterprise user.

GithubApi.SearchCodeInGithub

Search for code in GitHub repositories.

GithubApi.SearchGithubCommits

Search for GitHub commits using various criteria.

GithubApi.SearchGithubIssuesAndPrs

Search GitHub issues and pull requests by state and keyword.

GithubApi.FindGithubLabels

Search for labels in a GitHub repository by keywords.

GithubApi.SearchGithubRepositories

Search GitHub repositories using various criteria.

GithubApi.SearchGithubTopics

Search and retrieve topics from GitHub using specific criteria.

GithubApi.GithubSearchUsers

Search for GitHub users based on specific criteria.

GithubApi.CheckConfigStatus

Check the status of the most recent configuration process.

GithubApi.StartGithubConfiguration

Initiate the GitHub configuration process.

GithubApi.CheckMaintenanceStatus

Retrieve the maintenance status of your GitHub installation.

GithubApi.ToggleMaintenanceMode

Toggle GitHub Enterprise maintenance mode.

GithubApi.GetGithubEnterpriseSettings

Retrieve the current settings of your GitHub Enterprise instance.

GithubApi.SetGithubEnterpriseSettings

Apply configuration settings to GitHub Enterprise instance.

GithubApi.RemoveAuthorizedSshKey

Remove an authorized SSH key from GitHub Enterprise.

GithubApi.GetAllAuthorizedSshKeys

Retrieve all authorized SSH keys for enterprise admin.

GithubApi.AddGithubAuthorizedSshKey

Add an authorized SSH key to GitHub Enterprise.

GithubApi.GetGithubUserProfile

Retrieve authenticated user's GitHub profile information.

GithubApi.UpdateGithubProfile

Update your authenticated GitHub user profile.

GithubApi.DeleteUserEmail

Delete an email for the authenticated GitHub user.

GithubApi.ListUserEmailAddresses

Retrieve all email addresses of the authenticated user.

GithubApi.AddEmailToGithubAccount

Add a new email to the authenticated GitHub user's account.

GithubApi.ListFollowers

Retrieve followers of the authenticated user on GitHub.

GithubApi.ListFollowedUsers

Lists the people the authenticated user follows.

GithubApi.UnfollowGithubUser

Unfollow a user on GitHub.

GithubApi.CheckIfUserIsFollowed

Check if a user is followed by the authenticated GitHub user.

GithubApi.FollowGithubUser

Follow a specified user on GitHub.

GithubApi.ListUserGpgKeys

Retrieve authenticated user's GPG keys from GitHub.

GithubApi.AddGpgKeyToGithub

Add a GPG key to your authenticated GitHub account.

GithubApi.RemoveGpgKey

Remove a GPG key from your GitHub account.

GithubApi.GetUserGpgKeyDetails

Retrieve extended details for a user's GPG key.

GithubApi.GetGithubAppInstallations

Retrieve GitHub App installations for the authenticated user.

GithubApi.ListUserAccessibleRepos

List repositories accessible to the authenticated user.

GithubApi.RemoveRepoFromInstallation

Remove a repository from a GitHub app installation.

GithubApi.AddRepositoryToGithubInstallation

Add a repository to a GitHub installation for the authenticated user.

GithubApi.ListUserIssues

Fetch issues and pull requests assigned to you.

GithubApi.ListPublicSshKeys

Retrieve public SSH keys for the authenticated GitHub user.

GithubApi.AddSshKeyToGithubAccount

Add a public SSH key to your GitHub account.

GithubApi.RemoveGithubSshKey

Removes a public SSH key from your GitHub account.

GithubApi.GetPublicSshKeyDetails

Retrieve details for a specified public SSH key.

GithubApi.ListOrganizationMemberships

Retrieve organization memberships for the authenticated user.

GithubApi.GetOrgMembershipStatus

Retrieve the user's organization membership status.

GithubApi.UpdateGithubOrgMembership

Update your GitHub organization membership settings.

GithubApi.ListUserMigrations

Lists all migrations a user has started.

GithubApi.InitiateUserMigration

Begin the creation of a user migration archive.

GithubApi.DownloadGithubMigrationArchive

Fetch the URL to download a GitHub migration archive.

GithubApi.ListUserMigrationRepos

Retrieve repositories for a user's migration.

GithubApi.ListUserOrganizations

List organizations for the authenticated GitHub user.

GithubApi.CreateGithubUserProjectBoard

Create a project board for a GitHub user.

GithubApi.ListGithubPublicEmails

Retrieve publicly visible GitHub emails for the authenticated user.

GithubApi.ListUserRepositories

Retrieve repositories accessible to the authenticated user.

GithubApi.CreateGithubRepoForUser

Create a new GitHub repository for the authenticated user.

GithubApi.FetchOpenRepoInvitations

List open repository invitations for the authenticated user.

GithubApi.DeclineRepoInvitation

Decline an invitation to join a GitHub repository.

GithubApi.AcceptGithubRepoInvitation

Accept a GitHub repository invitation.

GithubApi.ListSshSigningKeys

Retrieve SSH signing keys for the authenticated GitHub user.

GithubApi.CreateSshSigningKeyGithub

Create an SSH signing key for your GitHub account.

GithubApi.DeleteGithubSshSigningKey

Delete an SSH signing key from your GitHub account.

GithubApi.GetSshSigningKeyDetails

Retrieve extended details for an SSH signing key.

GithubApi.ListStarredRepositories

Retrieve repositories starred by the authenticated user.

GithubApi.UnstarGithubRepo

Unstar a GitHub repository for the authenticated user.

GithubApi.CheckRepoStarredByUser

Check if a repository is starred by the authenticated user.

GithubApi.StarGithubRepository

Star a GitHub repository for the authenticated user.

GithubApi.ListWatchedRepositories

Retrieve repositories watched by the authenticated user.

GithubApi.ListUserGithubTeams

Retrieve teams the authenticated GitHub user belongs to.

GithubApi.ListGithubUsers

Retrieve a list of all GitHub users by signup order.

GithubApi.GetGithubUserInfo

Fetch public details of a GitHub user using their username.

GithubApi.ListUserGithubEvents

Retrieve a user's GitHub events, including private if authenticated.

GithubApi.GetUserOrgEvents

Retrieve organization events for an authenticated GitHub user.

GithubApi.ListGithubUserPublicEvents

Retrieve a GitHub user's public events.

GithubApi.ListUserFollowers

Retrieve a list of followers for a specific GitHub user.

GithubApi.UserFollowingList

Retrieve users followed by a specified GitHub user.

GithubApi.CheckUserFollowingStatus

Verify if a user follows another GitHub user.

GithubApi.GetUserGists

Retrieve a user's public gists from GitHub.

GithubApi.ListGpgKeysForUser

Retrieve public GPG keys for a GitHub user.

GithubApi.GetGithubUserHovercardInfo

Retrieve detailed hovercard info for a GitHub user.

GithubApi.GetGithubUserInstallation

Retrieve a user's GitHub App installation information.

GithubApi.GetPublicSshKeys

Retrieve verified public SSH keys for a specified GitHub user.

GithubApi.ListPublicOrgsForUser

Retrieve public organization memberships for a GitHub user.

GithubApi.ListUserProjects

Retrieve a list of GitHub projects for a specific user.

GithubApi.GetUserReceivedGithubEvents

Retrieve events received by a GitHub user.

GithubApi.ListUserReceivedPublicEvents

Retrieve public events received by a GitHub user.

GithubApi.GetUserRepos

Retrieve public repositories of a GitHub user.

GithubApi.DemoteGithubSiteAdministrator

Demote a GitHub site administrator.

GithubApi.PromoteUserToSiteAdmin

Promote a user to site administrator on GitHub Enterprise.

GithubApi.ListSshSigningKeysForUser

Retrieve SSH signing keys for a specific GitHub user.

GithubApi.ListStarredRepos

Retrieve repositories starred by a user on GitHub.

GithubApi.ListWatchedRepos

Retrieve a list of repositories a user watches on GitHub.

GithubApi.UnsuspendGithubUser

Unsuspend a user on GitHub Enterprise.

GithubApi.SuspendGithubUser

Suspend a user on a GitHub Enterprise instance.

GithubApi.GetRandomGithubZen

Fetch a random Zen of GitHub sentence.

If you need to perform an action that’s not listed here, you can [get in touch with us](mailto:contact@arcade.dev) to request a new tool, or [create your own tools](/guides/create-tools/tool-basics/build-mcp-server.md).

## GithubApi.GetGithubRootLinks



Retrieve Hypermedia links to GitHub’s REST API resources.

**Parameters**

This tool does not take any parameters.

## GithubApi.ListGlobalWebhooks



Retrieve a list of global webhooks from GitHub Enterprise.

**Parameters**

-   **page\_number** (`integer`, optional) Specify the page number of the results to fetch. This is used to navigate through paginated results.
-   **results\_per\_page** (`integer`, optional) The number of results to include in each page, up to a maximum of 100.

## GithubApi.CreateGlobalWebhook



Create a global webhook in GitHub Enterprise Admin.

**Parameters**

-   **payload\_delivery\_url** (`string`, required) The destination URL where the webhook payloads will be delivered. Ensure this URL is accessible and properly configured to handle incoming requests.
-   **webhook\_type** (`string`, required) Specifies the type of webhook. Must be set to “web”.
-   **hmac\_key\_for\_signature** (`string`, optional) The key for generating the HMAC hex digest in the X-Hub-Signature header. Optional.
-   **payload\_content\_type** (`string`, optional) Specifies the media type for payload serialization. Options: ‘json’, ‘form’. Default is ‘form’.
-   **send\_notifications** (`boolean`, optional) Set to `true` to send notifications when the webhook is triggered.
-   **ssl\_verification** (`string`, optional) Set ‘0’ to verify SSL certificate of the host for the URL; ‘1’ to skip verification. Default is ‘0’. Avoid setting to ‘1’ to prevent security risks.
-   **trigger\_events** (`array[string]`, optional) List of events that trigger the webhook. Default events are `user` and `organization`.

## GithubApi.DeleteGlobalWebhook



Delete a global webhook in GitHub Enterprise.

**Parameters**

-   **webhook\_id** (`integer`, required) The unique identifier of the global webhook to be deleted.

## GithubApi.GetGithubGlobalWebhook



Retrieve details of a specific global webhook in GitHub Enterprise.

**Parameters**

-   **global\_webhook\_id** (`integer`, required) The unique identifier for the global webhook in GitHub Enterprise. Provide this ID to retrieve specific webhook details.

## GithubApi.UpdateGlobalWebhook



Update a GitHub enterprise global webhook.

**Parameters**

-   **webhook\_identifier** (`integer`, required) The unique integer identifier for the webhook that needs to be updated.
-   **hmac\_secret\_key** (`string`, optional) Secret key for generating HMAC hex digest value in `X-Hub-Signature` header.
-   **payload\_delivery\_url** (`string`, optional) The URL where webhook payloads will be delivered for processing.
-   **payload\_media\_type** (`string`, optional) The media type for payload serialization. Supported values: `json`, `form`. Default is `form`.
-   **send\_notifications\_on\_trigger** (`boolean`, optional) Set to `true` to send notifications when the webhook is triggered.
-   **verify\_ssl\_certificate** (`string`, optional) Determines SSL certificate verification for payload delivery. Use ‘0’ for verification and ‘1’ to skip (not recommended). Default is ‘0’.
-   **webhook\_trigger\_events** (`array[string]`, optional) The events that trigger the global webhook. Can include ‘user’, ‘organization’. Defaults to both if not specified.

## GithubApi.TriggerGithubWebhookPing



Trigger a ping event to a GitHub webhook.

**Parameters**

-   **webhook\_hook\_id** (`integer`, required) The unique identifier of the GitHub webhook to ping.

## GithubApi.ListGithubPublicKeys



Retrieve GitHub Enterprise Admin public keys.

**Parameters**

-   **filter\_keys\_accessed\_since** (`string`, optional) Specify a timestamp to only list public keys accessed after this time. Use ISO 8601 format.
-   **page\_number\_to\_fetch** (`integer`, optional) The specific page number of results to retrieve.
-   **results\_per\_page** (`integer`, optional) The number of results to display per page. Maximum allowed is 100. Use to limit the amount of data retrieved per call.
-   **sort\_direction** (`string`, optional) The direction to sort the results: ‘asc’ for ascending or ‘desc’ for descending.
-   **sort\_order** (`string`, optional) Criteria for sorting results. Options: ‘created’, ‘updated’, ‘accessed’.

## GithubApi.DeleteGithubPublicKey



Delete a public key from GitHub Enterprise.

**Parameters**

-   **public\_key\_identifier** (`string`, required) The unique identifier of the public key to delete from GitHub Enterprise.

## GithubApi.UpdateLdapMappingForTeam



Update the LDAP mapping for a GitHub team.

**Parameters**

-   **ldap\_distinguished\_name** (`string`, required) The distinguished name (DN) of the LDAP entry to map to a team. This should be a string following the LDAP DN format.
-   **team\_id** (`integer`, required) The unique identifier of the GitHub team to update LDAP mapping for.

## GithubApi.QueueLdapSyncForTeam



Queue an LDAP sync job for a specified team.

**Parameters**

-   **team\_id** (`integer`, required) The unique identifier of the GitHub team for which the LDAP sync job should be queued.

## GithubApi.UpdateLdapMappingForUser



Update LDAP mapping for a user in GitHub Enterprise Admin.

**Parameters**

-   **github\_user\_handle** (`string`, required) The handle for the GitHub user account to update the LDAP mapping for.
-   **ldap\_distinguished\_name** (`string`, required) The distinguished name (DN) of the LDAP entry to map to a team. It should be in a string format as specified [here](https://www.ldap.com/ldap-dns-and-rdns)
     .

## GithubApi.SyncGithubLdapUserMapping



Queue a sync job for LDAP mapping of a GitHub user.

**Parameters**

-   **github\_user\_handle** (`string`, required) The GitHub user account handle to queue LDAP sync for.

## GithubApi.CreateGithubOrganization



Create a new organization on GitHub.

**Parameters**

-   **admin\_user\_login** (`string`, required) The login username of the user designated to manage the new GitHub organization.
-   **organization\_username** (`string`, required) The username for the organization in GitHub.
-   **organization\_display\_name** (`string`, optional) The display name for the organization to be created on GitHub.

## GithubApi.UpdateGithubOrgName



Updates the organization name on GitHub Enterprise.

**Parameters**

-   **current\_organization\_name** (`string`, required) The current name of the organization to be updated. It is not case sensitive.
-   **new\_organization\_name** (`string`, required) The new name for the organization on GitHub Enterprise. This will be the name you want to update to.

## GithubApi.ListPreReceiveEnvironments



Retrieve a list of pre-receive environments for GitHub Enterprise.

**Parameters**

-   **page\_number** (`integer`, optional) Specifies the page number of results to fetch. Use this to navigate through paginated data.
-   **results\_per\_page** (`integer`, optional) The number of results to display per page, with a maximum of 100.
-   **sort** (`string`, optional) Criteria to sort the results: ‘created’, ‘updated’, or ‘name’.
-   **sort\_direction** (`string`, optional) Specifies the order to sort results: ‘asc’ for ascending or ‘desc’ for descending.

## GithubApi.CreatePreReceiveEnvironment



Create a new pre-receive environment on GitHub Enterprise.

**Parameters**

-   **pre\_receive\_environment\_name** (`string`, required) The name of the new pre-receive environment to be created.
-   **tarball\_download\_url** (`string`, required) URL to download the tarball for the pre-receive environment setup.

## GithubApi.DeletePreReceiveEnvironment



Delete a specified pre-receive environment in GitHub Enterprise.

**Parameters**

-   **pre\_receive\_environment\_identifier** (`integer`, required) The unique integer identifier of the pre-receive environment to be deleted.

## GithubApi.GetGithubPreReceiveEnvironment



Retrieve a GitHub pre-receive environment by ID.

**Parameters**

-   **pre\_receive\_environment\_id** (`integer`, required) The unique identifier for the GitHub pre-receive environment.

## GithubApi.UpdateGithubPreReceiveEnvironment



Update a pre-receive environment in GitHub Enterprise.

**Parameters**

-   **pre\_receive\_environment\_id** (`integer`, required) The unique identifier of the pre-receive environment to update.
-   **new\_environment\_name** (`string`, optional) The new name for the pre-receive environment.
-   **tarball\_download\_url** (`string`, optional) The URL to download the tarball for the environment update.

## GithubApi.TriggerEnvironmentDownload



Start a new download of the environment tarball.

**Parameters**

-   **pre\_receive\_environment\_id** (`integer`, required) The unique identifier for the pre-receive environment to trigger the download for.

## GithubApi.GetPreReceiveEnvDownloadStatus



Retrieve the latest download status for a pre-receive environment.

**Parameters**

-   **pre\_receive\_environment\_identifier** (`integer`, required) The unique identifier for the pre-receive environment to retrieve its download status.

## GithubApi.ListPreReceiveHooks



Retrieve the list of pre-receive hooks in GitHub Enterprise.

**Parameters**

-   **results\_page\_number** (`integer`, optional) The specific page number of results to retrieve, used for pagination.
-   **results\_per\_page** (`integer`, optional) Specify the number of results per page, with a maximum of 100.
-   **sort\_direction** (`string`, optional) The direction to sort the results by. Options are ‘asc’ for ascending or ‘desc’ for descending.
-   **sort\_results\_by** (`string`, optional) Specify the property to sort the results by. Options are ‘created’, ‘updated’, or ‘name’.

## GithubApi.CreatePreReceiveHook



Create a pre-receive hook for GitHub enterprise administration.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## GithubApi.DeletePreReceiveHook



Delete a pre-receive hook from GitHub Enterprise Admin.

**Parameters**

-   **pre\_receive\_hook\_identifier** (`integer`, required) The unique identifier for the pre-receive hook to delete.

## GithubApi.GetPreReceiveHook



Retrieve details of a specific pre-receive hook in GitHub Enterprise Admin.

**Parameters**

-   **pre\_receive\_hook\_id** (`integer`, required) The unique identifier of the pre-receive hook to retrieve details for.

## GithubApi.UpdateGithubPreReceiveHook



Update a GitHub enterprise pre-receive hook.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **pre\_receive\_hook\_id** (`integer`, optional) The unique identifier of the pre-receive hook in the GitHub enterprise environment. This is required for updating hook details. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## GithubApi.ListPersonalAccessTokens



Retrieve personal access tokens for all users including admins.

**Parameters**

-   **results\_page\_number** (`integer`, optional) The page number of the results to fetch, used for pagination.
-   **results\_per\_page** (`integer`, optional) Number of results to return per page. Maximum value is 100.

## GithubApi.DeleteGithubPersonalAccessToken



Delete a GitHub personal access token.

**Parameters**

-   **github\_token\_id** (`integer`, required) The unique identifier of the GitHub personal access token to delete.

## GithubApi.CreateEnterpriseUser



Creates a new user in GitHub enterprise with external authentication.

**Parameters**

-   **user\_username** (`string`, required) The user’s username for the GitHub enterprise account. It will be normalized to contain only alphanumeric characters or single hyphens.
-   **user\_email** (`string`, optional) The email address of the user. Required for built-in authentication but optional for CAS, LDAP, or SAML auth methods.

## GithubApi.DeleteGithubEnterpriseUser



Delete a GitHub Enterprise user and their data.

**Parameters**

-   **github\_user\_handle** (`string`, required) The handle for the GitHub user account to be deleted. Ensure it’s the correct user, as this action is irreversible.

## GithubApi.UpdateGithubUsername



Update a GitHub user’s username.

**Parameters**

-   **current\_github\_username** (`string`, required) The current handle of the GitHub user account to be updated.
-   **new\_github\_username** (`string`, required) The new username for the GitHub user account.

## GithubApi.DeleteImpersonationOauthToken



Deletes an impersonation OAuth token for a user in GitHub Enterprise Admin.

**Parameters**

-   **github\_user\_handle** (`string`, required) The GitHub user account handle for which the impersonation OAuth token will be deleted.

## GithubApi.CreateImpersonationOauthToken



Create an impersonation OAuth token for a GitHub user.

**Parameters**

-   **github\_user\_handle** (`string`, required) The GitHub user account handle for which to create the impersonation OAuth token.
-   **oauth\_scopes\_list** (`array[string]`, required) A list of scopes defining the permissions for the OAuth token. Each scope is a string representing a specific set of access rights. Refer to [scopes documentation](https://docs.github.com/enterprise-server@3.8/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/)
      for valid options.

## GithubApi.GetGithubAppInfo



Retrieve details about the authenticated GitHub App.

**Parameters**

This tool does not take any parameters.

## GithubApi.CompleteGithubAppHandshake



Complete the GitHub App Manifest handshake to retrieve app details.

**Parameters**

-   **temporary\_code\_for\_github\_app** (`string`, required) The temporary code provided during the GitHub App Manifest flow to retrieve the app’s id, pem, and webhook\_secret.

## GithubApi.GetGithubAppWebhookConfig



Fetches the webhook configuration for a GitHub App.

**Parameters**

This tool does not take any parameters.

## GithubApi.UpdateGithubAppWebhookConfig



Update the webhook configuration for a GitHub App.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## GithubApi.ListWebhookDeliveries



Retrieve webhook deliveries for a GitHub App.

**Parameters**

-   **only\_redeliveries** (`boolean`, optional) Set to true to include only redeliveries in the results.
-   **pagination\_cursor** (`string`, optional) Starting point for pagination to fetch a page of deliveries. Use the `link` header to find next and previous page cursors.
-   **results\_per\_page** (`integer`, optional) The number of webhook deliveries to return per page, up to a maximum of 100.

## GithubApi.GetGithubAppWebhookDelivery



Retrieve delivery details for a GitHub App webhook.

**Parameters**

-   **webhook\_delivery\_id** (`integer`, required) The ID of the webhook delivery to retrieve. Must be an integer.

## GithubApi.RedeliverGithubWebhookDelivery



Redeliver a GitHub App webhook delivery.

**Parameters**

-   **webhook\_delivery\_id** (`integer`, required) The unique integer ID of the webhook delivery to be redelivered.

## GithubApi.ListGithubAppInstallations



Retrieve installations of a GitHub app using a JWT.

**Parameters**

-   **include\_outdated** (`string`, optional) Include or exclude outdated installations in the results. Pass ‘true’ to include them.
-   **notifications\_updated\_since** (`string`, optional) Specify a timestamp in ISO 8601 format to filter installations updated after this time. Format: `YYYY-MM-DDTHH:MM:SSZ`.
-   **results\_page\_number** (`integer`, optional) Specify the page number of the results you want to retrieve, allowing pagination through the results. Useful for fetching specific subsets of data.
-   **results\_per\_page** (`integer`, optional) Specify the number of results to return per page. Maximum is 100.

## GithubApi.UninstallGithubApp



Uninstall a GitHub App from an account.

**Parameters**

-   **installation\_id** (`integer`, required) The unique identifier of the GitHub App installation to uninstall.

## GithubApi.GetGithubAppInstallationInfo



Fetch information of a GitHub App installation by ID.

**Parameters**

-   **installation\_id** (`integer`, required) The unique identifier of the GitHub App installation to fetch information for.

## GithubApi.CreateGithubAppInstallationToken



Create an installation access token for a GitHub App.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **installation\_id** (`integer`, optional) The unique identifier for the GitHub App installation. Required to create the access token. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## GithubApi.RemoveGithubAppSuspension



Unsuspend a GitHub App installation.

**Parameters**

-   **installation\_id** (`integer`, required) The unique identifier for the GitHub App installation to be unsuspended.

## GithubApi.SuspendGithubAppInstallation



Suspend a GitHub App’s installation for specified accounts.

**Parameters**

-   **installation\_id** (`integer`, required) The unique identifier of the GitHub App installation to suspend.

## GithubApi.RevokeGithubOauthGrant



Revoke OAuth grant for a GitHub application and user.

**Parameters**

-   **github\_app\_client\_id** (`string`, required) The unique client ID for the GitHub app, used for Basic Authentication.
-   **oauth\_access\_token** (`string`, required) The OAuth access token for authenticating the GitHub API and revoking the grant.

## GithubApi.RevokeGithubOauthToken



Revoke a GitHub OAuth application’s token.

**Parameters**

-   **github\_app\_client\_id** (`string`, required) The client ID of the GitHub OAuth application to identify the app during token revocation.
-   **oauth\_access\_token** (`string`, required) The OAuth access token used to authenticate to the GitHub API. Required for token revocation.

## GithubApi.ResetGithubOauthToken



Reset an OAuth token for a GitHub application.

**Parameters**

-   **github\_app\_client\_id** (`string`, required) The client ID of the GitHub application required for resetting the OAuth token.
-   **oauth\_access\_token** (`string`, required) The access token of the OAuth application to be reset.

## GithubApi.CheckGithubTokenValidity



Check GitHub OAuth token validity with reduced rate limits.

**Parameters**

-   **github\_app\_client\_id** (`string`, required) The unique client ID of the GitHub application for OAuth authentication.
-   **oauth\_access\_token** (`string`, required) The OAuth access token to verify its validity with the GitHub API.

## GithubApi.CreateGithubScopedToken



Create a GitHub repository and permission scoped token.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **github\_client\_id** (`string`, optional) The client ID of your GitHub app used for authentication. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## GithubApi.GetGithubAppDetailsBySlug



Retrieve GitHub App details using its slug.

**Parameters**

-   **github\_app\_slug** (`string`, required) The URL-friendly name of the GitHub App to retrieve details for. Found on the GitHub App settings page.

## GithubApi.GetAllGithubCodesOfConduct



Retrieve all GitHub codes of conduct.

**Parameters**

This tool does not take any parameters.

## GithubApi.GetCodeOfConduct



Retrieve a specific code of conduct from GitHub.

**Parameters**

-   **conduct\_code\_key** (`string`, required) The unique identifier for the specific code of conduct you want to retrieve.

## GithubApi.ListGithubEmojis



Lists all available GitHub emojis.

**Parameters**

This tool does not take any parameters.

## GithubApi.RemoveEnterpriseAnnouncement



Removes the global announcement banner in your enterprise.

**Parameters**

This tool does not take any parameters.

## GithubApi.GetEnterpriseAnnouncementBanner



Retrieve the global announcement banner for your enterprise.

**Parameters**

This tool does not take any parameters.

## GithubApi.SetGithubAnnouncement



Set the announcement banner message and expiration in GitHub Enterprise.

**Parameters**

-   **announcement\_text\_gfm** (`string`, required) The announcement text in GitHub Flavored Markdown. Use for global messages in GitHub Enterprise.
-   **announcement\_expiration\_time** (`string`, optional) Timestamp for when the announcement expires in ISO 8601 format. Use `null` or an empty string for no expiration.

## GithubApi.GetLicenseInformation



Retrieve GitHub Enterprise license information.

**Parameters**

This tool does not take any parameters.

## GithubApi.GetGithubEnterpriseStats



Retrieve all statistics for GitHub Enterprise.

**Parameters**

This tool does not take any parameters.

## GithubApi.GetCommentStatistics



Retrieve comment statistics from GitHub Enterprise.

**Parameters**

This tool does not take any parameters.

## GithubApi.GetGitGistStatistics



Retrieve gist statistics from GitHub Enterprise.

**Parameters**

This tool does not take any parameters.

## GithubApi.GetHooksStatistics



Retrieves statistics about enterprise webhooks on GitHub.

**Parameters**

This tool does not take any parameters.

## GithubApi.GetGithubIssueStatistics



Retrieve statistics on GitHub issues for an enterprise.

**Parameters**

This tool does not take any parameters.

## GithubApi.GetMilestoneStatistics



Retrieve GitHub enterprise milestone statistics.

**Parameters**

This tool does not take any parameters.

## GithubApi.GetGithubOrgStats



Retrieve organization statistics from GitHub Enterprise.

**Parameters**

This tool does not take any parameters.

## GithubApi.GetGithubPagesStats



Retrieve statistics for GitHub Pages in an enterprise account.

**Parameters**

This tool does not take any parameters.

## GithubApi.GetPullRequestStatistics



Retrieve pull request statistics from GitHub Enterprise.

**Parameters**

This tool does not take any parameters.

## GithubApi.GetRepositoryStatistics



Retrieve statistics for GitHub repositories.

**Parameters**

This tool does not take any parameters.

## GithubApi.GetGithubUserStats



Retrieve user statistics from GitHub Enterprise.

**Parameters**

This tool does not take any parameters.

## GithubApi.GetGithubActionsCacheUsageForEnterprise



Retrieve GitHub Actions cache usage for an enterprise.

**Parameters**

-   **enterprise\_identifier** (`string`, required) The slug or ID of the enterprise. Can be either the enterprise name in slug format or the enterprise ID.

## GithubApi.GetGithubActionsCachePolicy



Retrieve the GitHub Actions cache usage policy for an enterprise.

**Parameters**

-   **enterprise\_identifier** (`string`, required) The slug version or ID of the enterprise for GitHub Actions cache policy retrieval.

## GithubApi.SetGithubActionsCachePolicy



Set GitHub Actions cache usage policy for an enterprise.

**Parameters**

-   **enterprise\_identifier** (`string`, required) The slug or ID of the enterprise for which to set the cache policy.
-   **default\_repo\_cache\_size\_limit\_gb** (`integer`, optional) Default size limit for all caches in a repository, specified in gigabytes.
-   **maximum\_repository\_cache\_size\_limit\_in\_gb** (`integer`, optional) Maximum cache size limit for all repository caches in an enterprise, in gigabytes.

## GithubApi.GetGithubActionsPermissions



Get GitHub Actions permissions for an enterprise.

**Parameters**

-   **enterprise\_identifier** (`string`, required) Identifier for the enterprise, either as a slug version of the name or the enterprise ID.

## GithubApi.SetGithubActionsPermissions



Set GitHub Actions permissions for an enterprise.

**Parameters**

-   **enabled\_organizations\_policy** (`string`, required) Specifies which organizations can run GitHub Actions: ‘all’, ‘none’, or ‘selected’.
-   **enterprise\_identifier** (`string`, required) The slug or ID of the enterprise for setting GitHub Actions permissions.
-   **actions\_permission\_policy** (`string`, optional) Specifies the actions allowed to run in the enterprise. Possible values: ‘all’, ‘local\_only’, ‘selected’.

## GithubApi.ListActionsEnabledOrgsEnterprise



List organizations with GitHub Actions enabled in an enterprise.

**Parameters**

-   **enterprise\_identifier** (`string`, required) The slug or ID of the enterprise to identify it for listing organizations with GitHub Actions enabled.
-   **results\_page\_number** (`integer`, optional) Specifies which page of results to retrieve, helpful for navigating through multiple pages.
-   **results\_per\_page** (`integer`, optional) Specify the number of results per page, with a maximum of 100.

## GithubApi.SetGithubActionsEnabledOrgs



Replace organizations enabled for GitHub Actions in an enterprise.

**Parameters**

-   **enterprise\_slug\_or\_id** (`string`, required) The slug version or ID of the enterprise for which to update enabled GitHub Actions organizations.
-   **organization\_ids\_for\_github\_actions** (`array[integer]`, required) An array of organization IDs to enable GitHub Actions for specific organizations in the enterprise.

## GithubApi.DisableOrgGithubActions



Disable GitHub Actions for an organization in an enterprise.

**Parameters**

-   **enterprise\_identifier** (`string`, required) The slug version of the enterprise name or the enterprise ID to identify it for the operation.
-   **organization\_unique\_identifier** (`integer`, required) The unique identifier of the organization to disable GitHub Actions for.

## GithubApi.EnableGithubActionsForOrg



Enable GitHub Actions for a selected organization in an enterprise.

**Parameters**

-   **enterprise\_slug\_or\_id** (`string`, required) The slug or ID of the enterprise to identify it for GitHub Actions enablement. Accepts slug version or enterprise ID.
-   **organization\_id** (`integer`, required) The unique identifier for the organization to enable GitHub Actions. Must be an integer.

## GithubApi.GetAllowedActionsForEnterprise



Retrieve the actions allowed in a GitHub enterprise.

**Parameters**

-   **enterprise\_identifier** (`string`, required) The slug version or ID of the enterprise to fetch allowed actions for.

## GithubApi.SetAllowedActionsEnterprise



Configure allowed GitHub Actions for an enterprise.

**Parameters**

-   **allow\_github\_owned\_actions** (`boolean`, required) Set to true to allow GitHub-owned actions in the enterprise, such as those in the ‘actions’ organization.
-   **allowed\_action\_patterns** (`array[string]`, required) List of patterns to match specific GitHub Actions to allow. Use wildcards, tags, and SHAs for specification.
-   **enterprise\_identifier** (`string`, required) The slug version of the enterprise name or the enterprise ID.

## GithubApi.GetGithubTokenWorkflowPermissions



Retrieve GitHub Actions default workflow permissions for an enterprise.

**Parameters**

-   **enterprise\_identifier** (`string`, required) The slug version of the enterprise name or the enterprise ID.

## GithubApi.SetEnterpriseWorkflowPermissions



Set default GitHub Actions permissions for an enterprise.

**Parameters**

-   **enterprise\_identifier** (`string`, required) The slug or ID of the enterprise. Use the slug version of the enterprise name or the enterprise ID.
-   **allow\_approve\_pull\_request\_reviews** (`boolean`, optional) Indicate if GitHub Actions can approve pull requests. Enabling this may pose a security risk.
-   **default\_workflow\_permissions** (`string`, optional) Specify ‘read’ or ‘write’ to set the permissions for the GITHUB\_TOKEN when running workflows.

## GithubApi.ListSelfHostedRunnerGroups



Retrieve all self-hosted runner groups for an enterprise.

**Parameters**

-   **enterprise\_slug** (`string`, required) The slug or ID of the enterprise for which to list self-hosted runner groups. This identifies the enterprise by name or numeric ID.
-   **organization\_filter** (`string`, optional) Filter results to show runner groups usable by the specified organization.
-   **results\_page\_number** (`integer`, optional) Specifies which page of the self-hosted runner groups results to retrieve. Useful for paginating through large sets of data.
-   **results\_per\_page** (`integer`, optional) The maximum number of results to return per page, up to 100.

## GithubApi.CreateSelfHostedRunnerGroup



Create a self-hosted runner group for an enterprise.

**Parameters**

-   **enterprise\_name\_or\_id** (`string`, required) The slug version of the enterprise name or the enterprise ID to identify the enterprise.
-   **runner\_group\_name** (`string`, required) Name of the runner group to be created.
-   **allow\_public\_repository\_use** (`boolean`, optional) Set to true to allow the runner group to be used by public repositories.
-   **organization\_ids\_for\_access** (`array[integer]`, optional) List of IDs for organizations allowed to access the runner group.
-   **restrict\_to\_selected\_workflows** (`boolean`, optional) Set to true to restrict the runner group to only the workflows in ‘selected\_workflows’.
-   **runner\_group\_visibility** (`string`, optional) Specifies the visibility of the runner group: ‘selected’ for individual organizations or ‘all’ for all organizations.
-   **runner\_ids** (`array[integer]`, optional) List of runner IDs to be added to the new runner group.
-   **workflows\_allowed\_for\_runner\_group** (`array[string]`, optional) List of workflows the runner group can run. Ignored unless `restricted_to_workflows` is `true`.

## GithubApi.DeleteSelfHostedRunnerGroup



Delete a self-hosted runner group for an enterprise.

**Parameters**

-   **enterprise\_identifier** (`string`, required) The slug version of the enterprise name or the enterprise ID to identify which enterprise the runner group belongs to.
-   **runner\_group\_id** (`integer`, required) Unique identifier for the self-hosted runner group to be deleted.

## GithubApi.GetSelfHostedRunnerGroup



Retrieve a specific self-hosted runner group for an enterprise.

**Parameters**

-   **enterprise\_identifier** (`string`, required) The slug of the enterprise name or substitute with the enterprise ID.
-   **runner\_group\_identifier** (`integer`, required) Unique identifier of the self-hosted runner group, required to retrieve specific group details within an enterprise.

## GithubApi.UpdateRunnerGroupEnterprise



Update the name and visibility of a self-hosted runner group in an enterprise.

**Parameters**

-   **enterprise\_identifier** (`string`, required) The slug or ID of the enterprise to identify which enterprise the runner group belongs to.
-   **runner\_group\_id** (`integer`, required) Unique identifier of the self-hosted runner group to update.
-   **allow\_public\_repositories** (`boolean`, optional) Set to true if the runner group can be used by public repositories.
-   **allowable\_workflow\_list** (`array[string]`, optional) List of workflow names the runner group is allowed to run. Ignored unless `restricted_to_workflows` is set to `true`.
-   **restrict\_to\_workflows** (`boolean`, optional) Set to true to restrict the runner group to only the workflows in the selected\_workflows array.
-   **runner\_group\_name** (`string`, optional) Name of the self-hosted runner group to be updated.
-   **runner\_group\_visibility** (`string`, optional) Specifies whether the runner group is visible to all organizations or only selected ones. Valid values are ‘selected’ or ‘all’.

## GithubApi.ListOrgAccessRunnerGroup



List organizations with access to a self-hosted runner group.

**Parameters**

-   **enterprise\_slug\_or\_id** (`string`, required) The slug or ID of the enterprise. Used to identify the specific enterprise context for the runner group.
-   **runner\_group\_id** (`integer`, required) Unique identifier for the self-hosted runner group.
-   **page\_number** (`integer`, optional) Specify the page number of results to fetch. Useful for pagination in large datasets.
-   **results\_per\_page** (`integer`, optional) Specify the number of results per page, with a maximum of 100.

## GithubApi.SetGhOrgAccessToRunnerGroup



Update organization access for a GitHub runner group.

**Parameters**

-   **enterprise\_identifier** (`string`, required) The slug or ID of the enterprise. Specify either for identifying the enterprise.
-   **organization\_ids\_for\_runner\_access** (`array[integer]`, required) List of organization IDs permitted to access the self-hosted runner group.
-   **runner\_group\_identifier** (`integer`, required) Unique integer identifier of the self-hosted runner group within the enterprise.

## GithubApi.RemoveOrgAccessRunnerGroup



Removes an organization’s access to a self-hosted runner group.

**Parameters**

-   **enterprise\_identifier** (`string`, required) The slug or ID of the enterprise to identify it for the runner group operation.
-   **organization\_id** (`integer`, required) The unique identifier for the organization to be removed from the self-hosted runner group.
-   **runner\_group\_id** (`integer`, required) Unique identifier of the self-hosted runner group to modify access for.

## GithubApi.AddOrgAccessToRunnerGroup



Add organization access to a self-hosted runner group in an enterprise.

**Parameters**

-   **enterprise\_identifier** (`string`, required) The slug or ID of the enterprise. Use either the enterprise name slug or its ID.
-   **organization\_id** (`integer`, required) The unique identifier of the organization to add access to the self-hosted runner group.
-   **runner\_group\_id** (`integer`, required) Unique identifier for the self-hosted runner group. Required for adding organization access to it.

## GithubApi.ListSelfHostedRunnersInGroup



Retrieve self-hosted runners in an enterprise group.

**Parameters**

-   **enterprise\_identifier** (`string`, required) The slug or ID of the enterprise. Use the slug version of the enterprise name or substitute with the enterprise ID.
-   **runner\_group\_id** (`integer`, required) The unique identifier of the self-hosted runner group within the enterprise.
-   **results\_page\_number** (`integer`, optional) Page number of the results to fetch.
-   **results\_per\_page** (`integer`, optional) The number of results to display per page (maximum 100).

## GithubApi.UpdateSelfHostedRunnersInGroup



Update self-hosted runners in an enterprise group.

**Parameters**

-   **enterprise\_identifier** (`string`, required) The slug version of the enterprise name or the enterprise ID.
-   **runner\_group\_identifier** (`integer`, required) Unique identifier for the self-hosted runner group. This integer ID specifies which group to update.
-   **runner\_ids\_to\_add** (`array[integer]`, required) Array of runner IDs to be added to the specified runner group in the enterprise. Each runner ID should be an integer.

## GithubApi.RemoveRunnerFromEnterpriseGroup



Remove a self-hosted runner from an enterprise group.

**Parameters**

-   **enterprise\_identifier** (`string`, required) The slug or ID of the enterprise. Use either the slug version of the enterprise name or the enterprise ID.
-   **runner\_group\_id** (`integer`, required) Unique identifier of the self-hosted runner group to remove a runner from.
-   **runner\_identifier** (`integer`, required) The unique integer identifier of the self-hosted runner to be removed from the enterprise group.

## GithubApi.AddSelfHostedRunnerToGroup



Add a self-hosted runner to an enterprise group in GitHub.

**Parameters**

-   **enterprise\_identifier** (`string`, required) Slug version or ID of the enterprise for adding the runner.
-   **runner\_group\_identifier** (`integer`, required) Unique identifier of the self-hosted runner group.
-   **self\_hosted\_runner\_id** (`integer`, required) Unique identifier of the self-hosted runner to be added to the group.

## GithubApi.ListSelfHostedRunnersForEnterprise



Retrieve all self-hosted runners for a GitHub enterprise.

**Parameters**

-   **enterprise\_identifier** (`string`, required) The slug or ID of the enterprise for which to list self-hosted runners.
-   **results\_page\_number** (`integer`, optional) Specify the page number of the results to fetch for pagination purposes.
-   **results\_per\_page** (`integer`, optional) The number of results to return per page, with a maximum of 100.

## GithubApi.ListRunnerBinariesForEnterprise



Retrieve download links for runner application binaries.

**Parameters**

-   **enterprise\_identifier** (`string`, required) The slug or ID for the enterprise to obtain runner binaries.

## GithubApi.CreateGithubEnterpriseRegistrationToken



Generate a registration token for GitHub Enterprise runners.

**Parameters**

-   **enterprise\_slug\_or\_id** (`string`, required) The slug version of the enterprise name or the enterprise ID for GitHub Enterprise.

## GithubApi.GetRemoveTokenForEnterpriseRunner



Generates a token to remove a self-hosted runner from an enterprise.

**Parameters**

-   **enterprise\_identifier** (`string`, required) The slug or ID of the enterprise. Use this to specify the enterprise for which you want to generate a removal token.

## GithubApi.RemoveSelfHostedRunnerFromEnterprise



Remove a self-hosted runner from an enterprise.

**Parameters**

-   **enterprise\_identifier** (`string`, required) The slug or ID of the enterprise. Use the slug version of the name or the enterprise ID for identification.
-   **runner\_id** (`integer`, required) Unique identifier for the self-hosted runner to be removed.

## GithubApi.GetSelfHostedRunnerInfo



Retrieve details of a self-hosted runner in an enterprise.

**Parameters**

-   **enterprise\_identifier** (`string`, required) The slug version of the enterprise name or the enterprise ID.
-   **runner\_id** (`integer`, required) The unique identifier of the self-hosted runner to retrieve details for.

## GithubApi.RemoveCustomLabelsFromRunner



Remove all custom labels from an enterprise’s self-hosted runner.

**Parameters**

-   **enterprise\_identifier** (`string`, required) The slug version of the enterprise name or the enterprise ID for identifying the enterprise.
-   **runner\_id** (`integer`, required) The unique identifier of the self-hosted runner from which to remove custom labels.

## GithubApi.ListLabelsForRunner



Retrieve all labels for a self-hosted runner in an enterprise.

**Parameters**

-   **enterprise\_slug\_or\_id** (`string`, required) The slug or ID of the enterprise for identifying self-hosted runner.
-   **runner\_id** (`integer`, required) Unique identifier of the self-hosted runner for which to list labels.

## GithubApi.AddCustomLabelsToRunner



Add custom labels to a self-hosted runner in an enterprise.

**Parameters**

-   **custom\_labels** (`array[string]`, required) An array of names for the custom labels to add to the self-hosted runner.
-   **enterprise\_identifier** (`string`, required) The slug or ID of the enterprise for the self-hosted runner. It identifies the enterprise name or ID in GitHub.
-   **runner\_unique\_id** (`integer`, required) The unique integer identifier for the self-hosted runner.

## GithubApi.SetCustomLabelsForSelfHostedRunner



Set custom labels for a self-hosted runner in an enterprise.

**Parameters**

-   **custom\_labels** (`array[string]`, required) List of new custom labels for the runner. Use an empty list to remove all labels.
-   **enterprise\_identifier** (`string`, required) The slug or ID of the enterprise where the runner is configured. Use the slug version of the enterprise name or the enterprise ID.
-   **self\_hosted\_runner\_id** (`integer`, required) The unique identifier of the self-hosted runner to update labels for.

## GithubApi.RemoveCustomLabelFromRunner



Remove a custom label from a self-hosted runner in an enterprise.

**Parameters**

-   **enterprise\_identifier** (`string`, required) Slug or ID of the enterprise. Use the slug version of the enterprise name or the enterprise ID as an alternative.
-   **runner\_custom\_label\_name** (`string`, required) The name of the custom label to be removed from the self-hosted runner.
-   **runner\_identifier** (`integer`, required) Unique identifier for the self-hosted runner.

## GithubApi.GetEnterpriseAuditLog



Retrieve the audit log for a specified enterprise.

**Parameters**

-   **enterprise\_slug\_or\_id** (`string`, required) The slug or ID of the enterprise to fetch the audit log for. Either the slug version of the enterprise name or the enterprise ID can be used.
-   **after\_cursor** (`string`, optional) A cursor from the Link header to search for events after this point.
-   **audit\_log\_event\_order** (`string`, optional) Specify ‘desc’ for newest events first or ‘asc’ for oldest events first. Default is ‘desc’.
-   **event\_types\_to\_include** (`string`, optional) Specify event types to include: ‘web’ for web events, ‘git’ for Git events, or ‘all’ for both. Defaults to ‘web’.
-   **result\_page\_number** (`integer`, optional) The page number of audit log results to fetch.
-   **results\_per\_page** (`integer`, optional) Specify the number of results to display per page, with a maximum limit of 100.
-   **search\_events\_before\_cursor** (`string`, optional) A cursor to filter events occurring before the specified position in the audit log.
-   **search\_phrase** (`string`, optional) A search phrase to filter audit log entries. Refer to [GitHub Docs](https://docs.github.com/enterprise-server@3.8/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/searching-the-audit-log-for-your-enterprise#searching-the-audit-log)
      for more details.

## GithubApi.ListEnterpriseCodeScanningAlerts



Retrieve code scanning alerts for enterprise repositories.

**Parameters**

-   **enterprise\_identifier** (`string`, required) The slug version or ID of the enterprise. Used to specify which enterprise’s alerts to list.
-   **alert\_state\_filter** (`string`, optional) Filter code scanning alerts by their state. Valid values are ‘open’, ‘closed’, ‘dismissed’, ‘fixed’.
-   **code\_scanning\_tool\_guid** (`string`, optional) The GUID of a code scanning tool to filter alerts. Use either `code_scanning_tool_guid` or `code_scanning_tool_name`, but not both.
-   **code\_scanning\_tool\_name** (`string`, optional) The name of a code scanning tool to filter results. Use either this or `tool_guid`, but not both.
-   **query\_results\_before\_cursor** (`string`, optional) The cursor from the Link header to search for alerts before this point.
-   **results\_page\_number** (`integer`, optional) Specify the page number to fetch results from. Used for pagination of code scanning alerts.
-   **results\_per\_page** (`integer`, optional) The number of alerts to return per page, with a maximum of 100.
-   **sort\_direction** (`string`, optional) Specifies the sorting order of the results, either ascending (‘asc’) or descending (‘desc’).
-   **sort\_property** (`string`, optional) Specify the property to sort the results by. Valid values are ‘created’ or ‘updated’.
-   **start\_after\_cursor** (`string`, optional) Specifies the cursor to return results after this point. Utilize the cursor from the Link header.

## GithubApi.GetSecurityAnalysisSettings



Get security analysis settings for an enterprise.

**Parameters**

-   **enterprise\_identifier** (`string`, required) The slug version or ID of the enterprise. Use the enterprise’s slug name or its ID to specify it.

## GithubApi.UpdateSecuritySettingsEnterprise



Update security and scanning settings for enterprise repositories.

**Parameters**

-   **enterprise\_identifier** (`string`, required) The slug or ID of the enterprise. Accepts the enterprise’s slug name or ID for identification.
-   **enable\_dependabot\_alerts\_for\_new\_repositories** (`boolean`, optional) Set to true to automatically enable Dependabot alerts for new repositories.

## GithubApi.ListEnterpriseDependabotAlerts



Get Dependabot alerts for enterprise-owned repositories.

**Parameters**

-   **enterprise\_identifier** (`string`, required) The slug or ID of the enterprise. This identifies the enterprise for which alerts are listed.
-   **alert\_severities** (`string`, optional) A comma-separated list of alert severities to filter results. Options: `low`, `medium`, `high`, `critical`.
-   **alert\_state\_filter** (`string`, optional) Comma-separated list of alert states to filter by: `dismissed`, `fixed`, `open`. Only alerts with these states will be returned.
-   **before\_cursor** (`string`, optional) Specify a cursor to fetch results before this point. Use the format provided in the Link header.
-   **cursor\_after** (`string`, optional) A cursor to return results after a specific point. Use as given in the Link header for pagination.
-   **ecosystem\_list** (`string`, optional) A comma-separated list of ecosystems to filter alerts. Options include: `composer`, `go`, `maven`, `npm`, `nuget`, `pip`, `pub`, `rubygems`, `rust`.
-   **number\_of\_results\_per\_page\_starting\_first** (`integer`, optional) **Deprecated**. Specifies the number of results per page (maximum 100), beginning with the first matching result. Avoid using with `number_of_results_per_page_starting_last`. Use `results_per_page` with `paging_after_cursor` instead.
-   **package\_filter** (`string`, optional) A comma-separated list of package names. Specify to filter alerts by these packages.
-   **results\_per\_page** (`integer`, optional) The number of results to return per page, with a maximum of 100.
-   **results\_per\_page\_starting\_from\_last** (`integer`, optional) **Deprecated**. Number of results per page (max 100), starting from the last matching result. Avoid using with ‘results\_per\_page\_starting\_from\_first’.
-   **sort\_direction** (`string`, optional) Specifies the sorting order of the results, either ascending (‘asc’) or descending (‘desc’).
-   **sort\_property\_for\_alerts** (`string`, optional) Specifies the property to sort Dependabot alerts by. Options are ‘created’ (when the alert was created) or ‘updated’ (when the alert’s state last changed).
-   **vulnerable\_dependency\_scope** (`string`, optional) The scope of the vulnerable dependency to filter alerts by. Options: ‘development’, ‘runtime’.

## GithubApi.ListSecretScanningAlertsForEnterprise



Retrieve secret scanning alerts for enterprise repositories.

**Parameters**

-   **enterprise\_identifier** (`string`, required) The slug or ID of the enterprise. This identifies the specific enterprise to list alerts for.
-   **alert\_resolution\_filters** (`string`, optional) Comma-separated list of alert resolutions to filter by: false\_positive, wont\_fix, revoked, pattern\_edited, pattern\_deleted, used\_in\_tests.
-   **alert\_state\_filter** (`string`, optional) Specify if only ‘open’ or ‘resolved’ secret scanning alerts should be listed.
-   **cursor\_after** (`string`, optional) A cursor for retrieving results after this point, as specified in the Link header.
-   **cursor\_before** (`string`, optional) A cursor to fetch results before this point, as specified by the link header.
-   **results\_per\_page** (`integer`, optional) The number of results per page. Maximum is 100.
-   **secret\_types\_to\_return** (`string`, optional) A comma-separated list of secret types to return. By default, all secret types are returned. Refer to GitHub’s secret scanning patterns documentation for supported types.
-   **sort\_by** (`string`, optional) Specify ‘created’ to sort by alert creation date or ‘updated’ to sort by the last update or resolution date.
-   **sort\_direction** (`string`, optional) Specify the direction (‘asc’ or ‘desc’) to sort the secret scanning alerts results.

## GithubApi.GetGithubSecurityBillingInfo



Retrieve GitHub Advanced Security billing details for an enterprise.

**Parameters**

-   **enterprise\_identifier** (`string`, required) The slug or ID representing the enterprise name for security billing info.
-   **results\_page\_number** (`integer`, optional) Specify the page number of results to fetch. Use to navigate through paginated data.
-   **results\_per\_page** (`integer`, optional) The number of results per page to return. Maximum is 100.

## GithubApi.ManageEnterpriseSecurityFeature



Enable or disable a security feature for an enterprise.

**Parameters**

-   **enterprise\_identifier** (`string`, required) The slug version of the enterprise name or the enterprise ID.
-   **security\_feature** (`string`, required) Specify the security feature to enable or disable. Options: ‘advanced\_security’, ‘secret\_scanning’, ‘secret\_scanning\_push\_protection’.
-   **set\_enablement\_status** (`string`, required) Specify ‘enable\_all’ to activate or ‘disable\_all’ to deactivate the security feature for all repositories in the enterprise.

## GithubApi.ListRecentGithubEvents



Retrieve recent public events from GitHub.

**Parameters**

-   **page\_number** (`integer`, optional) The page number of the GitHub public event results to fetch.
-   **results\_per\_page** (`integer`, optional) Specify the number of results per page, with a maximum of 100.

## GithubApi.GetGithubFeeds



Retrieve available GitHub feeds for an authenticated user.

**Parameters**

This tool does not take any parameters.

## GithubApi.ListUserGists



Lists a user’s gists or public gists if unauthenticated.

**Parameters**

-   **page\_number\_to\_fetch** (`integer`, optional) Specify the page number of the results to fetch.
-   **results\_per\_page** (`integer`, optional) Specify the number of gists to return per page. Maximum is 100.
-   **show\_gists\_since** (`string`, optional) Show gists updated after the specified time in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.

## GithubApi.CreateGist



Create a new gist with one or more files on GitHub.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## GithubApi.ListRecentPublicGists



Retrieve the most recently updated public gists.

**Parameters**

-   **result\_page\_number** (`integer`, optional) Page number to fetch the results from. Use for pagination.
-   **results\_per\_page** (`integer`, optional) Specifies the number of gists to display per page. Maximum allowed is 100.
-   **updated\_since** (`string`, optional) A timestamp in ISO 8601 format to filter gists updated after this time.

## GithubApi.ListStarredGists



Retrieve the authenticated user’s starred gists.

**Parameters**

-   **results\_page\_number** (`integer`, optional) Specifies which page of results to fetch for the user’s starred gists.
-   **results\_per\_page** (`integer`, optional) Specify the number of results per page. Maximum allowed is 100.
-   **updated\_since\_time** (`string`, optional) Only show gists updated after this time. Use ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.

## GithubApi.DeleteGithubGist



Delete a GitHub gist by its ID.

**Parameters**

-   **gist\_identifier** (`string`, required) The unique identifier for the GitHub gist to be deleted.

## GithubApi.GetGithubGist



Retrieve details of a specific GitHub gist using its ID.

**Parameters**

-   **gist\_identifier** (`string`, required) The unique identifier for the GitHub gist you want to retrieve.

## GithubApi.UpdateGithubGist



Update a GitHub gist’s description and files.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **gist\_unique\_identifier** (`string`, optional) The unique identifier of the GitHub gist to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## GithubApi.ListGistComments



Retrieve comments for a specific GitHub gist.

**Parameters**

-   **gist\_identifier** (`string`, required) Provide the unique identifier of the gist for which comments are to be listed.
-   **result\_page\_number** (`integer`, optional) Specifies the page number to fetch from the list of gist comments.
-   **results\_per\_page** (`integer`, optional) The number of comments to return per page, with a maximum of 100.

## GithubApi.CreateGistComment



Create a comment on a GitHub gist.

**Parameters**

-   **comment\_text** (`string`, required) The text content of the comment to be added to the gist.
-   **gist\_unique\_identifier** (`string`, required) The unique identifier of the gist to comment on.

## GithubApi.DeleteGistComment



Delete a comment from a GitHub gist.

**Parameters**

-   **comment\_identifier** (`integer`, required) The unique identifier of the comment to be deleted.
-   **gist\_identifier** (`string`, required) The unique identifier for the specific GitHub gist from which the comment is to be deleted.

## GithubApi.GetGistComment



Retrieve a specific comment from a GitHub gist.

**Parameters**

-   **comment\_id** (`integer`, required) Unique identifier for the gist comment to retrieve details for.
-   **gist\_unique\_id** (`string`, required) The unique identifier for the gist needed to retrieve a specific comment.

## GithubApi.UpdateGistComment



Update an existing comment on a GitHub gist.

**Parameters**

-   **comment\_identifier** (`integer`, required) The unique identifier of the comment to update.
-   **comment\_text** (`string`, required) The text content of the gist comment to be updated.
-   **gist\_identifier** (`string`, required) The unique identifier for the GitHub gist you want to update a comment on.

## GithubApi.ListGistCommits



Retrieve the commit history of a specified GitHub gist.

**Parameters**

-   **gist\_identifier** (`string`, required) The unique identifier of the gist for which to list commits.
-   **results\_page\_number** (`integer`, optional) Specify the page number of results to fetch for pagination. Useful for accessing more than the default result set.
-   **results\_per\_page** (`integer`, optional) The number of results to display per page, with a maximum of 100.

## GithubApi.ListGistForks



Retrieve a list of forks for a specific gist.

**Parameters**

-   **gist\_unique\_identifier** (`string`, required) The unique identifier of the gist to retrieve forks information from.
-   **results\_page\_number** (`integer`, optional) Specify the page number of the results you want to fetch. Used for pagination.
-   **results\_per\_page** (`integer`, optional) The number of results to display per page, with a maximum of 100 allowed.

## GithubApi.ForkGist



Fork a GitHub gist to your account.

**Parameters**

-   **gist\_unique\_identifier** (`string`, required) The unique identifier of the GitHub gist to be forked. This is required to specify which gist to duplicate.

## GithubApi.UnstarGithubGist



Unstar a GitHub gist by its ID.

**Parameters**

-   **gist\_identifier** (`string`, required) The unique identifier for the GitHub gist to be unstarred.

## GithubApi.CheckIfGistIsStarred



Determine if a specific gist is starred on GitHub.

**Parameters**

-   **gist\_identifier** (`string`, required) The unique identifier for the gist to check if it is starred.

## GithubApi.StarGithubGist



Star a gist on GitHub using its gist ID.

**Parameters**

-   **gist\_unique\_id** (`string`, required) The unique identifier of the gist to be starred on GitHub.

## GithubApi.GetGistRevision



Retrieve a specific revision of a GitHub gist.

**Parameters**

-   **gist\_identifier** (`string`, required) The unique identifier of the GitHub gist to retrieve a specific revision.
-   **revision\_sha** (`string`, required) The SHA hash of the specific gist revision to retrieve.

## GithubApi.ListGitignoreTemplates



Retrieve all available .gitignore templates from GitHub.

**Parameters**

This tool does not take any parameters.

## GithubApi.FetchGitignoreTemplate



Fetches the raw .gitignore template by name.

**Parameters**

-   **gitignore\_template\_name** (`string`, required) The name of the .gitignore template to fetch from GitHub. This is required to specify which template’s raw content to retrieve.

## GithubApi.ListGithubAppAccessibleRepos



List repositories accessible to a GitHub app installation.

**Parameters**

-   **results\_page\_number** (`integer`, optional) Page number of the results to fetch.
-   **results\_per\_page** (`integer`, optional) The number of repositories to include on each page of results. Maximum is 100.

## GithubApi.RevokeGithubInstallationToken



Revoke your GitHub installation access token.

**Parameters**

This tool does not take any parameters.

## GithubApi.ListGithubIssues



Get issues assigned to you across all GitHub repositories.

**Parameters**

-   **include\_collaborative\_repositories** (`boolean`, optional) Include issues from collaborative repositories. Set to true to filter issues where you have collaborative access.
-   **include\_owned\_repositories** (`boolean`, optional) Set to true to include issues from repositories owned by the authenticated user.
-   **include\_pull\_requests** (`boolean`, optional) Set to true to include pull requests in the issues list.
-   **issue\_filter\_type** (`string`, optional) Specifies the type of issues to return: assigned, created, mentioned, subscribed, repos, or all.
-   **issue\_labels** (`string`, optional) Comma-separated list of label names to filter issues. Example: ‘bug,ui,@high’.
-   **issue\_state** (`string`, optional) Specifies the state of issues to retrieve: `open`, `closed`, or `all`.
-   **organization\_repositories** (`boolean`, optional) Include issues from organization repositories when set to true. If false, include issues from all repositories.
-   **page\_number** (`integer`, optional) The specific page of results to fetch. Use this for pagination to navigate through large list of issues.
-   **results\_per\_page** (`integer`, optional) The number of results per page, maximum is 100.
-   **sort\_direction** (`string`, optional) Specifies the order of sorting for the results. Use ‘asc’ for ascending and ‘desc’ for descending.
-   **sort\_issues\_by** (`string`, optional) Specify the criteria to sort issues by: ‘created’, ‘updated’, or ‘comments’.
-   **updated\_since\_timestamp** (`string`, optional) Show issues updated after this timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.

## GithubApi.GetCommonlyUsedLicenses



Fetch a list of commonly used software licenses.

**Parameters**

-   **only\_featured\_licenses** (`boolean`, optional) Set to true to return only featured licenses.
-   **results\_page\_number** (`integer`, optional) Page number of the results to fetch. Use to navigate through pages of results.
-   **results\_per\_page** (`integer`, optional) Specify the number of licenses to display per page, with a maximum of 100.

## GithubApi.GetGithubLicense



Retrieve a specific GitHub license by its key.

**Parameters**

-   **license\_key** (`string`, required) The key of the GitHub license to retrieve information about.

## GithubApi.RenderMarkdown



Convert Markdown content to HTML rendering.

**Parameters**

-   **markdown\_text** (`string`, required) The Markdown text to convert into HTML format.
-   **rendering\_mode** (`string`, optional) Specifies the rendering mode: ‘markdown’ for plain Markdown or ‘gfm’ for GitHub Flavored Markdown.
-   **repository\_context** (`string`, optional) The repository context for linking references in `gfm` mode (e.g., ‘octo-org/octo-repo’).

## GithubApi.RenderMarkdownPlain



Convert Markdown text to rendered plain text format.

**Parameters**

This tool does not take any parameters.

## GithubApi.GetGithubEnterpriseMetaInfo



Retrieve GitHub Enterprise Server meta information.

**Parameters**

This tool does not take any parameters.

## GithubApi.ListRepoNetworkPublicEvents



Retrieve public events for a network of repositories.

**Parameters**

-   **repository\_name** (`string`, required) The name of the repository. This value is not case sensitive.
-   **repository\_owner** (`string`, required) The GitHub account owner of the repository. This value is not case sensitive.
-   **results\_page\_number** (`integer`, optional) Specify the page number of results to retrieve. Use this to navigate through paginated results.
-   **results\_per\_page** (`integer`, optional) Specify the number of results per page, with a maximum of 100.

## GithubApi.ListUserNotifications



Retrieve notifications for the authenticated GitHub user.

**Parameters**

-   **filter\_notifications\_before\_date** (`string`, optional) Only show notifications updated before the specified ISO 8601 timestamp (`YYYY-MM-DDTHH:MM:SSZ`).
-   **include\_read\_notifications** (`boolean`, optional) Set to `true` to include notifications marked as read in the results.
-   **notifications\_since\_timestamp** (`string`, optional) Return notifications updated after this timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
-   **only\_show\_participating\_notifications** (`boolean`, optional) If true, only shows notifications where the user is directly participating or mentioned.
-   **results\_page\_number** (`integer`, optional) Specify the page number of the notification results to fetch.
-   **results\_per\_page** (`integer`, optional) The number of notifications to display per page, with a maximum limit of 50.

## GithubApi.MarkGithubNotificationsAsRead



Mark all GitHub notifications as read for the current user.

**Parameters**

-   **mark\_notifications\_as\_read** (`boolean`, optional) A boolean flag to set notifications as read. True marks notifications as read.
-   **notifications\_last\_read\_timestamp** (`string`, optional) A timestamp marking the last time notifications were checked. Notifications updated since this time won’t be marked as read. Use ISO 8601 format `YYYY-MM-DDTHH:MM:SSZ`. Leave empty to mark all as read.

## GithubApi.GetGithubNotificationThread



Retrieve information about a GitHub notification thread.

**Parameters**

-   **notification\_thread\_id** (`integer`, required) The unique identifier of the notification thread, returned in the `id` field when retrieving notifications.

## GithubApi.MarkGithubThreadAsRead



Mark a GitHub thread notification as read.

**Parameters**

-   **notification\_thread\_id** (`integer`, required) The unique identifier for the GitHub notification thread to be marked as read. Obtain this from the `id` field when retrieving notifications.

## GithubApi.MuteGithubThreadNotifications



Mute all future notifications for a GitHub thread.

**Parameters**

-   **notification\_thread\_id** (`integer`, required) The unique identifier for the specific GitHub notification thread to mute. Obtain from the `id` field of fetched notifications.

## GithubApi.CheckThreadSubscription



Check if the authenticated user is subscribed to a thread.

**Parameters**

-   **notification\_thread\_id** (`integer`, required) The unique identifier of the notification thread, retrieved from notification data.

## GithubApi.ManageGithubThreadNotifications



Manage GitHub notifications for specific threads.

**Parameters**

-   **notification\_thread\_id** (`integer`, required) The unique ID of the notification thread, as retrieved from the GitHub notifications API.
-   **ignore\_thread\_notifications** (`boolean`, optional) Set to true to block all notifications from a thread. Use false to allow notifications.

## GithubApi.GetOctocatAsciiArt



Retrieve the octocat as ASCII art.

**Parameters**

-   **speech\_bubble\_text** (`string`, optional) Text to display in Octocat’s speech bubble. Provide a string with the desired message.

## GithubApi.ListGithubOrganizations



Retrieve a list of GitHub organizations.

**Parameters**

-   **organization\_id\_since** (`integer`, optional) Only return organizations with an ID greater than this value to paginate results.
-   **results\_per\_page** (`integer`, optional) Specifies the number of results to return per page, with a maximum value of 100.

## GithubApi.ListGithubCustomRoles



Retrieve custom repository roles for a GitHub organization.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier of the GitHub organization to list custom roles for.

## GithubApi.GetGithubOrgInfo



Retrieve detailed information about a GitHub organization.

**Parameters**

-   **organization\_name** (`string`, required) The name of the GitHub organization to retrieve information for. It is not case sensitive.

## GithubApi.UpdateGithubOrganization



Update a GitHub organization’s profile and member privileges.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_name** (`string`, optional) The GitHub organization name. This is not case sensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## GithubApi.FetchOrgActionsCacheUsage



Fetches GitHub Actions cache usage for a specified organization.

**Parameters**

-   **organization\_name** (`string`, required) The name of the organization. It should not be case sensitive.

## GithubApi.GetGithubActionsCacheUsageForOrg



Retrieve GitHub Actions cache usage for an organization’s repositories.

**Parameters**

-   **organization\_name** (`string`, required) The name of the organization to retrieve cache usage for. This is not case sensitive.
-   **page\_number** (`integer`, optional) Specify the page number of the results to fetch. This is useful for paginated data retrieval.
-   **results\_per\_page** (`integer`, optional) The number of results to return per page, with a maximum of 100 entries.

## GithubApi.GetOidcCustomSubTemplateForOrg



Retrieves the OIDC subject claim customization template for an organization.

**Parameters**

-   **organization\_name** (`string`, required) The name of the GitHub organization for which you want to retrieve the OIDC customization template. The name is not case sensitive.

## GithubApi.UpdateGithubOidcTemplate



Update OIDC custom subject claim template for GitHub organization.

**Parameters**

-   **include\_claim\_keys** (`array[string]`, required) Array of unique strings for OIDC claim keys with alphanumeric characters and underscores.
-   **organization\_name** (`string`, required) The name of the GitHub organization. Case insensitive.

## GithubApi.GetGithubActionsPermissionsForOrganization



Retrieve GitHub Actions permissions for an organization.

**Parameters**

-   **organization\_name** (`string`, required) The organization name for which to retrieve GitHub Actions permissions. The name is not case sensitive.

## GithubApi.ConfigureGithubActionsPermissions



Configure GitHub Actions permissions for an organization.

**Parameters**

-   **organization\_name** (`string`, required) The name of the GitHub organization. It is not case sensitive.
-   **repository\_execution\_policy** (`string`, required) Specifies which repositories in the organization are allowed to run GitHub Actions. Options: ‘all’, ‘none’, ‘selected’.
-   **allowed\_actions\_policy** (`string`, optional) Specifies the permissions policy for actions: ‘all’, ‘local\_only’, or ‘selected’.

## GithubApi.ListActionsEnabledRepos



Retrieve repositories enabled for GitHub Actions in an organization.

**Parameters**

-   **organization\_name** (`string`, required) The name of the organization for which to list GitHub Actions-enabled repositories. This field is not case sensitive.
-   **result\_page\_number** (`integer`, optional) Page number of the results to fetch. Use for paginating through results.
-   **results\_per\_page** (`integer`, optional) The maximum number of repositories to return per page (max 100).

## GithubApi.SetGithubActionsReposForOrg



Configure selected repositories for GitHub Actions in an organization.

**Parameters**

-   **organization\_name** (`string`, required) The name of the organization. It is not case sensitive.
-   **repository\_ids\_for\_github\_actions** (`array[integer]`, required) An array of repository IDs to enable for GitHub Actions within the organization. Each ID should be an integer.

## GithubApi.DisableGithubActionsRepo



Disable GitHub Actions for a specific repo in an organization.

**Parameters**

-   **organization\_name** (`string`, required) The name of the GitHub organization. It is not case sensitive.
-   **repository\_unique\_id** (`integer`, required) The unique integer identifier of the repository to be disabled for GitHub Actions.

## GithubApi.EnableGithubActionsForRepo



Enable a repository for GitHub Actions in an organization.

**Parameters**

-   **organization\_name** (`string`, required) The name of the organization to enable GitHub Actions for, not case sensitive.
-   **repository\_unique\_identifier** (`integer`, required) The unique identifier of the repository to enable for GitHub Actions.

## GithubApi.GetAllowedActionsForOrganization



Retrieve the allowed GitHub Actions for an organization.

**Parameters**

-   **organization\_name** (`string`, required) The name of the GitHub organization. This is not case sensitive.

## GithubApi.SetAllowedActionsForOrganization



Set allowed GitHub Actions for an organization.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_name** (`string`, optional) The name of the GitHub organization. It is not case sensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## GithubApi.GetDefaultGithubActionsWorkflowPermissions



Fetches default workflow permissions for an organization’s GitHub Actions.

**Parameters**

-   **organization\_name** (`string`, required) The organization name for which to fetch the workflow permissions. It is not case sensitive.

## GithubApi.SetDefaultGithubActionsPermissions



Configure default GitHub Actions permissions for an organization.

**Parameters**

-   **organization\_name** (`string`, required) The name of the organization. Not case sensitive.
-   **allow\_actions\_to\_approve\_pull\_requests** (`boolean`, optional) Allow GitHub Actions to approve pull requests. Enabling this may pose a security risk.
-   **default\_github\_token\_permissions** (`string`, optional) The default permissions granted to the GITHUB\_TOKEN when running workflows. Options are ‘read’ or ‘write’.

## GithubApi.ListRequiredWorkflows



Retrieve all required workflows in a GitHub organization.

**Parameters**

-   **organization\_name** (`string`, required) The GitHub organization name. Note: The name is not case sensitive. This identifies which organization’s workflows to list.
-   **results\_page\_number** (`integer`, optional) The specific page number of required workflow results to fetch.
-   **results\_per\_page** (`integer`, optional) The number of results to display per page, with a maximum of 100.

## GithubApi.CreateGithubRequiredWorkflow



Create a required workflow in a GitHub organization.

**Parameters**

-   **organization\_name** (`string`, required) The name of the GitHub organization. It is not case sensitive.
-   **repository\_identifier** (`string`, required) The ID of the repository that contains the workflow file. Use this to specify which repository’s workflow file should be used.
-   **workflow\_file\_path** (`string`, required) Path of the workflow file to set as required for the organization.
-   **repository\_ids\_for\_selected\_scope** (`array[integer]`, optional) List of repository IDs to enable the workflow when `scope` is ‘selected’.
-   **workflow\_scope** (`string`, optional) Specify whether to enable the required workflow for all repositories or only selected ones within the organization. Use ‘all’ for all repositories and ‘selected’ when specifying particular repositories.

## GithubApi.DeleteGithubRequiredWorkflow



Deletes a required workflow in a GitHub organization.

**Parameters**

-   **organization\_name** (`string`, required) The GitHub organization name. This is case insensitive.
-   **workflow\_identifier** (`integer`, required) The unique identifier of the required workflow to be deleted.

## GithubApi.GetRequiredWorkflow



Retrieve a required workflow for a GitHub organization.

**Parameters**

-   **organization\_name** (`string`, required) The GitHub organization name. This name is not case sensitive.
-   **workflow\_id** (`integer`, required) The unique identifier of the workflow to retrieve for the organization.

## GithubApi.UpdateGithubRequiredWorkflow



Update a required workflow in a GitHub organization.

**Parameters**

-   **organization\_name** (`string`, required) The name of the GitHub organization. It is not case sensitive.
-   **required\_workflow\_identifier** (`integer`, required) The unique identifier for the required workflow to update in the organization.
-   **repository\_id\_for\_workflow** (`string`, optional) The ID of the repository containing the workflow file to be updated.
-   **repository\_ids\_for\_workflow** (`array[integer]`, optional) List of repository IDs to enable the required workflow. Applicable only if `scope` is `selected`.
-   **workflow\_file\_path** (`string`, optional) Path to the workflow file to be set as a required workflow in the organization.
-   **workflow\_scope** (`string`, optional) Specify the repository scope for enabling the workflow: ‘all’ for all repositories or ‘selected’ for specific ones within the organization.

## GithubApi.ListRequiredWorkflowRepositories



List repositories configured for a required workflow.

**Parameters**

-   **organization\_name** (`string`, required) The name of the organization. It is not case sensitive and identifies the organization within GitHub.
-   **workflow\_unique\_identifier** (`integer`, required) The unique identifier of the required workflow for which the repositories are to be listed.

## GithubApi.SetGithubReposForRequiredWorkflow



Set repositories for a GitHub required workflow.

**Parameters**

-   **organization\_name** (`string`, required) The GitHub organization name. Input is not case sensitive.
-   **repository\_ids\_for\_required\_workflow** (`array[integer]`, required) An array of repository IDs for which the workflow is required. Provide each repository’s ID as an integer.
-   **required\_workflow\_identifier** (`integer`, required) The unique identifier for the required workflow you want to set for the repositories.

## GithubApi.RemoveRepoFromRequiredWorkflow



Removes a repository from a GitHub required workflow.

**Parameters**

-   **organization\_name** (`string`, required) The name of the organization. This is not case sensitive.
-   **repository\_identifier** (`integer`, required) The unique identifier of the repository to be removed from the required workflow.
-   **required\_workflow\_identifier** (`integer`, required) The unique identifier of the required workflow to be removed.

## GithubApi.AddRepoToRequiredWorkflow



Adds a repository to a GitHub required workflow.

**Parameters**

-   **organization\_name** (`string`, required) The organization name for GitHub. It is not case sensitive.
-   **repository\_unique\_identifier** (`integer`, required) The unique identifier for the GitHub repository to be added to the required workflow.
-   **required\_workflow\_identifier** (`integer`, required) The unique integer ID of the required workflow to which the repository will be added.

## GithubApi.ListRunnerGroupsForOrg



Retrieve self-hosted runner groups for a GitHub organization.

**Parameters**

-   **organization\_name** (`string`, required) The GitHub organization’s name. This is not case sensitive.
-   **repository\_visibility\_filter** (`string`, optional) Specify the repository to filter runner groups that they are allowed to be used by.
-   **results\_page\_number** (`integer`, optional) Specify the page number of the results to fetch. Use an integer value.
-   **results\_per\_page** (`integer`, optional) Specify the number of results per page, with a maximum of 100.

## GithubApi.CreateRunnerGroupForOrg



Create a self-hosted runner group for an organization.

**Parameters**

-   **organization\_name** (`string`, required) The name of the organization. It is not case sensitive.
-   **runner\_group\_name** (`string`, required) Name of the self-hosted runner group to be created. This should be a descriptive and distinct name within your organization.
-   **accessible\_repository\_ids** (`array[integer]`, optional) List of repository IDs that can access the runner group.
-   **allow\_public\_repositories** (`boolean`, optional) Set to true to allow the runner group to be used by public repositories.
-   **allowed\_workflows** (`array[string]`, optional) List of workflows names the runner group is permitted to run. Considered only if ‘restricted\_to\_workflows’ is true.
-   **restrict\_to\_selected\_workflows** (`boolean`, optional) Set to true to restrict the runner group to run only the workflows in the selected\_workflows array.
-   **runner\_group\_visibility** (`string`, optional) Specify the visibility of the runner group: ‘selected’ for individual repositories, ‘all’ for all repositories, or ‘private’ for private repositories only.
-   **runner\_ids\_to\_add** (`array[integer]`, optional) List of runner IDs to include in the newly created runner group for the organization.

## GithubApi.DeleteRunnerGroupFromOrganization



Delete a self-hosted runner group from an organization.

**Parameters**

-   **organization\_name** (`string`, required) The name of the organization on GitHub. This is not case-sensitive.
-   **runner\_group\_id** (`integer`, required) The unique integer ID of the self-hosted runner group to delete.

## GithubApi.GetSelfHostedRunnerGroupForOrg



Retrieve a specific self-hosted runner group for an organization.

**Parameters**

-   **organization\_name** (`string`, required) The organization name on GitHub. It is not case sensitive.
-   **runner\_group\_identifier** (`integer`, required) Unique identifier for the self-hosted runner group. It should be an integer.

## GithubApi.UpdateRunnerGroupSettings



Update name and visibility of a runner group in an organization.

**Parameters**

-   **organization\_name** (`string`, required) The name of the organization. The name is not case sensitive.
-   **runner\_group\_id** (`integer`, required) Unique identifier of the self-hosted runner group being updated.
-   **runner\_group\_name** (`string`, required) The new name for the self-hosted runner group in the organization.
-   **allow\_public\_repository\_usage** (`boolean`, optional) Set to `true` to allow the runner group to be used by public repositories.
-   **allowed\_workflow\_list** (`array[string]`, optional) List of workflows the runner group can run. Ignored unless workflows are restricted.
-   **restrict\_runner\_group\_to\_workflows** (`boolean`, optional) Set to `true` to restrict the runner group to running only the workflows specified in `selected_workflows`.
-   **runner\_group\_visibility** (`string`, optional) Specifies the visibility of the runner group. Options: ‘selected’ for individual repositories, ‘all’ for all repositories, ‘private’ for all private repositories.

## GithubApi.ListReposWithRunnerGroupAccess



Retrieve repositories with access to a runner group in an organization.

**Parameters**

-   **organization\_name** (`string`, required) The case-insensitive name of the organization.
-   **runner\_group\_id** (`integer`, required) Unique identifier of the self-hosted runner group to fetch repository access details.
-   **result\_page\_number** (`integer`, optional) Page number of the results to fetch.
-   **results\_per\_page** (`integer`, optional) The number of results to retrieve per page, with a maximum of 100.

## GithubApi.SetGithubRunnerGroupRepoAccess



Update repository access for a GitHub runner group.

**Parameters**

-   **organization\_name** (`string`, required) The name of the GitHub organization. It is not case sensitive.
-   **repository\_ids\_for\_access** (`array[integer]`, required) List of repository IDs allowed to access the self-hosted runner group.
-   **runner\_group\_id** (`integer`, required) Unique identifier for the self-hosted runner group in the organization.

## GithubApi.RemoveRepoAccessFromRunnerGroup



Remove repository access from a self-hosted runner group.

**Parameters**

-   **organization\_name** (`string`, required) The name of the organization. This input is not case sensitive.
-   **repository\_unique\_id** (`integer`, required) The unique identifier of the repository to remove access from the runner group. Must be an integer.
-   **runner\_group\_unique\_id** (`integer`, required) Unique identifier of the self-hosted runner group. This is required to specify which runner group’s access will be modified.

## GithubApi.AddRepoAccessToRunnerGroup



Add repository access to a self-hosted runner group.

**Parameters**

-   **organization\_name** (`string`, required) The name of the organization. It is not case sensitive.
-   **repository\_unique\_id** (`integer`, required) The unique identifier of the repository to add access for.
-   **runner\_group\_identifier** (`integer`, required) Provide the unique integer identifier for the self-hosted runner group.

## GithubApi.ListOrgRunnerGroupRunners



List self-hosted runners in an organization group.

**Parameters**

-   **organization\_name** (`string`, required) The name of the organization. It is not case sensitive.
-   **runner\_group\_id** (`integer`, required) Unique identifier of the self-hosted runner group to fetch runners for.
-   **result\_page\_number** (`integer`, optional) Specifies the page number of results to be fetched. Used for pagination.
-   **results\_per\_page** (`integer`, optional) The number of results to display per page, with a maximum of 100.

## GithubApi.UpdateSelfHostedRunnersForOrgGroup



Update self-hosted runners in an organization’s runner group.

**Parameters**

-   **organization\_name** (`string`, required) The name of the organization. It is not case sensitive.
-   **runner\_group\_id** (`integer`, required) Unique identifier for the self-hosted runner group to update.
-   **runner\_ids\_to\_add** (`array[integer]`, required) Array of integer IDs representing the runners to be added to the organization runner group.

## GithubApi.RemoveRunnerFromGroup



Remove a self-hosted runner from an organization’s group.

**Parameters**

-   **organization\_name** (`string`, required) The name of the GitHub organization. This value is not case sensitive.
-   **runner\_group\_identifier** (`integer`, required) Unique identifier of the self-hosted runner group for removal action.
-   **runner\_id** (`integer`, required) Unique identifier of the self-hosted runner to remove from the group.

## GithubApi.AddRunnerToGroup



Add a self-hosted runner to an organization’s runner group.

**Parameters**

-   **organization\_name** (`string`, required) The name of the GitHub organization. It is not case sensitive.
-   **runner\_group\_identifier** (`integer`, required) The unique integer identifier of the self-hosted runner group to which the runner will be added.
-   **runner\_identifier** (`integer`, required) Unique identifier of the self-hosted runner to be added to the group.

## GithubApi.ListOrgSelfHostedRunners



Retrieve self-hosted runners for a GitHub organization.

**Parameters**

-   **organization\_name** (`string`, required) The GitHub organization’s name. This is case insensitive.
-   **results\_page\_number** (`integer`, optional) Specify the page number of the results to fetch. For paginated data retrieval.
-   **results\_per\_page** (`integer`, optional) Specify the number of results to return per page, with a maximum of 100.

## GithubApi.ListGithubRunnerBinariesForOrg



Retrieve downloadable binaries for GitHub runner application.

**Parameters**

-   **organization\_name** (`string`, required) The name of the GitHub organization. The organization name is not case sensitive.

## GithubApi.CreateOrgRunnerRegistrationToken



Generate a registration token for GitHub organization runners.

**Parameters**

-   **organization\_name** (`string`, required) The name of the GitHub organization. This is not case-sensitive.

## GithubApi.GetOrgRunnerRemovalToken



Get a token to remove a self-hosted runner from an organization.

**Parameters**

-   **organization\_name** (`string`, required) The name of the GitHub organization. It is not case sensitive.

## GithubApi.RemoveSelfHostedRunnerFromOrg



Forcefully remove a self-hosted runner from an organization.

**Parameters**

-   **organization\_name** (`string`, required) The GitHub organization’s name. This input is not case sensitive.
-   **runner\_id** (`integer`, required) Unique identifier of the self-hosted GitHub runner to be removed.

## GithubApi.GetOrgSelfHostedRunner



Get details of a self-hosted runner for an organization.

**Parameters**

-   **organization\_name** (`string`, required) The GitHub organization name (not case sensitive).
-   **runner\_id** (`integer`, required) Unique integer identifier of the self-hosted runner within the organization.

## GithubApi.RemoveAllCustomLabelsRunnerOrg



Remove all custom labels from an organization’s self-hosted runner.

**Parameters**

-   **organization\_name** (`string`, required) The GitHub organization name, not case sensitive.
-   **runner\_id** (`integer`, required) The unique identifier of the self-hosted runner. This is required to target the specific runner for label removal in an organization.

## GithubApi.ListRunnerLabelsForOrg



Retrieve labels for a self-hosted runner in an organization.

**Parameters**

-   **organization\_name** (`string`, required) The name of the organization. This parameter is not case sensitive.
-   **runner\_unique\_id** (`integer`, required) The unique identifier for the self-hosted runner. It must be an integer.

## GithubApi.AddLabelsToRunner



Add custom labels to a self-hosted runner in an organization.

**Parameters**

-   **custom\_labels\_to\_add** (`array[string]`, required) An array of strings representing the custom labels to add to the self-hosted runner. Each label is a string.
-   **organization\_name** (`string`, required) The name of the GitHub organization. It is not case sensitive.
-   **runner\_id** (`integer`, required) Unique identifier of the self-hosted runner to which labels are added.

## GithubApi.SetCustomLabelsRunnerOrg



Set custom labels for a self-hosted runner in an organization.

**Parameters**

-   **custom\_labels** (`array[string]`, required) An array of custom label names to assign to the runner. Pass an empty array to remove all labels.
-   **organization\_name** (`string`, required) The name of the organization. This is not case sensitive.
-   **runner\_identifier** (`integer`, required) Unique identifier of the self-hosted runner to set custom labels.

## GithubApi.DeleteCustomRunnerLabel



Remove a custom label from a self-hosted runner in an organization.

**Parameters**

-   **custom\_label\_name** (`string`, required) The name of the custom label to remove from the self-hosted runner.
-   **organization\_name** (`string`, required) The case-insensitive name of the organization.
-   **runner\_identifier** (`integer`, required) Unique identifier of the self-hosted runner. Must be an integer.

## GithubApi.ListOrganizationSecrets



Retrieve all organization secrets without values.

**Parameters**

-   **organization\_name** (`string`, required) The GitHub organization name to list secrets for. This name is not case-sensitive.
-   **page\_number** (`integer`, optional) Page number of the results to fetch for pagination purposes.
-   **results\_per\_page** (`integer`, optional) Specify the number of secrets to list per page, with a maximum of 100.

## GithubApi.GetOrganizationPublicKey



Retrieve the public key for GitHub organization secrets encryption.

**Parameters**

-   **organization\_name** (`string`, required) The GitHub organization name. This is not case sensitive.

## GithubApi.DeleteGithubOrgSecret



Deletes a secret from a GitHub organization.

**Parameters**

-   **organization\_name** (`string`, required) The GitHub organization name, not case sensitive.
-   **secret\_name** (`string`, required) The name of the secret to be deleted from the GitHub organization. Ensure the name is correct and case insensitive.

## GithubApi.GetGithubOrgSecret



Retrieve details of a GitHub organization secret.

**Parameters**

-   **organization\_name** (`string`, required) The GitHub organization name. This name is not case sensitive.
-   **secret\_name** (`string`, required) The name of the secret within the GitHub organization. It identifies which secret’s details to retrieve.

## GithubApi.CreateOrUpdateOrgSecret



Create or update an organization’s secret on GitHub.

**Parameters**

-   **organization\_name** (`string`, required) The name of the GitHub organization. It is not case sensitive.
-   **repository\_visibility** (`string`, required) Specifies which type of organization repositories have access to the organization secret. Choices are ‘all’, ‘private’, or ‘selected’.
-   **secret\_name** (`string`, required) The name of the secret. It’s used to identify the secret within the organization.
-   **encrypted\_secret\_value** (`string`, optional) The secret’s encrypted value using LibSodium and a GitHub org public key.
-   **encryption\_key\_id** (`string`, optional) The ID of the public key used to encrypt the secret. This must match the key used during encryption.
-   **repository\_ids\_for\_secret\_access** (`array[integer]`, optional) Array of repository ids allowed access to the secret. Provide only when `visibility` is `selected`.

## GithubApi.ListReposWithOrgSecret



Retrieve repositories with access to a specific organization secret.

**Parameters**

-   **organization\_name** (`string`, required) The name of the organization. It is not case sensitive.
-   **secret\_name** (`string`, required) The name of the secret for which to list selected repositories. Case insensitive.
-   **result\_page\_number** (`integer`, optional) Page number of the results to fetch for pagination.
-   **results\_per\_page** (`integer`, optional) The number of repositories to return per page, with a maximum of 100 allowed.

## GithubApi.UpdateOrgSecretRepos



Update repositories for an organization secret.

**Parameters**

-   **organization\_name** (`string`, required) The organization’s name for the secret. It is not case sensitive.
-   **repository\_ids\_for\_access** (`array[integer]`, required) An array of repository IDs allowed to access the organization secret when visibility is set to ‘selected’.
-   **secret\_name** (`string`, required) The name of the organization secret to update repositories for. This value is case-insensitive.

## GithubApi.RemoveRepoFromOrgSecret



Remove a repository from an organization’s secret access.

**Parameters**

-   **organization\_name** (`string`, required) The organization name. It is not case sensitive.
-   **repository\_id** (`integer`, required) The unique ID of the repository to be removed from the organization’s secret.
-   **secret\_name** (`string`, required) The name of the organization secret to remove the repository from.

## GithubApi.AddRepoToOrgSecret



Add a repository to an organization’s secret.

**Parameters**

-   **organization\_name** (`string`, required) The organization’s name. It is not case sensitive.
-   **repository\_id** (`integer`, required) The unique integer ID of the repository to be added to the organization secret. This ID specifies which repository you want to include.
-   **secret\_name** (`string`, required) The name of the organization secret to which the repository will be added.

## GithubApi.ListOrgVariables



Retrieve all variables for a GitHub organization.

**Parameters**

-   **organization\_name** (`string`, required) The name of the GitHub organization. It is not case sensitive.
-   **result\_page\_number** (`integer`, optional) Specify the page number of the organization variables to retrieve.
-   **results\_per\_page** (`integer`, optional) The number of results to display per page, up to a maximum of 30.

## GithubApi.CreateGithubOrgVariable



Create an organization variable for GitHub Actions workflows.

**Parameters**

-   **organization\_name** (`string`, required) The name of the organization. It is not case sensitive.
-   **repository\_access\_visibility** (`string`, required) Type of repositories in the organization that can access the variable: ‘all’, ‘private’, or ‘selected’.
-   **variable\_name** (`string`, required) The name of the organization variable to be created. This name will be used to reference the variable in workflows.
-   **variable\_value** (`string`, required) The value assigned to the organization variable in GitHub.
-   **repository\_ids\_with\_variable\_access** (`array[integer]`, optional) List of repository IDs allowed to access the organization variable. Required when ‘visibility’ is ‘selected’.

## GithubApi.DeleteGithubOrgVariable



Delete an organization’s variable on GitHub.

**Parameters**

-   **organization\_name** (`string`, required) The name of the GitHub organization. This is not case sensitive.
-   **variable\_name** (`string`, required) The name of the organization variable to delete. It should be a string matching the variable’s identifier.

## GithubApi.GetOrganizationVariable



Retrieve a specific variable from a GitHub organization.

**Parameters**

-   **organization\_name** (`string`, required) The GitHub organization name. This value is not case sensitive.
-   **variable\_name** (`string`, required) The exact name of the specific variable to retrieve from the organization.

## GithubApi.UpdateGithubOrgActionVariable



Update an organization variable in GitHub Actions.

**Parameters**

-   **organization\_name** (`string`, required) The GitHub organization’s name. This name is not case sensitive.
-   **repository\_ids\_for\_selected\_visibility** (`array[integer]`, optional) An array of repository IDs that can access the organization variable. Only provide when `visibility` is set to `selected`.
-   **repository\_visibility\_type** (`string`, optional) Specifies which repositories in the organization can access the variable. Options: `all`, `private`, `selected`.
-   **var\_name** (`string`, optional) Specify the name of the GitHub organization variable to update.
-   **variable\_name** (`string`, optional) The name of the organization variable to update. This is case-insensitive.
-   **variable\_value** (`string`, optional) The new value to assign to the organization variable. It must be a string.

## GithubApi.ListReposWithOrgVariableAccess



Retrieve repos accessing an organization’s variable.

**Parameters**

-   **organization\_name** (`string`, required) The name of the organization. It is not case sensitive.
-   **variable\_name** (`string`, required) The name of the organization variable to check for repository access.
-   **result\_page\_number** (`integer`, optional) The page number of repository results to retrieve. Use this to navigate through results.
-   **results\_per\_page** (`integer`, optional) Specify the number of results per page, with a maximum of 100.

## GithubApi.SetOrgVariableRepos



Replace repositories for an organization’s variable.

**Parameters**

-   **organization\_name** (`string`, required) The name of the organization. It is not case sensitive.
-   **repository\_ids\_for\_access** (`array[integer]`, required) An array of integers representing the repository IDs that can access the organization variable. Ensure the IDs are valid and accessible.
-   **variable\_name** (`string`, required) The name of the organization variable to be updated.

## GithubApi.RemoveRepoFromOrgVariable



Remove a repository from a GitHub organization variable.

**Parameters**

-   **organization\_name** (`string`, required) The name of the GitHub organization. This is not case sensitive.
-   **repository\_id** (`integer`, required) The ID of the repository to be removed from the organization variable. This should be an integer value identifying the repository.
-   **variable\_name** (`string`, required) The name of the organization variable to remove the repository from.

## GithubApi.AddRepoToOrgVariable



Add a repository to an organization’s selected variables.

**Parameters**

-   **organization\_name** (`string`, required) The name of the organization. This is not case sensitive.
-   **repository\_id** (`integer`, required) The integer ID of the repository to be added to the organization variable. This is a required field.
-   **variable\_name** (`string`, required) The name of the organization variable to which the repository will be added.

## GithubApi.RemoveOrgAnnouncementBanner



Remove the announcement banner for a GitHub organization.

**Parameters**

-   **organization\_name** (`string`, required) The GitHub organization’s name. This is not case sensitive.

## GithubApi.GetOrgAnnouncementBanner



Retrieve the announcement banner for a specific organization.

**Parameters**

-   **organization\_name** (`string`, required) The name of the organization. It is not case sensitive.

## GithubApi.SetOrgAnnouncementBanner



Sets the announcement banner for a GitHub organization.

**Parameters**

-   **announcement\_text** (`string`, required) The announcement text formatted in GitHub Flavored Markdown. See GitHub’s basic writing syntax for details.
-   **organization\_name** (`string`, required) The name of the GitHub organization. The name is not case sensitive.
-   **announcement\_expiry\_time** (`string`, optional) The expiry time for the announcement, in ISO 8601 format. Use `null` or empty for no expiry.

## GithubApi.GetOrgAuditLog



Retrieve the audit log for a GitHub organization.

**Parameters**

-   **organization\_name** (`string`, required) The name of the GitHub organization. It is not case sensitive.
-   **event\_order** (`string`, optional) Specify the order of audit log events. Use ‘desc’ for newest first or ‘asc’ for oldest first. Default is ‘desc’.
-   **event\_types\_to\_include** (`string`, optional) Specify the event types to include: ‘web’ for web events, ‘git’ for Git events, or ‘all’ for both. Default is ‘web’.
-   **results\_page\_number** (`integer`, optional) Specify the page number of results to fetch. Useful for navigating through paginated audit log entries.
-   **results\_per\_page** (`integer`, optional) Defines the number of audit log events returned per page, with a maximum of 100.
-   **search\_events\_after\_cursor** (`string`, optional) Cursor for searching events after a specific point, as given in the Link header.
-   **search\_events\_before\_cursor** (`string`, optional) A cursor to search for events before this point. Use to limit results to events occurring before a specific reference.
-   **search\_phrase** (`string`, optional) A string to filter audit log events based on specific criteria. This can help in retrieving older events. Refer to the GitHub documentation for more details on searching the audit log.

## GithubApi.ListOrgCodeScanningAlerts



Retrieve code scanning alerts for an organization’s repositories.

**Parameters**

-   **organization\_name** (`string`, required) The name of the organization. This field is not case sensitive.
-   **alert\_severity** (`string`, optional) Specifies the severity of code scanning alerts to be returned. Acceptable values include ‘critical’, ‘high’, ‘medium’, ‘low’, ‘warning’, ‘note’, and ‘error’.
-   **alert\_state** (`string`, optional) Filter code scanning alerts by their state: ‘open’, ‘closed’, ‘dismissed’, or ‘fixed’.
-   **code\_scanning\_tool\_guid** (`string`, optional) The GUID of a specific code scanning tool. Use this to filter alerts by the tool. Must not use with `tool_name`.
-   **cursor\_before** (`string`, optional) A cursor used to fetch results occurring before this point in the data timeline.
-   **filter\_by\_tool\_name** (`string`, optional) Specify the name of a code scanning tool to filter results. Only alerts from this tool will be listed. Ensure not to use `tool_guid` if this is specified.
-   **results\_after\_cursor** (`string`, optional) A cursor indicating the point after which to retrieve results. Used for pagination.
-   **results\_page\_number** (`integer`, optional) The page number of the results to fetch from the list of code scanning alerts.
-   **results\_per\_page** (`integer`, optional) The number of results per page, with a maximum limit of 100.
-   **sort\_direction** (`string`, optional) Specifies the sort order of the results. Use ‘asc’ for ascending or ‘desc’ for descending.
-   **sort\_results\_by** (`string`, optional) Specifies the property by which to sort the results. Options are ‘created’ or ‘updated’.

## GithubApi.ListDependabotAlertsForOrganization



Lists Dependabot alerts for an organization.

**Parameters**

-   **organization\_name** (`string`, required) The organization name for which to list Dependabot alerts. This name is not case sensitive.
-   **alert\_severity\_filter** (`string`, optional) Comma-separated severities to filter alerts. Options: `low`, `medium`, `high`, `critical`.
-   **alert\_states** (`string`, optional) Comma-separated list of alert states to filter by. Options: `dismissed`, `fixed`, `open`.
-   **deprecated\_first\_results\_page\_size** (`integer`, optional) **Deprecated**. Use `per_page` with `after` instead. Specifies the number of results per page, up to 100, starting from the first matching result. Avoid using with `last`.
-   **deprecated\_last\_results\_per\_page** (`integer`, optional) **Deprecated**. Use this to specify the number of results per page (max 100) from the last matching result. Cannot be used with ‘first’.
-   **ecosystem\_list** (`string`, optional) Comma-separated ecosystems to filter alerts. Options: composer, go, maven, npm, nuget, pip, pub, rubygems, rust.
-   **package\_names** (`string`, optional) A comma-separated list of package names. Only alerts for these specified packages will be returned.
-   **paginate\_after\_cursor** (`string`, optional) A cursor indicating the point to continue the listing from, based on the Link header.
-   **results\_before\_cursor** (`string`, optional) A cursor indicating to search for Dependabot alerts before this position.
-   **results\_per\_page** (`integer`, optional) Specifies the number of Dependabot alerts to return per page, with a maximum of 100.
-   **sort\_by\_property** (`string`, optional) Sort results by `created` (alert creation) or `updated` (state change).
-   **sort\_direction** (`string`, optional) The order to sort the results, either ascending (‘asc’) or descending (‘desc’).
-   **vulnerable\_dependency\_scope** (`string`, optional) Specify the scope of the vulnerable dependency as either ‘development’ or ‘runtime’. Only alerts with this scope will be returned.

## GithubApi.ListGithubOrgSecrets



Retrieve Dependabot organization secrets from GitHub.

**Parameters**

-   **organization\_name** (`string`, required) The GitHub organization name. It is not case sensitive.
-   **results\_page\_number** (`integer`, optional) Page number to fetch results from in the paginated list of organization secrets.
-   **results\_per\_page** (`integer`, optional) The number of secrets to list per page, with a maximum of 100.

## GithubApi.GetOrgPublicKey



Retrieve the public key for encrypting GitHub Dependabot secrets.

**Parameters**

-   **organization\_name** (`string`, required) The GitHub organization name, not case sensitive.

## GithubApi.RemoveGithubOrgSecret



Delete a secret from a GitHub organization.

**Parameters**

-   **organization\_name** (`string`, required) The name of the GitHub organization. This is not case sensitive.
-   **secret\_name\_to\_delete** (`string`, required) The name of the secret to delete from the GitHub organization.

## GithubApi.GetOrgSecretInfo



Retrieve details of an organization’s secret without revealing the encrypted value.

**Parameters**

-   **organization\_name** (`string`, required) The name of the GitHub organization. It is not case sensitive.
-   **organization\_secret\_name** (`string`, required) The name of the secret for the organization. It is required to identify the specific secret without revealing its encrypted value. This name is not case sensitive.

## GithubApi.UpdateGithubOrgSecret



Create or update a GitHub organization secret.

**Parameters**

-   **organization\_name** (`string`, required) The name of the GitHub organization, not case sensitive.
-   **repository\_access\_type** (`string`, required) Determines which organization repositories can access the secret: ‘all’, ‘private’, or ‘selected’ (which requires specifying `selected_repository_ids`).
-   **secret\_name** (`string`, required) The name of the secret to create or update. This should be a unique identifier for the secret within the organization.
-   **encrypted\_secret\_value** (`string`, optional) The secret value encrypted using LibSodium with the organization public key.
-   **encryption\_key\_id** (`string`, optional) The ID of the key used to encrypt the organization secret, required for security verification.
-   **selected\_repository\_ids\_to\_include** (`array[string]`, optional) Array of repository IDs allowed to access the secret. Used when visibility is set to ‘selected’.

## GithubApi.ListSelectedRepositoriesForSecret



Retrieve repositories with selected access for an org secret.

**Parameters**

-   **organization\_name** (`string`, required) The name of the GitHub organization. This is not case sensitive. Required to identify the organization whose secret’s repository access is being queried.
-   **secret\_name** (`string`, required) The name of the secret for which you wish to list selected repositories. It is case insensitive.
-   **results\_page\_number** (`integer`, optional) The page number of the results to fetch, used for pagination.
-   **results\_per\_page** (`integer`, optional) Number of results per page, up to a maximum of 100.

## GithubApi.SetReposForOrgSecret



Update selected repos for an organization’s Dependabot secret.

**Parameters**

-   **organization\_name** (`string`, required) The name of the GitHub organization. It is not case sensitive.
-   **secret\_name** (`string`, required) The name of the organization secret to update the repository access for. This should match the name of an existing Dependabot secret.
-   **selected\_repository\_ids** (`array[integer]`, required) List of repository IDs that can access the org secret. Use only when visibility is ‘selected’.

## GithubApi.DeleteRepoFromOrgSecret



Remove a repository from a GitHub organization secret.

**Parameters**

-   **organization\_name** (`string`, required) The name of the GitHub organization. It is not case sensitive.
-   **repository\_id** (`integer`, required) The unique identifier of the repository to be removed from the organization secret.
-   **secret\_name** (`string`, required) The name of the GitHub organization secret to remove the repository from.

## GithubApi.AddRepositoryToSecret



Add a repository to a GitHub organization secret.

**Parameters**

-   **organization\_name** (`string`, required) The name of the GitHub organization. It is not case sensitive.
-   **repository\_id\_for\_org\_secret** (`integer`, required) The ID of the repository to be added to the organization secret. This ID should be an integer.
-   **secret\_name** (`string`, required) The name of the organization secret to which a repository will be added. This is case-insensitive.

## GithubApi.ListPublicOrgEvents



List public events for a GitHub organization.

**Parameters**

-   **organization\_name** (`string`, required) The name of the GitHub organization. It is not case sensitive.
-   **results\_page\_number** (`integer`, optional) Page number of the results to fetch. Determines which set of results to return.
-   **results\_per\_page** (`integer`, optional) The number of results to display per page, with a maximum of 100.

## GithubApi.GetGithubExternalGroupInfo



Retrieve information about a GitHub external group’s usage.

**Parameters**

-   **group\_id** (`integer`, required) The unique identifier of the group. Must be an integer.
-   **organization\_name** (`string`, required) The name of the GitHub organization. The name is not case sensitive.

## GithubApi.ListExternalGroupsForOrg



Retrieve external groups available in a GitHub organization.

**Parameters**

-   **organization\_name** (`string`, required) The name of the GitHub organization. It is not case sensitive.
-   **group\_name\_filter** (`string`, optional) Filter results to include only groups with names containing this text.
-   **pagination\_token** (`integer`, optional) Token to specify the starting point for the next set of results.
-   **results\_per\_page** (`integer`, optional) Specify the number of results per page, with a maximum value of 100.

## GithubApi.ListOrganizationWebhooks



Retrieve the webhooks for a specific organization on GitHub.

**Parameters**

-   **organization\_name** (`string`, required) The GitHub organization name. This parameter is case insensitive.
-   **result\_page\_number** (`integer`, optional) The specific page number of results to retrieve from the list of organization webhooks.
-   **results\_per\_page** (`integer`, optional) The number of webhook results to display per page, with a maximum of 100.

## GithubApi.CreateGithubOrgWebhook



Create a webhook for a GitHub organization.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_name** (`string`, optional) The name of the GitHub organization. This value is not case sensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## GithubApi.DeleteOrgWebhook



Delete a webhook from a GitHub organization.

**Parameters**

-   **organization\_name** (`string`, required) The name of the GitHub organization. It is case insensitive.
-   **webhook\_identifier** (`integer`, required) The unique identifier of the webhook to be deleted. It should be provided as an integer.

## GithubApi.GetOrgWebhookDetails



Retrieve details of a specific organization webhook.

**Parameters**

-   **organization\_name** (`string`, required) The name of the GitHub organization, not case sensitive.
-   **webhook\_id** (`integer`, required) The unique identifier for the organization’s webhook. This is an integer value used to specify which webhook details to retrieve.

## GithubApi.UpdateGithubOrgWebhook



Update a webhook configured in a GitHub organization.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_name** (`string`, optional) The name of the GitHub organization; not case sensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **webhook\_identifier** (`integer`, optional) The unique identifier of the webhook to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## GithubApi.GetOrgWebhookConfiguration



Retrieve webhook configuration for a GitHub organization.

**Parameters**

-   **organization\_name** (`string`, required) The non-case-sensitive name of the GitHub organization.
-   **webhook\_hook\_id** (`integer`, required) The unique identifier of the organization’s webhook, provided as an integer.

## GithubApi.UpdateOrgWebhookConfig



Update webhook configuration for a GitHub organization.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_name** (`string`, optional) The name of the GitHub organization to update. Case insensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **webhook\_identifier** (`integer`, optional) The unique identifier of the webhook to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## GithubApi.GetWebhookEventDeliveries



Retrieve webhook deliveries for an organization.

**Parameters**

-   **organization\_name** (`string`, required) The name of the GitHub organization. It is not case sensitive.
-   **webhook\_hook\_id** (`integer`, required) The unique identifier of the webhook in the organization.
-   **include\_redeliveries** (`boolean`, optional) Indicate whether to include repeated webhook deliveries in the results. Set to true to include.
-   **pagination\_start\_cursor** (`string`, optional) A cursor to indicate the starting delivery for fetching the page of deliveries. Useful for pagination purposes.
-   **results\_per\_page** (`integer`, optional) Specifies the number of webhook deliveries to be returned per page (maximum 100).

## GithubApi.GetGithubWebhookDelivery



Retrieve a webhook delivery for a GitHub organization.

**Parameters**

-   **hook\_identifier** (`integer`, required) The unique identifier of the webhook hook. This is an integer value used to specify which webhook’s delivery details to retrieve for the organization.
-   **organization\_name** (`string`, required) The name of the GitHub organization. It is not case sensitive.
-   **webhook\_delivery\_id** (`integer`, required) The unique identifier of the specific delivery to be retrieved. This should be an integer.

## GithubApi.RedeliverWebhookDelivery



Redeliver an organization’s webhook delivery attempt.

**Parameters**

-   **organization\_name** (`string`, required) The name of the organization. This is not case sensitive.
-   **webhook\_delivery\_id** (`integer`, required) The unique identifier of the webhook delivery to be redelivered.
-   **webhook\_hook\_id** (`integer`, required) The unique identifier of the webhook hook. Provide an integer value.

## GithubApi.SendGithubHookPing



Triggers a ping event on a GitHub organization webhook.

**Parameters**

-   **organization\_name** (`string`, required) The name of the GitHub organization. It is not case sensitive.
-   **webhook\_hook\_id** (`integer`, required) The unique integer ID of the GitHub organization webhook to ping.

## GithubApi.GetGithubOrgInstallationInfo



Retrieve GitHub organization’s installation information.

**Parameters**

-   **organization\_name** (`string`, required) The GitHub organization name. It is not case-sensitive.

## GithubApi.OrganizationAppInstallations



Retrieve GitHub App installations for an organization.

**Parameters**

-   **organization\_name** (`string`, required) The name of the GitHub organization. It is not case sensitive.
-   **page\_number\_to\_fetch** (`integer`, optional) Page number of the results to fetch. Used for pagination in retrieving GitHub App installations.
-   **results\_per\_page** (`integer`, optional) The number of GitHub App installations to return per page, with a maximum of 100.

## GithubApi.ListOrganizationIssuesForUser



Retrieve issues and pull requests for a user in an organization.

**Parameters**

-   **organization\_name** (`string`, required) The name of the GitHub organization. It is not case sensitive.
-   **issue\_filter** (`string`, optional) Specifies the type of issues to return: ‘assigned’, ‘created’, ‘mentioned’, ‘subscribed’, ‘all’, or ‘repos’.
-   **issue\_labels** (`string`, optional) Comma-separated list of label names to filter issues. Example: `bug,ui,@high`.
-   **issues\_state** (`string`, optional) Specify the state of issues to return: ‘open’, ‘closed’, or ‘all’.
-   **result\_page\_number** (`integer`, optional) Page number of results to fetch, used for pagination. Starts from 1.
-   **results\_per\_page** (`integer`, optional) The number of results to display per page (maximum 100).
-   **sort\_criteria** (`string`, optional) Defines the attribute to sort the issues by. Options are ‘created’, ‘updated’, or ‘comments’.
-   **sort\_direction** (`string`, optional) The direction to sort the results by. Accepted values are ‘asc’ for ascending and ‘desc’ for descending.
-   **updated\_since** (`string`, optional) Filter to show notifications updated after this timestamp in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.

## GithubApi.ListOrgMembers



Retrieve members of a GitHub organization.

**Parameters**

-   **organization\_name** (`string`, required) The name of the GitHub organization to list members from. It is not case sensitive.
-   **filter\_members** (`string`, optional) Filter the list of members. Use ‘2fa\_disabled’ to list members without two-factor authentication.
-   **member\_role\_filter** (`string`, optional) Filter members by their role in the organization (‘all’, ‘admin’, ‘member’).
-   **page\_number** (`integer`, optional) Page number of the results to fetch. Use this to navigate through paginated results.
-   **results\_per\_page** (`integer`, optional) Number of results per page, with a maximum of 100.

## GithubApi.RemoveOrganizationMember



Remove a user from an organization’s access list.

**Parameters**

-   **github\_user\_handle** (`string`, required) The GitHub user’s handle to be removed from the organization.
-   **organization\_name** (`string`, required) The name of the GitHub organization. It is not case sensitive.

## GithubApi.CheckUserMembershipInOrg



Checks if a user is a member of a GitHub organization.

**Parameters**

-   **github\_user\_handle** (`string`, required) The username or handle for the GitHub user account being checked for organization membership.
-   **organization\_name** (`string`, required) The case-insensitive name of the GitHub organization to check membership against.

## GithubApi.RemoveOrgMember



Remove a user’s membership from a GitHub organization.

**Parameters**

-   **github\_username** (`string`, required) The GitHub username to remove from the organization; it is not case-sensitive.
-   **organization\_name** (`string`, required) The case-insensitive name of the GitHub organization.

## GithubApi.GetUserOrgMembershipStatus



Get a user’s membership status in an organization.

**Parameters**

-   **github\_user\_handle** (`string`, required) The handle for the GitHub user account to check membership status.
-   **organization\_name** (`string`, required) The GitHub organization name. It is not case sensitive.

## GithubApi.UpdateOrgMembership



Manage user membership for a GitHub organization.

**Parameters**

-   **github\_user\_handle** (`string`, required) The handle for the GitHub user account to be added or updated in the organization.
-   **organization\_name** (`string`, required) The name of the GitHub organization. It is not case sensitive.
-   **user\_role\_in\_organization** (`string`, optional) Specify the user’s role in the organization. Options are ‘admin’ for organization owner, or ‘member’ for non-owner.

## GithubApi.ListRecentGithubMigrations



Retrieve the latest GitHub migrations for an organization.

**Parameters**

-   **organization\_name** (`string`, required) The GitHub organization name. This value is not case sensitive. Use to specify which organization’s migrations to list.
-   **exclude\_attributes** (`array[string]`, optional) A list of attributes to exclude from the API response to enhance performance.
-   **results\_page\_number** (`integer`, optional) Page number to fetch specific results from the list of migrations.
-   **results\_per\_page** (`integer`, optional) The number of results to display per page, with a maximum value of 100.

## GithubApi.StartOrgMigration



Initiates a migration archive for a GitHub organization.

**Parameters**

-   **organization\_name** (`string`, required) The name of the GitHub organization. The name is not case sensitive.
-   **repositories\_to\_migrate** (`array[string]`, required) A list of repository names to be included in the migration process.
-   **exclude\_attachments** (`boolean`, optional) Set to true to exclude attachments from the migration, reducing archive file size.
-   **exclude\_git\_data** (`boolean`, optional) Set to true to exclude repository git data from the migration, reducing archive size. Useful for metadata-only migrations.
-   **exclude\_items** (`array[string]`, optional) Specify related items to exclude from the response for performance optimization, e.g., \[“repositories”\].
-   **exclude\_metadata** (`boolean`, optional) Set to true to exclude metadata, including only git source. Useful for reducing file complexity.
-   **exclude\_owner\_projects** (`boolean`, optional) Indicate whether projects owned by the organization or users should be excluded from the migration.
-   **exclude\_releases** (`boolean`, optional) Set to true to exclude releases from the migration archive, reducing file size.
-   **lock\_repositories** (`boolean`, optional) Set to true to lock repositories during migration, preventing changes.
-   **only\_include\_org\_metadata** (`boolean`, optional) Specify whether only organization metadata is included, keeping the repositories array empty and ignoring other flags.

## GithubApi.CheckOrgMigrationStatus



Fetches the status of an organization’s migration.

**Parameters**

-   **migration\_id** (`integer`, required) The unique identifier of the migration. Expected as an integer.
-   **organization\_name** (`string`, required) The name of the organization, not case sensitive, for which to fetch migration status.
-   **exclude\_attributes** (`array[string]`, optional) List of attribute names to exclude from the API response for improved performance.

## GithubApi.DeleteGithubOrgMigrationArchive



Delete a previous GitHub organization migration archive.

**Parameters**

-   **migration\_identifier** (`integer`, required) The unique identifier of the migration archive to delete.
-   **organization\_name** (`string`, required) The GitHub organization name. The name is not case sensitive.

## GithubApi.FetchOrgMigrationArchiveUrl



Fetches the URL to download an organization’s migration archive.

**Parameters**

-   **migration\_identifier** (`integer`, required) The unique identifier for the specific migration. This should be an integer value.
-   **organization\_name** (`string`, required) The name of the organization. This value is not case sensitive.

## GithubApi.UnlockGithubRepoForOrgMigration



Unlock a locked repository after migration for an organization.

**Parameters**

-   **migration\_unique\_identifier** (`integer`, required) The unique identifier for the migration process.
-   **organization\_name** (`string`, required) The GitHub organization name, which is not case sensitive.
-   **repository\_name** (`string`, required) The name of the repository to be unlocked. This is required and should match the exact repository name used during the migration. Case sensitivity does not matter.

## GithubApi.ListReposForOrgMigration



List all repositories for an organization’s migration.

**Parameters**

-   **migration\_unique\_identifier** (`integer`, required) The unique identifier for the organization migration in GitHub.
-   **organization\_name** (`string`, required) The name of the organization. This name is not case sensitive and identifies the GitHub organization for which the migration repositories will be listed.
-   **results\_page\_number** (`integer`, optional) Page number of the results to fetch, used for pagination.
-   **results\_per\_page** (`integer`, optional) Number of results per page, with a maximum of 100.

## GithubApi.ListOrgOutsideCollaborators



Retrieve outside collaborators for a GitHub organization.

**Parameters**

-   **organization\_name** (`string`, required) The GitHub organization name, not case sensitive.
-   **filter\_outside\_collaborators** (`string`, optional) Specify ‘2fa\_disabled’ to filter for collaborators without two-factor authentication, or ‘all’ for all collaborators.
-   **result\_page\_number** (`integer`, optional) Specify the page number to fetch results from the list of outside collaborators.
-   **results\_per\_page** (`integer`, optional) Specify the number of results to display per page, with a maximum of 100.

## GithubApi.RemoveOrgOutsideCollaborator



Remove a user from all organization repositories.

**Parameters**

-   **github\_user\_handle** (`string`, required) The GitHub user account handle to remove from the organization’s repositories.
-   **organization\_name** (`string`, required) The name of the organization from which to remove the user. It is not case sensitive.

## GithubApi.ConvertMemberToOutsideCollaborator



Convert GitHub org member to outside collaborator.

**Parameters**

-   **github\_user\_handle** (`string`, required) The GitHub user handle to be converted to an outside collaborator.
-   **organization\_name** (`string`, required) The name of the GitHub organization. It is not case sensitive.
-   **perform\_asynchronously** (`boolean`, optional) Set to true to perform the request asynchronously, queuing the job with a 202 status code.

## GithubApi.ListOrgPreReceiveHooks



Retrieve pre-receive hooks for a GitHub organization.

**Parameters**

-   **organization\_name** (`string`, required) The name of the GitHub organization. It is not case-sensitive.
-   **page\_number** (`integer`, optional) Page number of the results to fetch. Use this to navigate through paginated results.
-   **results\_per\_page** (`integer`, optional) The number of results to return per page. The maximum allowed is 100.
-   **sort\_direction** (`string`, optional) The direction to sort the results by. Accepts ‘asc’ or ‘desc’.
-   **sort\_order** (`string`, optional) Specify the sort order for the response: options are ‘created’, ‘updated’, or ‘name’.

## GithubApi.RemoveOrgPreReceiveHook



Removes pre-receive hook enforcement overrides for an organization.

**Parameters**

-   **organization\_name** (`string`, required) The name of the organization where the pre-receive hook enforcement override will be removed. It is not case sensitive.
-   **pre\_receive\_hook\_id** (`integer`, required) The unique identifier for the pre-receive hook to be removed.

## GithubApi.GetOrgPreReceiveHook



Retrieve a pre-receive hook for an organization.

**Parameters**

-   **organization\_name** (`string`, required) The name of the GitHub organization; case insensitive.
-   **pre\_receive\_hook\_unique\_id** (`integer`, required) The unique identifier of the pre-receive hook. Must be an integer.

## GithubApi.UpdatePreReceiveHookEnforcement



Update pre-receive hook enforcement for a GitHub organization.

**Parameters**

-   **organization\_name** (`string`, required) The name of the GitHub organization. It’s not case sensitive.
-   **pre\_receive\_hook\_id** (`integer`, required) The unique identifier of the pre-receive hook to be updated.
-   **allow\_downstream\_configuration** (`boolean`, optional) Boolean indicating whether repositories can override the enforcement settings of the pre-receive hook.
-   **enforcement\_state** (`string`, optional) Specify the state of enforcement for the hook on this repository. Possible values may include ‘enabled’, ‘disabled’, etc.

## GithubApi.ListOrganizationProjects



Retrieve a list of projects for a given organization on GitHub.

**Parameters**

-   **organization\_name** (`string`, required) The case-insensitive name of the GitHub organization for which to list projects.
-   **project\_state** (`string`, optional) Specifies the state of projects to return: ‘open’, ‘closed’, or ‘all’.
-   **results\_page\_number** (`integer`, optional) Specifies the page number of the results to fetch for organization projects.
-   **results\_per\_page** (`integer`, optional) The number of project results to display per page, with a maximum of 100.

## GithubApi.CreateOrgProjectGithub



Create a project board for a GitHub organization.

**Parameters**

-   **organization\_name** (`string`, required) The GitHub organization name. Not case sensitive.
-   **project\_name** (`string`, required) The name of the project board to be created. It will serve as the identifier for the project within the organization. Must be a string.
-   **project\_description** (`string`, optional) The description of the project to be created for the GitHub organization. This should be a clear and concise explanation of the project’s purpose.

## GithubApi.ListPublicOrgMembers



Retrieve public members of a GitHub organization.

**Parameters**

-   **organization\_name** (`string`, required) The name of the GitHub organization. It is not case sensitive.
-   **results\_page\_number** (`integer`, optional) The page number of the results to fetch, used for pagination.
-   **results\_per\_page** (`integer`, optional) Specify the number of results to return per page, up to a maximum of 100.

## GithubApi.RemovePublicOrgMembership



Remove public organization membership for the user.

**Parameters**

-   **github\_user\_handle** (`string`, required) The GitHub user account handle for which to remove public organization membership.
-   **organization\_name** (`string`, required) The name of the GitHub organization. This name is not case sensitive.

## GithubApi.CheckGithubOrgMembership



Checks if a user is a public member of a GitHub organization.

**Parameters**

-   **github\_user\_handle** (`string`, required) The GitHub user account handle to check for public organization membership.
-   **organization\_name** (`string`, required) The case-insensitive name of the GitHub organization.

## GithubApi.SetOwnGithubPublicMembership



Publicize your GitHub organization membership.

**Parameters**

-   **github\_user\_handle** (`string`, required) The GitHub user account handle to publicize the membership for.
-   **organization\_name** (`string`, required) The GitHub organization name to make membership public. Case insensitive.

## GithubApi.ListOrganizationRepositories



Retrieve repositories for a specific organization on GitHub.

**Parameters**

-   **organization\_name** (`string`, required) The name of the GitHub organization. It is not case sensitive.
-   **page\_number** (`integer`, optional) Page number of the results to fetch, used for pagination.
-   **repository\_type** (`string`, optional) Specify the type of repositories to return, such as ‘all’, ‘public’, ‘private’, etc. Note: ‘internal’ is unsupported with an installation access token.
-   **results\_per\_page** (`integer`, optional) The number of repository results to display per page, with a maximum limit of 100.
-   **sort\_order** (`string`, optional) Specifies the sorting order of the results. Use ‘asc’ for ascending or ‘desc’ for descending.
-   **sort\_property** (`string`, optional) Specifies the property to sort the repository results by, such as created, updated, pushed, or full\_name.

## GithubApi.CreateGithubOrganizationRepo



Create a new repository in a GitHub organization.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_name** (`string`, optional) The name of the GitHub organization where the repository will be created. The name is not case sensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## GithubApi.ListOrgSecretScanningAlerts



Retrieve secret scanning alerts for an organization’s repositories.

**Parameters**

-   **organization\_name** (`string`, required) The name of the organization for which secret scanning alerts are to be listed. This value is not case-sensitive.
-   **alert\_resolution\_filter** (`string`, optional) A comma-separated list of resolutions to filter secret scanning alerts. Valid options are `false_positive`, `wont_fix`, `revoked`, `pattern_edited`, `pattern_deleted`, and `used_in_tests`.
-   **alert\_state** (`string`, optional) Specify ‘open’ or ‘resolved’ to filter secret scanning alerts by their state.
-   **results\_page\_number** (`integer`, optional) The page number of results to retrieve, starting from 1. Determines which subset of results will be returned.
-   **results\_per\_page** (`integer`, optional) The number of results to return per page, with a maximum of 100.
-   **search\_after\_cursor** (`string`, optional) A cursor for paginating results, provided in the Link header. Use an empty string for the initial request to receive a starting cursor.
-   **search\_before\_cursor** (`string`, optional) A cursor indicating that the query should only look for events before this point. Use an empty string to get an initial cursor.
-   **secret\_types** (`string`, optional) Comma-separated list of secret types to return. Defaults to all secret types. Refer to the GitHub documentation for details on secret types.
-   **sort\_by\_property** (`string`, optional) Choose ‘created’ to sort by alert creation date or ‘updated’ to sort by last update or resolution.
-   **sort\_direction** (`string`, optional) Specifies the order to sort the results: ascending (‘asc’) or descending (‘desc’).

## GithubApi.ListSecurityManagerTeams



Retrieve teams that are security managers in an organization.

**Parameters**

-   **organization\_name** (`string`, required) The GitHub organization’s name. It is not case sensitive.

## GithubApi.RemoveSecurityManagerRole



Remove security manager role from a team in an organization.

**Parameters**

-   **organization\_name** (`string`, required) The organization’s name. It is not case sensitive.
-   **team\_identifier** (`string`, required) The unique slug identifying the team by name. This is required to specify the team whose security manager role is to be removed.

## GithubApi.AddSecurityManagerTeam



Add a team as a security manager for an organization.

**Parameters**

-   **organization\_name** (`string`, required) The name of the organization. This is not case sensitive. Required for adding a team as a security manager.
-   **team\_slug** (`string`, required) The slug of the team name to be added as a security manager. This is case-insensitive.

## GithubApi.GetAdvancedSecurityCommitters



Retrieve GitHub Advanced Security committers for an organization.

**Parameters**

-   **organization\_name** (`string`, required) The organization name for which to retrieve security committers. It is not case sensitive.
-   **results\_page\_number** (`integer`, optional) The page number of the results to fetch. Useful for paginating through large sets of results.
-   **results\_per\_page** (`integer`, optional) Specify the number of results per page, with a maximum limit of 100.

## GithubApi.ListOrganizationTeams



Retrieve teams visible to the user in a GitHub organization.

**Parameters**

-   **organization\_name** (`string`, required) The GitHub organization name. It is not case sensitive.
-   **results\_page\_number** (`integer`, optional) Page number of the results to fetch from the list of teams.
-   **results\_per\_page** (`integer`, optional) Specify the number of results per page, up to a maximum of 100.

## GithubApi.CreateGithubTeam



Create a new team in a GitHub organization.

**Parameters**

-   **organization\_name** (`string`, required) The case-insensitive name of the GitHub organization where the team will be created.
-   **team\_name** (`string`, required) The name of the team to be created. It should be a string.
-   **deprecated\_repository\_permission** (`string`, optional) Specifies the permission for new repositories, though it is deprecated. Options are `pull` or `push`.
-   **ldap\_distinguished\_name** (`string`, optional) The distinguished name (DN) of the LDAP entry to map to a team. Ensure LDAP synchronization is enabled.
-   **parent\_team\_id** (`integer`, optional) The numerical ID of the team to assign as the parent for the new team.
-   **repository\_names\_to\_add\_to\_team** (`array[string]`, optional) Array of full repository names (e.g., “organization-name/repository-name”) to associate with the team.
-   **team\_description** (`string`, optional) A brief description of the team being created. This helps specify the team’s purpose or role within the organization.
-   **team\_maintainers\_github\_ids** (`array[string]`, optional) List of GitHub IDs for organization members who will become team maintainers.
-   **team\_privacy\_level** (`string`, optional) Specifies if the team is ‘secret’ or ‘closed’. Defaults: ‘secret’ for non-nested teams, ‘closed’ for parent/child teams.

## GithubApi.DeleteTeamInOrg



Delete a team in a GitHub organization.

**Parameters**

-   **organization\_name** (`string`, required) The case-insensitive name of the GitHub organization containing the team to be deleted.
-   **team\_slug** (`string`, required) The unique slug identifier of the team within the organization to be deleted.

## GithubApi.GetTeamBySlug



Retrieve team details using organization and team slug.

**Parameters**

-   **organization\_name** (`string`, required) The name of the GitHub organization. It is not case sensitive.
-   **team\_slug** (`string`, required) The slug of the team name. This is a URL-friendly version, typically all lowercase with special characters and spaces replaced by hyphens.

## GithubApi.UpdateGithubTeam



Update a team’s details within a GitHub organization.

**Parameters**

-   **organization\_name** (`string`, required) The name of the organization. This is not case sensitive.
-   **team\_slug** (`string`, required) The slug of the team name, used to uniquely identify the team within the organization.
-   **parent\_team\_id** (`integer`, optional) The ID of the team to set as the parent team for nesting purposes.
-   **team\_description** (`string`, optional) The description of the team. Provide a concise summary or details for team identification.
-   **team\_name** (`string`, optional) The new name for the GitHub team within the organization.
-   **team\_privacy\_level** (`string`, optional) Specifies the team’s privacy level. Options: ‘secret’ (visible only to owners and team members) or ‘closed’ (visible to all organization members). Parent teams cannot be ‘secret’.
-   **team\_repository\_permission** (`string`, optional) **Deprecated**. Specifies the default permission for newly added repositories. Options: ‘pull’, ‘push’, ‘admin’.

## GithubApi.ListTeamDiscussions



Retrieve all discussions from a team’s page in an organization.

**Parameters**

-   **organization\_name** (`string`, required) The case-insensitive name of the GitHub organization.
-   **team\_slug** (`string`, required) The slug of the team’s name to identify which team’s discussions to retrieve in the organization.
-   **pinned\_discussions\_only** (`string`, optional) Filter to retrieve only pinned discussions. Use ‘true’ for pinned only, ‘false’ for all.
-   **results\_page\_number** (`integer`, optional) The specific page number of discussion results to retrieve.
-   **results\_per\_page** (`integer`, optional) The number of results per page, with a maximum of 100.
-   **sort\_direction** (`string`, optional) Specify the sorting direction for the results. Use ‘asc’ for ascending or ‘desc’ for descending order.

## GithubApi.CreateTeamDiscussionGithub



Create a discussion post on a GitHub team’s page.

**Parameters**

-   **discussion\_body\_text** (`string`, required) The content of the discussion post. Provide detailed text for the discussion body.
-   **discussion\_post\_title** (`string`, required) The title for the discussion post on the team’s page.
-   **organization\_name** (`string`, required) The organization name, not case-sensitive, for which the team discussion will be created.
-   **team\_slug** (`string`, required) The unique slug of the team name. This is required to specify which team’s page the discussion will be posted on.
-   **create\_private\_post** (`boolean`, optional) Set to `true` to create a private post visible only to team members and maintainers, or `false` for a public post visible to all organization members.

## GithubApi.DeleteTeamDiscussion



Delete a discussion from a team’s page on GitHub.

**Parameters**

-   **discussion\_number** (`integer`, required) The unique number identifying the discussion to be deleted.
-   **organization\_name** (`string`, required) The organization name on GitHub. It is not case sensitive.
-   **team\_slug** (`string`, required) The slug identifier of the team name on GitHub. This is required to specify which team’s discussion is to be deleted.

## GithubApi.GetTeamDiscussion



Retrieve a specific team discussion from GitHub.

**Parameters**

-   **discussion\_identifier\_number** (`integer`, required) The unique number identifying the discussion to retrieve.
-   **organization\_name** (`string`, required) The name of the GitHub organization. This is not case sensitive.
-   **team\_slug** (`string`, required) The slug of the GitHub team name, used to specify the team.

## GithubApi.UpdateTeamDiscussion



Edits the title and body of a team discussion post.

**Parameters**

-   **discussion\_id** (`integer`, required) The unique number identifying the discussion to be updated.
-   **organization\_name** (`string`, required) The name of the organization. It is not case sensitive and uniquely identifies the organization on GitHub.
-   **team\_slug** (`string`, required) Provide the slug (URL-friendly version) of the team’s name. Case sensitivity is ignored.
-   **discussion\_body\_text** (`string`, optional) The updated body text of the discussion post. Provide the new content you want for the discussion.
-   **discussion\_title** (`string`, optional) The new title for the discussion post. Only the provided title will be updated.

## GithubApi.ListTeamDiscussionComments



Retrieve comments from a team discussion in an organization.

**Parameters**

-   **discussion\_id** (`integer`, required) The unique number identifying the discussion to retrieve comments from.
-   **organization\_name** (`string`, required) The name of the organization. It is not case sensitive.
-   **team\_slug** (`string`, required) The identifier for the team, typically a URL-friendly version of the team name.
-   **results\_page\_number** (`integer`, optional) The specific page of discussion comments to retrieve, starting with 1 for the first page.
-   **results\_per\_page** (`integer`, optional) The number of discussion comments to return per page, maximum of 100.
-   **sort\_direction** (`string`, optional) Specify the sort order for results: ‘asc’ for ascending or ‘desc’ for descending.

## GithubApi.CreateTeamDiscussionComment



Create a new comment on a team discussion in an organization.

**Parameters**

-   **comment\_body\_text** (`string`, required) The text content of the comment to be added to the team discussion.
-   **discussion\_number** (`integer`, required) The number that identifies the specific discussion within the team to which you want to add a comment.
-   **organization\_name** (`string`, required) The name of the organization where the team discussion is located. This is not case sensitive.
-   **team\_slug** (`string`, required) The slug identifier for the team name within the organization, used to specify which team’s discussion to comment on.

## GithubApi.DeleteTeamDiscussionComment



Deletes a comment on a team discussion in an organization.

**Parameters**

-   **comment\_identifier** (`integer`, required) The unique number identifying the comment to be deleted.
-   **discussion\_identifier** (`integer`, required) The unique number identifying the discussion for the comment to be deleted.
-   **organization\_name** (`string`, required) The name of the organization. It is not case sensitive.
-   **team\_slug** (`string`, required) The slug of the team name in the organization. Case insensitive.

## GithubApi.GetGithubTeamDiscussionComment



Retrieve a specific comment from a GitHub team discussion.

**Parameters**

-   **comment\_identifier** (`integer`, required) The specific number identifying the comment in the discussion.
-   **discussion\_id** (`integer`, required) The unique number identifying the specific discussion on GitHub.
-   **organization\_name** (`string`, required) The name of the GitHub organization. This is not case sensitive.
-   **team\_slug** (`string`, required) The slug (URL-friendly version) of the GitHub team’s name. It is not case sensitive.

## GithubApi.UpdateGithubDiscussionComment



Updates a GitHub discussion comment’s text.

**Parameters**

-   **comment\_identifier** (`integer`, required) A unique integer identifying the comment to be updated in the discussion.
-   **discussion\_comment\_body** (`string`, required) The new text for the discussion comment to be updated.
-   **discussion\_id** (`integer`, required) The unique number identifying the GitHub discussion to update the comment in.
-   **organization\_name** (`string`, required) The name of the GitHub organization. It is not case-sensitive.
-   **team\_slug** (`string`, required) The slug of the team name. This is used to specify the team in the organization.

## GithubApi.ListTeamDiscussionCommentReactions



Retrieve reactions for a team discussion comment in an organization.

**Parameters**

-   **comment\_identifier** (`integer`, required) The unique number identifying the discussion comment.
-   **discussion\_number** (`integer`, required) The number identifying the specific discussion in the team.
-   **organization\_name** (`string`, required) The name of the GitHub organization. It is not case sensitive.
-   **team\_slug** (`string`, required) The slug of the team name, case-insensitive, used to identify the team in the organization.
-   **filter\_by\_reaction\_type** (`string`, optional) Specify a single reaction type to filter results. Options: ‘+1’, ‘-1’, ‘laugh’, ‘confused’, ‘heart’, ‘hooray’, ‘rocket’, ‘eyes’. Omit to list all reactions.
-   **results\_page\_number** (`integer`, optional) The page number of the comments reactions to fetch from the results.
-   **results\_per\_page** (`integer`, optional) The number of results per page to return (maximum 100).

## GithubApi.AddReactionToTeamDiscussionComment



Add a reaction to a GitHub team discussion comment.

**Parameters**

-   **comment\_identifier** (`integer`, required) The unique number identifying the team discussion comment to react to.
-   **discussion\_identifier** (`integer`, required) The number identifying the discussion within the team.
-   **organization\_name** (`string`, required) The name of the organization. This value is not case sensitive.
-   **reaction\_type** (`string`, required) The type of reaction emoji to add to the team discussion comment. Accepted values are: ‘+1’, ‘-1’, ‘laugh’, ‘confused’, ‘heart’, ‘hooray’, ‘rocket’, ‘eyes’.
-   **team\_slug** (`string`, required) The slug of the team name within the organization, used to identify the team.

## GithubApi.DeleteTeamDiscussionCommentReaction



Delete a reaction from a team discussion comment on GitHub.

**Parameters**

-   **comment\_identifier** (`integer`, required) The number that identifies the comment in the team discussion.
-   **discussion\_identifier** (`integer`, required) The number identifying the specific discussion in the team.
-   **organization\_name** (`string`, required) The organization name on GitHub. It is not case sensitive.
-   **reaction\_id** (`integer`, required) The unique identifier of the reaction to be deleted. This should be an integer value.
-   **team\_slug** (`string`, required) The slug of the team name, used to identify the team in the organization.

## GithubApi.GetTeamDiscussionReactions



Retrieve reactions to a specific team discussion in a GitHub organization.

**Parameters**

-   **discussion\_identifier** (`integer`, required) The number identifying the team discussion to retrieve reactions for.
-   **organization\_name** (`string`, required) The name of the GitHub organization. It is not case sensitive.
-   **team\_slug** (`string`, required) The slug of the team’s name in the specified GitHub organization. It identifies the team for which reactions are being retrieved.
-   **reaction\_type** (`string`, optional) Specify the type of reaction to retrieve (e.g., ‘+1’, ‘-1’, ‘laugh’). Omit to retrieve all reactions.
-   **results\_page\_number** (`integer`, optional) The page number of the results to fetch. Use to navigate through paginated responses.
-   **results\_per\_page** (`integer`, optional) Specify the number of results per page, maximum of 100.

## GithubApi.AddReactionToGithubTeamDiscussion



Add a reaction to a GitHub team discussion.

**Parameters**

-   **discussion\_id** (`integer`, required) The unique identifier number for the team discussion.
-   **organization\_name** (`string`, required) The name of the GitHub organization. It is not case sensitive.
-   **reaction\_type** (`string`, required) The reaction type to add to the team discussion. Valid options include: ‘+1’, ‘-1’, ‘laugh’, ‘confused’, ‘heart’, ‘hooray’, ‘rocket’, ‘eyes’.
-   **team\_slug** (`string`, required) The URL-friendly version of the team’s name.

## GithubApi.DeleteGithubTeamDiscussionReaction



Delete a reaction from a GitHub team discussion.

**Parameters**

-   **discussion\_number** (`integer`, required) The number that identifies the GitHub team discussion to delete a reaction from. Must be an integer.
-   **organization\_name** (`string`, required) The organization name. This value is not case sensitive and identifies the GitHub organization.
-   **reaction\_unique\_identifier** (`integer`, required) The unique identifier for the specific reaction to be deleted from the discussion.
-   **team\_slug** (`string`, required) The slug (URL-friendly version) of the team name in GitHub, used to identify a team within an organization.

## GithubApi.UnlinkExternalIdpGroupFromTeam



Unlink an external IdP group from a GitHub team.

**Parameters**

-   **organization\_name** (`string`, required) The name of the organization. This is not case sensitive.
-   **team\_slug** (`string`, required) The slug of the team’s name. It identifies the team within the organization.

## GithubApi.ListLinkedExternalGroups



Retrieve connections between a GitHub team and external groups.

**Parameters**

-   **organization\_name** (`string`, required) The name of the GitHub organization. It is not case sensitive.
-   **team\_slug** (`string`, required) Slug of the team name to identify the specific GitHub team.

## GithubApi.LinkExternalGroupToTeam



Link an external IDP group to a GitHub team.

**Parameters**

-   **external\_group\_id** (`integer`, required) The ID of the external group to be linked with the GitHub team.
-   **organization\_name** (`string`, required) The GitHub organization name. This value is not case sensitive.
-   **team\_slug** (`string`, required) The slug of the team name to connect with an external group. It is case insensitive.

## GithubApi.ListTeamMembersInOrg



Retrieve team members in a specified organization.

**Parameters**

-   **organization\_name** (`string`, required) The name of the GitHub organization. It is not case sensitive.
-   **team\_slug** (`string`, required) The slug of the team name within the organization. Used to identify the specific team.
-   **filter\_by\_role** (`string`, optional) Filters team members by their role: ‘member’, ‘maintainer’, or ‘all’.
-   **result\_page\_number** (`integer`, optional) The page number of results to fetch. Use this for pagination.
-   **results\_per\_page** (`integer`, optional) Specifies the number of team members to return per page, up to a maximum of 100.

## GithubApi.RemoveTeamMembership



Remove a user’s membership from a GitHub team.

**Parameters**

-   **github\_user\_handle** (`string`, required) The handle for the GitHub user account to be removed from the team.
-   **organization\_name** (`string`, required) The GitHub organization name. This input is not case sensitive.
-   **team\_slug** (`string`, required) The slug identifier for the GitHub team’s name. This is used to specify the team you want to modify.

## GithubApi.GetUserTeamMembershipInOrg



Retrieve a user’s team membership status in an organization.

**Parameters**

-   **github\_username** (`string`, required) The GitHub username of the account whose team membership status is being retrieved. This username is not case sensitive.
-   **organization\_name** (`string`, required) The case-insensitive name of the GitHub organization.
-   **team\_slug** (`string`, required) The slug of the team name. It uniquely identifies the team within the organization. Case insensitive.

## GithubApi.AddUpdateGithubTeamMembership



Add or update a user’s membership in a GitHub team.

**Parameters**

-   **github\_team\_slug** (`string`, required) The slug identifier of the team’s name within the organization. This is not case-sensitive.
-   **github\_user\_handle** (`string`, required) The GitHub user account handle to add or update in the organization team.
-   **organization\_name** (`string`, required) The name of the GitHub organization (case insensitive) to which the team belongs.
-   **user\_team\_role** (`string`, optional) Specifies the role for the user in the team, either ‘member’ or ‘maintainer’.

## GithubApi.ListTeamProjectsInOrg



Retrieve a list of projects for a team in an organization.

**Parameters**

-   **organization\_name** (`string`, required) The case-insensitive name of the organization for which to list team projects.
-   **team\_slug** (`string`, required) The team’s unique slug identifier. This is used to specify which team’s projects to list.
-   **results\_page\_number** (`integer`, optional) The page number for the results you wish to retrieve. Used for paginating through results.
-   **results\_per\_page** (`integer`, optional) The number of results to display per page, with a maximum limit of 100.

## GithubApi.RemoveProjectFromTeam



Remove a project from a team in a GitHub organization.

**Parameters**

-   **organization\_name** (`string`, required) The name of the GitHub organization. This value is not case sensitive.
-   **project\_unique\_identifier** (`integer`, required) The unique identifier of the project to be removed from the team.
-   **team\_slug** (`string`, required) The slug identifier for the team name in the organization. Case insensitive.

## GithubApi.CheckTeamProjectPermissions



Check team’s permissions for an organization’s project.

**Parameters**

-   **organization\_name** (`string`, required) The name of the organization. It is not case sensitive.
-   **project\_unique\_identifier** (`integer`, required) The unique integer ID of the project to check permissions for.
-   **team\_slug** (`string`, required) The slug of the team name used to identify the team within the organization. It is not case sensitive.

## GithubApi.AddOrUpdateGithubTeamProjectPermissions



Add or update a GitHub team’s permissions on an organization project.

**Parameters**

-   **organization\_name** (`string`, required) The GitHub organization name. This is not case sensitive.
-   **project\_id** (`integer`, required) The unique identifier of the project to update or add to the team.
-   **team\_slug** (`string`, required) The slug representation of the GitHub team’s name within the organization. This is used to identify the team in the request.
-   **project\_permission\_level** (`string`, optional) Permission level to grant the team for the project. Options: ‘read’, ‘write’, ‘admin’. Default uses the team’s current level.

## GithubApi.ListTeamRepositories



Retrieve a list of repositories for a specified team.

**Parameters**

-   **organization\_name** (`string`, required) The organization name. Case insensitivity applies.
-   **team\_slug** (`string`, required) The slug of the team name (case-insensitive).
-   **results\_page\_number** (`integer`, optional) The page number of the results to fetch for pagination.
-   **results\_per\_page** (`integer`, optional) Number of results to return per page, with a maximum of 100.

## GithubApi.RemoveRepoFromTeam



Remove a repository from a GitHub team within an organization.

**Parameters**

-   **organization\_name** (`string`, required) The name of the GitHub organization. It is not case-sensitive.
-   **repository\_name** (`string`, required) The name of the repository to remove from the team. It is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. This is not case sensitive.
-   **team\_slug** (`string`, required) The slug of the team name to identify which team’s repository link should be removed. This is required and case insensitive.

## GithubApi.CheckTeamRepoPermissions



Check a team’s permissions for a specific repository within an organization.

**Parameters**

-   **organization\_name** (`string`, required) The organization name on GitHub. It is not case sensitive. Required to check team permissions.
-   **repository\_name** (`string`, required) The name of the repository for which you want to check permissions. The name is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository, not case sensitive.
-   **team\_slug** (`string`, required) The slug of the team name. Used to identify the team whose permissions you are checking.

## GithubApi.UpdateTeamRepoPermissions



Manage team repository access and permissions.

**Parameters**

-   **organization\_name** (`string`, required) The name of the organization. This parameter is not case sensitive.
-   **repository\_name** (`string`, required) The name of the repository to be managed. The name is not case sensitive.
-   **repository\_owner\_account** (`string`, required) The account owner of the repository. The name is not case sensitive.
-   **team\_slug** (`string`, required) The slug identifier of the team within the organization. It is not case-sensitive.
-   **team\_repo\_permission** (`string`, optional) Permission to grant the team on this repository. Options: `pull`, `triage`, `push`, `maintain`, `admin`, or a custom role name defined by the organization. Defaults to team’s current permission if unspecified.

## GithubApi.ListChildTeams



Retrieves child teams of a specified team in an organization.

**Parameters**

-   **organization\_name** (`string`, required) The organization’s name. It’s case insensitive and used to specify which organization’s team structure to query.
-   **team\_identifier\_slug** (`string`, required) The slug of the team name for which to list child teams. This is used to uniquely identify the team within the organization.
-   **page\_number** (`integer`, optional) The page number to retrieve in the list of child teams. Use to paginate the results.
-   **results\_per\_page** (`integer`, optional) Specify the number of results to return per page, with a maximum of 100.

## GithubApi.ManageOrgSecurityFeatures



Toggle security features for all repositories in an organization.

**Parameters**

-   **organization\_name** (`string`, required) The name of the GitHub organization. This value is not case sensitive.
-   **security\_feature** (`string`, required) Specifies the security feature to enable or disable. Options include: dependency\_graph, dependabot\_alerts, dependabot\_security\_updates, advanced\_security, secret\_scanning, secret\_scanning\_push\_protection.
-   **security\_feature\_action** (`string`, required) Specifies whether to enable or disable the security feature for all organization repositories. Use ‘enable\_all’ to activate and ‘disable\_all’ to deactivate.

## GithubApi.DeleteProjectCard



Delete a project card from GitHub projects.

**Parameters**

-   **card\_id** (`integer`, required) The unique identifier of the project card to delete.

## GithubApi.GetProjectCard



Retrieve details of a specific project card in GitHub.

**Parameters**

-   **project\_card\_id** (`integer`, required) The unique ID of the GitHub project card to retrieve details for.

## GithubApi.UpdateGithubProjectCard



Update an existing project card on GitHub.

**Parameters**

-   **card\_identifier** (`integer`, required) The unique identifier of the GitHub project card to be updated.
-   **card\_note** (`string`, optional) The text note associated with the project card. It can include details or remarks.
-   **set\_card\_archived\_status** (`boolean`, optional) Specify true to archive the card or false to unarchive it.

## GithubApi.MoveProjectCard



Move a project card to a different position within the same column or to a different column.

**Parameters**

-   **card\_identifier** (`integer`, required) The unique identifier for the card to be moved within the project.
-   **card\_position** (`string`, required) Specify where to place the card within the column: ‘top’, ‘bottom’, or ‘after:`<card_id>`’.
-   **destination\_column\_id** (`integer`, optional) The unique identifier of the column to which the card should be moved. If not provided, the card is moved within its current column.

## GithubApi.DeleteGithubProjectColumn



Deletes a specific project column on GitHub.

**Parameters**

-   **project\_column\_id** (`integer`, required) The unique integer identifier of the GitHub project column to be deleted.

## GithubApi.GetGithubProjectColumn



Retrieve details of a GitHub project column using its ID.

**Parameters**

-   **project\_column\_id** (`integer`, required) The unique identifier for the project column to retrieve.

## GithubApi.UpdateProjectColumn



Update an existing project column on GitHub.

**Parameters**

-   **column\_identifier** (`integer`, required) The unique identifier of the project column to update.
-   **project\_column\_name** (`string`, required) The new name for the project column on GitHub.

## GithubApi.ListProjectCards



Retrieve project cards for a specific column on GitHub projects.

**Parameters**

-   **column\_identifier** (`integer`, required) The unique identifier for the specified project column, used to list its cards.
-   **filter\_by\_archived\_state** (`string`, optional) Filters project cards by their archived state. Options are ‘all’, ‘archived’, or ‘not\_archived’.
-   **results\_page\_number** (`integer`, optional) Specifies the page number of the project cards results to fetch. Useful for navigating through paginated results.
-   **results\_per\_page** (`integer`, optional) Number of project cards returned per page, up to a maximum of 100.

## GithubApi.CreateGithubProjectCard



Create a project card in a specified GitHub column.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **column\_identifier** (`integer`, optional) The unique identifier of the GitHub project column where the card will be added. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## GithubApi.MoveGithubProjectColumn



Move a column within a GitHub project board.

**Parameters**

-   **column\_position** (`string`, required) Specifies where to move the project column. Use `first`, `last`, or `after:<column_id>` to position after a specific column.
-   **project\_column\_id** (`integer`, required) The unique identifier of the column to be moved in the GitHub project.

## GithubApi.DeleteProjectBoard



Deletes a specified project board on GitHub.

**Parameters**

-   **project\_identifier** (`integer`, required) The unique identifier of the GitHub project board to be deleted.

## GithubApi.GetGithubProjectById



Retrieve details of a GitHub project by its ID.

**Parameters**

-   **project\_id** (`integer`, required) The unique identifier for the GitHub project to retrieve.

## GithubApi.UpdateProjectBoard



Update a project board’s information on GitHub.

**Parameters**

-   **project\_unique\_identifier** (`integer`, required) The unique identifier of the GitHub project board to update.
-   **is\_private** (`boolean`, optional) A boolean indicating if the project is private. Set to true for private (not visible to everyone) and false for public.
-   **organization\_permission\_level** (`string`, optional) Sets the baseline permission for all organization members on this project. Options are ‘read’, ‘write’, ‘admin’, or ‘none’.
-   **project\_description** (`string`, optional) A detailed description or content of the project board.
-   **project\_name** (`string`, optional) The new name for the project board. Must be a string.
-   **project\_state** (`string`, optional) Specify the state of the project; use ‘open’ or ‘closed’.

## GithubApi.ListProjectCollaborators



Retrieve collaborators for a GitHub organization project.

**Parameters**

-   **project\_id** (`integer`, required) The unique identifier for the GitHub organization project to retrieve collaborators for.
-   **collaborator\_affiliation\_filter** (`string`, optional) Specifies how to filter collaborators: `outside`, `direct`, or `all`.
-   **results\_page\_number** (`integer`, optional) The page number to retrieve from the list of collaborators.
-   **results\_per\_page** (`integer`, optional) Specify the number of results per page, with a maximum of 100.

## GithubApi.RemoveProjectCollaborator



Remove a collaborator from a GitHub organization project.

**Parameters**

-   **github\_user\_handle** (`string`, required) The GitHub user’s handle to be removed as a collaborator.
-   **project\_unique\_identifier** (`integer`, required) The unique numeric identifier of the GitHub organization project.

## GithubApi.AddProjectCollaborator



Add a collaborator to an organization project.

**Parameters**

-   **collaborator\_username** (`string`, required) The GitHub username of the collaborator to be added to the project.
-   **project\_id** (`integer`, required) The unique identifier of the project to which a collaborator is being added. This ID is required to specify the exact project for collaboration.
-   **collaborator\_permission\_level** (`string`, optional) The permission level to assign to the collaborator. Options are: ‘read’, ‘write’, or ‘admin’.

## GithubApi.GetUserProjectPermission



Retrieve a user’s permission level for an organization project.

**Parameters**

-   **github\_user\_handle** (`string`, required) The GitHub username of the user whose project permission level is being queried.
-   **project\_id** (`integer`, required) The unique identifier of the GitHub project for which to fetch the user’s permission.

## GithubApi.ListGithubProjectColumns



Retrieve columns of a specific GitHub project.

**Parameters**

-   **project\_identifier** (`integer`, required) The unique identifier of the GitHub project to list columns for.
-   **page\_number** (`integer`, optional) The specific page number of the results to fetch from the GitHub project columns list.
-   **results\_per\_page** (`integer`, optional) The number of results to display per page, with a maximum of 100.

## GithubApi.CreateProjectColumn



Create a new column in a GitHub project.

**Parameters**

-   **column\_name** (`string`, required) The name of the column to be created in the GitHub project.
-   **project\_id** (`integer`, required) The unique integer identifier for the GitHub project where the column will be created.

## GithubApi.GetGithubRateLimit



Retrieve current GitHub API rate limit status.

**Parameters**

This tool does not take any parameters.

## GithubApi.ListRepoRequiredWorkflows



Retrieve required workflows in a GitHub repository.

**Parameters**

-   **organization\_name** (`string`, required) The name of the organization. It is not case sensitive.
-   **repository\_name** (`string`, required) The name of the GitHub repository you want to query. This is not case sensitive.
-   **page\_number** (`integer`, optional) The specific page of workflow results to retrieve. Use this for pagination.
-   **results\_per\_page** (`integer`, optional) Specify the number of results to return per page, with a maximum of 100.

## GithubApi.GetGithubRepoRequiredWorkflow



Retrieve a specific required workflow from a GitHub repository.

**Parameters**

-   **organization\_name** (`string`, required) The name of the GitHub organization. It is not case sensitive.
-   **repository\_name** (`string`, required) The name of the GitHub repository. It is not case sensitive.
-   **required\_workflow\_id** (`integer`, required) The unique ID of the required workflow that has executed at least once in the repository.

## GithubApi.DeleteGithubRepository



Deletes a specified GitHub repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository you want to delete. This is not case sensitive.
-   **repository\_owner\_name** (`string`, required) The account owner of the repository; not case sensitive.

## GithubApi.GetGithubRepositoryDetails



Retrieve detailed information about a GitHub repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository. This is not case sensitive.
-   **repository\_owner** (`string`, required) Specify the account owner of the repository. This name is not case sensitive.

## GithubApi.UpdateGithubRepository



Update repository details on GitHub.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **repository\_owner** (`string`, optional) The account owner of the repository. The name is not case sensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **repository\_name** (`string`, optional) The name of the repository to update, not case sensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## GithubApi.ListGithubRepoArtifacts



Retrieve all artifacts for a GitHub repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository to retrieve artifacts from. This input is not case sensitive.
-   **repository\_owner** (`string`, required) The username or organization name of the repository owner. This is not case sensitive.
-   **filter\_artifacts\_by\_name** (`string`, optional) Filters artifacts by providing an exact match for the artifact name. Use a string to specify the artifact name.
-   **result\_page\_number** (`integer`, optional) Specify the page number of results to fetch for paginated artifact listings.
-   **results\_per\_page** (`integer`, optional) Specify the number of artifacts to return per page, with a maximum limit of 100.

## GithubApi.DeleteGithubArtifact



Deletes a specified GitHub artifact.

**Parameters**

-   **artifact\_unique\_identifier** (`integer`, required) The unique identifier of the artifact to be deleted. Must be an integer value.
-   **repository\_name** (`string`, required) The name of the GitHub repository where the artifact resides. The name is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository, case-insensitive.

## GithubApi.GetWorkflowArtifact



Retrieve a specific artifact from a GitHub workflow run.

**Parameters**

-   **artifact\_identifier** (`integer`, required) The unique identifier for the artifact to retrieve from a workflow run.
-   **repository\_name** (`string`, required) The name of the repository. This is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. Not case sensitive.

## GithubApi.GetGithubArtifactDownloadUrl



Retrieve a URL to download a GitHub artifact zip file.

**Parameters**

-   **archive\_format\_zip** (`string`, required) Specify the archive format as ‘zip’. This is required for the download link.
-   **artifact\_id** (`integer`, required) The unique identifier of the artifact to be downloaded.
-   **repository\_name** (`string`, required) The name of the GitHub repository (not case sensitive).
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.

## GithubApi.GetGithubActionsCacheUsage



Fetch GitHub Actions cache usage for a repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository. It is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. Case insensitive name.

## GithubApi.FetchGithubActionsCachePolicy



Retrieve the cache usage policy for GitHub Actions in a repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the repository. It is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.

## GithubApi.ConfigureGithubActionsCache



Set GitHub Actions cache usage policy for a repository.

**Parameters**

-   **repository\_cache\_size\_limit\_gb** (`integer`, required) Specify the size limit for all GitHub Actions caches in the repository, in gigabytes.
-   **repository\_name** (`string`, required) The name of the GitHub repository. This field is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. This is the GitHub username or organization name and is not case sensitive.

## GithubApi.RemoveActionsCacheKey



Delete GitHub Actions caches by key for a repository.

**Parameters**

-   **cache\_key** (`string`, required) The key used to identify and delete a specific GitHub Actions cache.
-   **repository\_name** (`string`, required) The name of the repository. The name is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. Not case sensitive.
-   **git\_reference\_for\_cache\_deletion** (`string`, optional) Specify the Git reference to restrict cache deletion. Use `refs/heads/<branch>` for branches or `refs/pull/<number>/merge` for pull requests.

## GithubApi.ListGithubActionsCaches



Retrieve the list of GitHub Actions caches for a repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the repository. The name is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. This value is not case sensitive.
-   **cache\_key\_or\_prefix** (`string`, optional) Explicit key or prefix to identify the cache. Use this to filter caches by specific keys or prefixes.
-   **git\_reference** (`string`, optional) Specify the Git reference for the results to list. Use `refs/heads/<branch>` for branches or `refs/pull/<number>/merge` for pull requests.
-   **results\_page\_number** (`integer`, optional) The page number of the results to fetch, used for pagination.
-   **results\_per\_page** (`integer`, optional) Specify the number of results to return per page, with a maximum of 100.
-   **sort\_by\_property** (`string`, optional) The property to sort results by. Options are ‘created\_at’, ‘last\_accessed\_at’, or ‘size\_in\_bytes’.
-   **sort\_direction** (`string`, optional) Specify ‘asc’ for ascending or ‘desc’ for descending order of results.

## GithubApi.DeleteGithubActionsCache



Delete a GitHub Actions cache by ID for a repository.

**Parameters**

-   **github\_actions\_cache\_id** (`integer`, required) The unique identifier for the GitHub Actions cache to be deleted.
-   **repository\_name** (`string`, required) The name of the repository. Not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.

## GithubApi.GetGithubWorkflowJob



Retrieve a specific job from a GitHub workflow run.

**Parameters**

-   **job\_identifier** (`integer`, required) Unique integer identifier of the workflow job to retrieve.
-   **repository\_name** (`string`, required) The name of the repository. The name is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. Case insensitive.

## GithubApi.DownloadGithubWorkflowJobLogs



Retrieve a URL to download GitHub workflow job logs.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository (case insensitive).
-   **repository\_owner** (`string`, required) The account owner of the GitHub repository. Provide the name in a non-case sensitive format.
-   **workflow\_job\_id** (`integer`, required) The unique identifier of the GitHub workflow job to download logs for.

## GithubApi.GithubRerunWorkflowJob



Re-run a job in a GitHub workflow.

**Parameters**

-   **job\_identifier** (`integer`, required) The unique integer identifier of the job to be re-run. This is required to specify which job in the workflow needs to be restarted.
-   **repository\_name** (`string`, required) The name of the repository. The name is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.
-   **enable\_debug\_logging** (`boolean`, optional) Set to true to enable debug logging for the re-run.

## GithubApi.GetOidcSubjectClaimTemplate



Retrieve the OIDC subject claim customization template for a repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository. It is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. This is not case sensitive.

## GithubApi.SetGithubOidcSubjectClaim



Customize OIDC subject claim for a GitHub repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository. This value is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. Not case sensitive.
-   **use\_default\_template** (`boolean`, required) Set to true to use the default template, which ignores `include_claim_keys`.
-   **claim\_keys\_to\_include** (`array[string]`, optional) Array of unique strings for claim keys, containing only alphanumeric characters and underscores.

## GithubApi.FetchGithubActionsPerms



Retrieve GitHub Actions permissions for a repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the repository. The name is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. This is not case sensitive.

## GithubApi.UpdateRepoActionsPermissions



Sets GitHub Actions permissions for a repository.

**Parameters**

-   **enable\_github\_actions** (`boolean`, required) Boolean flag indicating if GitHub Actions should be enabled on the repository. `True` enables, `False` disables.
-   **repository\_name** (`string`, required) The name of the repository. The name is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.
-   **actions\_permission\_policy** (`string`, optional) Defines the policy for actions allowed to run: ‘all’, ‘local\_only’, or ‘selected’.

## GithubApi.GetWorkflowAccessLevel



Determine external workflow access level for a repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the repository (case insensitive).
-   **repository\_owner** (`string`, required) The account owner of the repository. This is not case sensitive.

## GithubApi.SetWorkflowAccess



Set the access level for workflows in a repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the repository. This is not case sensitive.
-   **repository\_owner** (`string`, required) The GitHub username or organization name that owns the repository. This is not case sensitive.
-   **workflow\_access\_level** (`string`, required) Specifies access level for workflows outside the repository: ‘none’, ‘user’, or ‘organization’.

## GithubApi.GetAllowedActionsForRepo



Retrieve allowed GitHub Actions settings for a repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository. It is not case sensitive.
-   **repository\_owner** (`string`, required) The username or organization name of the repository owner. Case insensitive.

## GithubApi.SetGithubActionsAllowedInRepo



Set allowed GitHub Actions in a repository.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **repository\_owner** (`string`, optional) The account owner of the repository. The name is not case sensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **repository\_name** (`string`, optional) The name of the GitHub repository. This is not case sensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## GithubApi.GetDefaultGithubActionsPermissions



Retrieve default GitHub Actions workflow permissions for a repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the repository, which is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.

## GithubApi.ConfigureGithubTokenPermissions



Set default workflow permissions for a repository’s GitHub Actions.

**Parameters**

-   **repository\_name** (`string`, required) The name of the repository. The name is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. This is not case sensitive.
-   **default\_workflow\_permissions** (`string`, optional) Specify the default permissions (‘read’ or ‘write’) for the GITHUB\_TOKEN when running workflows.
-   **enable\_pull\_request\_approval** (`boolean`, optional) Set to true to allow GitHub Actions to approve pull requests. Enabling this may pose a security risk.

## GithubApi.ListRequiredWorkflowRuns



Retrieve all workflow runs for a required workflow.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository. Case sensitivity is ignored.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.
-   **required\_workflow\_id** (`integer`, required) The ID of the required workflow that has run at least once in a repository.
-   **branch\_name** (`string`, optional) Specify the branch name to filter workflow runs associated with it. Use the name of the branch from the `push`.
-   **check\_suite\_identifier** (`integer`, optional) Specify the Check Suite ID to filter workflow runs associated with this specific ID.
-   **exclude\_pull\_requests** (`boolean`, optional) If true, pull requests are omitted from the response.
-   **results\_page\_number** (`integer`, optional) The page number of the results to fetch, used for pagination of the workflow runs.
-   **results\_per\_page** (`integer`, optional) The number of workflow run results to display per page, with a maximum limit of 100.
-   **sha\_for\_head\_commit** (`string`, optional) Returns workflow runs associated with the specified head SHA (commit identifier).
-   **trigger\_event** (`string`, optional) Specify the event type that triggers the workflow run, such as `push`, `pull_request`, or `issue`.
-   **workflow\_actor\_username** (`string`, optional) Specify the username of the actor whose workflow runs you want to retrieve. Use the GitHub login for the user who initiated the push.
-   **workflow\_run\_status** (`string`, optional) Specify the workflow run status or conclusion to filter results. Options include ‘completed’, ‘in\_progress’, ‘success’, etc.
-   **workflow\_runs\_created\_date\_range** (`string`, optional) Specify the date-time range to filter workflow runs based on their creation date. Use GitHub’s date search syntax for formatting.

## GithubApi.ListSelfHostedRunners



Retrieve self-hosted runners for a GitHub repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository (case-insensitive) for which to list self-hosted runners.
-   **repository\_owner** (`string`, required) The account owner of the repository, not case sensitive.
-   **results\_page\_number** (`integer`, optional) Page number of the results to fetch for listing self-hosted runners.
-   **results\_per\_page** (`integer`, optional) The number of results to return per page, with a maximum of 100.

## GithubApi.ListRunnerAppsForRepo



Retrieve runner application binaries for a GitHub repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository. Case insensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository on GitHub. The name is not case sensitive.

## GithubApi.CreateRepoRegistrationToken



Obtain a registration token for GitHub repository actions.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository. It is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. Provide the GitHub username or organization name. It is not case sensitive.

## GithubApi.GenerateGithubRunnerRemoveToken



Generate a token to remove a GitHub self-hosted runner.

**Parameters**

-   **repository\_name** (`string`, required) The name of the repository. This should match exactly as it appears on GitHub but is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. This is not case sensitive.

## GithubApi.RemoveSelfHostedRunner



Removes a self-hosted runner from a GitHub repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository. This is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.
-   **runner\_unique\_identifier** (`integer`, required) Unique identifier of the self-hosted runner to be removed.

## GithubApi.RetrieveRunnerDetails



Retrieve information about a self-hosted runner in a GitHub repo.

**Parameters**

-   **repository\_name** (`string`, required) The name of the repository. This corresponds to the GitHub repository name and is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. This name is not case sensitive.
-   **runner\_identifier** (`integer`, required) Unique identifier of the self-hosted runner. Required to fetch specific runner details.

## GithubApi.RemoveCustomLabelsRunnerRepo



Remove all custom labels from a self-hosted runner in a repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the repository. It is not case-sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. Case insensitive.
-   **runner\_unique\_identifier** (`integer`, required) Unique identifier of the self-hosted runner to remove custom labels from.

## GithubApi.ListRunnerLabels



Retrieve all labels for a self-hosted runner in a GitHub repo.

**Parameters**

-   **repository\_name** (`string`, required) The name of the repository. This is not case sensitive.
-   **repository\_owner** (`string`, required) The GitHub account owner of the repository. Case insensitive.
-   **self\_hosted\_runner\_id** (`integer`, required) The unique integer identifier of the self-hosted runner in the repository.

## GithubApi.LabelRunnerForRepo



Add custom labels to a repository’s self-hosted runner.

**Parameters**

-   **custom\_labels\_to\_add** (`array[string]`, required) The names of the custom labels to add to the self-hosted runner. Provide as an array of strings.
-   **repository\_name** (`string`, required) The name of the GitHub repository. It is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. Case insensitive.
-   **runner\_id** (`integer`, required) Unique identifier for the self-hosted runner in the repository.

## GithubApi.SetRunnerLabels



Update custom labels for a self-hosted runner in a GitHub repo.

**Parameters**

-   **custom\_labels\_for\_runner** (`array[string]`, required) An array of custom labels to set for the self-hosted runner. Pass an empty array to clear all labels.
-   **repository\_name** (`string`, required) The name of the GitHub repository. This is not case-sensitive.
-   **repository\_owner** (`string`, required) The account owner of the GitHub repository. This name is not case sensitive.
-   **runner\_id** (`integer`, required) The unique integer identifier of the self-hosted runner to update labels for.

## GithubApi.RemoveRunnerLabel



Remove a custom label from a self-hosted runner in a repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the repository. It is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. This name is not case sensitive.
-   **runner\_custom\_label\_name** (`string`, required) The name of the custom label on the self-hosted runner to be removed.
-   **runner\_unique\_identifier** (`integer`, required) The unique ID number of the self-hosted runner to identify which runner to remove the label from.

## GithubApi.ListGithubWorkflowRuns



Retrieve all workflow runs for a GitHub repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository (case insensitive).
-   **repository\_owner** (`string`, required) The GitHub username or organization name that owns the repository. It is case-insensitive.
-   **actor\_username** (`string`, optional) Specify the username of the user whose workflow runs you want to retrieve. Use the login of the user who initiated the run.
-   **branch\_name** (`string`, optional) Specify the branch name to filter workflow runs associated with that branch.
-   **check\_suite\_id** (`integer`, optional) Returns workflow runs with the specified check suite ID.
-   **filter\_by\_head\_sha** (`string`, optional) Only returns workflow runs associated with the specified commit SHA (head\_sha).
-   **omit\_pull\_requests** (`boolean`, optional) If true, pull requests are excluded from the workflow runs response.
-   **results\_page\_number** (`integer`, optional) Page number of the results to fetch, used for paginating results.
-   **results\_per\_page** (`integer`, optional) The number of results to return per page, with a maximum limit of 100.
-   **triggering\_event** (`string`, optional) Specify the event that triggers the workflow run, such as ‘push’, ‘pull\_request’, or ‘issue’.
-   **workflow\_created\_date\_range** (`string`, optional) Specify a date-time range to filter workflow runs by creation date. Use GitHub’s specific date syntax for format.
-   **workflow\_run\_status** (`string`, optional) Specifies the desired status or conclusion of the workflow runs to retrieve, such as ‘success’, ‘in\_progress’, etc.

## GithubApi.DeleteGithubWorkflowRun



Delete a specific GitHub workflow run.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository. It is not case sensitive.
-   **repository\_owner** (`string`, required) The GitHub account owner of the repository. The name is not case sensitive.
-   **workflow\_run\_id** (`integer`, required) The unique identifier of the GitHub workflow run to be deleted. This should be an integer value.

## GithubApi.GetGithubWorkflowRun



Retrieve details of a specific GitHub workflow run.

**Parameters**

-   **repository\_name** (`string`, required) The name of the repository. It is not case sensitive and is used to identify the repo for the workflow run.
-   **repository\_owner** (`string`, required) The account owner of the repository, not case sensitive.
-   **workflow\_run\_id** (`integer`, required) The unique identifier of the GitHub workflow run. Must be an integer.
-   **omit\_pull\_requests** (`boolean`, optional) If true, omits pull requests from the response, resulting in an empty array.

## GithubApi.GetGithubActionsRunReviews



Retrieve reviews for a GitHub Actions run.

**Parameters**

-   **repository\_name** (`string`, required) The name of the repository. The input is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. Not case sensitive.
-   **workflow\_run\_id** (`integer`, required) The unique identifier of the GitHub Actions workflow run. This integer is required to fetch the reviews.

## GithubApi.ListWorkflowArtifacts



Retrieve artifacts from a GitHub workflow run.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository. It is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.
-   **workflow\_run\_id** (`integer`, required) The unique identifier of the specific workflow run to retrieve artifacts from.
-   **page\_number\_to\_fetch** (`integer`, optional) The page number of the artifacts results to retrieve.
-   **results\_per\_page** (`integer`, optional) Number of results to return per page, up to a maximum of 100.

## GithubApi.GetGithubWorkflowRunAttempt



Retrieve details of a specific GitHub workflow run attempt.

**Parameters**

-   **repository\_name** (`string`, required) The name of the repository, not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. This value is not case sensitive.
-   **workflow\_attempt\_number** (`integer`, required) The numeric identifier for the specific attempt of the workflow run to be retrieved.
-   **workflow\_run\_id** (`integer`, required) The unique identifier of the GitHub workflow run. This integer specifies the exact run to retrieve information for.
-   **omit\_pull\_requests** (`boolean`, optional) Set to true to omit pull requests from the response.

## GithubApi.ListWorkflowRunJobs



Retrieve jobs from a specific GitHub workflow run attempt.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository to fetch jobs from. This is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository, not case sensitive.
-   **workflow\_run\_attempt\_number** (`integer`, required) The attempt number of the specific workflow run to retrieve jobs for. This is typically used to distinguish between multiple attempts of the same run.
-   **workflow\_run\_id** (`integer`, required) The unique identifier of the workflow run to list jobs for.
-   **results\_page\_number** (`integer`, optional) Specify the page number of the results to fetch, used for pagination.
-   **results\_per\_page** (`integer`, optional) Specifies the number of job results to return per page, with a maximum of 100.

## GithubApi.GetWorkflowRunAttemptLogsUrl



Retrieve a URL to download workflow run attempt logs.

**Parameters**

-   **repository\_name** (`string`, required) The name of the repository. It is not case sensitive and identifies the repository for which to retrieve logs.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.
-   **workflow\_attempt\_number** (`integer`, required) The specific attempt number of the workflow run to fetch logs for.
-   **workflow\_run\_id** (`integer`, required) The unique identifier of the workflow run. Used to specify which workflow’s logs to download.

## GithubApi.CancelGithubWorkflowRun



Cancels a GitHub workflow run using its ID.

**Parameters**

-   **repository\_name** (`string`, required) The name of the repository. This is not case sensitive and should match the repository where the workflow run is located.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.
-   **workflow\_run\_id** (`integer`, required) The unique identifier of the GitHub workflow run to be canceled. This should be an integer value.

## GithubApi.ListGithubWorkflowJobs



Fetches jobs for a specific GitHub workflow run.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository. This is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. It is not case sensitive and identifies whose account owns the repository.
-   **workflow\_run\_id** (`integer`, required) The unique identifier of the GitHub workflow run to fetch jobs for.
-   **job\_filter\_by\_completion\_time** (`string`, optional) Filter jobs by their `completed_at` timestamp. Use ‘latest’ for the most recent execution or ‘all’ for all executions.
-   **results\_page\_number** (`integer`, optional) Page number for paginated results to fetch from the workflow jobs list.
-   **results\_per\_page** (`integer`, optional) Specify the number of job results to return per page, with a maximum of 100.

## GithubApi.DeleteGithubWorkflowRunLogs



Deletes all logs for a specified workflow run on GitHub.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository. It is not case-sensitive.
-   **repository\_owner\_name** (`string`, required) The account owner of the repository. This name is not case sensitive.
-   **workflow\_run\_id** (`integer`, required) The unique identifier of the workflow run to delete logs for.

## GithubApi.DownloadWorkflowRunLogs



Get a redirect URL to download workflow run log files.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository. This field is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. This is case-insensitive.
-   **workflow\_run\_id** (`integer`, required) The unique identifier of the workflow run to download logs for.

## GithubApi.GetPendingDeploymentsForRun



Retrieve pending deployments for a GitHub workflow run.

**Parameters**

-   **repository\_name** (`string`, required) The name of the repository. This name is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.
-   **workflow\_run\_id** (`integer`, required) The unique identifier of the workflow run to fetch pending deployments for.

## GithubApi.ApproveOrRejectPendingDeployments



Approve or reject pending deployments for a workflow run.

**Parameters**

-   **deployment\_review\_comment** (`string`, required) A comment to accompany the approval or rejection of the deployment review.
-   **deployment\_review\_state** (`string`, required) Specify ‘approved’ to approve or ‘rejected’ to reject deployments to the environments.
-   **environment\_ids** (`array[integer]`, required) List of environment IDs to approve or reject. Each ID must be an integer.
-   **repository\_name** (`string`, required) The name of the repository. This value is not case-sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.
-   **workflow\_run\_id** (`integer`, required) The unique identifier of the workflow run to be approved or rejected.

## GithubApi.RerunGithubWorkflow



Initiates the rerun of a specific GitHub workflow.

**Parameters**

-   **repository\_name** (`string`, required) The name of the repository. It is not case sensitive.
-   **repository\_owner** (`string`, required) The GitHub account owner of the repository. The name is not case sensitive.
-   **workflow\_run\_id** (`integer`, required) The unique identifier of the workflow run to be re-run.
-   **enable\_debug\_logging** (`boolean`, optional) Enable debug logging for the workflow re-run by setting to true.

## GithubApi.RerunFailedGithubWorkflowJobs



Re-run failed jobs in a GitHub workflow run.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository. It is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the GitHub repository. This is not case sensitive.
-   **workflow\_run\_id** (`integer`, required) The unique identifier of the GitHub workflow run to re-run failed jobs for.
-   **enable\_debug\_logging** (`boolean`, optional) Enable debug logging for the re-run of failed workflow jobs.

## GithubApi.ListRepoSecrets



Retrieve all repository secrets without values.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository. It is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. It is not case sensitive.
-   **results\_page\_number** (`integer`, optional) Specifies the page number of the secrets list to fetch.
-   **results\_per\_page** (`integer`, optional) Specify the number of results per page, with a maximum of 100.

## GithubApi.GetRepoPublicKey



Retrieve the public key for encrypting repository secrets.

**Parameters**

-   **repository\_name** (`string`, required) The name of the repository. This value is not case sensitive. Provide the repository name for which you want to retrieve the public key.
-   **repository\_owner** (`string`, required) The account owner of the repository. Enter a case-insensitive string specifying the owner’s account name.

## GithubApi.DeleteGithubRepoSecret



Deletes a secret from a GitHub repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the repository. It is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.
-   **secret\_name** (`string`, required) The specific name of the secret to delete from the repository.

## GithubApi.GetRepositorySecretInfo



Retrieve metadata for a specific GitHub repository secret.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository. This is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. Not case sensitive.
-   **secret\_name** (`string`, required) The name of the secret to retrieve metadata for.

## GithubApi.CreateOrUpdateGithubRepoSecret



Create or update a GitHub repository secret with an encrypted value.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository. It is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.
-   **secret\_name** (`string`, required) The name of the secret to create or update in the repository.
-   **encrypted\_secret\_value** (`string`, optional) The secret’s value encrypted with LibSodium using a repository’s public key.
-   **encryption\_key\_id** (`string`, optional) Provide the ID of the key used to encrypt the secret.

## GithubApi.ListGithubRepoVariables



Retrieve all variables for a specified GitHub repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository, case insensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.
-   **page\_number** (`integer`, optional) Page number to fetch in the list of repository variables. Use for paginating results.
-   **results\_per\_page** (`integer`, optional) Specify the number of results to return per page, with a maximum of 30.

## GithubApi.CreateGithubRepoVariable



Create a variable for a GitHub repository to use in Actions workflows.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository. This value is not case sensitive.
-   **repository\_owner** (`string`, required) The GitHub account owner of the repository. Case insensitive.
-   **variable\_name** (`string`, required) The name of the repository variable to create.
-   **variable\_value** (`string`, required) The content or data for the repository variable.

## GithubApi.DeleteGithubRepoVariable



Delete a repository variable on GitHub using its name.

**Parameters**

-   **repository\_name** (`string`, required) The name of the repository to delete the variable from. It is not case-sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.
-   **variable\_name** (`string`, required) The name of the variable to delete from the repository. It should match exactly as stored.

## GithubApi.GetGithubRepoVariable



Retrieve a specific variable from a GitHub repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository. The name is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.
-   **variable\_name** (`string`, required) The name of the variable to retrieve from the repository. This is case-sensitive and must match the variable’s exact name.

## GithubApi.UpdateGithubRepoVariable



Update a variable in a GitHub repository for actions workflows.

**Parameters**

-   **repository\_name** (`string`, required) The name of the repository. This is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. This name is not case sensitive.
-   **env\_variable\_name** (`string`, optional) The name of the variable to update in the GitHub repository.
-   **repository\_variable\_value** (`string`, optional) The new value for the specified repository variable.
-   **variable\_name** (`string`, optional) The name of the variable in the repository.

## GithubApi.ListGithubRepoWorkflows



Retrieve GitHub workflows in a repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the repository. This field is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the GitHub repository. Case insensitive.
-   **results\_page\_number** (`integer`, optional) The page number for pagination, used to fetch specific sets of results.
-   **results\_per\_page** (`integer`, optional) The number of workflow results to display per page, with a maximum limit of 100.

## GithubApi.ListGithubIssueAssignees



Retrieve available assignees for GitHub issues.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository, case insensitive.
-   **repository\_owner** (`string`, required) The owner of the repository. Input is not case sensitive.
-   **results\_page\_number** (`integer`, optional) Page number of the results to fetch. Use to paginate through results.
-   **results\_per\_page** (`integer`, optional) The number of results to display per page, with a maximum limit of 100.

## GithubApi.CheckUserAssignmentPermission



Check if a user can be assigned to a GitHub issue.

**Parameters**

-   **repository\_name** (`string`, required) The name of the repository. The name is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the GitHub repository. Input is not case sensitive.
-   **user\_assignee** (`string`, required) The username of the GitHub user to check for issue assignment permissions.

## GithubApi.GetRepoAutolinks



Retrieve autolinks for a specific GitHub repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the repository. It is case insensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. This name is not case sensitive.
-   **results\_page\_number** (`integer`, optional) Specify the page number to retrieve results from when fetching autolinks for a repository.

## GithubApi.CreateRepositoryAutolink



Create an autolink reference in a GitHub repository.

**Parameters**

-   **autolink\_key\_prefix** (`string`, required) The prefix that triggers link creation when found in issues, pull requests, or commits.
-   **repository\_name** (`string`, required) The name of the repository. This is not case sensitive.
-   **repository\_owner\_account** (`string`, required) The account owner of the repository. The name is not case sensitive.
-   **url\_template\_for\_autolink** (`string`, required) URL containing `<num>` for reference. It should match the characters based on `is_alphanumeric` value.
-   **match\_alphanumeric\_characters** (`boolean`, optional) Determines if the autolink reference matches alphanumeric characters. True includes A-Z, 0-9, ’-’, false matches only numeric characters.

## GithubApi.DeleteGithubRepoAutolink



Delete an autolink reference from a GitHub repository.

**Parameters**

-   **autolink\_identifier** (`integer`, required) The unique integer identifier of the autolink to be deleted from the repository.
-   **repository\_name** (`string`, required) The name of the GitHub repository. It is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.

## GithubApi.GetRepositoryAutolink



Retrieve a specific GitHub repository autolink by ID.

**Parameters**

-   **autolink\_id** (`integer`, required) The unique identifier of the autolink configured in the GitHub repository.
-   **repository\_name** (`string`, required) The name of the GitHub repository. It is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.

## GithubApi.ListGithubRepoBranches



Retrieve branches from a specific GitHub repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository. It is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. This is not case-sensitive.
-   **results\_page\_number** (`integer`, optional) Page number of the results to fetch from the list of branches.
-   **results\_per\_page** (`integer`, optional) Specify the number of branch results per page (maximum 100).
-   **return\_only\_protected\_branches** (`boolean`, optional) Set to `true` to return only protected branches, `false` for only unprotected, or omit to return all branches.

## GithubApi.GetGithubRepoBranch



Retrieve details of a specific branch from a GitHub repository.

**Parameters**

-   **branch\_name** (`string`, required) The name of the GitHub branch. Avoid using wildcard characters. For wildcard support, refer to the GitHub GraphQL API.
-   **repository\_name** (`string`, required) The name of the GitHub repository (case-insensitive).
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.

## GithubApi.DeleteBranchProtection



Remove protection from a specified GitHub branch.

**Parameters**

-   **branch\_name** (`string`, required) The name of the branch to remove protection from. Cannot contain wildcard characters.
-   **repository\_name** (`string`, required) The name of the GitHub repository. This is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.

## GithubApi.GetGithubBranchProtection



Retrieve protection settings for a GitHub branch.

**Parameters**

-   **branch\_name** (`string`, required) The specific name of the GitHub branch to retrieve protection settings for. Must not contain wildcard characters.
-   **repository\_name** (`string`, required) The name of the GitHub repository. It is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the GitHub repository. The name is not case sensitive.

## GithubApi.UpdateBranchProtection



Update GitHub repository branch protection settings.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **repository\_owner** (`string`, optional) The account owner of the repository on GitHub. The name is not case sensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **repository\_name** (`string`, optional) The name of the GitHub repository, which is not case sensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **branch\_name** (`string`, optional) The name of the branch to update protection settings for. It cannot contain wildcard characters. For wildcard support, use the GraphQL API. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## GithubApi.DeleteAdminBranchProtection



Remove admin enforcement on a protected branch.

**Parameters**

-   **branch\_name** (`string`, required) The exact name of the branch for which admin enforcement will be removed. Wildcards are not allowed.
-   **repository\_name** (`string`, required) The name of the repository. It is not case sensitive and should not include any special characters.
-   **repository\_owner** (`string`, required) The GitHub account owner of the repository. This is not case sensitive.

## GithubApi.GetAdminBranchProtectionStatus



Get admin branch protection status on GitHub.

**Parameters**

-   **branch\_name** (`string`, required) The exact name of the branch. Wildcards are not allowed; use GraphQL API for wildcards.
-   **repository\_name** (`string`, required) The name of the GitHub repository. This name is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.

## GithubApi.SetAdminBranchProtection



Set admin branch protection in a GitHub repository.

**Parameters**

-   **branch\_name** (`string`, required) The exact name of the branch to set admin protection. Wildcards not supported.
-   **repository\_name** (`string`, required) The case-insensitive name of the repository to set admin branch protection for.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.

## GithubApi.RemovePullRequestReviewProtection



Remove pull request review protection from a branch.

**Parameters**

-   **branch\_name** (`string`, required) The specific name of the branch to remove pull request review protection from. Wildcard characters are not allowed.
-   **repository\_name** (`string`, required) The case-insensitive name of the repository from which to remove pull request review protection.
-   **repository\_owner** (`string`, required) The account owner of the repository. It’s not case sensitive.

## GithubApi.GetPullRequestReviewProtection



Get pull request review protection details for a branch.

**Parameters**

-   **branch\_name** (`string`, required) The name of the branch. Cannot contain wildcard characters. For wildcard usage, refer to the GraphQL API.
-   **repository\_name** (`string`, required) The name of the repository to retrieve pull request review protection details for. This name is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. It is not case sensitive and identifies who owns the repository.

## GithubApi.UpdatePullRequestReviewProtection



Update pull request review protection settings for a branch.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **repository\_owner\_name** (`string`, optional) The account owner of the repository. The name is not case sensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **repository\_name** (`string`, optional) The name of the repository. This value is not case sensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **branch\_name** (`string`, optional) The name of the branch to update. It must not contain wildcard characters. For wildcard support, use the GraphQL API. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## GithubApi.DisableCommitSignatureProtection



Disable required signed commits on a branch.

**Parameters**

-   **branch\_name** (`string`, required) The name of the branch where you want to disable commit signature protection. Wildcards are not allowed.
-   **repository\_name** (`string`, required) The name of the GitHub repository, case insensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. Not case sensitive.

## GithubApi.CheckBranchCommitSignatureStatus



Check if a branch requires signed commits for protection.

**Parameters**

-   **branch\_name** (`string`, required) The name of the branch to check. It cannot contain wildcard characters.
-   **repository\_name** (`string`, required) The name of the GitHub repository. This is not case sensitive.
-   **repository\_owner** (`string`, required) The username of the repository owner. It is not case sensitive.

## GithubApi.RequireSignedCommitsOnBranch



Enable signed commit requirement on a GitHub branch.

**Parameters**

-   **branch\_name** (`string`, required) The name of the branch for which to require signed commits. It cannot contain wildcard characters. For using wildcards, refer to the GitHub GraphQL API.
-   **repository\_name** (`string`, required) The name of the repository. It is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the GitHub repository. Name is not case sensitive.

## GithubApi.RemoveStatusCheckProtection



Remove status check protection from a GitHub branch.

**Parameters**

-   **branch\_name** (`string`, required) The name of the branch from which you want to remove status check protection. Wildcard characters are not allowed. Use the GraphQL API for wildcard support.
-   **repository\_name** (`string`, required) The name of the repository. It is not case sensitive.
-   **repository\_owner** (`string`, required) The GitHub username or organization name that owns the repository, case insensitive.

## GithubApi.GetBranchProtectionStatusChecks



Retrieve status check protections for a GitHub branch.

**Parameters**

-   **branch\_name** (`string`, required) The name of the branch. It must not contain wildcard characters.
-   **repository\_name** (`string`, required) The name of the GitHub repository to check. The name is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.

## GithubApi.UpdateBranchStatusCheckProtection



Update status check protection for a GitHub branch.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **repository\_owner** (`string`, optional) The account owner of the repository. The name is not case sensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **repository\_name** (`string`, optional) The name of the GitHub repository. It is not case sensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **branch\_name** (`string`, optional) The name of the branch for which to update status check protection. Wildcard characters are not allowed. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## GithubApi.RemoveBranchStatusCheckContexts



Remove status check contexts from a protected branch.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **repository\_owner** (`string`, optional) The account owner of the repository. Enter a GitHub username, which is not case sensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **repository\_name** (`string`, optional) The name of the repository, case insensitive, to target for status check context removal. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **branch\_name** (`string`, optional) The name of the branch from which to remove status check contexts. Cannot contain wildcard characters. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## GithubApi.GetGithubStatusCheckContexts



Retrieve status check contexts for a protected GitHub branch.

**Parameters**

-   **branch\_name** (`string`, required) The name of the branch. Cannot include wildcard characters.
-   **repository\_name** (`string`, required) The name of the GitHub repository. This value is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the GitHub repository. The name is not case sensitive.

## GithubApi.AddStatusCheckContextsToBranch



Add status check contexts to a protected branch.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **repository\_owner** (`string`, optional) The account owner of the repository. The name is not case sensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **repository\_name** (`string`, optional) The name of the repository to add status check contexts to. This is not case sensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **branch\_name** (`string`, optional) The name of the branch to add status check contexts to. Cannot contain wildcard characters. Use GraphQL API for wildcards. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## GithubApi.SetBranchStatusCheckContexts



Set status check contexts for a protected branch.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **repository\_owner** (`string`, optional) The account owner of the repository. The name is not case sensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **repository\_name** (`string`, optional) The name of the GitHub repository. It is not case sensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **branch\_name** (`string`, optional) The name of the branch. It cannot contain wildcard characters. Use the GraphQL API for wildcard support. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## GithubApi.RemoveBranchAccessRestriction



Remove access restrictions from a GitHub branch.

**Parameters**

-   **branch\_name** (`string`, required) The name of the branch to remove access restrictions from. Cannot contain wildcard characters.
-   **repository\_name** (`string`, required) The name of the GitHub repository. It is not case sensitive.
-   **repository\_owner** (`string`, required) The GitHub account owner of the repository. The value is not case-sensitive.

## GithubApi.GetBranchAccessRestrictions



Retrieve access information for a protected branch.

**Parameters**

-   **branch\_name** (`string`, required) The exact name of the branch to retrieve access information for. Wildcard characters are not allowed.
-   **repository\_name** (`string`, required) The name of the GitHub repository. It is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.

## GithubApi.RemoveGithubAppBranchAccess



Remove an app’s access to a protected GitHub branch.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **repository\_owner\_account** (`string`, optional) The account owner of the repository, case insensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **repository\_name** (`string`, optional) The name of the GitHub repository, not case-sensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **branch\_name** (`string`, optional) The name of the branch to remove app access from. Wildcards are not allowed. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## GithubApi.GetAppsWithBranchAccess



Retrieve GitHub Apps with access to a protected branch.

**Parameters**

-   **branch\_name** (`string`, required) The name of the branch. Wildcard characters are not allowed; use exact names only.
-   **repository\_name** (`string`, required) The name of the repository. It is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository, not case sensitive.

## GithubApi.AddAppAccessRestrictions



Grant specified apps push access to a protected branch.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **repository\_owner** (`string`, optional) The repository account owner. The name is not case sensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **repository\_name** (`string`, optional) The name of the repository. This is not case sensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **branch\_name** (`string`, optional) The name of the branch to grant push access. Cannot contain wildcard characters. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## GithubApi.SetBranchAppAccessRestrictions



Replace apps with push access on a protected branch.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **repository\_owner** (`string`, optional) The account owner of the repository. The name is not case sensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **repository\_name** (`string`, optional) The name of the repository. It is not case sensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **branch\_name** (`string`, optional) The exact name of the branch to update app access restrictions for. Wildcard characters are not allowed. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## GithubApi.RemoveTeamAccessFromBranch



Remove a team’s push access to a protected GitHub branch.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **repository\_owner** (`string`, optional) The account owner of the repository. The name is not case sensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **repository\_name** (`string`, optional) The name of the repository. This is not case sensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **branch\_name** (`string`, optional) The exact name of the branch from which to remove team access. Wildcard characters are not allowed. For wildcard usage, employ the GraphQL API. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## GithubApi.GetTeamsWithPushAccessToBranch



Retrieve teams with push access to a protected branch.

**Parameters**

-   **branch\_name** (`string`, required) The name of the branch to retrieve teams with push access. Wildcard characters are not allowed.
-   **repository\_name** (`string`, required) The name of the GitHub repository. It is not case sensitive.
-   **repository\_owner** (`string`, required) The GitHub username or organization name that owns the repository. It is not case sensitive.

## GithubApi.AddTeamAccessToBranch



Grant push access to teams for a specific branch.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **repository\_owner** (`string`, optional) The account owner of the repository. The name is not case sensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **repository\_name** (`string`, optional) The name of the repository. It is not case sensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **branch\_name** (`string`, optional) Specify the branch name to grant team access. Wildcard characters are not allowed. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## GithubApi.SetGithubBranchTeamAccess



Update the team access restrictions on a GitHub branch.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **repository\_owner** (`string`, optional) The account owner of the repository. The name is not case sensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **repository\_name** (`string`, optional) The name of the GitHub repository. This value is not case sensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **branch\_name** (`string`, optional) The name of the branch. It cannot contain wildcard characters. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## GithubApi.RemoveUserAccessFromBranch



Remove users’ push access from a GitHub branch.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **repository\_owner** (`string`, optional) The account owner of the repository. This value is not case sensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **repository\_name** (`string`, optional) The name of the repository. It is not case sensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **branch\_name** (`string`, optional) The name of the branch to remove user access from. It must not contain wildcard characters. For using wildcards, refer to the GitHub GraphQL API. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## GithubApi.ListUsersWithBranchAccess



Retrieve users with push access to a protected branch on GitHub.

**Parameters**

-   **branch\_name** (`string`, required) The exact name of the branch to check for push access. Wildcard characters are not allowed.
-   **repository\_name** (`string`, required) The name of the repository. It is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.

## GithubApi.GrantPushAccessGithubBranch



Grant push access to specified users for a GitHub branch.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **repository\_owner** (`string`, optional) The account owner of the repository. The name is not case sensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **repository\_name** (`string`, optional) The name of the repository. It is not case sensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **branch\_name** (`string`, optional) The name of the branch to grant push access. Cannot contain wildcard characters. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## GithubApi.SetBranchUserAccessRestrictions



Set user access restrictions for a GitHub branch.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **repository\_owner** (`string`, optional) The account owner of the repository. It is not case sensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **repository\_name** (`string`, optional) The name of the GitHub repository. Note that it is not case sensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **branch\_name** (`string`, optional) The name of the branch for which to set user access restrictions. Cannot contain wildcard characters. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## GithubApi.RenameGithubBranch



Rename a branch in a GitHub repository.

**Parameters**

-   **current\_branch\_name** (`string`, required) The current name of the branch to be renamed. Cannot include wildcard characters.
-   **new\_branch\_name** (`string`, required) The new name for the branch. Ensure it doesn’t contain wildcard characters.
-   **repository\_name** (`string`, required) The name of the GitHub repository. It is case insensitive.
-   **repository\_owner** (`string`, required) The GitHub account owner of the repository, not case sensitive.

## GithubApi.CreateGithubCheckRun



Create a new check run for a GitHub repository commit.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **repository\_owner** (`string`, optional) The account owner of the repository. The name is not case sensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **repository\_name** (`string`, optional) The name of the repository. It is not case sensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## GithubApi.GetGithubCheckRun



Retrieve a specific GitHub check run by its ID.

**Parameters**

-   **check\_run\_identifier** (`integer`, required) The unique identifier of the GitHub check run to retrieve.
-   **repository\_name** (`string`, required) The name of the GitHub repository, not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the GitHub repository. The name is not case sensitive.

## GithubApi.UpdateCheckRunStatus



Update a check run for a specific commit in a repository.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **repository\_owner** (`string`, optional) The account owner of the repository. This is not case sensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **repository\_name** (`string`, optional) The name of the repository to update the check run. It is not case sensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **check\_run\_identifier** (`integer`, optional) The unique identifier of the check run to update. This should be an integer value. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## GithubApi.ListCheckRunAnnotations



Retrieve annotations for a GitHub check run.

**Parameters**

-   **check\_run\_identifier** (`integer`, required) The ID of the check run to retrieve annotations for.
-   **repository\_name** (`string`, required) The name of the GitHub repository (case insensitive).
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.
-   **results\_page\_number** (`integer`, optional) Specify the page number to fetch annotations from. Used for paginating results.
-   **results\_per\_page** (`integer`, optional) The number of results per page to return, with a maximum of 100.

## GithubApi.TriggerGithubCheckRerequest



Triggers a rerequest for an existing GitHub check run.

**Parameters**

-   **check\_run\_identifier** (`integer`, required) The unique identifier for the GitHub check run to be rerequested.
-   **repository\_name** (`string`, required) The name of the repository. The name is not case sensitive.
-   **repository\_owner\_account** (`string`, required) The account owner of the repository. The name is not case sensitive.

## GithubApi.CreateGithubCheckSuite



Manually create a check suite on GitHub.

**Parameters**

-   **head\_commit\_sha** (`string`, required) The SHA of the head commit for the check suite. Ensure it’s a valid commit SHA.
-   **repository\_name** (`string`, required) The name of the GitHub repository where the check suite will be created. It is not case sensitive.
-   **repository\_owner\_account** (`string`, required) Specify the account owner of the repository. This name is not case sensitive.

## GithubApi.SetCheckSuitePreferences



Set preferences for check suite creation in a repository.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **repository\_owner** (`string`, optional) The account owner of the repository. This value is not case sensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **repository\_name** (`string`, optional) The name of the GitHub repository. This value is not case sensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## GithubApi.GetGithubCheckSuite



Retrieve a GitHub check suite by ID.

**Parameters**

-   **check\_suite\_id** (`integer`, required) The unique identifier for the GitHub check suite to retrieve.
-   **repository\_name** (`string`, required) The name of the repository. This is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the GitHub repository. The name is not case sensitive.

## GithubApi.ListGithubCheckRunsForSuite



List check runs for a GitHub check suite using its ID.

**Parameters**

-   **check\_suite\_identifier** (`integer`, required) The unique identifier of the check suite to list its check runs.
-   **repository\_name** (`string`, required) The name of the GitHub repository to query. It is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner’s username of the repository. Case insensitive.
-   **check\_run\_name** (`string`, optional) Returns check runs with the specified name.
-   **check\_run\_status** (`string`, optional) Specify the status of the check runs to be returned. Options: ‘queued’, ‘in\_progress’, ‘completed’.
-   **filter\_by\_completion\_time** (`string`, optional) Filters check runs by their `completed_at` timestamp. Use ‘latest’ for the most recent runs or ‘all’ for all runs.
-   **result\_page\_number** (`integer`, optional) Specifies which page of the results to fetch, for paginated data.
-   **results\_per\_page** (`integer`, optional) Sets the number of results to return per page, with a maximum of 100.

## GithubApi.RerequestGithubCheckSuite



Rerequest a check suite on GitHub without code changes.

**Parameters**

-   **check\_suite\_identifier** (`integer`, required) The unique identifier of the GitHub check suite to be rerequested.
-   **repository\_name** (`string`, required) The name of the repository. It is not case sensitive. Specify the repository whose check suite you want to rerequest.
-   **repository\_owner** (`string`, required) The account owner of the repository (case insensitive).

## GithubApi.ListCodeScanningAlerts



Retrieve code scanning alerts for a repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository for which to list code scanning alerts. This name is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.
-   **alert\_state\_filter** (`string`, optional) Filter code scanning alerts by state. Valid options are ‘open’, ‘closed’, ‘dismissed’, and ‘fixed’.
-   **code\_scanning\_tool\_guid** (`string`, optional) The GUID of a code scanning tool to filter alerts by this tool only. This can’t be used with ‘tool\_name’.
-   **code\_scanning\_tool\_name** (`string`, optional) Specify the name of the code scanning tool to filter alerts by this tool only. Use either `tool_name` or `tool_guid`, but not both.
-   **filter\_by\_severity** (`string`, optional) Specify the severity of code scanning alerts to filter, using values like ‘critical’, ‘high’, ‘medium’, ‘low’, ‘warning’, ‘note’, or ‘error’.
-   **git\_reference\_for\_scan\_results** (`string`, optional) The Git reference for listing results. Use `refs/heads/<branch>` or `<branch>` for branches, `refs/pull/<number>/merge` for pull requests.
-   **results\_page\_number** (`integer`, optional) Page number to fetch results from. Use this to navigate through paginated results.
-   **results\_per\_page** (`integer`, optional) The number of results per page, up to a maximum of 100.
-   **sort\_by\_property** (`string`, optional) Property to sort the results by, either ‘created’ or ‘updated’.
-   **sort\_direction** (`string`, optional) The direction to sort the results. Choose ‘asc’ for ascending or ‘desc’ for descending order.

## GithubApi.GetCodeScanningAlert



Retrieve a single code scanning alert from a GitHub repo.

**Parameters**

-   **alert\_number** (`integer`, required) The unique number identifying a specific code scanning alert on GitHub. Found at the end of the URL for an alert or in the `number` field from the `GET /repos/{owner}/{repo}/code-scanning/alerts` response.
-   **repository\_name** (`string`, required) The name of the repository. This parameter is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.

## GithubApi.UpdateGithubCodeScanningAlert



Update the status of a GitHub code scanning alert.

**Parameters**

-   **alert\_identifier\_number** (`integer`, required) The unique number identifying a GitHub code scanning alert, found at the end of the alert URL or in the response of the alerts list.
-   **alert\_state** (`string`, required) Specifies the new state of the code scanning alert. Use ‘open’ or ‘dismissed’. Provide `dismissed_reason` if ‘dismissed’.
-   **repository\_name** (`string`, required) The name of the repository. The name is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. This is case insensitive.
-   **dismissal\_comment** (`string`, optional) The comment explaining the reason for dismissing the code scanning alert.
-   **dismissed\_reason\_for\_alert** (`string`, optional) Required if the alert state is dismissed. Specify the reason using one of: ‘None’, ‘false positive’, ‘won’t fix’, ‘used in tests’.

## GithubApi.ListCodeScanningAlertInstances



Retrieve instances of a specific code scanning alert.

**Parameters**

-   **alert\_identifier** (`integer`, required) The unique number identifying the code scanning alert. Find this number at the end of the alert URL in GitHub or in the `GET /repos/{owner}/{repo}/code-scanning/alerts` response.
-   **repository\_name** (`string`, required) The name of the repository, not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.
-   **git\_reference** (`string`, optional) The Git reference for the results you want to list. Format as `refs/heads/<branch_name>` or `<branch_name>` for branches, and `refs/pull/<number>/merge` for pull requests.
-   **page\_number** (`integer`, optional) Page number of the results to fetch. Use for navigating large sets of alert instances.
-   **results\_per\_page** (`integer`, optional) Specify the number of results to return per page (maximum 100).

## GithubApi.ListRecentCodeScanningAnalyses



Retrieve recent code scanning analyses for a repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository. It is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive, and it should match the GitHub account owning the target repository.
-   **code\_scanning\_tool\_guid** (`string`, optional) The GUID of the code scanning tool to filter results. Specify either this or ‘tool\_name’, not both.
-   **code\_scanning\_tool\_name** (`string`, optional) Specify the name of a code scanning tool to list results by this tool only. Cannot be used with `tool_guid`.
-   **filter\_by\_sarif\_id** (`string`, optional) Filter analyses that belong to a specific SARIF upload by providing the SARIF ID.
-   **git\_reference\_for\_analyses** (`string`, optional) The Git reference for analyses; format as `refs/heads/<branch>` for branches or `refs/pull/<number>/merge` for pull requests.
-   **page\_number** (`integer`, optional) The page number of the results to fetch. Used for paginating through the list of analyses.
-   **results\_per\_page** (`integer`, optional) Number of results per page, with a maximum limit of 100.
-   **sort\_by\_property** (`string`, optional) Specify the property for sorting the results. Available option: ‘created’.
-   **sort\_direction** (`string`, optional) The order to sort results, either ascending (‘asc’) or descending (‘desc’).

## GithubApi.DeleteCodeScanningAnalysis



Delete a specific code scanning analysis from a GitHub repository.

**Parameters**

-   **analysis\_id** (`integer`, required) The ID of the analysis to delete, obtained from the `GET /repos/{owner}/{repo}/code-scanning/analyses` endpoint.
-   **repository\_name** (`string`, required) The name of the GitHub repository. It is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.
-   **allow\_final\_analysis\_deletion** (`string`, optional) Set to ‘true’ to allow deletion if the analysis is the last in a set, preventing a 400 error.

## GithubApi.GetCodeScanningAnalysis



Retrieve detailed code scanning analysis for a GitHub repository.

**Parameters**

-   **analysis\_id** (`integer`, required) The ID number of the code scanning analysis to retrieve for the repository. This ID is obtained from the `GET /repos/{owner}/{repo}/code-scanning/analyses` operation.
-   **repository\_name** (`string`, required) The name of the GitHub repository. The name is not case sensitive.
-   **repository\_owner** (`string`, required) Specify the account owner of the repository. The name is not case sensitive.

## GithubApi.UploadSarifCodeScanningResults



Upload SARIF data to GitHub for code scanning results.

**Parameters**

-   **base64\_compressed\_sarif\_data** (`string`, required) A Base64-encoded string of the SARIF file compressed using gzip. Ensure proper encoding before upload.
-   **commit\_sha** (`string`, required) The SHA of the commit associated with the uploaded analysis. This links the SARIF data to a specific point in the repository’s history.
-   **git\_reference** (`string`, required) The full Git reference. Format: `refs/heads/<branch name>`, `refs/pull/<number>/merge`, or `refs/pull/<number>/head`.
-   **repository\_name** (`string`, required) The name of the repository. It is not case sensitive and identifies where the SARIF data will be uploaded.
-   **repository\_owner** (`string`, required) The account owner of the repository on GitHub, not case sensitive.
-   **analysis\_start\_time** (`string`, optional) The timestamp when the analysis run began, in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
-   **base\_directory\_for\_analysis** (`string`, optional) The base directory used in the analysis as it appears in the SARIF file to map file paths correctly.
-   **tool\_name** (`string`, optional) Specifies the tool name used for generating the code scanning analysis. Defaults to ‘API’ if not provided. Supports filtering by tool GUID in alerts operations.

## GithubApi.GetSarifAnalysisInfo



Retrieve SARIF upload status and analysis URL.

**Parameters**

-   **repository\_name** (`string`, required) The name of the repository. This input is case-insensitive.
-   **repository\_owner** (`string`, required) The GitHub account owner of the repository. This input is not case sensitive.
-   **sarif\_id** (`string`, required) The SARIF ID obtained after uploading. It is used to retrieve analysis details.

## GithubApi.ListCodeownersErrors



Identify syntax errors in a repository’s CODEOWNERS file.

**Parameters**

-   **repository\_name** (`string`, required) The name of the repository. It is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. It is not case sensitive.
-   **version\_reference** (`string`, optional) Specify the branch, tag, or commit name to select the CODEOWNERS file version. Defaults to the repository’s default branch if not provided.

## GithubApi.ListGithubRepoCollaborators



Retrieve collaborators of a GitHub repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository. It is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the GitHub repository. This name is not case sensitive.
-   **filter\_by\_affiliation** (`string`, optional) Filter collaborators by affiliation: ‘outside’, ‘direct’, or ‘all’.
-   **filter\_by\_permission** (`string`, optional) Specify the permission level (‘pull’, ‘triage’, ‘push’, ‘maintain’, ‘admin’) to filter the repository collaborators. Returns all collaborators if not specified.
-   **results\_page\_number** (`integer`, optional) The page number of results to retrieve when querying the list of collaborators.
-   **results\_per\_page** (`integer`, optional) The number of results per page to return, with a maximum of 100.

## GithubApi.RemoveRepoCollaborator



Remove a collaborator from a GitHub repository.

**Parameters**

-   **collaborator\_username** (`string`, required) The GitHub user handle for the collaborator to be removed.
-   **repository\_name** (`string`, required) The name of the GitHub repository, case insensitive.
-   **repository\_owner\_name** (`string`, required) The account owner of the repository. The name is not case sensitive.

## GithubApi.CheckGithubRepoCollaborator



Check if a user is a collaborator on a GitHub repository.

**Parameters**

-   **github\_user\_handle** (`string`, required) The GitHub username to check collaboration status for.
-   **repository\_name** (`string`, required) The name of the GitHub repository, case-insensitive.
-   **repository\_owner** (`string`, required) The account owner of the GitHub repository, not case sensitive.

## GithubApi.AddOrUpdateGithubCollaborator



Add or update a collaborator on a GitHub repository.

**Parameters**

-   **github\_user\_handle** (`string`, required) The GitHub user handle for the collaborator to be added or updated.
-   **repository\_name** (`string`, required) The name of the GitHub repository. This input is not case sensitive.
-   **repository\_owner** (`string`, required) The GitHub username of the account owner of the repository. This is not case sensitive.
-   **permission\_level\_for\_github\_collaborator** (`string`, optional) Specify the permission to grant or update for a collaborator on an organization-owned GitHub repository. Only valid for such repositories.

## GithubApi.CheckRepoCollaboratorPermission



Check a collaborator’s permission level in a GitHub repo.

**Parameters**

-   **collaborator\_username** (`string`, required) The GitHub user account handle to check permissions for.
-   **repository\_name** (`string`, required) The name of the GitHub repository (case insensitive).
-   **repository\_owner** (`string`, required) The account owner of the repository (not case sensitive).

## GithubApi.ListRepoCommitComments



Retrieve commit comments for a GitHub repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the repository. The name is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. This name is not case sensitive.
-   **results\_page\_number** (`integer`, optional) Specify the page number of commit comments to fetch from the repository.
-   **results\_per\_page** (`integer`, optional) Number of commit comments to retrieve per page, with a maximum of 100.

## GithubApi.DeleteGithubCommitComment



Deletes a specific commit comment on GitHub.

**Parameters**

-   **comment\_id** (`integer`, required) The unique identifier of the commit comment to be deleted.
-   **repository\_name** (`string`, required) The name of the GitHub repository. This value is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. It is not case sensitive.

## GithubApi.GetGithubCommitComment



Retrieve details of a specific commit comment on GitHub.

**Parameters**

-   **comment\_identifier** (`integer`, required) The unique identifier for the GitHub commit comment to be retrieved.
-   **repository\_name** (`string`, required) The name of the repository. This value is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.

## GithubApi.UpdateCommitComment



Update a comment on a GitHub commit.

**Parameters**

-   **comment\_contents** (`string`, required) The updated text of the commit comment. Enter the new content you wish to save.
-   **comment\_unique\_id** (`integer`, required) The unique identifier for the commit comment being updated. It is an integer value that specifies the comment to be edited within the repository.
-   **repository\_name** (`string`, required) The name of the repository. This is not case sensitive. Provide the repository’s exact name as it appears on GitHub.
-   **repository\_owner** (`string`, required) The GitHub account owner of the repository. This name is not case sensitive.

## GithubApi.ListCommitCommentReactions



Retrieve reactions for a GitHub commit comment.

**Parameters**

-   **comment\_id** (`integer`, required) The unique identifier for the commit comment you want to retrieve reactions for.
-   **repository\_name** (`string`, required) The name of the GitHub repository. It is not case sensitive and identifies the repository within the specified owner’s account.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.
-   **reaction\_type** (`string`, optional) Filter results to show only a specific reaction type. Omit to list all reactions.
-   **results\_page\_number** (`integer`, optional) Page number of the results to fetch, used for pagination.
-   **results\_per\_page** (`integer`, optional) Specifies the number of results to return per page, with a maximum of 100.

## GithubApi.AddReactionToCommitComment



Add a reaction to a GitHub commit comment.

**Parameters**

-   **comment\_id** (`integer`, required) The unique identifier of the GitHub commit comment to which the reaction will be added.
-   **reaction\_type** (`string`, required) The type of reaction to add to the commit comment, e.g., ‘+1’, ‘heart’, ‘laugh’.
-   **repository\_name** (`string`, required) The name of the GitHub repository. It is not case sensitive.
-   **repository\_owner** (`string`, required) The GitHub username of the repository owner. This value is case-insensitive.

## GithubApi.DeleteCommitCommentReaction



Delete a reaction from a commit comment on GitHub.

**Parameters**

-   **comment\_unique\_identifier** (`integer`, required) The unique identifier for the specific commit comment you want to target.
-   **reaction\_unique\_identifier** (`integer`, required) The unique identifier for the reaction to be deleted from a commit comment.
-   **repository\_name** (`string`, required) The case-insensitive name of the repository.
-   **repository\_owner** (`string`, required) The account owner of the repository. It is not case sensitive.

## GithubApi.CheckCommitSignatureVerification



Fetches verification status of a commit’s signature on GitHub.

**Parameters**

-   **repository\_name** (`string`, required) The name of the repository to verify the commit signature. Not case-sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. This value is not case sensitive.
-   **commit\_author\_filter** (`string`, optional) GitHub login or email address to filter commits by author.
-   **commit\_file\_path\_filter** (`string`, optional) Specify a file path to filter commits that only include changes to this path.
-   **only\_commits\_before\_date** (`string`, optional) Filter commits to only include those before this date, formatted as `YYYY-MM-DDTHH:MM:SSZ`.
-   **results\_page\_number** (`integer`, optional) Page number of the results to fetch, used for pagination.
-   **results\_per\_page** (`integer`, optional) Specifies the number of commits to return per page, up to a maximum of 100.
-   **start\_commit\_sha\_or\_branch** (`string`, optional) SHA or branch to start listing commits from. Defaults to the repository’s default branch, usually ‘main’.
-   **updated\_after\_timestamp** (`string`, optional) Timestamp in ISO 8601 format to filter notifications updated after this time.

## GithubApi.ListBranchesForCommit



Retrieve branches for a specific commit in a GitHub repository.

**Parameters**

-   **commit\_sha** (`string`, required) The SHA hash of the commit used to identify specific branches where this commit is the HEAD in a GitHub repository.
-   **repository\_name** (`string`, required) The name of the GitHub repository. Not case sensitive.
-   **repository\_owner** (`string`, required) The GitHub account owner of the repository, not case sensitive.

## GithubApi.ListCommitComments



Retrieve comments for a specific commit in a GitHub repo.

**Parameters**

-   **commit\_sha** (`string`, required) The SHA string representing the specific commit to retrieve comments for.
-   **repository\_name** (`string`, required) The case-insensitive name of the GitHub repository.
-   **repository\_owner** (`string`, required) The account owner of the repository. This is not case sensitive and identifies the GitHub user or organization that owns the repository.
-   **results\_page\_number** (`integer`, optional) The page number of results to fetch for commit comments. Useful for paginating through large sets of comments.
-   **results\_per\_page** (`integer`, optional) The number of comments to return per page, with a maximum of 100.

## GithubApi.CreateGithubCommitComment



Create a comment on a specific GitHub commit.

**Parameters**

-   **comment\_content** (`string`, required) The text of the comment to be added to the commit. It should be a clear and concise message.
-   **commit\_sha** (`string`, required) The SHA identifier of the commit to comment on. It uniquely identifies the commit within the repository.
-   **repository\_name** (`string`, required) The name of the GitHub repository where the commit resides. It’s not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the GitHub repository. Name is not case sensitive.
-   **deprecated\_line\_number** (`integer`, optional) Line number in the file to comment on. **Deprecated**. Use the `position_in_diff` instead.
-   **line\_index\_in\_diff** (`integer`, optional) Line index in the diff to comment on.
-   **relative\_file\_path** (`string`, optional) Relative path of the file to comment on within the repository.

## GithubApi.ListPullRequestsForCommit



Retrieve pull requests linked to a specific commit.

**Parameters**

-   **commit\_sha** (`string`, required) The SHA identifier of the commit to fetch associated pull requests.
-   **repository\_name** (`string`, required) The name of the repository (not case sensitive).
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.
-   **results\_page\_number** (`integer`, optional) Page number of the results to fetch from the list of pull requests associated with the commit.
-   **results\_per\_page** (`integer`, optional) Number of results per page, with a maximum of 100.

## GithubApi.GetCommitDetails



Retrieve details of a single commit reference.

**Parameters**

-   **commit\_reference** (`string`, required) The reference string (branch name, tag, or commit SHA) for the commit to fetch details about.
-   **repository\_name** (`string`, required) The name of the repository. This is not case sensitive and required to identify the repository from which to fetch commit details.
-   **repository\_owner** (`string`, required) The account owner of the repository, not case sensitive.
-   **results\_page\_number** (`integer`, optional) The page number of the commit results to fetch from the API. Use for pagination.
-   **results\_per\_page** (`integer`, optional) Specify the number of results to return per page, up to a maximum of 100.

## GithubApi.ListCheckRunsForCommitRef



Lists check runs for a given commit reference.

**Parameters**

-   **commit\_reference** (`string`, required) The commit reference, which can be a SHA, branch name, or tag name, to list check runs for.
-   **repository\_name** (`string`, required) The name of the repository. Input is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. This is not case sensitive and refers to the GitHub username or organization name.
-   **application\_id** (`integer`, optional) Optional integer identifier for a GitHub App to filter check runs created by that app.
-   **check\_run\_name** (`string`, optional) Specify a name to filter check runs by their name.
-   **check\_run\_status** (`string`, optional) Filter check runs by specifying the status (‘queued’, ‘in\_progress’, ‘completed’).
-   **filter\_by\_completion\_timestamp** (`string`, optional) Specify ‘latest’ to return the most recent check runs or ‘all’ to include all completed check runs.
-   **results\_page\_number** (`integer`, optional) The specific page number of results to retrieve, used for pagination.
-   **results\_per\_page** (`integer`, optional) The number of results to display per page, with a maximum of 100.

## GithubApi.ListCheckSuitesForRef



List check suites for a specific commit reference.

**Parameters**

-   **commit\_reference** (`string`, required) The commit ref, which can be a SHA, branch name, or tag name. Used to list check suites.
-   **repository\_name** (`string`, required) The name of the repository to query. It is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository, case insensitive.
-   **github\_app\_id\_filter** (`integer`, optional) Filter check suites by the GitHub App ID to narrow results to relevant checks associated with a specific application.
-   **results\_page\_number** (`integer`, optional) Specifies which page of results to fetch. Useful for paginating through a list of check suites.
-   **results\_per\_page** (`integer`, optional) Specify the number of results to return per page. The maximum is 100.
-   **specific\_check\_name** (`string`, optional) Specify the name of the check run to filter the results.

## GithubApi.GetCombinedCommitStatus



Retrieve the combined status of a commit for a given reference.

**Parameters**

-   **reference\_specifier** (`string`, required) The ref parameter specifying the SHA, branch name, or tag name for the commit status.
-   **repository\_name** (`string`, required) The name of the repository. This is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. This is a case-insensitive string.
-   **results\_page\_number** (`integer`, optional) The page number of commit status results to fetch. Useful for pagination.
-   **results\_per\_page** (`integer`, optional) The number of results to include per page, with a maximum limit of 100.

## GithubApi.GetCommitStatuses



Retrieve commit statuses for a specific ref in a repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the repository. It is not case sensitive.
-   **repository\_owner** (`string`, required) The GitHub username or organization name that owns the repository. This is not case sensitive.
-   **repository\_reference** (`string`, required) The reference for the commit, which can be a SHA, branch name, or tag name. It specifies the ref to fetch statuses for in the repository.
-   **results\_page\_number** (`integer`, optional) The page number to fetch the results from, useful for pagination.
-   **results\_per\_page** (`integer`, optional) The number of results to display per page, with a maximum of 100.

## GithubApi.CompareGithubCommits



Compares two commits in a GitHub repository.

**Parameters**

-   **base\_and\_head\_branch\_comparison** (`string`, required) Specify branches/base and head in the format `BASE...HEAD` or `USERNAME:BASE...USERNAME:HEAD` to compare them.
-   **repository\_name** (`string`, required) The name of the GitHub repository to compare commits in. This input is not case sensitive.
-   **repository\_owner** (`string`, required) The username of the account that owns the repository. This name is not case sensitive.
-   **page\_number** (`integer`, optional) Page number of the results to fetch. Used for pagination to navigate through commit comparisons.
-   **results\_per\_page** (`integer`, optional) Specifies the number of commit results returned per page. Maximum allowed is 100.

## GithubApi.DeleteGithubFile



Delete a file from a GitHub repository.

**Parameters**

-   **commit\_message** (`string`, required) The commit message explaining why the file is being deleted. This information is mandatory.
-   **file\_path** (`string`, required) The file path in the repository to be deleted. This path is case-sensitive.
-   **file\_sha\_to\_delete** (`string`, required) The SHA of the file to be deleted. This is required to identify the specific file version in the repository.
-   **repository\_name** (`string`, required) The name of the GitHub repository from which the file will be deleted. This is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository in a case-insensitive format.
-   **author\_email** (`string`, optional) Email of the author or committer for the commit. Required if using author or committer details.
-   **author\_name** (`string`, optional) The name of the author or committer of the commit. Required if ‘author’ is used.
-   **branch\_name** (`string`, optional) The name of the branch from which to delete the file. Defaults to the repository’s default branch (usually ‘master’).
-   **committer\_email** (`string`, optional) The email of the committer for the commit. This is required for deleting a file.
-   **committer\_name** (`string`, optional) The name of the committer or author of the commit for deleting the file.

## GithubApi.GetGithubRepoContent



Retrieve file or directory contents from a GitHub repository.

**Parameters**

-   **file\_or\_directory\_path** (`string`, required) The file or directory path within the repository. If omitted, the root directory is accessed.
-   **repository\_name** (`string`, required) The name of the GitHub repository. This is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. This value is not case sensitive.
-   **commit\_branch\_or\_tag** (`string`, optional) The name of the commit, branch, or tag to retrieve content from. Defaults to the repository’s default branch, usually ‘master’.

## GithubApi.UpdateOrCreateGithubFile



Create or update a file in a GitHub repository.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **repository\_owner** (`string`, optional) The account owner of the GitHub repository, not case sensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **repository\_name** (`string`, optional) The name of the repository. It is not case sensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **file\_path\_in\_repository** (`string`, optional) The file path within the repository where the file will be created or updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## GithubApi.ListGithubRepoContributors



Retrieve contributors for a specific GitHub repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository. It is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the GitHub repository. This value is not case sensitive.
-   **include\_anonymous\_contributors** (`string`, optional) Set to `1` or `true` to include anonymous contributors in the results.
-   **results\_page\_number** (`integer`, optional) Specifies the page number of contributors to fetch. Use this to navigate through paginated results. Each page contains a subset of contributors, with ‘per\_page’ controlling the number of contributors per page.
-   **results\_per\_page** (`integer`, optional) The number of results per page, with a maximum of 100.

## GithubApi.ListDependabotAlertsForRepo



Retrieve Dependabot alerts for a specific repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository. This is case insensitive.
-   **repository\_owner** (`string`, required) The GitHub account owner of the repository. This name is not case sensitive.
-   **alert\_states\_filter** (`string`, optional) A comma-separated list of alert states to filter results by. Options: `dismissed`, `fixed`, `open`.
-   **before\_cursor** (`string`, optional) Cursor indicating the position to fetch results before this point.
-   **cursor\_after** (`string`, optional) A cursor to fetch results after a specified point. Helps in pagination by retrieving alerts following the given cursor position.
-   **deprecated\_page\_number** (`integer`, optional) **Deprecated**. Use to specify the page number of results to fetch. Prefer using `before` or `after` cursors.
-   **ecosystem\_filter** (`string`, optional) Comma-separated list of ecosystems to filter alerts by: composer, go, maven, npm, nuget, pip, pub, rubygems, rust.
-   **fetch\_deprecated\_first\_page\_results** (`integer`, optional) **Deprecated**. Number of results per page (max 100), starting from the first result. Avoid using with `last`. Use `per_page` and `after` instead.
-   **fetch\_last\_page\_results** (`integer`, optional) **Deprecated**: Use `per_page` with `before` instead. Fetch results per page from the last result (max 100).
-   **manifest\_paths** (`string`, optional) Comma-separated list of full manifest paths to filter alerts by those manifests.
-   **package\_names** (`string`, optional) A comma-separated list of package names. Only alerts for these packages will be returned.
-   **results\_per\_page** (`integer`, optional) Specifies the number of results to be returned per page, with a maximum limit of 100.
-   **severity\_filter** (`string`, optional) Provide a comma-separated list of severities: `low`, `medium`, `high`, `critical`. Filters alerts by these severities.
-   **sort\_by** (`string`, optional) Sort alerts by `created` or `updated` date. `Created` means when the alert was created, `updated` means when the alert’s state last changed.
-   **sort\_results\_direction** (`string`, optional) Specify the order to sort the results: `asc` for ascending or `desc` for descending.
-   **vulnerable\_dependency\_scope** (`string`, optional) Specifies the scope of the vulnerable dependency to filter alerts. Options: ‘development’ or ‘runtime’.

## GithubApi.GetDependabotAlert



Retrieve details of a specific Dependabot alert.

**Parameters**

-   **dependabot\_alert\_number** (`integer`, required) The identifier number for the Dependabot alert in the repository. Obtainable from the alert URL or response from `GET /repos/{owner}/{repo}/dependabot/alerts`.
-   **repository\_name** (`string`, required) The name of the repository. This is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.

## GithubApi.UpdateGithubDependabotAlert



Update a GitHub Dependabot alert.

**Parameters**

-   **alert\_identifier** (`integer`, required) The unique number identifying a Dependabot alert in the repository. Find this at the end of the alert URL or in `number` fields from the `GET /repos/{owner}/{repo}/dependabot/alerts` response.
-   **alert\_state** (`string`, required) Specifies the state of the Dependabot alert. Use ‘dismissed’ to dismiss an alert and ‘open’ to keep it open. A ‘dismissed\_reason’ is required when setting to ‘dismissed’.
-   **repository\_name** (`string`, required) The name of the GitHub repository to update. It is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the GitHub repository. Not case sensitive.
-   **dismissed\_alert\_comment** (`string`, optional) An optional comment to provide context when dismissing the alert.
-   **dismissed\_reason\_for\_alert** (`string`, optional) Reason for dismissing the alert. Required if `state` is set to `dismissed`. Allowed values: ‘fix\_started’, ‘inaccurate’, ‘no\_bandwidth’, ‘not\_used’, ‘tolerable\_risk’.

## GithubApi.ListGitRepoSecrets



Retrieve a list of secrets in a GitHub repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository. The name is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.
-   **results\_page\_number** (`integer`, optional) Specifies the page number of results to retrieve from the repository secrets list.
-   **results\_per\_page** (`integer`, optional) The number of secret results to display per page, maximum of 100.

## GithubApi.GetGithubRepoPublicKey



Retrieve the public key for encrypting repository secrets.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository, not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.

## GithubApi.RemoveGithubRepoSecret



Delete a secret from a GitHub repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository, not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository, not case sensitive.
-   **secret\_name** (`string`, required) The name of the secret to be deleted from the repository.

## GithubApi.GetRepoSecretInfo



Retrieve metadata of a repository secret from GitHub.

**Parameters**

-   **repository\_name** (`string`, required) The name of the repository. It is not case sensitive.
-   **repository\_owner** (`string`, required) The GitHub account owner of the repository, case insensitive.
-   **secret\_name** (`string`, required) The name of the secret to retrieve metadata for. Case insensitive.

## GithubApi.ManageGithubRepoSecret



Create or update an encrypted GitHub repository secret.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository. This is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive. Specify the GitHub username or organization name.
-   **secret\_name** (`string`, required) The name of the repository secret to create or update. Case insensitive.
-   **encrypted\_secret\_value** (`string`, optional) The secret’s value encrypted using LibSodium and a public key from the repository’s public key endpoint.
-   **encryption\_key\_id** (`string`, optional) The ID of the key used to encrypt the secret. This key is retrieved from GitHub’s repository public key endpoint.

## GithubApi.CompareDependencyChanges



Get dependency changes between two commits of a repository.

**Parameters**

-   **base\_and\_head\_commit\_specification** (`string`, required) Specify the base and head commits in the format `{base}...{head}` for comparison.
-   **repository\_name** (`string`, required) The name of the repository to compare. It is not case sensitive.
-   **repository\_owner\_name** (`string`, required) The account owner of the repository. The name is not case sensitive.
-   **dependency\_manifest\_file\_path** (`string`, optional) The full path, relative to the repository root, of the dependency manifest file.

## GithubApi.CreateRepoDependencySnapshot



Create a snapshot of a repository’s dependencies.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **repository\_owner** (`string`, optional) The account owner of the GitHub repository. This name is not case sensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **repository\_name** (`string`, optional) The name of the GitHub repository to create a dependency snapshot for. The name is not case sensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## GithubApi.ListGithubDeployments



Retrieve deployments from a GitHub repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository. It is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.
-   **commit\_sha** (`string`, optional) The commit SHA recorded at deployment creation time for filtering deployments.
-   **deployment\_environment** (`string`, optional) Specify the environment that was deployed to, such as ‘staging’ or ‘production’.
-   **deployment\_task\_name** (`string`, optional) The specific task name for the deployment, like `deploy` or `deploy:migrations`.
-   **repository\_ref** (`string`, optional) The name of the ref. This can be a branch, tag, or SHA to filter deployments by.
-   **results\_page\_number** (`integer`, optional) Specifies which page of deployment results to fetch. Used for pagination to navigate through multiple pages of results.
-   **results\_per\_page** (`integer`, optional) The number of results to return per page, with a maximum of 100.

## GithubApi.CreateGithubDeployment



Create a GitHub deployment for a specified repository ref.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **repository\_owner** (`string`, optional) The account owner of the repository. This input is not case sensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **repository\_name** (`string`, optional) The name of the repository to deploy. Not case-sensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## GithubApi.DeleteGithubDeployment



Delete a GitHub repository deployment.

**Parameters**

-   **deployment\_id** (`integer`, required) The unique identifier of the GitHub deployment to be deleted. This should be an integer.
-   **repository\_name** (`string`, required) The name of the repository. This name is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.

## GithubApi.GetGithubDeploymentStatus



Retrieve details of a specific GitHub deployment.

**Parameters**

-   **deployment\_id** (`integer`, required) The unique identifier for the deployment to retrieve details about.
-   **repository\_name** (`string`, required) The name of the GitHub repository, not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. This is not case sensitive.

## GithubApi.ListGithubDeploymentStatuses



Retrieve deployment statuses for a specified GitHub deployment.

**Parameters**

-   **deployment\_id** (`integer`, required) The unique identifier of the deployment to retrieve statuses for. Must be an integer.
-   **repository\_name** (`string`, required) The case-insensitive name of the GitHub repository.
-   **repository\_owner** (`string`, required) The GitHub username or organization that owns the repository. This is not case sensitive.
-   **results\_page\_number** (`integer`, optional) The specific page number of deployment statuses to fetch. Used for pagination.
-   **results\_per\_page** (`integer`, optional) The number of results to return per page, up to a maximum of 100.

## GithubApi.CreateGithubDeploymentStatus



Create deployment statuses for a GitHub deployment.

**Parameters**

-   **deployment\_id** (`integer`, required) The unique identifier for the deployment. This integer value specifies which deployment the status will be associated with.
-   **deployment\_status\_state** (`string`, required) The desired state of the deployment status. Options include: ‘error’, ‘failure’, ‘inactive’, ‘in\_progress’, ‘queued’, ‘pending’, ‘success’.
-   **repository\_name** (`string`, required) The name of the GitHub repository. Case insensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.
-   **add\_inactive\_status\_to\_previous\_deployments** (`boolean`, optional) Specifies if an ‘inactive’ status should be added to prior non-transient, non-production deployments with the same repository and environment. Defaults to true.
-   **deployment\_environment** (`string`, optional) Specifies the target deployment environment, such as `production`, `staging`, or `qa`.
-   **deployment\_environment\_url** (`string`, optional) Sets the URL for accessing your deployment environment. Defaults to an empty string if not provided.
-   **deployment\_output\_url** (`string`, optional) The full URL of the deployment’s output. It replaces `target_url` and automatically sets `target_url` to the same value. Recommended for output logs.
-   **deployment\_status\_target\_url** (`string`, optional) Specify the URL containing output related to the deployment status. Note that it’s recommended to use `log_url` instead, which replaces this parameter.
-   **status\_description** (`string`, optional) A brief description of the deployment status, up to 140 characters.

## GithubApi.FetchDeploymentStatusGithub



Retrieve a deployment status from a GitHub repository.

**Parameters**

-   **deployment\_id** (`integer`, required) The unique identifier of the deployment to retrieve the status for. Must be an integer.
-   **deployment\_status\_id** (`integer`, required) The unique integer identifier for the deployment status in the GitHub repository.
-   **repository\_name** (`string`, required) The name of the repository (case-insensitive).
-   **repository\_owner** (`string`, required) The GitHub account owner of the repository. Not case sensitive.

## GithubApi.TriggerGithubDispatchEvent



Triggers a GitHub repository dispatch event.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **repository\_owner** (`string`, optional) Specify the GitHub username or organization name that owns the repository. This is not case-sensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **repository\_name** (`string`, optional) The name of the repository. This is not case sensitive and determines which repository’s dispatch event will be triggered. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## GithubApi.ListRepositoryEnvironments



Retrieve environments for a GitHub repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository to retrieve environments for. This name is not case-sensitive.
-   **repository\_owner** (`string`, required) The GitHub username of the repository owner. Case insensitive.
-   **results\_page\_number** (`integer`, optional) The number of the page to retrieve for paginated results.
-   **results\_per\_page** (`integer`, optional) The number of results to retrieve per page, with a maximum of 100.

## GithubApi.DeleteRepoEnvironment



Deletes a specific environment in a GitHub repository.

**Parameters**

-   **environment\_name** (`string`, required) The name of the GitHub repository environment to delete. This field is case insensitive.
-   **repository\_name** (`string`, required) The name of the GitHub repository. This is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. This value is not case sensitive. Specify the GitHub username or organization handle that owns the repository.

## GithubApi.GetGithubRepoEnvironmentDetails



Retrieve details about a GitHub repository environment.

**Parameters**

-   **environment\_name** (`string`, required) The name of the environment to retrieve details for. It is case insensitive.
-   **repository\_name** (`string`, required) The name of the GitHub repository (not case sensitive).
-   **repository\_owner\_account\_name** (`string`, required) The account owner of the repository. The name is not case sensitive.

## GithubApi.GithubManageEnvironment



Create or update a GitHub environment with protection rules.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **repository\_owner** (`string`, optional) The account owner of the repository. The name is not case sensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **repository\_name** (`string`, optional) The name of the GitHub repository. This value is not case sensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **environment\_name** (`string`, optional) The name of the GitHub environment to create or update. This should be a string that accurately identifies the environment within the repository. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## GithubApi.ListDeploymentBranchPolicies



Lists deployment branch policies for a GitHub environment.

**Parameters**

-   **environment\_name** (`string`, required) The name of the environment for which to list branch policies. This should match an existing environment in the repository.
-   **repository\_name** (`string`, required) The name of the repository, not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. Input is not case sensitive.
-   **result\_page\_number** (`integer`, optional) The page number of the results to retrieve. Use this to navigate through paginated results.
-   **results\_per\_page** (`integer`, optional) Specify the number of results per page, with a maximum of 100.

## GithubApi.CreateGithubDeploymentBranchPolicy



Creates a deployment branch policy for a GitHub environment.

**Parameters**

-   **branch\_name\_pattern** (`string`, required) A pattern that branches must match to deploy to the environment. Wildcard characters won’t match ’/’.
-   **environment\_name** (`string`, required) The name of the environment for which to create a deployment branch policy.
-   **repository\_name** (`string`, required) The name of the GitHub repository, not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. Case insensitive.

## GithubApi.DeleteDeploymentBranchPolicy



Delete a deployment branch policy for a GitHub environment.

**Parameters**

-   **branch\_policy\_identifier** (`integer`, required) The unique identifier of the branch policy to be deleted.
-   **environment\_name** (`string`, required) The name of the GitHub environment for which the deployment branch policy will be deleted.
-   **repository\_name** (`string`, required) The name of the GitHub repository. It is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.

## GithubApi.GetDeploymentBranchPolicy



Retrieve deployment branch policy for a specific environment.

**Parameters**

-   **branch\_policy\_identifier** (`integer`, required) The unique identifier of the branch policy in the environment. Should be an integer value.
-   **environment\_name** (`string`, required) The name of the environment for which the deployment branch policy is being retrieved.
-   **repository\_name** (`string`, required) The name of the repository. Not case sensitive.
-   **repository\_owner** (`string`, required) The GitHub account owner of the repository. This is case insensitive.

## GithubApi.UpdateDeploymentBranchPolicy



Update a deployment branch policy for a GitHub environment.

**Parameters**

-   **branch\_name\_pattern** (`string`, required) Pattern that branches must match to deploy to the environment. Wildcards won’t match ’/’. See Ruby File.fnmatch for syntax.
-   **branch\_policy\_identifier** (`integer`, required) The unique identifier for the branch policy to be updated.
-   **environment\_name** (`string`, required) The name of the environment for which the deployment branch policy is being updated.
-   **repository\_name** (`string`, required) The name of the GitHub repository. The name is not case sensitive.
-   **repository\_owner** (`string`, required) The GitHub username or organization name of the repository owner. It is case insensitive.

## GithubApi.ListGithubRepoEvents



Retrieve GitHub repository events.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository. The name is not case sensitive.
-   **repository\_owner\_name** (`string`, required) The username of the account owner of the repository, case insensitive.
-   **results\_page\_number** (`integer`, optional) Specify the page number of the repository events to fetch. Useful for paginating results.
-   **results\_per\_page** (`integer`, optional) Specify the number of results per page, with a maximum limit of 100.

## GithubApi.ListGithubRepoForks



Fetches the list of forks for a specified GitHub repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository. This is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. This is not case sensitive and specifies whose repository to list forks from.
-   **results\_page\_number** (`integer`, optional) Specifies the page number for paginated results when listing forks.
-   **results\_per\_page** (`integer`, optional) The number of results to return per page, with a maximum of 100.
-   **sort\_order** (`string`, optional) The order to sort the forks. Options: ‘newest’, ‘oldest’, ‘stargazers’, or ‘watchers’.

## GithubApi.CreateGithubFork



Create a fork of a GitHub repository for the user.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository to fork. It’s not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the GitHub repository. This name is not case-sensitive.
-   **fork\_default\_branch\_only** (`boolean`, optional) Set to true to fork only the default branch of the repository.
-   **new\_fork\_name** (`string`, optional) Specify a new name for the forked repository when forking an existing repository.
-   **organization\_name** (`string`, optional) Optional. Specify the organization name to fork into. If not provided, the fork will default to the user’s account.

## GithubApi.CreateGithubBlob



Create a new blob in a GitHub repository.

**Parameters**

-   **blob\_content** (`string`, required) The content for the new GitHub blob. Accepts text or encoded binary data.
-   **repository\_name** (`string`, required) The name of the repository. It is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the GitHub repository. This is not case sensitive.
-   **content\_encoding** (`string`, optional) Specify the encoding for the blob content. Supported values are ‘utf-8’ and ‘base64’.

## GithubApi.GetGithubBlobContent



Retrieve Base64 encoded content of a GitHub blob.

**Parameters**

-   **file\_sha\_identifier** (`string`, required) The SHA identifier for the blob. This is used to access the specific file blob from the GitHub repository.
-   **repository\_name** (`string`, required) The name of the GitHub repository. This is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. This name is not case sensitive.

## GithubApi.CreateGitCommit



Create a new Git commit on a GitHub repository.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **repository\_owner** (`string`, optional) The account owner of the repository. This name is not case sensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **repository\_name** (`string`, optional) The name of the GitHub repository (case insensitive). Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## GithubApi.FetchCommitInfo



Retrieve details and signature verification for a Git commit.

**Parameters**

-   **commit\_sha** (`string`, required) The SHA hash of the commit to retrieve details and verification status for.
-   **repository\_name** (`string`, required) The name of the repository to query. This input is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.

## GithubApi.ListGitMatchingRefs



Retrieve Git references matching a specific name pattern.

**Parameters**

-   **reference\_pattern** (`string`, required) The pattern to match against Git references (e.g., heads/branch or tags/tag). Leave empty to retrieve all references.
-   **repository\_name** (`string`, required) The name of the repository to search for references. This name is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive. Specify the username or organization name that owns the repository.

## GithubApi.GetGitReference



Fetch a specific Git reference from a repository.

**Parameters**

-   **git\_reference** (`string`, required) The reference to the Git branch or tag, formatted as `heads/<branch name>` or `tags/<tag name>`.
-   **repository\_name** (`string`, required) The name of the GitHub repository. It is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.

## GithubApi.CreateGitReference



Create a new reference in a GitHub repository.

**Parameters**

-   **full\_reference\_name** (`string`, required) The fully qualified reference name (e.g., ‘refs/heads/master’). Must start with ‘refs’ and include at least two slashes.
-   **reference\_sha** (`string`, required) The SHA-1 value for the reference. Required for creating a new reference in the repository.
-   **repository\_name** (`string`, required) The case-insensitive name of the GitHub repository to create a reference in.
-   **repository\_owner** (`string`, required) The account owner of the repository, not case sensitive.
-   **authentication\_token** (`string`, optional) The GitHub authentication token required to authorize the API request.

## GithubApi.DeleteGitReference



Deletes a specified Git reference in a repository.

**Parameters**

-   **git\_reference\_to\_delete** (`string`, required) The Git reference to delete, such as a branch or tag name. This should match the exact format used in the repository.
-   **repository\_name** (`string`, required) The name of the repository to delete the reference from. It is not case sensitive.
-   **repository\_owner** (`string`, required) The GitHub username of the repository owner. This is not case sensitive.

## GithubApi.UpdateGitReference



Update a Git reference in a GitHub repository.

**Parameters**

-   **fully\_qualified\_reference\_name** (`string`, required) The fully qualified reference to update, e.g., `refs/heads/master`. Must start with `refs` and include at least two slashes.
-   **repository\_name** (`string`, required) The name of the repository in GitHub. It is not case sensitive.
-   **repository\_owner** (`string`, required) The GitHub username or organization name that owns the repository. Not case sensitive.
-   **target\_sha1\_value** (`string`, required) The SHA1 value to set the Git reference to. This should be a valid commit SHA in the repository.
-   **force\_update** (`boolean`, optional) Set to true to force the update and allow overwriting. False ensures a fast-forward update, preventing overwriting.

## GithubApi.CreateGitTag



Create a Git tag object on GitHub.

**Parameters**

-   **git\_object\_sha** (`string`, required) The SHA of the Git object to tag, typically a commit, tree, or blob.
-   **repository\_name** (`string`, required) The name of the repository. This value is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.
-   **tag\_message** (`string`, required) The message or description for the tag, providing context or details about it.
-   **tag\_name** (`string`, required) The name of the tag, typically a version (e.g., ‘v0.0.1’).
-   **tag\_object\_type** (`string`, required) Specifies the type of the object being tagged. Acceptable values are ‘commit’, ‘tree’, or ‘blob’.
-   **author\_of\_tag\_name** (`string`, optional) The name of the author of the tag. It should be a string providing the full name.
-   **tagger\_email** (`string`, optional) The email address of the tag author. This should be in a valid email format.
-   **tagging\_date** (`string`, optional) The date and time when the object was tagged, in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.

## GithubApi.GetGitTagSignatureVerification



Retrieve verification details of a git tag signature.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository. This value is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the GitHub repository. This name is not case sensitive.
-   **tag\_sha** (`string`, required) The SHA hash identifier of the git tag to be verified. This should be a string.

## GithubApi.CreateGitTree



Create or modify a git tree in a GitHub repository.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **repository\_owner** (`string`, optional) The GitHub account owner of the repository. The name is not case sensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **repository\_name** (`string`, optional) The name of the repository. It is not case sensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## GithubApi.GetGitTree



Fetch a git tree by its SHA1 value from a GitHub repo.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository. This is case-insensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.
-   **tree\_sha** (`string`, required) The SHA1 value of the tree to fetch. This identifier is necessary to specify which tree structure should be retrieved from the repository.
-   **enable\_recursive\_retrieval** (`string`, optional) If set, returns objects/subtrees referenced by the provided tree SHA. Use values: ‘0’, ‘1’, ‘true’, ‘false’. Omit to disable recursion.

## GithubApi.ListRepositoryWebhooks



Retrieve webhooks for a specified GitHub repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the repository. This value is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository, not case sensitive.
-   **result\_page\_number** (`integer`, optional) The page number of webhooks results to fetch from the repository.
-   **results\_per\_page** (`integer`, optional) Specify the number of webhooks to list per page, with a maximum of 100.

## GithubApi.CreateGithubRepoWebhook



Create a webhook for a GitHub repository.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **repository\_owner** (`string`, optional) The account owner of the GitHub repository. It is case insensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **repository\_name** (`string`, optional) The name of the GitHub repository. The name is not case sensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## GithubApi.DeleteRepoWebhook



Delete a webhook from a GitHub repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository. This input is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. This name is not case sensitive. Provide the GitHub username or organization name.
-   **webhook\_identifier** (`integer`, required) The unique integer identifier of the webhook to be deleted.

## GithubApi.GetRepoWebhook



Retrieve the webhook configuration for a specific repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the repository. This value is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.
-   **webhook\_id** (`integer`, required) The unique identifier of the webhook to be retrieved.

## GithubApi.UpdateGithubRepoWebhook



Update a webhook for a GitHub repository.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **repository\_owner** (`string`, optional) The account owner of the repository. The name is not case sensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **repository\_name** (`string`, optional) The name of the GitHub repository to update. It is not case sensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **webhook\_unique\_identifier** (`integer`, optional) The unique identifier of the webhook to be updated. It must be an integer. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## GithubApi.GetRepoWebhookConfig



Get the webhook configuration for a GitHub repository.

**Parameters**

-   **hook\_identifier** (`integer`, required) The unique identifier for the webhook. This is required to retrieve the specific webhook configuration for a repository.
-   **repository\_name** (`string`, required) The name of the GitHub repository. Not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. Provide a non-case sensitive username.

## GithubApi.UpdateRepoWebhookConfig



Update GitHub repository webhook configuration settings.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **repository\_owner** (`string`, optional) The account owner of the repository. The name is not case sensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **repository\_name** (`string`, optional) The name of the repository. Not case sensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **webhook\_hook\_id** (`integer`, optional) The unique identifier of the webhook to update in the repository. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## GithubApi.ListGithubWebhookDeliveries



Fetch webhook delivery events for a specific GitHub repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository (case insensitive).
-   **repository\_owner** (`string`, required) The account owner of the repository. Not case sensitive.
-   **webhook\_hook\_id** (`integer`, required) The unique identifier of the webhook. This is necessary to fetch the specific webhook deliveries for the repository.
-   **include\_redelivered\_events** (`boolean`, optional) Include redelivered webhook events in the results if set to true.
-   **pagination\_start\_cursor** (`string`, optional) The starting point for fetching the page of deliveries. Use the `link` header for next/previous page cursors.
-   **results\_per\_page** (`integer`, optional) The maximum number of webhook delivery results to fetch per page, up to 100.

## GithubApi.GetWebhookDelivery



Retrieve a specific webhook delivery from a repository.

**Parameters**

-   **hook\_identifier** (`integer`, required) The unique identifier of the webhook within a repository. It is an integer value required to specify which webhook’s delivery information to retrieve.
-   **repository\_name** (`string`, required) The name of the repository. The name is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository, not case sensitive.
-   **webhook\_delivery\_id** (`integer`, required) The unique identifier of the specific webhook delivery to retrieve details for. This is an integer value.

## GithubApi.RedeliverGithubWebhook



Redelivers a webhook delivery for a GitHub repository.

**Parameters**

-   **hook\_unique\_identifier** (`integer`, required) The unique identifier for the GitHub webhook hook. This ID is required to specify which webhook to redeliver.
-   **repository\_name** (`string`, required) The name of the repository. It is not case sensitive.
-   **repository\_owner** (`string`, required) The repository’s account owner. The name is not case sensitive.
-   **webhook\_delivery\_id** (`integer`, required) The unique identifier for the webhook delivery attempt to be redelivered.

## GithubApi.SendPingEventToWebhook



Triggers a ping event to a GitHub webhook.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository. Case insensitive.
-   **repository\_owner** (`string`, required) The GitHub account owner of the repository. This name is not case-sensitive.
-   **webhook\_identifier** (`integer`, required) The unique identifier of the GitHub webhook to send the ping event to. Must be an integer.

## GithubApi.TriggerGithubWebhookTest



Trigger a GitHub webhook test with the latest push event.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository. This parameter is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. This is not case sensitive.
-   **webhook\_identifier** (`integer`, required) The unique identifier of the webhook to be tested. This integer value specifies which webhook to trigger in the repository.

## GithubApi.GetGithubAppRepoInstallation



Fetches GitHub App installation info for a repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the repository. It is not case sensitive and identifies the specific repository for which to retrieve GitHub App installation information.
-   **repository\_owner** (`string`, required) The account owner’s name for the repository, not case sensitive.

## GithubApi.ListRepoInvitations



List open invitations for a GitHub repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the repository. It’s not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the GitHub repository. The name is not case sensitive.
-   **results\_page\_number** (`integer`, optional) Specifies the page number to fetch results from, used for pagination.
-   **results\_per\_page** (`integer`, optional) The number of invitations to display per page, with a maximum limit of 100.

## GithubApi.DeleteRepoInvitation



Delete a repository invitation on GitHub.

**Parameters**

-   **invitation\_id** (`integer`, required) The unique identifier for the repository invitation to be deleted. It must be an integer.
-   **repository\_name** (`string`, required) The name of the GitHub repository to delete the invitation from. It is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. This value is not case sensitive.

## GithubApi.UpdateRepoInvitation



Update a repository invitation on GitHub.

**Parameters**

-   **invitation\_id** (`integer`, required) The unique identifier of the invitation to be updated. It must be an integer.
-   **repository\_name** (`string`, required) The name of the repository to update the invitation for. It is not case sensitive.
-   **repository\_owner** (`string`, required) The GitHub username of the account owner of the repository. It’s not case sensitive.
-   **user\_permissions** (`string`, optional) Specify the permission level for the user on the repository. Valid values are `read`, `write`, `maintain`, `triage`, and `admin`.

## GithubApi.ListGithubIssuesForRepo



Retrieve open issues from a GitHub repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository to fetch issues from. This is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.
-   **assignee\_filter** (`string`, optional) Filter issues by assignee. Use a username, `none` for unassigned, or `*` for any assignee.
-   **issue\_creator** (`string`, optional) The GitHub username of the person who created the issue.
-   **issue\_labels** (`string`, optional) Comma separated list of label names to filter issues, e.g., ‘bug,ui,@high’.
-   **issue\_state** (`string`, optional) Indicates the state of issues to retrieve: ‘open’, ‘closed’, or ‘all’.
-   **mentioned\_user** (`string`, optional) A GitHub username to filter issues where this user is mentioned.
-   **milestone\_identifier** (`string`, optional) Filter issues by milestone. Use an integer for a specific milestone, ”\*” for any milestone, or “none” for no milestones.
-   **results\_page\_number** (`integer`, optional) Specifies which page of results to fetch. Use an integer value to navigate through paginated results.
-   **results\_per\_page** (`integer`, optional) Number of results per page, up to a maximum of 100.
-   **sort\_direction** (`string`, optional) The direction to sort the results by. Use ‘asc’ for ascending and ‘desc’ for descending.
-   **sort\_issues\_by** (`string`, optional) Specify sorting criteria for issues: ‘created’, ‘updated’, or ‘comments’.
-   **updated\_since\_timestamp** (`string`, optional) Only show issues or pull requests updated after this timestamp in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.

## GithubApi.CreateGithubIssue



Create a new issue in a GitHub repository.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **repository\_owner** (`string`, optional) The account owner of the GitHub repository. Provide the username or organization name, case insensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **repository\_name** (`string`, optional) The name of the GitHub repository. Case insensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## GithubApi.ListIssueComments



Fetch comments for all issues in a repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the repository. The name is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository, not case sensitive.
-   **results\_page\_number** (`integer`, optional) The page number of results to fetch for issue comments in a repository.
-   **results\_per\_page** (`integer`, optional) Specify the number of results to display per page, up to a maximum of 100.
-   **sort\_direction** (`string`, optional) Sets the sorting order, `asc` for ascending or `desc` for descending, used with `sort`.
-   **sort\_property** (`string`, optional) The property to sort the issue comments by. Use ‘created’ for when the repo was starred or ‘updated’ for last push.
-   **updated\_after\_timestamp** (`string`, optional) Filter comments updated after this timestamp in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.

## GithubApi.DeleteGithubIssueComment



Delete a specific comment from a GitHub issue.

**Parameters**

-   **issue\_comment\_id** (`integer`, required) The unique identifier of the comment to be deleted.
-   **repository\_name** (`string`, required) The name of the repository. It is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. This is not case sensitive. Provide the username or organization name.

## GithubApi.GetGithubIssueComment



Retrieve a comment from a GitHub issue.

**Parameters**

-   **comment\_identifier** (`integer`, required) The unique integer identifier for the GitHub issue comment.
-   **repository\_name** (`string`, required) The name of the repository. It is not case sensitive and is required to identify the repository within an account.
-   **repository\_owner** (`string`, required) The account owner of the repository on GitHub. This is not case sensitive.

## GithubApi.UpdateGithubIssueComment



Update a comment on a GitHub issue.

**Parameters**

-   **comment\_contents** (`string`, required) The new text for the GitHub issue comment. This will replace the current contents of the comment.
-   **comment\_identifier** (`integer`, required) The unique numerical identifier of the GitHub issue comment to update.
-   **repository\_name** (`string`, required) The name of the repository. It is case-insensitive.
-   **repository\_owner** (`string`, required) The GitHub account owner of the repository. The name is not case sensitive.

## GithubApi.ListIssueCommentReactions



Retrieve reactions for a GitHub issue comment.

**Parameters**

-   **comment\_id** (`integer`, required) The unique identifier for the specific issue comment whose reactions are to be listed.
-   **repository\_name** (`string`, required) The name of the repository. This is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. This value is not case sensitive.
-   **reaction\_type** (`string`, optional) Specify a single reaction type to filter results. Use values like ‘+1’, ‘-1’, ‘laugh’, etc. Omit to list all reactions.
-   **results\_page\_number** (`integer`, optional) Page number of results to fetch from the reactions list.
-   **results\_per\_page** (`integer`, optional) The number of reactions to retrieve per page, with a maximum of 100.

## GithubApi.AddReactionToGithubComment



Add a reaction to a GitHub issue comment.

**Parameters**

-   **comment\_unique\_identifier** (`integer`, required) The unique identifier for the GitHub comment to which a reaction is being added.
-   **reaction\_type** (`string`, required) The type of reaction to add to the issue comment. Valid options: ‘+1’, ‘-1’, ‘laugh’, ‘confused’, ‘heart’, ‘hooray’, ‘rocket’, ‘eyes’.
-   **repository\_name** (`string`, required) The name of the GitHub repository. This name is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.

## GithubApi.DeleteGithubIssueCommentReaction



Deletes a reaction from a GitHub issue comment.

**Parameters**

-   **issue\_comment\_id** (`integer`, required) The unique identifier of the issue comment from which the reaction will be deleted.
-   **reaction\_identifier** (`integer`, required) The unique identifier of the reaction to be deleted from the issue comment.
-   **repository\_name** (`string`, required) The name of the GitHub repository. It is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.

## GithubApi.ListGithubRepoIssueEvents



Retrieve events for issues in a GitHub repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository. It is not case sensitive.
-   **repository\_owner** (`string`, required) Specify the account owner of the GitHub repository. The name is not case sensitive.
-   **results\_page\_number** (`integer`, optional) Specifies the page number of the issue events results to fetch from the repository.
-   **results\_per\_page** (`integer`, optional) Specify the number of results per page, with a maximum of 100.

## GithubApi.FetchGithubIssueEvent



Retrieve details of a specific GitHub issue event.

**Parameters**

-   **event\_id** (`integer`, required) The unique identifier for the GitHub issue event to retrieve details for. It must be an integer.
-   **repository\_name** (`string`, required) The name of the repository. The name is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive. Provide the GitHub username or organization name.

## GithubApi.GetGithubIssueDetails



Fetch details of a specific issue or pull request on GitHub.

**Parameters**

-   **issue\_identifier** (`integer`, required) The unique number that identifies the issue or pull request on GitHub.
-   **repository\_name** (`string`, required) The name of the GitHub repository. This is not case sensitive.
-   **repository\_owner** (`string`, required) The GitHub username of the repository owner. It is not case sensitive.

## GithubApi.UpdateGithubIssue



Update details of a GitHub issue.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **repository\_owner** (`string`, optional) The account owner of the GitHub repository, case insensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **repository\_name** (`string`, optional) The name of the repository to update the issue in. It is not case sensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **issue\_identifier** (`integer`, optional) The unique number identifying the GitHub issue to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## GithubApi.RemoveIssueAssignees



Remove assignees from a GitHub issue.

**Parameters**

-   **issue\_number** (`integer`, required) The unique number identifying the GitHub issue to modify.
-   **repository\_name** (`string`, required) The name of the repository. This is case-insensitive and used to identify the specific repository affected.
-   **repository\_owner** (`string`, required) The account owner of the GitHub repository. This value is not case sensitive.
-   **assignees\_to\_remove** (`array[string]`, optional) List of usernames to remove as assignees from the issue. Only users with push access will see changes.

## GithubApi.AssignGithubIssue



Assign users to a GitHub issue.

**Parameters**

-   **issue\_number** (`integer`, required) The number that identifies the GitHub issue to which assignees will be added.
-   **repository\_name** (`string`, required) The name of the repository. This field is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.
-   **assignee\_usernames** (`array[string]`, optional) Usernames of people to assign to the issue. Only users with push access can be assigned.

## GithubApi.CheckUserAssignPermission



Check if a user can be assigned to a GitHub issue.

**Parameters**

-   **assignee\_username** (`string`, required) The GitHub username of the person to check for assignment permission.
-   **issue\_identifier** (`integer`, required) The number that identifies the specific issue in the repository.
-   **repository\_name** (`string`, required) The name of the repository, not case sensitive, where the issue is located.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.

## GithubApi.ListGithubIssueComments



Retrieve comments for a specific GitHub issue.

**Parameters**

-   **issue\_number** (`integer`, required) The unique number identifying the GitHub issue to retrieve comments for.
-   **repository\_name** (`string`, required) The name of the GitHub repository (case insensitive).
-   **repository\_owner** (`string`, required) The account owner of the repository. Provide the username as a case-insensitive string.
-   **page\_number** (`integer`, optional) Specify the page number of results to fetch when listing comments for pagination purposes.
-   **results\_per\_page** (`integer`, optional) The number of comments to retrieve per page, maximum 100.
-   **since\_timestamp** (`string`, optional) Show notifications updated after this time in ISO 8601 format (`YYYY-MM-DDTHH:MM:SSZ`).

## GithubApi.GithubCreateIssueComment



Create a comment on a GitHub issue.

**Parameters**

-   **comment\_content** (`string`, required) The text content of the comment to be added to the issue.
-   **issue\_identifier** (`integer`, required) The unique number identifying the GitHub issue.
-   **repository\_name** (`string`, required) The name of the repository where the issue is located. The name is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. Not case sensitive.

## GithubApi.ListGithubIssueEvents



Retrieve events for a specific GitHub issue.

**Parameters**

-   **issue\_number** (`integer`, required) The number that identifies the issue within the repository. This is required to fetch the related events.
-   **repository\_name** (`string`, required) The name of the GitHub repository. It is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the GitHub repository. This input is case insensitive.
-   **results\_page\_number** (`integer`, optional) The page number to fetch results from when listing issue events.
-   **results\_per\_page** (`integer`, optional) The number of issue events to return per page, with a maximum of 100.

## GithubApi.RemoveAllLabelsFromGithubIssue



Remove all labels from a GitHub issue.

**Parameters**

-   **github\_issue\_number** (`integer`, required) The identifier number for the GitHub issue from which all labels should be removed.
-   **repository\_name** (`string`, required) The name of the repository. It is not case sensitive and must be provided as a string.
-   **repository\_owner** (`string`, required) The GitHub account owner of the repository, case-insensitive.

## GithubApi.ListLabelsOnGithubIssue



Retrieve all labels associated with a GitHub issue.

**Parameters**

-   **issue\_number** (`integer`, required) The unique identifier for the GitHub issue you wish to retrieve labels for.
-   **repository\_name** (`string`, required) The name of the repository. It is not case sensitive and identifies where the issue is located.
-   **repository\_owner** (`string`, required) The account owner of the repository. Provide a non-case-sensitive string.
-   **results\_page\_number** (`integer`, optional) The page number of results to fetch from the GitHub API for an issue’s labels.
-   **results\_per\_page** (`integer`, optional) Number of labels to retrieve per page, maximum is 100.

## GithubApi.AddLabelsToGithubIssue



Add labels to a GitHub issue to categorize it.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **repository\_owner** (`string`, optional) The GitHub account owner of the repository. This value is not case sensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **repository\_name** (`string`, optional) The name of the GitHub repository where the issue exists. It is not case sensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **issue\_number** (`integer`, optional) The numeric identifier of the issue to which labels will be added. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## GithubApi.SetGithubIssueLabels



Set new labels for a GitHub issue.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **repository\_owner** (`string`, optional) The GitHub username or organization name of the repository owner. Not case sensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **repository\_name** (`string`, optional) The name of the repository. This is not case sensitive and identifies the repository within which the issue resides. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **issue\_number** (`integer`, optional) The unique identifier number for the GitHub issue to update labels. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## GithubApi.RemoveIssueLabel



Remove a specified label from a GitHub issue.

**Parameters**

-   **issue\_number** (`integer`, required) The unique number identifying the issue in the repository.
-   **label\_name** (`string`, required) Specifies the label to be removed from the GitHub issue. The label name is case-sensitive.
-   **repository\_name** (`string`, required) The name of the repository where the issue resides. It is case-insensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. This value is not case sensitive.

## GithubApi.UnlockGithubIssue



Unlock a locked GitHub issue conversation.

**Parameters**

-   **issue\_id** (`integer`, required) The unique identifier for the GitHub issue to be unlocked.
-   **repository\_name** (`string`, required) The name of the GitHub repository. Not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.

## GithubApi.LockGithubIssue



Lock a GitHub issue or pull request conversation.

**Parameters**

-   **issue\_number** (`integer`, required) The number that identifies the GitHub issue to lock.
-   **repository\_name** (`string`, required) The name of the repository in which the issue or pull request exists. The name is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. This name is not case sensitive.
-   **issue\_lock\_reason** (`string`, optional) The reason for locking the conversation. Acceptable values: ‘off-topic’, ‘too heated’, ‘resolved’, ‘spam’.

## GithubApi.ListIssueReactions



Retrieve reactions from a GitHub issue.

**Parameters**

-   **issue\_number** (`integer`, required) The number that identifies the issue in the GitHub repository.
-   **repository\_name** (`string`, required) The name of the GitHub repository. It is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.
-   **reaction\_type\_to\_filter** (`string`, optional) Filter reactions by a specific type (e.g., ‘+1’, ‘heart’). Omit to list all reactions.
-   **results\_page\_number** (`integer`, optional) Specify the page number of results to fetch. Useful for pagination through large result sets.
-   **results\_per\_page** (`integer`, optional) Specify the number of results per page, with a maximum of 100.

## GithubApi.AddReactionToGithubIssue



Add a reaction to a GitHub issue.

**Parameters**

-   **github\_issue\_number** (`integer`, required) The number that uniquely identifies the issue on GitHub.
-   **reaction\_type\_to\_add** (`string`, required) The reaction type to add to the issue. Options include ‘+1’, ‘-1’, ‘laugh’, ‘confused’, ‘heart’, ‘hooray’, ‘rocket’, ‘eyes’.
-   **repository\_name** (`string`, required) The name of the GitHub repository. This is not case sensitive.
-   **repository\_owner** (`string`, required) The GitHub account owner of the repository. The name is not case sensitive.

## GithubApi.DeleteGithubIssueReaction



Deletes a reaction from a GitHub issue.

**Parameters**

-   **issue\_number** (`integer`, required) The number identifying the issue in the repository.
-   **reaction\_identifier** (`integer`, required) The unique identifier of the reaction to be deleted from a GitHub issue.
-   **repository\_name** (`string`, required) The name of the GitHub repository. This value is not case sensitive. It identifies which repository the issue belongs to.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.

## GithubApi.GetIssueTimelineEvents



Retrieve timeline events for a GitHub issue.

**Parameters**

-   **issue\_identifier** (`integer`, required) The unique number identifying the GitHub issue.
-   **repository\_name** (`string`, required) The name of the repository in GitHub. It is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository, not case sensitive.
-   **results\_page\_number** (`integer`, optional) Page number of results to fetch, used for pagination.
-   **results\_per\_page** (`integer`, optional) Specify the number of timeline events to retrieve per page, with a maximum of 100.

## GithubApi.ListGithubDeployKeys



Retrieve deploy keys for a specific GitHub repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository. It is not case sensitive and identifies which repository’s deploy keys are listed.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.
-   **result\_page\_number** (`integer`, optional) Specify the page number of the deploy keys results to fetch.
-   **results\_per\_page** (`integer`, optional) Specify the number of results per page, with a maximum of 100.

## GithubApi.CreateGithubDeployKey



Create a read-only deploy key for a GitHub repository.

**Parameters**

-   **deploy\_key\_contents** (`string`, required) The public key contents to be added as a deploy key.
-   **repository\_name** (`string`, required) The case-insensitive name of the GitHub repository.
-   **repository\_owner** (`string`, required) The account owner of the GitHub repository. Name is not case sensitive.
-   **key\_title** (`string`, optional) A name for the deploy key for identification purposes.
-   **read\_only\_access** (`boolean`, optional) Set to `true` for read-only access. `False` allows both read and write access.

## GithubApi.DeleteGithubDeployKey



Delete a deploy key from a GitHub repository.

**Parameters**

-   **deploy\_key\_id** (`integer`, required) The unique identifier for the deploy key to be deleted from the repository.
-   **repository\_name** (`string`, required) The name of the GitHub repository. This value is not case sensitive.
-   **repository\_owner** (`string`, required) The GitHub account owner of the repository. Not case sensitive.

## GithubApi.GetGithubDeployKey



Retrieve a deploy key from a GitHub repository.

**Parameters**

-   **deploy\_key\_id** (`integer`, required) The unique identifier of the deploy key to retrieve from the repository.
-   **repository\_name** (`string`, required) The name of the GitHub repository. It is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.

## GithubApi.ListRepositoryLabels



Retrieve labels for a GitHub repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository, not case-sensitive.
-   **repository\_owner** (`string`, required) The GitHub username of the repository owner. It is not case sensitive.
-   **result\_page\_number** (`integer`, optional) The specific page number of results to fetch. Use this to navigate through paginated results.
-   **results\_per\_page** (`integer`, optional) Specify the number of results per page, with a maximum of 100.

## GithubApi.CreateGithubLabel



Creates a label in a specified GitHub repository.

**Parameters**

-   **label\_name** (`string`, required) The name of the label, supporting emojis using either native emoji or colon-style markup.
-   **repository\_name** (`string`, required) The name of the repository. It is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the GitHub repository. Case insensitive.
-   **label\_color\_hex** (`string`, optional) The hexadecimal color code for the label, without the leading ’#’.
-   **label\_description** (`string`, optional) A short description of the label, with a maximum of 100 characters.

## GithubApi.DeleteGithubLabel



Delete a label from a GitHub repository.

**Parameters**

-   **label\_name** (`string`, required) The name of the label to delete from the repository. It should match the label exactly.
-   **repository\_name** (`string`, required) The name of the GitHub repository from which to delete the label. It is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. Not case sensitive.

## GithubApi.GetGithubLabel



Retrieve details of a GitHub repository label.

**Parameters**

-   **label\_name** (`string`, required) The specific name of the label to retrieve from the GitHub repository.
-   **repository\_name** (`string`, required) The name of the GitHub repository. It is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the GitHub repository. Not case sensitive.

## GithubApi.UpdateGithubLabel



Update a label on a GitHub repository.

**Parameters**

-   **current\_label\_name** (`string`, required) The current name of the label to be updated. It should match exactly the label’s existing name.
-   **repository\_name** (`string`, required) The name of the repository to update the label in. The name is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.
-   **label\_color\_hex\_code** (`string`, optional) The hexadecimal color code for the label, excluding the leading `#`.
-   **label\_description** (`string`, optional) A short description of the label, limited to 100 characters or fewer.
-   **new\_label\_name** (`string`, optional) The updated label name for the GitHub label. Emojis can be embedded using native or colon-style markup (e.g., :strawberry:). For available emojis, refer to the Emoji cheat sheet.

## GithubApi.ListRepoLanguages



List programming languages used in a GitHub repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository. Case insensitive.
-   **repository\_owner** (`string`, required) The GitHub account owner of the repository. Case insensitive.

## GithubApi.DisableLfsForGithubRepo



Disable Git LFS for a specified GitHub repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository to disable LFS for. This value is not case sensitive.
-   **repository\_owner** (`string`, required) The GitHub account owner of the repository. This is not case sensitive.

## GithubApi.EnableGitLfs



Enables Git LFS for a specified repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the repository. The name is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.

## GithubApi.GetRepoLicense



Fetch the license file of a GitHub repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the repository. It is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.

## GithubApi.SyncForkWithUpstream



Sync a forked repository’s branch with the upstream repo.

**Parameters**

-   **branch\_name\_to\_sync** (`string`, required) The name of the branch in the forked repository to update with upstream changes.
-   **repository\_name** (`string`, required) The name of the repository to update. The name is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. Not case sensitive.

## GithubApi.MergeGithubBranch



Merge a branch into a GitHub repository.

**Parameters**

-   **base\_branch\_name** (`string`, required) The name of the base branch that the head will be merged into. This is the branch you want to merge changes into.
-   **head\_branch\_or\_commit\_sha** (`string`, required) The branch name or commit SHA1 to be merged into the base branch.
-   **repository\_name** (`string`, required) The name of the GitHub repository, not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.
-   **merge\_commit\_message** (`string`, optional) Custom commit message for the merge. Defaults to a standard message if not provided.

## GithubApi.ListGithubMilestones



Retrieve milestones from a GitHub repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository. This is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the GitHub repository. The name is not case sensitive.
-   **milestone\_state** (`string`, optional) Denotes the state of milestones to fetch: ‘open’, ‘closed’, or ‘all’.
-   **results\_page\_number** (`integer`, optional) The page number of milestones results to fetch.
-   **results\_per\_page** (`integer`, optional) The number of results to display per page (maximum 100).
-   **sort\_direction** (`string`, optional) The direction for sorting milestones: ‘asc’ for ascending or ‘desc’ for descending order.
-   **sort\_milestones** (`string`, optional) Criteria to sort milestones by. Options include `due_on` for due date or `completeness` for progress.

## GithubApi.CreateGithubMilestone



Create a milestone in a GitHub repository.

**Parameters**

-   **milestone\_title** (`string`, required) The title of the milestone to be created in the GitHub repository.
-   **repository\_name** (`string`, required) The name of the repository, not case sensitive.
-   **repository\_owner** (`string`, required) The GitHub username or organization name that owns the repository. Not case sensitive.
-   **milestone\_description** (`string`, optional) A text description of the milestone to be created in the GitHub repository.
-   **milestone\_due\_date** (`string`, optional) The due date for the milestone in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
-   **milestone\_state** (`string`, optional) State of the milestone, either ‘open’ or ‘closed’.

## GithubApi.DeleteGithubMilestone



Delete a milestone from a GitHub repository.

**Parameters**

-   **milestone\_identifier** (`integer`, required) The unique number that identifies the milestone to be deleted.
-   **repository\_name** (`string`, required) The repository name on GitHub, not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the GitHub repository. This should match the GitHub username or organization name. It is not case sensitive.

## GithubApi.GetGithubMilestone



Retrieve details of a GitHub milestone for a repository.

**Parameters**

-   **milestone\_id** (`integer`, required) The unique number identifying the milestone to retrieve details from a GitHub repository.
-   **repository\_name** (`string`, required) The name of the repository for which the milestone information is needed. This name is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.

## GithubApi.UpdateGithubMilestone



Update a GitHub repository milestone.

**Parameters**

-   **milestone\_id** (`integer`, required) The unique number identifying the milestone to update.
-   **repository\_name** (`string`, required) The name of the repository. The name is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.
-   **milestone\_description** (`string`, optional) A brief description of the milestone to be updated.
-   **milestone\_due\_date** (`string`, optional) The due date for the milestone in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
-   **milestone\_state** (`string`, optional) The state of the milestone. Accepted values are ‘open’ or ‘closed’.
-   **milestone\_title** (`string`, optional) The title of the milestone to be updated in the GitHub repository.

## GithubApi.ListLabelsForMilestone



Retrieve labels for issues in a specific milestone on GitHub.

**Parameters**

-   **milestone\_number** (`integer`, required) The number that uniquely identifies the milestone in the repository.
-   **repository\_name** (`string`, required) The name of the repository for which to list milestone labels. It is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.
-   **results\_page\_number** (`integer`, optional) Specify the page number of results to fetch for listing milestone labels.
-   **results\_per\_page** (`integer`, optional) Specify the number of results per page, with a maximum limit of 100.

## GithubApi.GetRepoNotifications



Retrieve notifications for the user in a specific repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository, not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.
-   **include\_read\_notifications** (`boolean`, optional) If `true`, include notifications that have been marked as read.
-   **results\_page\_number** (`integer`, optional) Specify the page number of the results to fetch. Useful for paginating through notifications.
-   **results\_per\_page** (`integer`, optional) Number of notifications to display per page, with a maximum of 100.
-   **show\_only\_participation\_notifications** (`boolean`, optional) If `true`, only show notifications where the user is directly participating or mentioned.
-   **updated\_after\_timestamp** (`string`, optional) Show notifications updated after this timestamp. Use ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
-   **updated\_before** (`string`, optional) Display notifications updated before this time in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ).

## GithubApi.MarkRepoNotificationsAsRead



Mark all repository notifications as read for the user.

**Parameters**

-   **repository\_name** (`string`, required) The name of the repository. The name is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.
-   **last\_checked\_timestamp** (`string`, optional) Timestamp for last notification check in ISO 8601 format. Omitting marks all as read. Defaults to current time if omitted.

## GithubApi.DeleteGithubPagesSite



Delete a GitHub Pages site from a repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the repository from which to delete the GitHub Pages site. This name is not case sensitive.
-   **repository\_owner** (`string`, required) The GitHub account owner of the repository. Case insensitive.

## GithubApi.GetGithubPagesSite



Retrieve details of a GitHub Pages site for a repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the repository. The name is not case sensitive.
-   **repository\_owner** (`string`, required) The GitHub account owner of the repository. Not case sensitive.

## GithubApi.ConfigureGithubPagesSite



Configures a GitHub Pages site for a repository.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **repository\_owner** (`string`, optional) The account owner of the repository. This is not case sensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **repository\_name** (`string`, optional) The name of the repository to configure. It is not case sensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## GithubApi.UpdateGithubPagesInfo



Update information for a GitHub Pages site.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **repository\_owner** (`string`, optional) The account owner of the repository. This value is not case sensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **repository\_name** (`string`, optional) The name of the repository. The name is not case sensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## GithubApi.ListGithubPagesBuilds



Retrieve GitHub Pages build statuses for a repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the repository to fetch the Pages build statuses for. It is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository, case-insensitive.
-   **results\_page\_number** (`integer`, optional) The page number of the results to fetch. Use this to navigate through paginated results.
-   **results\_per\_page** (`integer`, optional) The number of results per page, with a maximum of 100 allowed.

## GithubApi.RequestGithubPagesBuild



Request a build for your GitHub Pages site.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository. Case-insensitive.
-   **repository\_owner\_name** (`string`, required) The GitHub account owner of the repository. Case insensitive.

## GithubApi.GetLatestGithubPagesBuild



Retrieve the latest GitHub Pages build information.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository. The name is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. Enter the name without considering case sensitivity.

## GithubApi.GetGithubPagesBuild



Retrieve details of a GitHub Pages build for a repository.

**Parameters**

-   **build\_identifier** (`integer`, required) The unique identifier for the GitHub Pages build.
-   **repository\_name** (`string`, required) The name of the repository. This field is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. This is not case sensitive.

## GithubApi.CreateGithubPagesDeployment



Create a GitHub Pages deployment for a repository.

**Parameters**

-   **artifact\_url** (`string`, required) URL of the artifact (.zip or .tar) with static assets for deployment. Must belong to the repository.
-   **oidc\_token\_for\_deployment** (`string`, required) The OIDC token from GitHub Actions used to certify the deployment origin.
-   **repository\_name** (`string`, required) The name of the repository. The name is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. This is not case sensitive.
-   **build\_version\_identifier** (`string`, optional) A unique string representing the version of the deployment build.
-   **target\_environment\_for\_deployment** (`string`, optional) Specify the target environment for the GitHub Pages deployment (e.g., ‘production’, ‘staging’).

## GithubApi.ListRepoPreReceiveHooks



List pre-receive hooks for a GitHub repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the repository. This is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository, not case sensitive.
-   **result\_page\_number** (`integer`, optional) The number of the results page to fetch, starting from 1.
-   **results\_per\_page** (`integer`, optional) The number of results to display per page, maximum 100.
-   **sort\_direction** (`string`, optional) Specify ‘asc’ for ascending or ‘desc’ for descending sorting of results.
-   **sort\_hooks\_by** (`string`, optional) Specifies the attribute to sort the pre-receive hooks by. Possible values are ‘created’, ‘updated’, or ‘name’.

## GithubApi.RemoveRepoHookEnforcement



Remove overridden pre-receive hook enforcement for a repository.

**Parameters**

-   **pre\_receive\_hook\_identifier** (`integer`, required) The unique identifier of the pre-receive hook for the repository.
-   **repository\_name** (`string`, required) The case-insensitive name of the repository from which to remove the hook enforcement.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.

## GithubApi.GetPreReceiveHookForRepo



Retrieve a pre-receive hook for a specific repository.

**Parameters**

-   **pre\_receive\_hook\_id** (`integer`, required) The unique identifier of the pre-receive hook for the repository.
-   **repository\_name** (`string`, required) The name of the repository. It is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.

## GithubApi.UpdateHookEnforcementForRepo



Update pre-receive hook enforcement for a GitHub repository.

**Parameters**

-   **pre\_receive\_hook\_id** (`integer`, required) The unique identifier of the pre-receive hook to update enforcement settings for.
-   **repository\_name** (`string`, required) The name of the repository. This is case insensitive and identifies which repository’s hook enforcement settings to update.
-   **repository\_owner** (`string`, required) The GitHub account owner of the repository. This name is not case sensitive.
-   **hook\_enforcement\_state** (`string`, optional) The desired state of enforcement for the hook on this repository. Options: ‘enabled’, ‘disabled’, ‘testing’.

## GithubApi.ListRepositoryProjects



Retrieve projects from a specific GitHub repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository. It is not case sensitive.
-   **repository\_owner** (`string`, required) The GitHub account owner of the repository. This value is not case sensitive.
-   **project\_state** (`string`, optional) Specify which state of projects to return: ‘open’, ‘closed’, or ‘all’.
-   **results\_page\_number** (`integer`, optional) Specifies which page of the results to fetch. Useful for paginated responses.
-   **results\_per\_page** (`integer`, optional) The number of results to return per page. Maximum is 100.

## GithubApi.CreateGithubProjectBoard



Create a project board for a GitHub repository.

**Parameters**

-   **project\_name** (`string`, required) The name of the project board to be created in the repository.
-   **repository\_name** (`string`, required) The name of the GitHub repository. It is not case-sensitive.
-   **repository\_owner** (`string`, required) The username of the account that owns the repository. This is not case sensitive.
-   **project\_description** (`string`, optional) Provide a descriptive text for the project board to help clarify its purpose and content.

## GithubApi.ListPullRequests



Retrieve pull requests from a GitHub repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository from which to retrieve pull requests. This name is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.
-   **base\_branch\_name** (`string`, optional) Specify the base branch name to filter pull requests. Example: ‘gh-pages’.
-   **filter\_by\_head** (`string`, optional) Filter pull requests by head user/organization and branch in `user:ref-name` format.
-   **filter\_by\_state** (`string`, optional) Filter pull requests by state: `open`, `closed`, or `all`.
-   **page\_number** (`integer`, optional) Page number of the results to fetch from the list of pull requests.
-   **results\_per\_page** (`integer`, optional) The number of pull requests to retrieve per page, with a maximum of 100 results allowed.
-   **sort\_direction** (`string`, optional) The direction of the sorting for pull requests. Use ‘asc’ for ascending or ‘desc’ for descending order. Defaults to ‘desc’ when ‘sort’ is ‘created’ or not specified.
-   **sort\_pull\_request\_results\_by** (`string`, optional) Specify the criterion for sorting pull request results. Options are ‘created’, ‘updated’, ‘popularity’, or ‘long-running’.

## GithubApi.CreateGithubPullRequest



Create a draft pull request on GitHub repositories.

**Parameters**

-   **repository\_name** (`string`, required) The name of the repository for the pull request. It is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the GitHub repository. Case-insensitive.
-   **source\_branch** (`string`, required) The name of the branch where your changes are implemented. Use `username:branch` format for cross-repository cases.
-   **target\_branch** (`string`, required) The branch name where changes are to be merged. Must be an existing branch in the current repository.
-   **is\_draft** (`boolean`, optional) Set to true to create the pull request as a draft. See GitHub documentation for more on draft pull requests.
-   **issue\_number\_for\_conversion** (`integer`, optional) Specify the issue number in the repository to convert into a pull request. Required unless a title is provided.
-   **maintainers\_can\_modify** (`boolean`, optional) Indicates if maintainers can modify the pull request. Set to true to allow modifications.
-   **pull\_request\_content** (`string`, optional) The descriptive content or message for the pull request.
-   **pull\_request\_title** (`string`, optional) The title of the new pull request. This is required unless an `issue` is specified.
-   **source\_repository\_name** (`string`, optional) Name of the repository where changes in the pull request were made. Required for cross-repository pull requests within the same organization.

## GithubApi.ListReviewCommentsForRepo



Retrieve review comments for all pull requests in a repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the repository to fetch review comments from. The name is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive. Specify the username or organization name.
-   **page\_number** (`integer`, optional) Specify the page number of the results to retrieve from the API. Used for pagination.
-   **results\_per\_page** (`integer`, optional) The number of review comments to retrieve per page, with a maximum limit of 100.
-   **sort\_direction** (`string`, optional) Specifies the order to sort the review comments. Options are ‘asc’ for ascending and ‘desc’ for descending. Note: This is ignored if no ‘sort’ parameter is set.
-   **sort\_reviews** (`string`, optional) Determines the order of review comments based on ‘created’, ‘updated’, or ‘created\_at’.
-   **updated\_after** (`string`, optional) Timestamp to filter notifications updated after this time in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.

## GithubApi.DeleteGithubReviewComment



Delete a review comment on a GitHub pull request.

**Parameters**

-   **comment\_id** (`integer`, required) The unique identifier for the review comment to delete. This must be an integer and corresponds to the specific comment you intend to remove from the GitHub pull request.
-   **repository\_name** (`string`, required) The name of the repository, case-insensitive.
-   **repository\_owner** (`string`, required) The GitHub account owner of the repository, not case sensitive.

## GithubApi.GetGithubReviewCommentDetails



Get details for a specific GitHub review comment.

**Parameters**

-   **comment\_id** (`integer`, required) The unique identifier of the GitHub review comment you want to retrieve details for.
-   **repository\_name** (`string`, required) The name of the GitHub repository. It is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. This value is not case sensitive.

## GithubApi.EditGithubReviewComment



Edit a review comment on a GitHub pull request.

**Parameters**

-   **comment\_identifier** (`integer`, required) The unique identifier for the GitHub review comment to be edited.
-   **comment\_text** (`string`, required) The content of the updated review comment.
-   **repository\_name** (`string`, required) The name of the repository. The name is not case sensitive.
-   **repository\_owner** (`string`, required) The GitHub account owner of the repository, not case sensitive.

## GithubApi.ListPullRequestCommentReactions



Retrieve reactions for a pull request review comment.

**Parameters**

-   **comment\_unique\_identifier** (`integer`, required) The unique identifier for the pull request review comment.
-   **repository\_name** (`string`, required) The name of the repository. It is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.
-   **filter\_reaction\_type** (`string`, optional) Specify a single reaction type to filter results. Leave blank to return all reactions.
-   **results\_page\_number** (`integer`, optional) Specify the page number of results to fetch for reactions to a pull request review comment.
-   **results\_per\_page** (`integer`, optional) Specify the number of reactions to return per page, up to a maximum of 100.

## GithubApi.AddReactionToPrComment



Adds a reaction to a pull request review comment on GitHub.

**Parameters**

-   **comment\_unique\_id** (`integer`, required) The unique identifier of the pull request review comment.
-   **reaction\_type\_for\_pr\_comment** (`string`, required) Specifies the type of reaction to add to the pull request review comment. Valid options are ‘+1’, ‘-1’, ‘laugh’, ‘confused’, ‘heart’, ‘hooray’, ‘rocket’, ‘eyes’.
-   **repository\_name** (`string`, required) The name of the repository where the comment is located. The name is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.

## GithubApi.DeletePullRequestCommentReaction



Delete a reaction from a pull request comment.

**Parameters**

-   **comment\_unique\_id** (`integer`, required) The unique identifier of the pull request comment to delete a reaction from.
-   **reaction\_unique\_identifier** (`integer`, required) The unique identifier for the reaction to delete from the pull request comment.
-   **repository\_name** (`string`, required) The name of the GitHub repository. It is case insensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. This is not case sensitive.

## GithubApi.GetPullRequestDetails



Retrieve details of a specific GitHub pull request.

**Parameters**

-   **pull\_request\_number** (`integer`, required) The unique number identifying the pull request to retrieve details for.
-   **repository\_name** (`string`, required) The name of the repository. The name is not case sensitive.
-   **repository\_owner** (`string`, required) Specifies the account owner of the repository. The name is not case sensitive.

## GithubApi.UpdatePullRequest



Update an existing pull request on GitHub.

**Parameters**

-   **pull\_request\_number** (`integer`, required) The unique number identifying the pull request.
-   **repository\_name** (`string`, required) The name of the repository to update the pull request in. The name is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. This name is not case sensitive.
-   **maintainers\_can\_modify** (`boolean`, optional) Boolean value indicating whether maintainers can modify the pull request.
-   **pull\_request\_body** (`string`, optional) Provide the updated content or description for the pull request.
-   **pull\_request\_state** (`string`, optional) Specifies whether the pull request should be ‘open’ or ‘closed’.
-   **pull\_request\_title** (`string`, optional) The new title for the pull request. Use this to update the PR title.
-   **target\_base\_branch** (`string`, optional) The name of the branch where changes should be pulled into. Must be an existing branch on the current repository.

## GithubApi.ListPullRequestReviewComments



Retrieve all review comments for a pull request.

**Parameters**

-   **pull\_request\_number** (`integer`, required) The unique number identifying the pull request within the repository.
-   **repository\_name** (`string`, required) The name of the GitHub repository. This is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.
-   **notifications\_since\_timestamp** (`string`, optional) Filter review comments updated after this timestamp in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
-   **page\_number\_to\_fetch** (`integer`, optional) The specific results page number to retrieve.
-   **results\_per\_page** (`integer`, optional) Specify the number of results to return per page, with a maximum limit of 100.
-   **sort\_direction** (`string`, optional) Specifies the direction to sort results. Use ‘asc’ for ascending or ‘desc’ for descending. Ignored without the ‘sort’ parameter.
-   **sort\_results\_by** (`string`, optional) Property to sort comments: ‘created’ or ‘updated’.

## GithubApi.CreatePullRequestReviewComment



Create a review comment on a GitHub pull request.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **repository\_owner** (`string`, optional) The GitHub username or organization name of the repository owner. This value is not case sensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **repository\_name** (`string`, optional) The name of the GitHub repository where the pull request exists. This value is not case sensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **pull\_request\_number** (`integer`, optional) The unique number that identifies the pull request within the repository. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## GithubApi.CreateReplyToReviewComment



Create a reply to a top-level review comment on a pull request.

**Parameters**

-   **pull\_request\_number** (`integer`, required) The number identifying the pull request to reply to.
-   **repository\_name** (`string`, required) The name of the repository. This name is not case sensitive and identifies the repository where the reply will be posted.
-   **repository\_owner** (`string`, required) The account owner of the repository. Not case sensitive.
-   **review\_comment\_text** (`string`, required) The content of the reply to the top-level review comment. This should be a string containing the reply text.
-   **review\_comment\_unique\_id** (`integer`, required) The unique identifier for the top-level review comment you are replying to. Replies to replies are not supported.

## GithubApi.ListPullRequestCommits



Retrieve up to 250 commits for a specific pull request.

**Parameters**

-   **pull\_request\_number** (`integer`, required) The unique number identifying the pull request within the repository.
-   **repository\_name** (`string`, required) The name of the repository. It is not case sensitive and should be given as a string.
-   **repository\_owner** (`string`, required) The account owner of the repository, not case sensitive.
-   **results\_page\_number** (`integer`, optional) Specify the page number of commit results to fetch. Useful for paginating through commit lists.
-   **results\_per\_page** (`integer`, optional) Specify the number of commit results to return per page, up to a maximum of 100.

## GithubApi.ListGithubPullRequestFiles



Retrieve files changed in a GitHub pull request.

**Parameters**

-   **pull\_request\_number** (`integer`, required) The unique number identifying the pull request.
-   **repository\_name** (`string`, required) The name of the GitHub repository. It is not case sensitive.
-   **repository\_owner** (`string`, required) The GitHub username of the repository owner. This is not case sensitive.
-   **results\_page\_number** (`integer`, optional) The page number of the results to fetch, used for pagination.
-   **results\_per\_page** (`integer`, optional) The number of files to return per page, with a maximum of 100.

## GithubApi.CheckPrMergeStatus



Check if a pull request has been merged.

**Parameters**

-   **pull\_request\_number** (`integer`, required) The unique number identifying the specific pull request to check.
-   **repository\_name** (`string`, required) The name of the repository. Input is case insensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. This value is not case sensitive. It specifies which user’s or organization’s repository contains the pull request.

## GithubApi.MergeGithubPullRequest



Merge a pull request on GitHub.

**Parameters**

-   **pull\_request\_number** (`integer`, required) The unique number identifying the pull request to be merged.
-   **repository\_name** (`string`, required) The name of the repository. It is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.
-   **commit\_title** (`string`, optional) Title for the automatic commit message after merging the pull request.
-   **extra\_commit\_message** (`string`, optional) Extra detail to append to the automatic commit message for the pull request.
-   **merge\_method** (`string`, optional) Specifies the method to merge the pull request. Options include ‘merge’, ‘squash’, or ‘rebase’.
-   **pull\_request\_head\_sha** (`string`, optional) SHA of the pull request head that must match for the merge to proceed.

## GithubApi.RemovePullRequestReviewers



Remove requested reviewers from a GitHub pull request.

**Parameters**

-   **pull\_request\_number** (`integer`, required) The unique identifier number for the pull request you want to modify.
-   **repository\_name** (`string`, required) The name of the repository from which to remove reviewers. It is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is case-insensitive.
-   **user\_logins\_to\_remove** (`array[string]`, required) An array of user logins to be removed from the pull request as reviewers.
-   **team\_slugs\_to\_remove** (`array[string]`, optional) An array of team slugs that should be removed as reviewers from the pull request. Each slug corresponds to a team associated with the repository.

## GithubApi.GetRequestedReviewersForPr



Retrieve users or teams requested for a pull request review.

**Parameters**

-   **pull\_request\_number** (`integer`, required) The unique identifier for the pull request in a GitHub repository.
-   **repository\_name** (`string`, required) The name of the GitHub repository. It is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.

## GithubApi.RequestGithubPullRequestReviewers



Request reviewers for a GitHub pull request.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **repository\_owner** (`string`, optional) The account owner of the repository. It should be a case-insensitive string. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **repository\_name** (`string`, optional) The name of the GitHub repository. This input is not case sensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **pull\_request\_number** (`integer`, optional) The number identifying the GitHub pull request for which reviewers will be requested. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## GithubApi.ListGithubPullRequestReviews



Retrieve reviews for a specific GitHub pull request.

**Parameters**

-   **pull\_request\_number** (`integer`, required) The unique identifier for the specific pull request to retrieve reviews for.
-   **repository\_name** (`string`, required) The name of the GitHub repository, not case sensitive.
-   **repository\_owner** (`string`, required) The GitHub username or organization name of the repository owner. Not case sensitive.
-   **results\_page\_number** (`integer`, optional) The page number of the pull request reviews to fetch. Used for pagination.
-   **results\_per\_page** (`integer`, optional) The number of reviews per page (maximum 100). Specify an integer value.

## GithubApi.CreateGithubPullRequestReview



Create a review for a GitHub pull request.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **repository\_owner** (`string`, optional) The account owner of the repository (case-insensitive). Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **repository\_name** (`string`, optional) The name of the repository where the pull request exists, not case sensitive. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **pull\_request\_number** (`integer`, optional) The number that uniquely identifies the pull request for which the review is being created. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## GithubApi.DeleteGithubPullRequestPendingReview



Delete a pending review for a GitHub pull request.

**Parameters**

-   **pull\_request\_number** (`integer`, required) The number identifying the specific pull request to delete the pending review from.
-   **repository\_name** (`string`, required) The name of the GitHub repository. This is not case sensitive.
-   **repository\_owner\_name** (`string`, required) The GitHub account owner of the repository. This is not case sensitive.
-   **unique\_review\_identifier** (`integer`, required) The unique identifier of the pending GitHub review to be deleted.

## GithubApi.GetGithubReview



Retrieve details of a specific pull request review from GitHub.

**Parameters**

-   **pull\_request\_number** (`integer`, required) The unique number identifying the pull request on GitHub.
-   **repository\_name** (`string`, required) The name of the GitHub repository. This field is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the GitHub repository. It is not case sensitive.
-   **review\_id** (`integer`, required) The unique numeric identifier for the specific review of the pull request.

## GithubApi.UpdatePullRequestReview



Update the review summary comment on a pull request.

**Parameters**

-   **pull\_request\_number** (`integer`, required) The unique number that identifies the pull request.
-   **repository\_name** (`string`, required) The name of the repository to update the review on. Case insensitive.
-   **repository\_owner** (`string`, required) The GitHub account owner of the repository, case insensitive.
-   **review\_body\_text** (`string`, required) The updated body text for the pull request review.
-   **review\_identifier** (`integer`, required) The unique integer ID of the review to be updated.

## GithubApi.GetReviewComments



Retrieve comments for a specific pull request review.

**Parameters**

-   **pull\_request\_number** (`integer`, required) The number that identifies the pull request to fetch comments from.
-   **repository\_name** (`string`, required) The name of the GitHub repository. This name is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the GitHub repository. It is not case sensitive.
-   **review\_id** (`integer`, required) The unique identifier of the review for which comments are being fetched.
-   **result\_page\_number** (`integer`, optional) Specify the page number of the results to fetch. Used to navigate paginated results.
-   **results\_per\_page** (`integer`, optional) Specify the number of results per page, up to a maximum of 100.

## GithubApi.DismissPullRequestReview



Dismiss a pull request review on GitHub.

**Parameters**

-   **dismissal\_message** (`string`, required) The message explaining the reason for dismissing the pull request review.
-   **pull\_request\_number** (`integer`, required) The unique number identifying the pull request to dismiss the review for.
-   **repository\_name** (`string`, required) The name of the GitHub repository. The name is not case sensitive.
-   **repository\_owner** (`string`, required) The username of the repository owner. This is not case sensitive and refers to the account that owns the repository.
-   **review\_identifier** (`integer`, required) The unique identifier for the pull request review to be dismissed.
-   **dismissal\_event** (`string`, optional) This is a required event type for dismissing a pull request review. Use ‘DISMISS’ to perform the dismissal action.

## GithubApi.SubmitPullRequestReview



Submit a review for a pull request on GitHub.

**Parameters**

-   **pull\_request\_number** (`integer`, required) The identifier number of the pull request to be reviewed.
-   **repository\_name** (`string`, required) The name of the repository. The name is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. Input is case insensitive.
-   **review\_action** (`string`, required) Specify the review action: `APPROVE`, `REQUEST_CHANGES`, or `COMMENT`. Leaving this empty sets the review to `PENDING`.
-   **review\_identifier** (`integer`, required) The unique identifier for the pull request review to be submitted.
-   **review\_body\_text** (`string`, optional) The body text of the pull request review. Provide detailed feedback or comments for the review.

## GithubApi.UpdatePullRequestBranch



Update a pull request branch with latest upstream changes.

**Parameters**

-   **pull\_request\_number** (`integer`, required) The unique number that identifies the pull request to update.
-   **repository\_name** (`string`, required) The name of the repository. The name is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.
-   **expected\_head\_sha** (`string`, optional) The most recent commit SHA of the pull request’s HEAD. Must match the pull request’s current HEAD to avoid a 422 error.

## GithubApi.GetRepositoryReadme



Retrieve the preferred README for a GitHub repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the repository. This is case insensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.
-   **commit\_branch\_tag\_name** (`string`, optional) Specify the commit, branch, or tag name. Defaults to the repository’s default branch if not provided.

## GithubApi.FetchRepoReadme



Retrieve the README from a specific repository directory.

**Parameters**

-   **readme\_directory\_path** (`string`, required) The path within the repository to search for the README file. Default is repository root if not specified.
-   **repository\_name** (`string`, required) The name of the repository. This input is case insensitive.
-   **repository\_owner** (`string`, required) The GitHub account owner of the repository. Case insensitive.
-   **commit\_branch\_or\_tag\_name** (`string`, optional) The name of the commit, branch, or tag. Defaults to the repository’s default branch (usually ‘master’).

## GithubApi.GetGithubReleases



Retrieve a list of releases for a GitHub repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository. Case insensitive.
-   **repository\_owner** (`string`, required) The GitHub account owner of the repository. The name is not case sensitive.
-   **results\_page\_number** (`integer`, optional) The specific page number of releases to fetch from a repository.
-   **results\_per\_page** (`integer`, optional) Specify the number of release results per page, with a maximum of 100.

## GithubApi.CreateGithubRelease



Creates a new release in a specified GitHub repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the repository on GitHub. This name is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.
-   **tag\_name\_for\_release** (`string`, required) The name of the tag for the release. This is used to label the GitHub release.
-   **auto\_generate\_release\_notes** (`boolean`, optional) Automatically generate the name and body for the release. If ‘name’ is provided, it is used; otherwise, a name is auto-generated. ‘Body’ is prepended to generated notes if specified.
-   **commit\_reference** (`string`, optional) The branch or commit SHA from which the Git tag is created. Defaults to the repo’s default branch.
-   **draft** (`boolean`, optional) Set to `true` for a draft (unpublished) release, or `false` for a published one.
-   **mark\_as\_prerelease** (`boolean`, optional) Set to `true` for a prerelease, `false` for a full release.
-   **release\_body\_text** (`string`, optional) Text describing the contents of the tag. This is the message or notes for the release, providing context or details about changes.
-   **release\_name** (`string`, optional) The name of the release. This identifies the release and can be a version or descriptive text.
-   **set\_latest\_release** (`boolean`, optional) Set whether this release should be the latest. Use ‘true’, ‘false’, or ‘legacy’. Drafts and prereleases cannot be set as latest.

## GithubApi.DeleteReleaseAsset



Deletes a specific release asset on GitHub.

**Parameters**

-   **asset\_identifier** (`integer`, required) The unique identifier for the GitHub release asset to be deleted.
-   **repository\_name** (`string`, required) The name of the repository. It is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.

## GithubApi.DownloadGithubReleaseAsset



Download binary content of a GitHub release asset.

**Parameters**

-   **asset\_unique\_identifier** (`integer`, required) The unique identifier of the asset to download from a GitHub release. Must be an integer.
-   **repository\_name** (`string`, required) The name of the GitHub repository, not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. It is not case sensitive.

## GithubApi.EditGithubReleaseAsset



Edit a GitHub release asset with push access.

**Parameters**

-   **release\_asset\_identifier** (`integer`, required) The unique integer identifier of the release asset to update.
-   **repository\_name** (`string`, required) The name of the repository. It is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.
-   **alternate\_asset\_description** (`string`, optional) Provide an alternate short description of the release asset, used instead of the filename.
-   **file\_name\_of\_asset** (`string`, optional) The file name of the asset. This is used to uniquely identify the asset file for the release.
-   **release\_asset\_state** (`string`, optional) Specifies the state of the release asset. Possible values might include ‘uploaded’, ‘deleted’, etc. (API documentation does not explicitly define options).

## GithubApi.GenerateGithubReleaseNotes



Generate release notes for a GitHub repository.

**Parameters**

-   **release\_tag\_name** (`string`, required) Specify the tag name for the release. Can be an existing tag or a new one.
-   **repository\_name** (`string`, required) The name of the GitHub repository. It is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the GitHub repository. This is not case sensitive.
-   **previous\_tag\_name** (`string`, optional) The name of the previous tag to use as the starting point for the release notes. It specifies the range of changes for this release.
-   **release\_configuration\_file\_path** (`string`, optional) Path to the configuration file in the repository for generating release notes. Defaults to ‘.github/release.yml’ or ‘.github/release.yaml’ if not specified.
-   **target\_commit** (`string`, optional) The commitish value that will target the release’s tag. Required if tag\_name doesn’t reference an existing tag. Otherwise, it’s ignored.

## GithubApi.GetLatestGithubRelease



Retrieve the latest full release from a GitHub repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository to retrieve the latest release from. It is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.

## GithubApi.GetGithubReleaseByTag



Retrieve GitHub release details by tag.

**Parameters**

-   **release\_tag** (`string`, required) The specific tag of the release to retrieve. This is used to identify and fetch details of the published release.
-   **repository\_name** (`string`, required) Specify the name of the repository. This is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive. Provide the GitHub username or organization name.

## GithubApi.DeleteGithubRelease



Delete a GitHub release with push access permissions.

**Parameters**

-   **release\_identifier** (`integer`, required) The unique identifier of the GitHub release to delete. This is an integer value.
-   **repository\_name** (`string`, required) The name of the repository. It’s not case sensitive.
-   **repository\_owner** (`string`, required) The GitHub account owner of the repository, not case sensitive.

## GithubApi.GetGithubReleaseDetails



Retrieve details of a specific GitHub release.

**Parameters**

-   **release\_id** (`integer`, required) The unique identifier for the specific GitHub release being queried.
-   **repository\_name** (`string`, required) The name of the GitHub repository. It is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.

## GithubApi.UpdateGithubRelease



Edit a GitHub release with push access.

**Parameters**

-   **release\_identifier** (`integer`, required) The unique integer identifier for the GitHub release to be updated.
-   **repository\_name** (`string`, required) The name of the repository. This field is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.
-   **commitish\_value** (`string`, optional) Determines the source for the Git tag; can be a branch or commit SHA. Defaults to the repo’s default branch if the tag exists.
-   **is\_draft** (`boolean`, optional) Set to `true` to make the release a draft, `false` to publish it.
-   **mark\_as\_prerelease** (`boolean`, optional) Set `true` to mark the release as a prerelease, or `false` to identify as a full release.
-   **release\_description** (`string`, optional) Text describing the contents and details of the release tag.
-   **release\_name** (`string`, optional) The name of the release to be updated in the repository. This is a user-friendly name for the release.
-   **release\_tag\_name** (`string`, optional) The name of the tag for the GitHub release. Used to identify the release version.
-   **set\_as\_latest\_release** (`boolean`, optional) Specifies if this release should be the latest. Use ‘true’, ‘false’, or ‘legacy’. Drafts/prereleases aren’t eligible.

## GithubApi.ListGithubReleaseAssets



Retrieve a list of assets for a GitHub release.

**Parameters**

-   **release\_identifier** (`integer`, required) The unique identifier for the GitHub release to fetch assets from.
-   **repository\_name** (`string`, required) The name of the GitHub repository. The name is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the GitHub repository. This is not case sensitive.
-   **page\_number** (`integer`, optional) The specific page number to fetch from the list of release assets. Useful for navigation in paginated results.
-   **results\_per\_page** (`integer`, optional) The number of results to display per page, with a maximum value of 100. This controls pagination.

## GithubApi.ListGithubReleaseReactions



Retrieve reactions for a GitHub release.

**Parameters**

-   **release\_identifier** (`integer`, required) The unique integer identifier of the GitHub release.
-   **repository\_name** (`string`, required) The name of the GitHub repository. Case sensitivity is not required.
-   **repository\_owner** (`string`, required) The account owner of the GitHub repository. This name is not case sensitive.
-   **reaction\_type\_filter** (`string`, optional) Specify a reaction type to filter results. Options are ‘+1’, ‘laugh’, ‘heart’, ‘hooray’, ‘rocket’, ‘eyes’. Leave empty to get all reactions.
-   **results\_page\_number** (`integer`, optional) Page number of the results to fetch for paginated reactions.
-   **results\_per\_page** (`integer`, optional) The number of results to display per page, up to a maximum of 100.

## GithubApi.AddGithubReleaseReaction



Add a reaction to a GitHub release.

**Parameters**

-   **reaction\_type** (`string`, required) The reaction type for the release, e.g., ‘+1’, ‘laugh’, ‘heart’. Choose from ‘+1’, ‘laugh’, ‘heart’, ‘hooray’, ‘rocket’, ‘eyes’.
-   **release\_identifier** (`integer`, required) The unique identifier for the GitHub release to which the reaction will be added.
-   **repository\_name** (`string`, required) The name of the repository. It is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository on GitHub. The name is not case sensitive.

## GithubApi.DeleteReleaseReaction



Delete a reaction from a GitHub release.

**Parameters**

-   **reaction\_identifier** (`integer`, required) The unique identifier for the reaction to be deleted from a release.
-   **release\_id** (`integer`, required) The unique identifier of the GitHub release. Use this to specify which release’s reaction you wish to delete.
-   **repository\_name** (`string`, required) The name of the repository. This field is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the GitHub repository. The name is not case sensitive.

## GithubApi.ListRepoCacheStatus



Lists the status of each repository cache replica.

**Parameters**

-   **repository\_name** (`string`, required) The name of the repository. It is not case sensitive and should clearly identify the GitHub repository of interest.
-   **repository\_owner** (`string`, required) The GitHub username of the repository owner. This is not case sensitive.
-   **result\_page\_number** (`integer`, optional) The page number of results to fetch, used for pagination.
-   **results\_per\_page** (`integer`, optional) The number of results per page (maximum 100).

## GithubApi.ListGithubRepoSecretAlerts



Retrieve secret scanning alerts for a GitHub repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository. It is not case sensitive.
-   **repository\_owner** (`string`, required) The GitHub account owner of the repository. The name is not case sensitive.
-   **alerts\_state\_filter** (`string`, optional) Filter alerts by their state: `open` or `resolved`. Specify to list only alerts in a specific state.
-   **cursor\_before\_event** (`string`, optional) Search for events only before this cursor. Leave empty to get the initial cursor.
-   **events\_after\_cursor** (`string`, optional) A cursor for paginated results to fetch events occurring after this point. Use an empty value to receive the initial cursor.
-   **filter\_by\_secret\_type** (`string`, optional) Comma-separated list of secret types to return. By default, all secret types are included.
-   **results\_page\_number** (`integer`, optional) Specifies the page number of the secret scanning alerts to retrieve. Use this to paginate results.
-   **results\_per\_page** (`integer`, optional) Specifies the number of secret scanning alerts to return per page, with a maximum of 100 items.
-   **secret\_alert\_resolutions\_filter** (`string`, optional) Comma-separated resolutions to filter alerts. Valid values: `false_positive`, `wont_fix`, `revoked`, `pattern_edited`, `pattern_deleted`, `used_in_tests`.
-   **sort\_direction** (`string`, optional) Specifies the direction to sort the results (‘asc’ for ascending, ‘desc’ for descending).
-   **sort\_results\_by\_property** (`string`, optional) Specifies the property to sort alerts: use ‘created’ for creation date, or ‘updated’ for last update or resolution date.

## GithubApi.GetGithubSecretScanningAlert



Retrieve a specific secret scanning alert from a GitHub repository.

**Parameters**

-   **alert\_identifier** (`integer`, required) The unique integer number identifying a GitHub secret scanning alert. This is found at the URL’s end for the alert or in the `number` field of the alert response.
-   **repository\_name** (`string`, required) The case-insensitive name of the repository from which to retrieve the secret scanning alert.
-   **repository\_owner** (`string`, required) The username of the account owner for the repository. Case insensitive.

## GithubApi.UpdateSecretScanningAlertStatus



Update the status of a secret scanning alert on GitHub.

**Parameters**

-   **alert\_identifier** (`integer`, required) The unique number identifying the secret scanning alert. Found in the alert URL or the response of `GET /repos/{owner}/{repo}/code-scanning/alerts`.
-   **alert\_state** (`string`, required) Set the state of the secret scanning alert to ‘open’ or ‘resolved’. ‘Resolution’ is required if set to ‘resolved’.
-   **repository\_name** (`string`, required) The name of the repository. Not case sensitive.
-   **repository\_owner** (`string`, required) The GitHub username or organization name that owns the repository. It is not case sensitive.
-   **alert\_resolution\_comment** (`string`, optional) An optional comment when closing an alert. Set to `null` if changing the alert state to `open`. Cannot be updated or deleted.
-   **resolution\_reason\_for\_secret\_scanning\_alert** (`string`, optional) Specifies the reason for resolving the alert when the state is set to ‘resolved’. Possible values: ‘None’, ‘false\_positive’, ‘wont\_fix’, ‘revoked’, ‘used\_in\_tests’.

## GithubApi.ListSecretScanningAlertLocations



Retrieve locations for a secret scanning alert in a repository.

**Parameters**

-   **alert\_number** (`integer`, required) The unique identifier number for a secret scanning alert. This can be found at the end of the URL for a code scanning alert on GitHub, or in the `number` field of the response from the `GET /repos/{owner}/{repo}/code-scanning/alerts` API call.
-   **repository\_name** (`string`, required) The name of the repository, case insensitive.
-   **repository\_owner** (`string`, required) The account owner of the GitHub repository. It is not case sensitive.
-   **results\_page\_number** (`integer`, optional) The page number of the results to fetch for the secret scanning alert locations.
-   **results\_per\_page** (`integer`, optional) Specify the number of results to return per page (maximum 100).

## GithubApi.ListRepoStargazers



Retrieve users who starred a specific GitHub repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository. It is case-insensitive.
-   **repository\_owner** (`string`, required) The username of the repository’s account owner. The name is not case sensitive.
-   **results\_page\_number** (`integer`, optional) Specify the page number for results pagination to retrieve a specific set of stargazers.
-   **results\_per\_page** (`integer`, optional) The number of stargazer results to display per page, with a maximum of 100.

## GithubApi.GetRepoCodeFrequency



Get weekly code frequency stats for a GitHub repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the repository. The name is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The GitHub username is not case sensitive.

## GithubApi.GetCommitActivity



Fetch yearly commit activity grouped by week.

**Parameters**

-   **repository\_name** (`string`, required) The name of the repository. This value is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.

## GithubApi.GetGithubContributorStats



Retrieve GitHub repository contributor statistics.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository. It is not case-sensitive.
-   **repository\_owner** (`string`, required) The account owner of the GitHub repository. This is not case sensitive.

## GithubApi.GetRepoCommitParticipation



Retrieve weekly commit participation stats for a GitHub repo.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository, which is not case sensitive.
-   **repository\_owner** (`string`, required) The repository account owner on GitHub. Case-insensitive.

## GithubApi.GetCommitActivityByHour



Retrieve commit activity per hour for a GitHub repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the repository to analyze. It is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository; this is not case sensitive.

## GithubApi.CreateGithubCommitStatus



Create a commit status for a specific SHA on GitHub.

**Parameters**

-   **commit\_sha** (`string`, required) The SHA hash of the commit to set the status for. This uniquely identifies the commit in the repository.
-   **repository\_name** (`string`, required) The name of the GitHub repository. It is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. Enter the owner’s username (not case sensitive).
-   **status\_state** (`string`, required) The state of the status for the commit. Possible values are ‘error’, ‘failure’, ‘pending’, or ‘success’.
-   **commit\_status\_target\_url** (`string`, optional) The URL associated with the status for easy navigation in GitHub. Example: a deep link to CI build output.
-   **status\_description** (`string`, optional) A short description of the commit status, providing context or details about the status.
-   **status\_label** (`string`, optional) A case-insensitive string label to differentiate this status from other systems.

## GithubApi.ListWatchersForRepo



Retrieve the list of users watching a GitHub repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository to list watchers for. It is not case sensitive.
-   **repository\_owner** (`string`, required) The GitHub account owner of the repository. It’s case insensitive.
-   **results\_page\_number** (`integer`, optional) Page number of the results to fetch. Helps in paginating through results.
-   **results\_per\_page** (`integer`, optional) The number of results to display per page, with a maximum of 100.

## GithubApi.UnsubscribeFromRepo



Stop receiving notifications for a repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository to unsubscribe from. It is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. It is not case sensitive.

## GithubApi.GetRepoSubscription



Retrieve subscription status for a GitHub repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository. The name is not case sensitive.
-   **repository\_owner** (`string`, required) The GitHub username of the repository owner. The name is not case sensitive.

## GithubApi.SetRepoSubscription



Manage your GitHub repository subscription settings.

**Parameters**

-   **repository\_name** (`string`, required) Specify the name of the GitHub repository to manage subscriptions. Not case sensitive.
-   **repository\_owner** (`string`, required) The username of the repository owner. Not case sensitive.
-   **block\_notifications** (`boolean`, optional) Set to true to block all notifications from this repository.
-   **receive\_notifications** (`boolean`, optional) Set to `true` to receive notifications from the repository.

## GithubApi.ListGithubRepoTags



Retrieve tags for a specified GitHub repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository to retrieve tags from. This is not case sensitive.
-   **repository\_owner** (`string`, required) The GitHub username or organization that owns the repository. Case insensitive.
-   **page\_number** (`integer`, optional) The page number to fetch the results from for the list of repository tags.
-   **results\_per\_page** (`integer`, optional) The number of results to display per page, with a maximum of 100.

## GithubApi.GetRepositoryTagProtectionStates



Fetch the tag protection states of a GitHub repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository. The name is not case sensitive.
-   **repository\_owner** (`string`, required) The GitHub username of the account owner for the repository. This value is not case sensitive.

## GithubApi.CreateRepositoryTagProtection



Create tag protection for a GitHub repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the repository. This is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.
-   **tag\_protection\_pattern** (`string`, required) An optional glob pattern for matching when enforcing tag protection.

## GithubApi.DeleteRepositoryTagProtection



Deletes a tag protection from a GitHub repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the repository. This field is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.
-   **tag\_protection\_identifier** (`integer`, required) The unique identifier for the tag protection to be deleted. Required for identifying which tag protection state to remove.

## GithubApi.DownloadGithubRepoTarball



Retrieve a URL to download a GitHub repository tarball.

**Parameters**

-   **branch\_or\_commit\_ref** (`string`, required) Specify the branch name or commit SHA for the repository. If omitted, the default branch is used.
-   **repository\_name** (`string`, required) The name of the GitHub repository. This input is not case sensitive. Specify the repository whose tarball you want to download.
-   **repository\_owner** (`string`, required) The GitHub account owner of the repository. It is not case sensitive.

## GithubApi.ListRepositoryTeams



Retrieve a list of teams for a specified GitHub repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository. Not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. This is case-insensitive.
-   **result\_page\_number** (`integer`, optional) The page number to fetch from the results. Use this to iterate through paginated data.
-   **results\_per\_page** (`integer`, optional) The number of results to include per page, with a maximum of 100.

## GithubApi.GetRepoTopics



Retrieve all topics for a specific GitHub repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository. The name is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. This is not case sensitive.
-   **page\_number** (`integer`, optional) The page number of results to fetch. Useful for paginating through large data sets.
-   **results\_per\_page** (`integer`, optional) The number of results to fetch per page, with a maximum of 100.

## GithubApi.UpdateGithubRepoTopics



Replace topics for a specific GitHub repository.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository. It is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. The name is not case sensitive.
-   **repository\_topic\_names** (`array[string]`, required) An array of topics to replace existing repository topics. To clear all topics, send an empty array. Topics must be lowercase.

## GithubApi.TransferGithubRepository



Initiate the transfer of a GitHub repository to a new owner.

**Parameters**

-   **new\_owner\_username\_or\_org** (`string`, required) The username or organization name to which the repository will be transferred.
-   **repository\_name** (`string`, required) The name of the repository to be transferred. Case-insensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository. Case insensitive.
-   **new\_repository\_name** (`string`, optional) The new name to be given to the repository. It should be a valid GitHub repository name.
-   **team\_ids\_to\_add** (`array[integer]`, optional) List of team IDs to add to the repository. Applicable only for organization-owned repositories.

## GithubApi.DownloadGithubRepoZip



Retrieve a URL to download a GitHub repository as a zip file.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository. The name is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the GitHub repository. Not case sensitive.
-   **repository\_reference** (`string`, required) Specify the branch, tag, or commit SHA to retrieve the zip archive from. Defaults to the repository’s default branch if omitted.

## GithubApi.CreateRepoFromTemplate



Create a new repository from a template.

**Parameters**

-   **new\_repository\_name** (`string`, required) The name of the new repository to be created using the template.
-   **template\_repository\_name** (`string`, required) The name of the repository template to use for creating the new repository.
-   **template\_repository\_owner** (`string`, required) Username or organization name that owns the template repository.
-   **create\_private\_repository** (`boolean`, optional) Set to true to create a private repository, or false to create a public one.
-   **include\_all\_branches\_from\_template** (`boolean`, optional) Set to true to include files from all branches in the template repository, not just the default branch. Default: false.
-   **repository\_description** (`string`, optional) A short description of the new GitHub repository to be created from the template.
-   **repository\_owner** (`string`, optional) The organization or user that will own the new repository. Must be a valid organization member if creating under an organization.

## GithubApi.ListPublicGithubRepositories



Retrieve all public GitHub repositories.

**Parameters**

-   **repository\_visibility** (`string`, optional) Specify types of repositories to return, such as ‘all’ or ‘public’.
-   **starting\_repository\_id** (`integer`, optional) Specify a repository ID to list only repositories with an ID greater than this value for pagination.

## GithubApi.ListGithubEnvironmentSecrets



Retrieve secrets for a GitHub environment.

**Parameters**

-   **environment\_name** (`string`, required) The name of the environment whose secrets are to be listed. This is necessary to identify the specific environment in the repository.
-   **repository\_unique\_identifier** (`integer`, required) The unique identifier of the repository. Required to fetch the environment secrets.
-   **results\_page\_number** (`integer`, optional) Page number of the results to fetch.
-   **results\_per\_page** (`integer`, optional) The number of results to display per page, with a maximum allowable value of 100.

## GithubApi.GetGithubEnvironmentPublicKey



Fetch the public key for a GitHub environment.

**Parameters**

-   **environment\_name** (`string`, required) The name of the GitHub environment for which to retrieve the public key.
-   **repository\_id** (`integer`, required) The unique identifier of the GitHub repository. It must be an integer value.

## GithubApi.DeleteGithubEnvironmentSecret



Delete a GitHub environment secret by name.

**Parameters**

-   **environment\_name** (`string`, required) Specify the name of the GitHub environment from which the secret will be deleted.
-   **repository\_id** (`integer`, required) The unique identifier of the repository to delete the secret from.
-   **secret\_name\_to\_delete** (`string`, required) The name of the secret to be deleted from the environment.

## GithubApi.GetEnvironmentSecretInfo



Retrieve details of an environment secret on GitHub.

**Parameters**

-   **environment\_name** (`string`, required) The name of the environment to access the secret from. Required to specify which environment’s secret details to retrieve.
-   **repository\_id** (`integer`, required) The unique identifier of the GitHub repository.
-   **secret\_name** (`string`, required) The name of the environment secret to retrieve information about.

## GithubApi.ManageGithubEnvironmentSecret



Create or update an encrypted environment secret on GitHub.

**Parameters**

-   **encrypted\_secret\_value** (`string`, required) The secret value encrypted with LibSodium using a public key. Retrieve the key from the ‘Get an environment public key’ endpoint.
-   **encryption\_key\_id** (`string`, required) The identifier for the encryption key used to encrypt the secret. This is required to ensure the correct decryption of the secret on GitHub.
-   **environment\_name** (`string`, required) The name of the environment in the GitHub repository where the secret will be created or updated.
-   **repository\_unique\_id** (`integer`, required) The unique identifier of the GitHub repository where the secret will be managed.
-   **secret\_name** (`string`, required) The name of the secret to be created or updated in the GitHub environment.

## GithubApi.ListGithubEnvironmentVariables



Retrieve environment variables from a GitHub repository’s environment.

**Parameters**

-   **environment\_name** (`string`, required) Specify the environment name to retrieve its variables within a GitHub repository.
-   **repository\_id** (`integer`, required) The unique identifier of the GitHub repository to retrieve environment variables from.
-   **results\_page\_number** (`integer`, optional) Specify the page number to retrieve results from. Use for paginated results.
-   **results\_per\_page** (`integer`, optional) Specifies the number of environment variables to return per page, with a maximum allowed value of 30.

## GithubApi.CreateGithubEnvVariable



Create an environment variable for GitHub Actions workflows.

**Parameters**

-   **environment\_name** (`string`, required) Specify the name of the environment where the variable will be created. This is required for defining the scope within GitHub Actions workflows.
-   **repository\_identifier** (`integer`, required) The unique identifier of the repository for which the environment variable is being created.
-   **variable\_name** (`string`, required) The name of the environment variable to be created.
-   **variable\_value** (`string`, required) The value assigned to the environment variable. Must be a string.

## GithubApi.DeleteGithubEnvVariable



Deletes an environment variable in a GitHub repository environment.

**Parameters**

-   **environment\_name** (`string`, required) The name of the environment from which the variable will be deleted.
-   **repository\_id** (`integer`, required) The unique identifier of the GitHub repository where the environment variable will be deleted.
-   **variable\_name** (`string`, required) The name of the environment variable to delete.

## GithubApi.GetGithubEnvVariable



Retrieve specific environment variable details from GitHub.

**Parameters**

-   **environment\_name** (`string`, required) The name of the environment to retrieve the variable from. Required for identifying the specific environment.
-   **repository\_id** (`integer`, required) The unique identifier of the GitHub repository.
-   **variable\_name** (`string`, required) The name of the environment variable to retrieve from the GitHub repository.

## GithubApi.UpdateGithubActionsEnvVar



Update an environment variable in GitHub Actions workflow.

**Parameters**

-   **environment\_name** (`string`, required) The name of the GitHub Actions workflow environment to update.
-   **repository\_id** (`integer`, required) The unique identifier of the repository to update the environment variable in.
-   **environment\_variable\_value** (`string`, optional) The new value for the GitHub Actions environment variable.
-   **variable\_identifier** (`string`, optional) The name of the environment variable to update.
-   **variable\_name** (`string`, optional) The name of the environment variable to update in the GitHub Actions workflow.

## GithubApi.ListProvisionedGroupsForEnterprise



Retrieve provisioned SCIM groups for an enterprise.

**Parameters**

-   **exclude\_attribute\_from\_results** (`string`, optional) Specify an attribute to exclude from the results to speed up response time.
-   **filter\_by\_attribute** (`string`, optional) Filter results by a specific attribute. Supported filters: `externalId`, `id`, `displayName`. Example: `externalId eq '9138790-10932-109120392-12321'`.
-   **results\_per\_page** (`integer`, optional) The number of SCIM group results to return per page for pagination.
-   **start\_index** (`integer`, optional) The starting index for pagination; specifies where to begin returning results.

## GithubApi.CreateEnterpriseScimGroup



Create a SCIM group for a GitHub enterprise account.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## GithubApi.DeleteScimGroupFromEnterprise



Delete a SCIM group from an enterprise.

**Parameters**

-   **scim\_group\_id** (`string`, required) The unique identifier of the SCIM group to delete from an enterprise.

## GithubApi.GetScimGroupInfo



Retrieve provisioning information for a SCIM group in an enterprise.

**Parameters**

-   **scim\_group\_identifier** (`string`, required) A unique identifier for the SCIM group to retrieve its provisioning information.
-   **exclude\_attributes** (`string`, optional) Specify attributes to exclude from the response to speed up retrieval.

## GithubApi.UpdateEnterpriseGroupAttributes



Update attributes for a provisioned enterprise group.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **scim\_group\_identifier** (`string`, optional) A unique identifier for the SCIM group to be updated. This is required to specify which group’s attributes or memberships are being modified. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## GithubApi.UpdateEnterpriseGroupInfo



Replace all information for a provisioned enterprise group.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **scim\_group\_identifier** (`string`, optional) A unique identifier for the SCIM group to update. This is necessary for identifying the specific group to replace its information. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## GithubApi.ListScimEnterpriseMembers



Lists provisioned SCIM enterprise members for GitHub enterprises.

**Parameters**

-   **exclude\_attributes** (`string`, optional) Specify attributes to exclude from the results to improve query performance. Commonly used values are ‘groups’.
-   **filter\_criteria** (`string`, optional) Filter results by `userName`, `externalId`, `id`, or `displayName`. Only one filter is supported. E.g., “externalId eq ‘9138790-10932-109120392-12321’”.
-   **pagination\_start\_index** (`integer`, optional) The starting index of the first result to return for paginated responses.
-   **results\_per\_page** (`integer`, optional) Specify the number of SCIM enterprise members to return per page for pagination.

## GithubApi.ProvisionEnterpriseUser



Create a new SCIM enterprise user identity.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## GithubApi.DeleteUserFromEnterprise



Permanently delete a SCIM user from an enterprise account.

**Parameters**

-   **scim\_user\_identifier** (`string`, required) The unique identifier of the SCIM user to be permanently deleted from the enterprise.

## GithubApi.GetScimUserInfo



Fetch SCIM user provisioning information.

**Parameters**

-   **scim\_user\_identifier** (`string`, required) The unique identifier for the SCIM user in the GitHub enterprise environment.

## GithubApi.UpdateEnterpriseUserAttribute



Update individual attributes for a provisioned enterprise user.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **scim\_user\_id** (`string`, optional) The unique identifier for the SCIM user whose attributes you want to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## GithubApi.UpdateProvisionedEnterpriseUserInfo



Update all information for a provisioned enterprise user.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **scim\_user\_identifier** (`string`, optional) The unique identifier of the SCIM user for updating their information. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## GithubApi.SearchCodeInGithub



Search for code in GitHub repositories.

**Parameters**

-   **search\_query** (`string`, required) A string containing search keywords and qualifiers to limit the search scope on GitHub. For more details, see the GitHub search query documentation.
-   **results\_page\_number** (`integer`, optional) The page number of the results to fetch. Use this to navigate through search results.
-   **results\_per\_page** (`integer`, optional) Specifies the number of results to return per page, with a maximum of 100.
-   **sort\_by\_recent\_index** (`string`, optional) Sort the search results by most recently indexed files. The only valid value is `indexed`.
-   **sort\_order** (`string`, optional) Determines whether the first search result returned is the highest number of matches (`desc`) or lowest number of matches (`asc`). Ignored unless `sort` is provided.

## GithubApi.SearchGithubCommits



Search for GitHub commits using various criteria.

**Parameters**

-   **commit\_search\_query** (`string`, required) A string containing search keywords and qualifiers to find specific commits. Use qualifiers to narrow the search to specific areas of GitHub. See the API documentation for constructing queries with qualifiers.
-   **result\_order** (`string`, optional) Determines whether the first search result returned has the highest number of matches (‘desc’) or the lowest (‘asc’). Used only with ‘sort’.
-   **results\_page\_number** (`integer`, optional) Page number of the results to fetch. Determines which set of results to retrieve in paginated requests.
-   **results\_per\_page** (`integer`, optional) The number of results to display per page, with a maximum of 100.
-   **sort\_results\_by** (`string`, optional) Sort results by `author-date` or `committer-date`. Defaults to best match if not specified.

## GithubApi.SearchGithubIssuesAndPrs



Search GitHub issues and pull requests by state and keyword.

**Parameters**

-   **search\_query** (`string`, required) A string containing search keywords and qualifiers to limit search to specific areas. Supports various qualifiers for refined search.
-   **results\_page\_number** (`integer`, optional) Specify the page number of results to fetch (starting from 1).
-   **results\_per\_page** (`integer`, optional) The number of results to return per page, with a maximum limit of 100.
-   **sort\_by** (`string`, optional) Specifies the sorting criteria for the results, such as by comments, reactions, or date created. Defaults to best match if not specified.
-   **sort\_order** (`string`, optional) Determines whether the first search result returned is the highest number of matches (desc) or lowest number of matches (asc). This parameter is ignored unless you provide a sort value.

## GithubApi.FindGithubLabels



Search for labels in a GitHub repository by keywords.

**Parameters**

-   **repository\_id** (`integer`, required) The ID of the repository where labels will be searched.
-   **search\_keywords** (`string`, required) Keywords to search for in label names or descriptions. Excludes qualifiers.
-   **result\_page\_number** (`integer`, optional) Specifies the page number of the search results to fetch. Useful for pagination.
-   **results\_per\_page** (`integer`, optional) The number of label results to display per page, with a maximum of 100.
-   **sort\_labels\_by** (`string`, optional) Specifies how to sort the query results by the timestamp fields ‘created’ or ‘updated’. Defaults to ‘best match’.
-   **sort\_order** (`string`, optional) Determines if the highest (‘desc’) or lowest (‘asc’) matches appear first. Requires ‘sort’ to be set.

## GithubApi.SearchGithubRepositories



Search GitHub repositories using various criteria.

**Parameters**

-   **search\_query** (`string`, required) A string containing search keywords and qualifiers to find specific repositories. Supports qualifiers and keywords for targeted searches. Refer to GitHub’s documentation for query construction details: [https://docs.github.com/enterprise-server@3.8/articles/searching-for-repositories/](https://docs.github.com/enterprise-server@3.8/articles/searching-for-repositories/)
     .
-   **result\_order** (`string`, optional) Set to ‘desc’ for highest matches first or ‘asc’ for lowest matches first in search results. Ignored if ‘sort’ is not provided.
-   **results\_page\_number** (`integer`, optional) Specify the page number of the results to fetch in the search query. Useful for navigating through paginated results.
-   **results\_per\_page** (`integer`, optional) Specify the number of repository results to return per page, with a maximum of 100.
-   **sort\_by** (`string`, optional) Sort results by `stars`, `forks`, `help-wanted-issues`, or `updated`. Default is best match.

## GithubApi.SearchGithubTopics



Search and retrieve topics from GitHub using specific criteria.

**Parameters**

-   **search\_query** (`string`, required) Search query containing keywords and qualifiers to filter GitHub topics. Supports the same qualifiers as GitHub’s web interface.
-   **result\_page\_number** (`integer`, optional) The page number to fetch in the search results. Maximum is 100 results per page.
-   **results\_per\_page** (`integer`, optional) Specify the number of search results to return per page, with a maximum of 100.

## GithubApi.GithubSearchUsers



Search for GitHub users based on specific criteria.

**Parameters**

-   **search\_query** (`string`, required) Contains search keywords and qualifiers to find GitHub users. Supports multiple qualifiers to narrow the search. See GitHub’s query format documentation for details.
-   **page\_number** (`integer`, optional) Page number to fetch results, used for accessing subsequent pages of search results. Maximum supported is 100.
-   **results\_per\_page** (`integer`, optional) The number of GitHub user results returned per page, up to a maximum of 100.
-   **sort\_by\_criterion** (`string`, optional) Sort the search results by ‘followers’, ‘repositories’, or ‘joined’. Defaults to best match if not specified.
-   **sort\_order** (`string`, optional) Specifies the order of search results: ‘desc’ for highest matches or ‘asc’ for lowest. Requires ‘sort’.

## GithubApi.CheckConfigStatus



Check the status of the most recent configuration process.

**Parameters**

This tool does not take any parameters.

## GithubApi.StartGithubConfiguration



Initiate the GitHub configuration process.

**Parameters**

This tool does not take any parameters.

## GithubApi.CheckMaintenanceStatus



Retrieve the maintenance status of your GitHub installation.

**Parameters**

This tool does not take any parameters.

## GithubApi.ToggleMaintenanceMode



Toggle GitHub Enterprise maintenance mode.

**Parameters**

-   **maintenance\_mode\_settings** (`string`, required) A JSON string defining `enabled` (true/false) and `when` (e.g., ‘now’ or a chronic-parseable date) to set maintenance mode status and timing.

## GithubApi.GetGithubEnterpriseSettings



Retrieve the current settings of your GitHub Enterprise instance.

**Parameters**

This tool does not take any parameters.

## GithubApi.SetGithubEnterpriseSettings



Apply configuration settings to GitHub Enterprise instance.

**Parameters**

-   **new\_settings\_json\_string** (`string`, required) A JSON string specifying new settings to apply to the GitHub Enterprise instance. Only include settings you wish to change.

## GithubApi.RemoveAuthorizedSshKey



Remove an authorized SSH key from GitHub Enterprise.

**Parameters**

-   **public\_ssh\_key** (`string`, required) The public SSH key to be removed from GitHub Enterprise.

## GithubApi.GetAllAuthorizedSshKeys



Retrieve all authorized SSH keys for enterprise admin.

**Parameters**

This tool does not take any parameters.

## GithubApi.AddGithubAuthorizedSshKey



Add an authorized SSH key to GitHub Enterprise.

**Parameters**

-   **public\_ssh\_key** (`string`, required) The public SSH key to add to GitHub Enterprise. Ensure it is in the correct format.

## GithubApi.GetGithubUserProfile



Retrieve authenticated user’s GitHub profile information.

**Parameters**

This tool does not take any parameters.

## GithubApi.UpdateGithubProfile



Update your authenticated GitHub user profile.

**Parameters**

-   **is\_hireable** (`boolean`, optional) Set to true if the user is available for hire, false otherwise.
-   **new\_blog\_url** (`string`, optional) The new blog URL to update on your GitHub profile.
-   **new\_company\_name** (`string`, optional) The new company name to update on the GitHub profile.
-   **new\_location** (`string`, optional) The location to update in the user’s GitHub profile.
-   **new\_twitter\_username** (`string`, optional) The new Twitter username for the user to update in their GitHub profile.
-   **new\_user\_biography** (`string`, optional) The new short biography of the user for the GitHub profile update.
-   **new\_user\_name** (`string`, optional) The new name to update on the user’s GitHub profile.
-   **public\_visible\_email\_address** (`string`, optional) The email address you want to be publicly visible on your GitHub profile. If your privacy settings hide your email, it will remain hidden.

## GithubApi.DeleteUserEmail



Delete an email for the authenticated GitHub user.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## GithubApi.ListUserEmailAddresses



Retrieve all email addresses of the authenticated user.

**Parameters**

-   **results\_page\_number** (`integer`, optional) Specify the page number to fetch results for user email addresses.
-   **results\_per\_page** (`integer`, optional) The number of email results to retrieve per page, maximum is 100.

## GithubApi.AddEmailToGithubAccount



Add a new email to the authenticated GitHub user’s account.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## GithubApi.ListFollowers



Retrieve followers of the authenticated user on GitHub.

**Parameters**

-   **results\_page\_number** (`integer`, optional) Specifies which page of followers to fetch. Used for pagination.
-   **results\_per\_page** (`integer`, optional) Specify the number of followers to list per page (maximum 100).

## GithubApi.ListFollowedUsers



Lists the people the authenticated user follows.

**Parameters**

-   **results\_page\_number** (`integer`, optional) Specify the page number of the results you want to fetch.
-   **results\_per\_page** (`integer`, optional) The number of results to return per page, with a maximum of 100.

## GithubApi.UnfollowGithubUser



Unfollow a user on GitHub.

**Parameters**

-   **github\_user\_handle\_to\_unfollow** (`string`, required) The GitHub user’s handle you want to unfollow. The user must be logged in and authenticated.

## GithubApi.CheckIfUserIsFollowed



Check if a user is followed by the authenticated GitHub user.

**Parameters**

-   **github\_user\_handle** (`string`, required) The handle for the GitHub user account to check if they are followed by the authenticated user.

## GithubApi.FollowGithubUser



Follow a specified user on GitHub.

**Parameters**

-   **github\_user\_handle** (`string`, required) The GitHub username of the account you want to follow. Ensure it is a valid GitHub user handle.

## GithubApi.ListUserGpgKeys



Retrieve authenticated user’s GPG keys from GitHub.

**Parameters**

-   **page\_number** (`integer`, optional) Specifies which page of results to retrieve for the GPG keys list. Use integers starting from 1.
-   **results\_per\_page** (`integer`, optional) Specify the number of results per page, with a maximum of 100.

## GithubApi.AddGpgKeyToGithub



Add a GPG key to your authenticated GitHub account.

**Parameters**

-   **gpg\_key\_ascii\_armored\_format** (`string`, required) A GPG key in ASCII-armored format to be added to your GitHub account.
-   **new\_gpg\_key\_name** (`string`, optional) A descriptive name for the new GPG key to be added to your GitHub account.

## GithubApi.RemoveGpgKey



Remove a GPG key from your GitHub account.

**Parameters**

-   **gpg\_key\_identifier** (`integer`, required) The unique identifier of the GPG key to be removed from the authenticated user’s account.

## GithubApi.GetUserGpgKeyDetails



Retrieve extended details for a user’s GPG key.

**Parameters**

-   **gpg\_key\_identifier** (`integer`, required) The unique identifier of the GPG key to retrieve details for.

## GithubApi.GetGithubAppInstallations



Retrieve GitHub App installations for the authenticated user.

**Parameters**

-   **results\_page\_number** (`integer`, optional) Page number of the results to fetch for GitHub App installations.
-   **results\_per\_page** (`integer`, optional) Specifies the number of results to return per page, with a maximum of 100.

## GithubApi.ListUserAccessibleRepos



List repositories accessible to the authenticated user.

**Parameters**

-   **installation\_identifier** (`integer`, required) The unique identifier for the GitHub app installation required to list the repositories.
-   **results\_page\_number** (`integer`, optional) Specify the page number of results to fetch, starting from 1.
-   **results\_per\_page** (`integer`, optional) Specify the number of repository results to return per page (maximum 100).

## GithubApi.RemoveRepoFromInstallation



Remove a repository from a GitHub app installation.

**Parameters**

-   **installation\_unique\_identifier** (`integer`, required) The unique identifier for the installation, needed to specify which installation to modify.
-   **repository\_id** (`integer`, required) The unique integer identifier of the repository to be removed from the installation.

## GithubApi.AddRepositoryToGithubInstallation



Add a repository to a GitHub installation for the authenticated user.

**Parameters**

-   **installation\_id** (`integer`, required) The unique identifier of the GitHub installation.
-   **repository\_id** (`integer`, required) Provide the unique integer identifier of the repository to add to the installation.

## GithubApi.ListUserIssues



Fetch issues and pull requests assigned to you.

**Parameters**

-   **issue\_filter\_type** (`string`, optional) Specifies the type of issues to return. Options: ‘assigned’, ‘created’, ‘mentioned’, ‘subscribed’, ‘all’.
-   **issue\_state** (`string`, optional) Specifies whether to return open, closed, or all issues.
-   **label\_filter** (`string`, optional) Comma-separated list of label names to filter issues by. Example: ‘bug,ui,@high’.
-   **result\_page\_number** (`integer`, optional) Specifies the page number of the results to fetch. Use for paginating through result sets.
-   **results\_per\_page** (`integer`, optional) Specify the number of issues or pull requests to return per page. The maximum allowed value is 100.
-   **sort\_by** (`string`, optional) Choose sorting method for results: ‘created’, ‘updated’, or ‘comments’.
-   **sort\_direction** (`string`, optional) Specifies the sorting direction of the results, either ascending (`asc`) or descending (`desc`).
-   **updated\_since** (`string`, optional) Show issues updated after this timestamp. Use ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.

## GithubApi.ListPublicSshKeys



Retrieve public SSH keys for the authenticated GitHub user.

**Parameters**

-   **result\_page\_number** (`integer`, optional) Specifies which page of results to fetch, starting from 1.
-   **results\_per\_page** (`integer`, optional) The number of SSH key results to display per page, with a maximum of 100.

## GithubApi.AddSshKeyToGithubAccount



Add a public SSH key to your GitHub account.

**Parameters**

-   **public\_ssh\_key** (`string`, required) The public SSH key content to add to your GitHub account. Ensure it is in the correct format.
-   **ssh\_key\_title** (`string`, optional) A descriptive name for the new SSH key added to the GitHub account.

## GithubApi.RemoveGithubSshKey



Removes a public SSH key from your GitHub account.

**Parameters**

-   **ssh\_key\_unique\_identifier** (`integer`, required) The unique identifier for the SSH key to be removed from the GitHub account.

## GithubApi.GetPublicSshKeyDetails



Retrieve details for a specified public SSH key.

**Parameters**

-   **ssh\_key\_identifier** (`integer`, required) The unique identifier for the public SSH key to retrieve details.

## GithubApi.ListOrganizationMemberships



Retrieve organization memberships for the authenticated user.

**Parameters**

-   **membership\_state** (`string`, optional) Filter memberships by state: ‘active’ or ‘pending’. Returns both if unspecified.
-   **results\_page\_number** (`integer`, optional) Specify the page number of results to fetch, for pagination.
-   **results\_per\_page** (`integer`, optional) Number of results per page. Maximum allowed is 100.

## GithubApi.GetOrgMembershipStatus



Retrieve the user’s organization membership status.

**Parameters**

-   **organization\_name** (`string`, required) The name of the organization. It is not case sensitive and should be provided as a string.

## GithubApi.UpdateGithubOrgMembership



Update your GitHub organization membership settings.

**Parameters**

-   **membership\_state** (`string`, required) Set the state of the membership. Only accepts “active”.
-   **organization\_name** (`string`, required) The name of the GitHub organization. This should not be case sensitive.

## GithubApi.ListUserMigrations



Lists all migrations a user has started.

**Parameters**

-   **results\_page\_number** (`integer`, optional) The specific page of migration results to retrieve, starting from 1.
-   **results\_per\_page** (`integer`, optional) The number of migration results per page, with a maximum of 100.

## GithubApi.InitiateUserMigration



Begin the creation of a user migration archive.

**Parameters**

-   **repository\_list** (`array[string]`, required) A list of repository names to be included in the migration. Expect an array of strings representing repository names.
-   **exclude\_attachments** (`boolean`, optional) Set to true to exclude attachments from the migration.
-   **exclude\_attributes** (`array[string]`, optional) List of attributes to exclude from the API response for better performance.
-   **exclude\_metadata** (`boolean`, optional) Set to true to exclude metadata and include only git source in the migration.
-   **exclude\_owner\_projects** (`boolean`, optional) Set to true to exclude projects owned by the organization or users from the migration process.
-   **exclude\_releases** (`boolean`, optional) Set to true to exclude releases from the migration process.
-   **exclude\_repository\_git\_data** (`boolean`, optional) Set to true to exclude repository git data from the migration.
-   **lock\_repositories** (`boolean`, optional) Set to true to lock the repositories at the start of the migration.
-   **org\_metadata\_only** (`boolean`, optional) Set to true to include only organization metadata. Repositories array will be empty and other flags are ignored.

## GithubApi.DownloadGithubMigrationArchive



Fetch the URL to download a GitHub migration archive.

**Parameters**

-   **migration\_unique\_id** (`integer`, required) The unique identifier for the GitHub migration. This ID is required to fetch the migration archive URL.

## GithubApi.ListUserMigrationRepos



Retrieve repositories for a user’s migration.

**Parameters**

-   **migration\_unique\_identifier** (`integer`, required) The unique identifier for the user migration to retrieve repositories.
-   **result\_page\_number** (`integer`, optional) Specify the page number of results to retrieve. Use this to paginate through multiple pages of repository data.
-   **results\_per\_page** (`integer`, optional) The number of repository results to return per page, with a maximum of 100.

## GithubApi.ListUserOrganizations



List organizations for the authenticated GitHub user.

**Parameters**

-   **page\_number\_to\_fetch** (`integer`, optional) Page number of the results to fetch for user organizations.
-   **results\_per\_page** (`integer`, optional) The number of organizations listed per page, up to a maximum of 100.

## GithubApi.CreateGithubUserProjectBoard



Create a project board for a GitHub user.

**Parameters**

-   **project\_name** (`string`, required) The name for the GitHub project board to be created. It should be a string representing the desired name.
-   **project\_body** (`string`, optional) The content or description of the GitHub project board. It should be a concise string summarizing the project’s purpose or details.

## GithubApi.ListGithubPublicEmails



Retrieve publicly visible GitHub emails for the authenticated user.

**Parameters**

-   **results\_page\_number** (`integer`, optional) The page number of email results to retrieve. Use this to navigate through paginated email results.
-   **results\_per\_page** (`integer`, optional) The number of email results to display per page, with a maximum of 100.

## GithubApi.ListUserRepositories



Retrieve repositories accessible to the authenticated user.

**Parameters**

-   **filter\_repositories\_before\_timestamp** (`string`, optional) Only show repositories updated before the specified timestamp in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
-   **repository\_affiliation\_filter** (`string`, optional) Specify affiliations for repositories to list. Options: `owner`, `collaborator`, `organization_member`. Provide as a comma-separated string.
-   **repository\_type** (`string`, optional) Limit results to repositories of the specified type: ‘all’, ‘owner’, ‘public’, ‘private’, or ‘member’. Avoid using with ‘visibility’ or ‘affiliation’.
-   **repository\_visibility** (`string`, optional) Limit results to repositories with the specified visibility: ‘all’, ‘public’, or ‘private’.
-   **results\_page\_number** (`integer`, optional) Specify the page number of the results to fetch.
-   **results\_per\_page** (`integer`, optional) The maximum number of repositories to display per page. Accepts an integer up to 100.
-   **sort\_order** (`string`, optional) Specify the order to sort repositories. Use ‘asc’ for ascending or ‘desc’ for descending. Default is ‘asc’ for ‘full\_name’ sort and ‘desc’ otherwise.
-   **sort\_property** (`string`, optional) Property by which to sort repositories, such as `created`, `updated`, `pushed`, or `full_name`.
-   **updated\_after\_timestamp** (`string`, optional) Filter repositories updated after the specified ISO 8601 timestamp (YYYY-MM-DDTHH:MM:SSZ).

## GithubApi.CreateGithubRepoForUser



Create a new GitHub repository for the authenticated user.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## GithubApi.FetchOpenRepoInvitations



List open repository invitations for the authenticated user.

**Parameters**

-   **page\_number** (`integer`, optional) Specify the page number of results to retrieve for open repository invitations.
-   **results\_per\_page** (`integer`, optional) Specify the number of results to display per page, up to a maximum of 100.

## GithubApi.DeclineRepoInvitation



Decline an invitation to join a GitHub repository.

**Parameters**

-   **invitation\_id** (`integer`, required) The unique identifier of the GitHub repository invitation to decline.

## GithubApi.AcceptGithubRepoInvitation



Accept a GitHub repository invitation.

**Parameters**

-   **invitation\_id** (`integer`, required) The unique identifier for the GitHub invitation to be accepted.

## GithubApi.ListSshSigningKeys



Retrieve SSH signing keys for the authenticated GitHub user.

**Parameters**

-   **results\_page\_number** (`integer`, optional) Page number of the results to fetch. Use this to navigate through paginated results.
-   **results\_per\_page** (`integer`, optional) The number of SSH signing key results to display per page. The maximum allowed is 100.

## GithubApi.CreateSshSigningKeyGithub



Create an SSH signing key for your GitHub account.

**Parameters**

-   **public\_ssh\_key** (`string`, required) The public SSH key to add to your GitHub account. Check for existing SSH keys before adding.
-   **ssh\_key\_title** (`string`, optional) A descriptive name for the new SSH signing key.

## GithubApi.DeleteGithubSshSigningKey



Delete an SSH signing key from your GitHub account.

**Parameters**

-   **ssh\_signing\_key\_identifier** (`integer`, required) The unique identifier of the SSH signing key to delete. It must be an integer.

## GithubApi.GetSshSigningKeyDetails



Retrieve extended details for an SSH signing key.

**Parameters**

-   **ssh\_signing\_key\_identifier** (`integer`, required) The unique identifier of the SSH signing key to retrieve details for the authenticated user.

## GithubApi.ListStarredRepositories



Retrieve repositories starred by the authenticated user.

**Parameters**

-   **page\_number\_to\_fetch** (`integer`, optional) Specify the page number of results to retrieve. Use for pagination of starred repositories.
-   **results\_per\_page** (`integer`, optional) The number of repositories to return per page, maximum of 100.
-   **sort\_by** (`string`, optional) The property to sort the results by. Use ‘created’ for sorting by the star creation date or ‘updated’ for the last push date.
-   **sort\_direction** (`string`, optional) The direction to sort the results by. Use ‘asc’ for ascending or ‘desc’ for descending.

## GithubApi.UnstarGithubRepo



Unstar a GitHub repository for the authenticated user.

**Parameters**

-   **repository\_name** (`string`, required) The name of the repository to unstar, not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the GitHub repository. The name is not case sensitive.

## GithubApi.CheckRepoStarredByUser



Check if a repository is starred by the authenticated user.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository to check. This is case insensitive.
-   **repository\_owner\_account** (`string`, required) The account owner of the repository. This value is not case sensitive.

## GithubApi.StarGithubRepository



Star a GitHub repository for the authenticated user.

**Parameters**

-   **repository\_name** (`string`, required) The name of the GitHub repository to star. This name is not case sensitive.
-   **repository\_owner** (`string`, required) The account owner of the repository, case insensitive.

## GithubApi.ListWatchedRepositories



Retrieve repositories watched by the authenticated user.

**Parameters**

-   **results\_page\_number** (`integer`, optional) Specify the page number of the results to fetch. Used for pagination of results.
-   **results\_per\_page** (`integer`, optional) The number of repository results displayed per page (maximum 100).

## GithubApi.ListUserGithubTeams



Retrieve teams the authenticated GitHub user belongs to.

**Parameters**

-   **results\_page\_number** (`integer`, optional) Page number to specify which set of results to fetch. Useful for pagination.
-   **results\_per\_page** (`integer`, optional) Number of results to display per page, maximum value is 100.

## GithubApi.ListGithubUsers



Retrieve a list of all GitHub users by signup order.

**Parameters**

-   **results\_per\_page** (`integer`, optional) The number of results to return per page, with a maximum of 100 allowed.
-   **user\_id\_threshold** (`integer`, optional) A user ID. Only return users with an ID greater than this number.

## GithubApi.GetGithubUserInfo



Fetch public details of a GitHub user using their username.

**Parameters**

-   **github\_username** (`string`, required) The GitHub user’s handle. Used to fetch their public profile information.

## GithubApi.ListUserGithubEvents



Retrieve a user’s GitHub events, including private if authenticated.

**Parameters**

-   **github\_user\_handle** (`string`, required) The GitHub username for which to retrieve events. Use the handle of the user account.
-   **page\_number** (`integer`, optional) The page number of results to fetch for the user’s GitHub events.
-   **results\_per\_page** (`integer`, optional) Number of results to return per page, up to a maximum of 100.

## GithubApi.GetUserOrgEvents



Retrieve organization events for an authenticated GitHub user.

**Parameters**

-   **github\_username** (`string`, required) The GitHub handle of the user account for whom events are being retrieved. Authentication is required to access user-specific details.
-   **organization\_name** (`string`, required) The name of the GitHub organization. This parameter is not case sensitive.
-   **results\_page\_number** (`integer`, optional) The specific page of results to retrieve. Provides pagination for fetching events.
-   **results\_per\_page** (`integer`, optional) Specify the number of results to display per page, with a maximum of 100.

## GithubApi.ListGithubUserPublicEvents



Retrieve a GitHub user’s public events.

**Parameters**

-   **github\_user\_handle** (`string`, required) The GitHub user’s handle to retrieve public events for.
-   **page\_number** (`integer`, optional) The page number of the results to retrieve. Use to navigate through paginated results.
-   **results\_per\_page** (`integer`, optional) The number of results to display per page, with a maximum of 100.

## GithubApi.ListUserFollowers



Retrieve a list of followers for a specific GitHub user.

**Parameters**

-   **github\_user\_handle** (`string`, required) The GitHub user handle to list followers for.
-   **results\_page\_number** (`integer`, optional) Specify the page number of results to retrieve followers for the specified user. Use this to paginate through results if there are many followers.
-   **results\_per\_page** (`integer`, optional) The number of follower results to display per page, with a maximum limit of 100.

## GithubApi.UserFollowingList



Retrieve users followed by a specified GitHub user.

**Parameters**

-   **github\_user\_handle** (`string`, required) The GitHub username of the account whose followings you want to list.
-   **result\_page\_number** (`integer`, optional) The page number of the result set to retrieve. Use this to paginate results.
-   **results\_per\_page** (`integer`, optional) Specify the number of results to display per page. Maximum is 100.

## GithubApi.CheckUserFollowingStatus



Verify if a user follows another GitHub user.

**Parameters**

-   **github\_user\_handle** (`string`, required) The handle for the GitHub user account initiating the following request.
-   **target\_username** (`string`, required) The username of the GitHub account you want to check if the main user follows.

## GithubApi.GetUserGists



Retrieve a user’s public gists from GitHub.

**Parameters**

-   **github\_user\_handle** (`string`, required) The GitHub username whose public gists you want to retrieve.
-   **page\_number** (`integer`, optional) Page number of the gist results to fetch. Used for paginating results.
-   **results\_per\_page** (`integer`, optional) The number of gists to display per page, with a maximum limit of 100.
-   **updated\_after\_timestamp** (`string`, optional) Show notifications updated after the specified timestamp in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.

## GithubApi.ListGpgKeysForUser



Retrieve public GPG keys for a GitHub user.

**Parameters**

-   **github\_user\_handle** (`string`, required) The GitHub username of the account to retrieve GPG keys for.
-   **page\_number** (`integer`, optional) Page number of the results to fetch. Used for pagination.
-   **results\_per\_page** (`integer`, optional) The number of results to display per page, with a maximum of 100.

## GithubApi.GetGithubUserHovercardInfo



Retrieve detailed hovercard info for a GitHub user.

**Parameters**

-   **github\_username** (`string`, required) The GitHub username for which to retrieve hovercard information.
-   **additional\_info\_type** (`string`, optional) Specifies the type of related information for the user’s hovercard. Options: `organization`, `repository`, `issue`, `pull_request`. Required with `subject_id`.
-   **subject\_identifier** (`string`, optional) The ID corresponding to the specified `subject_type` (e.g., organization, repository). Required if `subject_type` is used.

## GithubApi.GetGithubUserInstallation



Retrieve a user’s GitHub App installation information.

**Parameters**

-   **github\_user\_handle** (`string`, required) The handle (username) of the GitHub user account to retrieve installation details for.

## GithubApi.GetPublicSshKeys



Retrieve verified public SSH keys for a specified GitHub user.

**Parameters**

-   **github\_user\_handle** (`string`, required) The GitHub user’s handle to retrieve their verified public SSH keys.
-   **results\_page\_number** (`integer`, optional) Specify the page number of results to retrieve for pagination purposes.
-   **results\_per\_page** (`integer`, optional) Specify the number of results per page, with a maximum allowed value of 100.

## GithubApi.ListPublicOrgsForUser



Retrieve public organization memberships for a GitHub user.

**Parameters**

-   **github\_user\_handle** (`string`, required) The GitHub user account handle to retrieve public organization memberships for.
-   **results\_page\_number** (`integer`, optional) Specify the page number of the results to fetch, for paginated results.
-   **results\_per\_page** (`integer`, optional) The number of results to return per page, with a maximum of 100.

## GithubApi.ListUserProjects



Retrieve a list of GitHub projects for a specific user.

**Parameters**

-   **github\_username** (`string`, required) The GitHub username of the account whose projects are to be listed.
-   **project\_state** (`string`, optional) Specify the state of projects to return. Options are ‘open’, ‘closed’, or ‘all’.
-   **results\_page\_number** (`integer`, optional) Specify the page number of the results to fetch when listing user projects.
-   **results\_per\_page** (`integer`, optional) The number of projects to display per page, up to a maximum of 100.

## GithubApi.GetUserReceivedGithubEvents



Retrieve events received by a GitHub user.

**Parameters**

-   **github\_user\_handle** (`string`, required) The handle of the GitHub user account for which to retrieve events.
-   **result\_page\_number** (`integer`, optional) Specifies the page number of results to retrieve from the GitHub events list.
-   **results\_per\_page** (`integer`, optional) Specify the number of results per page, up to a maximum of 100.

## GithubApi.ListUserReceivedPublicEvents



Retrieve public events received by a GitHub user.

**Parameters**

-   **github\_user\_handle** (`string`, required) The GitHub handle for the user account whose public events are to be listed.
-   **page\_number** (`integer`, optional) Specify the page number of the results you wish to fetch.
-   **results\_per\_page** (`integer`, optional) The number of results to return per page, with a maximum of 100.

## GithubApi.GetUserRepos



Retrieve public repositories of a GitHub user.

**Parameters**

-   **github\_user\_handle** (`string`, required) The handle for the GitHub user whose repositories you want to retrieve.
-   **page\_number** (`integer`, optional) The page number of results to fetch, starting from 1.
-   **repository\_type** (`string`, optional) Limit results to repositories of the specified type: ‘all’, ‘owner’, or ‘member’.
-   **results\_per\_page** (`integer`, optional) Specify the number of repository results to be returned per page, up to a maximum of 100.
-   **sort\_order** (`string`, optional) Specifies the order to sort the repositories. Use ‘asc’ for ascending and ‘desc’ for descending order.
-   **sort\_results\_by** (`string`, optional) Specify the property to sort the repository results by. Options: ‘created’, ‘updated’, ‘pushed’, or ‘full\_name’.

## GithubApi.DemoteGithubSiteAdministrator



Demote a GitHub site administrator.

**Parameters**

-   **github\_user\_handle** (`string`, required) The GitHub user account handle to be demoted.

## GithubApi.PromoteUserToSiteAdmin



Promote a user to site administrator on GitHub Enterprise.

**Parameters**

-   **github\_user\_handle** (`string`, required) The handle for the GitHub user account to be promoted to site administrator.

## GithubApi.ListSshSigningKeysForUser



Retrieve SSH signing keys for a specific GitHub user.

**Parameters**

-   **github\_username** (`string`, required) The GitHub username whose SSH signing keys you want to retrieve.
-   **results\_page\_number** (`integer`, optional) Page number of the results to fetch when listing SSH signing keys.
-   **results\_per\_page** (`integer`, optional) The number of results to display per page, with a maximum of 100.

## GithubApi.ListStarredRepos



Retrieve repositories starred by a user on GitHub.

**Parameters**

-   **github\_user\_handle** (`string`, required) The GitHub user’s handle (username) to retrieve starred repositories for.
-   **page\_number** (`integer`, optional) The page number of the results to fetch, useful for pagination.
-   **results\_per\_page** (`integer`, optional) The number of repository results to return per page, with a maximum of 100.
-   **sort\_direction** (`string`, optional) Specify the direction to sort the results: ‘asc’ for ascending or ‘desc’ for descending.
-   **sort\_repositories\_by** (`string`, optional) Property to sort the repositories by: ‘created’ for star date or ‘updated’ for last push date.

## GithubApi.ListWatchedRepos



Retrieve a list of repositories a user watches on GitHub.

**Parameters**

-   **github\_user\_handle** (`string`, required) The GitHub handle of the user whose watched repositories are to be retrieved.
-   **results\_page\_number** (`integer`, optional) Page number of the results to fetch for the user’s watched repositories.
-   **results\_per\_page** (`integer`, optional) Specify the number of repository results to return per page, with a maximum of 100.

## GithubApi.UnsuspendGithubUser



Unsuspend a user on GitHub Enterprise.

**Parameters**

-   **github\_user\_handle** (`string`, required) The GitHub user handle to identify the user account to unsuspend.
-   **unsuspension\_reason** (`string`, optional) The reason for unsuspending the user, logged in the audit log. Defaults to “Unsuspended via API by _SITE\_ADMINISTRATOR_” if not provided.

## GithubApi.SuspendGithubUser



Suspend a user on a GitHub Enterprise instance.

**Parameters**

-   **github\_user\_handle** (`string`, required) The GitHub username to suspend, excluding Active Directory LDAP-authenticated users.
-   **suspension\_reason** (`string`, optional) A string detailing why the user is being suspended, which will be logged in the audit log. If omitted, a default message is used.

## GithubApi.GetRandomGithubZen



Fetch a random Zen of GitHub sentence.

**Parameters**

This tool does not take any parameters.

## Secrets

All tools in this toolset require the following secret: `GIT_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

The `GIT_SERVER_URL` secret specifies the GitHub server URL. Use `https://api.github.com` for regular GitHub.com accounts, or your GitHub Enterprise server URL (e.g., `https://github.your-company.com/api/v3`) for GitHub Enterprise deployments.

## Reference

Below is a reference of enumerations used by some of the tools in the GithubApi MCP Server:

### ToolMode

-   **GET\_REQUEST\_SCHEMA**: `get_request_schema`
-   **EXECUTE**: `execute`

## Auth

The GithubApi MCP Server uses the Auth Provider with id `arcade-github` to connect to users’ GithubApi accounts. In order to use the MCP Server, you will need to configure the `arcade-github` auth provider.

For detailed information on configuring the GitHub OAuth provider with Arcade, see the [GitHub Auth Provider documentation](/references/auth-providers/github.md).

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_github_api ``` Learn more](/guides/deployment-hosting.md)

Last updated on February 6, 2026

[DatadogApi](/en/resources/integrations/development/datadog-api.md)
[PagerdutyApi](/en/resources/integrations/development/pagerduty-api.md)
