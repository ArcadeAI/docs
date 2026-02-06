---
title: "HubspotUsersApi"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Sales](/en/resources/integrations/sales/hubspot.md)
HubspotUsersApi

# HubspotUsersApi

Arcade Unoptimized

**Description:** Tools that enable LLMs to interact directly with the Hubspot Users API

**Author:** Arcade

**Auth:** User authorization

[![PyPI Version](https://img.shields.io/pypi/v/arcade_hubspot_users_api)](https://pypi.org/project/arcade_hubspot_users_api/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_hubspot_users_api)](https://pypi.org/project/arcade_hubspot_users_api/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_hubspot_users_api)](https://pypi.org/project/arcade_hubspot_users_api/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_hubspot_users_api)](https://pypi.org/project/arcade_hubspot_users_api/)

HubspotUsersApi is a [Unoptimized MCP Server](/guides/create-tools/improve/types-of-tools.md#unoptimized-tools)
: each tool mirrors one HTTP endpoint and offers LLMs a way to interact with the low-level API.



Differently from [Optimized MCP Servers](/guides/create-tools/improve/types-of-tools.md#optimized-tools)
, Unoptimized tools are heavily influenced by the original API design, which is not usually optimized for LLM usage. For this reason, we recommend thoroughly evaluating the tools with your Agents or chatbots before using it in production. [Read more](/guides/create-tools/improve/types-of-tools.md) about Optimized vs Unoptimized tools.

The HubspotUsersApi MCP Server provides a comprehensive set of tools for managing users and teams within a HubSpot account. With this server, users can:

-   Retrieve lists of users, teams, and roles associated with the account.
-   Create new users with basic permissions.
-   Update user information and manage user accounts.
-   Remove users from the HubSpot system as needed.

This server streamlines user management and enhances team collaboration within HubSpot.

## Available Tools

Tool Name

Description

HubspotUsersApi.ViewAccountTeams

Retrieve all teams for the account.

HubspotUsersApi.GetAccountRoles

Retrieve all user roles from an account.

HubspotUsersApi.FetchHubspotUsersList

Retrieve a list of users from a HubSpot account.

HubspotUsersApi.CreateHubspotUser

Create a new user in HubSpot with basic permissions.

HubspotUsersApi.RetrieveHubspotUserById

Retrieve Hubspot user details using user ID or email.

HubspotUsersApi.UpdateHubspotUserInfo

Update information for a specified Hubspot user.

HubspotUsersApi.RemoveUserHubspot

Remove a user from HubSpot using their ID or email.

If you need to perform an action that’s not listed here, you can [get in touch with us](mailto:contact@arcade.dev) to request a new tool, or [create your own tools](/guides/create-tools/tool-basics/build-mcp-server.md).

## HubspotUsersApi.ViewAccountTeams



Retrieve all teams for the account.

**Parameters**

This tool does not take any parameters.

## HubspotUsersApi.GetAccountRoles



Retrieve all user roles from an account.

**Parameters**

This tool does not take any parameters.

## HubspotUsersApi.FetchHubspotUsersList



Retrieve a list of users from a HubSpot account.

**Parameters**

-   **page\_cursor\_after** (`string`, optional) A string token used to retrieve the next page of users, if more than 100 users are available.
-   **user\_retrieval\_limit** (`integer`, optional) Specify the maximum number of users to retrieve from the HubSpot account.

## HubspotUsersApi.CreateHubspotUser



Create a new user in HubSpot with basic permissions.

**Parameters**

-   **user\_email** (`string`, required) The email address of the user to be created in HubSpot.
-   **additional\_team\_ids** (`array[string]`, optional) List of IDs representing the user’s additional teams.
-   **last\_name** (`string`, optional) The last name of the user to be created in HubSpot.
-   **primary\_team\_id** (`string`, optional) The identifier for the user’s primary team in HubSpot.
-   **send\_welcome\_email** (`boolean`, optional) Set to true to send a welcome email prompting the user to set a password and log in.
-   **user\_first\_name** (`string`, optional) The first name of the user to be created in HubSpot.
-   **user\_role\_id** (`string`, optional) A string representing the new user’s role within HubSpot.

## HubspotUsersApi.RetrieveHubspotUserById



Retrieve Hubspot user details using user ID or email.

**Parameters**

-   **user\_identifier** (`string`, required) Identifier of the Hubspot user to retrieve. It can be the user ID or email based on the `id_property`.
-   **user\_identifier\_property** (`string`, optional) Specifies the property to identify the user: `USER_ID` (default) or `EMAIL`.

## HubspotUsersApi.UpdateHubspotUserInfo



Update information for a specified Hubspot user.

**Parameters**

-   **user\_identifier** (`string`, required) The unique identifier for the user. Can be the user’s ID or email, based on the `id_property`.
-   **additional\_teams\_ids** (`array[string]`, optional) An array of strings representing the IDs of the user’s additional teams.
-   **first\_name** (`string`, optional) The first name of the user to update. This should be a string value.
-   **last\_name** (`string`, optional) The last name of the user to be modified. This is the new value of the user’s last name.
-   **user\_identifier\_property** (`string`, optional) Specifies if the user is identified by ‘USER\_ID’ or ‘EMAIL’. Default is ‘USER\_ID’.
-   **user\_primary\_team\_id** (`string`, optional) The unique ID for the user’s primary team.
-   **user\_role\_id** (`string`, optional) The ID representing the user’s role. Used to assign the user a specific role within the system.

## HubspotUsersApi.RemoveUserHubspot



Remove a user from HubSpot using their ID or email.

**Parameters**

-   **user\_identifier** (`string`, required) Identifier of the user to remove from HubSpot. It can be a user ID or an email address.
-   **user\_identifier\_property** (`string`, optional) Specify whether to use `USER_ID` or `EMAIL` to identify the user.

## Auth

The HubspotUsersApi MCP Server uses the Auth Provider with id `arcade-hubspot` to connect to users’ HubspotUsersApi accounts. In order to use the MCP Server, you will need to configure the `arcade-hubspot` auth provider.

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_hubspot_users_api ``` Learn more](/guides/deployment-hosting.md)

Last updated on February 6, 2026

[HubspotMeetingsApi](/en/resources/integrations/sales/hubspot-meetings-api.md)
[Postgres](/en/resources/integrations/databases/postgres.md)
