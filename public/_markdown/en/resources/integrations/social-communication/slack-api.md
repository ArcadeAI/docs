---
title: "SlackApi"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Social & Communication](/en/resources/integrations/social-communication/discord.md)
Slack API

# SlackApi

Arcade Unoptimized

**Description:** Enable agents to interact with SlackApi

**Author:** Arcade

**Auth:** User authorization

[![PyPI Version](https://img.shields.io/pypi/v/arcade_slack_api)](https://pypi.org/project/arcade_slack_api/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_slack_api)](https://pypi.org/project/arcade_slack_api/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_slack_api)](https://pypi.org/project/arcade_slack_api/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_slack_api)](https://pypi.org/project/arcade_slack_api/)

is a [Unoptimized MCP Server](/guides/create-tools/improve/types-of-tools.md#unoptimized-tools)
: each tool mirrors one HTTP endpoint and offers LLMs a way to interact with the low-level API.



Differently from [Optimized MCP Servers](/guides/create-tools/improve/types-of-tools.md#optimized-tools)
, Unoptimized tools are heavily influenced by the original API design, which is not usually optimized for LLM usage. For this reason, we recommend thoroughly evaluating the tools with your Agents or chatbots before using it in production. [Read more](/guides/create-tools/improve/types-of-tools.md) about Optimized vs Unoptimized tools.

The SlackApi MCP Sever offers a comprehensive set of tools for administering Slack workspaces, automating messaging, managing channels, calls, files, emojis, user groups, invites, and user/team data. Key capabilities include:

-   Workspace & team management: create/update team name/description, fetch team info, settings, preferences, integration logs, billable users, and list/inspect teams in an Enterprise org.
-   User and identity operations: list workspace/team users, find users by email, get user profiles, presence, identity, and manage profile photos.
-   Channels & conversations: create/join conversations, get conversation info and members, list channels/conversations accessible to a user, open/resume DMs, invite users, set read cursors, and manage shared channel invites.
-   Messaging & scheduling: send messages (regular and ephemeral), schedule/delete scheduled messages, list scheduled messages, get message permalinks, and search messages/files.
-   Calls: register calls, get call info, add/remove participants.
-   Files & sharing: obtain external upload URLs, fetch remote file info, share remote files to channels, enable public sharing.
-   Bookmarks, pins & reactions: add/edit/remove bookmarks, pin/list pinned items, add/remove reactions.
-   Emoji management: list custom emojis, rename emojis, and add emoji aliases (Enterprise).
-   User groups: create, enable/disable, list, update user groups and their membership.
-   Invite/workflow management: list pending/approved/denied workspace invites, accept/approve/deny shared channel invites, and list shared invites.
-   Admin tools & verification: fetch workspace settings, owners, channels for org usergroups, list enterprise emojis/teams, revoke tokens, verify API calling code, and retrieve integration logs.
-   Custom behavior: provide custom unfurling for URLs.

This MCP Sever is designed for admins and apps requiring broad Slack API access (admin, invites, calls, chat, files, usergroups, reactions, users scopes).

## Available Tools

Tool Name

Description

SlackApi.AddSlackEmojiAlias

Add an emoji alias in a Slack Enterprise organization.

SlackApi.ListSlackEnterpriseEmojis

Retrieve emojis for a Slack Enterprise organization.

SlackApi.RenameSlackEmoji

Rename an emoji in a Slack Enterprise organization.

SlackApi.ListApprovedWorkspaceInviteRequests

Retrieve all approved workspace invite requests from Slack.

SlackApi.ListDeniedSlackInviteRequests

Retrieve denied Slack workspace invite requests.

SlackApi.ListPendingWorkspaceInvites

Retrieve all pending workspace invite requests from Slack.

SlackApi.ListTeamsInEnterprise

Retrieve all teams in an Enterprise organization on Slack.

SlackApi.ListSlackWorkspaceOwners

Retrieve all owners in a Slack workspace.

SlackApi.FetchWorkspaceSettingsInfo

Retrieve settings information for a Slack workspace.

SlackApi.SetWorkspaceDescription

Update the description of a Slack workspace.

SlackApi.SetSlackWorkspaceName

Update the name of a Slack workspace.

SlackApi.ListChannelsForUsergroup

Retrieve channels linked to an org-level user group in Slack.

SlackApi.ListWorkspaceUsers

Retrieve a list of users from a Slack workspace.

SlackApi.CheckApiCallingCode

Verify the correctness of API calling code for Slack.

SlackApi.RevokeSlackToken

Revoke a Slack authentication token.

SlackApi.EditSlackBookmark

Edit an existing bookmark in a Slack channel.

SlackApi.RemoveSlackBookmark

Remove a bookmark from a Slack channel.

SlackApi.GetSlackBotInfo

Retrieve details about a Slack bot user.

SlackApi.RegisterSlackCall

Registers a new call on Slack.

SlackApi.GetCallInformation

Retrieve detailed information about a specific call in Slack.

SlackApi.AddCallParticipants

Add new participants to a Slack call.

SlackApi.RemoveCallParticipants

Remove participants from a Slack call.

SlackApi.DeleteScheduledSlackMessage

Delete a pending scheduled message from Slack queue.

SlackApi.GetSlackMessagePermalink

Retrieve a permalink URL for a specific Slack message.

SlackApi.SendEphemeralMessageSlack

Send an ephemeral message to a user in a Slack channel.

SlackApi.SendSlackMessage

Sends a message to a Slack channel.

SlackApi.ListScheduledMessages

Retrieve scheduled messages from Slack.

SlackApi.ScheduleSlackMessage

Schedule a message to be sent later in Slack.

SlackApi.CustomUnfurlSlackUrls

Provide custom unfurl behavior for user-posted URLs on Slack.

SlackApi.AcceptSlackInvite

Accept invitations to a Slack Connect channel.

SlackApi.ApproveSlackChannelInvitation

Approve an invitation to a Slack Connect channel.

SlackApi.CreateSlackConversation

Create a new public or private Slack conversation.

SlackApi.GetConversationInfo

Fetches information about a Slack conversation.

SlackApi.InviteUserToSlackChannel

Invite users to a Slack channel.

SlackApi.JoinSlackConversation

Join an existing conversation in Slack.

SlackApi.ListSlackChannels

Retrieve a list of all channels in a Slack team.

SlackApi.ListSharedChannelInvites

Retrieve unapproved shared channel invites from Slack.

SlackApi.SetSlackChannelReadCursor

Update the read cursor in a Slack channel.

SlackApi.GetSlackConversationMembers

Retrieve members from a specified Slack conversation.

SlackApi.OpenOrResumeSlackConversation

Open or resume a direct or multi-person message in Slack.

SlackApi.GetSlackThreadMessages

Retrieve messages from a Slack conversation thread.

SlackApi.DenySharedInviteRequest

Denies an external user invitation to a Slack channel.

SlackApi.ListCustomEmojiForTeam

Retrieve a list of custom emojis for a specific team.

SlackApi.GetExternalFileUploadUrl

Retrieve a URL to upload an external file to Slack.

SlackApi.GetRemoteFileInfoSlack

Retrieve details about a remote file from Slack.

SlackApi.GetSlackRemoteFilesInfo

Retrieve information about remote files added to Slack.

SlackApi.ShareRemoteFileInChannel

Share a remote file into a Slack channel.

SlackApi.EnableSlackFileSharing

Enable a Slack file for public sharing.

SlackApi.PinItemToSlackChannel

Pin an item to a Slack channel.

SlackApi.ListPinnedItems

Retrieve items pinned to a Slack channel.

SlackApi.AddSlackReaction

Add a reaction to a Slack item.

SlackApi.RemoveReactionFromItem

Remove a reaction from a Slack item.

SlackApi.SearchFilesInSlack

Search for files in Slack using a query.

SlackApi.SearchSlackMessages

Search Slack messages based on a query.

SlackApi.GetTeamBillableUsersInfo

Retrieves billable users info for the current Slack team.

SlackApi.GetCurrentSlackTeamInfo

Retrieve information about the current Slack team.

SlackApi.GetIntegrationLogs

Retrieve integration logs for the current Slack team.

SlackApi.GetSlackTeamPreferences

Retrieve a list of a workspace's team preferences.

SlackApi.GetTeamProfile

Retrieve a team's profile information from Slack.

SlackApi.CreateSlackUserGroup

Creates a new user group in Slack.

SlackApi.DisableUserGroup

Disable an existing Slack User Group.

SlackApi.EnableSlackUserGroup

Enable a user group in Slack.

SlackApi.ListSlackUserGroups

Retrieve all user groups for a Slack team.

SlackApi.UpdateSlackUserGroup

Update an existing User Group in Slack.

SlackApi.UpdateSlackUsergroupUsers

Update the list of users in a Slack user group.

SlackApi.ListAccessibleSlackConversations

Retrieve a list of conversations the user can access on Slack.

SlackApi.CheckSlackDiscoverability

Check if an email is discoverable on Slack.

SlackApi.GetSlackUserPresence

Retrieve user presence information from Slack.

SlackApi.GetUserIdentity

Retrieve a user's identity information from Slack.

SlackApi.ListSlackTeamUsers

Fetches a list of all users in a Slack team.

SlackApi.FindSlackUserByEmail

Find a Slack user using their email address.

SlackApi.GetSlackUserProfile

Retrieve Slack user profile information and custom status.

SlackApi.SetSlackProfilePhoto

Set the user's profile photo on Slack.

If you need to perform an action that’s not listed here, you can [get in touch with us](mailto:contact@arcade.dev) to request a new tool, or [create your own tools](/guides/create-tools/tool-basics/build-mcp-server.md).

## SlackApi.AddSlackEmojiAlias



Add an emoji alias in a Slack Enterprise organization.

**Parameters**

-   **emoji\_alias\_name** (`string`, required) The new alias for the specified emoji. Whitespace or colons will be automatically trimmed.
-   **target\_emoji\_name** (`string`, required) The name of the existing emoji to which the new alias is being added. Remove any surrounding whitespace or colons.

## SlackApi.ListSlackEnterpriseEmojis



Retrieve emojis for a Slack Enterprise organization.

**Parameters**

-   **pagination\_cursor** (`string`, optional) Cursor for fetching the next page of emojis. Use ‘next\_cursor’ from the previous response.
-   **max\_items\_to\_return** (`integer`, optional) The maximum number of emojis to return, between 1 and 1000 inclusive. (default: ‘100’)

## SlackApi.RenameSlackEmoji



Rename an emoji in a Slack Enterprise organization.

**Parameters**

-   **current\_emoji\_name** (`string`, required) The current name of the emoji to be renamed. Colons (:myemoji:) around the value are optional.
-   **new\_emoji\_name** (`string`, required) The new name to assign to the emoji in the Slack Enterprise organization.

## SlackApi.ListApprovedWorkspaceInviteRequests



Retrieve all approved workspace invite requests from Slack.

**Parameters**

-   **workspace\_id** (`string`, optional) ID for the Slack workspace where the invite requests were made. Required if the Enterprise org has more than one workspace.
-   **pagination\_cursor** (`string`, optional) Value of the `next_cursor` from the previous API response for paginating results.
-   **result\_limit** (`integer`, optional) Specify the number of results to return, between 1 and 1000 inclusive. (default: ‘100’)

## SlackApi.ListDeniedSlackInviteRequests



Retrieve denied Slack workspace invite requests.

**Parameters**

-   **workspace\_team\_id** (`string`, optional) ID of the workspace where the invite requests were made. Required if the Enterprise org has multiple workspaces.
-   **pagination\_cursor** (`string`, optional) The cursor value from the previous API response to fetch the next set of results. Use this for pagination.
-   **result\_limit** (`integer`, optional) Specify the number of denied invite request results to return, between 1 and 1000 inclusive. (default: ‘100’)

## SlackApi.ListPendingWorkspaceInvites



Retrieve all pending workspace invite requests from Slack.

**Parameters**

-   **workspace\_id** (`string`, optional) The ID of the workspace to list pending invite requests from. Required for multi-workspace enterprises.
-   **pagination\_cursor** (`string`, optional) The cursor value for fetching the next set of invite requests. Use the `next_cursor` from the previous response if available.
-   **result\_limit** (`integer`, optional) The number of invite requests to return per call, must be between 1 and 1000. (default: ‘100’)

## SlackApi.ListTeamsInEnterprise



Retrieve all teams in an Enterprise organization on Slack.

**Parameters**

-   **maximum\_items\_to\_return** (`integer`, optional) Specify the maximum number of teams to retrieve. Must be a positive integer, up to 1000. (default: ‘100’)
-   **pagination\_cursor** (`string`, optional) Use this to retrieve the next page of results by setting it to the `next_cursor` from the previous response.

## SlackApi.ListSlackWorkspaceOwners



Retrieve all owners in a Slack workspace.

**Parameters**

-   **workspace\_id** (`string`, required) The unique identifier of the Slack workspace for which to list the owners.
-   **maximum\_items\_to\_return** (`integer`, optional) Specifies the maximum number of owners to return, ranging from 1 to 1000. (default: ‘100’)
-   **pagination\_cursor** (`string`, optional) The cursor from the previous response used to fetch the next page of owners. Leave empty for the first page.

## SlackApi.FetchWorkspaceSettingsInfo



Retrieve settings information for a Slack workspace.

**Parameters**

-   **slack\_team\_id** (`string`, required) The unique identifier of the Slack workspace (team) for which to fetch the settings information.

## SlackApi.SetWorkspaceDescription



Update the description of a Slack workspace.

**Parameters**

-   **workspace\_id** (`string`, required) The unique identifier for the Slack workspace where the description will be updated.
-   **workspace\_description** (`string`, required) The new description to set for the Slack workspace. Provide a clear and concise text.

## SlackApi.SetSlackWorkspaceName



Update the name of a Slack workspace.

**Parameters**

-   **workspace\_id** (`string`, required) Unique identifier for the Slack workspace whose name you want to update.
-   **new\_workspace\_name** (`string`, required) The desired new name for the Slack workspace. This replaces the existing name.

## SlackApi.ListChannelsForUsergroup



Retrieve channels linked to an org-level user group in Slack.

**Parameters**

-   **usergroup\_id** (`string`, required) The ID of the IDP group to list channels for. It identifies which organizational group to retrieve the default channels from.
-   **workspace\_id** (`string`, optional) The unique identifier for the Slack workspace.
-   **include\_member\_count\_in\_channels** (`boolean`, optional) Set to true to include the count of members for each channel, otherwise set to false.

## SlackApi.ListWorkspaceUsers



Retrieve a list of users from a Slack workspace.

**Parameters**

-   **workspace\_team\_id** (`string`, optional) The ID of the Slack workspace (e.g., T1234) to filter users from. Only users from this workspace will be listed.
-   **pagination\_cursor** (`string`, optional) Use this to navigate through paginated results by setting it to the `next_cursor` from a previous response.
-   **user\_retrieval\_limit** (`integer`, optional) Maximum number of users to retrieve per page from the Slack workspace. (default: ‘100’)
-   **return\_only\_active\_users** (`boolean`, optional) Return only active users if true; return only deactivated users if false. Default is true.
-   **include\_deactivated\_user\_workspaces** (`boolean`, optional) Include workspaces for users even if they are deactivated. Only applies with org token and no team\_id. Default is false.
-   **return\_only\_guest\_users** (`boolean`, optional) If true, returns only guests and their expiration dates that belong to the specified team\_id.

## SlackApi.CheckApiCallingCode



Verify the correctness of API calling code for Slack.

**Parameters**

-   **simulate\_error\_response** (`string`, optional) Specify an error code to simulate an error response for testing API calls. Useful for testing error handling.

## SlackApi.RevokeSlackToken



Revoke a Slack authentication token.

**Parameters**

-   **trigger\_testing\_mode** (`boolean`, optional) Set to true to trigger testing mode where the token will not be revoked. Useful for testing.

## SlackApi.EditSlackBookmark



Edit an existing bookmark in a Slack channel.

**Parameters**

-   **slack\_channel\_id** (`string`, required) The ID of the Slack channel where the bookmark will be updated.
-   **target\_bookmark\_id** (`string`, required) The unique identifier of the bookmark you want to update.
-   **bookmark\_title** (`string`, optional) The new title for the bookmark to update.
-   **bookmark\_link** (`string`, optional) URL of the bookmark to be edited. Ensure it is a valid format starting with http or https.
-   **emoji\_tag** (`string`, optional) The emoji tag to apply to the bookmark link. It should be a valid emoji code (e.g., :smile:).

## SlackApi.RemoveSlackBookmark



Remove a bookmark from a Slack channel.

**Parameters**

-   **slack\_channel\_id\_to\_remove\_bookmark** (`string`, required) The ID of the Slack channel from which the bookmark should be removed. This ID specifies the target channel and is required to locate and delete the bookmark.
-   **bookmark\_id\_to\_remove** (`string`, required) The ID of the bookmark to be removed from a Slack channel. Ensure it is specified correctly to delete the correct bookmark.
-   **quip\_section\_id** (`string`, optional) The ID of the Quip section to unbookmark. This is required to specify which section’s bookmark should be removed.

## SlackApi.GetSlackBotInfo



Retrieve details about a Slack bot user.

**Parameters**

-   **target\_bot\_id** (`string`, optional) The unique bot ID for which information is requested. This ID is specific to each workspace the bot is in.
-   **team\_id\_for\_org\_token\_use** (`string`, optional) Encoded team or enterprise ID where the bot exists. Required if using an organization token. Ignored if using a workspace-level token.

## SlackApi.RegisterSlackCall



Registers a new call on Slack.

**Parameters**

-   **unique\_call\_id** (`string`, required) A unique ID for the Call, provided by the 3rd-party Call provider. Ensure it is unique across all calls from your service.
-   **call\_join\_url** (`string`, required) The URL required for a client to join the Call on Slack.
-   **optional\_human\_readable\_display\_id** (`string`, optional) An optional, human-readable ID for the call, supplied by the third-party provider. This ID will be displayed in the Call object if given.
-   **desktop\_app\_join\_url** (`string`, optional) The URL used to directly launch the 3rd-party Call from Slack clients, if provided.
-   **call\_start\_timestamp** (`integer`, optional) Unix timestamp indicating when the call is scheduled to start.
-   **call\_title** (`string`, optional) The name of the Call to be registered on Slack. This title will be used to identify the Call within Slack.
-   **call\_creator\_user\_id** (`string`, optional) The valid Slack user ID of the creator of this call. Optional if using a user token, which defaults to the authed user.
-   **participants\_info** (`array[string]`, optional) A list of participants to register for the call, including ‘slack\_id’, ‘external\_id’, ‘display\_name’, and ‘avatar\_url’ for each user.

## SlackApi.GetCallInformation



Retrieve detailed information about a specific call in Slack.

**Parameters**

-   **call\_id** (`string`, required) The unique identifier of the call as returned by the `calls.add` method. This ID is necessary to retrieve detailed call information.

## SlackApi.AddCallParticipants



Add new participants to a Slack call.

**Parameters**

-   **call\_id** (`string`, required) The unique identifier for the call, as returned by the `calls.add` method. This ID specifies which call the participants will be added to.
-   **participant\_users** (`array[string]`, required) List of users to add, specified by `slack_id` or `external_id`. Include optional `display_name` and `avatar_url` for each user.

## SlackApi.RemoveCallParticipants



Remove participants from a Slack call.

**Parameters**

-   **call\_id** (`string`, required) The unique identifier for the call from which participants are to be removed. This `id` is obtained from the `calls.add` method.
-   **users\_to\_remove** (`array[string]`, required) A list of user IDs to remove as participants from the call. Refer to Slack’s documentation for specifying user IDs.

## SlackApi.DeleteScheduledSlackMessage



Delete a pending scheduled message from Slack queue.

**Parameters**

-   **channel\_id** (`string`, required) The ID of the channel where the scheduled message is set to post. Required to identify the correct message to delete.
-   **scheduled\_message\_id** (`string`, required) The ID of the scheduled message to be deleted. This ID is obtained from the `chat.scheduleMessage` response.
-   **delete\_as\_authenticated\_user** (`boolean`, optional) Set to true to delete the message as the authenticated user with `chat:write:user` scope. Bot users are considered authenticated users. If false, the message will be deleted with `chat:write:bot` scope.

## SlackApi.GetSlackMessagePermalink



Retrieve a permalink URL for a specific Slack message.

**Parameters**

-   **channel\_id** (`string`, required) The unique identifier of the Slack conversation or channel containing the message.
-   **message\_timestamp** (`string`, required) The unique timestamp of the message to retrieve the permalink for. It identifies the message within the Slack channel.

## SlackApi.SendEphemeralMessageSlack



Send an ephemeral message to a user in a Slack channel.

**Parameters**

-   **target\_channel** (`string`, required) The channel, private group, or IM channel where the ephemeral message will be sent. Accepts an encoded ID or the channel’s name.
-   **recipient\_user\_id** (`string`, required) The ID of the user who will receive the ephemeral message. Must be in the specified channel.
-   **structured\_attachments** (`array[string]`, optional) A JSON-encoded array of structured attachments for the message. Presented as a URL-encoded string.
-   **structured\_blocks** (`array[string]`, optional) A URL-encoded JSON array of structured Slack block elements. Use for rich message formatting.
-   **message\_icon\_emoji** (`string`, optional) Emoji to display as the message icon, overriding icon\_url. Specify using the emoji name like :smile:.
-   **message\_icon\_url** (`string`, optional) URL for the image to be used as the icon for the message. It overrides the icon\_emoji if provided.
-   **message\_markdown\_text** (`string`, optional) The main text formatted in markdown to be sent as an ephemeral message. Do not use with `blocks` or `text`. Character limit: 12,000.
-   **message\_parse\_mode** (`string`, optional) Specifies how the message text is interpreted. Options are: ‘none’, ‘full’, ‘mrkdwn’, or ‘false’. Defaults to ‘none’. (default: ‘none’)
-   **ephemeral\_message\_text** (`string`, optional) The main text of the ephemeral message for Slack. It acts as a fallback when using blocks; can be formatted as plain text or markdown. Limit to a few thousand bytes.
-   **parent\_message\_timestamp** (`string`, optional) The timestamp of the parent message to post this ephemeral message in its thread. Ensure there is already an active thread.
-   **bot\_username** (`string`, optional) The username for the bot sending the ephemeral message. This sets the display name in the Slack message.
-   **link\_names\_auto\_link** (`boolean`, optional) Set to true to automatically find and link channel names and usernames.

## SlackApi.SendSlackMessage



Sends a message to a Slack channel.

**Parameters**

-   **target\_channel\_id\_or\_name** (`string`, required) The encoded ID or name of the channel, private group, or IM where the message will be sent. Retrieve using Slack’s conversations.list API.
-   **message\_attachments** (`array[string]`, optional) A JSON array of structured attachment objects for the message, provided as a URL-encoded string. Example: `[{"pretext": "pre-hello", "text": "text-world"}]`.
-   **structured\_blocks** (`array[string]`, optional) A JSON-based array of structured blocks for constructing messages using Block Kit. Provide as a URL-encoded string. Include fallback text if necessary.
-   **emoji\_icon\_for\_message** (`string`, optional) Emoji to display as the icon for the Slack message. Overrides any image URL icon.
-   **message\_icon\_url** (`string`, optional) URL to an image to use as the icon for the message. Overrides any specified icon emoji.
-   **message\_markdown** (`string`, optional) The message text formatted using markdown, up to 12,000 characters. Cannot be used with `blocks` or `text`.
-   **message\_metadata** (`string`, optional) A JSON object with ‘event\_type’ and ‘event\_payload’ fields, URL-encoded, providing additional metadata for the message.
-   **parse\_mode** (`string`, optional) Specifies how the message content should be treated. Options are ‘none’ to remove hyperlinks or ‘full’ to ignore markdown formatting.
-   **message\_text** (`string`, optional) The main text of the message. Acts as the primary message or a fallback for notifications when using blocks. Supports plain text or markdown.
-   **thread\_timestamp** (`string`, optional) Timestamp of the parent message to which this message will be a reply. Use the parent’s `ts` value, not a reply’s.
-   **bot\_username** (`string`, optional) The display name to use for the bot when sending the message to Slack.
-   **post\_as\_authenticated\_user** (`boolean`, optional) Set to true to post the message as the authenticated user instead of as a bot. Only applicable for classic apps.
-   **link\_user\_groups** (`boolean`, optional) Enable linking of user groups in the message. Individual user linking is not supported.
-   **enable\_slack\_markup\_parsing** (`boolean`, optional) Set to true to enable Slack markup parsing in the message. Default is enabled.
-   **broadcast\_reply\_to\_channel** (`boolean`, optional) Set to true to make the reply visible to everyone in the channel when responding to a thread. Use with ‘thread\_ts’. Default is false.
-   **enable\_unfurling\_text\_content** (`boolean`, optional) Set to true to enable unfurling of primarily text-based content in Slack messages.
-   **disable\_media\_unfurling** (`boolean`, optional) Set to false to enable media unfurling and true to disable it. (default: ‘false’)

## SlackApi.ListScheduledMessages



Retrieve scheduled messages from Slack.

**Parameters**

-   **channel\_id** (`string`, optional) The ID of the Slack channel from which to retrieve scheduled messages.
-   **pagination\_cursor** (`string`, optional) Cursor value for pagination to specify the starting point of the list from a previous call.
-   **latest\_timestamp** (`string`, optional) A Unix timestamp marking the latest point in the time range for fetching scheduled messages. Ensure it is greater than the `oldest` timestamp if both are set.
-   **max\_number\_of\_entries** (`integer`, optional) Specify the maximum number of scheduled messages to return from Slack.
-   **oldest\_timestamp** (`string`, optional) A Unix timestamp representing the start of the time range for scheduled messages. It must be less than the `latest_timestamp` if both are specified.
-   **team\_id** (`string`, optional) Encoded team ID to specify which team’s channels to list. Required if using an org-level token; ignore for workspace-level tokens.

## SlackApi.ScheduleSlackMessage



Schedule a message to be sent later in Slack.

**Parameters**

-   **slack\_channel\_id\_or\_name** (`string`, required) Specify the target Slack channel, private group, or DM. Use an encoded ID or the channel name. Retrieve channel ID via `conversations.list`.
-   **schedule\_time\_unix\_timestamp** (`integer`, required) Unix timestamp for when the message should be posted to Slack. Must be within 120 days and not exceed 30 messages per 5-minute window.
-   **attachments\_json** (`string`, optional) A JSON array of structured attachments as a URL-encoded string for the Slack message.
-   **structured\_blocks\_json** (`string`, optional) A URL-encoded string of a JSON-based array containing structured blocks for message formatting.
-   **message\_markdown** (`string`, optional) Message text in markdown format. Avoid using with ‘blocks’ or ‘text’. Maximum 12,000 characters.
-   **message\_parsing\_mode** (`string`, optional) Specifies how the message content should be parsed and interpreted when sending to Slack. For more details, refer to chat.postMessage documentation.
-   **message\_text** (`string`, optional) The main body of the Slack message or a fallback text when using blocks. Can be plain text or formatted with mrkdwn.
-   **parent\_message\_timestamp** (`string`, optional) Timestamp of the parent message to which this message is a reply. Use the original message’s timestamp, not a reply’s timestamp.
-   **metadata\_json** (`string`, optional) JSON object containing ‘event\_type’ and ‘event\_payload’ fields. Must be URL-encoded. Note: using this will prevent scheduled messages from posting.
-   **enable\_group\_linking** (`boolean`, optional) Set to true to link user groups in the message. Linking individual users is not supported; use mention syntax instead.
-   **make\_reply\_visible\_to\_everyone** (`boolean`, optional) Set to true to make the reply visible to everyone in the channel or conversation. Use with `thread_ts`. Defaults to false.
-   **enable\_link\_unfurling** (`boolean`, optional) Pass true to enable unfurling of primarily text-based content.
-   **disable\_unfurling\_of\_media\_content** (`boolean`, optional) Set to true to disable unfurling of media content. Defaults to false.

## SlackApi.CustomUnfurlSlackUrls



Provide custom unfurl behavior for user-posted URLs on Slack.

**Parameters**

-   **channel\_id** (`string`, required) ID of the Slack channel where the message is posted. Required with ‘ts’ for custom unfurl or with ‘unfurl\_id’ and ‘source’.
-   **message\_timestamp** (`string`, required) Timestamp of the message to which unfurl behavior will be added. Ensure it corresponds to a message in the specified channel containing a fully-qualified URL registered with your Slack app.
-   **unfurl\_url\_map** (`string`, required) A URL-encoded JSON map with URLs as keys and their corresponding unfurl data as values. Each URL should point to a single attachment, like message buttons.
-   **authentication\_invitation\_message** (`string`, optional) A simple formatted string sent as an ephemeral message inviting the user to authenticate for full unfurl behavior. Supports Slack’s _bold_, _italics_, and linking formatting. If provided, this takes precedence over `authentication_invitation_url`.
-   **custom\_authentication\_url** (`string`, optional) A URL to redirect users for app authentication to enable full URL unfurling, requires URL encoding.
-   **user\_authentication\_blocks** (`array[string]`, optional) A URL-encoded JSON array of structured blocks to send as an ephemeral message for user authentication invitation.
-   **unfurl\_link\_id** (`string`, optional) The ID of the link to unfurl. Must be used with ‘source’.
-   **link\_source** (`string`, optional) Specify the source of the link to unfurl as either ‘composer’ for links inside the message composer or ‘conversations\_history’ for links posted to a conversation. Must be used with ‘unfurl\_id’, or alternatively with ‘channel’ and ‘ts’.
-   **require\_user\_authentication** (`boolean`, optional) Set to true if the user must install your Slack app to trigger unfurls for this domain.

## SlackApi.AcceptSlackInvite



Accept invitations to a Slack Connect channel.

**Parameters**

-   **channel\_name** (`string`, required) Provide the desired name for the Slack Connect channel. If the channel doesn’t exist in your workspace, this name will be assigned to it.
-   **invite\_id** (`string`, optional) ID of the invitation you want to accept. Must provide either this or channel\_id.
-   **slack\_channel\_id\_to\_accept** (`string`, optional) The ID of the channel you would like to accept the invitation for. Either this or `invite_id` is required.
-   **workspace\_id** (`string`, optional) The ID of the workspace where the channel should be accepted. Required if using an org-level token.
-   **is\_channel\_private** (`boolean`, optional) True to make the channel private; false to make it public.
-   **use\_free\_trial** (`boolean`, optional) Set to ‘True’ to use your workspace’s free trial to start using Slack Connect.

## SlackApi.ApproveSlackChannelInvitation



Approve an invitation to a Slack Connect channel.

**Parameters**

-   **shared\_channel\_invite\_id** (`string`, required) The ID of the shared channel invitation you want to approve. It is required to specifically identify which invitation is being approved for the Slack Connect channel.
-   **other\_party\_team\_id** (`string`, optional) The team or enterprise ID of the other party involved in the Slack Connect invitation you are approving.

## SlackApi.CreateSlackConversation



Create a new public or private Slack conversation.

**Parameters**

-   **channel\_name** (`string`, required) The name of the new Slack channel to create. It must contain only lowercase letters, numbers, hyphens, and underscores, and be 80 characters or less.
-   **encoded\_team\_id** (`string`, optional) The encoded team ID where the channel will be created. Required when using an organization-level token. Ignored if using a workspace-level token.
-   **create\_private\_channel** (`boolean`, optional) Set to true to create a private channel instead of a public one.

## SlackApi.GetConversationInfo



Fetches information about a Slack conversation.

**Parameters**

-   **conversation\_id** (`string`, required) The unique ID of the Slack conversation to retrieve information for.
-   **include\_locale** (`boolean`, optional) Set to `true` to receive the locale for this conversation. Defaults to `false`.
-   **include\_member\_count** (`boolean`, optional) Set to true to include the member count for the specified conversation. Defaults to false.

## SlackApi.InviteUserToSlackChannel



Invite users to a Slack channel.

**Parameters**

-   **slack\_channel\_id** (`string`, required) The ID of the Slack channel to invite users to. It can be a public or private channel ID.
-   **user\_ids\_list** (`string`, required) A list of up to 100 user IDs to invite, separated by commas.
-   **continue\_with\_valid\_users** (`boolean`, optional) Set to true to invite valid users while ignoring invalid IDs when multiple user IDs are provided. Default is false.

## SlackApi.JoinSlackConversation



Join an existing conversation in Slack.

**Parameters**

-   **conversation\_id** (`string`, required) The ID of the conversation or channel you want to join in Slack.

## SlackApi.ListSlackChannels



Retrieve a list of all channels in a Slack team.

**Parameters**

-   **pagination\_cursor** (`string`, optional) The cursor used to paginate through data collections. Use the `next_cursor` from a previous response to continue; omit for the first page.
-   **maximum\_number\_of\_channels** (`integer`, optional) Specify the maximum number of channels to return. Must be an integer under 1000. Note that fewer channels than requested may be returned. (default: ‘100’)
-   **team\_id\_for\_org\_app** (`string`, optional) Encoded team ID to list channels. Required for org-level tokens; ignored for workspace-level tokens.
-   **channel\_types** (`string`, optional) Comma-separated list of channel types to include, e.g., ‘public\_channel’, ‘private\_channel’, ‘mpim’, ‘im’. (default: ‘public\_channel’)
-   **exclude\_archived\_channels** (`boolean`, optional) Set to true to exclude archived channels from the list of Slack channels. Default is false.

## SlackApi.ListSharedChannelInvites



Retrieve unapproved shared channel invites from Slack.

**Parameters**

-   **workspace\_team\_id** (`string`, optional) The encoded team ID for the workspace to retrieve invites from. Required when using an organization token.
-   **maximum\_invites\_to\_return** (`integer`, optional) Specify the maximum number of unapproved shared channel invites to retrieve. (default: ‘100’)
-   **pagination\_cursor** (`string`, optional) The cursor for paginating through results, obtained from a previous call’s next\_cursor.

## SlackApi.SetSlackChannelReadCursor



Update the read cursor in a Slack channel.

**Parameters**

-   **channel\_id** (`string`, required) The ID of the Slack channel or conversation where you want to set the read cursor. This should be a valid Slack channel ID.
-   **timestamp\_of\_message\_to\_mark\_as\_read** (`string`, required) The unique identifier (timestamp) of the message you want to mark as most recently seen in the conversation.

## SlackApi.GetSlackConversationMembers



Retrieve members from a specified Slack conversation.

**Parameters**

-   **conversation\_id** (`string`, required) The ID of the Slack conversation to retrieve members from. This can be a channel, group, or direct message.
-   **pagination\_cursor** (`string`, optional) Cursor for pagination, set to the `next_cursor` value from a previous response to continue retrieving members from a conversation.
-   **max\_items\_to\_return** (`integer`, optional) The maximum number of conversation members to return. Recommended to specify a value under 1000, with no more than 200 results at a time for optimal pagination. (default: ‘100’)

## SlackApi.OpenOrResumeSlackConversation



Open or resume a direct or multi-person message in Slack.

**Parameters**

-   **conversation\_channel\_id** (`string`, optional) The ID of an existing direct or multi-person message channel to resume. Alternatively, provide the `users` field to start a new conversation.
-   **target\_user\_ids** (`string`, optional) A comma-separated list of user IDs to open or resume a conversation. Provide 1 to 8 IDs. Supplying 1 ID opens a 1:1 DM, while more than 1 ID opens a multi-person DM. Do not include the caller’s ID.
-   **return\_full\_im\_channel\_definition** (`boolean`, optional) Set to true to receive the entire IM channel definition; false returns only the conversation ID.
-   **prevent\_creation** (`boolean`, optional) If true, does not create a new conversation and instead checks for an existing DM or MPDM.

## SlackApi.GetSlackThreadMessages



Retrieve messages from a Slack conversation thread.

**Parameters**

-   **conversation\_id** (`string`, required) The ID of the Slack conversation from which to fetch the message thread.
-   **thread\_message\_timestamp** (`string`, required) Unique identifier of a parent message or a thread message (timestamp). Fetches the thread or the single message.
-   **pagination\_cursor** (`string`, optional) Cursor for pagination. Use the `next_cursor` from a previous response to fetch the next page of data.
-   **latest\_message\_timestamp** (`string`, optional) Only include messages posted before this Unix timestamp in the results. (default: ‘now’)
-   **maximum\_items\_to\_return** (`integer`, optional) Specify the maximum number of messages to fetch. The default and maximum are 15 for certain apps, with possible rate limits. (default: ‘1000’)
-   **start\_time\_unix\_timestamp** (`string`, optional) Only include messages after this Unix timestamp in results. (default: ‘0’)
-   **include\_all\_message\_metadata** (`boolean`, optional) Set to true to return all metadata associated with this message.
-   **include\_boundary\_timestamps** (`boolean`, optional) Include messages with ‘oldest’ or ‘latest’ timestamps. Ignored unless either timestamp is specified.

## SlackApi.DenySharedInviteRequest



Denies an external user invitation to a Slack channel.

**Parameters**

-   **shared\_channel\_invite\_id** (`string`, required) The ID for the shared channel invite request that you intend to deny. This is required for specifying which invite to decline.
-   **deny\_invite\_message** (`string`, optional) An optional message explaining why the invitation was denied. This message will be sent to the requester.

## SlackApi.ListCustomEmojiForTeam



Retrieve a list of custom emojis for a specific team.

**Parameters**

-   **include\_emoji\_categories** (`boolean`, optional) Set to true to include categories for Unicode emojis in the response.

## SlackApi.GetExternalFileUploadUrl



Retrieve a URL to upload an external file to Slack.

**Parameters**

-   **file\_size\_in\_bytes** (`integer`, required) Specify the size of the file to be uploaded, measured in bytes. Ensure this value accurately reflects the file size.
-   **file\_name** (`string`, required) The name of the file to be uploaded to Slack.
-   **snippet\_syntax\_type** (`string`, optional) Specify the syntax highlighting type for the snippet being uploaded, such as ‘javascript’, ‘python’, etc.
-   **alt\_text\_description** (`string`, optional) A description of the image for screen-readers, limited to 1000 characters.

## SlackApi.GetRemoteFileInfoSlack



Retrieve details about a remote file from Slack.

**Parameters**

-   **file\_external\_identifier** (`string`, optional) The GUID defined by the creator for the remote file to retrieve its information.
-   **file\_id** (`string`, optional) The unique identifier of the file to retrieve information about. Use this to specify the file in Slack.

## SlackApi.GetSlackRemoteFilesInfo



Retrieve information about remote files added to Slack.

**Parameters**

-   **filter\_by\_channel\_id** (`string`, optional) Filter remote files to only include those appearing in the specified Slack channel, indicated by its channel ID.
-   **pagination\_cursor** (`string`, optional) A cursor for paginating through data. Use the `next_cursor` from a prior request to fetch the next set of results. Defaults to the first page if not set.
-   **maximum\_items\_to\_return** (`integer`, optional) Specify the maximum number of remote file records to retrieve from Slack.
-   **filter\_files\_from\_timestamp** (`string`, optional) Filter files created after this inclusive timestamp. Use a Unix timestamp format. (default: ‘0’)
-   **timestamp\_filter\_end** (`string`, optional) Filter files created before this timestamp (inclusive) in Unix epoch time format. (default: ‘now’)

## SlackApi.ShareRemoteFileInChannel



Share a remote file into a Slack channel.

**Parameters**

-   **target\_channel\_ids** (`string`, required) Comma-separated list of Slack channel IDs where the remote file will be shared. Ensure IDs are valid and the user has permission to share files in these channels.
-   **file\_external\_identifier** (`string`, optional) The globally unique identifier (GUID) for the file set by the app when registering with Slack. Required if ‘file’ is not provided.
-   **file\_id** (`string`, optional) The ID of a file registered with Slack to be shared. Required if `external_id` is not provided.

## SlackApi.EnableSlackFileSharing



Enable a Slack file for public sharing.

**Parameters**

-   **file\_id\_to\_share** (`string`, required) The ID of the file on Slack that you want to enable for public sharing.

## SlackApi.PinItemToSlackChannel



Pin an item to a Slack channel.

**Parameters**

-   **channel\_id** (`string`, required) The ID of the Slack channel where the message will be pinned. A `timestamp` must also be provided.
-   **message\_timestamp** (`string`, optional) The timestamp (`ts`) of the message to pin in the Slack channel. Ensure the channel is also specified.

## SlackApi.ListPinnedItems



Retrieve items pinned to a Slack channel.

**Parameters**

-   **channel\_id** (`string`, required) The ID of the Slack channel to retrieve pinned items from. This is required to specify which channel’s pinned items will be listed.

## SlackApi.AddSlackReaction



Add a reaction to a Slack item.

**Parameters**

-   **slack\_channel\_id** (`string`, required) ID of the channel where the message is posted. Use to specify the location for adding a reaction.
-   **reaction\_emoji\_name** (`string`, required) The name of the emoji to be used as a reaction. Include skin tone modifiers if applicable (e.g., ‘thumbsup::skin-tone-2’).
-   **message\_timestamp** (`string`, required) The timestamp of the message to which the reaction will be added. Ensure the format matches the Slack API requirements.

## SlackApi.RemoveReactionFromItem



Remove a reaction from a Slack item.

**Parameters**

-   **reaction\_emoji\_name** (`string`, required) The name of the emoji reaction to be removed, such as ‘smile’ or ‘thumbsup’.
-   **target\_file\_id** (`string`, optional) The identifier of the file from which to remove the reaction. Specify either this, `target_file_comment_id`, or both `target_channel_id` and `target_message_timestamp`.
-   **file\_comment\_id** (`string`, optional) The ID of the file comment from which you want to remove the reaction. Provide this if the reaction is on a file comment.
-   **message\_channel\_id** (`string`, optional) Channel ID where the message to remove the reaction from was posted. Required if removing a reaction from a message. Use in combination with ‘message\_timestamp’.
-   **message\_timestamp** (`string`, optional) The exact timestamp of the message from which to remove the reaction. Specify when targeting a message.

## SlackApi.SearchFilesInSlack



Search for files in Slack using a query.

**Parameters**

-   **search\_query** (`string`, required) The text string to search for in Slack files. Use keywords or phrases to narrow down results.
-   **items\_per\_page** (`integer`, optional) The number of file results to return per page. Maximum allowed value is 100. (default: ‘20’)
-   **results\_page\_number** (`integer`, optional) The specific page number of results to retrieve, with a maximum value of 100. (default: ‘1’)
-   **sort\_files\_by** (`string`, optional) Specify how to sort the search results: either by ‘score’ or ‘timestamp’. (default: ‘score’)
-   **sort\_direction** (`string`, optional) Change the sort direction for search results to ascending (‘asc’) or descending (‘desc’). (default: ‘desc’)
-   **encoded\_team\_id** (`string`, optional) Encoded team ID to specify the search domain when using an org-level token. Ignored with a workspace-level token.
-   **enable\_query\_highlight** (`boolean`, optional) Set to true to enable highlight markers for matching query terms in the search results.

## SlackApi.SearchSlackMessages



Search Slack messages based on a query.

**Parameters**

-   **search\_query** (`string`, required) The text to search for in Slack messages. Use keywords or phrases to narrow down results.
-   **results\_per\_page** (`integer`, optional) The number of search results to return per page, with a maximum limit of 100. (default: ‘20’)
-   **page\_number** (`integer`, optional) The page number of search results to retrieve, maximum value of 100. (default: ‘1’)
-   **pagination\_cursor** (`string`, optional) Use ’\*’ for the first call to start pagination or provide the ‘next\_cursor’ value from previous results to continue.
-   **sort\_results\_by** (`string`, optional) Specify the criterion for sorting the search results, either by ‘score’ for relevance or ‘timestamp’ for chronological order. (default: ‘score’)
-   **sort\_direction** (`string`, optional) Specify the order for sorting results: use ‘asc’ for ascending or ‘desc’ for descending. (default: ‘desc’)
-   **team\_id** (`string`, optional) The encoded team ID to search within. Required only if an organization-level token is used. Ignored for workspace-level tokens.
-   **enable\_query\_highlighting** (`boolean`, optional) Set to true to enable query highlight markers, marking matching terms in the results.

## SlackApi.GetTeamBillableUsersInfo



Retrieves billable users info for the current Slack team.

**Parameters**

-   **pagination\_cursor** (`string`, optional) Cursor for pagination. Use the `next_cursor` from the previous response to fetch the next page of users. (default: ‘fetches the first page’)
-   **maximum\_items\_to\_return** (`integer`, optional) Specifies the maximum number of billable user entries to be retrieved.
-   **specific\_user\_id** (`string`, optional) The ID of a specific user to retrieve billable information for. Leave empty to retrieve info for all users.
-   **encoded\_team\_id** (`string`, optional) Encoded team ID for retrieving billable info, required if using an org token. Ignored with workspace-level tokens.

## SlackApi.GetCurrentSlackTeamInfo



Retrieve information about the current Slack team.

**Parameters**

-   **query\_by\_domain** (`string`, optional) Comma-separated domains to query instead of a team, used when the team is not specified. This only works for domains in the same enterprise as the querying team token.
-   **specific\_team\_id** (`string`, optional) The ID of the Slack team to retrieve information about. If omitted, information about the current team will be returned.

## SlackApi.GetIntegrationLogs



Retrieve integration logs for the current Slack team.

**Parameters**

-   **filter\_by\_app\_id** (`string`, optional) Filter integration logs to a specific Slack app. If not provided, logs for all apps are retrieved.
-   **filter\_by\_change\_type** (`string`, optional) Specify the change type to filter logs. Options: ‘added’, ‘removed’, ‘enabled’, ‘disabled’, ‘updated’. Defaults to all logs.
-   **result\_count** (`string`, optional) The number of log entries to retrieve. Specify the maximum number of logs to return in a single request. (default: ‘100’)
-   **result\_page\_number** (`string`, optional) The specific page number of the integration logs to retrieve. Used for pagination. (default: ‘1’)
-   **filter\_by\_service\_id** (`string`, optional) Specify the service ID to filter integration logs related to a specific service. If not provided, logs for all services will be retrieved.
-   **encoded\_team\_id** (`string`, optional) The encoded team ID to get logs from, required if using an org-level token. Ignored if using a workspace-level token.
-   **filter\_by\_user** (`string`, optional) Filter logs generated by a specific user’s actions. Defaults to all logs if not specified.

## SlackApi.GetSlackTeamPreferences



Retrieve a list of a workspace’s team preferences.

**Parameters**

This tool does not take any parameters.

## SlackApi.GetTeamProfile



Retrieve a team’s profile information from Slack.

**Parameters**

-   **visibility\_filter** (`string`, optional) Filter the profile fields based on visibility. Options: ‘all’, ‘visible’, ‘hidden’. Default is ‘all’.

## SlackApi.CreateSlackUserGroup



Creates a new user group in Slack.

**Parameters**

-   **user\_group\_name** (`string`, required) A unique name for the user group to be created, distinguishing it from other user groups.
-   **default\_channel\_ids** (`array[string]`, optional) A list of channel IDs to set as default for the User Group. Use comma-separated values.
-   **custom\_additional\_channels** (`array[string]`, optional) Comma-separated encoded channel IDs where the User Group can add members.
-   **user\_group\_description** (`string`, optional) A brief text describing the purpose or role of the user group in Slack.
-   **unique\_mention\_handle** (`string`, optional) A unique mention handle for the user group. It must not duplicate existing handles of channels, users, or other user groups.
-   **team\_id\_for\_user\_group\_creation** (`string`, optional) Encoded team ID for the user group creation, required if using an org-level token.
-   **include\_user\_count** (`boolean`, optional) Set to true to include the number of users in each User Group.
-   **enable\_display\_as\_sidebar\_section** (`boolean`, optional) Set to true to display the user group as a sidebar section for all group members if the group has one or more default channels.

## SlackApi.DisableUserGroup



Disable an existing Slack User Group.

**Parameters**

-   **user\_group\_id** (`string`, required) The encoded ID of the User Group to be disabled.
-   **team\_id** (`string`, optional) Encoded target team ID where the user group exists. Required only if using an org-level token; ignored for workspace-level tokens.
-   **include\_user\_count** (`boolean`, optional) Include the number of users in the User Group. Set to true to include the count.

## SlackApi.EnableSlackUserGroup



Enable a user group in Slack.

**Parameters**

-   **user\_group\_id** (`string`, required) The encoded ID of the User Group to be enabled in Slack.
-   **team\_id** (`string`, optional) Provide the encoded team ID where the user group is located. Only required if using an org-level token. Ignored with workspace-level tokens.
-   **include\_user\_count** (`boolean`, optional) Set to true to include the number of users in the User Group.

## SlackApi.ListSlackUserGroups



Retrieve all user groups for a Slack team.

**Parameters**

-   **team\_id\_for\_org\_token** (`string`, optional) Encoded team ID required when using an org-level token. Ignored if using a workspace-level token.
-   **include\_user\_count** (`boolean`, optional) Set to true to include the number of users in each User Group.
-   **include\_disabled\_groups** (`boolean`, optional) Set to true to include disabled user groups in the results.
-   **include\_users\_in\_group** (`boolean`, optional) Include the list of users for each User Group in the response.

## SlackApi.UpdateSlackUserGroup



Update an existing User Group in Slack.

**Parameters**

-   **user\_group\_id** (`string`, required) The encoded ID of the User Group to update in Slack.
-   **default\_channel\_ids** (`array[string]`, optional) A comma-separated list of channel IDs where the User Group is set as default. Use encoded channel IDs.
-   **additional\_channel\_ids** (`array[string]`, optional) Comma separated encoded channel IDs for custom additions to user group members.
-   **user\_group\_description** (`string`, optional) A short description of the User Group to update in Slack. This should clearly define the group’s purpose or role.
-   **user\_group\_handle** (`string`, optional) Unique mention handle for the User Group, distinct from all channels, users, and other User Groups.
-   **user\_group\_name** (`string`, optional) A unique name for the User Group to update. Ensure it does not duplicate any existing User Group names.
-   **team\_id\_for\_org\_token** (`string`, optional) Encoded team ID where the user group exists, required for org-level tokens. Ignored if using a workspace-level token.
-   **include\_user\_count** (`boolean`, optional) Set to true to include the number of users in the User Group.
-   **enable\_sidebar\_section** (`boolean`, optional) Set to true to configure the user group to appear as a sidebar section for all group members. Only relevant if the group has 1 or more default channels.

## SlackApi.UpdateSlackUsergroupUsers



Update the list of users in a Slack user group.

**Parameters**

-   **user\_group\_id** (`string`, required) The encoded ID of the Slack user group to update.
-   **user\_ids\_list** (`array[string]`, required) A comma separated string of encoded Slack user IDs representing the complete user list for the group. This replaces all current members.
-   **team\_id\_for\_org\_token** (`string`, optional) Encoded team ID where the user group exists. Required if using an organization token; ignored with workspace-level token.
-   **update\_additional\_channels** (`array[string]`, optional) Encoded channel IDs to add user group members to, separated by commas. These represent additional channels for custom user group member additions.
-   **include\_user\_count** (`boolean`, optional) Set to true to include the number of users in the user group in the response.
-   **is\_shared\_section** (`boolean`, optional) Indicates if the API call involves a shared section. Set to true if it does, otherwise false.

## SlackApi.ListAccessibleSlackConversations



Retrieve a list of conversations the user can access on Slack.

**Parameters**

-   **pagination\_cursor** (`string`, optional) A cursor for pagination to continue listing conversations from a specific point. Use the ‘next\_cursor’ from a previous response. Default is the first page.
-   **maximum\_items\_to\_return** (`integer`, optional) The maximum number of conversations to return in the response. Must be an integer with a maximum value of 999. It is recommended to request no more than 200 results at a time for optimal performance. (default: ‘100’)
-   **slack\_team\_id** (`string`, optional) The encoded ID of the Slack team to list conversations for. Required if using an organization-level token. Ignored if a workspace-level token is used.
-   **channel\_types** (`string`, optional) Comma-separated list of channel types to filter conversations. Options: public\_channel, private\_channel, mpim, im. (default: ‘public\_channel’)
-   **specific\_user\_id** (`string`, optional) Filter conversations by a specific user ID’s membership. Only includes conversations shared with the calling user.
-   **exclude\_archived\_channels** (`boolean`, optional) Set to true to exclude archived channels from the retrieved list of Slack conversations. (default: false)

## SlackApi.CheckSlackDiscoverability



Check if an email is discoverable on Slack.

**Parameters**

-   **email\_to\_check** (`string`, required) The email address to verify if it is associated with a discoverable Slack user.

## SlackApi.GetSlackUserPresence



Retrieve user presence information from Slack.

**Parameters**

-   **target\_user\_id** (`string`, optional) The Slack user ID for which you want to retrieve presence information. (default: ‘authed user’)

## SlackApi.GetUserIdentity



Retrieve a user’s identity information from Slack.

**Parameters**

This tool does not take any parameters.

## SlackApi.ListSlackTeamUsers



Fetches a list of all users in a Slack team.

**Parameters**

-   **pagination\_cursor** (`string`, optional) Cursor for paginating through data. Use the `next_cursor` from a previous response to continue.
-   **maximum\_items\_to\_return** (`integer`, optional) Maximum number of users to return (recommended max is 200 for pagination).
-   **slack\_team\_id** (`string`, optional) The encoded team ID to list users from, necessary if an organization-level token is used. Ignored if a workspace-level token is provided.
-   **include\_user\_locale** (`boolean`, optional) Set to true to receive locale information for each user. Default is false.

## SlackApi.FindSlackUserByEmail



Find a Slack user using their email address.

**Parameters**

-   **user\_email\_address** (`string`, required) The email address of the user in the Slack workspace to search for.

## SlackApi.GetSlackUserProfile



Retrieve Slack user profile information and custom status.

**Parameters**

-   **target\_user\_id** (`string`, optional) The unique identifier of the Slack user whose profile information is to be retrieved.
-   **include\_labels** (`boolean`, optional) Include labels for each ID in custom profile fields. This option can heavily rate-limit requests and is not recommended. Default is false.

## SlackApi.SetSlackProfilePhoto



Set the user’s profile photo on Slack.

**Parameters**

-   **crop\_box\_size** (`string`, optional) The size of the square crop box for the profile photo in pixels. Specify the width and height, which are the same value for a square.
-   **crop\_box\_x\_coordinate** (`string`, optional) X coordinate of the top-left corner of the crop box for the profile photo.
-   **crop\_y\_coordinate** (`string`, optional) Y coordinate of the top-left corner of the crop box for the user’s profile photo on Slack. This determines where the cropping of the image will start on the vertical axis.
-   **profile\_photo\_image** (`string`, optional) The image file to set as the Slack profile photo. Provide image data directly with the correct content type (e.g., image/jpeg, image/png).

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_slack_api ``` Learn more](/guides/deployment-hosting.md)

Last updated on February 6, 2026

[Reference](/en/resources/integrations/social-communication/slack/reference.md)
[Reference](/en/resources/integrations/social-communication/teams/reference.md)
