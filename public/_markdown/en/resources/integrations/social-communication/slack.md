---
title: "Slack"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Social & Communication](/en/resources/integrations/social-communication/discord.md)
Slack

# Slack

Arcade Optimized

**Description:** Enable agents to interact with Slack

**Author:** Arcade

**Auth:** User authorization

[![PyPI Version](https://img.shields.io/pypi/v/arcade_slack)](https://pypi.org/project/arcade_slack/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_slack)](https://pypi.org/project/arcade_slack/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_slack)](https://pypi.org/project/arcade_slack/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_slack)](https://pypi.org/project/arcade_slack/)

The Slack MCP Server provides a comprehensive set of tools for interacting with the Slack platform, enabling users and AI applications to efficiently manage conversations and user information. With this MCP Sever, you can:

-   Retrieve detailed information about users, including their IDs, usernames, and emails.
-   List all users in your Slack team and get users in specific conversations.
-   Send messages to channels, direct messages, or multi-person conversations.
-   Access messages and metadata from various conversations, including channels and direct messages.
-   Manage and list conversations, including public and private channels.

This MCP Sever streamlines communication and enhances collaboration within Slack.

## Available Tools

Tool Name

Description

Slack.WhoAmI

Get comprehensive user profile.

Slack.GetUsersInfo

Get the information of one or more users in Slack by ID, username, and/or email.

Slack.ListUsers

List all users in the authenticated user's Slack team.

Slack.SendMessage

Send a message to a Channel, Direct Message (IM/DM), or Multi-Person (MPIM) conversation

Slack.GetUsersInConversation

Get the users in a Slack conversation (Channel, DM/IM, or MPIM) by its ID or by channel name.

Slack.GetMessages

Get messages in a Slack Channel, DM (direct message) or MPIM (multi-person) conversation.

Slack.GetConversationMetadata

Get metadata of a Channel, a Direct Message (IM / DM) or a Multi-Person (MPIM) conversation.

Slack.ListConversations

List metadata for Slack conversations (channels, DMs, MPIMs) the user is a member of.

Slack.GetUserInfoById

Get the information of a user in Slack.

Slack.SendDmToUser

Send a direct message to a user in Slack.

Slack.SendMessageToChannel

Send a message to a channel in Slack.

Slack.GetMembersInConversationById

Get the members of a conversation in Slack by the conversation's ID.

Slack.GetMembersInChannelByName

Get the members of a conversation in Slack by the conversation's name.

Slack.GetMessagesInChannelByName

Get the messages in a channel by the channel's name.

Slack.GetMessagesInConversationById

Get the messages in a conversation by the conversation's ID.

Slack.GetMessagesInDirectMessageConversationByUsername

Get the messages in a direct conversation by the user's name.

Slack.GetMessagesInMultiPersonDmConversationByUsernames

Get the messages in a multi-person direct message conversation by the usernames.

Slack.ListConversationsMetadata

List Slack conversations (channels, DMs, MPIMs) the user is a member of.

Slack.ListPublicChannelsMetadata

List metadata for public channels in Slack that the user is a member of.

Slack.ListPrivateChannelsMetadata

List metadata for private channels in Slack that the user is a member of.

Slack.ListGroupDirectMessageConversationsMetadata

List metadata for group direct message conversations that the user is a member of.

Slack.ListDirectMessageConversationsMetadata

List metadata for direct message conversations in Slack that the user is a member of.

Slack.GetConversationMetadataById

Get the metadata of a conversation in Slack searching by its ID.

Slack.GetChannelMetadataByName

Get the metadata of a channel in Slack searching by its name.

Slack.GetDirectMessageConversationMetadataByUsername

Get the metadata of a direct message conversation in Slack by the username.

Slack.GetMultiPersonDmConversationMetadataByUsernames

Get the metadata of a multi-person direct message conversation in Slack by the usernames.

If you need to perform an action that’s not listed here, you can [get in touch with us](mailto:contact@arcade.dev) to request a new tool, or [create your own tools](/guides/create-tools/tool-basics/build-mcp-server.md).

## Slack.WhoAmI



Get comprehensive user profile information.

**Parameters**

This tool takes no parameters.

## Slack.GetUsersInfo



Get the information of one or more users in Slack by ID, username, and/or email.

**Parameters**

-   **user\_ids** (`array[string]`, optional) The IDs of the users to get
-   **usernames** (`array[string]`, optional) The usernames of the users to get. Prefer retrieving by user\_ids and/or emails, when available, since the performance is better.
-   **emails** (`array[string]`, optional) The emails of the users to get

## Slack.ListUsers



List all users in the authenticated user’s Slack team.

**Parameters**

-   **exclude\_bots** (`boolean`, optional) Whether to exclude bots from the results. Defaults to True.
-   **limit** (`integer`, optional) The maximum number of users to return. Defaults to 200. Maximum is 500.
-   **next\_cursor** (`string`, optional) The next cursor token to use for pagination.

## Slack.SendMessage



Send a message to a Channel, Direct Message (IM/DM), or Multi-Person (MPIM) conversation.

Provide exactly one of:

-   channel\_name; or
-   conversation\_id; or
-   any combination of user\_ids, usernames, and/or emails.

In case multiple user\_ids, usernames, and/or emails are provided, the tool will open a multi-person conversation with the specified people and send the message to it.

To improve performance, prefer providing a conversation\_id over a channel\_name, when available. When referencing users, prefer providing user\_ids and/or emails, when possible.

**Parameters**

-   **message** (`string`, required) The content of the message to send.
-   **channel\_name** (`string`, optional) The channel name to send the message to. Prefer providing a conversation\_id, when available, since the performance is better.
-   **conversation\_id** (`string`, optional) The conversation ID to send the message to.
-   **user\_ids** (`array[string]`, optional) The Slack user IDs of the people to message.
-   **emails** (`array[string]`, optional) The emails of the people to message.
-   **usernames** (`array[string]`, optional) The Slack usernames of the people to message. Prefer providing user\_ids and/or emails, when available, since the performance is better.

## Slack.GetUsersInConversation



Get the users in a Slack conversation (Channel, DM/IM, or MPIM) by its ID or by channel name.

Provide exactly one of conversation\_id or channel\_name. Prefer providing a conversation\_id, when available, since the performance is better.

**Parameters**

-   **conversation\_id** (`string`, optional) The ID of the conversation to get users in.
-   **channel\_name** (`string`, optional) The name of the channel to get users in. Prefer providing a conversation\_id, when available, since the performance is better.
-   **limit** (`integer`, optional) The maximum number of users to return. Defaults to 200. Maximum is 500.
-   **next\_cursor** (`string`, optional) The cursor to use for pagination.

## Slack.GetMessages



Get messages in a Slack Channel, DM (direct message) or MPIM (multi-person) conversation.

Provide exactly one of:

-   conversation\_id; or
-   channel\_name; or
-   any combination of user\_ids, usernames, and/or emails.

To improve performance, prefer providing a conversation\_id over a channel\_name, when available. When referencing users, prefer providing user\_ids and/or emails, when possible.

**Parameters**

-   **conversation\_id** (`string`, optional) The ID of the conversation to get messages from. Provide exactly one of conversation\_id OR any combination of user\_ids, usernames, and/or emails.
-   **channel\_name** (`string`, optional) The name of the channel to get messages from. Prefer providing a conversation\_id, when available, since the performance is better.
-   **user\_ids** (`array[string]`, optional) The IDs of the users in the conversation to get messages from.
-   **usernames** (`array[string]`, optional) The usernames of the users in the conversation to get messages from. Prefer providinguser\_ids and/or emails, when available, since the performance is better.
-   **emails** (`array[string]`, optional) The emails of the users in the conversation to get messages from.
-   **oldest\_relative** (`string`, optional) The oldest message to include in the results, specified as a time offset from the current time in the format ‘DD:HH:MM’
-   **latest\_relative** (`string`, optional) The latest message to include in the results, specified as a time offset from the current time in the format ‘DD:HH:MM’
-   **oldest\_datetime** (`string`, optional) The oldest message to include in the results, specified as a datetime object in the format ‘YYYY-MM-DD HH:MM:SS’
-   **latest\_datetime** (`string`, optional) The latest message to include in the results, specified as a datetime object in the format ‘YYYY-MM-DD HH:MM:SS’
-   **limit** (`integer`, optional) The maximum number of messages to return. Defaults to 20. Maximum is 100.
-   **next\_cursor** (`string`, optional) The cursor to use for pagination.

**Notes about the date/time filtering parameters:**

To filter messages by an absolute datetime, use ‘oldest\_datetime’ and/or ‘latest\_datetime’. If only ‘oldest\_datetime’ is provided, it will return messages from the oldest\_datetime to the current time. If only ‘latest\_datetime’ is provided, it will return messages since the beginning of the conversation to the latest\_datetime.

To filter messages by a relative datetime (e.g. 3 days ago, 1 hour ago, etc.), use ‘oldest\_relative’ and/or ‘latest\_relative’. If only ‘oldest\_relative’ is provided, it will return messages from the oldest\_relative to the current time. If only ‘latest\_relative’ is provided, it will return messages from the current time to the latest\_relative.

Do not provide both ‘oldest\_datetime’ and ‘oldest\_relative’ or both ‘latest\_datetime’ and ‘latest\_relative’.

Leave all arguments with the default None to get messages without date/time filtering

## Slack.GetConversationMetadata



Get metadata of a Channel, a Direct Message (IM / DM) or a Multi-Person (MPIM) conversation.

Provide exactly one of:

-   conversation\_id; or
-   channel\_name; or
-   any combination of user\_ids, usernames, and/or emails.

To improve performance, prefer providing a conversation\_id over a channel\_name, when available. When referencing users, prefer providing user\_ids and/or emails, when possible.

**Parameters**

-   **conversation\_id** (`string`, optional) The ID of the conversation to get metadata for
-   **channel\_name** (`string`, optional) The name of the channel to get metadata for. Prefer providing a conversation\_id, when available, since the performance is better.
-   **usernames** (`array[string]`, optional) The usernames of the users to get the conversation metadata. Prefer providing user\_ids and/or emails, when available, since the performance is better.
-   **emails** (`array[string]`, optional) The emails of the users to get the conversation metadata.
-   **user\_ids** (`array[string]`, optional) The IDs of the users to get the conversation metadata.

## Slack.ListConversations



List metadata for Slack conversations (channels, DMs, MPIMs) the user is a member of.

**Parameters**

-   **conversation\_types** (`Enum` [ConversationType](/resources/integrations/social-communication/slack/reference.md#ConversationType)
    , optional) Optionally filter by the type(s) of conversations. Defaults to None (all types).
-   **limit** (`integer`, optional) The maximum number of conversations to list. Defaults to 200. Maximum is 500.
-   **next\_cursor** (`string`, optional) The cursor to use for pagination.

## Slack.GetUserInfoById

This tool is marked for deprecation and will be removed in a future release. Please use [Slack.GetUsersInfo](#slackgetusersinfo) instead.



Get the information of a user in Slack.

**Parameters**

-   **user\_id** (`string`, required) The ID of the user to get

## Slack.SendDmToUser

This tool is marked for deprecation and will be removed in a future release. Please use [Slack.SendMessage](#slacksendmessage) instead.



Send a direct message to a user in Slack.

**Parameters**

-   **user\_name** (`string`, required) The Slack username of the person you want to message. Slack usernames are ALWAYS lowercase.
-   **message** (`string`, required) The message you want to send

## Slack.SendMessageToChannel

This tool is marked for deprecation and will be removed in a future release. Please use [Slack.SendMessage](#slacksendmessage) instead.



Send a message to a channel in Slack.

**Parameters**

-   **channel\_name** (`string`, required) The Slack channel name where you want to send the message.
-   **message** (`string`, required) The message you want to send

## Slack.GetMembersInConversationById

This tool is marked for deprecation and will be removed in a future release. Please use [Slack.GetUsersInConversation](#slackgetusersinconversation) instead.



Get the members of a conversation in Slack by the conversation’s ID.

**Parameters**

-   **conversation\_id** (`string`, required) The ID of the conversation to get members for
-   **limit** (`integer`, optional) The maximum number of members to return.
-   **next\_cursor** (`string`, optional) The cursor to use for pagination.

## Slack.GetMembersInChannelByName

This tool is marked for deprecation and will be removed in a future release. Please use [Slack.GetUsersInConversation](#slackgetusersinconversation) instead.



Get the members of a conversation in Slack by the conversation’s name.

**Parameters**

-   **channel\_name** (`string`, required) The name of the channel to get members for
-   **limit** (`integer`, optional) The maximum number of members to return.
-   **next\_cursor** (`string`, optional) The cursor to use for pagination.

## Slack.GetMessagesInChannelByName

This tool is marked for deprecation and will be removed in a future release. Please use [Slack.GetMessages](#slackgetmessages) instead.



Get the messages in a channel by the channel’s name.

**Parameters**

-   **channel\_name** (`string`, required) The name of the channel
-   **oldest\_relative** (`string`, optional) The oldest message to include in the results, specified as a time offset from the current time in the format ‘DD:HH:MM’
-   **latest\_relative** (`string`, optional) The latest message to include in the results, specified as a time offset from the current time in the format ‘DD:HH:MM’
-   **oldest\_datetime** (`string`, optional) The oldest message to include in the results, specified as a datetime object in the format ‘YYYY-MM-DD HH:MM:SS’
-   **latest\_datetime** (`string`, optional) The latest message to include in the results, specified as a datetime object in the format ‘YYYY-MM-DD HH:MM:SS’
-   **limit** (`integer`, optional) The maximum number of messages to return.
-   **next\_cursor** (`string`, optional) The cursor to use for pagination.

## Slack.GetMessagesInConversationById

This tool is marked for deprecation and will be removed in a future release. Please use [Slack.GetMessages](#slackgetmessages) instead.



Get the messages in a conversation by the conversation’s ID.

**Parameters**

-   **conversation\_id** (`string`, required) The ID of the conversation to get history for
-   **oldest\_relative** (`string`, optional) The oldest message to include in the results, specified as a time offset from the current time in the format ‘DD:HH:MM’
-   **latest\_relative** (`string`, optional) The latest message to include in the results, specified as a time offset from the current time in the format ‘DD:HH:MM’
-   **oldest\_datetime** (`string`, optional) The oldest message to include in the results, specified as a datetime object in the format ‘YYYY-MM-DD HH:MM:SS’
-   **latest\_datetime** (`string`, optional) The latest message to include in the results, specified as a datetime object in the format ‘YYYY-MM-DD HH:MM:SS’
-   **limit** (`integer`, optional) The maximum number of messages to return.
-   **next\_cursor** (`string`, optional) The cursor to use for pagination.

## Slack.GetMessagesInDirectMessageConversationByUsername

This tool is marked for deprecation and will be removed in a future release. Please use [Slack.GetMessages](#slackgetmessages) instead.



Get the messages in a direct conversation by the user’s name.

**Parameters**

-   **username** (`string`, required) The username of the user to get messages from
-   **oldest\_relative** (`string`, optional) The oldest message to include in the results, specified as a time offset from the current time in the format ‘DD:HH:MM’
-   **latest\_relative** (`string`, optional) The latest message to include in the results, specified as a time offset from the current time in the format ‘DD:HH:MM’
-   **oldest\_datetime** (`string`, optional) The oldest message to include in the results, specified as a datetime object in the format ‘YYYY-MM-DD HH:MM:SS’
-   **latest\_datetime** (`string`, optional) The latest message to include in the results, specified as a datetime object in the format ‘YYYY-MM-DD HH:MM:SS’
-   **limit** (`integer`, optional) The maximum number of messages to return.
-   **next\_cursor** (`string`, optional) The cursor to use for pagination.

## Slack.GetMessagesInMultiPersonDmConversationByUsernames

This tool is marked for deprecation and will be removed in a future release. Please use [Slack.GetMessages](#slackgetmessages) instead.



Get the messages in a multi-person direct message conversation by the usernames.

**Parameters**

-   **usernames** (`array[string]`, required) The usernames of the users to get messages from
-   **oldest\_relative** (`string`, optional) The oldest message to include in the results, specified as a time offset from the current time in the format ‘DD:HH:MM’
-   **latest\_relative** (`string`, optional) The latest message to include in the results, specified as a time offset from the current time in the format ‘DD:HH:MM’
-   **oldest\_datetime** (`string`, optional) The oldest message to include in the results, specified as a datetime object in the format ‘YYYY-MM-DD HH:MM:SS’
-   **latest\_datetime** (`string`, optional) The latest message to include in the results, specified as a datetime object in the format ‘YYYY-MM-DD HH:MM:SS’
-   **limit** (`integer`, optional) The maximum number of messages to return.
-   **next\_cursor** (`string`, optional) The cursor to use for pagination.

## Slack.ListConversationsMetadata

This tool is marked for deprecation and will be removed in a future release. Please use [Slack.ListConversations](#slacklistconversations) instead.



List Slack conversations (channels, DMs, MPIMs) the user is a member of.

**Parameters**

-   **conversation\_types** (`Enum` [ConversationType](/resources/integrations/social-communication/slack/reference.md#ConversationType)
    , optional) Optionally filter by the type(s) of conversations. Defaults to None (all types).
-   **limit** (`integer`, optional) The maximum number of conversations to list.
-   **next\_cursor** (`string`, optional) The cursor to use for pagination.

## Slack.ListPublicChannelsMetadata

This tool is marked for deprecation and will be removed in a future release. Please use [Slack.ListConversations](#slacklistconversations) instead.



List metadata for public channels in Slack that the user is a member of.

**Parameters**

-   **limit** (`integer`, optional) The maximum number of channels to list.

## Slack.ListPrivateChannelsMetadata

This tool is marked for deprecation and will be removed in a future release. Please use [Slack.ListConversations](#slacklistconversations) instead.



List metadata for private channels in Slack that the user is a member of.

**Parameters**

-   **limit** (`integer`, optional) The maximum number of channels to list.

## Slack.ListGroupDirectMessageConversationsMetadata

This tool is marked for deprecation and will be removed in a future release. Please use [Slack.ListConversations](#slacklistconversations) instead.



List metadata for group direct message conversations that the user is a member of.

**Parameters**

-   **limit** (`integer`, optional) The maximum number of conversations to list.

## Slack.ListDirectMessageConversationsMetadata

This tool is marked for deprecation and will be removed in a future release. Please use [Slack.ListConversations](#slacklistconversations) instead.



List metadata for direct message conversations in Slack that the user is a member of.

**Parameters**

-   **limit** (`integer`, optional) The maximum number of conversations to list.

## Slack.GetConversationMetadataById

This tool is marked for deprecation and will be removed in a future release. Please use [Slack.GetConversationMetadata](#slackgetconversationmetadata) instead.



Get the metadata of a conversation in Slack searching by its ID.

**Parameters**

-   **conversation\_id** (`string`, required) The ID of the conversation to get metadata for

## Slack.GetChannelMetadataByName

This tool is marked for deprecation and will be removed in a future release. Please use [Slack.GetConversationMetadata](#slackgetconversationmetadata) instead.



Get the metadata of a channel in Slack searching by its name.

**Parameters**

-   **channel\_name** (`string`, required) The name of the channel to get metadata for
-   **next\_cursor** (`string`, optional) The cursor to use for pagination, if continuing from a previous search.

## Slack.GetDirectMessageConversationMetadataByUsername

This tool is marked for deprecation and will be removed in a future release. Please use [Slack.GetConversationMetadata](#slackgetconversationmetadata) instead.



Get the metadata of a direct message conversation in Slack by the username.

**Parameters**

-   **username** (`string`, required) The username of the user/person to get messages with
-   **next\_cursor** (`string`, optional) The cursor to use for pagination, if continuing from a previous search.

## Slack.GetMultiPersonDmConversationMetadataByUsernames

This tool is marked for deprecation and will be removed in a future release. Please use [Slack.GetConversationMetadata](#slackgetconversationmetadata) instead.



Get the metadata of a multi-person direct message conversation in Slack by the usernames.

**Parameters**

-   **usernames** (`array[string]`, required) The usernames of the users/people to get messages with
-   **next\_cursor** (`string`, optional) The cursor to use for pagination, if continuing from a previous search.

## Auth

The Arcade Slack MCP Sever uses the [Slack auth provider](/references/auth-providers/slack.md) to connect to users’ Slack accounts. Please refer to the [Slack auth provider](/references/auth-providers/slack.md) documentation to learn how to configure auth.

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_slack ``` Learn more](/guides/deployment-hosting.md)

Last updated on February 10, 2026

[Reddit](/en/resources/integrations/social-communication/reddit.md)
[Environment Variables](/en/resources/integrations/social-communication/slack/environment-variables.md)
