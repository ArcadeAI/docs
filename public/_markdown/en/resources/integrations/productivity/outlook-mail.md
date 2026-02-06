---
title: "Outlook Mail"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Productivity & Docs](/en/resources/integrations/productivity/asana.md)
Outlook Mail

# Outlook Mail

Arcade Optimized

**Description:** Enable agents to read, write, and send emails with Outlook.

**Author:** Arcade

**Auth:** User authorization via the [Microsoft auth provider](/references/auth-providers/microsoft.md)

[![PyPI Version](https://img.shields.io/pypi/v/arcade_outlook_mail)](https://pypi.org/project/arcade_outlook_mail/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_outlook_mail)](https://pypi.org/project/arcade_outlook_mail/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_outlook_mail)](https://pypi.org/project/arcade_outlook_mail/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_outlook_mail)](https://pypi.org/project/arcade_outlook_mail/)

The Arcade Outlook Mail MCP Server provides pre-built tools for working with emails using the Outlook API. Use these tools to:

-   Read emails
-   Write emails
-   Send emails

## Available Tools

These tools are currently available in the Arcade Outlook Mail MCP Sever.

Tool Name

Description

OutlookMail.WhoAmI

Get comprehensive user profile and Outlook Mail environment information.

OutlookMail.CreateDraftEmail

Compose a new draft email in Outlook

OutlookMail.UpdateDraftEmail

Update an existing draft email in Outlook

OutlookMail.SendDraftEmail

Send an existing draft email in Outlook

OutlookMail.CreateAndSendEmail

Create and immediately send a new email in Outlook to the specified recipients

OutlookMail.ReplyToEmail

Reply only to the sender of an existing email in Outlook.

OutlookMail.ReplyAllToEmail

Reply to all recipients of an existing email in Outlook.

OutlookMail.ListEmails

List emails in the user's mailbox across all folders.

OutlookMail.ListEmailsInFolder

List the user's emails in the specified folder.

OutlookMail.ListEmailsByProperty

List emails in the user's mailbox across all folders filtering by a property.

If you need to perform an action that’s not listed here, you can [get in touch with us](mailto:contact@arcade.dev) to request a new tool, or [create your own tools](/guides/create-tools/tool-basics/build-mcp-server.md) with the [Google auth provider](/references/auth-providers/google.md#using-google-auth-in-custom-tools).

## OutlookMail.WhoAmI



Get comprehensive user profile and Outlook Mail environment information.

**Parameters**

This tool does not take any parameters.

* * *

## OutlookMail.CreateDraftEmail

Compose a new draft email in Outlook.

**Parameters**

-   **`subject`** _(string, required)_: The subject of the email to create.
-   **`body`** _(string, required)_: The body of the email to create.
-   **`to_recipients`** _(list of strings, required)_: The email addresses that will be the recipients of the draft email.
-   **`cc_recipients`** _(list of strings, optional)_: The email addresses that will be the CC recipients of the draft email.
-   **`bcc_recipients`** _(list of strings, optional)_: The email addresses that will be the BCC recipients of the draft email.



* * *

## OutlookMail.UpdateDraftEmail

Update an existing draft email in Outlook.

This tool overwrites the subject and body of a draft email (if provided), and modifies its recipient lists by selectively adding or removing email addresses.

This tool can update any un-sent email: - draft - reply-draft - reply-all draft - forward draft

**Parameters**

-   **`message_id`** _(string, required)_: The ID of the draft email to update.
-   **`subject`** _(string, optional)_: The new subject of the draft email. If provided, the existing subject will be overwritten.
-   **`body`** _(string, optional)_: The new body of the draft email. If provided, the existing body will be overwritten
-   **`to_add`** _(list of strings, optional)_: Email addresses to add as ‘To’ recipients.
-   **`to_remove`** _(list of strings, optional)_: Email addresses to remove from the current ‘To’ recipients.
-   **`cc_add`** _(list of strings, optional)_: Email addresses to add as ‘CC’ recipients.
-   **`cc_remove`** _(list of strings, optional)_: Email addresses to remove from the current ‘CC’ recipients.
-   **`bcc_add`** _(list of strings, optional)_: Email addresses to add as ‘BCC’ recipients.
-   **`bcc_remove`** _(list of strings, optional)_: Email addresses to remove from the current ‘BCC’ recipients.


* * *

## OutlookMail.SendDraftEmail

Send an existing draft email in Outlook

This tool can send any un-sent email:

-   draft
-   reply-draft
-   reply-all draft
-   forward draft

**Parameters**

-   **`message_id`** (string, required): The ID of the draft email to send

* * *

## OutlookMail.CreateAndSendEmail

Create and immediately send a new email in Outlook to the specified recipients

**Parameters**

-   **`subject`** (string, required): The subject of the email to create
-   **`body`** (string, required): The body of the email to create
-   **`to_recipients`** (list\[str\], required): The email addresses that will be the recipients of the email
-   **`cc_recipients`** (list\[str\], optional): The email addresses that will be the CC recipients of the email.
-   **`bcc_recipients`** (list\[str\], optional): The email addresses that will be the BCC recipients of the email.

* * *

## OutlookMail.ReplyToEmail

Reply to an existing email in Outlook.

Use this tool to reply to the sender or all recipients of the email. Specify the reply\_type to determine the scope of the reply.

**Parameters**

-   **`message_id`** (string, required): The ID of the email to reply to
-   **`body`** (string, required): The body of the reply to the email
-   **`reply_type`** (enum ([ReplyType](#replytype)
    ), required): Specify “reply” to reply only to the sender or “reply\_all” to reply to all recipients.

* * *

## OutlookMail.ListEmails

List emails in the user’s mailbox across all folders.

Since this tool lists email across all folders, it may return sent items, drafts, and other items that are not in the inbox.

**Parameters**

-   **`limit`** (int, optional): The number of messages to return. Max is 100. Defaults to 5.
-   **`pagination_token`** (str, optional): The pagination token to continue a previous request

* * *

## OutlookMail.ListEmailsInFolder

List the user’s emails in the specified folder.

Exactly one of `well_known_folder_name` or `folder_id` MUST be provided.

**Parameters**

-   **`well_known_folder_name`** (enum ([WellKnownFolderNames](#wellknownfoldernames)
    ), optional): The name of the folder to list emails from. Defaults to None.
-   **`folder_id`** (str, optional): The ID of the folder to list emails from if the folder is not a well-known folder. Defaults to None.
-   **`limit`** (int, optional): The number of messages to return. Max is 100. Defaults to 5.
-   **`pagination_token`** (str, optional): The pagination token to continue a previous request

* * *

## OutlookMail.ListEmailsByProperty

List emails in the user’s mailbox across all folders filtering by a property.

**Parameters**

-   **`property`** (enum ([EmailFilterProperty](#emailfilterproperty)
    ), required): The property to filter the emails by.
-   **`operator`** (enum ([FilterOperator](#filteroperator)
    ), required): The operator to use for the filter
-   **`value`** (string, required): The value to filter the emails by.
-   **`limit`** (int, optional): The number of messages to return. Max is 100. Defaults to 5.
-   **`pagination_token`** (str, optional): The pagination token to continue a previous request

* * *

## Auth

The Arcade Outlook Mail MCP Sever uses the [Microsoft auth provider](/references/auth-providers/microsoft.md) to connect to users’ Microsoft accounts.

With the Arcade Cloud Platform, there’s nothing to configure. Your users will see `Arcade` as the name of the application that’s requesting permission.

With a self-hosted installation of Arcade, you need to [configure the Microsoft auth provider](/references/auth-providers/microsoft.md#configuring-microsoft-auth) with your own Microsoft app credentials.

* * *

## Reference

### WellKnownFolderNames

Well-known folder names that are created for users by default. Instead of using the ID of these folders, you can use the well-known folder names.

-   **`DELETED_ITEMS`** _(string: “deleteditems”)_
-   **`DRAFTS`** _(string: “drafts”)_
-   **`INBOX`** _(string: “inbox”)_
-   **`JUNK_EMAIL`** _(string: “junkemail”)_
-   **`SENT_ITEMS`** _(string: “sentitems”)_
-   **`STARRED`** _(string: “starred”)_
-   **`TODO`** _(string: “tasks”)_

### ReplyType

The type of reply to send to an email.

-   **`REPLY`** _(string: “reply”)_
-   **`REPLY_ALL`** _(string: “reply\_all”)_

### EmailFilterProperty

The property to filter the emails by.

-   **`SUBJECT`** _(string: “subject”)_
-   **`CONVERSATION_ID`** _(string: “conversationId”)_
-   **`RECEIVED_DATE_TIME`** _(string: “receivedDateTime”)_
-   **`SENDER`** _(string: “sender/emailAddress/address”)_

### FilterOperator

The operator to use for the filter.

-   **`EQUAL`** _(string: “eq”)_
-   **`NOT_EQUAL`** _(string: “ne”)_
-   **`GREATER_THAN`** _(string: “gt”)_
-   **`GREATER_THAN_OR_EQUAL_TO`** _(string: “ge”)_
-   **`LESS_THAN`** _(string: “lt”)_
-   **`LESS_THAN_OR_EQUAL_TO`** _(string: “le”)_
-   **`STARTS_WITH`** _(string: “startsWith”)_
-   **`ENDS_WITH`** _(string: “endsWith”)_
-   **`CONTAINS`** _(string: “contains”)_

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_outlook_mail ``` Learn more](/guides/deployment-hosting.md)

Last updated on February 6, 2026

[Outlook Calendar](/en/resources/integrations/productivity/outlook-calendar.md)
[Reference](/en/resources/integrations/productivity/outlook-mail/reference.md)
