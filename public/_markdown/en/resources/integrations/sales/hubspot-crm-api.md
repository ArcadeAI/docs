---
title: "HubspotCrmApi"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Sales](/en/resources/integrations/sales/hubspot.md)
HubspotCrmApi

# HubspotCrmApi

Arcade Unoptimized

**Description:** Tools that enable LLMs to interact directly with the Hubspot CRM API.

**Author:** Arcade

**Auth:** User authorization

[![PyPI Version](https://img.shields.io/pypi/v/arcade_hubspot_crm_api)](https://pypi.org/project/arcade_hubspot_crm_api/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_hubspot_crm_api)](https://pypi.org/project/arcade_hubspot_crm_api/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_hubspot_crm_api)](https://pypi.org/project/arcade_hubspot_crm_api/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_hubspot_crm_api)](https://pypi.org/project/arcade_hubspot_crm_api/)

HubspotCrmApi is a [Unoptimized MCP Server](/guides/create-tools/improve/types-of-tools.md#unoptimized-tools)
: each tool mirrors one HTTP endpoint and offers LLMs a way to interact with the low-level API.



Differently from [Optimized MCP Servers](/guides/create-tools/improve/types-of-tools.md#optimized-tools)
, Unoptimized tools are heavily influenced by the original API design, which is not usually optimized for LLM usage. For this reason, we recommend thoroughly evaluating the tools with your Agents or chatbots before using it in production. [Read more](/guides/create-tools/improve/types-of-tools.md) about Optimized vs Unoptimized tools.

The HubspotCrmApi MCP Server offers a comprehensive suite of tools for managing and interacting with HubSpot CRM. Users can efficiently perform a variety of actions, including:

-   Retrieve, create, update, and delete records for contacts, companies, deals, tickets, and more.
-   Manage associations between different CRM objects, such as linking contacts to companies or deals.
-   Handle tasks, meetings, notes, and emails, including batch operations for efficiency.
-   Access and manage custom properties, pipelines, and services within the HubSpot environment.
-   Search for specific records based on various criteria and retrieve detailed information about them.

This MCP Server is designed to streamline CRM operations, making it easier to maintain and manipulate data within HubSpot.

## Available Tools

Tool Name

Description

HubspotCrmApi.RetrieveHubspotCrmRecords

Retrieve HubSpot CRM records by ID or unique property.

HubspotCrmApi.CreateObjectAssociation

Create an association between two CRM objects in HubSpot.

HubspotCrmApi.RemoveCrmAssociation

Remove associations between CRM objects.

HubspotCrmApi.UpdateMultipleHubspotAppointments

Update multiple appointments in HubSpot CRM.

HubspotCrmApi.GetAppointmentsData

Retrieve a page of appointments from HubSpot CRM.

HubspotCrmApi.CreateCrmAppointment

Create an appointment in the CRM with specified properties.

HubspotCrmApi.CreateBatchAppointments

Create multiple appointments in one request.

HubspotCrmApi.GetAssociationsInHubspot

Retrieve associations between HubSpot CRM objects.

HubspotCrmApi.UpsertHubspotRecords

Create or update HubSpot CRM records in batch mode.

HubspotCrmApi.SearchAppointments

Search for appointments based on specified criteria.

HubspotCrmApi.ArchiveMultipleAppointments

Archive multiple appointments using their IDs.

HubspotCrmApi.GdprDeleteObject

Delete CRM objects in compliance with GDPR.

HubspotCrmApi.RetrieveCrmObject

Fetch CRM object details by ID or unique property.

HubspotCrmApi.DeleteCrmObject

Delete a CRM object and move it to the recycling bin.

HubspotCrmApi.UpdateHubspotObject

Update specific properties of a HubSpot CRM object.

HubspotCrmApi.MergeHubspotCrmObjects

Merge two HubSpot CRM objects into a single entity.

HubspotCrmApi.CreateBatchAssociationsHubspot

Batch create associations between object types in HubSpot CRM.

HubspotCrmApi.BatchReadAssociations

Retrieve batch associations between CRM object types in HubSpot.

HubspotCrmApi.HubspotBatchArchiveAssociations

Batch archive associations in HubSpot CRM.

HubspotCrmApi.GetAssociationTypes

Get association types between two object types in HubSpot CRM.

HubspotCrmApi.CreateBatchOfCalls

Create a batch of calls with specified properties and associations.

HubspotCrmApi.UpsertCallRecords

Create or update call records in HubSpot CRM.

HubspotCrmApi.RetrieveCallsBatch

Retrieve a batch of calls by ID from HubSpot CRM.

HubspotCrmApi.UpdateBatchCalls

Update multiple calls in HubSpot CRM by ID.

HubspotCrmApi.GetCallsPage

Retrieve a page of call records from HubSpot CRM.

HubspotCrmApi.CreateHubspotCall

Create a call in HubSpot with specified properties.

HubspotCrmApi.GetCallDetails

Retrieve details of a call using its ID in HubSpot CRM.

HubspotCrmApi.ArchiveCallInHubspot

Archive a call in HubSpot CRM by moving it to the recycle bin.

HubspotCrmApi.UpdateCallInfo

Update details of a specific call record in the CRM.

HubspotCrmApi.ArchiveCallsBatch

Archive a batch of calls by their IDs.

HubspotCrmApi.SearchCallsHubspot

Search and filter call records in HubSpot CRM.

HubspotCrmApi.ArchiveCartsBatch

Archive multiple carts by ID in a batch operation.

HubspotCrmApi.CreateBatchOfCarts

Create a batch of carts efficiently in HubSpot CRM.

HubspotCrmApi.RetrieveCartDetails

Retrieve detailed information about shopping carts.

HubspotCrmApi.CreateCartHubspotCrm

Create a cart and retrieve its details including ID.

HubspotCrmApi.RetrieveCartRecords

Retrieve cart records by record ID or custom property.

HubspotCrmApi.UpsertCartRecords

Create or update cart records in HubSpot CRM.

HubspotCrmApi.UpdateCartsBatch

Update a batch of carts by internal ID or unique properties.

HubspotCrmApi.SearchHubspotCarts

Search for carts in HubSpot CRM.

HubspotCrmApi.GetCartDetails

Retrieve detailed information of a cart by ID.

HubspotCrmApi.DeleteShoppingCart

Delete a shopping cart from HubSpot CRM.

HubspotCrmApi.UpdateCartProperties

Update specific properties of a cart in HubSpot CRM.

HubspotCrmApi.UpsertCommercePayments

Create or update unique commerce payment records in HubSpot.

HubspotCrmApi.CreateBatchCommercePayments

Create a batch of commerce payments in HubSpot CRM.

HubspotCrmApi.RetrieveCommercePaymentDetails

Retrieve details of a specific commerce payment using its ID.

HubspotCrmApi.DeleteCommercePayment

Delete a commerce payment from the CRM system.

HubspotCrmApi.UpdateCommercePayment

Partially update a commerce payment by ID or unique property.

HubspotCrmApi.ArchiveCommercePaymentsBatch

Archive a batch of commerce payments by ID.

HubspotCrmApi.UpdateCommercePaymentsBatch

Update a batch of commerce payments by internal ID or unique values.

HubspotCrmApi.RetrieveCommercePaymentRecords

Retrieve commerce payment records by ID or unique property.

HubspotCrmApi.SearchCommercePayments

Search for commerce payments in HubSpot CRM.

HubspotCrmApi.GetCommercePayments

Retrieve a page of commerce payments from HubSpot CRM.

HubspotCrmApi.CreateCommercePayment

Create a commerce payment and return its details.

HubspotCrmApi.UpdateSubscriptionBatch

Update multiple subscriptions by ID or property values.

HubspotCrmApi.ArchiveSubscriptionsBatch

Archive a batch of subscriptions by ID in HubSpot CRM.

HubspotCrmApi.SearchHubspotSubscriptions

Search for subscriptions in HubSpot CRM.

HubspotCrmApi.GetSubscriptionData

Fetch a page of subscription data from HubSpot CRM.

HubspotCrmApi.CreateSubscription

Create a new subscription in HubSpot CRM.

HubspotCrmApi.UpsertSubscriptionsInHubspotCrm

Batch create or update subscription records in HubSpot CRM.

HubspotCrmApi.RetrieveSubscriptionRecords

Retrieve subscription records by ID or unique property.

HubspotCrmApi.CreateBatchSubscriptions

Create a batch of subscriptions in HubSpot CRM.

HubspotCrmApi.GetSubscriptionDetails

Retrieve details of a specific subscription by ID.

HubspotCrmApi.DeleteSubscription

Delete a specific subscription from HubSpot CRM.

HubspotCrmApi.UpdateSubscription

Update subscription details using provided property values.

HubspotCrmApi.UpdateMessagesBatch

Update a batch of messages in HubSpot CRM.

HubspotCrmApi.DeleteBatchMessages

Delete a batch of messages by ID with restoration option.

HubspotCrmApi.UpsertCommunicationsRecords

Create or update communication records in bulk.

HubspotCrmApi.ReadCommunicationsPage

Retrieve a page of communications from HubSpot CRM.

HubspotCrmApi.CreateHubspotCommunication

Create a new communication entry in HubSpot CRM.

HubspotCrmApi.GetCommunicationById

Retrieve details of a communication by its ID.

HubspotCrmApi.ArchiveCommunication

Archive a communication by its ID.

HubspotCrmApi.UpdateCommunicationDetails

Update communication object details in HubSpot CRM.

HubspotCrmApi.SearchCrmMessages

Search and filter CRM messages based on various criteria.

HubspotCrmApi.RetrieveBatchCommunications

Retrieve a batch of communication messages by ID.

HubspotCrmApi.CreateHubspotMessagesBatch

Create a batch of messages in HubSpot CRM.

HubspotCrmApi.RetrieveBatchCompaniesHubspot

Retrieve a batch of company records from HubSpot CRM.

HubspotCrmApi.RetrieveAllCompanies

Retrieve all companies from HubSpot CRM.

HubspotCrmApi.CreateCompanyHubspot

Create a new company in HubSpot CRM.

HubspotCrmApi.SearchCompaniesInHubspot

Search for companies in HubSpot CRM using filters and sorting.

HubspotCrmApi.RetrieveCompanyById

Retrieve detailed company information using its ID.

HubspotCrmApi.DeleteCompany

Delete a company by ID in HubSpot CRM.

HubspotCrmApi.UpdateHubspotCompany

Update a company's details in HubSpot CRM using its ID.

HubspotCrmApi.CreateOrUpdateCompanies

Create or update companies in HubSpot CRM using a unique identifier.

HubspotCrmApi.UpdateBatchOfCompanies

Update multiple company records in HubSpot by ID.

HubspotCrmApi.CreateBatchOfCompanies

Create a batch of companies with properties and associations.

HubspotCrmApi.DeleteCompaniesBatch

Delete a batch of companies by ID in HubSpot CRM.

HubspotCrmApi.MergeCompanyRecords

Merge two company records in HubSpot CRM.

HubspotCrmApi.BatchReadContacts

Retrieve multiple contacts using internal IDs or unique properties.

HubspotCrmApi.GetContactDetails

Retrieve detailed information about a specific contact.

HubspotCrmApi.DeleteContact

Delete a contact and move it to the recycling bin.

HubspotCrmApi.UpdateContactInformation

Update specific fields of a contact in HubSpot CRM.

HubspotCrmApi.MergeContacts

Merges two contacts into one in HubSpot CRM.

HubspotCrmApi.ArchiveContactsBatch

Archive a batch of contacts by ID in HubSpot CRM.

HubspotCrmApi.CreateBatchContacts

Create a batch of contacts in HubSpot CRM.

HubspotCrmApi.UpdateBatchContacts

Update a batch of contacts in HubSpot CRM.

HubspotCrmApi.GdprDeleteContact

Permanently delete a contact for GDPR compliance.

HubspotCrmApi.GetContacts

Retrieve a page of contacts from HubSpot CRM.

HubspotCrmApi.CreateHubspotContact

Create a contact in HubSpot CRM and retrieve its details.

HubspotCrmApi.SearchContacts

Search contacts in HubSpot CRM.

HubspotCrmApi.UpsertContactBatch

Upsert a batch of contacts in HubSpot CRM.

HubspotCrmApi.GetCourses

Fetch a page of courses from HubSpot CRM.

HubspotCrmApi.CreateHubspotCourse

Create a course in HubSpot CRM and return its details.

HubspotCrmApi.ArchiveCoursesBatch

Archive a batch of courses by ID.

HubspotCrmApi.GetCourseDetails

Fetch details of a course using the course ID.

HubspotCrmApi.DeleteCourse

Delete a course by moving it to the recycling bin.

HubspotCrmApi.UpdateHubspotCourse

Update specific properties of a HubSpot course object.

HubspotCrmApi.CreateBatchOfCourses

Create a batch of courses in CRM.

HubspotCrmApi.BatchUpsertRecords

Create or update HubSpot CRM records via unique identifier.

HubspotCrmApi.HubspotCrmSearchObjects

Search and retrieve objects from HubSpot CRM.

HubspotCrmApi.UpdateCoursesBatch

Update multiple courses in a batch by ID or unique properties.

HubspotCrmApi.RetrieveHubspotRecords

Retrieve HubSpot CRM records by ID or unique property.

HubspotCrmApi.RetrieveOwnersList

Retrieve a list of owners from the HubSpot CRM account.

HubspotCrmApi.RetrieveOwnerDetails

Retrieve details of a specific CRM owner by ID.

HubspotCrmApi.BatchRetrieveHubspotRecords

Retrieve HubSpot CRM records using batch read.

HubspotCrmApi.FetchHubspotObjectById

Retrieve a HubSpot CRM object using its unique ID.

HubspotCrmApi.MoveObjectToRecycleBin

Move a CRM object to the recycling bin.

HubspotCrmApi.ModifyHubspotObject

Update specific properties of a HubSpot CRM object.

HubspotCrmApi.MergeHubspotObjects

Merge two HubSpot CRM objects of the same type.

HubspotCrmApi.ArchiveHubspotObjectsBatch

Archive a batch of HubSpot CRM objects by ID.

HubspotCrmApi.UpdateHubspotObjectsBatch

Update multiple HubSpot CRM objects in a batch.

HubspotCrmApi.CreateHubspotObjectsBatch

Create a batch of objects in HubSpot CRM.

HubspotCrmApi.UpdateOrCreateHubspotRecords

Create or update HubSpot CRM records in bulk.

HubspotCrmApi.GetHubspotObjectsPage

Retrieve a page of HubSpot CRM objects.

HubspotCrmApi.CreateCrmObject

Create a CRM object and retrieve its details.

HubspotCrmApi.SearchHubspotObjects

Perform a search on HubSpot CRM objects by type.

HubspotCrmApi.UpdateMultipleDeals

Update multiple deals in the CRM system.

HubspotCrmApi.SearchDeals

Search for deals using specified criteria and filters.

HubspotCrmApi.CreateOrUpdateHubspotRecords

Create or update HubSpot CRM records using unique properties.

HubspotCrmApi.ArchiveMultipleDeals

Archive multiple deals using their IDs in HubSpot CRM.

HubspotCrmApi.RetrieveCrmRecords

Retrieve CRM records by ID or custom unique property.

HubspotCrmApi.GetHubspotDealById

Retrieve HubSpot CRM deal information by Deal ID.

HubspotCrmApi.ArchiveDealInHubspot

Archives a specific deal in HubSpot CRM.

HubspotCrmApi.UpdateHubspotDeal

Update a specific deal in HubSpot CRM.

HubspotCrmApi.CreateMultipleDeals

Create multiple deals in HubSpot CRM in one request.

HubspotCrmApi.GetDealsPage

Read a page of deals from the CRM system.

HubspotCrmApi.CreateHubspotDeal

Create a new deal in HubSpot CRM.

HubspotCrmApi.MergeDeals

Combine two deals into a single unified deal in HubSpot CRM.

HubspotCrmApi.ManageDealSplits

Create or replace deal splits for specific deals.

HubspotCrmApi.ReadBatchDealSplits

Fetch a batch of deal split objects by deal ID.

HubspotCrmApi.SearchDiscounts

Search for discounts in the HubSpot CRM.

HubspotCrmApi.UpdateDiscountsBatch

Update multiple discounts by ID or unique properties.

HubspotCrmApi.RetrieveDiscountDetails

Retrieve details of a discount by its ID.

HubspotCrmApi.DeleteDiscount

Delete a discount and move it to the recycling bin.

HubspotCrmApi.UpdateDiscountDetails

Update specific properties of a discount in HubSpot CRM.

HubspotCrmApi.CreateBatchDiscountsHubspot

Create a batch of discounts in HubSpot.

HubspotCrmApi.UpsertDiscountRecords

Create or update discount records in HubSpot CRM.

HubspotCrmApi.ArchiveDiscountsBatch

Archive a batch of discounts by their IDs in HubSpot CRM.

HubspotCrmApi.GetHubspotDiscounts

Retrieve a page of discounts from HubSpot CRM.

HubspotCrmApi.CreateDiscount

Creates a discount and returns its details.

HubspotCrmApi.RetrieveDiscountRecords

Retrieve discount records by ID or custom property.

HubspotCrmApi.CreateBatchOfEmails

Create a batch of emails with specified properties.

HubspotCrmApi.RetrieveEmailsPage

Retrieve a page of emails from HubSpot CRM.

HubspotCrmApi.CreateHubspotEmail

Create an email in HubSpot CRM and retrieve its details.

HubspotCrmApi.RetrieveEmailRecords

Retrieve email records by ID or custom property.

HubspotCrmApi.CreateOrUpdateHubspotEmails

Create or update HubSpot email records in batch.

HubspotCrmApi.RetrieveEmailById

Retrieve email object details using its ID.

HubspotCrmApi.DeleteEmail

Move an email to the recycling bin using its ID.

HubspotCrmApi.UpdateEmailInHubspotCrm

Updates an email object in HubSpot CRM with new property values.

HubspotCrmApi.ArchiveEmailsBatch

Archive a batch of emails by their IDs.

HubspotCrmApi.UpdateBatchEmails

Update a batch of emails by their IDs or unique properties.

HubspotCrmApi.SearchEmails

Search for emails based on specified query parameters.

HubspotCrmApi.GetFeedbackSubmissionById

Retrieve feedback submission details by ID.

HubspotCrmApi.SearchFeedbackSubmissions

Search for feedback submissions in HubSpot CRM.

HubspotCrmApi.RetrieveFeedbackRecords

Retrieve feedback submission records by ID or custom properties.

HubspotCrmApi.GetFeedbackSubmissions

Retrieve a page of feedback submissions from the CRM.

HubspotCrmApi.GetFeeDetails

Retrieve information about a specific fee by ID.

HubspotCrmApi.DeleteFeeObject

Move a fee object to the recycling bin using its fee ID.

HubspotCrmApi.UpdateFeeDetails

Update specific details of a fee in the CRM.

HubspotCrmApi.UpsertHubspotFees

Create or update fee records in HubSpot CRM.

HubspotCrmApi.GetCrmFees

Fetch a list of fees from the CRM.

HubspotCrmApi.CreateFeeInCrm

Create a fee in the CRM and receive the object's details.

HubspotCrmApi.CreateBatchFees

Create a batch of fees in HubSpot CRM.

HubspotCrmApi.SearchFeesInCrm

Search for fees in HubSpot CRM.

HubspotCrmApi.UpdateBatchFees

Update multiple fees by internal ID or unique properties.

HubspotCrmApi.ArchiveFeesBatch

Archives a batch of fees by their IDs in HubSpot CRM.

HubspotCrmApi.RetrieveFeeRecords

Retrieve fee records by ID or custom property.

HubspotCrmApi.CreateGoalTargetsBatch

Batch create multiple goal targets in HubSpot CRM.

HubspotCrmApi.RetrieveGoalTargets

Retrieve goal target records using record ID or custom value.

HubspotCrmApi.GetGoalTargetById

Retrieve goal target object details using its ID.

HubspotCrmApi.DeleteGoalTarget

Deletes a goal target by its ID to the recycling bin.

HubspotCrmApi.UpdateGoalTarget

Update properties of a HubSpot goal target.

HubspotCrmApi.SearchGoalTargets

Search for goal targets using specified criteria.

HubspotCrmApi.ArchiveGoalTargetsBatch

Archive multiple goal targets using their IDs in one batch.

HubspotCrmApi.UpdateBatchGoalTargets

Update multiple goal targets in HubSpot CRM.

HubspotCrmApi.UpsertGoalTargets

Create or update goal target records in HubSpot CRM.

HubspotCrmApi.GetGoalTargets

Retrieve a page of goal targets from HubSpot CRM.

HubspotCrmApi.CreateGoalTarget

Create a goal target in HubSpot CRM.

HubspotCrmApi.CreateBatchOfInvoices

Create a batch of invoices swiftly.

HubspotCrmApi.SearchInvoices

Find invoices in the HubSpot CRM.

HubspotCrmApi.RetrieveInvoiceRecords

Retrieve invoice records by ID or custom property.

HubspotCrmApi.GetInvoiceById

Retrieve invoice details by ID.

HubspotCrmApi.DeleteInvoice

Archive an invoice by moving it to the recycling bin.

HubspotCrmApi.UpdateInvoiceDetails

Update invoice details in HubSpot CRM.

HubspotCrmApi.UpdateInvoicesBatch

Updates multiple invoices in the HubSpot CRM.

HubspotCrmApi.RetrieveInvoices

Retrieve a page of invoices from HubSpot CRM.

HubspotCrmApi.CreateHubspotInvoice

Create an invoice in HubSpot CRM and retrieve its details.

HubspotCrmApi.UpsertHubspotInvoices

Create or update HubSpot invoice records in batch.

HubspotCrmApi.ArchiveInvoicesBatch

Archive a batch of invoices by their IDs.

HubspotCrmApi.RetrieveLeadRecords

Retrieve lead records by ID or custom unique property.

HubspotCrmApi.SearchCrmLeads

Search for leads in HubSpot CRM.

HubspotCrmApi.GetHubspotLeadsPage

Retrieve a page of leads from HubSpot CRM.

HubspotCrmApi.CreateLeadHubspot

Create a new lead in HubSpot CRM.

HubspotCrmApi.CreateLeadsBatch

Create a batch of new leads in HubSpot CRM.

HubspotCrmApi.UpdateLeadsBatch

Update multiple leads in a batch by ID or unique properties.

HubspotCrmApi.GetLeadById

Retrieve a lead by its unique identifier.

HubspotCrmApi.ArchiveHubspotLead

Archive a HubSpot CRM lead by identifier.

HubspotCrmApi.UpdateLeadDetails

Update details of a specific lead in HubSpot CRM.

HubspotCrmApi.ArchiveLeadsBatch

Archive a batch of leads by ID in HubSpot CRM.

HubspotCrmApi.GetAssociationLimitRecords

Fetch records near association limits between two objects.

HubspotCrmApi.GetCustomAssociationLabelsLimits

Get limits and usage for custom association labels in HubSpot CRM.

HubspotCrmApi.FetchAssociationLimitObjects

Fetch objects approaching association limits for a specified type.

HubspotCrmApi.GetCustomObjectLimits

Retrieve limits and usage for HubSpot custom object schemas.

HubspotCrmApi.GetCustomPropertyLimits

Retrieve limits and usage for custom properties per object.

HubspotCrmApi.RetrieveLimitApproachingRecords

Retrieve objects nearing or at HubSpot CRM association limits.

HubspotCrmApi.GetHubspotCrmLimitsRecords

Retrieve limits and usage for records in HubSpot CRM.

HubspotCrmApi.PipelineLimitsUsage

Retrieve limits and usage for HubSpot CRM pipelines.

HubspotCrmApi.GetCalculatedPropertiesLimits

Get limits and usage for calculated properties in HubSpot CRM.

HubspotCrmApi.RetrieveLineItemsPage

Retrieve a page of line items from HubSpot CRM.

HubspotCrmApi.CreateHubspotLineItem

Create a new line item in HubSpot CRM.

HubspotCrmApi.GetLineItemDetails

Retrieve details of a line item by its ID.

HubspotCrmApi.DeleteLineItem

Moves a specified line item to the recycling bin.

HubspotCrmApi.UpdateLineItem

Update properties of a CRM line item using its ID.

HubspotCrmApi.UpsertLineItemsBatch

Batch create or update line items by unique ID.

HubspotCrmApi.CreateLineItemsBatch

Create a batch of line items in HubSpot CRM.

HubspotCrmApi.UpdateLineItemsBatch

Update multiple line items in CRM using internal IDs or unique properties.

HubspotCrmApi.SearchLineItems

Search for line items in HubSpot CRM.

HubspotCrmApi.RetrieveBatchLineItems

Retrieve batch line item records by ID or custom property.

HubspotCrmApi.ArchiveLineItemsBatch

Archive a batch of line items in HubSpot CRM.

HubspotCrmApi.ListCrmEntries

Retrieve a page of CRM listings with specified properties.

HubspotCrmApi.CreateHubspotListing

Create a HubSpot CRM listing and get the object details.

HubspotCrmApi.ArchiveMultipleListings

Archive multiple listings using their IDs.

HubspotCrmApi.UpdateMultipleCrmListings

Update multiple CRM listings using internal IDs or unique properties.

HubspotCrmApi.FetchHubspotRecords

Retrieve HubSpot CRM records by ID or custom property.

HubspotCrmApi.CreateMultipleListings

Create multiple listings in a single request.

HubspotCrmApi.CreateOrUpdateBatchRecords

Create or update CRM records in batches.

HubspotCrmApi.SearchHubspotListings

Search listings in HubSpot CRM using filters and properties.

HubspotCrmApi.GetListingDetails

Retrieve details of a listing by its ID.

HubspotCrmApi.MoveListingToRecycleBin

Move a listing to the recycling bin by ID.

HubspotCrmApi.HubspotUpdateListing

Update specific details of a HubSpot listing.

HubspotCrmApi.UpdateListName

Update the name of a CRM list in HubSpot.

HubspotCrmApi.UpdateListMemberships

Add or remove records from a manual or snapshot list.

HubspotCrmApi.FetchHubspotListById

Fetch a single HubSpot CRM list using its ILS list ID.

HubspotCrmApi.DeleteList

Delete a specified CRM list by its ID.

HubspotCrmApi.RetrieveConversionDetails

Retrieve conversion details for a specific list in HubSpot CRM.

HubspotCrmApi.ScheduleListConversion

Schedule or update the conversion of an active list to static.

HubspotCrmApi.DeleteScheduledConversion

Delete a scheduled conversion for a specific list.

HubspotCrmApi.SearchHubspotLists

Search HubSpot CRM lists by name or page through all lists.

HubspotCrmApi.MoveListToFolder

Move a CRM list to a specified folder.

HubspotCrmApi.AddToHubspotCrmList

Add records to a specified HubSpot CRM list.

HubspotCrmApi.FetchListByName

Fetch details of a list by its name and object type.

HubspotCrmApi.MoveFolderInHubspot

Move a folder to a new parent in HubSpot CRM.

HubspotCrmApi.TranslateLegacyToNewListId

Translate legacy list ID to the new list ID format.

HubspotCrmApi.TranslateLegacyListIdsBatch

Translate legacy list IDs to new list IDs in batch.

HubspotCrmApi.RestoreDeletedList

Restore a previously deleted HubSpot CRM list.

HubspotCrmApi.RenameCrmFolder

Rename a folder in HubSpot CRM by its folder ID.

HubspotCrmApi.FetchListMembershipsOrdered

Fetch list memberships ordered by addition date.

HubspotCrmApi.AddAllFromSourceListToDestinationList

Add records from a source list to a destination list in HubSpot.

HubspotCrmApi.GetRecordListMemberships

Retrieve lists a CRM record is a member of.

HubspotCrmApi.DeleteCrmFolder

Deletes a specified CRM folder by ID.

HubspotCrmApi.RetrieveFoldersWithChildNodes

Retrieve folders and include all child folders recursively.

HubspotCrmApi.CreateFolderHubspotCrm

Creates a folder in HubSpot CRM with specified details.

HubspotCrmApi.RemoveRecordsFromList

Remove specified records from a HubSpot CRM list.

HubspotCrmApi.FetchHubspotListMemberships

Retrieve memberships of a HubSpot list by order of record ID.

HubspotCrmApi.RemoveAllListMemberships

Remove all records from a CRM list without deleting the list.

HubspotCrmApi.GetMeetingDetailsById

Retrieve detailed information about a specific meeting.

HubspotCrmApi.DeleteMeeting

Move a meeting to the recycling bin using its ID.

HubspotCrmApi.UpdateHubspotMeeting

Update specific properties of a HubSpot meeting.

HubspotCrmApi.UpdateMeetingsBatch

Update a batch of meetings in HubSpot CRM.

HubspotCrmApi.RetrieveMeetingRecords

Retrieve meeting records by ID or unique property.

HubspotCrmApi.ArchiveMeetingsBatch

Archive multiple meetings by IDs in batch.

HubspotCrmApi.GetMeetingsPage

Retrieve a page of meetings data from HubSpot CRM.

HubspotCrmApi.CreateHubspotMeeting

Create a meeting in HubSpot and get its details.

HubspotCrmApi.UpsertMeetings

Create or update meeting records in HubSpot CRM.

HubspotCrmApi.CreateBatchMeetings

Create a batch of meetings in HubSpot CRM.

HubspotCrmApi.SearchHubspotMeetings

Search for meetings in HubSpot CRM.

HubspotCrmApi.SearchHubspotNotes

Search for notes in HubSpot CRM.

HubspotCrmApi.RetrieveNotesPage

Retrieve a page of notes from HubSpot CRM.

HubspotCrmApi.CreateNoteInHubspot

Create a note in HubSpot CRM and return its details.

HubspotCrmApi.RetrieveNotesRecords

Retrieve notes records by ID or custom property.

HubspotCrmApi.UpsertNotesHubspot

Create or update notes in HubSpot CRM by unique property.

HubspotCrmApi.ArchiveNotesBatch

Archive a batch of notes by their IDs.

HubspotCrmApi.BatchUpdateNotes

Update multiple notes in HubSpot CRM by ID or property.

HubspotCrmApi.CreateBatchOfNotes

Create multiple notes in a CRM batch operation.

HubspotCrmApi.GetNoteDetails

Retrieve details of a note by its unique ID.

HubspotCrmApi.DeleteNoteHubspot

Move a HubSpot note to the recycling bin.

HubspotCrmApi.UpdateHubspotNote

Update a HubSpot note with new property values.

HubspotCrmApi.FetchEnablementData

Fetch enablement data from HubSpot CRM.

HubspotCrmApi.EnableObjectTypeInHubspot

Enable an object type in HubSpot CRM via its ID.

HubspotCrmApi.SearchOrderRecords

Search for order records in HubSpot CRM.

HubspotCrmApi.RetrieveHubspotOrders

Retrieve order records from HubSpot CRM by ID or custom property.

HubspotCrmApi.GetOrderDetails

Retrieve details of an order using its ID.

HubspotCrmApi.DeleteOrderById

Deletes an order by its ID from the CRM.

HubspotCrmApi.UpdateOrderDetails

Update specific details of an order using its ID.

HubspotCrmApi.UpsertOrdersInHubspot

Create or update orders in HubSpot CRM.

HubspotCrmApi.CreateBatchOrders

Create a batch of orders in HubSpot CRM.

HubspotCrmApi.UpdateHubspotOrdersBatch

Update multiple HubSpot CRM orders in a batch.

HubspotCrmApi.GetOrdersPage

Retrieve a page of orders from CRM.

HubspotCrmApi.CreateHubspotOrder

Create a new order in HubSpot CRM with specified properties.

HubspotCrmApi.ArchiveOrdersBatch

Archive a batch of orders by ID in HubSpot CRM.

HubspotCrmApi.UpdatePartnerClientsBatch

Update multiple partner clients in a batch.

HubspotCrmApi.GetPartnerClients

Retrieve partner clients from HubSpot CRM.

HubspotCrmApi.BatchReadPartnerClients

Fetch batch details of partner clients in HubSpot CRM.

HubspotCrmApi.SearchPartnerClients

Perform a search for partner clients in CRM.

HubspotCrmApi.GetPartnerClientInfo

Retrieve information for a specific partner client.

HubspotCrmApi.UpdatePartnerClient

Update details of a partner client in HubSpot CRM.

HubspotCrmApi.AssociatePartnerClientWithObject

Associate a partner client with another CRM object.

HubspotCrmApi.RemovePartnerClientAssociation

Remove an association between two partner clients in HubSpot CRM.

HubspotCrmApi.ListPartnerClientAssociations

Retrieve associations of a partner client by type.

HubspotCrmApi.GetPartnerServiceDetails

Retrieve details of a partner service by ID.

HubspotCrmApi.UpdatePartnerService

Partially update a partner service object in HubSpot CRM.

HubspotCrmApi.RetrievePartnerServicesRecords

Retrieve partner services records by ID or unique property.

HubspotCrmApi.SearchPartnerServicesHubspot

Search for partner services in HubSpot CRM.

HubspotCrmApi.GetPartnerServices

Retrieve a page of partner services.

HubspotCrmApi.AssociatePartnerService

Associate a partner service with another CRM object.

HubspotCrmApi.RemovePartnerServiceAssociation

Remove an association between two partner services.

HubspotCrmApi.UpdatePartnerServicesBatch

Update multiple partner services in CRM by ID or unique properties.

HubspotCrmApi.ListPartnerServiceAssociations

Retrieve associations of a partner service by type.

HubspotCrmApi.ReadBatchPayments

Retrieve a batch of payments from CRM by IDs or unique properties.

HubspotCrmApi.GetPaymentDetails

Retrieve details of a payment object by ID.

HubspotCrmApi.GetPaymentRecords

Retrieve a page of payment records from HubSpot CRM.

HubspotCrmApi.SearchHubspotPayments

Search for payments in HubSpot CRM.

HubspotCrmApi.GetPipelineStageAudit

Retrieve audit logs for a specific pipeline stage.

HubspotCrmApi.GetPipelineById

Retrieve a single CRM pipeline by its unique ID.

HubspotCrmApi.ReplacePipelineHubspot

Replace a specific pipeline in HubSpot CRM.

HubspotCrmApi.DeletePipeline

Delete a specific pipeline in the CRM.

HubspotCrmApi.UpdatePipelineInCrm

Partially update a pipeline in the CRM.

HubspotCrmApi.GetPipelineStages

Retrieve all stages of a specified pipeline.

HubspotCrmApi.CreatePipelineStage

Create a stage in a specified pipeline.

HubspotCrmApi.GetPipelineAuditLog

Retrieves the audit log for a specified CRM pipeline.

HubspotCrmApi.GetAllPipelines

Retrieve all pipelines for a specified object type.

HubspotCrmApi.CreateCrmPipeline

Create a new CRM pipeline in HubSpot.

HubspotCrmApi.GetPipelineStageById

Retrieve a specific pipeline stage by its ID.

HubspotCrmApi.ReplacePipelineStageProperties

Replace and update a pipeline stage in HubSpot CRM.

HubspotCrmApi.DeletePipelineStage

Deletes a pipeline stage from HubSpot CRM.

HubspotCrmApi.UpdatePipelineStage

Update a stage in a CRM pipeline.

HubspotCrmApi.GetMultiplePostalMailObjects

Retrieve multiple postal mail objects by IDs or unique values.

HubspotCrmApi.ArchivePostalMailBatch

Archive a batch of postal mail objects using their IDs.

HubspotCrmApi.GetPostalMailRecords

Retrieve postal mail records from the CRM.

HubspotCrmApi.CreatePostalMailObject

Create a postal mail object in HubSpot CRM.

HubspotCrmApi.CreatePostalMailBatch

Create a batch of postal mail objects in HubSpot CRM.

HubspotCrmApi.UpsertPostalMailInHubspot

Create or update postal mail records in HubSpot CRM.

HubspotCrmApi.GetPostalMailById

Retrieve details of a postal mail record by ID from HubSpot CRM.

HubspotCrmApi.ArchivePostalMail

Archive a postal mail object in HubSpot CRM.

HubspotCrmApi.UpdatePostalMailRecord

Update a postal mail record in HubSpot CRM.

HubspotCrmApi.UpdateMultiplePostalMails

Update multiple postal mail records at once in HubSpot CRM.

HubspotCrmApi.SearchPostalMailHubspot

Search for postal mail objects in HubSpot CRM.

HubspotCrmApi.ArchiveProductsBatch

Archive a batch of products by ID in HubSpot CRM.

HubspotCrmApi.GetProductsPage

Fetch a page of products from HubSpot CRM.

HubspotCrmApi.CreateProductInHubspot

Create a new product in HubSpot CRM.

HubspotCrmApi.SearchHubspotProducts

Search for products in HubSpot CRM.

HubspotCrmApi.RetrieveHubspotProductRecords

Retrieve HubSpot product records by ID or unique property.

HubspotCrmApi.CreateBatchOfProducts

Create a batch of products in HubSpot CRM.

HubspotCrmApi.UpsertHubspotProductsBatch

Batch create or update HubSpot product records.

HubspotCrmApi.GetProductDetailsById

Retrieve product details using a product ID.

HubspotCrmApi.RemoveProduct

Archive a product by moving it to the recycling bin.

HubspotCrmApi.UpdateProductInfo

Partially update product information in HubSpot CRM.

HubspotCrmApi.UpdateHubspotProductsBatch

Update a batch of HubSpot products by ID or unique properties.

HubspotCrmApi.ArchiveCrmProperties

Archive a list of properties in HubSpot CRM.

HubspotCrmApi.ReadPropertyGroup

Retrieve details of a property group by its name.

HubspotCrmApi.DeletePropertyGroup

Delete a property group and move it to recycling bin.

HubspotCrmApi.UpdatePropertyGroup

Update fields in a specified property group.

HubspotCrmApi.ReadProperty

Retrieve CRM property details by name and type.

HubspotCrmApi.DeletePropertyHubspotCrm

Delete a property in HubSpot CRM and move it to the recycling bin.

HubspotCrmApi.UpdatePropertyValue

Update specific fields of a CRM property partially.

HubspotCrmApi.ReadBatchProperties

Fetches a batch of properties for a specified CRM object type.

HubspotCrmApi.CreateBatchProperties

Create a batch of properties for a specified object type in HubSpot.

HubspotCrmApi.RetrieveHubspotProperties

Retrieve all properties for a HubSpot object type.

HubspotCrmApi.CreateHubspotCrmProperty

Create a new property for a specified object type in HubSpot CRM.

HubspotCrmApi.RetrieveHubspotPropertyGroups

Retrieve HubSpot CRM property groups for a specified object type.

HubspotCrmApi.CreatePropertyGroup

Create a new property group in HubSpot CRM.

HubspotCrmApi.GetPropertyValidationRules

Retrieve validation rules for properties of a given object in HubSpot CRM.

HubspotCrmApi.FetchPropertyValidation

Retrieve validation rules for a specific property in HubSpot CRM.

HubspotCrmApi.ArchiveQuotesBatch

Archive a batch of quotes in HubSpot CRM.

HubspotCrmApi.GetQuotesPage

Retrieve a page of quotes with specified properties.

HubspotCrmApi.CreateHubspotQuote

Create a new quote in HubSpot CRM.

HubspotCrmApi.GetQuoteById

Retrieve details of a quote by its ID.

HubspotCrmApi.ArchiveQuote

Archive a quote by moving it to the recycling bin.

HubspotCrmApi.UpdateQuoteInformation

Update a quote's details in HubSpot CRM.

HubspotCrmApi.UpdateQuoteBatch

Update a batch of quotes using internal ID or property values.

HubspotCrmApi.CreateOrUpdateQuotes

Create or update quote records in HubSpot CRM.

HubspotCrmApi.CreateBatchOfQuotes

Creates a batch of quotes in HubSpot CRM.

HubspotCrmApi.SearchQuotesInHubspot

Search for quotes in HubSpot CRM.

HubspotCrmApi.RetrieveQuotesBatch

Retrieve multiple quotes by ID or custom property.

HubspotCrmApi.GetHubspotCrmObjectSchemas

Retrieve HubSpot CRM object schemas.

HubspotCrmApi.CreateCrmObjectSchema

Create a new CRM object schema in HubSpot.

HubspotCrmApi.GetCrmObjectSchema

Retrieve a CRM object schema by its type.

HubspotCrmApi.DeleteCrmObjectSchema

Delete a CRM object schema in HubSpot.

HubspotCrmApi.UpdateCrmObjectSchema

Update a CRM object's schema in HubSpot.

HubspotCrmApi.CreateCrmObjectAssociation

Create an association between HubSpot CRM objects.

HubspotCrmApi.DeleteCrmAssociation

Remove an association between CRM object schemas.

HubspotCrmApi.FetchHubspotObjectRecords

Retrieve HubSpot CRM records by ID or custom property.

HubspotCrmApi.UpdateServicesBatch

Update multiple service records in HubSpot CRM.

HubspotCrmApi.HubspotCrmUpsertRecords

Create or update unique records in HubSpot CRM.

HubspotCrmApi.HubspotSearchCustomObjects

Search for custom objects in HubSpot CRM.

HubspotCrmApi.ArchiveServicesBatch

Archive multiple services using their IDs in bulk.

HubspotCrmApi.GetHubspotObjectById

Retrieve a HubSpot CRM object using its service ID.

HubspotCrmApi.DeleteObjectHubspot

Move an object to the recycling bin in HubSpot CRM.

HubspotCrmApi.EditHubspotObject

Partially update a HubSpot CRM object with specified properties.

HubspotCrmApi.ReadServicesPage

Retrieve a page of services with customizable properties.

HubspotCrmApi.CreateServiceRecord

Create a service record in HubSpot CRM.

HubspotCrmApi.CreateBatchOfServices

Create a batch of services in HubSpot CRM.

HubspotCrmApi.ArchiveHubspotTasks

Archive multiple HubSpot tasks by their IDs.

HubspotCrmApi.GetTaskDetails

Retrieve HubSpot CRM task details using task ID.

HubspotCrmApi.DeleteTaskInHubspot

Delete a task in HubSpot by task ID.

HubspotCrmApi.UpdateHubspotTask

Update properties of a HubSpot task using its ID.

HubspotCrmApi.CreateBatchTasks

Create a batch of tasks in HubSpot CRM.

HubspotCrmApi.UpdateBatchTasks

Update a batch of tasks in HubSpot CRM.

HubspotCrmApi.RetrieveHubspotTasks

Retrieve HubSpot task records by ID or custom property.

HubspotCrmApi.UpsertHubspotTasks

Create or update tasks in HubSpot using a unique property.

HubspotCrmApi.SearchHubspotTasks

Search for tasks in HubSpot CRM.

HubspotCrmApi.GetTasksList

Retrieve a page of tasks from HubSpot CRM.

HubspotCrmApi.CreateTaskInCrm

Create a task in HubSpot CRM and return task details.

HubspotCrmApi.GetTaxesPage

Retrieve a page of tax details from HubSpot CRM.

HubspotCrmApi.CreateHubspotTax

Create a tax in HubSpot CRM and retrieve its details.

HubspotCrmApi.GetTaxDetailsById

Retrieve tax details using a specific tax ID.

HubspotCrmApi.DeleteTaxEntry

Archive a tax entry in HubSpot CRM.

HubspotCrmApi.UpdateTaxObject

Update properties of a tax object in HubSpot CRM.

HubspotCrmApi.CreateOrUpdateTaxRecords

Create or update tax records based on unique properties.

HubspotCrmApi.UpdateBatchTaxes

Update taxes in batch using IDs or unique values.

HubspotCrmApi.RetrieveTaxRecords

Retrieve tax records by ID or custom property.

HubspotCrmApi.CreateTaxBatch

Create a batch of taxes in HubSpot CRM.

HubspotCrmApi.SearchTaxes

Search for tax entries within HubSpot CRM.

HubspotCrmApi.ArchiveTaxBatch

Archive a batch of taxes by their IDs.

HubspotCrmApi.MergeSupportTickets

Merge two support tickets into one unified record.

HubspotCrmApi.DeleteHubspotTicketsBatch

Delete a batch of tickets in HubSpot CRM.

HubspotCrmApi.GetTicketDetails

Retrieve details of a ticket by ID from HubSpot CRM.

HubspotCrmApi.DeleteTicket

Move a ticket to the recycling bin by ticket ID.

HubspotCrmApi.UpdateTicketInfo

Partially update ticket details in HubSpot CRM.

HubspotCrmApi.UpsertCrmTickets

Create or update CRM tickets in bulk using unique identifiers.

HubspotCrmApi.RetrieveTicketBatch

Retrieve a batch of tickets by ID or property value.

HubspotCrmApi.FetchTicketsPage

Retrieve a page of tickets from HubSpot CRM.

HubspotCrmApi.CreateTicket

Create a support ticket in HubSpot CRM.

HubspotCrmApi.SearchTickets

Search and filter CRM tickets based on properties and associations.

HubspotCrmApi.CreateBatchTickets

Create a batch of tickets in HubSpot CRM.

HubspotCrmApi.UpdateTicketBatch

Update multiple tickets in HubSpot CRM by ID or property.

HubspotCrmApi.RetrieveEventDetails

Retrieve detailed information for a specific HubSpot event.

HubspotCrmApi.SendEventToHubspot

Send event data to a specified HubSpot event type.

HubspotCrmApi.RetrieveEventInstance

Retrieve an event instance using template and event ID.

HubspotCrmApi.BatchCreateTimelineEvents

Batch create multiple timeline event instances.

HubspotCrmApi.UploadCallTranscripts

Upload call transcripts to HubSpot CRM.

HubspotCrmApi.GetTranscriptById

Retrieve call transcript details by transcript ID.

HubspotCrmApi.DeleteCallTranscript

Delete a call transcript by transcript ID.

HubspotCrmApi.SearchCrmUsers

Perform a user search in the CRM database.

HubspotCrmApi.CreateUsersBatch

Create a batch of users in the CRM system.

HubspotCrmApi.ArchiveUsersBatch

Archives a batch of users by their IDs in HubSpot CRM.

HubspotCrmApi.RetrieveHubspotUserRecords

Retrieve HubSpot user records by ID or unique property.

HubspotCrmApi.UpsertHubspotUsers

Create or update user records in HubSpot CRM.

HubspotCrmApi.GetUserInfo

Retrieves user information from HubSpot CRM using user ID.

HubspotCrmApi.DeleteUser

Delete a user and move to recycling bin.

HubspotCrmApi.UpdateHubspotUser

Update user details in HubSpot CRM.

HubspotCrmApi.UpdateMultipleUsers

Update multiple users in HubSpot CRM by internal ID or unique properties.

HubspotCrmApi.GetUsersPage

Fetch a page of users from the CRM.

HubspotCrmApi.CreateCrmUser

Create a new user in the CRM and retrieve their ID.

If you need to perform an action that’s not listed here, you can [get in touch with us](mailto:contact@arcade.dev) to request a new tool, or [create your own tools](/guides/create-tools/tool-basics/build-mcp-server.md).

## HubspotCrmApi.RetrieveHubspotCrmRecords



Retrieve HubSpot CRM records by ID or unique property.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **crm\_object\_type** (`string`, optional) The type of CRM object to retrieve (e.g., contacts, companies). Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **return\_only\_archived\_records** (`boolean`, optional) Set true to return only archived records; false to return unarchived records. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.CreateObjectAssociation



Create an association between two CRM objects in HubSpot.

**Parameters**

-   **association\_type** (`string`, required) Specifies the type of association to create between the objects, such as ‘contact\_to\_company’.
-   **source\_object\_id** (`string`, required) The ID of the primary object to associate in HubSpot. This should be a valid string representing the CRM object’s unique identifier.
-   **source\_object\_type** (`string`, required) Type of the source object. Specify the CRM object type, such as ‘contact’, ‘company’, or ‘deal’.
-   **target\_object\_id** (`string`, required) The ID of the target object to associate with. This is the object you want to link to the main object in HubSpot CRM.
-   **target\_object\_type** (`string`, required) The type of the target object to associate. Examples include ‘contact’, ‘company’, or ‘deal’.

## HubspotCrmApi.RemoveCrmAssociation



Remove associations between CRM objects.

**Parameters**

-   **association\_type** (`string`, required) The type of association between the CRM objects to be removed. Specify the nature of the relationship, such as ‘contact-to-company’.
-   **object\_type** (`string`, required) Specifies the type of the primary CRM object (e.g., ‘contact’, ‘company’).
-   **source\_object\_id** (`string`, required) The unique identifier of the source object whose association is to be removed.
-   **target\_object\_id** (`string`, required) The ID of the target object to unlink from the source object. This must be a string representing the unique identifier.
-   **target\_object\_type** (`string`, required) Specifies the type of the target CRM object to unlink. Examples include ‘contact’, ‘company’, etc.

## HubspotCrmApi.UpdateMultipleHubspotAppointments



Update multiple appointments in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **hubspot\_object\_type** (`string`, optional) Specify the type of HubSpot CRM object to update, e.g., ‘appointments’. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.GetAppointmentsData



Retrieve a page of appointments from HubSpot CRM.

**Parameters**

-   **appointment\_object\_type** (`string`, required) The type of HubSpot object to be queried, specifically for appointments.
-   **appointment\_properties\_to\_return** (`array[string]`, optional) A list of property names to include in the response. Properties not present on the requested objects are ignored.
-   **only\_archived\_results** (`boolean`, optional) Set to true to return only results that have been archived.
-   **paging\_cursor\_token** (`string`, optional) Token indicating the last successfully read resource to continue pagination.
-   **properties\_with\_history** (`array[string]`, optional) List properties to return with their history of values. Reduces max results per request.
-   **results\_limit** (`integer`, optional) Specify the maximum number of results to display per page.
-   **retrieve\_associated\_object\_types** (`array[string]`, optional) A list of object types to retrieve associated IDs for. If specified associations don’t exist, they will be ignored.

## HubspotCrmApi.CreateCrmAppointment



Create an appointment in the CRM with specified properties.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **appointment\_object\_type** (`string`, optional) Specifies the type of CRM object to create. For appointments, this should be ‘appointment’. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.CreateBatchAppointments



Create multiple appointments in one request.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **appointment\_object\_type** (`string`, optional) Specify the type of CRM object for the appointments, typically ‘appointments’. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.GetAssociationsInHubspot



Retrieve associations between HubSpot CRM objects.

**Parameters**

-   **hubspot\_object\_id** (`string`, required) The unique identifier for the HubSpot CRM object whose associations are being requested.
-   **object\_type** (`string`, required) Specifies the type of HubSpot CRM object (e.g., contact, deal, company) whose associations you want to retrieve.
-   **target\_object\_type** (`string`, required) The type of the target object to which the association is being found. Specify the object type like ‘contact’, ‘deal’, ‘company’, etc.
-   **include\_full\_associations** (`boolean`, optional) Set to true to include full associations in the response, otherwise only basic associations will be returned.
-   **max\_results** (`integer`, optional) Specifies the maximum number of associations to return. Provide an integer value to limit the results.
-   **paging\_offset\_after** (`string`, optional) A string used for pagination to get the next set of results after the specified cursor. Leave empty or omit for the first set of results.

## HubspotCrmApi.UpsertHubspotRecords



Create or update HubSpot CRM records in batch mode.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **object\_type** (`string`, optional) The type of object in HubSpot CRM (e.g., contacts, companies) to create or update. Specify the object type relevant to your operation. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.SearchAppointments



Search for appointments based on specified criteria.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **appointment\_search\_criteria\_type** (`string`, optional) Specify the type of object for the appointment search, such as ‘appointments’. This determines the domain within the CRM to be searched. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.ArchiveMultipleAppointments



Archive multiple appointments using their IDs.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **appointment\_object\_type** (`string`, optional) The type of object to be archived, typically ‘appointments’ for this endpoint. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.GdprDeleteObject



Delete CRM objects in compliance with GDPR.

**Parameters**

-   **object\_id** (`string`, required) The unique identifier for the CRM object to be deleted under GDPR compliance.
-   **object\_type\_for\_gdpr\_deletion** (`string`, required) Specify the type of CRM object to delete (e.g., contacts, companies) for GDPR compliance.
-   **unique\_property\_name** (`string`, optional) Specify a unique property name for the object to be deleted under GDPR.

## HubspotCrmApi.RetrieveCrmObject



Fetch CRM object details by ID or unique property.

**Parameters**

-   **object\_id** (`string`, required) The ID of the CRM object to retrieve. This can be the internal object ID or a unique property value specified by the id\_property.
-   **object\_type** (`string`, required) Specifies the type of CRM object to retrieve, such as “contacts”, “companies”, or “deals”.
-   **associated\_object\_types** (`array[string]`, optional) Comma-separated list of object types to retrieve associated IDs for. Missing associations are ignored.
-   **properties\_list** (`array[string]`, optional) An array of property names to be returned in the response. If any specified properties are not present, they will be ignored.
-   **properties\_with\_history** (`array[string]`, optional) List properties to be returned with their historical values. If a property doesn’t exist, it’ll be ignored.
-   **return\_only\_archived\_results** (`boolean`, optional) Set to true to return only archived results.
-   **unique\_property\_name** (`string`, optional) Specify the name of a property with unique values for this object to identify it instead of the default ID.

## HubspotCrmApi.DeleteCrmObject



Delete a CRM object and move it to the recycling bin.

**Parameters**

-   **crm\_object\_id** (`string`, required) The unique identifier for the CRM object to be deleted. This ID specifies which object will be moved to the recycling bin.
-   **crm\_object\_type** (`string`, required) Specify the type of CRM object to delete, such as ‘contact’, ‘deal’, or ‘company’.

## HubspotCrmApi.UpdateHubspotObject



Update specific properties of a HubSpot CRM object.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **object\_type** (`string`, optional) The type of CRM object to update (e.g., contacts, companies). Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **object\_identifier** (`string`, optional) A string representing the internal object ID or unique property value used to identify the HubSpot CRM object for updating. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **unique\_property\_name** (`string`, optional) The name of a property whose values are unique for the object, used to identify the object for the update. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.MergeHubspotCrmObjects



Merge two HubSpot CRM objects into a single entity.

**Parameters**

-   **hubspot\_object\_type** (`string`, required) Specify the type of HubSpot CRM object to merge, such as contact, company, or deal.
-   **object\_id\_to\_merge** (`string`, required) The ID of the HubSpot CRM object to be merged into the primary object. This should be a string identifier.
-   **primary\_object\_id** (`string`, required) The ID of the primary HubSpot CRM object to retain post-merge.

## HubspotCrmApi.CreateBatchAssociationsHubspot



Batch create associations between object types in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **from\_object\_type** (`string`, optional) The type of the source object for the association (e.g., ‘contact’, ‘company’). Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **target\_object\_type** (`string`, optional) The type of the object that the associations will point to (e.g., ‘contacts’, ‘companies’). Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.BatchReadAssociations



Retrieve batch associations between CRM object types in HubSpot.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **source\_object\_type** (`string`, optional) The CRM object type from which the associations originate, such as ‘contacts’ or ‘deals’. Specify a valid CRM object type. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **destination\_object\_type** (`string`, optional) Specify the CRM object type to associate with, such as ‘contacts’ or ‘companies’. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.HubspotBatchArchiveAssociations



Batch archive associations in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **source\_object\_type** (`string`, optional) The type of the source object for the associations to be archived (e.g., ‘contacts’, ‘companies’). Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **target\_object\_type** (`string`, optional) Specify the type of the object to which the association is directed, e.g., ‘company’, ‘deal’. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.GetAssociationTypes



Get association types between two object types in HubSpot CRM.

**Parameters**

-   **source\_object\_type** (`string`, required) Specifies the source object type in HubSpot CRM from which associations are retrieved (e.g., ‘contact’, ‘deal’).
-   **target\_object\_type** (`string`, required) Specify the type of the destination object to retrieve association types for. These are the related entities in HubSpot CRM.

## HubspotCrmApi.CreateBatchOfCalls



Create a batch of calls with specified properties and associations.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.UpsertCallRecords



Create or update call records in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.RetrieveCallsBatch



Retrieve a batch of calls by ID from HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **return\_only\_archived** (`boolean`, optional) Set to ‘true’ to return only archived calls, ‘false’ to exclude them. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.UpdateBatchCalls



Update multiple calls in HubSpot CRM by ID.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.GetCallsPage



Retrieve a page of call records from HubSpot CRM.

**Parameters**

-   **associated\_object\_types** (`array[string]`, optional) Specify object types to retrieve associated IDs for. Comma-separated list. Non-existing associations are ignored.
-   **call\_properties** (`array[string]`, optional) A list of properties to include in the response, such as call date, duration, etc.
-   **paging\_cursor\_token** (`string`, optional) The paging cursor token from the last successfully read resource for retrieving the next page of results.
-   **properties\_with\_history** (`array[string]`, optional) A list of properties to return with historical values. Note: Reduces max calls per request.
-   **results\_per\_page** (`integer`, optional) The maximum number of call records to display per page.
-   **return\_only\_archived\_results** (`boolean`, optional) Set to true to return only archived call records. False will include non-archived records.

## HubspotCrmApi.CreateHubspotCall



Create a call in HubSpot with specified properties.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.GetCallDetails



Retrieve details of a call using its ID in HubSpot CRM.

**Parameters**

-   **call\_identifier** (`string`, required) The unique identifier for the call. This can be an internal object ID or a unique property value as specified.
-   **associated\_object\_types** (`array[string]`, optional) Specify object types to retrieve associated IDs for. Use comma-separated values.
-   **only\_archived\_results** (`boolean`, optional) Specify `True` to return only archived results, otherwise `False`.
-   **properties\_with\_history** (`array[string]`, optional) Comma-separated list of properties to return with history. Ignores non-existent properties.
-   **return\_properties** (`array[string]`, optional) Comma-separated list of properties to return in the response. Ignored if not present on requested object.
-   **unique\_property\_name** (`string`, optional) Unique property name used to identify the call object in HubSpot CRM.

## HubspotCrmApi.ArchiveCallInHubspot



Archive a call in HubSpot CRM by moving it to the recycle bin.

**Parameters**

-   **call\_identifier** (`string`, required) The unique identifier for the call to be archived in HubSpot CRM.

## HubspotCrmApi.UpdateCallInfo



Update details of a specific call record in the CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **call\_identifier** (`string`, optional) The identifier for the call object you wish to update. This can be the internal call ID or a unique value defined by the `idProperty`. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **unique\_property\_name** (`string`, optional) The name of a unique property for identifying the call object, other than the default ID. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.ArchiveCallsBatch



Archive a batch of calls by their IDs.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.SearchCallsHubspot



Search and filter call records in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.ArchiveCartsBatch



Archive multiple carts by ID in a batch operation.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.CreateBatchOfCarts



Create a batch of carts efficiently in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.RetrieveCartDetails



Retrieve detailed information about shopping carts.

**Parameters**

-   **associated\_object\_types** (`array[string]`, optional) List object types to retrieve associated IDs for. Ignored if associations don’t exist.
-   **cart\_properties\_to\_return** (`array[string]`, optional) List of properties to include in the response for each cart. Ignored if missing on objects.
-   **max\_results\_per\_page** (`integer`, optional) Maximum number of results to display per page when retrieving cart details.
-   **paging\_cursor\_token** (`string`, optional) The paging cursor token for retrieving the next set of results. Use the `paging.next.after` from the previous response for more results.
-   **properties\_with\_history\_list** (`array[string]`, optional) List of properties to return with their history in the response. Reduces max number of carts per request.
-   **return\_only\_archived** (`boolean`, optional) Set to true to return only archived results.

## HubspotCrmApi.CreateCartHubspotCrm



Create a cart and retrieve its details including ID.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.RetrieveCartRecords



Retrieve cart records by record ID or custom property.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **only\_archived\_results** (`boolean`, optional) Set to true to return only archived results. Default is false. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.UpsertCartRecords



Create or update cart records in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.UpdateCartsBatch



Update a batch of carts by internal ID or unique properties.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.SearchHubspotCarts



Search for carts in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.GetCartDetails



Retrieve detailed information of a cart by ID.

**Parameters**

-   **cart\_identifier** (`string`, required) The unique identifier for the cart. This can be the internal ID or a unique property value specified by the `idProperty` parameter.
-   **associated\_object\_types** (`array[string]`, optional) A list of object types to retrieve associated IDs for, such as ‘deals’ or ‘contacts’.
-   **only\_return\_archived\_results** (`boolean`, optional) Set to `true` to return only archived results; `false` includes all.
-   **properties\_with\_history** (`array[string]`, optional) Specify properties to retrieve alongside their history of previous values, separated by commas.
-   **return\_properties** (`array[string]`, optional) List of specific properties to retrieve for the cart. Ignored if properties don’t exist.
-   **unique\_property\_name** (`string`, optional) Specify a property name with unique values for the cart object, if not using the default internal ID.

## HubspotCrmApi.DeleteShoppingCart



Delete a shopping cart from HubSpot CRM.

**Parameters**

-   **cart\_identifier** (`string`, required) The unique identifier of the shopping cart to delete from HubSpot CRM. It should be a string.

## HubspotCrmApi.UpdateCartProperties



Update specific properties of a cart in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **cart\_identifier** (`string`, optional) The unique identifier of the cart to be updated. This is required to specify which cart’s properties will be modified. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **unique\_identifier\_property** (`string`, optional) The name of the property with unique values for this cart object to identify it. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.UpsertCommercePayments



Create or update unique commerce payment records in HubSpot.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.CreateBatchCommercePayments



Create a batch of commerce payments in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.RetrieveCommercePaymentDetails



Retrieve details of a specific commerce payment using its ID.

**Parameters**

-   **commerce\_payment\_id** (`string`, required) The unique identifier for the commerce payment to retrieve details for. It corresponds to the internal object ID by default.
-   **associated\_object\_types** (`array[string]`, optional) List of object types to retrieve associated IDs for. If any specified associations do not exist, they are ignored.
-   **only\_return\_archived\_results** (`boolean`, optional) Specify `true` to return only archived results. Default is `false`.
-   **properties\_with\_history** (`array[string]`, optional) List of properties to retrieve along with their historical values. Specify as comma-separated values.
-   **return\_properties** (`array[string]`, optional) A list of property names to be included in the response. Irrelevant properties will be ignored.
-   **unique\_property\_name** (`string`, optional) The property name used as a unique identifier for the commerce payment object.

## HubspotCrmApi.DeleteCommercePayment



Delete a commerce payment from the CRM system.

**Parameters**

-   **commerce\_payment\_id** (`string`, required) The unique identifier for the commerce payment to be moved to the recycling bin.

## HubspotCrmApi.UpdateCommercePayment



Partially update a commerce payment by ID or unique property.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **commerce\_payment\_id** (`string`, optional) The internal ID of the commerce payment to update. This ID identifies the specific payment object within the system. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **unique\_property\_name** (`string`, optional) The name of a unique property for identifying the object. Use this if not using the default internal ID. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.ArchiveCommercePaymentsBatch



Archive a batch of commerce payments by ID.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.UpdateCommercePaymentsBatch



Update a batch of commerce payments by internal ID or unique values.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.RetrieveCommercePaymentRecords



Retrieve commerce payment records by ID or unique property.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **return\_archived\_results\_only** (`boolean`, optional) Return only archived commerce payment records if set to true. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.SearchCommercePayments



Search for commerce payments in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.GetCommercePayments



Retrieve a page of commerce payments from HubSpot CRM.

**Parameters**

-   **associations\_to\_retrieve** (`array[string]`, optional) List of object types to retrieve associated IDs for. Non-existing associations are ignored.
-   **paging\_cursor\_token** (`string`, optional) The paging cursor token from the last successfully read resource. Used for paginating through results.
-   **properties\_with\_history** (`array[string]`, optional) A list of properties to be returned with their historical values. Reduces the maximum payments per request.
-   **results\_per\_page** (`integer`, optional) Specify the maximum number of results to display per page.
-   **returned\_properties** (`array[string]`, optional) List the properties to return in the response. Non-present properties are ignored.
-   **show\_only\_archived** (`boolean`, optional) Set to true to return only archived results.

## HubspotCrmApi.CreateCommercePayment



Create a commerce payment and return its details.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.UpdateSubscriptionBatch



Update multiple subscriptions by ID or property values.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.ArchiveSubscriptionsBatch



Archive a batch of subscriptions by ID in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.SearchHubspotSubscriptions



Search for subscriptions in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.GetSubscriptionData



Fetch a page of subscription data from HubSpot CRM.

**Parameters**

-   **associated\_object\_types** (`array[string]`, optional) List of object types to retrieve associated IDs for. Ignored if not existing.
-   **max\_results\_per\_page** (`integer`, optional) The maximum number of subscription results to display per page.
-   **paging\_cursor\_token** (`string`, optional) The token indicating the last successfully read resource, used for pagination in subsequent requests.
-   **properties\_with\_history** (`array[string]`, optional) List of property names for retrieving their values and history. Reduces max subscriptions per request.
-   **requested\_properties** (`array[string]`, optional) A list of property names to be included in the response. If a specified property is not present in the requested objects, it will be ignored.
-   **return\_only\_archived** (`boolean`, optional) Set to true to return only archived results. Set to false to include active results.

## HubspotCrmApi.CreateSubscription



Create a new subscription in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.UpsertSubscriptionsInHubspotCrm



Batch create or update subscription records in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.RetrieveSubscriptionRecords



Retrieve subscription records by ID or unique property.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **only\_archived\_records** (`boolean`, optional) Set to true to return only archived results. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.CreateBatchSubscriptions



Create a batch of subscriptions in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.GetSubscriptionDetails



Retrieve details of a specific subscription by ID.

**Parameters**

-   **subscription\_id** (`string`, required) The unique identifier for the subscription object to be retrieved. This can be the internal object ID or a unique property value specified by the idProperty query param.
-   **association\_types\_to\_retrieve** (`array[string]`, optional) A list of object types to retrieve associated IDs for. Non-existing associations will be ignored.
-   **only\_archived\_results** (`boolean`, optional) Set to true to return only archived items, false to exclude them.
-   **properties\_with\_history** (`array[string]`, optional) A list of property names whose values and history are to be retrieved for the subscription. Properties not present on the object will be ignored.
-   **requested\_properties** (`array[string]`, optional) List of properties to return in the response. Properties not present in the object will be ignored.
-   **unique\_property\_name** (`string`, optional) The property name used to uniquely identify the subscription object instead of the default ID.

## HubspotCrmApi.DeleteSubscription



Delete a specific subscription from HubSpot CRM.

**Parameters**

-   **subscription\_id** (`string`, required) The unique identifier of the subscription to be deleted. This moves the subscription to the recycling bin in HubSpot CRM.

## HubspotCrmApi.UpdateSubscription



Update subscription details using provided property values.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **subscription\_id** (`string`, optional) The identifier for the subscription to update, typically the internal object ID. Specify this to target the right subscription. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **unique\_property\_name** (`string`, optional) The name of a unique property to identify the subscription object for updating. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.UpdateMessagesBatch



Update a batch of messages in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.DeleteBatchMessages



Delete a batch of messages by ID with restoration option.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.UpsertCommunicationsRecords



Create or update communication records in bulk.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.ReadCommunicationsPage



Retrieve a page of communications from HubSpot CRM.

**Parameters**

-   **paging\_cursor\_token** (`string`, optional) The paging cursor token for the next set of results to read from the previous request’s `paging.next.after` JSON property.
-   **properties\_with\_history** (`array[string]`, optional) A list of properties to return with their history. Reduces the maximum number of communications per request.
-   **results\_per\_page** (`integer`, optional) The maximum number of results to display per page.
-   **retrieve\_associations** (`array[string]`, optional) Comma-separated list of object types to get associated IDs for. Ignored if the association doesn’t exist.
-   **return\_only\_archived\_results** (`boolean`, optional) Set to true to return only archived results. False includes all results.
-   **specified\_properties** (`array[string]`, optional) List of communication properties to return in the response. Properties not present will be ignored.

## HubspotCrmApi.CreateHubspotCommunication



Create a new communication entry in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.GetCommunicationById



Retrieve details of a communication by its ID.

**Parameters**

-   **communication\_identifier** (`string`, required) Specify the unique ID or property value for the communication object to retrieve.
-   **properties\_to\_return** (`array[string]`, optional) Comma-separated list of properties to include in the response. Missing properties are ignored.
-   **properties\_with\_history** (`array[string]`, optional) List the properties whose history of values should be returned. Comma-separated values are expected.
-   **retrieve\_associated\_object\_types** (`array[string]`, optional) A list of object types for retrieving associated IDs. Non-existing associations will be ignored.
-   **return\_only\_archived** (`boolean`, optional) Set to true to return only results that have been archived. Defaults to false to include non-archived results.
-   **unique\_property\_name** (`string`, optional) The property name used to uniquely identify the communication object. Allows retrieval by non-default identifiers.

## HubspotCrmApi.ArchiveCommunication



Archive a communication by its ID.

**Parameters**

-   **communication\_id** (`string`, required) The unique identifier for the communication object to be archived. It must be a valid string representing an existing communication ID.

## HubspotCrmApi.UpdateCommunicationDetails



Update communication object details in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **communication\_id** (`string`, optional) The internal object ID of the communication. Used to identify which communication object to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **unique\_property\_name** (`string`, optional) The unique property name used to identify the communication object if not using `communicationId`. It must refer to a property with unique values for the object. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.SearchCrmMessages



Search and filter CRM messages based on various criteria.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.RetrieveBatchCommunications



Retrieve a batch of communication messages by ID.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **return\_archived\_only** (`boolean`, optional) Set to True to return only archived results. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.CreateHubspotMessagesBatch



Create a batch of messages in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.RetrieveBatchCompaniesHubspot



Retrieve a batch of company records from HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **return\_archived\_only** (`boolean`, optional) Set to true to return only archived companies in the results. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.RetrieveAllCompanies



Retrieve all companies from HubSpot CRM.

**Parameters**

-   **associated\_object\_types** (`array[string]`, optional) A list of object types to retrieve associated IDs for. Non-existent associations will be ignored.
-   **paging\_cursor\_token** (`string`, optional) The cursor token to fetch the next set of results in a paginated response.
-   **properties\_to\_return** (`array[string]`, optional) List of properties to include in the response. Ignore if not present on the object.
-   **properties\_with\_history** (`array[string]`, optional) A list of properties to return with their history of previous values. This reduces max companies per request.
-   **results\_per\_page\_limit** (`integer`, optional) The maximum number of results to display per page.
-   **return\_only\_archived\_results** (`boolean`, optional) Set to true to return only archived results in the response.

## HubspotCrmApi.CreateCompanyHubspot



Create a new company in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.SearchCompaniesInHubspot



Search for companies in HubSpot CRM using filters and sorting.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.RetrieveCompanyById



Retrieve detailed company information using its ID.

**Parameters**

-   **company\_identifier** (`string`, required) A unique identifier for the company, such as its ID or a unique property name, used to retrieve its details.
-   **associated\_object\_types** (`array[string]`, optional) A list of object types to retrieve associated IDs for. Ignores non-existent associations.
-   **company\_properties\_to\_retrieve** (`array[string]`, optional) List the specific company properties to retrieve, separated by commas. Ignored if properties are unavailable.
-   **retrieve\_properties\_with\_history** (`array[string]`, optional) List of properties to return with their history of previous values. Ignored if properties aren’t present.
-   **return\_only\_archived** (`boolean`, optional) Set to true to return only archived results. If false, non-archived results will be returned.
-   **unique\_property\_name** (`string`, optional) The name of a unique property to identify the company. Used instead of company ID.

## HubspotCrmApi.DeleteCompany



Delete a company by ID in HubSpot CRM.

**Parameters**

-   **company\_id** (`string`, required) The unique identifier of the company to be deleted in HubSpot CRM. This ID is required to specify the company.

## HubspotCrmApi.UpdateHubspotCompany



Update a company’s details in HubSpot CRM using its ID.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **company\_unique\_identifier** (`string`, optional) The unique identifier for the company to be updated, either the companyId or a unique property value. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **unique\_property\_name** (`string`, optional) Specify the name of the unique property used to identify the company. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.CreateOrUpdateCompanies



Create or update companies in HubSpot CRM using a unique identifier.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.UpdateBatchOfCompanies



Update multiple company records in HubSpot by ID.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.CreateBatchOfCompanies



Create a batch of companies with properties and associations.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.DeleteCompaniesBatch



Delete a batch of companies by ID in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.MergeCompanyRecords



Merge two company records in HubSpot CRM.

**Parameters**

-   **company\_id\_to\_merge** (`string`, required) The ID of the company to merge into the primary company.
-   **primary\_company\_id** (`string`, required) The ID of the primary company into which the other company will be merged.

## HubspotCrmApi.BatchReadContacts



Retrieve multiple contacts using internal IDs or unique properties.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **return\_archived\_only** (`boolean`, optional) Set to True to return only archived contacts. False excludes them. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.GetContactDetails



Retrieve detailed information about a specific contact.

**Parameters**

-   **contact\_identifier** (`string`, required) The ID or unique property value used to identify the contact in HubSpot CRM.
-   **associated\_object\_types** (`array[string]`, optional) A list of object types to retrieve associated IDs for. Ignored if associations do not exist.
-   **properties\_with\_history** (`array[string]`, optional) A list of properties to return with their history of previous values. Ignored if properties are not present.
-   **return\_only\_archived\_results** (`boolean`, optional) Set to true to return only results that have been archived.
-   **return\_properties** (`array[string]`, optional) List of properties to include in the response for the contact. If absent on the object, they will be ignored.
-   **unique\_property\_name** (`string`, optional) The property name with unique values for the contact type, used to identify the object.

## HubspotCrmApi.DeleteContact



Delete a contact and move it to the recycling bin.

**Parameters**

-   **contact\_id** (`string`, required) The unique identifier of the contact to be deleted and moved to the recycling bin.

## HubspotCrmApi.UpdateContactInformation



Update specific fields of a contact in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **contact\_id** (`string`, optional) The unique ID or property value used to identify the contact for the update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **unique\_property\_name** (`string`, optional) Specify the property name with unique values for identifying the contact, such as email or phone number. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.MergeContacts



Merges two contacts into one in HubSpot CRM.

**Parameters**

-   **contact\_id\_to\_merge** (`string`, required) The ID of the contact object that will be merged into the primary contact.
-   **primary\_contact\_id** (`string`, required) The unique identifier of the primary contact that will remain after merging. This contact’s information will be retained.

## HubspotCrmApi.ArchiveContactsBatch



Archive a batch of contacts by ID in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.CreateBatchContacts



Create a batch of contacts in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.UpdateBatchContacts



Update a batch of contacts in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.GdprDeleteContact



Permanently delete a contact for GDPR compliance.

**Parameters**

-   **contact\_identifier** (`string`, required) The unique ID or email used to identify the contact for deletion. Use ‘email’ in conjunction with ‘id\_property’ if identifying by email.
-   **contact\_identifier\_property** (`string`, optional) Specify ‘email’ to identify the contact by email address. If not using email, specify another unique identifier property.

## HubspotCrmApi.GetContacts



Retrieve a page of contacts from HubSpot CRM.

**Parameters**

-   **contact\_properties\_to\_retrieve** (`array[string]`, optional) A list of properties to include in the response. Non-existent properties will be ignored.
-   **max\_results\_per\_page** (`integer`, optional) The maximum number of contact results to return per page.
-   **paging\_cursor\_token** (`string`, optional) The token indicating the last read resource, used for pagination to retrieve more results.
-   **properties\_with\_history** (`array[string]`, optional) Specify properties to return with their history of previous values, reducing the max number of objects per request.
-   **retrieve\_associated\_ids** (`array[string]`, optional) A list of object types to retrieve associated IDs for. If associations do not exist, they will be ignored.
-   **return\_only\_archived\_results** (`boolean`, optional) Whether to return only results that have been archived. Use ‘true’ for archived only.

## HubspotCrmApi.CreateHubspotContact



Create a contact in HubSpot CRM and retrieve its details.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.SearchContacts



Search contacts in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.UpsertContactBatch



Upsert a batch of contacts in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.GetCourses



Fetch a page of courses from HubSpot CRM.

**Parameters**

-   **associated\_object\_types** (`array[string]`, optional) Comma-separated list of object types to retrieve associated IDs for; ignored if non-existent.
-   **maximum\_results\_per\_page** (`integer`, optional) Specify the maximum number of courses to display in a single page of results.
-   **paging\_cursor\_token** (`string`, optional) The paging cursor token of the last successfully read resource, used to fetch the next page of results.
-   **properties\_to\_return** (`array[string]`, optional) Comma separated list of properties to include in the response. Ignored if not present on requested objects.
-   **properties\_with\_history** (`array[string]`, optional) List of properties to return with their history. This can reduce the number of courses per request.
-   **return\_only\_archived\_results** (`boolean`, optional) Set to true to return only archived results. False includes non-archived results.

## HubspotCrmApi.CreateHubspotCourse



Create a course in HubSpot CRM and return its details.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.ArchiveCoursesBatch



Archive a batch of courses by ID.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.GetCourseDetails



Fetch details of a course using the course ID.

**Parameters**

-   **course\_id** (`string`, required) The unique identifier for the course. Use this to specify which course details to retrieve.
-   **include\_properties** (`array[string]`, optional) A list of property names to include in the response. Any missing properties will be ignored.
-   **include\_properties\_with\_history** (`array[string]`, optional) Specify properties to retrieve with their history of changes. Input as a list, each entry being a property name.
-   **retrieve\_associated\_object\_types** (`array[string]`, optional) A list of object types for retrieving associated IDs. Non-existent associations will be ignored.
-   **return\_only\_archived** (`boolean`, optional) Set to true to return only results that have been archived.
-   **unique\_property\_name** (`string`, optional) Specify the name of a unique property for the course object.

## HubspotCrmApi.DeleteCourse



Delete a course by moving it to the recycling bin.

**Parameters**

-   **course\_id** (`string`, required) The unique identifier for the course to be deleted. This identifier is used to locate the specific course in the CRM system.

## HubspotCrmApi.UpdateHubspotCourse



Update specific properties of a HubSpot course object.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **course\_identifier** (`string`, optional) The unique identifier for the HubSpot course. It can be the internal course ID or a unique property value specified by `idProperty`. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **unique\_property\_name** (`string`, optional) The property name with unique values for identifying the object to update. Use it if not using `courseId`. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.CreateBatchOfCourses



Create a batch of courses in CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.BatchUpsertRecords



Create or update HubSpot CRM records via unique identifier.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.HubspotCrmSearchObjects



Search and retrieve objects from HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.UpdateCoursesBatch



Update multiple courses in a batch by ID or unique properties.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.RetrieveHubspotRecords



Retrieve HubSpot CRM records by ID or unique property.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **return\_archived\_records** (`boolean`, optional) Set to true to return only archived records; false to exclude archived records in HubSpot CRM. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.RetrieveOwnersList



Retrieve a list of owners from the HubSpot CRM account.

**Parameters**

-   **filter\_by\_email** (`string`, optional) Specify an email address to filter the list of owners returned. Only the owner with this exact email will be retrieved.
-   **include\_archived** (`boolean`, optional) Set to true to include archived owners in the retrieved list.
-   **owners\_list\_limit** (`integer`, optional) The maximum number of owners to return per page. Provide an integer value.
-   **pagination\_cursor\_after** (`string`, optional) A cursor to get the next page of results, indicating the last result shown from the previous request.

## HubspotCrmApi.RetrieveOwnerDetails



Retrieve details of a specific CRM owner by ID.

**Parameters**

-   **owner\_id** (`integer`, required) The unique ID of the CRM owner. Use this to retrieve the owner’s details.
-   **include\_archived** (`boolean`, optional) Set to true to include archived owners in the retrieved details.
-   **owner\_id\_type** (`string`, optional) Specify whether the ‘ownerId’ refers to an ‘id’ or ‘userId’.

## HubspotCrmApi.BatchRetrieveHubspotRecords



Retrieve HubSpot CRM records using batch read.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **crm\_object\_type** (`string`, optional) Specify the type of CRM object to retrieve, such as ‘contact’, ‘deal’, or ‘company’. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **return\_archived\_results** (`boolean`, optional) Set to true to return only archived results. Use false to include active records. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.FetchHubspotObjectById



Retrieve a HubSpot CRM object using its unique ID.

**Parameters**

-   **object\_identifier** (`string`, required) The unique identifier of the HubSpot CRM object to retrieve. This can be the internal object ID or another unique property value if specified by the `id_property` parameter.
-   **object\_type** (`string`, required) The type of the HubSpot CRM object you want to retrieve. Examples include ‘contact’, ‘company’, and ‘deal’.
-   **associated\_object\_types** (`array[string]`, optional) Specify object types to retrieve associated IDs for, separated by commas. Non-existing associations will be ignored.
-   **properties\_with\_history** (`array[string]`, optional) A list of properties to return along with their historical values. Ignored if properties are not present.
-   **return\_only\_archived\_results** (`boolean`, optional) Set to true to return only archived results. Set to false to include all results.
-   **return\_properties** (`array[string]`, optional) List of properties to return for the object. Ignored if not present on the object.
-   **unique\_property\_name** (`string`, optional) Specify the property name that uniquely identifies the object.

## HubspotCrmApi.MoveObjectToRecycleBin



Move a CRM object to the recycling bin.

**Parameters**

-   **object\_id** (`string`, required) The unique identifier for the CRM object to be moved to the recycling bin. This ID specifies which object within the CRM will be affected.
-   **object\_type** (`string`, required) Type of the CRM object to be moved, such as ‘contacts’, ‘companies’, etc.

## HubspotCrmApi.ModifyHubspotObject



Update specific properties of a HubSpot CRM object.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **hubspot\_object\_type** (`string`, optional) Specify the type of HubSpot CRM object (e.g., ‘contacts’, ‘companies’, ‘deals’). Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **object\_identifier** (`string`, optional) The internal ID of the HubSpot object to update. Use a string format. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **unique\_property\_name** (`string`, optional) The name of a unique property for identifying the object. Use when the default object ID isn’t used. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.MergeHubspotObjects



Merge two HubSpot CRM objects of the same type.

**Parameters**

-   **object\_id\_to\_merge** (`string`, required) The ID of the object to be merged into the primary object. It must be of the same type as the primary object.
-   **object\_type\_to\_merge** (`string`, required) The type of HubSpot CRM object to merge, such as ‘contacts’ or ‘companies’.
-   **primary\_object\_id** (`string`, required) The ID of the object that will remain after the merge. Provide as a string.

## HubspotCrmApi.ArchiveHubspotObjectsBatch



Archive a batch of HubSpot CRM objects by ID.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **hubspot\_object\_type** (`string`, optional) Specifies the type of HubSpot CRM objects to archive (e.g., ‘contacts’, ‘companies’). Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.UpdateHubspotObjectsBatch



Update multiple HubSpot CRM objects in a batch.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **object\_type** (`string`, optional) The type of HubSpot CRM object to update, such as ‘contacts’, ‘companies’, ‘deals’, or ‘tickets’. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.CreateHubspotObjectsBatch



Create a batch of objects in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **hubspot\_object\_type** (`string`, optional) Specifies the type of object to create in HubSpot, such as ‘contacts’, ‘deals’, or ‘companies’. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.UpdateOrCreateHubspotRecords



Create or update HubSpot CRM records in bulk.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **crm\_object\_type** (`string`, optional) Specifies the type of CRM object to act upon, such as ‘contacts’, ‘companies’, etc. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.GetHubspotObjectsPage



Retrieve a page of HubSpot CRM objects.

**Parameters**

-   **object\_type** (`string`, required) Specify the type of CRM object to retrieve, such as ‘contacts’, ‘companies’, or ‘deals’.
-   **associated\_object\_types** (`array[string]`, optional) Comma-separated object types to retrieve associated IDs for. Ignored if associations do not exist.
-   **max\_results\_per\_page** (`integer`, optional) Specify the maximum number of results to display per page.
-   **paging\_cursor\_token** (`string`, optional) The token used to retrieve the next page of results. Obtained from the `paging.next.after` property of a previous response.
-   **properties\_with\_history** (`array[string]`, optional) List the properties to return with their historical values in the CRM objects.
-   **requested\_properties** (`array[string]`, optional) List of properties to include in the response. Ignored if not present on the object(s).
-   **return\_archived\_results\_only** (`boolean`, optional) Return only the archived results if set to true.

## HubspotCrmApi.CreateCrmObject



Create a CRM object and retrieve its details.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **crm\_object\_type** (`string`, optional) Specify the type of CRM object to create, such as ‘contact’, ‘company’, or ‘deal’. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.SearchHubspotObjects



Perform a search on HubSpot CRM objects by type.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **object\_type** (`string`, optional) Specify the type of object to search for in HubSpot, such as contacts, companies, or deals. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.UpdateMultipleDeals



Update multiple deals in the CRM system.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.SearchDeals



Search for deals using specified criteria and filters.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.CreateOrUpdateHubspotRecords



Create or update HubSpot CRM records using unique properties.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.ArchiveMultipleDeals



Archive multiple deals using their IDs in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.RetrieveCrmRecords



Retrieve CRM records by ID or custom unique property.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **retrieve\_only\_archived\_records** (`boolean`, optional) Set to true to retrieve only archived CRM records. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.GetHubspotDealById



Retrieve HubSpot CRM deal information by Deal ID.

**Parameters**

-   **deal\_id** (`string`, required) The unique identifier of the deal to retrieve from HubSpot CRM.
-   **associated\_object\_types** (`array[string]`, optional) List of object types to retrieve associated IDs for. Ignored if associations do not exist.
-   **properties\_with\_history** (`array[string]`, optional) Specify properties to return with their history of values. Use a comma-separated list.
-   **return\_archived\_only** (`boolean`, optional) Set to true to return only results that have been archived.
-   **return\_properties** (`array[string]`, optional) List of properties to be returned in the response. Ignored if not present on the object.
-   **unique\_property\_name** (`string`, optional) Specify the unique property name used to identify the deal. It defaults to an internal object ID if not provided.

## HubspotCrmApi.ArchiveDealInHubspot



Archives a specific deal in HubSpot CRM.

**Parameters**

-   **deal\_id** (`string`, required) The unique identifier of the deal to be archived in HubSpot CRM.

## HubspotCrmApi.UpdateHubspotDeal



Update a specific deal in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **deal\_identifier** (`string`, optional) The unique identifier of the deal to be updated in HubSpot CRM. Can be internal ID or unique property value. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **unique\_property\_name** (`string`, optional) The name of a unique property to identify the deal instead of `dealId`. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.CreateMultipleDeals



Create multiple deals in HubSpot CRM in one request.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.GetDealsPage



Read a page of deals from the CRM system.

**Parameters**

-   **associated\_object\_types** (`array[string]`, optional) List of object types to retrieve associated IDs for, separated by commas. If associations don’t exist, they’re ignored.
-   **deal\_properties** (`array[string]`, optional) List the properties to include in the response as a comma-separated string. Ignored if not present.
-   **paging\_cursor\_token** (`string`, optional) The token for the paging cursor to retrieve the next page of results.
-   **properties\_with\_history** (`array[string]`, optional) A list of deal properties for which historical values are returned. Usage reduces max results per request.
-   **results\_limit\_per\_page** (`integer`, optional) The maximum number of deals to display per page, as an integer.
-   **return\_archived\_only** (`boolean`, optional) Set to true to return only archived results; false to include active results.

## HubspotCrmApi.CreateHubspotDeal



Create a new deal in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.MergeDeals



Combine two deals into a single unified deal in HubSpot CRM.

**Parameters**

-   **deal\_id\_to\_merge** (`string`, required) The ID of the deal to be merged into the primary deal.
-   **primary\_deal\_id** (`string`, required) The ID of the primary deal that will remain after merging.

## HubspotCrmApi.ManageDealSplits



Create or replace deal splits for specific deals.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.ReadBatchDealSplits



Fetch a batch of deal split objects by deal ID.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.SearchDiscounts



Search for discounts in the HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.UpdateDiscountsBatch



Update multiple discounts by ID or unique properties.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.RetrieveDiscountDetails



Retrieve details of a discount by its ID.

**Parameters**

-   **discount\_identifier** (`string`, required) The unique identifier for the discount object to retrieve. This can either be the internal ID or a value of a unique property specified by `idProperty`.
-   **archived\_results\_only** (`boolean`, optional) Set to true to return only results that have been archived.
-   **associated\_object\_types** (`array[string]`, optional) Comma-separated list of object types to retrieve associated IDs for. Non-existent associations will be ignored.
-   **properties\_with\_history** (`array[string]`, optional) List of properties to retrieve along with their value history. Ignored if properties are missing.
-   **return\_properties** (`array[string]`, optional) Comma-separated list of properties to return in response. Ignored if not present on the object.
-   **unique\_property\_name** (`string`, optional) The property name for uniquely identifying the discount object. Use when the property value is not the default ID.

## HubspotCrmApi.DeleteDiscount



Delete a discount and move it to the recycling bin.

**Parameters**

-   **discount\_identifier** (`string`, required) The unique identifier of the discount object to delete and move to the recycling bin.

## HubspotCrmApi.UpdateDiscountDetails



Update specific properties of a discount in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **discount\_identifier** (`string`, optional) The unique identifier for the discount object. This can be the internal ID or a unique property specified by `idProperty`. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **unique\_property\_name** (`string`, optional) The name of a unique property to identify the discount object. Use this instead of the internal discount ID if needed. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.CreateBatchDiscountsHubspot



Create a batch of discounts in HubSpot.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.UpsertDiscountRecords



Create or update discount records in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.ArchiveDiscountsBatch



Archive a batch of discounts by their IDs in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.GetHubspotDiscounts



Retrieve a page of discounts from HubSpot CRM.

**Parameters**

-   **associated\_object\_types** (`array[string]`, optional) A list of object types to retrieve associated IDs for. Unknown associations will be ignored.
-   **maximum\_results\_per\_page** (`integer`, optional) The maximum number of results to display per page.
-   **paging\_cursor\_token** (`string`, optional) The cursor token for pagination. Use the token from the last successfully read resource to fetch the next page.
-   **properties\_with\_history** (`array[string]`, optional) List of properties to return with their history; reduces number of discounts returned per request.
-   **return\_only\_archived** (`boolean`, optional) Set to true to return only archived discounts, false to include all.
-   **returned\_discount\_properties** (`array[string]`, optional) List of properties to include in the response. Comma-separated, ignored if not present.

## HubspotCrmApi.CreateDiscount



Creates a discount and returns its details.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.RetrieveDiscountRecords



Retrieve discount records by ID or custom property.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **archived** (`boolean`, optional) Set to true to return only archived results. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.CreateBatchOfEmails



Create a batch of emails with specified properties.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.RetrieveEmailsPage



Retrieve a page of emails from HubSpot CRM.

**Parameters**

-   **associated\_object\_types** (`array[string]`, optional) A list of object types to retrieve associated IDs for. If any specified associations don’t exist, they will be ignored.
-   **max\_results\_per\_page** (`integer`, optional) The maximum number of email results to display per page.
-   **paging\_cursor\_token** (`string`, optional) The token for the next page of results, from the `paging.next.after` field of the previous response.
-   **properties\_with\_history** (`array[string]`, optional) List of properties to return with their history of previous values. Reduces maximum emails per request.
-   **return\_only\_archived** (`boolean`, optional) Set to true to retrieve only archived emails.
-   **returned\_email\_properties** (`array[string]`, optional) List the email properties to be included in the response. Specify as an array of strings representing the desired properties.

## HubspotCrmApi.CreateHubspotEmail



Create an email in HubSpot CRM and retrieve its details.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.RetrieveEmailRecords



Retrieve email records by ID or custom property.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **only\_archived\_records** (`boolean`, optional) Set to true to return only archived email records from HubSpot CRM. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.CreateOrUpdateHubspotEmails



Create or update HubSpot email records in batch.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.RetrieveEmailById



Retrieve email object details using its ID.

**Parameters**

-   **email\_id** (`string`, required) The unique ID or property value of the email object to be retrieved.
-   **object\_types\_for\_associated\_ids** (`array[string]`, optional) List the object types to retrieve associated IDs. If no associations exist, they will be ignored.
-   **properties\_with\_history** (`array[string]`, optional) Comma-separated property names to include their history of previous values in the response. Non-existent properties will be ignored.
-   **return\_only\_archived\_results** (`boolean`, optional) Set to true to return only archived results. Set to false to return active results.
-   **returned\_properties** (`array[string]`, optional) A list of properties to return for the email object. Properties not present on the object will be ignored.
-   **unique\_property\_name** (`string`, optional) Specify the property name that holds unique values for the email object to be retrieved.

## HubspotCrmApi.DeleteEmail



Move an email to the recycling bin using its ID.

**Parameters**

-   **email\_id** (`string`, required) The unique identifier of the email to be archived in HubSpot CRM.

## HubspotCrmApi.UpdateEmailInHubspotCrm



Updates an email object in HubSpot CRM with new property values.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **email\_identifier** (`string`, optional) The unique identifier for the email object, either the internal ID or a unique property value. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **unique\_property\_name** (`string`, optional) Name of a unique property for identifying the email object, used instead of default ID. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.ArchiveEmailsBatch



Archive a batch of emails by their IDs.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.UpdateBatchEmails



Update a batch of emails by their IDs or unique properties.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.SearchEmails



Search for emails based on specified query parameters.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.GetFeedbackSubmissionById



Retrieve feedback submission details by ID.

**Parameters**

-   **feedback\_submission\_id** (`string`, required) The ID of the feedback submission to retrieve details for. This can be the internal object ID or a unique property value specified by `idProperty`.
-   **associated\_object\_types** (`array[string]`, optional) A list of object types to retrieve associated IDs for. If nonexistent, they will be ignored.
-   **properties\_with\_history** (`array[string]`, optional) Comma-separated list of properties to return with their history of previous values. Ignored if not present on the object.
-   **return\_archived\_only** (`boolean`, optional) Set to true to return only archived results, false for active ones.
-   **return\_properties** (`array[string]`, optional) List of properties to return in the response. Non-existent properties will be ignored.
-   **unique\_property\_name** (`string`, optional) The name of a property whose values are unique for the feedback submission object.

## HubspotCrmApi.SearchFeedbackSubmissions



Search for feedback submissions in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.RetrieveFeedbackRecords



Retrieve feedback submission records by ID or custom properties.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **return\_archived\_only** (`boolean`, optional) Set to true to return only archived feedback submission records. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.GetFeedbackSubmissions



Retrieve a page of feedback submissions from the CRM.

**Parameters**

-   **associated\_object\_types** (`array[string]`, optional) Comma separated list of object types to retrieve associated IDs for, like ‘contacts’ or ‘companies’. Ignored if nonexistent.
-   **max\_results\_per\_page** (`integer`, optional) Specify the maximum number of results to display per page.
-   **paging\_cursor\_token** (`string`, optional) The token of the last read resource for fetching the next page of results.
-   **properties\_to\_return** (`array[string]`, optional) List of properties to return for each feedback submission. Comma separated. Ignores non-existing properties.
-   **properties\_with\_history** (`array[string]`, optional) A list of property names whose history of values should be returned. Properties not present will be ignored. Reduces the maximum number of submissions per request.
-   **return\_only\_archived\_results** (`boolean`, optional) Set to true to return only archived feedback submissions; false to include both archived and active submissions.

## HubspotCrmApi.GetFeeDetails



Retrieve information about a specific fee by ID.

**Parameters**

-   **fee\_identifier** (`string`, required) The unique identifier for the fee object to retrieve. It can be the internal object ID or a value from a unique property specified by the `idProperty` parameter.
-   **associated\_object\_types** (`array[string]`, optional) A list of object types to retrieve associated IDs for. Non-existent associations will be ignored.
-   **only\_return\_archived\_results** (`boolean`, optional) Set to true to retrieve only archived results. False for non-archived.
-   **properties\_with\_history** (`array[string]`, optional) List of properties to return with their history of previous values, specified as strings. Non-existent properties will be ignored.
-   **return\_properties** (`array[string]`, optional) A list of properties to return for the fee object. Any non-existent properties will be ignored.
-   **unique\_property\_name** (`string`, optional) Specify the property name with unique values for the fee object.

## HubspotCrmApi.DeleteFeeObject



Move a fee object to the recycling bin using its fee ID.

**Parameters**

-   **fee\_id\_to\_delete** (`string`, required) The unique identifier of the fee object to be deleted in HubSpot CRM.

## HubspotCrmApi.UpdateFeeDetails



Update specific details of a fee in the CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **fee\_identifier** (`string`, optional) The ID or unique property value that identifies the fee object to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **unique\_property\_name** (`string`, optional) Specify the unique property name to identify the object instead of the default ID. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.UpsertHubspotFees



Create or update fee records in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.GetCrmFees



Fetch a list of fees from the CRM.

**Parameters**

-   **associated\_object\_types** (`array[string]`, optional) Comma-separated list of object types to retrieve associated IDs for. Ignored if associations don’t exist.
-   **fee\_properties\_to\_return** (`array[string]`, optional) List of properties to be returned in the response. If a property is not present, it will be ignored.
-   **maximum\_results\_per\_page** (`integer`, optional) The maximum number of fees to display per page.
-   **paging\_cursor\_token** (`string`, optional) The token used to retrieve the next page of results. Use the token returned in `paging.next.after` from a previous response.
-   **properties\_with\_history** (`array[string]`, optional) List of properties to return with their history. Reduces max number of fees per request.
-   **return\_archived\_only** (`boolean`, optional) Set to true to return only results that have been archived.

## HubspotCrmApi.CreateFeeInCrm



Create a fee in the CRM and receive the object’s details.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.CreateBatchFees



Create a batch of fees in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.SearchFeesInCrm



Search for fees in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.UpdateBatchFees



Update multiple fees by internal ID or unique properties.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.ArchiveFeesBatch



Archives a batch of fees by their IDs in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.RetrieveFeeRecords



Retrieve fee records by ID or custom property.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **return\_archived\_only** (`boolean`, optional) Set to true to return only archived fee records. False to return active records. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.CreateGoalTargetsBatch



Batch create multiple goal targets in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.RetrieveGoalTargets



Retrieve goal target records using record ID or custom value.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **return\_only\_archived\_results** (`boolean`, optional) Set to true to return only the archived records. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.GetGoalTargetById



Retrieve goal target object details using its ID.

**Parameters**

-   **goal\_target\_id** (`string`, required) The unique identifier for the goal target object. Can be the internal object ID or a unique property value specified by `idProperty`.
-   **archived\_results** (`boolean`, optional) Set to true to return only archived results. Default is false.
-   **associated\_object\_types** (`array[string]`, optional) Specify object types to retrieve associated IDs. If not present, they will be ignored. Use commas to separate multiple types.
-   **properties\_with\_history** (`array[string]`, optional) Comma-separated properties to return with their value histories. Ignored if properties are absent on the object.
-   **returned\_properties** (`array[string]`, optional) List of properties to return. Ignored if not present on the object.
-   **unique\_property\_name** (`string`, optional) The property name used as a unique identifier for the goal target object.

## HubspotCrmApi.DeleteGoalTarget



Deletes a goal target by its ID to the recycling bin.

**Parameters**

-   **goal\_target\_id** (`string`, required) The unique identifier for the goal target to be deleted. Required to specify which target to move to the recycling bin.

## HubspotCrmApi.UpdateGoalTarget



Update properties of a HubSpot goal target.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **goal\_target\_id** (`string`, optional) The internal ID of the goal target to update. Use this to specify which goal target object to modify. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **unique\_property\_name** (`string`, optional) The name of a unique property for the goal target object used for identification or update. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.SearchGoalTargets



Search for goal targets using specified criteria.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.ArchiveGoalTargetsBatch



Archive multiple goal targets using their IDs in one batch.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.UpdateBatchGoalTargets



Update multiple goal targets in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.UpsertGoalTargets



Create or update goal target records in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.GetGoalTargets



Retrieve a page of goal targets from HubSpot CRM.

**Parameters**

-   **associated\_object\_types** (`array[string]`, optional) List of object types to retrieve associated IDs for, ignored if non-existent.
-   **paging\_cursor\_token** (`string`, optional) Token of the last successfully read item. Use it for fetching the next page of results.
-   **properties\_with\_history** (`array[string]`, optional) Comma-separated properties to return with their history of previous values. Reduces the max number of goals retrievable in one request.
-   **results\_per\_page\_limit** (`integer`, optional) Specify the maximum number of results to display per page.
-   **return\_only\_archived** (`boolean`, optional) Set to true to return only results that have been archived.
-   **returned\_properties** (`array[string]`, optional) Comma-separated list of properties to return in the response. Ignored if absent on requested objects.

## HubspotCrmApi.CreateGoalTarget



Create a goal target in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.CreateBatchOfInvoices



Create a batch of invoices swiftly.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.SearchInvoices



Find invoices in the HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.RetrieveInvoiceRecords



Retrieve invoice records by ID or custom property.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **return\_archived\_only** (`boolean`, optional) Set to true to return only results that have been archived from HubSpot CRM. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.GetInvoiceById



Retrieve invoice details by ID.

**Parameters**

-   **invoice\_identifier** (`string`, required) The unique identifier for the invoice. This can be the internal object ID or any unique property value as specified by the `id_property`.
-   **associated\_object\_types** (`array[string]`, optional) List of object types to retrieve associated IDs for, separated by commas. Ignored if associations don’t exist.
-   **historical\_properties** (`array[string]`, optional) Comma-separated list of properties to return along with their history of previous values.
-   **requested\_properties** (`array[string]`, optional) List of properties to be returned in the response for the specified invoice. Properties not present on the object will be ignored.
-   **return\_archived\_only** (`boolean`, optional) Specify `True` to return only archived results. `False` returns both archived and non-archived results.
-   **unique\_identifier\_property** (`string`, optional) The name of a property whose values uniquely identify the invoice object. Specify this to use a unique property other than the internal object ID.

## HubspotCrmApi.DeleteInvoice



Archive an invoice by moving it to the recycling bin.

**Parameters**

-   **invoice\_identifier** (`string`, required) The unique identifier for the invoice to be archived in HubSpot CRM.

## HubspotCrmApi.UpdateInvoiceDetails



Update invoice details in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **invoice\_identifier** (`string`, optional) Unique identifier for the invoice, either the internal ID or specified unique property value, to update in HubSpot CRM. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **unique\_property\_name** (`string`, optional) Name of the unique property for identifying the invoice object. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.UpdateInvoicesBatch



Updates multiple invoices in the HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.RetrieveInvoices



Retrieve a page of invoices from HubSpot CRM.

**Parameters**

-   **associated\_object\_types** (`array[string]`, optional) A list of object types whose associated IDs should be retrieved. Ignored if associations do not exist.
-   **maximum\_results\_per\_page** (`integer`, optional) The maximum number of invoice results to display per page.
-   **paging\_cursor\_token** (`string`, optional) The token for the last successfully read resource to retrieve the next page of results.
-   **properties\_with\_history** (`array[string]`, optional) List properties to return with their historical values. Reduced invoice limit per request.
-   **return\_archived\_only** (`boolean`, optional) Set to true to return only archived invoices; false for all invoices.
-   **specified\_properties** (`array[string]`, optional) List of invoice property names to return. Ignored if properties are not present on the objects.

## HubspotCrmApi.CreateHubspotInvoice



Create an invoice in HubSpot CRM and retrieve its details.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.UpsertHubspotInvoices



Create or update HubSpot invoice records in batch.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.ArchiveInvoicesBatch



Archive a batch of invoices by their IDs.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.RetrieveLeadRecords



Retrieve lead records by ID or custom unique property.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **return\_archived\_only** (`boolean`, optional) Return only results that have been archived. Set to ‘true’ to filter by archived records. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.SearchCrmLeads



Search for leads in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.GetHubspotLeadsPage



Retrieve a page of leads from HubSpot CRM.

**Parameters**

-   **archived\_leads\_only** (`boolean`, optional) Return only leads that have been archived. Set to true to include only archived leads, false to exclude them.
-   **associated\_object\_types** (`array[string]`, optional) Comma-separated list of object types to retrieve associated IDs for; ignored if non-existent.
-   **lead\_properties\_to\_return** (`array[string]`, optional) An array of the property names to include in the lead details response. Unavailable properties will be ignored.
-   **paging\_cursor\_token** (`string`, optional) The cursor token to continue retrieving leads from where the last page ended.
-   **properties\_with\_history** (`array[string]`, optional) List of properties whose historical values will be returned. Reduce max leads per request.
-   **results\_limit\_per\_page** (`integer`, optional) Defines the maximum number of leads to display per page.

## HubspotCrmApi.CreateLeadHubspot



Create a new lead in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.CreateLeadsBatch



Create a batch of new leads in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.UpdateLeadsBatch



Update multiple leads in a batch by ID or unique properties.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.GetLeadById



Retrieve a lead by its unique identifier.

**Parameters**

-   **lead\_identifier** (`string`, required) The unique identifier for the lead. Typically the internal ID, or a unique property value if specified by `idProperty`.
-   **associated\_object\_types** (`array[string]`, optional) Comma-separated list of object types to retrieve associated IDs for, with non-existent associations ignored.
-   **only\_archived\_results** (`boolean`, optional) Set to true to return only archived results.
-   **return\_properties\_with\_history** (`array[string]`, optional) A list of properties to return with their history of previous values. Comma-separated values should be used. Ignored if properties are not present.
-   **returned\_properties** (`array[string]`, optional) A list of properties to be returned in the response. Only specified properties present on the lead will be included.
-   **unique\_property\_name** (`string`, optional) Specifies a unique property name to identify the lead. Overrides default ID.

## HubspotCrmApi.ArchiveHubspotLead



Archive a HubSpot CRM lead by identifier.

**Parameters**

-   **lead\_identifier** (`string`, required) The unique identifier for the lead to be archived in HubSpot CRM.

## HubspotCrmApi.UpdateLeadDetails



Update details of a specific lead in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **lead\_identifier** (`string`, optional) The internal object ID or unique property value used to identify the lead in HubSpot CRM. Required for updating the lead details. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **unique\_property\_name** (`string`, optional) Specify the name of a unique property to identify the lead, instead of using the internal ID. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.ArchiveLeadsBatch



Archive a batch of leads by ID in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.GetAssociationLimitRecords



Fetch records near association limits between two objects.

**Parameters**

-   **source\_object\_type\_id** (`string`, required) Specifies the ID of the source object type to check association limits from.
-   **to\_object\_type\_id** (`string`, required) The ID of the target object type for the association limit query.

## HubspotCrmApi.GetCustomAssociationLabelsLimits



Get limits and usage for custom association labels in HubSpot CRM.

**Parameters**

-   **source\_object\_type\_id** (`string`, optional) The unique identifier for the source object type. It specifies which object type the association is coming from in the CRM.
-   **target\_object\_type\_id** (`string`, optional) The ID of the target object type to which the association label applies. Specify the target entity in HubSpot CRM.

## HubspotCrmApi.FetchAssociationLimitObjects



Fetch objects approaching association limits for a specified type.

**Parameters**

-   **from\_object\_type\_id** (`string`, required) Identifier for the ‘from’ object type whose records’ association limits are being queried.

## HubspotCrmApi.GetCustomObjectLimits



Retrieve limits and usage for HubSpot custom object schemas.

**Parameters**

This tool does not take any parameters.

## HubspotCrmApi.GetCustomPropertyLimits



Retrieve limits and usage for custom properties per object.

**Parameters**

This tool does not take any parameters.

## HubspotCrmApi.RetrieveLimitApproachingRecords



Retrieve objects nearing or at HubSpot CRM association limits.

**Parameters**

This tool does not take any parameters.

## HubspotCrmApi.GetHubspotCrmLimitsRecords



Retrieve limits and usage for records in HubSpot CRM.

**Parameters**

This tool does not take any parameters.

## HubspotCrmApi.PipelineLimitsUsage



Retrieve limits and usage for HubSpot CRM pipelines.

**Parameters**

This tool does not take any parameters.

## HubspotCrmApi.GetCalculatedPropertiesLimits



Get limits and usage for calculated properties in HubSpot CRM.

**Parameters**

This tool does not take any parameters.

## HubspotCrmApi.RetrieveLineItemsPage



Retrieve a page of line items from HubSpot CRM.

**Parameters**

-   **associated\_object\_types** (`array[string]`, optional) List of object types to retrieve associated IDs. Nonexistent associations are ignored.
-   **include\_properties** (`array[string]`, optional) List the properties to include in the response, separated by commas. Ignored if not present.
-   **max\_results\_per\_page** (`integer`, optional) Sets the maximum number of line items to display per page.
-   **pagination\_cursor\_after** (`string`, optional) The cursor token from the last page to retrieve the next set of results.
-   **properties\_with\_history** (`array[string]`, optional) A list of property names to return with their value history. This reduces the max line items per request.
-   **return\_only\_archived** (`boolean`, optional) Set to true to return only archived results. False returns non-archived results.

## HubspotCrmApi.CreateHubspotLineItem



Create a new line item in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.GetLineItemDetails



Retrieve details of a line item by its ID.

**Parameters**

-   **line\_item\_id** (`string`, required) The unique ID or property value of the line item to retrieve. This identifies the specific line item in HubSpot CRM.
-   **associated\_object\_types** (`array[string]`, optional) Comma separated list of object types to retrieve associated IDs for. Non-existent associations are ignored.
-   **only\_return\_archived** (`boolean`, optional) Set to True to return only archived results.
-   **properties\_with\_history** (`array[string]`, optional) A list of properties to return with their value history. Ignored if not present on the object.
-   **return\_properties** (`array[string]`, optional) Comma-separated list of properties to return. Ignored if not present on the object.
-   **unique\_identifier\_property** (`string`, optional) Specifies a unique property name to identify the line item in HubSpot CRM.

## HubspotCrmApi.DeleteLineItem



Moves a specified line item to the recycling bin.

**Parameters**

-   **line\_item\_id** (`string`, required) The unique identifier of the line item to be archived or deleted.

## HubspotCrmApi.UpdateLineItem



Update properties of a CRM line item using its ID.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **line\_item\_id** (`string`, optional) The internal ID of the line item to update. This ID identifies the object to be modified. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **unique\_property\_name** (`string`, optional) Specify a property with unique values to identify the line item instead of using the internal ID. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.UpsertLineItemsBatch



Batch create or update line items by unique ID.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.CreateLineItemsBatch



Create a batch of line items in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.UpdateLineItemsBatch



Update multiple line items in CRM using internal IDs or unique properties.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.SearchLineItems



Search for line items in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.RetrieveBatchLineItems



Retrieve batch line item records by ID or custom property.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **retrieve\_only\_archived** (`boolean`, optional) Set to true to retrieve only archived line items. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.ArchiveLineItemsBatch



Archive a batch of line items in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.ListCrmEntries



Retrieve a page of CRM listings with specified properties.

**Parameters**

-   **associated\_object\_types** (`array[string]`, optional) A list of object types to retrieve associated IDs for, such as ‘contacts’ or ‘deals’. Ignored if not existent.
-   **include\_only\_archived\_results** (`boolean`, optional) Set to true to return only archived results. False to exclude archived entries.
-   **include\_properties\_with\_history** (`array[string]`, optional) List the properties whose values along with their history should be returned. Reduces the number of listings per request.
-   **maximum\_results\_per\_page** (`integer`, optional) The maximum number of CRM listing results to display per page. This controls pagination size.
-   **paging\_cursor\_token** (`string`, optional) The cursor token for fetching the next page of CRM listings.
-   **properties\_to\_return** (`array[string]`, optional) Comma-separated list of properties to include in the response. Non-existent properties will be ignored.

## HubspotCrmApi.CreateHubspotListing



Create a HubSpot CRM listing and get the object details.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.ArchiveMultipleListings



Archive multiple listings using their IDs.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.UpdateMultipleCrmListings



Update multiple CRM listings using internal IDs or unique properties.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.FetchHubspotRecords



Retrieve HubSpot CRM records by ID or custom property.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **return\_archived\_records\_only** (`boolean`, optional) Set to true to return only HubSpot CRM records that have been archived. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.CreateMultipleListings



Create multiple listings in a single request.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.CreateOrUpdateBatchRecords



Create or update CRM records in batches.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.SearchHubspotListings



Search listings in HubSpot CRM using filters and properties.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.GetListingDetails



Retrieve details of a listing by its ID.

**Parameters**

-   **unique\_listing\_id** (`string`, required) The unique identifier for the listing to be retrieved in HubSpot CRM.
-   **properties\_to\_return** (`array[string]`, optional) A list of properties to be included in the response. Non-existent properties will be ignored.
-   **properties\_with\_history** (`array[string]`, optional) An array of property names to return along with their historical values.
-   **retrieve\_associated\_object\_types** (`array[string]`, optional) List of object types to retrieve associated IDs for. Comma separated. Non-existent associations will be ignored.
-   **return\_only\_archived\_results** (`boolean`, optional) Set to true to return only archived results. Use false to include non-archived as well.
-   **unique\_property\_name** (`string`, optional) The name of a property with unique values to identify the object in HubSpot CRM.

## HubspotCrmApi.MoveListingToRecycleBin



Move a listing to the recycling bin by ID.

**Parameters**

-   **listing\_id** (`string`, required) The unique identifier of the listing to be moved to the recycling bin in HubSpot CRM.

## HubspotCrmApi.HubspotUpdateListing



Update specific details of a HubSpot listing.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **listing\_id** (`string`, optional) The unique identifier of the listing to update in HubSpot. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **unique\_property\_name** (`string`, optional) The name of a unique property for this object, used for identification. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.UpdateListName



Update the name of a CRM list in HubSpot.

**Parameters**

-   **list\_id** (`string`, required) The unique ILS ID of the list to update.
-   **include\_filter\_branch\_definition** (`boolean`, optional) Set to true to include filter branch definitions in the response list definition, or false to exclude them.
-   **new\_list\_name** (`string`, optional) The new name for the CRM list. It must be globally unique relative to other public lists.

## HubspotCrmApi.UpdateListMemberships



Add or remove records from a manual or snapshot list.

**Parameters**

-   **list\_identifier** (`string`, required) The unique ILS ID of the MANUAL or SNAPSHOT list to update.
-   **record\_ids\_to\_add** (`array[string]`, required) An array of record IDs to be added to the specified list. Ensure these records are already created in the system.
-   **record\_ids\_to\_remove** (`array[string]`, required) An array of record IDs to remove from the list. Each ID should be a string.

## HubspotCrmApi.FetchHubspotListById



Fetch a single HubSpot CRM list using its ILS list ID.

**Parameters**

-   **list\_id** (`string`, required) The ILS ID of the HubSpot CRM list to fetch.
-   **include\_filter\_definitions** (`boolean`, optional) Include filter branch definitions in the response. Defaults to false, meaning filter definitions are not included.

## HubspotCrmApi.DeleteList



Delete a specified CRM list by its ID.

**Parameters**

-   **list\_id\_to\_delete** (`string`, required) The ILS ID of the CRM list to delete. Ensure the ID is correct to avoid unintentional deletion.

## HubspotCrmApi.RetrieveConversionDetails



Retrieve conversion details for a specific list in HubSpot CRM.

**Parameters**

-   **list\_id** (`string`, required) The ID of the list for which you want to retrieve conversion details.

## HubspotCrmApi.ScheduleListConversion



Schedule or update the conversion of an active list to static.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **list\_id** (`string`, optional) The ID of the list you want to schedule the conversion for. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.DeleteScheduledConversion



Delete a scheduled conversion for a specific list.

**Parameters**

-   **list\_id** (`string`, required) The ID of the list for which you want to cancel the scheduled conversion.

## HubspotCrmApi.SearchHubspotLists



Search HubSpot CRM lists by name or page through all lists.

**Parameters**

-   **filter\_by\_list\_ids** (`array[string]`, optional) An array of list IDs to filter search results. If not provided or empty, no filter is applied.
-   **filter\_by\_processing\_types** (`array[string]`, optional) List of processing types to filter results. Valid values: ‘MANUAL’, ‘SNAPSHOT’, ‘DYNAMIC’. If omitted, no filtering by processing type is applied.
-   **include\_additional\_list\_properties** (`array[string]`, optional) Specify additional list properties to include in the response. Defaults fetch standard properties like `hs_list_size` and others.
-   **number\_of\_lists\_to\_return** (`integer`, optional) The number of lists to include in the response. Defaults to 20 if not provided, with a maximum of 500.
-   **search\_query** (`string`, optional) The term to search for lists by name. Returns all lists if empty.
-   **sort\_order** (`string`, optional) Specify the order in which the lists should be sorted. Acceptable values could be ‘asc’ for ascending or ‘desc’ for descending order.
-   **start\_offset** (`integer`, optional) The starting point for pagination of list results. Defaults to `0` if not provided.

## HubspotCrmApi.MoveListToFolder



Move a CRM list to a specified folder.

**Parameters**

-   **list\_id** (`string`, required) The ID of the list you want to move. It should be a valid string representing the list in HubSpot CRM.
-   **target\_folder\_id** (`string`, required) The ID of the folder to move the list to. Use ‘0’ for the root folder.

## HubspotCrmApi.AddToHubspotCrmList



Add records to a specified HubSpot CRM list.

**Parameters**

-   **list\_id** (`string`, required) The ILS ID of the MANUAL or SNAPSHOT list to add records.
-   **record\_ids\_to\_add** (`array[string]`, required) An array of strings representing the IDs of the records to add to the list.

## HubspotCrmApi.FetchListByName



Fetch details of a list by its name and object type.

**Parameters**

-   **list\_name** (`string`, required) The name of the list to fetch. This is not case sensitive.
-   **object\_type\_id** (`string`, required) The object type ID for the list. Example: `0-1` for `CONTACT`.
-   **include\_filters** (`boolean`, optional) Set to true to include filter branch definitions in the response. By default, filters are not included.

## HubspotCrmApi.MoveFolderInHubspot



Move a folder to a new parent in HubSpot CRM.

**Parameters**

-   **folder\_id\_to\_move** (`string`, required) The ID of the folder you want to move to a new location in HubSpot CRM.
-   **target\_parent\_folder\_id** (`string`, required) The ID of the target parent folder to which the current folder will be moved.

## HubspotCrmApi.TranslateLegacyToNewListId



Translate legacy list ID to the new list ID format.

**Parameters**

-   **legacy\_list\_id** (`string`, optional) The legacy list ID from the lists v1 API to be translated to the new format.

## HubspotCrmApi.TranslateLegacyListIdsBatch



Translate legacy list IDs to new list IDs in batch.

**Parameters**

-   **legacy\_list\_ids** (`array[string]`, required) An array of legacy list IDs to be translated to new IDs, supporting up to 10,000 strings.

## HubspotCrmApi.RestoreDeletedList



Restore a previously deleted HubSpot CRM list.

**Parameters**

-   **list\_id\_to\_restore** (`string`, required) The ILS ID of the list to restore. Use this to specify which deleted list to recover.

## HubspotCrmApi.RenameCrmFolder



Rename a folder in HubSpot CRM by its folder ID.

**Parameters**

-   **folder\_id** (`string`, required) The ID of the folder you want to rename in HubSpot CRM.
-   **new\_folder\_name** (`string`, optional) The new name to assign to the folder. It should be a string representing the desired folder name in HubSpot CRM.

## HubspotCrmApi.FetchListMembershipsOrdered



Fetch list memberships ordered by addition date.

**Parameters**

-   **list\_id** (`string`, required) The unique ILS ID of the list to retrieve memberships from.
-   **after\_paging\_offset\_token** (`string`, optional) The token for the page that comes after the previously requested records, sorted in ascending order. Takes precedence over ‘before’.
-   **before\_offset\_token** (`string`, optional) The paging offset token to retrieve records preceding the specified page, sorted in descending order.
-   **record\_limit** (`integer`, optional) Specify the number of records to return, with a maximum limit of 250.

## HubspotCrmApi.AddAllFromSourceListToDestinationList



Add records from a source list to a destination list in HubSpot.

**Parameters**

-   **destination\_list\_id** (`string`, required) The ILS ID of the MANUAL or SNAPSHOT destination list to which the source list records are added.
-   **source\_list\_id** (`string`, required) The ILS ID of the source list from which records are added to the destination list.

## HubspotCrmApi.GetRecordListMemberships



Retrieve lists a CRM record is a member of.

**Parameters**

-   **object\_type\_id** (`string`, required) Specify the object type ID of the record to retrieve its list memberships.
-   **record\_id** (`string`, required) The unique identifier of the CRM record whose list memberships you want to retrieve.

## HubspotCrmApi.DeleteCrmFolder



Deletes a specified CRM folder by ID.

**Parameters**

-   **folder\_id\_to\_delete** (`string`, required) The ID of the folder to be deleted in HubSpot CRM.

## HubspotCrmApi.RetrieveFoldersWithChildNodes



Retrieve folders and include all child folders recursively.

**Parameters**

-   **target\_folder\_id** (`string`, optional) The ID of the folder to retrieve and include all child nodes recursively from HubSpot CRM.

## HubspotCrmApi.CreateFolderHubspotCrm



Creates a folder in HubSpot CRM with specified details.

**Parameters**

-   **folder\_name** (`string`, required) The name of the folder to be created in HubSpot CRM.
-   **parent\_folder\_id** (`string`, optional) The ID of the folder where the new folder will be created. Defaults to root folder (ID: 0) if not specified.

## HubspotCrmApi.RemoveRecordsFromList



Remove specified records from a HubSpot CRM list.

**Parameters**

-   **list\_id** (`string`, required) The ILS ID of the MANUAL or SNAPSHOT list from which records will be removed.
-   **record\_ids\_to\_remove** (`array[string]`, required) List of record IDs to remove from the HubSpot CRM list.

## HubspotCrmApi.FetchHubspotListMemberships



Retrieve memberships of a HubSpot list by order of record ID.

**Parameters**

-   **list\_identifier** (`string`, required) The ILS ID of the HubSpot list to retrieve memberships for.
-   **before\_offset\_token** (`string`, optional) The paging offset token for the page before the previously requested records, used to sort records in descending order.
-   **number\_of\_records\_to\_return** (`integer`, optional) Defines how many records to retrieve in the response, with a maximum value of 250.
-   **paging\_offset\_after\_token** (`string`, optional) The paging offset token for the page that comes after the previously requested records. If provided, records will follow this offset, sorted in ascending order. Takes precedence over the before offset.

## HubspotCrmApi.RemoveAllListMemberships



Remove all records from a CRM list without deleting the list.

**Parameters**

-   **list\_id** (`string`, required) The ILS ID of a MANUAL or SNAPSHOT list in HubSpot CRM. Required for removing all memberships.

## HubspotCrmApi.GetMeetingDetailsById



Retrieve detailed information about a specific meeting.

**Parameters**

-   **meeting\_identifier** (`string`, required) Unique identifier for the meeting you want to retrieve details for.
-   **only\_archived** (`boolean`, optional) Set to true to return only archived meeting results.
-   **properties\_with\_history** (`array[string]`, optional) Comma separated list of properties to return with history of values. Ignored if not present on the object.
-   **retrieve\_associated\_object\_ids** (`array[string]`, optional) List of object types to fetch associated IDs for. Nonexistent associations will be ignored.
-   **return\_properties** (`array[string]`, optional) A list of properties to be returned in the response. If any specified properties are not present, they will be ignored.
-   **unique\_property\_name** (`string`, optional) The property name whose values uniquely identify the meeting object.

## HubspotCrmApi.DeleteMeeting



Move a meeting to the recycling bin using its ID.

**Parameters**

-   **meeting\_id** (`string`, required) The unique ID of the meeting to be moved to the recycling bin. This is required to identify the specific meeting.

## HubspotCrmApi.UpdateHubspotMeeting



Update specific properties of a HubSpot meeting.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **meeting\_id** (`string`, optional) The internal ID of the meeting or a property name with unique values for identification. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **unique\_property\_name** (`string`, optional) The name of the unique property for identifying the meeting. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.UpdateMeetingsBatch



Update a batch of meetings in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.RetrieveMeetingRecords



Retrieve meeting records by ID or unique property.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **return\_only\_archived\_results** (`boolean`, optional) Set to true to retrieve only archived meeting records. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.ArchiveMeetingsBatch



Archive multiple meetings by IDs in batch.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.GetMeetingsPage



Retrieve a page of meetings data from HubSpot CRM.

**Parameters**

-   **maximum\_results\_per\_page** (`integer`, optional) The maximum number of meeting results to display per page. Specify an integer value.
-   **paging\_cursor\_token** (`string`, optional) The token indicating the last successfully read resource, used for paging through results.
-   **properties** (`array[string]`, optional) A list of property names to return in the response. If any are not present, they will be ignored.
-   **properties\_with\_history** (`array[string]`, optional) List of properties to retrieve with their change history. Reduces max meetings returned per request.
-   **retrieve\_associated\_object\_ids** (`array[string]`, optional) List object types to retrieve associated IDs for; ignored if associations don’t exist.
-   **return\_archived\_results** (`boolean`, optional) Set to true to return only archived results; false to include active results.

## HubspotCrmApi.CreateHubspotMeeting



Create a meeting in HubSpot and get its details.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.UpsertMeetings



Create or update meeting records in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.CreateBatchMeetings



Create a batch of meetings in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.SearchHubspotMeetings



Search for meetings in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.SearchHubspotNotes



Search for notes in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.RetrieveNotesPage



Retrieve a page of notes from HubSpot CRM.

**Parameters**

-   **associated\_object\_types** (`array[string]`, optional) List of object types to retrieve associated IDs for. Non-existent associations will be ignored.
-   **paging\_cursor\_token** (`string`, optional) Token for paging to retrieve the next set of notes. Use the token from `paging.next.after` in the previous response.
-   **properties\_with\_history** (`array[string]`, optional) List of properties to return with their historical values. Reduces the maximum number of notes per request.
-   **results\_per\_page** (`integer`, optional) The maximum number of note results to display per page. Specify an integer value.
-   **return\_only\_archived\_notes** (`boolean`, optional) Set to True to return only archived notes; otherwise, non-archived notes are returned.
-   **returned\_properties\_list** (`array[string]`, optional) List of note properties to include in the response. Specify as an array of strings.

## HubspotCrmApi.CreateNoteInHubspot



Create a note in HubSpot CRM and return its details.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.RetrieveNotesRecords



Retrieve notes records by ID or custom property.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **return\_archived\_only** (`boolean`, optional) Set to true to return only archived records. Use false to include non-archived records. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.UpsertNotesHubspot



Create or update notes in HubSpot CRM by unique property.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.ArchiveNotesBatch



Archive a batch of notes by their IDs.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.BatchUpdateNotes



Update multiple notes in HubSpot CRM by ID or property.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.CreateBatchOfNotes



Create multiple notes in a CRM batch operation.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.GetNoteDetails



Retrieve details of a note by its unique ID.

**Parameters**

-   **note\_id** (`string`, required) The unique identifier of the note to retrieve details for.
-   **associated\_object\_types** (`array[string]`, optional) List the object types to retrieve associated IDs for, separated by commas. Invalid types are ignored.
-   **properties\_to\_return** (`array[string]`, optional) A list of property names to return for the note. Non-existing properties will be ignored.
-   **return\_archived\_results\_only** (`boolean`, optional) Set to true to return only archived notes.
-   **return\_properties\_with\_history** (`array[string]`, optional) List properties to return with their history of previous values. Ignored if not present on the object.
-   **unique\_property\_name** (`string`, optional) Specify the unique property name to identify the object in HubSpot CRM.

## HubspotCrmApi.DeleteNoteHubspot



Move a HubSpot note to the recycling bin.

**Parameters**

-   **note\_id** (`string`, required) The unique identifier of the note to be archived in HubSpot CRM.

## HubspotCrmApi.UpdateHubspotNote



Update a HubSpot note with new property values.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **note\_identifier** (`string`, optional) The ID or unique property value of the note to update. Use `noteId` for internal ID or specify a unique property via `idProperty`. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **unique\_property\_name** (`string`, optional) The name of a property with unique values for this object, used to identify the note. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.FetchEnablementData



Fetch enablement data from HubSpot CRM.

**Parameters**

This tool does not take any parameters.

## HubspotCrmApi.EnableObjectTypeInHubspot



Enable an object type in HubSpot CRM via its ID.

**Parameters**

-   **object\_type\_id** (`string`, required) The unique identifier for the object type in HubSpot CRM that needs to be enabled.

## HubspotCrmApi.SearchOrderRecords



Search for order records in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.RetrieveHubspotOrders



Retrieve order records from HubSpot CRM by ID or custom property.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **return\_only\_archived\_orders** (`boolean`, optional) Set to True to return only archived order records from HubSpot CRM. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.GetOrderDetails



Retrieve details of an order using its ID.

**Parameters**

-   **order\_identifier** (`string`, required) The unique identifier for the order. This can be the internal object ID or a unique property value specified by the idProperty.
-   **associated\_object\_types** (`array[string]`, optional) Comma separated list of object types to retrieve associated IDs. Non-existent associations are ignored.
-   **properties\_with\_history** (`array[string]`, optional) A list of properties to return with their history of previous values. If specified properties are not present, they will be ignored.
-   **return\_only\_archived\_results** (`boolean`, optional) Set to true to return only archived results for the specified order.
-   **return\_properties** (`array[string]`, optional) List the properties to retrieve for the order. Any nonexistent properties will be ignored.
-   **unique\_property\_name** (`string`, optional) Specify the name of a unique property to identify the order. Overrides the default ID.

## HubspotCrmApi.DeleteOrderById



Deletes an order by its ID from the CRM.

**Parameters**

-   **order\_id** (`string`, required) The unique ID of the order to delete, moving it to the recycling bin.

## HubspotCrmApi.UpdateOrderDetails



Update specific details of an order using its ID.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **order\_id** (`string`, optional) The internal ID of the order to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **unique\_property\_name** (`string`, optional) Specify the name of a unique property to identify the order object instead of using the order ID. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.UpsertOrdersInHubspot



Create or update orders in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.CreateBatchOrders



Create a batch of orders in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.UpdateHubspotOrdersBatch



Update multiple HubSpot CRM orders in a batch.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.GetOrdersPage



Retrieve a page of orders from CRM.

**Parameters**

-   **associated\_object\_types** (`array[string]`, optional) A list of object types to retrieve associated IDs for; ignored if not existing.
-   **only\_return\_archived\_orders** (`boolean`, optional) Set to true to return only archived orders. False returns both archived and unarchived orders.
-   **order\_properties\_to\_return** (`array[string]`, optional) A list of properties to be included in the order response. Specify as a comma-separated string. Ignored if not present on the objects.
-   **paging\_cursor\_token** (`string`, optional) Token for pagination, representing the last successfully read resource for fetching the next page of results.
-   **properties\_with\_history** (`array[string]`, optional) A list of order properties to return with their history of previous values. Reduces maximum results per request.
-   **results\_per\_page** (`integer`, optional) The maximum number of orders to display per page. This controls the pagination size.

## HubspotCrmApi.CreateHubspotOrder



Create a new order in HubSpot CRM with specified properties.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.ArchiveOrdersBatch



Archive a batch of orders by ID in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.UpdatePartnerClientsBatch



Update multiple partner clients in a batch.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.GetPartnerClients



Retrieve partner clients from HubSpot CRM.

**Parameters**

-   **client\_properties** (`array[string]`, optional) A list of specific client properties to retrieve, such as ‘name’, ‘email’, etc.
-   **include\_archived** (`boolean`, optional) Set to true to include archived partner clients, false to exclude them.
-   **include\_associations** (`array[string]`, optional) List of associations to include in the response. Specify names of associations as strings.
-   **pagination\_cursor** (`string`, optional) A string token to retrieve the next page of partner clients, obtained from a previous response.
-   **properties\_with\_history** (`array[string]`, optional) List property names to retrieve along with their historical versions. Each property should be specified as a string.
-   **retrieval\_limit** (`integer`, optional) Specifies the maximum number of partner clients to retrieve from the HubSpot CRM in a single call.

## HubspotCrmApi.BatchReadPartnerClients



Fetch batch details of partner clients in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **include\_archived** (`boolean`, optional) Set to true to include archived partner clients in the batch results. Default is false. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.SearchPartnerClients



Perform a search for partner clients in CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.GetPartnerClientInfo



Retrieve information for a specific partner client.

**Parameters**

-   **partner\_client\_id** (`string`, required) The unique identifier for the partner client to retrieve details from HubSpot CRM.
-   **associated\_objects** (`array[string]`, optional) A list of associated object types to include, such as ‘contacts’ or ‘deals’.
-   **include\_archived\_data** (`boolean`, optional) Boolean to specify if archived partner client data should be included in the response. Set to true to include archived data.
-   **optional\_properties** (`array[string]`, optional) An array of specific properties to retrieve for the partner client. Leave empty to obtain all available properties.
-   **properties\_with\_history** (`array[string]`, optional) Specify the list of properties to retrieve, including their historical values.
-   **property\_id** (`string`, optional) Specify which property should be used as the primary identifier for the partner client. Useful for custom identification schemes.

## HubspotCrmApi.UpdatePartnerClient



Update details of a partner client in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **partner\_client\_id** (`string`, optional) The unique identifier for the partner client to be updated in HubSpot CRM. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **identifier\_property** (`string`, optional) Specify the property name used to identify the partner client for update operations. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.AssociatePartnerClientWithObject



Associate a partner client with another CRM object.

**Parameters**

-   **association\_type** (`string`, required) Specifies the type of association (e.g., contact, company, deal) between the partner client and the object.
-   **partner\_client\_id** (`string`, required) The unique identifier for the partner client you wish to associate with another object. This should be a string representing the partner client’s ID in the CRM system.
-   **target\_object\_id** (`string`, required) The unique identifier of the CRM object you are associating with the partner client. This could be any valid object ID such as that of a contact, company, or deal.
-   **target\_object\_type** (`string`, required) The type of the object to associate with the partner client (e.g., contact, company, deal).

## HubspotCrmApi.RemovePartnerClientAssociation



Remove an association between two partner clients in HubSpot CRM.

**Parameters**

-   **association\_type** (`string`, required) The type of association to be removed between the partner client and the object. This defines the nature of their relationship.
-   **partner\_client\_id** (`string`, required) The unique identifier for the partner client to be disassociated. This should be a string that identifies the specific partner client in the HubSpot CRM.
-   **target\_object\_id** (`string`, required) The unique identifier of the object associated with the target partner client.
-   **target\_object\_type** (`string`, required) Specify the type of the object you are dissociating from the partner client, such as ‘contacts’ or ‘companies’.

## HubspotCrmApi.ListPartnerClientAssociations



Retrieve associations of a partner client by type.

**Parameters**

-   **partner\_client\_id** (`string`, required) The unique identifier for the partner client whose associations are to be retrieved. It is required and must be a valid string.
-   **target\_object\_type** (`string`, required) The type of object to which the partner client is associated. Specify using a string value representing the object type, such as ‘contact’ or ‘deal’.
-   **include\_family\_associations** (`boolean`, optional) Indicate whether to include family associations in the response. Set to true to include them.
-   **max\_results\_per\_page** (`integer`, optional) Specify the maximum number of results to display per page. Use an integer value.
-   **paging\_cursor\_token** (`string`, optional) The token used for pagination to fetch the next set of results.

## HubspotCrmApi.GetPartnerServiceDetails



Retrieve details of a partner service by ID.

**Parameters**

-   **partner\_service\_id** (`string`, required) The unique ID of the partner service object to retrieve. This can be the internal object ID or a unique property value as specified by the `idProperty`.
-   **properties\_to\_return** (`array[string]`, optional) A list of property names to return for the partner service. Any missing properties will be ignored.
-   **properties\_with\_history** (`array[string]`, optional) List of properties whose historical values should be returned for the partner service object.
-   **retrieve\_associated\_ids** (`array[string]`, optional) Comma-separated list of object types to retrieve associated IDs. Non-existent associations are ignored.
-   **return\_only\_archived\_results** (`boolean`, optional) Set to true to return only archived results, false otherwise.
-   **unique\_property\_name** (`string`, optional) The name of a unique property to identify the object.

## HubspotCrmApi.UpdatePartnerService



Partially update a partner service object in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **partner\_service\_id** (`string`, optional) The internal object ID of the partner service to update. Use this to specify the object you want to partially update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **unique\_property\_name** (`string`, optional) Specify the name of a unique property for the partner service object to identify it. This is used instead of the default internal ID. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.RetrievePartnerServicesRecords



Retrieve partner services records by ID or unique property.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **return\_only\_archived\_records** (`boolean`, optional) Set to true to return only the archived records. False will include non-archived records. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.SearchPartnerServicesHubspot



Search for partner services in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.GetPartnerServices



Retrieve a page of partner services.

**Parameters**

-   **associated\_object\_types** (`array[string]`, optional) A list of object types to retrieve associated IDs for. Ignored if associations do not exist.
-   **maximum\_results\_per\_page** (`integer`, optional) The maximum number of results to display per page. Must be an integer value.
-   **paging\_cursor\_after** (`string`, optional) The cursor token to retrieve the next page of results in a paged response.
-   **properties\_with\_history** (`array[string]`, optional) List of property names to fetch with their history. Reduces max number of results per request.
-   **return\_only\_archived** (`boolean`, optional) Set to true to return only results that have been archived.
-   **return\_properties** (`array[string]`, optional) List of properties to return in the response. Ignored if not present on requested objects.

## HubspotCrmApi.AssociatePartnerService



Associate a partner service with another CRM object.

**Parameters**

-   **association\_type** (`string`, required) Specifies the type of association to create between the partner service and another object (e.g., “owner”, “affiliate”).
-   **partner\_service\_id** (`string`, required) The identifier for the partner service to associate with another object. This should be a valid string representing the unique ID of the partner service in the CRM.
-   **target\_object\_id** (`string`, required) The ID of the target object you want to associate with the partner service. This should be a valid object ID in HubSpot CRM.
-   **target\_object\_type** (`string`, required) The type of CRM object to associate with the partner service, e.g., ‘contacts’, ‘companies’, or ‘deals’.

## HubspotCrmApi.RemovePartnerServiceAssociation



Remove an association between two partner services.

**Parameters**

-   **association\_type** (`string`, required) Specifies the type of association to remove between the partner services. This is a string value that defines how the services are linked.
-   **partner\_service\_id** (`string`, required) The unique identifier for the partner service. It specifies which partner service’s association is to be removed.
-   **target\_object\_id** (`string`, required) The unique identifier of the object to be disassociated from the partner service. This is required to specify which object is being unlinked.
-   **target\_object\_type** (`string`, required) The type of the object to which the partner service is associated. Specify the object category, such as ‘contact’, ‘company’, etc.

## HubspotCrmApi.UpdatePartnerServicesBatch



Update multiple partner services in CRM by ID or unique properties.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.ListPartnerServiceAssociations



Retrieve associations of a partner service by type.

**Parameters**

-   **partner\_service\_id** (`string`, required) The unique identifier of the partner service to retrieve associations for. This ID is required.
-   **target\_object\_type** (`string`, required) The type of object to filter associations by, such as contacts, companies, etc.
-   **include\_associated\_fields** (`boolean`, optional) Set to true to include associated fields in the response.
-   **max\_results\_per\_page** (`integer`, optional) Specify the maximum number of results to display per page. This determines the page size for the response.
-   **paging\_cursor\_token** (`string`, optional) The token to continue paginated results from the last read resource.

## HubspotCrmApi.ReadBatchPayments



Retrieve a batch of payments from CRM by IDs or unique properties.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **only\_return\_archived\_results** (`boolean`, optional) Return only archived results if set to true. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.GetPaymentDetails



Retrieve details of a payment object by ID.

**Parameters**

-   **payment\_identifier** (`string`, required) The unique identifier for the payment object. This can be the internal object ID or a unique property value.
-   **properties\_with\_history** (`array[string]`, optional) List of properties to return with their historical values. Unavailable properties will be ignored.
-   **requested\_properties** (`array[string]`, optional) A list of properties to return in the response. Non-existent properties will be ignored.
-   **retrieve\_associated\_object\_ids** (`array[string]`, optional) A list of object types to retrieve associated IDs for this payment. Non-existent associations are ignored.
-   **return\_only\_archived\_results** (`boolean`, optional) Set to true to return only archived results in the response.
-   **unique\_property\_name** (`string`, optional) The name of a property uniquely identifying the payment object type. Used to specify a unique property other than the internal ID.

## HubspotCrmApi.GetPaymentRecords



Retrieve a page of payment records from HubSpot CRM.

**Parameters**

-   **archived\_results\_only** (`boolean`, optional) Indicate if only archived payment records should be returned. Set to true to filter for archived records only.
-   **associated\_object\_types** (`array[string]`, optional) A list of object types to retrieve associated IDs for. If specified associations do not exist, they will be ignored.
-   **paging\_token\_after** (`string`, optional) The cursor token from the last read resource to fetch the next page of results.
-   **payment\_properties\_to\_include** (`array[string]`, optional) A list of property names to include in the response. Specified properties not present on the requested objects will be ignored.
-   **properties\_with\_history** (`array[string]`, optional) A list of property names to return with their historical values. Ignored if not present on objects.
-   **results\_per\_page\_limit** (`integer`, optional) Maximum number of payment records to display per page.

## HubspotCrmApi.SearchHubspotPayments



Search for payments in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.GetPipelineStageAudit



Retrieve audit logs for a specific pipeline stage.

**Parameters**

-   **object\_type** (`string`, required) The CRM object type to query for the pipeline stage, such as ‘deals’, ‘tickets’, or ‘contacts’.
-   **pipeline\_id** (`string`, required) The unique identifier for the pipeline to retrieve stage audit logs from.
-   **stage\_identifier** (`string`, required) The unique identifier of the pipeline stage to audit. Use this to specify which stage’s mutations you want to retrieve.

## HubspotCrmApi.GetPipelineById



Retrieve a single CRM pipeline by its unique ID.

**Parameters**

-   **object\_type\_in\_crm** (`string`, required) Specify the type of CRM object, such as ‘deals’ or ‘tickets’, whose pipeline you want to retrieve.
-   **pipeline\_unique\_id** (`string`, required) The unique identifier for the CRM pipeline to retrieve details. This value is required to fetch the specific pipeline information.

## HubspotCrmApi.ReplacePipelineHubspot



Replace a specific pipeline in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **object\_type** (`string`, optional) Specify the object type for the pipeline, such as ‘deals’ or ‘tickets’. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **pipeline\_identifier** (`string`, optional) The unique identifier of the pipeline to replace in HubSpot CRM. This is required to specify which pipeline is being modified. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **validate\_references\_before\_deletion** (`boolean`, optional) Set to true to validate all references before deleting the pipeline. Only used when mode is ‘execute’.
-   **validate\_deal\_stage\_usages\_before\_delete** (`boolean`, optional) Set to true to validate deal stage usages before deleting a pipeline; false to proceed without validation. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.DeletePipeline



Delete a specific pipeline in the CRM.

**Parameters**

-   **pipeline\_id** (`string`, required) The unique identifier of the pipeline to be deleted. Required for specifying which pipeline to remove.
-   **pipeline\_object\_type** (`string`, required) Specify the type of object for the pipeline, such as ‘deals’ or ‘tickets’.
-   **validate\_deal\_stage\_usages\_before\_deletion** (`boolean`, optional) Set to true to validate deal stage usages before deleting a pipeline, preventing deletion if usages are found.
-   **validate\_references\_before\_delete** (`boolean`, optional) Set to true to validate references before deleting the pipeline. This prevents accidental deletion when references are present.

## HubspotCrmApi.UpdatePipelineInCrm



Partially update a pipeline in the CRM.

**Parameters**

-   **crm\_object\_type** (`string`, required) Specify the type of CRM object (e.g., deals, tickets) to update the pipeline for.
-   **pipeline\_identifier** (`string`, required) The unique identifier for the pipeline to be updated. This is required to specify which pipeline to modify.
-   **is\_pipeline\_archived** (`boolean`, optional) Set to true if the pipeline is currently archived and you intend to restore it. Use only for restoration calls.
-   **pipeline\_display\_order** (`integer`, optional) The display order number to determine the position of the pipeline in the CRM. Pipelines with the same display order are sorted alphabetically by label.
-   **pipeline\_label** (`string`, optional) A unique label to organize and identify the pipeline within HubSpot’s UI.
-   **validate\_deal\_stage\_usages\_before\_delete** (`boolean`, optional) Indicate if deal stage usages should be validated before deletion. A boolean value is expected.
-   **validate\_references\_before\_deletion** (`boolean`, optional) Set to true to validate references before deletion.

## HubspotCrmApi.GetPipelineStages



Retrieve all stages of a specified pipeline.

**Parameters**

-   **object\_type** (`string`, required) Specify the type of CRM object, such as deals or tickets, associated with the pipeline.
-   **pipeline\_id** (`string`, required) The ID of the pipeline to retrieve stages for. Must be a valid pipeline ID in HubSpot CRM.

## HubspotCrmApi.CreatePipelineStage



Create a stage in a specified pipeline.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **crm\_object\_type** (`string`, optional) Specify the CRM object type, such as deals or tickets, for the pipeline. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **pipeline\_id** (`string`, optional) The unique identifier of the pipeline where the new stage will be created. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.GetPipelineAuditLog



Retrieves the audit log for a specified CRM pipeline.

**Parameters**

-   **object\_type** (`string`, required) The type of CRM object for which audit logs are being retrieved, such as ‘deals’ or ‘contacts’.
-   **pipeline\_id** (`string`, required) The unique identifier for the pipeline to fetch the audit log from. This ID is used to target a specific pipeline within HubSpot CRM.

## HubspotCrmApi.GetAllPipelines



Retrieve all pipelines for a specified object type.

**Parameters**

-   **object\_type** (`string`, required) Specify the CRM object type (e.g., contacts, deals) to retrieve pipelines for.

## HubspotCrmApi.CreateCrmPipeline



Create a new CRM pipeline in HubSpot.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **pipeline\_object\_type** (`string`, optional) Specify the type of CRM object for the pipeline, such as ‘deals’ or ‘tickets’. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.GetPipelineStageById



Retrieve a specific pipeline stage by its ID.

**Parameters**

-   **object\_type** (`string`, required) The type of CRM object, such as ‘deals’ or ‘tickets’, to access the pipeline stage for.
-   **pipeline\_id** (`string`, required) The unique identifier for the pipeline in HubSpot CRM. Use this ID to specify which pipeline the stage belongs to.
-   **stage\_id** (`string`, required) Unique ID of the pipeline stage to retrieve details from HubSpot CRM.

## HubspotCrmApi.ReplacePipelineStageProperties



Replace and update a pipeline stage in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **crm\_object\_type** (`string`, optional) Specifies the CRM object type like ‘deals’ or ‘contacts’ to identify the pipeline stage being replaced. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **pipeline\_id** (`string`, optional) The unique identifier for the pipeline whose stage properties are to be replaced. This must match the ID used in HubSpot CRM. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **pipeline\_stage\_id** (`string`, optional) The unique identifier for the pipeline stage to be replaced. This is required to specify which stage’s properties will be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.DeletePipelineStage



Deletes a pipeline stage from HubSpot CRM.

**Parameters**

-   **object\_type** (`string`, required) Specify the type of CRM object (e.g., deals, tickets) for which the pipeline stage is being deleted.
-   **pipeline\_id** (`string`, required) The unique ID of the pipeline containing the stage to be deleted.
-   **stage\_identifier** (`string`, required) The unique identifier of the pipeline stage to be deleted.

## HubspotCrmApi.UpdatePipelineStage



Update a stage in a CRM pipeline.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **pipeline\_object\_type** (`string`, optional) The type of CRM object in the pipeline, such as ‘deals’ or ‘tickets’. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **pipeline\_id** (`string`, optional) A unique identifier for the pipeline to be updated. This is necessary to specify which pipeline contains the stage you want to modify. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **stage\_id** (`string`, optional) The unique identifier of the stage to be updated within the pipeline. This is required to specify which stage’s details need modification. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.GetMultiplePostalMailObjects



Retrieve multiple postal mail objects by IDs or unique values.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **include\_archived** (`boolean`, optional) Set to true to include archived postal mail objects in the results. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.ArchivePostalMailBatch



Archive a batch of postal mail objects using their IDs.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.GetPostalMailRecords



Retrieve postal mail records from the CRM.

**Parameters**

-   **associated\_objects** (`array[string]`, optional) A list of object types to retrieve associations for, such as contacts or companies.
-   **include\_archived\_records** (`boolean`, optional) Include archived postal mail records if true; exclude them if false.
-   **include\_properties\_history** (`array[string]`, optional) Specify property names to include their history in the records. Use an array of strings.
-   **max\_records** (`integer`, optional) The maximum number of postal mail records to return. Must be an integer.
-   **pagination\_cursor\_after** (`string`, optional) A cursor for pagination. Use it to retrieve the next set of postal mail records after a specific point.
-   **retrieve\_specific\_properties** (`array[string]`, optional) List of specific properties to include in the response. Provide property names as strings.

## HubspotCrmApi.CreatePostalMailObject



Create a postal mail object in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.CreatePostalMailBatch



Create a batch of postal mail objects in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.UpsertPostalMailInHubspot



Create or update postal mail records in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.GetPostalMailById



Retrieve details of a postal mail record by ID from HubSpot CRM.

**Parameters**

-   **postal\_mail\_id** (`string`, required) The unique identifier for the postal mail record to retrieve details from HubSpot CRM.
-   **identify\_by\_id\_property** (`string`, optional) Specifies which property will be used as the primary identifier. Accepts a string that represents the property within the postal mail object that should be used to identify and retrieve details.
-   **include\_archived** (`boolean`, optional) Set to true to include archived postal mail records in the response.
-   **properties\_with\_history** (`array[string]`, optional) A list of property names for which history should be returned. Accepts an array of strings.
-   **related\_objects\_associations** (`array[string]`, optional) List of string identifiers representing related objects to retrieve alongside the postal mail record.
-   **specified\_properties** (`array[string]`, optional) A list of specific postal mail properties to retrieve. Leave empty to get all properties.

## HubspotCrmApi.ArchivePostalMail



Archive a postal mail object in HubSpot CRM.

**Parameters**

-   **postal\_mail\_id** (`string`, required) The unique identifier of the postal mail object to be archived.

## HubspotCrmApi.UpdatePostalMailRecord



Update a postal mail record in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **postal\_mail\_id** (`string`, optional) A unique identifier for the postal mail record to be updated in HubSpot CRM. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **property\_identifier** (`string`, optional) Specify the property key of the postal mail record to identify which field to update. This is typically the name of the field in the CRM record. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.UpdateMultiplePostalMails



Update multiple postal mail records at once in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.SearchPostalMailHubspot



Search for postal mail objects in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.ArchiveProductsBatch



Archive a batch of products by ID in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.GetProductsPage



Fetch a page of products from HubSpot CRM.

**Parameters**

-   **associated\_object\_types** (`array[string]`, optional) Provide a comma-separated list of object types to retrieve associated IDs for. Ignored if not existing.
-   **include\_properties\_with\_history** (`array[string]`, optional) Comma separated list of product properties to include along with their history. Reduces maximum results per request if used.
-   **maximum\_results\_per\_page** (`integer`, optional) The maximum number of results to display per page.
-   **paging\_cursor\_token** (`string`, optional) The cursor token for the last read resource, used for paged responses.
-   **product\_properties\_to\_return** (`array[string]`, optional) Comma-separated properties to include in the response. Any non-existent properties for the requested objects will be ignored.
-   **return\_archived\_only** (`boolean`, optional) Set to true to return only results that have been archived.

## HubspotCrmApi.CreateProductInHubspot



Create a new product in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.SearchHubspotProducts



Search for products in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.RetrieveHubspotProductRecords



Retrieve HubSpot product records by ID or unique property.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **only\_archived** (`boolean`, optional) Set to true to retrieve only archived product records. False returns unarchived records. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.CreateBatchOfProducts



Create a batch of products in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.UpsertHubspotProductsBatch



Batch create or update HubSpot product records.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.GetProductDetailsById



Retrieve product details using a product ID.

**Parameters**

-   **product\_id** (`string`, required) A unique identifier for the product. Can be the internal ID or any unique property as specified by `idProperty`.
-   **properties\_to\_return** (`array[string]`, optional) A list of product properties to include in the response. Any missing properties will be ignored.
-   **properties\_with\_history** (`array[string]`, optional) List properties to return with their history of past values, separated by commas. Ignored if not present in object.
-   **retrieve\_associated\_object\_ids** (`array[string]`, optional) A list of object types to retrieve associated IDs for. Any non-existent associations will be ignored.
-   **return\_archived\_only** (`boolean`, optional) Set to true to return only archived results. If false, only non-archived results are returned.
-   **unique\_property\_name** (`string`, optional) Specify the property name with unique values for the product object, instead of default productId.

## HubspotCrmApi.RemoveProduct



Archive a product by moving it to the recycling bin.

**Parameters**

-   **product\_id** (`string`, required) The unique identifier of the product to be archived in HubSpot CRM.

## HubspotCrmApi.UpdateProductInfo



Partially update product information in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **product\_id** (`string`, optional) The internal object ID of the product to be updated. This identifies the specific product in HubSpot CRM for the update operation. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **unique\_property\_name** (`string`, optional) The unique property name used to identify the product. It should be a string representing a property with unique values. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.UpdateHubspotProductsBatch



Update a batch of HubSpot products by ID or unique properties.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.ArchiveCrmProperties



Archive a list of properties in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **crm\_object\_type** (`string`, optional) Specify the type of CRM object (e.g., ‘contacts’, ‘companies’) for which the properties should be archived. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.ReadPropertyGroup



Retrieve details of a property group by its name.

**Parameters**

-   **object\_type** (`string`, required) Specify the type of CRM object, such as ‘contacts’ or ‘deals’.
-   **property\_group\_name** (`string`, required) The name of the property group to be retrieved.

## HubspotCrmApi.DeletePropertyGroup



Delete a property group and move it to recycling bin.

**Parameters**

-   **crm\_object\_type** (`string`, required) Specify the type of CRM object, such as ‘contacts’, ‘companies’, etc.
-   **property\_group\_name** (`string`, required) The name of the property group to delete. This identifies which group to move to the recycling bin in HubSpot CRM.

## HubspotCrmApi.UpdatePropertyGroup



Update fields in a specified property group.

**Parameters**

-   **object\_type** (`string`, required) Specifies the type of object in HubSpot CRM (e.g., contacts, companies).
-   **property\_group\_name** (`string`, required) The unique name of the property group to be updated in HubSpot CRM.
-   **property\_group\_display\_order** (`integer`, optional) Set the display order of the property group. Use positive integers for ordering, or -1 to display after positive values.
-   **property\_group\_label** (`string`, optional) A human-readable label for the property group in HubSpot.

## HubspotCrmApi.ReadProperty



Retrieve CRM property details by name and type.

**Parameters**

-   **crm\_object\_type** (`string`, required) Specify the CRM object type, such as ‘contact’ or ‘company’, to retrieve the property for.
-   **property\_name** (`string`, required) The unique name of the property to retrieve. This should match the property name in HubSpot CRM.
-   **property\_specifications** (`string`, optional) Specify the details or attributes of the property to retrieve. Use a comma-separated list for multiple specifications.
-   **return\_archived\_only** (`boolean`, optional) Set to True to return only archived property results.

## HubspotCrmApi.DeletePropertyHubspotCrm



Delete a property in HubSpot CRM and move it to the recycling bin.

**Parameters**

-   **object\_type** (`string`, required) Specify the type of object in HubSpot CRM (e.g., ‘contacts’, ‘companies’).
-   **property\_name** (`string`, required) The name of the property to delete, identified by its unique name within the object type.

## HubspotCrmApi.UpdatePropertyValue



Update specific fields of a CRM property partially.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **crm\_object\_type** (`string`, optional) Specify the type of CRM object (e.g., ‘contacts’, ‘deals’) to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **property\_identifier** (`string`, optional) The unique name of the CRM property to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.ReadBatchProperties



Fetches a batch of properties for a specified CRM object type.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **crm\_object\_type** (`string`, optional) The type of CRM object for which properties are being read (e.g., contacts, deals). Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.CreateBatchProperties



Create a batch of properties for a specified object type in HubSpot.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **object\_type** (`string`, optional) Specifies the type of CRM object for which to create properties (e.g., contacts, deals, companies). Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.RetrieveHubspotProperties



Retrieve all properties for a HubSpot object type.

**Parameters**

-   **object\_type** (`string`, required) Specifies the HubSpot object type (e.g., contact, deal) to retrieve properties for.
-   **return\_archived\_only** (`boolean`, optional) Set to true to return only results that have been archived. Otherwise, return all properties.
-   **selected\_properties** (`string`, optional) A comma-separated list of specific properties to retrieve for the object type. Leave empty to retrieve all properties.

## HubspotCrmApi.CreateHubspotCrmProperty



Create a new property for a specified object type in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **object\_type** (`string`, optional) Specify the object type to which the new property will be added, such as contact, company, or deal. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.RetrieveHubspotPropertyGroups



Retrieve HubSpot CRM property groups for a specified object type.

**Parameters**

-   **hubspot\_object\_type** (`string`, required) Specify the HubSpot object type to retrieve property groups, such as ‘contacts’, ‘companies’, or ‘deals’.

## HubspotCrmApi.CreatePropertyGroup



Create a new property group in HubSpot CRM.

**Parameters**

-   **internal\_property\_group\_name** (`string`, required) The unique name used internally to reference the property group via the API.
-   **object\_type** (`string`, required) Specifies the CRM object type for the property group (e.g., contacts, companies).
-   **property\_group\_label** (`string`, required) A human-readable label for the property group, displayed in HubSpot.
-   **property\_group\_display\_order** (`integer`, optional) Defines the display order of the property group, with lowest positive integers displayed first. Use -1 to display after positive values.

## HubspotCrmApi.GetPropertyValidationRules



Retrieve validation rules for properties of a given object in HubSpot CRM.

**Parameters**

-   **object\_type\_id** (`string`, required) The unique identifier for the object type in HubSpot CRM whose property validation rules you want to retrieve. This is a string value.

## HubspotCrmApi.FetchPropertyValidation



Retrieve validation rules for a specific property in HubSpot CRM.

**Parameters**

-   **object\_type\_id** (`string`, required) The unique identifier for the object type in HubSpot CRM, such as “contacts” or “deals”.
-   **property\_name** (`string`, required) The name of the property whose validation rules you want to retrieve in HubSpot CRM. It must match exactly to identify the property correctly.

## HubspotCrmApi.ArchiveQuotesBatch



Archive a batch of quotes in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.GetQuotesPage



Retrieve a page of quotes with specified properties.

**Parameters**

-   **paging\_cursor\_token** (`string`, optional) The token to identify the last read resource for pagination. Use it to get the next page of results.
-   **properties\_with\_history** (`array[string]`, optional) List of properties to return with their history. Reduces max quotes per request.
-   **quote\_properties\_to\_return** (`array[string]`, optional) List the properties to retrieve for each quote. Only present properties will be returned.
-   **results\_limit** (`integer`, optional) The maximum number of quote results to display per page. Accepts an integer value.
-   **retrieve\_associated\_ids\_for\_object\_types** (`array[string]`, optional) A list of object types to retrieve associated IDs for. Non-existing associations will be ignored.
-   **return\_archived\_only** (`boolean`, optional) Set to true to return only archived results. False to include active results.

## HubspotCrmApi.CreateHubspotQuote



Create a new quote in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.GetQuoteById



Retrieve details of a quote by its ID.

**Parameters**

-   **quote\_id** (`string`, required) The ID or unique property value of the quote to be retrieved. This identifies the specific quote in HubSpot CRM.
-   **included\_properties** (`array[string]`, optional) List of properties to be returned in the response. If a property is not present, it will be ignored. Input should be an array of strings.
-   **only\_return\_archived** (`boolean`, optional) Set to true to only return results that have been archived for the quote.
-   **properties\_with\_history** (`array[string]`, optional) Comma-separated list of properties to return with their value history. Ignored if not present.
-   **retrieve\_associated\_object\_types** (`array[string]`, optional) List of object types to retrieve associated IDs for; ignored if non-existent.
-   **unique\_property\_name** (`string`, optional) The property name with unique values for the quote object, used in the retrieval process.

## HubspotCrmApi.ArchiveQuote



Archive a quote by moving it to the recycling bin.

**Parameters**

-   **quote\_identifier** (`string`, required) The unique identifier for the quote to be archived in HubSpot CRM.

## HubspotCrmApi.UpdateQuoteInformation



Update a quote’s details in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **quote\_identifier** (`string`, optional) The identifier of the quote to be updated. This can be the internal ID or a unique property value specified by `idProperty`. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **unique\_property\_name** (`string`, optional) The name of a property with unique values for identifying the quote object. Used instead of `quoteId`. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.UpdateQuoteBatch



Update a batch of quotes using internal ID or property values.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.CreateOrUpdateQuotes



Create or update quote records in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.CreateBatchOfQuotes



Creates a batch of quotes in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.SearchQuotesInHubspot



Search for quotes in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.RetrieveQuotesBatch



Retrieve multiple quotes by ID or custom property.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **archived\_results\_only** (`boolean`, optional) Specify `true` to return only archived results; `false` to include non-archived results. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.GetHubspotCrmObjectSchemas



Retrieve HubSpot CRM object schemas.

**Parameters**

-   **return\_archived\_only** (`boolean`, optional) Set to True to return only results that have been archived.

## HubspotCrmApi.CreateCrmObjectSchema



Create a new CRM object schema in HubSpot.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.GetCrmObjectSchema



Retrieve a CRM object schema by its type.

**Parameters**

-   **object\_type** (`string`, required) The fully qualified name or object type ID of the CRM schema to retrieve.

## HubspotCrmApi.DeleteCrmObjectSchema



Delete a CRM object schema in HubSpot.

**Parameters**

-   **object\_type\_identifier** (`string`, required) The fully qualified name or object type ID of the schema to delete.
-   **return\_only\_archived\_results** (`boolean`, optional) Set to True to return only archived results.

## HubspotCrmApi.UpdateCrmObjectSchema



Update a CRM object’s schema in HubSpot.

**Parameters**

-   **object\_type\_identifier** (`string`, required) Fully qualified name or object type ID of your CRM schema for updates.
-   **clear\_description** (`boolean`, optional) Set to true to clear the description field for the object type schema.
-   **object\_description** (`string`, optional) A description for the CRM object schema, providing details about its purpose or usage in HubSpot.
-   **object\_singular\_name** (`string`, optional) The word representing a single object. This cannot be changed later.
-   **plural\_labels** (`string`, optional) Specify the word representing multiple instances of the object type. This value is permanent and cannot be changed after setting.
-   **primary\_display\_property** (`string`, optional) The primary property’s name for this object, displayed prominently on the HubSpot record page.
-   **required\_properties** (`array[string]`, optional) List of property names that must be provided when creating an object of this type in HubSpot.
-   **restorable** (`boolean`, optional) Indicates if the object can be restored after deletion. Accepts a boolean value.
-   **searchable\_properties** (`array[string]`, optional) List of property names to be indexed for HubSpot’s product search, enhancing searchability of the CRM object type.
-   **secondary\_display\_properties** (`array[string]`, optional) Names of secondary properties displayed on the HubSpot record page for this object type.

## HubspotCrmApi.CreateCrmObjectAssociation



Create an association between HubSpot CRM objects.

**Parameters**

-   **crm\_object\_type\_schema** (`string`, required) Fully qualified name or object type ID of your CRM object schema to create the association.
-   **primary\_object\_type\_id** (`string`, required) ID of the primary object type to link from in the CRM system.
-   **target\_object\_type\_id** (`string`, required) ID of the target object type to link to in the CRM association.
-   **association\_name** (`string`, optional) A unique name for the association between CRM objects. This helps identify the link.

## HubspotCrmApi.DeleteCrmAssociation



Remove an association between CRM object schemas.

**Parameters**

-   **association\_id** (`string`, required) Unique ID of the association to be removed.
-   **schema\_object\_type** (`string`, required) The fully qualified name or object type ID of your schema to identify which CRM object to target.

## HubspotCrmApi.FetchHubspotObjectRecords



Retrieve HubSpot CRM records by ID or custom property.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **return\_archived\_only** (`boolean`, optional) Indicate if only archived records should be returned when retrieving HubSpot CRM data. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.UpdateServicesBatch



Update multiple service records in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.HubspotCrmUpsertRecords



Create or update unique records in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.HubspotSearchCustomObjects



Search for custom objects in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.ArchiveServicesBatch



Archive multiple services using their IDs in bulk.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.GetHubspotObjectById



Retrieve a HubSpot CRM object using its service ID.

**Parameters**

-   **hubspot\_crm\_service\_id** (`string`, required) The unique identifier (service ID) of the HubSpot CRM object to retrieve. This can be the internal object ID or any unique property defined by the `idProperty`.
-   **associated\_object\_types** (`array[string]`, optional) A list of object types whose associated IDs should be retrieved. Non-existent associations will be ignored.
-   **properties\_with\_history** (`array[string]`, optional) A list of properties to return along with their history for a HubSpot CRM object. Properties should be specified as strings in the list.
-   **return\_archived\_only** (`boolean`, optional) Set to true to return only archived results. False returns non-archived results.
-   **return\_properties\_list** (`array[string]`, optional) A list of properties to be returned in the response. Non-existing properties will be ignored.
-   **unique\_property\_name** (`string`, optional) Specify the name of a property with unique values for the object.

## HubspotCrmApi.DeleteObjectHubspot



Move an object to the recycling bin in HubSpot CRM.

**Parameters**

-   **object\_service\_id** (`string`, required) The unique identifier for the object to be moved to the recycling bin in HubSpot CRM.

## HubspotCrmApi.EditHubspotObject



Partially update a HubSpot CRM object with specified properties.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **object\_identifier** (`string`, optional) The unique identifier or `{serviceId}` for the object to be updated. This can be an internal object ID or a unique property value when used with `idProperty`. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **unique\_property\_name** (`string`, optional) The name of a unique property for the object, used instead of the internal ID if specified. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.ReadServicesPage



Retrieve a page of services with customizable properties.

**Parameters**

-   **associated\_object\_types** (`array[string]`, optional) A list of object types to retrieve associated IDs for each service. Ignored if associations do not exist.
-   **max\_results\_per\_page** (`integer`, optional) Specify the maximum number of results to display per page.
-   **paging\_cursor\_token** (`string`, optional) The cursor token from the last read to retrieve the next page of results.
-   **properties\_with\_history** (`array[string]`, optional) A list of properties to return with their history of values. If absent, properties are ignored. Reduces max services per request.
-   **requested\_properties** (`array[string]`, optional) Comma-separated list of properties to include in the response. Non-existent properties will be ignored.
-   **return\_archived\_only** (`boolean`, optional) Set to true to return only archived results; false to include non-archived results.

## HubspotCrmApi.CreateServiceRecord



Create a service record in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.CreateBatchOfServices



Create a batch of services in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.ArchiveHubspotTasks



Archive multiple HubSpot tasks by their IDs.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.GetTaskDetails



Retrieve HubSpot CRM task details using task ID.

**Parameters**

-   **task\_id** (`string`, required) The unique identifier for the HubSpot CRM task. Retrieve specific task details using this ID.
-   **associated\_object\_types** (`array[string]`, optional) List of object types to retrieve associated IDs for. Returns IDs of related objects.
-   **properties\_with\_history** (`array[string]`, optional) List of properties to return with their previous values. Comma-separated and ignored if not present.
-   **requested\_properties** (`array[string]`, optional) List of properties to return for the task. Only available properties will be returned.
-   **return\_only\_archived** (`boolean`, optional) Set to true to return only archived results.
-   **unique\_property\_name** (`string`, optional) Specify the name of the property with unique values to identify the task.

## HubspotCrmApi.DeleteTaskInHubspot



Delete a task in HubSpot by task ID.

**Parameters**

-   **task\_id** (`string`, required) The unique identifier of the task to be deleted from HubSpot CRM. Required to move the task to the recycling bin.

## HubspotCrmApi.UpdateHubspotTask



Update properties of a HubSpot task using its ID.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **task\_identifier** (`string`, optional) The internal ID or unique property name of the task to update. Defaults to internal ID. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **unique\_property\_name** (`string`, optional) Specify the name of the property with unique values. Used for identifying the object instead of `taskId`. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.CreateBatchTasks



Create a batch of tasks in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.UpdateBatchTasks



Update a batch of tasks in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.RetrieveHubspotTasks



Retrieve HubSpot task records by ID or custom property.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **return\_archived\_only** (`boolean`, optional) Set to true to return only archived records from HubSpot. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.UpsertHubspotTasks



Create or update tasks in HubSpot using a unique property.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.SearchHubspotTasks



Search for tasks in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.GetTasksList



Retrieve a page of tasks from HubSpot CRM.

**Parameters**

-   **max\_results\_per\_page** (`integer`, optional) Specify the maximum number of task results to retrieve per page.
-   **paging\_cursor\_token** (`string`, optional) The token indicating the last resource read, used for pagination to continue from the next page.
-   **properties\_with\_history** (`array[string]`, optional) Specify properties to return along with their full change history. Note: This reduces the number of tasks per request.
-   **retrieve\_associated\_object\_ids** (`array[string]`, optional) A list of object types to retrieve associated IDs for. If specified associations do not exist, they will be ignored.
-   **return\_only\_archived\_results** (`boolean`, optional) Set to true to return only archived tasks; false for active tasks.
-   **task\_properties\_to\_return** (`array[string]`, optional) A list of property names to include in the response. Ignored if not present on the tasks.

## HubspotCrmApi.CreateTaskInCrm



Create a task in HubSpot CRM and return task details.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.GetTaxesPage



Retrieve a page of tax details from HubSpot CRM.

**Parameters**

-   **archived\_only** (`boolean`, optional) Set to true to return only archived tax results.
-   **included\_properties** (`array[string]`, optional) List the properties to be returned for each tax. Specify as an array of strings.
-   **max\_results\_per\_page** (`integer`, optional) Specify the maximum number of tax results to display per page.
-   **paging\_cursor\_token** (`string`, optional) The token for the paging cursor from the last read resource for fetching the next page of results.
-   **properties\_with\_history** (`array[string]`, optional) Specify properties to return with their history. Reduces max number of taxes per request.
-   **retrieve\_associated\_object\_ids** (`array[string]`, optional) Comma-separated list of object types to retrieve associated IDs for. Non-existent associations will be ignored.

## HubspotCrmApi.CreateHubspotTax



Create a tax in HubSpot CRM and retrieve its details.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.GetTaxDetailsById



Retrieve tax details using a specific tax ID.

**Parameters**

-   **tax\_id** (`string`, required) The unique ID or property value for the tax object. Default is the internal object ID.
-   **associated\_object\_types** (`array[string]`, optional) A list of object types to retrieve associated IDs for. Non-existent associations will be ignored.
-   **properties\_with\_history** (`array[string]`, optional) List properties to return with their historical values. Use a comma-separated format.
-   **return\_archived\_only** (`boolean`, optional) Set to true to return only archived results. False returns non-archived records.
-   **return\_properties** (`array[string]`, optional) Comma-separated list of properties to be included in the response. Non-existing properties will be ignored.
-   **unique\_property\_name** (`string`, optional) The name of a property whose values are unique for the tax object. Use this to specify an alternative ID property instead of the default internal ID.

## HubspotCrmApi.DeleteTaxEntry



Archive a tax entry in HubSpot CRM.

**Parameters**

-   **tax\_entry\_id** (`string`, required) The unique identifier for the tax entry you want to archive in HubSpot CRM.

## HubspotCrmApi.UpdateTaxObject



Update properties of a tax object in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **tax\_object\_identifier** (`string`, optional) The identifier for the tax object. Use the internal `taxId` by default or provide a unique property value specified by the `idProperty`. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **unique\_property\_name** (`string`, optional) The name of a property uniquely identifying this tax object. Used instead of `taxId` if specified. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.CreateOrUpdateTaxRecords



Create or update tax records based on unique properties.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.UpdateBatchTaxes



Update taxes in batch using IDs or unique values.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.RetrieveTaxRecords



Retrieve tax records by ID or custom property.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **return\_archived\_only** (`boolean`, optional) Set to true to retrieve only archived records, false to exclude them. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.CreateTaxBatch



Create a batch of taxes in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.SearchTaxes



Search for tax entries within HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.ArchiveTaxBatch



Archive a batch of taxes by their IDs.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.MergeSupportTickets



Merge two support tickets into one unified record.

**Parameters**

-   **primary\_ticket\_id** (`string`, required) The ID of the ticket designated as the primary record in the merge operation. After merging, this ticket will contain all combined information.
-   **secondary\_ticket\_id** (`string`, required) The ID of the support ticket to be merged into the primary ticket. It specifies which ticket will be combined with the primary ticket record.

## HubspotCrmApi.DeleteHubspotTicketsBatch



Delete a batch of tickets in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.GetTicketDetails



Retrieve details of a ticket by ID from HubSpot CRM.

**Parameters**

-   **ticket\_id** (`string`, required) The ID of the ticket to retrieve from HubSpot CRM. This can be the internal object ID or a unique property value based on the `idProperty`.
-   **associated\_object\_types** (`array[string]`, optional) List of object types for retrieving associated IDs. Non-existent associations will be ignored.
-   **only\_return\_archived** (`boolean`, optional) Set to true to return only archived results.
-   **properties\_to\_return** (`array[string]`, optional) A list of properties to include in the response. Properties not present will be ignored.
-   **properties\_with\_history** (`array[string]`, optional) List of properties with their history to be returned. If properties are missing, they’ll be ignored.
-   **unique\_identifier\_property** (`string`, optional) Specifies the property name with unique values for identifying the ticket.

## HubspotCrmApi.DeleteTicket



Move a ticket to the recycling bin by ticket ID.

**Parameters**

-   **ticket\_id** (`string`, required) The unique ID of the ticket to move to the recycling bin. Must be a valid string representing the ticket identifier.

## HubspotCrmApi.UpdateTicketInfo



Partially update ticket details in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **ticket\_id** (`string`, optional) The internal ID of the ticket to be updated. This is used to identify the specific ticket in HubSpot CRM. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **unique\_property\_name** (`string`, optional) The name of a property whose values are unique for the ticket object. Specify if not using the default ticket ID. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.UpsertCrmTickets



Create or update CRM tickets in bulk using unique identifiers.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.RetrieveTicketBatch



Retrieve a batch of tickets by ID or property value.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **return\_archived\_tickets\_only** (`boolean`, optional) Set to true to return only archived tickets. If false, include non-archived tickets as well. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.FetchTicketsPage



Retrieve a page of tickets from HubSpot CRM.

**Parameters**

-   **associated\_object\_types** (`array[string]`, optional) A list of object types (e.g. ‘contacts’, ‘companies’) to retrieve associated IDs for tickets. Ignore if they don’t exist.
-   **include\_properties** (`array[string]`, optional) A list of properties to return for each ticket. Specify as strings; unlisted properties will be ignored.
-   **paging\_cursor\_token** (`string`, optional) The token for the last read resource to continue paging results.
-   **properties\_with\_history** (`array[string]`, optional) A list of property names to return with their historical values. Reduces the number of tickets retrievable per request.
-   **results\_per\_page** (`integer`, optional) The maximum number of results to display per page. Must be a positive integer.
-   **return\_only\_archived** (`boolean`, optional) Return only archived tickets if set to ‘True’.

## HubspotCrmApi.CreateTicket



Create a support ticket in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.SearchTickets



Search and filter CRM tickets based on properties and associations.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.CreateBatchTickets



Create a batch of tickets in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.UpdateTicketBatch



Update multiple tickets in HubSpot CRM by ID or property.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.RetrieveEventDetails



Retrieve detailed information for a specific HubSpot event.

**Parameters**

-   **event\_id** (`string`, required) Specify the event ID to retrieve detailed information for a specific event in HubSpot CRM.
-   **event\_template\_id** (`string`, required) The ID of the event template used to identify and retrieve specific event details in HubSpot CRM.

## HubspotCrmApi.SendEventToHubspot



Send event data to a specified HubSpot event type.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.RetrieveEventInstance



Retrieve an event instance using template and event ID.

**Parameters**

-   **event\_id** (`string`, required) The unique identifier for the specific event you want to retrieve.
-   **event\_template\_id** (`string`, required) The unique ID of the event template required to retrieve the event instance.

## HubspotCrmApi.BatchCreateTimelineEvents



Batch create multiple timeline event instances.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.UploadCallTranscripts



Upload call transcripts to HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.GetTranscriptById



Retrieve call transcript details by transcript ID.

**Parameters**

-   **transcript\_id** (`string`, required) The unique identifier of the call transcript to retrieve from HubSpot CRM.

## HubspotCrmApi.DeleteCallTranscript



Delete a call transcript by transcript ID.

**Parameters**

-   **transcript\_id** (`string`, required) The unique identifier for the call transcript you want to delete from the HubSpot CRM.

## HubspotCrmApi.SearchCrmUsers



Perform a user search in the CRM database.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.CreateUsersBatch



Create a batch of users in the CRM system.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.ArchiveUsersBatch



Archives a batch of users by their IDs in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.RetrieveHubspotUserRecords



Retrieve HubSpot user records by ID or unique property.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **return\_only\_archived\_results** (`boolean`, optional) Specify True to return only results that have been archived. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.UpsertHubspotUsers



Create or update user records in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.GetUserInfo



Retrieves user information from HubSpot CRM using user ID.

**Parameters**

-   **user\_identifier** (`string`, required) The unique identifier for the user. This can be the internal object ID or a property value specified by `idProperty`.
-   **object\_associations** (`array[string]`, optional) Comma separated list of object types to retrieve associated IDs for in the user info response.
-   **properties\_to\_return** (`array[string]`, optional) A list of user properties to return in the response. If any specified properties are not present, they will be ignored.
-   **properties\_with\_history** (`array[string]`, optional) List of property names to return with their value history for the user.
-   **return\_only\_archived\_results** (`boolean`, optional) Set to true to return only archived results. Set to false to exclude archived items from results.
-   **unique\_property\_name** (`string`, optional) The name of a property with unique values to identify the object.

## HubspotCrmApi.DeleteUser



Delete a user and move to recycling bin.

**Parameters**

-   **user\_id\_to\_delete** (`string`, required) The unique identifier of the user to delete and move to the recycling bin.

## HubspotCrmApi.UpdateHubspotUser



Update user details in HubSpot CRM.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **user\_id** (`string`, optional) The internal user ID or unique property value to identify the user for updating. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **unique\_property\_name** (`string`, optional) Specifies the name of a property with unique values for identifying the user object. Use this if not using userId. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.UpdateMultipleUsers



Update multiple users in HubSpot CRM by internal ID or unique properties.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## HubspotCrmApi.GetUsersPage



Fetch a page of users from the CRM.

**Parameters**

-   **associated\_object\_types** (`array[string]`, optional) A list of object types for which associated IDs should be retrieved. If specified associations do not exist, they will be ignored.
-   **max\_results\_per\_page** (`integer`, optional) Specify the maximum number of results to display per page.
-   **paging\_cursor\_token** (`string`, optional) The paging cursor token from the last read resource, used to fetch next set of results.
-   **properties\_with\_history** (`array[string]`, optional) List of properties to return with their history. Reduces the maximum number of users per request.
-   **return\_only\_archived** (`boolean`, optional) Set to true to return only results that have been archived.
-   **user\_properties** (`array[string]`, optional) A list of user property names to include in the response. Any non-existent properties will be ignored.

## HubspotCrmApi.CreateCrmUser



Create a new user in the CRM and retrieve their ID.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## Reference

Below is a reference of enumerations used by some of the tools in the HubspotCrmApi MCP Server:

### ToolMode

-   **GET\_REQUEST\_SCHEMA**: `get_request_schema`
-   **EXECUTE**: `execute`

## Auth

The HubspotCrmApi MCP Server uses the Auth Provider with id `arcade-hubspot` to connect to users’ HubspotCrmApi accounts. In order to use the MCP Server, you will need to configure the `arcade-hubspot` auth provider.

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_hubspot_crm_api ``` Learn more](/guides/deployment-hosting.md)

Last updated on February 10, 2026

[HubspotConversationsApi](/en/resources/integrations/sales/hubspot-conversations-api.md)
[HubspotEventsApi](/en/resources/integrations/sales/hubspot-events-api.md)
