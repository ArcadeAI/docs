---
title: "StripeApi"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Payments & Finance](/en/resources/integrations/payments/stripe.md)
StripeApi

# StripeApi

Arcade Unoptimized

**Description:** Tools that enable LLMs to interact directly with the Stripe API.

**Author:** Arcade

**Auth:** API Key

[![PyPI Version](https://img.shields.io/pypi/v/arcade_stripe_api)](https://pypi.org/project/arcade_stripe_api/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_stripe_api)](https://pypi.org/project/arcade_stripe_api/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_stripe_api)](https://pypi.org/project/arcade_stripe_api/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_stripe_api)](https://pypi.org/project/arcade_stripe_api/)

StripeApi is a [Unoptimized MCP Server](/guides/create-tools/improve/types-of-tools.md#unoptimized-tools)
: each tool mirrors one HTTP endpoint and offers LLMs a way to interact with the low-level API.



Differently from [Optimized MCP Servers](/guides/create-tools/improve/types-of-tools.md#optimized-tools)
, Unoptimized tools are heavily influenced by the original API design, which is not usually optimized for LLM usage. For this reason, we recommend thoroughly evaluating the tools with your Agents or chatbots before using it in production. [Read more](/guides/create-tools/improve/types-of-tools.md) about Optimized vs Unoptimized tools.

The StripeApi MCP Server provides a comprehensive set of tools for interacting with the low-level Stripe API. These tools let users and agents:

-   Inspect and manage accounts, connected accounts, capabilities, external accounts, and account persons.
-   View and delete customers, payment methods, cards, bank accounts, tax IDs, discounts, coupons, and promotion codes.
-   Create, retrieve, search, and manage charges, refunds, disputes, payment intents, payment links, checkout sessions, and payment-related line items.
-   Access billing, invoices, invoice items, credit notes, application fees/refunds, billing alerts, credit grants, meters, and billing portal configurations.
-   Work with Stripe’s issuing features (cards, cardholders, authorizations, disputes, settlements, tokens) and physical bundles.
-   Query and retrieve Treasury and Financial Connections data: financial accounts, transactions, transfers, inbound/outbound payments, received credits/debits, and account owners.
-   Manage products, prices, plans, subscriptions, subscription items/schedules, quotes, and promotion/feature attachments.
-   Retrieve tax data: tax rates, tax codes, tax registrations, tax calculations, and related line items.
-   Use reporting and Sigma tools: report types, report runs, scheduled query runs, and search endpoints for invoices, subscriptions, products, prices, charges, and customers.
-   Administer Stripe resources: files/file links, webhooks, terminal configurations/locations/readers, Apple Pay domains, Radar value lists, test clocks, tokens, top-ups, payouts, transfers/reversals, and verification/identity sessions and reports.
-   Fetch auxiliary objects: country specs, exchange rates, climate products/orders/suppliers, mandates, source objects/transactions, issuing tokens, and invoice rendering templates.

Ideal for building agents or apps that need programmatic access to nearly every read and management operation across Stripe’s APIs.

## Available Tools

Tool Name

Description

StripeApi.GetStripeAccountDetails

Retrieve details of a Stripe account.

StripeApi.DeleteStripeConnectedAccount

Delete managed accounts via Stripe Connect.

StripeApi.RetrieveAccountDetails

Retrieve details of a specific account.

StripeApi.DeleteExternalBankAccount

Delete an external bank account for a specified account.

StripeApi.GetExternalBankAccountDetails

Retrieve details of a specific external bank account for an account.

StripeApi.GetAccountCapabilities

Retrieve capabilities associated with a Stripe account.

StripeApi.GetAccountCapabilityDetails

Retrieve details of a specific account capability.

StripeApi.ListExternalAccounts

Retrieve external accounts linked to a Stripe account.

StripeApi.DeleteExternalAccount

Delete a specified external account for a given account.

StripeApi.GetStripeExternalAccountDetails

Retrieve details of a specific Stripe external account.

StripeApi.DeleteAccountPersonRelationship

Remove a person's relationship from a Stripe account.

StripeApi.RetrievePersonInformation

Retrieve information about a person in a Stripe account.

StripeApi.DeleteAccountPerson

Delete a person's relationship to an account in Stripe.

StripeApi.RetrievePersonAccountDetails

Retrieve details of a person linked to an account.

StripeApi.ListApplePayDomains

Retrieve a list of Apple Pay domains.

StripeApi.DeleteApplePayDomain

Delete an Apple Pay domain from Stripe.

StripeApi.RetrieveApplePayDomain

Retrieve details of an Apple Pay domain.

StripeApi.RetrieveApplicationFeeRefundDetail

Retrieve details of a specific application fee refund.

StripeApi.RetrieveApplicationFeeDetails

Retrieve details of a specific application fee.

StripeApi.GetApplicationFeeRefunds

Retrieve refunds for a specific application fee.

StripeApi.GetCurrentAccountBalance

Retrieve the current account balance from Stripe.

StripeApi.RetrieveBalanceTransactionById

Retrieve details of a balance transaction by ID.

StripeApi.GetBalanceSettings

Retrieve balance settings for a connected Stripe account.

StripeApi.GetBalanceTransactionById

Retrieve details of a balance transaction by ID.

StripeApi.GetBillingAlerts

Retrieve active and inactive billing alerts.

StripeApi.GetBillingAlert

Retrieve billing alert details by ID.

StripeApi.GetCreditBalanceTransactions

Retrieve a list of credit balance transactions.

StripeApi.GetCreditBalanceTransaction

Retrieve a credit balance transaction by ID.

StripeApi.GetBillingCreditGrants

Retrieve a list of billing credit grants.

StripeApi.RetrieveCreditGrant

Retrieve details of a specific credit grant using its ID.

StripeApi.GetBillingMeters

Retrieve a list of billing meters from Stripe.

StripeApi.RetrieveBillingMeter

Retrieve billing meter details by ID.

StripeApi.GetBillingMeterEventSummaries

Retrieve billing meter event summaries by meter ID.

StripeApi.GetBillingPortalConfigurations

Retrieve customer portal configurations from Stripe.

StripeApi.GetCustomerPortalConfiguration

Retrieve customer portal configuration details.

StripeApi.StripeSearchCharges

Search for previously created charges using Stripe.

StripeApi.RetrieveStripeChargeDetails

Retrieve details of a specific Stripe charge via its unique ID.

StripeApi.GetChargeDisputeDetails

Retrieve details of a dispute for a specific charge.

StripeApi.GetChargeRefunds

Retrieve refunds for a specific charge on Stripe.

StripeApi.RetrieveRefundDetailsByCharge

Fetches details of a refund associated to a specific charge.

StripeApi.RetrieveCheckoutSession

Retrieve a specific Stripe checkout session.

StripeApi.GetCheckoutSessionLineItems

Fetch line items from a Stripe Checkout Session.

StripeApi.ListClimateOrders

Retrieve all Climate order objects from Stripe.

StripeApi.GetClimateOrderDetails

Retrieve details of a specific Climate order.

StripeApi.ListClimateProducts

Retrieve a list of all available Climate products.

StripeApi.RetrieveClimateProductDetails

Retrieve details of a specific Climate product from Stripe.

StripeApi.ListClimateSuppliers

Retrieve a list of all available Climate suppliers.

StripeApi.RetrieveClimateSupplier

Fetches details of a specific Climate supplier.

StripeApi.GetConfirmationTokenInfo

Retrieves details of an existing confirmation token.

StripeApi.RetrieveCountrySpecs

Retrieve all country specification objects from the API.

StripeApi.GetCountrySpecifications

Retrieve country specifications using a country code.

StripeApi.DeleteStripeCoupon

Delete a coupon in Stripe without affecting current users.

StripeApi.GetCouponDetails

Retrieve details of a coupon by its ID.

StripeApi.RetrieveCreditNoteLines

Fetch line items from a specified credit note.

StripeApi.RetrieveCreditNote

Retrieve details of a specific credit note by ID.

StripeApi.SearchStripeCustomers

Search and retrieve customer data from Stripe.

StripeApi.DeleteStripeCustomer

Permanently delete a Stripe customer and cancel subscriptions.

StripeApi.RetrieveCustomerDetails

Retrieve details of a specific customer.

StripeApi.GetCustomerBalanceTransactions

Retrieve a customer's balance transaction updates.

StripeApi.GetCustomerBalanceTransaction

Retrieve a specific customer balance transaction from Stripe.

StripeApi.GetCustomerBankAccounts

Retrieve bank accounts for a specific customer.

StripeApi.GetCustomerBankAccountDetails

Retrieve details of a customer's bank account from Stripe.

StripeApi.GetCustomerCards

Retrieve a list of cards belonging to a customer.

StripeApi.GetCustomerCardDetails

Retrieve details about a specific card for a customer.

StripeApi.GetCustomerCashBalance

Retrieve a customer's cash balance on Stripe.

StripeApi.GetCustomerCashBalanceTransactions

Retrieve transactions modifying a customer's cash balance.

StripeApi.RetrieveCashBalanceTransaction

Retrieve a cash balance transaction for a customer.

StripeApi.RemoveCustomerDiscount

Remove the current discount applied to a customer.

StripeApi.RetrieveCustomerDiscount

Retrieve a customer's discount information.

StripeApi.GetCustomerPaymentMethods

Retrieve payment methods for a specific customer.

StripeApi.GetCustomerPaymentMethod

Retrieve a customer's specific payment method.

StripeApi.ListCustomerPaymentSources

Retrieve payment sources for a specified customer.

StripeApi.RetrieveCustomerPaymentSource

Retrieve a specified source for a given customer.

StripeApi.GetCustomerSubscriptions

Retrieve a customer's active subscriptions.

StripeApi.RetrieveStripeSubscriptionById

Retrieve a Stripe subscription by its ID.

StripeApi.RemoveCustomerSubscriptionDiscount

Removes the discount from a customer's subscription.

StripeApi.GetSubscriptionDiscount

Retrieve discount details for a customer's subscription.

StripeApi.GetCustomerTaxIds

Retrieve a customer's tax IDs from their profile.

StripeApi.DeleteCustomerTaxId

Deletes a customer's existing tax ID.

StripeApi.GetCustomerTaxId

Retrieve a specific customer's tax ID information.

StripeApi.RetrieveDisputeById

Retrieve details of a dispute using its ID.

StripeApi.GetActiveEntitlements

Retrieve active entitlements for a customer from Stripe.

StripeApi.RetrieveActiveEntitlement

Retrieve details of an active entitlement by ID.

StripeApi.GetStripeEntitlementFeatures

Retrieve a list of entitlement features from Stripe.

StripeApi.RetrieveFeatureDetails

Fetches details for a specific feature by ID.

StripeApi.RetrieveStripeEventDetails

Retrieve details of a Stripe event using its unique ID.

StripeApi.GetExchangeRates

Retrieve Stripe's supported foreign currency exchange rates.

StripeApi.GetDeprecatedExchangeRates

Retrieves deprecated exchange rates for a given currency.

StripeApi.RetrieveFileLink

Fetches a file link using its ID.

StripeApi.GetFileDetails

Retrieve details of an existing file object from Stripe.

StripeApi.GetFinancialConnectionsAccountDetails

Retrieve details of a Financial Connections Account.

StripeApi.GetFinancialAccountOwners

Retrieve owners of a specified financial account.

StripeApi.RetrieveFinancialConnectionsSession

Retrieve details of a Financial Connections Session.

StripeApi.GetFinancialTransactionDetails

Retrieve details of a specific financial transaction.

StripeApi.RetrieveForwardingRequest

Fetch a specific ForwardingRequest object using its ID.

StripeApi.RetrieveStripeVerificationReport

Retrieve details of an existing Stripe verification report.

StripeApi.RetrieveVerificationSessionDetails

Retrieve details of a Stripe verification session.

StripeApi.RetrieveInvoicePayment

Fetch the details of a specific invoice payment by ID.

StripeApi.GetInvoiceRenderingTemplates

Retrieve all invoice rendering templates by creation date.

StripeApi.RetrieveInvoiceTemplate

Fetch an invoice rendering template by ID.

StripeApi.DeleteInvoiceItem

Delete an invoice item from a draft or unattached invoice.

StripeApi.GetInvoiceItemDetails

Retrieve details of a specific invoice item by ID.

StripeApi.SearchStripeInvoices

Search for previously created Stripe invoices.

StripeApi.DeleteInvoiceDraft

Permanently delete a draft invoice.

StripeApi.RetrieveInvoiceById

Retrieve details of an invoice using its ID.

StripeApi.GetInvoiceLineItems

Fetch line items from a specific invoice.

StripeApi.RetrieveIssuingAuthorization

Fetches details of an Issuing Authorization object.

StripeApi.RetrieveIssuingCardholder

Retrieve details of an issuing cardholder.

StripeApi.GetIssuingCardDetails

Retrieve details of a specific issuing card.

StripeApi.RetrieveIssuingDispute

Fetch the details of a specific issuing dispute.

StripeApi.RetrievePersonalizationDesign

Retrieve a personalization design object by ID.

StripeApi.GetLatestPhysicalBundles

Retrieve the latest physical bundle objects from Stripe.

StripeApi.RetrievePhysicalBundle

Retrieve details of a physical bundle.

StripeApi.RetrieveIssuingSettlement

Fetch details of an Issuing Settlement object.

StripeApi.GetIssuingTokenInfo

Retrieve details of an Issuing Token.

StripeApi.RetrieveIssuingTransaction

Fetch details of an issuing transaction by ID.

StripeApi.RetrieveFinancialSessionDetails

Retrieve details of a financial connection session.

StripeApi.GetLinkedAccountDetails

Retrieve details of a financial connections account.

StripeApi.GetLinkedAccountOwners

Retrieve owners of a specific linked account.

StripeApi.RetrieveMandateInfo

Retrieve detailed information of a mandate.

StripeApi.SearchStripePaymentIntents

Search previously created Stripe PaymentIntents.

StripeApi.RetrievePaymentIntentDetails

Retrieve details of a specific PaymentIntent using its ID.

StripeApi.GetStripePaymentLinks

Retrieve a list of Stripe payment links.

StripeApi.RetrievePaymentLinkInfo

Retrieve detailed information about a payment link.

StripeApi.GetPaymentLinkLineItems

Retrieve the line items for a specific payment link.

StripeApi.ListPaymentMethodConfigurations

Retrieve available payment method configurations from Stripe.

StripeApi.RetrievePaymentMethodConfiguration

Retrieve a specific payment method configuration.

StripeApi.ListPaymentMethodDomains

Retrieve details of existing payment method domains.

StripeApi.GetPaymentMethodDomainDetails

Retrieve details of a specific payment method domain.

StripeApi.GetTreasuryPaymentMethods

Retrieve a list of PaymentMethods for Treasury flows.

StripeApi.RetrieveStripePaymentMethod

Retrieve details of a specific Stripe payment method.

StripeApi.GetStripePayoutDetails

Retrieve details of a specific Stripe payout.

StripeApi.DeleteStripePlan

Delete a specified plan from Stripe.

StripeApi.RetrieveStripePlan

Retrieve details of a specific Stripe plan by ID.

StripeApi.SearchStripePrices

Search for previously created Stripe prices.

StripeApi.RetrieveStripePrice

Fetches price details using a specific ID from Stripe.

StripeApi.SearchStripeProducts

Search for previously created products on Stripe.

StripeApi.DeleteStripeProduct

Delete a product from Stripe if eligible.

StripeApi.GetProductDetails

Retrieve details of a specific product by ID.

StripeApi.GetProductFeatures

Retrieve features for a specific product.

StripeApi.DeleteProductFeature

Delete a specific feature from a product.

StripeApi.GetProductFeatureDetails

Retrieve details of a feature attached to a product.

StripeApi.GetPromotionCodeDetails

Retrieve details of a specific promotion code.

StripeApi.RetrieveQuotesList

Fetches a list of your available quotes.

StripeApi.RetrieveQuoteById

Fetches quote details using a specified ID.

StripeApi.GetUpfrontQuoteLineItems

Retrieve computed upfront line items from a quote.

StripeApi.GetQuoteLineItems

Fetch line items from a specified quote.

StripeApi.DownloadQuotePdf

Download the PDF for a finalized Stripe quote.

StripeApi.RetrieveEarlyFraudWarningDetails

Retrieve details of an early fraud warning.

StripeApi.RemoveRadarValueListItem

Remove an item from a Stripe Radar value list.

StripeApi.RetrieveValueListItem

Retrieve details of a specific ValueListItem in Stripe Radar.

StripeApi.DeleteStripeValueList

Delete a Stripe Radar ValueList and its items.

StripeApi.RetrieveRadarValuelist

Retrieve details of a specific Radar ValueList.

StripeApi.RetrieveRefundDetails

Retrieve details of an existing refund.

StripeApi.GetReportRunDetails

Retrieve details of an existing report run.

StripeApi.GetStripeReportTypes

Retrieve a comprehensive list of Stripe report types.

StripeApi.GetStripeReportTypeDetails

Retrieve details for a specific Stripe Report Type.

StripeApi.GetReviewDetails

Retrieve details of a specific review on Stripe.

StripeApi.RetrieveSetupIntentDetails

Fetch details of an existing Stripe SetupIntent.

StripeApi.RetrieveShippingRateDetails

Retrieve details of a specific shipping rate using its ID.

StripeApi.GetScheduledQueryRuns

Retrieve a list of scheduled query runs from Stripe.

StripeApi.RetrieveScheduledQueryRunDetails

Fetches details of a Stripe Sigma scheduled query run.

StripeApi.RetrieveStripeSource

Retrieve updated details of a Stripe source object.

StripeApi.RetrieveSourceMandateNotification

Retrieve details of a specific mandate notification.

StripeApi.GetSourceTransactions

Retrieve transactions for a specific source.

StripeApi.GetStripeSourceTransaction

Retrieve a Stripe source transaction by ID.

StripeApi.GetSubscriptionItems

Retrieve subscription items for a subscription.

StripeApi.RetrieveSubscriptionItem

Retrieve details of a specific subscription item.

StripeApi.RetrieveSubscriptionSchedule

Get details of an existing subscription schedule by ID.

StripeApi.SearchStripeSubscriptions

Search previously created Stripe subscriptions.

StripeApi.GetSubscriptionDetails

Retrieve details of a subscription by its ID.

StripeApi.RemoveSubscriptionDiscount

Remove the discount from a subscription.

StripeApi.RetrieveTaxCalculation

Retrieve a specific tax calculation by its ID.

StripeApi.RetrieveTaxCalculationLineItems

Retrieve line items for a Stripe tax calculation.

StripeApi.GetTaxRegistrations

Retrieve a list of tax registration objects from Stripe.

StripeApi.GetTaxRegistrationInfo

Retrieve details of a specific tax registration.

StripeApi.GetTaxSettings

Retrieve merchant tax settings in Stripe.

StripeApi.RetrieveTaxTransaction

Retrieve details of a specific tax transaction.

StripeApi.GetTransactionLineItems

Retrieve line items for a specified transaction.

StripeApi.GetTaxCodesList

Retrieve all available tax codes for products from Stripe.

StripeApi.GetTaxCodeDetails

Retrieve details for a specific tax code by ID.

StripeApi.DeleteTaxId

Delete a tax ID from an account or customer.

StripeApi.RetrieveTaxId

Retrieve an account or customer's tax\_id object.

StripeApi.RetrieveTaxRate

Fetches a tax rate by its ID from Stripe.

StripeApi.GetTerminalConfigurations

Retrieve a list of terminal Configuration objects.

StripeApi.DeleteTerminalConfiguration

Deletes a terminal configuration.

StripeApi.RetrieveTerminalConfiguration

Retrieves a terminal configuration object for Stripe.

StripeApi.GetTerminalLocations

Retrieve a list of terminal location objects from Stripe.

StripeApi.DeleteTerminalLocation

Deletes a specified terminal location in Stripe.

StripeApi.RetrieveTerminalLocation

Fetches details of a terminal location by ID.

StripeApi.GetTerminalReaders

Retrieve a list of terminal reader objects.

StripeApi.DeleteTerminalReader

Delete a terminal reader from the Stripe account.

StripeApi.RetrieveTerminalReader

Retrieve details of a terminal reader.

StripeApi.GetTestClocksList

Retrieve a list of your test clocks from Stripe.

StripeApi.DeleteTestClock

Deletes a test clock in Stripe's test environment.

StripeApi.RetrieveTestClock

Retrieve details of a Stripe test clock.

StripeApi.RetrieveStripeToken

Retrieve details of a Stripe token using its ID.

StripeApi.RetrieveStripeTopupDetails

Retrieve details of a Stripe top-up using its ID.

StripeApi.GetTransferReversals

Retrieve reversals of a specific transfer.

StripeApi.GetTransferDetails

Retrieve details of an existing transfer using its ID.

StripeApi.GetSpecificTransferReversalDetails

Retrieve details about a specific transfer reversal.

StripeApi.GetCreditReversals

Retrieve a list of Credit Reversals from Stripe's Treasury.

StripeApi.GetCreditReversalDetails

Retrieve details of a specific CreditReversal using its ID.

StripeApi.GetDebitReversalsList

Retrieves a list of debit reversals from Stripe.

StripeApi.RetrieveDebitReversal

Retrieve details of a specific debit reversal.

StripeApi.GetFinancialAccountDetails

Retrieve details of a specific financial account.

StripeApi.GetFinancialAccountFeatures

Retrieve features of a financial account.

StripeApi.GetInboundTransfers

Retrieve inbound transfers for a financial account.

StripeApi.RetrieveInboundTransferDetails

Retrieve details of a specific inbound transfer.

StripeApi.RetrieveOutboundPaymentDetails

Retrieve details of an existing OutboundPayment by ID.

StripeApi.GetOutboundTransfers

Retrieve outbound transfers from a financial account.

StripeApi.GetOutboundTransferDetails

Retrieve details of a specific outbound transfer.

StripeApi.GetReceivedCreditDetails

Retrieve details of a specific ReceivedCredit by ID.

StripeApi.GetReceivedDebits

Retrieve a list of received debits from Stripe Treasury.

StripeApi.RetrieveReceivedDebitDetails

Retrieve details of a specific ReceivedDebit by ID.

StripeApi.RetrieveTransactionEntry

Fetches details of a specific treasury transaction entry.

StripeApi.RetrieveTreasuryTransactionDetails

Retrieve details of a specific treasury transaction.

StripeApi.GetStripeWebhookEndpoints

Retrieve a list of your Stripe webhook endpoints.

StripeApi.DeleteStripeWebhookEndpoint

Delete a Stripe webhook endpoint by ID.

StripeApi.RetrieveWebhookEndpoint

Retrieve details of a specified webhook endpoint by ID.

If you need to perform an action that’s not listed here, you can [get in touch with us](mailto:contact@arcade.dev) to request a new tool, or [create your own tools](/guides/create-tools/tool-basics/build-mcp-server.md).

## StripeApi.GetStripeAccountDetails



Retrieve details of a Stripe account.

**Parameters**

-   **expand\_fields** (`array[string]`, optional) A list of fields to specify which fields in the Stripe account response should be expanded.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.DeleteStripeConnectedAccount



Delete managed accounts via Stripe Connect.

**Parameters**

-   **account\_id\_to\_delete** (`string`, required) The unique identifier of the Stripe account to be deleted. Ensure this is a managed account with zero balance.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrieveAccountDetails



Retrieve details of a specific account.

**Parameters**

-   **account\_id** (`string`, required) The unique identifier of the account to retrieve details for.
-   **fields\_to\_expand** (`array[string]`, optional) A list of fields to expand in the response for detailed account information.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.DeleteExternalBankAccount



Delete an external bank account for a specified account.

**Parameters**

-   **account\_identifier** (`string`, required) The account ID from which you want to delete an external bank account.
-   **external\_account\_id** (`string`, required) The unique identifier of the external bank account to be deleted.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetExternalBankAccountDetails



Retrieve details of a specific external bank account for an account.

**Parameters**

-   **account\_id** (`string`, required) The unique identifier for the account associated with the external bank account.
-   **external\_account\_id** (`string`, required) Unique identifier for the external bank account to retrieve its details.
-   **fields\_to\_expand** (`array[string]`, optional) List of fields in the response to expand for additional detail.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetAccountCapabilities



Retrieve capabilities associated with a Stripe account.

**Parameters**

-   **account\_id** (`string`, required) The ID of the Stripe account for which to retrieve capabilities. This is a required field.
-   **fields\_to\_expand** (`array[string]`, optional) A list of fields to expand in the response, specified as strings.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetAccountCapabilityDetails



Retrieve details of a specific account capability.

**Parameters**

-   **account\_id** (`string`, required) The unique identifier for the Stripe account whose capability information is being requested.
-   **account\_capability\_identifier** (`string`, required) A unique identifier string for the specific capability of the account to be retrieved. This is essential to specify which capability’s details you want to fetch from Stripe.
-   **expand\_fields** (`array[string]`, optional) List of fields in the response to expand for detailed information.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.ListExternalAccounts



Retrieve external accounts linked to a Stripe account.

**Parameters**

-   **stripe\_account\_id** (`string`, required) The unique identifier for the Stripe account whose external accounts you want to retrieve.
-   **pagination\_ending\_before** (`string`, optional) A cursor used to define your position in the list for pagination. It specifies the object ID before which the list should end.
-   **expand\_response\_fields** (`array[string]`, optional) A list of fields in the response to expand for detailed information.
-   **max\_results\_per\_page** (`integer`, optional) Specify the number of external accounts to retrieve, ranging from 1 to 100. Default is 10.
-   **filter\_by\_object\_type** (`string`, optional) Specify the type of external accounts to filter: ‘bank\_account’ or ‘card’.
-   **pagination\_starting\_after\_object\_id** (`string`, optional) Object ID for pagination to fetch the next page of results. Use the ID of the last object from the current list.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.DeleteExternalAccount



Delete a specified external account for a given account.

**Parameters**

-   **account\_identifier** (`string`, required) The unique identifier of the account from which the external account will be deleted.
-   **external\_account\_id** (`string`, required) Unique identifier for the external account to be deleted.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetStripeExternalAccountDetails



Retrieve details of a specific Stripe external account.

**Parameters**

-   **stripe\_account\_id** (`string`, required) The unique identifier for the Stripe account containing the external account.
-   **external\_account\_id** (`string`, required) Unique identifier for the external account to be retrieved from Stripe.
-   **fields\_to\_expand** (`array[string]`, optional) List of fields to expand in the response for additional details.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.DeleteAccountPersonRelationship



Remove a person’s relationship from a Stripe account.

**Parameters**

-   **account\_id** (`string`, required) The unique identifier for the Stripe account from which the person’s relationship will be removed. This ID is required to specify the correct account.
-   **person\_id** (`string`, required) The unique identifier of the person whose relationship to the account is to be removed.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrievePersonInformation



Retrieve information about a person in a Stripe account.

**Parameters**

-   **stripe\_account\_id** (`string`, required) The unique identifier of the Stripe account from which to retrieve the person’s information. This is required to access the account details linked to this person.
-   **person\_identifier** (`string`, required) The unique identifier of the person to retrieve within the Stripe account. This ID is required to fetch the specific person’s details.
-   **fields\_to\_expand** (`array[string]`, optional) A list of fields in the response that should be expanded for detailed information.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.DeleteAccountPerson



Delete a person’s relationship to an account in Stripe.

**Parameters**

-   **account\_id** (`string`, required) The unique identifier of the account from which a person’s relationship will be deleted. This must be a valid Stripe account ID.
-   **person\_id** (`string`, required) A unique identifier for the person whose relationship to the account will be deleted. This is required and must be a valid person ID in Stripe.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrievePersonAccountDetails



Retrieve details of a person linked to an account.

**Parameters**

-   **account\_id** (`string`, required) The identifier of the Stripe account to which the person is linked. This is required to specify which account’s person details need to be retrieved.
-   **person\_identifier** (`string`, required) The unique identifier of the person whose details need to be retrieved. This ID is associated with the person’s account in Stripe.
-   **fields\_to\_expand** (`array[string]`, optional) A list of fields in the response to be expanded for detailed information.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.ListApplePayDomains



Retrieve a list of Apple Pay domains.

**Parameters**

-   **domain\_name\_filter** (`string`, optional) Filter the list by a specific domain name. Leave empty to return all domains.
-   **pagination\_ending\_before\_id** (`string`, optional) Object ID for pagination to fetch the previous page of the list.
-   **expand\_fields** (`array[string]`, optional) An array of fields to expand in the response for additional details.
-   **max\_domains\_to\_return** (`integer`, optional) Specify the number of Apple Pay domains to retrieve, between 1 and 100. Defaults to 10 if not set.
-   **pagination\_starting\_after\_cursor** (`string`, optional) An object ID for pagination to retrieve the next page of the list.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.DeleteApplePayDomain



Delete an Apple Pay domain from Stripe.

**Parameters**

-   **apple\_pay\_domain\_to\_delete** (`string`, required) The domain name of the Apple Pay domain you wish to delete from your Stripe account.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrieveApplePayDomain



Retrieve details of an Apple Pay domain.

**Parameters**

-   **apple\_pay\_domain\_name** (`string`, required) The domain name of the Apple Pay site to retrieve details for. This should be a valid domain string.
-   **fields\_to\_expand** (`array[string]`, optional) A list of fields to expand in the response for additional details.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrieveApplicationFeeRefundDetail



Retrieve details of a specific application fee refund.

**Parameters**

-   **application\_fee\_id** (`string`, required) The ID of the application fee associated with the refund to retrieve details for.
-   **refund\_id** (`string`, required) The unique identifier of the specific refund to retrieve details for. This is required to access a particular refund.
-   **fields\_to\_expand** (`array[string]`, optional) List of fields to expand in the response for additional detail.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrieveApplicationFeeDetails



Retrieve details of a specific application fee.

**Parameters**

-   **application\_fee\_id** (`string`, required) The unique identifier of the application fee to retrieve details for.
-   **fields\_to\_expand** (`array[string]`, optional) A list of fields to expand in the response for detailed information.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetApplicationFeeRefunds



Retrieve refunds for a specific application fee.

**Parameters**

-   **application\_fee\_id** (`string`, required) The unique identifier of the application fee for which refunds are being retrieved. This ID specifies which fee’s refunds should be listed.
-   **pagination\_cursor\_ending\_before** (`string`, optional) An object ID cursor used for pagination to fetch the previous page of refunds.
-   **fields\_to\_expand** (`array[string]`, optional) List of fields in the response to expand for additional details.
-   **maximum\_number\_of\_refunds** (`integer`, optional) The maximum number of refund objects to return, ranging from 1 to 100. Defaults to 10 if not specified.
-   **pagination\_starting\_after** (`string`, optional) An object ID to fetch the next page of refunds after this ID, used for pagination.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetCurrentAccountBalance



Retrieve the current account balance from Stripe.

**Parameters**

-   **fields\_to\_expand** (`array[string]`, optional) List of fields to expand in the response for additional details.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrieveBalanceTransactionById



Retrieve details of a balance transaction by ID.

**Parameters**

-   **balance\_transaction\_id** (`string`, required) The unique identifier for the balance transaction to retrieve.
-   **fields\_to\_expand** (`array[string]`, optional) A list of fields in the response that should be expanded for detailed information.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetBalanceSettings



Retrieve balance settings for a connected Stripe account.

**Parameters**

-   **fields\_to\_expand** (`array[string]`, optional) A list of fields in the response that should be expanded for the connected Stripe account’s balance settings.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetBalanceTransactionById



Retrieve details of a balance transaction by ID.

**Parameters**

-   **transaction\_id** (`string`, required) The unique identifier of the balance transaction to be retrieved.
-   **fields\_to\_expand** (`array[string]`, optional) A list of fields in the response that should be expanded for additional details.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetBillingAlerts



Retrieve active and inactive billing alerts.

**Parameters**

-   **filter\_by\_alert\_type** (`string`, optional) Filter results to only include alerts of the specified type. Accepts ‘usage\_threshold’.
-   **pagination\_ending\_before** (`string`, optional) A pagination cursor. Use this ID to fetch the previous page of the list if starting from a specific object.
-   **expand\_response\_fields** (`array[string]`, optional) List of fields in the response that should be expanded. Each field should be a string.
-   **result\_limit** (`integer`, optional) Specify the maximum number of billing alerts to be returned. Accepts an integer from 1 to 100. Defaults to 10 if not provided.
-   **filter\_by\_meter** (`string`, optional) Filter results to only include alerts related to a specific meter type.
-   **pagination\_starting\_after** (`string`, optional) Cursor indicating the starting point for fetching the next page of alerts. Use an object ID from a previous response.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetBillingAlert



Retrieve billing alert details by ID.

**Parameters**

-   **billing\_alert\_id** (`string`, required) The unique identifier of the billing alert to retrieve details for.
-   **expand\_fields** (`array[string]`, optional) List of fields in the response that should be expanded.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetCreditBalanceTransactions



Retrieve a list of credit balance transactions.

**Parameters**

-   **customer\_id** (`string`, required) The unique identifier of the customer for which to fetch credit balance transactions.
-   **credit\_grant\_id** (`string`, optional) The identifier for the specific credit grant to fetch its credit balance transactions.
-   **pagination\_ending\_cursor** (`string`, optional) A pagination cursor ID to fetch the previous page of the list. Use an object ID to identify your position.
-   **fields\_to\_expand** (`array[string]`, optional) List of fields in the response that should be expanded for additional details.
-   **max\_transactions\_to\_return** (`integer`, optional) Specify the maximum number of transactions to return, ranging between 1 and 100. The default is 10.
-   **pagination\_starting\_after** (`string`, optional) An object ID cursor to fetch the next page of credit balance transactions.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetCreditBalanceTransaction



Retrieve a credit balance transaction by ID.

**Parameters**

-   **transaction\_id** (`string`, required) Unique identifier for the credit balance transaction to be retrieved.
-   **fields\_to\_expand** (`array[string]`, optional) An array of field names to expand in the response. Allows accessing nested information related to the transaction.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetBillingCreditGrants



Retrieve a list of billing credit grants.

**Parameters**

-   **customer\_id** (`string`, optional) The unique identifier of the customer whose credit grants you want to retrieve.
-   **pagination\_ending\_before** (`string`, optional) An object ID to fetch the previous page of the list. Use the last received object’s ID from the current page.
-   **fields\_to\_expand** (`array[string]`, optional) A list of fields to be expanded in the response for detailed information.
-   **credit\_grant\_limit** (`integer`, optional) The maximum number of credit grants to return, between 1 and 100. Defaults to 10 if not specified.
-   **pagination\_starting\_after\_cursor** (`string`, optional) A cursor (object ID) for pagination to fetch the next page in the list. Use the ID from the last object in the previous list.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrieveCreditGrant



Retrieve details of a specific credit grant using its ID.

**Parameters**

-   **credit\_grant\_id** (`string`, required) The unique identifier for the credit grant to retrieve details for.
-   **fields\_to\_expand** (`array[string]`, optional) List of fields in the response that should be expanded to include additional details.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetBillingMeters



Retrieve a list of billing meters from Stripe.

**Parameters**

-   **pagination\_ending\_before** (`string`, optional) An object ID cursor to fetch the previous page, used for pagination.
-   **fields\_to\_expand** (`array[string]`, optional) An array of strings specifying which fields in the response should be expanded.
-   **number\_of\_billing\_meters** (`integer`, optional) Specify the number of billing meters to return, ranging from 1 to 100 (default is 10).
-   **pagination\_starting\_after\_cursor** (`string`, optional) Cursor ID to define your starting point in the list for pagination. Use this to fetch the next page of results.
-   **filter\_status** (`string`, optional) Filter results to include only billing meters with the specified status. Options are ‘active’ or ‘inactive’.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrieveBillingMeter



Retrieve billing meter details by ID.

**Parameters**

-   **billing\_meter\_id** (`string`, required) The ID of the billing meter to be retrieved.
-   **fields\_to\_expand** (`array[string]`, optional) A list of field names to expand in the billing meter response for additional details.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetBillingMeterEventSummaries



Retrieve billing meter event summaries by meter ID.

**Parameters**

-   **customer\_id** (`string`, required) The unique identifier of the customer for which to fetch event summaries.
-   **stop\_aggregating\_until** (`integer`, required) The exclusive timestamp to stop aggregating meter events. Ensure it aligns with minute boundaries.
-   **start\_time\_timestamp** (`integer`, required) The timestamp to begin aggregating meter events (inclusive). Must align with minute boundaries.
-   **meter\_id** (`string`, required) The unique identifier for the billing meter to fetch event summaries for.
-   **pagination\_ending\_before\_id** (`string`, optional) An object ID for pagination, used to fetch the previous page of a list. Aligns the list cursor to end before the specified object ID.
-   **fields\_to\_expand** (`array[string]`, optional) A list of fields in the response that should be expanded for detailed results.
-   **number\_of\_objects\_limit** (`integer`, optional) A limit on the number of billing meter event summaries to be returned. Must be between 1 and 100, with a default of 10.
-   **pagination\_starting\_after\_id** (`string`, optional) The object ID to use as a cursor to fetch the next page of the list for pagination.
-   **granularity\_for\_event\_summaries** (`string`, optional) Specifies the granularity for event summaries: ‘hour’ or ‘day’. If not set, returns a single summary for the time range.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetBillingPortalConfigurations



Retrieve customer portal configurations from Stripe.

**Parameters**

-   **pagination\_cursor\_ending\_before** (`string`, optional) A cursor for pagination to get the previous page in the list, using an object ID.
-   **fields\_to\_expand** (`array[string]`, optional) List of fields in the response to be expanded. Each entry should be a string representing a field name.
-   **result\_limit** (`integer`, optional) Specify the number of configurations to return, between 1 and 100. Default is 10.
-   **pagination\_start\_after\_id** (`string`, optional) A cursor object ID used to fetch the next page of the list for pagination.
-   **only\_active\_configurations** (`boolean`, optional) Set to true to list only active configurations, or false to list inactive ones.
-   **return\_default\_configurations\_only** (`boolean`, optional) Set to true to return only default configurations, or false to return non-default configurations.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetCustomerPortalConfiguration



Retrieve customer portal configuration details.

**Parameters**

-   **configuration\_id** (`string`, required) The unique identifier for the customer portal configuration to retrieve.
-   **expand\_fields\_in\_response** (`array[string]`, optional) A list of field names in the response that should be expanded for more detailed information.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.StripeSearchCharges



Search for previously created charges using Stripe.

**Parameters**

-   **search\_query\_string** (`string`, required) The search query string using Stripe’s Search Query Language to filter charge results. Refer to Stripe’s documentation for syntax and fields.
-   **fields\_to\_expand** (`array[string]`, optional) A list of fields in the response that should be expanded for additional detail.
-   **result\_limit** (`integer`, optional) Specify the number of charge objects to return. The limit can be between 1 and 100, with a default of 10.
-   **pagination\_cursor** (`string`, optional) Cursor for pagination. Use the ‘next\_page’ value from the previous response for subsequent requests. Omit on the first call.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrieveStripeChargeDetails



Retrieve details of a specific Stripe charge via its unique ID.

**Parameters**

-   **charge\_id** (`string`, required) The unique identifier of the charge. Use this to retrieve its details.
-   **fields\_to\_expand** (`array[string]`, optional) List of fields in the response to expand for more detailed information.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetChargeDisputeDetails



Retrieve details of a dispute for a specific charge.

**Parameters**

-   **charge\_id** (`string`, required) The unique identifier of the charge for which you want to retrieve dispute details.
-   **fields\_to\_expand\_in\_dispute\_response** (`array[string]`, optional) List of fields to expand in the dispute response for additional details.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetChargeRefunds



Retrieve refunds for a specific charge on Stripe.

**Parameters**

-   **charge\_id** (`string`, required) The unique identifier of the charge for which to retrieve refunds. This ID is required to specify the particular charge.
-   **pagination\_ending\_before** (`string`, optional) Specify an object ID to fetch the previous page of refunds before this object.
-   **fields\_to\_expand** (`array[string]`, optional) List of fields to expand in the response for more detailed information.
-   **object\_return\_limit** (`integer`, optional) Specify the number of refunds to return, ranging from 1 to 100. Defaults to 10 if not set.
-   **pagination\_starting\_after** (`string`, optional) ID of the object to start retrieving the next page from. Used for pagination in refund lists.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrieveRefundDetailsByCharge



Fetches details of a refund associated to a specific charge.

**Parameters**

-   **charge\_id** (`string`, required) The unique identifier for the charge associated with the refund.
-   **refund\_id** (`string`, required) The ID of the refund to retrieve details for. This is required to specify the refund you want to look up.
-   **fields\_to\_expand** (`array[string]`, optional) List of fields in the refund details to be expanded in the response.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrieveCheckoutSession



Retrieve a specific Stripe checkout session.

**Parameters**

-   **session\_id** (`string`, required) The unique identifier for the Checkout Session you want to retrieve. This is required to specify which session’s details to access.
-   **fields\_to\_expand** (`array[string]`, optional) A list of fields in the checkout session response that should be expanded for more detailed information.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetCheckoutSessionLineItems



Fetch line items from a Stripe Checkout Session.

**Parameters**

-   **checkout\_session\_id** (`string`, required) The unique identifier for the Stripe Checkout Session. This ID is required to retrieve associated line items.
-   **cursor\_ending\_before** (`string`, optional) An object ID used for pagination to retrieve the page before the specified object in the list.
-   **fields\_to\_expand** (`array[string]`, optional) A list of fields in the response that should be expanded for additional details.
-   **item\_limit** (`integer`, optional) Sets the maximum number of line items to return, ranging from 1 to 100. Default is 10.
-   **pagination\_starting\_after** (`string`, optional) A string representing the object ID to start the list after, for pagination purposes.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.ListClimateOrders



Retrieve all Climate order objects from Stripe.

**Parameters**

-   **pagination\_ending\_before\_cursor** (`string`, optional) A cursor ID to paginate backwards through the list, fetching the page before the specified object ID for Climate orders.
-   **expand\_fields** (`array[string]`, optional) A list of fields in the response to expand. Provide each field name as a string in an array.
-   **maximum\_objects\_to\_return** (`integer`, optional) The number of Climate order objects to retrieve, ranging from 1 to 100. Default is 10.
-   **pagination\_starting\_after\_cursor** (`string`, optional) An object ID used as a cursor to define your place in the pagination list to retrieve the next page.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetClimateOrderDetails



Retrieve details of a specific Climate order.

**Parameters**

-   **order\_id** (`string`, required) Unique identifier for the Climate order to retrieve details.
-   **fields\_to\_expand** (`array[string]`, optional) A list of fields in the response that should be expanded for more detailed information.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.ListClimateProducts



Retrieve a list of all available Climate products.

**Parameters**

-   **pagination\_ending\_before** (`string`, optional) An object ID cursor to fetch the previous page in a paginated list. Use to define your place in the list.
-   **fields\_to\_expand** (`array[string]`, optional) Specify which fields in the response should be expanded as a list of strings.
-   **objects\_limit** (`integer`, optional) The maximum number of Climate product objects to return, ranging from 1 to 100. Default is 10.
-   **pagination\_starting\_after\_id** (`string`, optional) A cursor (object ID) to define your starting point in the list for pagination. Used to fetch the next page after the specified object ID.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrieveClimateProductDetails



Retrieve details of a specific Climate product from Stripe.

**Parameters**

-   **product\_id** (`string`, required) The unique identifier of the Climate product to retrieve details for.
-   **fields\_to\_expand** (`array[string]`, optional) List of fields in the response to expand for additional details.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.ListClimateSuppliers



Retrieve a list of all available Climate suppliers.

**Parameters**

-   **pagination\_ending\_before** (`string`, optional) The object ID to use as a cursor for fetching the previous page of suppliers in the list.
-   **fields\_to\_expand** (`array[string]`, optional) List of fields in the response that should be expanded.
-   **result\_limit** (`integer`, optional) Specify the number of Climate supplier objects to return, ranging from 1 to 100, with a default of 10.
-   **pagination\_starting\_after\_cursor** (`string`, optional) Object ID for pagination to fetch the next page of the Climate suppliers list.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrieveClimateSupplier



Fetches details of a specific Climate supplier.

**Parameters**

-   **supplier\_identifier** (`string`, required) The unique identifier for the Climate supplier to be retrieved. This is required to fetch the supplier’s information.
-   **fields\_to\_expand** (`array[string]`, optional) List of fields to expand in the response for detailed information on the Climate supplier.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetConfirmationTokenInfo



Retrieves details of an existing confirmation token.

**Parameters**

-   **confirmation\_token** (`string`, required) The unique identifier of the confirmation token to retrieve details for. This is required.
-   **fields\_to\_expand** (`array[string]`, optional) A list of fields to expand in the response for additional details. Each field should be specified as a string.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrieveCountrySpecs



Retrieve all country specification objects from the API.

**Parameters**

-   **pagination\_ending\_before** (`string`, optional) The object ID to specify your place in the list for pagination, retrieving the previous page of results.
-   **expand\_response\_fields** (`array[string]`, optional) An array of strings specifying fields in the response to be expanded for more detailed information.
-   **number\_of\_country\_specs\_to\_return** (`integer`, optional) Number of country specification objects to return, ranging from 1 to 100. The default is 10.
-   **pagination\_starting\_after\_id** (`string`, optional) Object ID to define your place in the list for pagination. Use it to fetch the next page if available, based on the last object from a previous list call.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetCountrySpecifications



Retrieve country specifications using a country code.

**Parameters**

-   **country\_code** (`string`, required) The ISO 3166-1 alpha-2 country code for which you want to retrieve specifications. For example, ‘US’ for the United States.
-   **fields\_to\_expand** (`array[string]`, optional) A list of fields in the response to be expanded. Each field should be specified as a string.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.DeleteStripeCoupon



Delete a coupon in Stripe without affecting current users.

**Parameters**

-   **coupon\_id** (`string`, required) The unique identifier of the coupon to delete on Stripe. This ID specifies which coupon should be deleted.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetCouponDetails



Retrieve details of a coupon by its ID.

**Parameters**

-   **coupon\_id** (`string`, required) The unique identifier of the coupon to retrieve details.
-   **expanded\_fields** (`array[string]`, optional) A list of fields in the response that should be expanded for additional details.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrieveCreditNoteLines



Fetch line items from a specified credit note.

**Parameters**

-   **credit\_note\_id** (`string`, required) The unique identifier of the credit note to retrieve line items from.
-   **pagination\_ending\_before** (`string`, optional) The object ID to paginate before, fetching the previous page in the list.
-   **fields\_to\_expand** (`array[string]`, optional) List of fields in the response to be expanded. Allows detailed retrieval of related objects.
-   **max\_objects\_to\_return** (`integer`, optional) Specify the number of credit note line items to return. Must be between 1 and 100, default is 10.
-   **pagination\_starting\_after** (`string`, optional) An object ID used for pagination to fetch the next page of the list. This ID should be the last object from a previous set of data.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrieveCreditNote



Retrieve details of a specific credit note by ID.

**Parameters**

-   **credit\_note\_id** (`string`, required) The unique identifier of the credit note to be retrieved.
-   **fields\_to\_expand** (`array[string]`, optional) A list of fields in the response to be expanded for detailed information.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.SearchStripeCustomers



Search and retrieve customer data from Stripe.

**Parameters**

-   **search\_query\_string** (`string`, required) The search query string used to search for customers. Refer to Stripe’s Search Query Language documentation for syntax and supported fields.
-   **expand\_response\_fields** (`array[string]`, optional) A list of fields in the response that should be expanded. Provide the field names as strings.
-   **customer\_result\_limit** (`integer`, optional) Specifies the maximum number of customer records to return, between 1 and 100. Default is 10.
-   **pagination\_cursor** (`string`, optional) Cursor for paginating through results. Use ‘next\_page’ from a previous response for subsequent results. Omit on the first call.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.DeleteStripeCustomer



Permanently delete a Stripe customer and cancel subscriptions.

**Parameters**

-   **customer\_id** (`string`, required) The unique identifier of the customer to be deleted. This ID is required and should match the customer in the Stripe system.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrieveCustomerDetails



Retrieve details of a specific customer.

**Parameters**

-   **customer\_id** (`string`, required) The unique identifier for the customer to retrieve details for. This is a string provided by Stripe.
-   **expand\_response\_fields** (`array[string]`, optional) List of fields to expand in the response for detailed information.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetCustomerBalanceTransactions



Retrieve a customer’s balance transaction updates.

**Parameters**

-   **customer\_id** (`string`, required) The unique identifier of the customer. This ID is used to retrieve balance transaction updates for that specific customer.
-   **pagination\_ending\_before\_cursor** (`string`, optional) A cursor ID used to fetch the previous page of balance transactions in pagination.
-   **fields\_to\_expand** (`array[string]`, optional) A list of fields in the response that should be expanded.
-   **result\_limit** (`integer`, optional) Sets the maximum number of balance transactions to retrieve, ranging from 1 to 100. Default is 10.
-   **pagination\_starting\_after\_cursor** (`string`, optional) A cursor for pagination. Use the object ID from the last received page to fetch the next page.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetCustomerBalanceTransaction



Retrieve a specific customer balance transaction from Stripe.

**Parameters**

-   **customer\_id** (`string`, required) The unique identifier for the customer. This is required to retrieve the specific balance transaction.
-   **transaction\_id** (`string`, required) The unique identifier for the customer balance transaction to retrieve.
-   **fields\_to\_expand** (`array[string]`, optional) A list of fields to expand in the response for additional details.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetCustomerBankAccounts



Retrieve bank accounts for a specific customer.

**Parameters**

-   **customer\_id** (`string`, required) The unique identifier of the customer whose bank accounts you want to retrieve. This ID is required to access the bank account details associated with a specific customer.
-   **pagination\_ending\_before** (`string`, optional) An object ID used as a cursor to fetch the previous page of bank accounts in a paginated list.
-   **fields\_to\_expand** (`array[string]`, optional) List of fields to expand in the response. Specify which aspects of the response should be expanded for detailed information.
-   **result\_limit** (`integer`, optional) The maximum number of bank accounts to return, ranging from 1 to 100. Defaults to 10 if not specified.
-   **pagination\_cursor\_starting\_after** (`string`, optional) A string specifying the object ID to define your place in the list for pagination. Use this to fetch the next page of bank accounts.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetCustomerBankAccountDetails



Retrieve details of a customer’s bank account from Stripe.

**Parameters**

-   **customer\_id** (`string`, required) The unique identifier for the Stripe customer whose bank account details are being retrieved.
-   **bank\_account\_id** (`string`, required) The unique identifier for the specific bank account associated with the Stripe customer.
-   **fields\_to\_expand** (`array[string]`, optional) List of fields in the response to expand for detailed information.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetCustomerCards



Retrieve a list of cards belonging to a customer.

**Parameters**

-   **customer\_id** (`string`, required) The unique identifier for the customer whose cards are to be retrieved. This ID is required to obtain the card list.
-   **pagination\_ending\_before** (`string`, optional) Object ID to define the cursor’s place in pagination, used to fetch the previous page of the card list.
-   **fields\_to\_expand** (`array[string]`, optional) List of fields in the response to be expanded for additional details.
-   **card\_retrieval\_limit** (`integer`, optional) Specify the maximum number of cards to retrieve. The limit must be between 1 and 100, with a default of 10 if not specified.
-   **pagination\_starting\_after\_cursor** (`string`, optional) An object ID indicating the position to start fetching the next page of the card list. Use this for pagination.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetCustomerCardDetails



Retrieve details about a specific card for a customer.

**Parameters**

-   **customer\_id** (`string`, required) The unique identifier for the customer whose card details are being retrieved. This is required to specify which customer’s card information you want to access.
-   **card\_id** (`string`, required) The unique identifier of the card to retrieve details for. This is specific to the card associated with the customer.
-   **fields\_to\_expand** (`array[string]`, optional) A list of fields in the response that should be expanded for more detailed information.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetCustomerCashBalance



Retrieve a customer’s cash balance on Stripe.

**Parameters**

-   **customer\_id** (`string`, required) The unique identifier of the customer whose cash balance is being retrieved. This ID is used to specify which customer’s balance should be returned.
-   **fields\_to\_expand** (`array[string]`, optional) An array of strings specifying which fields in the response should be expanded for additional details.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetCustomerCashBalanceTransactions



Retrieve transactions modifying a customer’s cash balance.

**Parameters**

-   **customer\_id** (`string`, required) The unique identifier of the customer whose cash balance transactions are to be retrieved. This ID is required for the API call.
-   **pagination\_cursor\_ending\_before** (`string`, optional) A string representing the ID used for pagination to fetch the previous page of transactions.
-   **expand\_fields** (`array[string]`, optional) List of fields to expand in the response for detailed information.
-   **transaction\_limit** (`integer`, optional) The number of transactions to return, between 1 and 100. Default is 10.
-   **pagination\_starting\_after\_cursor** (`string`, optional) Object ID cursor for pagination to continue listing transactions after a specified object.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrieveCashBalanceTransaction



Retrieve a cash balance transaction for a customer.

**Parameters**

-   **customer\_id** (`string`, required) The unique identifier of the customer whose cash balance transaction is to be retrieved.
-   **transaction\_id** (`string`, required) The unique identifier for the cash balance transaction to be retrieved.
-   **expand\_fields\_in\_response** (`array[string]`, optional) List of fields to expand in the response for additional details.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RemoveCustomerDiscount



Remove the current discount applied to a customer.

**Parameters**

-   **customer\_id** (`string`, required) The unique identifier for the customer whose discount is to be removed.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrieveCustomerDiscount



Retrieve a customer’s discount information.

**Parameters**

-   **customer\_id** (`string`, required) The unique identifier for the customer whose discount information you want to retrieve.
-   **fields\_to\_expand** (`array[string]`, optional) List of fields in the response to expand. Use to get additional related information.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetCustomerPaymentMethods



Retrieve payment methods for a specific customer.

**Parameters**

-   **customer\_id** (`string`, required) Unique identifier for the customer whose payment methods are to be retrieved.
-   **enable\_redisplay\_setting** (`string`, optional) Indicates if the payment method can be shown again in a checkout flow. Options: ‘always’, ‘limited’, ‘unspecified’.
-   **pagination\_ending\_before\_id** (`string`, optional) An object ID used to paginate backwards by defining the end of the list.
-   **response\_fields\_to\_expand** (`array[string]`, optional) A list of fields to expand in the response for detailed information.
-   **max\_payment\_methods\_returned** (`integer`, optional) Limit the number of payment methods returned. Accepts a value between 1 and 100, with a default of 10.
-   **pagination\_starting\_after\_cursor** (`string`, optional) Cursor for pagination that defines the start point in the list. Use the ID of the last object from the previous page.
-   **payment\_method\_type\_filter** (`string`, optional) Specify a payment method type to filter the list. Without filtering, all types are included. Choose from options like ‘card’, ‘paypal’, etc.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetCustomerPaymentMethod



Retrieve a customer’s specific payment method.

**Parameters**

-   **customer\_id** (`string`, required) The unique identifier for the customer whose payment method information is being retrieved. This ID should be a string matching the customer’s record in Stripe.
-   **payment\_method\_id** (`string`, required) The unique identifier for the payment method to retrieve for the customer.
-   **fields\_to\_expand** (`array[string]`, optional) List of fields in the payment method response that should be expanded for more details.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.ListCustomerPaymentSources



Retrieve payment sources for a specified customer.

**Parameters**

-   **customer\_id** (`string`, required) The unique identifier for the customer whose payment sources you want to retrieve.
-   **pagination\_ending\_before** (`string`, optional) A cursor for pagination to fetch the previous page. Use an object ID from your list request.
-   **expand\_response\_fields** (`array[string]`, optional) List of fields in the response to be expanded for additional details.
-   **max\_payment\_sources\_to\_return** (`integer`, optional) Set the maximum number of payment sources to return, from 1 to 100. Defaults to 10 if not specified.
-   **filter\_by\_object\_type** (`string`, optional) Filter payment sources based on a specific object type (e.g., card, bank\_account).
-   **pagination\_start\_cursor** (`string`, optional) An object ID (string) that specifies your place in the list to fetch the next page. Use it for pagination.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrieveCustomerPaymentSource



Retrieve a specified source for a given customer.

**Parameters**

-   **customer\_id** (`string`, required) The unique identifier for the customer whose payment source needs to be retrieved.
-   **source\_id** (`string`, required) The unique identifier of the payment source to retrieve for the specified customer.
-   **fields\_to\_expand** (`array[string]`, optional) List of fields to expand in the response for detailed information.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetCustomerSubscriptions



Retrieve a customer’s active subscriptions.

**Parameters**

-   **customer\_id** (`string`, required) The unique identifier for the customer whose subscriptions are being retrieved.
-   **pagination\_ending\_before\_cursor** (`string`, optional) An object ID to define your position in pagination. Use this cursor to fetch the previous page of subscriptions.
-   **fields\_to\_expand** (`array[string]`, optional) A list of fields in the response that should be expanded for additional details.
-   **subscription\_limit** (`integer`, optional) The maximum number of subscription objects to return. Must be between 1 and 100, defaulting to 10.
-   **pagination\_starting\_after\_object\_id** (`string`, optional) An object ID used as a cursor to fetch the next page of subscriptions in a paginated list.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrieveStripeSubscriptionById



Retrieve a Stripe subscription by its ID.

**Parameters**

-   **customer\_id** (`string`, required) The unique identifier for the customer whose subscription is being retrieved. Provide this to specify which customer’s subscription details to fetch.
-   **subscription\_id** (`string`, required) The identifier of the subscription to retrieve. Required to fetch the specific subscription details.
-   **fields\_to\_expand** (`array[string]`, optional) List of fields to expand in the subscription response, allowing for additional details.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RemoveCustomerSubscriptionDiscount



Removes the discount from a customer’s subscription.

**Parameters**

-   **customer\_id** (`string`, required) The unique identifier for the customer whose subscription discount should be removed.
-   **subscription\_id** (`string`, required) The unique identifier for the customer’s subscription from which the discount will be removed.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetSubscriptionDiscount



Retrieve discount details for a customer’s subscription.

**Parameters**

-   **customer\_id** (`string`, required) The unique identifier of the customer whose subscription discount details are being retrieved.
-   **subscription\_id** (`string`, required) The unique identifier for the customer’s subscription to retrieve discount details.
-   **fields\_to\_expand** (`array[string]`, optional) List of fields to expand in the response for more detailed information.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetCustomerTaxIds



Retrieve a customer’s tax IDs from their profile.

**Parameters**

-   **customer\_id** (`string`, required) The ID of the customer for whom the tax IDs are being retrieved. This is a required field.
-   **pagination\_ending\_before** (`string`, optional) Cursor object ID to fetch the previous page in a paginated list. Use the ID from the starting object of the current list.
-   **expand\_fields** (`array[string]`, optional) A list of fields in the response that should be expanded. Provide field names as strings.
-   **max\_number\_of\_tax\_ids** (`integer`, optional) Specify the maximum number of tax IDs to return. Accepts an integer between 1 and 100, with a default value of 10.
-   **pagination\_starting\_after** (`string`, optional) An object ID from the current list to continue fetching the next page in pagination.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.DeleteCustomerTaxId



Deletes a customer’s existing tax ID.

**Parameters**

-   **customer\_identifier** (`string`, required) The unique identifier for the customer whose tax ID will be deleted. This is a string provided by Stripe.
-   **tax\_id** (`string`, required) The unique identifier of the tax ID to be deleted for the customer.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetCustomerTaxId



Retrieve a specific customer’s tax ID information.

**Parameters**

-   **customer\_identifier** (`string`, required) The unique identifier of the customer whose tax ID is to be retrieved.
-   **tax\_id\_identifier** (`string`, required) The unique identifier of the customer’s tax ID to be retrieved.
-   **expand\_response\_fields** (`array[string]`, optional) A list of field names in the response that should be expanded for more detailed information.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrieveDisputeById



Retrieve details of a dispute using its ID.

**Parameters**

-   **dispute\_id** (`string`, required) The unique identifier of the dispute to be retrieved. This ID can be used to fetch detailed information about the specific dispute.
-   **fields\_to\_expand** (`array[string]`, optional) A list of fields in the dispute response that should be expanded for additional details.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetActiveEntitlements



Retrieve active entitlements for a customer from Stripe.

**Parameters**

-   **customer\_id** (`string`, required) The unique identifier of the customer whose active entitlements are being retrieved.
-   **pagination\_ending\_before** (`string`, optional) An object ID cursor to fetch the previous page of the list of active entitlements.
-   **expand\_fields\_in\_response** (`array[string]`, optional) An array of field names to be expanded in the response from Stripe. Use this to include additional details related to specific entities.
-   **max\_number\_of\_entitlements** (`integer`, optional) Maximum number of active entitlements to retrieve for the customer, between 1 and 100. Default is 10.
-   **pagination\_starting\_after** (`string`, optional) Use this to specify where to start the list pagination. Provide the object ID from where the list should continue.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrieveActiveEntitlement



Retrieve details of an active entitlement by ID.

**Parameters**

-   **entitlement\_id** (`string`, required) The unique identifier of the active entitlement to retrieve.
-   **fields\_to\_expand** (`array[string]`, optional) List of fields in the response that should be expanded for additional details.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetStripeEntitlementFeatures



Retrieve a list of entitlement features from Stripe.

**Parameters**

-   **pagination\_ending\_before** (`string`, optional) Cursor for pagination defining the position in list. Use to fetch previous page by providing object ID.
-   **fields\_to\_expand** (`array[string]`, optional) List of fields in the response to be expanded.
-   **object\_return\_limit** (`integer`, optional) Specify the number of features to return, ranging between 1 and 100. Defaults to 10 if not provided.
-   **filter\_by\_lookup\_key** (`string`, optional) Filter results to only include features with the specified lookup key.
-   **pagination\_starting\_after** (`string`, optional) A cursor for pagination. Use the object ID from the last item of your current list to fetch the next page.
-   **include\_archived\_features** (`boolean`, optional) Set to true to include only archived features, or false to exclude them.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrieveFeatureDetails



Fetches details for a specific feature by ID.

**Parameters**

-   **feature\_id** (`string`, required) The unique identifier of the feature to retrieve details for.
-   **fields\_to\_expand** (`array[string]`, optional) List of fields in the response to be expanded for more detailed information.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrieveStripeEventDetails



Retrieve details of a Stripe event using its unique ID.

**Parameters**

-   **event\_identifier** (`string`, required) The unique identifier of the event to retrieve details for. Typically received via a webhook and must have been created in the last 30 days.
-   **fields\_to\_expand\_in\_response** (`array[string]`, optional) List of fields to be expanded in the response. Provide field names as strings.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetExchangeRates



Retrieve Stripe’s supported foreign currency exchange rates.

**Parameters**

-   **pagination\_ending\_before\_currency** (`string`, optional) The currency code to define your position for fetching the previous page in the exchange rate list.
-   **response\_fields\_to\_expand** (`array[string]`, optional) List of fields in the response to be expanded for detailed information.
-   **result\_limit** (`integer`, optional) Set the maximum number of exchange rate objects to return, ranging from 1 up to the maximum number supported by Stripe.
-   **pagination\_starting\_currency** (`string`, optional) The currency code to define the starting point in the paginated list of exchange rates.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetDeprecatedExchangeRates



Retrieves deprecated exchange rates for a given currency.

**Parameters**

-   **currency\_rate\_id** (`string`, required) The currency code (e.g., ‘USD’) to retrieve exchange rates for. Use the deprecated Exchange Rate API responsibly.
-   **expand\_fields** (`array[string]`, optional) List of fields to be expanded in the response. Each field is specified as a string.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrieveFileLink



Fetches a file link using its ID.

**Parameters**

-   **file\_link\_id** (`string`, required) The ID of the file link to retrieve details for. This is used to fetch the specific file link from Stripe.
-   **fields\_to\_expand** (`array[string]`, optional) An array of strings specifying which fields in the response should be expanded for additional details.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetFileDetails



Retrieve details of an existing file object from Stripe.

**Parameters**

-   **file\_id** (`string`, required) The unique identifier for the file object whose details you want to retrieve.
-   **fields\_to\_expand** (`array[string]`, optional) A list of fields in the response that should be expanded for additional details.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetFinancialConnectionsAccountDetails



Retrieve details of a Financial Connections Account.

**Parameters**

-   **financial\_account\_identifier** (`string`, required) The unique identifier for the Financial Connections Account to retrieve details for.
-   **fields\_to\_expand** (`array[string]`, optional) List of fields in the response to be expanded for additional details.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetFinancialAccountOwners



Retrieve owners of a specified financial account.

**Parameters**

-   **ownership\_object\_id** (`string`, required) The ID of the ownership object from which to fetch the account owners.
-   **account\_id** (`string`, required) The unique identifier of the financial account to retrieve its owners.
-   **pagination\_cursor\_ending\_before** (`string`, optional) An ID to fetch the previous page in pagination, defining your place in the list.
-   **fields\_to\_expand** (`array[string]`, optional) A list of field names in the response to be expanded, specified as an array of strings.
-   **object\_limit** (`integer`, optional) Specifies the maximum number of account owners to return, ranging from 1 to 100, with a default of 10.
-   **pagination\_starting\_after\_cursor** (`string`, optional) A cursor indicating the starting point for pagination in a list. Use the object ID from the previous response to fetch the next page.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrieveFinancialConnectionsSession



Retrieve details of a Financial Connections Session.

**Parameters**

-   **financial\_connection\_session\_id** (`string`, required) The unique identifier of the Financial Connections Session to retrieve.
-   **fields\_to\_expand** (`array[string]`, optional) An array of strings specifying which fields in the response should be expanded for additional details.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetFinancialTransactionDetails



Retrieve details of a specific financial transaction.

**Parameters**

-   **transaction\_id** (`string`, required) The unique identifier of the financial transaction to retrieve details for.
-   **fields\_to\_expand** (`array[string]`, optional) List of fields to expand in the response to show additional details.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrieveForwardingRequest



Fetch a specific ForwardingRequest object using its ID.

**Parameters**

-   **forwarding\_request\_id** (`string`, required) The unique identifier for the ForwardingRequest object to be retrieved.
-   **fields\_to\_expand** (`array[string]`, optional) List of fields to expand in the response for detailed information.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrieveStripeVerificationReport



Retrieve details of an existing Stripe verification report.

**Parameters**

-   **verification\_report\_id** (`string`, required) The unique identifier of the verification report to fetch from Stripe.
-   **fields\_to\_expand** (`array[string]`, optional) A list of fields in the response to expand for additional detail.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrieveVerificationSessionDetails



Retrieve details of a Stripe verification session.

**Parameters**

-   **verification\_session\_id** (`string`, required) The unique identifier of the Stripe VerificationSession to be retrieved.
-   **expand\_response\_fields** (`array[string]`, optional) A list of fields in the response to be expanded for additional details. Use this to customize the verbosity of the response.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrieveInvoicePayment



Fetch the details of a specific invoice payment by ID.

**Parameters**

-   **invoice\_payment\_id** (`string`, required) The ID of the invoice payment to retrieve details for. This ID is required to fetch the payment information.
-   **fields\_to\_expand** (`array[string]`, optional) List of fields to be expanded in the response. Each field should be specified as a string.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetInvoiceRenderingTemplates



Retrieve all invoice rendering templates by creation date.

**Parameters**

-   **pagination\_ending\_before** (`string`, optional) A pagination cursor indicating the object ID to end before when listing templates. Use this to fetch the previous page.
-   **fields\_to\_expand** (`array[string]`, optional) A list of fields in the response that should be expanded for more detailed information.
-   **result\_limit** (`integer`, optional) Specify the maximum number of invoice rendering templates to return, ranging from 1 to 100. Defaults to 10.
-   **pagination\_starting\_after** (`string`, optional) Object ID defining your place in the list to fetch the next page.
-   **template\_status** (`string`, optional) Filter templates by their status: ‘active’ or ‘archived’.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrieveInvoiceTemplate



Fetch an invoice rendering template by ID.

**Parameters**

-   **invoice\_template\_id** (`string`, required) The unique identifier for the invoice rendering template you want to retrieve.
-   **fields\_to\_expand** (`array[string]`, optional) A list of fields in the response that should be expanded for detailed information.
-   **template\_version** (`integer`, optional) Specify the version number of the invoice rendering template to retrieve. If omitted, the latest version is returned.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.DeleteInvoiceItem



Delete an invoice item from a draft or unattached invoice.

**Parameters**

-   **invoice\_item\_id** (`string`, required) The unique identifier of the invoice item to be deleted. It must be either unattached or part of a draft invoice.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetInvoiceItemDetails



Retrieve details of a specific invoice item by ID.

**Parameters**

-   **invoice\_item\_id** (`string`, required) The ID of the invoice item to retrieve details for.
-   **fields\_to\_expand** (`array[string]`, optional) List of fields in the response to expand for more detailed information.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.SearchStripeInvoices



Search for previously created Stripe invoices.

**Parameters**

-   **search\_query\_string** (`string`, required) The search query string using Stripe’s Search Query Language. Refer to Stripe’s documentation for syntax and supported fields.
-   **fields\_to\_expand** (`array[string]`, optional) A list of fields in the response to be expanded for additional details. Provide field names as strings.
-   **result\_limit** (`integer`, optional) Defines the maximum number of invoice records to return, ranging from 1 to 100. Defaults to 10 if not specified.
-   **pagination\_cursor** (`string`, optional) A cursor for pagination to retrieve subsequent pages. Use the next\_page value from a previous response; exclude for the first call.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.DeleteInvoiceDraft



Permanently delete a draft invoice.

**Parameters**

-   **invoice\_id** (`string`, required) The unique identifier of the draft invoice to be permanently deleted. Cannot be used on finalized invoices or those associated with subscriptions.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrieveInvoiceById



Retrieve details of an invoice using its ID.

**Parameters**

-   **invoice\_id** (`string`, required) The unique identifier for the invoice to retrieve.
-   **expand\_fields\_in\_response** (`array[string]`, optional) A list of fields in the invoice response that should be expanded for more detailed information.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetInvoiceLineItems



Fetch line items from a specific invoice.

**Parameters**

-   **invoice\_id** (`string`, required) The unique identifier for the invoice to retrieve line items from. Provide this ID to specify which invoice’s line items you want to access.
-   **pagination\_ending\_before\_cursor** (`string`, optional) A cursor ID to fetch the previous page of line items in the invoice list.
-   **fields\_to\_expand** (`array[string]`, optional) List the fields in the invoice line items response that should be expanded for more details.
-   **max\_line\_items\_to\_return** (`integer`, optional) The maximum number of line items to return. It can range from 1 to 100, with a default of 10.
-   **pagination\_start\_after** (`string`, optional) An object ID defining your place in the list for pagination, used to fetch the next page of invoice line items.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrieveIssuingAuthorization



Fetches details of an Issuing Authorization object.

**Parameters**

-   **authorization\_id** (`string`, required) The unique identifier for the Issuing Authorization object to retrieve.
-   **expand\_fields** (`array[string]`, optional) List of strings specifying which fields in the response should be expanded.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrieveIssuingCardholder



Retrieve details of an issuing cardholder.

**Parameters**

-   **cardholder\_id** (`string`, required) The unique identifier of the cardholder to retrieve details for, in string format.
-   **fields\_to\_expand** (`array[string]`, optional) An array of field names to expand in the response for additional details.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetIssuingCardDetails



Retrieve details of a specific issuing card.

**Parameters**

-   **card\_id** (`string`, required) The unique identifier of the issuing card you want to retrieve details for. This is required.
-   **fields\_to\_expand** (`array[string]`, optional) An array of fields to expand in the response for additional details.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrieveIssuingDispute



Fetch the details of a specific issuing dispute.

**Parameters**

-   **dispute\_id** (`string`, required) The unique identifier of the Issuing Dispute to be retrieved.
-   **fields\_to\_expand** (`array[string]`, optional) A list of fields in the dispute response that should be expanded for more detailed information.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrievePersonalizationDesign



Retrieve a personalization design object by ID.

**Parameters**

-   **personalization\_design\_id** (`string`, required) The ID of the personalization design to retrieve. This is used to specify which design object’s details are desired.
-   **fields\_to\_expand** (`array[string]`, optional) List of fields in the response to be expanded for additional details.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetLatestPhysicalBundles



Retrieve the latest physical bundle objects from Stripe.

**Parameters**

-   **pagination\_end\_before\_id** (`string`, optional) An object ID used for pagination to fetch the previous page of the list.
-   **fields\_to\_expand** (`array[string]`, optional) List of response fields to expand for more detailed information.
-   **number\_of\_bundles\_limit** (`integer`, optional) Specify the maximum number of physical bundle objects to return, ranging from 1 to 100. Default is 10.
-   **pagination\_starting\_after\_id** (`string`, optional) Provide the object ID to continue pagination from the next item after it in the list.
-   **filter\_status** (`string`, optional) Filter physical bundles by status. Options include ‘active’, ‘inactive’, or ‘review’.
-   **filter\_by\_bundle\_type** (`string`, optional) Specify the type of physical bundles to return. Options are ‘custom’ or ‘standard’.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrievePhysicalBundle



Retrieve details of a physical bundle.

**Parameters**

-   **physical\_bundle\_id** (`string`, required) The unique identifier of the physical bundle to retrieve.
-   **fields\_to\_expand** (`array[string]`, optional) Comma-separated list of fields in the response to be expanded for additional details.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrieveIssuingSettlement



Fetch details of an Issuing Settlement object.

**Parameters**

-   **settlement\_id** (`string`, required) The unique identifier of the Issuing Settlement to retrieve details for.
-   **fields\_to\_expand** (`array[string]`, optional) List of fields to be expanded in the response for detailed information.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetIssuingTokenInfo



Retrieve details of an Issuing Token.

**Parameters**

-   **issuing\_token\_id** (`string`, required) The unique identifier of the Issuing Token to retrieve information for. This is required to specify which token’s details are needed from Stripe.
-   **fields\_to\_expand** (`array[string]`, optional) A list of fields in the response to be expanded for detailed information.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrieveIssuingTransaction



Fetch details of an issuing transaction by ID.

**Parameters**

-   **transaction\_id** (`string`, required) The unique identifier for the issuing transaction to be retrieved.
-   **fields\_to\_expand** (`array[string]`, optional) A list of fields in the response that should be expanded for more detailed information.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrieveFinancialSessionDetails



Retrieve details of a financial connection session.

**Parameters**

-   **session\_identifier** (`string`, required) The unique identifier for the financial connection session to retrieve details for.
-   **fields\_to\_expand** (`array[string]`, optional) An array of fields in the response that should be expanded to include more details.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetLinkedAccountDetails



Retrieve details of a financial connections account.

**Parameters**

-   **account\_id** (`string`, required) The unique identifier for the financial connections account to retrieve details for.
-   **expand\_fields** (`array[string]`, optional) List of fields in the response to be expanded for more detailed information.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetLinkedAccountOwners



Retrieve owners of a specific linked account.

**Parameters**

-   **ownership\_object\_id** (`string`, required) The unique ID of the ownership object to retrieve owners from. This is required to specify which account’s owners to list.
-   **linked\_account\_id** (`string`, required) The unique identifier of the account to retrieve owners for. This is required to specify which account’s owners you want to list.
-   **pagination\_ending\_before** (`string`, optional) Cursor ID for pagination to fetch the previous page. Use the object ID from the start of the current list result.
-   **expanded\_fields** (`array[string]`, optional) List of fields to be expanded in the response. Specify field names to include more data in the response.
-   **number\_of\_owners\_to\_return** (`integer`, optional) Specify the number of account owners to retrieve, ranging from 1 to 100. Default is 10.
-   **pagination\_starting\_after** (`string`, optional) Cursor for pagination to specify the starting point for the next page of results using an object ID.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrieveMandateInfo



Retrieve detailed information of a mandate.

**Parameters**

-   **mandate\_id** (`string`, required) The unique identifier for the mandate to retrieve details for. It should be a valid string representing the mandate ID in Stripe.
-   **fields\_to\_expand** (`array[string]`, optional) List of fields to expand in the response for more detailed information.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.SearchStripePaymentIntents



Search previously created Stripe PaymentIntents.

**Parameters**

-   **search\_query\_string** (`string`, required) The search query to find specific PaymentIntents using Stripe’s Search Query Language. Refer to the documentation for query syntax and fields.
-   **expand\_fields** (`array[string]`, optional) A list of specific fields in the response that should be expanded. Use field names as strings.
-   **result\_limit** (`integer`, optional) Number of PaymentIntent objects to return, ranging from 1 to 100, with a default of 10.
-   **pagination\_cursor** (`string`, optional) Cursor for pagination. Use the ‘next\_page’ value from a previous response to request more results.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrievePaymentIntentDetails



Retrieve details of a specific PaymentIntent using its ID.

**Parameters**

-   **payment\_intent\_id** (`string`, required) The unique identifier of the PaymentIntent to retrieve details for. Required to specify which PaymentIntent you are interested in.
-   **payment\_intent\_client\_secret** (`string`, optional) The client secret for the PaymentIntent, required when using a publishable key to retrieve the source.
-   **fields\_to\_expand** (`array[string]`, optional) A list of fields to expand in the response for additional details.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetStripePaymentLinks



Retrieve a list of Stripe payment links.

**Parameters**

-   **pagination\_ending\_before** (`string`, optional) An object ID cursor to define the starting point in the list for pagination, retrieving the previous page.
-   **fields\_to\_expand** (`array[string]`, optional) List of fields in the response that should be expanded. Use field names as strings.
-   **object\_return\_limit** (`integer`, optional) Specifies the maximum number of payment link objects to retrieve, ranging from 1 to 100. Default is 10.
-   **pagination\_starting\_after\_cursor** (`string`, optional) The object ID to define your place in the list for pagination. Use it to fetch the next page of payment links.
-   **include\_active\_payment\_links** (`boolean`, optional) Return active payment links only. Set to `false` to list inactive payment links.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrievePaymentLinkInfo



Retrieve detailed information about a payment link.

**Parameters**

-   **payment\_link\_id** (`string`, required) The unique identifier of the payment link to retrieve details for.
-   **expand\_fields** (`array[string]`, optional) List of fields to expand in the response for detailed information.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetPaymentLinkLineItems



Retrieve the line items for a specific payment link.

**Parameters**

-   **payment\_link\_id** (`string`, required) The unique identifier for the payment link whose line items need to be retrieved.
-   **pagination\_ending\_before** (`string`, optional) An object ID that serves as a pagination cursor to fetch the previous page of the list.
-   **fields\_to\_expand** (`array[string]`, optional) A list of fields in the response that should be expanded for more detailed information.
-   **item\_limit** (`integer`, optional) Specifies the maximum number of line items to retrieve, ranging from 1 to 100. Default is 10.
-   **pagination\_starting\_after** (`string`, optional) An object ID used as a cursor to fetch the next page of the list when paginating. Use the ID of the last object from the previous response.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.ListPaymentMethodConfigurations



Retrieve available payment method configurations from Stripe.

**Parameters**

-   **filter\_by\_connect\_application** (`string`, optional) Specify the Connect application ID to filter the payment method configurations by.
-   **pagination\_ending\_before\_id** (`string`, optional) Object ID that defines your place in the list for pagination, used to fetch the previous page.
-   **expand\_fields** (`array[string]`, optional) List of fields in the response that should be expanded. Provide field names as strings in an array.
-   **max\_results** (`integer`, optional) Specify the maximum number of payment method configurations to be returned, ranging from 1 to 100. Defaults to 10 if not specified.
-   **pagination\_starting\_after\_id** (`string`, optional) The object ID to define your place in the list for pagination, used to fetch the next page of results.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrievePaymentMethodConfiguration



Retrieve a specific payment method configuration.

**Parameters**

-   **payment\_method\_configuration\_id** (`string`, required) The unique identifier for the payment method configuration to retrieve.
-   **fields\_to\_expand** (`array[string]`, optional) List of fields in the response to be expanded for more detailed information.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.ListPaymentMethodDomains



Retrieve details of existing payment method domains.

**Parameters**

-   **domain\_name** (`string`, optional) Specify the domain name for the payment method domain object you want to represent.
-   **pagination\_cursor\_ending\_before** (`string`, optional) A cursor ID to fetch the previous page of the payment method domain list in pagination.
-   **fields\_to\_expand** (`array[string]`, optional) List of fields in the response to expand for more detailed information.
-   **limit\_number\_of\_returned\_objects** (`integer`, optional) Specify the number of payment method domains to return, ranging from 1 to 100. Default is 10.
-   **pagination\_cursor\_starting\_after** (`string`, optional) An object ID cursor to fetch the next page in the list.
-   **include\_enabled\_domains** (`boolean`, optional) Include only enabled payment method domains in the results. If false, all domains will be included regardless of status.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetPaymentMethodDomainDetails



Retrieve details of a specific payment method domain.

**Parameters**

-   **payment\_method\_domain\_id** (`string`, required) The unique identifier of the payment method domain to retrieve details for.
-   **fields\_to\_expand** (`array[string]`, optional) A list of fields in the response that should be expanded for additional details.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetTreasuryPaymentMethods



Retrieve a list of PaymentMethods for Treasury flows.

**Parameters**

-   **customer\_id** (`string`, optional) The ID of the customer whose PaymentMethods will be retrieved for Treasury flows. This is used to filter the payment methods specific to a customer.
-   **pagination\_ending\_before** (`string`, optional) An object ID to fetch the previous page of the list in pagination. Use to navigate to earlier records.
-   **expand\_response\_fields** (`array[string]`, optional) Specifies which fields in the payment methods response should be expanded for more details.
-   **result\_limit** (`integer`, optional) The maximum number of payment methods to return, between 1 and 100. Default is 10.
-   **starting\_after\_payment\_method** (`string`, optional) An object ID cursor to paginate through the list of payment methods. Use it to fetch the next page after a given object.
-   **filter\_payment\_method\_type** (`string`, optional) Filter the list based on the payment method type. Use specific payment method values like ‘card’, ‘paypal’, etc., if expecting only one type.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrieveStripePaymentMethod



Retrieve details of a specific Stripe payment method.

**Parameters**

-   **payment\_method\_id** (`string`, required) The unique identifier of the Stripe PaymentMethod to be retrieved. Required for fetching details of a specific payment method.
-   **fields\_to\_expand** (`array[string]`, optional) A list of fields in the response to be expanded for additional details.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetStripePayoutDetails



Retrieve details of a specific Stripe payout.

**Parameters**

-   **payout\_id** (`string`, required) The unique ID of the payout to retrieve details for from Stripe.
-   **fields\_to\_expand** (`array[string]`, optional) List of fields in the payout response to expand for more details.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.DeleteStripePlan



Delete a specified plan from Stripe.

**Parameters**

-   **plan\_id** (`string`, required) The unique identifier of the plan to be deleted in Stripe.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrieveStripePlan



Retrieve details of a specific Stripe plan by ID.

**Parameters**

-   **stripe\_plan\_id** (`string`, required) The unique identifier for the Stripe plan to retrieve details about. This is required to obtain a specific plan’s information.
-   **fields\_to\_expand** (`array[string]`, optional) A list of fields to expand in the response for more detailed information.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.SearchStripePrices



Search for previously created Stripe prices.

**Parameters**

-   **search\_query\_string** (`string`, required) The search query string for prices using Stripe’s Search Query Language. Refer to the documentation for syntax and supported fields.
-   **fields\_to\_expand** (`array[string]`, optional) List of fields in the response that should be expanded.
-   **result\_limit** (`integer`, optional) Specifies the maximum number of price objects to return. Must be between 1 and 100, with a default of 10.
-   **pagination\_cursor** (`string`, optional) Cursor for paginating through results. Omit on first call; use ‘next\_page’ from a prior response for additional results.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrieveStripePrice



Fetches price details using a specific ID from Stripe.

**Parameters**

-   **price\_id** (`string`, required) The unique identifier for the price you want to retrieve from Stripe.
-   **fields\_to\_expand** (`array[string]`, optional) A list of fields in the response that should be expanded to include additional details.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.SearchStripeProducts



Search for previously created products on Stripe.

**Parameters**

-   **search\_query\_string** (`string`, required) The search query string to find products. Refer to Stripe’s Search Query Language for syntax and available fields.
-   **response\_fields\_to\_expand** (`array[string]`, optional) List of specific fields to expand in the response for detailed information. Use field names as strings.
-   **results\_limit** (`integer`, optional) Specifies the maximum number of product results to return, ranging from 1 to 100. Defaults to 10 if not set.
-   **pagination\_cursor** (`string`, optional) A cursor for paginating through the results. Use the ‘next\_page’ value from the previous response for subsequent pages. Do not include this on the first call.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.DeleteStripeProduct



Delete a product from Stripe if eligible.

**Parameters**

-   **product\_id\_to\_delete** (`string`, required) The unique identifier of the product to delete. Ensure the product has no prices or SKUs associated with it.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetProductDetails



Retrieve details of a specific product by ID.

**Parameters**

-   **product\_id** (`string`, required) The unique identifier for the product to retrieve details. Obtainable from product creation requests or product lists.
-   **fields\_to\_expand** (`array[string]`, optional) List of fields in the response to be expanded for more detailed information.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetProductFeatures



Retrieve features for a specific product.

**Parameters**

-   **product\_id** (`string`, required) The unique identifier of the product for which you want to retrieve features. This is a required field.
-   **pagination\_ending\_cursor** (`string`, optional) An object ID that defines your position in the list for pagination, used to fetch the previous page.
-   **fields\_to\_expand** (`array[string]`, optional) A list of fields in the response that should be expanded for additional details.
-   **number\_of\_features\_to\_return** (`integer`, optional) Specifies the number of product features to return. Must be between 1 and 100, with a default of 10.
-   **pagination\_starting\_after\_cursor** (`string`, optional) Cursor for pagination to fetch the next page of product features. Use the object ID from the last item on the previous page.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.DeleteProductFeature



Delete a specific feature from a product.

**Parameters**

-   **feature\_id** (`string`, required) The identifier of the feature to be deleted from the product.
-   **product\_id** (`string`, required) The unique identifier of the product from which the feature is to be deleted. This is required to specify which product’s feature should be removed.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetProductFeatureDetails



Retrieve details of a feature attached to a product.

**Parameters**

-   **product\_feature\_id** (`string`, required) The unique identifier of the product feature to retrieve details for.
-   **product\_id** (`string`, required) The unique identifier of the product associated with the feature.
-   **fields\_to\_expand** (`array[string]`, optional) A list of fields in the response to expand for detailed information.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetPromotionCodeDetails



Retrieve details of a specific promotion code.

**Parameters**

-   **promotion\_code\_id** (`string`, required) The unique identifier of the promotion code to retrieve details for.
-   **fields\_to\_expand** (`array[string]`, optional) A list of fields in the response to be expanded. Provide field names as strings.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrieveQuotesList



Fetches a list of your available quotes.

**Parameters**

-   **customer\_id** (`string`, optional) The ID of the customer to retrieve quotes for.
-   **pagination\_ending\_before\_cursor** (`string`, optional) A string cursor indicating the object ID before which results are returned for pagination purposes. Use it to fetch the previous page of the list.
-   **fields\_to\_expand** (`array[string]`, optional) A list of fields to expand in the response. Each field is specified as a string.
-   **result\_limit** (`integer`, optional) Sets the maximum number of quote objects to retrieve, between 1 and 100. Default is 10.
-   **pagination\_starting\_after** (`string`, optional) Object ID for pagination to fetch the list after the specified item. Use to get the next page.
-   **quote\_status** (`string`, optional) The status of the quote. Possible values are ‘accepted’, ‘canceled’, ‘draft’, or ‘open’.
-   **test\_clock\_id** (`string`, optional) The ID of the test clock to filter quotes. Must be set with the customer parameter.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrieveQuoteById



Fetches quote details using a specified ID.

**Parameters**

-   **quote\_id** (`string`, required) The unique identifier of the quote to retrieve details for.
-   **fields\_to\_expand** (`array[string]`, optional) List of fields in the response to be expanded for additional details.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetUpfrontQuoteLineItems



Retrieve computed upfront line items from a quote.

**Parameters**

-   **quote\_id** (`string`, required) The unique ID of the quote for which to retrieve upfront line items. This ID is required to specify the quote in context.
-   **pagination\_ending\_before\_id** (`string`, optional) A cursor indicating the last object ID to fetch the previous page in a paginated list of upfront line items.
-   **fields\_to\_expand** (`array[string]`, optional) A list of fields to expand in the response for more detailed information. Each entry should be a string representing a field.
-   **max\_line\_items\_to\_return** (`integer`, optional) The maximum number of line items to retrieve, between 1 and 100. Default is 10.
-   **pagination\_starting\_object\_id** (`string`, optional) An object ID used to fetch the next page of results in pagination, such as `obj_foo`.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetQuoteLineItems



Fetch line items from a specified quote.

**Parameters**

-   **quote\_identifier** (`string`, required) The unique identifier of the quote whose line items are to be retrieved.
-   **pagination\_cursor\_ending\_before** (`string`, optional) The object ID to define your place in the list for fetching the previous page.
-   **fields\_to\_expand** (`array[string]`, optional) List of field names to expand in the response for detailed information.
-   **max\_items\_to\_return** (`integer`, optional) Specifies the maximum number of line items to return, ranging from 1 to 100. Defaults to 10 if not specified.
-   **pagination\_starting\_after\_cursor** (`string`, optional) The object ID to define your place in the list for pagination, used to fetch the next page after the specified object.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.DownloadQuotePdf



Download the PDF for a finalized Stripe quote.

**Parameters**

-   **quote\_id** (`string`, required) The unique identifier for the finalized quote to download as a PDF. This ID is required to retrieve the specific quote.
-   **expand\_fields** (`array[string]`, optional) A list of fields in the quote response that should be expanded for additional detail.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrieveEarlyFraudWarningDetails



Retrieve details of an early fraud warning.

**Parameters**

-   **early\_fraud\_warning\_id** (`string`, required) The unique identifier of the early fraud warning to retrieve details for.
-   **fields\_to\_expand** (`array[string]`, optional) List of fields in the response that should be expanded for additional details.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RemoveRadarValueListItem



Remove an item from a Stripe Radar value list.

**Parameters**

-   **radar\_value\_list\_item\_id** (`string`, required) The unique identifier of the ValueListItem to be removed from the Stripe Radar value list.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrieveValueListItem



Retrieve details of a specific ValueListItem in Stripe Radar.

**Parameters**

-   **value\_list\_item\_id** (`string`, required) The unique identifier of the ValueListItem to retrieve from Stripe’s Radar service.
-   **fields\_to\_expand** (`array[string]`, optional) A list of fields in the ValueListItem response to expand for additional details.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.DeleteStripeValueList



Delete a Stripe Radar ValueList and its items.

**Parameters**

-   **value\_list\_id** (`string`, required) The unique identifier of the ValueList to be deleted. Ensure it is not referenced in any rules before deletion.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrieveRadarValuelist



Retrieve details of a specific Radar ValueList.

**Parameters**

-   **identifier\_of\_radar\_valuelist** (`string`, required) The unique identifier of the Radar ValueList to retrieve details for. It is required to fetch the specific ValueList object.
-   **expand\_fields** (`array[string]`, optional) List of fields in the response to expand for additional details.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrieveRefundDetails



Retrieve details of an existing refund.

**Parameters**

-   **refund\_id** (`string`, required) The unique identifier of the refund to retrieve details for.
-   **expand\_fields** (`array[string]`, optional) Specify which fields in the response should be expanded. Provide an array of field paths.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetReportRunDetails



Retrieve details of an existing report run.

**Parameters**

-   **report\_run\_id** (`string`, required) The unique identifier for the report run you want to retrieve details for. This ID is provided by Stripe when the report run is created.
-   **fields\_to\_expand** (`array[string]`, optional) List of fields to expand in the response to include more detailed information.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetStripeReportTypes



Retrieve a comprehensive list of Stripe report types.

**Parameters**

-   **expand\_fields** (`array[string]`, optional) A list of fields in the Stripe report types response to be expanded for more detailed information.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetStripeReportTypeDetails



Retrieve details for a specific Stripe Report Type.

**Parameters**

-   **stripe\_report\_type\_id** (`string`, required) The unique identifier for the Stripe Report Type to retrieve details about.
-   **fields\_to\_expand** (`array[string]`, optional) List of fields in the response to expand for more detailed information.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetReviewDetails



Retrieve details of a specific review on Stripe.

**Parameters**

-   **review\_identifier** (`string`, required) The unique identifier of the review to be retrieved from Stripe. This is a required parameter.
-   **expand\_fields** (`array[string]`, optional) List of fields in the review response to be expanded for detailed information.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrieveSetupIntentDetails



Fetch details of an existing Stripe SetupIntent.

**Parameters**

-   **setup\_intent\_id** (`string`, required) The unique identifier for the SetupIntent to be retrieved.
-   **setup\_intent\_client\_secret** (`string`, optional) The client secret for retrieving SetupIntent using a publishable key. Required for client-side retrieval.
-   **fields\_to\_expand** (`array[string]`, optional) A list of fields to expand in the response, such as nested objects. Each field should be specified as a string.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrieveShippingRateDetails



Retrieve details of a specific shipping rate using its ID.

**Parameters**

-   **shipping\_rate\_id** (`string`, required) The unique identifier for the shipping rate to retrieve details for.
-   **fields\_to\_expand** (`array[string]`, optional) List of fields to expand in the response for more detailed information.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetScheduledQueryRuns



Retrieve a list of scheduled query runs from Stripe.

**Parameters**

-   **pagination\_cursor\_ending\_before** (`string`, optional) A cursor object ID for pagination to fetch the previous page of the list.
-   **fields\_to\_expand** (`array[string]`, optional) A list of fields in the response that should be expanded.
-   **object\_limit** (`integer`, optional) Specify the number of objects to return, between 1 and 100. Default is 10.
-   **pagination\_starting\_after** (`string`, optional) Cursor for pagination, to fetch the next page starting after the specified object ID.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrieveScheduledQueryRunDetails



Fetches details of a Stripe Sigma scheduled query run.

**Parameters**

-   **scheduled\_query\_run\_id** (`string`, required) The unique identifier for the scheduled query run you wish to retrieve details for.
-   **fields\_to\_expand** (`array[string]`, optional) A list of fields in the response that should be expanded for additional detail.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrieveStripeSource



Retrieve updated details of a Stripe source object.

**Parameters**

-   **stripe\_source\_id** (`string`, required) The unique identifier of the Stripe source object to retrieve its current information.
-   **source\_client\_secret** (`string`, optional) The client secret of the source. Required if a publishable key is used to retrieve the source.
-   **fields\_to\_expand** (`array[string]`, optional) List of fields in the response to be expanded for additional details.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrieveSourceMandateNotification



Retrieve details of a specific mandate notification.

**Parameters**

-   **mandate\_notification\_id** (`string`, required) The unique identifier of the mandate notification to retrieve details for.
-   **source\_id** (`string`, required) The unique identifier of the source to retrieve information for. This is required to specify which source’s mandate notification you want to access.
-   **fields\_to\_expand** (`array[string]`, optional) List of fields in the response that should be expanded for additional details.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetSourceTransactions



Retrieve transactions for a specific source.

**Parameters**

-   **source\_id** (`string`, required) The unique identifier of the source to retrieve transactions for. Required to specify the target of the retrieval.
-   **pagination\_ending\_before** (`string`, optional) An object ID for pagination to fetch the previous page of the list. Use the ID of the first object from the current list.
-   **fields\_to\_expand** (`array[string]`, optional) A list of field names in the response that should be expanded for detailed information.
-   **transaction\_limit** (`integer`, optional) Maximum number of transactions to return. Must be between 1 and 100, default is 10.
-   **pagination\_starting\_after** (`string`, optional) An object ID used as a cursor to fetch the next page of the list. Use this to continue listing transactions after a known last object ID.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetStripeSourceTransaction



Retrieve a Stripe source transaction by ID.

**Parameters**

-   **source\_id** (`string`, required) The unique ID of the Stripe source. Use this to specify which source’s transaction to retrieve.
-   **stripe\_source\_transaction\_id** (`string`, required) The unique identifier for the source transaction to retrieve from Stripe. This ID is obtained from previous source creation requests.
-   **fields\_to\_expand** (`array[string]`, optional) An array of strings specifying which fields in the response should be expanded.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetSubscriptionItems



Retrieve subscription items for a subscription.

**Parameters**

-   **subscription\_id** (`string`, required) The unique identifier of the subscription to retrieve its items.
-   **pagination\_ending\_before** (`string`, optional) Object ID for pagination to fetch the previous page of subscription items.
-   **expand\_fields** (`array[string]`, optional) List of fields in the response to be expanded. Specify each field as a string.
-   **max\_items\_to\_return** (`integer`, optional) Specify the number of subscription items to return, ranging from 1 to 100. Defaults to 10.
-   **pagination\_starting\_after** (`string`, optional) A cursor object ID to define your place for pagination, fetching the next page of the list.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrieveSubscriptionItem



Retrieve details of a specific subscription item.

**Parameters**

-   **subscription\_item\_id** (`string`, required) The unique identifier of the subscription item to retrieve details for.
-   **fields\_to\_expand** (`array[string]`, optional) A list of fields in the response to be expanded for detailed information.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrieveSubscriptionSchedule



Get details of an existing subscription schedule by ID.

**Parameters**

-   **subscription\_schedule\_id** (`string`, required) The unique identifier for the subscription schedule to retrieve details for.
-   **fields\_to\_expand\_in\_response** (`array[string]`, optional) A list of fields to expand in the response for additional details.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.SearchStripeSubscriptions



Search previously created Stripe subscriptions.

**Parameters**

-   **search\_query\_string** (`string`, required) The search query string used to filter Stripe subscriptions. Refer to the Stripe Search Query Language documentation for syntax and query fields.
-   **expand\_fields** (`array[string]`, optional) A list of fields in the Stripe subscription response to be expanded. This allows accessing additional data for each subscription object.
-   **result\_limit** (`integer`, optional) Specify the maximum number of subscription results to return, from 1 to 100. Default is 10.
-   **pagination\_cursor** (`string`, optional) Cursor for paginating through results. Omit on first call; use next\_page value from a prior response for subsequent results.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetSubscriptionDetails



Retrieve details of a subscription by its ID.

**Parameters**

-   **subscription\_id** (`string`, required) The ID of the subscription to retrieve details for. It is required to fetch the subscription information.
-   **fields\_to\_expand** (`array[string]`, optional) List of fields in the subscription response to be expanded for detailed information.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RemoveSubscriptionDiscount



Remove the discount from a subscription.

**Parameters**

-   **subscription\_id** (`string`, required) The unique identifier for the subscription from which the discount will be removed.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrieveTaxCalculation



Retrieve a specific tax calculation by its ID.

**Parameters**

-   **tax\_calculation\_id** (`string`, required) The unique identifier for the Tax Calculation object to retrieve.
-   **fields\_to\_expand** (`array[string]`, optional) List of fields to expand in the response. Use to get detailed subfields of tax calculations.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrieveTaxCalculationLineItems



Retrieve line items for a Stripe tax calculation.

**Parameters**

-   **tax\_calculation\_id** (`string`, required) The ID of the tax calculation to retrieve line items for. Ensure that the calculation has not expired.
-   **pagination\_cursor\_ending\_before** (`string`, optional) An object ID to define your place in the list for pagination, used to fetch the previous page.
-   **fields\_to\_expand** (`array[string]`, optional) A list of fields in the response to be expanded. Use this to include additional data in the output.
-   **object\_return\_limit** (`integer`, optional) Specifies the number of objects to return, between 1 and 100. Default is 10.
-   **pagination\_starting\_after\_item\_id** (`string`, optional) An object ID used for pagination to fetch the next page of results.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetTaxRegistrations



Retrieve a list of tax registration objects from Stripe.

**Parameters**

-   **pagination\_ending\_before** (`string`, optional) An object ID used as a cursor to define your position in the list for pagination. Use this to fetch the previous page of objects.
-   **response\_fields\_to\_expand** (`array[string]`, optional) List of fields to be expanded in the response, allowing for detailed information retrieval.
-   **object\_limit** (`integer`, optional) Specifies the number of tax registration objects to return, ranging from 1 to 100. Defaults to 10 if not specified.
-   **pagination\_starting\_after\_object\_id** (`string`, optional) A cursor for pagination. Use the object ID to fetch the next page of the list when applicable.
-   **tax\_registration\_status** (`string`, optional) Specifies the status of the tax registration. Options: active, all, expired, scheduled.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetTaxRegistrationInfo



Retrieve details of a specific tax registration.

**Parameters**

-   **registration\_id** (`string`, required) The unique identifier for the tax registration. Provide this to retrieve specific registration details.
-   **fields\_to\_expand** (`array[string]`, optional) A list of fields in the response that should be expanded to provide more detailed information.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetTaxSettings



Retrieve merchant tax settings in Stripe.

**Parameters**

-   **expand\_fields** (`array[string]`, optional) A list of field names in the response to expand for more detailed information.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrieveTaxTransaction



Retrieve details of a specific tax transaction.

**Parameters**

-   **transaction\_id** (`string`, required) Unique identifier for the tax transaction to retrieve.
-   **expand\_response\_fields** (`array[string]`, optional) A list of fields to expand in the tax transaction response for additional details.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetTransactionLineItems



Retrieve line items for a specified transaction.

**Parameters**

-   **transaction\_id** (`string`, required) The unique identifier for the transaction. Use this to retrieve its line items from Stripe.
-   **pagination\_ending\_id** (`string`, optional) Cursor ID for paginating backwards to fetch the previous page of transaction line items.
-   **expand\_fields** (`array[string]`, optional) Specify which response fields to expand. Provide an array of strings with field names.
-   **number\_of\_items\_to\_return** (`integer`, optional) Specifies the number of line items to return, between 1 and 100. Defaults to 10 if not specified.
-   **pagination\_starting\_after** (`string`, optional) A cursor ID for pagination to fetch the next page of the list. Use the last object’s ID from the current page.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetTaxCodesList



Retrieve all available tax codes for products from Stripe.

**Parameters**

-   **pagination\_cursor\_ending\_before** (`string`, optional) A cursor (object ID) to fetch the previous page of the tax codes list in pagination. Use to define your place in the list when stepping backwards.
-   **fields\_to\_expand** (`array[string]`, optional) Specifies which fields in the tax codes response should be expanded for more detailed information.
-   **object\_return\_limit** (`integer`, optional) Set the maximum number of tax codes to return, ranging from 1 to 100, with a default of 10.
-   **pagination\_starting\_after\_cursor** (`string`, optional) An object ID used as a cursor to fetch the next page of the list. Use it for pagination to continue from the last retrieved item.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetTaxCodeDetails



Retrieve details for a specific tax code by ID.

**Parameters**

-   **tax\_code\_id** (`string`, required) The unique ID of the tax code to retrieve. Use this to fetch specific tax code details from Stripe.
-   **fields\_to\_expand** (`array[string]`, optional) List of fields to be expanded in the response.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.DeleteTaxId



Delete a tax ID from an account or customer.

**Parameters**

-   **tax\_id** (`string`, required) The identifier of the tax ID to be deleted. This should be the specific tax ID string associated with an account or customer in Stripe.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrieveTaxId



Retrieve an account or customer’s tax\_id object.

**Parameters**

-   **tax\_id\_identifier** (`string`, required) The unique identifier for the tax\_id object to be retrieved. This is a required field to specify which tax\_id you want information about.
-   **fields\_to\_expand** (`array[string]`, optional) List of fields in the response that should be expanded for detailed information.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrieveTaxRate



Fetches a tax rate by its ID from Stripe.

**Parameters**

-   **tax\_rate\_id** (`string`, required) The unique identifier for the tax rate to be retrieved from Stripe. This ID is required to fetch the specific tax rate details.
-   **expand\_fields** (`array[string]`, optional) A list of fields to be expanded in the response. This allows you to retrieve additional nested information related to the tax rate.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetTerminalConfigurations



Retrieve a list of terminal Configuration objects.

**Parameters**

-   **pagination\_ending\_before** (`string`, optional) A string cursor for pagination to fetch the previous page, defined by an object ID.
-   **fields\_to\_expand** (`array[string]`, optional) List of fields in the response to expand for additional details.
-   **maximum\_objects\_to\_return** (`integer`, optional) Set the maximum number of terminal Configuration objects to retrieve, ranging from 1 to 100. Default is 10.
-   **pagination\_starting\_after\_id** (`string`, optional) An object ID for pagination, defining the start position for the next page of the list. Use this to continue listing from a specific object.
-   **only\_return\_account\_default\_configurations** (`boolean`, optional) If true, only return the account default configurations; if false, return non-default configurations.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.DeleteTerminalConfiguration



Deletes a terminal configuration.

**Parameters**

-   **configuration\_id\_to\_delete** (`string`, required) The ID of the terminal configuration you want to delete from Stripe.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrieveTerminalConfiguration



Retrieves a terminal configuration object for Stripe.

**Parameters**

-   **configuration\_id** (`string`, required) The unique identifier of the terminal configuration to retrieve.
-   **expand\_fields** (`array[string]`, optional) A list of fields in the terminal configuration response that should be expanded for more details.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetTerminalLocations



Retrieve a list of terminal location objects from Stripe.

**Parameters**

-   **pagination\_ending\_before\_cursor** (`string`, optional) The object ID to define your place in pagination, used to fetch the previous page of the list.
-   **fields\_to\_expand** (`array[string]`, optional) A list of fields to expand in the response for more detailed information.
-   **results\_limit** (`integer`, optional) The maximum number of terminal location objects to return. Acceptable values are between 1 and 100; default is 10.
-   **pagination\_starting\_after** (`string`, optional) A cursor indicating the position in the list to start fetching the next set of terminal locations. Use this with the object ID received at the end of the previous page.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.DeleteTerminalLocation



Deletes a specified terminal location in Stripe.

**Parameters**

-   **location\_identifier** (`string`, required) The unique identifier of the terminal location to delete.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrieveTerminalLocation



Fetches details of a terminal location by ID.

**Parameters**

-   **location\_id** (`string`, required) The unique identifier for the terminal location to retrieve information for.
-   **fields\_to\_expand** (`array[string]`, optional) List of fields in the response to expand for additional details.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetTerminalReaders



Retrieve a list of terminal reader objects.

**Parameters**

-   **filter\_by\_device\_type** (`string`, optional) Specify the type of device to filter terminal readers. Options include: ‘bbpos\_chipper2x’, ‘bbpos\_wisepad3’, ‘bbpos\_wisepos\_e’, ‘mobile\_phone\_reader’, ‘simulated\_stripe\_s700’, ‘simulated\_wisepos\_e’, ‘stripe\_m2’, ‘stripe\_s700’, ‘verifone\_P400’.
-   **pagination\_cursor\_ending\_before** (`string`, optional) A cursor for pagination, used to fetch the previous page based on object ID.
-   **expand\_response\_fields** (`array[string]`, optional) List of fields to expand in the response, specified as strings.
-   **object\_return\_limit** (`integer`, optional) Specifies the maximum number of terminal reader objects to return, ranging from 1 to 100. Default is 10.
-   **filter\_by\_location\_id** (`string`, optional) Specify the location ID to filter readers to a specific location only.
-   **filter\_by\_serial\_number** (`string`, optional) Provide a serial number to filter the list of terminal readers by this specific serial number.
-   **pagination\_start\_object\_id** (`string`, optional) The object ID used as a cursor to define your starting point in the list for pagination, fetching the next page.
-   **filter\_by\_status** (`string`, optional) Filter terminal readers by their status, either ‘offline’ or ‘online’.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.DeleteTerminalReader



Delete a terminal reader from the Stripe account.

**Parameters**

-   **terminal\_reader\_id** (`string`, required) The ID of the terminal reader to be deleted from the Stripe account.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrieveTerminalReader



Retrieve details of a terminal reader.

**Parameters**

-   **terminal\_reader\_id** (`string`, required) The unique identifier for the terminal reader to retrieve. It should be a string value.
-   **fields\_to\_expand** (`array[string]`, optional) A list of fields in the response that should be expanded for more detail.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetTestClocksList



Retrieve a list of your test clocks from Stripe.

**Parameters**

-   **pagination\_cursor\_ending\_before** (`string`, optional) A cursor ID for pagination to fetch the previous page of the list. Use an object ID.
-   **expand\_response\_fields** (`array[string]`, optional) List of fields to expand in the response. Specify fields you want expanded for more details.
-   **number\_of\_objects\_limit** (`integer`, optional) Specify the number of test clocks to return, between 1 and 100, with a default of 10.
-   **pagination\_starting\_after\_cursor** (`string`, optional) An object ID for pagination. Use this ID to fetch the next page of the list of test clocks.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.DeleteTestClock



Deletes a test clock in Stripe’s test environment.

**Parameters**

-   **test\_clock\_id** (`string`, required) The unique identifier of the test clock to be deleted from Stripe’s test environment.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrieveTestClock



Retrieve details of a Stripe test clock.

**Parameters**

-   **test\_clock\_id** (`string`, required) The unique identifier of the test clock to retrieve from Stripe.
-   **expand\_fields** (`array[string]`, optional) A list of strings specifying which fields in the response should be expanded for additional details.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrieveStripeToken



Retrieve details of a Stripe token using its ID.

**Parameters**

-   **stripe\_token\_id** (`string`, required) The ID of the Stripe token you want to retrieve details about.
-   **fields\_to\_expand** (`array[string]`, optional) A list of fields in the response that should be expanded for more detail.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrieveStripeTopupDetails



Retrieve details of a Stripe top-up using its ID.

**Parameters**

-   **topup\_id** (`string`, required) The unique ID of the Stripe top-up you want to retrieve details for.
-   **expand\_fields** (`array[string]`, optional) A list of fields in the response to be expanded. Specify field names as strings.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetTransferReversals



Retrieve reversals of a specific transfer.

**Parameters**

-   **transfer\_id** (`string`, required) The unique identifier of the transfer for which to retrieve reversals.
-   **pagination\_ending\_before** (`string`, optional) An object ID cursor to navigate to the previous page in the list of reversals.
-   **expand\_fields\_in\_response** (`array[string]`, optional) List of response fields to expand in the results for detailed data.
-   **fetch\_limit** (`integer`, optional) Set the maximum number of reversal objects to return, ranging from 1 to 100. Default is 10.
-   **pagination\_start\_cursor** (`string`, optional) The object ID to define your place in the list for pagination. Use this to fetch the next page, starting after the given object ID.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetTransferDetails



Retrieve details of an existing transfer using its ID.

**Parameters**

-   **transfer\_id** (`string`, required) The unique identifier for the transfer you want to retrieve details about. This ID is obtained from a transfer creation request or the transfer list.
-   **fields\_to\_expand** (`array[string]`, optional) A list of fields in the transfer response to expand for more detailed information.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetSpecificTransferReversalDetails



Retrieve details about a specific transfer reversal.

**Parameters**

-   **reversal\_id** (`string`, required) The unique identifier of the transfer reversal to retrieve details for.
-   **transfer\_id** (`string`, required) The unique identifier for the transfer to retrieve reversal details from. This is required to specify which transfer you’re inquiring about.
-   **expand\_fields** (`array[string]`, optional) List of fields in the response to be expanded for detailed information.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetCreditReversals



Retrieve a list of Credit Reversals from Stripe’s Treasury.

**Parameters**

-   **financial\_account\_id** (`string`, required) The ID of the FinancialAccount associated with the CreditReversals to be returned.
-   **pagination\_ending\_before** (`string`, optional) A cursor object ID for pagination to fetch the previous list page.
-   **fields\_to\_expand** (`array[string]`, optional) A list of fields to be expanded in the response for detailed information.
-   **max\_objects\_returned** (`integer`, optional) Sets the maximum number of credit reversals to be returned. Valid range is 1 to 100, defaulting to 10.
-   **filter\_by\_received\_credit\_id** (`string`, optional) Filter Credit Reversals to only include those associated with the specified ReceivedCredit ID.
-   **pagination\_starting\_after\_cursor** (`string`, optional) An object ID used to fetch the next page of the list in a paginated response.
-   **credit\_reversal\_status** (`string`, optional) Filter CreditReversals based on their status. Possible values are: canceled, posted, processing.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetCreditReversalDetails



Retrieve details of a specific CreditReversal using its ID.

**Parameters**

-   **credit\_reversal\_id** (`string`, required) The unique ID of the CreditReversal to retrieve details for. This ID is obtained from the CreditReversal creation request or list.
-   **fields\_to\_expand** (`array[string]`, optional) A list of fields in the response that should be expanded for more detailed information.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetDebitReversalsList



Retrieves a list of debit reversals from Stripe.

**Parameters**

-   **financial\_account\_id** (`string`, required) The ID of the FinancialAccount to retrieve associated debit reversals.
-   **pagination\_ending\_before\_cursor** (`string`, optional) A cursor object ID for pagination. Use this to fetch the previous page of the list.
-   **fields\_to\_expand** (`array[string]`, optional) A list of fields in the response to expand for obtaining additional nested information.
-   **max\_number\_of\_debit\_reversals** (`integer`, optional) The maximum number of debit reversals to return. Must be between 1 and 100. Defaults to 10 if not specified.
-   **filter\_by\_received\_debit\_id** (`string`, optional) The ID of the ReceivedDebit to filter debit reversals by. Only returns reversals for this specific ID.
-   **resolution\_status** (`string`, optional) Filter DebitReversals based on the resolution (‘lost’ or ‘won’).
-   **pagination\_starting\_after\_cursor** (`string`, optional) An object ID that serves as a pagination cursor for fetching the next page of results.
-   **filter\_by\_status** (`string`, optional) Specify the status of DebitReversals to return. Options are: ‘canceled’, ‘completed’, or ‘processing’.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrieveDebitReversal



Retrieve details of a specific debit reversal.

**Parameters**

-   **debit\_reversal\_id** (`string`, required) The unique identifier of the DebitReversal object to be retrieved.
-   **expand\_fields** (`array[string]`, optional) List of fields to expand in the DebitReversal response. Provide an array of field names as strings.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetFinancialAccountDetails



Retrieve details of a specific financial account.

**Parameters**

-   **financial\_account\_id** (`string`, required) The unique identifier of the financial account to be retrieved. This ID is required to fetch the account details.
-   **fields\_to\_expand** (`array[string]`, optional) A list of strings specifying which fields in the financial account details should be expanded in the response.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetFinancialAccountFeatures



Retrieve features of a financial account.

**Parameters**

-   **financial\_account\_id** (`string`, required) The ID of the financial account for which to retrieve feature information. This is required.
-   **expand\_response\_fields** (`array[string]`, optional) A list of fields in the response that should be expanded for more detailed information.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetInboundTransfers



Retrieve inbound transfers for a financial account.

**Parameters**

-   **financial\_account\_id** (`string`, required) The ID of the FinancialAccount to retrieve associated inbound transfers.
-   **pagination\_ending\_before\_id** (`string`, optional) The object ID defining your place in the list to fetch the previous page. Use this for pagination.
-   **expand\_response\_fields** (`array[string]`, optional) List of fields in the response to be expanded for detailed information.
-   **transfer\_limit** (`integer`, optional) Set the maximum number of inbound transfer objects to return, ranging from 1 to 100. Default is 10.
-   **pagination\_starting\_after\_object\_id** (`string`, optional) Cursor for pagination to fetch the next page by using the object ID from the end of the previous result set.
-   **filter\_by\_transfer\_status** (`string`, optional) Filter inbound transfers by their status: ‘processing’, ‘succeeded’, ‘failed’, or ‘canceled’.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrieveInboundTransferDetails



Retrieve details of a specific inbound transfer.

**Parameters**

-   **inbound\_transfer\_id** (`string`, required) The unique identifier of the inbound transfer to retrieve details for.
-   **expand\_fields** (`array[string]`, optional) Specify which fields in the response should be expanded for detailed information. Provide them as a list of strings.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrieveOutboundPaymentDetails



Retrieve details of an existing OutboundPayment by ID.

**Parameters**

-   **outbound\_payment\_id** (`string`, required) The unique identifier of the OutboundPayment to retrieve details for.
-   **fields\_to\_expand** (`array[string]`, optional) List of fields to expand in the response for detailed information.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetOutboundTransfers



Retrieve outbound transfers from a financial account.

**Parameters**

-   **financial\_account\_id** (`string`, required) The ID of the financial account to retrieve outbound transfers from.
-   **pagination\_cursor\_ending\_before** (`string`, optional) Cursor for pagination to fetch the previous page of the outbound transfers list using an object ID.
-   **fields\_to\_expand** (`array[string]`, optional) List of fields in the response to be expanded. Provide field names as strings.
-   **limit\_transfers** (`integer`, optional) The number of outbound transfers to return. Valid range is 1 to 100, default is 10.
-   **pagination\_starting\_after** (`string`, optional) A cursor for pagination to fetch the next page of the list, using an object ID from a previous request.
-   **outbound\_transfer\_status\_filter** (`string`, optional) Filter outbound transfers by status, such as ‘processing’, ‘canceled’, ‘failed’, ‘posted’, or ‘returned’.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetOutboundTransferDetails



Retrieve details of a specific outbound transfer.

**Parameters**

-   **outbound\_transfer\_id** (`string`, required) The unique identifier for the outbound transfer to retrieve details for.
-   **fields\_to\_expand** (`array[string]`, optional) A list of fields in the response to be expanded for more details.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetReceivedCreditDetails



Retrieve details of a specific ReceivedCredit by ID.

**Parameters**

-   **received\_credit\_id** (`string`, required) The unique identifier of the ReceivedCredit to retrieve details for. This ID is required to fetch the specific credit’s information.
-   **fields\_to\_expand** (`array[string]`, optional) A list of fields in the response to expand for additional details.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetReceivedDebits



Retrieve a list of received debits from Stripe Treasury.

**Parameters**

-   **financial\_account\_id** (`string`, required) The ID of the FinancialAccount from which funds were pulled.
-   **pagination\_cursor\_previous\_page** (`string`, optional) A cursor for pagination to fetch the previous page of the list. Use an object ID received in a previous response.
-   **expand\_fields** (`array[string]`, optional) List of fields in the response to expand for more detailed information.
-   **max\_number\_of\_debits** (`integer`, optional) Specify the maximum number of received debits to return. Accepts an integer between 1 and 100, default is 10.
-   **pagination\_starting\_after** (`string`, optional) An object ID for pagination to fetch the next page, starting after this ID.
-   **debit\_status\_filter** (`string`, optional) Filter results by status: ‘succeeded’ or ‘failed’.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrieveReceivedDebitDetails



Retrieve details of a specific ReceivedDebit by ID.

**Parameters**

-   **received\_debit\_id** (`string`, required) The unique ID of the ReceivedDebit to retrieve details for. This ID is required.
-   **fields\_to\_expand** (`array[string]`, optional) List of response fields to expand for detailed information.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrieveTransactionEntry



Fetches details of a specific treasury transaction entry.

**Parameters**

-   **transaction\_entry\_id** (`string`, required) The unique identifier of the treasury transaction entry to retrieve.
-   **fields\_to\_expand** (`array[string]`, optional) An array of field names to include in the response for additional detail.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrieveTreasuryTransactionDetails



Retrieve details of a specific treasury transaction.

**Parameters**

-   **transaction\_id** (`string`, required) The ID of the treasury transaction you want to retrieve details for.
-   **fields\_to\_expand** (`array[string]`, optional) List of fields in the treasury transaction response to be expanded, specified as an array of strings.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.GetStripeWebhookEndpoints



Retrieve a list of your Stripe webhook endpoints.

**Parameters**

-   **pagination\_ending\_before** (`string`, optional) A cursor (object ID) for pagination to fetch the previous page of webhook endpoints.
-   **expand\_fields** (`array[string]`, optional) A list of field names to expand in the response, allowing for detailed data retrieval.
-   **object\_limit** (`integer`, optional) The number of webhook endpoints to return, ranging from 1 to 100. Defaults to 10 if not specified.
-   **pagination\_starting\_after\_id** (`string`, optional) An object ID used for pagination to fetch the next page in a list. Use the last object’s ID from the current list.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.DeleteStripeWebhookEndpoint



Delete a Stripe webhook endpoint by ID.

**Parameters**

-   **webhook\_endpoint\_id** (`string`, required) The unique identifier for the Stripe webhook endpoint you wish to delete. This ID is required to specify which endpoint should be removed from your Stripe configurations.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## StripeApi.RetrieveWebhookEndpoint



Retrieve details of a specified webhook endpoint by ID.

**Parameters**

-   **webhook\_endpoint\_id** (`string`, required) The unique identifier for the Stripe webhook endpoint you want to retrieve.
-   **fields\_to\_expand** (`array[string]`, optional) A list of fields to expand in the response, specified as strings.

**Secrets**

This tool requires the following secrets: `STRIPE_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_stripe_api ``` Learn more](/guides/deployment-hosting.md)

Last updated on February 7, 2026

[Stripe](/en/resources/integrations/payments/stripe.md)
[ZohoBooksApi](/en/resources/integrations/payments/zoho-books-api.md)
