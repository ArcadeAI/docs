---
title: "Salesforce CRM"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Sales](/en/resources/integrations/sales/hubspot.md)
Salesforce

# Salesforce CRM

At this time, Arcade does not offer a default Salesforce Auth Provider. To use Salesforce auth and MCP Sever, you must create a custom Auth Provider with your own Salesforce OAuth 2.0 credentials as documented in [Salesforce Auth Provider](/references/auth-providers/salesforce.md).

Arcade Optimized

**Description:** Enable agents to interact with accounts, leads, contacts, etc in the Salesforce CRM.

**Author:** Arcade

**Auth:** OAuth 2.0

[![PyPI Version](https://img.shields.io/pypi/v/arcade_salesforce)](https://pypi.org/project/arcade_salesforce/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_salesforce)](https://pypi.org/project/arcade_salesforce/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_salesforce)](https://pypi.org/project/arcade_salesforce/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_salesforce)](https://pypi.org/project/arcade_salesforce/)

The Arcade Salesforce CRM MCP Server provides a pre-built set of tools for interacting with Accounts, Leads, Contacts, etc in the Salesforce CRM. These tools make it easy to build agents and AI apps that can:

-   Search for Accounts and Contacts by keywords or retrieve them by ID
-   Read information about Accounts, such as company metadata, opportunities, deals, etc.
-   Read information about Contacts, such as name, email addresses, phone numbers, email messages, call logs, notes, meetings, tasks, etc.
-   Create contacts

## Install and Run the Arcade Engine

At this time, you need to [self-host](/references/auth-providers/salesforce.md) the Arcade Engine to use the Salesforce MCP Sever. Follow the step-by-step instructions in the [Salesforce Auth Provider](/references/auth-providers/salesforce.md) page.

## Install

```bash
pip install arcade_salesforce
```

## Available Tools

Tool Name

Description

Salesforce.GetAccountDataByKeywords

Searches for accounts in Salesforce and returns them with related info: contacts, leads, notes, calls, opportunities, tasks, emails, and events.

Salesforce.GetAccountDataByID

Gets the account with related info (contacts, leads, notes, calls, etc).

Salesforce.CreateContact

Creates a contact in Salesforce associated with an account.

If you need to perform an action that’s not listed here, you can [get in touch with us](mailto:contact@arcade.dev) to request a new tool, or [create your own tools](/guides/create-tools/tool-basics/build-mcp-server.md).

In order to use the Salesforce MCP Sever, you must [self-host the Arcade Engine](/guides/deployment-hosting/configure-engine.md) and [configure the Salesforce auth provider](/references/auth-providers/salesforce.md). The Arcade Engine is available at `http://localhost:9099` by default. In the code examples below, if necessary, adjust the `base_url` (in Python) or `baseURL` (in JavaScript) parameter in the `Arcade` client constructor to match your environment.

## Salesforce.GetAccountDataByKeywords



Searches for accounts in Salesforce and returns them with related info: contacts, leads, notes, calls, opportunities, tasks, emails, and events (up to 10 items of each type).

**Parameters**

-   **query** _(string, required)_ The query to search for accounts. MUST be longer than one character. It will match the keywords against all account fields, such as name, website, phone, address, etc. E.g. ‘Acme’.
-   **limit** _(int, optional, Defaults to `10`)_ The maximum number of accounts to return. Defaults to 10. Maximum allowed is 10.
-   **page** _(string, optional)_ The page number to return. Defaults to 1 (first page of results).”

## Salesforce.GetAccountDataByID



Gets the account with related info: contacts, leads, notes, calls, opportunities, tasks, emails, and events (up to 10 items of each type).

**Parameters**

-   **account\_id** _(string, required)_ The ID of the account to get data for.

## Salesforce.CreateContact



Creates a contact in Salesforce associated with an account.

**Parameters**

-   **account\_id** _(string, required)_ The ID of the account to create the contact for.
-   **first\_name** _(string, required)_ The first name of the contact.
-   **last\_name** _(string, required)_ The last name of the contact.
-   **email** _(string, required)_ The email address of the contact.
-   **phone** _(string, optional)_ The phone number of the contact.
-   **mobile\_phone** _(string, optional)_ The mobile phone number of the contact.
-   **title** _(string, optional)_ The title of the contact. E.g. ‘CEO’, ‘Sales Director’, ‘CTO’, etc.
-   **department** _(string, optional)_ The department of the contact. E.g. ‘Marketing’, ‘Sales’, ‘IT’, etc.”.
-   **description** _(string, optional)_ A description of the contact.

## Self-hosting the Arcade Engine with Salesforce Auth

At this time, Arcade Cloud does not support Salesforce auth.

In order to use the Salesforce MCP Sever (or develop custom tools for Salesforce), you have to [self-host the Arcade Engine](/guides/deployment-hosting/configure-engine.md) and [configure the Salesforce auth provider](/references/auth-providers/salesforce.md) in your engine configuration.

Last updated on February 10, 2026

[Reference](/en/resources/integrations/sales/hubspot/reference.md)
[HubspotAutomationApi](/en/resources/integrations/sales/hubspot-automation-api.md)
