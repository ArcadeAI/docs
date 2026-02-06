---
title: "Gmail"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Productivity & Docs](/en/resources/integrations/productivity/asana.md)
Gmail

# Gmail

Arcade Optimized

**Description:** Enable agents to send, read, and manage emails in Gmail.

**Author:** Arcade

**Auth:** User authorization via the [Google auth provider](/references/auth-providers/google.md)

[![PyPI Version](https://img.shields.io/pypi/v/arcade_gmail)](https://pypi.org/project/arcade_gmail/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_gmail)](https://pypi.org/project/arcade_gmail/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_gmail)](https://pypi.org/project/arcade_gmail/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_gmail)](https://pypi.org/project/arcade_gmail/)

The Arcade Gmail MCP Server provides a pre-built set of tools for interacting with Gmail. These tools make it easy to build agents and AI apps that can:

-   Send, read, and manage emails
-   Compose and update draft emails
-   Delete emails
-   Search for emails by header
-   List emails in the user’s mailbox

## Available Tools

These tools are currently available in the Arcade Gmail MCP Sever.

Tool Name

Description

Gmail.SendEmail

Send an email using the Gmail API.

Gmail.SendDraftEmail

Send a draft email using the Gmail API.

Gmail.WriteDraftEmail

Compose a new email draft using the Gmail API.

Gmail.UpdateDraftEmail

Update an existing email draft.

Gmail.DeleteDraftEmail

Delete a draft email using the Gmail API.

Gmail.TrashEmail

Move an email to the trash folder.

Gmail.ListDraftEmails

List draft emails in the user's mailbox.

Gmail.ListEmailsByHeader

Search for emails by header using the Gmail API.

Gmail.ListEmails

Read emails and extract plain text content.

Gmail.SearchThreads

Search for threads in the user's mailbox.

Gmail.ListThreads

List threads in the user's mailbox.

Gmail.GetThread

Get the specified thread by ID.

Gmail.WhoAmI

Get comprehensive user profile and Gmail account information.

If you need to perform an action that’s not listed here, you can [get in touch with us](mailto:contact@arcade.dev) to request a new tool, or [create your own tools](/guides/create-tools/tool-basics/build-mcp-server.md) with the [Google auth provider](/references/auth-providers/google.md#using-google-auth-in-custom-tools).

Each tool requires specific Google OAuth scopes to function. You’ll find the required scopes listed in a blue info box at the end of each tool’s documentation below. For more information about configuring OAuth and tips for moving to production, see the \[Google auth provider documentation\](/references/auth-providers/google.

## Find required scopes

Select the tools you plan to use to see the OAuth scopes your application needs:

### Scope calculator

Select the tools you plan to use to see the required OAuth scopes.

SendEmailSendDraftEmailWriteDraftEmailUpdateDraftEmailDeleteDraftEmailTrashEmailListDraftEmailsListEmailsByHeaderListEmailsSearchThreadsListThreadsGetThreadWhoAmI

#### Required scopes

Select tools above to see required scopes

* * *

## Gmail.SendEmail



Send an email using the Gmail API.

**Parameters**

-   **`subject`** _(string, required)_ The subject of the email.
-   **`body`** _(string, required)_ The body of the email.
-   **`recipient`** _(string, required)_ The recipient of the email.
-   **`cc`** _(array, optional, Defaults to None)_ CC recipients of the email.
-   **`bcc`** _(array, optional, Defaults to None)_ BCC recipients of the email.

`https://www.googleapis.com/auth/gmail.send`

* * *

## Gmail.SendDraftEmail



Send a draft email using the Gmail API.

**Parameters**

-   **`email_id`** _(string, required)_ The ID of the draft to send.

`https://www.googleapis.com/auth/gmail.send`

* * *

## Gmail.WriteDraftEmail



Compose a new email draft using the Gmail API.

**Parameters**

-   **`subject`** _(string, required)_ The subject of the draft email.
-   **`body`** _(string, required)_ The body of the draft email.
-   **`recipient`** _(string, required)_ The recipient of the draft email.
-   **`cc`** _(array, optional, Defaults to None)_ CC recipients of the draft email.
-   **`bcc`** _(array, optional, Defaults to None)_ BCC recipients of the draft email.

`https://www.googleapis.com/auth/gmail.compose`

* * *

## Gmail.UpdateDraftEmail



Update an existing email draft.

**Parameters**

-   **`draft_email_id`** _(string, required)_ The ID of the draft email to update.
-   **`subject`** _(string, required)_ The subject of the draft email.
-   **`body`** _(string, required)_ The body of the draft email.
-   **`recipient`** _(string, required)_ The recipient of the draft email.
-   **`cc`** _(array, optional, Defaults to None)_ CC recipients of the draft email.
-   **`bcc`** _(array, optional, Defaults to None)_ BCC recipients of the draft email.

`https://www.googleapis.com/auth/gmail.compose`

* * *

## Gmail.DeleteDraftEmail



Delete a draft email using the Gmail API.

**Parameters**

-   **`draft_email_id`** _(string, required)_ The ID of the draft email to delete.

`https://www.googleapis.com/auth/gmail.compose`

* * *

## Gmail.TrashEmail

⚠️

The `TrashEmail` tool is currently only available on a self-hosted instance of the Arcade Engine. To learn more about self-hosting, see the [self-hosting documentation](http://localhost:3000/en/guides/deployment-hosting/configure-engine) .



Move an email to the trash folder.

**Parameters**

-   **`email_id`** _(string, required)_ The ID of the email to trash.

`https://www.googleapis.com/auth/gmail.modify`

* * *

## Gmail.ListDraftEmails



List draft emails in the user’s mailbox.

**Parameters**

-   **`n_drafts`** _(integer, optional, Defaults to 5)_ Number of draft emails to read.

`https://www.googleapis.com/auth/gmail.readonly`

* * *

## Gmail.ListEmailsByHeader



Search for emails by header using the Gmail API.

_At least one of the following parameters must be provided: `sender`, `recipient`, `subject`, `body`._

**Parameters**

-   **`sender`** _(string, optional, Defaults to None)_ The name or email address of the sender.
-   **`recipient`** _(string, optional, Defaults to None)_ The name or email address of the recipient.
-   **`subject`** _(string, optional, Defaults to None)_ Words to find in the subject of the email.
-   **`body`** _(string, optional, Defaults to None)_ Words to find in the body of the email.
-   **`date_range`** _(string, optional, Defaults to None)_ The date range of the emails.
-   **`limit`** _(integer, optional, Defaults to 25)_ The maximum number of emails to return.

`https://www.googleapis.com/auth/gmail.readonly`

* * *

## Gmail.ListEmails



Read emails from a Gmail account and extract plain text content.

**Parameters**

-   **`n_emails`** _(integer, optional, Defaults to 5)_ Number of emails to read.

`https://www.googleapis.com/auth/gmail.readonly`

* * *

## Gmail.SearchThreads



Search for threads in the user’s mailbox

**Parameters**

-   **`page_token`** _(string, optional)_ Page token to retrieve a specific page of results in the list.
-   **`max_results`** _(integer, optional, Defaults to `10`)_ The maximum number of threads to return.
-   **`include_spam_trash`** _(boolean, optional)_ Whether to include spam and trash in the results.
-   **`label_ids`** _(array, optional)_ The IDs of labels to filter by.
-   **`sender`** _(string, optional)_ The name or email address of the sender of the email.
-   **`recipient`** _(string, optional)_ The name or email address of the recipient.
-   **`subject`** _(string, optional)_ Words to find in the subject of the email.
-   **`body`** _(string, optional)_ Words to find in the body of the email.
-   **`date_range`** _(string, optional)_ The date range of the email. Valid values are ‘today’, ‘yesterday’, ‘last\_7\_days’, ‘last\_30\_days’, ‘this\_month’, ‘last\_month’, ‘this\_year’.

`https://www.googleapis.com/auth/gmail.readonly`

* * *

## Gmail.ListThreads



List threads in the user’s mailbox.

**Parameters**

-   **`page_token`** _(string, optional)_ Page token to retrieve a specific page of results in the list.
-   **`max_results`** _(integer, optional, Defaults to `10`)_ The maximum number of threads to return.
-   **`include_spam_trash`** _(boolean, optional)_ Whether to include spam and trash in the results.

`https://www.googleapis.com/auth/gmail.readonly`

* * *

## Gmail.GetThread



Get the specified thread by ID.

**Parameters**

-   **`thread_id`** _(string, required)_ The ID of the thread to retrieve.

`https://www.googleapis.com/auth/gmail.readonly`

* * *

## Gmail.WhoAmI



Get comprehensive user profile and Gmail account information.

**Parameters**

This tool does not take any parameters.

-   `https://www.googleapis.com/auth/gmail.readonly`
-   `https://www.googleapis.com/auth/userinfo.profile`
-   `https://www.googleapis.com/auth/userinfo.email`

* * *

## Auth

The Arcade Gmail MCP Sever uses the \[Google auth provider\](/references/auth-providers/google to connect to users’ Google accounts.

With the Arcade Cloud Platform, there’s nothing to configure. Your users will see `Arcade` as the name of the application that’s requesting permission.

With a self-hosted installation of Arcade, you need to [configure the Google auth provider](/references/auth-providers/google.md#configuring-google-auth) with your own Google app credentials.

* * *

## Reference

### GmailReplyToWhom

The type of recipient to reply to.

-   **`EVERY_RECIPIENT`**: Reply to the original sender and all recipients.
-   **`ONLY_THE_SENDER`**: Reply to the original sender only.

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_gmail ``` Learn more](/guides/deployment-hosting.md)

Last updated on February 6, 2026

[Reference](/en/resources/integrations/productivity/dropbox/reference.md)
[Reference](/en/resources/integrations/productivity/gmail/reference.md)
