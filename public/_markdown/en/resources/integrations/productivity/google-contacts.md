---
title: "Google Contacts"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Productivity & Docs](/en/resources/integrations/productivity/asana.md)
Google Contacts

# Google Contacts

Arcade Optimized

**Description:** Enable agents to interact with Google Contacts.

**Author:** Arcade

**Auth:** User authorization via the [Google auth provider](/references/auth-providers/google.md)

[![PyPI Version](https://img.shields.io/pypi/v/arcade_google_contacts)](https://pypi.org/project/arcade_google_contacts/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_google_contacts)](https://pypi.org/project/arcade_google_contacts/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_google_contacts)](https://pypi.org/project/arcade_google_contacts/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_google_contacts)](https://pypi.org/project/arcade_google_contacts/)

The Arcade Google Contacts MCP Server provides a pre-built set of tools for interacting with Google Contacts. These tools make it easy to build agents and AI apps that can:

-   Create new contacts
-   Search for contacts by name or email

## Available Tools

These tools are currently available in the Arcade Google Contacts MCP Sever.

Tool Name

Description

GoogleContacts.SearchContactsByEmail

Search the user's contacts in Google Contacts by email address.

GoogleContacts.SearchContactsByName

Search the user's contacts in Google Contacts by name.

GoogleContacts.SearchContactsByPhoneNumber

Search the user's contacts in Google Contacts by phone number.

GoogleContacts.CreateContact

Create a new contact record in Google Contacts.

GoogleContacts.WhoAmI

Get comprehensive user profile and Google Contacts environment information.

If you need to perform an action that’s not listed here, you can [get in touch with us](mailto:contact@arcade.dev) to request a new tool, or [create your own tools](/guides/create-tools/tool-basics/build-mcp-server.md) with the [Google auth provider](/references/auth-providers/google.md#using-google-auth-in-custom-tools).

Each tool requires specific Google OAuth scopes to function. You’ll find the required scopes listed in a blue info box at the end of each tool’s documentation below. For more information about configuring OAuth and tips for moving to production, see the \[Google auth provider documentation\](/references/auth-providers/google.

## Find required scopes

Select the tools you plan to use to see the OAuth scopes your application needs:

### Scope calculator

Select the tools you plan to use to see the required OAuth scopes.

SearchContactsByEmailSearchContactsByNameSearchContactsByPhoneNumberCreateContactWhoAmI

#### Required scopes

Select tools above to see required scopes

* * *

## GoogleContacts.SearchContactsByEmail

Search the user’s contacts in Google Contacts by email address.

**Parameters**

-   **`email`** _(string, required)_: The email address to search for.
-   **`limit`** _(integer, optional)_: The maximum number of contacts to return (30 is the max allowed by the Google API).

`https://www.googleapis.com/auth/contacts.readonly`

* * *

## GoogleContacts.SearchContactsByName

Search the user’s contacts in Google Contacts by name.

**Parameters**

-   **`name`** _(string, required)_: The full name to search for.
-   **`limit`** _(integer, optional)_: The maximum number of contacts to return (30 is the max allowed by the Google API).

`https://www.googleapis.com/auth/contacts.readonly`

* * *

## GoogleContacts.CreateContact

Create a new contact record in Google Contacts.

**Parameters**

-   **`given_name`** _(string, required)_: The given name of the contact.
-   **`family_name`** _(string, optional)_: The optional family name of the contact.
-   **`email`** _(string, optional)_: The optional email address of the contact.
-   **`phone_number`** _(string, optional)_: The optional phone\_number address of the contact.

`https://www.googleapis.com/auth/contacts`

* * *

## GoogleContacts.WhoAmI



Get comprehensive user profile and Google Contacts environment information.

**Parameters**

This tool does not take any parameters.

-   `https://www.googleapis.com/auth/contacts.readonly`
-   `https://www.googleapis.com/auth/userinfo.profile`
-   `https://www.googleapis.com/auth/userinfo.email`

* * *

## Auth

The Arcade Google Contacts MCP Sever uses the \[Google auth provider\](/references/auth-providers/google to connect to users’ Google accounts.

With the Arcade Cloud Platform, there’s nothing to configure. Your users will see `Arcade` as the name of the application that’s requesting permission.

With a self-hosted installation of Arcade, you need to [configure the Google auth provider](/references/auth-providers/google.md#configuring-google-auth) with your own Google app credentials.

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_google_contacts ``` Learn more](/guides/deployment-hosting.md)

Last updated on February 6, 2026

[Reference](/en/resources/integrations/productivity/google-calendar/reference.md)
[Google Docs](/en/resources/integrations/productivity/google-docs.md)
