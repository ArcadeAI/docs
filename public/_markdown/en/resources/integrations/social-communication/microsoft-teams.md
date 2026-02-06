---
title: "Microsoft Teams"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Social & Communication](/en/resources/integrations/social-communication/discord.md)
Microsoft Teams

# Microsoft Teams

Arcade Optimized

**Description:** Enable agents to interact with MicrosoftTeams

**Author:** Arcade

**Auth:** User authorization

[![PyPI Version](https://img.shields.io/pypi/v/arcade_microsoft_teams)](https://pypi.org/project/arcade_microsoft_teams/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_microsoft_teams)](https://pypi.org/project/arcade_microsoft_teams/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_microsoft_teams)](https://pypi.org/project/arcade_microsoft_teams/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_microsoft_teams)](https://pypi.org/project/arcade_microsoft_teams/)

The Microsoft Teams MCP Server provides a comprehensive set of tools for interacting with Microsoft Teams. Users can efficiently manage teams, channels, and chats, enabling them to:

-   Retrieve information about teams, channels, and chats.
-   List, search, and manage users and teams.
-   Send and reply to messages in both channels and chats.
-   Access and search for messages across chats and channels.
-   Create new chats and retrieve metadata about existing chats and channels.

This MCP Sever streamlines collaboration and communication within Microsoft Teams, making it easier to manage interactions and information flow.

The Microsoft Teams MCP Server requires a Microsoft 365 account. Personal Microsoft accounts are not supported.

## Available Tools

Tool Name

Description

MicrosoftTeams.WhoAmI

Get information about the current user and their Microsoft Teams environment.

MicrosoftTeams.GetSignedInUser

Get the user currently signed in Microsoft Teams.

MicrosoftTeams.ListUsers

Lists the users in the Microsoft Teams tenant.

MicrosoftTeams.SearchUsers

Searches for users in the Microsoft Teams tenant.

MicrosoftTeams.GetChannelMetadata

Retrieves metadata about a Microsoft Teams channel and its members.

MicrosoftTeams.ListChannels

Lists channels in Microsoft Teams (including shared incoming channels).

MicrosoftTeams.SearchChannels

Searches for channels in a given Microsoft Teams team.

MicrosoftTeams.GetChannelMessages

Retrieves the messages in a Microsoft Teams channel.

MicrosoftTeams.GetChannelMessageReplies

Retrieves the replies to a Microsoft Teams channel message.

MicrosoftTeams.SendMessageToChannel

Sends a message to a Microsoft Teams channel.

MicrosoftTeams.ReplyToChannelMessage

Sends a reply to a Microsoft Teams channel message.

MicrosoftTeams.ListTeams

Lists the teams the current user is associated with in Microsoft Teams.

MicrosoftTeams.SearchTeams

Searches for teams available to the current user in Microsoft Teams.

MicrosoftTeams.GetTeam

Retrieves metadata about a team in Microsoft Teams.

MicrosoftTeams.ListTeamMembers

Lists the members of a team in Microsoft Teams.

MicrosoftTeams.SearchTeamMembers

Searches for members of a team in Microsoft Teams.

MicrosoftTeams.GetChatMessageById

Retrieves a Microsoft Teams chat message.

MicrosoftTeams.GetChatMessages

Retrieves messages from a Microsoft Teams chat (individual or group).

MicrosoftTeams.GetChatMetadata

Retrieves metadata about a Microsoft Teams chat.

MicrosoftTeams.ListChats

List the Microsoft Teams chats to which the current user is a member of.

MicrosoftTeams.SendMessageToChat

Sends a message to a Microsoft Teams chat.

MicrosoftTeams.ReplyToChatMessage

Sends a reply to a Microsoft Teams chat message.

MicrosoftTeams.CreateChat

Creates a Microsoft Teams chat.

MicrosoftTeams.SearchPeople

Searches for people the user has interacted with in Microsoft Teams and other 365 products.

MicrosoftTeams.SearchMessages

Searches for messages across Microsoft Teams chats and channels.

If you need to perform an action that’s not listed here, you can [get in touch with us](mailto:contact@arcade.dev) to request a new tool, or [create your own tools](/guides/create-tools/tool-basics/build-mcp-server.md).

## MicrosoftTeams.WhoAmI



Get information about the current user and their Microsoft Teams environment.

**Parameters**

This tool does not take any parameters.

## MicrosoftTeams.GetSignedInUser



Get the user currently signed in Microsoft Teams.

**Parameters**

This tool does not take any parameters.

## MicrosoftTeams.ListUsers



Lists the users in the Microsoft Teams tenant.

**Parameters**

-   **limit** (`integer`, optional) The maximum number of users to return. Defaults to 50, max is 100.
-   **offset** (`integer`, optional) The offset to start from.

## MicrosoftTeams.SearchUsers



Searches for users in the Microsoft Teams tenant.

**Parameters**

-   **keywords** (`array[string]`, required) The keywords to match against users’ names.
-   **match\_type** (`Enum` [PartialMatchType](/resources/integrations/social-communication/microsoft-teams/reference.md#PartialMatchType)
    , optional) The type of match to use for the keywords. Defaults to match\_any\_of\_the\_keywords.
-   **limit** (`integer`, optional) The maximum number of users to return. Defaults to 50, max is 999.
-   **offset** (`integer`, optional) The offset to start from.

## MicrosoftTeams.GetChannelMetadata



Retrieves metadata about a Microsoft Teams channel and its members.

**Parameters**

-   **channel\_id** (`string`, optional) The ID of the channel to get. Provide either this or channel\_name.
-   **channel\_name** (`string`, optional) The name of the channel to get. Provide either this or channel\_id.
-   **team\_id\_or\_name** (`string`, optional) The ID or name of the team to get the channel of (optional). If not provided: in case the user is a member of a single team, the tool will use it; otherwise an error will be returned with a list of all teams to pick from.

## MicrosoftTeams.ListChannels



Lists channels in Microsoft Teams (including shared incoming channels).

**Parameters**

-   **limit** (`integer`, optional) The maximum number of channels to return. Defaults to 50, max is 100.
-   **offset** (`integer`, optional) The offset to start from.
-   **team\_id\_or\_name** (`string`, optional) The ID or name of the team to list the channels of (optional). If not provided: in case the user is a member of a single team, the tool will use it; otherwise an error will be returned with a list of all teams to pick from.

## MicrosoftTeams.SearchChannels



Searches for channels in a given Microsoft Teams team.

**Parameters**

-   **keywords** (`array[string]`, required) The keywords to search for in channel names.
-   **match\_type** (`Enum` [MatchType](/resources/integrations/social-communication/microsoft-teams/reference.md#MatchType)
    , optional) The type of match to use for the search. Defaults to ‘partial\_match\_all\_keywords’.
-   **limit** (`integer`, optional) The maximum number of channels to return. Defaults to 50. Max of 100.
-   **offset** (`integer`, optional) The offset to start from.
-   **team\_id\_or\_name** (`string`, optional) The ID or name of the team to search the channels of (optional). If not provided: in case the user is a member of a single team, the tool will use it; otherwise an error will be returned with a list of all teams to pick from.

## MicrosoftTeams.GetChannelMessages



Retrieves the messages in a Microsoft Teams channel.

**Parameters**

-   **channel\_id** (`string`, optional) The ID of the channel to get the messages of.
-   **channel\_name** (`string`, optional) The name of the channel to get the messages of.
-   **limit** (`integer`, optional) The maximum number of messages to return. Defaults to 50, max is 50.
-   **team\_id\_or\_name** (`string`, optional) The ID or name of the team to get the messages of. If not provided: in case the user is a member of a single team, the tool will use it; otherwise an error will be returned with a list of all teams to pick from.

## MicrosoftTeams.GetChannelMessageReplies



Retrieves the replies to a Microsoft Teams channel message.

**Parameters**

-   **message\_id** (`string`, required) The ID of the message to get the replies of.
-   **channel\_id\_or\_name** (`string`, required) The ID or name of the channel to get the replies of.
-   **team\_id\_or\_name** (`string`, optional) The ID or name of the team to get the replies of. If not provided: in case the user is a member of a single team, the tool will use it; otherwise an error will be returned with a list of all teams to pick from.

## MicrosoftTeams.SendMessageToChannel



Sends a message to a Microsoft Teams channel.

**Parameters**

-   **message** (`string`, required) The message to send to the channel.
-   **channel\_id\_or\_name** (`string`, required) The ID or name of the channel to send the message to.
-   **team\_id\_or\_name** (`string`, optional) The ID or name of the team to send the message to. If not provided: in case the user is a member of a single team, the tool will use it; otherwise an error will be returned with a list of all teams to pick from.

## MicrosoftTeams.ReplyToChannelMessage



Sends a reply to a Microsoft Teams channel message.

**Parameters**

-   **reply\_content** (`string`, required) The content of the reply message.
-   **message\_id** (`string`, required) The ID of the message to reply to.
-   **channel\_id\_or\_name** (`string`, required) The ID or name of the channel to send the message to.
-   **team\_id\_or\_name** (`string`, optional) The ID or name of the team to send the message to. If not provided: in case the user is a member of a single team, the tool will use it; otherwise an error will be returned with a list of all teams to pick from.

## MicrosoftTeams.ListTeams



Lists the teams the current user is associated with in Microsoft Teams.

**Parameters**

-   **membership\_type** (`Enum` [TeamMembershipType](/resources/integrations/social-communication/microsoft-teams/reference.md#TeamMembershipType)
    , optional) The type of membership to filter by. Defaults to ‘direct\_member\_of\_the\_team’.

## MicrosoftTeams.SearchTeams



Searches for teams available to the current user in Microsoft Teams.

**Parameters**

-   **team\_name\_starts\_with** (`string`, required) The prefix to match the name of the teams.
-   **limit** (`integer`, optional) The maximum number of teams to return. Defaults to 10, max is 50.
-   **next\_page\_token** (`string`, optional) The token to use to get the next page of results.

## MicrosoftTeams.GetTeam



Retrieves metadata about a team in Microsoft Teams.

**Parameters**

-   **team\_id** (`string`, optional) The ID of the team to get.
-   **team\_name** (`string`, optional) The name of the team to get. Prefer providing a team\_id, when available, for optimal performance.

## MicrosoftTeams.ListTeamMembers



Lists the members of a team in Microsoft Teams.

**Parameters**

-   **team\_id** (`string`, optional) The ID of the team to list the members of.
-   **team\_name** (`string`, optional) The name of the team to list the members of. Prefer providing a team\_id, when available, for optimal performance.
-   **limit** (`integer`, optional) The maximum number of members to return. Defaults to 50, max is 999.
-   **offset** (`integer`, optional) The number of members to skip. Defaults to 0.

## MicrosoftTeams.SearchTeamMembers



Searches for members of a team in Microsoft Teams.

**Parameters**

-   **member\_name\_starts\_with** (`string`, required) The prefix to match the name of the members.
-   **team\_id** (`string`, optional) The ID of the team to list the members of.
-   **team\_name** (`string`, optional) The name of the team to list the members of. Prefer providing a team\_id, when available, for optimal performance.
-   **limit** (`integer`, optional) The maximum number of members to return. Defaults to 50, max is 100.
-   **offset** (`integer`, optional) The number of members to skip. Defaults to 0.

## MicrosoftTeams.GetChatMessageById



Retrieves a Microsoft Teams chat message.

**Parameters**

-   **message\_id** (`string`, required) The ID of the message to get.
-   **chat\_id** (`string`, required) The ID of the chat to get the message from.
-   **user\_ids** (`array[string]`, optional) The IDs of the users in the chat to get the message from.
-   **user\_names** (`array[string]`, optional) The names of the users in the chat to get the message from. Prefer providing user\_ids, when available, since the performance is better.

## MicrosoftTeams.GetChatMessages



Retrieves messages from a Microsoft Teams chat (individual or group).

**Parameters**

-   **chat\_id** (`string`, optional) The ID of the chat to get messages from.
-   **user\_ids** (`array[string]`, optional) The IDs of the users in the chat to get messages from.
-   **user\_names** (`array[string]`, optional) The names of the users in the chat to get messages from. Prefer providing user\_ids, when available, since the performance is better.
-   **start\_datetime** (`string`, optional) The start date to filter messages. Provide a string in the format ‘YYYY-MM-DD’ or ‘YYYY-MM-DD HH:MM:SS’. Defaults to None (no start date filter).
-   **end\_datetime** (`string`, optional) The end date to filter messages. Provide a string in the format ‘YYYY-MM-DD’ or ‘YYYY-MM-DD HH:MM:SS’. Defaults to None (no end date filter).
-   **limit** (`integer`, optional) The maximum number of messages to return. Defaults to 50, max is 50.

## MicrosoftTeams.GetChatMetadata



Retrieves metadata about a Microsoft Teams chat.

**Parameters**

-   **chat\_id** (`string`, optional) The ID of the chat to get metadata about.
-   **user\_ids** (`array[string]`, optional) The IDs of the users in the chat to get metadata about.
-   **user\_names** (`array[string]`, optional) The names of the users in the chat to get messages from. Prefer providing user\_ids, when available, since the performance is better.

## MicrosoftTeams.ListChats



List the Microsoft Teams chats to which the current user is a member of.

**Parameters**

-   **limit** (`integer`, optional) The maximum number of chats to return. Defaults to 50, max is 50.
-   **next\_page\_token** (`string`, optional) The token to use to get the next page of results.

## MicrosoftTeams.SendMessageToChat



Sends a message to a Microsoft Teams chat.

**Parameters**

-   **message** (`string`, required) The message to send to the chat.
-   **chat\_id** (`string`, optional) The ID of the chat to send the message.
-   **user\_ids** (`array[string]`, optional) The IDs of the users in the chat to send the message.
-   **user\_names** (`array[string]`, optional) The names of the users in the chat to send the message. Prefer providing user\_ids, when available, since the performance is better.

## MicrosoftTeams.ReplyToChatMessage



Sends a reply to a Microsoft Teams chat message.

**Parameters**

-   **reply\_content** (`string`, required) The content of the reply message.
-   **message\_id** (`string`, required) The ID of the message to reply to.
-   **chat\_id** (`string`, optional) The ID of the chat to send the message.
-   **user\_ids** (`array[string]`, optional) The IDs of the users in the chat to send the message.
-   **user\_names** (`array[string]`, optional) The names of the users in the chat to send the message. Prefer providing user\_ids, when available, since the performance is better.

## MicrosoftTeams.CreateChat



Creates a Microsoft Teams chat.

**Parameters**

-   **user\_ids** (`array[string]`, optional) The IDs of the users to create a chat with.
-   **user\_names** (`array[string]`, optional) The names of the users to create a chat with.

## MicrosoftTeams.SearchPeople



Searches for people the user has interacted with in Microsoft Teams and other 365 products.

**Parameters**

-   **keywords** (`array[string]`, required) The keywords to match against people’s names. Provide one or more expressions.
-   **match\_type** (`Enum` [PartialMatchType](/resources/integrations/social-communication/microsoft-teams/reference.md#PartialMatchType)
    , optional) The type of match to use for the keywords. Defaults to match\_any\_of\_the\_keywords.
-   **limit** (`integer`, optional) The maximum number of people to return. Defaults to 50, max is 100.
-   **next\_page\_token** (`string`, optional) The next page token to use for pagination.

## MicrosoftTeams.SearchMessages



Searches for messages across Microsoft Teams chats and channels.

**Parameters**

-   **keywords** (`string`, required) The keywords to match against messages’ content.
-   **limit** (`integer`, optional) The maximum number of messages to return. Defaults to 50, max is 50.
-   **offset** (`integer`, optional) The offset to start from.

## Auth

The Arcade MicrosoftTeams MCP Sever uses the [Microsoft auth provider](/references/auth-providers/microsoft.md) to connect to users’ MicrosoftTeams accounts. Please refer to the [Microsoft auth provider](/references/auth-providers/microsoft.md) documentation to learn how to configure auth.

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_microsoft_teams ``` Learn more](/guides/deployment-hosting.md)

Last updated on February 6, 2026

[LinkedIn](/en/resources/integrations/social-communication/linkedin.md)
[Reference](/en/resources/integrations/social-communication/microsoft-teams/reference.md)
