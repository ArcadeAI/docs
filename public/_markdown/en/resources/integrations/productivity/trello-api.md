---
title: "TrelloApi"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Productivity & Docs](/en/resources/integrations/productivity/asana.md)
TrelloApi

# TrelloApi

Arcade Starter

**Description:** Tools that enable LLMs to interact directly with the trello API.

**Author:** Arcade

**Auth:** API Key

[![PyPI Version](https://img.shields.io/pypi/v/arcade_trello_api)](https://pypi.org/project/arcade_trello_api/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_trello_api)](https://pypi.org/project/arcade_trello_api/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_trello_api)](https://pypi.org/project/arcade_trello_api/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_trello_api)](https://pypi.org/project/arcade_trello_api/)

TrelloApi is a [Starter MCP Server](/guides/create-tools/improve/types-of-tools.md#starter-tools)
: each tool mirrors one HTTP endpoint and offers LLMs a way to interact with the low-level API.



Differently from [Optimized MCP Servers](/guides/create-tools/improve/types-of-tools.md#optimized-tools)
, Starter tools are heavily influenced by the original API design, which is not usually optimized for LLM usage. For this reason, we recommend thoroughly evaluating the tools with your Agents or chatbots before using it in production. [Read more](/guides/create-tools/improve/types-of-tools.md) about Optimized vs Starter tools.

The TrelloApi MCP Server offers a comprehensive suite of tools for interacting with Trello, enabling users and AI applications to efficiently manage boards, cards, lists, and members. With this server, you can:

## Available Tools

Tool Name

Description

TrelloApi.GetTrelloAction

Fetches details of a specific Trello action by ID.

TrelloApi.UpdateTrelloComment

Edit a comment action in Trello.

TrelloApi.DeleteTrelloAction

Delete a specific comment action from Trello.

TrelloApi.GetActionProperty

Retrieve a specific property of a Trello action.

TrelloApi.GetBoardForAction

Retrieve board details for a given action on Trello.

TrelloApi.GetTrelloCardForAction

Get details of a Trello card associated with an action.

TrelloApi.GetActionList

Retrieve the list associated with a Trello action.

TrelloApi.GetActionMember

Retrieve the member associated with a Trello action.

TrelloApi.GetActionCreatorMember

Retrieve the member who created a specific Trello action.

TrelloApi.GetActionOrganization

Retrieve the organization related to a Trello action.

TrelloApi.ModifyTrelloComment

Update the text of a Trello comment action.

TrelloApi.ListReactionsForAction

Retrieve reactions for a specific Trello action.

TrelloApi.AddReactionToTrelloAction

Add a reaction to a Trello action.

TrelloApi.GetReactionInfo

Get detailed information about a specific Trello reaction.

TrelloApi.DeleteTrelloReaction

Deletes a specific reaction on a Trello action.

TrelloApi.GetActionReactionsSummary

Get a summary of all reactions for a Trello action.

TrelloApi.GetApplicationComplianceData

Retrieve compliance data for a specified application.

TrelloApi.TrelloGetBatchRequests

Retrieve up to 10 resources with a single batched request.

TrelloApi.GetBoardMemberships

Retrieve user membership details for a Trello board.

TrelloApi.GetTrelloBoard

Retrieve details of a specific Trello board.

TrelloApi.UpdateTrelloBoard

Update details of an existing Trello board.

TrelloApi.DeleteBoard

Delete a specific board from Trello.

TrelloApi.GetTrelloBoardField

Retrieve a specific field from a Trello board.

TrelloApi.GetBoardStars

Retrieve star count for a Trello board.

TrelloApi.GetBoardChecklists

Retrieve all checklists from a specific Trello board.

TrelloApi.GetOpenCardsOnBoard

Retrieve all open cards on a Trello board.

TrelloApi.GetFilteredBoardCards

Retrieve cards on a Trello board based on a specified filter.

TrelloApi.GetBoardCustomFields

Retrieve Custom Field Definitions for a specific Trello board.

TrelloApi.CreateLabelOnBoard

Create a new label on a Trello board.

TrelloApi.GetTrelloBoardLists

Retrieve lists from a specified Trello board.

TrelloApi.CreateTrelloBoardList

Create a new list on a Trello board.

TrelloApi.GetFilteredBoardLists

Retrieve filtered lists from a Trello board.

TrelloApi.GetBoardMembers

Retrieve members of a Trello board.

TrelloApi.InviteMemberToTrelloBoard

Invite a member to a Trello board via email.

TrelloApi.AddMemberToBoard

Add a member to a Trello board.

TrelloApi.RemoveMemberFromTrelloBoard

Remove a member from a specified Trello board.

TrelloApi.UpdateBoardMembership

Update a specific board membership by ID.

TrelloApi.UpdateBoardEmailPosition

Update the email position preference on a Trello board.

TrelloApi.SetTrelloEmailListDefault

Change the default email-to-board list in Trello.

TrelloApi.UpdateSidebarPreference

Update the sidebar visibility preference for a Trello board.

TrelloApi.UpdateSidebarActivityPreference

Toggle the sidebar activity visibility for a Trello board.

TrelloApi.UpdateSidebarActionsPreference

Update sidebar board actions preference on a Trello board.

TrelloApi.UpdateSidebarMembersPref

Update the sidebar members visibility preference on a Trello board.

TrelloApi.CreateTrelloBoard

Create a new board on Trello.

TrelloApi.GenerateBoardCalendarKey

Generate a calendar key for a Trello board.

TrelloApi.GenerateBoardEmailKey

Generate a unique email key for a Trello board.

TrelloApi.CreateBoardTag

Create a new tag for a Trello board.

TrelloApi.MarkTrelloBoardAsViewed

Mark a Trello board as viewed to update status.

TrelloApi.GetBoardPowerUps

Retrieve the enabled Power-Ups on a Trello board.

TrelloApi.ListBoardPowerUps

Retrieve the Power-Ups enabled on a Trello board.

TrelloApi.GetTrelloCardById

Retrieve details of a Trello card using its ID.

TrelloApi.DeleteTrelloCard

Delete a card from Trello by ID.

TrelloApi.GetTrelloCardProperty

Retrieve a specific property of a Trello card.

TrelloApi.GetCardActions

Retrieve the actions performed on a specific Trello card.

TrelloApi.ListCardAttachments

Retrieve all attachments from a specified Trello card.

TrelloApi.AddAttachmentToTrelloCard

Attach a file or link to a Trello card.

TrelloApi.DeleteCardAttachment

Delete an attachment from a Trello card.

TrelloApi.GetBoardForCard

Retrieve the board details for a specific card.

TrelloApi.GetCardChecklistCompletionStatus

Retrieve completed checklist items from a Trello card.

TrelloApi.GetCardChecklists

Retrieve checklists for a specified Trello card.

TrelloApi.CreateChecklistOnCard

Create a new checklist on a Trello card.

TrelloApi.GetSpecificCheckitemOnCard

Retrieve details of a specific checkItem on a Trello card.

TrelloApi.UpdateChecklistItemTrello

Update an item in a Trello checklist on a card.

TrelloApi.DeleteChecklistItemOnCard

Delete a checklist item from a Trello card.

TrelloApi.GetCardList

Retrieve the list containing a specific card from Trello.

TrelloApi.GetCardMembers

Retrieve members associated with a Trello card.

TrelloApi.GetMembersWhoVotedOnCard

Retrieve members who voted on a Trello card.

TrelloApi.VoteOnTrelloCard

Vote on a Trello card for a specific member.

TrelloApi.GetTrelloCardPluginData

Retrieve shared plugin data from a Trello card.

TrelloApi.GetCardStickers

Get the stickers on a Trello card using its ID.

TrelloApi.AddStickerToTrelloCard

Add a sticker to a specific Trello card.

TrelloApi.GetTrelloCardSticker

Fetch details of a specific sticker on a Trello card.

TrelloApi.RemoveCardSticker

Removes a specified sticker from a Trello card.

TrelloApi.UpdateTrelloCardSticker

Update a sticker on a specified Trello card.

TrelloApi.UpdateCardComment

Update an existing comment on a Trello card.

TrelloApi.DeleteCommentOnCard

Deletes a comment from a Trello card action.

TrelloApi.UpdateTrelloCardCustomField

Update or remove a custom field value on a Trello card.

TrelloApi.UpdateTrelloCardCustomFields

Update custom fields on a Trello card.

TrelloApi.GetCardCustomFieldItems

Retrieve custom field items for a Trello card.

TrelloApi.AddCommentToTrelloCard

Add a comment to a specific Trello card.

TrelloApi.AddLabelToTrelloCard

Add a label to a Trello card.

TrelloApi.AddMemberToTrelloCard

Add a member to a specified Trello card.

TrelloApi.CreateTrelloCardLabel

Add a new label to a specific Trello card.

TrelloApi.MarkTrelloCardNotificationsRead

Mark Trello card notifications as read.

TrelloApi.RemoveLabelFromTrelloCard

Remove a specific label from a Trello card.

TrelloApi.RemoveMemberFromCard

Removes a member from a Trello card.

TrelloApi.RemoveMemberVote

Remove a member's vote from a Trello card.

TrelloApi.UpdateTrelloChecklistItem

Update an item in a Trello card checklist.

TrelloApi.DeleteTrelloCardChecklist

Delete a checklist from a Trello card.

TrelloApi.CreateTrelloChecklist

Create a new checklist in Trello.

TrelloApi.GetChecklistById

Retrieve a specific Trello checklist by ID.

TrelloApi.UpdateTrelloChecklist

Update an existing checklist on Trello.

TrelloApi.DeleteTrelloChecklist

Deletes a checklist from Trello using its ID.

TrelloApi.GetChecklistField

Retrieve a specific field from a Trello checklist.

TrelloApi.UpdateChecklistField

Updates a specific field of a checklist on Trello.

TrelloApi.GetBoardFromChecklist

Retrieve the board associated with a checklist on Trello.

TrelloApi.GetCardFromChecklist

Retrieve card details for a specified checklist.

TrelloApi.GetChecklistCheckitems

Retrieve checkitems from a Trello checklist.

TrelloApi.CreateCheckitemInChecklist

Create a new checkitem in a Trello checklist.

TrelloApi.GetChecklistItem

Retrieve a specific checkitem from a checklist on Trello.

TrelloApi.RemoveChecklistItem

Remove an item from a Trello checklist.

TrelloApi.CreateTrelloCustomField

Create a new custom field on a Trello board.

TrelloApi.GetCustomField

Retrieve details of a Trello custom field by ID.

TrelloApi.UpdateCustomFieldDefinition

Update a Custom Field definition in Trello.

TrelloApi.DeleteTrelloCustomField

Delete a custom field from a Trello board.

TrelloApi.AddDropdownOptionCustomField

Add an option to a dropdown Custom Field in Trello.

TrelloApi.GetCustomFieldOptions

Retrieve options of a Trello drop-down custom field.

TrelloApi.GetCustomFieldOptionTrello

Retrieve a specific dropdown option from Trello custom fields.

TrelloApi.DeleteCustomFieldOption

Delete an option from a Trello Custom Field dropdown.

TrelloApi.ListAvailableEmoji

Retrieve a list of available emojis on Trello.

TrelloApi.GetEnterpriseById

Retrieve details of a Trello enterprise by ID.

TrelloApi.GetEnterpriseAuditLog

Retrieve audit log actions for a specific enterprise.

TrelloApi.GetEnterpriseAdmins

Retrieve admin members of an enterprise by ID.

TrelloApi.GetEnterpriseSignupUrl

Retrieve the signup URL for a specified enterprise.

TrelloApi.GetEnterpriseUsers

Fetch users from a Trello enterprise.

TrelloApi.GetEnterpriseMembers

Retrieve members of a specific enterprise from Trello.

TrelloApi.GetEnterpriseMember

Retrieve a specific member of an enterprise by ID.

TrelloApi.CheckOrganizationTransferability

Check if an organization can be transferred to an enterprise.

TrelloApi.GetClaimableWorkspaces

Retrieve claimable workspaces for an enterprise by ID.

TrelloApi.GetPendingWorkspacesByEnterpriseId

Retrieve pending workspaces for an enterprise by ID.

TrelloApi.CreateEnterpriseAuthToken

Create an auth token for a Trello enterprise.

TrelloApi.GetEnterpriseOrganizations

Retrieve organizations associated with a specific enterprise.

TrelloApi.TransferOrganizationToEnterprise

Transfer an organization to an enterprise.

TrelloApi.UpdateEnterpriseMemberLicense

Update an enterprise member's license status in Trello.

TrelloApi.DeactivateEnterpriseMember

Deactivate a member in a Trello enterprise.

TrelloApi.MakeMemberAdminEnterprise

Promote a member to admin in a Trello enterprise.

TrelloApi.RemoveEnterpriseAdmin

Remove a member as admin from an enterprise.

TrelloApi.RemoveOrganizationFromEnterprise

Remove an organization from a Trello enterprise.

TrelloApi.GetTrelloLabelInfo

Retrieve information about a specific Trello label.

TrelloApi.UpdateTrelloLabel

Update Trello label details using its ID.

TrelloApi.DeleteLabelById

Delete a label in Trello by its ID.

TrelloApi.UpdateTrelloLabelField

Update a specific field on a Trello label.

TrelloApi.CreateNewLabelOnBoard

Create a new label on a Trello board.

TrelloApi.GetTrelloListInfo

Retrieve details for a specific Trello list using its ID.

TrelloApi.UpdateTrelloList

Update the properties of a Trello list.

TrelloApi.CreateTrelloList

Create a new list on a Trello board.

TrelloApi.ArchiveAllCardsInList

Archives all cards in a specified Trello list.

TrelloApi.TrelloMoveAllCardsInList

Move all cards from one list to another in Trello.

TrelloApi.ArchiveOrUnarchiveTrelloList

Archive or unarchive a Trello list.

TrelloApi.MoveTrelloListToBoard

Reorganize Trello by moving a list to another board.

TrelloApi.RenameTrelloList

Renames a Trello list by its ID.

TrelloApi.GetTrelloListActions

Retrieve actions performed on a specific Trello list.

TrelloApi.GetBoardOfList

Retrieve the board associated with a specific list on Trello.

TrelloApi.ListTrelloCardsInList

Fetches all cards from a specified Trello list.

TrelloApi.GetTrelloMemberInfo

Fetch information about a Trello member profile.

TrelloApi.UpdateTrelloMember

Update Trello member details.

TrelloApi.GetMemberProperty

Retrieve a specific property of a Trello member.

TrelloApi.ListMemberActions

Retrieve a list of actions for a specified member.

TrelloApi.GetMemberBoardBackgrounds

Retrieve custom board backgrounds for a Trello member.

TrelloApi.UploadTrelloBoardBackground

Upload a new board background on Trello.

TrelloApi.GetMemberBoardBackground

Retrieve a board background for a specific member.

TrelloApi.UpdateBoardBackground

Update the background of a Trello board.

TrelloApi.DeleteBoardBackground

Delete a board background from a member's Trello board.

TrelloApi.ListMemberBoardStars

Retrieve a member's board stars on Trello.

TrelloApi.StarTrelloBoardForMember

Star a Trello board on behalf of a specified member.

TrelloApi.GetSpecificBoardStar

Retrieve details of a specific board star.

TrelloApi.UpdateStarredBoardPosition

Update the position of a starred board in Trello.

TrelloApi.UnstarBoard

Unstar a Trello board for a specific member.

TrelloApi.ListUserBoards

Retrieve boards a user is a member of on Trello.

TrelloApi.GetMemberInvitedBoards

Retrieve boards a member is invited to on Trello.

TrelloApi.GetMemberCards

Retrieve cards associated with a specific member on Trello.

TrelloApi.GetCustomBoardBackgrounds

Retrieve a member's custom board backgrounds on Trello.

TrelloApi.UploadCustomBoardBackground

Upload a new custom board background to Trello.

TrelloApi.GetCustomBoardBackground

Get a specific custom board background from Trello.

TrelloApi.UpdateCustomBoardBackground

Update a specific custom board background in Trello.

TrelloApi.RemoveCustomBoardBackground

Delete a specific custom board background.

TrelloApi.GetMemberCustomEmojis

Retrieve a Trello member's uploaded custom emojis.

TrelloApi.CreateCustomEmojiTrello

Create a new custom emoji in Trello.

TrelloApi.GetMemberCustomEmoji

Retrieve a custom emoji for a Trello member.

TrelloApi.GetMemberUploadedStickers

Retrieve a Trello member's uploaded stickers.

TrelloApi.UploadCustomStickerToTrello

Upload a new custom sticker to a Trello member's account.

TrelloApi.GetMemberCustomSticker

Retrieve a member's custom sticker from Trello.

TrelloApi.DeleteCustomSticker

Deletes a custom sticker from a Trello member's account.

TrelloApi.GetMemberNotifications

Retrieve a Trello member's notifications.

TrelloApi.GetMemberWorkspaces

Retrieve a member's workspaces from Trello.

TrelloApi.GetInvitedWorkspaces

Retrieve a member's invited Workspaces.

TrelloApi.ListMemberSavedSearches

Retrieve a Trello member's saved searches.

TrelloApi.CreateSavedSearch

Create a saved search for a Trello member.

TrelloApi.GetSavedSearch

Retrieve the details of a saved search from Trello.

TrelloApi.UpdateSavedSearch

Update the details of a saved search in Trello.

TrelloApi.DeleteSavedSearchOnTrello

Remove a saved search from a Trello member account.

TrelloApi.GetMemberAppTokens

Retrieve a Trello member's app tokens list.

TrelloApi.CreateMemberAvatar

Create a new avatar for a Trello member.

TrelloApi.DismissTrelloMessage

Dismiss a specific message in Trello for a member.

TrelloApi.GetMemberNotificationSettings

Retrieve a Trello member's notification settings.

TrelloApi.UpdateMemberNotificationBlockedKeys

Update a member's blocked notification keys on Trello.

TrelloApi.GetTrelloMemberNotificationSettings

Retrieve blocked notification keys for a Trello member's channel.

TrelloApi.UpdateTrelloMemberNotificationSettings

Update blocked notification keys for a Trello member's channel.

TrelloApi.ModifyMemberNotificationsTrello

Update a member's blocked notification keys on Trello.

TrelloApi.GetTrelloNotification

Retrieve detailed Trello notification information by ID.

TrelloApi.UpdateNotificationReadStatus

Update the read status of a Trello notification.

TrelloApi.GetTrelloNotificationProperty

Retrieve a specific property of a Trello notification.

TrelloApi.MarkAllNotificationsRead

Marks all Trello notifications as read.

TrelloApi.MarkNotificationAsUnread

Mark a Trello notification as unread.

TrelloApi.GetBoardFromNotification

Retrieve the board linked to a specific notification.

TrelloApi.GetNotificationCard

Retrieve the card linked to a specific notification.

TrelloApi.GetTrelloNotificationList

Retrieve the list a Trello notification is associated with.

TrelloApi.GetNotificationMemberDetails

Retrieve information about the member involved in a notification.

TrelloApi.GetNotificationCreator

Retrieve the creator of a Trello notification.

TrelloApi.GetAssociatedOrganizationNotifications

Retrieve the organization associated with a notification.

TrelloApi.CreateWorkspaceTrello

Create a new Trello Workspace.

TrelloApi.GetOrganizationDetails

Retrieve details about a Trello organization.

TrelloApi.UpdateOrganizationTrello

Updates an organization's details in Trello.

TrelloApi.DeleteTrelloOrganization

Delete an organization in Trello using its ID.

TrelloApi.GetOrganizationField

Retrieve a specific field from a Trello organization.

TrelloApi.ListWorkspaceActions

Retrieve actions related to a specific Trello Workspace.

TrelloApi.ListWorkspaceBoards

Retrieve boards in a specified Trello Workspace.

TrelloApi.StartOrganizationCsvExport

Initiate CSV export for a Trello organization.

TrelloApi.RetrieveOrganizationExports

Retrieve exports for a Trello organization.

TrelloApi.ListWorkspaceMembers

Retrieve members of a Trello Workspace by ID.

TrelloApi.UpdateOrganizationMembers

Update members of a Trello organization.

TrelloApi.ListWorkspaceMemberships

Retrieve memberships of a Trello Workspace.

TrelloApi.GetOrganizationMembership

Retrieve a specific membership for an organization.

TrelloApi.GetWorkspacePluginData

Retrieve organization scoped plugin data for a Trello workspace.

TrelloApi.ListOrganizationCollections

List collections or tags for a specified organization on Trello.

TrelloApi.CreateOrganizationTag

Create a new tag within a specific Trello organization.

TrelloApi.AddOrUpdateWorkspaceMember

Add or update a member in a Trello Workspace.

TrelloApi.RemoveMemberFromWorkspace

Remove a member from a Trello Workspace.

TrelloApi.UpdateWorkspaceMemberStatus

Deactivate or reactivate a member of a workspace.

TrelloApi.SetWorkplaceLogo

Set the logo image for a Workspace.

TrelloApi.DeleteWorkspaceLogo

Remove the logo from a Trello Workspace.

TrelloApi.DeleteMemberFromWorkspace

Remove a member from a Workspace and all Workspace boards.

TrelloApi.RemoveWorkspaceDomain

Remove the associated Google Apps domain from a Workspace.

TrelloApi.RemoveEmailDomainRestriction

Remove email domain restriction for Workspace invites.

TrelloApi.DeleteOrganizationTag

Delete a specified tag from an organization.

TrelloApi.CheckBoardBillableGuests

Check if a board has new billable guests.

TrelloApi.GetTrelloPluginInfo

Retrieve information about a specific Trello plugin.

TrelloApi.UpdateTrelloPlugin

Update a specific plugin on Trello.

TrelloApi.CreateTrelloPluginListing

Create a new listing for a Trello Power-Up.

TrelloApi.GetPluginMemberPrivacyCompliance

Retrieve a plugin's member privacy compliance status.

TrelloApi.UpdatePowerUpListing

Update an existing listing for a Trello Power-Up.

TrelloApi.TrelloSearch

Search for information within Trello.

TrelloApi.SearchTrelloMembers

Search and retrieve Trello member information.

TrelloApi.RetrieveTrelloTokenInfo

Retrieve information about a Trello token.

TrelloApi.GetTrelloTokenOwner

Retrieve information about a Trello token's owner.

TrelloApi.RetrieveTokenWebhooks

Retrieve all webhooks created with a specific token.

TrelloApi.CreateTrelloWebhook

Create a new webhook for a Trello token.

TrelloApi.RetrieveTrelloWebhook

Retrieve details of a specific Trello webhook.

TrelloApi.DeleteTrelloWebhook

Delete a specific Trello webhook.

TrelloApi.UpdateTrelloWebhook

Update a Trello webhook using a specific token.

TrelloApi.DeleteTrelloToken

Deletes a Trello token to revoke access.

TrelloApi.AddTrelloWebhook

Create a new webhook on Trello.

TrelloApi.GetTrelloWebhookById

Retrieve details of a Trello webhook by its ID.

TrelloApi.ModifyTrelloWebhook

Updates a Trello webhook by its ID.

TrelloApi.RemoveTrelloWebhook

Delete a Trello webhook by ID.

TrelloApi.GetWebhookField

Retrieve a specific field from a Trello webhook.

If you need to perform an action that’s not listed here, you can [get in touch with us](mailto:contact@arcade.dev) to request a new tool, or [create your own tools](/guides/create-tools/tool-basics/build-mcp-server.md).

## TrelloApi.GetTrelloAction



Fetches details of a specific Trello action by ID.

**Parameters**

-   **action\_id** (`string`, required) The unique ID of the Trello action to be fetched. Required for retrieving specific action details.
-   **action\_fields** (`string`, optional) Specify ‘all’ or a comma-separated list of action fields you want to retrieve. Use ‘all’ for full details.
-   **include\_display\_info** (`boolean`, optional) Include display information in the response if true.
-   **include\_entities** (`boolean`, optional) Set to True to include related entities in the response, or False to exclude them.
-   **include\_member** (`boolean`, optional) Include the member object in the response for the action. Set to true to include.
-   **include\_member\_creator** (`boolean`, optional) Set to true to include the member object for the creator of the action.
-   **member\_creator\_fields** (`string`, optional) Specify `all` or a comma-separated list of member fields to include for the action creator.
-   **member\_information\_fields** (`string`, optional) Specify ‘all’ or a comma-separated list of member fields to include in the response.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.UpdateTrelloComment



Edit a comment action in Trello.

**Parameters**

-   **action\_id** (`string`, required) The unique identifier for the specific action comment you want to update.
-   **new\_comment\_text** (`string`, required) The updated text content for the Trello comment action.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.DeleteTrelloAction



Delete a specific comment action from Trello.

**Parameters**

-   **action\_id** (`string`, required) The ID of the comment action to be deleted. Only comment actions are valid for deletion.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetActionProperty



Retrieve a specific property of a Trello action.

**Parameters**

-   **action\_field** (`string`, required) The specific field to retrieve from a Trello action, such as ‘id’, ‘type’, or ‘date’.
-   **action\_id** (`string`, required) The unique identifier of the action to retrieve its specific property.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetBoardForAction



Retrieve board details for a given action on Trello.

**Parameters**

-   **action\_id** (`string`, required) The ID of the action to retrieve the associated board details.
-   **board\_fields** (`string`, optional) Specify ‘all’ or a comma-separated list of board fields like ‘id, name, desc’.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetTrelloCardForAction



Get details of a Trello card associated with an action.

**Parameters**

-   **action\_id** (`string`, required) The unique identifier of the action linked to the Trello card.
-   **card\_fields** (`string`, optional) Specify ‘all’ to retrieve all fields or provide a comma-separated list of specific card fields like ‘id,name,shortUrl’.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetActionList



Retrieve the list associated with a Trello action.

**Parameters**

-   **action\_id** (`string`, required) The unique identifier of the Trello action to retrieve its associated list.
-   **list\_fields** (`string`, optional) Specify ‘all’ or a comma-separated list of fields to retrieve for the list. Acceptable values include specific fields like ‘id’.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetActionMember



Retrieve the member associated with a Trello action.

**Parameters**

-   **action\_id** (`string`, required) The unique ID of the Trello action to retrieve the associated member’s details.
-   **member\_fields** (`string`, optional) Specify `all` to retrieve all member fields or provide a comma-separated list of specific fields.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetActionCreatorMember



Retrieve the member who created a specific Trello action.

**Parameters**

-   **action\_id** (`string`, required) The unique identifier of the Trello action to retrieve the creator information for.
-   **member\_fields** (`string`, optional) Specify ‘all’ or a comma-separated list of member fields to retrieve.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetActionOrganization



Retrieve the organization related to a Trello action.

**Parameters**

-   **action\_id** (`string`, required) The unique ID of the Trello action to retrieve the associated organization details.
-   **organization\_fields** (`string`, optional) Specify ‘all’ or a comma-separated list of fields (e.g., ‘id’, ‘name’) to determine which organization details to retrieve.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.ModifyTrelloComment



Update the text of a Trello comment action.

**Parameters**

-   **action\_id\_to\_update** (`string`, required) The ID of the Trello comment action to update.
-   **new\_comment\_text** (`string`, required) Provide the new text for the Trello comment you wish to update.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.ListReactionsForAction



Retrieve reactions for a specific Trello action.

**Parameters**

-   **action\_id** (`string`, required) The unique ID of the action for which you want to list reactions.
-   **include\_member\_as\_nested\_resource** (`boolean`, optional) Specify true to include the member as a nested resource in the response. Useful for detailed member information.
-   **load\_emoji\_as\_nested\_resource** (`boolean`, optional) Set to true to load the emoji as a nested resource.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.AddReactionToTrelloAction



Add a reaction to a Trello action.

**Parameters**

-   **action\_id** (`string`, required) The ID of the Trello action to which you want to add a reaction.
-   **emoji\_short\_name** (`string`, optional) The short name of the emoji to add as a reaction, like ‘thumbsup’ or ‘smile’.
-   **emoji\_skin\_variation** (`string`, optional) Specifies the `skinVariation` for the emoji being added as a reaction, like default or medium-light.
-   **emoji\_unified\_value** (`string`, optional) The `unified` value of the emoji to add to the Trello action. This is a code representing the emoji and is used to specify the exact emoji to add.
-   **native\_emoji\_unicode** (`string`, optional) The native unicode emoji to add as a reaction. It should be a valid emoji character.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetReactionInfo



Get detailed information about a specific Trello reaction.

**Parameters**

-   **action\_id** (`string`, required) The ID of the Trello Action to retrieve reaction information for.
-   **reaction\_id** (`string`, required) The unique identifier for the specific reaction to retrieve details.
-   **include\_emoji\_as\_nested\_resource** (`boolean`, optional) Set to true to load emoji as a nested resource.
-   **include\_member\_as\_nested\_resource** (`boolean`, optional) Include the member as a nested resource in the reaction details. Refer to the Members Nested Resource guide.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.DeleteTrelloReaction



Deletes a specific reaction on a Trello action.

**Parameters**

-   **action\_id** (`string`, required) The ID of the Trello action from which the reaction will be deleted.
-   **reaction\_id** (`string`, required) The unique identifier of the reaction to be deleted from a Trello action.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetActionReactionsSummary



Get a summary of all reactions for a Trello action.

**Parameters**

-   **action\_id** (`string`, required) The unique identifier for the specific Trello action to retrieve reactions for.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetApplicationComplianceData



Retrieve compliance data for a specified application.

**Parameters**

-   **application\_key** (`string`, required) The unique key for the application to retrieve its compliance data. This is required to access the specific compliance details.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.TrelloGetBatchRequests



Retrieve up to 10 resources with a single batched request.

**Parameters**

-   **urls\_list\_for\_batching** (`string`, required) A list of up to 10 API routes, each beginning with a forward slash. Exclude the API version number. Example: ‘/members/trello’, ‘/cards/\[cardId\]’.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetBoardMemberships



Retrieve user membership details for a Trello board.

**Parameters**

-   **board\_id** (`string`, required) The unique identifier for the Trello board to retrieve membership details.
-   **include\_activity** (`boolean`, optional) Set to true to include activity data for premium organizations only.
-   **include\_member\_object** (`boolean`, optional) Set to true to include a nested member object in the response.
-   **member\_fields\_to\_show** (`string`, optional) Specify which fields to display if ‘member’ is set to true. Valid values are fields from the nested member resource.
-   **membership\_filter** (`string`, optional) Specifies the type of memberships to retrieve: `admins`, `all`, `none`, or `normal`.
-   **show\_org\_member\_type** (`boolean`, optional) Set to true to show the type of member (e.g., ‘admin’) a user is to the organization.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetTrelloBoard



Retrieve details of a specific Trello board.

**Parameters**

-   **board\_id** (`string`, required) The unique identifier of the Trello board to retrieve details for. Required to specify which board to access.
-   **board\_fields\_to\_include** (`string`, optional) Specify which board fields to include in the response. Use ‘all’ or a comma-separated list of field names like closed, dateLastActivity, etc.
-   **include\_actions** (`string`, optional) Include actions as a nested resource in the response. Refer to Trello’s nested resources guide for more information.
-   **include\_board\_stars** (`string`, optional) Specify whether to include starred boards information. Options are ‘mine’ or ‘none’.
-   **include\_card\_plugin\_data** (`boolean`, optional) Boolean to include card plugin data in the response when used with the `cards` parameter.
-   **include\_cards\_resource** (`string`, optional) Include card details as part of the response. Cards are nested resources; read more about them in the Trello API documentation.
-   **include\_checklists** (`string`, optional) Set to true to include checklists as a nested resource in the response.
-   **include\_custom\_fields** (`boolean`, optional) Set to true to include custom fields in the board response.
-   **include\_labels** (`string`, optional) Specify if the labels nested resource should be included in the board response. Use ‘true’ or ‘false’.
-   **include\_lists** (`string`, optional) Include the lists associated with the board in the response. This is a nested resource.
-   **include\_members\_as\_nested\_resource** (`string`, optional) Include member details as a nested resource in the response. Set to ‘true’ to include, ‘false’ to exclude.
-   **include\_memberships** (`string`, optional) Include memberships data as a nested resource in the response.
-   **include\_my\_preferences** (`boolean`, optional) Set to true to include the user’s preferences for the board in the response.
-   **include\_organization** (`boolean`, optional) Include organization details for the board. Set to true to include.
-   **include\_organization\_plugin\_data** (`boolean`, optional) Set to true to include organization pluginData with the response when using the organization parameter. Expects a boolean value.
-   **include\_plugin\_data** (`boolean`, optional) Set to true to include pluginData for the board in the response, or false to exclude it.
-   **include\_tags** (`boolean`, optional) Set to true to include the collection(s) (tags) that a board belongs to in the response.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.UpdateTrelloBoard



Update details of an existing Trello board.

**Parameters**

-   **board\_id** (`string`, required) The unique identifier for the Trello board to be updated.
-   **allow\_workspace\_members\_to\_join** (`boolean`, optional) Allows Workspace members to join the board themselves. True to allow, false to disallow.
-   **background\_preference** (`string`, optional) Specify the background for the board. Use a custom background ID or choose from: blue, orange, green, red, purple, pink, lime, sky, grey.
-   **board\_description** (`string`, optional) A new description for the board, 0 to 16384 characters long.
-   **calendar\_feed\_enabled** (`boolean`, optional) Set to true to enable the calendar feed; false to disable it.
-   **card\_aging\_preference** (`string`, optional) Set card aging style on the board. Options: pirate, regular.
-   **close\_board** (`boolean`, optional) Sets whether the board should be closed. Use true to close the board and false to keep it open.
-   **comment\_permission** (`string`, optional) Specify who can comment on cards. Options: disabled, members, observers, org, public.
-   **display\_card\_covers** (`boolean`, optional) Set to true to display card covers on the board, false to hide them.
-   **hide\_voter\_identities** (`boolean`, optional) If true, the Voting Power-Up hides who voted on cards.
-   **new\_board\_name** (`string`, optional) The new name for the board. Must be 1 to 16384 characters long.
-   **permission\_level** (`string`, optional) Set the board’s permission level: org, private, or public.
-   **user\_subscribed\_to\_board** (`string`, optional) Indicate if the acting user is subscribed to the board. Use ‘true’ or ‘false’.
-   **voting\_permissions** (`string`, optional) Specify who can vote on this board. Options: disabled, members, observers, org, public.
-   **who\_can\_invite** (`string`, optional) Specifies who can invite people to the board. Accepts ‘admins’ or ‘members’.
-   **workspace\_id\_for\_board** (`string`, optional) The unique ID of the Workspace to which the board should be moved.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.DeleteBoard



Delete a specific board from Trello.

**Parameters**

-   **board\_id\_to\_delete** (`string`, required) The ID of the Trello board to delete. Ensure it is the correct board as this action is irreversible.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetTrelloBoardField



Retrieve a specific field from a Trello board.

**Parameters**

-   **board\_field** (`string`, required) Specify the field of the Trello board to retrieve. Valid values: closed, dateLastActivity, dateLastView, desc, descData, idMemberCreator, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed, url.
-   **board\_id** (`string`, required) The unique identifier of the Trello board to fetch the field from.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetBoardStars



Retrieve star count for a Trello board.

**Parameters**

-   **board\_id** (`string`, required) The unique identifier of the Trello board for which to retrieve star count.
-   **board\_star\_filter** (`string`, optional) Specify whose stars to include: ‘mine’ for personal stars, ‘none’ for no filtering.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetBoardChecklists



Retrieve all checklists from a specific Trello board.

**Parameters**

-   **board\_id** (`string`, required) The unique identifier of the Trello board from which to retrieve checklists.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetOpenCardsOnBoard



Retrieve all open cards on a Trello board.

**Parameters**

-   **board\_id** (`string`, required) The unique identifier of the Trello board to retrieve open cards from.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetFilteredBoardCards



Retrieve cards on a Trello board based on a specified filter.

**Parameters**

-   **board\_id** (`string`, required) The unique identifier for the Trello board from which to retrieve cards.
-   **card\_filter** (`string`, required) Specify the filter for retrieving cards: `all`, `closed`, `complete`, `incomplete`, `none`, `open`, `visible`.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetBoardCustomFields



Retrieve Custom Field Definitions for a specific Trello board.

**Parameters**

-   **board\_id** (`string`, required) The unique ID of the Trello board for which custom fields are to be retrieved.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.CreateLabelOnBoard



Create a new label on a Trello board.

**Parameters**

-   **board\_id** (`string`, required) The unique identifier of the Trello board where the new label will be created.
-   **label\_color** (`string`, required) Sets the color of the new label. Accepted values include specific colors or `null` for no color.
-   **label\_name** (`string`, required) The name of the label to be created. It must be between 1 and 16,384 characters long.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetTrelloBoardLists



Retrieve lists from a specified Trello board.

**Parameters**

-   **board\_id** (`string`, required) The unique identifier of the Trello board to retrieve lists from.
-   **card\_filter** (`string`, optional) Specify how to filter cards within the lists. Options: ‘all’, ‘closed’, ‘none’, ‘open’.
-   **card\_properties\_to\_include** (`string`, optional) Specify `all` or a comma-separated list of card fields to include, such as name, id, etc.
-   **list\_fields** (`string`, optional) Specify ‘all’ or a comma-separated list of list fields to include in the response.
-   **list\_filter** (`string`, optional) Apply a filter to the lists. Options are ‘all’, ‘closed’, ‘none’, or ‘open’.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.CreateTrelloBoardList



Create a new list on a Trello board.

**Parameters**

-   **board\_id** (`string`, required) The unique identifier of the Trello board where the list will be created. Required for specifying which board to add the list to.
-   **list\_name** (`string`, required) The name of the list to be created. It should be between 1 to 16384 characters in length.
-   **list\_position** (`string`, optional) Specifies where the list should be positioned. Use ‘top’, ‘bottom’, or a positive number for custom placement.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetFilteredBoardLists



Retrieve filtered lists from a Trello board.

**Parameters**

-   **board\_id** (`string`, required) The unique identifier of the Trello board to retrieve lists for.
-   **list\_filter** (`string`, required) Specifies the filter to apply on board lists. Options are `all`, `closed`, `none`, or `open`.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetBoardMembers



Retrieve members of a Trello board.

**Parameters**

-   **board\_id** (`string`, required) The unique identifier of the Trello board whose members are to be retrieved.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.InviteMemberToTrelloBoard



Invite a member to a Trello board via email.

**Parameters**

-   **board\_id** (`string`, required) The unique identifier for the Trello board to which the member will be invited.
-   **member\_email\_address** (`string`, required) The email address of the user to be added as a member to the Trello board.
-   **member\_access\_type** (`string`, optional) Specifies the role of the new board member. Valid values are: admin, normal, or observer.
-   **user\_full\_name** (`string`, optional) The full name of the user being invited. Must be at least 1 character and not begin or end with a space.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.AddMemberToBoard



Add a member to a Trello board.

**Parameters**

-   **board\_id** (`string`, required) The ID of the board to update. Required to specify which Trello board the member will be added to.
-   **member\_id\_to\_add** (`string`, required) The ID of the member to add to the Trello board.
-   **member\_role\_type** (`string`, required) Specifies the role of the member on the board. Choose from ‘admin’, ‘normal’, or ‘observer’.
-   **allow\_billable\_guest** (`boolean`, optional) Set to true to allow organization admins to add multi-board guests to the board.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.RemoveMemberFromTrelloBoard



Remove a member from a specified Trello board.

**Parameters**

-   **board\_id** (`string`, required) The ID of the Trello board from which to remove a member.
-   **member\_id\_to\_remove** (`string`, required) The ID of the member to remove from the Trello board.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.UpdateBoardMembership



Update a specific board membership by ID.

**Parameters**

-   **board\_id** (`string`, required) The ID of the Trello board you want to update the membership for.
-   **membership\_id** (`string`, required) The ID of a membership to be updated on the board.
-   **membership\_type** (`string`, required) Specifies the role of the member on the board. Choose one of: admin, normal, observer.
-   **member\_fields\_to\_update** (`string`, optional) Specify the member fields to update, such as avatarHash, bio, fullName, or all. Valid values include: all, avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url, username.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.UpdateBoardEmailPosition



Update the email position preference on a Trello board.

**Parameters**

-   **board\_id** (`string`, required) The unique identifier of the Trello board to update the email position preference for.
-   **email\_position** (`string`, required) Position of the email address on a board. Valid values: bottom, top.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.SetTrelloEmailListDefault



Change the default email-to-board list in Trello.

**Parameters**

-   **board\_id\_to\_update** (`string`, required) The ID of the Trello board that you want to update the default email-to-board list for. This is required to specify which board’s preferences are being changed.
-   **email\_list\_id** (`string`, required) The ID of the email list to set as default for email-to-board cards.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.UpdateSidebarPreference



Update the sidebar visibility preference for a Trello board.

**Parameters**

-   **board\_id** (`string`, required) The ID of the Trello board whose sidebar preference is to be updated.
-   **show\_sidebar** (`boolean`, required) Set to true to show the sidebar on the board, false to hide it.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.UpdateSidebarActivityPreference



Toggle the sidebar activity visibility for a Trello board.

**Parameters**

-   **board\_id** (`string`, required) The unique identifier of the Trello board to update the sidebar activity preference.
-   **show\_sidebar\_activity** (`boolean`, required) Boolean to determine if sidebar activity should be shown. True to show, False to hide.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.UpdateSidebarActionsPreference



Update sidebar board actions preference on a Trello board.

**Parameters**

-   **board\_id** (`string`, required) The unique identifier of the Trello board to update the sidebar actions preference.
-   **show\_sidebar\_board\_actions** (`boolean`, required) Set to true to show sidebar board actions, or false to hide them on a Trello board.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.UpdateSidebarMembersPref



Update the sidebar members visibility preference on a Trello board.

**Parameters**

-   **board\_id** (`string`, required) The unique identifier of the Trello board to update the sidebar members preference.
-   **show\_sidebar\_members** (`boolean`, required) Set to ‘true’ to show members of the board in the sidebar, ‘false’ to hide.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.CreateTrelloBoard



Create a new board on Trello.

**Parameters**

-   **board\_name** (`string`, required) The new name for the Trello board. Must be between 1 to 16384 characters.
-   **add\_default\_lists** (`boolean`, optional) Add the default lists (To Do, Doing, Done) to a new board. Ignored if `idBoardSource` is provided.
-   **allow\_self\_join** (`boolean`, optional) Set to `true` to allow users to join the board themselves. Set to `false` if they need an invitation.
-   **board\_background\_color** (`string`, optional) Specify the custom background ID or choose from predefined colors: blue, orange, green, red, purple, pink, lime, sky, grey.
-   **board\_description** (`string`, optional) A description for the new board, ranging from 0 to 16384 characters in length.
-   **board\_permission\_level** (`string`, optional) Set the permission level of the board. Options are: `org`, `private`, `public`.
-   **card\_aging\_type** (`string`, optional) Type of card aging on the board: `pirate` or `regular`. Determines visual changes over time when enabled.
-   **comment\_permission** (`string`, optional) Specify who can comment on cards: `disabled`, `members`, `observers`, `org`, `public`.
-   **enable\_card\_covers** (`boolean`, optional) Boolean to determine whether card covers are enabled on the board.
-   **enabled\_power\_ups** (`string`, optional) Specify the Power-Ups to enable on the board. Options: all, calendar, cardAging, recap, voting.
-   **include\_original\_cards** (`string`, optional) Specify ‘cards’ to keep cards from the original board when copying; otherwise, omit for none.
-   **invitation\_permissions** (`string`, optional) Specifies who can invite users to join the board. Choose either `admins` or `members`.
-   **source\_board\_id** (`string`, optional) The ID of the board to copy for creating a new board.
-   **use\_default\_labels** (`boolean`, optional) Set to true to use the default set of labels on the new board; false to exclude them.
-   **voting\_permissions** (`string`, optional) Specifies who can vote on the board: `disabled`, `members`, `observers`, `org`, or `public`.
-   **workspace\_id\_or\_name** (`string`, optional) The ID or name of the Trello Workspace where the board will be created.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GenerateBoardCalendarKey



Generate a calendar key for a Trello board.

**Parameters**

-   **board\_id** (`string`, required) The unique identifier of the Trello board for which the calendar key is to be generated.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GenerateBoardEmailKey



Generate a unique email key for a Trello board.

**Parameters**

-   **board\_id** (`string`, required) The unique identifier of the Trello board for which to generate an email key.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.CreateBoardTag



Create a new tag for a Trello board.

**Parameters**

-   **board\_id** (`string`, required) The ID of the Trello board where the tag will be created.
-   **organization\_tag\_id** (`string`, required) The ID of the tag from the organization to associate with the board.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.MarkTrelloBoardAsViewed



Mark a Trello board as viewed to update status.

**Parameters**

-   **board\_id** (`string`, required) The unique identifier of the Trello board to mark as viewed.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetBoardPowerUps



Retrieve the enabled Power-Ups on a Trello board.

**Parameters**

-   **board\_id** (`string`, required) The unique ID of the Trello board from which to retrieve enabled Power-Ups.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.ListBoardPowerUps



Retrieve the Power-Ups enabled on a Trello board.

**Parameters**

-   **board\_id** (`string`, required) The unique identifier of the Trello board for which to list Power-Ups.
-   **power\_up\_filter** (`string`, optional) Specify the filter for Power-Ups: choose ‘enabled’ to list only those currently active on the board, or ‘available’ to list those that can be activated.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetTrelloCardById



Retrieve details of a Trello card using its ID.

**Parameters**

-   **card\_id** (`string`, required) The unique identifier for the Trello card to retrieve.
-   **attachment\_fields\_list** (`string`, optional) Specify ‘all’ or a comma-separated list of attachment fields to retrieve for the card.
-   **board\_fields\_selection** (`string`, optional) Specify ‘all’ or select specific board fields to include. Defaults to ‘name, desc, descData, closed, idOrganization, pinned, url, prefs’.
-   **card\_fields** (`string`, optional) Specify ‘all’ or a comma-separated list of fields to retrieve for the card. Defaults to all main fields such as badges, desc, due, etc.
-   **checklist\_fields\_detail** (`string`, optional) Specify `all` or a comma-separated list of fields (`idBoard`, `idCard`, `name`, `pos`) to include for checklists.
-   **include\_actions\_details** (`string`, optional) Specify if actions details should be included. Refer to [Actions Nested Resource](https://cloud/trello/guides/rest-api/nested-resources/#actions-nested-resource)
      for more information.
-   **include\_attachments** (`string`, optional) Specify if attachments should be returned. Use ‘true’ for all attachments, ‘false’ for none, or ‘cover’ for cover attachments only.
-   **include\_check\_item\_states** (`boolean`, optional) Set to `true` to include check item states of the card; `false` to exclude them.
-   **include\_checklists** (`string`, optional) Specifies whether to return checklists on the card. Use ‘all’ or ‘none’.
-   **include\_custom\_field\_items** (`boolean`, optional) Set to `true` to include custom field items in the response; `false` to exclude them.
-   **include\_list\_resource** (`boolean`, optional) A boolean to include list resource information related to the card. Set to true to include this information.
-   **include\_members** (`boolean`, optional) Whether to return member objects for members on the card. Set to true to include them.
-   **include\_members\_voted** (`boolean`, optional) Set to true to return member objects for members who voted on the card.
-   **include\_plugin\_data** (`boolean`, optional) Specify whether to include plugin data in the card details response.
-   **include\_stickers** (`boolean`, optional) Set to true to include sticker models in the response; false to exclude.
-   **member\_fields** (`string`, optional) Specify `all` or a comma-separated list of member fields like avatarHash, fullName, initials, username.
-   **member\_voted\_fields** (`string`, optional) Specify `all` or a comma-separated list of fields for members who voted on the card. Defaults to `avatarHash, fullName, initials, username`.
-   **return\_board\_object** (`boolean`, optional) Set to true to return the board object the card is on. Use false to exclude it.
-   **sticker\_fields\_selection** (`string`, optional) Specify `all` or a comma-separated list of sticker fields to retrieve for a Trello card. This determines which sticker-related data is included in the response.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.DeleteTrelloCard



Delete a card from Trello by ID.

**Parameters**

-   **card\_id** (`string`, required) The unique identifier of the Trello card to delete.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetTrelloCardProperty



Retrieve a specific property of a Trello card.

**Parameters**

-   **card\_id** (`string`, required) The unique ID of the Trello card to retrieve a property from.
-   **desired\_card\_field** (`string`, required) The field or attribute of the Trello card you want to retrieve. Options include ‘id’, ‘desc’, ‘due’, etc.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetCardActions



Retrieve the actions performed on a specific Trello card.

**Parameters**

-   **card\_id** (`string`, required) The unique identifier of the Trello card to retrieve actions for.
-   **action\_type\_filter** (`string`, optional) Comma-separated list of action types to filter actions on a Trello card.
-   **actions\_page\_number** (`number`, optional) The page number to retrieve for the list of actions on a card, with each page containing 50 actions.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.ListCardAttachments



Retrieve all attachments from a specified Trello card.

**Parameters**

-   **card\_id** (`string`, required) The unique identifier of the Trello card to retrieve attachments from.
-   **attachment\_fields** (`string`, optional) Specify ‘all’ for all fields or a comma-separated list of attachment fields to retrieve.
-   **restrict\_to\_cover\_attachment** (`string`, optional) Set to ‘cover’ to retrieve only the cover attachment of the card.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.AddAttachmentToTrelloCard



Attach a file or link to a Trello card.

**Parameters**

-   **card\_id** (`string`, required) The unique identifier of the Trello card to which the attachment will be added.
-   **attachment\_mime\_type** (`string`, optional) The MIME type of the attachment file. Should be a valid MIME type string (max 256 characters).
-   **attachment\_name** (`string`, optional) The name of the attachment. Maximum length is 256 characters.
-   **attachment\_url** (`string`, optional) A URL to attach to the Trello card. Must start with ‘http://’ or ‘https://’.
-   **file\_attachment** (`string`, optional) The file data to upload and attach to the Trello card as multipart/form-data.
-   **use\_as\_card\_cover** (`boolean`, optional) Set to true to use the new attachment as the card cover.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.DeleteCardAttachment



Delete an attachment from a Trello card.

**Parameters**

-   **attachment\_id\_to\_delete** (`string`, required) The ID of the attachment you want to delete from the card.
-   **card\_id** (`string`, required) The unique identifier for the Trello card from which the attachment will be deleted.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetBoardForCard



Retrieve the board details for a specific card.

**Parameters**

-   **card\_id** (`string`, required) The unique ID of the Trello card to retrieve the board for.
-   **board\_fields** (`string`, optional) Specify `all` or a comma-separated list of board fields to retrieve.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetCardChecklistCompletionStatus



Retrieve completed checklist items from a Trello card.

**Parameters**

-   **card\_id** (`string`, required) The unique identifier of the Trello card to retrieve completed checklist items.
-   **checklist\_item\_fields** (`string`, optional) Specify `all` for all fields or a comma-separated list of: `idCheckItem`, `state` to filter the checklist item details.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetCardChecklists



Retrieve checklists for a specified Trello card.

**Parameters**

-   **card\_id** (`string`, required) The unique identifier of the Trello card for which checklists are retrieved.
-   **card\_fields** (`string`, optional) Specify ‘all’ or list fields like `idBoard,idCard,name,pos` to include in the response.
-   **include\_all\_checklists** (`string`, optional) Specify whether to include all checklists (`all`) or none (`none`) for the card. Accepted values are ‘all’ or ‘none’.
-   **include\_check\_items** (`string`, optional) Specify whether to include all check items (`all`) or none (`none`).
-   **include\_checkitem\_fields** (`string`, optional) Specify ‘all’ for all fields or a comma-separated list of desired fields among: name, nameData, pos, state, type, due, dueReminder, idMember.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.CreateChecklistOnCard



Create a new checklist on a Trello card.

**Parameters**

-   **card\_id** (`string`, required) The unique identifier of the Trello card to which the checklist will be added.
-   **checklist\_name** (`string`, optional) The name of the checklist to be created on a Trello card.
-   **checklist\_position** (`string`, optional) Specify the position of the checklist on the card. Accepts `top`, `bottom`, or a positive number indicating the exact position.
-   **source\_checklist\_id** (`string`, optional) The ID of a source checklist to copy into the new checklist. This is used to duplicate the tasks from another checklist.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetSpecificCheckitemOnCard



Retrieve details of a specific checkItem on a Trello card.

**Parameters**

-   **card\_id** (`string`, required) The ID of the Trello card to retrieve the checkItem from.
-   **checkitem\_id** (`string`, required) The unique ID of the checkItem on the card.
-   **checkitem\_fields** (`string`, optional) Specify `all` or a comma-separated list of fields (`name,nameData,pos,state,type,due,dueReminder,idMember`) to retrieve for the checkItem.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.UpdateChecklistItemTrello



Update an item in a Trello checklist on a card.

**Parameters**

-   **card\_id** (`string`, required) The unique identifier of the Trello card where the checklist item is located.
-   **checkitem\_id** (`string`, required) The unique identifier for the checklist item to be updated.
-   **checkitem\_due\_reminder** (`number`, optional) The number of minutes before the due date when a reminder should be sent for the checkitem.
-   **checklist\_id** (`string`, optional) The unique ID of the checklist containing the item to be updated.
-   **checklist\_item\_due\_date** (`string`, optional) The due date for the checklist item in ISO 8601 format (e.g., ‘2023-12-31T23:59:59Z’).
-   **checklist\_item\_new\_name** (`string`, optional) The new name for the checklist item.
-   **checklist\_item\_position** (`string`, optional) Specify the position of the checklist item as `top`, `bottom`, or a positive float for custom ordering.
-   **completion\_state** (`string`, optional) Specify the state of the checklist item as either `complete` or `incomplete`.
-   **member\_id\_to\_remove** (`string`, optional) The Trello member ID to remove from the card’s checklist item.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.DeleteChecklistItemOnCard



Delete a checklist item from a Trello card.

**Parameters**

-   **card\_id** (`string`, required) The unique identifier of the Trello card from which you want to delete a checklist item.
-   **checklist\_item\_id** (`string`, required) The ID of the checklist item to delete from the card.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetCardList



Retrieve the list containing a specific card from Trello.

**Parameters**

-   **card\_id** (`string`, required) The unique identifier of the Trello Card to find its containing list.
-   **list\_fields** (`string`, optional) Specify `all` or a comma-separated list of list attributes to retrieve. Defines the fields you want from the list containing the card.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetCardMembers



Retrieve members associated with a Trello card.

**Parameters**

-   **card\_id** (`string`, required) The unique identifier for the Trello card whose members are being retrieved.
-   **member\_fields** (`string`, optional) Specify `all` for all fields or list specific member fields separated by commas.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetMembersWhoVotedOnCard



Retrieve members who voted on a Trello card.

**Parameters**

-   **card\_id** (`string`, required) The unique ID of the Trello card for which you want to retrieve the list of voting members.
-   **member\_fields** (`string`, optional) Specify ‘all’ or a comma-separated list of member fields to retrieve information on those members who voted on the card.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.VoteOnTrelloCard



Vote on a Trello card for a specific member.

**Parameters**

-   **card\_id** (`string`, required) The unique ID of the Trello card on which to vote.
-   **member\_id\_for\_vote** (`string`, required) The ID of the member casting a ‘yes’ vote on the Trello card.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetTrelloCardPluginData



Retrieve shared plugin data from a Trello card.

**Parameters**

-   **card\_id** (`string`, required) The unique ID of the Trello card to retrieve plugin data for.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetCardStickers



Get the stickers on a Trello card using its ID.

**Parameters**

-   **card\_id** (`string`, required) The unique identifier for a Trello card to retrieve its stickers.
-   **sticker\_fields** (`string`, optional) Specify ‘all’ or a comma-separated list of sticker fields to retrieve.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.AddStickerToTrelloCard



Add a sticker to a specific Trello card.

**Parameters**

-   **card\_id** (`string`, required) The unique identifier of the Trello card to which the sticker will be added.
-   **sticker\_identifier** (`string`, required) Specify the sticker ID for custom stickers or use default string identifiers like ‘taco-cool’ for default stickers.
-   **sticker\_left\_position** (`number`, required) The left position of the sticker. Acceptable values range from -60 to 100.
-   **sticker\_top\_position** (`number`, required) Specify the vertical position of the sticker on the card, ranging from -60 to 100.
-   **sticker\_z\_index** (`integer`, required) Specify the z-index of the sticker to determine overlay order. Use integers to set layer depth.
-   **sticker\_rotation** (`number`, optional) The rotation angle of the sticker in degrees, allowing for visual adjustment.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetTrelloCardSticker



Fetch details of a specific sticker on a Trello card.

**Parameters**

-   **card\_id** (`string`, required) The ID of the Trello card to retrieve the sticker from.
-   **sticker\_id** (`string`, required) The unique identifier for the sticker on the Trello card.
-   **sticker\_fields** (`string`, optional) Specify ‘all’ or a comma-separated list of sticker fields you want to retrieve.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.RemoveCardSticker



Removes a specified sticker from a Trello card.

**Parameters**

-   **card\_id** (`string`, required) The unique identifier of the Trello card from which the sticker will be removed.
-   **sticker\_id** (`string`, required) The ID of the sticker to be removed from the specified Trello card.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.UpdateTrelloCardSticker



Update a sticker on a specified Trello card.

**Parameters**

-   **card\_id** (`string`, required) The unique identifier of the Trello card to update the sticker on.
-   **sticker\_id** (`string`, required) The unique identifier for the sticker to be updated on the Trello card. It must match an existing sticker on the specified card.
-   **sticker\_left\_position** (`number`, required) The left position of the sticker, ranging from -60 to 100.
-   **sticker\_top\_position** (`number`, required) The vertical position of the sticker on the card, ranging from -60 to 100. Determines the position from the top.
-   **sticker\_z\_index** (`integer`, required) The z-index of the sticker, determining its layer position with respect to other stickers on the card. Provide as an integer.
-   **sticker\_rotation** (`number`, optional) The rotation angle of the sticker. Provide a number representing the degrees of rotation.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.UpdateCardComment



Update an existing comment on a Trello card.

**Parameters**

-   **card\_id** (`string`, required) The unique identifier for the Trello card where the comment resides.
-   **comment\_action\_id** (`string`, required) The unique ID of the comment action you wish to update on a Trello card.
-   **new\_comment\_text** (`string`, required) The new text content for the comment being updated on the Trello card.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.DeleteCommentOnCard



Deletes a comment from a Trello card action.

**Parameters**

-   **card\_id** (`string`, required) The unique identifier for the Trello card from which the comment will be deleted.
-   **comment\_action\_id** (`string`, required) The ID of the comment action to be deleted from the card.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.UpdateTrelloCardCustomField



Update or remove a custom field value on a Trello card.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **card\_id** (`string`, optional) The ID of the Trello card where the custom field value will be set or updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **custom\_field\_id** (`string`, optional) The unique identifier for the custom field on the Trello card. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.UpdateTrelloCardCustomFields



Update custom fields on a Trello card.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetCardCustomFieldItems



Retrieve custom field items for a Trello card.

**Parameters**

-   **card\_id** (`string`, required) The unique identifier for the Trello card whose custom field items you want to retrieve.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.AddCommentToTrelloCard



Add a comment to a specific Trello card.

**Parameters**

-   **card\_id** (`string`, required) The unique identifier of the Trello card where the comment will be added.
-   **comment\_text** (`string`, required) The content of the comment to be added to the Trello card.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.AddLabelToTrelloCard



Add a label to a Trello card.

**Parameters**

-   **card\_id** (`string`, required) The unique identifier for the specific Trello card.
-   **label\_id** (`string`, optional) The ID of the label to add to the Trello card.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.AddMemberToTrelloCard



Add a member to a specified Trello card.

**Parameters**

-   **card\_id** (`string`, required) The unique identifier for the Trello card to which a member will be added. It is required to specify which card the member should be added to.
-   **member\_id\_to\_add** (`string`, optional) The ID of the member to add to the specified Trello card.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.CreateTrelloCardLabel



Add a new label to a specific Trello card.

**Parameters**

-   **card\_id** (`string`, required) The unique identifier of the Trello card to which the label will be added.
-   **label\_color** (`string`, required) Specify a valid Trello label color or use ‘null’. Check Trello’s documentation for available colors.
-   **label\_name** (`string`, optional) The name for the label to add to the Trello card.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.MarkTrelloCardNotificationsRead



Mark Trello card notifications as read.

**Parameters**

-   **card\_id** (`string`, required) The unique identifier of the Trello card whose notifications need to be marked as read.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.RemoveLabelFromTrelloCard



Remove a specific label from a Trello card.

**Parameters**

-   **card\_id** (`string`, required) The unique identifier for the Trello card from which the label will be removed.
-   **label\_id\_to\_remove** (`string`, required) The ID of the label you want to remove from the Trello card.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.RemoveMemberFromCard



Removes a member from a Trello card.

**Parameters**

-   **card\_id** (`string`, required) The unique identifier for the Trello card from which the member will be removed.
-   **member\_id\_to\_remove** (`string`, required) The ID of the member to remove from the Trello card.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.RemoveMemberVote



Remove a member’s vote from a Trello card.

**Parameters**

-   **card\_id** (`string`, required) The unique identifier of the Trello card from which to remove the vote.
-   **member\_id\_to\_remove\_vote** (`string`, required) The ID of the member whose vote is to be removed from the Trello card.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.UpdateTrelloChecklistItem



Update an item in a Trello card checklist.

**Parameters**

-   **card\_id** (`string`, required) The unique identifier for the Trello card where the checklist item is located.
-   **checklist\_id** (`string`, required) The ID of the checklist item you want to update on the Trello card.
-   **checklist\_item\_id** (`string`, required) The unique ID of the checklist item that needs to be updated on the Trello card.
-   **position\_in\_checklist** (`string`, optional) Position the checklist item at the ‘top’, ‘bottom’, or a specific order with a positive float.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.DeleteTrelloCardChecklist



Delete a checklist from a Trello card.

**Parameters**

-   **card\_id** (`string`, required) The ID of the Trello card from which the checklist will be deleted.
-   **checklist\_id** (`string`, required) The ID of the checklist to delete from the Trello card.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.CreateTrelloChecklist



Create a new checklist in Trello.

**Parameters**

-   **card\_id** (`string`, required) The unique ID of the Trello card where the checklist will be added.
-   **checklist\_name** (`string`, optional) The name of the checklist to be created. It should be a string with 1 to 16384 characters.
-   **checklist\_position** (`string`, optional) The position of the checklist on the card. Accepts ‘top’, ‘bottom’, or a positive number indicating specific placement.
-   **source\_checklist\_id** (`string`, optional) The ID of the checklist to be copied into the new checklist.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetChecklistById



Retrieve a specific Trello checklist by ID.

**Parameters**

-   **checklist\_id** (`string`, required) Provide the ID of the Trello checklist you want to retrieve.
-   **checkitem\_fields\_to\_return** (`string`, optional) Fields on the checkItem to return if checkItems are included. Use `all` or a comma-separated list of available fields like `name`, `type`, `due`, etc.
-   **checklist\_fields** (`string`, optional) Specify `all` or a comma-separated list of checklist fields to return.
-   **include\_cards** (`string`, optional) Specify which cards associated with the checklist should be returned. Valid options are: ‘all’, ‘closed’, ‘none’, ‘open’, ‘visible’.
-   **return\_check\_items** (`string`, optional) Specify whether to return check items on the checklist, using ‘all’ or ‘none’.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.UpdateTrelloChecklist



Update an existing checklist on Trello.

**Parameters**

-   **checklist\_id** (`string`, required) ID of the checklist to update on Trello. This is required to specify which checklist needs updating.
-   **checklist\_name** (`string`, optional) Name of the checklist to update. Must be 1 to 16,384 characters long.
-   **checklist\_position** (`string`, optional) Specify the position of the checklist on the card. Options are `top`, `bottom`, or a positive number indicating the precise position.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.DeleteTrelloChecklist



Deletes a checklist from Trello using its ID.

**Parameters**

-   **checklist\_id** (`string`, required) The unique identifier of the checklist to be deleted from Trello.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetChecklistField



Retrieve a specific field from a Trello checklist.

**Parameters**

-   **checklist\_field\_to\_retrieve** (`string`, required) Specify the field of the checklist to retrieve: ‘name’ or ‘pos’.
-   **checklist\_id** (`string`, required) The unique identifier of the checklist to retrieve a specific field from.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.UpdateChecklistField



Updates a specific field of a checklist on Trello.

**Parameters**

-   **checklist\_field** (`string`, required) Specify the checklist field to update. Options are ‘name’ or ‘pos’.
-   **checklist\_id** (`string`, required) ID of the checklist to be updated. This is required to specify which checklist field to modify.
-   **checklist\_name\_value** (`string`, required) The new name for the checklist. Must be a string of length 1 to 16384.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetBoardFromChecklist



Retrieve the board associated with a checklist on Trello.

**Parameters**

-   **checklist\_id** (`string`, required) ID of the checklist to identify which board it is associated with on Trello.
-   **board\_fields\_selection** (`string`, optional) Specify ‘all’ or a comma-separated list of board fields to retrieve. Default is ‘all’.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetCardFromChecklist



Retrieve card details for a specified checklist.

**Parameters**

-   **checklist\_id** (`string`, required) The unique identifier of the Trello checklist to retrieve the associated card.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetChecklistCheckitems



Retrieve checkitems from a Trello checklist.

**Parameters**

-   **checklist\_id** (`string`, required) The unique identifier of the checklist to retrieve its checkitems.
-   **fields\_to\_retrieve** (`string`, optional) Specify which fields to retrieve from the checklist items. Options include: `all`, `name`, `nameData`, `pos`, `state`, `type`, `due`, `dueReminder`, `idMember`.
-   **list\_checkitems\_filter** (`string`, optional) Specify whether to retrieve ‘all’ checkitems or ‘none’.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.CreateCheckitemInChecklist



Create a new checkitem in a Trello checklist.

**Parameters**

-   **checkitem\_name** (`string`, required) The name of the new check item on the checklist. Must be between 1 and 16384 characters long.
-   **checklist\_id** (`string`, required) The unique ID of the checklist where the checkitem will be created.
-   **checkitem\_due\_date** (`string`, optional) Specify the due date for the checkitem in ISO 8601 format (e.g., YYYY-MM-DD).
-   **checkitem\_position** (`string`, optional) Position of the check item in checklist: `top`, `bottom`, or a positive number.
-   **due\_reminder\_minutes** (`number`, optional) Minutes before the due date to trigger a reminder for the checkitem.
-   **is\_checkitem\_checked** (`boolean`, optional) Set to true if the check item should be checked upon creation. Otherwise, it will be unchecked.
-   **member\_id** (`string`, optional) ID of the member to associate with the checkitem.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetChecklistItem



Retrieve a specific checkitem from a checklist on Trello.

**Parameters**

-   **check\_item\_id** (`string`, required) ID of the specific check item to retrieve from the checklist.
-   **checklist\_id** (`string`, required) The unique identifier of the checklist containing the desired checkitem.
-   **checkitem\_fields** (`string`, optional) Specify which fields of the checkitem to retrieve. Options include `all`, `name`, `nameData`, `pos`, `state`, `type`, `due`, `dueReminder`, `idMember`.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.RemoveChecklistItem



Remove an item from a Trello checklist.

**Parameters**

-   **check\_item\_id** (`string`, required) The ID of the specific checklist item to be removed from Trello.
-   **checklist\_id** (`string`, required) ID of the checklist from which the item will be removed.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.CreateTrelloCustomField



Create a new custom field on a Trello board.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetCustomField



Retrieve details of a Trello custom field by ID.

**Parameters**

-   **custom\_field\_id** (`string`, required) Provide the ID of the custom field to retrieve its details in Trello.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.UpdateCustomFieldDefinition



Update a Custom Field definition in Trello.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **custom\_field\_id** (`string`, optional) The unique identifier for the Custom Field to update in Trello. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.DeleteTrelloCustomField



Delete a custom field from a Trello board.

**Parameters**

-   **custom\_field\_id** (`string`, required) The unique identifier of the Custom Field to be deleted from the Trello board.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.AddDropdownOptionCustomField



Add an option to a dropdown Custom Field in Trello.

**Parameters**

-   **custom\_field\_id** (`string`, required) The unique identifier of the custom field to which a dropdown option will be added.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetCustomFieldOptions



Retrieve options of a Trello drop-down custom field.

**Parameters**

-   **custom\_field\_id** (`string`, required) The ID of the Trello custom field to retrieve options for.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetCustomFieldOptionTrello



Retrieve a specific dropdown option from Trello custom fields.

**Parameters**

-   **custom\_field\_item\_id** (`string`, required) ID of the custom field item in Trello to retrieve the dropdown option for.
-   **custom\_field\_option\_id** (`string`, required) ID of the Trello custom field option to retrieve.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.DeleteCustomFieldOption



Delete an option from a Trello Custom Field dropdown.

**Parameters**

-   **custom\_field\_item\_id** (`string`, required) ID of the customfielditem to identify which dropdown option to delete.
-   **custom\_field\_option\_id** (`string`, required) ID of the custom field option to delete from the dropdown list.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.ListAvailableEmoji



Retrieve a list of available emojis on Trello.

**Parameters**

-   **include\_spritesheet\_urls** (`boolean`, optional) Set to true to include spritesheet URLs in the response.
-   **locale\_for\_emoji** (`string`, optional) Specify the locale for returning emoji descriptions and names. Defaults to the logged-in member’s locale.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetEnterpriseById



Retrieve details of a Trello enterprise by ID.

**Parameters**

-   **enterprise\_id** (`string`, required) The unique identifier for the enterprise you want to retrieve from Trello.
-   **enterprise\_fields** (`string`, optional) Comma-separated list of fields to include, such as `id`, `name`, `displayName`, `prefs`, and more.
-   **include\_paid\_account\_information** (`boolean`, optional) Include paid account information in the returned workspace objects if set to true. If false, it will be excluded.
-   **member\_count** (`integer`, optional) Specify the number of members to retrieve, ranging from 0 to 100.
-   **member\_fields** (`string`, optional) Specify one of: `avatarHash`, `fullName`, `initials`, `username` to filter member fields.
-   **member\_filter\_query** (`string`, optional) A SCIM-style query to filter members. Overrides member types (‘normal’, ‘admins’, etc.) and paginates the member array.
-   **member\_inclusion\_type** (`string`, optional) Specify which member roles to include: `none`, `normal`, `admins`, `owners`, `all`.
-   **member\_sort** (`string`, optional) Use a SCIM-style sorting value prefixed by ’-’ for descending or ascending if no prefix. Note: Deprecated `member_sortBy` parameter.
-   **member\_sorting\_order** (`string`, optional) SCIM-style sorting value for members. Use ’-’ prefix for descending order, no prefix for ascending.
-   **member\_start\_index** (`integer`, optional) Specify the starting index for paginated members. Accepts any integer between 0 and 100.
-   **organization\_fields\_value** (`string`, optional) Specify valid values for nested organization fields as accepted by the API.
-   **organization\_inclusion** (`string`, optional) Determine scope of organizations to retrieve with the enterprise: ‘none’, ‘members’, ‘public’, or ‘all’.
-   **organization\_memberships\_list** (`string`, optional) Comma-separated list indicating organization memberships such as `me`, `normal`, `admin`, `active`, `deactivated`.
-   **sort\_members\_order** (`string`, optional) Order the sorting of members. Acceptable values are `ascending`, `descending`, `asc`, or `desc`. Note: This parameter is deprecated and `member_sort` is preferred.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetEnterpriseAuditLog



Retrieve audit log actions for a specific enterprise.

**Parameters**

-   **enterprise\_id** (`string`, required) Specify the ID of the enterprise to retrieve audit log actions for.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetEnterpriseAdmins



Retrieve admin members of an enterprise by ID.

**Parameters**

-   **enterprise\_id** (`string`, required) The ID of the enterprise to retrieve admin members for.
-   **admin\_fields** (`string`, optional) Specify fields to retrieve for each admin member; valid values as per Trello’s nested member field resource.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetEnterpriseSignupUrl



Retrieve the signup URL for a specified enterprise.

**Parameters**

-   **enterprise\_id** (`string`, required) ID of the enterprise to retrieve the signup URL for.
-   **authenticate** (`boolean`, optional) Set to ‘True’ if authentication is required for the API call, otherwise ‘False’.
-   **has\_confirmation\_been\_accepted** (`boolean`, optional) Indicates whether the user has accepted the required confirmations before being redirected.
-   **redirect\_url** (`string`, optional) A valid URL where the user will be redirected after signup.
-   **terms\_of\_service\_accepted** (`boolean`, optional) Indicate whether the user has consented to the Trello Terms of Service before being redirected to the enterprise signup page.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetEnterpriseUsers



Fetch users from a Trello enterprise.

**Parameters**

-   **enterprise\_id** (`string`, required) ID of the Trello enterprise to retrieve users from.
-   **active\_date\_filter** (`string`, optional) Returns only Trello users active since this date (inclusive). Provide the date in YYYY-MM-DD format.
-   **active\_since\_date** (`string`, optional) Filter users active since this date (inclusive). Use YYYY-MM-DD format.
-   **fetch\_deactivated\_members** (`boolean`, optional) When true, returns members who have been deactivated; when false, returns members who have not. Both active and deactivated members are returned if unspecified.
-   **licensed\_members\_only** (`boolean`, optional) Set to true to retrieve only members with a license for the Trello Enterprise; false for only unlicensed members. Leave unspecified to include both licensed and unlicensed members.
-   **only\_admin\_members** (`boolean`, optional) Set to True to return only administrators of the Trello Enterprise. If False, return non-admins. Unspecified returns both.
-   **pagination\_cursor** (`string`, optional) Cursor value to fetch the next set of user results. Use the cursor received from a previous response to continue fetching more users.
-   **return\_board\_guests** (`boolean`, optional) Set to true to return members who are guests on boards; false to return only non-guests. If not set, both are included.
-   **return\_managed\_members\_only** (`boolean`, optional) Specify true to return only managed members, false for only unmanaged, or omit for both.
-   **search\_query** (`string`, optional) String to search for members by email or full name starting with this value.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetEnterpriseMembers



Retrieve members of a specific enterprise from Trello.

**Parameters**

-   **enterprise\_id** (`string`, required) The unique ID of the enterprise whose members you want to retrieve.
-   **board\_fields\_to\_include** (`string`, optional) Specify valid board field values to include from the nested board resource.
-   **member\_count\_filter** (`string`, optional) A SCIM-style filter to specify the number of members to retrieve. Use this to filter results according to SCIM standards.
-   **member\_field\_list** (`string`, optional) A comma-separated list of member fields to include, e.g., ‘fullName,email’.
-   **organization\_fields** (`string`, optional) Valid organization field values allowed by the Trello nested organization field resource. This customizes which organization data is returned.
-   **scim\_style\_filter** (`string`, optional) A SCIM-style query to filter enterprise members, taking precedence over other member settings.
-   **sort\_by** (`string`, optional) Deprecated: Use ‘sort’ instead. A SCIM-style value to sort members, affecting pagination.
-   **sorting\_order** (`string`, optional) Specify how to sort members using a SCIM-style value. Prefix with `-` for descending order; otherwise, ascending.
-   **start\_index** (`integer`, optional) The starting point for pagination, using an integer between 0 and 9999.
-   **use\_deprecated\_sort\_order** (`string`, optional) Specify the sorting order for members: ‘ascending’, ‘descending’, ‘asc’, ‘desc’. Deprecated; use ‘sort’ instead.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetEnterpriseMember



Retrieve a specific member of an enterprise by ID.

**Parameters**

-   **enterprise\_id** (`string`, required) The unique identifier for the enterprise to retrieve. This is required to specify which enterprise’s member data you are accessing.
-   **member\_id** (`string`, required) The ID of the member resource you want to retrieve details for within an enterprise.
-   **board\_fields** (`string`, optional) Comma-separated list of board fields to retrieve, as defined by the Trello nested board resource.
-   **member\_field\_values** (`string`, optional) Comma-separated valid values for member fields to retrieve details about a specific enterprise member.
-   **organization\_field\_values** (`string`, optional) Comma-separated list of organization fields to include. Refer to Trello’s nested organization field resource for valid values.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.CheckOrganizationTransferability



Check if an organization can be transferred to an enterprise.

**Parameters**

-   **enterprise\_id** (`string`, required) ID of the Enterprise to check for organization transferability.
-   **organization\_id** (`string`, required) The ID of the organization to check for transferability.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetClaimableWorkspaces



Retrieve claimable workspaces for an enterprise by ID.

**Parameters**

-   **enterprise\_id\_to\_retrieve\_workspaces** (`string`, required) The unique ID of the enterprise to retrieve claimable workspaces for.
-   **active\_since\_date** (`string`, optional) Specify the date in YYYY-MM-DD format to filter workspaces active up to this date.
-   **enterprise\_name** (`string`, optional) The name of the enterprise for which to retrieve claimable workspaces.
-   **inactive\_since\_date** (`string`, optional) Date in YYYY-MM-DD format to search for workspace inactiveness.
-   **maximum\_workspaces** (`integer`, optional) Sets the maximum number of workspaces to retrieve and sort. Use an integer to specify the limit.
-   **sort\_order\_cursor** (`string`, optional) Specifies the sorting cursor for the order in which matching workspaces are returned. Use this to paginate results.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetPendingWorkspacesByEnterpriseId



Retrieve pending workspaces for an enterprise by ID.

**Parameters**

-   **enterprise\_id** (`string`, required) ID of the enterprise to retrieve pending workspaces for.
-   **active\_since\_date** (`string`, optional) Date in YYYY-MM-DD format to filter active workspaces up to a certain date.
-   **search\_up\_to\_inactive\_date** (`string`, optional) Date in YYYY-MM-DD format indicating the search cutoff for workspace inactiveness.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.CreateEnterpriseAuthToken



Create an auth token for a Trello enterprise.

**Parameters**

-   **enterprise\_id** (`string`, required) The unique ID of the enterprise for which the auth token will be generated.
-   **token\_expiration** (`string`, optional) Specify the token’s duration: `1hour`, `1day`, `30days`, or `never`. This determines how long the token will be valid.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetEnterpriseOrganizations



Retrieve organizations associated with a specific enterprise.

**Parameters**

-   **enterprise\_id** (`string`, required) ID of the Enterprise to retrieve its organizations.
-   **number\_of\_organizations\_to\_retrieve** (`integer`, optional) Specify the number of organizations to retrieve. Must be an integer between 0 and 100.
-   **organization\_fields** (`string`, optional) Comma-separated list of organization fields to include in the response. Valid options are: ‘id’, ‘name’.
-   **organization\_filter** (`string`, optional) Optional filter for specifying which organizations to include in the response.
-   **starting\_index** (`integer`, optional) The starting index for fetching organizations, must be an integer greater than or equal to 1.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.TransferOrganizationToEnterprise



Transfer an organization to an enterprise.

**Parameters**

-   **enterprise\_id** (`string`, required) The ID of the Enterprise to which the organization will be transferred.
-   **organization\_id** (`string`, required) ID of the organization to be transferred to the enterprise in Trello.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.UpdateEnterpriseMemberLicense



Update an enterprise member’s license status in Trello.

**Parameters**

-   **enterprise\_id** (`string`, required) The unique identifier for the enterprise. Required for license updates.
-   **grant\_enterprise\_license** (`boolean`, required) Boolean indicating if the member should be given an Enterprise license (true) or not (false).
-   **member\_id** (`string`, required) The unique ID of the Trello member to update license status.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.DeactivateEnterpriseMember



Deactivate a member in a Trello enterprise.

**Parameters**

-   **deactivate\_member** (`boolean`, required) Set to True to deactivate the member, False to keep active.
-   **enterprise\_id** (`string`, required) The ID of the enterprise from which the member should be deactivated.
-   **member\_id\_to\_deactivate** (`string`, required) The ID of the member to deactivate in a Trello enterprise.
-   **board\_fields\_to\_include** (`string`, optional) Specify which board fields should be included. Use values like ‘id’, ‘name’, ‘desc’, etc.
-   **nested\_member\_fields** (`string`, optional) Comma-separated list of valid values for the nested member field resource.
-   **organization\_fields** (`string`, optional) Comma-separated list of fields related to the organization, such as ‘id’ or ‘name’.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.MakeMemberAdminEnterprise



Promote a member to admin in a Trello enterprise.

**Parameters**

-   **enterprise\_id** (`string`, required) The ID of the enterprise for which you want to promote a member to admin.
-   **member\_id\_to\_promote** (`string`, required) ID of the member to be promoted to admin of the enterprise.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.RemoveEnterpriseAdmin



Remove a member as admin from an enterprise.

**Parameters**

-   **enterprise\_id** (`string`, required) The Trello Enterprise ID from which to remove the member as admin.
-   **member\_id\_to\_remove** (`string`, required) ID of the member to be removed as an admin from the enterprise.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.RemoveOrganizationFromEnterprise



Remove an organization from a Trello enterprise.

**Parameters**

-   **enterprise\_id** (`string`, required) The ID of the Trello enterprise from which the organization will be removed.
-   **organization\_id\_to\_remove** (`string`, required) The ID of the organization to be removed from the Trello enterprise.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetTrelloLabelInfo



Retrieve information about a specific Trello label.

**Parameters**

-   **label\_id** (`string`, required) The unique identifier for the Trello label to retrieve information about.
-   **label\_fields** (`string`, optional) Specify ‘all’ or a comma-separated list of label fields to retrieve details about. Refer to Trello’s field documentation for options.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.UpdateTrelloLabel



Update Trello label details using its ID.

**Parameters**

-   **label\_id** (`string`, required) The unique identifier for the Trello label to update.
-   **label\_color** (`string`, optional) Specify the new color for the label. Allowed colors: yellow, purple, blue, red, green, orange, black, sky, pink, lime.
-   **new\_label\_name** (`string`, optional) The new name for the Trello label to be updated.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.DeleteLabelById



Delete a label in Trello by its ID.

**Parameters**

-   **label\_id** (`string`, required) The unique identifier for the label to be deleted from Trello.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.UpdateTrelloLabelField



Update a specific field on a Trello label.

**Parameters**

-   **label\_field\_to\_update** (`string`, required) Specify the label field to update, such as ‘color’ or ‘name’.
-   **label\_id** (`string`, required) The unique identifier of the Trello label to update.
-   **new\_field\_value** (`string`, required) The new value to update the specified label field with, such as a new color or name.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.CreateNewLabelOnBoard



Create a new label on a Trello board.

**Parameters**

-   **board\_id** (`string`, required) The ID of the Trello board on which to create the new label. This is required to specify the target board.
-   **label\_color** (`string`, required) Specify the color for the label. Choose from yellow, purple, blue, red, green, orange, black, sky, pink, or lime.
-   **label\_name** (`string`, required) The name assigned to the new label being created on the Trello board.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetTrelloListInfo



Retrieve details for a specific Trello list using its ID.

**Parameters**

-   **list\_id** (`string`, required) The unique identifier of the Trello list to retrieve information for.
-   **list\_fields** (`string`, optional) Specify ‘all’ or provide a comma-separated list of list field names to retrieve specific details.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.UpdateTrelloList



Update the properties of a Trello list.

**Parameters**

-   **list\_id** (`string`, required) The unique ID of the Trello list to be updated.
-   **archive\_list** (`boolean`, optional) Set to true to archive the list, false to keep it open.
-   **board\_id\_destination** (`string`, optional) ID of the board to which the list will be moved.
-   **is\_subscribed** (`boolean`, optional) Whether the active member is subscribed to this list. Use `true` to subscribe and `false` to unsubscribe.
-   **new\_list\_name** (`string`, optional) The new name to assign to the Trello list.
-   **new\_list\_position** (`string`, optional) New position for the list: ‘top’, ‘bottom’, or a positive floating point number.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.CreateTrelloList



Create a new list on a Trello board.

**Parameters**

-   **board\_id** (`string`, required) The unique string ID of the Trello board where the list will be created.
-   **list\_name** (`string`, required) The name of the new list to be created on the Trello board.
-   **list\_position** (`string`, optional) Position of the list on the board: `top`, `bottom`, or a positive floating number to specify exact placement.
-   **source\_list\_id** (`string`, optional) ID of the list to copy into the new list. Leave blank to create a new list without copying.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.ArchiveAllCardsInList



Archives all cards in a specified Trello list.

**Parameters**

-   **list\_id** (`string`, required) The unique identifier of the Trello list to archive all cards from.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.TrelloMoveAllCardsInList



Move all cards from one list to another in Trello.

**Parameters**

-   **destination\_board\_id** (`string`, required) The board ID where the cards will be moved to.
-   **source\_list\_id** (`string`, required) The ID of the list from which all cards will be moved.
-   **target\_list\_id** (`string`, required) The ID of the Trello list to which all cards should be moved.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.ArchiveOrUnarchiveTrelloList



Archive or unarchive a Trello list.

**Parameters**

-   **list\_id** (`string`, required) The unique identifier of the Trello list to archive or unarchive.
-   **archive\_list** (`string`, optional) Set to true to archive the list or false to unarchive.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.MoveTrelloListToBoard



Reorganize Trello by moving a list to another board.

**Parameters**

-   **board\_id\_for\_list\_movement** (`string`, required) The ID of the board to which the Trello list should be moved.
-   **list\_id** (`string`, required) The unique ID of the Trello list to be moved.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.RenameTrelloList



Renames a Trello list by its ID.

**Parameters**

-   **list\_field\_to\_update** (`string`, required) Specifies the list field to update, such as ‘name’, ‘pos’, or ‘subscribed’.
-   **trello\_list\_id** (`string`, required) The unique identifier for the Trello list you want to rename.
-   **new\_list\_name** (`string`, optional) The new name for the Trello list. Provide a descriptive and clear title to easily identify the list.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetTrelloListActions



Retrieve actions performed on a specific Trello list.

**Parameters**

-   **list\_id** (`string`, required) The unique ID of the Trello list to retrieve actions for.
-   **action\_types** (`string`, optional) Comma-separated list of action types to filter actions on the Trello list.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetBoardOfList



Retrieve the board associated with a specific list on Trello.

**Parameters**

-   **list\_id** (`string`, required) The unique ID of the Trello list to identify its board.
-   **board\_fields** (`string`, optional) Specify ‘all’ for all fields, or provide a comma-separated list of desired board fields.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.ListTrelloCardsInList



Fetches all cards from a specified Trello list.

**Parameters**

-   **list\_id** (`string`, required) The unique ID of the Trello list to fetch cards from.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetTrelloMemberInfo



Fetch information about a Trello member profile.

**Parameters**

-   **member\_id\_or\_username** (`string`, required) The ID or username of the Trello member to retrieve information for.
-   **board\_backgrounds\_option** (`string`, optional) Specify type of board backgrounds: `all`, `custom`, `default`, `none`, or `premium`.
-   **include\_actions** (`string`, optional) Include actions related to the member. Refer to the Actions Nested Resource for details.
-   **include\_boards\_details** (`string`, optional) Specify if you want to include detailed information about the member’s boards. Refer to the Boards Nested Resource for options.
-   **include\_boards\_invited** (`string`, optional) Specify `all` or a comma-separated list of board states like closed, members, open, etc., to filter invited boards.
-   **include\_card\_details** (`string`, optional) Include detailed information about cards associated with the member. Refer to the Cards Nested Resource for options.
-   **include\_custom\_board\_backgrounds** (`string`, optional) Specify whether to include custom board backgrounds. Use `all` for all backgrounds or `none` to exclude them.
-   **include\_custom\_emoji** (`string`, optional) Specify whether to include all custom emojis (‘all’) or none (‘none’) in the response.
-   **include\_custom\_stickers** (`string`, optional) Specify if custom stickers should be included. Use `all` to include or `none` to exclude.
-   **include\_invited\_organizations** (`string`, optional) Specify the scope of invited organizations to include: all, members, none, or public.
-   **include\_paid\_account\_information** (`boolean`, optional) Include paid account information in the returned member object when true.
-   **include\_paid\_account\_information\_in\_workspace** (`boolean`, optional) Include paid account information in the returned workspace object if true.
-   **include\_saved\_searches** (`boolean`, optional) Set to true to include saved searches information in the response, false to exclude.
-   **include\_tokens** (`string`, optional) Include tokens associated with the member. Options: `all` to include, `none` to exclude.
-   **invited\_boards\_fields** (`string`, optional) Specify ‘all’ or a comma-separated list of board fields for invited boards. Options include: id, name, desc, and more.
-   **member\_fields\_selection** (`string`, optional) Specify ‘all’ or a comma-separated list of member fields to retrieve information about. Use ‘all’ to retrieve all available member fields.
-   **notification\_details** (`string`, optional) Fetch notification information related to the member. Refer to the Notifications Nested Resource for options.
-   **organization\_fields\_selection** (`string`, optional) Specify ‘all’ or provide a comma-separated list of organization fields like ‘id’, ‘name’.
-   **organization\_fields\_to\_include** (`string`, optional) Specify ‘all’ or a comma-separated list of organization fields like ‘id’, ‘name’ to include in the response.
-   **organization\_visibility** (`string`, optional) Specify organization visibility: `all`, `members`, `none`, or `public`.
-   **return\_board\_stars** (`boolean`, optional) Set to true to return boardStars in the response, otherwise false to exclude them.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.UpdateTrelloMember



Update Trello member details.

**Parameters**

-   **member\_id\_or\_username** (`string`, required) The ID or username of the Trello member to be updated.
-   **avatar\_source** (`string`, optional) Source of the avatar; must be one of: ‘gravatar’, ‘none’, or ‘upload’.
-   **enable\_color\_blind\_mode** (`boolean`, optional) Set to true to enable color blind mode preferences for the member, false to disable.
-   **member\_bio** (`string`, optional) Biography of the member. Provide a brief description or update to the member’s bio as a string.
-   **member\_initials** (`string`, optional) New initials for the member. Must be 1-4 characters long.
-   **new\_full\_name** (`string`, optional) The new name for the member. Ensure it does not begin or end with a space.
-   **new\_username** (`string`, optional) The new username for the Trello member. It must be at least 3 characters long and can only contain lowercase letters, underscores, and numbers. The username must be unique within Trello.
-   **preferred\_locale** (`string`, optional) Specifies the preferred locale for the member’s settings. This should be a valid locale string (e.g., ‘en\_US’).
-   **summary\_notification\_interval** (`integer`, optional) Time interval in minutes for summary notifications. Use `-1` to disable, `1` for every minute, or `60` for hourly notifications.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetMemberProperty



Retrieve a specific property of a Trello member.

**Parameters**

-   **member\_field\_name** (`string`, required) Specify the name of the member field to retrieve, such as ‘username’, ‘email’, etc.
-   **member\_id\_or\_username** (`string`, required) The ID or username of the Trello member whose property is to be retrieved.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.ListMemberActions



Retrieve a list of actions for a specified member.

**Parameters**

-   **member\_identifier** (`string`, required) The ID or username of the Trello member whose actions you want to retrieve.
-   **action\_types\_filter** (`string`, optional) A comma-separated list of action types to filter the actions of a Trello member.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetMemberBoardBackgrounds



Retrieve custom board backgrounds for a Trello member.

**Parameters**

-   **member\_id\_or\_username** (`string`, required) The ID or username of the Trello member whose board backgrounds are being retrieved.
-   **board\_background\_filter** (`string`, optional) Specify the filter for board backgrounds: `all`, `custom`, `default`, `none`, or `premium`.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.UploadTrelloBoardBackground



Upload a new board background on Trello.

**Parameters**

-   **background\_image\_file\_path** (`string`, required) The file path for the image to be uploaded as a new board background. Provide the full path or a URL to the image file.
-   **member\_id\_or\_username** (`string`, required) The ID or username of the Trello member to upload the board background for.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetMemberBoardBackground



Retrieve a board background for a specific member.

**Parameters**

-   **board\_background\_id** (`string`, required) The ID of the board background to retrieve. This is required to specify which background details to fetch for a member.
-   **member\_id\_or\_username** (`string`, required) The ID or username of the member whose board background is being retrieved.
-   **fields\_to\_retrieve** (`string`, optional) Specify ‘all’ or a comma-separated list of fields to retrieve: ‘brightness’, ‘fullSizeUrl’, ‘scaled’, ‘tile’.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.UpdateBoardBackground



Update the background of a Trello board.

**Parameters**

-   **board\_background\_id** (`string`, required) ID of the board background to update.
-   **member\_id\_or\_username** (`string`, required) The ID or username of the Trello member associated with the board to update.
-   **background\_brightness** (`string`, optional) Set the brightness level for the board background. Options are `dark`, `light`, or `unknown`.
-   **tile\_background** (`boolean`, optional) Set to true to tile the board background. False to not tile it.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.DeleteBoardBackground



Delete a board background from a member’s Trello board.

**Parameters**

-   **board\_background\_id** (`string`, required) The unique identifier for the board background to be deleted.
-   **member\_id\_or\_username** (`string`, required) The ID or username of the Trello member whose board background you want to delete.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.ListMemberBoardStars



Retrieve a member’s board stars on Trello.

**Parameters**

-   **member\_id\_or\_username** (`string`, required) The ID or username of the Trello member whose board stars are to be listed.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.StarTrelloBoardForMember



Star a Trello board on behalf of a specified member.

**Parameters**

-   **board\_id\_to\_star** (`string`, required) The unique identifier of the Trello board to be starred.
-   **board\_star\_position** (`string`, required) Specify the position of the starred board: `top`, `bottom`, or a positive float for custom positioning.
-   **member\_id\_or\_username** (`string`, required) The ID or username of the Trello member for whom the board is being starred.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetSpecificBoardStar



Retrieve details of a specific board star.

**Parameters**

-   **board\_star\_id** (`string`, required) The ID of the board star to retrieve details for.
-   **member\_id\_or\_username** (`string`, required) The ID or username of the member to retrieve the board star for.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.UpdateStarredBoardPosition



Update the position of a starred board in Trello.

**Parameters**

-   **board\_star\_id** (`string`, required) The unique identifier for the board star to update.
-   **member\_id\_or\_username** (`string`, required) The ID or username of the Trello member to update the board position for.
-   **new\_board\_position** (`string`, optional) The new position for the starred board. Options are `top`, `bottom`, or a positive float for custom positioning.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.UnstarBoard



Unstar a Trello board for a specific member.

**Parameters**

-   **board\_star\_id** (`string`, required) The unique ID of the board star to be removed for a specific member.
-   **member\_id** (`string`, required) The ID or username of the Trello member who wants to unstar the board.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.ListUserBoards



Retrieve boards a user is a member of on Trello.

**Parameters**

-   **member\_identifier** (`string`, required) The ID or username of the Trello member whose boards are to be retrieved.
-   **board\_fields** (`string`, optional) Specify `all` or a comma-separated list of board fields to include in the response. Available fields include ‘id’, ‘name’, ‘desc’, ‘descData’, ‘closed’, ‘idMemberCreator’, ‘idOrganization’, ‘pinned’, ‘url’, ‘shortUrl’, ‘prefs’, ‘labelNames’, ‘starred’, ‘limits’, ‘memberships’, ‘enterpriseOwned’.
-   **board\_filter** (`string`, optional) Filter boards by specifying ‘all’ or a comma-separated list of statuses like ‘closed’, ‘members’, ‘open’, etc.
-   **include\_lists** (`string`, optional) Specify which lists to include with the boards. Options: `all`, `closed`, `none`, `open`.
-   **include\_organization** (`boolean`, optional) Set to true to include the Organization object with the Boards.
-   **organization\_fields\_to\_include** (`string`, optional) Specifies which organization fields to include, either `all` or a comma-separated list of specific fields like `id` and `name`.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetMemberInvitedBoards



Retrieve boards a member is invited to on Trello.

**Parameters**

-   **member\_identifier** (`string`, required) The ID or username of the Trello member to retrieve invited boards for.
-   **board\_fields\_option** (`string`, optional) Specify ‘all’ or provide a comma-separated list of board fields to retrieve (e.g., ‘id,name,desc’).

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetMemberCards



Retrieve cards associated with a specific member on Trello.

**Parameters**

-   **member\_id\_or\_username** (`string`, required) The ID or username of the Trello member to retrieve cards for.
-   **card\_status\_filter** (`string`, optional) Filter cards by status: `all`, `closed`, `complete`, `incomplete`, `none`, `open`, or `visible`.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetCustomBoardBackgrounds



Retrieve a member’s custom board backgrounds on Trello.

**Parameters**

-   **member\_identifier** (`string`, required) The ID or username of the member to retrieve custom board backgrounds for.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.UploadCustomBoardBackground



Upload a new custom board background to Trello.

**Parameters**

-   **background\_file\_upload** (`string`, required) The file path or URL of the custom board background to upload. It should specify the location of the image file you want to use as the board background.
-   **member\_id\_or\_username** (`string`, required) The ID or username of the Trello member for whom the background is being uploaded.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetCustomBoardBackground



Get a specific custom board background from Trello.

**Parameters**

-   **custom\_background\_id** (`string`, required) The unique identifier for the custom board background to retrieve.
-   **member\_id\_or\_username** (`string`, required) The ID or username of the Trello member to retrieve the custom board background for.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.UpdateCustomBoardBackground



Update a specific custom board background in Trello.

**Parameters**

-   **custom\_background\_id** (`string`, required) The ID of the custom board background to be updated in Trello.
-   **member\_id\_or\_username** (`string`, required) The Trello ID or username of the member whose board background will be updated.
-   **background\_brightness** (`string`, optional) Set the brightness of the custom board background. Options: ‘dark’, ‘light’, ‘unknown’.
-   **tile\_background** (`boolean`, optional) Indicates whether to tile the board background. Accepts a boolean value.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.RemoveCustomBoardBackground



Delete a specific custom board background.

**Parameters**

-   **custom\_background\_id** (`string`, required) The ID of the custom board background to be deleted.
-   **member\_id\_or\_username** (`string`, required) The ID or username of the member whose custom board background will be deleted.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetMemberCustomEmojis



Retrieve a Trello member’s uploaded custom emojis.

**Parameters**

-   **member\_id\_or\_username** (`string`, required) The ID or username of the Trello member whose custom emojis are being retrieved.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.CreateCustomEmojiTrello



Create a new custom emoji in Trello.

**Parameters**

-   **emoji\_image\_file** (`string`, required) Path or URL to the image file for the emoji. The image must be in a supported format.
-   **emoji\_name** (`string`, required) Provide a name for the emoji, between 2 and 64 characters.
-   **member\_identifier** (`string`, required) The ID or username of the Trello member to whom the emoji will be added.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetMemberCustomEmoji



Retrieve a custom emoji for a Trello member.

**Parameters**

-   **custom\_emoji\_id** (`string`, required) The unique identifier for a member’s custom emoji on Trello.
-   **member\_id\_or\_username** (`string`, required) The ID or username of the Trello member whose custom emoji you want to retrieve.
-   **emoji\_fields** (`string`, optional) Specify `all` or a comma-separated list of `name`, `url` to determine which fields to return for the custom emoji.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetMemberUploadedStickers



Retrieve a Trello member’s uploaded stickers.

**Parameters**

-   **member\_id\_or\_username** (`string`, required) The ID or username of the Trello member whose stickers you want to retrieve.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.UploadCustomStickerToTrello



Upload a new custom sticker to a Trello member’s account.

**Parameters**

-   **custom\_sticker\_file\_path** (`string`, required) The file path or URL of the custom sticker to be uploaded for the Trello member.
-   **member\_id\_or\_username** (`string`, required) The ID or username of the Trello member to whom the custom sticker will be uploaded.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetMemberCustomSticker



Retrieve a member’s custom sticker from Trello.

**Parameters**

-   **member\_id\_or\_username** (`string`, required) The ID or username of the Trello member whose custom sticker is to be retrieved.
-   **sticker\_id** (`string`, required) The unique identifier for the uploaded sticker. Required to fetch the sticker’s details.
-   **sticker\_fields** (`string`, optional) Specify ‘all’ or a comma-separated list of ‘scaled’, ‘url’ to determine which sticker details to retrieve.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.DeleteCustomSticker



Deletes a custom sticker from a Trello member’s account.

**Parameters**

-   **member\_id\_or\_username** (`string`, required) The ID or username of the Trello member whose sticker is to be deleted.
-   **sticker\_id** (`string`, required) The unique identifier of the uploaded sticker to be deleted.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetMemberNotifications



Retrieve a Trello member’s notifications.

**Parameters**

-   **member\_identifier** (`string`, required) The ID or username of the Trello member to fetch notifications for.
-   **include\_display** (`boolean`, optional) Boolean to include display-related data in the response.
-   **include\_entities** (`boolean`, optional) Include entities in the member’s notifications when set to true.
-   **include\_member\_creator\_details** (`boolean`, optional) A boolean to include details of the member who created the notifications. True to include, False to exclude.
-   **member\_creator\_fields** (`string`, optional) Specify ‘all’ or provide a comma-separated list of member fields to include in the response.
-   **notification\_fields** (`string`, optional) Specify `all` or a comma-separated list of notification fields to retrieve.
-   **notification\_filter** (`string`, optional) Specify the type of notifications to retrieve: all, createCard, commentCard, etc.
-   **notification\_id\_before** (`string`, optional) Set to retrieve notifications sent before this specific notification ID.
-   **notification\_limit** (`integer`, optional) The maximum number of notifications to retrieve, capped at 1000.
-   **notification\_read\_status\_filter** (`string`, optional) Specify read status to filter notifications: `all`, `read`, or `unread`.
-   **page\_number** (`integer`, optional) The page number for pagination. Maximum value is 100.
-   **since\_notification\_id** (`string`, optional) A notification ID to start retrieving notifications from. Useful for fetching notifications after a specific point.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetMemberWorkspaces



Retrieve a member’s workspaces from Trello.

**Parameters**

-   **member\_id\_or\_username** (`string`, required) The ID or username of the Trello member to retrieve workspaces for.
-   **include\_paid\_account\_info** (`boolean`, optional) Include paid account information in the returned workspace object if set to true.
-   **organization\_fields** (`string`, optional) Specify ‘all’ or a comma-separated list of organization fields like ‘id’, ‘name’.
-   **workspace\_filter** (`string`, optional) Specify the type of workspaces to include. Options: `all`, `members` (private), `none`, `public`.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetInvitedWorkspaces



Retrieve a member’s invited Workspaces.

**Parameters**

-   **member\_identifier** (`string`, required) The ID or username of the Trello member to retrieve their invited Workspaces.
-   **organization\_fields** (`string`, optional) Specifies the fields to retrieve for each organization. Use ‘all’ or a comma-separated list like ‘id,name’.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.ListMemberSavedSearches



Retrieve a Trello member’s saved searches.

**Parameters**

-   **member\_id\_or\_username** (`string`, required) The ID or username of the Trello member whose saved searches you want to retrieve.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.CreateSavedSearch



Create a saved search for a Trello member.

**Parameters**

-   **member\_id\_or\_username** (`string`, required) The ID or username of the Trello member for whom the saved search is created.
-   **saved\_search\_name** (`string`, required) The title for the saved search to be created for a Trello member.
-   **saved\_search\_position** (`string`, required) Specify the position of the saved search. Can be ‘top’, ‘bottom’, or a positive float for custom placement.
-   **search\_query** (`string`, required) The search query to be saved for the Trello member.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetSavedSearch



Retrieve the details of a saved search from Trello.

**Parameters**

-   **member\_id\_or\_username** (`string`, required) The ID or username of the Trello member whose saved search you want to retrieve.
-   **saved\_search\_id** (`string`, required) The ID of the saved search to retrieve information about.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.UpdateSavedSearch



Update the details of a saved search in Trello.

**Parameters**

-   **member\_id\_or\_username** (`string`, required) The ID or username of the member whose saved search is being updated.
-   **saved\_search\_id** (`string`, required) The unique identifier of the saved search to be updated in Trello.
-   **new\_position\_for\_saved\_search** (`string`, optional) Specify the new position for the saved search: ‘top’, ‘bottom’, or a positive float for a custom placement.
-   **new\_saved\_search\_name** (`string`, optional) The new name for the saved search.
-   **new\_search\_query** (`string`, optional) The new search query to update the saved search in Trello.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.DeleteSavedSearchOnTrello



Remove a saved search from a Trello member account.

**Parameters**

-   **member\_id\_or\_username** (`string`, required) The ID or username identifying the member whose saved search is to be deleted.
-   **saved\_search\_id** (`string`, required) The unique identifier of the saved search to delete from a Trello member’s account.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetMemberAppTokens



Retrieve a Trello member’s app tokens list.

**Parameters**

-   **member\_id\_or\_username** (`string`, required) The ID or username of the Trello member to retrieve app tokens for.
-   **include\_webhooks** (`boolean`, optional) Set to true to include webhooks in the response; false to exclude them.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.CreateMemberAvatar



Create a new avatar for a Trello member.

**Parameters**

-   **avatar\_image\_file** (`string`, required) A string representing the image file data for the member’s new avatar. It should be a file path or base64-encoded image.
-   **member\_id\_or\_username** (`string`, required) The ID or username of the Trello member for whom you want to create an avatar. This identifies the member uniquely.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.DismissTrelloMessage



Dismiss a specific message in Trello for a member.

**Parameters**

-   **member\_id\_or\_username** (`string`, required) The ID or username of the Trello member whose message is being dismissed.
-   **message\_to\_dismiss** (`string`, required) The specific message to dismiss for a Trello member.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetMemberNotificationSettings



Retrieve a Trello member’s notification settings.

**Parameters**

-   **member\_identifier** (`string`, required) The ID or username of the Trello member to retrieve notification settings for.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.UpdateMemberNotificationBlockedKeys



Update a member’s blocked notification keys on Trello.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **member\_identifier** (`string`, optional) The unique ID or username of the Trello member to update notification settings for. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetTrelloMemberNotificationSettings



Retrieve blocked notification keys for a Trello member’s channel.

**Parameters**

-   **member\_id\_or\_username** (`string`, required) The ID or username of the Trello member to retrieve notification settings for.
-   **notification\_channel** (`string`, required) Specify the channel to block notifications on for the Trello member. Accepted value: ‘email’.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.UpdateTrelloMemberNotificationSettings



Update blocked notification keys for a Trello member’s channel.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **member\_id\_or\_username** (`string`, optional) The ID or username of the Trello member whose notification settings will be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **notification\_channel** (`string`, optional) Specify the channel where notifications should be blocked, e.g., ‘email’. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.ModifyMemberNotificationsTrello



Update a member’s blocked notification keys on Trello.

**Parameters**

-   **blocked\_notification\_keys** (`string`, required) List the notification keys to block, either as a singular key or comma-separated list. Valid keys include: notification\_comment\_card, notification\_added\_a\_due\_date, notification\_changed\_due\_date, and others.
-   **member\_id\_or\_username** (`string`, required) The ID or username of the Trello member whose notification settings will be updated.
-   **notification\_channel** (`string`, required) Specify the channel to block notifications on, such as ‘email’.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetTrelloNotification



Retrieve detailed Trello notification information by ID.

**Parameters**

-   **notification\_id** (`string`, required) The unique identifier for the Trello notification you want to retrieve.
-   **board\_fields\_list** (`string`, optional) Specify ‘all’ or a comma-separated list of board fields to include.
-   **card\_fields\_to\_include** (`string`, optional) Specify `all` or a comma-separated list of card fields to include, such as `id`, `name`, or `due`.
-   **include\_board\_object** (`boolean`, optional) Include the board object in the response if true.
-   **include\_card** (`boolean`, optional) Specify True to include the card object.
-   **include\_creator\_member** (`boolean`, optional) Set to true to include the member object of the creator in the response.
-   **include\_display\_object** (`boolean`, optional) Set to true to include the display object with the results.
-   **include\_entities\_object** (`boolean`, optional) Include the entities object in the notification results. Set to true to include, false to exclude.
-   **include\_list\_object** (`boolean`, optional) Include the list object in the notification data if set to true.
-   **include\_member\_fields** (`string`, optional) Specify ‘all’ or a comma-separated list of member fields to include in the response.
-   **include\_member\_object** (`boolean`, optional) Include the member object in the notification details if set to true.
-   **include\_notification\_fields** (`string`, optional) Specify ‘all’ or a comma-separated list of notification fields to include, such as ‘id’, ‘unread’, or ‘type’.
-   **include\_organization** (`boolean`, optional) Set to true to include the organization object in the response.
-   **member\_creator\_fields** (`string`, optional) Specify ‘all’ or a comma-separated list of member fields to include the member object of the creator.
-   **organization\_fields** (`string`, optional) Specify `all` or a comma-separated list of organization fields (e.g., `id`, `name`) to include in the response.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.UpdateNotificationReadStatus



Update the read status of a Trello notification.

**Parameters**

-   **notification\_id** (`string`, required) The unique identifier for the Trello notification to update.
-   **mark\_as\_unread** (`boolean`, optional) Set to false to mark the notification as read, or true to mark as unread.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetTrelloNotificationProperty



Retrieve a specific property of a Trello notification.

**Parameters**

-   **notification\_id** (`string`, required) The unique identifier of the Trello notification to query.
-   **notification\_property\_field** (`string`, required) Specify the property field of the Trello notification to retrieve. Options include: id, unread, type, date, dateRead, data, card, board, idMemberCreator, idAction, reactions.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.MarkAllNotificationsRead



Marks all Trello notifications as read.

**Parameters**

-   **mark\_as\_read** (`boolean`, optional) Specify true to mark notifications as read or false to mark as unread. Defaults to true.
-   **notification\_ids** (`array[string]`, optional) A list of notification IDs to mark as read or unread. Useful for grouping related notifications.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.MarkNotificationAsUnread



Mark a Trello notification as unread.

**Parameters**

-   **notification\_id** (`string`, required) The unique ID of the Trello notification you want to mark as unread.
-   **notification\_read\_status** (`string`, optional) Set this to an empty string to mark the notification as unread. This is a required field to change the read status.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetBoardFromNotification



Retrieve the board linked to a specific notification.

**Parameters**

-   **notification\_id** (`string`, required) The unique identifier of the Trello notification to retrieve associated board details.
-   **board\_fields** (`string`, optional) Specify ‘all’ or a comma-separated list of board fields (e.g., ‘name,desc,url’).

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetNotificationCard



Retrieve the card linked to a specific notification.

**Parameters**

-   **notification\_id** (`string`, required) The unique ID of the notification for which the associated card details are being fetched.
-   **card\_fields** (`string`, optional) Specify ‘all’ or a comma-separated list of card fields like ‘id’, ‘name’, etc., to retrieve.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetTrelloNotificationList



Retrieve the list a Trello notification is associated with.

**Parameters**

-   **notification\_id** (`string`, required) The ID of the Trello notification to retrieve the associated list for.
-   **notification\_fields** (`string`, optional) Specify `all` or a comma-separated list of fields for the list associated with the notification.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetNotificationMemberDetails



Retrieve information about the member involved in a notification.

**Parameters**

-   **notification\_id** (`string`, required) The ID of the Trello notification to get details about the member involved.
-   **member\_fields** (`string`, optional) Specify ‘all’ or a comma-separated list of member fields to retrieve.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetNotificationCreator



Retrieve the creator of a Trello notification.

**Parameters**

-   **notification\_id** (`string`, required) The ID of the Trello notification to retrieve the creator’s details.
-   **member\_fields** (`string`, optional) Specify `all` or a comma-separated list of member fields to retrieve.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetAssociatedOrganizationNotifications



Retrieve the organization associated with a notification.

**Parameters**

-   **notification\_id** (`string`, required) Provide the ID of the Trello notification to retrieve its associated organization.
-   **organization\_fields** (`string`, optional) Specify ‘all’ or a comma-separated list of organization fields (‘id’, ‘name’) to retrieve.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.CreateWorkspaceTrello



Create a new Trello Workspace.

**Parameters**

-   **display\_name** (`string`, required) The name to display for the Trello Workspace. This is how the Workspace will be labeled in Trello.
-   **website\_url** (`string`, optional) A URL for the workspace starting with `http://` or `https://`.
-   **workspace\_description** (`string`, optional) A detailed description for the Trello Workspace.
-   **workspace\_name** (`string`, optional) A lowercase alphanumeric string, min 3 characters, underscores allowed. Invalid characters are removed. Unique name is substituted if conflict occurs.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetOrganizationDetails



Retrieve details about a Trello organization.

**Parameters**

-   **organization\_id\_or\_name** (`string`, required) The unique ID or name of the Trello organization to retrieve details for.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.UpdateOrganizationTrello



Updates an organization’s details in Trello.

**Parameters**

-   **organization\_id\_or\_name** (`string`, required) The ID or name of the Trello organization to update.
-   **google\_apps\_associated\_domain** (`string`, optional) The Google Apps domain to link this organization to.
-   **google\_apps\_version** (`integer`, optional) Set the Google Apps version to `1` or `2` for the organization.
-   **new\_display\_name** (`string`, optional) A new display name for the organization. It must be at least 1 character long without leading or trailing spaces.
-   **organization\_description** (`string`, optional) A new description for the organization. Provide relevant and concise details.
-   **organization\_invite\_restriction** (`string`, optional) An email address with optional wildcard characters to restrict organization invites. Example: `subdomain.*.trello.com`
-   **organization\_new\_name** (`string`, optional) A unique name for the organization with at least 3 lowercase letters, underscores, and numbers.
-   **organization\_website** (`string`, optional) A URL for the organization starting with `http://`, `https://`, or `null`.
-   **prevent\_external\_members** (`boolean`, optional) Set to true to prevent non-workspace members from being added to boards inside the Workspace.
-   **private\_board\_visibility** (`string`, optional) Specifies who can create private boards in the organization. Options: `admin`, `none`, `org`.
-   **public\_board\_visibility\_permission** (`string`, optional) Who on the Workspace can create public boards. Options are: `admin`, `none`, `org`.
-   **workspace\_board\_visibility\_restriction** (`string`, optional) Determines who in the Workspace can create Workspace-visible boards. Accepts one of: `admin`, `none`, `org`.
-   **workspace\_visibility\_permission** (`string`, optional) Set the visibility level of the Workspace page. Accepts ‘private’ or ‘public’.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.DeleteTrelloOrganization



Delete an organization in Trello using its ID.

**Parameters**

-   **organization\_identifier** (`string`, required) The ID or name of the organization to delete in Trello.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetOrganizationField



Retrieve a specific field from a Trello organization.

**Parameters**

-   **organization\_field** (`string`, required) Specify the field of the organization to retrieve, such as ‘id’ or ‘name’.
-   **organization\_identifier** (`string`, required) The unique ID or name of the Trello organization to retrieve information from.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.ListWorkspaceActions



Retrieve actions related to a specific Trello Workspace.

**Parameters**

-   **organization\_id\_or\_name** (`string`, required) The ID or name of the Trello Workspace to list actions for.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.ListWorkspaceBoards



Retrieve boards in a specified Trello Workspace.

**Parameters**

-   **workspace\_identifier** (`string`, required) The ID or name of the Trello Workspace to retrieve boards from.
-   **board\_fields** (`string`, optional) Specify ‘all’ or a comma-separated list of board fields such as ‘id’, ‘name’, ‘desc’, etc. This determines which fields to include in the response.
-   **board\_filter** (`string`, optional) Specify `all` or a comma-separated list of `open`, `closed`, `members`, `organization`, `public` to filter board types.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.StartOrganizationCsvExport



Initiate CSV export for a Trello organization.

**Parameters**

-   **workspace\_id\_or\_name** (`string`, required) The ID or name of the Trello Workspace to export data from.
-   **include\_attachments** (`boolean`, optional) Set to true to include attachments in the CSV export, otherwise set to false.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.RetrieveOrganizationExports



Retrieve exports for a Trello organization.

**Parameters**

-   **workspace\_identifier** (`string`, required) The identifier for the Trello Workspace, which can be either its ID or name.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.ListWorkspaceMembers



Retrieve members of a Trello Workspace by ID.

**Parameters**

-   **workspace\_id\_or\_name** (`string`, required) The ID or name of the Trello Workspace to retrieve members from.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.UpdateOrganizationMembers



Update members of a Trello organization.

**Parameters**

-   **member\_email** (`string`, required) The email address of the member to be updated in the organization.
-   **member\_full\_name** (`string`, required) The full name of the member, at least 1 character not beginning or ending with a space.
-   **organization\_id\_or\_name** (`string`, required) The ID or name of the Trello organization to update members for.
-   **member\_role** (`string`, optional) Specify the role of the member, either `admin` or `normal`.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.ListWorkspaceMemberships



Retrieve memberships of a Trello Workspace.

**Parameters**

-   **organization\_id\_or\_name** (`string`, required) The ID or name of the Trello Workspace you want to retrieve memberships for.
-   **include\_member\_objects** (`boolean`, optional) Whether to include Member objects with the Workspace memberships. `True` to include, `False` to exclude.
-   **membership\_filter** (`string`, optional) Filter memberships: use `all` or a comma-separated list of `active`, `admin`, `deactivated`, `me`, `normal`.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetOrganizationMembership



Retrieve a specific membership for an organization.

**Parameters**

-   **membership\_id** (`string`, required) The ID of the membership to retrieve details for a specific organization.
-   **organization\_id\_or\_name** (`string`, required) The unique ID or name of the organization to fetch membership details for.
-   **include\_member\_object** (`boolean`, optional) Include the Member object in the response when set to true.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetWorkspacePluginData



Retrieve organization scoped plugin data for a Trello workspace.

**Parameters**

-   **organization\_id\_or\_name** (`string`, required) The ID or name of the organization in Trello to retrieve plugin data for a workspace.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.ListOrganizationCollections



List collections or tags for a specified organization on Trello.

**Parameters**

-   **organization\_id\_or\_name** (`string`, required) The ID or name of the Trello organization to list collections for.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.CreateOrganizationTag



Create a new tag within a specific Trello organization.

**Parameters**

-   **organization\_id\_or\_name** (`string`, required) The ID or name of the Trello organization where the tag will be created.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.AddOrUpdateWorkspaceMember



Add or update a member in a Trello Workspace.

**Parameters**

-   **member\_id\_or\_username** (`string`, required) The ID or username of the member to add or update in the Trello Workspace.
-   **member\_role\_type** (`string`, required) Specify the role of the member in the workspace. Acceptable values are ‘admin’ or ‘normal’.
-   **organization\_id\_or\_name** (`string`, required) The ID or name of the Trello organization to which the member will be added or updated.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.RemoveMemberFromWorkspace



Remove a member from a Trello Workspace.

**Parameters**

-   **member\_id** (`string`, required) The ID of the member to remove from the Trello Workspace.
-   **workspace\_identifier** (`string`, required) The ID or name of the Trello Workspace to identify the organization for removal of a member.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.UpdateWorkspaceMemberStatus



Deactivate or reactivate a member of a workspace.

**Parameters**

-   **deactivate\_member** (`boolean`, required) Set to true to deactivate the member or false to reactivate the member in the workspace.
-   **member\_id\_or\_username** (`string`, required) The ID or username of the member whose status needs to be updated in the workspace.
-   **organization\_id\_or\_name** (`string`, required) The ID or name of the organization within Trello to update the member status.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.SetWorkplaceLogo



Set the logo image for a Workspace.

**Parameters**

-   **workspace\_identifier** (`string`, required) The ID or name of the Trello Workspace for which to set the logo.
-   **logo\_image\_file** (`string`, optional) The image file to set as the Workspace logo. Provide the file path or URL of the image.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.DeleteWorkspaceLogo



Remove the logo from a Trello Workspace.

**Parameters**

-   **workspace\_id\_or\_name** (`string`, required) The ID or name of the Trello Workspace to delete the logo from.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.DeleteMemberFromWorkspace



Remove a member from a Workspace and all Workspace boards.

**Parameters**

-   **member\_id\_to\_remove** (`string`, required) The ID of the member to be removed from the Workspace.
-   **organization\_id\_or\_name** (`string`, required) The ID or name of the Trello organization (Workspace) from which the member is to be removed.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.RemoveWorkspaceDomain



Remove the associated Google Apps domain from a Workspace.

**Parameters**

-   **organization\_id\_or\_name** (`string`, required) The ID or name of the Trello organization to dissociate the Google Apps domain from.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.RemoveEmailDomainRestriction



Remove email domain restriction for Workspace invites.

**Parameters**

-   **organization\_id\_or\_name** (`string`, required) The ID or name of the Trello organization to remove the email domain restriction from.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.DeleteOrganizationTag



Delete a specified tag from an organization.

**Parameters**

-   **organization\_id\_or\_name** (`string`, required) The ID or name of the organization from which to delete the tag.
-   **tag\_id\_to\_delete** (`string`, required) The ID of the tag to be removed from the organization.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.CheckBoardBillableGuests



Check if a board has new billable guests.

**Parameters**

-   **board\_id** (`string`, required) The ID of the Trello board to check for new billable guests.
-   **organization\_id\_or\_name** (`string`, required) The ID or name of the Trello organization to check for new billable guests on the board.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetTrelloPluginInfo



Retrieve information about a specific Trello plugin.

**Parameters**

-   **organization\_id\_or\_name** (`string`, required) The ID or name of the organization for which the plugin information is requested.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.UpdateTrelloPlugin



Update a specific plugin on Trello.

**Parameters**

-   **organization\_identifier** (`string`, required) The ID or name of the organization associated with the plugin to update.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.CreateTrelloPluginListing



Create a new listing for a Trello Power-Up.

**Parameters**

-   **power\_up\_id** (`string`, required) The ID of the Power-Up for which you are creating a new listing.
-   **listing\_locale** (`string`, optional) The specific locale code (e.g., ‘en-US’) for which the listing should be displayed.
-   **locale\_description** (`string`, optional) The description for the Power-Up listing in the specified locale.
-   **overview\_for\_locale** (`string`, optional) The overview text to display for the specified locale. Provide a concise summary relevant to the plugin.
-   **plugin\_locale\_name** (`string`, optional) The name for the Power-Up listing in the specified locale.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetPluginMemberPrivacyCompliance



Retrieve a plugin’s member privacy compliance status.

**Parameters**

-   **power\_up\_id** (`string`, required) The unique identifier of the Power-Up to check member privacy compliance.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.UpdatePowerUpListing



Update an existing listing for a Trello Power-Up.

**Parameters**

-   **listing\_id** (`string`, required) The ID of the existing listing for the Power-Up that is being updated.
-   **power\_up\_id** (`string`, required) The ID of the Power-Up whose listing is being updated.
-   **listing\_description** (`string`, optional) The description to show for the specified locale of the Power-Up listing.
-   **listing\_locale** (`string`, optional) The locale code for displaying the listing, e.g., ‘en’ for English.
-   **localized\_name** (`string`, optional) The name of the listing to display for the specified locale.
-   **overview\_for\_locale** (`string`, optional) Provide the overview text for the specified locale to update the listing.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.TrelloSearch



Search for information within Trello.

**Parameters**

-   **search\_query** (`string`, required) The search query string, with a length between 1 and 16384 characters.
-   **board\_fields\_selection** (`string`, optional) Comma-separated list of board fields to return or ‘all’ for every field. Options include: closed, dateLastActivity, etc.
-   **board\_identifiers** (`string`, optional) Specify ‘mine’ to search all your boards or provide a comma-separated list of Board IDs.
-   **card\_fields** (`string`, optional) Specify ‘all’ or a comma-separated list of card fields like ‘badges’, ‘desc’, ‘labels’. Defaults to ‘all’ if omitted.
-   **card\_ids** (`string`, optional) Comma-separated list of Trello Card IDs to search within.
-   **cards\_page\_number** (`number`, optional) Specify the page number for card search results. Maximum value is 100.
-   **enable\_partial\_search** (`boolean`, optional) Enable partial search to match content starting with words in your query, allowing for more flexible search results.
-   **include\_card\_attachments** (`string`, optional) Specify ‘true’ to include all attachment objects, ‘cover’ for only card cover attachments, or ‘false’ for no attachments.
-   **include\_card\_list** (`boolean`, optional) Include the parent list with card results. A boolean value (true or false).
-   **include\_card\_members** (`boolean`, optional) Include member objects with card results if set to true; exclude them if false.
-   **include\_card\_stickers** (`boolean`, optional) Set to true to include sticker objects with card results. Set to false to exclude them.
-   **include\_parent\_board\_with\_card\_results** (`boolean`, optional) Set to true to include parent board details in card results.
-   **include\_parent\_organization\_with\_board\_results** (`boolean`, optional) Include the parent organization in the board results. Set to true to include, false to exclude.
-   **max\_members\_returned** (`integer`, optional) The maximum number of members to return in the search results. Maximum value is 1000.
-   **max\_workspaces\_to\_return** (`integer`, optional) The maximum number of Workspaces to return. Accepts an integer up to 1000.
-   **maximum\_boards\_returned** (`integer`, optional) The maximum number of boards to return. Must be an integer up to 1000.
-   **maximum\_cards\_to\_return** (`integer`, optional) The maximum number of cards to return. Maximum value is 1000.
-   **member\_fields\_selection** (`string`, optional) Specify which member fields to return. Options: `all` or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url, username.
-   **organization\_fields\_to\_return** (`string`, optional) Specify ‘all’ or a comma-separated list of organization attributes like ‘billableMemberCount’, ‘desc’, ‘displayName’, etc., to include in the results.
-   **organization\_ids** (`string`, optional) A comma-separated list of Trello Organization IDs to filter the search results.
-   **trello\_object\_types** (`string`, optional) Specify types of Trello objects to search, such as ‘all’, ‘actions’, ‘boards’, ‘cards’, ‘members’, or ‘organizations’. Use a comma-separated list.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.SearchTrelloMembers



Search and retrieve Trello member information.

**Parameters**

-   **search\_query** (`string`, required) The search term for finding Trello members, between 1 and 16384 characters long.
-   **board\_id** (`string`, optional) The ID of the Trello board to filter members by. Leave empty to include all boards.
-   **organization\_id** (`string`, optional) Unique identifier for the organization to filter the search results. Use this to limit the search to members within a specific organization.
-   **restrict\_to\_organization\_members** (`boolean`, optional) If true, limit the search results to include only members of the organization.
-   **result\_limit** (`integer`, optional) Specify the maximum number of Trello member search results to return, with a maximum of 20.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.RetrieveTrelloTokenInfo



Retrieve information about a Trello token.

**Parameters**

-   **trello\_token** (`string`, required) The unique identifier for the Trello token to retrieve information about.
-   **include\_webhooks** (`boolean`, optional) Set to true to include webhooks in the response; false to exclude them.
-   **retrieve\_fields** (`string`, optional) Specify ‘all’ or a comma-separated list of fields: dateCreated, dateExpires, idMember, identifier, permissions.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetTrelloTokenOwner



Retrieve information about a Trello token’s owner.

**Parameters**

-   **trello\_token** (`string`, required) The unique Trello token to identify and retrieve the owner information. Must be a valid string.
-   **retrieve\_fields** (`string`, optional) Specify ‘all’ or a comma-separated list of Trello member fields to retrieve, such as ‘id’.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.RetrieveTokenWebhooks



Retrieve all webhooks created with a specific token.

**Parameters**

-   **trello\_token** (`string`, required) The Trello token used to retrieve associated webhooks. It identifies the user’s session and permissions.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.CreateTrelloWebhook



Create a new webhook for a Trello token.

**Parameters**

-   **object\_id\_for\_webhook** (`string`, required) ID of the Trello object (board or card) to create a webhook on.
-   **trello\_token** (`string`, required) The authentication token for Trello. It allows access to create the webhook. Required for authorization.
-   **webhook\_callback\_url** (`string`, required) The URL where the webhook will POST updates. Ensure it’s a valid and accessible URL.
-   **webhook\_description** (`string`, optional) A string description displayed when retrieving information about the webhook. It helps identify the purpose or function of the webhook.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.RetrieveTrelloWebhook



Retrieve details of a specific Trello webhook.

**Parameters**

-   **trello\_token** (`string`, required) The Trello API token used to authenticate the request and retrieve the webhook details.
-   **webhook\_id** (`string`, required) The ID of the Trello webhook you want to retrieve details for.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.DeleteTrelloWebhook



Delete a specific Trello webhook.

**Parameters**

-   **access\_token** (`string`, required) The access token used for authentication. It identifies the user and grants permission to delete the webhook.
-   **webhook\_id** (`string`, required) The unique ID of the Trello webhook you wish to delete.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.UpdateTrelloWebhook



Update a Trello webhook using a specific token.

**Parameters**

-   **authentication\_token** (`string`, required) The token used for authenticating the request to update the webhook in Trello. Required for authorization.
-   **webhook\_id** (`string`, required) The ID of the Trello webhook to be updated. Used to identify which webhook to modify.
-   **callback\_url** (`string`, optional) The URL where the webhook will POST data. Ensure the URL is accessible and correct.
-   **object\_id\_for\_webhook** (`string`, optional) ID of the Trello object (e.g., board, card) associated with the webhook.
-   **webhook\_description** (`string`, optional) A description to be displayed when retrieving information about the webhook.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.DeleteTrelloToken



Deletes a Trello token to revoke access.

**Parameters**

-   **trello\_token\_to\_delete** (`string`, required) The Trello token string that needs to be deleted to revoke access.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.AddTrelloWebhook



Create a new webhook on Trello.

**Parameters**

-   **callback\_url** (`string`, required) A valid URL that supports `HEAD` and `POST` requests for webhook notifications.
-   **model\_id\_to\_monitor** (`string`, required) ID of the Trello model (board, card, etc.) to monitor for changes.
-   **is\_webhook\_active** (`boolean`, optional) A boolean to specify whether the webhook is active and sending POST requests.
-   **webhook\_description** (`string`, optional) A description of the webhook, up to 16384 characters long.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetTrelloWebhookById



Retrieve details of a Trello webhook by its ID.

**Parameters**

-   **webhook\_id** (`string`, required) The unique identifier for the Trello webhook to retrieve.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.ModifyTrelloWebhook



Updates a Trello webhook by its ID.

**Parameters**

-   **webhook\_id** (`string`, required) The ID of the Trello webhook to update. This identifies which webhook’s settings you want to modify.
-   **activate\_webhook** (`boolean`, optional) Set to true to activate the webhook and enable sending POST requests, or false to deactivate.
-   **callback\_url** (`string`, optional) A valid URL that is reachable with a `HEAD` and `POST` request, used to receive webhook data.
-   **model\_id** (`string`, optional) ID of the model to be monitored for webhook updates.
-   **webhook\_description** (`string`, optional) A string describing the webhook, with a length from 0 to 16384 characters.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.RemoveTrelloWebhook



Delete a Trello webhook by ID.

**Parameters**

-   **webhook\_id** (`string`, required) The ID of the Trello webhook you want to delete.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

## TrelloApi.GetWebhookField



Retrieve a specific field from a Trello webhook.

**Parameters**

-   **webhook\_field\_to\_retrieve** (`string`, required) Specify which field to retrieve from the webhook. Options are: `active`, `callbackURL`, `description`, `idModel`.
-   **webhook\_id** (`string`, required) ID of the Trello webhook to retrieve information from.

**Secrets**

This tool requires the following secrets: `TRELLO_API_KEY`, `TRELLO_API_TOKEN`. You can obtain these from the [Trello Power-Ups Admin Portal](https://trello.com/power-ups/admin)  or directly at [trello.com/app-key](https://trello.com/app-key) . See the [Authentication section](#authentication) above for detailed instructions and the [Trello API documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)  for more information.

* * *

## Authentication

The Arcade Trello API MCP Server requires two environment variables to authenticate with the Trello API:

-   `TRELLO_API_KEY`
-   `TRELLO_API_TOKEN`

**How to obtain your credentials:**

1.  Log in to your [Trello account](https://trello.com/)
     
2.  Navigate to the [Power-Ups Admin Portal](https://trello.com/power-ups/admin)
     
3.  Click on “New” to create a new Power-Up or select an existing one
4.  In your Power-Up settings, go to the **API Key** tab
5.  Your **API Key** will be displayed
6.  Click on “Token” link to generate a **Token** (this will require authorization)
7.  Authorize the token with the required scopes
8.  Copy both the API Key and Token for use in your configuration

Alternatively, you can directly access your API key at: [https://trello.com/app-key](https://trello.com/app-key) 

For more details, see the [Trello API Authentication documentation](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/) .

## Reference

Below is a reference of enumerations used by some of the tools in the TrelloApi MCP Server:

### ToolMode

-   **GET\_REQUEST\_SCHEMA**: `get_request_schema`
-   **EXECUTE**: `execute`

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_trello_api ``` Learn more](/guides/deployment-hosting.md)

Last updated on January 5, 2026

[TicktickApi](/en/resources/integrations/productivity/ticktick-api.md)
[XeroApi](/en/resources/integrations/productivity/xero-api.md)
