---
title: "SquareupApi"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Productivity & Docs](/en/resources/integrations/productivity/asana.md)
SquareupApi

# SquareupApi

Arcade Starter

**Description:** Tools that enable LLMs to interact directly with the squareup API.

**Author:** Arcade

**Auth:** User authorization

[![PyPI Version](https://img.shields.io/pypi/v/arcade_squareup_api)](https://pypi.org/project/arcade_squareup_api/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_squareup_api)](https://pypi.org/project/arcade_squareup_api/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_squareup_api)](https://pypi.org/project/arcade_squareup_api/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_squareup_api)](https://pypi.org/project/arcade_squareup_api/)

SquareupApi is a [Starter MCP Server](/guides/create-tools/improve/types-of-tools.md#starter-tools)
: each tool mirrors one HTTP endpoint and offers LLMs a way to interact with the low-level API.



Differently from [Optimized MCP Servers](/guides/create-tools/improve/types-of-tools.md#optimized-tools)
, Starter tools are heavily influenced by the original API design, which is not usually optimized for LLM usage. For this reason, we recommend thoroughly evaluating the tools with your Agents or chatbots before using it in production. [Read more](/guides/create-tools/improve/types-of-tools.md) about Optimized vs Starter tools.

The SquareupApi MCP Server offers a comprehensive suite of tools for managing various aspects of the Square platform. Users can perform actions related to payments, customer management, inventory, and more. Key functionalities include:

## Available Tools

Tool Name

Description

SquareupApi.RevokeOauthAccessToken

Revoke all OAuth access tokens for an account.

SquareupApi.ObtainOauthToken

Obtain OAuth access and refresh tokens.

SquareupApi.RetrieveTokenStatus

Retrieve the status of an OAuth or personal access token.

SquareupApi.ActivateDomainForApplePay

Activates a domain for use with Apple Pay and Square.

SquareupApi.ListBankAccounts

Fetches bank accounts linked to a Square account.

SquareupApi.GetBankAccountDetailsByV1Id

Fetches bank account details using a V1 ID.

SquareupApi.GetBankAccountDetails

Retrieve details of a bank account linked to a Square account.

SquareupApi.RetrieveBookings

Retrieve a collection of bookings.

SquareupApi.CreateBooking

Create a new booking for a service.

SquareupApi.SearchBookingAvailability

Find available booking slots for appointments.

SquareupApi.BulkRetrieveBookings

Retrieve multiple bookings using booking IDs.

SquareupApi.RetrieveBookingProfile

Retrieve a seller's booking profile information.

SquareupApi.ListBookingCustomAttributeDefinitions

Retrieve all custom attribute definitions for bookings.

SquareupApi.CreateBookingCustomAttribute

Creates a custom attribute definition for bookings.

SquareupApi.DeleteBookingCustomAttributeDefinition

Deletes a booking's custom attribute definition.

SquareupApi.RetrieveBookingCustomAttributeDefinition

Retrieve a booking's custom attribute definition.

SquareupApi.UpdateBookingCustomAttribute

Update a booking's custom attribute definition.

SquareupApi.BulkDeleteBookingCustomAttributes

Bulk delete custom attributes for bookings.

SquareupApi.BulkUpsertBookingCustomAttributes

Bulk upserts custom attributes for bookings.

SquareupApi.ListSellerBookingProfiles

Retrieve booking profiles for seller locations.

SquareupApi.RetrieveSellerLocationBookingProfile

Retrieve a seller's location booking profile.

SquareupApi.ListBookingProfiles

Retrieve booking profiles for team members.

SquareupApi.RetrieveTeamBookingProfiles

Retrieve booking profiles for one or more team members.

SquareupApi.GetTeamMemberBookingProfile

Retrieve a team member's booking profile from Square.

SquareupApi.RetrieveBooking

Retrieve detailed information about a booking.

SquareupApi.UpdateBooking

Update an existing booking with new details.

SquareupApi.CancelBooking

Cancel an existing booking.

SquareupApi.ListBookingCustomAttributes

Retrieve a booking's custom attributes.

SquareupApi.DeleteBookingCustomAttribute

Deletes a custom attribute from a booking.

SquareupApi.RetrieveBookingCustomAttribute

Retrieve custom attributes of a booking.

SquareupApi.SetBookingCustomAttribute

Upserts a custom attribute for a booking.

SquareupApi.ListUserCards

Retrieve a list of cards owned by the account.

SquareupApi.AddCardToMerchant

Adds a card on file to an existing merchant.

SquareupApi.RetrieveCardDetails

Retrieve details for a specific card.

SquareupApi.DisableCreditCard

Disable a credit card to prevent further charges.

SquareupApi.ListCashDrawerShifts

Retrieve cash drawer shift details for a location and date range.

SquareupApi.RetrieveCashDrawerShiftSummary

Retrieve summary details for a specific cash drawer shift.

SquareupApi.ListCashDrawerShiftEvents

Retrieve events for a specific cash drawer shift.

SquareupApi.DeleteCatalogItems

Deletes catalog items and their children by IDs.

SquareupApi.RetrieveCatalogObjects

Retrieve detailed catalog objects by provided IDs.

SquareupApi.BatchUpsertCatalogObjects

Batch create or update up to 10,000 catalog objects.

SquareupApi.GetSquareCatalogInfo

Retrieve Square Catalog API information and batch size limits.

SquareupApi.ListCatalogItems

Retrieve a list of catalog objects by type from Square catalog.

SquareupApi.UpsertCatalogObject

Create or update a catalog object in Squareup.

SquareupApi.DeleteCatalogObject

Delete a catalog object and its children by ID.

SquareupApi.GetCatalogItemInfo

Retrieve detailed information for a specific catalog item.

SquareupApi.SearchCatalogObjects

Search for catalog objects using specified query filters.

SquareupApi.SearchCatalogItems

Find catalog items or variations based on search filters.

SquareupApi.UpdateItemModifierLists

Update modifier lists for a catalog item.

SquareupApi.UpdateItemTaxes

Update tax settings for specified catalog items.

SquareupApi.ListSalesChannels

Retrieve a list of available sales channels.

SquareupApi.RetrieveSalesChannels

Retrieve bulk information about sales channels.

SquareupApi.RetrieveChannelInfo

Retrieve detailed information about a specific channel.

SquareupApi.ListCustomerProfiles

Retrieve customer profiles from a Square account.

SquareupApi.CreateCustomer

Creates a new customer for a business in Square.

SquareupApi.BulkCreateCustomers

Create multiple customer profiles in bulk.

SquareupApi.BulkDeleteCustomers

Deletes multiple customer profiles at once.

SquareupApi.BulkRetrieveCustomers

Retrieve multiple customer profiles using IDs.

SquareupApi.UpdateMultipleCustomerProfiles

Update multiple customer profiles in one request.

SquareupApi.ListCustomerCustomAttributeDefinitions

Retrieve customer custom attribute definitions for a Square seller.

SquareupApi.CreateCustomerAttributeDefinition

Create a custom attribute for customer profiles.

SquareupApi.DeleteCustomerAttributeDefinition

Delete a customer custom attribute definition from Square.

SquareupApi.GetCustomerCustomAttributeDefinition

Retrieve a customer's custom attribute definition from Square.

SquareupApi.UpdateCustomerAttributeDefinition

Update customer custom attribute definitions for a Square seller.

SquareupApi.BulkUpsertCustomerAttributes

Bulk create or update custom attributes for customer profiles.

SquareupApi.ListCustomerGroups

Retrieve a list of customer groups for a business.

SquareupApi.CreateCustomerGroup

Creates a new customer group for a business.

SquareupApi.DeleteCustomerGroup

Deletes a customer group by its ID.

SquareupApi.GetCustomerGroup

Retrieve details of a specific customer group by group ID.

SquareupApi.UpdateCustomerGroup

Updates a customer group by its ID.

SquareupApi.SearchSquareCustomers

Search customer profiles in a Square account.

SquareupApi.ListCustomerSegments

Retrieve customer segments for a business.

SquareupApi.GetCustomerSegment

Retrieve specific customer segment information.

SquareupApi.DeleteCustomerProfile

Delete a customer profile from a business system.

SquareupApi.RetrieveCustomerDetails

Retrieve detailed information for a specific customer.

SquareupApi.UpdateCustomerProfile

Update a customer's profile with new or changed details.

SquareupApi.ListCustomerCustomAttributes

Retrieve custom attributes of a customer profile.

SquareupApi.DeleteCustomerCustomAttribute

Deletes a custom attribute from a customer profile.

SquareupApi.GetCustomerCustomAttribute

Retrieve a custom attribute from a customer profile.

SquareupApi.UpdateCustomerCustomAttribute

Create or update a custom attribute for a customer profile.

SquareupApi.RemoveCustomerGroup

Remove a group membership from a customer.

SquareupApi.AddGroupToCustomer

Adds a customer to a specified group.

SquareupApi.ListMerchantDevices

Retrieve a list of devices for a merchant's terminal API.

SquareupApi.ListDeviceCodes

List all device codes for a merchant.

SquareupApi.CreateSquareTerminalDeviceCode

Generate a DeviceCode for Square Terminal login.

SquareupApi.RetrieveDeviceCode

Retrieve device code details by ID.

SquareupApi.RetrieveDeviceById

Retrieve specific device information using its ID.

SquareupApi.GetAccountDisputes

Retrieve a list of disputes for an account.

SquareupApi.RetrieveDisputeDetails

Retrieve details about a specific dispute using its ID.

SquareupApi.AcceptDisputeLoss

Accept the loss on a dispute and update its status to ACCEPTED.

SquareupApi.GetDisputeEvidence

Retrieve evidence for a specific dispute.

SquareupApi.UploadDisputeEvidenceText

Upload text evidence for a dispute challenge.

SquareupApi.RemoveDisputeEvidence

Removes specified evidence from a dispute in Square.

SquareupApi.GetDisputeEvidenceMetadata

Get metadata for specified dispute evidence.

SquareupApi.SubmitEvidenceToBank

Submit evidence for a dispute to the cardholder's bank.

SquareupApi.SearchSquareEvents

Search for Square API events within a specified timeframe.

SquareupApi.DisableSearchableEvents

Disable events to prevent them from being searchable.

SquareupApi.EnableEventsSearch

Enable events to make them searchable.

SquareupApi.ListEventTypes

Retrieve available event types for webhooks and API queries.

SquareupApi.ListGiftCards

Retrieve and filter a list of gift cards.

SquareupApi.CreateGiftCard

Create and register digital or physical gift cards.

SquareupApi.ListGiftCardActivities

Retrieve and filter gift card activities.

SquareupApi.CreateGiftCardActivity

Creates a gift card activity to manage gift card balance or state.

SquareupApi.RetrieveGiftCard

Retrieve a gift card using its account number.

SquareupApi.RetrieveGiftCardFromToken

Retrieve a gift card using a secure token.

SquareupApi.LinkCustomerToGiftCard

Link a customer to a gift card for future use.

SquareupApi.UnlinkCustomerFromGiftCard

Unlink a customer from a gift card.

SquareupApi.RetrieveGiftCardSquareup

Retrieve gift card details using a gift card ID.

SquareupApi.RetrieveInventoryAdjustment

Fetches inventory adjustment details by ID.

SquareupApi.ApplyInventoryAdjustments

Apply batch adjustments to inventory quantities.

SquareupApi.FetchInventoryChanges

Retrieve historical inventory changes and adjustments.

SquareupApi.RetrieveInventoryCounts

Retrieve current inventory counts for specific items and locations.

SquareupApi.GetInventoryPhysicalCount

Retrieve details of a specific inventory physical count.

SquareupApi.RetrieveInventoryTransfer

Retrieve detailed inventory transfer information.

SquareupApi.GetInventoryCount

Retrieve current stock count for a specific catalog item.

SquareupApi.ListInvoices

Retrieve a list of invoices for a specified location.

SquareupApi.CreateDraftInvoice

Create a draft invoice for an order using Squareup.

SquareupApi.SearchInvoices

Search for invoices based on location and optional customer.

SquareupApi.DeleteInvoice

Delete a draft invoice and change order status to CANCELED.

SquareupApi.RetrieveInvoiceById

Retrieve invoice details using an invoice ID.

SquareupApi.UpdateInvoice

Updates invoice details with specified changes.

SquareupApi.RemoveInvoiceAttachment

Removes an attachment from an invoice.

SquareupApi.CancelInvoice

Cancel an invoice to prevent further transactions.

SquareupApi.PublishInvoice

Publish a draft invoice with Square, updating its status.

SquareupApi.ListBreakTypes

Retrieve a paginated list of break types for a business.

SquareupApi.CreateBreakType

Create a new BreakType template for a location.

SquareupApi.DeleteBreakType

Deletes an existing BreakType.

SquareupApi.GetBreakTypeById

Retrieve details of a specific BreakType by ID.

SquareupApi.UpdateBreakType

Update an existing BreakType configuration.

SquareupApi.CreateScheduledShift

Create a scheduled shift with draft shift details.

SquareupApi.BulkPublishScheduledShifts

Publish multiple scheduled shifts in bulk.

SquareupApi.ListScheduledShifts

Retrieve a list of scheduled shifts with filtering options.

SquareupApi.RetrieveScheduledShift

Retrieve details of a scheduled shift by ID.

SquareupApi.UpdateScheduledShift

Updates draft shift details for a scheduled shift.

SquareupApi.PublishScheduledShift

Publish a scheduled shift to make it official.

SquareupApi.ListTeamMemberWages

Retrieve paginated list of team member wages for a business.

SquareupApi.GetTeamMemberWage

Retrieve wage details for a specific team member.

SquareupApi.CreateTeamMemberTimecard

Create a timecard for a team member's workday.

SquareupApi.SearchTimecards

Retrieve filtered and sorted timecard records for a business.

SquareupApi.DeleteTimecard

Delete a specific timecard entry.

SquareupApi.GetTimecardById

Fetch details of a specific timecard by ID.

SquareupApi.UpdateTimecard

Update an existing timecard with new details.

SquareupApi.ListWorkweekConfigs

Retrieve workweek configurations for a business.

SquareupApi.UpdateWorkweekConfiguration

Update workweek configuration settings.

SquareupApi.ListAllLocations

Fetch details of all seller's locations, including inactive ones.

SquareupApi.CreateNewLocation

Create a new location for sales and configuration.

SquareupApi.ListLocationCustomAttributeDefinitions

Get location-related custom attribute definitions for a Square account.

SquareupApi.CreateLocationCustomAttribute

Create a custom attribute for a Square location.

SquareupApi.DeleteLocationCustomAttribute

Delete a custom attribute definition from a location.

SquareupApi.RetrieveLocationCustomAttributeDefinition

Retrieve a location's custom attribute definition.

SquareupApi.UpdateLocationCustomAttribute

Updates a custom attribute definition for a location.

SquareupApi.BulkDeleteLocationCustomAttributes

Delete custom attributes for multiple locations at once.

SquareupApi.BulkUpsertLocationCustomAttributes

Bulk create or update custom attributes for multiple locations.

SquareupApi.RetrieveLocationDetails

Retrieve details of a specific business location.

SquareupApi.UpdateLocationSquareup

Updates a business location on Square.

SquareupApi.ListLocationCustomAttributes

Retrieve custom attributes for a specific location.

SquareupApi.RemoveLocationCustomAttribute

Delete a custom attribute from a location.

SquareupApi.GetLocationCustomAttribute

Retrieve a custom attribute for a specific location.

SquareupApi.UpsertLocationCustomAttribute

Create or update a custom attribute for a location.

SquareupApi.CreateLoyaltyAccount

Create a loyalty account for a buyer.

SquareupApi.SearchLoyaltyAccounts

Search for loyalty accounts by phone number or customer ID.

SquareupApi.RetrieveLoyaltyAccount

Retrieve details of a specific loyalty account.

SquareupApi.AccumulateLoyaltyPoints

Add points to a loyalty account for a purchase.

SquareupApi.AdjustLoyaltyPoints

Manually adjust loyalty points for a buyer's account.

SquareupApi.SearchLoyaltyEvents

Retrieve and search for Square loyalty events.

SquareupApi.GetLoyaltyProgram

Retrieve the loyalty program details for a seller.

SquareupApi.CalculateLoyaltyPoints

Calculate loyalty points a buyer can earn from a purchase.

SquareupApi.ListLoyaltyPromotions

Retrieve promotions from a specific loyalty program.

SquareupApi.CreateLoyaltyPromotion

Create a new loyalty promotion for a program.

SquareupApi.RetrieveLoyaltyPromotion

Retrieve details of a specific loyalty promotion.

SquareupApi.CancelLoyaltyPromotion

Cancels an active or scheduled loyalty promotion early.

SquareupApi.CreateLoyaltyReward

Create a loyalty reward by locking points for a customer.

SquareupApi.SearchLoyaltyRewards

Search for loyalty rewards with optional filters.

SquareupApi.DeleteLoyaltyReward

Deletes a loyalty reward and restores points to the account.

SquareupApi.GetLoyaltyReward

Retrieve details of a specific loyalty reward.

SquareupApi.RedeemLoyaltyReward

Redeem a loyalty reward for a customer purchase.

SquareupApi.GetMerchantDetails

Retrieve details about a specific merchant.

SquareupApi.ListMerchantCustomAttributeDefinitions

Retrieve merchant custom attribute definitions.

SquareupApi.CreateMerchantCustomAttribute

Create a custom attribute for a Square merchant account.

SquareupApi.DeleteMerchantCustomAttribute

Delete a custom attribute definition for a Square merchant.

SquareupApi.GetMerchantCustomAttributeDefinition

Retrieves custom attribute definition for a Square seller account.

SquareupApi.UpdateMerchantCustomAttributeDefinition

Updates a merchant's custom attribute definition.

SquareupApi.BulkDeleteMerchantCustomAttributes

Bulk delete custom attributes for a merchant.

SquareupApi.UpsertMerchantCustomAttributesBulk

Bulk creates or updates custom attributes for a merchant.

SquareupApi.RetrieveMerchantInfo

Retrieve merchant details using their ID.

SquareupApi.ListMerchantCustomAttributes

Retrieve custom attributes for a specified merchant.

SquareupApi.RemoveMerchantAttribute

Delete a custom attribute from a merchant.

SquareupApi.RetrieveMerchantCustomAttribute

Retrieve a custom attribute associated with a merchant.

SquareupApi.UpsertMerchantCustomAttribute

Create or update a custom attribute for a merchant.

SquareupApi.RetrieveLocationSettings

Retrieve settings for a Square-hosted checkout page location.

SquareupApi.UpdateCheckoutLocationSettings

Update location settings for a Square-hosted checkout page.

SquareupApi.RetrieveSquareMerchantSettings

Retrieve Square merchant settings for checkout pages.

SquareupApi.UpdateMerchantSettings

Updates Square-hosted checkout page settings for a merchant.

SquareupApi.ListPaymentLinks

Lists all online payment links for Squareup.

SquareupApi.CreatePaymentLink

Create a Square-hosted checkout page for payments.

SquareupApi.DeletePaymentLink

Deletes a specified payment link.

SquareupApi.RetrievePaymentLink

Retrieve a payment link using its ID.

SquareupApi.UpdatePaymentLink

Update details of an existing payment link.

SquareupApi.CreateOrderForPurchase

Creates a new order for purchase with product details.

SquareupApi.RetrieveMultipleOrders

Retrieve multiple orders using their IDs.

SquareupApi.PreviewOrderPricing

Preview order pricing without creating an order.

SquareupApi.CloneOrderDraft

Clone an existing order as a draft.

SquareupApi.ListOrderCustomAttributeDefinitions

Retrieve order-related custom attribute definitions for a Square seller.

SquareupApi.CreateOrderCustomAttribute

Define a custom attribute for Square orders.

SquareupApi.DeleteOrderCustomAttributeDefinition

Delete a custom attribute definition from an order.

SquareupApi.RetrieveOrderCustomAttributeDefinition

Retrieve a custom attribute definition for an order.

SquareupApi.UpdateOrderCustomAttributeDefinition

Modify order-related custom attribute definitions.

SquareupApi.BulkDeleteOrderCustomAttributes

Perform bulk deletion of custom attributes from orders.

SquareupApi.BulkUpsertOrderCustomAttributes

Perform bulk create or update of order custom attributes.

SquareupApi.SearchSquareOrders

Search and retrieve orders from Square locations.

SquareupApi.RetrieveOrderById

Retrieve an order's details using its ID.

SquareupApi.UpdateOrderSquare

Update fields of an open Square order.

SquareupApi.ListOrderCustomAttributes

Retrieve custom attributes associated with an order.

SquareupApi.DeleteOrderCustomAttribute

Delete a custom attribute from an order profile.

SquareupApi.RetrieveOrderCustomAttribute

Retrieve a custom attribute for a specified order.

SquareupApi.UpdateOrderCustomAttribute

Create or update a custom attribute for an order.

SquareupApi.PayOrder

Settle an order using approved payments.

SquareupApi.RetrievePaymentsList

Retrieve a list of payments from your account.

SquareupApi.CreatePayment

Create a payment using credit/debit card or other sources.

SquareupApi.CancelPaymentByIdempotency

Cancel a payment by idempotency key when status is unknown.

SquareupApi.GetPaymentDetails

Retrieve detailed information about a specific payment.

SquareupApi.UpdatePaymentStatus

Update a payment's approved status and details.

SquareupApi.CancelPayment

Cancel or void an approved payment.

SquareupApi.CompletePayment

Complete an approved payment using Squareup.

SquareupApi.ListPayouts

Retrieve a list of payouts for the default location.

SquareupApi.GetPayoutDetails

Retrieve details of a specific payout using payout ID.

SquareupApi.ListPayoutEntries

Retrieve all payout entries for a specific payout.

SquareupApi.ListPaymentRefunds

Retrieve a list of payment refunds for the account.

SquareupApi.RefundPayment

Refund a payment partially or fully using Square.

SquareupApi.RetrieveRefundDetails

Retrieve details of a specific refund using the refund ID.

SquareupApi.ListSquareOnlineSites

List all Square Online sites for a seller.

SquareupApi.DeleteSquareSnippet

Delete a snippet from a Square Online site.

SquareupApi.RetrieveOnlineSiteSnippet

Retrieve a specific snippet from a Square Online site.

SquareupApi.AddOrUpdateSquareOnlineSnippet

Add or update a snippet on a Square Online site.

SquareupApi.CreateCustomerSubscription

Enroll a customer in a subscription plan.

SquareupApi.BulkSwapSubscriptionPlan

Schedule a plan variation swap for multiple subscriptions.

SquareupApi.SearchSubscriptions

Search for subscriptions by location and customer IDs.

SquareupApi.RetrieveSubscriptionDetails

Retrieve details of a specific subscription using its ID.

SquareupApi.UpdateSubscription

Update subscription details with new or cleared values.

SquareupApi.DeleteSubscriptionAction

Delete a scheduled action for a subscription.

SquareupApi.ChangeBillingAnchorDate

Change the billing anchor date for a subscription.

SquareupApi.CancelSubscription

Cancel an active subscription at the end of the billing period.

SquareupApi.ListSubscriptionEvents

Retrieve all events for a specific subscription.

SquareupApi.PauseSubscription

Schedule a pause for an active subscription.

SquareupApi.ResumeSubscription

Resume a paused or deactivated subscription.

SquareupApi.SwapSubscriptionPlan

Swap a subscription plan variation for an existing subscription.

SquareupApi.CreateTeamMember

Create a new team member with given and family names.

SquareupApi.BulkCreateTeamMembers

Create multiple team members in bulk.

SquareupApi.BulkUpdateTeamMembers

Update multiple team members in bulk.

SquareupApi.ListJobs

Retrieve jobs from a seller's account, sorted by title.

SquareupApi.CreateJobInSellerAccount

Create a job for a seller account.

SquareupApi.RetrieveJobDetails

Retrieve details of a specified job.

SquareupApi.UpdateJobDetails

Update job title or tip eligibility in the system.

SquareupApi.SearchTeamMembers

Retrieve a filtered list of team members for a business.

SquareupApi.GetTeamMemberDetails

Retrieve details for a specific team member by ID.

SquareupApi.UpdateTeamMember

Updates a single TeamMember object.

SquareupApi.RetrieveTeamMemberWageSetting

Retrieve wage settings for a specified team member.

SquareupApi.UpdateWageSetting

Create or update a team member's wage setting.

SquareupApi.CreateTerminalAction

Create and send a terminal action request to a device.

SquareupApi.SearchTerminalActions

Retrieve a filtered list of terminal action requests.

SquareupApi.RetrieveTerminalAction

Retrieve a Terminal action request by action ID.

SquareupApi.CancelTerminalAction

Cancel a terminal action request if possible.

SquareupApi.DismissTerminalAction

Dismiss a Terminal action request if permitted.

SquareupApi.CreateTerminalCheckout

Create a Terminal checkout request for payment.

SquareupApi.SearchTerminalCheckouts

Retrieve filtered Terminal checkout requests for the merchant.

SquareupApi.RetrieveTerminalCheckout

Retrieve a Terminal checkout request by checkout ID.

SquareupApi.CancelTerminalCheckout

Cancel a terminal checkout request if possible.

SquareupApi.DismissTerminalCheckout

Dismiss a Terminal checkout request.

SquareupApi.CreateTerminalRefund

Creates a refund request for Interac payments on Square Terminal.

SquareupApi.SearchTerminalRefunds

Retrieve a filtered list of Interac Terminal refund requests.

SquareupApi.GetTerminalRefund

Retrieve details of an Interac Terminal refund by ID.

SquareupApi.CancelTerminalRefund

Cancel a terminal refund request by its ID.

SquareupApi.DismissTerminalRefund

Dismiss a Terminal refund request.

SquareupApi.CreateTransferOrder

Create a draft transfer order between locations.

SquareupApi.SearchTransferOrders

Search for transfer orders using specific filters.

SquareupApi.DeleteDraftTransferOrder

Delete a draft transfer order and trigger webhook event.

SquareupApi.RetrieveTransferOrderDetails

Retrieve detailed information of a specific transfer order.

SquareupApi.UpdateTransferOrder

Update specific fields of a transfer order.

SquareupApi.CancelTransferOrder

Cancel a transfer order in progress for inventory locations.

SquareupApi.RecordTransferOrderReceipt

Record received items for a transfer order.

SquareupApi.StartTransferOrder

Start a transfer order to mark it as in-transit.

SquareupApi.BulkCreateVendors

Create multiple vendor profiles for suppliers.

SquareupApi.RetrieveVendors

Retrieve detailed information about specific vendors.

SquareupApi.BulkUpdateVendors

Update multiple vendor records simultaneously.

SquareupApi.CreateVendor

Create a vendor for a supplier to a seller.

SquareupApi.SearchVendors

Search for vendors using filters and sorters.

SquareupApi.RetrieveVendorDetails

Retrieve detailed information about a vendor by ID.

SquareupApi.UpdateVendorInfo

Update an existing vendor's information.

SquareupApi.ListWebhookEventTypes

Retrieve all webhook event types available for subscription.

SquareupApi.ListWebhookSubscriptions

Lists all webhook subscriptions owned by the application.

SquareupApi.CreateWebhookSubscription

Creates a webhook subscription.

SquareupApi.DeleteWebhookSubscription

Deletes a specified webhook subscription.

SquareupApi.RetrieveWebhookSubscription

Retrieve details of a specific webhook subscription.

SquareupApi.UpdateWebhookSubscription

Update a webhook subscription to modify its settings.

SquareupApi.UpdateWebhookSignatureKey

Update a webhook subscription's signature key.

SquareupApi.TestWebhookSubscription

Send a test event to a webhook subscription URL.

If you need to perform an action that’s not listed here, you can [get in touch with us](mailto:contact@arcade.dev) to request a new tool, or [create your own tools](/guides/create-tools/tool-basics/build-mcp-server.md).

## SquareupApi.RevokeOauthAccessToken



Revoke all OAuth access tokens for an account.

**Parameters**

-   **application\_client\_id** (`string`, optional) The Square-issued ID for your application, found on the OAuth page in the Developer Dashboard.
-   **merchant\_access\_token** (`string`, optional) The access token of the merchant whose token you want to revoke. Cannot be used with `merchant_id`.
-   **merchant\_id\_to\_revoke** (`string`, optional) The merchant ID whose token you want to revoke. Do not use if ‘access\_token’ is provided.
-   **terminate\_single\_access\_token** (`boolean`, optional) If true, terminate only the specified access token without revoking the entire authorization. Defaults to false.

## SquareupApi.ObtainOauthToken



Obtain OAuth access and refresh tokens.

**Parameters**

-   **application\_id** (`string`, required) The Square-issued ID of your application, available as the Application ID in the Developer Console. Required for code and PKCE flows.
-   **oauth\_grant\_type** (`string`, required) Specifies the method for obtaining an OAuth access token. Choose from ‘authorization\_code’, ‘refresh\_token’, or ‘migration\_token’.
-   **application\_client\_secret** (`string`, optional) The application’s secret key from the Developer Console, required for code flow. Distinct from a personal access token.
-   **application\_redirect\_url** (`string`, optional) The registered redirect URL for your application. Required for code flow and PKCE flow if `grant_type` is `authorization_code`.
-   **authorization\_code** (`string`, optional) The authorization code for exchanging an OAuth access token, required for code flow and PKCE flow if `grant_type` is `authorization_code`.
-   **expire\_token\_in\_24\_hours** (`boolean`, optional) Set to true to make the access token expire in 24 hours. Optional for any grant type.
-   **legacy\_migration\_token** (`string`, optional) A valid legacy access token for generating a new OAuth access token, required if `grant_type` is `migration_token`.
-   **pkce\_code\_verifier** (`string`, optional) The secret your application generated for the authorization request, required for PKCE flow when `grant_type` is `authorization_code`.
-   **requested\_scopes** (`array[string]`, optional) List of permissions for the access token, like \[“MERCHANT\_PROFILE\_READ”, “PAYMENTS\_READ”\]. Optional for certain flows.
-   **valid\_refresh\_token** (`string`, optional) A valid refresh token used to generate a new OAuth access token, returned in a previous ObtainToken response. Required for the code and PKCE flow if grant\_type is refresh\_token.

## SquareupApi.RetrieveTokenStatus



Retrieve the status of an OAuth or personal access token.

**Parameters**

This tool does not take any parameters.

## SquareupApi.ActivateDomainForApplePay



Activates a domain for use with Apple Pay and Square.

**Parameters**

-   **apple\_pay\_domain\_name** (`string`, required) Enter the domain name, as per RFC-1034, to register it with Apple Pay.

## SquareupApi.ListBankAccounts



Fetches bank accounts linked to a Square account.

**Parameters**

-   **location\_id\_filter** (`string`, optional) Specify this optional filter to retrieve bank accounts linked to a specific location.
-   **max\_bank\_accounts** (`integer`, optional) Specify the maximum number of bank accounts to return. The limit can be up to 1000, which is also the default.
-   **pagination\_cursor** (`string`, optional) The pagination cursor from a previous `ListBankAccounts` call to retrieve the next set of results.

## SquareupApi.GetBankAccountDetailsByV1Id



Fetches bank account details using a V1 ID.

**Parameters**

-   **v1\_bank\_account\_id** (`string`, required) The V1 ID of the bank account to retrieve details for. This ID is used to fetch specific account information from the Squareup service.

## SquareupApi.GetBankAccountDetails



Retrieve details of a bank account linked to a Square account.

**Parameters**

-   **bank\_account\_id** (`string`, required) Square-issued ID of the desired bank account to retrieve its details.

## SquareupApi.RetrieveBookings



Retrieve a collection of bookings.

**Parameters**

-   **customer\_id\_for\_bookings** (`string`, optional) The ID of the customer for whom to retrieve bookings. If not provided, retrieves bookings for all customers.
-   **earliest\_start\_time** (`string`, optional) The RFC 3339 timestamp specifying the earliest start time for bookings. Defaults to current time if not set.
-   **latest\_start\_time** (`string`, optional) The latest possible start time of bookings in RFC 3339 format. Defaults to 31 days after `start_at_min` if not set.
-   **max\_results\_per\_page** (`integer`, optional) The maximum number of results per page to return in a paged response.
-   **pagination\_cursor** (`string`, optional) The pagination cursor for the next page of results. Leave empty for the first page.
-   **specific\_location\_id** (`string`, optional) Retrieve bookings for a specific location by its ID. If not set, retrieves bookings for all locations.
-   **team\_member\_id** (`string`, optional) The ID of the team member to retrieve bookings for. Leave unset to retrieve bookings for all members.

## SquareupApi.CreateBooking



Create a new booking for a service.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## SquareupApi.SearchBookingAvailability



Find available booking slots for appointments.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## SquareupApi.BulkRetrieveBookings



Retrieve multiple bookings using booking IDs.

**Parameters**

-   **booking\_ids** (`array[string]`, required) A non-empty list of booking IDs to retrieve the corresponding bookings.

## SquareupApi.RetrieveBookingProfile



Retrieve a seller’s booking profile information.

**Parameters**

This tool does not take any parameters.

## SquareupApi.ListBookingCustomAttributeDefinitions



Retrieve all custom attribute definitions for bookings.

**Parameters**

-   **pagination\_cursor** (`string`, optional) Cursor from the previous response to get the next page of results.
-   **result\_limit** (`integer`, optional) Maximum results to return per page. Must be between 1 and 100, default is 20.

## SquareupApi.CreateBookingCustomAttribute



Creates a custom attribute definition for bookings.

**Parameters**

-   **attribute\_schema\_json** (`json`, optional) The JSON schema defining data type for booking custom attributes. Required for attribute creation. For more, visit Squareup Custom Attributes Overview.
-   **current\_attribute\_definition\_version** (`integer`, optional) The current version of the custom attribute definition. Must be set to the latest version for updates and strong consistency.
-   **custom\_attribute\_created\_timestamp** (`string`, optional) The creation timestamp of the custom attribute definition in RFC 3339 format.
-   **custom\_attribute\_definition\_name** (`string`, optional) The name for the custom attribute definition. Must be unique within the seller and application pair and required if visibility is ‘VISIBILITY\_READ\_ONLY’ or ‘VISIBILITY\_READ\_WRITE\_VALUES’.
-   **custom\_attribute\_description** (`string`, optional) A description for the custom attribute, required if visibility is read-only or read-write. Displayed as a tooltip in UIs.
-   **custom\_attribute\_key** (`string`, optional) Identifier for the custom attribute definition. Use a simple or qualified key. Must be unique and cannot be changed later.
-   **custom\_attribute\_visibility** (`string`, optional) Defines the permission level required to view the custom attribute. Options: VISIBILITY\_HIDDEN, VISIBILITY\_READ\_ONLY, VISIBILITY\_READ\_WRITE\_VALUES.
-   **idempotency\_key** (`string`, optional) A unique string identifier for the request to ensure idempotency. This prevents duplicate operations in case of retries.
-   **updated\_at\_timestamp** (`string`, optional) The timestamp in RFC 3339 format indicating when the custom attribute definition was last updated or created.

## SquareupApi.DeleteBookingCustomAttributeDefinition



Deletes a booking’s custom attribute definition.

**Parameters**

-   **custom\_attribute\_key** (`string`, required) The key of the custom attribute definition to delete for bookings.

## SquareupApi.RetrieveBookingCustomAttributeDefinition



Retrieve a booking’s custom attribute definition.

**Parameters**

-   **custom\_attribute\_key** (`string`, required) The key for the custom attribute definition to retrieve. Use a qualified key if not the definition owner.
-   **current\_version\_of\_custom\_attribute\_definition** (`integer`, optional) The current version of the custom attribute definition for consistent reads. Provides the specified version or higher if available. Returns `BAD_REQUEST` if the version is higher than current.

## SquareupApi.UpdateBookingCustomAttribute



Update a booking’s custom attribute definition.

**Parameters**

-   **custom\_attribute\_key** (`string`, required) The key of the custom attribute definition to update. This key can be a simple key or a qualified key consisting of the application ID and the simple key, formatted as ‘application\_id:simple\_key’.
-   **created\_at\_timestamp** (`string`, optional) The timestamp indicating when the custom attribute definition was created, in RFC 3339 format. This is used to track the original creation time of the attribute definition.
-   **current\_version\_of\_custom\_attribute\_definition** (`integer`, optional) Specify the current version of the custom attribute definition to enable optimistic concurrency. Must match the latest version; stale writes are rejected.
-   **custom\_attribute\_definition\_key** (`string`, optional) The key of the custom attribute definition, either as a simple key or in the format ‘application\_id:simple key’. Unique per application, seller, and resource type.
-   **custom\_attribute\_definition\_name** (`string`, optional) The unique name for the booking’s custom attribute definition, required if visibility is set to read-only or read-write.
-   **custom\_attribute\_description** (`string`, optional) A seller-oriented description of the custom attribute, required if visibility is read-only or read-write.
-   **custom\_attribute\_schema** (`json`, optional) A JSON object defining the schema for the custom attribute, determining its data type. Required for creating a definition.
-   **idempotency\_token** (`string`, optional) A unique string identifier for ensuring the request is idempotent. Refer to Square’s Idempotency guidelines for details.
-   **updated\_timestamp** (`string`, optional) The RFC 3339 formatted timestamp of the last update for the custom attribute definition.
-   **visibility\_level** (`string`, optional) Specifies permission level for viewing the custom attribute definition. Options: VISIBILITY\_HIDDEN, VISIBILITY\_READ\_ONLY, VISIBILITY\_READ\_WRITE\_VALUES.

## SquareupApi.BulkDeleteBookingCustomAttributes



Bulk delete custom attributes for bookings.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## SquareupApi.BulkUpsertBookingCustomAttributes



Bulk upserts custom attributes for bookings.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## SquareupApi.ListSellerBookingProfiles



Retrieve booking profiles for seller locations.

**Parameters**

-   **max\_results\_per\_page** (`integer`, optional) The maximum number of booking profiles to return in a single response page.
-   **pagination\_cursor** (`string`, optional) Use this to fetch the next page of results. Leave blank for the first page.

## SquareupApi.RetrieveSellerLocationBookingProfile



Retrieve a seller’s location booking profile.

**Parameters**

-   **location\_id** (`string`, required) The ID of the location for which to retrieve the booking profile.

## SquareupApi.ListBookingProfiles



Retrieve booking profiles for team members.

**Parameters**

-   **filter\_by\_location\_id** (`string`, optional) Filter to return only team members enabled at the specified location ID.
-   **include\_only\_bookable\_members** (`boolean`, optional) Set to true to include only team members who are bookable. False includes all members.
-   **maximum\_results\_limit** (`integer`, optional) Specify the maximum number of results to return in a paged response.
-   **pagination\_cursor** (`string`, optional) The cursor for pagination to retrieve the next page of results. Omit for the first page of results.

## SquareupApi.RetrieveTeamBookingProfiles



Retrieve booking profiles for one or more team members.

**Parameters**

-   **team\_member\_ids** (`array[string]`, required) A non-empty list of team member IDs to retrieve booking profiles for.

## SquareupApi.GetTeamMemberBookingProfile



Retrieve a team member’s booking profile from Square.

**Parameters**

-   **team\_member\_unique\_id** (`string`, required) The unique identifier for the team member whose booking profile is being retrieved.

## SquareupApi.RetrieveBooking



Retrieve detailed information about a booking.

**Parameters**

-   **booking\_id** (`string`, required) The ID of the Booking object to retrieve details for.

## SquareupApi.UpdateBooking



Update an existing booking with new details.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **booking\_identifier** (`string`, optional) The unique identifier of the booking to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## SquareupApi.CancelBooking



Cancel an existing booking.

**Parameters**

-   **booking\_id** (`string`, required) The unique ID of the booking to be canceled. This ID is required to identify which booking to cancel.
-   **booking\_revision\_number** (`integer`, optional) The current revision number of the booking for optimistic concurrency control.
-   **idempotency\_key** (`string`, optional) Unique key to ensure the request is idempotent and prevents duplicate operations.

## SquareupApi.ListBookingCustomAttributes



Retrieve a booking’s custom attributes.

**Parameters**

-   **booking\_id** (`string`, required) The unique identifier for the target booking to list custom attributes for. This is required to specify which booking’s attributes to retrieve.
-   **include\_custom\_attribute\_definitions** (`boolean`, optional) Set to true to include custom attribute definitions, providing names, descriptions, data types, and other details. Default is false.
-   **maximum\_results\_limit** (`integer`, optional) The maximum number of results to return in a single response (1-100). Default is 20.
-   **pagination\_cursor** (`string`, optional) The cursor from the previous API response used to retrieve the next page of results.

## SquareupApi.DeleteBookingCustomAttribute



Deletes a custom attribute from a booking.

**Parameters**

-   **booking\_id** (`string`, required) The unique identifier for the booking from which the custom attribute will be deleted.
-   **custom\_attribute\_key** (`string`, required) The key of the custom attribute to delete. Must match the key in the Square seller account. Use a qualified key if not the definition owner.

## SquareupApi.RetrieveBookingCustomAttribute



Retrieve custom attributes of a booking.

**Parameters**

-   **booking\_id** (`string`, required) The unique identifier for the target booking. This ID is required to retrieve the specific custom attribute for the booking.
-   **custom\_attribute\_key** (`string`, required) The key of the custom attribute to retrieve. Must match the `key` of a custom attribute definition in the Square seller account. Use the qualified key if not the definition owner.
-   **custom\_attribute\_version** (`integer`, optional) The desired version for strong consistency reads of the custom attribute. Uses the specified version or a higher one if available.
-   **include\_custom\_attribute\_definition** (`boolean`, optional) Set to true to include the custom attribute definition, providing name, description, and data type details. Default is false.

## SquareupApi.SetBookingCustomAttribute



Upserts a custom attribute for a booking.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **booking\_id** (`string`, optional) The ID of the target booking to update or insert a custom attribute for. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **custom\_attribute\_key** (`string`, optional) The key for the custom attribute to create or update, matching the existing key in the Square seller account. Use the qualified key if not the definition owner. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## SquareupApi.ListUserCards



Retrieve a list of cards owned by the account.

**Parameters**

-   **filter\_by\_customer\_id** (`string`, optional) Limit results to cards associated with a specific customer ID. By default, all cards owned by the merchant are returned.
-   **include\_disabled\_cards** (`boolean`, optional) Include disabled cards in the results. By default, only enabled cards are returned.
-   **limit\_to\_reference\_id** (`string`, optional) Limit results to cards associated with the given reference ID. Use this to filter cards matching a specific reference.
-   **pagination\_cursor** (`string`, optional) A string token to retrieve the next set of card results for pagination.
-   **sort\_order** (`string`, optional) Specifies the sort order of the list by card creation date. Options are ‘ASC’ (ascending) or ‘DESC’ (descending). Defaults to ‘ASC’.

## SquareupApi.AddCardToMerchant



Adds a card on file to an existing merchant.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## SquareupApi.RetrieveCardDetails



Retrieve details for a specific card.

**Parameters**

-   **card\_id** (`string`, required) Unique ID for the desired card to retrieve its details.

## SquareupApi.DisableCreditCard



Disable a credit card to prevent further charges.

**Parameters**

-   **credit\_card\_id** (`string`, required) Unique ID of the credit card to be disabled. This is required to specify the card to be deactivated.

## SquareupApi.ListCashDrawerShifts



Retrieve cash drawer shift details for a location and date range.

**Parameters**

-   **location\_id** (`string`, required) The unique identifier of the location to retrieve cash drawer shifts for.
-   **exclusive\_query\_end\_time** (`string`, optional) The exclusive end time for the query on opened\_at, provided in ISO 8601 format.
-   **pagination\_cursor** (`string`, optional) Opaque cursor used for fetching the next page of results from the API.
-   **results\_per\_page** (`integer`, optional) Number of cash drawer shift events per page. Default is 200, with a maximum of 1000.
-   **sort\_order** (`string`, optional) Specifies the order of cash drawer shifts based on their opened\_at field. Options are ‘ASC’ for ascending and ‘DESC’ for descending. Default is ‘ASC’.
-   **start\_time** (`string`, optional) The inclusive start time for the query in ISO 8601 format.

## SquareupApi.RetrieveCashDrawerShiftSummary



Retrieve summary details for a specific cash drawer shift.

**Parameters**

-   **location\_identifier** (`string`, required) The unique ID of the location to retrieve cash drawer shifts from.
-   **shift\_identifier** (`string`, required) The unique ID of the specific cash drawer shift to retrieve details for.

## SquareupApi.ListCashDrawerShiftEvents



Retrieve events for a specific cash drawer shift.

**Parameters**

-   **location\_id** (`string`, required) The unique identifier for the location to retrieve cash drawer shift events from.
-   **shift\_id** (`string`, required) The ID of the cash drawer shift to retrieve events for.
-   **max\_results\_per\_page** (`integer`, optional) Number of results to return per page (default is 200, maximum is 1000).
-   **pagination\_cursor** (`string`, optional) Opaque cursor for fetching the next page of cash drawer shift event results.

## SquareupApi.DeleteCatalogItems



Deletes catalog items and their children by IDs.

**Parameters**

-   **catalog\_object\_ids\_to\_delete** (`array[string]`, required) The IDs of the catalog objects to be deleted. Deletion is cascading, removing the item and dependent objects.

## SquareupApi.RetrieveCatalogObjects



Retrieve detailed catalog objects by provided IDs.

**Parameters**

-   **catalog\_object\_ids** (`array[string]`, required) An array of IDs representing the CatalogObjects to retrieve. Each ID must be a string.
-   **catalog\_version** (`integer`, optional) The specific version of catalog objects to retrieve, allowing access to historical data. If omitted, the current version is used.
-   **include\_category\_path\_to\_root** (`boolean`, optional) Include the `path_to_root` list for each returned category instance if set to true. Shows the path from parent categories to root.
-   **include\_deleted\_objects** (`boolean`, optional) Set to `true` to include deleted objects (`is_deleted` attribute) in the response.
-   **include\_related\_objects** (`boolean`, optional) If true, include additional related objects in the response. These are objects referenced by ID, included one level deep. Defaults to false.

## SquareupApi.BatchUpsertCatalogObjects



Batch create or update up to 10,000 catalog objects.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## SquareupApi.GetSquareCatalogInfo



Retrieve Square Catalog API information and batch size limits.

**Parameters**

This tool does not take any parameters.

## SquareupApi.ListCatalogItems



Retrieve a list of catalog objects by type from Square catalog.

**Parameters**

-   **catalog\_object\_types** (`string`, optional) A case-insensitive, comma-separated list of object types to retrieve. Valid types include ITEM, ITEM\_VARIATION, CATEGORY, DISCOUNT, TAX, MODIFIER, MODIFIER\_LIST, IMAGE, etc. Defaults to top-level types if unspecified.
-   **catalog\_version\_number** (`integer`, optional) Specify the catalog version number to retrieve historical objects. If omitted, retrieves current version.
-   **pagination\_cursor** (`string`, optional) The cursor for pagination from a previous response. Leave unset for the initial request. Page size is 100.

## SquareupApi.UpsertCatalogObject



Create or update a catalog object in Squareup.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## SquareupApi.DeleteCatalogObject



Delete a catalog object and its children by ID.

**Parameters**

-   **catalog\_object\_id** (`string`, required) The unique ID of the catalog object to delete. Deletion is cascading, removing all dependent objects.

## SquareupApi.GetCatalogItemInfo



Retrieve detailed information for a specific catalog item.

**Parameters**

-   **catalog\_object\_id** (`string`, required) The object ID of the catalog item to retrieve detailed information for.
-   **catalog\_version** (`integer`, optional) Specify a catalog version to retrieve historical object data. If not provided, the current catalog version is used.
-   **include\_category\_path\_to\_root** (`boolean`, optional) Include the category’s path to the root in the response to show its hierarchy. Returns an empty list for top-level categories.
-   **include\_related\_objects** (`boolean`, optional) Set to `true` to include additional related objects, like associated categories, taxes, and images, in the response. Ideal for immediate user display.

## SquareupApi.SearchCatalogObjects



Search for catalog objects using specified query filters.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## SquareupApi.SearchCatalogItems



Find catalog items or variations based on search filters.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## SquareupApi.UpdateItemModifierLists



Update modifier lists for a catalog item.

**Parameters**

-   **catalog\_item\_ids** (`array[string]`, required) A list of catalog item IDs associated with the CatalogModifierList objects to update.
-   **modifier\_list\_ids\_to\_disable** (`array[string]`, optional) The IDs of CatalogModifierList objects to disable for the CatalogItem. At least one of this or modifier\_lists\_to\_enable must be specified.
-   **modifier\_list\_ids\_to\_enable** (`array[string]`, optional) The IDs of the CatalogModifierList objects to enable for the CatalogItem. At least one of `modifier_lists_to_enable` or `modifier_lists_to_disable` must be specified.

## SquareupApi.UpdateItemTaxes



Update tax settings for specified catalog items.

**Parameters**

-   **catalog\_item\_ids** (`array[string]`, required) List of IDs for the CatalogItems associated with the CatalogTax objects being updated. Maximum of 1,000 IDs.
-   **catalog\_tax\_ids\_to\_disable** (`array[string]`, optional) List of CatalogTax object IDs to disable. Specify either this or taxes\_to\_enable.
-   **tax\_ids\_to\_enable** (`array[string]`, optional) List of CatalogTax object IDs to enable. Must specify at least one if ‘tax\_ids\_to\_disable’ is not provided.

## SquareupApi.ListSalesChannels



Retrieve a list of available sales channels.

**Parameters**

-   **channel\_reference\_type** (`string`, optional) Type of reference associated with the sales channel, such as LOCATION or ONLINE\_SITE.
-   **channel\_status** (`string`, optional) Specify the status of the channel. Options are ‘ACTIVE’ or ‘INACTIVE’.
-   **maximum\_results\_limit** (`integer`, optional) Specify the maximum number of sales channels to return. Defaults to 100 if not provided.
-   **next\_page\_cursor** (`string`, optional) Provide the cursor to fetch the next set of results if pagination is needed.
-   **reference\_id** (`string`, optional) ID of the reference associated with the sales channel.

## SquareupApi.RetrieveSalesChannels



Retrieve bulk information about sales channels.

**Parameters**

-   **channel\_identifiers** (`array[string]`, required) A list of IDs representing sales channels to retrieve details for.

## SquareupApi.RetrieveChannelInfo



Retrieve detailed information about a specific channel.

**Parameters**

-   **channel\_id** (`string`, required) The unique identifier for the channel to retrieve information about.

## SquareupApi.ListCustomerProfiles



Retrieve customer profiles from a Square account.

**Parameters**

-   **customer\_sort\_field** (`string`, optional) Specifies the field by which customers should be sorted. Options: ‘DEFAULT’ or ‘CREATED\_AT’. Default is ‘DEFAULT’.
-   **customer\_sort\_order** (`string`, optional) Specify sorting order for customers: ‘ASC’ for ascending or ‘DESC’ for descending. Default is ‘ASC’.
-   **include\_total\_customer\_count** (`boolean`, optional) Set to true to include the total customer count in the response. Default is false.
-   **max\_results\_per\_page** (`integer`, optional) Specify the maximum number of customer profiles to retrieve in a single page. Must be between 1 and 100. Default is 100.
-   **pagination\_cursor** (`string`, optional) A pagination cursor from a previous request to retrieve the next set of results.

## SquareupApi.CreateCustomer



Creates a new customer for a business in Square.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## SquareupApi.BulkCreateCustomers



Create multiple customer profiles in bulk.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## SquareupApi.BulkDeleteCustomers



Deletes multiple customer profiles at once.

**Parameters**

-   **customer\_profile\_ids** (`array[string]`, required) Array of customer profile IDs to be deleted.

## SquareupApi.BulkRetrieveCustomers



Retrieve multiple customer profiles using IDs.

**Parameters**

-   **customer\_ids** (`array[string]`, required) List of customer profile IDs to retrieve.

## SquareupApi.UpdateMultipleCustomerProfiles



Update multiple customer profiles in one request.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## SquareupApi.ListCustomerCustomAttributeDefinitions



Retrieve customer custom attribute definitions for a Square seller.

**Parameters**

-   **max\_results\_per\_page** (`integer`, optional) Maximum number of results to return per page. It ranges from 1 to 100, defaulting to 20.
-   **pagination\_cursor** (`string`, optional) Cursor from the previous response for pagination. Use it to get the next page of results.

## SquareupApi.CreateCustomerAttributeDefinition



Create a custom attribute for customer profiles.

**Parameters**

-   **attribute\_definition\_name** (`string`, optional) The unique name of the custom attribute definition for both API and UI purposes. Required if visibility is set to ‘VISIBILITY\_READ\_ONLY’ or ‘VISIBILITY\_READ\_WRITE\_VALUES’.
-   **created\_at\_timestamp** (`string`, optional) The timestamp indicating when the custom attribute definition was created, in RFC 3339 format.
-   **current\_custom\_attribute\_version** (`integer`, optional) The current version of the custom attribute definition. Incremental value used for optimistic concurrency control. Must be the latest version on writes to avoid rejection of stale updates.
-   **custom\_attribute\_key** (`string`, optional) Unique identifier for the custom attribute definition, either a simple or qualified key. Up to 60 characters, including alphanumeric, periods (.), underscores (\_), and hyphens (-).
-   **custom\_attribute\_schema** (`json`, optional) The JSON schema defining the data type for the custom attribute. This is required when creating a definition.
-   **custom\_attribute\_visibility** (`string`, optional) Specify the level of permission required to view the custom attribute definition. Options include ‘VISIBILITY\_HIDDEN’, ‘VISIBILITY\_READ\_ONLY’, and ‘VISIBILITY\_READ\_WRITE\_VALUES’.
-   **customer\_attribute\_description** (`string`, optional) A description for the custom attribute definition, required if visibility is set to ‘VISIBILITY\_READ\_ONLY’ or ‘VISIBILITY\_READ\_WRITE\_VALUES’. This serves as a seller-oriented tooltip.
-   **idempotency\_key** (`string`, optional) A unique identifier for the request to prevent duplicate executions in case of retries. This is used for ensuring idempotency.
-   **timestamp\_updated\_at** (`string`, optional) Timestamp indicating when the custom attribute definition was created or updated, in RFC 3339 format.

## SquareupApi.DeleteCustomerAttributeDefinition



Delete a customer custom attribute definition from Square.

**Parameters**

-   **custom\_attribute\_key** (`string`, required) The key of the custom attribute definition to delete from a Square seller account.

## SquareupApi.GetCustomerCustomAttributeDefinition



Retrieve a customer’s custom attribute definition from Square.

**Parameters**

-   **custom\_attribute\_key** (`string`, required) The key of the custom attribute definition to retrieve. Use the qualified key if not the owner.
-   **custom\_attribute\_version** (`integer`, optional) The current version of the custom attribute definition to ensure consistent reads. Use to check for the most up-to-date data.

## SquareupApi.UpdateCustomerAttributeDefinition



Update customer custom attribute definitions for a Square seller.

**Parameters**

-   **custom\_attribute\_key** (`string`, required) The key of the custom attribute definition to update. This should be either a simple or qualified key.
-   **attribute\_description** (`string`, optional) Provide a seller-oriented description for the custom attribute. This may include constraints and will be displayed as a tooltip. Required if visibility is set to `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`.
-   **attribute\_visibility** (`string`, optional) Defines who can read and write the custom attribute values and definition. Options are ‘VISIBILITY\_HIDDEN’, ‘VISIBILITY\_READ\_ONLY’, or ‘VISIBILITY\_READ\_WRITE\_VALUES’.
-   **creation\_timestamp** (`string`, optional) The timestamp indicating when the custom attribute definition was created, in RFC 3339 format.
-   **current\_version** (`integer`, optional) The current version of the custom attribute definition, required for optimistic concurrency control. Must be set to the latest version to ensure updates are not stale. This helps enforce strong consistency during updates.
-   **custom\_attribute\_definition\_key** (`string`, optional) The identifier for the custom attribute definition. It can be a simple key or a qualified key. The format is either ‘key’ or ‘application\_id:key’. It must be unique and cannot be changed after creation.
-   **custom\_attribute\_definition\_name** (`string`, optional) The name of the custom attribute definition for API and seller UI, unique within the seller and application pair. Required if visibility is `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`.
-   **custom\_attribute\_definition\_schema** (`json`, optional) The JSON schema defining the data type of custom attributes. This is mandatory when creating a definition.
-   **unique\_request\_identifier** (`string`, optional) A unique identifier for this request to ensure idempotency. Prevents duplicate operations by using the same identifier for retries.
-   **updated\_timestamp** (`string`, optional) The RFC 3339 format timestamp indicating when the custom attribute definition was last updated.

## SquareupApi.BulkUpsertCustomerAttributes



Bulk create or update custom attributes for customer profiles.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## SquareupApi.ListCustomerGroups



Retrieve a list of customer groups for a business.

**Parameters**

-   **max\_results\_per\_page** (`integer`, optional) The maximum number of customer groups to return per page. Must be between 1 and 50.
-   **pagination\_cursor** (`string`, optional) A pagination cursor to retrieve the next set of results from a previous query. Useful for handling paginated responses.

## SquareupApi.CreateCustomerGroup



Creates a new customer group for a business.

**Parameters**

-   **customer\_group\_name** (`string`, required) The name of the customer group to be created. It is required for organizing customers into the group.
-   **customer\_group\_id** (`string`, optional) A unique Square-generated ID for the customer group. This is automatically generated by Square and is used to identify the customer group.
-   **group\_created\_timestamp** (`string`, optional) Specify the timestamp for when the customer group was created, in RFC 3339 format.
-   **group\_last\_updated\_time** (`string`, optional) The timestamp when the customer group was last updated, in RFC 3339 format.
-   **idempotency\_key** (`string`, optional) A unique string to ensure the request is processed only once. See [Idempotency](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency)
     .

## SquareupApi.DeleteCustomerGroup



Deletes a customer group by its ID.

**Parameters**

-   **customer\_group\_id** (`string`, required) The ID of the customer group you want to delete.

## SquareupApi.GetCustomerGroup



Retrieve details of a specific customer group by group ID.

**Parameters**

-   **customer\_group\_id** (`string`, required) The unique ID of the customer group to retrieve details for.

## SquareupApi.UpdateCustomerGroup



Updates a customer group by its ID.

**Parameters**

-   **customer\_group\_id** (`string`, required) The ID of the customer group to update.
-   **customer\_group\_name** (`string`, required) The new name for the customer group to be updated.
-   **customer\_group\_unique\_id** (`string`, optional) A unique Square-generated ID for the customer group to be updated.
-   **group\_creation\_timestamp** (`string`, optional) The timestamp of when the customer group was created in RFC 3339 format. Required to track creation time.
-   **group\_last\_updated\_timestamp** (`string`, optional) The timestamp when the customer group was last updated, in RFC 3339 format.

## SquareupApi.SearchSquareCustomers



Search customer profiles in a Square account.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## SquareupApi.ListCustomerSegments



Retrieve customer segments for a business.

**Parameters**

-   **max\_results\_per\_page** (`integer`, optional) The maximum number of results to return in a single page. Value must be between 1 and 50. Default is 50.
-   **pagination\_cursor** (`string`, optional) A pagination cursor for retrieving the next set of customer segment results. Use a cursor returned from a previous call to continue listing.

## SquareupApi.GetCustomerSegment



Retrieve specific customer segment information.

**Parameters**

-   **customer\_segment\_id** (`string`, required) The Square-issued ID of the customer segment to retrieve.

## SquareupApi.DeleteCustomerProfile



Delete a customer profile from a business system.

**Parameters**

-   **customer\_id** (`string`, required) The ID of the customer to delete from the business system. Required for identifying the customer profile to remove.
-   **customer\_profile\_version** (`integer`, optional) The current version of the customer profile for optimistic concurrency control.

## SquareupApi.RetrieveCustomerDetails



Retrieve detailed information for a specific customer.

**Parameters**

-   **customer\_id** (`string`, required) The unique identifier of the customer to retrieve details for.

## SquareupApi.UpdateCustomerProfile



Update a customer’s profile with new or changed details.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **customer\_id** (`string`, optional) The unique identifier of the customer to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## SquareupApi.ListCustomerCustomAttributes



Retrieve custom attributes of a customer profile.

**Parameters**

-   **customer\_profile\_id** (`string`, required) The unique identifier of the customer profile whose custom attributes are to be retrieved.
-   **include\_attribute\_definitions** (`boolean`, optional) Set to true to include custom attribute definitions in each custom attribute’s definition field. Default is false.
-   **maximum\_results\_per\_page** (`integer`, optional) The maximum number of results to return in a single response. Valid values are 1 to 100, default is 20.
-   **paging\_cursor** (`string`, optional) Cursor from the previous response to get the next page of results. Used for pagination.

## SquareupApi.DeleteCustomerCustomAttribute



Deletes a custom attribute from a customer profile.

**Parameters**

-   **custom\_attribute\_key** (`string`, required) The key of the custom attribute to delete. Must match the key of a custom attribute definition in the Square seller account. Use the qualified key if not the definition owner.
-   **customer\_profile\_id** (`string`, required) The ID of the target customer profile for which the custom attribute will be deleted.

## SquareupApi.GetCustomerCustomAttribute



Retrieve a custom attribute from a customer profile.

**Parameters**

-   **custom\_attribute\_key** (`string`, required) The key of the custom attribute to retrieve. This must match an existing custom attribute key in the Square seller account. Use a qualified key if not the definition owner.
-   **customer\_profile\_id** (`string`, required) The ID of the customer profile to retrieve the custom attribute from.
-   **attribute\_version** (`integer`, optional) The version of the custom attribute for consistent reads. A higher version will return a BAD\_REQUEST error.
-   **include\_custom\_attribute\_definition** (`boolean`, optional) Set to true to include the custom attribute definition with name, description, data type, and other details. Default is false.

## SquareupApi.UpdateCustomerCustomAttribute



Create or update a custom attribute for a customer profile.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **customer\_identifier** (`string`, optional) The ID of the target customer profile for which the custom attribute will be created or updated. This ID should match the customer profile in the Square system. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **custom\_attribute\_key** (`string`, optional) The key identifying the custom attribute to create or update. Must match a key in the Square seller account’s custom attribute definition. Use a qualified key if the application is not the definition owner. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## SquareupApi.RemoveCustomerGroup



Remove a group membership from a customer.

**Parameters**

-   **customer\_id** (`string`, required) The ID of the customer to remove from the group. Provide the unique identifier associated with the customer.
-   **group\_id** (`string`, required) The unique identifier of the customer group to remove the customer from.

## SquareupApi.AddGroupToCustomer



Adds a customer to a specified group.

**Parameters**

-   **customer\_group\_id** (`string`, required) The unique identifier of the group to which the customer will be added. This is necessary to specify the exact group for categorization purposes.
-   **customer\_id** (`string`, required) The unique identifier of the customer to be added to the specified group.

## SquareupApi.ListMerchantDevices



Retrieve a list of devices for a merchant’s terminal API.

**Parameters**

-   **device\_listing\_order** (`string`, optional) Specifies whether to list devices from oldest to newest (‘ASC’) or newest to oldest (‘DESC’).
-   **filter\_by\_location\_id** (`string`, optional) Return devices only at the specified location ID, if provided.
-   **pagination\_cursor** (`string`, optional) A string used to fetch the next set of device results. Obtained from a prior API call, it facilitates pagination.
-   **results\_page\_limit** (`integer`, optional) The number of results to return in a single page. Use this to control pagination of the device list.

## SquareupApi.ListDeviceCodes



List all device codes for a merchant.

**Parameters**

-   **device\_code\_status** (`string`, optional) Filter DeviceCodes by statuses: ‘UNKNOWN’, ‘UNPAIRED’, ‘PAIRED’, or ‘EXPIRED’. Defaults to ‘PAIRED’ and ‘UNPAIRED’ if empty.
-   **location\_id\_filter** (`string`, optional) Filter to return only DeviceCodes from the specified location. Returns data from all locations if not provided.
-   **pagination\_cursor** (`string`, optional) A pagination cursor from a previous call. Use to get the next set of results.
-   **product\_type\_filter** (`string`, optional) Specify the product type to filter DeviceCodes. Defaults to all if empty. Options include ‘TERMINAL\_API’.

## SquareupApi.CreateSquareTerminalDeviceCode



Generate a DeviceCode for Square Terminal login.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## SquareupApi.RetrieveDeviceCode



Retrieve device code details by ID.

**Parameters**

-   **device\_code\_id** (`string`, required) The unique identifier for the device code to retrieve its details.

## SquareupApi.RetrieveDeviceById



Retrieve specific device information using its ID.

**Parameters**

-   **device\_identifier** (`string`, required) The unique identifier for the device to retrieve information from Square’s system.

## SquareupApi.GetAccountDisputes



Retrieve a list of disputes for an account.

**Parameters**

-   **dispute\_states\_filter** (`string`, optional) Specify dispute states to filter the results. Options: INQUIRY\_EVIDENCE\_REQUIRED, INQUIRY\_PROCESSING, INQUIRY\_CLOSED, EVIDENCE\_REQUIRED, PROCESSING, WON, LOST, ACCEPTED. Defaults to all states if not provided.
-   **location\_id** (`string`, optional) The unique ID of the location to filter disputes for. If omitted, disputes from all locations are returned.
-   **pagination\_cursor** (`string`, optional) A string cursor from a previous call to retrieve the next set of dispute results. See [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination)
     .

## SquareupApi.RetrieveDisputeDetails



Retrieve details about a specific dispute using its ID.

**Parameters**

-   **dispute\_id** (`string`, required) The unique identifier for the dispute you want to retrieve details about.

## SquareupApi.AcceptDisputeLoss



Accept the loss on a dispute and update its status to ACCEPTED.

**Parameters**

-   **dispute\_id** (`string`, required) The unique ID of the dispute to accept and resolve.

## SquareupApi.GetDisputeEvidence



Retrieve evidence for a specific dispute.

**Parameters**

-   **dispute\_id** (`string`, required) Specify the ID of the dispute to retrieve its associated evidence.
-   **pagination\_cursor** (`string`, optional) A cursor for pagination. Provide this to retrieve the next set of results for the original query.

## SquareupApi.UploadDisputeEvidenceText



Upload text evidence for a dispute challenge.

**Parameters**

-   **dispute\_id** (`string`, required) The unique ID of the dispute to upload text evidence for.
-   **evidence\_text\_string** (`string`, required) Provide the textual evidence string to be used in the dispute challenge.
-   **unique\_request\_key** (`string`, required) A unique key for identifying and ensuring the idempotency of the request. For additional details, see Square’s idempotency documentation.
-   **dispute\_evidence\_type** (`string`, optional) Specify the type of evidence for the dispute. Options include: GENERIC\_EVIDENCE, ONLINE\_OR\_APP\_ACCESS\_LOG, AUTHORIZATION\_DOCUMENTATION, etc.

## SquareupApi.RemoveDisputeEvidence



Removes specified evidence from a dispute in Square.

**Parameters**

-   **dispute\_id** (`string`, required) The ID of the dispute to remove evidence from. Provide a valid string ID to specify the dispute.
-   **evidence\_id** (`string`, required) The ID of the evidence to be removed from the dispute.

## SquareupApi.GetDisputeEvidenceMetadata



Get metadata for specified dispute evidence.

**Parameters**

-   **dispute\_id** (`string`, required) The unique ID of the dispute to retrieve evidence metadata from.
-   **evidence\_id** (`string`, required) The unique identifier for the evidence to retrieve metadata for. Required to specify which evidence’s metadata is needed in the dispute.

## SquareupApi.SubmitEvidenceToBank



Submit evidence for a dispute to the cardholder’s bank.

**Parameters**

-   **dispute\_identifier** (`string`, required) The unique ID of the dispute for which evidence is being submitted.

## SquareupApi.SearchSquareEvents



Search for Square API events within a specified timeframe.

**Parameters**

-   **end\_time\_range** (`string`, optional) A datetime in RFC 3339 format marking the end of the time range for the event search.
-   **filter\_by\_location\_ids** (`array[string]`, optional) An array of location IDs to filter events by specific locations.
-   **filter\_event\_types** (`array[string]`, optional) A list of event types to filter the search results by. Each event type should be a string.
-   **maximum\_events\_per\_page** (`integer`, optional) Specify the maximum number of events to return per page, up to 100.
-   **merchant\_ids\_filter** (`array[string]`, optional) An array of merchant IDs used to filter events by merchant.
-   **pagination\_cursor** (`string`, optional) A pagination cursor for retrieving the next set of events from a previous search query.
-   **sort\_key\_for\_event\_search** (`string`, optional) Set the key by which to sort the returned events. Options include ‘DEFAULT’.
-   **sort\_order** (`string`, optional) Specify the order (chronological or alphabetical) for sorting results. Choose ‘ASC’ for ascending or ‘DESC’ for descending order.
-   **time\_range\_start** (`string`, optional) Datetime value in RFC 3339 format indicating the start of the event timeframe.

## SquareupApi.DisableSearchableEvents



Disable events to prevent them from being searchable.

**Parameters**

This tool does not take any parameters.

## SquareupApi.EnableEventsSearch



Enable events to make them searchable.

**Parameters**

This tool does not take any parameters.

## SquareupApi.ListEventTypes



Retrieve available event types for webhooks and API queries.

**Parameters**

-   **api\_version** (`string`, optional) Specify the API version to list event types, overriding the application’s default version.

## SquareupApi.ListGiftCards



Retrieve and filter a list of gift cards.

**Parameters**

-   **filter\_by\_customer\_id** (`string`, optional) Provide a customer ID to return only the gift cards linked to that specific customer.
-   **gift\_card\_state** (`string`, optional) Specify the state of the gift cards to filter the results by their current status. If not provided, all states are included.
-   **gift\_card\_type** (`string`, optional) Filter gift cards by a specified type, or return all types if not provided.
-   **pagination\_cursor** (`string`, optional) A pagination cursor from a previous call to retrieve the next set of results. If not provided, returns the first page.
-   **results\_per\_page\_limit** (`integer`, optional) Specify the number of gift cards to return per page. Maximum is 200; default is 30.

## SquareupApi.CreateGiftCard



Create and register digital or physical gift cards.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## SquareupApi.ListGiftCardActivities



Retrieve and filter gift card activities.

**Parameters**

-   **activity\_sort\_order** (`string`, optional) Specify the order to return gift card activities: ‘ASC’ for oldest to newest, ‘DESC’ for newest to oldest (default).
-   **end\_time\_rfc3339** (`string`, optional) The inclusive end timestamp for the reporting period in RFC 3339 format. Defaults to current time.
-   **filter\_by\_activity\_type** (`string`, optional) Specify a type of gift card activity to filter the results. If not provided, all activity types are returned.
-   **filter\_by\_location\_id** (`string`, optional) Specify a location ID to filter gift card activities for that location. Leave empty for activities across all locations.
-   **pagination\_cursor** (`string`, optional) A cursor returned by a previous call to paginate results. Use to retrieve the next set of results.
-   **reporting\_period\_start\_time** (`string`, optional) The starting timestamp for filtering gift card activities, in RFC 3339 format. Inclusive of the provided time; defaults to one year ago.
-   **results\_limit\_per\_page** (`integer`, optional) Specify the number of results per page. Maximum is 100; default is 50.
-   **specific\_gift\_card\_id** (`string`, optional) Specify a gift card ID to retrieve activities related to that specific card. If not provided, activities for all gift cards will be returned.

## SquareupApi.CreateGiftCardActivity



Creates a gift card activity to manage gift card balance or state.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## SquareupApi.RetrieveGiftCard



Retrieve a gift card using its account number.

**Parameters**

-   **gift\_card\_account\_number** (`string`, required) The account number (GAN) of the gift card to retrieve. Max length 255 digits; Square-issued GANs have 16 digits.

## SquareupApi.RetrieveGiftCardFromToken



Retrieve a gift card using a secure token.

**Parameters**

-   **secure\_payment\_token** (`string`, required) The secure payment token used to retrieve the gift card. Generated by the Web Payments SDK or In-App Payments SDK.

## SquareupApi.LinkCustomerToGiftCard



Link a customer to a gift card for future use.

**Parameters**

-   **customer\_id** (`string`, required) The ID of the customer to link to the gift card. This should be a unique identifier representing the customer in the system.
-   **gift\_card\_identifier** (`string`, required) The unique ID of the gift card to link to the customer.

## SquareupApi.UnlinkCustomerFromGiftCard



Unlink a customer from a gift card.

**Parameters**

-   **customer\_id\_to\_unlink** (`string`, required) The unique identifier of the customer to unlink from the gift card. Ensure it matches the correct customer.
-   **gift\_card\_id\_to\_unlink** (`string`, required) The ID of the gift card to be unlinked from the customer. Required for unlinking process.

## SquareupApi.RetrieveGiftCardSquareup



Retrieve gift card details using a gift card ID.

**Parameters**

-   **gift\_card\_id** (`string`, required) The unique ID of the gift card to retrieve information.

## SquareupApi.RetrieveInventoryAdjustment



Fetches inventory adjustment details by ID.

**Parameters**

-   **inventory\_adjustment\_id** (`string`, required) ID of the InventoryAdjustment to retrieve.

## SquareupApi.ApplyInventoryAdjustments



Apply batch adjustments to inventory quantities.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## SquareupApi.FetchInventoryChanges



Retrieve historical inventory changes and adjustments.

**Parameters**

-   **filter\_by\_catalog\_object\_ids** (`array[string]`, optional) Filter results by providing an array of CatalogObject IDs. Only applicable when set.
-   **filter\_by\_location\_ids** (`array[string]`, optional) Return results filtered by specific `Location` IDs. This is optional and defaults to null.
-   **filter\_by\_updated\_before\_timestamp** (`string`, optional) Return results with `created_at` or `calculated_at` before this RFC 3339 timestamp.
-   **filter\_inventory\_change\_types** (`array[string]`, optional) A list of `InventoryChangeType` values to filter results, excluding `TRANSFER`. Default is `[PHYSICAL_COUNT, ADJUSTMENT]`.
-   **filter\_updated\_after\_timestamp** (`string`, optional) Return results with `calculated_at` after specified time in RFC 3339 format. Default is the UNIX epoch (`1970-01-01T00:00:00Z`).
-   **inventory\_states\_filter** (`array[string]`, optional) Filter to return `ADJUSTMENT` query results by `InventoryState`. Only applies if set. Accepts a list of states.
-   **number\_of\_records\_to\_return** (`integer`, optional) The number of inventory change records to return in the response.
-   **pagination\_cursor** (`string`, optional) A cursor for pagination to retrieve the next set of inventory results. Use this from a previous call to continue fetching data.

## SquareupApi.RetrieveInventoryCounts



Retrieve current inventory counts for specific items and locations.

**Parameters**

-   **filter\_by\_catalog\_object\_ids** (`array[string]`, optional) A list of `CatalogObject` IDs to filter the inventory results. Only applicable when set.
-   **filter\_by\_location\_ids** (`array[string]`, optional) An array of Location IDs to filter inventory counts. Only applicable when set.
-   **filter\_by\_updated\_after\_timestamp** (`string`, optional) Filter results to include only those with a `calculated_at` timestamp after the specified RFC 3339 time. Default is the UNIX epoch.
-   **inventory\_state\_filters** (`array[string]`, optional) Filter results by specific inventory states. Ignored states: NONE, SOLD, UNLINKED\_RETURN. Provide as an array of strings.
-   **pagination\_cursor** (`string`, optional) A pagination cursor to retrieve the next set of results for the original query.
-   **record\_limit** (`integer`, optional) Specify the number of inventory count records to return.

## SquareupApi.GetInventoryPhysicalCount



Retrieve details of a specific inventory physical count.

**Parameters**

-   **inventory\_physical\_count\_id** (`string`, required) ID of the InventoryPhysicalCount to retrieve details for.

## SquareupApi.RetrieveInventoryTransfer



Retrieve detailed inventory transfer information.

**Parameters**

-   **inventory\_transfer\_id** (`string`, required) The unique identifier for the InventoryTransfer to retrieve.

## SquareupApi.GetInventoryCount



Retrieve current stock count for a specific catalog item.

**Parameters**

-   **catalog\_object\_id** (`string`, required) The ID of the CatalogObject to retrieve inventory count for.
-   **location\_ids** (`string`, optional) Comma-separated list of Location IDs to query. Use an empty list to query all locations.
-   **pagination\_cursor** (`string`, optional) A cursor for paginating results, from previous call, to fetch next page.

## SquareupApi.ListInvoices



Retrieve a list of invoices for a specified location.

**Parameters**

-   **location\_identifier** (`string`, required) The unique identifier for the location to fetch invoices from.
-   **maximum\_invoices\_to\_return** (`integer`, optional) Specify the maximum number of invoices to return. The limit is 200; default is 100 if not set.
-   **pagination\_cursor** (`string`, optional) A cursor for pagination to retrieve the next set of invoice results.

## SquareupApi.CreateDraftInvoice



Create a draft invoice for an order using Squareup.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## SquareupApi.SearchInvoices



Search for invoices based on location and optional customer.

**Parameters**

-   **location\_id** (`array[string]`, required) Specify the location ID to limit the invoice search. Only one location ID can be provided.
-   **customer\_id** (`array[string]`, optional) Specify the customer ID to limit the search to invoices for that customer. Only one customer can be specified.
-   **maximum\_invoice\_count** (`integer`, optional) The maximum number of invoices to return, up to 200. Defaults to 100 if not specified.
-   **pagination\_cursor** (`string`, optional) A cursor to retrieve the next set of results for pagination. Use the cursor from the previous response.
-   **sort\_by\_field** (`string`, optional) Specify the field for sorting results. Default is ‘INVOICE\_SORT\_DATE’.
-   **sort\_order** (`string`, optional) The order in which results are returned, either ‘DESC’ for descending or ‘ASC’ for ascending.

## SquareupApi.DeleteInvoice



Delete a draft invoice and change order status to CANCELED.

**Parameters**

-   **invoice\_id** (`string`, required) The ID of the draft invoice to delete.
-   **invoice\_version** (`integer`, optional) The version number of the invoice to delete. Use GetInvoice or ListInvoices if unknown.

## SquareupApi.RetrieveInvoiceById



Retrieve invoice details using an invoice ID.

**Parameters**

-   **invoice\_id** (`string`, required) The ID of the invoice to retrieve. This should be a unique string representing a specific invoice.

## SquareupApi.UpdateInvoice



Updates invoice details with specified changes.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **invoice\_id** (`string`, optional) The unique ID of the invoice you wish to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## SquareupApi.RemoveInvoiceAttachment



Removes an attachment from an invoice.

**Parameters**

-   **attachment\_id** (`string`, required) The unique identifier for the invoice attachment to be deleted. Required for removing the specified file from the invoice.
-   **invoice\_identifier** (`string`, required) The unique ID of the invoice from which to delete the attachment. Applicable for specific invoice states.

## SquareupApi.CancelInvoice



Cancel an invoice to prevent further transactions.

**Parameters**

-   **invoice\_id** (`string`, required) The ID of the invoice you want to cancel. This is required to specify which invoice will be affected.
-   **invoice\_version\_to\_cancel** (`integer`, required) The version number of the invoice to be canceled. Use GetInvoice or ListInvoices to find it if unknown.

## SquareupApi.PublishInvoice



Publish a draft invoice with Square, updating its status.

**Parameters**

-   **invoice\_id** (`string`, required) The ID of the draft invoice that you wish to publish. This ID uniquely identifies the invoice within the system.
-   **invoice\_version** (`integer`, required) Specify the current version number of the invoice to publish. This must match the existing invoice version to avoid rejection.
-   **unique\_request\_identifier** (`string`, optional) A unique string to identify the `PublishInvoice` request. If omitted or empty, each request is treated as independent. Refer to the Square documentation on idempotency for more information.

## SquareupApi.ListBreakTypes



Retrieve a paginated list of break types for a business.

**Parameters**

-   **filter\_by\_location\_id** (`string`, optional) Filter results to break types associated with the specified location ID.
-   **max\_results\_per\_page** (`integer`, optional) Specify the maximum number of BreakType results to return per page. Must be between 1 and 200. Default is 200.
-   **next\_page\_cursor** (`string`, optional) A pointer to the next page of `BreakType` results to fetch for continued listing of break types.

## SquareupApi.CreateBreakType



Create a new BreakType template for a location.

**Parameters**

-   **break\_expected\_duration** (`string`, required) The expected length of the break in RFC-3339 duration format (e.g., PT15M for 15 minutes).
-   **break\_name** (`string`, required) A human-readable name for the break type, displayed to team members.
-   **is\_break\_paid** (`boolean`, required) Indicates if the break counts towards compensated work time. Use true for a paid break, false for an unpaid break.
-   **location\_id** (`string`, required) The ID of the business location where this break type will apply. It is required to associate the break type with a specific location.
-   **break\_type\_uuid** (`string`, optional) The UUID for the BreakType object. It uniquely identifies the break type.
-   **concurrency\_version** (`integer`, optional) Integer for resolving concurrency issues; fails if it doesn’t match server version.
-   **created\_at\_timestamp** (`string`, optional) A read-only timestamp in RFC 3339 format, automatically populated and not required for input.
-   **idempotency\_key** (`string`, optional) A unique string to ensure the operation is idempotent, avoiding duplicate actions.
-   **updated\_at\_timestamp** (`string`, optional) A read-only timestamp in RFC 3339 format indicating when the BreakType was last updated.

## SquareupApi.DeleteBreakType



Deletes an existing BreakType.

**Parameters**

-   **break\_type\_uuid** (`string`, required) The UUID of the BreakType to be deleted.

## SquareupApi.GetBreakTypeById



Retrieve details of a specific BreakType by ID.

**Parameters**

-   **break\_type\_uuid** (`string`, required) The UUID of the BreakType to retrieve.

## SquareupApi.UpdateBreakType



Update an existing BreakType configuration.

**Parameters**

-   **break\_counts\_for\_compensation** (`boolean`, required) Set to true if this break counts towards time worked for compensation purposes.
-   **break\_duration\_rfc3339** (`string`, required) The expected duration of the break in RFC-3339 format (e.g., PT15M for 15 minutes).
-   **break\_name** (`string`, required) A human-readable name for the break type, shown to team members in Square products.
-   **break\_type\_uuid** (`string`, required) The UUID of the BreakType to be updated.
-   **business\_location\_id** (`string`, required) The ID of the business location this type of break applies to. Required for updating break settings.
-   **break\_type\_creation\_timestamp** (`string`, optional) A read-only timestamp in RFC 3339 format indicating when the BreakType was created. This is not modifiable.
-   **break\_type\_id** (`string`, optional) The UUID for the BreakType object being updated. This is required for identifying which BreakType to modify.
-   **readonly\_updated\_at\_timestamp** (`string`, optional) The read-only timestamp in RFC 3339 format indicating the last update time for BreakType. It’s not modifiable.
-   **version\_for\_concurrency** (`integer`, optional) The version number for concurrency control. Helps resolve conflicts by matching the server’s current version.

## SquareupApi.CreateScheduledShift



Create a scheduled shift with draft shift details.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## SquareupApi.BulkPublishScheduledShifts



Publish multiple scheduled shifts in bulk.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## SquareupApi.ListScheduledShifts



Retrieve a list of scheduled shifts with filtering options.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## SquareupApi.RetrieveScheduledShift



Retrieve details of a scheduled shift by ID.

**Parameters**

-   **scheduled\_shift\_id** (`string`, required) The unique identifier of the scheduled shift to retrieve details for.

## SquareupApi.UpdateScheduledShift



Updates draft shift details for a scheduled shift.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **scheduled\_shift\_id** (`string`, optional) The unique identifier of the scheduled shift to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## SquareupApi.PublishScheduledShift



Publish a scheduled shift to make it official.

**Parameters**

-   **scheduled\_shift\_id** (`string`, required) The ID of the scheduled shift to publish.
-   **unique\_idempotency\_key** (`string`, required) A unique identifier for ensuring the idempotency of the publish request. Prevents duplicate operations if the request is retried.
-   **current\_shift\_version** (`integer`, optional) The current version of the scheduled shift for optimistic concurrency control. If it doesn’t match the server version, the request fails.
-   **notification\_audience** (`string`, optional) Specify who receives email notifications when a scheduled shift is published. Options are: ALL, AFFECTED, NONE.

## SquareupApi.ListTeamMemberWages



Retrieve paginated list of team member wages for a business.

**Parameters**

-   **filter\_by\_team\_member\_id** (`string`, optional) Filter wages to only those associated with the specified team member by ID.
-   **max\_results\_per\_page** (`integer`, optional) The maximum number of TeamMemberWage results to return per page, ranging from 1 to 200. Default is 200.
-   **next\_page\_cursor** (`string`, optional) A pointer to the next page of team member wage results to fetch.

## SquareupApi.GetTeamMemberWage



Retrieve wage details for a specific team member.

**Parameters**

-   **team\_member\_wage\_id** (`string`, required) The unique identifier (UUID) for retrieving the specific TeamMemberWage record.

## SquareupApi.CreateTeamMemberTimecard



Create a timecard for a team member’s workday.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## SquareupApi.SearchTimecards



Retrieve filtered and sorted timecard records for a business.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## SquareupApi.DeleteTimecard



Delete a specific timecard entry.

**Parameters**

-   **timecard\_uuid** (`string`, required) The UUID for the Timecard being deleted.

## SquareupApi.GetTimecardById



Fetch details of a specific timecard by ID.

**Parameters**

-   **timecard\_id** (`string`, required) The unique UUID identifying the timecard you want to retrieve.

## SquareupApi.UpdateTimecard



Update an existing timecard with new details.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **timecard\_id** (`string`, optional) The unique identifier of the timecard to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## SquareupApi.ListWorkweekConfigs



Retrieve workweek configurations for a business.

**Parameters**

-   **maximum\_results\_per\_page** (`integer`, optional) Maximum number of WorkweekConfig results to return per page.
-   **pagination\_cursor** (`string`, optional) Pointer to the next page of WorkweekConfig results to fetch.

## SquareupApi.UpdateWorkweekConfiguration



Update workweek configuration settings.

**Parameters**

-   **workweek\_config\_id** (`string`, required) The UUID for the `WorkweekConfig` object to be updated.
-   **workweek\_start\_day** (`string`, required) Specifies the start day of the workweek. Acceptable values are: MON, TUE, WED, THU, FRI, SAT, SUN.
-   **workweek\_start\_time\_local** (`string`, required) The local time a business week starts, represented as a string in `HH:MM` format (`HH:MM:SS` is accepted, but seconds are truncated).
-   **read\_only\_updated\_at** (`string`, optional) A read-only timestamp in RFC 3339 format; presented in UTC, to indicate the last update time of the workweek configuration.
-   **workweek\_config\_uuid** (`string`, optional) The UUID of the workweek configuration object to be updated.
-   **workweek\_config\_version** (`integer`, optional) Version number to resolve concurrency issues. If it doesn’t match the server, the update fails. If omitted, a blind write occurs.
-   **workweek\_creation\_timestamp** (`string`, optional) Read-only UTC timestamp of workweek config creation in RFC 3339 format.

## SquareupApi.ListAllLocations



Fetch details of all seller’s locations, including inactive ones.

**Parameters**

This tool does not take any parameters.

## SquareupApi.CreateNewLocation



Create a new location for sales and configuration.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## SquareupApi.ListLocationCustomAttributeDefinitions



Get location-related custom attribute definitions for a Square account.

**Parameters**

-   **filter\_by\_visibility** (`string`, optional) Filter results by visibility values: ‘ALL’, ‘READ’, or ‘READ\_WRITE’. Determines the visibility of custom attribute definitions returned.
-   **maximum\_results\_per\_page** (`integer`, optional) Sets the maximum number of results to return in a single response page. Accepts values between 1 and 100, default is 20.
-   **pagination\_cursor** (`string`, optional) The cursor from the previous response to fetch the next page of results.

## SquareupApi.CreateLocationCustomAttribute



Create a custom attribute for a Square location.

**Parameters**

-   **current\_definition\_version** (`integer`, optional) The current version of the custom attribute definition. Must match the latest version for updates to ensure optimistic concurrency and avoid stale writes.
-   **custom\_attribute\_definition\_creation\_timestamp** (`string`, optional) The creation timestamp for the custom attribute definition in RFC 3339 format. Required for consistently tracking when the definition was created.
-   **custom\_attribute\_description** (`string`, optional) A seller-oriented description of the custom attribute definition. Required if visibility is `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`. It may be shown as a tooltip in the Square UI.
-   **custom\_attribute\_key** (`string`, optional) The unique identifier for the custom attribute definition, formatted as ‘application\_id:simple\_key’ or a simple key with up to 60 characters including alphanumeric, periods, underscores, and hyphens.
-   **custom\_attribute\_name** (`string`, optional) The unique name for the custom attribute, used in API and UI. Required if visibility is not private.
-   **custom\_attribute\_schema** (`json`, optional) A JSON schema defining the data type of the custom attribute. It’s required for creating a definition.
-   **custom\_attribute\_visibility** (`string`, optional) Sets the permission level to view and edit the custom attribute. Options: VISIBILITY\_HIDDEN, VISIBILITY\_READ\_ONLY, VISIBILITY\_READ\_WRITE\_VALUES.
-   **unique\_request\_id** (`string`, optional) A unique identifier for this request to ensure idempotency. It helps prevent duplicate operations by distinguishing each request as unique.
-   **updated\_timestamp** (`string`, optional) The timestamp indicating when the custom attribute definition was created or last updated, in RFC 3339 format.

## SquareupApi.DeleteLocationCustomAttribute



Delete a custom attribute definition from a location.

**Parameters**

-   **custom\_attribute\_key** (`string`, required) The identifier for the custom attribute definition to remove.

## SquareupApi.RetrieveLocationCustomAttributeDefinition



Retrieve a location’s custom attribute definition.

**Parameters**

-   **custom\_attribute\_key** (`string`, required) The key for the custom attribute definition to retrieve, using the qualified key if not the owner.
-   **current\_custom\_attribute\_version** (`integer`, optional) The version number of the custom attribute definition for consistent reads. Must match the current or higher version.

## SquareupApi.UpdateLocationCustomAttribute



Updates a custom attribute definition for a location.

**Parameters**

-   **custom\_attribute\_key** (`string`, required) The key of the custom attribute definition to update. It should match the key provided when the definition was created.
-   **current\_version** (`integer`, optional) The current version of the custom attribute definition. Must be set to the latest version for updates to ensure optimistic concurrency.
-   **custom\_attribute\_creation\_timestamp** (`string`, optional) The creation timestamp for the custom attribute definition in RFC 3339 format.
-   **custom\_attribute\_definition\_identifier** (`string`, optional) The unique identifier for the custom attribute definition. This can be a simple key or a qualified key (format: application\_id:simple\_key). It supports up to 60 alphanumeric characters, periods (.), underscores (\_), and hyphens (-).
-   **custom\_attribute\_description** (`string`, optional) A description for the custom attribute definition, including any constraints. Required if the visibility is `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`.
-   **custom\_attribute\_name** (`string`, optional) The unique name for the custom attribute definition. Required if visibility is set to specific levels.
-   **custom\_attribute\_schema** (`json`, optional) The JSON schema defining the data type of the custom attributes. Required when creating a definition. Refer to the Square Custom Attributes Overview for details.
-   **custom\_attribute\_visibility\_level** (`string`, optional) Specifies permission level required to view the custom attribute definition. Options: VISIBILITY\_HIDDEN, VISIBILITY\_READ\_ONLY, VISIBILITY\_READ\_WRITE\_VALUES.
-   **unique\_idempotency\_key** (`string`, optional) A unique identifier for the request to ensure idempotency. Prevents duplicate processing of requests.
-   **update\_timestamp** (`string`, optional) The timestamp indicating when the custom attribute definition was last updated, in RFC 3339 format.

## SquareupApi.BulkDeleteLocationCustomAttributes



Delete custom attributes for multiple locations at once.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## SquareupApi.BulkUpsertLocationCustomAttributes



Bulk create or update custom attributes for multiple locations.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## SquareupApi.RetrieveLocationDetails



Retrieve details of a specific business location.

**Parameters**

-   **location\_id** (`string`, required) The ID of the location to retrieve. Use “main” to return the main location details.

## SquareupApi.UpdateLocationSquareup



Updates a business location on Square.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **location\_id** (`string`, optional) The ID of the location to update on Square. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## SquareupApi.ListLocationCustomAttributes



Retrieve custom attributes for a specific location.

**Parameters**

-   **location\_id** (`string`, required) The ID of the target location to retrieve custom attributes for.
-   **filter\_by\_visibility** (`string`, optional) Filters custom attribute definitions by visibility values. Options include ‘ALL’, ‘READ’, or ‘READ\_WRITE’.
-   **include\_custom\_attribute\_definitions** (`boolean`, optional) Set to true to include custom attribute definitions, providing name, description, and data type details. Defaults to false.
-   **maximum\_results\_limit** (`integer`, optional) The maximum number of results to return in a single response. Valid range: 1 to 100. Default is 20.
-   **pagination\_cursor** (`string`, optional) The cursor for fetching the next page of results in a paginated response.

## SquareupApi.RemoveLocationCustomAttribute



Delete a custom attribute from a location.

**Parameters**

-   **custom\_attribute\_key** (`string`, required) The key of the custom attribute to delete, matching the key of a custom attribute definition in the Square seller account. Use the qualified key if not the definition owner.
-   **location\_id** (`string`, required) The unique identifier for the target location where the custom attribute will be deleted.

## SquareupApi.GetLocationCustomAttribute



Retrieve a custom attribute for a specific location.

**Parameters**

-   **custom\_attribute\_key** (`string`, required) The key for the custom attribute to retrieve. Must match the key in Square’s custom attribute definition. Use qualified key if needed.
-   **target\_location\_id** (`string`, required) The ID of the target location to retrieve its custom attribute.
-   **custom\_attribute\_version** (`integer`, optional) Specify the current version of the custom attribute for consistent data retrieval. A BAD\_REQUEST error is returned if this version exceeds the current version.
-   **include\_custom\_attribute\_definition** (`boolean`, optional) Set to true to include details like name, description, and data type of the custom attribute definition. Default is false.

## SquareupApi.UpsertLocationCustomAttribute



Create or update a custom attribute for a location.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **location\_id** (`string`, optional) The ID of the target location for which the custom attribute is to be created or updated. It should be a string that uniquely identifies the location within the Square seller account. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **custom\_attribute\_key** (`string`, optional) The key for the custom attribute to create or update. Must match an existing attribute definition key in the Square account. Use a qualified key if not the owner. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## SquareupApi.CreateLoyaltyAccount



Create a loyalty account for a buyer.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## SquareupApi.SearchLoyaltyAccounts



Search for loyalty accounts by phone number or customer ID.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## SquareupApi.RetrieveLoyaltyAccount



Retrieve details of a specific loyalty account.

**Parameters**

-   **loyalty\_account\_id** (`string`, required) The unique identifier of the loyalty account to retrieve.

## SquareupApi.AccumulateLoyaltyPoints



Add points to a loyalty account for a purchase.

**Parameters**

-   **loyalty\_account\_id** (`string`, required) The unique identifier for the target loyalty account to which points will be added.
-   **purchase\_location\_id** (`string`, required) The ID of the location where the purchase was made, necessary for loyalty point accumulation.
-   **unique\_request\_id** (`string`, required) A unique string identifier for the `AccumulateLoyaltyPoints` request. Must be unique for each request to ensure idempotency.
-   **loyalty\_program\_id** (`string`, optional) The ID of the loyalty program to add points to. Required to identify the correct program.
-   **order\_id\_for\_accumulation** (`string`, optional) The ID of the order for which points are accumulated. Required if using the Orders API.
-   **points\_to\_accumulate** (`integer`, optional) Specify the number of points to add to the loyalty account from the purchase event if not using the Orders API.

## SquareupApi.AdjustLoyaltyPoints



Manually adjust loyalty points for a buyer’s account.

**Parameters**

-   **loyalty\_account\_id** (`string`, required) The unique ID of the buyer’s loyalty account to adjust.
-   **points\_adjustment\_amount** (`integer`, required) The number of points to add or remove from the buyer’s account.
-   **unique\_request\_identifier** (`string`, required) A unique string to identify this loyalty points adjustment request. Must be unique for each request to prevent duplicates.
-   **adjustment\_reason** (`string`, optional) The reason for adjusting the loyalty points, such as ‘customer courtesy’ or ‘error correction’.
-   **allow\_negative\_balance** (`boolean`, optional) Set to true to allow a negative balance after point subtraction. Defaults to false if not specified.
-   **loyalty\_program\_id** (`string`, optional) The Square-assigned ID of the loyalty program to adjust points for.

## SquareupApi.SearchLoyaltyEvents



Retrieve and search for Square loyalty events.

**Parameters**

-   **end\_time** (`string`, optional) Datetime in RFC 3339 format indicating when the time range ends for the search.
-   **location\_ids\_for\_events\_query** (`array[string]`, optional) List of Location IDs for querying loyalty events. Multiple IDs use OR logic.
-   **loyalty\_account\_id** (`string`, optional) The ID of the loyalty account associated with the events to filter.
-   **loyalty\_event\_types** (`array[string]`, optional) Array of loyalty event types to filter results. Multiple values are combined using OR logic. Refer to LoyaltyEventType for options.
-   **max\_results\_count** (`integer`, optional) The maximum number of loyalty events to include in the response. Defaults to 30.
-   **order\_id\_filter** (`string`, optional) The ID of the order associated with the event to filter results.
-   **pagination\_cursor** (`string`, optional) Provide a pagination cursor to retrieve the next set of results from a previous query.
-   **start\_datetime** (`string`, optional) A datetime value in RFC 3339 format indicating when the time range starts for the search query.

## SquareupApi.GetLoyaltyProgram



Retrieve the loyalty program details for a seller.

**Parameters**

-   **loyalty\_program\_identifier** (`string`, required) The ID of the loyalty program or the keyword ‘main’. Use to retrieve the loyalty program of a seller.

## SquareupApi.CalculateLoyaltyPoints



Calculate loyalty points a buyer can earn from a purchase.

**Parameters**

-   **loyalty\_program\_id** (`string`, required) The ID of the loyalty program, defining the rules for accruing points.
-   **currency\_code** (`string`, optional) Indicates the associated currency for an amount of money using ISO 4217 codes. For example, ‘USD’ for United States Dollar.
-   **loyalty\_account\_id** (`string`, optional) The ID of the target loyalty account. Optionally specify if using the Orders API. Determines promotion point eligibility based on trigger limits.
-   **order\_id** (`string`, optional) The Order ID used to calculate points. Provide this if using the Orders API. Otherwise, use transaction\_amount\_money.
-   **transaction\_amount\_in\_smallest\_denomination** (`integer`, optional) The amount of money for the transaction, given in the smallest denomination of the currency (e.g., cents for USD).

## SquareupApi.ListLoyaltyPromotions



Retrieve promotions from a specific loyalty program.

**Parameters**

-   **loyalty\_program\_id** (`string`, required) The ID of the loyalty program to list promotions for. Obtain via `RetrieveLoyaltyProgram` using `main`.
-   **max\_results\_per\_page** (`integer`, optional) Specify the maximum number of promotions to return in a single response. Must be between 1 and 30, defaults to 30.
-   **pagination\_cursor** (`string`, optional) The cursor for retrieving the next page of results from the previous call.
-   **promotion\_status\_filter** (`string`, optional) Specify the status to filter loyalty promotions. Options include ACTIVE, ENDED, CANCELED, SCHEDULED. Returns promotions with the specified status.

## SquareupApi.CreateLoyaltyPromotion



Create a new loyalty promotion for a program.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **loyalty\_program\_id** (`string`, optional) The ID of the loyalty program to associate with the promotion. Use the RetrieveLoyaltyProgram endpoint with the ‘main’ keyword to obtain it. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## SquareupApi.RetrieveLoyaltyPromotion



Retrieve details of a specific loyalty promotion.

**Parameters**

-   **loyalty\_program\_id** (`string`, required) The ID of the base loyalty program. Obtain this by calling the RetrieveLoyaltyProgram API using the ‘main’ keyword.
-   **promotion\_id** (`string`, required) The ID of the loyalty promotion to retrieve. This ID is necessary to specify which promotion details to access.

## SquareupApi.CancelLoyaltyPromotion



Cancels an active or scheduled loyalty promotion early.

**Parameters**

-   **loyalty\_program\_id** (`string`, required) The unique ID of the base loyalty program to identify which program the promotion is associated with.
-   **loyalty\_promotion\_id** (`string`, required) The ID of the loyalty promotion to cancel, which can be ‘ACTIVE’ or ‘SCHEDULED’.

## SquareupApi.CreateLoyaltyReward



Create a loyalty reward by locking points for a customer.

**Parameters**

-   **loyalty\_account\_id** (`string`, required) The Square-assigned ID of the loyalty account to which the reward belongs.
-   **reward\_tier\_id** (`string`, required) The Square-assigned ID of the reward tier used to create the loyalty reward.
-   **unique\_request\_key** (`string`, required) A unique string that identifies this CreateLoyaltyReward request. Must be unique for each request to prevent duplication.
-   **loyalty\_reward\_id** (`string`, optional) The Square-assigned ID of the loyalty reward to be created or referenced.
-   **loyalty\_reward\_status** (`string`, optional) The status of the loyalty reward. Possible values: ‘ISSUED’, ‘REDEEMED’, ‘DELETED’.
-   **number\_of\_loyalty\_points** (`integer`, optional) The number of loyalty points to use for creating the reward.
-   **order\_id** (`string`, optional) The Square-assigned ID of the order to which the reward is attached. Optional if no order is involved.
-   **reward\_creation\_timestamp** (`string`, optional) The timestamp when the reward was created, in RFC 3339 format. This indicates the date and time of reward creation.
-   **reward\_last\_updated\_timestamp** (`string`, optional) The timestamp when the reward was last updated, in RFC 3339 format.
-   **reward\_redeemed\_timestamp** (`string`, optional) The timestamp when the reward was redeemed, in RFC 3339 format. This value indicates the moment the reward was used.

## SquareupApi.SearchLoyaltyRewards



Search for loyalty rewards with optional filters.

**Parameters**

-   **loyalty\_account\_id** (`string`, optional) The ID of the loyalty account to which the loyalty reward belongs. Required if using a query object.
-   **maximum\_results** (`integer`, optional) The maximum number of loyalty reward results to return. Default is 30.
-   **pagination\_cursor** (`string`, optional) A cursor for pagination to retrieve the next set of results from a previous call.
-   **reward\_status** (`string`, optional) The status of the loyalty reward. Options: ISSUED, REDEEMED, DELETED.

## SquareupApi.DeleteLoyaltyReward



Deletes a loyalty reward and restores points to the account.

**Parameters**

-   **loyalty\_reward\_id** (`string`, required) The ID of the loyalty reward to delete, returning points to the account. Cannot delete redeemed rewards.

## SquareupApi.GetLoyaltyReward



Retrieve details of a specific loyalty reward.

**Parameters**

-   **loyalty\_reward\_id** (`string`, required) The ID of the loyalty reward to retrieve. This is required to fetch details about a specific reward for a customer.

## SquareupApi.RedeemLoyaltyReward



Redeem a loyalty reward for a customer purchase.

**Parameters**

-   **idempotency\_key** (`string`, required) A unique string to identify this `RedeemLoyaltyReward` request, ensuring uniqueness for each request.
-   **location\_id** (`string`, required) The ID of the location where the loyalty reward is redeemed.
-   **loyalty\_reward\_id** (`string`, required) The unique ID of the loyalty reward to redeem. Required for specifying which reward to process.

## SquareupApi.GetMerchantDetails



Retrieve details about a specific merchant.

**Parameters**

-   **previous\_response\_cursor** (`integer`, optional) The cursor generated by the previous response for fetching subsequent pages.

## SquareupApi.ListMerchantCustomAttributeDefinitions



Retrieve merchant custom attribute definitions.

**Parameters**

-   **max\_results\_per\_page** (`integer`, optional) The maximum number of results to return in a single response, ranging from 1 to 100. Default is 20.
-   **pagination\_cursor** (`string`, optional) The cursor for retrieving the next page of results from a previous response.
-   **visibility\_filter\_option** (`string`, optional) Specify the visibility level of the CustomAttributeDefinition results. Options: ALL, READ, READ\_WRITE.

## SquareupApi.CreateMerchantCustomAttribute



Create a custom attribute for a Square merchant account.

**Parameters**

-   **attribute\_visibility\_level** (`string`, optional) Specify the permission level required to view and edit the custom attribute: VISIBILITY\_HIDDEN, VISIBILITY\_READ\_ONLY, or VISIBILITY\_READ\_WRITE\_VALUES.
-   **creation\_timestamp** (`string`, optional) The creation timestamp of the custom attribute definition in RFC 3339 format.
-   **custom\_attribute\_definition\_description** (`string`, optional) The seller-oriented description for the custom attribute definition, including any constraints to observe. Required if visibility is ‘VISIBILITY\_READ\_ONLY’ or ‘VISIBILITY\_READ\_WRITE\_VALUES’.
-   **custom\_attribute\_definition\_version** (`integer`, optional) Read-only version of the custom attribute definition, required for updates to ensure optimistic concurrency control.
-   **custom\_attribute\_json\_schema** (`json`, optional) The JSON schema for the custom attribute definition, which determines the data type of the corresponding custom attributes. Required for creation.
-   **custom\_attribute\_key** (`string`, optional) The unique identifier for the custom attribute. Format: application\_id:simple\_key. Up to 60 characters, including ’.’, ’\_’, ’-’. Must be unique per application, seller, and resource type.
-   **custom\_attribute\_name** (`string`, optional) The name of the custom attribute definition. It must be unique within the seller/application pair and is required if visibility is set to read-only or read-write.
-   **idempotency\_key** (`string`, optional) A unique string identifier for the request to ensure it can be retried safely without duplication. Useful in scenarios with network issues or retries.
-   **updated\_timestamp** (`string`, optional) The timestamp of the last update or creation of the custom attribute definition, in RFC 3339 format.

## SquareupApi.DeleteMerchantCustomAttribute



Delete a custom attribute definition for a Square merchant.

**Parameters**

-   **custom\_attribute\_key** (`string`, required) The key of the custom attribute definition to be deleted from the Square account.

## SquareupApi.GetMerchantCustomAttributeDefinition



Retrieves custom attribute definition for a Square seller account.

**Parameters**

-   **custom\_attribute\_key** (`string`, required) The key of the custom attribute definition to retrieve. Use the qualified key if not the definition owner.
-   **custom\_attribute\_version** (`integer`, optional) Specifies the current version of the custom attribute definition for retrieving the most up-to-date data. If the specified version is higher than the current, a ‘BAD\_REQUEST’ error is returned.

## SquareupApi.UpdateMerchantCustomAttributeDefinition



Updates a merchant’s custom attribute definition.

**Parameters**

-   **custom\_attribute\_key** (`string`, required) The key of the custom attribute definition to update. A string value that identifies the specific custom attribute definition.
-   **creation\_timestamp** (`string`, optional) The timestamp indicating when the custom attribute definition was created, in RFC 3339 format.
-   **current\_definition\_version** (`integer`, optional) Specify the current version of the custom attribute definition to ensure optimistic concurrency. Must match the latest version as stale versions are rejected.
-   **custom\_attribute\_definition\_identifier** (`string`, optional) The identifier for the custom attribute definition. It may be a simple key or a qualified key formatted as application\_id:simple\_key with up to 60 alphanumeric characters, periods, underscores, and hyphens.
-   **custom\_attribute\_definition\_name** (`string`, optional) The unique name for the custom attribute definition, required if the visibility is ‘VISIBILITY\_READ\_ONLY’ or ‘VISIBILITY\_READ\_WRITE\_VALUES’.
-   **custom\_attribute\_description** (`string`, optional) A seller-oriented description for the custom attribute definition, detailing any constraints. Required for certain visibility settings.
-   **custom\_attribute\_json\_schema** (`json`, optional) The JSON schema defining data type and structure for the custom attribute definition. Necessary when creating a definition.
-   **custom\_attribute\_visibility** (`string`, optional) The permission level required to view this custom attribute definition. Options: ‘VISIBILITY\_HIDDEN’, ‘VISIBILITY\_READ\_ONLY’, ‘VISIBILITY\_READ\_WRITE\_VALUES’.
-   **idempotency\_key** (`string`, optional) A unique identifier for the request to ensure idempotency. It prevents duplicate processing.
-   **last\_updated\_timestamp** (`string`, optional) The timestamp of the last update to the custom attribute definition in RFC 3339 format.

## SquareupApi.BulkDeleteMerchantCustomAttributes



Bulk delete custom attributes for a merchant.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## SquareupApi.UpsertMerchantCustomAttributesBulk



Bulk creates or updates custom attributes for a merchant.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## SquareupApi.RetrieveMerchantInfo



Retrieve merchant details using their ID.

**Parameters**

-   **merchant\_id** (`string`, required) The ID of the merchant to retrieve. Use ‘me’ to get the merchant accessible to this call.

## SquareupApi.ListMerchantCustomAttributes



Retrieve custom attributes for a specified merchant.

**Parameters**

-   **merchant\_identifier** (`string`, required) The unique identifier for the target merchant whose custom attributes are to be listed.
-   **filter\_custom\_attribute\_visibility** (`string`, optional) Filters custom attribute definition results by visibility values. Valid options are ‘ALL’, ‘READ’, or ‘READ\_WRITE’.
-   **include\_custom\_attribute\_definitions** (`boolean`, optional) Set to true to include custom attribute definitions, providing details like name, description, and data type.
-   **maximum\_results\_limit** (`integer`, optional) The maximum number of results to return in a single response. Minimum is 1, maximum is 100, defaults to 20.
-   **paging\_cursor** (`string`, optional) The cursor from the previous paged response to retrieve the next set of results.

## SquareupApi.RemoveMerchantAttribute



Delete a custom attribute from a merchant.

**Parameters**

-   **custom\_attribute\_key** (`string`, required) The key of the custom attribute to delete. Use the qualified key if the attribute is owned by another application.
-   **merchant\_id** (`string`, required) The unique identifier of the merchant whose custom attribute is being deleted.

## SquareupApi.RetrieveMerchantCustomAttribute



Retrieve a custom attribute associated with a merchant.

**Parameters**

-   **custom\_attribute\_key** (`string`, required) The key of the custom attribute to retrieve, matching the `key` of a custom attribute definition in the Square seller account.
-   **merchant\_identifier** (`string`, required) The unique identifier of the target merchant to retrieve the custom attribute for.
-   **custom\_attribute\_version** (`integer`, optional) Integer value representing the custom attribute’s current version for consistent reads. If specified version exceeds current, an error is returned.
-   **include\_custom\_attribute\_definition** (`boolean`, optional) Set to true to return the custom attribute definition, including name, description, and data type. Defaults to false.

## SquareupApi.UpsertMerchantCustomAttribute



Create or update a custom attribute for a merchant.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **merchant\_id** (`string`, optional) The unique ID of the target merchant for whom the custom attribute is being created or updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **custom\_attribute\_key** (`string`, optional) The key of the custom attribute to create or update. This key must match the key of a custom attribute definition in the Square seller account. If the requester is not the definition owner, use the qualified key. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## SquareupApi.RetrieveLocationSettings



Retrieve settings for a Square-hosted checkout page location.

**Parameters**

-   **location\_id** (`string`, required) The unique ID of the location for which to retrieve the checkout page settings.

## SquareupApi.UpdateCheckoutLocationSettings



Update location settings for a Square-hosted checkout page.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **location\_id** (`string`, optional) The unique identifier of the location to update settings for the Square-hosted checkout page. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## SquareupApi.RetrieveSquareMerchantSettings



Retrieve Square merchant settings for checkout pages.

**Parameters**

This tool does not take any parameters.

## SquareupApi.UpdateMerchantSettings



Updates Square-hosted checkout page settings for a merchant.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## SquareupApi.ListPaymentLinks



Lists all online payment links for Squareup.

**Parameters**

-   **pagination\_cursor** (`string`, optional) A pagination cursor from a previous call to fetch the next set of results. If not provided, returns the first page.
-   **results\_per\_page\_limit** (`integer`, optional) Advisory limit on number of results per page. Ignored if negative, zero, or over 1000. Defaults to 100.

## SquareupApi.CreatePaymentLink



Create a Square-hosted checkout page for payments.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## SquareupApi.DeletePaymentLink



Deletes a specified payment link.

**Parameters**

-   **payment\_link\_id** (`string`, required) The unique identifier of the payment link to delete. This ID specifies which payment link should be removed.

## SquareupApi.RetrievePaymentLink



Retrieve a payment link using its ID.

**Parameters**

-   **payment\_link\_id** (`string`, required) The unique ID of the payment link to retrieve.

## SquareupApi.UpdatePaymentLink



Update details of an existing payment link.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **payment\_link\_id** (`string`, optional) The unique identifier of the payment link to update. Required to specify which link will be modified. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## SquareupApi.CreateOrderForPurchase



Creates a new order for purchase with product details.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## SquareupApi.RetrieveMultipleOrders



Retrieve multiple orders using their IDs.

**Parameters**

-   **order\_ids\_list** (`array[string]`, required) An array of order IDs to retrieve, with a maximum of 100 per request.
-   **location\_id** (`string`, optional) Optional location ID for the orders. Omit to use the current merchant’s ID.

## SquareupApi.PreviewOrderPricing



Preview order pricing without creating an order.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## SquareupApi.CloneOrderDraft



Clone an existing order as a draft.

**Parameters**

-   **order\_id\_to\_clone** (`string`, required) The ID of the order you want to clone.
-   **clone\_request\_idempotency\_key** (`string`, optional) A unique string to identify the clone request. Allows safe retries without duplicating cloned orders.
-   **order\_version** (`integer`, optional) An optional integer specifying the order version for concurrency protection. If omitted, the latest version is used.

## SquareupApi.ListOrderCustomAttributeDefinitions



Retrieve order-related custom attribute definitions for a Square seller.

**Parameters**

-   **custom\_attribute\_visibility\_filter** (`string`, optional) Specify whether to return all custom attributes, or only those that are read-only (‘READ’) or read-write (‘READ\_WRITE’). Valid options are ‘ALL’, ‘READ’, or ‘READ\_WRITE’.
-   **maximum\_results\_per\_page** (`integer`, optional) The maximum number of results to return in a single response. Accepts values 1 to 100, default is 20.
-   **pagination\_cursor** (`string`, optional) The cursor for fetching the next page of results in a multi-page response. It should be used as returned from a previous call.

## SquareupApi.CreateOrderCustomAttribute



Define a custom attribute for Square orders.

**Parameters**

-   **creation\_timestamp** (`string`, optional) The timestamp indicating when the custom attribute definition was created, in RFC 3339 format.
-   **current\_version\_of\_custom\_attribute\_definition** (`integer`, optional) Read-only. Specifies the current version of the custom attribute definition for optimistic concurrency and consistency.
-   **custom\_attribute\_definition\_key** (`string`, optional) A unique identifier for the custom attribute definition. Can be a simple or qualified key. Must be unique per application, seller, and resource type. Cannot exceed 60 characters.
-   **custom\_attribute\_definition\_name** (`string`, optional) The name for the custom attribute definition, unique within the seller and application. Required if visibility is read-only or read-write.
-   **custom\_attribute\_description** (`string`, optional) Provide a detailed seller-oriented description for the custom attribute definition. Required if visibility is ‘READ\_ONLY’ or ‘READ\_WRITE\_VALUES’.
-   **custom\_attribute\_schema** (`json`, optional) The JSON schema defining the data type of the custom attribute. Required when creating a definition.
-   **custom\_attribute\_visibility** (`string`, optional) Specifies who can read and write the custom attribute values. Options are: ‘VISIBILITY\_HIDDEN’, ‘VISIBILITY\_READ\_ONLY’, ‘VISIBILITY\_READ\_WRITE\_VALUES’.
-   **unique\_request\_id** (`string`, optional) A unique identifier for this request to ensure idempotency. Use a UUID or similar unique string.
-   **updated\_timestamp** (`string`, optional) The timestamp in RFC 3339 format indicating when the custom attribute definition was last updated or created.

## SquareupApi.DeleteOrderCustomAttributeDefinition



Delete a custom attribute definition from an order.

**Parameters**

-   **custom\_attribute\_key** (`string`, required) The key of the custom attribute definition to delete from an order.

## SquareupApi.RetrieveOrderCustomAttributeDefinition



Retrieve a custom attribute definition for an order.

**Parameters**

-   **custom\_attribute\_key** (`string`, required) The key of the custom attribute definition you want to retrieve. This should match the key set in Square seller account.
-   **current\_custom\_attribute\_version** (`integer`, optional) Specify the current version of the custom attribute for optimistic concurrency control.

## SquareupApi.UpdateOrderCustomAttributeDefinition



Modify order-related custom attribute definitions.

**Parameters**

-   **custom\_attribute\_key** (`string`, required) The key for the custom attribute definition to update. Must be unique per application, seller, and resource type.
-   **creation\_timestamp** (`string`, optional) The timestamp indicating when the custom attribute definition was created, in RFC 3339 format. This field is read-only and used for informational purposes.
-   **current\_version\_of\_custom\_attribute\_definition** (`integer`, optional) The current version of the custom attribute definition. Provide this to enable optimistic concurrency.
-   **custom\_attribute\_definition\_key** (`string`, optional) The identifier of the custom attribute definition. Can be a simple or qualified key. Must be unique per application, seller, and resource type.
-   **custom\_attribute\_description** (`string`, optional) Description for the custom attribute definition, viewable as a Square UI tooltip. Required if visibility is READ\_ONLY or READ\_WRITE\_VALUES.
-   **custom\_attribute\_name** (`string`, optional) The unique name for the custom attribute definition within the seller and application pair. Required if visibility is `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`.
-   **custom\_attribute\_schema** (`json`, optional) Provide the JSON schema for the custom attribute definition, determining the data type of associated attributes. This is mandatory when creating a definition.
-   **custom\_attribute\_updated\_timestamp** (`string`, optional) The timestamp in RFC 3339 format showing when the custom attribute definition was created or last updated.
-   **custom\_attribute\_visibility** (`string`, optional) Sets the visibility level for the custom attribute definition. Options: ‘VISIBILITY\_HIDDEN’, ‘VISIBILITY\_READ\_ONLY’, ‘VISIBILITY\_READ\_WRITE\_VALUES’.
-   **idempotency\_identifier** (`string`, optional) A unique string identifier for the request to ensure idempotency. Refer to Square’s idempotency guidelines for more details.

## SquareupApi.BulkDeleteOrderCustomAttributes



Perform bulk deletion of custom attributes from orders.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## SquareupApi.BulkUpsertOrderCustomAttributes



Perform bulk create or update of order custom attributes.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## SquareupApi.SearchSquareOrders



Search and retrieve orders from Square locations.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## SquareupApi.RetrieveOrderById



Retrieve an order’s details using its ID.

**Parameters**

-   **order\_id** (`string`, required) The unique identifier of the order to retrieve from the Square API.

## SquareupApi.UpdateOrderSquare



Update fields of an open Square order.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **order\_id** (`string`, optional) The unique identifier for the order that needs to be updated. This ID specifies which order will have its fields modified. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## SquareupApi.ListOrderCustomAttributes



Retrieve custom attributes associated with an order.

**Parameters**

-   **target\_order\_id** (`string`, required) The unique identifier of the target order to retrieve custom attributes for.
-   **custom\_attributes\_visibility** (`string`, optional) Specify which custom attributes to return: ‘ALL’, ‘READ’, or ‘READ\_WRITE’.
-   **include\_custom\_attribute\_definitions** (`boolean`, optional) Set to true to include custom attribute definition details such as name, description, and data type. Defaults to false.
-   **max\_results\_per\_page** (`integer`, optional) Specifies the maximum number of custom attribute results returned per page. Accepts values from 1 to 100, default is 20.
-   **pagination\_cursor** (`string`, optional) The cursor used to retrieve the next page of results in a paginated response.

## SquareupApi.DeleteOrderCustomAttribute



Delete a custom attribute from an order profile.

**Parameters**

-   **custom\_attribute\_key** (`string`, required) The key of the custom attribute to delete. Must match an existing custom attribute definition key.
-   **order\_id** (`string`, required) The unique identifier of the order from which the custom attribute will be deleted.

## SquareupApi.RetrieveOrderCustomAttribute



Retrieve a custom attribute for a specified order.

**Parameters**

-   **custom\_attribute\_key** (`string`, required) The key for the custom attribute to retrieve, matching an existing attribute definition key.
-   **order\_id** (`string`, required) The unique ID of the target order to retrieve the custom attribute for.
-   **custom\_attribute\_version** (`integer`, optional) Specify the current version of the custom attribute for optimistic concurrency control.
-   **include\_custom\_attribute\_definition** (`boolean`, optional) Set to true to include custom attribute definition details such as name, description, and data type. Defaults to false.

## SquareupApi.UpdateOrderCustomAttribute



Create or update a custom attribute for an order.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **order\_id** (`string`, optional) The ID of the target order for which the custom attribute is being created or updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **custom\_attribute\_key** (`string`, optional) The key of the custom attribute to be created or updated. Must match an existing custom attribute definition key. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## SquareupApi.PayOrder



Settle an order using approved payments.

**Parameters**

-   **order\_id** (`string`, required) The unique identifier of the order to be paid.
-   **unique\_transaction\_identifier** (`string`, required) A unique string to identify the request and ensure the prevention of duplicate payments. Reuse the same key for retrying the same request.
-   **order\_version** (`integer`, optional) Specify the version of the order to be paid. Defaults to latest if not provided.
-   **payment\_ids\_to\_collect** (`array[string]`, optional) Array of payment IDs to collect; total must match the order total.

## SquareupApi.RetrievePaymentsList



Retrieve a list of payments from your account.

**Parameters**

-   **card\_last\_four\_digits** (`string`, optional) Filter payments by the last four digits of the payment card used.
-   **end\_time** (`string`, optional) End of the time range for retrieving payments, in RFC 3339 format. Defaults to the current time.
-   **end\_time\_updated\_for\_payments** (`string`, optional) The end time for retrieving payments, in RFC 3339 format, based on `updated_at`.
-   **is\_offline\_payment** (`boolean`, optional) Set to true to include offline payments, or false to exclude them.
-   **max\_results\_per\_page** (`integer`, optional) The maximum number of payment results to return per page (up to 100). Defaults to 100 if more is specified.
-   **offline\_end\_time** (`string`, optional) The end time in RFC 3339 format for retrieving offline payments, based on the `offline_payment_details.client_created_at` field. Default is the current time.
-   **offline\_payment\_start\_time** (`string`, optional) Start of the time range for retrieving offline payments in RFC 3339 format. Uses ‘offline\_payment\_details.client\_created\_at’.
-   **pagination\_cursor** (`string`, optional) A pagination cursor for fetching the next set of payment results from the ListPayments endpoint.
-   **payment\_card\_brand** (`string`, optional) The brand of the payment card to filter payments (e.g., VISA, MasterCard).
-   **results\_sort\_order** (`string`, optional) Specify the order of the results: `ASC` for oldest to newest, `DESC` for newest to oldest (default).
-   **sort\_by\_field** (`string`, optional) Choose the field to sort results by. Options: `CREATED_AT`, `OFFLINE_CREATED_AT`, `UPDATED_AT`. Default is `CREATED_AT`.
-   **specific\_location\_id** (`string`, optional) Limit results to the specified location ID. Defaults to the main location associated with the seller.
-   **start\_time\_range** (`string`, optional) Start time to retrieve payments, in RFC 3339 format. Defaults to one year ago if not specified.
-   **total\_payment\_amount** (`integer`, optional) The exact amount in the total\_money field for a payment. Use an integer to specify the amount in cents.
-   **updated\_at\_start\_time** (`string`, optional) Start of the time range for retrieving payments based on the `updated_at` field, in RFC 3339 format.

## SquareupApi.CreatePayment



Create a payment using credit/debit card or other sources.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## SquareupApi.CancelPaymentByIdempotency



Cancel a payment by idempotency key when status is unknown.

**Parameters**

-   **payment\_idempotency\_key** (`string`, required) The idempotency key used to identify the payment to cancel. It should match the key used in the original CreatePayment request.

## SquareupApi.GetPaymentDetails



Retrieve detailed information about a specific payment.

**Parameters**

-   **payment\_id** (`string`, required) Unique ID to retrieve specific payment details.

## SquareupApi.UpdatePaymentStatus



Update a payment’s approved status and details.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **payment\_identifier** (`string`, optional) The unique ID of the payment you want to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## SquareupApi.CancelPayment



Cancel or void an approved payment.

**Parameters**

-   **payment\_id\_to\_cancel** (`string`, required) The unique identifier of the payment to be canceled. Must have an APPROVED status.

## SquareupApi.CompletePayment



Complete an approved payment using Squareup.

**Parameters**

-   **payment\_identifier** (`string`, required) The unique ID identifying the payment to be completed. This is required for completing a payment with an ‘APPROVED’ status.
-   **current\_payment\_version\_token** (`string`, optional) The token identifying the current Payment version for optimistic concurrency. It ensures the Payment version matches the caller’s expectations to prevent mismatches.

## SquareupApi.ListPayouts



Retrieve a list of payouts for the default location.

**Parameters**

-   **begin\_timestamp** (`string`, optional) The starting timestamp for the payout creation time, in RFC 3339 format. Defaults to one year ago if not provided.
-   **end\_time\_rfc3339** (`string`, optional) RFC 3339 timestamp marking the end of the payout creation time. Defaults to current time if not specified.
-   **filter\_payout\_status** (`string`, optional) If provided, only payouts with the specified status (‘SENT’, ‘FAILED’, ‘PAID’) are returned.
-   **location\_identifier** (`string`, optional) The ID of the location for which to list the payouts. Defaults to the main location associated with the seller if not specified.
-   **pagination\_cursor** (`string`, optional) A cursor for pagination, returned by a previous call. Use it to retrieve the next set of results. Be aware of changes in request parameters between calls.
-   **payout\_sort\_order** (`string`, optional) Specifies the order for listing payouts. Use ‘DESC’ for descending or ‘ASC’ for ascending order.
-   **results\_per\_page** (`integer`, optional) Maximum number of results per page. Defaults to 100 and cannot exceed 100.

## SquareupApi.GetPayoutDetails



Retrieve details of a specific payout using payout ID.

**Parameters**

-   **payout\_id** (`string`, required) The unique identifier of the payout to retrieve details for. This ID is required to fetch the specific payout information.

## SquareupApi.ListPayoutEntries



Retrieve all payout entries for a specific payout.

**Parameters**

-   **payout\_id** (`string`, required) The unique string identifier for the specific payout to retrieve information for.
-   **maximum\_results\_per\_page** (`integer`, optional) Specifies the maximum number of results to return on a single page (max 100). Default is 100.
-   **pagination\_cursor** (`string`, optional) A cursor to retrieve the next set of results in a paginated response. Use a cursor from a previous response for continuity.
-   **payout\_entries\_sort\_order** (`string`, optional) Specify the order (ASC or DESC) in which payout entries are listed.

## SquareupApi.ListPaymentRefunds



Retrieve a list of payment refunds for the account.

**Parameters**

-   **end\_time\_rfc3339** (`string`, optional) Specifies the end time in RFC 3339 format to retrieve `PaymentRefunds` based on `created_at`. Defaults to the current time.
-   **limit\_results\_to\_location\_id** (`string`, optional) Limit results to refunds from the specified location. By default, returns all locations.
-   **maximum\_results\_per\_page** (`integer`, optional) Specifies the max number of refund results per page. Max value is 100; defaults to 100.
-   **pagination\_cursor** (`string`, optional) A pagination cursor from a previous response to fetch the next set of results.
-   **refund\_status\_filter** (`string`, optional) Specify a refund status to filter the results. If omitted, refunds of all statuses are returned.
-   **refunds\_start\_time** (`string`, optional) The start time in RFC 3339 format to retrieve PaymentRefunds based on the created\_at field. Default is the current time minus one year.
-   **results\_sort\_order** (`string`, optional) The order in which results are listed by their creation date: `ASC` for oldest to newest, `DESC` for newest to oldest (default).
-   **sort\_results\_by\_field** (`string`, optional) The field used to sort payment refund results. Options: ‘CREATED\_AT’ (default) or ‘UPDATED\_AT’.
-   **source\_payment\_type** (`string`, optional) Specify to only return refunds for payments with the indicated source type (e.g., CARD, BANK\_ACCOUNT).
-   **updated\_at\_end\_time** (`string`, optional) The end of the time range for retrieving refunds, in RFC 3339 format. Default is the current time.
-   **updated\_at\_start\_time** (`string`, optional) Start of time range for retrieving each PaymentRefund, in RFC 3339 format. Defaults to begin\_time if omitted.

## SquareupApi.RefundPayment



Refund a payment partially or fully using Square.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## SquareupApi.RetrieveRefundDetails



Retrieve details of a specific refund using the refund ID.

**Parameters**

-   **refund\_unique\_id** (`string`, required) The unique ID for the specific refund to retrieve details for.

## SquareupApi.ListSquareOnlineSites



List all Square Online sites for a seller.

**Parameters**

This tool does not take any parameters.

## SquareupApi.DeleteSquareSnippet



Delete a snippet from a Square Online site.

**Parameters**

-   **site\_id** (`string`, required) The ID of the Square Online site containing the snippet to be deleted.

## SquareupApi.RetrieveOnlineSiteSnippet



Retrieve a specific snippet from a Square Online site.

**Parameters**

-   **site\_identifier** (`string`, required) The unique ID of the Square Online site containing the snippet to retrieve.

## SquareupApi.AddOrUpdateSquareOnlineSnippet



Add or update a snippet on a Square Online site.

**Parameters**

-   **site\_id\_for\_snippet** (`string`, required) The ID of the site where you want to add or update the snippet. Obtained through ListSites function.
-   **snippet\_code\_content** (`string`, required) The code snippet to add or update, which can include valid HTML, JavaScript, or both. This will be appended to the head element of all site pages except checkout pages.
-   **snippet\_id** (`string`, optional) The Square-assigned ID for the snippet to add or update.
-   **snippet\_initial\_creation\_timestamp** (`string`, optional) The timestamp indicating when the snippet was initially added to the site, in RFC 3339 format.
-   **snippet\_last\_updated\_timestamp** (`string`, optional) The timestamp for when the snippet was last updated on the site, in RFC 3339 format.
-   **snippet\_site\_id** (`string`, optional) The ID of the site that contains the snippet to be updated or added.

## SquareupApi.CreateCustomerSubscription



Enroll a customer in a subscription plan.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## SquareupApi.BulkSwapSubscriptionPlan



Schedule a plan variation swap for multiple subscriptions.

**Parameters**

-   **location\_id\_association** (`string`, required) The ID of the location to associate with the swapped subscriptions. This specifies where the subscription changes are applied.
-   **new\_plan\_variation\_id** (`string`, required) The ID of the new subscription plan variation for the swap. This field is required.
-   **old\_plan\_variation\_id** (`string`, required) The ID of the current plan variation to swap. Active subscriptions using this plan will switch to the new variation on their next billing day.

## SquareupApi.SearchSubscriptions



Search for subscriptions by location and customer IDs.

**Parameters**

-   **customer\_ids\_to\_filter** (`array[string]`, optional) A list of customer IDs to filter subscriptions by. Leave empty to include all customers.
-   **filter\_by\_location\_ids** (`array[string]`, optional) An array of location IDs to filter subscriptions by location.
-   **filter\_by\_source\_applications** (`array[string]`, optional) A list of source application names to filter subscriptions by.
-   **include\_related\_info** (`array[string]`, optional) Specify related information to include in the response, such as ‘actions’ for scheduled actions on subscriptions.
-   **max\_subscriptions\_returned** (`integer`, optional) Defines the maximum number of subscriptions to return in a single response.
-   **pagination\_cursor** (`string`, optional) Cursor for fetching the next set of subscription results if previous results exceeded the limit. If not set, returns the last page of results.

## SquareupApi.RetrieveSubscriptionDetails



Retrieve details of a specific subscription using its ID.

**Parameters**

-   **subscription\_id** (`string`, required) The unique ID of the subscription to retrieve details for. Necessary to specify which subscription to access.
-   **include\_related\_info** (`string`, optional) Specify related info to include in the response. Use ‘actions’ to include scheduled actions on the subscription.

## SquareupApi.UpdateSubscription



Update subscription details with new or cleared values.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **subscription\_id** (`string`, optional) The unique identifier of the subscription you want to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## SquareupApi.DeleteSubscriptionAction



Delete a scheduled action for a subscription.

**Parameters**

-   **subscription\_id** (`string`, required) The ID of the subscription for which the action is to be deleted. Provide the correct subscription ID to ensure accurate targeting.
-   **targeted\_action\_id** (`string`, required) The ID of the specific action to be deleted from the subscription.

## SquareupApi.ChangeBillingAnchorDate



Change the billing anchor date for a subscription.

**Parameters**

-   **subscription\_id** (`string`, required) The ID of the subscription for which the billing anchor date will be updated.
-   **billing\_anchor\_day** (`integer`, optional) The day (1-31) of the month to set as the billing anchor for the cycle.
-   **scheduled\_billing\_anchor\_change\_date** (`string`, optional) The `YYYY-MM-DD`\-formatted date when the `BILLING_ANCHOR_CHANGE` action occurs. If unspecified or within current billing cycle, change is immediate.

## SquareupApi.CancelSubscription



Cancel an active subscription at the end of the billing period.

**Parameters**

-   **subscription\_id** (`string`, required) The unique ID of the subscription to be canceled. Required for scheduling the cancellation action.

## SquareupApi.ListSubscriptionEvents



Retrieve all events for a specific subscription.

**Parameters**

-   **subscription\_id** (`string`, required) The unique identifier for the subscription whose events are to be retrieved.
-   **event\_limit** (`integer`, optional) The maximum number of subscription events to retrieve in the response.
-   **pagination\_cursor** (`string`, optional) Specify the cursor from a previous response to fetch the next page of subscription events. Leave unset to get the last page.

## SquareupApi.PauseSubscription



Schedule a pause for an active subscription.

**Parameters**

-   **subscription\_id** (`string`, required) The unique ID of the subscription you want to pause.
-   **pause\_cycle\_count** (`integer`, optional) Specify the number of billing cycles to pause the subscription. A ‘RESUME’ action will be scheduled at the end of this period. Do not set ‘resume\_effective\_date’ or ‘resume\_change\_timing’ if this is used.
-   **pause\_effective\_date** (`string`, optional) The `YYYY-MM-DD`\-formatted date when the scheduled `PAUSE` action occurs. If unspecified or within the current billing cycle, the subscription pauses at the start of the next cycle.
-   **pause\_reason** (`string`, optional) The reason provided by the user for pausing the subscription. It should convey the rationale behind the pause action.
-   **reactivation\_date** (`string`, optional) The date (YYYY-MM-DD) when the subscription is reactivated by a scheduled `RESUME` action. Must be at least one billing cycle after `pause_effective_date`.
-   **resume\_change\_timing** (`string`, optional) Specifies when the subscription resume action takes place. Options are ‘IMMEDIATE’ or ‘END\_OF\_BILLING\_CYCLE’.

## SquareupApi.ResumeSubscription



Resume a paused or deactivated subscription.

**Parameters**

-   **subscription\_id** (`string`, required) The ID of the subscription to resume. Provide a valid subscription ID string.
-   **resume\_change\_timing** (`string`, optional) Specify when the pending change to resume the subscription takes effect. Choose between ‘IMMEDIATE’ or ‘END\_OF\_BILLING\_CYCLE’.
-   **subscription\_resume\_effective\_date** (`string`, optional) The `YYYY-MM-DD`\-formatted date when the subscription is reactivated.

## SquareupApi.SwapSubscriptionPlan



Swap a subscription plan variation for an existing subscription.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **subscription\_id** (`string`, optional) The ID of the subscription to swap the plan for. This is required to identify which subscription will have its plan changed. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## SquareupApi.CreateTeamMember



Create a new team member with given and family names.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## SquareupApi.BulkCreateTeamMembers



Create multiple team members in bulk.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## SquareupApi.BulkUpdateTeamMembers



Update multiple team members in bulk.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## SquareupApi.ListJobs



Retrieve jobs from a seller’s account, sorted by title.

**Parameters**

-   **pagination\_cursor** (`string`, optional) The pagination cursor for retrieving the next page of results. Use the cursor from the previous call to continue fetching.

## SquareupApi.CreateJobInSellerAccount



Create a job for a seller account.

**Parameters**

-   **unique\_creation\_request\_id** (`string`, required) A unique string to identify the `CreateJob` request, ensuring it is not processed multiple times.
-   **is\_tip\_eligible** (`boolean`, optional) Indicates whether team members can earn tips for the job. Accepts a boolean value.
-   **job\_creation\_timestamp** (`string`, optional) The timestamp for when the job was created, in RFC 3339 format.
-   **job\_id** (`string`, optional) Unique Square-assigned job ID. This is read-only and used internally by Square.
-   **job\_last\_updated\_timestamp** (`string`, optional) The timestamp indicating when the job was last updated, in RFC 3339 format.
-   **job\_title** (`string`, optional) The title of the job to be created in the seller’s account.
-   **job\_version\_readonly** (`integer`, optional) Read-only field for the current version of the job, used for optimistic concurrency in `UpdateJob` requests.

## SquareupApi.RetrieveJobDetails



Retrieve details of a specified job.

**Parameters**

-   **job\_identifier** (`string`, required) The unique string ID of the job to retrieve details for.

## SquareupApi.UpdateJobDetails



Update job title or tip eligibility in the system.

**Parameters**

-   **job\_id\_to\_update** (`string`, required) The unique ID of the job to update. This specifies which job’s title or tip eligibility you want to modify.
-   **enable\_tips\_for\_job** (`boolean`, optional) Set to true to allow team members to earn tips for the job, false to prevent them.
-   **job\_creation\_timestamp** (`string`, optional) The timestamp representing when the job was created, formatted in RFC 3339.
-   **job\_id** (`string`, optional) The unique Square-assigned ID of the job. Obtainable via ListJobs API or from team member wage settings.
-   **job\_last\_updated\_timestamp** (`string`, optional) The timestamp when the job was last updated, in RFC 3339 format. Used for optimistic concurrency control.
-   **job\_title** (`string`, optional) The new title of the job to update.
-   **job\_version\_for\_concurrency** (`integer`, optional) The current version of the job for optimistic concurrency control. Must match the server version to proceed with updates.

## SquareupApi.SearchTeamMembers



Retrieve a filtered list of team members for a business.

**Parameters**

-   **filter\_by\_location\_ids** (`array[string]`, optional) Filter team members by specified location IDs. If empty, includes all locations.
-   **maximum\_team\_members\_per\_page** (`integer`, optional) Specify the maximum number of team members to return per page, default is 100.
-   **pagination\_cursor** (`string`, optional) The cursor used to retrieve the next page of results in a paginated list.
-   **return\_account\_owner\_only** (`boolean`, optional) Set to true to return only the team member who is the Square account owner.
-   **team\_member\_status** (`string`, optional) Filter team members by their status: ‘ACTIVE’ or ‘INACTIVE’.

## SquareupApi.GetTeamMemberDetails



Retrieve details for a specific team member by ID.

**Parameters**

-   **team\_member\_id** (`string`, required) The unique identifier for the team member to retrieve their details from Squareup.

## SquareupApi.UpdateTeamMember



Updates a single TeamMember object.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **team\_member\_id** (`string`, optional) The unique identifier of the team member to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## SquareupApi.RetrieveTeamMemberWageSetting



Retrieve wage settings for a specified team member.

**Parameters**

-   **team\_member\_id** (`string`, required) The unique identifier for the team member whose wage setting needs to be retrieved.

## SquareupApi.UpdateWageSetting



Create or update a team member’s wage setting.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **team\_member\_id** (`string`, optional) The unique ID of the team member whose WageSetting will be updated or created. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## SquareupApi.CreateTerminalAction



Create and send a terminal action request to a device.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## SquareupApi.SearchTerminalActions



Retrieve a filtered list of terminal action requests.

**Parameters**

-   **device\_id\_filter** (`string`, optional) Filter TerminalActions by a specific device ID. Leave blank to include all devices.
-   **end\_time\_rfc3339** (`string`, optional) A datetime in RFC 3339 format indicating the end of the time range.
-   **filter\_terminal\_action\_status** (`string`, optional) Filter results by the status of the TerminalAction (e.g., `PENDING`, `IN_PROGRESS`, `CANCEL_REQUESTED`, `CANCELED`, `COMPLETED`).
-   **pagination\_cursor** (`string`, optional) A pagination cursor from a previous response to retrieve the next set of results.
-   **result\_limit** (`integer`, optional) Limit the number of results returned for a single request.
-   **result\_sort\_order** (`string`, optional) Defines the order (‘DESC’ or ‘ASC’) for sorting the terminal action requests.
-   **start\_time\_rfc3339** (`string`, optional) The start datetime in RFC 3339 format for filtering terminal actions.
-   **terminal\_action\_type** (`string`, optional) Specify the type of terminal action, such as ‘QR\_CODE’, ‘PING’, etc. This helps filter actions by their purpose.

## SquareupApi.RetrieveTerminalAction



Retrieve a Terminal action request by action ID.

**Parameters**

-   **terminal\_action\_id** (`string`, required) Unique ID for the desired Terminal Action. This is required to retrieve the specific action request.

## SquareupApi.CancelTerminalAction



Cancel a terminal action request if possible.

**Parameters**

-   **terminal\_action\_id** (`string`, required) Unique ID for the `TerminalAction` you want to cancel. This ID helps target the specific action to abort.

## SquareupApi.DismissTerminalAction



Dismiss a Terminal action request if permitted.

**Parameters**

-   **terminal\_action\_id** (`string`, required) Unique ID for the TerminalAction to be dismissed.

## SquareupApi.CreateTerminalCheckout



Create a Terminal checkout request for payment.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## SquareupApi.SearchTerminalCheckouts



Retrieve filtered Terminal checkout requests for the merchant.

**Parameters**

-   **checkout\_status\_filter** (`string`, optional) Specify the desired status to filter TerminalCheckout results. Options: PENDING, IN\_PROGRESS, CANCEL\_REQUESTED, CANCELED, COMPLETED.
-   **device\_id\_filter** (`string`, optional) Filters TerminalCheckout objects associated with a specific device. Omitting this shows checkouts for all devices.
-   **end\_time\_rfc3339** (`string`, optional) A datetime in RFC 3339 format indicating when the time range ends.
-   **pagination\_cursor** (`string`, optional) A pagination cursor from a previous call, used to fetch the next set of results for the same query. Useful for traversing paginated results.
-   **result\_limit** (`integer`, optional) Maximum number of results to return in a single request.
-   **result\_sort\_order** (`string`, optional) Specifies the order (DESC or ASC) for results in a request, such as chronological or alphabetical.
-   **start\_time\_range** (`string`, optional) The start datetime for the TerminalCheckout search in RFC 3339 format.

## SquareupApi.RetrieveTerminalCheckout



Retrieve a Terminal checkout request by checkout ID.

**Parameters**

-   **checkout\_id** (`string`, required) The unique ID for the desired TerminalCheckout request. Use this ID to retrieve specific checkout details.

## SquareupApi.CancelTerminalCheckout



Cancel a terminal checkout request if possible.

**Parameters**

-   **terminal\_checkout\_id** (`string`, required) The unique ID for the desired TerminalCheckout to be canceled.

## SquareupApi.DismissTerminalCheckout



Dismiss a Terminal checkout request.

**Parameters**

-   **terminal\_checkout\_id** (`string`, required) Unique ID for the `TerminalCheckout` to be dismissed.

## SquareupApi.CreateTerminalRefund



Creates a refund request for Interac payments on Square Terminal.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## SquareupApi.SearchTerminalRefunds



Retrieve a filtered list of Interac Terminal refund requests.

**Parameters**

-   **device\_id\_filter** (`string`, optional) `TerminalRefund` objects associated with a specific device. If not provided, all refunds for the account are displayed.
-   **end\_time\_range** (`string`, optional) A datetime value in RFC 3339 format indicating the end of the time range for filtering terminal refund requests.
-   **filter\_terminal\_refund\_status** (`string`, optional) Filter terminal refunds by status. Options: `PENDING`, `IN_PROGRESS`, `CANCEL_REQUESTED`, `CANCELED`, or `COMPLETED`.
-   **pagination\_cursor** (`string`, optional) A cursor to paginate results, used to retrieve the next set from a previous query.
-   **result\_limit** (`integer`, optional) Specifies the maximum number of refund results to retrieve in a single request.
-   **sort\_order** (`string`, optional) The order in which terminal refund results are listed. Use ‘ASC’ for oldest to newest or ‘DESC’ for newest to oldest (default).
-   **start\_datetime** (`string`, optional) A datetime in RFC 3339 format. Indicates when the time range starts for filtering terminal refunds.

## SquareupApi.GetTerminalRefund



Retrieve details of an Interac Terminal refund by ID.

**Parameters**

-   **terminal\_refund\_id** (`string`, required) The unique ID for the desired TerminalRefund. Use this ID to retrieve specific refund details available for 30 days.

## SquareupApi.CancelTerminalRefund



Cancel a terminal refund request by its ID.

**Parameters**

-   **refund\_request\_id** (`string`, required) The unique ID of the terminal refund request to cancel.

## SquareupApi.DismissTerminalRefund



Dismiss a Terminal refund request.

**Parameters**

-   **terminal\_refund\_unique\_id** (`string`, required) Unique ID for the TerminalRefund associated with the refund to be dismissed.

## SquareupApi.CreateTransferOrder



Create a draft transfer order between locations.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## SquareupApi.SearchTransferOrders



Search for transfer orders using specific filters.

**Parameters**

-   **destination\_location\_ids** (`array[string]`, optional) Array of destination location IDs to filter transfer orders.
-   **filter\_by\_order\_statuses** (`array[string]`, optional) Filter transfer orders by their statuses. Accepts an array of status strings. Refer to TransferOrderStatus for valid values.
-   **maximum\_results** (`integer`, optional) Specify the maximum number of results to return, from 1 to 100.
-   **pagination\_cursor** (`string`, optional) A string token to continue a search from a previous position, enabling pagination through results.
-   **sort\_by\_field** (`string`, optional) Specify the field to sort transfer orders. Options: CREATED\_AT, UPDATED\_AT.
-   **sort\_order** (`string`, optional) Specify the order (‘DESC’ or ‘ASC’) in which results are returned. ‘DESC’ for descending and ‘ASC’ for ascending.
-   **source\_location\_ids** (`array[string]`, optional) Array of source location IDs to filter transfer orders by their source location.

## SquareupApi.DeleteDraftTransferOrder



Delete a draft transfer order and trigger webhook event.

**Parameters**

-   **transfer\_order\_id** (`string`, required) The ID of the transfer order in DRAFT status to delete. Only draft orders are eligible.
-   **optimistic\_concurrency\_version** (`integer`, optional) Version number used for optimistic concurrency control to ensure data consistency when deleting a draft transfer order.

## SquareupApi.RetrieveTransferOrderDetails



Retrieve detailed information of a specific transfer order.

**Parameters**

-   **transfer\_order\_id** (`string`, required) The ID of the transfer order to retrieve, required to get order details.

## SquareupApi.UpdateTransferOrder



Update specific fields of a transfer order.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **transfer\_order\_identifier** (`string`, optional) The unique identifier of the transfer order to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## SquareupApi.CancelTransferOrder



Cancel a transfer order in progress for inventory locations.

**Parameters**

-   **transfer\_order\_id** (`string`, required) The ID of the transfer order to cancel. The order must be in STARTED or PARTIALLY\_RECEIVED status.
-   **unique\_request\_key** (`string`, required) A unique string to identify this request. Must be unique for each UpdateTransferOrder request.
-   **transfer\_order\_version** (`integer`, optional) Provide the version number for optimistic concurrency when canceling the transfer order.

## SquareupApi.RecordTransferOrderReceipt



Record received items for a transfer order.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **transfer\_order\_id** (`string`, optional) The ID of the transfer order for which items are being received. This ID is required to process the receipt of items, including partial and damaged quantities, and update inventory accordingly. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## SquareupApi.StartTransferOrder



Start a transfer order to mark it as in-transit.

**Parameters**

-   **transfer\_order\_id** (`string`, required) The ID of the transfer order to start. Must be in DRAFT status.
-   **unique\_request\_identifier** (`string`, required) A unique string to identify each UpdateTransferOrder request, ensuring it is not repeated for any request.
-   **optimistic\_concurrency\_version** (`integer`, optional) Specify the version number for optimistic concurrency control. Ensure the version is current to avoid conflicts.

## SquareupApi.BulkCreateVendors



Create multiple vendor profiles for suppliers.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## SquareupApi.RetrieveVendors



Retrieve detailed information about specific vendors.

**Parameters**

-   **vendor\_ids** (`array[string]`, optional) List of vendor IDs to retrieve details for. Provide the IDs as an array of strings.

## SquareupApi.BulkUpdateVendors



Update multiple vendor records simultaneously.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## SquareupApi.CreateVendor



Create a vendor for a supplier to a seller.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## SquareupApi.SearchVendors



Search for vendors using filters and sorters.

**Parameters**

-   **pagination\_cursor** (`string`, optional) A string used to retrieve the next set of results for a previous query. Follow the pagination guide for details.
-   **sort\_field\_for\_vendors** (`string`, optional) Specify the vendor property field to sort the results by. Options include ‘NAME’ or ‘CREATED\_AT’.
-   **sort\_order** (`string`, optional) Specify the order (e.g., chronological or alphabetical) for sorting the results. Options are ‘ASC’ or ‘DESC’.
-   **vendor\_names\_to\_filter** (`array[string]`, optional) Array of vendor names to filter the search results by. Only vendors matching these names will be retrieved.
-   **vendor\_statuses** (`array[string]`, optional) List of vendor statuses to filter the search results. Refer to possible values in VendorStatus.

## SquareupApi.RetrieveVendorDetails



Retrieve detailed information about a vendor by ID.

**Parameters**

-   **vendor\_id** (`string`, required) The unique ID of the vendor to retrieve details for.

## SquareupApi.UpdateVendorInfo



Update an existing vendor’s information.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## SquareupApi.ListWebhookEventTypes



Retrieve all webhook event types available for subscription.

**Parameters**

-   **api\_version\_for\_event\_types** (`string`, optional) Specify the API version to list event types, overriding the default version.

## SquareupApi.ListWebhookSubscriptions



Lists all webhook subscriptions owned by the application.

**Parameters**

-   **include\_disabled\_subscriptions** (`boolean`, optional) If set to true, includes disabled subscriptions in the results. By default, only enabled subscriptions are returned.
-   **maximum\_results\_per\_page** (`integer`, optional) The maximum number of results returned in one page, up to 100.
-   **pagination\_cursor** (`string`, optional) A cursor from a previous call for paginating results. Use it to retrieve the next set of results.
-   **sort\_order** (`string`, optional) Sort returned list by subscription creation date. Options are ‘ASC’ for ascending or ‘DESC’ for descending. Defaults to ‘ASC’.

## SquareupApi.CreateWebhookSubscription



Creates a webhook subscription.

**Parameters**

-   **api\_version** (`string`, optional) Specifies the API version for the webhook subscription. Optional; defaults to the application’s current API version if not provided.
-   **enable\_subscription** (`boolean`, optional) Indicates whether the subscription is enabled (`true`) or not (`false`).
-   **event\_types** (`array[string]`, optional) An array of event types for the subscription, each as a string.
-   **subscription\_created\_at** (`string`, optional) The creation timestamp of the subscription in RFC 3339 format, e.g., “2016-09-04T23:59:33.123Z”.
-   **subscription\_last\_updated\_timestamp** (`string`, optional) The timestamp of when the subscription was last updated, in RFC 3339 format (e.g., ‘2016-09-04T23:59:33.123Z’).
-   **subscription\_name** (`string`, optional) The name for the webhook subscription.
-   **subscription\_signature\_key** (`string`, optional) The Square-generated signature key used to validate the origin of the webhook event.
-   **subscription\_unique\_id** (`string`, optional) A Square-generated unique ID for the webhook subscription.
-   **unique\_request\_identifier** (`string`, optional) A unique string to ensure the idempotence of the CreateWebhookSubscription request, preventing duplicate entries.
-   **webhook\_notification\_url** (`string`, optional) The URL where webhook notifications will be sent. Ensure it is accessible and accurately formatted.

## SquareupApi.DeleteWebhookSubscription



Deletes a specified webhook subscription.

**Parameters**

-   **webhook\_subscription\_id** (`string`, required) The ID of the webhook subscription to delete. This ID is required to specify which subscription needs to be removed.

## SquareupApi.RetrieveWebhookSubscription



Retrieve details of a specific webhook subscription.

**Parameters**

-   **webhook\_subscription\_id** (`string`, required) The unique ID of the webhook subscription to retrieve.

## SquareupApi.UpdateWebhookSubscription



Update a webhook subscription to modify its settings.

**Parameters**

-   **subscription\_id** (`string`, required) The unique ID of the subscription to update. This is required to identify the webhook subscription that needs to be modified.
-   **api\_version\_of\_subscription** (`string`, optional) Specify the API version for the subscription. Optional for creation and defaults to the application’s API version if not provided.
-   **event\_types** (`array[string]`, optional) An array of event types associated with this subscription that trigger the webhook.
-   **signature\_key** (`string`, optional) The Square-generated signature key for validating the webhook origin.
-   **subscription\_created\_timestamp** (`string`, optional) The timestamp indicating when the subscription was created, formatted in RFC 3339.
-   **subscription\_enabled** (`boolean`, optional) Set to `true` to enable the subscription or `false` to disable it.
-   **subscription\_name** (`string`, optional) The new name for the webhook subscription to update.
-   **subscription\_unique\_id** (`string`, optional) A Square-generated unique ID for the webhook subscription to be updated. This is required to identify which subscription to modify.
-   **updated\_at\_timestamp** (`string`, optional) The timestamp of the last update for the subscription, in RFC 3339 format (e.g., “2016-09-04T23:59:33.123Z”).
-   **webhook\_notification\_url** (`string`, optional) The URL to which webhooks are sent. Must be a valid URL that can receive POST requests.

## SquareupApi.UpdateWebhookSignatureKey



Update a webhook subscription’s signature key.

**Parameters**

-   **webhook\_subscription\_id** (`string`, required) The ID of the Webhook Subscription to update. This is a required field.
-   **unique\_request\_identifier** (`string`, optional) A unique string to identify the UpdateWebhookSubscriptionSignatureKey request, ensuring idempotency.

## SquareupApi.TestWebhookSubscription



Send a test event to a webhook subscription URL.

**Parameters**

-   **webhook\_subscription\_id** (`string`, required) The ID of the Webhook Subscription to test. This is required for sending a test event.
-   **test\_event\_type** (`string`, optional) Specifies the event type for testing the webhook subscription. It must match an event type in the subscription’s event list.

## Reference

Below is a reference of enumerations used by some of the tools in the SquareupApi MCP Server:

### ToolMode

-   **GET\_REQUEST\_SCHEMA**: `get_request_schema`
-   **EXECUTE**: `execute`

* * *

## Auth

The Arcade Square MCP Server uses the [Square auth provider](/references/auth-providers/square.md) to connect to users’ Square accounts.

With the Arcade Cloud Platform, there’s nothing to configure. Your users will see `Arcade` as the name of the application that’s requesting permission.

With a self-hosted installation of Arcade, you need to [configure the Square auth provider](/references/auth-providers/square.md#configuring-square-auth) with your own Square app credentials.

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_squareup_api ``` Learn more](/guides/deployment-hosting.md)

Last updated on January 5, 2026

[Sharepoint](/en/resources/integrations/productivity/sharepoint.md)
[TicktickApi](/en/resources/integrations/productivity/ticktick-api.md)
