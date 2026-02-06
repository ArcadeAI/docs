---
title: "HubspotConversationsApi"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Sales](/en/resources/integrations/sales/hubspot.md)
HubspotConversationsApi

# HubspotConversationsApi

Arcade Starter

**Description:** Tools that enable LLMs to interact directly with the Hubspot Conversations API

**Author:** Arcade

**Auth:** User authorization

[![PyPI Version](https://img.shields.io/pypi/v/arcade_hubspot_conversations_api)](https://pypi.org/project/arcade_hubspot_conversations_api/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_hubspot_conversations_api)](https://pypi.org/project/arcade_hubspot_conversations_api/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_hubspot_conversations_api)](https://pypi.org/project/arcade_hubspot_conversations_api/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_hubspot_conversations_api)](https://pypi.org/project/arcade_hubspot_conversations_api/)

HubspotConversationsApi is a [Starter MCP Server](/guides/create-tools/improve/types-of-tools.md#starter-tools)
: each tool mirrors one HTTP endpoint and offers LLMs a way to interact with the low-level API.



Differently from [Optimized MCP Servers](/guides/create-tools/improve/types-of-tools.md#optimized-tools)
, Starter tools are heavily influenced by the original API design, which is not usually optimized for LLM usage. For this reason, we recommend thoroughly evaluating the tools with your Agents or chatbots before using it in production. [Read more](/guides/create-tools/improve/types-of-tools.md) about Optimized vs Starter tools.

The Hubspot Conversations API MCP Server offers a comprehensive suite of tools for managing and interacting with conversation threads and channels within HubSpot. Users can perform a variety of actions, including:

-   Retrieve and manage conversation inboxes and channels.
-   Access detailed information about conversation threads and messages.
-   Send new messages and update existing ones within conversation threads.
-   Archive or restore conversation threads as needed.
-   Resolve actor details and retrieve message history for specific threads.

This MCP Server is designed to streamline communication management and enhance user engagement through HubSpot’s conversational capabilities.

## Available Tools

Tool Name

Description

HubspotConversationsApi.ListConversationInboxes

Retrieve a list of conversation inboxes.

HubspotConversationsApi.RetrieveThreadById

Retrieve detailed information about a conversation thread by ID.

HubspotConversationsApi.ArchiveConversationThread

Archives a conversation thread, marking it for deletion.

HubspotConversationsApi.UpdateConversationThread

Update the status or restore a conversation thread.

HubspotConversationsApi.RetrieveFullMessageContent

Retrieve the original text and rich text of a HubSpot message.

HubspotConversationsApi.ListConversationChannels

Retrieve a list of conversation channels from Hubspot.

HubspotConversationsApi.RetrieveActorDetails

Retrieve details of a specific actor by actor ID.

HubspotConversationsApi.RetrieveConversationThreads

Retrieve conversation threads from Hubspot Conversations.

HubspotConversationsApi.GetMessageHistoryForThread

Retrieve the message history for a specific thread.

HubspotConversationsApi.SendConversationMessage

Send a new message in a conversation thread.

HubspotConversationsApi.ResolveConversationActors

Resolve ActorIds to conversation participants.

HubspotConversationsApi.GetChannelAccountDetails

Retrieve details of a HubSpot channel account by ID.

HubspotConversationsApi.RetrieveChannelAccounts

Retrieve a list of channel accounts from Hubspot.

HubspotConversationsApi.RetrieveChannelDetails

Retrieve details of a channel using its ID.

HubspotConversationsApi.GetInboxDetails

Retrieve details of a conversation inbox by ID.

HubspotConversationsApi.RetrieveThreadMessage

Retrieve a single message from a conversation thread.

HubspotConversationsApi.GetCustomChannelMessageDetails

Retrieve details for a specific message in a custom channel.

HubspotConversationsApi.UpdateMessageStatus

Update the status of a conversation message.

HubspotConversationsApi.UpdateChannelAccountStaging

Update channel account staging token details for public apps.

HubspotConversationsApi.GetCustomChannelAccounts

Retrieve accounts for a specified custom channel.

HubspotConversationsApi.CreateChannelAccount

Create a new account for a specified communication channel.

HubspotConversationsApi.RetrieveChannelAccountDetails

Retrieve details for a specific channel account.

HubspotConversationsApi.UpdateChannelAccountInfo

Update channel account name and authorization status.

HubspotConversationsApi.PublishCustomChannelMessage

Publish a message to a custom channel on HubSpot.

If you need to perform an action that’s not listed here, you can [get in touch with us](mailto:contact@arcade.dev) to request a new tool, or [create your own tools](/guides/create-tools/tool-basics/build-mcp-server.md).

## HubspotConversationsApi.ListConversationInboxes



Retrieve a list of conversation inboxes.

**Parameters**

This tool does not take any parameters.

## HubspotConversationsApi.RetrieveThreadById



Retrieve detailed information about a conversation thread by ID.

**Parameters**

-   **conversation\_thread\_id** (`string`, required) The unique identifier for the conversation thread you wish to retrieve. Provide the specific thread ID to access its details.

## HubspotConversationsApi.ArchiveConversationThread



Archives a conversation thread, marking it for deletion.

**Parameters**

-   **thread\_identifier** (`string`, required) The unique identifier of the conversation thread to archive. This is a required field and should match the specific thread you wish to archive.

## HubspotConversationsApi.UpdateConversationThread



Update the status or restore a conversation thread.

**Parameters**

-   **thread\_identifier** (`string`, required) The unique identifier for the conversation thread to update or restore.
-   **is\_thread\_archived** (`boolean`, optional) Set to true to archive or false to restore the thread. Determines if the thread is currently archived.
-   **thread\_status** (`string`, optional) Set the thread’s status to `OPEN` or `CLOSED`.

## HubspotConversationsApi.RetrieveFullMessageContent



Retrieve the original text and rich text of a HubSpot message.

**Parameters**

-   **conversation\_thread\_id** (`string`, required) The unique identifier for the conversation thread containing the message.
-   **message\_id** (`string`, required) The unique identifier for the message. Used to retrieve the message’s full original content.

## HubspotConversationsApi.ListConversationChannels



Retrieve a list of conversation channels from Hubspot.

**Parameters**

This tool does not take any parameters.

## HubspotConversationsApi.RetrieveActorDetails



Retrieve details of a specific actor by actor ID.

**Parameters**

-   **actor\_id** (`string`, required) The unique identifier for the actor whose details are to be retrieved.

## HubspotConversationsApi.RetrieveConversationThreads



Retrieve conversation threads from Hubspot Conversations.

**Parameters**

This tool does not take any parameters.

## HubspotConversationsApi.GetMessageHistoryForThread



Retrieve the message history for a specific thread.

**Parameters**

-   **thread\_id** (`string`, required) The unique identifier for the conversation thread whose message history is to be retrieved.

## HubspotConversationsApi.SendConversationMessage



Send a new message in a conversation thread.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **thread\_id** (`string`, optional) The unique identifier for the conversation thread where the message will be sent. It should be a string that corresponds to the existing thread ID in Hubspot. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotConversationsApi.ResolveConversationActors



Resolve ActorIds to conversation participants.

**Parameters**

-   **actor\_ids** (`array[string]`, required) A list of Actor IDs to resolve into detailed participant information. Each entry should be a string representing an Actor ID.

## HubspotConversationsApi.GetChannelAccountDetails



Retrieve details of a HubSpot channel account by ID.

**Parameters**

-   **channel\_account\_id** (`string`, required) The unique ID of the HubSpot channel account to retrieve details for. This ID is required to fetch the channel account’s information.

## HubspotConversationsApi.RetrieveChannelAccounts



Retrieve a list of channel accounts from Hubspot.

**Parameters**

This tool does not take any parameters.

## HubspotConversationsApi.RetrieveChannelDetails



Retrieve details of a channel using its ID.

**Parameters**

-   **channel\_id** (`string`, required) The unique ID of the channel to retrieve details for in Hubspot Conversations.

## HubspotConversationsApi.GetInboxDetails



Retrieve details of a conversation inbox by ID.

**Parameters**

-   **inbox\_id** (`string`, required) The unique identifier for the conversation inbox you wish to retrieve details for. It should be a string representing the inbox ID.

## HubspotConversationsApi.RetrieveThreadMessage



Retrieve a single message from a conversation thread.

**Parameters**

-   **message\_id** (`string`, required) The unique identifier for the specific message within a thread. Used to retrieve message details.
-   **thread\_id** (`string`, required) The unique identifier of the conversation thread from which to retrieve the message.

## HubspotConversationsApi.GetCustomChannelMessageDetails



Retrieve details for a specific message in a custom channel.

**Parameters**

-   **channel\_id** (`string`, required) The unique identifier for the custom channel from which the message was sent. Required to fetch specific message details.
-   **message\_id** (`string`, required) The unique identifier of the message to retrieve details for. This ID is used to specify the exact message in the custom channel.

## HubspotConversationsApi.UpdateMessageStatus



Update the status of a conversation message.

**Parameters**

-   **channel\_identifier** (`string`, required) The unique identifier for the custom channel where the message is located. It is required to specify which channel the message belongs to.
-   **message\_id** (`string`, required) Unique identifier of the message to be updated.
-   **message\_status** (`string`, required) Specifies the status of the message. Valid values are SENT, FAILED, and READ.
-   **error\_message\_for\_failed\_status** (`string`, optional) Provide an error message when the status is FAILED to clarify the reason for failure. Only use this when ‘statusType’ is ‘FAILED’.

## HubspotConversationsApi.UpdateChannelAccountStaging



Update channel account staging token details for public apps.

**Parameters**

-   **account\_name** (`string`, required) The name of the account to be updated for the channel account staging token.
-   **account\_token** (`string`, required) The unique token identifying the specific channel account staging. Required for updating account details.
-   **channel\_id** (`string`, required) The unique identifier for the channel to update. This is necessary to specify which channel’s staging token details are being modified.
-   **delivery\_identifier\_type** (`string`, required) Type of delivery identifier: HS\_EMAIL\_ADDRESS, HS\_PHONE\_NUMBER, or CHANNEL\_SPECIFIC\_OPAQUE\_ID.
-   **delivery\_identifier\_value** (`string`, required) The PublicDeliveryIdentifier in string format, such as an E.164 phone number, an email address, or a channel-specific identifier.

## HubspotConversationsApi.GetCustomChannelAccounts



Retrieve accounts for a specified custom channel.

**Parameters**

-   **custom\_channel\_id** (`string`, required) The unique identifier of the custom channel to retrieve accounts for. Must be a valid string.

## HubspotConversationsApi.CreateChannelAccount



Create a new account for a specified communication channel.

**Parameters**

-   **account\_name** (`string`, required) The name of the account to be created for the channel. It identifies the account within the specified communication channel.
-   **channel\_id** (`string`, required) The unique identifier for the communication channel where the account will be created. This should be a string value.
-   **inbox\_id** (`string`, required) The unique identifier for the inbox where the channel account will be created. This should be a string that corresponds to an existing inbox in Hubspot.
-   **is\_authorized** (`boolean`, required) Boolean to indicate if the account should be authorized. Set to true for authorized accounts, false otherwise.
-   **delivery\_identifier\_type** (`string`, optional) Type of identifier: HS\_EMAIL\_ADDRESS, HS\_PHONE\_NUMBER, or CHANNEL\_SPECIFIC\_OPAQUE\_ID.
-   **delivery\_identifier\_value** (`string`, optional) A string representation of the delivery identifier. Can be an E.164 phone number, an email address, or a channel-specific identifier.

## HubspotConversationsApi.RetrieveChannelAccountDetails



Retrieve details for a specific channel account.

**Parameters**

-   **channel\_account\_id** (`string`, required) Unique identifier for the specific channel account to retrieve details about. Provided as a string.
-   **channel\_identifier** (`string`, required) The unique identifier for the channel. Used to specify which channel’s account details to retrieve.

## HubspotConversationsApi.UpdateChannelAccountInfo



Update channel account name and authorization status.

**Parameters**

-   **channel\_account\_id** (`string`, required) The unique identifier for the channel account to be updated. It is required for specifying which channel account to modify.
-   **channel\_id** (`string`, required) The unique identifier for the channel in Hubspot Conversations. Required to specify which channel account to update.
-   **channel\_account\_name** (`string`, optional) The new name for the channel account. This updates the display name associated with the account.
-   **set\_authorization\_status** (`boolean`, optional) Boolean value to update the channel account’s authorization. Set to False to disable the account.

## HubspotConversationsApi.PublishCustomChannelMessage



Publish a message to a custom channel on HubSpot.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **custom\_channel\_id** (`string`, optional) The unique ID of the custom channel where the message will be published. Must be a string. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## Reference

Below is a reference of enumerations used by some of the tools in the HubspotConversationsApi MCP Server:

### ToolMode

-   **GET\_REQUEST\_SCHEMA**: `get_request_schema`
-   **EXECUTE**: `execute`

## Auth

The HubspotConversationsApi MCP Server uses the Auth Provider with id `arcade-hubspot` to connect to users’ HubspotConversationsApi accounts. In order to use the MCP Server, you will need to configure the `arcade-hubspot` auth provider.

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_hubspot_conversations_api ``` Learn more](/guides/deployment-hosting.md)

Last updated on January 5, 2026

[HubspotCmsApi](/en/resources/integrations/sales/hubspot-cms-api.md)
[HubspotCrmApi](/en/resources/integrations/sales/hubspot-crm-api.md)
