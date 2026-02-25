---
title: "Hubspot"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
SalesHubSpot

# Hubspot

Arcade Optimized

**Description:** Enable agents to interact with Hubspot

**Author:** Arcade

**Auth:** User authorization

[![PyPI Version](https://img.shields.io/pypi/v/arcade_hubspot)](https://pypi.org/project/arcade_hubspot/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_hubspot)](https://pypi.org/project/arcade_hubspot/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_hubspot)](https://pypi.org/project/arcade_hubspot/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_hubspot)](https://pypi.org/project/arcade_hubspot/)

The Hubspot MCP Sever offers pre-built tools for interacting with HubSpot CRM. Use these tools to automate CRM updates, log interactions, link records, and query HubSpot data for workflows and agents.

## Available Tools

Tool Name

Description

Hubspot.GetAllUsers

Get all users/owners in the HubSpot portal.

Hubspot.GetUserById

Get detailed information about a specific user/owner by their ID.

Hubspot.WhoAmI

Get current user information from HubSpot.

Hubspot.ToolkitEnviromentGuidance

Get guidance and considerations for using the HubSpot MCP Sever effectively.

Hubspot.CreateNoteActivity

Create a note engagement activity with required owner and associations.

Hubspot.CreateCallActivity

Create a call engagement activity with required owner and associations.

Hubspot.CreateEmailActivity

Create a logged email engagement activity with essential fields including email headers.

Hubspot.CreateMeetingActivity

Create a meeting with essential fields including separate date and time.

Hubspot.CreateCommunicationActivity

Create a communication activity for logging communications that are not done via email, call, or meeting.

Hubspot.UpdateNoteActivity

Update a note activity by ID or list matching notes when searching by keywords.

Hubspot.UpdateCallActivity

Update a call activity by ID or list matching calls when searching by keywords.

Hubspot.UpdateEmailActivity

Update an email activity by ID or list matching emails when searching by keywords.

Hubspot.UpdateMeetingActivity

Update a meeting activity by ID or list matching meetings when searching by keywords.

Hubspot.UpdateCommunicationActivity

Update a communication activity by ID or list matching communications when searching by keywords.

Hubspot.AssociateActivityToDeal

Associate a single activity object to a deal using HubSpot standard association type.

Hubspot.GetContactDataByKeywords

Retrieve contact data with associated companies, deals, calls, emails,

Hubspot.CreateContact

Create a contact associated with a company.

Hubspot.UpdateContact

Update a contact by ID or list matching contacts when searching by keywords.

Hubspot.ListContacts

List contacts with optional filtering by company ID or deal ID, with pagination support.

Hubspot.GetDealDataByKeywords

Retrieve deal data with associated contacts, companies, calls, emails,

Hubspot.CreateDeal

Create a new deal in HubSpot.

Hubspot.UpdateDeal

Update a deal by ID or list matching deals when searching by keywords.

Hubspot.UpdateDealCloseDate

Update the expected close date of an existing deal in HubSpot.

Hubspot.UpdateDealStage

Updates a deal's stage, validating against the current pipeline if provided

Hubspot.GetDealById

Retrieve a specific deal by its ID from HubSpot.

Hubspot.AssociateContactToDeal

Associate a contact with an existing deal in HubSpot.

Hubspot.ListDeals

List deals with optional filtering by contact ID or company ID, with pagination support.

Hubspot.GetNoteDataByKeywords

Search for note activities by search terms in NOTE object properties.

Hubspot.GetCallDataByKeywords

Search for call activities by search terms in CALL object properties.

Hubspot.GetEmailDataByKeywords

Search for email activities by search terms in EMAIL object properties.

Hubspot.GetMeetingDataByKeywords

Search for meeting activities by search terms in MEETING object properties.

Hubspot.GetTaskDataByKeywords

Search for task activities by search terms in TASK object properties.

Hubspot.GetCommunicationDataByKeywords

Search for communication activities by search terms in COMMUNICATION object properties.

Hubspot.GetCompanyDataByKeywords

Retrieve company data with associated contacts, deals, calls, emails,

Hubspot.CreateCompany

Create a new company in HubSpot.

Hubspot.UpdateCompany

Update a company by ID or list matching companies when searching by keywords.

Hubspot.ListCompanies

List companies with pagination support.

Hubspot.GetAvailableIndustryTypes

Get all available industry types for HubSpot companies.

Hubspot.GetDealPipelines

List HubSpot deal pipelines with their stages, optionally filtered by a search string.

Hubspot.GetDealPipelineStages

List stages for a specific HubSpot deal pipeline.

If you need to perform an action that’s not listed here, you can [get in touch with us](mailto:contact@arcade.dev) to request a new tool, or [create your own tools](/guides/create-tools/tool-basics/build-mcp-server.md).

## Hubspot.GetAllUsers



Get all users/owners in the HubSpot portal.

**Parameters**

This tool does not take any parameters.

## Hubspot.GetUserById



Get detailed information about a specific user/owner by their ID.

**Parameters**

-   **owner\_id** (`integer`, required) The HubSpot owner/user ID to retrieve

## Hubspot.WhoAmI



Get current user information from HubSpot.

**Parameters**

This tool does not take any parameters.

## Hubspot.ToolkitEnviromentGuidance



Get guidance and considerations for using the HubSpot MCP Sever effectively.

**Parameters**

This tool does not take any parameters.

## Hubspot.CreateNoteActivity



Create a note engagement activity with required owner and associations.

**Parameters**

-   **body** (`string`, required) The note content/body.
-   **when\_occurred** (`string`, required) When the note was created (ISO date format: YYYY-MM-DDTHH:MM:SS).
-   **associate\_to\_contact\_id** (`integer`, optional) Contact ID to associate this note with.
-   **associate\_to\_company\_id** (`integer`, optional) Company ID to associate this note with.
-   **associate\_to\_deal\_id** (`integer`, optional) Deal ID to associate this note with.

## Hubspot.CreateCallActivity



Create a call engagement activity with required owner and associations.

**Parameters**

-   **title** (`string`, required) Short title for the call.
-   **when\_occurred** (`string`, required) When the call occurred (ISO date format: YYYY-MM-DDTHH:MM:SS).
-   **direction** (`Enum` [HubspotCallDirection](/resources/integrations/sales/hubspot/reference.md#HubspotCallDirection)
    , optional) Call direction (INBOUND or OUTBOUND).
-   **summary** (`string`, optional) Short summary/notes of the call.
-   **duration** (`integer`, optional) Call duration in seconds.
-   **to\_number** (`string`, optional) Phone number called to.
-   **from\_number** (`string`, optional) Phone number called from.
-   **associate\_to\_contact\_id** (`integer`, optional) Contact ID to associate this call with.
-   **associate\_to\_company\_id** (`integer`, optional) Company ID to associate this call with.
-   **associate\_to\_deal\_id** (`integer`, optional) Deal ID to associate this call with.

## Hubspot.CreateEmailActivity



Create a logged email engagement activity with essential fields including email headers.

**Parameters**

-   **subject** (`string`, required) Email subject.
-   **when\_occurred** (`string`, required) When the email occurred (ISO date format: YYYY-MM-DDTHH:MM:SS).
-   **from\_email** (`string`, required) Sender email address.
-   **to\_email** (`string`, required) Primary recipient email address.
-   **body\_text** (`string`, optional) Email body in plain text.
-   **body\_html** (`string`, optional) Email body in HTML format.
-   **from\_first\_name** (`string`, optional) Sender first name.
-   **from\_last\_name** (`string`, optional) Sender last name.
-   **to\_first\_name** (`string`, optional) Primary recipient first name.
-   **to\_last\_name** (`string`, optional) Primary recipient last name.
-   **cc\_emails** (`array[string]`, optional) CC recipient email addresses.
-   **bcc\_emails** (`array[string]`, optional) BCC recipient email addresses.
-   **direction** (`Enum` [HubspotEmailDirection](/resources/integrations/sales/hubspot/reference.md#HubspotEmailDirection)
    , optional) Direction the email was sent (EMAIL, INCOMING\_EMAIL, FORWARDED\_EMAIL).
-   **status** (`Enum` [HubspotEmailStatus](/resources/integrations/sales/hubspot/reference.md#HubspotEmailStatus)
    , optional) Email status indicating the state of the email.
-   **associate\_to\_contact\_id** (`integer`, optional) Contact ID to associate this email with.
-   **associate\_to\_company\_id** (`integer`, optional) Company ID to associate this email with.
-   **associate\_to\_deal\_id** (`integer`, optional) Deal ID to associate this email with.

## Hubspot.CreateMeetingActivity



Create a meeting with essential fields including separate date and time.

**Parameters**

-   **title** (`string`, required) Meeting title.
-   **start\_date** (`string`, required) Start date (YYYY-MM-DD format).
-   **start\_time** (`string`, required) Start time (HH:MM or HH:MM:SS format).
-   **duration** (`string`, optional) Meeting duration in HH:MM format (e.g., 1:30 for 1 hour 30 minutes).
-   **location** (`string`, optional) Meeting location.
-   **outcome** (`Enum` [HubspotMeetingOutcome](/resources/integrations/sales/hubspot/reference.md#HubspotMeetingOutcome)
    , optional) Meeting outcome.
-   **associate\_to\_contact\_id** (`integer`, optional) Contact ID to associate this meeting with.
-   **associate\_to\_company\_id** (`integer`, optional) Company ID to associate this meeting with.
-   **associate\_to\_deal\_id** (`integer`, optional) Deal ID to associate this meeting with.

## Hubspot.CreateCommunicationActivity



Create a communication activity for logging communications that are not done via email, call, or meeting.

This includes SMS, WhatsApp, LinkedIn messages, physical mail, and custom channel conversations. Must be associated with at least one of: contact, company, or deal. The communication will be assigned to the current user.

**Parameters**

-   **channel** (`Enum` [HubspotCommunicationChannel](/resources/integrations/sales/hubspot/reference.md#HubspotCommunicationChannel)
    , required) Communication channel type.
-   **when\_occurred** (`string`, required) When the communication occurred (ISO date format: YYYY-MM-DDTHH:MM:SS).
-   **body\_text** (`string`, optional) Full message content.
-   **associate\_to\_contact\_id** (`integer`, optional) Contact ID to associate this communication with.
-   **associate\_to\_company\_id** (`integer`, optional) Company ID to associate this communication with.
-   **associate\_to\_deal\_id** (`integer`, optional) Deal ID to associate this communication with.

## Hubspot.AssociateActivityToDeal



Associate a single activity object to a deal using HubSpot standard association type.

**Parameters**

-   **activity\_type** (`Enum` [HubspotActivityType](/resources/integrations/sales/hubspot/reference.md#HubspotActivityType)
    , required) Engagement activity type.
-   **activity\_id** (`integer`, required) The activity object ID
-   **deal\_id** (`integer`, required) The deal ID to associate to

## Hubspot.UpdateNoteActivity



Update a note activity directly by ID or list matching notes when searching by keywords.

When using keywords, the tool will return a list of matching notes. Review the matches and call the tool again with the specific note\_id to continue with the update.

**Parameters**

-   **note\_id** (`integer`, optional) The note ID to update. Provide either note\_id or keywords, not both.
-   **keywords** (`string`, optional) Keywords to search for the note content. Provide when note\_id is not known.
-   **body** (`string`, optional) Updated note content.
-   **when\_occurred** (`string`, optional) Updated creation timestamp (ISO format: YYYY-MM-DDTHH:MM:SS).
-   **matches\_limit** (`integer`, optional) Maximum number of notes to return when searching by keywords. Defaults to 5. Max is 20.

## Hubspot.UpdateCallActivity



Update a call activity directly by ID or list matching calls when searching by keywords.

When using keywords, the tool will return a list of matching calls. Review the matches and call the tool again with the specific call\_id to continue with the update.

**Parameters**

-   **call\_id** (`integer`, optional) The call activity ID to update. Provide either call\_id or keywords, not both.
-   **keywords** (`string`, optional) Keywords to search for call summaries or titles. Provide when call\_id is not known.
-   **title** (`string`, optional) Updated call title.
-   **direction** (`Enum` [HubspotCallDirection](/resources/integrations/sales/hubspot/reference.md#HubspotCallDirection)
    , optional) Updated call direction.
-   **summary** (`string`, optional) Updated call summary.
-   **duration** (`integer`, optional) Updated call duration in seconds.
-   **to\_number** (`string`, optional) Updated number called to.
-   **from\_number** (`string`, optional) Updated number called from.
-   **when\_occurred** (`string`, optional) Updated call timestamp (ISO format: YYYY-MM-DDTHH:MM:SS).
-   **matches\_limit** (`integer`, optional) Maximum number of calls to return when searching by keywords. Defaults to 5. Max is 20.

## Hubspot.UpdateEmailActivity



Update an email activity directly by ID or list matching emails when searching by keywords.

When using keywords, the tool will return a list of matching emails. Review the matches and call the tool again with the specific email\_id to continue with the update.

**Parameters**

-   **email\_id** (`integer`, optional) The email activity ID to update. Provide either email\_id or keywords, not both.
-   **keywords** (`string`, optional) Keywords to search for email subjects or body text. Provide when email\_id is not known.
-   **subject** (`string`, optional) Updated email subject.
-   **direction** (`Enum` [HubspotEmailDirection](/resources/integrations/sales/hubspot/reference.md#HubspotEmailDirection)
    , optional) Updated email direction.
-   **status** (`Enum` [HubspotEmailStatus](/resources/integrations/sales/hubspot/reference.md#HubspotEmailStatus)
    , optional) Updated email status.
-   **body\_text** (`string`, optional) Updated plain-text body.
-   **body\_html** (`string`, optional) Updated HTML body.
-   **when\_occurred** (`string`, optional) Updated email timestamp (ISO format: YYYY-MM-DDTHH:MM:SS).
-   **matches\_limit** (`integer`, optional) Maximum number of emails to return when searching by keywords. Defaults to 5. Max is 20.

## Hubspot.UpdateMeetingActivity



Update a meeting activity directly by ID or list matching meetings when searching by keywords.

When using keywords, the tool will return a list of matching meetings. Review the matches and call the tool again with the specific meeting\_id to continue with the update.

**Parameters**

-   **meeting\_id** (`integer`, optional) The meeting activity ID to update. Provide either meeting\_id or keywords, not both.
-   **keywords** (`string`, optional) Keywords to search for meeting titles. Provide when meeting\_id is not known.
-   **title** (`string`, optional) Updated meeting title.
-   **start\_date** (`string`, optional) Updated start date (YYYY-MM-DD).
-   **start\_time** (`string`, optional) Updated start time (HH:MM or HH:MM:SS).
-   **duration** (`string`, optional) Updated duration in HH:MM format.
-   **location** (`string`, optional) Updated meeting location.
-   **outcome** (`Enum` [HubspotMeetingOutcome](/resources/integrations/sales/hubspot/reference.md#HubspotMeetingOutcome)
    , optional) Updated meeting outcome.
-   **matches\_limit** (`integer`, optional) Maximum number of meetings to return when searching by keywords. Defaults to 5. Max is 20.

## Hubspot.UpdateCommunicationActivity



Update a communication activity by ID or list matching communications when searching by keywords.

When using keywords, the tool will return a list of matching communications. Review the matches and call the tool again with the specific communication\_id to continue with the update.

**Parameters**

-   **communication\_id** (`integer`, optional) The communication activity ID to update. Provide either communication\_id or keywords, not both.
-   **keywords** (`string`, optional) Keywords to search for communication body text. Provide when communication\_id is not known.
-   **channel** (`Enum` [HubspotCommunicationChannel](/resources/integrations/sales/hubspot/reference.md#HubspotCommunicationChannel)
    , optional) Updated communication channel.
-   **body\_text** (`string`, optional) Updated message body.
-   **when\_occurred** (`string`, optional) Updated timestamp (ISO format: YYYY-MM-DDTHH:MM:SS).
-   **matches\_limit** (`integer`, optional) Maximum number of communications to return when searching by keywords. Defaults to 5. Max is 20.

## Hubspot.GetContactDataByKeywords



Retrieve contact data with associated companies, deals, calls, emails,

**Parameters**

-   **keywords** (`string`, required) The keywords to search for contacts. It will match against the contact’s first and last name, email addresses, phone numbers, and company name.
-   **limit** (`integer`, optional) The maximum number of contacts to return. Defaults to 10. Max is 100.
-   **next\_page\_token** (`string`, optional) The token to get the next page of results. Defaults to None (returns first page of results)

## Hubspot.CreateContact



Create a contact associated with a company.

**Parameters**

-   **company\_id** (`integer`, required) The ID of the company to create the contact for.
-   **first\_name** (`string`, required) The first name of the contact.
-   **last\_name** (`string`, optional) The last name of the contact.
-   **email** (`string`, optional) The email address of the contact.
-   **phone** (`string`, optional) The phone number of the contact.
-   **mobile\_phone** (`string`, optional) The mobile phone number of the contact.
-   **job\_title** (`string`, optional) The job title of the contact.

## Hubspot.UpdateContact



Update a contact directly by ID or list matching contacts when searching by keywords.

When using keywords, the tool will return a list of matching contacts. Review the matches and call the tool again with the specific contact\_id to continue with the update.

**Parameters**

-   **contact\_id** (`integer`, optional) The ID of the contact to update. Provide either contact\_id or keywords, not both.
-   **keywords** (`string`, optional) Keywords to search for the contact (name, email, phone). Provide when contact\_id is not known.
-   **first\_name** (`string`, optional) The first name of the contact.
-   **last\_name** (`string`, optional) The last name of the contact.
-   **email** (`string`, optional) The email address of the contact.
-   **phone** (`string`, optional) The phone number of the contact.
-   **mobile\_phone** (`string`, optional) The mobile phone number of the contact.
-   **job\_title** (`string`, optional) The job title of the contact.
-   **matches\_limit** (`integer`, optional) The maximum number of contacts to return when searching by keywords. Defaults to 5. Max is 20.

## Hubspot.ListContacts



List contacts with optional filtering by company ID or deal ID, with pagination support.

**Parameters**

-   **limit** (`integer`, optional) The maximum number of contacts to return. Defaults to 10. Max is 50.
-   **company\_id** (`integer`, optional) Filter contacts by company ID. Defaults to None (no filtering).
-   **deal\_id** (`integer`, optional) Filter contacts by deal ID. Defaults to None (no filtering).
-   **sort\_order** (`Enum` [HubspotSortOrder](/resources/integrations/sales/hubspot/reference.md#HubspotSortOrder)
    , optional) Sort order for results. Defaults to LATEST\_MODIFIED.
-   **next\_page\_token** (`string`, optional) The token to get the next page of results. Defaults to None (returns first page of results)

## Hubspot.GetDealDataByKeywords



Retrieve deal data with associated contacts, companies, calls, emails,

**Parameters**

-   **keywords** (`string`, required) The keywords to search for deals. It will match against the deal name and description.
-   **limit** (`integer`, optional) The maximum number of deals to return. Defaults to 10. Max is 10.
-   **next\_page\_token** (`string`, optional) The token to get the next page of results. Defaults to None (returns first page of results)

## Hubspot.CreateDeal



Create a new deal in HubSpot.

**Parameters**

-   **deal\_name** (`string`, required) The deal name (required)
-   **deal\_amount** (`number`, optional) The deal amount/value
-   **deal\_stage** (`string`, optional) The deal stage
-   **deal\_type** (`Enum` [HubspotDealType](/resources/integrations/sales/hubspot/reference.md#HubspotDealType)
    , optional) The deal type.
-   **expected\_close\_date** (`string`, optional) Expected close date in YYYY-MM-DD format
-   **pipeline\_id** (`string`, optional) Pipeline id. Use ‘default’ for default pipeline or pass a pipeline id (integer)
-   **deal\_owner** (`string`, optional) The deal owner user ID
-   **priority\_level** (`Enum` [HubspotDealPriority](/resources/integrations/sales/hubspot/reference.md#HubspotDealPriority)
    , optional) Priority level.
-   **deal\_description** (`string`, optional) The deal description

## Hubspot.UpdateDeal



Update a deal directly by ID or list matching deals when searching by keywords.

When using keywords, the tool will return a list of matching deals. Review the matches and call the tool again with the specific deal\_id to continue with the update.

**Parameters**

-   **deal\_id** (`integer`, optional) The ID of the deal to update. Provide either deal\_id or keywords, not both.
-   **keywords** (`string`, optional) Keywords to search for the deal (name, description). Provide when deal\_id is not known.
-   **deal\_name** (`string`, optional) The deal name.
-   **deal\_amount** (`number`, optional) The deal amount/value.
-   **deal\_stage** (`string`, optional) The deal stage ID.
-   **deal\_type** (`string`, optional) The deal type. Accepts enum values as strings (e.g., ‘newbusiness’, ‘existingbusiness’).
-   **expected\_close\_date** (`string`, optional) Expected close date in YYYY-MM-DD format.
-   **deal\_owner** (`string`, optional) The deal owner user ID.
-   **priority\_level** (`string`, optional) Priority level. Accepts enum values as strings (e.g., ‘low’, ‘medium’, ‘high’).
-   **deal\_description** (`string`, optional) The deal description.
-   **matches\_limit** (`integer`, optional) The maximum number of deals to return when searching by keywords. Defaults to 5. Max is 20.

## Hubspot.UpdateDealCloseDate



Update the expected close date of an existing deal in HubSpot.

**Parameters**

-   **deal\_id** (`integer`, required) The ID of the deal to update
-   **expected\_close\_date** (`string`, required) New expected close date in YYYY-MM-DD format

## Hubspot.UpdateDealStage



Updates a deal’s stage, validating against the current pipeline if provided

**Parameters**

-   **deal\_id** (`integer`, required) The ID of the deal to update
-   **deal\_stage** (`string`, required) New deal stage ID
-   **current\_pipeline\_id** (`string`, optional) Current pipeline id for this deal, if already known (skips fetching the deal)
-   **allow\_pipeline\_change** (`boolean`, optional) If true, allows changing the deal’s pipeline when the stage belongs to another pipeline

## Hubspot.GetDealById



Retrieve a specific deal by its ID from HubSpot.

**Parameters**

-   **deal\_id** (`integer`, required) The ID of the deal to retrieve

## Hubspot.AssociateContactToDeal



Associate a contact with an existing deal in HubSpot.

**Parameters**

-   **deal\_id** (`integer`, required) The ID of the deal to associate the contact with
-   **contact\_id** (`integer`, required) The ID of the contact to associate with the deal

## Hubspot.ListDeals



List deals with optional filtering by contact ID or company ID, with pagination support.

**Parameters**

-   **limit** (`integer`, optional) The maximum number of deals to return. Defaults to 10. Max is 50.
-   **contact\_id** (`integer`, optional) Filter deals by contact ID. Defaults to None (no filtering).
-   **company\_id** (`integer`, optional) Filter deals by company ID. Defaults to None (no filtering).
-   **sort\_order** (`Enum` [HubspotSortOrder](/resources/integrations/sales/hubspot/reference.md#HubspotSortOrder)
    , optional) Sort order for results. Defaults to LATEST\_MODIFIED.
-   **next\_page\_token** (`string`, optional) The token to get the next page of results. Defaults to None (returns first page of results)

## Hubspot.GetNoteDataByKeywords



Search for note activities by search terms in NOTE object properties.

**Parameters**

-   **search\_terms** (`string`, required) Search phrase or terms to find in NOTE properties.
-   **limit** (`integer`, optional) The maximum number of notes to return. Defaults to 10. Max is 50.
-   **truncate\_big\_strings** (`boolean`, optional) Whether to truncate string properties longer than 100 characters. Defaults to False.
-   **next\_page\_token** (`string`, optional) The token to get the next page of results. Defaults to None (returns first page of results)

## Hubspot.GetCallDataByKeywords



Search for call activities by search terms in CALL object properties.

**Parameters**

-   **search\_terms** (`string`, required) Search phrase or terms to find in CALL properties.
-   **limit** (`integer`, optional) The maximum number of calls to return. Defaults to 10. Max is 50.
-   **truncate\_big\_strings** (`boolean`, optional) Whether to truncate string properties longer than 100 characters. Defaults to False.
-   **next\_page\_token** (`string`, optional) The token to get the next page of results. Defaults to None (returns first page of results)

## Hubspot.GetEmailDataByKeywords



Search for email activities by search terms in EMAIL object properties.

**Parameters**

-   **search\_terms** (`string`, required) Search phrase or terms to find in EMAIL properties.
-   **limit** (`integer`, optional) The maximum number of emails to return. Defaults to 10. Max is 50.
-   **truncate\_big\_strings** (`boolean`, optional) Whether to truncate string properties longer than 100 characters. Defaults to False.
-   **next\_page\_token** (`string`, optional) The token to get the next page of results. Defaults to None (returns first page of results)

## Hubspot.GetMeetingDataByKeywords



Search for meeting activities by search terms in MEETING object properties.

**Parameters**

-   **search\_terms** (`string`, required) Search phrase or terms to find in MEETING properties.
-   **limit** (`integer`, optional) The maximum number of meetings to return. Defaults to 10. Max is 50.
-   **truncate\_big\_strings** (`boolean`, optional) Whether to truncate string properties longer than 100 characters. Defaults to False.
-   **next\_page\_token** (`string`, optional) The token to get the next page of results. Defaults to None (returns first page of results)

## Hubspot.GetTaskDataByKeywords



Search for task activities by search terms in TASK object properties.

**Parameters**

-   **search\_terms** (`string`, required) Search phrase or terms to find in TASK properties.
-   **limit** (`integer`, optional) The maximum number of tasks to return. Defaults to 10. Max is 50.
-   **truncate\_big\_strings** (`boolean`, optional) Whether to truncate string properties longer than 100 characters. Defaults to False.
-   **next\_page\_token** (`string`, optional) The token to get the next page of results. Defaults to None (returns first page of results)

## Hubspot.GetCommunicationDataByKeywords



Search for communication activities by search terms in COMMUNICATION object properties.

**Parameters**

-   **search\_terms** (`string`, required) Search phrase or terms to find in COMMUNICATION properties.
-   **limit** (`integer`, optional) The maximum number of communications to return. Defaults to 10. Max is 50.
-   **truncate\_big\_strings** (`boolean`, optional) Whether to truncate string properties longer than 100 characters. Defaults to False.
-   **next\_page\_token** (`string`, optional) The token to get the next page of results. Defaults to None (returns first page of results)

## Hubspot.GetCompanyDataByKeywords



Retrieve company data with associated contacts, deals, calls, emails,

**Parameters**

-   **keywords** (`string`, required) The keywords to search for companies. It will match against the company name, phone, and website.
-   **limit** (`integer`, optional) The maximum number of companies to return. Defaults to 10. Max is 10.
-   **next\_page\_token** (`string`, optional) The token to get the next page of results. Defaults to None (returns first page of results)

## Hubspot.CreateCompany



Create a new company in HubSpot.

**Parameters**

-   **company\_name** (`string`, required) The company name (required)
-   **web\_domain** (`string`, optional) The company web domain (e.g., example.com)
-   **industry\_type** (`string`, optional) The company industry type (case-insensitive).
-   **company\_city** (`string`, optional) The company city location
-   **company\_state** (`string`, optional) The company state or province
-   **company\_country** (`string`, optional) The company country
-   **phone\_number** (`string`, optional) The company main phone number
-   **website\_url** (`string`, optional) The company website URL

## Hubspot.UpdateCompany



Update a company directly by ID or list matching companies when searching by keywords.

When using keywords, the tool will return a list of matching companies. Review the matches and call the tool again with the specific company\_id to continue with the update.

**Parameters**

-   **company\_id** (`integer`, optional) The ID of the company to update. Provide either company\_id or keywords, not both.
-   **keywords** (`string`, optional) Keywords to search for the company (name, domain, website). Provide when company\_id is not known.
-   **company\_name** (`string`, optional) The company name.
-   **web\_domain** (`string`, optional) The company web domain (e.g., example.com).
-   **industry\_type** (`string`, optional) The company industry type (case-insensitive).
-   **company\_city** (`string`, optional) The company city location.
-   **company\_state** (`string`, optional) The company state or province.
-   **company\_country** (`string`, optional) The company country.
-   **phone\_number** (`string`, optional) The company main phone number.
-   **website\_url** (`string`, optional) The company website URL.
-   **matches\_limit** (`integer`, optional) The maximum number of companies to return when searching by keywords. Defaults to 5. Max is 20.

## Hubspot.ListCompanies



List companies with pagination support.

**Parameters**

-   **limit** (`integer`, optional) The maximum number of companies to return. Defaults to 10. Max is 50.
-   **sort\_order** (`Enum` [HubspotSortOrder](/resources/integrations/sales/hubspot/reference.md#HubspotSortOrder)
    , optional) Sort order for results. Defaults to LATEST\_MODIFIED.
-   **next\_page\_token** (`string`, optional) The token to get the next page of results. Defaults to None (returns first page of results)

## Hubspot.GetAvailableIndustryTypes



Get all available industry types for HubSpot companies.

**Parameters**

This tool does not take any parameters.

## Hubspot.GetDealPipelines



List HubSpot deal pipelines with their stages, optionally filtered by a search string.

**Parameters**

-   **search** (`string`, optional) Optional case-insensitive search string to filter pipelines by id or label

## Hubspot.GetDealPipelineStages



List stages for a specific HubSpot deal pipeline.

**Parameters**

-   **pipeline\_id** (`string`, required) The pipeline id (e.g., ‘default’ or a pipeline GUID)

## Auth

The Arcade Cloud Platform offers a default [Hubspot auth provider](/references/auth-providers/hubspot.md). If you use it, there’s nothing to configure. Your users will see `Arcade` as the name of the application requesting permission.

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_hubspot ``` Learn more](/guides/deployment-hosting.md)

Last updated on February 10, 2026

[ExaApi](/en/resources/integrations/search/exa-api.md)
[Reference](/en/resources/integrations/sales/hubspot/reference.md)
